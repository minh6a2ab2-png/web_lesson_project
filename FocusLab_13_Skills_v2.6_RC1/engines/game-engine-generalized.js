/* Reusable deterministic grid engine, independent of DOM and rendering. */
(function(root){'use strict';
function createGame(config){
 const {width,height,blocked,start,stations,missions}=config;
 const rule=config.rule||{type:'url'};
 if(!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1||width*height>2000||!Array.isArray(blocked)||!Array.isArray(start)||!Array.isArray(stations)||!Array.isArray(missions?.choices)||!Array.isArray(missions?.tickets))throw Error('Invalid configuration');
 const validId=id=>typeof id==='string'&&/^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(id)&&!['__proto__','constructor','prototype','toString','hasOwnProperty'].includes(id);
 const unique=(a,key)=>new Set(a.map(key)).size===a.length;
 if([stations,missions.choices,missions.tickets].some(a=>a.some(o=>!validId(o.id))||!unique(a,o=>o.id))||!unique(stations,o=>o.x+','+o.y))throw Error('Duplicate or invalid identifiers');
 if(!['url','fields'].includes(rule.type))throw Error('Unknown rule');
 if(rule.type==='fields'&&(!Array.isArray(rule.fields)||!rule.fields.length||rule.fields.some(f=>!validId(f.key)||!validId(f.error)||f.error==='correct')))throw Error('Invalid fields');
 if(rule.type==='url')missions.choices.forEach(c=>new URL(c.url));
 else if(missions.choices.some(c=>rule.fields.some(f=>typeof c[f.key]!=='string')))throw Error('Missing field');
 function classify(a,k){if(rule.type==='url'){a=new URL(a.url);k=new URL(k.url);return a.host!==k.host?'host_error':a.pathname!==k.pathname?'path_error':'correct'}for(const f of rule.fields)if(a[f.key]!==k[f.key])return f.error;return 'correct'}
 const key=(x,y)=>x+','+y, walls=new Set(blocked.map(p=>key(...p)));
 const valid=(x,y)=>Number.isInteger(x)&&Number.isInteger(y)&&x>=0&&y>=0&&x<width&&y<height&&!walls.has(key(x,y));
 if(!valid(...start)||!stations.length||!missions.tickets.length||stations.some(s=>!valid(s.x,s.y)))throw Error('Invalid map');
 const byId=id=>missions.choices.find(c=>c.id===id);
 if(stations.some(s=>!byId(s.id))||missions.tickets.some(t=>!stations.some(s=>s.id===t.practice_key)))throw Error('Missing station');
 let state;const snapshot=()=>JSON.parse(JSON.stringify(state));
 function reset(){state={x:start[0],y:start[1],facing:'down',idx:0,done:{},attempts:{},repaired:{},history:[],feedback:null,moves:0};return snapshot()}
 function move(dx,dy){if(Math.abs(dx)+Math.abs(dy)!==1||!Number.isInteger(dx)||!Number.isInteger(dy))return false;state.facing=dx<0?'left':dx>0?'right':dy<0?'up':'down';let x=state.x+dx,y=state.y+dy;if(!valid(x,y))return false;state.x=x;state.y=y;state.moves++;state.feedback=null;return true}
 function select(i){if(!Number.isInteger(i)||i<0||i>=missions.tickets.length)return false;state.idx=i;state.feedback=null;return true}
 function station(){return stations.find(s=>s.x===state.x&&s.y===state.y)}
 function deliver(){const t=missions.tickets[state.idx],s=station();if(state.done[t.id])return state.feedback='already';if(!s)return state.feedback='not_at_station';const f=classify(byId(s.id),byId(t.practice_key));if(!Object.hasOwn(state.attempts,t.id))state.attempts[t.id]=f;state.history.push({ticket:t.id,station:s.id,result:f});if(f==='correct'){state.done[t.id]=true;if(state.attempts[t.id]!=='correct')state.repaired[t.id]=true}state.feedback=f;return f}
 function pathTo(x,y){if(!valid(x,y))return null;const queue=[[state.x,state.y,[]]],seen=new Set([key(state.x,state.y)]);for(let i=0;i<queue.length;i++){let [a,b,path]=queue[i];if(a===x&&b===y)return path;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){let c=a+dx,d=b+dy;if(valid(c,d)&&!seen.has(key(c,d))){seen.add(key(c,d));queue.push([c,d,[...path,[dx,dy]]])}}}return null}
 reset();if(stations.some(s=>pathTo(s.x,s.y)===null))throw Error('Unreachable station');return {reset,move,select,station,deliver,pathTo,snapshot,valid};
}root.FocusLabGame={createGame};if(typeof module!=='undefined')module.exports=root.FocusLabGame;
})(globalThis);
