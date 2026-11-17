/* Skill10 v3.5.3: 30-scene content-first HI-FI REVIEW PROTOTYPE, not Skill11 production engine. */
(()=>{'use strict';
const scenes=window.LESSON;
const byId=Object.fromEntries(scenes.map((s,i)=>[s.scene_id,i]));
const STORE_KEY='cookies.lesson.v3.5.5.progress';
function readSaved(){try{const j=JSON.parse(localStorage.getItem(STORE_KEY)||'null');return j&&j.schema===1&&j.values&&typeof j.values==='object'?j:null}catch{return null}}
const savedProgress=readSaved();
function storeProgress(){try{localStorage.setItem(STORE_KEY,JSON.stringify({schema:1,lesson:'Cookies',version:'3.5.5',scene_id:scenes[state.idx]?.scene_id||'P00-01',values:state.values,updated_at:new Date().toISOString()}));}catch(e){window.SAVE_UNAVAILABLE=true;}}
function exportProgress(){const data=JSON.stringify({schema:1,lesson:'Cookies',version:'3.5.5',scene_id:scenes[state.idx].scene_id,values:state.values,exported_at:new Date().toISOString()},null,2);const blob=new Blob([data],{type:'application/json;charset=utf-8'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='cookies-tien-do.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}

const state={idx:0, values:{}, bubbleAnchor:null, bubbleMode:'', tutorTab:'explain',activeModal:null,examStarted:false};
if(savedProgress){state.values=savedProgress.values;state.idx=byId[savedProgress.scene_id]??0;state.examStarted=!!state.values['A5-01']?.exitStarted;}

const glossary={
'Browser':'Trình duyệt: ứng dụng dùng để mở và xem website, ví dụ Chrome hoặc Edge.',
'Server':'Máy chủ: hệ thống tiếp nhận yêu cầu và gửi dữ liệu trang web về trình duyệt.',
'HTTP Request':'Thông điệp yêu cầu do Browser gửi tới Server khi muốn lấy tài nguyên.',
'Request':'Thông điệp yêu cầu, đi từ Browser tới Server.',
'HTTP Response':'Thông điệp phản hồi từ Server gửi về Browser sau Request.',
'Response':'Thông điệp Server gửi về để trả lời Request.',
'Cookie':'Dữ liệu nhỏ mà trình duyệt có thể lưu và gửi lại trong những yêu cầu phù hợp.',
'Set-Cookie':'Header trong HTTP Response cho phép Server yêu cầu Browser lưu một Cookie.',
'language=vi':'Ví dụ dữ liệu tên–giá trị: language là tên, vi biểu thị lựa chọn Tiếng Việt.',
'Session Cookie':'Cookie không có thời điểm hết hạn cố định theo Expires/Max-Age; thường kết thúc theo phiên trình duyệt.',
'Persistent Cookie':'Cookie có thời điểm hết hạn xác định; có thể tiếp tục tồn tại qua phiên cho tới khi hết hạn hoặc bị xóa.',
'Tracking':'Việc nhận biết/ghi nhận hoạt động của người dùng theo thời gian hoặc qua các lần truy cập, tùy cách sử dụng.',
'HTML':'Ngôn ngữ đánh dấu dùng để mô tả cấu trúc nội dung trang web.',
'Database':'Cơ sở dữ liệu: nơi hệ thống có thể quản lý và tra cứu thông tin một cách có tổ chức.',
'Cookie header':'Header trong HTTP Request chứa những Cookie phù hợp mà trình duyệt gửi đến máy chủ.',
'session_id':'Mã định danh phiên, có thể giúp máy chủ tìm trạng thái phiên của người dùng.',
'Expires':'Thuộc tính dùng để đặt thời điểm hết hạn của Cookie.',
'Max-Age':'Thuộc tính dùng để đặt khoảng thời gian hiệu lực của Cookie, tính bằng giây.',
 'theme=dark':'Ví dụ dạng tên–giá trị: theme là tên lựa chọn giao diện; dark là giá trị giao diện tối.'
};
const facts={
'P00-01':'Website cũng có thể lưu một số lựa chọn bằng localStorage, không nhất thiết luôn dùng Cookie.',
'D0-01':'HTTP là quy tắc trao đổi thông điệp giữa trình duyệt và máy chủ trong ví dụ này.',
'A1-02':'Không phải Cookie nào cũng phục vụ đăng nhập; có Cookie giúp nhớ ngôn ngữ hoặc giao diện.',
'A2-02':'Một mã phiên gửi trong Cookie có thể được máy chủ dùng để tra cứu thông tin trong cơ sở dữ liệu. Đây không phải bước bắt buộc với mọi Cookie.',
'A2-04':'Trình duyệt xét nhiều điều kiện như domain, path, thời hạn và chính sách Cookie khi quyết định gửi lại.',
'A3-01':'Đóng một tab không đồng nghĩa mọi Session Cookie đều lập tức biến mất. Việc kết thúc phiên phụ thuộc trình duyệt.',
'A3-02':'Cookie có thể bị người dùng xóa trước khi hết hạn.',
'A4-01':'Một Cookie ghi nhớ giao diện tối không đồng nghĩa với việc theo dõi quảng cáo.',
'A4-02':'Thời hạn tồn tại và mục đích sử dụng Cookie là hai trục đánh giá khác nhau.'
};
function escapeHTML(s){return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')}
function k(term,visible){return `<button type="button" class="keyword" data-term="${escapeHTML(term)}" aria-label="Chú giải ${escapeHTML(term)}" title="Xem chú giải: ${escapeHTML(term)}">${escapeHTML(visible||term)}</button>`}
function sv(name){const p={book:'<path d="M4 5c4-1 6 0 8 2 2-2 5-3 8-2v14c-3-1-6 0-8 2-2-2-4-3-8-2z"/><path d="M12 7v14"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.2 9a3 3 0 0 1 5.6 1.5c-.3 1.6-2.8 2-2.8 4"/><path d="M12 17h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',notebook:'<rect x="5" y="3" width="15" height="18" rx="2"/><path d="M9 3v18M12 8h5M12 12h5"/>',close:'<path d="M5 5l14 14M19 5L5 19"/>',left:'<path d="m15 5-7 7 7 7"/>',right:'<path d="m9 5 7 7-7 7"/>',play:'<path d="m8 5 11 7-11 7z"/>',reset:'<path d="M3 12a9 9 0 1 0 3-7M3 4v5h5"/>',check:'<path d="m4 12 5 5L20 6"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>',flip:'<path d="M4 8a8 8 0 0 1 14-3l2 2M20 16a8 8 0 0 1-14 3l-2-2"/><path d="M20 2v5h-5M4 22v-5h5"/>',send:'<path d="m3 3 18 9-18 9 4-9-4-9z"/><path d="M7 12h14"/>'};return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p[name]||p.info}</svg>`}
const btn=(symbol,label,action,extra='')=>`<button type="button" class="iconbtn ${extra}" data-action="${action}" aria-label="${escapeHTML(label)}" title="${escapeHTML(label)}">${sv(symbol)}</button>`;
function v(id){return state.values[id]??{}}
function setval(id,patch){state.values[id]={...v(id),...patch};storeProgress()}
function node(label,desc,glyph){return `<div class="node ${label==='Server'?'server':''}"><div class="large-glyph" aria-hidden="true">${glyph}</div><b>${k(label)}</b><span>${desc}</span></div>`}
function flow(direction,label,sub=''){const forward=direction==='right';return `<div class="flow" role="img" aria-label="${escapeHTML((forward?'Browser gửi đến Server: ':'Server gửi đến Browser: ')+label.replace(/<[^>]*>/g,''))}">${forward?node('Browser','Trình duyệt','💻'):node('Browser','Trình duyệt','💻')}<div class="arrow-line"><strong>${label}</strong><div class="arrow ${forward?'':'reverse'}" aria-hidden="true">${forward?'→':'←'}</div><span class="tiny">${sub}</span></div>${node('Server','Máy chủ website','🖥️')}</div>`}
function flowBlank(){return `<div class="flow">${node('Browser','Trình duyệt','💻')}<div class="arrow-line"><strong>?</strong><div class="arrow">⇄</div><span class="tiny">Chiều nào xin trang?</span></div>${node('Server','Máy chủ','🖥️')}</div>`}
function flowTwo(){return `<div class="flow">${node('Browser','Trình duyệt','💻')}<div class="arrow-line"><strong>${k('HTTP Request')}</strong><div class="arrow">→</div><strong>${k('HTTP Response')}</strong><div class="arrow reverse">←</div></div>${node('Server','Máy chủ','🖥️')}</div>`}
function c(text,cls=''){return `<div class="card ${cls}">${text}</div>`}
function pill(text,cls=''){return `<span class="pill ${cls}">${text}</span>`}
function webWindow(text,chosen='Tiếng Việt'){return `<div class="web-window"><div class="web-top"><span class="dots" aria-hidden="true">● ● ●</span><span class="web-url">lingua.example.org</span></div><div class="web-inner"><div class="web-banner">${escapeHTML(text)}</div><div class="web-sub">Website học ngoại ngữ · Dữ liệu giả định</div><div class="web-chip">🌐 ${escapeHTML(chosen)}</div></div></div>`}
function takeaway(text,extra=''){return `<div class="callout ${extra}"><strong>Điểm cần nhớ · </strong>${text}</div>`}
function routeIndex(delta){
const s=scenes[state.idx],id=s.scene_id;
if(delta>0){
if(id==='D0-01'&&v(id).checked&&v(id).correct===false)return byId['D0-R01'];
if(id==='D0-02'&&v(id).checked&&v(id).correct===false)return byId['D0-R02'];
}
let i=state.idx+delta;
while(i>=0&&i<scenes.length&&scenes[i].conditional)i+=delta;
return Math.max(0,Math.min(scenes.length-1,i));
}
function resetState(i){document.getElementById('layer')?.remove();state.idx=Math.max(0,Math.min(scenes.length-1,i));closeBubble();storeProgress();render()}
function sampleScene(id){return scenes[byId[id]]}

// Compact visual prototypes for the synchronized contract. All states are client-only and ungraded.
const dd=(id,key,items,label)=>`<select class="select-sm" data-select-key="${escapeHTML(key)}" aria-label="${escapeHTML(label)}"><option value="">Chọn…</option>${items.map(([val,txt])=>`<option value="${escapeHTML(val)}" ${v(id)[key]===val?'selected':''}>${escapeHTML(txt)}</option>`).join('')}</select>`;
function attemptStatus(val,blank='Tự thử trước khi đối chiếu.'){
 return `<div class="result ${val.checkResult?(val.checkResult==='ok'?'good':''):'empty'}" role="status">${escapeHTML(val.checkMessage||blank)}</div>`;
}
function renderDiagnosisFlow(){const id='D0-01',z=v(id),opts=[['bs','Browser → Server'],['sb','Server → Browser']];
return `<div class="layout-6040"><div class="canvas soft graphic">${flowBlank()}</div><div class="canvas stack" style="justify-content:center"><div class="label">Quan sát hai chiều</div><div class="question">Ai xin? Ai trả?</div><div class="mini-fields"><label class="field"><span>${k('Request')} · Xin trang</span>${dd(id,'req',opts,'Hướng Request')}</label><label class="field"><span>${k('Response')} · Trả trang</span>${dd(id,'res',opts,'Hướng Response')}</label></div><div class="icon-row">${btn('check','Kiểm tra hai chiều','checkDiagFlow','filled')}<span class="tiny">Chọn rồi kiểm tra</span></div>${attemptStatus(z,'Hai mũi tên đang được ẩn đáp án.')}<div class="tiny">${z.checked&&!z.correct?'Màn tiếp sẽ ôn nền bằng một ví dụ khác.':'Bài kiểm tra nền không tính điểm.'}</div></div></div>`;
}
function renderRecoveryFlow(){const id='D0-R01',z=v(id),opts=[['bs','Browser → Server'],['sb','Server → Browser']];
return `<div class="layout-6040"><div class="canvas soft stack" style="justify-content:center;gap:18px"><div class="label">Ví dụ · Mở trang tin</div>${flowTwo()}${takeaway('Browser xin trang; Server gửi phần trả lời.')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Thử lại với website khác</div><div class="question">Mũi tên nào đúng?</div><div class="mini-fields"><label class="field"><span>Request</span>${dd(id,'req',opts,'Chiều yêu cầu thử lại')}</label><label class="field"><span>Response</span>${dd(id,'res',opts,'Chiều phản hồi thử lại')}</label></div><div class="icon-row">${btn('check','Kiểm tra','checkRecoveryFlow','filled')}</div>${attemptStatus(z,'Em đã có ví dụ mẫu; hãy tự ghép hai mũi tên.')}</div></div>`;
}
function renderDiagnosisToken(){const id='D0-02',z=v(id),opts=[['name','Tên dữ liệu'],['value','Giá trị']];
return `<div class="layout-6040"><div class="canvas center" style="gap:24px"><div class="caps">Chuỗi dữ liệu giả định</div><div class="example-box" style="font-size:clamp(25px,4vw,48px)"><code>language=vi</code></div><div class="tiny">Đoán trước; kết quả chưa hiện.</div></div><div class="canvas stack" style="justify-content:center"><div class="label">Hai phần của dữ liệu</div><div class="mini-fields"><label class="field"><span><strong>language</strong> là…</span>${dd(id,'left',opts,'Ý nghĩa language')}</label><label class="field"><span><strong>vi</strong> là…</span>${dd(id,'right',opts,'Ý nghĩa vi')}</label></div><div class="icon-row">${btn('check','Kiểm tra dữ liệu','checkDiagToken','filled')}</div>${attemptStatus(z,'Hãy thử phân biệt tên và giá trị.')}${z.checked&&!z.correct?'<span class="tiny">Màn tiếp sẽ ôn bằng theme=dark.</span>':''}</div></div>`;
}
function renderRecoveryToken(){const id='D0-R02',z=v(id);
return `<div class="layout-6040"><div class="canvas soft stack" style="justify-content:center;gap:16px"><div class="label">Ví dụ gần gũi</div><div class="example-box"><code>theme=dark</code></div><div class="token-parts"><div class="token-part"><strong>theme</strong><span>Tên lựa chọn giao diện</span></div><div class="token-eq">=</div><div class="token-part"><strong>dark</strong><span>Giá trị: giao diện tối</span></div></div></div><div class="canvas stack" style="justify-content:center"><div class="label">Thử với ngôn ngữ</div><div class="example-box"><code>language=vi</code></div><div class="question">vi mang ý nghĩa nào?</div><div class="row" style="flex-wrap:wrap">${choice(id,'Tên dữ liệu','name','guess')}${choice(id,'Giá trị: tiếng Việt','value','guess')}</div><div class="icon-row">${btn('check','Kiểm tra','checkRecoveryToken','filled')}</div>${attemptStatus(z,'Nhìn phần sau dấu bằng để trả lời.')}</div></div>`;
}
function renderTypesIntro(){return `<div class="canvas stack fill"><div class="layout-5050" style="flex:1;min-height:0"><div class="type-tile sky"><div class="type-ico">⏳</div><div class="label">Theo phiên</div><h3>${k('Session Cookie')}</h3><p>Không đặt hạn tồn tại dài theo Expires/Max-Age. Thường kết thúc theo phiên trình duyệt.</p><div class="type-foot">Ví dụ: mã phiên tạm thời</div></div><div class="type-tile warm"><div class="type-ico">📅</div><div class="label">Có thời hạn cụ thể</div><h3>${k('Persistent Cookie')}</h3><p>Có thời hạn được đặt, chẳng hạn <strong>5 ngày</strong>. Có thể tồn tại sau khi phiên kết thúc.</p><div class="type-foot">Ví dụ: lựa chọn giao diện</div></div></div>${takeaway('Phân loại theo thời hạn; cả hai vẫn có thể bị xóa sớm.')}</div>`;
}
function renderClassification(){const id='A1-03',z=v(id);
return `<div class="canvas stack fill"><div class="layout-333" style="flex:1">${classCard('language=vi','Dữ liệu tên–giá trị','d')}${classCard('&lt;h1&gt;Xin chào&lt;/h1&gt;','Cấu trúc trang HTML','h')}${classCard('run.exe','Tên tệp chương trình','p')}</div><div class="row" style="justify-content:space-between;flex-wrap:wrap">${attemptStatus(z,'Phân loại đủ ba thẻ rồi kiểm tra.')}${btn('check','Kiểm tra phân loại','checkClass','filled')}</div></div>`;
}
function renderLabAccept(){const id='A2-03',z=v(id);
return `<div class="layout-7030"><div class="canvas soft stack fill" style="justify-content:space-between"><div class="row"><span class="pill blue">HTTP Response</span><span class="pill">${k('Set-Cookie')}: language=vi</span></div><div class="graphic" style="flex:1">${flow('left','Set-Cookie','Browser quyết định lưu')}</div>${attemptStatus(z,'Đổi điều kiện → dự đoán → ▶ để quan sát.')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Điều kiện Browser</div><div class="row" style="flex-wrap:wrap">${choice(id,'✓ Chấp nhận','accept','permission')}${choice(id,'⊘ Chặn','block','permission')}</div><div class="label">Em dự đoán</div><div class="row" style="flex-wrap:wrap">${choice(id,'Sẽ lưu','stored','prediction')}${choice(id,'Không lưu','not','prediction')}</div><div class="icon-row">${btn('play','Chạy mô hình','runLab','filled')}${btn('reset','Đặt lại','resetLab')}${btn('help','Gợi ý','openTutor')}</div><div class="tiny">Mô phỏng giáo dục; không thay đổi Cookie thật.</div>${takeaway('Có Set-Cookie không bảo đảm Browser sẽ lưu.')}</div></div>`;
}
function renderAcceptBlock(){const id='A2-05',z=v(id);
return `<div class="canvas stack fill"><div class="compare-table" style="flex:1"><div class="half sky"><div class="icon">✓</div><h3>Browser chấp nhận</h3><p>Lần sau, Cookie này được gửi không?</p><div class="row" style="flex-wrap:wrap">${choice(id,'Gửi','send','acc')}${choice(id,'Không gửi','no','acc')}</div>${z.revealed?'<div class="outcome">Có thể gửi lại trong Request phù hợp.</div>':''}</div><div class="half warm"><div class="icon">⊘</div><h3>Browser chặn</h3><p>Lần sau, Cookie này được gửi không?</p><div class="row" style="flex-wrap:wrap">${choice(id,'Gửi','send','blk')}${choice(id,'Không gửi','no','blk')}</div>${z.revealed?'<div class="outcome">Cookie đã bị chặn không được lưu, nên không gửi lại.</div>':''}</div></div><div class="row" style="justify-content:space-between;flex-wrap:wrap">${attemptStatus(z,'Dự đoán cả hai nhánh trước khi xem kết quả.')}${btn('check','Đối chiếu hai dự đoán','checkCompare','filled')}</div></div>`;
}
function renderTimeline(){const id='A3-01',z=v(id),labels=['Đang duyệt','Kết thúc phiên','Ngày mai'],options=[['yes','Còn'],['no','Không'],['unknown','Chưa chắc']];
const row=(name,prefix)=>`<div class="life-row"><strong>${name}</strong>${labels.map((lab,i)=>dd(id,prefix+i,options,`${name} ở mốc ${lab}`)).join('')}</div>`;
return `<div class="canvas stack fill"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><span class="pill blue">Mô hình: phiên kết thúc hoàn toàn, không khôi phục</span><span class="pill">Persistent: còn hạn 5 ngày; không xóa</span></div><div class="life-grid"><div class="life-head"><span>Cookie</span>${labels.map(x=>`<span>${x}</span>`).join('')}</div>${row('Session','s')}${row('Persistent','p')}</div><div class="row" style="justify-content:space-between;flex-wrap:wrap">${attemptStatus(z,'Sáu dự đoán; chọn đủ rồi kiểm tra.')}<div class="icon-row">${btn('check','Đối chiếu timeline','checkTimeline','filled')}${btn('reset','Đặt lại','resetLab')}</div></div>${z.revealed?takeaway('Với giả thiết trên: Session hết khi phiên kết thúc; Persistent có thể còn. Trình duyệt thực tế có ngoại lệ khôi phục phiên.'):''}</div>`;
}
function renderCartExpiry(){const id='A3-02',z=v(id),opts=[['session','Session'],['persistent','Persistent']];
return `<div class="canvas stack fill"><div class="compare-table" style="flex:1"><div class="half sky"><div class="icon">🛒</div><h3>Giỏ hàng · Không đặt hạn</h3><div class="example-box"><code>cart_id=C104</code></div><div class="field">Loại Cookie ${dd(id,'without',opts,'Phân loại không đặt hạn')}</div>${z.revealed?'<p>Không đặt Expires/Max-Age → Session Cookie.</p>':''}</div><div class="half warm"><div class="icon">🛒</div><h3>Giỏ hàng · Hạn 7 ngày</h3><div class="example-box"><code>cart_id=C104</code></div><div class="field">Loại Cookie ${dd(id,'with',opts,'Phân loại đặt hạn 7 ngày')}</div>${z.revealed?'<p>Max-Age=604800 → Persistent Cookie.</p>':''}</div></div><div class="row" style="justify-content:space-between;flex-wrap:wrap">${attemptStatus(z,'Cùng dữ liệu giỏ hàng; chỉ thay đổi thời hạn.')}${btn('check','Kiểm tra phân loại','checkCart','filled')}</div></div>`;
}
function renderUses(){const id='A4-01',z=v(id),opts=[['shop','Giỏ hàng'],['lang','Ngôn ngữ'],['stats','Phân tích']];
const cards=[['🛒','Khách quay lại vẫn còn món đã chọn','shop'],['🌐','Trang vẫn hiện Tiếng Việt','lang'],['📈','Website thống kê các lượt truy cập','stats']];
return `<div class="canvas stack fill"><div class="layout-333" style="flex:1">${cards.map(([ico,scenario,key],i)=>`<div class="card white stack" style="justify-content:space-between"><div class="large-emoji">${ico}</div><div class="label">Tình huống ${i+1}</div><h3>${scenario}</h3><div class="field">Mục đích ${dd(id,'use'+i,opts,'Nhóm công dụng tình huống '+(i+1))}</div>${z.revealed?`<p>${['Cookie hỗ trợ nhận biết giỏ hàng.','Cookie giúp nhớ ngôn ngữ.','Cookie có thể hỗ trợ phân tích lượt truy cập.'][i]}</p>`:''}</div>`).join('')}</div><div class="row" style="justify-content:space-between;flex-wrap:wrap">${attemptStatus(z,'Ghép ba tình huống. Nêu một lý do bằng lời.')}${btn('check','Kiểm tra ghép công dụng','checkUses','filled')}</div></div>`;
}
function renderTracking(){const id='A4-02',z=v(id);
return `<div class="layout-5050"><div class="canvas stack" style="justify-content:center"><div class="label">Hai tiêu chí phân loại</div>${c(`<div class="row"><span class="large-glyph">⏳</span><div><h3>${k('Persistent Cookie')}</h3><p>Thời hạn tồn tại.</p></div></div>`,'sky')}${c(`<div class="row"><span class="large-glyph">👁️</span><div><h3>${k('Tracking')}</h3><p>Mục đích sử dụng.</p></div></div>`,'warm')}${takeaway('Thời hạn và công dụng là hai thuộc tính khác nhau.')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Nhận định</div><div class="feature-title">“Persistent nào cũng để theo dõi?”</div><div class="row">${choice(id,'Đúng','yes','claim')}${choice(id,'Sai','no','claim')}</div><button class="subtle-check" data-action="markReason" aria-pressed="${!!z.reasonAttempted}">${z.reasonAttempted?'✓ Đã đưa ví dụ':'○ Em đã nghĩ một ví dụ phản biện'}</button><div class="icon-row">${btn('check','Đối chiếu nhận định','checkClaim','filled')}</div>${attemptStatus(z,'Chọn nhận định, thử giải thích rồi đối chiếu.')}${z.revealed?'<p class="body-sm">Ví dụ: Cookie ghi nhớ ngôn ngữ trong 7 ngày có thể là Persistent nhưng không nhất thiết để theo dõi.</p>':''}</div></div>`;
}


// Active Recall: reveal requires the learner to confirm an oral/notebook attempt.
const RECALL_BANK = window.RECALL_BANK || {};
const REVIEW_BANK = window.REVIEW_BANK || {};
function recallStepVal(id,step){const x=v(id),key=RECALL_BANK[id]?.[step]?.cue_id;return {attempt:!!(x.attempted||{})[key],shown:!!(x.shown||{})[key]}}
function renderRecall(s){
 const id=s.scene_id,items=RECALL_BANK[id]||[],z=v(id),i=Math.min(z.recallStep||0,items.length-1),p=items[i],st=recallStepVal(id,i);
 return `<div class="layout-6040"><div class="canvas soft center" style="gap:17px">
 <div class="caps">Gợi nhớ ${i+1} / ${items.length}</div>
 <div class="recall-big" aria-hidden="true">${p.icon}</div><div class="feature-title" style="text-align:center">${escapeHTML(p.tag)}</div><div class="recall-prompt">${escapeHTML(p.prompt)}</div>
 </div><div class="canvas stack" style="justify-content:center;gap:15px"><div class="label">ACTIVE RECALL</div><h3 class="recall-head">Nhớ → nói → ghi vở</h3>
 <p class="body-sm">Tự nói một câu và ghi 2–3 từ khóa. Sau đó mới đối chiếu.</p>
 <div class="recall-cue-controls"><button type="button" class="subtle-check" data-action="recallMark" aria-pressed="${st.attempt}">${st.attempt?'✓ Đã nói và ghi từ khóa':'○ Em đã nói và ghi từ khóa'}</button>
 ${btn('eye','Mở lời giải sau khi tự nhớ','recallReveal',st.attempt?'filled':'')}
 </div>${st.shown?`<div class="result good"><strong>Đối chiếu:</strong> ${escapeHTML(p.model)}</div>`:'<div class="result empty">Lời giải đang ẩn.</div>'}
 <div class="recall-nav">${btn('left','Gợi ý trước','recallPrev')}${pill((i+1)+' / '+items.length)}${btn('right','Gợi ý tiếp','recallNext')}</div>
 ${s.scene_id==='A4-03'?'<p class="tiny">Cuối màn, giảng lại ví dụ em chọn trong 30–60 giây.</p>':''}
 </div></div>`;
}
function quizAnswerText(q,z,i){
 const stored=(z.quizAnswers||{})[q.question_id];const qmode=q.mode;
 if(qmode==='single'||qmode==='tf')return `<div class="quiz-options">${q.options.map((opt,j)=>`<button type="button" class="quiz-option ${stored===j?'selected':''}" data-quiz-choice="${j}"><span class="quiz-bullet">${stored===j?'●':'○'}</span><span>${escapeHTML(opt)}</span></button>`).join('')}</div>`;
 if(qmode==='multi')return `<div class="quiz-options">${q.options.map((opt,j)=>`<button type="button" class="quiz-option ${(stored||[]).includes(j)?'selected':''}" data-quiz-multi="${j}"><span class="quiz-bullet">${(stored||[]).includes(j)?'☑':'☐'}</span><span>${escapeHTML(opt)}</span></button>`).join('')}</div>`;
 if(qmode==='match')return `<div class="quiz-match">${q.pairs.map((pair,j)=>`<div class="quiz-match-row"><span class="quiz-match-left">${escapeHTML(pair.left)}</span><select class="select-sm" data-quiz-match="${j}" aria-label="Ghép ${escapeHTML(pair.left)}"><option value="">Chọn ý nghĩa</option>${q.choices.map((c,k)=>`<option value="${k}" ${(stored||[])[j]===k?'selected':''}>${escapeHTML(c)}</option>`).join('')}</select></div>`).join('')}</div>`;
 if(qmode==='order'){const picked=stored||[];return `<div class="quiz-order"><div class="order-picked">${picked.length?picked.map((j,k)=>`<span class="pill blue">${k+1}. ${escapeHTML(q.steps[j])}</span>`).join(''):'<span class="tiny">Chạm các bước theo thứ tự em nghĩ.</span>'}</div><div class="quiz-options">${(q.display_order||q.steps.map((_,j)=>j)).map(j=>`<button type="button" class="quiz-option" data-quiz-order="${j}" ${picked.includes(j)?'disabled':''}><span class="quiz-bullet">${picked.includes(j)?'✓':'＋'}</span>${escapeHTML(q.steps[j])}</button>`).join('')}</div></div>`}
 return '';
}
function renderReview(s){const id=s.scene_id,questions=REVIEW_BANK[id]||[],z=v(id),i=Math.max(0,Math.min(z.quizIndex||0,questions.length-1)),q=questions[i];const checked=(z.quizChecked||{})[q.question_id],good=(z.quizCorrect||{})[q.question_id];const done=Object.keys(z.quizChecked||{}).length;const correct=Object.values(z.quizCorrect||{}).filter(Boolean).length;
 return `<div class="layout-6040"><div class="canvas soft stack" style="justify-content:center;gap:15px"><div class="row" style="justify-content:space-between"><span class="label">Câu ${i+1}/${questions.length}</span>${pill(q.mode==='single'?'Chọn đáp án':q.mode==='tf'?'Đúng / Sai':q.mode==='match'?'Ghép đôi':q.mode==='order'?'Sắp xếp':'Chọn nhiều','blue')}</div>
 <h2 class="quiz-question">${escapeHTML(q.prompt)}</h2>${quizAnswerText(q,z,i)}
 </div><div class="canvas stack" style="justify-content:center;gap:16px"><div class="label">ÔN TẬP CUỐI PHẦN</div><div class="quiz-progress">${questions.map((qq,j)=>`<span class="${(z.quizChecked||{})[qq.question_id]?'done':''} ${j===i?'now':''}"></span>`).join('')}</div>
 <div class="quiz-score"><strong>Đã thử: ${done}/${questions.length}</strong><span>Đúng: ${correct}/${questions.length}</span></div>
 <div class="icon-row">${btn('check','Kiểm tra câu hiện tại','quizCheck','filled')}${btn('reset','Làm lại câu hiện tại','quizReset')}</div>
 ${z.quizHint?`<div class="result" role="status">${escapeHTML(z.quizHint)}</div>`:''}${checked?`<div class="result ${good?'good':''}" role="status"><strong>${good?'✓ Chính xác':'↺ Thử lại nhé'}</strong><p style="margin:6px 0 0">${escapeHTML(good?q.explain:'Em thử sửa câu này. Sau lần kiểm tra đúng, phần giải thích sẽ xuất hiện.')}</p></div>`:'<div class="result empty">Tự trả lời trước khi xem phản hồi.</div>'}
 <div class="recall-nav">${btn('left','Câu trước','quizPrev')}${pill((i+1)+' / '+questions.length)}${btn('right','Câu sau','quizNext')}</div>
 <p class="tiny">Phản hồi chỉ dành cho luyện tập, không phải kết quả EXIT.</p>
 </div></div>`;
}

function renderVisual(s,readonly=false){
const val=v(s.scene_id),ro=readonly?'aria-hidden="true"':'';
switch(s.visual){
case 'active-recall':return renderRecall(s);
case 'review-quiz':return renderReview(s);
case 'recovery-flow':return renderRecoveryFlow();
case 'recovery-token':return renderRecoveryToken();
case 'types-intro':return renderTypesIntro();
case 'remember':return `<div class="layout-6040"><div class="canvas graphic soft">${webWindow('Chào mừng em quay lại!')}</div><div class="stack fill">${c(`<div class="label">Hôm qua</div><h3>Em chọn Tiếng Việt</h3><p>Trang đổi ngôn ngữ hiển thị.</p>`,'warm')}${c(`<div class="label">Hôm nay</div><h3>Vẫn là Tiếng Việt</h3><p>Không cần chọn lại lần nữa.</p>`,'sky')}${takeaway('Điều gì đã được ghi nhớ? Đây là câu hỏi xuyên suốt bài.')}</div></div>`;
case 'diagnosis-flow':return renderDiagnosisFlow();
case 'diagnosis-token':return renderDiagnosisToken();
case 'website-before-after':return `<div class="canvas stack fill"><div class="layout-5050" style="flex:1;min-height:0">${c(`<div class="label">Lần đầu</div><div style="margin:13px 0">${webWindow('Welcome to LinguaLearn','English')}</div><p>Em chọn tiếng Việt.</p>`,'white')}${c(`<div class="label">Lần sau</div><div style="margin:13px 0">${webWindow('Chào mừng em!','Tiếng Việt')}</div><p>Website vẫn dùng lựa chọn trước.</p>`,'white')}</div>${takeaway('Thông tin cần nhớ có thể là lựa chọn “ngôn ngữ = tiếng Việt”.')}</div>`;
case 'cookie-concept':return `<div class="layout-6040"><div class="canvas graphic soft"><div class="cookie-card" style="width:90%;height:85%"><div class="biscuit" aria-hidden="true">🍪</div><div class="label">Mẩu dữ liệu ví dụ</div><code>language=vi</code><span class="body-sm">Thông tin có thể được Browser lưu</span></div></div><div class="canvas stack" style="justify-content:center;gap:17px"><div class="label">Hiểu đúng bản chất</div><div class="feature-title">${k('Cookie')} = dữ liệu</div><div class="line-list"><li><span class="num">1</span><span>Website có thể đề nghị Browser lưu một giá trị.</span></li><li><span class="num">2</span><span>Dữ liệu có thể được gửi lại khi yêu cầu phù hợp.</span></li><li><span class="num">3</span><span>Cookie không tự chạy lệnh hay tạo HTML.</span></li></div>${takeaway('Cookie là dữ liệu nhỏ, không phải chương trình.')}</div></div>`;
case 'classification':return renderClassification();
case 'request-flow':return `<div class="layout-6040"><div class="canvas soft graphic">${flow('right',k('HTTP Request'),'Xin trang web')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Lần truy cập đầu tiên</div><div class="feature-title">Browser chủ động xin trang</div><p class="feature-sub">Người dùng nhập địa chỉ. Browser gửi Request để xin nội dung.</p>${c(`<div class="label">Chiều cần nhớ</div><h3>Browser → Server</h3><p>Máy chủ nhận yêu cầu rồi mới phản hồi.</p>`,'sky')}${takeaway('Request là yêu cầu, không phải phản hồi.')}</div></div>`;
case 'response-flow':return `<div class="layout-6040"><div class="canvas soft graphic">${flow('left',k('HTTP Response')+' + '+k('Set-Cookie'),'Server đề nghị lưu')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Bên trong Response (ví dụ)</div><div class="example-box"><code>Set-Cookie: <span class="alt">language=vi</span></code></div><div class="line-list"><li><span class="num">1</span><span>${k('Set-Cookie')} là tên header do Server gửi.</span></li><li><span class="num">2</span><span>${k('language=vi')} nêu tên và giá trị dữ liệu.</span></li></div>${takeaway('Server gửi chỉ dẫn; Browser có thể lưu hoặc từ chối.')}</div></div>`;
case 'lab-accept':return renderLabAccept();
case 'lab-return':return `<div class="layout-7030"><div class="canvas soft stack" style="justify-content:space-between"><div class="row" style="flex-wrap:wrap">${pill('Đã lưu',val.saved!==false?'green':'red')}${pill('Còn hạn',val.valid!==false?'green':'red')}${pill('Đúng phạm vi',val.scope!==false?'green':'red')}</div><div class="graphic" style="flex:1">${flow('right',k('Cookie header'),'Trong Request phù hợp')}</div><div class="result ${val.ran?'good':'empty'}">${val.ran?((val.saved!==false&&val.valid!==false&&val.scope!==false)?'✓ Browser có thể gửi Cookie: language=vi trong Request này.':'⊘ Một điều kiện không đạt: Browser không gửi Cookie này.'):'Chọn các điều kiện rồi bấm ▶ để kiểm tra.'}</div></div><div class="canvas stack" style="justify-content:center"><div class="label">Điều kiện gửi lại</div>${toggle('saved','Đã lưu Cookie',val.saved!==false)}${toggle('valid','Cookie còn hạn',val.valid!==false)}${toggle('scope','Đúng phạm vi',val.scope!==false)}<div class="icon-row">${btn('play','Kiểm tra điều kiện','runLab','filled')}${btn('reset','Đặt lại','resetLab')}${btn('help','Giải thích điều kiện','openTutor')}</div>${takeaway('Cookie chỉ được gửi lại trong Request phù hợp.')}</div></div>`;
case 'accept-vs-block':return renderAcceptBlock();
case 'recall-flows':return `<div class="layout-6040"><div class="canvas soft graphic">${val.show?flowTwo():`<div class="flow">${node('Browser','Trình duyệt','💻')}<div class="arrow-line"><strong>?</strong><div class="arrow">⇄</div><span class="tiny">Tự ghi hai nhãn</span></div>${node('Server','Máy chủ','🖥️')}</div>`}</div><div class="canvas stack" style="justify-content:center"><div class="label">Tự nhớ · Không nhìn mẫu</div><div class="feature-title">Hai chiều nào?</div><p class="feature-sub">Hãy vẽ hoặc nói hai thông điệp từ trí nhớ.</p><div class="icon-row">${btn('eye',val.show?'Ẩn sơ đồ':'Đối chiếu sau khi tự nhớ','toggleAnswer','filled')}</div>${val.show?`${c(`<h3>Đối chiếu</h3><p>Response: Server → Browser, mang Set-Cookie.<br>Request sau: Browser → Server, có thể mang Cookie.</p>`,'sky')}`:`<div class="result empty">Đáp án đang ẩn. Có thể vẽ trên giấy hoặc nói thành lời.</div>`}${takeaway('Tự nhớ ≠ chỉ đọc lại sơ đồ có sẵn.')}</div></div>`;
case 'timeline':return renderTimeline();
case 'cart-expiry':return renderCartExpiry();
case 'recall-lifetime':return `<div class="layout-5050"><div class="canvas center" style="gap:24px"><div class="large-emoji">⏳</div><div class="feature-title" style="text-align:center">Hai loại Cookie</div><div class="body-sm" style="text-align:center">Nói 2 điểm khác nhau và 1 cách Cookie mất sớm.</div></div><div class="canvas stack" style="justify-content:center"><div class="label">Kiểm tra trí nhớ</div>${val.show?`${c(`<h3>${k('Session Cookie')}</h3><p>Thường kết thúc theo phiên trình duyệt.</p>`,'sky')}${c(`<h3>${k('Persistent Cookie')}</h3><p>Có thời điểm hết hạn; vẫn có thể bị xóa sớm.</p>`,'warm')}`:`<div class="result empty" style="padding:30px">Tự nói/vẽ trước. Đáp án chưa hiện.</div>`}<div class="icon-row">${btn('eye',val.show?'Che đối chiếu':'Hiện đối chiếu','toggleAnswer','filled')}</div></div></div>`;
case 'uses':return renderUses();
case 'tracking-matrix':return renderTracking();
case 'teach-back':return `<div class="layout-6040"><div class="canvas soft center" style="gap:19px"><div class="large-emoji">🎙️</div><div class="feature-title" style="text-align:center">Hãy giảng lại!</div><div class="row">${['SHOP','LANGUAGE','ANALYTICS'].map(t=>choice('A4-03',t,t,'case')).join('')}</div><div class="result">Đã chọn: <strong>${escapeHTML(val.case||'LANGUAGE')}</strong> · Nói 30–60 giây hoặc dùng sơ đồ/thẻ.</div></div><div class="canvas stack" style="justify-content:center"><div class="label">Ba ý cần nói</div><ul class="line-list"><li><span class="num">1</span><span>Website muốn ghi nhớ dữ liệu gì?</span></li><li><span class="num">2</span><span>Khi nào Browser gửi lại Cookie?</span></li><li><span class="num">3</span><span>Ích lợi và một lưu ý riêng tư?</span></li></ul>${takeaway('Lời giải thích do học sinh tạo, giáo viên đánh giá.')}</div></div>`;
case 'exit-intro':return `<div class="layout-6040"><div class="canvas graphic soft">${webWindow('Câu lạc bộ Công nghệ','Giao diện tối')}</div><div class="canvas stack" style="justify-content:center"><div class="label">Website mới: club.example.org</div><div class="example-box"><code>theme=dark</code> <span class="alt">· hạn 5 ngày</span></div><div class="example-box"><code>session_id=K25</code> <span class="alt">· không đặt hạn lâu dài</span></div><p class="body-sm">Dữ kiện do đề cung cấp, không phải Cookie thật.</p>${takeaway('EXIT gồm cơ chế, thời hạn và mục đích/quyền riêng tư.')}</div></div>`;
case 'exit':return `<div class="canvas stack fill"><div class="row" style="justify-content:space-between;align-items:center"><span class="assessment-overlay">Độc lập · Không hiển thị gợi ý hoặc đáp án</span><span class="micro">BÀI TỰ LUẬN · GV CHẤM</span></div><div class="exit-grid" style="flex:1">${exitCard('A','Cơ chế','Vẽ/ghi chiều Request, Response, Set-Cookie và Cookie.')}${exitCard('B','Vòng đời','Phân loại theme=dark và session_id=K25 theo thời hạn.')}${exitCard('C','Mục đích và riêng tư','Nêu một ích lợi và lưu ý khi Cookie được dùng để theo dõi.')}</div><div class="row" style="justify-content:space-between"><div class="tiny">Có thể trả lời ngắn; giáo viên đánh giá nội dung, không chấm tự động.</div><button class="nav-btn next" data-action="submitExit">Gửi để xem xét ${sv('send')}</button>${val.exitIncompletePending?'<button class="nav-btn" data-action="confirmIncomplete">Xác nhận nộp thiếu</button>':''}</div>${val.exitMessage?`<div class="result ${val.exitSubmitted?'good':''}" role="status">${escapeHTML(val.exitMessage)}</div>`:''}</div>`;
case 'mindmap':return `<div class="layout-6040"><div class="canvas soft graphic"><div class="mindmap"><div class="mind-node">${val.show?'Request / Response':'Cơ chế · ?'}</div><div class="mind-node mind-center">🍪<br>COOKIES</div><div class="mind-node">${val.show?'Session / Persistent':'Vòng đời · ?'}</div><div class="mind-node">${val.show?'Ghi nhớ / phân tích':'Công dụng · ?'}</div><div class="mind-node">${val.show?'Theo dõi / giới hạn':'Riêng tư · ?'}</div></div></div><div class="canvas stack" style="justify-content:center"><div class="label">Sơ đồ 4 nhánh</div><div class="feature-title">Tự vẽ trước</div><p class="feature-sub">Bắt đầu với bốn nhánh lớn, rồi tự thêm từ khóa đã học.</p><div class="icon-row">${btn('eye',val.show?'Ẩn mẫu':'Xem gợi ý đối chiếu','toggleAnswer','filled')}</div>${takeaway('Chỉ mở gợi ý sau khi em tự vẽ hoặc nói.')}</div></div>`;
case 'flashcards':{const cards=[['Browser','Ứng dụng mở website'],['Server','Máy chủ tiếp nhận yêu cầu'],['Request','Yêu cầu từ Browser'],['Response','Phản hồi từ Server'],['Cookie','Dữ liệu có thể được lưu và gửi lại'],['Set-Cookie','Header Response đề nghị lưu Cookie'],['Session Cookie','Thường gắn với phiên trình duyệt'],['Persistent Cookie','Có thời điểm hết hạn được chỉ định'],['Tracking','Nhận biết hoạt động theo thời gian']];const n=val.cardIndex||0;const flip=!!val.flipped;return `<div class="layout-6040"><div class="canvas soft stack fill"><div class="row" style="justify-content:space-between"><span class="label">Flashcard ${n+1}/${cards.length}</span><span class="micro">Nói nghĩa trước khi lật</span></div><div class="flashcard" style="flex:1"><div class="${flip?'meaning':'term'}">${escapeHTML(flip?cards[n][1]:cards[n][0])}</div><button type="button" class="iconbtn filled" aria-label="Lật thẻ" title="Lật thẻ" data-action="flipCard">${sv('flip')}</button></div><div class="row" style="justify-content:space-between">${btn('left','Thẻ trước','prevCard')}${btn('right','Thẻ tiếp','nextCard')}</div></div><div class="canvas stack" style="justify-content:center"><div class="label">Học bằng giảng lại</div><div class="feature-title">Kể một hành trình</div><ul class="line-list"><li><span class="num">1</span><span>Browser xin trang.</span></li><li><span class="num">2</span><span>Server có thể gửi Set-Cookie.</span></li><li><span class="num">3</span><span>Browser có thể lưu và gửi lại.</span></li></ul>${takeaway('Dùng từ khóa để nói lại bằng lời của em.')}</div></div>`}
}
return `<div class="canvas">${escapeHTML(s.headline)}</div>`;
}
function choice(id,text,value,key){let yes=v(id)[key]===value;return `<button type="button" class="choice ${yes?'chosen':''}" data-set-id="${escapeHTML(id)}" data-set-key="${escapeHTML(key)}" data-set-val="${escapeHTML(value)}" aria-pressed="${yes}">${text}</button>`}
function classCard(display,description,code){const id='A1-03',val=v(id)['class_'+code];return `<div class="card white stack" style="justify-content:space-between"><div class="label">Thẻ ${code.toUpperCase()}</div><div class="example-box" style="font-size:16px;word-break:break-word"><code>${display}</code></div><p>${v('A1-03').revealed?description:'Hãy chọn vai trò phù hợp.'}</p><select class="select-sm" aria-label="Phân loại thẻ ${code}" data-class="${code}"><option value="">Chọn loại…</option>${[['data','Dữ liệu'],['html','HTML'],['program','Tên tệp chương trình']].map(q=>`<option value="${q[0]}" ${val===q[0]?'selected':''}>${q[1]}</option>`).join('')}</select></div>`}
function half(icon,title,label,desc,cls){return `<div class="half ${cls}"><div class="icon" aria-hidden="true">${icon}</div><h3>${title}</h3><div class="pill blue">${label}</div><div class="outcome">${desc}</div></div>`}
function toggle(id,text,checked){return `<label class="row" style="font-size:15px;font-weight:650"><input type="checkbox" data-toggle="${id}" ${checked?'checked':''} style="height:20px;width:20px;accent-color:#1665c4">${text}</label>`}
function use(icon,tag,title,desc){return `<div class="card white stack" style="justify-content:space-between"><div class="large-emoji">${icon}</div><div class="label">${tag}</div><h3 style="font-size:24px">${title}</h3><p style="font-size:16px">${desc}</p></div>`}
function exitCard(letter,title,question){const z=v('A5-02');return `<div class="exit-card"><div class="row"><span class="pill blue">${letter}</span><h3>${title}</h3></div><p>${question}</p><textarea class="answer" id="exit${letter}" aria-label="Trả lời phần ${letter}" placeholder="Ghi/vẽ bằng từ khóa…">${escapeHTML(z['exit'+letter]||'')}</textarea></div>`}
function render(){let s=scenes[state.idx];let special=s.scene_id==='A5-02';const normal=scenes.filter(x=>!x.conditional);const normalIndex=normal.findIndex(x=>x.scene_id===s.scene_id);const shownIndex=normalIndex<0?Math.max(1,normal.findIndex(x=>x.scene_id===scenes[state.idx-1]?.scene_id)+1):normalIndex+1;const shownTotal=normal.length;const canExit=!!v('A5-02').exitSubmitted||v('A5-02').exitMessage?.includes('nộp thiếu');document.getElementById('app').innerHTML=`<div class="app-shell"><header class="topbar"><div class="brand"><div class="brandmark">🍪</div><div class="brand-copy"><div class="brand-title">COOKIES · HỌC QUA KHÁM PHÁ</div><div class="brand-sub">Bài học Cookies · Bản triển khai Skill 11 · Tiếng Việt</div></div></div><div class="toolbar"><span class="micro" style="margin-right:8px">54 PHÚT 30 GIÂY · HỌC CHÍNH</span><button class="tool" data-action="openMenu" aria-label="Mở mục lục 30 định nghĩa màn" title="Mục lục" ${special?'disabled':''}>${sv('menu')}</button><button class="tool" data-action="exportProgress" aria-label="Xuất tiến độ học" title="Xuất tiến độ">${sv('notebook')}</button><button class="tool primary" data-action="openTutor" aria-label="Trợ giảng" title="Trợ giảng" ${special?'disabled':''}>${sv('help')}</button></div></header><main class="stage" id="mainStage"><section class="scene-header"><div><div class="eyebrow">${escapeHTML(s.eyebrow)}</div><h1>${escapeHTML(s.headline).replaceAll('`','')}</h1><p>${renderInline(s.lead,special)}</p></div><div class="head-right">${facts[s.scene_id]&&!special?`<button class="curiosity" data-action="openFact" aria-label="Em có biết? Mở thông tin mở rộng">✦ Em có biết?</button>`:''}<span class="pill">${escapeHTML(s.kind)}</span></div></section><section class="scene-body" aria-label="Nội dung chính của màn">${renderVisual(s)}</section><section class="scene-bottom"><div class="bridge">${escapeHTML(s.bridge)}</div><div class="meta-right">${escapeHTML(s.scene_id)} · ${s.estimated_seconds}s · Bài học</div></section></main><footer class="bottom-nav"><button class="nav-btn" data-action="prev" ${state.idx===0||special?'disabled':''}>${sv('left')} <span>Trước</span></button><div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${shownTotal}" aria-valuenow="${shownIndex}" aria-label="Tiến trình đã xem"><div class="progress-fill" style="width:${shownIndex/shownTotal*100}%"></div></div><div class="nav-meta">${s.conditional?'Ôn nền':shownIndex+' / '+shownTotal}</div><button class="nav-btn next" data-action="next" ${state.idx===scenes.length-1||(special&&!canExit)?'disabled':''}><span>${s.scene_id==='A5-01'?'Bắt đầu EXIT':s.scene_id==='A5-02'?'Sau EXIT':'Xem tiếp'}</span> ${sv('right')}</button></footer></div>`;
 bindButtons();if(state.activeModal)renderModal();
}
function renderInline(str,noKeywords=false){
 const raw=String(str??'');if(noKeywords)return escapeHTML(raw);
 return raw.split(/(`[^`]+`|HTTP Request|HTTP Response)/g).map(bit=>{
  if(bit.startsWith('`')&&bit.endsWith('`')){const term=bit.slice(1,-1);return glossary[term]?k(term):`<strong><code>${escapeHTML(term)}</code></strong>`}
  if(bit==='HTTP Request'||bit==='HTTP Response')return k(bit);
  return escapeHTML(bit)
 }).join('')
}
function changeQuizAnswer(type,n,val){const id=scenes[state.idx].scene_id,z=v(id),i=z.quizIndex||0,key=REVIEW_BANK[id][i].question_id,answers={...(z.quizAnswers||{})},current=answers[key];
 if(type==='choice') answers[key]=n;
 if(type==='multi'){let arr=Array.isArray(current)?current.slice():[];arr=arr.includes(n)?arr.filter(x=>x!==n):[...arr,n]; answers[key]=arr}
 if(type==='order'){let arr=Array.isArray(current)?current.slice():[];if(!arr.includes(n))arr.push(n);answers[key]=arr}
 if(type==='match'){let arr=Array.isArray(current)?current.slice():[];arr[n]=val;answers[key]=arr}
 const checked={...(z.quizChecked||{})};delete checked[key];const correct={...(z.quizCorrect||{})};delete correct[key];setval(id,{quizAnswers:answers,quizChecked:checked,quizCorrect:correct});render();}
function checkQuiz(){const id=scenes[state.idx].scene_id,z=v(id),i=z.quizIndex||0,q=REVIEW_BANK[id]?.[i],key=q?.question_id,ans=(z.quizAnswers||{})[key];if(!q)return;
 let complete=true,good=false;
 if(q.mode==='single'||q.mode==='tf'){complete=Number.isInteger(ans);good=ans===q.answer}
 if(q.mode==='multi'){complete=Array.isArray(ans)&&ans.length>0;good=complete&&[...ans].sort().join(',')===[...q.answer].sort().join(',')}
 if(q.mode==='order'){complete=Array.isArray(ans)&&ans.length===q.steps.length;good=complete&&ans.join(',')===q.answer.join(',')}
 if(q.mode==='match'){complete=Array.isArray(ans)&&Array.from({length:q.pairs.length},(_,j)=>Number.isInteger(ans[j])).every(Boolean);good=complete&&q.pairs.every((pair,j)=>q.choices[ans[j]]===pair.answer)}
 if(!complete){setval(id,{quizHint:'Hãy trả lời đủ trước khi kiểm tra.'});render();return}
 const checked={...(z.quizChecked||{}),[key]:true},correct={...(z.quizCorrect||{}),[key]:good};setval(id,{quizChecked:checked,quizCorrect:correct,quizHint:''});render();}

function bindButtons(){document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',handle));document.querySelectorAll('[data-set-id]').forEach(b=>b.addEventListener('click',()=>{setval(b.dataset.setId,{[b.dataset.setKey]:b.dataset.setVal});render()}));document.querySelectorAll('[data-toggle]').forEach(b=>b.addEventListener('change',()=>{setval(scenes[state.idx].scene_id,{[b.dataset.toggle]:b.checked,ran:false});render()}));document.querySelectorAll('[data-class]').forEach(b=>b.addEventListener('change',()=>setval('A1-03',{['class_'+b.dataset.class]:b.value})));document.querySelectorAll('[data-select-key]').forEach(b=>b.addEventListener('change',()=>{setval(scenes[state.idx].scene_id,{[b.dataset.selectKey]:b.value,checked:false,revealed:false,checkMessage:'',checkResult:''})}));document.querySelectorAll('[data-quiz-choice]').forEach(b=>b.addEventListener('click',()=>changeQuizAnswer('choice',+b.dataset.quizChoice)));document.querySelectorAll('[data-quiz-multi]').forEach(b=>b.addEventListener('click',()=>changeQuizAnswer('multi',+b.dataset.quizMulti)));document.querySelectorAll('[data-quiz-order]').forEach(b=>b.addEventListener('click',()=>changeQuizAnswer('order',+b.dataset.quizOrder)));document.querySelectorAll('[data-quiz-match]').forEach(b=>b.addEventListener('change',()=>changeQuizAnswer('match',+b.dataset.quizMatch,b.value===''?null:+b.value)));document.querySelectorAll('.answer').forEach(b=>b.addEventListener('input',()=>setval('A5-02',{[b.id]:b.value})));document.querySelectorAll('.keyword').forEach(b=>{b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openBubble(b,b.dataset.term,glossary[b.dataset.term],'glossary')});b.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)openBubble(b,b.dataset.term,glossary[b.dataset.term],'glossary')});b.addEventListener('focus',()=>openBubble(b,b.dataset.term,glossary[b.dataset.term],'glossary'));});}

function handleAssessmentAction(a,s){
 const id=s.scene_id,z=v(id),set=(patch)=>{setval(id,patch);render()},notice=(str)=>set({checked:true,checkMessage:str,checkResult:'warn'}),check=(good,ok,bad,reveal=false)=>set({checked:true,correct:good,checkMessage:good?ok:bad,checkResult:good?'ok':'warn',revealed:reveal});
 switch(a){
 case 'checkDiagFlow':
 case 'checkRecoveryFlow':{
 if(!z.req||!z.res){notice('Chọn đủ hai chiều để kiểm tra.');return true}
 check(z.req==='bs'&&z.res==='sb','Đúng: Browser xin trang; Server trả lời.','Hai chiều chưa đúng. Em có thể xem màn ôn để thử lại.',false);return true}
 case 'checkDiagToken':{
 if(!z.left||!z.right){notice('Chọn ý nghĩa của cả hai phần.');return true}
 check(z.left==='name'&&z.right==='value','Đúng: language là tên; vi là giá trị.','Hai phần chưa đúng. Hãy dùng ví dụ theme=dark ở màn ôn.');return true}
 case 'checkRecoveryToken':{
 if(!z.guess){notice('Em chọn một ý nghĩa cho vi nhé.');return true}
 check(z.guess==='value','Đúng rồi: vi là giá trị tiếng Việt.','Xem lại ví dụ theme=dark và thử một lần nữa.');return true}
 case 'checkClass':{
 if(!z.class_d||!z.class_h||!z.class_p){notice('Hãy phân loại đủ ba thẻ trước.');return true}
 const good=z.class_d==='data'&&z.class_h==='html'&&z.class_p==='program';
 check(good, 'Ba thẻ đã ghép đúng. Em hãy giải thích ít nhất một thẻ bằng lời.','Có thẻ chưa đúng. Dấu =, thẻ HTML và đuôi .exe cho những gợi ý khác nhau.',true);return true}
 case 'checkCompare':{
 if(!z.acc||!z.blk){notice('Cần dự đoán cho cả chấp nhận và chặn.');return true}
 const good=z.acc==='send'&&z.blk==='no';check(good,'Đúng theo giả thiết: nhánh chấp nhận có thể gửi lại, nhánh chặn không.','Hãy xem chỗ nào được lưu; chỗ nào đã bị chặn.',true);return true}
 case 'checkTimeline':{
 const fields=['s0','s1','s2','p0','p1','p2']; if(fields.some(k=>!z[k])){notice('Chọn đủ sáu ô rồi đối chiếu.');return true}
 const answers=['yes','no','no','yes','yes','yes']; const scored=fields.map((k,i)=>z[k]===answers[i]);
 const good=scored.every(Boolean),n=scored.filter(Boolean).length;
 check(good,`${n}/6 ô khớp với giả thiết mô hình. Em giải thích vì sao Session và Persistent khác nhau.`,`${n}/6 ô khớp mô hình. Hãy xem lại kết thúc phiên và thời hạn 5 ngày.`,true);return true}
 case 'checkCart':{
 if(!z.without||!z.with){notice('Phân loại cả hai trường hợp.');return true}
 check(z.without==='session'&&z.with==='persistent','Đúng: thay thời hạn, thay loại Cookie.','Hãy dựa vào Expires/Max-Age, không dựa vào tên giỏ hàng.',true);return true}
 case 'checkUses':{
 if(['use0','use1','use2'].some(k=>!z[k])){notice('Hãy ghép đủ ba tình huống.');return true}
 check(z.use0==='shop'&&z.use1==='lang'&&z.use2==='stats','Ghép đúng 3/3. Nêu một lý do bằng lời để hoàn thành mục tiêu.','Có công dụng chưa khớp. Xét website thực sự muốn ghi nhớ/đo đếm gì.',true);return true}
 case 'markReason':set({reasonAttempted:!z.reasonAttempted,checkResult:'',checkMessage:''});return true;
 case 'checkClaim':{
 if(!z.claim||!z.reasonAttempted){notice('Hãy chọn nhận định và tự nêu một ví dụ trước khi đối chiếu.');return true}
 check(z.claim==='no','Đúng: sống lâu không tự đồng nghĩa với theo dõi.','Nhận định sai vì có Cookie tồn tại lâu để ghi nhớ một lựa chọn, không nhất thiết để theo dõi.',true);return true}
 default:return false
 }
}

function handle(e){let a=e.currentTarget.dataset.action;let s=scenes[state.idx];if(handleAssessmentAction(a,s))return;switch(a){
case'recallMark':{let z=v(s.scene_id),i=z.recallStep||0;setval(s.scene_id,{attempted:{...(z.attempted||{}),[(RECALL_BANK[s.scene_id]||[])[i].cue_id]:true}});render();break;}
case'recallReveal':{let z=v(s.scene_id),i=z.recallStep||0;if(!(z.attempted||{})[(RECALL_BANK[s.scene_id]||[])[i].cue_id])break;setval(s.scene_id,{shown:{...(z.shown||{}),[(RECALL_BANK[s.scene_id]||[])[i].cue_id]:true}});render();break;}
case'recallNext':setval(s.scene_id,{recallStep:Math.min((v(s.scene_id).recallStep||0)+1,(RECALL_BANK[s.scene_id]||[]).length-1)});render();break;
case'recallPrev':setval(s.scene_id,{recallStep:Math.max(0,(v(s.scene_id).recallStep||0)-1)});render();break;
case'quizCheck':checkQuiz();break;
case'quizNext':setval(s.scene_id,{quizIndex:Math.min((v(s.scene_id).quizIndex||0)+1,(REVIEW_BANK[s.scene_id]||[]).length-1)});render();break;
case'quizPrev':setval(s.scene_id,{quizIndex:Math.max(0,(v(s.scene_id).quizIndex||0)-1)});render();break;
case'quizReset':{let z=v(s.scene_id),i=z.quizIndex||0,key=REVIEW_BANK[s.scene_id][i].question_id,answers={...(z.quizAnswers||{})},checked={...(z.quizChecked||{})},correct={...(z.quizCorrect||{})};delete answers[key];delete checked[key];delete correct[key];setval(s.scene_id,{quizAnswers:answers,quizChecked:checked,quizCorrect:correct,quizHint:''});render();break;}
case'prev':resetState(routeIndex(-1));break;case'next':if(s.scene_id==='A5-01'){state.examStarted=true;setval('A5-01',{exitStarted:true})}resetState(routeIndex(1));break;case'openMenu':state.activeModal='menu';renderModal();break;case'exportProgress':exportProgress();break;case'openTutor':openTutor(e.currentTarget);break;case'openFact':openBubble(e.currentTarget,'Em có biết?',facts[s.scene_id]||'','fact');break;case'toggleAnswer':setval(s.scene_id,{show:!v(s.scene_id).show});render();break;case'runLab':{let z=v(s.scene_id);if(s.scene_id==='A2-03'&&(!z.permission||!z.prediction)){setval(s.scene_id,{checkMessage:'Chọn điều kiện và dự đoán trước khi chạy.',checkResult:'warn'});render();break}const good=s.scene_id==='A2-03'?((z.permission==='accept'&&z.prediction==='stored')||(z.permission==='block'&&z.prediction==='not')):null;setval(s.scene_id,{ran:true,checked:true,checkResult:good===true?'ok':'warn',checkMessage:s.scene_id==='A2-03'?(good?'Dự đoán khớp mô hình. '+(z.permission==='accept'?'Cookie được lưu.':'Cookie bị chặn, không lưu.'):'Kết quả khác dự đoán: '+(z.permission==='accept'?'Browser có thể lưu Cookie.':'Browser không lưu Cookie bị chặn.')):'Đã chạy mô hình.'});render();break;}case'resetLab':state.values[s.scene_id]={};render();break;case'flipCard':setval(s.scene_id,{flipped:!v(s.scene_id).flipped});render();break;case'nextCard':setval(s.scene_id,{cardIndex:((v(s.scene_id).cardIndex||0)+1)%9,flipped:false});render();break;case'prevCard':setval(s.scene_id,{cardIndex:((v(s.scene_id).cardIndex||0)+8)%9,flipped:false});render();break;case'submitExit':{let z=v('A5-02');if(!String(z.exitA||'').trim()||!String(z.exitB||'').trim()||!String(z.exitC||'').trim()){setval('A5-02',{exitMessage:'Còn ô chưa có minh chứng. Hãy hoàn thành hoặc ghi rõ phần chưa làm; chưa được đánh dấu đạt.',exitSubmitted:false,exitIncompletePending:true});render()}else{setval('A5-02',{exitMessage:'Đã lưu bài nộp trên trình duyệt này. Hãy xuất tiến độ để gửi giáo viên. Bài chưa được chấm.',exitSubmitted:true,exitIncompletePending:false});render()}break;}case'confirmIncomplete':setval('A5-02',{exitMessage:'Đã ghi nhận nộp thiếu theo xác nhận. Trạng thái SUBMITTED_INCOMPLETE, chưa hoàn thành và chưa chấm.',exitSubmitted:false,exitIncompletePending:false});render();break;}
}
function closeBubble(){const el=document.getElementById('bubble');el.hidden=true;el.innerHTML='';state.bubbleAnchor=null;state.bubbleMode=''}
function openBubble(anchor,title,body,mode){if(!body)return;const el=document.getElementById('bubble');state.bubbleAnchor=anchor;state.bubbleMode=mode;el.hidden=false;let tutorMarkup='';if(mode==='tutor')tutorMarkup=`<div class="popover-rail">${[['explain','Giải thích'],['example','Ví dụ'],['recall','Gợi nhớ']].map(x=>`<button class="poptab ${state.tutorTab===x[0]?'active':''}" data-tutor-tab="${x[0]}">${x[1]}</button>`).join('')}</div>`;el.innerHTML=`<div class="bubble-header"><span>${escapeHTML(title)}</span><button class="bubble-close" aria-label="Đóng bong bóng" data-action="closeBubble">×</button></div>${tutorMarkup}<p>${escapeHTML(body)}</p>`;el.querySelector('[data-action="closeBubble"]').addEventListener('click',()=>{closeBubble();anchor?.focus()});el.querySelectorAll('[data-tutor-tab]').forEach(b=>b.addEventListener('click',()=>{state.tutorTab=b.dataset.tutorTab;openTutor(anchor)}));positionBubble(el,anchor)}
function positionBubble(el,anchor){const rect=anchor.getBoundingClientRect();const w=el.offsetWidth,h=el.offsetHeight;const left=Math.min(window.innerWidth-w-9,Math.max(10,rect.left+rect.width/2-w/2));let top=rect.top-h-16;let p='above';if(top<8){top=rect.bottom+13;p='below'}if(top+h>window.innerHeight-6)top=Math.max(8,window.innerHeight-h-8);el.style.left=left+'px';el.style.top=top+'px';el.dataset.placement=p}
function openTutor(anchor){let s=scenes[state.idx];if(s.scene_id==='A5-02')return;let content=state.tutorTab==='explain'?s.tutor:state.tutorTab==='example'?(facts[s.scene_id]||'Hãy xem lại ví dụ ngay trên màn rồi thử đổi một điều kiện.'):'Nói lại ý chính bằng lời của em, sau đó dùng sơ đồ để kiểm tra điều mình nhớ.';openBubble(anchor,'Trợ giảng · '+s.scene_id,content,'tutor')}
function renderModal(){
 const old=document.getElementById('layer');if(old)old.remove();
 if(!state.activeModal)return;
 const layer=document.createElement('div');layer.id='layer';layer.className='overlay';
 let body='',modalTitle='';
 if(state.activeModal==='menu'){
  modalTitle='Mục lục · 28 màn + 2 ôn nền';
  body=`<div class="scene-menu">${scenes.map((x,i)=>`<button type="button" data-jump="${i}" ${x.scene_id==='A5-02'&&!state.examStarted?'disabled':''} class="${i===state.idx?'active':''}"><b>${escapeHTML(x.scene_id)}</b> · ${escapeHTML(x.headline)}<br><span class="tiny">${escapeHTML(x.kind)}</span></button>`).join('')}</div><p class="tiny">Mục lục dùng để điều hướng. Mở màn không đồng nghĩa đạt kiến thức.</p>`;
 }else return;
 layer.innerHTML=`<section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHTML(modalTitle)}"><div class="modal-head"><div class="modal-title">${escapeHTML(modalTitle)}</div><button type="button" class="iconbtn" id="closeLayer" aria-label="Đóng">${sv('close')}</button></div>${body}</section>`;
 document.body.append(layer);
 layer.querySelector('#closeLayer').addEventListener('click',()=>{state.activeModal=null;layer.remove()});
 layer.addEventListener('click',e=>{if(e.target===layer){state.activeModal=null;layer.remove()}});
 layer.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{let i=+b.dataset.jump;state.activeModal=null;resetState(i)}));
}
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBubble();if(state.activeModal){state.activeModal=null;document.getElementById('layer')?.remove()}}});window.addEventListener('click',e=>{if(!e.target.closest('.keyword')&&!e.target.closest('.bubble')&&!e.target.closest('[data-action="openFact"]')&&!e.target.closest('[data-action="openTutor"]'))closeBubble()});window.addEventListener('resize',()=>{if(state.bubbleAnchor&&!document.getElementById('bubble').hidden)positionBubble(document.getElementById('bubble'),state.bubbleAnchor)});
window.LESSON_RUNTIME={getScene:()=>scenes[state.idx].scene_id,counts:()=>({scenes:scenes.length,normal:scenes.filter(s=>!s.conditional).length}),getProgress:()=>JSON.parse(JSON.stringify(state.values)),export:exportProgress,reset:()=>{if(confirm('Xóa toàn bộ tiến độ được lưu trên trình duyệt này?')){localStorage.removeItem(STORE_KEY);state.values={};state.idx=0;state.examStarted=false;render()}}};
render();
})();
