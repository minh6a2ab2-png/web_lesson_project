const fs = require('fs'),vm=require('vm'),path=require('path');
const base='/mnt/data/Cookies_Skill11_v1.2_Repair_2026-11-17/11-production-site';
const context={window:{}};vm.createContext(context);
for (const file of ['review-bank.js','recall-bank.js']) vm.runInContext(fs.readFileSync(path.join(base,file),'utf8'),context);
const bank=context.window.REVIEW_BANK, recalls=context.window.RECALL_BANK;
const errors=[];const descriptions=[];const ids=new Set();
for (const section of ['A1-05','A2-07','A3-04','A4-04']){
 const qs=bank[section]||[],modes=new Set(qs.map(x=>x.mode));
 if(qs.length<2||qs.length>4)errors.push(`${section} question count ${qs.length}`);
 if(modes.size<2)errors.push(`${section} modes not diverse`);
 qs.forEach((q,i)=>{
  if(!q.question_id||ids.has(q.question_id)) errors.push(`missing/duplicate question_id: ${q.question_id}`);
  ids.add(q.question_id);
  if(!q.prompt||!q.explain||!q.hint||!q.section_id) errors.push(`${q.question_id} missing text/section`);
  if(q.mode==='single'||q.mode==='tf'){
   if(!Array.isArray(q.options)||q.answer<0||q.answer>=q.options.length)errors.push(`${q.question_id} invalid option`);
  }else if(q.mode==='match'){
   if(q.pairs.some(p=>!q.choices.includes(p.answer)))errors.push(`${q.question_id} invalid pairing`);
  }else if(q.mode==='order'){
   const n=q.steps.length,expected=Array.from({length:n},(_,i)=>i);
   if(JSON.stringify([...q.answer].sort())!==JSON.stringify(expected)||JSON.stringify(q.display_order)===JSON.stringify(expected))errors.push(`${q.question_id} invalid/easy order`);
  }else if(q.mode==='multi'){
   if(!Array.isArray(q.answer)||q.answer.some(j=>j<0||j>=q.options.length))errors.push(`${q.question_id} invalid multi`);
  }else errors.push(`${q.question_id} unknown mode ${q.mode}`);
 });
 descriptions.push({section,count:qs.length,modes:[...modes],ids:qs.map(x=>x.question_id)});
}
const cueIds=new Set();for(const sec of ['A1-04','A2-06','A3-03','A4-03']){
 const cues=recalls[sec]||[];if(cues.length<2||cues.length>4)errors.push(`${sec} count ${cues.length}`);
 for(const cue of cues){if(!cue.cue_id||cueIds.has(cue.cue_id))errors.push(`${sec} missing/duplicate cue`);cueIds.add(cue.cue_id);if(!cue.prompt||!cue.model)errors.push(`${sec} missing cue content`)}
}
const report={status:errors.length?'FAIL':'PASS',unique_question_ids:ids.size,unique_cue_ids:cueIds.size,question_modes:[...new Set(Object.values(bank).flat().map(x=>x.mode))],sections:descriptions,errors};
fs.writeFileSync('/mnt/data/Cookies_Skill13_FinalAudit_2026-11-17/qa/13-bank-qa.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
