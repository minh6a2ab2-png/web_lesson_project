(() => {
const $=id=>document.getElementById(id);
const SCENES=window.LESSON.scenes;
const SVG=window.SVG_ASSETS;
const storageKey='cookies-skill09-33-notebook';
let current=0, dual=false, pair='adjacent', left=6, right=7, ratio='50', activePane='left';
let showTutor=true, tutorMsg='',hintShown=0, stepShown=0, showSteps=false, attempted=false, assessmentLocked=false, assessmentSubmitted=false;
let notebook=[];let storageType='phiên hiện tại';const drafts={},attempts={};
try{let x=localStorage.getItem(storageKey);notebook=x?JSON.parse(x):[];storageType='trên thiết bị (localStorage)'}catch(e){notebook=[]}
const isExit=s=>s.section==='ACT05';
const elig=SCENES.map((s,i)=>!isExit(s)?i:null).filter(i=>i!==null);
const esc=str=>String(str==null?'':str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function fileAsset(s){return s.source_asset && SVG[s.source_asset] || '';}
function learnSurface(s){
 let body=`<p>${esc(s.content)}</p>`;
 const id=s.scene_id;
 if(id==='P00-01'||id==='A1-01'){
 body+=`<div class="browser-pair"><div class="fake-browser"><div class="browser-bar"></div><div class="browser-body">🌐 Welcome<br><span class="small">Trước khi chọn ngôn ngữ</span></div></div><div class="fake-browser"><div class="browser-bar"></div><div class="browser-body">🌐 Xin chào<br><span class="small">Sau khi chọn Tiếng Việt</span></div></div></div><p class="small">Hai trạng thái trong cùng một website giả lập, không phải ảnh trình duyệt thật.</p>`;
 }else if(id==='D0-02'||id==='A1-02'||id==='A1-03'){
 body+=`<div class="cards"><div class="mini-card"><div class="small">Thẻ 1</div><div class="code-label">language=vi</div></div><div class="mini-card"><div class="small">Thẻ 2</div><div class="code-label">&lt;h1&gt;Xin chào&lt;/h1&gt;</div></div><div class="mini-card"><div class="small">Thẻ 3</div><div class="code-label">run.exe</div></div></div>`;
 }else if(['A2-03','A2-04','A2-05'].includes(id)){
 body+=`<div class="lab-controls"><label>Chế độ Browser <select id="labAccept"><option value="accept">Chấp nhận Cookie</option><option value="block">Chặn Cookie</option></select></label><label>Hiệu lực <select id="labValid"><option value="valid">Còn hạn</option><option value="expired">Hết hạn</option></select></label><label>Phạm vi <select id="labScope"><option value="ok">Phù hợp</option><option value="wrong">Không phù hợp</option></select></label><button class="btn primary" id="labGo">Chạy mô phỏng</button></div><div id="labResult" class="feedback" aria-live="polite">Hãy dự đoán trước khi chạy. Đây là mô phỏng, không phải HTTP thật.</div>`;
 }else if(id==='A3-01'){
 body+=`<div class="cards"><div class="mini-card">① Đang duyệt</div><div class="mini-card">② Phiên kết thúc</div><div class="mini-card">③ Ngày hôm sau</div></div><p class="small">Em tự ghi trạng thái từng loại trước khi mở sơ đồ tham khảo.</p>`;
 }else if(id==='A4-01'){
 body+=`<div class="cards"><div class="mini-card"><b>SHOP</b><p>Nhớ giỏ hàng</p></div><div class="mini-card"><b>LANGUAGE</b><p>Nhớ lựa chọn ngôn ngữ</p></div><div class="mini-card"><b>ANALYTICS</b><p>Liên hệ các lượt xem</p></div></div>`;
 }
 const src=fileAsset(s);if(src){body+=`<div class="visual-wrap"><img alt="${esc(s.title+' — sơ đồ minh họa')}" src="${src}" loading="lazy" /></div>`}
 return body;
}
function paper(s,i,compact=false){
 return `<section class="paper ${compact?'compact':''}" data-scene="${esc(s.scene_id)}"><div class="eyebrow">${esc(s.section)} · ${compact?'THAM CHIẾU':'HỌC TẬP THEO NHIỆM VỤ'}</div><h1>${esc(s.title)}</h1><div class="meta-grid"><div class="meta-tile"><span class="tile-name">Mục đích trang</span><p>${esc(s.page_purpose)}</p></div><div class="meta-tile task"><span class="tile-name">Nhiệm vụ cần làm</span><p>${esc(s.student_task)}</p></div></div><div class="learning-surface"><div class="learning-content">${learnSurface(s)}</div></div>${compact?'<p class="small">Chọn “Hướng dẫn bên này” để xem trợ giảng theo màn này.</p>':''}</section>`;
}
function savedStatus(s){return notebook.find(n=>n.scene_id===s.scene_id)}
function savePersistent(){try{localStorage.setItem(storageKey,JSON.stringify(notebook));storageType='trên thiết bị (localStorage)'}catch(e){storageType='chỉ trong phiên'} }
function toast(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(window._toastid);window._toastid=setTimeout(()=>$('toast').hidden=true,2900)}
function setTutorText(t){tutorMsg=t;const bubble=$('tutorSpeech');if(bubble)bubble.textContent=t;}
function setTutor(s){hintShown=0;stepShown=0;showSteps=false;attempted=!!attempts[s.scene_id];tutorMsg=s.tutor.intro;}
function activeScene(){return dual&&!assessmentLocked?SCENES[activePane==='left'?left:right]:SCENES[current]}
function controlsReady(){const s=activeScene();$('prev').disabled=assessmentLocked&&!assessmentSubmitted||current===0;$('next').disabled=assessmentLocked&&!assessmentSubmitted; $('libraryBtn').title=assessmentLocked&&!assessmentSubmitted?'Sổ tay bị khóa trong EXIT':'Mở Sổ tay';$('counter').textContent=`${current+1}/${SCENES.length}`;$('dualBtn').classList.toggle('active',dual);$('dualBtn').setAttribute('aria-pressed',String(dual));}
function mainRender(){controlsReady();const s=SCENES[current];
 if(dual){let html='';if(assessmentLocked&&!assessmentSubmitted){html=`<div class="dual-grid"><div>${paper(SCENES[19],19,true)}<div class="exit-answers"><label>A — Cơ chế<textarea id="exitA" placeholder="Trả lời A..."></textarea></label><label>B — Thời hạn<textarea id="exitB" placeholder="Trả lời B..."></textarea></label><label>C — Công dụng<textarea id="exitC" placeholder="Trả lời C..."></textarea></label><button id="submitExit" class="btn primary">Nộp EXIT</button></div></div><div class="paper exit-paper"><h1>Giấy nháp riêng</h1><label for="scratch">Viết nháp (không phải bài nộp)</label><textarea class="answer-box" id="scratch" style="width:100%;min-height:260px" placeholder="Ghi nháp ở đây..."></textarea></div></div>`;}else{
 const L=SCENES[left],R=SCENES[right];html=`<div class="dual-grid" style="--left:${ratio==='60'?'1.5fr':'1fr'};--right:${ratio==='40'?'1.5fr':'1fr'}"><div><div class="pane-bar"><strong>Trái</strong><button class="btn" data-pane="left">Hướng dẫn bên này</button></div><div class="${activePane==='left'?'pane-focus':''}">${paper(L,left,true)}</div></div><div><div class="pane-bar"><strong>Phải</strong><button class="btn" data-pane="right">Hướng dẫn bên này</button></div><div class="${activePane==='right'?'pane-focus':''}">${paper(R,right,true)}</div></div></div>`;}
 $('app').innerHTML=html;
 }else if(assessmentLocked&&!assessmentSubmitted&&current===19){
 $('app').innerHTML=paper(s,current).replace('</section>','<div class="alert">Không mở lại bài học, Sổ tay hoặc gợi ý trong lúc làm EXIT. Bản thử chỉ lưu bài, chưa tự chấm.</div><div class="exit-answers"><label>A — Cơ chế HTTP và chiều Cookie<textarea id="exitA" placeholder="Trả lời A..."></textarea></label><label>B — Phân loại theo thời hạn<textarea id="exitB" placeholder="Trả lời B..."></textarea></label><label>C — Công dụng và quyền riêng tư<textarea id="exitC" placeholder="Trả lời C..."></textarea></label><button id="submitExit" class="btn primary">Nộp bài EXIT</button></div></section>');
 }else{
 let extra='';if(isExit(s)&&s.scene_id==='A5-01'&&!assessmentSubmitted){extra=`<div class="alert">Sẵn sàng kiểm tra độc lập? Sổ tay và gợi ý sẽ bị khóa đến khi nộp bài.</div><button class="btn primary" id="beginExit">Bắt đầu EXIT</button>`}
 else if(!isExit(s))extra=`<div class="steps"><span class="step-current" id="stepNumber">Bước ${stepShown+1}/${s.steps.length}</span><span class="step-detail" id="stepText">${esc(s.steps[stepShown].label)}</span><button class="btn" id="stepNext">Bước tiếp</button><button class="btn" id="expandSteps">${showSteps?'Ẩn các bước':'Xem các bước'}</button></div><div id="allSteps" ${showSteps?'':'hidden'}><ol>${s.steps.map(x=>`<li>${esc(x.label)}</li>`).join('')}</ol><p><strong>Hoàn thành khi:</strong></p><ul class="criteria">${s.completion_criteria.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="answer-box"><label for="answer">Dự đoán / Câu trả lời / Ghi chú của em</label><textarea id="answer" placeholder="Viết ý của em hoặc ghi rằng em đã làm hoạt động trên giấy..."></textarea></div><div class="evidence-tools"><button class="btn" id="tried">Tôi đã thử</button><button class="btn primary" id="saveEvidence">Lưu kết quả</button><span id="sceneStatus" class="message" role="status"></span></div>`;
 $('app').innerHTML=paper(s,current).replace('</section>',extra+'</section>');
 if($('answer'))$('answer').value=drafts[s.scene_id]||'';
 }
 const tutor=isExit(activeScene())?`<div class="tutor-card" id="tutor"><div class="tutor-avatar" aria-hidden="true">🤖</div><div class="tutor-inner"><div class="tutor-name">Trợ giảng hướng dẫn thao tác <button class="btn" id="closeTutor">Thu gọn</button></div><div class="bubble" id="tutorSpeech" aria-live="polite">${esc(activeScene().tutor.intro)}</div><div class="tutor-actions"><button class="btn" id="remind">Nhắc nhiệm vụ</button></div></div></div>`:`<div class="tutor-card" id="tutor"><div class="tutor-avatar" aria-hidden="true">🤖</div><div class="tutor-inner"><div class="tutor-name">Trợ giảng ảo · lời dẫn theo kịch bản <button class="btn" id="closeTutor">Thu gọn</button></div><div class="bubble" id="tutorSpeech" aria-live="polite">${esc(tutorMsg||activeScene().tutor.intro)}</div><div class="tutor-actions"><button class="btn" id="remind">Nhắc nhiệm vụ</button><button class="btn" id="hint">Gợi ý từng mức</button><button class="btn" id="explain">Giải thích sau khi thử</button></div></div></div>`;
 $('tutorHolder').innerHTML=showTutor?tutor:`<button class="btn" id="reopenTutor">🤖 Mở trợ giảng</button>`;
 if(dual&&!assessmentLocked){$('leftSelect').value=String(left);$('rightSelect').value=String(right);}
 bind();
}
function bind(){const s=SCENES[current];
 const answer=$('answer');if(answer)answer.addEventListener('input',()=>drafts[s.scene_id]=answer.value);
 $('beginExit')?.addEventListener('click',()=>{assessmentLocked=true;current=19;dual=false;setTutor(SCENES[current]);mainRender()});
 $('submitExit')?.addEventListener('click',()=>{const v=['A','B','C'].map(x=>({part:x,answer:$('exit'+x).value}));let entry={scene_id:'A5-02',title:SCENES[19].title,page_purpose:SCENES[19].page_purpose,student_task:SCENES[19].student_task,answer_or_artifact:JSON.stringify(v),status:'submitted_ungraded',support_level:0,saved_at:new Date().toISOString(),knowledge_capsule_unlocked:false};notebook=notebook.filter(x=>x.scene_id!=='A5-02');notebook.push(entry);savePersistent();assessmentSubmitted=true;assessmentLocked=false;current=20;dual=false;setTutor(SCENES[current]);mainRender();toast('Đã ghi nhận bài EXIT; chưa chấm điểm.')});
 $('stepNext')?.addEventListener('click',()=>{stepShown=Math.min(s.steps.length-1,stepShown+1);$('stepText').textContent=s.steps[stepShown].label;$('stepNumber').textContent=`Bước ${stepShown+1}/${s.steps.length}`});
 $('expandSteps')?.addEventListener('click',()=>{showSteps=!showSteps;$('allSteps').hidden=!showSteps;$('expandSteps').textContent=showSteps?'Ẩn các bước':'Xem các bước'});
 $('tried')?.addEventListener('click',()=>{attempted=true;attempts[s.scene_id]=true;$('sceneStatus').textContent='Đã ghi nhận một lượt thử (chưa chấm).';setTutorText('Em đã thử xong. Giờ hãy tự đối chiếu với phần giải thích, rồi sửa nếu cần nhé.')});
 $('saveEvidence')?.addEventListener('click',()=>saveEvidence(s));
 $('labGo')?.addEventListener('click',()=>{
 const accept=$('labAccept').value==='accept',valid=$('labValid').value==='valid',scope=$('labScope').value==='ok';
 $('labResult').textContent=accept&&valid&&scope?'Browser có thể lưu và gửi Cookie trong request phù hợp ở lượt sau.':!accept?'Browser chặn Cookie; không thể gửi lại chính Cookie chưa được lưu.':!valid?'Cookie đã hết hạn; lượt sau không gửi Cookie đó.':'Cookie không phù hợp phạm vi; không gửi trong request đang xét.';
 attempts[s.scene_id]=true;attempted=true;drafts[s.scene_id]=(drafts[s.scene_id]||'')+' [đã chạy mô phỏng]';
 });
 $('remind')?.addEventListener('click',()=>setTutorText(activeScene().tutor.remind_task));
 $('hint')?.addEventListener('click',()=>{const t=activeScene().tutor;if(hintShown===2&&!attempted&&!attempts[activeScene().scene_id]){setTutorText('Hãy ghi thử một câu dự đoán hoặc thao tác trước khi xem gợi ý mạnh hơn.');return;}hintShown=Math.min(3,hintShown+1);const z=t['hint_'+hintShown];setTutorText(z || 'Trang này không cần thêm gợi ý; em xem lại nhiệm vụ nhé.');});
 $('explain')?.addEventListener('click',()=>{const z=activeScene();if(!(attempted||attempts[z.scene_id])){setTutorText('Hãy thử trả lời hoặc thao tác trước; sau đó em có thể xem phần giải thích.');return;}setTutorText(z.knowledge_capsule||z.tutor.feedback_correct)});
 $('closeTutor')?.addEventListener('click',()=>{showTutor=false;mainRender()});$('reopenTutor')?.addEventListener('click',()=>{showTutor=true;mainRender()});
 document.querySelectorAll('[data-pane]').forEach(b=>b.addEventListener('click',()=>{activePane=b.getAttribute('data-pane');const z=activeScene();setTutor(z);mainRender()}));
}
function saveEvidence(s){if(isExit(s)){toast('Không dùng nút Lưu ở màn EXIT; hãy nộp bài theo quy trình.');return;}const answer=(drafts[s.scene_id]||'').trim();if(!answer&&!attempted){toast('Hãy ghi một ý hoặc nhấn “Tôi đã thử” trước khi lưu.');return;}const entry={scene_id:s.scene_id,title:s.title,page_purpose:s.page_purpose,student_task:s.student_task,answer_or_artifact:answer||'[Thao tác / diễn giải bằng lời – xác nhận thủ công]',status:'saved_ungraded',support_level:hintShown,saved_at:new Date().toISOString(),knowledge_capsule_unlocked:!!attempted,knowledge_capsule:attempted?s.knowledge_capsule:null};notebook=notebook.filter(x=>x.scene_id!==s.scene_id);notebook.push(entry);savePersistent();toast('Đã lưu. Đây chưa phải điểm hoặc xác nhận làm đúng.');}
function tutorMessage(s){return s.tutor.intro}
function setScene(i){if(assessmentLocked&&!assessmentSubmitted&&i!==19){toast('Hoàn thành hoặc nộp EXIT trước khi chuyển sang nội dung khác.');return;}if(i<0||i>=SCENES.length)return;if(i===19&&!assessmentLocked&&!assessmentSubmitted){toast('Hãy đọc tình huống và bấm “Bắt đầu EXIT” ở trang trước.');return;}current=i;setTutor(SCENES[current]);mainRender();window.scrollTo({top:0,behavior:'instant'})}
function changeDual(on){dual=on;if(on){if(assessmentLocked&&!assessmentSubmitted){left=19;right=19;}else{const idx=elig.includes(current)?current:6;const pos=elig.indexOf(idx);left=idx;right=elig[Math.min(pos+1,elig.length-1)];if(right===left)left=elig[Math.max(0,pos-1)];}activePane='left';}
 setTutor(activeScene());mainRender();}
function paneStep(delta){if(assessmentLocked&&!assessmentSubmitted)return;
 if(!dual)return setScene(current+delta);
 const eligible=elig;if(pair==='adjacent'){
 const p=eligible.indexOf(left),next=Math.max(0,Math.min(eligible.length-2,p+delta));left=eligible[next];right=eligible[next+1];
 }else{const idx=activePane==='left'?left:right,p=eligible.indexOf(idx),next=eligible[Math.max(0,Math.min(eligible.length-1,p+delta))];if(activePane==='left')left=next;else right=next;}
 setTutor(activeScene());mainRender();}
function showMenu(id){for(const x of ['toolMenu','dualMenu'])$(x).hidden=x!==id?true:!$(x).hidden}
function setup(){
 $('prev').onclick=()=>paneStep(-1);$('next').onclick=()=>paneStep(1);$('dualBtn').onclick=()=>changeDual(!dual);
 $('dualSettings').onclick=()=>showMenu('dualMenu');$('toolsBtn').onclick=()=>showMenu('toolMenu');
 $('tutorBtn').onclick=()=>{showTutor=!showTutor;mainRender()};
 $('closeDual').onclick=()=>$('dualMenu').hidden=true;$('closeTools').onclick=()=>$('toolMenu').hidden=true;
 $('pairSelect').onchange=e=>{pair=e.target.value;if(pair==='adjacent'){const p=elig.indexOf(left);right=elig[Math.min(elig.length-1,p+1)];}renderSelects();mainRender()};
 $('ratioSelect').onchange=e=>{ratio=e.target.value;mainRender()};
 $('leftSelect').onchange=e=>{left=Number(e.target.value);activePane='left';setTutor(activeScene());mainRender()};
 $('rightSelect').onchange=e=>{right=Number(e.target.value);activePane='right';setTutor(activeScene());mainRender()};
 $('swap').onclick=()=>{[left,right]=[right,left];activePane='left';setTutor(activeScene());mainRender()};
 $('jumpSelect').onchange=e=>{if(assessmentLocked&&!assessmentSubmitted){toast('Sổ tay và điều hướng bị khóa trong EXIT.');return;}changeDual(false);setScene(Number(e.target.value));$('toolMenu').hidden=true};
 $('libraryBtn').onclick=()=>openNotebook();$('closeDrawer').onclick=closeNotebook;$('shade').onclick=closeNotebook;
 $('tabsDone').onclick=()=>renderNotebook('done');$('tabsKnowledge').onclick=()=>renderNotebook('knowledge');
 $('saveBtn').onclick=()=>{if(assessmentLocked&&!assessmentSubmitted){toast('Hãy nộp EXIT theo quy trình riêng.');return;}const s=activeScene();if(dual){toast('Hãy tắt Dual View để lưu câu trả lời của màn đang làm.');return;}saveEvidence(s)};
 $('fullWidth').onclick=()=>document.body.classList.toggle('wide-view');
 $('copyData').onclick=()=>{const data=JSON.stringify(notebook,null,2);const blob=new Blob([data],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='so-tay-cookies-v33.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNotebook();$('toolMenu').hidden=true;$('dualMenu').hidden=true;}if((e.key==='ArrowRight'||e.key==='ArrowLeft')&&!e.target.matches('input,textarea,select')){e.preventDefault();paneStep(e.key==='ArrowRight'?1:-1)}});
 renderSelects();setTutor(SCENES[0]);mainRender();
}
function renderSelects(){
 const options=elig.map(i=>`<option value="${i}">${i+1} · ${esc(SCENES[i].title)}</option>`).join('');
 $('leftSelect').innerHTML=options;$('rightSelect').innerHTML=options;$('jumpSelect').innerHTML=SCENES.map((s,i)=>`<option value="${i}">${i+1} · ${esc(s.title)}</option>`).join('');$('leftSelect').value=String(left);$('rightSelect').value=String(right);$('jumpSelect').value=String(current);$('pairSelect').value=pair;$('ratioSelect').value=ratio;$('freeOptions').hidden=pair!=='free';
}
function openNotebook(){if(assessmentLocked&&!assessmentSubmitted){toast('Sổ tay tạm khóa trong lúc làm EXIT.');return;}$('shade').hidden=false;$('drawer').hidden=false;renderNotebook('done')}
function closeNotebook(){$('shade').hidden=true;$('drawer').hidden=true}
function renderNotebook(tab){$('notebookStorage').textContent=`${notebook.length} bản ghi · Lưu ${storageType}. Đã lưu ≠ đã được chấm.`;const z=tab==='knowledge'?notebook.filter(n=>n.knowledge_capsule_unlocked&&n.knowledge_capsule):notebook;
 $('notebookEntries').innerHTML=z.length?z.map(n=>`<div class="notebook-entry"><h3>${esc(n.title)}</h3><small>${esc(n.scene_id)} · ${esc(n.status)} · ${esc(n.saved_at)}</small><p><b>Mục đích:</b> ${esc(n.page_purpose)}</p><p><b>Nhiệm vụ:</b> ${esc(n.student_task)}</p>${tab==='knowledge'?`<p><b>Kiến thức rút ra:</b> ${esc(n.knowledge_capsule)}</p>`:`<p><b>Kết quả em lưu:</b> ${esc(n.answer_or_artifact)}</p><p>Gợi ý đã dùng: H${n.support_level||0}</p>`}<button class="linklike" data-go="${esc(n.scene_id)}">Xem lại nhiệm vụ</button></div>`).join(''):'<p class="muted">Chưa có bản ghi phù hợp. Hãy thử và lưu một nhiệm vụ trước.</p>';
 document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{const i=SCENES.findIndex(s=>s.scene_id===b.getAttribute('data-go'));if(i<0)return;closeNotebook();dual=false;setScene(i)});}
window.addEventListener('DOMContentLoaded',setup);
})();
