from pathlib import Path
import json,csv,sys,re,hashlib
R=Path(__file__).resolve().parents[1]
errors=[]
def check(v,msg):
 if not v:errors.append(msg)
skills=list((R/'skills').glob('skill[0-9][0-9]/SKILL.md'))
check(len(skills)==13,f'Expected 13 active skill docs, got {len(skills)}')
for n in range(1,14):
 path=R/f'skills/skill{n:02d}/SKILL.md';check(path.exists(),f'{n}: no file')
 if not path.exists():continue
 s=path.read_text()
 for token in (('version: 2026.11-ONE_TOPIC-FOCUSLAB-V2.2',) + ('ONE_TOPIC','## Đầu vào bắt buộc','## Các thao tác nghiệp vụ','## Đầu ra bắt buộc','## Điều kiện nghiệm thu riêng','## Bàn giao và xử lý sai lệch','gate_status','ONE_TOPIC_MASTER_RULES.md')):
  check(token in s,f'{n}: missing {token}')
 check(len(s)>3500,f'{n}: suspiciously short {len(s)}')
 check((R/f'legacy/skill{n:02d}_MT2_ORIGINAL.md').exists(),f'{n}: missing baseline')
orig=(R/'legacy/13Skills_MT2_FROZEN_ORIGINAL.zip')
check(orig.exists(), 'No baseline zip')
check((R/'policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md').exists(),'Missing PROBLEM_CONTEXT design standard')
check(all('PROBLEM_CONTEXT' in (R/f'skills/skill{n:02d}/SKILL.md').read_text() for n in range(1,14)), 'PROBLEM_CONTEXT not integrated across all Skills')
master=(R/'policy/ONE_TOPIC_MASTER_RULES.md').read_text()
for term in ('2.5s','full_reveal_group=ALL','INTRODUCTION','DIAGNOSE','OBSERVE','RECALL','NO_SCROLL','NO_CLIP','READABLE_TEXT','FIXED_NAV','Previous','Next','MODEL_REQUIRED','part_id','prefers-reduced-motion','1280×720','390×844','360×640','640×360','ONE_TOPIC'):
 check(term in master,f'Master policy missing {term}')
kind=(R/'policy/SCENE_KIND_REFERENCE.md').read_text()
schema=json.loads((R/'templates/scene_contract.schema.json').read_text())
check(len(schema['properties']['kind']['enum'])==14,'Schema enum count')
for k in schema['properties']['kind']['enum']:check(k in kind,f'Missing kind {k} in reference')
with open(R/'CHANGE_MATRIX.csv',encoding='utf-8-sig',newline='') as f:rows=list(csv.DictReader(f))
check(len(rows)>=13,'Change matrix missing requirements')
for row in rows:
 for n in row['skills_affected'].split(','):
  check(1<=int(n)<=13,f'Change {row["change_id"]}: bad skill owner')
  s=(R/f'skills/skill{int(n):02d}/SKILL.md').read_text().lower()
  check(len(s)>3500,f'Change {row["change_id"]}: insufficient skill definition')
checks={1:['mechanism_candidate_register','source'],2:['INTRODUCTION','section_id'],3:['DIAGNOSE','INTRODUCTION'],4:['attention_target','MODEL_REQUIRED'],5:['asset_registry','mô hình tương tác'],6:['opening_cue','full reveal'],7:['state','SHA-256'],8:['5512','model_id'],9:['scene.kind','scene_id','navigation guard'],10:['NO_SCROLL','Next','Previous'],11:['100dvh','timer','instant_reveal'],12:['tự tắt','viewport'],13:['RELEASE_PASS','viewport','RELEASE_BLOCKED']}
for k,v in checks.items():
 s=(R/f'skills/skill{k:02d}/SKILL.md').read_text().lower()
 for token in v:check(token.lower() in s,f'Skill{k}: missing specialized token {token}')
result={'suite':'ONE_TOPIC definition static inspection','files':len(skills),'policy_rules':len(rows),'errors':errors,'status':'PASS' if not errors else 'FAIL','meaning':'Only definitions, schema and source-preservation checks; NOT browser or learner pilot validation'}
(R/'tests/DEFINITION_QA_RESULT.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps(result,ensure_ascii=False,indent=2))
sys.exit(1 if errors else 0)
