/* Tecnologia: raccolta differenziata divisa in due pannelli, utilizzabile con mouse e touch. */
(function(){
'use strict';
const objects=[
 {name:'BOTTIGLIA DI PLASTICA',icon:'🧴',bin:2},
 {name:'BUCCIA DI BANANA',icon:'🍌',bin:0},
 {name:'SPUGNA USATA',icon:'🧽',bin:4},
 {name:'GIORNALE',icon:'📰',bin:1},
 {name:'LATTINA',icon:'🥫',bin:3}
];
const bins=[
 {name:'UMIDO',color:'#94602f'},
 {name:'CARTA',color:'#267ecb'},
 {name:'PLASTICA',color:'#e5b41f'},
 {name:'METALLI',color:'#6e9d98'},
 {name:'INDIFFERENZIATO',color:'#777981'}
];
let picked=null,assignments=Array(5).fill(null);
const previousRender=renderLesson;
renderLesson=function(l){
 if(l.type!=='recycle'){previousRender(l);return}
 l.type='recyclePanels';
 picked=null;assignments=Array(5).fill(null);
 const body=document.getElementById('lessonBody');
 body.innerHTML='<div class="tech-layout"><section class="tech-pane"><h3>1. OGGETTI DA SMALTIRE</h3><p>TOCCA UN OGGETTO.</p><div class="tech-objects">'+objects.map((o,i)=>'<button type="button" class="tech-object" id="tech-obj-'+i+'" onclick="techPick('+i+')" aria-pressed="false"><span class="tech-object-art" aria-hidden="true">'+o.icon+'</span><strong>'+o.name+'</strong></button>').join('')+'</div></section><section class="tech-pane"><h3>2. SCEGLI IL CESTINO</h3><p>TOCCA IL CESTINO GIUSTO.</p><div class="tech-bins">'+bins.map((b,i)=>'<button type="button" class="tech-bin-choice" id="tech-bin-'+i+'" onclick="techPlace('+i+')" style="--bin:'+b.color+'"><span class="tech-wheelie" aria-hidden="true"><span class="tech-lid"></span><span class="tech-container"><span class="tech-recycle-mark">♻</span></span><span class="tech-wheels"></span></span><strong>'+b.name+'</strong><small id="tech-filled-'+i+'">VUOTO</small></button>').join('')+'</div></section></div><p id="tech-message" class="tech-message" aria-live="polite">SCEGLI UN OGGETTO A SINISTRA E POI IL CESTINO A DESTRA.</p>';
};
window.techPick=function(i){picked=i;techRefresh('OGGETTO SELEZIONATO: '+objects[i].name+'. ORA SCEGLI IL CESTINO.')};
window.techPlace=function(bin){if(picked===null){techRefresh('PRIMA SCEGLI UN OGGETTO A SINISTRA.');return}assignments=assignments.map((v,i)=>i===bin||v===picked?null:v);assignments[bin]=picked;picked=null;techRefresh('BENE, CONTINUA CON GLI ALTRI OGGETTI.')};
function techRefresh(message){
 objects.forEach((o,i)=>{const b=document.getElementById('tech-obj-'+i);if(b){b.classList.toggle('tech-picked',picked===i);b.classList.toggle('tech-assigned',assignments.includes(i));b.setAttribute('aria-pressed',picked===i?'true':'false')}});
 bins.forEach((b,i)=>{const n=document.getElementById('tech-filled-'+i);if(n)n.textContent=assignments[i]===null?'VUOTO':objects[assignments[i]].name});
 document.getElementById('tech-message').textContent=message;
 resetFeedback()
}
const previousCheck=checkAnswer;
checkAnswer=function(){
 if(current?.type==='recyclePanels'){
  selected=assignments.every((v,i)=>v===objects.findIndex(o=>o.bin===i))?'OK':'RIPROVA';
  if(assignments.some(v=>v===null)){document.getElementById('tech-message').textContent='ABBINA TUTTI E CINQUE GLI OGGETTI PRIMA DI CONTROLLARE.';return}
 }
 previousCheck();
};
const css=document.createElement('style');css.textContent=`
.tech-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px}
.tech-pane{background:#f2f9ff;border:2px solid #c5dfef;border-radius:22px;padding:16px;min-width:0}
.tech-pane h3{font-size:clamp(17px,2vw,25px);font-weight:900;color:#16456b;margin:0 0 8px}
.tech-pane>p{font-size:17px;font-weight:700;color:#48677e}
.tech-objects,.tech-bins{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.tech-object,.tech-bin-choice{background:white;min-width:0;min-height:170px;border:3px solid #b9d5e6;border-radius:18px;padding:10px;color:#193e5e;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;touch-action:manipulation}
.tech-object strong,.tech-bin-choice strong{font-size:clamp(13px,1.3vw,18px);line-height:1.15;overflow-wrap:anywhere}
.tech-object-art{font-size:clamp(47px,6vw,78px);line-height:1.2}
.tech-object.tech-picked{background:#fff2c8;border-color:#e3a52d}
.tech-object.tech-assigned:not(.tech-picked){background:#edf7f1;border-color:#58a983}
.tech-bin-choice{border-color:var(--bin);background:#fff;min-height:196px}
.tech-bin-choice small{font-size:12px;font-weight:800;color:#345e78;min-height:28px}
.tech-wheelie{display:block;width:72px;height:112px;position:relative}
.tech-lid{display:block;height:12px;width:85px;background:var(--bin);border-radius:5px;position:absolute;top:4px;left:-6px;box-shadow:0 3px 0 #2640504d}
.tech-container{position:absolute;top:17px;left:5px;width:63px;height:82px;border-radius:7px 7px 13px 13px;background:var(--bin);box-shadow:inset -11px 0 #00000018;display:grid;place-items:center}
.tech-recycle-mark{font-size:35px;color:white}
.tech-wheels{position:absolute;bottom:3px;left:13px;width:45px;border-bottom:8px dotted #34424e}
.tech-message{padding:12px 14px;border-radius:14px;background:#fff6da;font-size:17px;font-weight:800;color:#694e18}
@media(max-width:750px){.tech-layout{grid-template-columns:1fr}.tech-object,.tech-bin-choice{min-height:142px}.tech-wheelie{transform:scale(.82);margin:-8px 0}}
@media(min-width:751px){.tech-objects,.tech-bins{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;document.head.append(css);
})();