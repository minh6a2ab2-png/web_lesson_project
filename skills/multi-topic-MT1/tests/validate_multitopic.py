#!/usr/bin/env python3
"""Validator for a multi-topic one-session contract. Python standard library only.
Static schema/pedagogy gates; not browser testing or a field trial.
"""
import argparse, collections, json, pathlib, sys

SENSITIVE_KEYS = {'correct_answer','answer','is_correct','teacher_key','rubric_secret','exit_key','solution'}

def validate(contract, teacher_questions, student_questions, cues, *, production=False):
    errors=[]
    def fail(code, info=''): errors.append({'code':code,'detail':str(info)})
    sections=contract.get('sections') or []
    topics=contract.get('topics') or []
    scenes=contract.get('scenes') or []
    topic_map={t['topic_id']:t for t in topics}
    sec_map={s['section_id']:s for s in sections}
    scene_map={s['scene_id']:s for s in scenes}
    seq=[x.get('scene_id') for x in scenes]
    ix={n:i for i,n in enumerate(seq)}
    qmap={q['question_id']:q for q in teacher_questions}
    sqm={q['question_id']:q for q in student_questions}
    cmap={c['cue_id']:c for c in cues}
    ids=lambda objs,key: [o.get(key) for o in objs]
    if len(set(ids(topics,'topic_id')))!=len(topics):fail('DUP_TOPIC_ID')
    if len(set(ids(sections,'section_id')))!=len(sections):fail('DUP_SECTION_ID')
    if len(set(seq))!=len(seq):fail('DUP_SCENE_ID')
    if len(set(ids(teacher_questions,'question_id')))!=len(teacher_questions):fail('DUP_QUESTION_ID')
    if len(set(ids(cues,'cue_id')))!=len(cues):fail('DUP_CUE_ID')
    if not contract.get('session_id'):fail('MISSING_SESSION_ID')
    if len(topics)<1:fail('NO_TOPICS')
    for t in topics:
        for sid in t.get('section_ids',[]):
            if sid not in sec_map:fail('DANGLING_SECTION_FROM_TOPIC',f"{t['topic_id']}:{sid}")
            elif sec_map[sid].get('topic_id')!=t['topic_id']:fail('TOPIC_REVERSE_LINK',sid)
    if len([s for s in sections if s.get('kind')=='CORE_LEARNING'])<1:fail('NO_CORE_SECTIONS')
    if seq!=contract.get('navigation',{}).get('default_path',[]):fail('DEFAULT_PATH_MISMATCH')
    if contract.get('navigation',{}).get('toc_guard')!='SAME_AS_NEXT':fail('TOC_BYPASS')
    if contract.get('navigation',{}).get('resume_guard')!='SAME_AS_NEXT':fail('RESUME_BYPASS')
    if contract.get('navigation',{}).get('skip_policy')!='CONFIRM_AND_RECORD_SKIPPED':fail('UNACKNOWLEDGED_SKIP')
    game=contract.get('game',{})
    if game.get('scene_id') not in ix:fail('MISSING_GAME')
    elif game.get('position') not in ('opening','closing'):fail('GAME_POSITION_INVALID')
    elif (game.get('position')=='opening' and ix[game['scene_id']]!=0) or (game.get('position')=='closing' and ix[game['scene_id']]!=len(seq)-1):fail('GAME_POSITION_CONFLICT')
    if len(set(game.get('question_types') or []))<2:fail('GAME_NOT_VARIANT')
    if game.get('not_section_quiz') is not True:fail('GAME_REPLACES_SECTION_QUIZ')
    if not all(contract.get('post_class',{}).get(x) for x in ['mindmap','flashcards','teach_back']):fail('POST_CLASS_RETRIEVAL_MISSING')
    if contract.get('student_payload_has_answers') is not False:fail('ANSWER_LEAK_DECLARATION')
    if contract.get('exit',{}).get('teacher_key_in_student_payload') is not False:fail('EXIT_KEY_LEAK')
    if contract.get('exit',{}).get('auto_mastery') is not False:fail('EXIT_AUTOMASTERY')
    if contract.get('learning_evidence',{}).get('visited_is_mastered') is not False:fail('VISIT_AUTOMASTERY')
    for sq in student_questions:
        keys=set(sq.keys())
        if keys & SENSITIVE_KEYS: fail('STUDENT_BANK_LEAK',f"{sq['question_id']}: {keys&SENSITIVE_KEYS}")
    if set(qmap)!=set(sqm):fail('QUESTION_BANK_ID_MISMATCH')
    for q in teacher_questions:
        if q.get('type')=='order' and q.get('options')==q.get('correct_answer'):
            fail('ORDER_ANSWER_PREARRANGED',q['question_id'])
        if q.get('type')=='match':
            opts=q.get('options',{})
            if not isinstance(opts,dict) or 'left' not in opts or 'right' not in opts or (set(opts['left'])!=set(q.get('correct_answer',{}))):
                fail('MALFORMED_MATCH_OPTIONS',q['question_id'])
    for s in sections:
        sid=s['section_id']
        if s.get('topic_id') not in topic_map:fail('UNKNOWN_TOPIC',sid)
        elif sid not in topic_map[s['topic_id']].get('section_ids',[]):fail('TOPIC_SECTION_LINK',sid)
        if s.get('kind')!='CORE_LEARNING':continue
        teach=s.get('teach_scene_ids') or []
        rr=[s.get('recall_scene_id'),s.get('review_scene_id')]
        missing=[z for z in teach+rr if z not in scene_map]
        if missing:fail('MISSING_CORE_SCENE',f'{sid}: {missing}');continue
        if not teach:fail('NO_TEACH',sid);continue
        if any(scene_map[z].get('section_id')!=sid for z in teach+rr):fail('CROSS_SECTION_MISLINK',sid)
        if any(ix[z]>=ix[rr[0]] for z in teach) or ix[rr[0]]>=ix[rr[1]]:fail('RECALL_QUIZ_ORDER',sid)
        if scene_map[rr[0]].get('role')!='ACTIVE_RECALL':fail('RECALL_ROLE',sid)
        if scene_map[rr[1]].get('role')!='REVIEW_QUIZ':fail('REVIEW_ROLE',sid)
        if ix[rr[1]]!=ix[rr[0]]+1:fail('RECALL_REVIEW_NOT_ADJACENT',sid)
        if ix[rr[1]]!=max(ix[z] for z in teach+rr):fail('NOT_AT_END_OF_SECTION',sid)
        cids=s.get('recall_cue_ids',[]);qids=s.get('review_question_ids',[])
        if not 2<=len(cids)<=4:fail('RECALL_CUE_COUNT',f'{sid}: {len(cids)}')
        if not 2<=len(qids)<=4:fail('QUIZ_COUNT',f'{sid}: {len(qids)}')
        if set(cids)-set(cmap):fail('RECALL_CUE_MISSING',f'{sid}: {set(cids)-set(cmap)}')
        if set(qids)-set(qmap):fail('QUIZ_QUESTION_MISSING',f'{sid}: {set(qids)-set(qmap)}')
        if len([qmap[q].get('type') for q in qids if q in qmap and qmap[q].get('type')])>0 and len({qmap[q].get('type') for q in qids if q in qmap})<2:fail('QUIZ_MONOTONOUS',sid)
        for cid in cids:
            if cid in cmap:
                c=cmap[cid]
                if c.get('section_id')!=sid:fail('CUE_WRONG_SECTION',cid)
                if c.get('reveal_after_attempt') is not True:fail('RECALL_ANSWER_LEAK',cid)
        for qid in qids:
            if qid in qmap:
                q=qmap[qid]
                if q.get('section_id')!=sid:fail('QUIZ_WRONG_SECTION',qid)
                if q.get('student_answer_visible_before_attempt') is not False:fail('QUIZ_ANSWER_LEAK',qid)
                if q.get('retry_policy')!='HINT_BEFORE_REVEAL':fail('NO_RETRY_SCAFFOLD',qid)
        dur=sum(scene_map[z]['duration_seconds'] for z in teach+rr)
        if dur!=s.get('duration_seconds'):fail('SECTION_TIME_MISMATCH',f'{sid}: {dur} vs {s.get("duration_seconds")}')
        for obj in s.get('objective_ids') or []:
            if not any(obj in scene_map[z].get('objective_ids',[]) for z in teach):fail('OBJECTIVE_UNTAUGHT',f'{sid}/{obj}')
            if not any(obj in cmap[c].get('objective_ids',[]) for c in cids if c in cmap):fail('OBJECTIVE_UNRECALLED',f'{sid}/{obj}')
            if not any(obj in qmap[q].get('objective_ids',[]) for q in qids if q in qmap):fail('OBJECTIVE_UNQUIZZED',f'{sid}/{obj}')
        for pred in s.get('prerequisites') or []:
            if pred not in sec_map:fail('UNKNOWN_PREREQ',f'{sid}->{pred}')
            elif pred==sid:fail('SELF_PREREQ',sid)
            else:
                predend=ix.get(sec_map[pred].get('review_scene_id'),1_000_000)
                currstart=min(ix.get(z,1_000_000) for z in teach)
                if predend>=currstart:fail('PREREQ_ORDER',f'{pred} before {sid}')
    if len([s for s in sections if s.get('kind')=='CORE_LEARNING'])>1:
        consecutive=[s for s in sections if s.get('kind')=='CORE_LEARNING']
        bridges=contract.get('bridges') or []
        for before,after in zip(consecutive,consecutive[1:]):
            matching=[b for b in bridges if b.get('from_section_id')==before['section_id'] and b.get('to_section_id')==after['section_id']]
            if not matching:fail('MISSING_TOPIC_BRIDGE',f"{before['section_id']} → {after['section_id']}")
            else:
                b=matching[0]
                if not b.get('prior_knowledge') or not b.get('next_question'):fail('EMPTY_BRIDGE',b.get('scene_id'))
                bid=b.get('scene_id')
                if bid not in ix: fail('BRIDGE_SCENE_MISSING',bid)
                else:
                    if before.get('review_scene_id') not in ix or any(z not in ix for z in after.get('teach_scene_ids',[])): fail('BRIDGE_ENDPOINT_MISSING',bid)
                    elif not ix[before['review_scene_id']]<ix[bid]<min(ix[z] for z in after['teach_scene_ids']): fail('BRIDGE_WRONG_POSITION',bid)
    transfer=contract.get('integrated_transfer',{})
    if transfer.get('scene_id') not in scene_map:fail('NO_INTEGRATED_TRANSFER_SCENE')
    else:
        original={s['section_id']:set(s.get('objective_ids') or []) for s in sections if s.get('kind')=='CORE_LEARNING'}
        covered=set(transfer.get('objective_ids') or [])
        if sum(bool(objs & covered) for objs in original.values())<max(1,len(original)):
            fail('CROSS_TOPIC_TRANSFER_MISSING_OBJECTIVES')
    if contract.get('exit',{}).get('scene_id') not in scene_map:fail('NO_EXIT_SCENE')
    elif transfer.get('scene_id') in ix and ix[transfer['scene_id']] >= ix[contract['exit']['scene_id']]:fail('EXIT_BEFORE_INTEGRATION')
    if contract.get('exit',{}).get('scene_id') in scene_map:
        exit_objs=set(scene_map[contract['exit']['scene_id']].get('objective_ids') or [])
        if any(not (exit_objs & set(s.get('objective_ids') or [])) for s in sections if s.get('kind')=='CORE_LEARNING'):
            fail('EXIT_MISSING_ONE_TOPIC')
    total=sum(s.get('duration_seconds') or 0 for s in scenes)
    if total!=contract.get('duration_seconds'):fail('SESSION_TIME_MISMATCH',f'{total} vs {contract.get("duration_seconds")}')
    for s in scenes:
        if not isinstance(s.get('duration_seconds'),int) or s['duration_seconds']<=0:fail('SCENE_TIME_INVALID',s.get('scene_id'))
    status=contract.get('time_approval',{}).get('status')
    if status not in ('USER_APPROVED','DEMO_APPROVED_FOR_TEST_ONLY'):fail('TIME_APPROVAL_MISSING')
    if production and status!='USER_APPROVED':fail('USER_TIME_APPROVAL_REQUIRED')
    if production and not contract.get('time_approval',{}).get('approval_record_id'):fail('USER_APPROVAL_EVIDENCE_REQUIRED')
    if contract.get('time_approval',{}).get('approved_seconds')!=total:fail('TIME_APPROVAL_CONFLICT')
    return {'status':'PASS' if not errors else 'FAIL', 'production':production, 'section_count':len(sections),'topic_count':len(topics),'scene_count':len(scenes),'duration_seconds':total, 'questions':len(teacher_questions),'recall_cues':len(cues),'errors':errors}


def load(path):return json.load(open(path,encoding='utf-8'))

def main():
    a=argparse.ArgumentParser();a.add_argument('--contract',required=True);a.add_argument('--review',required=True);a.add_argument('--student-review',required=True);a.add_argument('--recall',required=True);a.add_argument('--production',action='store_true');a.add_argument('--out');args=a.parse_args()
    result=validate(load(args.contract),load(args.review),load(args.student_review),load(args.recall),production=args.production)
    msg=json.dumps(result,ensure_ascii=False,indent=2)
    if args.out:pathlib.Path(args.out).write_text(msg+'\n',encoding='utf-8')
    print(msg)
    sys.exit(0 if result['status']=='PASS' else 2)
if __name__=='__main__':main()
