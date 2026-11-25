"""Bounded public-data infrastructure smoke test; not a release gate for R04."""
import concurrent.futures, functools, hashlib, io, json, subprocess, threading, urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "evidence"
OUT.mkdir(exist_ok=True)
SOURCES = [
 ("A05-INFRA-CABLE","https://upload.wikimedia.org/wikipedia/commons/9/91/Submarine_Optical_Cables.jpg","https://commons.wikimedia.org/wiki/File:Submarine_Optical_Cables.jpg","Lonnie Hagadorn","CC BY-SA 4.0"),
 ("A05-INFRA-ROUTER","https://upload.wikimedia.org/wikipedia/commons/6/6b/Router_in_Use.jpg","https://commons.wikimedia.org/wiki/File:Router_in_Use.jpg","Ryan Hodnett","CC BY-SA 4.0"),
 ("A05-HISTORY-WEB","https://upload.wikimedia.org/wikipedia/commons/d/d1/First_Web_Server.jpg","https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg","Coolcaesar at English Wikipedia","CC BY-SA 3.0"),
 ("A05-LEAD-03","https://images.pexels.com/photos/5073493/pexels-photo-5073493.jpeg","https://www.pexels.com/photo/cables-plugged-into-patch-panel-5073493/","Brett Sayles","Pexels License"),
 ("A05-LEAD-11","https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg","https://www.pexels.com/photo/server-racks-on-data-center-5480781/","Brett Sayles","Pexels License"),
 ("A05-CTX-PHOTO","https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg","https://www.pexels.com/photo/photo-of-a-gray-dell-laptop-displaying-pexels-webpage-811587/","Lisa from Pexels","Pexels License")
]
def allowed(url):
    u = urlparse(url)
    return u.scheme == "https" and u.hostname in {"upload.wikimedia.org","images.pexels.com"} and u.port in (None,443) and not u.username and not u.password
class Redirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if not allowed(newurl): raise ValueError("Redirect not allowlisted")
        return super().redirect_request(req, fp, code, msg, headers, newurl)
def acquire(source):
    aid,url,page,author,license_name=source
    record=dict(asset_id=aid,url=url,source=page,author=author,license=license_name)
    try:
        if not allowed(url): raise ValueError("URL not allowlisted")
        request=urllib.request.Request(url,headers={"User-Agent":"FocusLab-education-automation-pilot/0.1 (https://github.com/minh6a2ab2-png/web_lesson_project)"})
        with urllib.request.build_opener(Redirect()).open(request,timeout=15) as resp:
            if not allowed(resp.geturl()): raise ValueError("Final URL not allowlisted")
            data=resp.read(20*1024*1024+1)
            record.update(http_status=resp.status,final_url=resp.geturl())
        if len(data)>20*1024*1024: raise ValueError("Image over limit")
        with Image.open(io.BytesIO(data)) as im:
            if im.width*im.height>50_000_000: raise ValueError("Pixel limit")
            im.verify()
        with Image.open(io.BytesIO(data)) as im:
            im.load()
            if im.format not in {"JPEG","PNG","WEBP"} or min(im.size)<200: raise ValueError("Unexpected format or size")
            record.update(status="PASS",width=im.width,height=im.height,format=im.format,sha256=hashlib.sha256(data).hexdigest(),bytes=len(data))
    except Exception as exc:
        record.update(status="FAIL",error=f"{type(exc).__name__}: {exc}")
    return record
def save(name,data):
    (OUT/name).write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding="utf-8")
def assets():
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool: results=list(pool.map(acquire,SOURCES))
    save("acquisition.json",results)
    # Public artifact contains metadata only, not the photo bytes.
    return all(x["status"]=="PASS" for x in results)
FIXTURE="""<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HTTP pilot fixture</title>
<style>body{font:20px system-ui;margin:24px;background:#f5f4ef;color:#172b42}main{max-width:900px;margin:auto}button,select{font:inherit;padding:12px;margin:4px}#flow{background:#102239;color:white;padding:28px;border-radius:12px;display:grid;grid-template-columns:1fr 2fr 1fr;gap:10px;text-align:center}#token{overflow-wrap:anywhere}#result{padding:20px;background:white}@media(max-width:450px){body{margin:12px;font-size:16px}#flow{padding:12px;gap:4px}}</style><main><h1>HTTP request and response</h1><p>Infrastructure smoke-test fixture — not R04</p><label for="path">Path</label><select id="path"><option>/library</option><option>/missing</option></select><button id="next">Next step</button><button id="reset">Reset</button><div id="flow"><strong>Client</strong><span id="token"></span><strong>Server</strong></div><p id="state" aria-live="polite"></p><p id="result"></p></main><script>let s=0;const el=id=>document.getElementById(id);function render(){let p=el('path').value;document.body.dataset.step=s;el('state').textContent='Step '+s+'/4';el('token').textContent=['—','Request '+p+' →','Processing','← Response', '—'][s];el('result').textContent=s===4?(p==='/missing'?'Resource unavailable':'Library content'):'—';el('next').disabled=s===4}el('next').onclick=()=>{s=Math.min(4,s+1);render()};el('reset').onclick=()=>{s=0;el('path').value='/library';render()};el('path').onchange=()=>{s=0;render()};render()</script></html>"""
def browser():
    from playwright.sync_api import sync_playwright
    fixture=ROOT/"fixture.html"
    fixture.write_text(FIXTURE,encoding="utf-8")
    server=ThreadingHTTPServer(("127.0.0.1",0),functools.partial(SimpleHTTPRequestHandler,directory=str(ROOT)))
    threading.Thread(target=server.serve_forever,daemon=True).start()
    results=[]
    try:
        with sync_playwright() as p:
            b=p.chromium.launch()
            for mode,url in [("localhost",f"http://127.0.0.1:{server.server_port}/fixture.html"),("file",fixture.as_uri())]:
                for width,height in [(1280,720),(390,844)]:
                    rec=dict(mode=mode,viewport=[width,height],fixture="synthetic, not R04")
                    ctx=b.new_context(viewport={"width":width,"height":height},reduced_motion="reduce")
                    page=ctx.new_page()
                    errors=[]
                    page.on("pageerror",lambda error:errors.append(str(error)))
                    try:
                        page.goto(url,timeout=15000)
                        assert page.locator("#state").inner_text()=="Step 0/4"
                        page.screenshot(path=str(OUT/f"{mode}-{width}-before.png"))
                        for path,expected in [("/library","Library content"),("/missing","Resource unavailable")]:
                            page.select_option("#path",path)
                            for _ in range(4): page.click("#next")
                            assert page.locator("#result").inner_text()==expected
                            assert page.locator("#next").is_disabled()
                            page.screenshot(path=str(OUT/f"{mode}-{width}-{path[1:]}.png"))
                            page.click("#reset")
                            assert page.locator("#state").inner_text()=="Step 0/4"
                        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth")
                        assert not errors, errors
                        rec["status"]="PASS"
                    except Exception as exc:
                        rec.update(status="FAIL",error=f"{type(exc).__name__}: {exc}")
                    finally:
                        results.append(rec);ctx.close()
            b.close()
    finally:
        server.shutdown();server.server_close()
        save("browser.json",results)
    return len(results)==4 and all(r["status"]=="PASS" for r in results)
def video():
    # Synthetic, silent render capability only; not a lesson-ready video.
    f=OUT/"http-pilot.mp4"
    subprocess.run(["ffmpeg","-y","-v","error","-f","lavfi","-i","color=c=0x102239:s=640x360:r=24:d=4","-vf","drawtext=text='HTTP request':fontcolor=white:fontsize=34:x=(w-tw)/2:y=120:enable='lt(t,2)',drawtext=text='HTTP response':fontcolor=white:fontsize=34:x=(w-tw)/2:y=120:enable='gte(t,2)'","-c:v","libx264","-pix_fmt","yuv420p","-an",str(f)],check=True,timeout=45)
    info=json.loads(subprocess.check_output(["ffprobe","-v","error","-show_format","-show_streams","-of","json",str(f)],timeout=15))
    duration=float(info["format"]["duration"])
    ok=3.9<=duration<=4.1 and info["streams"][0]["codec_name"]=="h264"
    save("video.json",{"status":"PASS" if ok else "FAIL","duration":duration,"codec":info["streams"][0]["codec_name"],"sha256":hashlib.sha256(f.read_bytes()).hexdigest(),"scope":"synthetic silent render"})
    return ok
def dependency_demo():
    graph={"asset":[], "model":[], "layout":["asset","model"], "qa":["layout"], "audio":[]}
    def invalidated(changed):
        impacted=set(changed)
        while True:
            next_set=impacted|{n for n,deps in graph.items() if impacted.intersection(deps)}
            if next_set==impacted:return sorted(impacted)
            impacted=next_set
    actual=invalidated(["asset"])
    expected=["asset","layout","qa"]
    save("dependency.json",{"status":"PASS" if actual==expected else "FAIL","expected":expected,"actual":actual,"scope":"synthetic graph only; no production cache"})
    return actual==expected
def main():
    report={}
    for name,fn in [("A-acquisition",assets),("B-browser-fixture",browser),("C-render",video),("E-dependency-demo",dependency_demo)]:
        try: report[name]={"status":"PASS" if fn() else "FAIL"}
        except Exception as exc: report[name]={"status":"FAIL","error":f"{type(exc).__name__}: {exc}"}
    report["D-artifact-return"]={"status":"NOT_RUN","reason":"Must validate independently after artifact upload"}
    report["F-exact-R04"]={"status":"NOT_RUN","reason":"Exact R04 not committed to this public pilot"}
    save("summary.json",report)
    save("manifest.json",{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in sorted(OUT.iterdir()) if f.is_file() and f.name!="manifest.json"})
    print(json.dumps(report,indent=2))
    return int(any(v["status"]=="FAIL" for v in report.values()))
if __name__=="__main__": raise SystemExit(main())
