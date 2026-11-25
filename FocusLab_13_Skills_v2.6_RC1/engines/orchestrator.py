"""FocusLab bounded local checkpoint planner and content-addressed task runner.
Not an AI skill executor. No network, no shell commands from data, no automatic approval.
"""
from pathlib import Path, PurePosixPath
import hashlib,json,zipfile,tempfile,os,time,shutil,stat

def sha(b): return hashlib.sha256(b).hexdigest()
def dump(v): return json.dumps(v,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
def read(p): return json.loads(Path(p).read_text())
def write(p,v): Path(p).write_text(json.dumps(v,ensure_ascii=False,indent=2))
def safe(name):
 p=PurePosixPath(name)
 return bool(p.parts) and not p.is_absolute() and '..' not in p.parts and '\\' not in name and ':' not in name and '\x00' not in name

def validate_archive(p):
 with zipfile.ZipFile(p) as z:
  items=z.infolist(); names=[i.filename for i in items]
  if len(items)>5000 or sum(i.file_size for i in items)>512*1024**2:raise ValueError('Archive budget')
  if len(set(names))!=len(names) or any(not safe(i.filename) or stat.S_ISLNK(i.external_attr>>16) or i.is_dir() for i in items):raise ValueError('Unsafe archive')
  ms=[n for n in names if n=='manifest.json' or n=='output_manifest.json' or n.endswith('/output_manifest.json')]
  if len(ms)!=1:raise ValueError('Manifest ambiguity')
  m=ms[0]; j=json.loads(z.read(m)); prefix=m.rsplit('/',1)[0]+'/' if '/' in m else ''
  hashes={prefix+x['path']:x['sha256'] for x in j['output_files'] if x.get('sha256') and not x['path'].endswith('/')} if 'output_files' in j else j
  if set(names)!=set(hashes)|{m}:raise ValueError('Manifest coverage')
  for n,h in hashes.items():
   if sha(z.read(n))!=h:raise ValueError('Hash mismatch '+n)
  if z.testzip():raise ValueError('CRC mismatch')
  return {'sha256':sha(Path(p).read_bytes()),'hashes':len(hashes),'manifest':j}

def topo(graph):
 if any(v not in graph for vs in graph.values() for v in vs):raise ValueError('Unknown dependency')
 pending=set(graph);order=[]
 while pending:
  ready=sorted(n for n in pending if set(graph[n])<=set(order))
  if not ready:raise ValueError('Dependency cycle')
  order.extend(ready);pending.difference_update(ready)
 return order

def invalidate(graph,changed):
 topo(graph)
 if not set(changed)<=set(graph):raise ValueError('Unknown change')
 out=set(changed)
 for n in topo(graph):
  if set(graph[n])&out:out.add(n)
 return [n for n in topo(graph) if n in out]

def plan(graph,records,changed=()):
 stale=set(invalidate(graph,changed)); result={}
 for n in topo(graph):
  rec=records.get(n)
  if n in stale:result[n]='STALE'
  elif rec and rec.get('integrity')=='PASS' and rec.get('approval')=='APPROVED':result[n]='REUSE_APPROVED' if all(result[d]=='REUSE_APPROVED' for d in graph[n]) else 'BLOCKED_UPSTREAM'
  elif rec and rec.get('integrity')=='PASS':result[n]='REVIEW_REQUIRED' if all(result[d]=='REUSE_APPROVED' for d in graph[n]) else 'BLOCKED_UPSTREAM'
  elif all(result[d]=='REUSE_APPROVED' for d in graph[n]):result[n]='READY_TO_RUN'
  else:result[n]='BLOCKED_UPSTREAM'
 return result

def inventory(p):
 files={}
 for f in sorted(p.rglob('*')):
  if f.is_symlink():raise ValueError('Symlink in output')
  if f.is_file():files[f.relative_to(p).as_posix()]=sha(f.read_bytes())
 return files

class TransientError(Exception):pass

def execute(graph,configs,handlers,cache,version='1'):
 """Single-writer local cache. Keys include code identity supplied by caller, config and dependency keys+output hashes.
 Retry only explicit transient exceptions, max twice. Never cache failures. No concurrent writers supported."""
 cache=Path(cache);cache.mkdir(parents=True,exist_ok=True); records={}; outputs={}
 for n in topo(graph):
  start=time.perf_counter(); deps=graph[n]
  if any(records[d]['status'] not in ('PASS','CACHED') for d in deps):records[n]={'status':'BLOCKED','attempts':0};continue
  key=sha(dump({'version':version,'task':n,'config':configs[n],'deps':{d:{'key':records[d]['key'],'files':records[d]['files']} for d in deps}})); target=cache/key;out=target/'output'; cached=False;corrupt=False
  if target.exists():
   try:cached=read(target/'manifest.json')==inventory(out) and out.is_dir() and not target.is_symlink()
   except Exception:cached=False
   if not cached:
    if target.is_symlink():target.unlink()
    else:shutil.rmtree(target)
    corrupt=True
  attempts=0;error=None
  if not cached:
   for attempts in (1,2):
    tmp=Path(tempfile.mkdtemp(prefix='.task-',dir=cache))
    try:
     dest=tmp/'output';dest.mkdir();handlers[n](dest,configs[n],{d:outputs[d] for d in deps}); files=inventory(dest);write(tmp/'manifest.json',files);os.rename(tmp,target);error=None;break
    except Exception as e:
     error=f'{type(e).__name__}: {e}'
     if not isinstance(e,TransientError):break
    finally:
     if tmp.exists():shutil.rmtree(tmp)
  if error is not None:records[n]={'status':'FAIL','key':key,'attempts':attempts,'error':error};continue
  outputs[n]=out;records[n]={'status':'CACHED' if cached else 'PASS','key':key,'files':inventory(out),'attempts':attempts,'corrupt_rebuilt':corrupt,'seconds':round(time.perf_counter()-start,6)}
 return records
