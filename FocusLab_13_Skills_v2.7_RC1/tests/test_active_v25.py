from pathlib import Path
import copy,json,sys,jsonschema
from check_handoff import check_manifest
from check_scene_contract import check_scene
R=Path(__file__).resolve().parents[1]
def load(x):return json.loads((R/x).read_text(encoding="utf-8"))
s=load("templates/output_manifest.schema.json")
jsonschema.Draft202012Validator.check_schema(s)
v=jsonschema.Draft202012Validator(s)
m=load("fixtures/output_manifest.example.json")
assert v.is_valid(m) and not check_manifest(m)
bad=copy.deepcopy(m);bad["version"]="2.4.1"
assert not v.is_valid(bad) and check_manifest(bad)
bad=copy.deepcopy(m);bad["gate_status"]="VERIFIED_IN_PRACTICE"
assert not v.is_valid(bad) and check_manifest(bad)
bad=copy.deepcopy(m);bad["output_files"][0]["reason"]=""
assert not v.is_valid(bad) and check_manifest(bad)
sc=load("fixtures/v25_scene.valid.json")
assert not check_scene(sc),check_scene(sc)
bad=copy.deepcopy(sc);del bad["visual_excellence"]
assert check_scene(bad)
bad=copy.deepcopy(sc);bad["navigation"]["footer"]=True
assert check_scene(bad)
print("PASS: 7 active v2.5 manifest/scene acceptance and rejection cases; browser/field NOT_RUN")
