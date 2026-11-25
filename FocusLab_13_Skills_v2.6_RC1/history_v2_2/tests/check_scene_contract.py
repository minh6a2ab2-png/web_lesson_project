"""Dependency-free structural/semantic subset checker for ONE_TOPIC scene contract. Does not claim full JSON Schema compliance."""
from pathlib import Path
import sys,json
R=Path(__file__).resolve().parents[1]
SCHEMA=json.loads((R/'templates/scene_contract.schema.json').read_text())
ALLOWED=set(SCHEMA['properties']['kind']['enum'])
def check_scene(scene):
 errors=[]
 if not isinstance(scene,dict):return ['Scene must be object']
 for key in SCHEMA['required']:
  if key not in scene:errors.append(f'missing {key}')
 if errors:return errors
 if scene['kind'] not in ALLOWED:errors.append('kind invalid')
 if ':' in scene['scene_id']:errors.append('sub-page/part_id forbidden')
 if not scene.get('topic_id') or not scene.get('objective_id'):errors.append('missing topic/objective')
 r=scene['reveal'];expected={'full_reveal_group':'ALL','instant_reveal':True,'auto_advance':False,'staggered':False}
 if not isinstance(r,dict):errors.append('reveal invalid')
 else:
  for k,v in expected.items():
   if r.get(k)!=v:errors.append(f'reveal.{k} must be {v}')
  if not isinstance(r.get('opening_pause_s'),(float,int)) or not 2<=r['opening_pause_s']<=3:errors.append('opening_pause_s outside 2–3')
 if not isinstance(scene['attention_plan'],dict) or not scene['attention_plan'].get('primary_focus_target'):errors.append('missing focus target')
 if not scene['content_blocks']:errors.append('content blocks empty')
 if not scene.get('viewport_fallback'):errors.append('missing viewport fallback')
 if scene['kind']=='PROBLEM_CONTEXT':
  cp=scene.get('context_problem') or {}
  if not isinstance(cp,dict) or any(not cp.get(k) for k in ['title_vi','title_en','setting_vi','setting_en','observed_reality_vi','observed_reality_en','knowledge_gap_vi','knowledge_gap_en','problem_question_vi','problem_question_en','next_learning_action_vi','next_learning_action_en','source_status','spoiler_boundary']):errors.append('incomplete bilingual context_problem')
  if not cp.get('illustration_asset_ids'):errors.append('context illustration required')
  ps=scene.get('problem_split') or {}
  if ps.get('mode')!='TWO_SCENES':errors.append('context scene must reference a genuinely distinct second scene')
  if not all(ps.get(k) for k in ['reason','shared_activity_id','next_scene_id','context_evidence_id','next_scene_evidence_id']):errors.append('incomplete problem split')
  if ps.get('context_evidence_id')==ps.get('next_scene_evidence_id'):errors.append('duplicate context and followup evidence')
  if ps.get('next_scene_id')!=scene.get('next_scene_id'):errors.append('next scene link mismatch')
  if ps.get('shared_activity_id')!=scene.get('activity_id'):errors.append('activity link mismatch')
 if scene['kind']=='EXPLORE' and not scene.get('model_id'):errors.append('EXPLORE requires model_id')
 nav=scene.get('navigation',{})
 if nav:
  for k in ('previous_fixed_bottom_left','next_fixed_bottom_right','guard_unified'):
   if nav.get(k) is not True: errors.append(f'navigation.{k} must true')
 return errors
if __name__=='__main__':
 path=Path(sys.argv[1]) if len(sys.argv)>1 else R/'fixtures/valid_scene.json'
 val=json.loads(path.read_text());errors=check_scene(val)
 print(json.dumps({'file':str(path),'status':'PASS' if not errors else 'FAIL','errors':errors},ensure_ascii=False,indent=2));sys.exit(bool(errors))
