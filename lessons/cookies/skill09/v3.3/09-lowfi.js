(()=>{
 'use strict';
 const DATA=JSON.parse(document.getElementById('lesson-json').textContent);
 const scenes=DATA.scenes;
 const byId=Object.fromEntries(scenes.map((s,i)=>[s.id,i]));
 const $=id=>document.getElementById(id);
 let current=0, dual=false, pairMode='adjacent',left=0,right=1,ratio='50',activePane='left';
 let viewNotes='completed', tutorOpen=true, examSubmitted=false;
 let session={}; let savedNotebooks={}; let persistent=true;
 const storageKey='cookies-v33-spec-preview-notes-v1';
 try{savedNotebooks=JSON.parse(localStorage.getItem(storageKey)||'{}')||{}}catch(e){persistent=false;savedNotebooks={}}
 const getScene=i=>scenes[Math.max(0,Math.min(i,scenes.length-1))];
 const getX=i=>getScene(i).v33_self_learning;
 const isExit=i=>getScene(i).section==='ACT05';
 const escapeHtml=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const storage=()=>{if(!persistent)return;try{localStorage.setItem(storageKey,JSON.stringify(savedNotebooks))}catch(e){persistent=false}};
 const st=i=>session[getScene(i).id]??=( {step:0,answer:'',attempted:false,confirmed:false,hint:0,scratch:'',lastMessage:''} );
 function mainIndex(){return isExit(current)&&!examSubmitted?current:(dual?(activePane==='left'?left:right):current)}
 function makeBtn(text,id,klass=''){return `<button class="${klass}" data-action="${id}">${escapeHtml(text)}</button>`}
 function refreshMenus(){
  $('modeChoice').value=pairMode;$('ratioChoice').value=ratio;
  $('dualActive').textContent=dual?'Đang chia hai màn':'Một màn';
  $('dualBtn').setAttribute('aria-pressed',String(dual));$('dualBtn').classList.toggle('on',dual);
  $('freeSelectors').hidden=pairMode!=='free';
  $('rightChoose').value=right;$('leftChoose').value=left;
  $('count').textContent=`${mainIndex()+1} / ${scenes.length}`;
  $('notebookBtn').disabled=isExit(mainIndex())&&!examSubmitted;
  $('notebookBtn').title=isExit(mainIndex())&&!examSubmitted?'Sổ tay được khóa trong EXIT':'Xem lại kiến thức đã học';
 }
 function lessonContent(i,pane){
  const s=getScene(i),x=s.v33_self_learning,z=st(i),exit=isExit(i);
  const canMove=!exit||examSubmitted;
  let media='';
  const img=s.asset;
  const allowImage=img&&(!['cookie_lifecycle.svg','cookie_accept_block.svg','session_persistent_timeline.svg'].includes(img)||z.attempted);
  if(allowImage){media=`<figure class="figure"><img loading="lazy" src="assets/${escapeHtml(img)}" alt="${escapeHtml('Sơ đồ học liệu '+s.title)}"><figcaption>${img.startsWith('cookie_')?'Đối chiếu sơ đồ sau lượt thử':'Sơ đồ hỗ trợ quan sát – tự làm trước khi kiểm tra'}</figcaption></figure>`}
  let stepPart=`<div class="step-line"><span class="step-pill">Bước ${z.step+1}/${x.steps.length}</span><span>${escapeHtml(x.steps[z.step].instruction)}</span></div>`;
  let vocab=Object.entries(x.vocabulary).map(([k,v])=>`<span><strong>${escapeHtml(k)}</strong>: ${escapeHtml(v)}</span>`).join('');
  const evidenceField=exit&&s.id==='A5-01'?'':`<div class="response-area"><label for="answer-${pane}">${exit?'Bài làm độc lập (A/B/C)':'Ghi câu trả lời hoặc điều em tự quan sát'}</label><textarea id="answer-${pane}" data-action="answer" data-scene="${s.id}" placeholder="${exit?'A: …\nB: …\nC: …':'Em ghi suy nghĩ của mình ở đây. Nếu làm trên giấy, có thể tóm tắt câu trả lời.'}" ${exit&&examSubmitted?'disabled':''}>${escapeHtml(z.answer)}</textarea><div class="inline-actions">${exit? (s.id==='A5-02'?makeBtn(examSubmitted?'Đã nộp bài':'Nộp A/B/C','submitExit','primary'):''):makeBtn(z.attempted?'Đã ghi nhận lượt thử':'Em đã thử / ghi dự đoán','attempt','primary')}</div></div>`;
  const tutorStatus=exit?'Trợ giảng chỉ hướng dẫn cách làm, không gợi ý kiến thức':"Trợ giảng đọc lời dẫn theo kịch bản; không phải AI phân tích câu trả lời";
  const completed=z.confirmed&&!exit;
  return `<article class="scene ${pane==='right'?'right-scene':''}" data-pane="${pane}" data-index="${i}" tabindex="0" aria-label="Màn ${i+1}: ${escapeHtml(s.title)}">
    <div class="scene-content">
       <div class="eyebrow">${escapeHtml(s.section)} · ${escapeHtml(s.default_render_mode==='presentation'?'Bài học':s.default_render_mode==='assessment'?'Đánh giá độc lập':s.default_render_mode.toUpperCase())}</div>
       <h1>${escapeHtml(s.title)}</h1>
       <div class="purpose"><strong>Mục đích</strong><p>${escapeHtml(x.page_purpose)}</p></div>
       <div class="task"><strong>Em cần làm gì?</strong><p>${escapeHtml(x.student_task)}</p></div>
       <div class="learning-surface ${exit?'assessment-surface':''}">
          <p class="surface-title">Nội dung đang học</p>
          <p class="surface-copy">${escapeHtml(x.student_visible_initial)}</p>
          ${media}
          ${stepPart}
          <div class="inline-actions">
             ${makeBtn('← Bước trước','prevStep','quiet')} ${makeBtn('Tiếp bước →','nextStep','quiet')} ${makeBtn('Xem các bước','showSteps','quiet')}
          </div>
       </div>
       ${evidenceField}
       <section class="finish-criteria"><button class="text-button" data-action="criteria" aria-expanded="false">Tiêu chí hoàn thành <span>▾</span></button><div class="criteria-text" hidden>${x.completion_criteria.map(j=>`<p>• ${escapeHtml(j)}</p>`).join('')}</div></section>
       ${(!exit&&z.attempted)?`<div class="attempt-note">${escapeHtml(z.lastMessage||'Đã lưu lượt thử. Em hãy tự so sánh với tiêu chí rồi sửa nếu cần.')}<div class="inline-actions">${makeBtn(completed?'Đã tự đối chiếu':'Em đã tự đối chiếu với tiêu chí','confirmComplete','secondary')}</div>${completed&&x.knowledge_capsule?`<div class="capsule"><strong>Kiến thức chốt (mở sau lượt thử)</strong><p>${escapeHtml(x.knowledge_capsule.text)}</p></div>`:''}</div>`:''}
       ${vocab?`<details class="vocab"><summary>Giải nghĩa từ khó</summary>${vocab}</details>`:''}
    </div>
    ${(!exit||true)?`<div class="tutor-anchor"><span class="tutor-label">◉ Trợ giảng · ${pane==='right'?'màn phải':'màn trái'}</span><small>${escapeHtml(tutorStatus)}</small></div>`:''}
  </article>`;
 }
 function render(){
  if(isExit(current)&&!examSubmitted){dual=dual;}
  refreshMenus();
  $('single').hidden=dual;$('dual').hidden=!dual;
  if(dual){
   if(isExit(current)&&!examSubmitted){
    $('leftPane').innerHTML=lessonContent(current,'left');
    $('rightPane').innerHTML=`<article class="scene pad"><div class="eyebrow">GIẤY NHÁP · EXIT</div><h2>Ghi nháp khi tự làm</h2><p>Ghi nhanh suy nghĩ của em tại đây. Phần này không cung cấp kiến thức cũ hoặc đáp án.</p><textarea id="scratchpad" data-action="scratch" placeholder="Giấy nháp của em...">${escapeHtml(st(current).scratch)}</textarea></article>`;
    $('dual').style.setProperty('--a','1fr');$('dual').style.setProperty('--b','1fr');
   }else{
    $('leftPane').innerHTML=lessonContent(left,'left');$('rightPane').innerHTML=lessonContent(right,'right');
    $('dual').style.setProperty('--a',ratio==='60'?'1.5fr':ratio==='40'?'1fr':'1fr');
    $('dual').style.setProperty('--b',ratio==='60'?'1fr':ratio==='40'?'1.5fr':'1fr');
   }
  }else $('single').innerHTML=lessonContent(current,'left');
  $('prev').disabled=isExit(current)&&!examSubmitted||current===0;
  $('next').disabled=current===scenes.length-1||(getScene(current).id==='A5-02'&&!examSubmitted);
  const ex=isExit(mainIndex())&&!examSubmitted;
  if(ex)$('notebook').hidden=true;
  if(ex&&$('tutor').hidden===false){/* show only neutral tutor line */}
  updateTutor();
 }
 function updateTutor(){
  const i=mainIndex(), s=getScene(i), x=s.v33_self_learning,z=st(i),exam=isExit(i)&&!examSubmitted;
  $('tutor').hidden=!tutorOpen;
  $('tutorTab').hidden=tutorOpen;
  $('tutorScene').textContent=`Trợ giảng · ${dual?activePane==='left'?'màn trái':'màn phải':'màn đang xem'}`;
  $('tutorText').textContent=z.lastMessage&&z.attempted?z.lastMessage:x.tutor.intro;
  $('hintBtn').disabled=exam || z.hint>=x.tutor.hints.length;
  $('hintBtn').textContent=exam?'Không gợi ý khi kiểm tra':z.hint>=x.tutor.hints.length?'Đã xem hết gợi ý':`Gợi ý (${z.hint}/${x.tutor.hints.length})`;
  $('tutorHint').textContent=exam?'Đây là nhiệm vụ độc lập; em được đọc lại đề và dùng giấy nháp.':z.hint?x.tutor.hints[z.hint-1].text:'';
  $('tutorHint').hidden=!z.hint&&!exam;
 }
 function setCurrent(i){
  if(isExit(current)&&!examSubmitted&&i<current){notify('Trong EXIT, không mở lại các màn trước khi nộp.');return}
  current=Math.max(0,Math.min(i,scenes.length-1));
  if(dual&& !isExit(current)){
   if(pairMode==='adjacent'){left=Math.min(current,scenes.length-2);right=left+1;
       if(isExit(left)||isExit(right)){left=Math.max(0,byId['A5-01']-2);right=left+1;}}
  }
  if(isExit(current)&&!examSubmitted){$('toolMenu').hidden=true;$('dualMenu').hidden=true;$('notebook').hidden=true;}
  render();
 }
 function notify(txt){$('toast').textContent=txt;$('toast').hidden=false;clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>$('toast').hidden=true,3000)}
 function trySave(i){
  const scene=getScene(i),x=scene.v33_self_learning,z=st(i);
  if(!z.answer.trim()&&!z.attempted){notify('Hãy thử hoặc ghi kết quả trước khi lưu.');return}
  savedNotebooks[scene.id]={scene_id:scene.id,purpose:x.page_purpose,task:x.student_task,answer:z.answer,attempted:z.attempted,confirmed:z.confirmed,hint_level:z.hint,knowledge:x.knowledge_capsule?.text||null,ts:new Date().toLocaleString('vi-VN'),status:'Đã lưu – chưa tự động chấm'};
  storage();notify('Đã lưu vào Sổ tay (chưa được chấm).');
 }
 function notebookOpen(){if(isExit(current)&&!examSubmitted){notify('Sổ tay tạm khóa trong bài EXIT.');return}
  $('notebook').hidden=false;$('shade').hidden=false;notebookRender();}
 function notebookRender(){
  const all=Object.values(savedNotebooks),sel=all.filter(v=>viewNotes==='completed'?true:v.knowledge&&v.confirmed);
  $('notebookCount').textContent=`${all.length} mục đã lưu trên thiết bị · ${persistent?'Lưu cục bộ nếu trình duyệt cho phép':'Chỉ trong phiên hiện tại'}`;
  $('notebookBody').innerHTML=sel.length?sel.map(v=>`<section class="entry"><small>${escapeHtml(v.scene_id)} · ${escapeHtml(v.ts||'')}</small><h3>${escapeHtml(v.purpose)}</h3><p><strong>Nhiệm vụ:</strong> ${escapeHtml(v.task)}</p>${viewNotes==='completed'?`<p><strong>Kết quả em ghi:</strong> ${escapeHtml(v.answer||'Chưa có văn bản – làm trên giấy')}</p><small>Mức gợi ý H${v.hint_level||0}; ${escapeHtml(v.status)}</small>`:`<p><strong>Kiến thức chốt:</strong> ${escapeHtml(v.knowledge)}</p>`}<button class="text-button" data-jump="${escapeHtml(v.scene_id)}">Xem lại nhiệm vụ</button></section>`).join(''):'<p class="empty">Chưa có dữ liệu phù hợp. Hãy thử một nhiệm vụ rồi lưu kết quả.</p>';
  [...document.querySelectorAll('.tab')].forEach(b=>b.classList.toggle('selected',b.dataset.tab===viewNotes));
 }
 function menusOff(){['dualMenu','toolMenu'].forEach(n=>$(n).hidden=true)}
 function doAction(action,el){
   const sceneEl=el.closest('.scene'),i=sceneEl?Number(sceneEl.dataset.index):mainIndex();
   const z=st(i),x=getX(i);const exit=isExit(i)&&!examSubmitted;
   if(action==='prevStep'){z.step=Math.max(0,z.step-1);render();return}
   if(action==='nextStep'){z.step=Math.min(x.steps.length-1,z.step+1);render();return}
   if(action==='showSteps'){notify(x.steps.map((s,j)=>`${j+1}. ${s.instruction}`).join('  •  '));return}
   if(action==='criteria'){const part=el.closest('.finish-criteria').querySelector('.criteria-text');part.hidden=!part.hidden;el.setAttribute('aria-expanded',String(!part.hidden));return}
   if(action==='attempt'){
    if(!z.answer.trim())notify('Em có thể ghi một câu hoặc mô tả điều đã làm trên giấy, rồi bấm lại.');
    else{z.attempted=true;z.lastMessage='Đã ghi nhận lượt thử, chưa tự động chấm. Em hãy so với tiêu chí hoặc nhờ giáo viên xác nhận nếu cần.';render();}return}
   if(action==='confirmComplete'){
     if(!z.attempted){notify('Hãy thử nhiệm vụ trước.');return}
     z.confirmed=true;trySave(i);render();return;
   }
   if(action==='submitExit'){
     const text=st(i).answer;
     const ok=/A\s*:/i.test(text)&&/B\s*:/i.test(text)&&/C\s*:/i.test(text)&&text.replace(/\s/g,'').length>18;
     if(!ok){notify('Hãy ghi đủ A:, B:, C: rồi nộp bài. Đây chỉ là kiểm tra có nội dung, không chấm đúng sai.');return}
     examSubmitted=true;st(i).attempted=true;st(i).lastMessage='Đã nộp bài; kết quả cần được chấm sau.';notify('Đã nhận bài EXIT. Không có điểm tự động.');setCurrent(i);return;
   }
 }
 document.addEventListener('click',e=>{
  const b=e.target.closest('[data-action]');
  if(b){doAction(b.dataset.action,b);return}
  const pane=e.target.closest('.scene');if(pane&&dual&&!isExit(current)){activePane=pane.dataset.pane;updateTutor()}
  const jump=e.target.closest('[data-jump]');if(jump){$('notebook').hidden=true;$('shade').hidden=true;setCurrent(byId[jump.dataset.jump])}
 });
 document.addEventListener('input',e=>{
  if(e.target.matches('textarea[data-action="answer"]')){
   const id=e.target.dataset.scene;st(byId[id]).answer=e.target.value;
  }else if(e.target.id==='scratchpad')st(current).scratch=e.target.value;
 });
 $('prev').onclick=()=>setCurrent(current-1);$('next').onclick=()=>setCurrent(current+1);
 $('dualBtn').onclick=()=>{dual=!dual;activePane='left';if(dual&&!isExit(current)){left=current;right=Math.min(scenes.length-1,left+1);if(isExit(right))right=Math.max(0,left-1);pairMode='adjacent'}render()};
 $('dualConfig').onclick=()=>{if(isExit(current)&&!examSubmitted){notify('Trong EXIT, Dual View chỉ có đề và giấy nháp.');return}$('toolMenu').hidden=true;$('dualMenu').hidden=!$('dualMenu').hidden};
 $('modeChoice').onchange=e=>{pairMode=e.target.value;render()};$('ratioChoice').onchange=e=>{ratio=e.target.value;render()};
 $('leftChoose').onchange=e=>{left=+e.target.value;current=left;activePane='left';render()};$('rightChoose').onchange=e=>{right=+e.target.value;activePane='right';render()};
 $('swap').onclick=()=>{if(pairMode!=='free')return;[left,right]=[right,left];render()};
 $('notebookBtn').onclick=notebookOpen;
 $('notebookClose').onclick=()=>{$('notebook').hidden=true;$('shade').hidden=true};$('shade').onclick=$('notebookClose').onclick;
 $('noteTabs').onclick=e=>{if(e.target.dataset.tab){viewNotes=e.target.dataset.tab;notebookRender()}};
 $('saveBtn').onclick=()=>{if(isExit(current)&&!examSubmitted){notify('Bài EXIT cần nộp ở màn đề.');return}trySave(mainIndex())};
 $('moreBtn').onclick=()=>{$('dualMenu').hidden=true;$('toolMenu').hidden=!$('toolMenu').hidden};
 $('goTo').onchange=e=>{if(isExit(current)&&!examSubmitted){notify('Không nhảy trang trong EXIT.');return}setCurrent(+e.target.value);menusOff()};
 $('tutorMin').onclick=()=>{tutorOpen=false;updateTutor()};$('tutorTab').onclick=()=>{tutorOpen=true;updateTutor()};
 $('remindBtn').onclick=()=>{const i=mainIndex(),x=getX(i);$('tutorText').textContent=x.tutor.remind_task};
 $('hintBtn').onclick=()=>{const i=mainIndex(),x=getX(i),z=st(i);if(isExit(i)&&!examSubmitted)return;
   const newlevel=z.hint+1;
   if(newlevel>2&&!z.attempted){notify('Em hãy thử hoặc ghi một dự đoán trước khi mở gợi ý mức 3.');return}
   z.hint=Math.min(newlevel,x.tutor.hints.length);updateTutor()};
 $('closeDual').onclick=()=>{$('dualMenu').hidden=true};$('closeTools').onclick=()=>{$('toolMenu').hidden=true};
 $('fullScreen').onclick=()=>{document.body.classList.toggle('wide');$('toolMenu').hidden=true};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('notebook').hidden=true;$('shade').hidden=true;menusOff();return}
   if(e.target.matches('textarea,input,select'))return;
   if(!e.altKey&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){
     e.preventDefault();setCurrent(current+(e.key==='ArrowRight'?1:-1))
   }
 });
 for(const [id,sel] of [['leftChoose',$('leftChoose')],['rightChoose',$('rightChoose')],['goTo',$('goTo')]]){
  scenes.forEach((s,i)=>{if(s.section==='ACT05'&&id!=='goTo')return;const o=document.createElement('option');o.value=String(i);o.textContent=`${String(i+1).padStart(2,'0')} ${s.title}`;sel.append(o)})
 }
 render();
})();
