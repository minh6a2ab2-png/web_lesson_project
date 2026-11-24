#!/usr/bin/env python3
"""Verify the downloaded consolidated definition directory; no browser QA claim."""
from pathlib import Path
import hashlib,json,sys
R=Path(__file__).resolve().parents[1]
def load(p):return json.loads((R/p).read_text(encoding="utf-8-sig"))
def h(p):return hashlib.sha256(p.read_bytes()).hexdigest()
m=load("MANIFEST_SHA256.json");v=load("VERSION.json");lock=load("BASE_LOCK.json")
assert v["version"]==m["version"]=="2.5"
assert v["base_commit"]==lock["commit"]==m["base_commit"]
assert len({x["path"] for x in m["files"]})==len(m["files"])
for x in m["files"]:
 p=R/x["path"]
 assert p.is_file() and h(p)==x["sha256"],"Manifest mismatch: "+x["path"]
base=R/"baseline_v2_4_1";oldm=json.loads((base/"MANIFEST_SHA256.json").read_text(encoding="utf-8-sig"))
for x in oldm["files"]:
 p=base/x["path"]
 if not p.is_file():p=R/x["path"]
 assert p.is_file() and h(p)==x["sha256"],"Original bytes mismatch: "+x["path"]
reg=load("templates/pipeline_registry.json");old=json.loads((base/"templates/pipeline_registry.json").read_text(encoding="utf-8-sig"))
assert len(reg["skills"])==13
for sid,orig in old["skills"].items():
 new=reg["skills"][sid]
 assert set(x["path"] for x in orig["outputs"])<=set(x["path"] for x in new["outputs"])
 assert set(orig["consumers"])<=set(new["consumers"])
 p=new["definition"]
 text=(R/p).read_text(encoding="utf-8")
 assert "Active version: FocusLab v2.5" in text
 assert lock["sha256"][p] in text
assert sum(len(x["outputs"]) for x in reg["skills"].values())==128
print("PASS: definition manifest, original byte hashes, 13 skills, 128 registry output entries")
missing=[x["path"] for x in load("SOURCE_LEDGER.json")["references"] if not (R/x["path"]).is_file()]
if missing:print("NOT_RUN: separate reference assets missing:",", ".join(missing))
else:
 for x in load("SOURCE_LEDGER.json")["references"]:assert h(R/x["path"])==x["sha256"],"Reference mismatch "+x["path"]
 print("PASS: reference asset hashes")
print("Production/field testing is NOT_RUN.")
