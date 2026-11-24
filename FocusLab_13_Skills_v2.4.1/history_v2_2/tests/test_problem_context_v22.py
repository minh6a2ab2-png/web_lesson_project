from pathlib import Path
import json,sys,hashlib
import jsonschema
R=Path(__file__).resolve().parents[1]
S=json.loads((R/'templates/scene_contract.schema.json').read_text(encoding='utf8'))
checks=[]
def check(name,result): checks.append({'test':name,'passed':bool(result)})
check('13_skill_definitions',len(list((R/'skills').glob('skill*/SKILL.md')))==13)
check('14_scene_kinds',len(S['properties']['kind']['enum'])==14 and 'PROBLEM_CONTEXT' in S['properties']['kind']['enum'])
check('all_13_mention_context',all('PROBLEM_CONTEXT' in (R/f'skills/skill{i:02d}/SKILL.md').read_text(encoding='utf8') for i in range(1,14)))
check('standard_policy',all((R/p).exists() for p in ['policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md','policy/ONE_TOPIC_MASTER_RULES.md','policy/SCENE_KIND_REFERENCE.md']))
check('one_or_two_option','ONE_SCENE' in (R/'policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md').read_text() and 'TWO_SCENES' in (R/'policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md').read_text())
A=json.loads((R/'fixtures/dns_context_scene.valid.json').read_text());B=json.loads((R/'fixtures/dns_observe_scene.valid.json').read_text())
try:
 jsonschema.Draft202012Validator.check_schema(S)
 jsonschema.validate(A,S);jsonschema.validate(B,S)
 valid=True
except Exception as e:valid=False;print('SCHEMA_ERROR:',e)
check('scene_schema_and_dns_pair_valid',valid)
check('distinct_kinds_and_tasks',A['kind']=='PROBLEM_CONTEXT' and B['kind']=='OBSERVE' and A['student_task']!=B['student_task'])
check('distinct_evidence',A['problem_split']['context_evidence_id']!=A['problem_split']['next_scene_evidence_id'] and A['evidence']!=B['evidence'])
check('linked_next_scene',A['next_scene_id']==B['scene_id'])
check('same_activity',A['activity_id']==B['activity_id']==A['problem_split']['shared_activity_id']=='ACT-DNS-01')
check('two_phase_no_auto_nav',all(2<=x['reveal']['opening_pause_s']<=3 and x['reveal']['auto_advance'] is False and x['reveal']['staggered'] is False for x in [A,B]))
check('context_bilingual',all(A['context_problem'][k] for k in ['title_vi','title_en','setting_vi','setting_en','observed_reality_vi','observed_reality_en','problem_question_vi','problem_question_en']))
check('image_required',bool(A['context_problem']['illustration_asset_ids']))
check('no_dns_answer_spoiler','không' in A['context_problem']['spoiler_boundary'].lower() and 'DNS' in A['context_problem']['spoiler_boundary'])
bad=json.loads((R/'fixtures/invalid_problem_context_FOR_TEST_ONLY.json').read_text())
try:jsonschema.validate(bad,S);reject=False
except jsonschema.ValidationError:reject=True
check('invalid_missing_illustration_rejected',reject)
T=R/'DNS_SKILL01_08_CONTEXT_HANDOFF'
hand=json.loads((T/'08-skill09-handoff.v2_2.json').read_text())
check('handoff_11_activities',len(hand['activities'])==11)
check('only_one_opening_activity',sum(a.get('activity_id')=='ACT-DNS-01' for a in hand['activities'])==1)
check('handoff_two_scene_link',hand['context_problem_addendum']['scene_sequence_provisional']==[A['scene_id'],B['scene_id']])
check('handoff_same_objective',hand['activities'][0]['objective_ids']==['OBJ-DNS-01'])
assets=json.loads((T/'07-context-assets-manifest.json').read_text())['assets']
check('new_asset_spec_only',len(assets)==1 and assets[0]['status']=='SPEC_ONLY' and assets[0]['sha256'] is None)
cues=json.loads((T/'06-scene-opening-cues.v2_2.json').read_text())
check('two_opening_cues_same_activity',cues['cue_slots'][0]['activity_id']==cues['cue_slots'][1]['activity_id']=='ACT-DNS-01' and cues['cue_slots'][0]['proposed_kind']=='PROBLEM_CONTEXT' and cues['cue_slots'][1]['proposed_kind']=='OBSERVE')
check('skills07_model_standard_unchanged',hashlib.sha256((R/'policy/SKILL07_MODEL_DESIGN_STANDARD.md').read_bytes()).hexdigest()==hashlib.sha256((R.parent/'ONE_TOPIC_13_SKILLS_FOCUSLAB_V2_1_2026-11-23/policy/SKILL07_MODEL_DESIGN_STANDARD.md').read_bytes()).hexdigest())
res={'suite':'PROBLEM_CONTEXT v2.2 definition + DNS handoff consistency','checks':len(checks),'passed':sum(x['passed'] for x in checks),'failed':[x for x in checks if not x['passed']],'status':'PASS' if all(x['passed'] for x in checks) else 'FAIL','scope':'Schema/structural/source trace only; no browser lesson or student field testing','details':checks}
(R/'tests/PROBLEM_CONTEXT_V2_2_QA_RESULT.json').write_text(json.dumps(res,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({k:v for k,v in res.items() if k!='details'},ensure_ascii=False,indent=2))
sys.exit(res['status']!='PASS')
