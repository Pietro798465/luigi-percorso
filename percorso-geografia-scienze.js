/* Attività visuali locali per Geografia e Scienze. Nessuna libreria o immagine remota. */
(function(){
'use strict';
const geo=[
 {title:'DAL SISTEMA SOLARE ALLA TERRA',q:'NEL SISTEMA SOLARE, QUALE PIANETA È LA TERRA?',opts:[['🌍','TERRA'],['🪐','SATURNO'],['🔴','MARTE']],answer:'TERRA',explain:'LA TERRA È IL PIANETA SU CUI VIVIAMO.'},
 {title:'IL NOSTRO PIANETA',q:'QUALE IMMAGINE MOSTRA IL PIANETA TERRA?',opts:[['🌞','SOLE'],['🌍','TERRA'],['🌙','LUNA']],answer:'TERRA',explain:'LA TERRA È UN PIANETA DEL SISTEMA SOLARE.'},
 {title:'DALLA TERRA ALL’EUROPA',q:'IN QUALE CONTINENTE SI TROVA L’ITALIA?',opts:[['🌍','AFRICA'],['🌎','AMERICA'],['🌐','EUROPA']],answer:'EUROPA',explain:'L’ITALIA SI TROVA IN EUROPA.'},
 {title:'DALL’EUROPA ALL’ITALIA',q:'QUALE PAESE DOBBIAMO TROVARE IN EUROPA?',opts:[['🇫🇷','FRANCIA'],['🇮🇹','ITALIA'],['🇪🇸','SPAGNA']],answer:'ITALIA',explain:'IL PAESE IN CUI VIVIAMO È L’ITALIA.'},
 {title:'DALL’ITALIA ALLA CAMPANIA',q:'IN QUALE REGIONE SI TROVA CASERTA?',opts:[['🏔️','PIEMONTE'],['🌋','CAMPANIA'],['🏝️','SICILIA']],answer:'CAMPANIA',explain:'CASERTA SI TROVA IN CAMPANIA.'},
 {title:'DALLA CAMPANIA A CASERTA',q:'QUAL È LA PROVINCIA DI CUI STIAMO PARLANDO?',opts:[['🏛️','CASERTA'],['⛵','SALERNO'],['🌊','NAPOLI']],answer:'CASERTA',explain:'CASERTA È UNA DELLE PROVINCE DELLA CAMPANIA.'}
];
const phases=[['🌰','SEME'],['🌱','GERMOGLIO'],['🪴','PIANTINA'],['🌳','PIANTA']];
geo.splice(1,2);
variants.geografia=geo.map((x,i)=>[x.q,x.opts.map(o=>o[1]),x.answer]);
variants.scienze=[['METTI IN ORDINE LE QUATTRO FASI',[], 'OK'],['QUAL È LA PRIMA FASE?',[], 'SEME'],['COSA SPUNTA DAL SEME?',[], 'GERMOGLIO'],['CHE COSA DIVENTA IL GERMOGLIO?',[], 'PIANTINA'],['QUAL È L’ULTIMA FASE?',[], 'PIANTA']];
const originalActivity=activity;
activity=function(l){
 const o=originalActivity(l);
 if(l.id==='geografia'){const g=geo[activityIndex];o.type='geoSteps';o.title=g.title;o.question=g.q;o.hint='GUARDA LE IMMAGINI E TOCCA LA RISPOSTA CORRETTA.';o.expected=g.answer;o.geo=g}
 if(l.id==='scienze'){o.type=activityIndex===0?'plantOrder':'plantChoice';o.question=activityIndex===0?'METTI IN ORDINE LE FASI DELLA CRESCITA DELLA PIANTA.':variants.scienze[activityIndex][0];o.hint=activityIndex===0?'TOCCA UN’IMMAGINE E POI IL NUMERO DELLA POSIZIONE.':'TOCCA L’IMMAGINE CORRETTA.';o.expected=activityIndex===0?'OK':variants.scienze[activityIndex][2]}
 return o;
};
let picked=null,slots=[null,null,null,null],chosen='';
function resetPick(){picked=null;chosen='';slots=[null,null,null,null]}
const originalOpen=openLesson;
openLesson=function(id){if(id==='scienze')resetPick();originalOpen(id)};
const oldRender=renderLesson;
renderLesson=function(l){
 const node=document.getElementById('lessonBody');
 if(l.type==='geoSteps'){
 let trail=['☀️ SISTEMA SOLARE','🌍 TERRA','🌐 EUROPA','🇮🇹 ITALIA','🌋 CAMPANIA','🏛️ CASERTA'];
 node.innerHTML='<div class="gs-trail">'+trail.map((t,i)=>'<span class="'+(i===activityIndex?'gs-now':'')+'">'+t+'</span>').join('<b>→</b>')+'</div><div class="gs-options">'+l.geo.opts.map((o,i)=>'<button type="button" class="gs-card" data-answer="'+o[1]+'" onclick="gsChoose(this)"><span class="gs-illustration">'+o[0]+'</span><strong>'+o[1]+'</strong></button>').join('')+'</div><p class="gs-note">'+(activityIndex>=2?'QUESTO È UN ESERCIZIO DI RICONOSCIMENTO. LE CARTINE CON TERRITORI CLICCABILI SARANNO AGGIUNTE SEPARATAMENTE.':'')+'</p>';
 return;
 }
 if(l.type==='plantOrder'){
 node.innerHTML='<div class="gs-phases">'+phases.map((p,i)=>'<button type="button" class="gs-card" data-phase="'+i+'" onclick="gsPickPhase('+i+')"><span class="gs-illustration">'+p[0]+'</span><strong>'+p[1]+'</strong></button>').join('')+'</div><p class="gs-note">ORA METTI LE IMMAGINI NELL’ORDINE GIUSTO:</p><div class="gs-slots">'+[0,1,2,3].map(i=>'<button type="button" class="gs-slot" id="gs-slot-'+i+'" onclick="gsPlace('+i+')">'+(i+1)+'</button>').join('')+'</div><button type="button" class="btn secondary" onclick="gsReset()">↻ RICOMINCIA LA SEQUENZA</button>';
 return;
 }
 if(l.type==='plantChoice'){
 node.innerHTML='<div class="gs-options">'+phases.map((p,i)=>'<button type="button" class="gs-card" data-answer="'+p[1]+'" onclick="gsChoose(this)"><span class="gs-illustration">'+p[0]+'</span><strong>'+p[1]+'</strong></button>').join('')+'</div>';return
 }
 oldRender(l)
};
window.gsChoose=function(el){selected=el.dataset.answer;document.querySelectorAll('.gs-card').forEach(x=>{x.classList.toggle('gs-selected',x===el);x.setAttribute('aria-pressed',x===el?'true':'false')});resetFeedback()};
window.gsPickPhase=function(i){picked=i;document.querySelectorAll('[data-phase]').forEach(x=>x.classList.toggle('gs-selected',Number(x.dataset.phase)===i));resetFeedback()};
window.gsPlace=function(i){if(picked===null){picked=slots[i];slots[i]=null}else{slots=slots.map(v=>v===picked?null:v);slots[i]=picked;picked=null}for(let k=0;k<4;k++){const e=document.getElementById('gs-slot-'+k);e.innerHTML=slots[k]===null?String(k+1):'<span class="gs-illustration">'+phases[slots[k]][0]+'</span><strong>'+phases[slots[k]][1]+'</strong>';}document.querySelectorAll('[data-phase]').forEach(x=>x.classList.remove('gs-selected'));resetFeedback()};
window.gsReset=function(){resetPick();renderLesson(current);resetFeedback()};
const originalCheck=checkAnswer;
checkAnswer=function(){if(current?.type==='plantOrder'){selected=slots.every((x,i)=>x===i)?'OK':'RIPROVA'}originalCheck()};
const css=document.createElement('style');css.textContent=`
.gs-trail{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;margin:12px 0 20px}
.gs-trail span{border:2px solid #bad6e8;border-radius:13px;background:#f1f9ff;padding:8px;font-size:14px;font-weight:800}
.gs-trail .gs-now{background:#ffe9aa;border-color:#e6a733}.gs-options,.gs-phases,.gs-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:12px;margin:18px 0}
.gs-card,.gs-slot{border:3px solid #aacce3;background:#fff;border-radius:20px;min-height:145px;padding:12px;color:#193b56;font-weight:900}
.gs-card strong,.gs-slot strong{display:block;font-size:19px}.gs-illustration{display:block;font-size:clamp(63px,9vw,110px);line-height:1.3}
.gs-selected{background:#e0f8df!important;border-color:#208c64!important}.gs-slot{border-style:dashed;min-height:145px;font-size:36px;background:#f1f9ff}
.gs-note{font-size:16px;font-weight:800;color:#3c5b72}
@media(max-width:520px){.gs-options,.gs-phases,.gs-slots{grid-template-columns:repeat(2,minmax(0,1fr))}.gs-card{min-height:125px;padding:8px}.gs-illustration{font-size:60px}}
`;document.head.append(css);
})();
