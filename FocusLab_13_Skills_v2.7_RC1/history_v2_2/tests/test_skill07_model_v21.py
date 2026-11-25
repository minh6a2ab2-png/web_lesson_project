from pathlib import Path
import csv,json,sys,hashlib
try:
 import jsonschema
except ImportError:
 print('jsonschema dependency required for schema QA')
 sys.exit(2)
R=Path(__file__).resolve().parents[1]
P=R/'skills/skill07/SKILL.md'
s=P.read_text(encoding='utf8')
std=(R/'policy/SKILL07_MODEL_DESIGN_STANDARD.md').read_text(encoding='utf8')
schema=json.loads((R/'templates/model_contract.schema.json').read_text())
example=json.loads((R/'templates/model_contract.dns.example.json').read_text())
results=[]
def check(name,test):results.append({'test':name,'pass':bool(test)})
check('full_skill07_v2.2_retains_model_standard_v2.1', 'version: 2026.11-ONE_TOPIC-FOCUSLAB-V2.2' in s and len(s)>14000)
check('original_skill07_preserved', (R/'legacy/skill07_MT2_ORIGINAL.md').exists())
check('model_policy_link', '../../policy/SKILL07_MODEL_DESIGN_STANDARD.md' in s)
check('2_layers_independent', 'Hai lớp tách riêng' in s and 'Hiện tất cả ngay' in s)
check('state_machine_contract', all(t in s for t in ['transition(state, event, input)','invariants','Reset','PROTOTYPE','READY_ASSET']))
check('visual_flow_contract', 'nguồn → payload → đích' in s and 'token' in s and 'actor' in s)
check('viewport_model_ui', all(t in s for t in ['1280×720','1366×768','Previous','Next','overflow:hidden']))
check('a11y_and_offline', all(t in s for t in ['prefers-reduced-motion','file://','WCAG 2.2 AA','student bundle']))
check('deliverables', all(t in s for t in ['07-asset-manifest.json','07-test-evidence.json','07-model-qa-checklist.csv','07-media-viewport-spec.md']))
check('standard_complete', len(std)>10000)
with (R/'templates/skill07_model_qa_checklist.csv').open(encoding='utf-8-sig',newline='') as f: rows=list(csv.DictReader(f))
check('30_qa_items',len(rows)==30 and all(r['test_id']==f'M{i:02d}' for i,r in enumerate(rows,1)))
jsonschema.Draft202012Validator.check_schema(schema)
jsonschema.validate(instance=example,schema=schema)
check('schema_and_example_valid',True)
# mutation test: essential property removal must fail
bad=dict(example);bad.pop('model_id')
try:
 jsonschema.validate(instance=bad,schema=schema)
 check('schema_rejects_missing_id',False)
except jsonschema.ValidationError:
 check('schema_rejects_missing_id',True)
res={'suite':'Skill07 v2.1 model definition and contract QA','status':'PASS' if all(x['pass'] for x in results) else 'FAIL','results':results,'scope':'Definition/static only; model runtime and learner pilot not rerun'}
(R/'tests/SKILL07_V2_1_QA_RESULT.json').write_text(json.dumps(res,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps(res,ensure_ascii=False,indent=2))
sys.exit(0 if res['status']=='PASS' else 1)
