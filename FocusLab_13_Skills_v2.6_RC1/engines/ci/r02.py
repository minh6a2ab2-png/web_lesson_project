"""R02 bounded public-data engine trial. No private checkpoints or stock-photo archive."""
import hashlib, io, json, os, shutil, time, urllib.request, zipfile, html
from pathlib import Path, PurePosixPath
from PIL import Image, ImageOps, ImageDraw
from pilot import SOURCES, allowed, Redirect, FIXTURE
import functools, threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT=Path(__file__).resolve().parent
WORK=ROOT/"r02-work"
OUT=ROOT/"r02-evidence"
LIMIT=25*1024*1024
def sha(data): return hashlib.sha256(data).hexdigest()
def canonical(v): return json.dumps(v,ensure_ascii=False,sort_keys=True,separators=(",",":")).encode()
def write(p,v): p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,ensure_ascii=False,indent=2),encoding="utf-8")
def inventory(p): return {x.relative_to(p).as_posix():sha(x.read_bytes()) for x in sorted(p.rglob("*")) if x.is_file()}
def safe_path(name):
    p=PurePosixPath(name)
    return not p.is_absolute() and ".." not in p.parts and "\\" not in name and bool(p.parts)

def verify_zip(path, expected=None):
    if expected and sha(path.read_bytes())!=expected: raise ValueError("ZIP digest mismatch")
    with zipfile.ZipFile(path) as z:
        items=z.infolist()
        names=[x.filename for x in items]
        if len(names)!=len(set(names)) or any(not safe_path(n) for n in names): raise ValueError("Unsafe or duplicate archive entry")
        if len(items)>200 or sum(x.file_size for x in items)>100*1024*1024: raise ValueError("Archive limit")
        manifest=json.loads(z.read("manifest.json"))
        if set(names)!=(set(manifest)|{"manifest.json"}): raise ValueError("Manifest coverage mismatch")
        for n,h in manifest.items():
            if sha(z.read(n))!=h: raise ValueError("Hash mismatch: "+n)
        if z.testzip(): raise ValueError("CRC mismatch")
        return {"status":"PASS","entries":len(items),"hashes":len(manifest),"sha256":sha(path.read_bytes())}

def acquire_task(dest, config, deps):
    records=[]; assets=dest/"assets";assets.mkdir()
    for aid,url,source,author,license_name in SOURCES[:3]:
        # Only these pre-reviewed Commons candidates; Pexels originals are excluded.
        if not allowed(url) or not license_name.startswith("CC BY-SA"): raise ValueError("Source not permitted")
        rec=dict(asset_id=aid,source=source,download_url=url,author=author,license=license_name,
                 license_url="https://creativecommons.org/licenses/by-sa/"+("4.0/" if "4.0" in license_name else "3.0/"),
                 provenance="R01 source register; not a new independent rights audit")
        last=None
        for attempt in range(1,3):
            try:
                req=urllib.request.Request(url,headers={"User-Agent":"FocusLab-education-automation-pilot/0.2 (https://github.com/minh6a2ab2-png/web_lesson_project)"})
                with urllib.request.build_opener(Redirect()).open(req,timeout=15) as response:
                    if not allowed(response.geturl()): raise ValueError("Redirect not allowed")
                    raw=response.read(LIMIT+1)
                if len(raw)>LIMIT: raise ValueError("Download size")
                with Image.open(io.BytesIO(raw)) as im:
                    if im.width*im.height>50_000_000: raise ValueError("Pixel limit")
                    im.verify()
                with Image.open(io.BytesIO(raw)) as im:
                    im.load()
                    if im.format not in {"JPEG","PNG","WEBP"} or min(im.size)<200: raise ValueError("Unsupported image")
                    rec["source_size"]=list(im.size)
                    derived=ImageOps.exif_transpose(im).convert("RGB")
                    derived.thumbnail((config["max_edge"],config["max_edge"]),Image.Resampling.LANCZOS)
                    target=assets/(aid+".jpg")
                    derived.save(target,quality=88,optimize=True)
                    with Image.open(target) as test: test.verify()
                    rec.update(file="assets/"+target.name,sha256=sha(target.read_bytes()),source_sha256=sha(raw),
                               size=list(derived.size),changes="EXIF orientation, resize, JPEG re-encode; no crop",
                               bytes=target.stat().st_size,status="PASS",attempts=attempt)
                last=None;break
            except Exception as exc:
                last=str(exc)
                if attempt==1: time.sleep(1)
        if last is not None: rec.update(status="BLOCKED",error=last,attempts=2)
        records.append(rec)
    write(dest/"acquisition.json",records)
    if not all(r["status"]=="PASS" for r in records): raise RuntimeError("Required image acquisition failed")
    if len({r["sha256"] for r in records})!=len(records): raise ValueError("Duplicate images")
    # Contextual lesson sample with visible bilingual credits and separate rights for each derivative.
    titles={"A05-INFRA-CABLE":("Cáp quang biển","Submarine fibre cables"),"A05-INFRA-ROUTER":("Router","Router"),"A05-HISTORY-WEB":("Máy chủ Web đầu tiên","First Web server")}
    cards=[]
    for r in records:
        vi,en=titles[r["asset_id"]]
        cards.append(f'<figure><img src="{r["file"]}" alt="{html.escape(en)}"><figcaption><h2>{vi} / {en}</h2><p>Quan sát thiết bị này và giải thích vai trò của nó trong Internet hoặc WWW. / Observe the device and explain its role.</p><small>{html.escape(r["author"])} · <a href="{r["source"]}">Source</a> · <a href="{r["license_url"]}">{r["license"]}</a> · Resized and re-encoded.</small></figcaption></figure>')
    (dest/"gallery.html").write_text('<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Internet infrastructure / Hạ tầng Internet</title><style>*{box-sizing:border-box}body{font:18px system-ui;margin:0;padding:24px;color:#172b42;background:#f8f8f3}main{max-width:1000px;margin:auto}figure{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;margin:24px 0}img{width:100%;max-height:400px;object-fit:contain;background:#e8eef0}small{font-size:13px}@media(max-width:650px){figure{grid-template-columns:1fr}body{padding:12px}}</style><main><h1>Hạ tầng Internet / Internet infrastructure</h1>'+''.join(cards)+'</main></html>',encoding="utf-8")
    (dest/"CREDITS.md").write_text("# Image credits\n\n"+"\n\n".join(f'- {r["file"]}: {r["author"]}, {r["source"]}, {r["license"]} ({r["license_url"]}). {r["changes"]}. The individual derivative remains under its stated license.' for r in records),encoding="utf-8")

def browser_task(dest,config,deps):
    from playwright.sync_api import sync_playwright
    root=dest/"site";shutil.copytree(deps["asset"],root)
    # R01 fixture, not R04; public sample only.
    (root/"fixture.html").write_text(FIXTURE,encoding="utf-8")
    server=ThreadingHTTPServer(("127.0.0.1",0),functools.partial(SimpleHTTPRequestHandler,directory=str(root)))
    threading.Thread(target=server.serve_forever,daemon=True).start()
    results=[]
    try:
        with sync_playwright() as p:
            b=p.chromium.launch()
            for mode in ("file","localhost"):
                for width,height in config["viewports"]:
                    ctx=b.new_context(viewport={"width":width,"height":height},reduced_motion="reduce")
                    # Prohibit external network during testing; local server is allowed.
                    ctx.route("**/*",lambda route:route.continue_() if route.request.url.startswith(("file:",f"http://127.0.0.1:{server.server_port}/")) else route.abort())
                    page=ctx.new_page();errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
                    prefix=f"{mode}-{width}"
                    def url(name):return (root/name).as_uri() if mode=="file" else f"http://127.0.0.1:{server.server_port}/{name}"
                    rec={"mode":mode,"viewport":[width,height],"scope":"real image gallery + synthetic HTTP fixture"}
                    try:
                        page.goto(url("gallery.html"),timeout=15000)
                        assert page.locator("img").count()==3
                        assert page.locator("img").evaluate_all("(a)=>a.every(i=>i.complete&&i.naturalWidth>0&&i.alt.length>0)")
                        assert page.locator("figcaption a").count()==6
                        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth")
                        page.screenshot(path=str(dest/(prefix+"-gallery.png")),full_page=True)
                        page.goto(url("fixture.html"),timeout=15000)
                        for path,result in [("/library","Library content"),("/missing","Resource unavailable")]:
                            page.select_option("#path",path)
                            for _ in range(4):page.click("#next")
                            assert page.locator("#result").inner_text()==result
                            assert page.locator("#next").is_disabled()
                            page.click("#reset")
                            assert page.locator("#state").inner_text()=="Step 0/4"
                        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth")
                        assert not errors,errors
                        page.screenshot(path=str(dest/(prefix+"-http.png")))
                        rec["status"]="PASS"
                    except Exception as exc:rec.update(status="FAIL",error=str(exc))
                    finally:results.append(rec);ctx.close()
            b.close()
    finally:server.shutdown();server.server_close();write(dest/"browser.json",results)
    if not results or any(r["status"]!="PASS" for r in results):raise RuntimeError("Browser test failed")
    # Screenshots and result only, avoid duplicating derivatives in browser output.
    shutil.rmtree(root)

def package_task(dest,config,deps):
    root=dest/"payload";root.mkdir()
    for task,folder in deps.items():shutil.copytree(folder,root/task)
    write(root/"manifest.json",inventory(root))
    target=dest/"lesson-evidence.zip"
    with zipfile.ZipFile(target,"w",zipfile.ZIP_DEFLATED) as z:
        for p in sorted(root.rglob("*")):
            if p.is_file():z.write(p,p.relative_to(root).as_posix())
    write(dest/"archive-verification.json",verify_zip(target))
    shutil.rmtree(root)

TASKS={"asset":((),acquire_task),"browser":(("asset",),browser_task),"package":(("asset","browser"),package_task)}
def run(config):
    records={};outputs={}
    for name,(deps,fn) in TASKS.items():
        if any(records[d]["status"] not in ("PASS","CACHED") for d in deps):
            records[name]={"status":"BLOCKED","reason":"Dependency failed"};continue
        key=sha(canonical({"engine_sha256":sha(Path(__file__).read_bytes()),"pilot_sha256":sha((ROOT/"pilot.py").read_bytes()),"task":name,"config":config[name],"dependency_keys":{d:records[d]["key"] for d in deps}}))
        base=WORK/name/key;dest=base/"output";manifest=base/"cache.json";started=time.monotonic()
        try:
            cached=manifest.is_file() and dest.is_dir() and json.loads(manifest.read_text())==inventory(dest)
            if not cached:
                if base.exists():shutil.rmtree(base)
                dest.mkdir(parents=True)
                fn(dest,config[name],{d:outputs[d] for d in deps})
                write(manifest,inventory(dest))
            outputs[name]=dest
            records[name]={"status":"CACHED" if cached else "PASS","key":key,"seconds":round(time.monotonic()-started,3)}
        except Exception as exc:
            records[name]={"status":"FAIL","key":key,"error":str(exc)}
    return records,outputs

def main():
    # Fresh runner, controlled within-run cache; no private input.
    if WORK.exists():shutil.rmtree(WORK)
    if OUT.exists():shutil.rmtree(OUT)
    OUT.mkdir()
    config={"asset":{"max_edge":1600},"browser":{"viewports":[[1280,720],[390,844]]},"package":{"format":1}}
    a,paths=run(config)
    write(OUT/"first-run.json",a)
    if any(x["status"]!="PASS" for x in a.values()):return 1
    b,_=run(config);write(OUT/"cache-run.json",b)
    config["browser"]["viewports"].append([768,1024])
    c,paths=run(config);write(OUT/"incremental-run.json",c)
    expect=[all(x["status"]=="CACHED" for x in b.values()),c["asset"]["status"]=="CACHED",c["browser"]["status"]=="PASS",c["package"]["status"]=="PASS"]
    if not all(expect):return 1
    # Artifact engine rejects corrupted archive and unsafe names.
    z=paths["package"]/"lesson-evidence.zip"
    result=verify_zip(z)
    tampered=WORK/"tampered.zip"
    tampered.write_bytes(z.read_bytes()+b"tamper")
    try:verify_zip(tampered,result["sha256"])
    except ValueError:bad_digest=True
    else:bad_digest=False
    unsafe=WORK/"unsafe.zip"
    with zipfile.ZipFile(unsafe,"w") as f:f.writestr("../escape.txt","bad")
    try:verify_zip(unsafe)
    except ValueError:bad_path=True
    else:bad_path=False
    shutil.copy2(z,OUT/z.name)
    write(OUT/"summary.json",{"scope":"R02 three Commons derivatives, real lesson gallery, synthetic HTTP fixture, within-run cache",
        "asset":"PASS","browser":"PASS","package":result,"orchestrator":"PASS","tampered_rejected":bad_digest,"unsafe_path_rejected":bad_path,
        "exact_R04_CI":"NOT_RUN","cross_run_cache":"NOT_RUN","external_intake":"PENDING_CONNECTOR_VERIFICATION"})
    write(OUT/"manifest.json",inventory(OUT))
    return 0 if bad_digest and bad_path else 1
if __name__=="__main__":raise SystemExit(main())
