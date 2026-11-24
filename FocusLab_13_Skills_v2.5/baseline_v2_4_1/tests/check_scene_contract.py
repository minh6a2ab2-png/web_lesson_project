from pathlib import Path
import json,sys,jsonschema
R=Path(__file__).resolve().parents[1]
S=json.loads((R/'templates/scene_contract.schema.json').read_text())
def check_scene(s):
 errors=[e.message for e in jsonschema.Draft202012Validator(S).iter_errors(s)]
 if not isinstance(s,dict):return errors
 if s.get('kind')=='PROBLEM_CONTEXT':
  p=s.get('problem_split',{})
  if p.get('context_evidence_id')==p.get('next_scene_evidence_id'):errors.append('context and observation require distinct evidence')
  if p.get('next_scene_id')!=s.get('next_scene_id') or p.get('shared_activity_id')!=s.get('activity_id'):errors.append('context links mismatch')
 if s.get('visual_identity')!=s.get('kind'):errors.append('visual identity must match kind')
 if s.get('kind')=='LEAD_IN' and s.get('lead_in',{}).get('target_scene_id')!=s.get('next_scene_id'):errors.append('lead-in target mismatch')
 if s.get('kind')=='EXPLORE' and not s.get('model_id'):errors.append('EXPLORE needs model')
 return errors
if __name__=='__main__':
 p=Path(sys.argv[1]) if len(sys.argv)>1 else R/'fixtures/valid_scene.json';d=json.loads(p.read_text());err=[e for s in d.get('scenes',[d]) for e in check_scene(s)];print(json.dumps({'file':str(p),'status':'FAIL' if err else 'PASS','errors':err},ensure_ascii=False));sys.exit(bool(err))
