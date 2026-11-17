#!/usr/bin/env python3
"""Negative regression tests: a gate that passes valid data must reject known broken data."""
import sys, json, copy, pathlib
sys.path.insert(0,str(pathlib.Path(__file__).parent))
from validate_multitopic import validate,load
root=pathlib.Path(__file__).resolve().parents[1]
p=root/'fixtures/multi_topic_120min'
C=load(p/'session_contract.json');Q=load(p/'teacher_review_bank.json');SQ=load(p/'student_review_bank.json');R=load(p/'recall_bank.json')
results=[]
def run(label,modify,expected,production=False):
    c,q,sq,r=copy.deepcopy((C,Q,SQ,R));modify(c,q,sq,r)
    o=validate(c,q,sq,r,production=production)
    ok=o['status']==expected
    results.append({'case':label,'expected':expected,'observed':o['status'],'passed':ok,'issues':[i['code'] for i in o['errors']]})
run('valid_test_fixture',lambda *_:None,'PASS')
run('production_requires_user_approval',lambda *_:None,'FAIL',True)
run('missing_quiz',lambda c,*_:c['sections'][1].update(review_scene_id='MISSING'),'FAIL')
run('missing_recall',lambda c,*_:c['sections'][0].update(recall_scene_id='MISSING'),'FAIL')
run('wrong_recall_quiz_order',lambda c,*_:c['sections'][0].update(recall_scene_id='D-QUIZ',review_scene_id='D-RECALL'),'FAIL')
run('no_topic_bridge',lambda c,*_:c['bridges'].pop(0),'FAIL')
run('broken_prerequisite_order',lambda c,*_:c['sections'][1].update(prerequisites=['SEC-COOKIE']),'FAIL')
run('time_overshoot',lambda c,*_:c['scenes'][0].update(duration_seconds=780),'FAIL')
run('monotonous_quiz',lambda c,q,*_: [x.update(type='single') for x in q if x['section_id']=='SEC-DNS'],'FAIL')
run('quiz_answer_leak',lambda c,q,sq,*_:sq[0].update(correct_answer='example.org'),'FAIL')
run('recall_answer_leak',lambda c,q,sq,r:r[0].update(reveal_after_attempt=False),'FAIL')
run('toc_skips_without_confirmation',lambda c,*_:c['navigation'].update(toc_guard='NONE'),'FAIL')
run('resume_skips_without_confirmation',lambda c,*_:c['navigation'].update(resume_guard='NONE'),'FAIL')
run('exit_key_in_client',lambda c,*_:c['exit'].update(teacher_key_in_student_payload=True),'FAIL')
run('missing_objective_evidence',lambda c,q,sq,r:[x.update(objective_ids=['OBJ-DNS-A']) for x in r if x['section_id']=='SEC-DNS'],'FAIL')
run('missing_integrated_transfer',lambda c,*_:c['integrated_transfer'].update(objective_ids=['OBJ-DNS-A']),'FAIL')
run('question_in_wrong_section',lambda c,q,*_:q[0].update(section_id='SEC-COOKIE'),'FAIL')
run('scene_cross_section_link',lambda c,*_:next(x for x in c['scenes'] if x['scene_id']=='C-RECALL').update(section_id='SEC-DNS'),'FAIL')
run('unapproved_actual_time',lambda c,*_:c['time_approval'].update(status='UNAPPROVED'),'FAIL')
run('missing_game',lambda c,*_:c.pop('game'),'FAIL')
run('game_only_one_type',lambda c,*_:c['game'].update(question_types=['single']),'FAIL')
run('no_postclass_mindmap',lambda c,*_:c['post_class'].pop('mindmap'),'FAIL')
run('prearranged_order_options',lambda c,q,*_:q[1].update(options=copy.deepcopy(q[1]['correct_answer'])),'FAIL')
run('exit_omits_html',lambda c,*_:next(x for x in c['scenes'] if x['scene_id']=='EXIT').update(objective_ids=['OBJ-DNS-A','OBJ-COOKIE-B']),'FAIL')
run('dangling_topic_section',lambda c,*_:c['topics'][0]['section_ids'].append('SEC-NOT-FOUND'),'FAIL')
report={'cases':results,'passed':sum(x['passed'] for x in results),'total':len(results),'all_pass':all(x['passed'] for x in results)}
(root/'reports/REGRESSION_TEST_RESULTS.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
sys.exit(0 if report['all_pass'] else 2)
