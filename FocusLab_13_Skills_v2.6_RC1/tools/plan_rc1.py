"""Pure planning adapter. No external calls, no automatic approval or execution."""
import argparse,json,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(R/'engines'))
from orchestrator import validate_archive,plan,topo,invalidate
def graph():
 r=json.loads((R/'templates/pipeline_registry.json').read_text())
 return {k:[a for a,v in r['skills'].items() if k in v['consumers']] for k in r['skills']}
def adopt(path,skill,topic,receipt=None):
 a=validate_archive(path);m=a['manifest']
 if m.get('skill_id')!=skill or m.get('topic_id')!=topic or m.get('version') not in ('2.5','2.6-rc1'):raise ValueError('Checkpoint identity or version')
 approved=bool(receipt and receipt.get('status')=='USER_APPROVED' and receipt.get('archive_sha256')==a['sha256'] and receipt.get('skill_id')==skill and receipt.get('topic_id')==topic and receipt.get('evidence_ref') and receipt.get('compatibility')=='VERIFIED' and receipt.get('missing_contracts')==[])
 # Receipt must come from authorized human approval and separate compatibility audit; checks structure only.
 return {'integrity':'PASS','approval':'APPROVED' if approved else 'PENDING','version':m['version'],'sha256':a['sha256']}
def route(task):
 if not task.get('rights_verified'):return 'BLOCKED_RIGHTS'
 if task.get('requires_paid_or_new_access') and not task.get('explicit_authorization'):return 'BLOCKED_AUTHORIZATION'
 if task.get('native_available'):return 'NATIVE'
 if task.get('connector_available'):return 'CONNECTOR'
 if task.get('ci_available') and task.get('data_class')=='PUBLIC_APPROVED' and task.get('ci_fixture_approved'):return 'BOUNDED_PUBLIC_CI'
 if task.get('verified_compatible_cache'):return 'VERIFIED_CACHE'
 if task.get('permitted_alternative'):return 'ALTERNATIVE'
 return 'BATCH_HUMAN_FALLBACK'
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('request');args=p.parse_args();d=json.loads(Path(args.request).read_text());records={}
 for x in d.get('checkpoints',[]):records[x['skill_id']]=adopt(x['archive'],x['skill_id'],d['topic_id'],x.get('approval_receipt'))
 print(json.dumps({'plan':plan(graph(),records,d.get('changed',[])),'records':records,'scope':'planner only; no skill execution or automatic approval'},indent=2))
