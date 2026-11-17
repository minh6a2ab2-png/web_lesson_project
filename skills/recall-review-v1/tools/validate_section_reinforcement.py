#!/usr/bin/env python3
"""Offline section-level Active Recall/Review QA (structure, not browser or field testing).

Input can be the 25/30-scene Cookies contract or similarly shaped general contracts.
Never marks mastery based on mere navigation or button clicks.
"""
import argparse, json, re, sys
from pathlib import Path

RECALL_KINDS={'RECALL','ACTIVE_RECALL','RECALL_TEACH_BACK'}
REVIEW_KINDS={'REVIEW','REVIEW_QUIZ','QUIZ_REVIEW'}


def parse_js_literal(path, var_name):
    if not path: return {}
    text=Path(path).read_text(encoding='utf-8')
    m=re.search(r'\b(?:window\.)?'+re.escape(var_name)+r'\s*=\s*',text)
    if not m: raise ValueError(f'JS missing {var_name} assignment')
    fragment=text[m.end():].lstrip()
    obj,n=json.JSONDecoder().raw_decode(fragment)
    if not isinstance(obj,dict): raise ValueError(f'{var_name} must be a JSON-compatible JS object')
    return obj


def get_id(s): return s.get('scene_id',s.get('id'))
def get_section(s): return s.get('section',s.get('activity_id',s.get('activity')))
def get_kind(s): return str(s.get('kind',s.get('scene_type',''))).upper()


def validate(contract,review_bank=None,recall_bank=None,sections=None,strict=False):
    review_bank=review_bank or {}; recall_bank=recall_bank or {}
    scenes=contract.get('scenes',[])
    issues=[]; per=[]
    def issue(code,message,severity='error'):
        issues.append({'code':code,'severity':severity,'message':message})
    ids=[get_id(s) for s in scenes]
    if len(ids)!=len(set(ids)):issue('DUPLICATE_SCENE_IDS','Scene IDs must be unique')
    if not scenes: issue('NO_SCENES','Missing scenes');return {'status':'FAIL','issues':issues}
    if sections is None:
        sections=contract.get('knowledge_section_ids') or contract.get('knowledge_sections')
        if sections and isinstance(sections[0],dict): sections=[e.get('section_id') for e in sections]
    if not sections:
        sections=sorted(set(get_section(s) for s in scenes if re.fullmatch(r'ACT0?[1-4]',str(get_section(s) or ''))))
    if not sections:issue('NO_KNOWLEDGE_SECTIONS','Specify --sections or knowledge_section_ids')
    core_ids=set(contract.get('core_scene_ids',ids))
    core_sum=sum(int(s.get('estimated_seconds',0) or 0) for s in scenes if get_id(s) in core_ids)
    declared=contract.get('core_duration_seconds')
    if declared is not None and core_sum!=declared:
        issue('TIME_LEDGER_MISMATCH',f'Core estimate {core_sum} != declared {declared}')
    approved_baseline=contract.get('approved_core_duration_seconds',contract.get('baseline_core_seconds'))
    approval=contract.get('time_change_approval') or {}
    is_approved=approval.get('status')=='APPROVED' and bool(approval.get('approval_record_id'))
    if declared is not None and approved_baseline is not None and declared!=approved_baseline and not is_approved:
        issue('TIME_APPROVAL_REQUIRED',f'Core is {declared}s vs approved baseline {approved_baseline}s; missing explicit approved time-change record', 'blocker' if strict else 'warning')
    missing_question_ids=[];missing_cue_ids=[]
    for section in sections:
        seq=[s for s in scenes if get_section(s)==section and get_id(s) not in set(contract.get('recovery_scene_ids',[]))]
        recall=[s for s in seq if get_kind(s) in RECALL_KINDS]
        reviews=[s for s in seq if get_kind(s) in REVIEW_KINDS]
        obj={'section_id':section,'recall_ids':[get_id(s) for s in recall],'review_ids':[get_id(s) for s in reviews]}
        if len(recall)!=1:issue('RECALL_COUNT',f'{section}: expected exactly one Active Recall, found {len(recall)}')
        if len(reviews)!=1:issue('REVIEW_COUNT',f'{section}: expected exactly one Review Quiz, found {len(reviews)}')
        if len(recall)==1 and len(reviews)==1:
            rid=get_id(recall[0]);qid=get_id(reviews[0]);rpos=seq.index(recall[0]);qpos=seq.index(reviews[0]);obj['ordered']=rpos+1==qpos and qpos==len(seq)-1
            if not obj['ordered']:issue('ORDER_WRONG',f'{section}: Recall must immediately precede Review at end of section')
            cues=recall_bank.get(rid)
            if cues is None: issue('RECALL_CUES_UNAVAILABLE',f'{rid}: recall cue bank not provided','blocker' if strict else 'warning')
            else:
                obj['cue_count']=len(cues)
                if not 2<=len(cues)<=4: issue('CUE_COUNT',f'{rid}: require 2–4 ordered cues, got {len(cues)}')
                for k,c in enumerate(cues):
                    if not c.get('prompt') or not c.get('model'):issue('CUE_CONTENT_MISSING',f'{rid} cue {k+1}: missing prompt/model')
                    if not c.get('cue_id'):missing_cue_ids.append(f'{rid}[{k+1}]')
            qs=review_bank.get(qid)
            if qs is None:issue('REVIEW_BANK_UNAVAILABLE',f'{qid}: review bank not provided','blocker' if strict else 'warning')
            else:
                obj['question_count']=len(qs)
                modes=[q.get('mode',q.get('type','')) for q in qs]
                obj['question_modes']=sorted(set(modes))
                if not 2<=len(qs)<=4:issue('QUESTION_COUNT',f'{qid}: expect 2–4 questions; got {len(qs)}')
                if len(set(modes))<2:issue('QUESTION_VARIETY',f'{qid}: need at least two formats')
                for k,q in enumerate(qs):
                    if not q.get('prompt') or not q.get('explain',q.get('explanation')):issue('QUESTION_INCOMPLETE',f'{qid} question {k+1}: missing prompt/explanation')
                    if not q.get('question_id'):missing_question_ids.append(f'{qid}[{k+1}]')
        per.append(obj)
    if missing_question_ids:issue('QUESTION_ID_MISSING',f'{len(missing_question_ids)} review questions lack stable question_id (e.g. {missing_question_ids[:2]})','blocker' if strict else 'warning')
    if missing_cue_ids:issue('CUE_ID_MISSING',f'{len(missing_cue_ids)} recall cues lack stable cue_id (e.g. {missing_cue_ids[:2]})','blocker' if strict else 'warning')
    if review_bank:
        lesson_types=set()
        for ent in per:
            for typ in ent.get('question_modes',[]): lesson_types.add(typ)
        if len(sections)>=3 and len(lesson_types)<3:issue('LESSON_VARIETY',f'Across {len(sections)} sections, only {len(lesson_types)} question formats')
    status='FAIL' if any(x['severity'] in ('error','blocker') for x in issues) else 'STRUCTURAL_PASS_WITH_WARNINGS' if issues else 'STRUCTURAL_PASS'
    return {'status':status,'sections':per,'scene_count':len(scenes),'core_duration_seconds':declared,'issues':issues,'scope':'static structure+bank content; not browser behavior, user testing, or time approval','strict_production':strict}


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--contract',required=True);p.add_argument('--review-js');p.add_argument('--recall-js');p.add_argument('--sections',nargs='+');p.add_argument('--strict-production',action='store_true');p.add_argument('--out');
    a=p.parse_args();contract=json.loads(Path(a.contract).read_text(encoding='utf-8'))
    result=validate(contract,parse_js_literal(a.review_js,'REVIEW_BANK'),parse_js_literal(a.recall_js,'RECALL_BANK'),a.sections,a.strict_production)
    output=json.dumps(result,ensure_ascii=False,indent=2)
    if a.out:Path(a.out).write_text(output+'\n',encoding='utf-8')
    print(output)
    sys.exit(1 if result['status']=='FAIL' else 0)
if __name__=='__main__':main()
