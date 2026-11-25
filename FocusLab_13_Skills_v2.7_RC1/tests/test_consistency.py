"""Dependency-free regression for revised definitions and semantic handoffs.

This suite does not claim full JSON Schema, browser, installed-skill or field QA.
"""
from pathlib import Path
import copy,hashlib,json,re,tempfile,sys,csv
from check_lesson_contract import check_lesson,check_scene_semantics,KINDS
from check_handoff import check_manifest

R=Path(__file__).resolve().parents[1];results=[]
def ck(name,ok):results.append({'test':name,'passed':bool(ok)})
def read(p):return (R/p).read_text(encoding='utf-8')
def load(p):return json.loads(read(p))
registry=load('templates/pipeline_registry.json');skills=sorted((R/'skills').glob('skill*/SKILL.md'))
ck('exactly 13 skill definitions',len(skills)==13)
names=[]
for p in skills:
 s=p.read_text(encoding='utf-8');sid='SKILL'+p.parent.name[-2:];m=re.match(r'^---\n(.*?)\n---',s,re.S);metadata=dict(line.split(': ',1) for line in m[1].splitlines()) if m else {};names.append(metadata.get('name'))
 ck(sid+' portable metadata',set(metadata)=={'name','description'} and bool(re.fullmatch('[a-z0-9-]{1,64}',metadata.get('name',''))) and bool(metadata.get('description')))
 ck(sid+' procedure and dependencies',all(x in s for x in ['FOCUSLAB-V2.4.1','### Thực thi và kiểm tra v2.4.1','EXECUTION_AND_HANDOFF.md','pipeline_registry.json','GUIDED_VISUAL_STANDARD_V2_4.md','DIRECT_LEARNING_STANDARD_V2_3.md','gate_status','## Đầu ra bắt buộc']))
 ck(sid+' bounded document',len(s.splitlines())<500)
 ck(sid+' registry maps exact definition',registry['skills'][sid]['definition']==str(p.relative_to(R)).replace('\\','/') and registry['skills'][sid]['name']==metadata.get('name'))
 declared=[x['path'] for x in registry['skills'][sid]['outputs']]
 ck(sid+' outputs unique/nonempty',bool(declared) and len(declared)==len(set(declared)) and all(x.startswith(p.parent.name[-2:]+'-') for x in declared))
 ck(sid+' referenced policy files exist',all((p.parent/ref).is_file() for ref in re.findall(r'`(\.\./\.\./(?:policy|templates)/[^`\n]+\.(?:md|json|csv))`',s)))
 ck(sid+' consumers later stages',all(c in registry['skills'] and int(c[-2:])>int(sid[-2:]) for c in registry['skills'][sid]['consumers']))
ck('unique skill names',len(set(names))==13)
ck('legacy multitopic alias excluded',all(x['path']!='09-multitopic-scene-contract.json' for s in registry['skills'].values() for x in s['outputs']))
ck('lineage anchored to supplied skills',load('VERSION.json')['lineage']==['USER_SUPPLIED_LATEST_13_SKILLS','2.3','2.4','2.4.1'])
ck('no claim of rerun or installation',load('VERSION.json')['lesson_rerun'] is False and load('VERSION.json')['installed_in_chatgpt'] is False)
schema=load('templates/scene_contract.schema.json')
ck('scene schema and visual registry retain 15 kinds',set(schema['properties']['kind']['enum'])==KINDS==set(load('templates/scene_visual_identity.json')))
ck('review schema requires bounded retry fields',set(['initial_question_ids','retry_map','retry_limit_per_question','progress_policy','summary_policy']).issubset(schema['properties']['review']['required']))
ck('model QA retains 30 criteria',len(list(csv.DictReader(read('templates/skill07_model_qa_checklist.csv').splitlines())))==30)
for p in sorted((R/'fixtures').glob('*.json')):
 if p.name=='output_manifest.example.json':continue
 d=json.loads(p.read_text(encoding='utf-8'));ck(p.name+' semantic validity',all(not check_scene_semantics(s) for s in d.get('scenes',[d])))

lesson=load('fixtures/lesson_handoff.valid.json')
ck('complete lesson semantic handoff valid',not check_lesson(lesson))
def reject(name,change):
 d=copy.deepcopy(lesson);change(d);ck('reject '+name,bool(check_lesson(d)))
reject('duplicate scene ID',lambda d:d['scenes'][-1].update(scene_id=d['scenes'][0]['scene_id']))
reject('cross-topic scene',lambda d:d['scenes'][2].update(topic_id='COOKIE-OTHER'))
reject('dangling next scene',lambda d:d['scenes'][-1].update(next_scene_id='MISSING'))
reject('dangling state dependency',lambda d:d['scenes'][2].update(state_dependency=['MISSING']))
reject('self next edge',lambda d:d['scenes'][-1].update(next_scene_id=d['scenes'][-1]['scene_id']))
reject('lead target mismatch',lambda d:d['scenes'][-2]['lead_in'].update(target_scene_id='MISSING'))
reject('no activity entry',lambda d:d.update(activity_entries=[]))
reject('duplicate activity entry',lambda d:d['activity_entries'].append(copy.deepcopy(d['activity_entries'][0])))
reject('missing reuse reason',lambda d:d['activity_entries'][0].pop('reuse_reason'))
reject('wrong entry cluster',lambda d:d['activity_entries'][0].update(activity_cluster_id='CL-OTHER'))
reject('CORE missing recall',lambda d:d['scenes'][3].update(kind='TEACH',visual_identity='TEACH'))
reject('CORE missing review',lambda d:d['scenes'][-1].update(kind='TEACH',visual_identity='TEACH'))
reject('single review format',lambda d:d['scenes'][-1].update(question_formats=['SINGLE_SELECT']))
reject('invalid review order',lambda d:d['scenes'].reverse())
reject('spoil between recall and review',lambda d:d['scenes'][-2].update(kind='TEACH',visual_identity='TEACH'))
reject('retry missing question',lambda d:d['questions'].pop())
reject('retry same question',lambda d:d['scenes'][-1]['review']['retry_map'].update({'Q-DNS-1':'Q-DNS-1'}))
reject('retry wrong equivalence group',lambda d:d['questions'][1].update(equivalence_group_id='DIFFERENT'))
reject('retry wrong KU',lambda d:d['questions'][1].update(ku_ids=['OTHER']))
reject('retry map missing original',lambda d:d['scenes'][-1]['review']['retry_map'].pop('Q-DNS-1'))
reject('unbounded retry',lambda d:d['scenes'][-1]['review'].update(retry_limit_per_question=999))
reject('premature summary',lambda d:d['scenes'][-1]['review'].update(summary_policy='ON_ENTER'))
reject('locked review nav',lambda d:d['scenes'][-1]['review'].update(answer_required_for_navigation=True))
reject('footer',lambda d:d['scenes'][0]['navigation'].update(footer=True))
reject('navigation guard',lambda d:d['scenes'][0]['navigation'].update(mode='BLOCK'))
reject('hidden core',lambda d:d['scenes'][0]['ui'].update(core_visible=False))
reject('reveal delay',lambda d:d['scenes'][0]['display'].update(delay_ms=2500))
reject('title rerender restart',lambda d:d['scenes'][0]['display']['title_highlight'].update(restart_on_rerender=True))
reject('recall answer leakage',lambda d:d['scenes'][3]['recall'].update(show_answers=True))
reject('recall cue missing',lambda d:d['scenes'][3]['recall']['keywords'][0].pop('cue_asset_id'))
reject('recall alt missing',lambda d:d['scenes'][3]['recall']['keywords'][0].pop('cue_alt_en'))
reject('recall mandatory response',lambda d:d['scenes'][3]['recall'].update(answer_required=True))
reject('duplicate context task',lambda d:d['scenes'][1].update(student_task=d['scenes'][0]['student_task']))
reject('missing model view',lambda d:d['scenes'][2].update(model_view_id=None))
reject('wrong visual identity',lambda d:d['scenes'][2].update(visual_identity='TEACH'))

manifest=load('fixtures/output_manifest.example.json');ck('manifest example structural semantics',not check_manifest(manifest))
def reject_manifest(name,change):
 d=copy.deepcopy(manifest);change(d);ck('reject manifest '+name,bool(check_manifest(d)))
reject_manifest('mixed gate/asset status',lambda d:d.update(gate_status='READY_ASSET'))
reject_manifest('fake field verification',lambda d:d.update(gate_status='VERIFIED_IN_PRACTICE'))
reject_manifest('fake automated pass',lambda d:d.update(gate_status='TESTED_AUTOMATED'))
reject_manifest('missing output hash',lambda d:d['output_files'][0].update(status='READY_ASSET'))
reject_manifest('parent traversal',lambda d:d['output_files'][0].update(path='../secret'))
reject_manifest('Windows absolute path',lambda d:d['output_files'][0].update(path='C:/secret'))
reject_manifest('POSIX absolute path',lambda d:d['output_files'][0].update(path='/secret'))
reject_manifest('backslash traversal',lambda d:d['output_files'][0].update(path='..\\secret'))
reject_manifest('directory as output file',lambda d:d['output_files'][0].update(path='empty/'))
reject_manifest('self hash',lambda d:d['output_files'][0].update(path='output_manifest.json'))
reject_manifest('missing input provenance',lambda d:d['input_refs'][0].pop('sha256'))
reject_manifest('N/A without explanation',lambda d:(d['output_files'][0].update(status='NOT_APPLICABLE'),d['output_files'][0].pop('reason')))
with tempfile.TemporaryDirectory(prefix='focuslab-test-') as tmp:
 p=Path(tmp)/'actual.md';p.write_text('actual file',encoding='utf-8');d=copy.deepcopy(manifest);d['output_files']=[{'path':'actual.md','status':'READY_ASSET','sha256':hashlib.sha256(p.read_bytes()).hexdigest()}]
 ck('manifest verifies actual file bytes',not check_manifest(d,tmp))
 p.write_text('changed',encoding='utf-8');ck('reject stale output hash',bool(check_manifest(d,tmp)))
 p.unlink();ck('reject missing claimed READY_ASSET file',bool(check_manifest(d,tmp)))
 ck('registry detects missing required outputs',bool(check_manifest(d,tmp,registry)))
 d=copy.deepcopy(manifest);d['skill_id']='SKILL07';d['next_skill']='SKILL08';d['output_files']=[];d['applicability']=[]
 for output in registry['skills']['SKILL07']['outputs']:
  path=output['path']
  if output['requirement']=='CONDITIONAL':
   d['applicability'].append({'path':path,'status':'NOT_APPLICABLE','reason':'No model/key/context assets apply to this synthetic handoff.'});continue
  target=Path(tmp)/path;target.write_text('Synthetic report: no applicable model; no model tests executed.',encoding='utf-8');d['output_files'].append({'path':path,'status':'READY_ASSET','sha256':hashlib.sha256(target.read_bytes()).hexdigest()})
 ck('no-model handoff with real reports and conditional N/A',not check_manifest(d,tmp,registry))
 bad=copy.deepcopy(d);bad['applicability'][0].pop('reason');ck('reject N/A conditional folder without reason',bool(check_manifest(bad,tmp,registry)))
 bad=copy.deepcopy(d);bad['output_files'][0].update(status='NOT_APPLICABLE',reason='Not useful');ck('reject N/A for required report',bool(check_manifest(bad,tmp,registry)))

summary={'status':'PASS' if all(x['passed'] for x in results) else 'FAIL','passed':sum(x['passed'] for x in results),'total':len(results),'scope':'definition consistency and semantic contracts; no third-party full JSON Schema/browser/field testing','results':results}
(R/'tests/CONSISTENCY_QA_RESULT.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
print(json.dumps({k:v for k,v in summary.items() if k!='results'},ensure_ascii=False));print(json.dumps([x['test'] for x in results if not x['passed']],ensure_ascii=False));sys.exit(summary['status']!='PASS')
