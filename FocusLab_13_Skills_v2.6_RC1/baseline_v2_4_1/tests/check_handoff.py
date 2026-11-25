"""Validate manifest semantics, actual bytes and required output coverage."""
from pathlib import Path,PurePosixPath,PureWindowsPath
import hashlib,json,re,sys

def check_manifest(d,root=None,registry=None):
 if not isinstance(d,dict):return ['manifest must be an object']
 e=[]
 for k in ['run_id','skill_id','version','topic_id','input_refs','output_files','evidence','open_issues','gate_status','next_skill','approval_status','test_status','field_status']:
  if k not in d:e.append('missing '+k)
 if d.get('version')!='2.4.1':e.append('wrong definition version')
 if not re.fullmatch(r'SKILL(0[1-9]|1[0-3])',str(d.get('skill_id',''))):e.append('invalid skill_id')
 if d.get('gate_status') not in ['DRAFT','PROTOTYPE','NEEDS_REVIEW','TESTED_AUTOMATED','VERIFIED_IN_PRACTICE','BLOCKED']:e.append('invalid gate_status')
 if d.get('approval_status') not in ['NOT_REQUESTED','PENDING','USER_APPROVED','REJECTED']:e.append('invalid approval_status')
 for k in ['test_status','field_status']:
  if d.get(k) not in ['NOT_RUN','PASS','FAIL','BLOCKED']:e.append('invalid '+k)
 if d.get('gate_status')=='VERIFIED_IN_PRACTICE' and d.get('field_status')!='PASS':e.append('field proof required')
 if d.get('gate_status')=='TESTED_AUTOMATED' and d.get('test_status')!='PASS':e.append('automated proof required')
 if d.get('gate_status') in ['TESTED_AUTOMATED','VERIFIED_IN_PRACTICE'] and not d.get('evidence'):e.append('evidence required for tested/verified gate')
 if d.get('next_skill') is not None and not re.fullmatch(r'SKILL(0[1-9]|1[0-3])',str(d['next_skill'])):e.append('invalid next skill')
 inputs=d.get('input_refs',[])
 if not inputs:e.append('input refs required')
 for x in inputs:
  if not all(x.get(k) for k in ['path','version','sha256']) or not re.fullmatch('[a-f0-9]{64}',str(x.get('sha256'))):e.append('input version/hash required')
 outputs=d.get('output_files',[])
 if not outputs:e.append('output files required')
 paths=[];statuses={}
 for x in outputs:
  path=x.get('path','');status=x.get('status');paths.append(path);statuses[path]=status
  if not isinstance(path,str) or not path or '\\' in path or PurePosixPath(path).is_absolute() or PureWindowsPath(path).drive or '..' in PurePosixPath(path).parts or path.endswith('/') or path=='output_manifest.json':e.append('unsafe/nonfile/self path '+str(path));continue
  if status not in ['READY_REFERENCE','READY_ASSET','PROTOTYPE','SPEC_ONLY','BLOCKED','NOT_APPLICABLE']:e.append('invalid asset status')
  if status in ['SPEC_ONLY','BLOCKED'] and d.get('gate_status') in ['TESTED_AUTOMATED','VERIFIED_IN_PRACTICE']:e.append('unready output in tested/verified gate')
  if status in ['SPEC_ONLY','BLOCKED','NOT_APPLICABLE'] and not x.get('reason'):e.append('missing reason '+path)
  if status in ['READY_REFERENCE','READY_ASSET','PROTOTYPE']:
   if not re.fullmatch('[a-f0-9]{64}',str(x.get('sha256'))):e.append('missing hash '+path)
   if root is not None:
    target=(Path(root)/path).resolve();base=Path(root).resolve()
    if not target.is_relative_to(base):e.append('path escapes run root');continue
    if not target.is_file():e.append('missing file '+path)
    elif hashlib.sha256(target.read_bytes()).hexdigest()!=x.get('sha256'):e.append('hash mismatch '+path)
 if len(set(paths))!=len(paths):e.append('duplicate output paths')
 decisions={x.get('path'):x for x in d.get('applicability',[])}
 if registry and d.get('skill_id') in registry['skills']:
  for x in registry['skills'][d['skill_id']]['outputs']:
   path=x['path'];matches=[p for p in paths if p.startswith(path)] if path.endswith('/') else [p for p in paths if p==path]
   decision=decisions.get(path,{})
   if not matches and not (x['requirement']=='CONDITIONAL' and decision.get('status')=='NOT_APPLICABLE' and decision.get('reason')):e.append('undeclared output '+path)
   if x['requirement']=='REQUIRED' and any(statuses[p]=='NOT_APPLICABLE' for p in matches):e.append('required output cannot be N/A '+path)
 return e

if __name__=='__main__':
 p=Path(sys.argv[1]);d=json.loads(p.read_text(encoding='utf-8'));registry=json.loads((Path(__file__).resolve().parents[1]/'templates/pipeline_registry.json').read_text(encoding='utf-8'))
 errors=check_manifest(d,p.parent,registry)
 print(json.dumps({'status':'FAIL' if errors else 'PASS','errors':errors},ensure_ascii=False,indent=2));sys.exit(bool(errors))
