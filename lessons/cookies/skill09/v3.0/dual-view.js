
/* Dual View – Skill 09 v2.1 preview; does not modify the teaching engine. */
(()=>{
const $=id=>document.getElementById(id);
const isExit=i=>d[i]&&d[i].section==='ACT05';
const clamp=i=>Math.max(0,Math.min(d.length-1,i));
const firstEligible=()=>d.findIndex(x=>x.section==='ACT02');
let split=false, pair='adjacent', left=firstEligible(),right=firstEligible()+1;
function titleFor(i){const s=d[i];return `${String(i+1).padStart(2,'0')} · ${s.section}: ${s.title}`}
function setModeButtons(){
$('singleMode').classList.toggle('is-selected',!split);$('singleMode').setAttribute('aria-pressed',String(!split));
$('dualMode').classList.toggle('is-selected',split);$('dualMode').setAttribute('aria-pressed',String(split));
$('adjacentMode').classList.toggle('is-selected',pair==='adjacent');$('adjacentMode').setAttribute('aria-pressed',String(pair==='adjacent'));
$('freeMode').classList.toggle('is-selected',pair==='free');$('freeMode').setAttribute('aria-pressed',String(pair==='free'));
for(const el of ['adjacentMode','freeMode','ratioSelect'])$(el).disabled=!split;
$('singleCanvas').hidden=split;$('dualRoot').hidden=!split;$('nav').hidden=split;$('note').hidden=split;
$('dualHelp').textContent=!split?'Một slide lớn để giảng giải. Bật Hai slide để so sánh hoặc tham chiếu song song.':pair==='adjacent'?'Hai màn liền kề, điều hướng theo cặp. Có thể chuyển sang Bất kỳ để chọn hai nội dung khác nhau.':'Hai màn độc lập: chọn, chuyển từng phía hoặc đảo vị trí. Mỗi khung cuộn riêng.';
$('rightSelect').disabled=pair==='adjacent';$('swapSlides').disabled=pair==='adjacent';$('nextPair').disabled=pair!=='adjacent';
}
function populate(){for(const id of ['leftSelect','rightSelect']){const sel=$(id);sel.replaceChildren();d.forEach((s,i)=>{if(isExit(i))return;const opt=document.createElement('option');opt.value=i;opt.textContent=titleFor(i);sel.append(opt)})}}
function ensurePair(){
 if(isExit(left)||isExit(right)){split=false;setModeButtons();$('dualHelp').textContent='EXIT độc lập chỉ trình bày một màn; không ghép với slide học tập để tránh lộ gợi ý.';return false}
 if(pair==='adjacent'){if(left>=d.length-1)left=d.length-2;right=left+1;if(isExit(left)||isExit(right)){left=d.findIndex(x=>x.section==='ACT05')-2;right=left+1}}
 return true;
}
function pane(side,index){
 const s=d[index];$(side+'Id').textContent=s.id;$(side+'Count').textContent=(index+1)+' / '+d.length;
 $(side+'Section').textContent=s.section+' · '+s.layout.toUpperCase();$(side+'Title').textContent=s.title;$(side+'Subtitle').textContent=s.subtitle;
 $(side+'Stage').innerHTML=contents(s);
 $(side+'Prev').disabled=index===0||pair==='adjacent'&&side==='right';
 $(side+'Next').disabled=index===d.length-1||pair==='adjacent'&&side==='right';
}
function refresh(){setModeButtons();if(!split)return;if(!ensurePair())return;
 $('leftSelect').value=String(left);$('rightSelect').value=String(right);
 pane('left',left);pane('right',right);
 $('pairInfo').textContent=pair==='adjacent'?'Đang xem hai slide liền kề':'Đang xem hai slide lựa chọn độc lập';$('nextPair').disabled=pair!=='adjacent'||isExit(clamp(left+2))||left>=d.length-2;
 const val=$('ratioSelect').value;const g=$('dualGrid');g.style.setProperty('--left',val==='60'?'1.5fr':val==='40'?'1fr':'1fr');g.style.setProperty('--right',val==='60'?'1fr':val==='40'?'1.5fr':'1fr');
}
function toggle(on){split=on;if(on&&isExit(n)){split=false;$('dualHelp').textContent='Không ghép màn EXIT với bài luyện để giữ tính độc lập của đánh giá.';return;}if(on&&pair==='adjacent'&&left>=d.length-2){left=firstEligible()}refresh()}
$('singleMode').onclick=()=>toggle(false);$('dualMode').onclick=()=>toggle(true);
$('adjacentMode').onclick=()=>{pair='adjacent';refresh()};$('freeMode').onclick=()=>{pair='free';refresh()};
$('leftSelect').onchange=e=>{left=Number(e.target.value);refresh()};$('rightSelect').onchange=e=>{right=Number(e.target.value);refresh()};
$('ratioSelect').onchange=refresh;
$('swapSlides').onclick=()=>{if(pair!=='free')return;[left,right]=[right,left];refresh()};
$('nextPair').onclick=()=>{if(pair!=='adjacent'||isExit(clamp(left+2)))return;left=clamp(left+1);refresh()};
function step(side,delta){if(pair==='adjacent'){left=clamp(left+delta);refresh();return;}if(side==='left'){const k=clamp(left+delta);if(!isExit(k))left=k;}else{const k=clamp(right+delta);if(!isExit(k))right=k;}refresh()}
$('leftPrev').onclick=()=>step('left',-1);$('leftNext').onclick=()=>step('left',1);
$('rightPrev').onclick=()=>step('right',-1);$('rightNext').onclick=()=>step('right',1);
// Existing prototype listens for arrows in single mode. Stop them in capture phase for dual mode and use Alt + arrows to navigate left, Shift+Alt + arrows for right.
document.addEventListener('keydown',e=>{if(!split)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
 if(e.target.matches('input,select,textarea'))return;
 e.stopImmediatePropagation();if(e.altKey){e.preventDefault();step(e.shiftKey?'right':'left',e.key==='ArrowRight'?1:-1)}
}},true);
populate();setModeButtons();
})();
