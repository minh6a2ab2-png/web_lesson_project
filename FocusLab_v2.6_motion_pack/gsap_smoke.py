"""Public synthetic GSAP adapter test, no lesson/private data."""
from pathlib import Path
import json, hashlib
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parent
OUT=ROOT/"evidence"
OUT.mkdir(exist_ok=True)
ENGINE="""function createMotionEngine({preferGsap=false}={}){let active=null;let generation=0;const mq=matchMedia('(prefers-reduced-motion: reduce)');function stop(){generation++;if(active){active.cancel();active=null}}function travel(el,from,to,duration,enabled){stop();el.style.transform=`translate(${to}px,-50%)`;if(!enabled||mq.matches||document.hidden||from===to)return;const ticket=generation;if(preferGsap&&globalThis.gsap){const g=globalThis.gsap;let tween=g.fromTo(el,{x:from,yPercent:-50},{x:to,yPercent:-50,duration:duration/1000,ease:'power1.inOut',overwrite:true,onComplete:()=>{if(ticket===generation)active=null}});active={cancel:()=>{tween.kill();g.set(el,{x:to,yPercent:-50})}}}else{let a=el.animate([{transform:`translate(${from}px,-50%)`},{transform:`translate(${to}px,-50%)`}],{duration,easing:'cubic-bezier(.45,0,.55,1)'});active=a;a.onfinish=()=>{if(ticket===generation)active=null}}}return {stop,travel,get running(){return !!active},get reduced(){return mq.matches}}}""".replace("\\\u0060","\u0060").replace("\\$","$")
checks=[]
def check(name, value):
    checks.append({"name":name,"pass":bool(value)})
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page(viewport={"width":900,"height":500},reduced_motion="no-preference")
    errors=[]
    page.on("pageerror",lambda err:errors.append(str(err)))
    page.set_content("""<!doctype html><meta charset="utf-8"><style>body{font:20px system-ui;background:#f8f8f3;color:#172b42;padding:30px}.rail{position:relative;width:400px;height:4px;background:#0f6275;margin:60px 0}.marker{position:absolute;width:20px;height:20px;background:#d97706;top:50%;left:0}</style><h1>Motion adapter smoke test</h1><p>Synthetic fixture, no learner data.</p><div class="rail"><span class="marker" id="marker"></span></div>""")
    page.add_script_tag(path=str(ROOT/"node_modules/gsap/dist/gsap.min.js"))
    page.add_script_tag(content=ENGINE)
    page.evaluate("window.engine=createMotionEngine({preferGsap:true});window.marker=document.getElementById('marker');window.x=()=>new DOMMatrix(getComputedStyle(marker).transform).m41")
    version=page.evaluate("gsap.version")
    check("real GSAP version pinned",version=="3.13.0")
    page.evaluate("engine.travel(marker,0,300,400,true)")
    check("real tween active",page.evaluate("gsap.getTweensOf(marker).length===1 && engine.running"))
    page.wait_for_timeout(110)
    check("intermediate forward position",page.evaluate("x()>0 && x()<300"))
    page.screenshot(path=str(OUT/"inflight.png"))
    page.wait_for_timeout(450)
    check("forward endpoint",page.evaluate("Math.abs(x()-300)<1 && !engine.running"))
    page.evaluate("engine.travel(marker,300,0,400,true)")
    page.wait_for_timeout(110)
    check("intermediate reverse position",page.evaluate("x()>0 && x()<300"))
    page.evaluate("engine.stop()")
    check("interrupt kills tween",page.evaluate("gsap.getTweensOf(marker).length===0 && !engine.running && Math.abs(x())<1"))
    page.evaluate("engine.travel(marker,0,300,400,true);engine.travel(marker,300,0,400,true)")
    check("replacement leaves one tween",page.evaluate("gsap.getTweensOf(marker).length===1"))
    page.wait_for_timeout(450)
    check("replacement ends correctly",page.evaluate("Math.abs(x())<1 && !engine.running"))
    page.emulate_media(reduced_motion="reduce")
    page.evaluate("engine.travel(marker,0,300,400,true)")
    check("reduced motion bypasses tween",page.evaluate("!engine.running && gsap.getTweensOf(marker).length===0 && Math.abs(x()-300)<1"))
    page.emulate_media(reduced_motion="no-preference")
    page.evaluate("engine.travel(marker,300,0,400,false)")
    check("disabled motion is static",page.evaluate("!engine.running && Math.abs(x())<1"))
    page.evaluate("window.engine=createMotionEngine({preferGsap:false});engine.travel(marker,0,300,400,true)")
    check("native fallback active",page.evaluate("marker.getAnimations().length===1 && engine.running"))
    page.wait_for_timeout(450)
    check("native endpoint",page.evaluate("Math.abs(x()-300)<1 && !engine.running"))
    check("no JS errors",not errors)
    browser.close()
report={"scope":"public synthetic actual GSAP adapter test; not R04, not full timeline, not license or offline release audit","version":version,"checks":checks,"passed":sum(c["pass"] for c in checks),"total":len(checks)}
(OUT/"report.json").write_text(json.dumps(report,indent=2))
(OUT/"manifest.json").write_text(json.dumps({f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in OUT.iterdir() if f.is_file()},indent=2))
print(json.dumps(report,indent=2))
raise SystemExit(0 if report["passed"]==report["total"] else 1)
