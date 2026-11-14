/* Educational interaction showcase: not Skill11 production teaching engine */
(()=>{
 const $=id=>document.getElementById(id);
 const btns=[...document.querySelectorAll('[data-studio-mode]')];
 const secIds=['ACT01','ACT02','ACT03','ACT04'];
 let mode='presentation',storySec='ACT02',activeMap=null,focusScene=d.findIndex(s=>s.id==='A2-06');
 let focusText=Object.create(null);
 const isExit=s=>s&&s.section==='ACT05';
 const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const actualImg=s=>s.asset&&s.asset.endsWith('.svg')?'<img src="assets/'+escape(s.asset)+'" alt="Sơ đồ '+escape(s.title)+'" style="width:100%;max-height:240px;object-fit:contain">':'';
 const buttons=(arr,id)=>'<div class="studio-flex">'+arr.map((v,i)=>'<button type="button" class="studio-control alt" data-'+id+'="'+escape(v)+'">'+escape(v)+'</button>').join('')+'</div>';
 const descs={presentation:['PRESENTATION','Một slide lớn','Giảng bài theo mạch hiện tượng → dự đoán → quan sát → giải thích → truy hồi.'],dual:['DUAL VIEW','Hai màn đồng thời','Xem hai màn liền kề hoặc lựa chọn bất kỳ, tỷ lệ 50/50, 60/40, 40/60.'],story:['STORY','Câu chuyện học tập','Cuộn qua các bước liên quan trong cùng một hoạt động. Chỉ mở tài liệu giải thích sau khi đã dự đoán.'],lab:['SANDBOX','Thử nghiệm Cookie','Chọn điều kiện và dự đoán trước khi chạy mô phỏng Browser–Server giả lập.'],map:['KNOWLEDGE MAP','Bản đồ kiến thức','Mở các nhánh theo nhu cầu, ẩn phần nhắc để tự dựng lại sơ đồ tư duy.'],focus:['FOCUS & RECALL','Tự nhớ lại','Chỉ hiển thị câu hỏi truy hồi; viết vào ô ghi chú tạm, không chấm điểm.']};
 function show(m){
  if(m==='dual'&&isExit(d[n])){show('presentation');$('studioStatus').textContent='EXIT phải ở giao diện độc lập: không mở Dual View với slide luyện tập.';return}
  if(m!=='presentation'&&m!=='dual'&&isExit(d[n])) {n=d.findIndex(x=>x.section==='ACT02');render()}
  mode=m;btns.forEach(b=>{let on=b.dataset.studioMode===m;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on))});
  $('studioStatus').textContent=descs[m][2];
  const studio=['story','lab','map','focus'].includes(m);
  if(m==='dual'){$('dualToolbar').hidden=false;$('dualMode').click();$('studioRoot').hidden=true;}
  else { $('singleMode').click();$('dualToolbar').hidden=true;$('singleCanvas').hidden=studio;$('dualRoot').hidden=true;$('studioRoot').hidden=!studio;$('nav').hidden=studio; }
  if(studio){$('studioEyebrow').textContent=descs[m][0];$('studioTitle').textContent=descs[m][1];$('studioDesc').textContent=descs[m][2];renderStudio()}
 }
 function renderStudio(){switch(mode){case'story':return story();case'lab':return lab();case'map':return map();case'focus':return focus()}}
 function story(){
  const list=d.filter(s=>s.section===storySec);const opts=secIds.map(x=>'<option '+(x===storySec?'selected':'')+'>'+x+'</option>').join('');
  $('studioBody').innerHTML='<div class="studio-flex"><label for="storySection">Chọn hoạt động:</label><select id="storySection" class="studio-select">'+opts+'</select><span class="studio-muted">'+list.length+' màn · đọc theo chiều dọc</span></div><div class="story-list">'+list.map((s,i)=>'<article class="story-step"><span class="story-number">'+(i+1)+'</span><div class="story-panel"><div class="studio-kicker" style="color:#157996">'+escape(s.id)+'</div><h3>'+escape(s.title)+'</h3><p>'+escape(s.prompt)+'</p><details><summary>Đã dự đoán / làm thử → Mở gợi ý học liệu</summary><p class="studio-muted">'+escape(s.learner_action)+'</p>'+actualImg(s)+'<p class="studio-muted">'+escape(s.note)+'</p></details></div></article>').join('')+'</div>';
  $('storySection').onchange=e=>{storySec=e.target.value;story()};
 }
 function lab(){
  $('studioBody').innerHTML=`<div class="studio-grid2"><div class="studio-card"><h3>1. Thiết lập điều kiện</h3><p class="studio-muted">Website giả lập gửi <code>Set-Cookie: language=vi</code> trong HTTP Response. Browser có chấp nhận không?</p><div class="lab-controls"><label>Browser lưu Cookie<select class="studio-select" id="labAccept"><option value="yes">Chấp nhận</option><option value="no">Từ chối</option></select></label><label>Trạng thái ở lần quay lại<select class="studio-select" id="labValid"><option value="yes">Còn hiệu lực & phù hợp</option><option value="no">Đã hết hạn</option></select></label></div><p><strong>2. Dự đoán:</strong> Lượt sau có mang chính Cookie này không?</p><fieldset class="lab-choice" style="border:0;padding:0"><legend class="studio-muted">Chọn một dự đoán rồi chạy</legend><label><input name="labPrediction" type="radio" value="yes"> Có</label><label><input name="labPrediction" type="radio" value="no"> Không</label></fieldset><button type="button" class="studio-control" id="labRun">Chạy mô phỏng</button><button type="button" class="studio-control alt" id="labReset">Làm lại</button></div><div class="studio-card"><h3>3. Quan sát Browser và Server</h3><div class="lab-world"><div class="lab-agent"><div><strong>🌐 Browser</strong><small id="labBrowser">Chưa xác định trạng thái</small></div></div><div class="lab-arrow">⇄</div><div class="lab-agent server"><div><strong>▤ Server</strong><small>club.example.org (giả lập)</small></div></div></div><p id="labResult" class="lab-results" aria-live="polite" hidden></p><p class="studio-muted">Không có HTTP network thật, không thu thập cookie thật. Trường hợp Cookie bị chặn không có nghĩa website không thể nhớ bằng cách khác.</p></div></div>`;
  const reset=()=>{$('labResult').hidden=true;$('labBrowser').textContent='Chưa xác định trạng thái';document.querySelectorAll('[name="labPrediction"]').forEach(x=>x.checked=false)};
  $('labReset').onclick=reset;
  $('labRun').onclick=()=>{const prediction=document.querySelector('[name="labPrediction"]:checked');if(!prediction){$('labResult').hidden=false;$('labResult').textContent='Hãy chọn dự đoán trước khi chạy mô phỏng.';return}
    const accept=$('labAccept').value==='yes',valid=$('labValid').value==='yes',sent=accept&&valid;
    $('labBrowser').textContent=accept?'Đã nhận và lưu (giả lập)':'Đã từ chối lưu';
    $('labResult').hidden=false;
    $('labResult').textContent='Lần đầu: Browser → Server (Request); Server → Browser (Response có Set-Cookie). '+(accept?'Browser chấp nhận lưu. ':'Browser không lưu. ')+(sent?'Lần sau: Browser → Server (Request có Cookie: language=vi).':'Lần sau: Request không mang chính Cookie này.')+' Dự đoán của em '+(prediction.value===(sent?'yes':'no')?'phù hợp với mô hình.':'chưa phù hợp; hãy kiểm tra điều kiện lưu và hiệu lực.')
  };
 }
 const mapNodes=[['Cơ chế','ACT02','Ai gửi Set-Cookie? Ai gửi Cookie khi quay lại?'],['Thời hạn','ACT03','Điều gì quyết định session và persistent?'],['Ứng dụng','ACT04','Giỏ hàng, ngôn ngữ, tracking khác nhau ở đâu?'],['Quyền riêng tư','ACT04','Điều gì khiến theo dõi lượt quay lại có thể xảy ra?']];
 function map(){
  $('studioBody').innerHTML='<div class="map-center"><div class="map-core">COOKIES</div><div class="map-lines" aria-hidden="true">╱ │ │ ╲</div><div class="map-nodes">'+mapNodes.map((x,i)=>'<button type="button" class="map-node '+(i===activeMap?'selected':'')+'" data-map="'+i+'">'+escape(x[0])+'</button>').join('')+'</div></div><div class="map-detail" id="mapDetail"><strong>Chọn một nhánh của sơ đồ</strong><span>Chỉ nhìn từ khóa trước. Hãy giải thích bằng lời rồi mới xem câu hỏi gợi mở.</span></div>';
  document.querySelectorAll('[data-map]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.map);activeMap=i;document.querySelectorAll('[data-map]').forEach(x=>x.classList.toggle('selected',x===b));$('mapDetail').innerHTML='<strong>'+escape(mapNodes[i][0])+'</strong><p>'+escape(mapNodes[i][2])+'</p><p class="studio-muted">Hãy vẽ nhánh này vào sơ đồ trống. Muốn ôn bài tương ứng, chuyển sang hoạt động '+escape(mapNodes[i][1])+'.</p>'})
 }
 function focus(){
  const choices=d.filter(s=>!isExit(s)&&['recall','question','practice'].includes(s.layout));
  if(!choices.find(x=>d[focusScene]===x))focusScene=d.findIndex(s=>s.id==='A2-06');
  $('studioBody').innerHTML='<div class="studio-flex"><label for="focusChoose">Câu truy hồi:</label><select class="studio-select" id="focusChoose">'+choices.map(s=>'<option value="'+escape(s.id)+'" '+(d[focusScene].id===s.id?'selected':'')+'>'+escape(s.section+' · '+s.title)+'</option>').join('')+'</select></div><div class="focus-sheet"><h3>'+escape(d[focusScene].prompt)+'</h3><p class="focus-note">Che bài học. Nói thành lời rồi viết vào vở hoặc ghi tạm vào ô dưới đây.</p><textarea id="focusAnswer" placeholder="Viết câu trả lời của em. Bản thử chỉ giữ trong bộ nhớ của trang khi còn mở..."></textarea><button class="studio-control" id="focusSave">Đã ghi câu trả lời</button><p class="focus-confirm" id="focusConfirm" aria-live="polite"></p></div>';
  $('focusAnswer').value=focusText[d[focusScene].id]||'';
  $('focusChoose').onchange=e=>{focusText[d[focusScene].id]=$('focusAnswer').value;focusScene=d.findIndex(x=>x.id===e.target.value);focus()};
  $('focusSave').onclick=()=>{focusText[d[focusScene].id]=$('focusAnswer').value;$('focusConfirm').textContent='Đã ghi nhận trong phiên xem thử. Hãy đối chiếu cùng giáo viên sau khi hoàn thành.'}
 }
 $('studioReturn').onclick=()=>show('presentation');
 btns.forEach(b=>b.addEventListener('click',()=>show(b.dataset.studioMode)));
 document.getElementById('dualToolbar').hidden=true;
 show('presentation');
})();
