#!/usr/bin/env python3
from pathlib import Path
import copy,csv,hashlib,json,sys,tempfile,importlib.util,zipfile
from jsonschema import Draft202012Validator
R=Path(__file__).resolve().parents[1];results=[]
def load(s):return json.loads((R/s).read_text(encoding='utf-8-sig'))
def ck(n,v):results.append({'case':n,'passed':bool(v)});print(('PASS ' if v else 'FAIL ')+n)
def semantic(m):
 ns=m['nodes'];by={n['id']:n for n in ns};b=m['bounds'];roots=[n for n in ns if n['tier']==1]
 if len(by)!=len(ns) or not roots or len(roots)==len(ns):return False
 for n in ns:
  if n['width']+2*b['safe_margin']>b['width'] or n['height']+2*b['safe_margin']>b['height']:return False
  if n['tier']>1:
   p=by.get(n['parent_id']);
   if not p or p['tier']!=n['tier']-1:return False
  else:
   x,y=n['anchor']['x'],n['anchor']['y'];w,h=n['width']/2,n['height']/2;s=b['safe_margin']
   if not(s+w<=x<=b['width']-s-w and s+h<=y<=b['height']-s-h):return False
 for i,a in enumerate(roots):
  for z in roots[i+1:]:
   if abs(a['anchor']['x']-z['anchor']['x'])<(a['width']+z['width'])/2 and abs(a['anchor']['y']-z['anchor']['y'])<(a['height']+z['height'])/2:return False
 return True
lock=load('BASE_LOCK.json');ext=load('templates/pipeline_registry_extension.json');lib=load('templates/visual_layout_library.json')
ck('13 definitions and registry entries',len(list((R/'skills').glob('skill*/SKILL.md')))==len(ext['skills'])==13)
for sid,s in ext['skills'].items():
 t=(R/s['definition']).read_text(encoding='utf-8');ck(sid+' output and base lock',all(o['path'] in t for o in s['additional_outputs']) and lock['sha256'][s['definition']] in t and all(x in ext['skills'] for x in s['additional_consumers']))
ck('layout 12+workspace',len(lib['layout_registry'])==13 and len({x['id'] for x in lib['layout_registry']})==13)
ck('8 styles and 6 backgrounds',len(lib['art_directions'])==8 and len(lib['background_families'])==6)
b=load('templates/base-v2.4.1/scene_contract.schema.json');s=load('templates/scene_contract_v2_5.schema.json');Draft202012Validator.check_schema(s)
ck('15 kinds preserved',len(s['properties']['kind']['enum'])==15 and s['properties']['kind']==b['properties']['kind'])
ck('base schema byte verified',hashlib.sha256((R/'templates/base-v2.4.1/scene_contract.schema.json').read_bytes()).hexdigest()==lock['sha256']['templates/scene_contract.schema.json'])
ck('legacy constraints preserved',all(s['properties'][k]==v for k,v in b['properties'].items()) and set(b['required'])<set(s['required']) and s['allOf']==b['allOf'])
sc=load('fixtures/v25_scene.valid.json');sv=Draft202012Validator(s);ck('scene positive',sv.is_valid(sc));bad=copy.deepcopy(sc);del bad['visual_excellence'];ck('missing VE rejected',not sv.is_valid(bad));bad=copy.deepcopy(sc);bad['navigation']['footer']=True;ck('footer rejected',not sv.is_valid(bad));bad=copy.deepcopy(sc);bad['visual_excellence']['workspace_mode']='STATIC_KNOWLEDGE_SPACE';ck('workspace missing map rejected',not sv.is_valid(bad));bad['visual_excellence'].update(layout_id='VISUAL_WORKSPACE',art_direction='VISUAL_WORKSPACE',map_ref='MAP-DEMO');ck('workspace valid',sv.is_valid(bad))
m=load('fixtures/v25_mindmap_config.valid.json');ms=load('templates/mindmap_static_config.schema.json');Draft202012Validator.check_schema(ms);mv=Draft202012Validator(ms);valid=lambda x:mv.is_valid(x) and semantic(x)
ck('map positive',valid(m))
for name,mut in [('idle drift',lambda x:x.update(idle_motion=True)),('wrong colors',lambda x:x['color_by_tier'].update({'2':'RED'})),('duplicate ID',lambda x:x['nodes'][2].update(id='b')),('missing parent',lambda x:x['nodes'][2].update(parent_id='missing')),('wrong tier',lambda x:x['nodes'][2].update(parent_id='r')),('self cycle',lambda x:x['nodes'][1].update(parent_id='b')),('offboard root',lambda x:x['nodes'][0]['anchor'].update(x=0)),('missing asset',lambda x:x['nodes'][2].pop('asset_id')),('oversize',lambda x:x['nodes'][1].update(width=9999))]:
 q=copy.deepcopy(m);mut(q);ck('map reject '+name,not valid(q))
with (R/'templates/aesthetic_rubric_v2_5.csv').open(encoding='utf-8-sig') as f:rub=list(csv.DictReader(f))
ck('rubric weights',len(rub)==9 and sum(int(x['weight_percent']) for x in rub)==100)
ck('rubric blank scores',all(not x['score_0_to_10'] for x in rub))
with (R/'templates/mindmap_qa_checklist.csv').open(encoding='utf-8-sig') as f:qa=list(csv.DictReader(f))
ck('20 test cases honest NOT_RUN',len(qa)==20 and all(x['status']=='NOT_RUN' for x in qa))
for x in load('SOURCE_LEDGER.json')['references']:
 p=R/x['path'];ck('reference hash '+p.name,p.is_file() and hashlib.sha256(p.read_bytes()).hexdigest()==x['sha256'])
# Test registry merge and assembler base verification against isolated mock bytes, not the real baseline.
if (R/'assemble_v25.py').exists():
 spec=importlib.util.spec_from_file_location('assembler',R/'assemble_v25.py');a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)
 original={'version':'2.4.1','skills':{k:{'outputs':[{'path':'original-'+k,'requirement':'REQUIRED','condition':None}],'consumers':[]} for k in ext['skills']}};merged=a.merge_registry(original,ext);ck('merge retains originals',merged['version']=='2.5' and all(len(x['outputs'])==2 and x['outputs'][0]['path'].startswith('original') for x in merged['skills'].values()))
 with tempfile.TemporaryDirectory() as t:
  p=Path(t);(p/'x.txt').write_text('base');h=a.digest(p/'x.txt');(p/'MANIFEST_SHA256.json').write_text(json.dumps({'files':[{'path':'x.txt','sha256':h}]}));fake={'sha256':{'x.txt':h}};ck('assembler mock verify',a.verify_base(p,fake)==1);(p/'x.txt').write_text('changed');rejected=False
  try:a.verify_base(p,fake)
  except ValueError:rejected=True
  ck('assembler rejects modified bytes',rejected)
ck('no production release claim',load('VERSION_V2_5.json')['production_lesson_rerun']=='NOT_RUN')
print('TOTAL',sum(r['passed'] for r in results),len(results));(R/'tests/V25_DEFINITION_QA.json').write_text(json.dumps({'scope':'overlay schema/structure/reference hash + mock merge/verification only; real base merge NOT_RUN; lesson runtime NOT_RUN','results':results},ensure_ascii=False,indent=2)+'\n',encoding='utf-8');sys.exit(0 if all(r['passed'] for r in results) else 1)
