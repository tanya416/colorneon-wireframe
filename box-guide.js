(()=>{function init(){const root=document.querySelector('#cn-rgb-content')?.shadowRoot,section=root?.querySelector('.cn-box-guide');if(!section){setTimeout(init,100);return}if(section.dataset.boxReady)return;section.dataset.boxReady='true';const reduced=matchMedia('(prefers-reduced-motion: reduce)');class BoxLogic{constructor(){this.state={};this.bindings=[];for(const node of section.querySelectorAll('*')){for(const attr of [...node.attributes])if(attr.value.includes('{{'))this.bindings.push({node,attr:attr.name,template:attr.value});for(const child of [...node.childNodes])if(child.nodeType===3&&child.textContent.includes('{{'))this.bindings.push({node:child,template:child.textContent})}this._el=section.querySelector('[data-box-stage]')}setState(next){Object.assign(this.state,next);this.paint()}paint(){const vals=this.renderVals();if(reduced.matches){vals.cam='transform:rotateX(-34deg) rotateY(-16deg)';vals.lid='transform:translateX(-26px) translateY(40px) translateZ(16px) rotateY(-3deg)';vals.inn='visibility:visible';vals.cap='visibility:hidden'}for(const binding of this.bindings){const value=binding.template.replace(/{{\s*(\w+)\s*}}/g,(_,key)=>vals[key]??'');if(binding.attr){if(binding.node.getAttribute(binding.attr)!==value)binding.node.setAttribute(binding.attr,value)}else binding.node.textContent=value}for(const button of section.querySelectorAll('[data-box-action]')){button.onclick=vals[button.dataset.boxAction];if(button.classList.contains('cn-pin')){const i=Number(button.dataset.boxAction.slice(2));button.setAttribute('aria-pressed',String(i===this.state.act));button.tabIndex=this.state.open?0:-1}}section.querySelectorAll('sc-if').forEach(node=>node.hidden=node.getAttribute('value')!=='true');section.querySelectorAll('.cn-box-remote-options').forEach(n=>n.hidden=this.state.act!==1);section.querySelectorAll(".cn-box-part").forEach(part=>{part.style.transform=this.partsRaised?part.dataset.raisedTransform:part.dataset.flatTransform});this.syncMobile?.()}}

class Component extends BoxLogic {
renderVals() {

var self = this; var st = this.state || {}; var N = 6;
var IT = [{"n": "Le néon", "r": "Votre création, livrée montée sur son support et prête à installer.", "x": 553, "y": 244, "o": false}, {"n": "La télécommande", "r": "Allumez, éteignez et réglez votre néon à distance.", "x": 826, "y": 247, "o": false}, {"n": "Le contrôleur", "r": "Placé entre l’adaptateur et le néon, il reçoit les commandes de la télécommande.", "x": 911, "y": 270, "o": false}, {"n": "L’adaptateur", "r": "Il transforme le courant de votre prise en une tension adaptée à votre néon.", "x": 830, "y": 384, "o": false}, {"n": "La fixation", "r": "Vis, chevilles, entretoises ou bandes adhésives selon la pose choisie.", "x": 990, "y": 407, "o": true}, {"n": "La suspension", "r": "Des câbles pour accrocher votre néon au plafond, si vous avez choisi cette pose.", "x": 1015, "y": 285, "o": true}];
var open = !!st.open, n = st.n || 0, act = (st.act === undefined) ? -1 : st.act;
if (!this._ref) { this._ref = function (el) { self._el = el; }; }
var R = { stageRef: this._ref, cnt: n + ' / ' + N,
 replay: function () { self._clear(); self.setState({ open: false, played: true, n: 0, act: -1 }); setTimeout(function () { self._started = false; self._go(); }, 1400); },
 cam: 'transform: scale3d(1,1,1) rotateX(' + (open ? -34 : -20) + 'deg) rotateY(' + (open ? -16 : -26) + 'deg)',
 lid: 'transform:'+(open?'translate3d(-26px,40px,16px) rotateY(-3deg)':'translate3d(0,-40px,0) rotateY(0deg)'),
 cap: 'visibility:' + (open ? 'hidden' : 'visible') + ';transition: visibility 0s linear ' + (open ? '0s' : '1.8s'),
 inn: 'visibility:' + (open ? 'visible' : 'hidden') + ';transition: visibility 0s linear ' + (open ? '0s' : '1.8s') };
for (var i = 0; i < N; i++) { var shown = i < n, a = i === act;
 R['go' + i] = (function (j) { return function () { self._clear(); self.setState({ open:true, n:6, act:j }); }; })(i);
 R['p' + i] = 'transform:scale(' + (shown ? 1 : 0) + ');opacity:' + (shown ? 1 : 0) + ';border:2.5px solid ' + (a ? '#DDF7A0' : '#FFFFFF') + ';background:' + (a ? '#7A1BD2' : '#FFFFFF') + ';color:' + (a ? '#FFFFFF' : '#7A1BD2');
 R['pg' + i] = a ? 'display:none' : '';
 R['bi' + i] = 'display:' + (a ? 'inline-flex' : 'none');
 R['bm' + i] = 'display:' + (a ? 'block' : 'none');
 R['g' + i] = 'flex:1;height:5px;border-radius:9px;transition:background .3s;background:' + (shown ? '#7A1BD2' : '#E6DFF0'); }
var A = act >= 0 ? IT[act] : IT[0], left = A.x < 695;
var bx = left ? 0 : 1110, by = Math.max(0, Math.min(210, A.y - 190));
R.bub = 'left:' + bx + 'px;top:' + by + 'px;opacity:' + (act >= 0 ? 1 : 0) + ';pointer-events:' + (act >= 0 ? 'auto' : 'none');
var ex = left ? bx + 280 : bx, ey = by + 90;
R.ld = 'M' + A.x + ' ' + A.y + ' C ' + ((A.x + ex) / 2) + ' ' + A.y + ', ' + ((A.x + ex) / 2) + ' ' + ey + ', ' + ex + ' ' + ey;
R.ls = 'opacity:' + (act >= 0 ? 1 : 0);
R.bnum = '0' + (act + 1); R.bname = A.n; R.brole = A.r; R.bopt = act >= 0 && A.o;
return R;
}
_clear() { (this._t || []).forEach(clearTimeout); this._t = []; }
_go() { var self = this; if (this._started) return; this._started = true; this._clear();
 this.setState({ open: true, n: 0, act: -1 });
 for (var i = 0; i < 6; i++) { (function (j) { self._t.push(setTimeout(function () { self.setState({ n: j + 1, act: j }); }, 2300 + j * 2500)); })(i); } }
componentDidMount() { var self = this;
 if (window.IntersectionObserver && this._el) { this._io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { self._go(); self._io.disconnect(); } }); }, { threshold: 0.4 }); this._io.observe(this._el); }
 else { this._t0 = setTimeout(function () { self._go(); }, 700); } }
componentWillUnmount() { this._clear(); clearTimeout(this._t0); if (this._io) this._io.disconnect();
}
}

const instance=new Component();const stage=section.querySelector('.cn-box-stage'),shell=document.createElement('div');shell.className='cn-box-stage-shell';stage.before(shell);shell.append(stage);const mobile=document.createElement('div');mobile.className='cn-box-mobile-card';shell.after(mobile);let variant='classic';const originalBubble=stage.querySelector('.cn-bub');function bindRemotes(parent){parent.querySelectorAll('[data-box-remote]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.boxRemote===variant));button.onclick=()=>{variant=button.dataset.boxRemote;syncRemote();instance.syncMobile()}})}function syncRemote(){const image=originalBubble.querySelector('[style*="bm1"] img')||originalBubble.querySelector('img[src*="remote"]');if(image){image.hidden=variant==='magic';if(variant!=='magic')image.src=variant==='rgb'?'custom-neon-assets/remote-rgb.png':'custom-neon-assets/remote.webp'}let note=originalBubble.querySelector('.cn-box-magic-note');if(!note){note=document.createElement('span');note.className='cn-box-magic-note';note.textContent='Télécommande Magic : visuel à venir';originalBubble.querySelectorAll('div')[0].append(note)}note.hidden=variant!=='magic'||instance.state.act!==1;bindRemotes(originalBubble)}instance.syncMobile=()=>{mobile.replaceChildren(originalBubble.cloneNode(true));bindRemotes(mobile)};new ResizeObserver(()=>{const width=section.clientWidth;const scale=width/1390;section.style.setProperty('--box-scale',scale);section.style.setProperty('--box-height',630*scale+'px');stage.style.width='1390px';instance.syncMobile()}).observe(section);instance.paint();
const lid=stage.querySelector('.cn-w3[style*="left: 0; top: 0;"]')||stage.querySelector('.cn-cam').lastElementChild,parts=[...stage.querySelectorAll('.cn-box-part')];let lidAnimation=null,partAnimations=[];
// Sample one continuous Catmull-Rom curve. Easing applies to the whole journey.
const waypoints=[[0,-40,0,0],[0,-70,0,0],[90,-70,-190,-1],[190,-70,-450,-3],[190,70,-490,-3],[90,70,-330,-3],[-26,40,16,-3]];
const frames=[];for(let step=0;step<=120;step++){const t=step/120*(waypoints.length-1),i=Math.min(waypoints.length-2,Math.floor(t)),u=t-i,p0=waypoints[Math.max(0,i-1)],p1=waypoints[i],p2=waypoints[i+1],p3=waypoints[Math.min(waypoints.length-1,i+2)],v=p1.map((_,j)=>.5*((2*p1[j])+(-p0[j]+p2[j])*u+(2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*u*u+(-p0[j]+3*p1[j]-3*p2[j]+p3[j])*u*u*u));frames.push({offset:step/120,transform:`translate3d(${v[0]}px,${v[1]}px,${v[2]}px) rotateY(${v[3]}deg)`})}
function lift(raised,duration){instance.partsRaised=raised;partAnimations.forEach(a=>a.cancel());partAnimations=parts.map(part=>{const from=raised?part.dataset.flatTransform:part.dataset.raisedTransform,to=raised?part.dataset.raisedTransform:part.dataset.flatTransform;part.style.transform=to;return part.animate([{transform:from},{transform:to}],{duration:reduced.matches?0:duration,easing:raised?'cubic-bezier(.22,1.35,.45,1)':'ease-in-out'})})}
function stop(){instance._clear();lidAnimation?.cancel();partAnimations.forEach(a=>a.cancel())}
instance._go=()=>{if(instance._started)return;instance._started=true;instance._clear();instance.partsRaised=false;instance.setState({open:true,n:0,act:-1});parts.forEach(part=>part.style.transform=part.dataset.flatTransform);if(reduced.matches){lift(true,0);instance.setState({open:true,n:6,act:0});return}lidAnimation=lid.animate(frames,{duration:2400,delay:100,easing:'ease-in-out',fill:'backwards'});instance._t.push(setTimeout(()=>lift(true,800),1250));for(let j=0;j<6;j++)instance._t.push(setTimeout(()=>instance.setState({n:j+1,act:j}),2600+j*2500))};
const originalVals=instance.renderVals.bind(instance);instance.renderVals=function(){const values=originalVals();values.replay=()=>{stop();lift(false,300);instance.setState({n:0,act:-1});if(reduced.matches){instance._started=false;instance._go();return}instance._t.push(setTimeout(()=>{lidAnimation=lid.animate(frames,{duration:1800,direction:'reverse',easing:'ease-in-out',fill:'forwards'});instance._t.push(setTimeout(()=>{lidAnimation.cancel();instance._started=false;instance._go()},1800))},300))};return values};
instance.paint();
instance.componentDidMount();section.querySelectorAll('[data-box-remote]').forEach(()=>{});syncRemote();instance.syncMobile();reduced.addEventListener('change',()=>{if(reduced.matches){stop();lift(true,0);instance.setState({open:true,n:6,act:Math.max(0,instance.state.act||0)})}});document.addEventListener('visibilitychange',()=>{if(document.hidden)instance._clear()});}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init()})();
