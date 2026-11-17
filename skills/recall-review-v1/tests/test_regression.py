#!/usr/bin/env python3
from pathlib import Path
import json,sys,copy
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
from validate_section_reinforcement import validate,parse_js_literal
src=Path(__file__).resolve().parents[1]/'fixtures'
new=json.loads((src/'cookies_30_contract.json').read_text())
old=json.loads((src/'cookies_25_contract.json').read_text())
review=parse_js_literal(src/'cookies_30_review_bank.js','REVIEW_BANK')
recall=parse_js_literal(src/'cookies_30_app_with_recall_bank.js','RECALL_BANK')
sec=['ACT01','ACT02','ACT03','ACT04']
checks={}
positive=validate(new,review,recall,sec)
checks['30_scenes_has_pairs']=positive['status'].startswith('STRUCTURAL_PASS')
checks['30_has_four_pairs']=all(len(x['recall_ids'])==len(x['review_ids'])==1 for x in positive['sections'])
checks['30_has_13_questions']=sum(x['question_count'] for x in positive['sections'])==13
checks['30_has_5_question_types']=len(set(t for x in positive['sections'] for t in x['question_modes']))==5
strict=validate(new,review,recall,sec,strict=True)
checks['strict_blocks_missing_stable_ids_and_time_approval']=strict['status']=='FAIL' and {'QUESTION_ID_MISSING','CUE_ID_MISSING','TIME_APPROVAL_REQUIRED'} <= {x['code'] for x in strict['issues']}
normalized_review=parse_js_literal(src/'cookies_30_review_bank_normalized.js','REVIEW_BANK')
normalized_recall=parse_js_literal(src/'cookies_30_recall_bank_normalized.js','RECALL_BANK')
approved=copy.deepcopy(new)
approved['time_change_approval']={'status':'APPROVED','approval_record_id':'TEST_FIXTURE_ONLY_NOT_REAL_APPROVAL'}
checks['strict_succeeds_only_for_normalized_fixture_with_test_approval']=validate(approved,normalized_review,normalized_recall,sec,strict=True)['status']=='STRUCTURAL_PASS'
checks['25_missing_quiz_must_fail']=validate(old,review,recall,sec)['status']=='FAIL'
missing=copy.deepcopy(new);missing['scenes']=[x for x in missing['scenes'] if x['scene_id']!='A2-07']
checks['deleting_review_must_fail']=validate(missing,review,recall,sec)['status']=='FAIL'
wrong=copy.deepcopy(new);r=[x for x in wrong['scenes'] if x['scene_id']=='A3-04'][0];i=wrong['scenes'].index(r);wrong['scenes'].insert(i-2,wrong['scenes'].pop(i))
checks['misordered_review_must_fail']=validate(wrong,review,recall,sec)['status']=='FAIL'
monotype=copy.deepcopy(review)
for q in monotype['A1-05']:q['mode']='single'
checks['one_question_type_must_fail']=validate(new,monotype,recall,sec)['status']=='FAIL'
short=copy.deepcopy(review);short['A1-05']=short['A1-05'][:1]
checks['one_question_must_fail']=validate(new,short,recall,sec)['status']=='FAIL'
results={'checks':checks,'all_pass':all(checks.values()),'positive_report':positive,'strict_report':strict,'note':'Neither STRUCTURAL_PASS nor these tests establish browser or human learning outcomes.'}
out=Path(__file__).resolve().parents[1]/'reports/REGRESSION_RESULTS.json';out.write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(checks,ensure_ascii=False,indent=2));sys.exit(0 if all(checks.values()) else 1)
