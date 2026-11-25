from pathlib import Path
import json,copy,csv,sys,re,jsonschema
from check_scene_contract import check_scene,S
R=Path(__file__).resolve().parents[1]; results=[]
def ck(n,x):results.append({'test':n,'pass':bool(x)})
skills=sorted((R/'skills').glob('skill*/SKILL.md'));ck('13 active definitions',len(skills)==13)
for p in skills:
 s=p.read_text();ck(p.parent.name+' updated procedure output gate',all(t in s for t in ['FOCUSLAB-V2.4','Direct Learning v2.3 — yêu cầu bắt buộc','DIRECT_LEARNING_STANDARD_V2_3.md','## Đầu ra bắt buộc','Gate v2.4','gate_status','PROBLEM_CONTEXT']) and len(s)>3500)
 ck(p.parent.name+' obsolete delay instructions absent',not re.search(r'2\.5\s*(s|giây)|2–3s|nhịp hai pha|two-phase design|pha 2 hiển thị',s,re.I))
ck('15 scene kinds',len(S['properties']['kind']['enum'])==15)
jsonschema.Draft202012Validator.check_schema(S);ck('valid scene schema',True)
for p in sorted(p for p in (R/'fixtures').glob('*.json') if p.name not in ('output_manifest.example.json',)):
 d=json.loads(p.read_text());ck(p.name,all(not check_scene(s) for s in d.get('scenes',[d])))
s=json.loads((R/'fixtures/valid_scene.json').read_text())
for n,mut in [('delay',lambda x:x['display'].update(delay_ms=2500)),('legacy reveal',lambda x:x.update(reveal={})),('labels',lambda x:x['ui'].update(pedagogical_labels=True)),('reflection',lambda x:x['ui'].update(reflection_forms=True)),('nav guard',lambda x:x['navigation'].update(mode='BLOCK')),('short highlight',lambda x:x['display']['title_highlight'].update(duration_ms=100)),('restart',lambda x:x['display']['title_highlight'].update(restart_on_rerender=True)),('missing view',lambda x:x.update(model_view_id=None)),('missing quiz format',lambda x:x.update(question_intents=['CONFIRMATION']))]:
 a=copy.deepcopy(s);mut(a);ck('reject '+n,bool(check_scene(a)))
r=json.loads((R/'fixtures/dns_recall.valid.json').read_text());r['recall']['answer_required']=True;ck('reject recall forced submission',bool(check_scene(r)))
r=json.loads((R/'fixtures/dns_recall.valid.json').read_text());r['recall']['show_answers']=True;ck('reject recall answer',bool(check_scene(r)))
a,b=[json.loads((R/f'fixtures/dns_model_view_{n:02d}.valid.json').read_text()) for n in [9,10]];ck('shared engine distinct views/tasks',a['model_id']==b['model_id'] and a['model_view_id']!=b['model_view_id'] and a['student_task']!=b['student_task'])
ms=json.loads((R/'templates/model_contract.schema.json').read_text());jsonschema.Draft202012Validator.check_schema(ms)
for p in (R/'templates').glob('model_contract*.example.json'):ck(p.name,not list(jsonschema.Draft202012Validator(ms).iter_errors(json.loads(p.read_text()))))
with (R/'templates/skill07_model_qa_checklist.csv').open(encoding='utf-8-sig') as f:rows=list(csv.DictReader(f))
ck('30 model QA criteria',len(rows)==30 and all(r['status']=='NOT_RUN' for r in rows))
ck('legacy baseline retained',(R/'legacy/13Skills_MT2_FROZEN_ORIGINAL.zip').is_file())
ck('prior artifacts archived',(R/'history_v2_2/DNS_SKILL01_08_CONTEXT_HANDOFF').is_dir())

ck('15 visual identities',set(json.loads((R/'templates/scene_visual_identity.json').read_text()))==set(S['properties']['kind']['enum']))
for n,mut in [('footer',lambda x:x['navigation'].update(footer=True)),('wrong visual identity',lambda x:x.update(visual_identity='LEAD_IN')),('nav style',lambda x:x['navigation'].update(style='FOOTER'))]:
 a=copy.deepcopy(s);mut(a);ck('reject '+n,bool(check_scene(a)))
for name,mut in [('dns_lead.valid.json',lambda x:x['lead_in'].update(target_scene_id='wrong')),('dns_recall.valid.json',lambda x:x['recall']['keywords'][0].pop('cue_asset_id')),('dns_review.valid.json',lambda x:x['review'].update(answer_required_for_navigation=True))]:
 a=json.loads((R/'fixtures'/name).read_text());mut(a);ck('reject invalid '+name,bool(check_scene(a)))

res={'status':'PASS' if all(x['pass'] for x in results) else 'FAIL','passed':sum(x['pass'] for x in results),'total':len(results),'scope':'static definition / schema / fixtures only; browser and field NOT_RUN','results':results};(R/'tests/DEFINITION_QA_RESULT.json').write_text(json.dumps(res,ensure_ascii=False,indent=2));print(json.dumps({k:v for k,v in res.items() if k!='results'}));print([x['test'] for x in results if not x['pass']]);sys.exit(res['status']!='PASS')
