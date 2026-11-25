"""Semantic checks for a complete canonical lesson. No third-party packages.

This complements scene_contract.schema.json; it is not a JSON Schema engine.
Use the existing check_scene_contract.py for full per-scene JSON Schema checks
when jsonschema is available. Browser/field tests remain separate.
"""
from pathlib import Path
import json,sys

KINDS={'PROBLEM_CONTEXT','LEAD_IN','OBSERVE','DIAGNOSE','RECOVERY','INTRODUCTION','TEACH','EXPLORE','COMPARE','PRACTISE','RECALL','REVIEW','RECALL_TEACH_BACK','ASSESS_INTRO','ASSESS'}

def check_scene_semantics(s):
 if not isinstance(s,dict):return ['scene must be an object']
 e=[]
 def ck(ok,msg):
  if not ok:e.append(msg)
 for k in ['lesson_id','topic_id','scene_id','kind','objective_id','student_task','opening_cue','layout_mode','viewport_fallback','evidence']:
  ck(isinstance(s.get(k),str) and bool(s.get(k,'').strip()),'missing/empty '+k)
 ck(':' not in s.get('scene_id',''),'scene_id must not encode parts')
 ck(s.get('kind') in KINDS,'unknown kind')
 ck(s.get('visual_identity')==s.get('kind'),'visual identity must match kind')
 ck(s.get('completion_gate')=='NON_BLOCKING','completion must be nonblocking')
 ck('reveal' not in s,'legacy reveal is forbidden')
 d=s.get('display',{});h=d.get('title_highlight',{})
 ck(d.get('mode')=='DIRECT' and d.get('delay_ms')==0 and d.get('auto_advance') is False,'direct display required')
 ck(h.get('duration_ms')==3000 and h.get('cycles') in (1,2) and h.get('restart_on_rerender') is False and h.get('reduced_motion') in ('OFF','STATIC'),'invalid title highlight')
 n=s.get('navigation',{})
 ck(n.get('mode')=='FREE' and n.get('require_skip_reason') is False,'navigation must be free')
 ck(n.get('previous_fixed_bottom_left') is True and n.get('next_fixed_bottom_right') is True and n.get('style')=='FLOATING_FIXED' and n.get('footer') is False and n.get('count_location')=='HEADER_OR_COMPACT','floating navigation required')
 u=s.get('ui',{})
 ck(u.get('pedagogical_labels') is False and u.get('reflection_forms') is False and u.get('core_visible') is True and u.get('glossary_mode')=='INLINE_KEYWORD','invalid learner UI')
 ck(isinstance(s.get('content_blocks'),list) and len(s['content_blocks'])>0,'content blocks required')
 if s.get('model_id'):ck(bool(s.get('model_view_id')) and bool(s.get('model_action')),'model needs view/action')
 if s.get('kind')=='EXPLORE':ck(bool(s.get('model_id')),'EXPLORE needs model')
 if 'CONFIRMATION' in s.get('question_intents',[]):ck(bool(s.get('question_formats')),'confirmation needs formats')
 if s.get('kind')=='PROBLEM_CONTEXT':
  p=s.get('problem_split',{});c=s.get('context_problem',{})
  ck(p.get('mode')=='TWO_SCENES' and bool(p.get('reason')),'context split needs reason')
  ck(p.get('shared_activity_id')==s.get('activity_id') and p.get('next_scene_id')==s.get('next_scene_id'),'context link mismatch')
  ck(bool(p.get('context_evidence_id')) and bool(p.get('next_scene_evidence_id')) and p.get('context_evidence_id')!=p.get('next_scene_evidence_id'),'distinct context evidence required')
  for k in ['title','setting','observed_reality','knowledge_gap','problem_question','next_learning_action']:
   for lang in ['vi','en']:ck(bool(c.get(k+'_'+lang)),'missing context '+k+'_'+lang)
  ck(bool(c.get('illustration_asset_ids')) and bool(c.get('spoiler_boundary')) and bool(c.get('source_status')),'context asset/source/spoiler boundary required')
 if s.get('kind')=='LEAD_IN':
  l=s.get('lead_in',{});ck(bool(l.get('target_scene_id')) and l.get('target_scene_id')==s.get('next_scene_id'),'lead target mismatch')
  ck(all(l.get(k) for k in ['copy_vi','copy_en','illustration_asset_id','no_answer_spoiler']),'lead copy/asset/no spoiler required')
 if s.get('kind')=='RECALL':
  r=s.get('recall',{})
  ck(r.get('advance')=='MANUAL' and r.get('sequence')=='KEYWORDS_THEN_QUESTIONS' and r.get('answer_required') is False and r.get('show_answers') is False,'invalid recall behavior')
  ck(bool(r.get('keywords')) and bool(r.get('questions')),'recall keywords/questions required')
  for k in r.get('keywords',[]):ck(all(k.get(x) for x in ['vi','en','cue_asset_id','cue_alt_vi','cue_alt_en']) and k.get('cue_no_answer') is True,'recall cue/alt/no answer required')
 if s.get('kind')=='REVIEW':
  r=s.get('review',{})
  ck(all(r.get(k) is True for k in ['feedback_after_check','adaptive_retry','summary_after_attempt']) and r.get('answer_required_for_navigation') is False,'invalid review behavior')
  ck(bool(r.get('initial_question_ids')) and len(set(r.get('initial_question_ids',[])))==len(r.get('initial_question_ids',[])),'initial questions must be unique/nonempty')
  ck(bool(r.get('retry_map')) and type(r.get('retry_limit_per_question')) is int and 1<=r.get('retry_limit_per_question',0)<=3,'bounded retries required')
  ck(r.get('progress_policy')=='ORIGINAL_AND_RETRY_SEPARATE' and r.get('summary_policy')=='AFTER_ORIGINAL_ROUND_ATTEMPTED_OR_SKIPPED','review progress/summary policy required')
 return e

def check_lesson(d):
 if not isinstance(d,dict) or not isinstance(d.get('scenes'),list) or not d['scenes']:return ['nonempty lesson scenes required']
 e=[];scenes=d['scenes'];ids=[s.get('scene_id') for s in scenes]
 if any(not x for x in ids) or len(set(ids))!=len(ids):e.append('scene IDs missing or duplicate')
 by={s.get('scene_id'):s for s in scenes};positions={s.get('scene_id'):i for i,s in enumerate(scenes)}
 for s in scenes:
  sid=s.get('scene_id');e.extend(sid+': '+x for x in check_scene_semantics(s))
  if s.get('lesson_id')!=d.get('lesson_id') or s.get('topic_id')!=d.get('topic_id'):e.append(str(sid)+': lesson/topic mismatch')
  refs=[s.get('next_scene_id')]+s.get('state_dependency',[])
  if s.get('kind')=='LEAD_IN':refs.append(s.get('lead_in',{}).get('target_scene_id'))
  for ref in refs:
   if ref is not None and ref not in by:e.append(str(sid)+': dangling scene reference '+str(ref))
  if s.get('next_scene_id')==sid:e.append(str(sid)+': self next edge')
  if s.get('kind')=='PROBLEM_CONTEXT' and s.get('next_scene_id') in by:
   b=by[s['next_scene_id']]
   if s.get('student_task')==b.get('student_task') or s.get('evidence')==b.get('evidence'):e.append(str(sid)+': redundant context split')
 for sec in d.get('sections',[]):
  if not sec.get('core'):continue
  subset=[s for s in scenes if s.get('section_id')==sec['section_id']]
  recalls=[s for s in subset if s.get('kind')=='RECALL'];reviews=[s for s in subset if s.get('kind')=='REVIEW']
  if not recalls or not reviews:e.append(sec['section_id']+': CORE needs recall and review');continue
  if min(positions[s['scene_id']] for s in reviews)<max(positions[s['scene_id']] for s in recalls):e.append(sec['section_id']+': review precedes recall')
  formats={f for s in reviews for f in s.get('question_formats',[])}
  if len(formats)<2:e.append(sec['section_id']+': CORE needs two suitable review formats or approved exception')
  start=max(positions[s['scene_id']] for s in recalls);end=min(positions[s['scene_id']] for s in reviews)
  if any(s.get('kind') in ('TEACH','INTRODUCTION') or s.get('answer_summary') for s in scenes[start+1:end]):e.append(sec['section_id']+': answer content between recall and review')
 if not d.get('sections'):e.append('sections required for CORE coverage')
 entries=d.get('activity_entries',[]);clusters={s.get('activity_cluster_id') for s in scenes if s.get('activity_cluster_id')}
 for cluster in clusters:
  if sum(x.get('activity_cluster_id')==cluster for x in entries)!=1:e.append(str(cluster)+': exactly one activity entry required')
 for x in entries:
  a=by.get(x.get('entry_scene_id'));b=by.get(x.get('target_scene_id'))
  if not a or not b:e.append('entry has dangling target');continue
  if x.get('activity_cluster_id') not in clusters:e.append('entry references unknown cluster')
  if a.get('next_scene_id')!=b.get('scene_id'):e.append('entry must lead directly to target')
  if a.get('activity_cluster_id')!=x.get('activity_cluster_id') or b.get('activity_cluster_id')!=x.get('activity_cluster_id'):e.append('entry/target cluster mismatch')
  if x.get('mode') not in ('NEW','REUSE') or (x.get('mode')=='REUSE' and not x.get('reuse_reason')):e.append('entry reuse decision/reason missing')
  if a.get('kind') not in ('LEAD_IN','PROBLEM_CONTEXT','ASSESS_INTRO'):e.append('entry kind unsupported; document a transition exception')
 questions=d.get('questions',[]);qby={q.get('question_id'):q for q in questions}
 if len(qby)!=len(questions):e.append('question IDs must be unique')
 for s in scenes:
  if s.get('kind')!='REVIEW':continue
  r=s.get('review',{});initial=r.get('initial_question_ids',[]);retry=r.get('retry_map',{})
  if set(retry)!=set(initial):e.append('retry map must cover every original question')
  for a,b in retry.items():
   if a not in qby or b not in qby:e.append('retry question missing');continue
   qa,qb=qby[a],qby[b]
   if a==b or b in initial or qa.get('equivalence_group_id')!=qb.get('equivalence_group_id') or not qa.get('equivalence_group_id') or set(qa.get('ku_ids',[]))!=set(qb.get('ku_ids',[])) or not qa.get('ku_ids'):e.append('retry must be distinct with same equivalence group/KU')
 return e

if __name__=='__main__':
 d=json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'));errors=check_lesson(d)
 print(json.dumps({'status':'FAIL' if errors else 'PASS','scope':'semantic lesson validation only','errors':errors},ensure_ascii=False,indent=2));sys.exit(bool(errors))
