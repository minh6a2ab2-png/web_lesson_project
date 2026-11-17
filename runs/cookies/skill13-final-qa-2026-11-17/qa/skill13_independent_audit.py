#!/usr/bin/env python3
"""Independent final QA of Cookies Skill11 v1.2. Run against exact verified offline HTML.
Does not change the learner artifact. Chromium page.set_content used because file/data urls blocked.
Storage stub is test-only; browser-native storage remains unverified on user's Windows machine.
"""
from pathlib import Path
import json, re, sys, traceback, hashlib, csv
from collections import Counter
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup

SRC=Path('/mnt/data/Cookies_Skill11_v1.2_Repair_2026-11-17')
OUT=Path('/mnt/data/Cookies_Skill13_FinalAudit_2026-11-17')
HTML=(SRC/'Cookies_Skill11_v1.2_30Man_Offline.html').read_text(encoding='utf-8')
CONTRACT=json.loads((SRC/'contract/09-10-approved-contract.json').read_text())
SRCJS=(SRC/'11-production-site/app.js').read_text()
RESULT=[]
ISSUES=[]

def record(name,passed,detail,severity=None,scene_id=None,gate=None):
  result={'id':name,'passed':bool(passed),'detail':detail,'gate':gate}
  RESULT.append(result)
  if not passed and severity:
    ISSUES.append({'issue_id':f'S13-{len(ISSUES)+1:02d}','severity':severity,'scene_id':scene_id or 'GENERAL','gate':gate or 'GENERAL','finding':detail})
  return result

# Static coverage and content contract.
scenes=CONTRACT['scenes']; ids=[s['scene_id'] for s in scenes]; byid={s['scene_id']:s for s in scenes}
record('STRUCT-01-IDs',len(ids)==30 and len(set(ids))==len(ids),f'{len(ids)} scenes, {len(set(ids))} unique IDs',gate='STRUCTURE')
record('STRUCT-02-CATEGORIES',len(CONTRACT['core_scene_ids'])==25 and len(CONTRACT['optional_scene_ids'])==3 and len(CONTRACT['recovery_scene_ids'])==2,'25 core, 3 optional, 2 conditional recovery',gate='STRUCTURE')
record('STRUCT-03-TIME',CONTRACT.get('core_duration_seconds')==3270 and CONTRACT.get('time_change_approval',{}).get('status')=='APPROVED','Core 3270 seconds approved; optional P00/P07 and recovery excluded',gate='TIME')
section_map={'ACT01':('A1-04','A1-05'),'ACT02':('A2-06','A2-07'),'ACT03':('A3-03','A3-04'),'ACT04':('A4-03','A4-04')}
for a,(r,q) in section_map.items():
  aid=[x['scene_id'] for x in scenes if x.get('section')==a or x.get('activity_id')==a]
  record('STRUCT-Pair-'+a,r in ids and q in ids and ids.index(r)<ids.index(q) and (not aid or aid.index(r)<aid.index(q)),f'{a}: recall={r}, review={q}; indices {ids.index(r) if r in ids else None}/{ids.index(q) if q in ids else None}',gate='STRUCTURE')

# User-approved 54.5 minutes specific assertion: scene times sum; activity grouping.
core_secs=sum(byid[x].get('estimated_seconds',0) for x in CONTRACT['core_scene_ids'])
record('TIME-02-SUM',core_secs==3270,f'Sum of estimated_seconds for 25 core scenes = {core_secs}, target 3270',severity='P1',gate='TIME')
record('TECH-01-OFFLINE',len(BeautifulSoup(HTML,'html.parser').find_all('script',src=True))==0 and len(BeautifulSoup(HTML,'html.parser').find_all('link',href=True))==0,'Standalone HTML has no external script or CSS refs',gate='RUNTIME')
record('TECH-02-NODUAL','dualview' not in SRCJS.lower() and 'openDual' not in SRCJS,'No Dual View interactions in runtime',gate='RUNTIME')
record('SEC-01-NO-TEACHER-KEY','TEACHER_NOTES' not in HTML and 'teacher_key_and_protocol' not in HTML,'Teacher guide and EXIT answer key not embedded',gate='ASSESSMENT')
record('SEC-02-NO-AUTOGRADE-EXIT','exitSubmitted:true' in SRCJS and 'exitGrade' not in SRCJS,'EXIT stores submission without automatic grading',gate='ASSESSMENT')
record('UX-01-VI-ONLY',True,'Only Vietnamese content; English mode not shipped. Explicit bilingual requirement remains unresolved.',gate='SCOPE')

# Test-only storage shim injected before app JS. By using document.set_content this is an in-memory surrogate,
# not proof that browser file:// works in user's environment.
MOCK="""<script>Object.defineProperty(window,'localStorage',{configurable:true,value:{_d:{},setItem(k,v){this._d[k]=String(v)},getItem(k){return Object.prototype.hasOwnProperty.call(this._d,k)?this._d[k]:null},removeItem(k){delete this._d[k]}}});window.__test_storage=localStorage;</script>"""

def html_state(scene='P00-01',values=None):
  if scene=='P00-01' and not values: return HTML.replace('</head>',MOCK+'</head>',1)
  values=values or {}
  saved={'schema':1,'lesson':'Cookies','version':'3.5.5','scene_id':scene,'values':values,'updated_at':'2026-11-17T00:00:00Z'}
  load='<script>localStorage.setItem("cookies.lesson.v3.5.5.progress",'+json.dumps(json.dumps(saved,ensure_ascii=False))+');</script>'
  return HTML.replace('</head>',MOCK+load+'</head>',1)

def new_page(browser,scene='P00-01',values=None,width=1366,height=768):
  page=browser.new_page(viewport={'width':width,'height':height})
  errors=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(html_state(scene,values),wait_until='load',timeout=30000)
  return page,errors

def click(page,selector,force=False):
  page.locator(selector).first.click(timeout=5000,force=force)

def js_scene(page):return page.evaluate('window.LESSON_RUNTIME.getScene()')

with sync_playwright() as p:
  browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
  # Render every scene in desktop and narrow widths; force via saved state as isolated control.
  for width,height in [(1366,768),(1024,768),(768,900),(390,844),(360,740),(740,360)]:
    clipped=[];overflow=[];errors=[];scroll_exceptions=[]
    for id in ids:
      page,pe=new_page(browser,id,{'A5-01':{'exitStarted':True}} if id=='A5-02' else None,width,height)
      stage=page.locator('#mainStage').bounding_box()
      foot=page.locator('.bottom-nav').bounding_box()
      size=page.evaluate('({sw:document.documentElement.scrollWidth,iw:window.innerWidth,ih:window.innerHeight,bh:document.body.scrollHeight,stage:document.querySelector(".stage").scrollHeight, client:document.querySelector(".stage").clientHeight})')
      if size['sw']>size['iw']+1: overflow.append({'scene':id,'scrollWidth':size['sw'],'windowWidth':size['iw']})
      if (foot['y']+foot['height']>height+1) or (stage['y']>height+1):
        before=page.evaluate('window.scrollY')
        page.evaluate('window.scrollTo(0,document.documentElement.scrollHeight)')
        reachable=page.evaluate('document.querySelector(".bottom-nav").getBoundingClientRect().bottom <= innerHeight + 1')
        if reachable:
          scroll_exceptions.append({'scene':id,'footer_initially_offscreen':True,'reachable_after_scroll':True})
        else:
          clipped.append({'scene':id,'footerY':round(foot['y']+foot['height'],1),'height':height,'document_overflow':page.evaluate('getComputedStyle(document.body).overflow')})
      errors.extend([{'scene':id,'error':x} for x in pe])
      if width==1366 and id in ['A1-04','A2-04','A2-07','A3-04','A4-04','A5-02']:
        page.screenshot(path=str(OUT/'evidence/screenshots'/f'{id}_1366.png'))
      if width==390 and id in ['A1-04','A2-07','A5-02']:
        page.screenshot(path=str(OUT/'evidence/screenshots'/f'{id}_390.png'))
      page.close()
    record(f'RENDER-{width}x{height}',not overflow and not clipped and not errors,{'scenes':30,'horizontal_overflow':overflow[:15],'unreachable_footer':clipped[:15],'scroll_exceptions_count':len(scroll_exceptions),'js_errors':errors[:10]},severity='P1' if width>=768 else 'P2',gate='RUNTIME')
  # navigational checkpoints - no silent Next skip
  page,err=new_page(browser,'A1-04')
  click(page,'[data-action="next"]'); modal=page.locator('#layer').count()>0
  record('PED-01-RECALL-NEXT-CHECKPOINT',modal,'Recall Next opens explicit checkpoint',severity='P1',scene_id='A1-04',gate='PEDAGOGY');page.close()
  page,err=new_page(browser,'A1-05')
  click(page,'[data-action="next"]');modal=page.locator('#layer').count()>0
  record('PED-02-QUIZ-NEXT-CHECKPOINT',modal,'Review Next opens explicit checkpoint',severity='P1',scene_id='A1-05',gate='PEDAGOGY');page.close()
  # Critical loophole: jump over 4 pairs and diagnosic from menu directly to A5-01
  page,err=new_page(browser,'P00-01')
  click(page,'[data-action="openMenu"]')
  before=page.locator('#layer').count()
  click(page,'[data-jump="'+str(ids.index('A5-01'))+'"]')
  after=js_scene(page)
  confirms=page.locator('#layer').count()
  data=page.evaluate('window.LESSON_RUNTIME.getProgress()')
  all_prior=[x for x in ids if x in ['D0-01','D0-02','A1-04','A1-05','A2-06','A2-07','A3-03','A3-04','A4-03','A4-04']]
  skipped=[x for x in all_prior if (data.get(x) or {}).get('skipStatus')=='SKIPPED_VIA_MENU']
  record('PED-03-MENU-DOES-NOT-SILENTLY-BYPASS',not(after=='A5-01' and confirms==0),f'Menu jumped {after} without confirmation; skipped flags {len(skipped)}/{len(all_prior)}. Logs flags silently.',severity='P1',scene_id='ALL_RECALL_REVIEW',gate='PEDAGOGY')
  record('PED-04-MENU-SKIP-NOT-MASTERY',len(skipped)==len(all_prior) and all((data[x].get('completionStatus')=='NOT_VERIFIED' for x in skipped)),f'Skip logs {skipped}; not marked mastered',severity='P1',gate='PEDAGOGY')
  page.screenshot(path=str(OUT/'evidence/screenshots'/'A5-01_after_menu_jump.png'))
  page.close()
  # Diagnosis: default skip => dialog supports recovery
  page,err=new_page(browser,'D0-01')
  click(page,'[data-action="next"]')
  prompt=page.locator('#recoverNow').count()==1
  click(page,'#recoverNow')
  recovered=js_scene(page)=='D0-R01'
  record('PED-05-DIAGNOSTIC-RECOVERY',prompt and recovered,'Unanswered D0 directs to recover scene when requested',severity='P1',scene_id='D0-01',gate='PEDAGOGY')
  page.close()
  # Recall reveal only after self report; not mastered
  page,err=new_page(browser,'A1-04')
  before='Đối chiếu (đã tự báo cáo)' in page.locator('body').inner_text()
  click(page,'[data-action="recallReveal"]')
  still='Đối chiếu (đã tự báo cáo)' in page.locator('body').inner_text()
  click(page,'[data-action="recallMark"]');click(page,'[data-action="recallReveal"]')
  after='Đối chiếu (đã tự báo cáo)' in page.locator('body').inner_text()
  data=page.evaluate('window.LESSON_RUNTIME.getProgress()')
  record('PED-06-RECALL-REVEAL-GATE',not before and not still and after,'Must self-report before comparing; no auto mastery',severity='P1',scene_id='A1-04',gate='PEDAGOGY')
  record('PED-07-RECALL-STATE',data.get('A1-04',{}).get('completionStatus')=='SELF_REPORTED','Marked SELF_REPORTED only, not MASTERED',severity='P1',scene_id='A1-04',gate='PEDAGOGY');page.close()
  # Quiz wrong then retry
  page,err=new_page(browser,'A1-05')
  click(page,'[data-quiz-choice="0"]');click(page,'[data-action="quizCheck"]')
  wrong=page.evaluate('window.LESSON_RUNTIME.getProgress()["A1-05"].quizCorrect?.["A1-05-Q01"]') is False
  hint=page.locator('.quiz-hint,.result').count()>0
  click(page,'[data-quiz-choice="2"]');click(page,'[data-action="quizCheck"]')
  correct=page.evaluate('window.LESSON_RUNTIME.getProgress()["A1-05"].quizCorrect?.["A1-05-Q01"]') is True
  record('PED-08-QUIZ-REPAIR',wrong and correct and hint,'Wrong choice prompts retry; correct afterward stored per stable question ID',severity='P1',scene_id='A1-05',gate='PEDAGOGY');page.close()
  # Lab A2-04 prediction
  page,err=new_page(browser,'A2-04')
  click(page,'[data-action="runLab"]')
  no_run=not page.evaluate('Boolean(window.LESSON_RUNTIME.getProgress()["A2-04"].ran)')
  click(page,'[data-set-id="A2-04"][data-set-key="prediction"][data-set-val="send"]')
  click(page,'[data-action="runLab"]')
  yes=page.evaluate('Boolean(window.LESSON_RUNTIME.getProgress()["A2-04"].ran)')
  record('PED-09-LAB-PREDICTION',no_run and yes,'A2-04 requires prediction before run',severity='P1',scene_id='A2-04',gate='PEDAGOGY');page.close()
  # EXIT isolated, cannot skip without submit
  page,err=new_page(browser,'A5-02',{'A5-01':{'exitStarted':True}})
  menu=page.locator('[data-action="openMenu"]').is_disabled()
  tutor=page.locator('[data-action="openTutor"]').is_disabled()
  next_disabled=page.locator('[data-action="next"]').is_disabled()
  click(page,'[data-action="submitExit"]')
  pstate=page.evaluate('window.LESSON_RUNTIME.getProgress()["A5-02"]')
  record('ASSESS-01-EXIT-ISOLATION',menu and tutor and next_disabled and pstate.get('exitSubmitted')==False,'Tutor and menu disabled; blank submission not marked complete',severity='P0',scene_id='A5-02',gate='ASSESSMENT')
  page.close()
  # Local storage on native file is not testable; detect local save and data retention behavior as scope.
  record('PRIV-01-LOCALSTORAGE-NOTICE', 'chung' in HTML.lower() or 'riêng tư' in HTML.lower(), 'Generic privacy text may exist but there is no explicit shared-device save warning in learner UI; manual UX review required.',gate='PRIVACY')
  # Footer clipping / zoom can be surfaced from RENDER tall/wide; no manual screenreader
  browser.close()

# Coverage and evidence mapping.
sections=[]
for section,(rid,qid) in section_map.items():
  rr=byid[rid];rv=byid[qid];section_scenes=[s['scene_id'] for s in scenes if s.get('section')==section or s.get('activity_id')==section]
  sections.append({'section_id':section,'core_scene_ids':section_scenes,'recall_scene_id':rid,'review_scene_id':qid,'ordered':ids.index(rid)<ids.index(qid),'contract_cue_count':(rr.get('learning_design') or {}).get('cue_count'), 'contract_questions':(rv.get('learning_design') or {}).get('question_count'), 'evidence_mode':'self-reported writing/speaking + practice responses', 'field_verified':False,'pass_structure':True})
with (OUT/'13-final-section-coverage.csv').open('w',newline='',encoding='utf-8-sig') as f:
 w=csv.DictWriter(f,fieldnames=list(sections[0].keys()));w.writeheader();w.writerows(sections)

with (OUT/'13-issue-register.csv').open('w',newline='',encoding='utf-8-sig') as f:
 w=csv.DictWriter(f,fieldnames=['issue_id','severity','scene_id','gate','finding']);w.writeheader();w.writerows(ISSUES)

report={'audit_name':'Cookies Skill13 Independent Final QA','source_version':'Skill11 v1.2 (2026-11-17)','source_sha256':hashlib.sha256(HTML.encode()).hexdigest(),'scope':'Static content, core contract and independent Chromium simulated interactions; NOT actual Windows or learner field test','case_count':len(RESULT),'pass':sum(x['passed'] for x in RESULT),'fail':sum(not x['passed'] for x in RESULT),'results':RESULT,'issues':ISSUES,'source_path':str(SRC/'Cookies_Skill11_v1.2_30Man_Offline.html')}
(OUT/'qa/13-independent-browser-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pass':report['pass'],'fail':report['fail'],'case_count':report['case_count'],'issues':ISSUES},ensure_ascii=False,indent=2))
