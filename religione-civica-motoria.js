/* Luigi - Religione, Educazione civica, Educazione fisica: attività concordate il 17/10/2026. */
(function(){
"use strict";
const jesus=[
{n:"NASCITA DI GESÙ",art:"👶",desc:"GESÙ NASCE A BETLEMME"},
{n:"BATTESIMO",art:"💧",desc:"GESÙ VIENE BATTEZZATO"},
{n:"I DISCEPOLI",art:"👥",desc:"GESÙ CHIAMA I DISCEPOLI"},
{n:"ULTIMA CENA",art:"🍞",desc:"GESÙ CENA CON I DISCEPOLI"},
{n:"RISURREZIONE",art:"🌅",desc:"GESÙ RISORGE"}
];
const religionSets=[[0,1],[1,2,3],[3,4]];
const civic=[
["UN COMPAGNO CADE. COSA FAI?",["🤝","LO AIUTO"],["😆","RIDO DI LUI"]],
["IL SEMAFORO È ROSSO. COSA FAI?",["🛑","MI FERMO"],["🏃","ATTRAVERSO"]],
["TROVI CARTA PER TERRA. COSA FAI?",["🗑️","LA BUTTO NEL CESTINO"],["🍃","LA LASCIO A TERRA"]],
["VUOI PARLARE IN CLASSE. COSA FAI?",["✋","ALZO LA MANO"],["📣","URLO"]],
["UN COMPAGNO È SOLO. COSA FAI?",["👋","LO INVITO A GIOCARE"],["🚶","LO ESCLUDO"]],
["ENTRI IN CLASSE. COSA FAI?",["🙂","SALUTO"],["😠","SPINGO"]],
["DEVI ATTRAVERSARE LA STRADA. COSA FAI?",["🚸","USO LE STRISCE"],["🚗","PASSO TRA LE AUTO"]],
["UN AMICO PRESTA UN LIBRO. COSA FAI?",["📚","LO TRATTO CON CURA"],["💥","LO ROVINO"]],
["È IL TURNO DI UN ALTRO. COSA FAI?",["⌛","ASPETTO"],["😤","SPINGO"]],
["DOPO MERENDA, DOVE BUTTI LA PLASTICA?",["♻️","NEL CONTENITORE GIUSTO"],["🌳","NEL GIARDINO"]]
];
const sport=[
["CALCIO","⚽","🎾","🏀"],["PALLACANESTRO","🏀","⚽","🏐"],["TENNIS","🎾","🏓","🏀"],
["NUOTO","🏊","🚴","🏃"],["CICLISMO","🚴","🏊","🤸"],["CORSA","🏃","🚣","🧘"],
["PALLAVOLO","🏐","⚽","🎾"],["PING PONG","🏓","🏑","🏀"],["SCI","⛷️","🏊","🚵"],
["PATTINAGGIO","⛸️","🥊","🏄"],["BOXE","🥊","🎾","🏀"],["GINNASTICA","🤸","🏄","🚣"],
["CANOTTAGGIO","🚣","🏊","🚴"],["SURF","🏄","🏃","⛷️"],["RUGBY","🏉","🏐","🏀"]
];
variants.religione=religionSets.map((a)=>["METTI IN ORDINE LE IMMAGINI",a.map(i=>jesus[i].n),"OK"]);
variants.civica=civic.map(a=>[a[0],[a[1][1],a[2][1]],a[1][1]]);
variants.motoria=sport.map(a=>["RICONOSCI LO SPORT: "+a[0],a.slice(1),a[1]]);
let religiousChosen=null,placed=[];
const previousActivity=activity;
activity=function(l){
const x=previousActivity(l);
if(l.id==="religione"){x.type="lifeOfJesus";x.question="ORDINA LE IMMAGINI DELLA VITA DI GESÙ.";x.hint="TOCCA UN'IMMAGINE, POI TOCCA UNA CASELLA NUMERATA.";x.expected="OK";x.stages=religionSets[activityIndex].map(i=>jesus[i]);}
if(l.id==="civica"){const c=civic[activityIndex];x.type="civicChoice";x.question=c[0];x.hint="TOCCA IL COMPORTAMENTO CORRETTO.";x.expected=c[1][1];x.choices=[c[1],c[2]];}
if(l.id==="motoria"){const a=sport[activityIndex];x.type="sportChoice";x.question="RICONOSCI LO SPORT: "+a[0];x.hint="GUARDA LE TRE IMMAGINI E TOCCA QUELLA GIUSTA.";x.expected=a[1];x.pictures=a.slice(1);}
return x;
};
const oldOpen=openLesson;
openLesson=function(id){religiousChosen=null;placed=[];oldOpen(id)};
const oldRender=renderLesson;
renderLesson=function(l){
if(!["lifeOfJesus","civicChoice","sportChoice"].includes(l.type)){oldRender(l);return}
const body=document.getElementById("lessonBody");
const questionBar='<div class="rce-voice"><button type="button" class="btn" onclick="luigiReadQuestion()">🔊 ASCOLTA LA DOMANDA</button><span id="rce-voice-state" role="status"></span></div>';
if(l.type==="lifeOfJesus"){
placed=Array(l.stages.length).fill(null);
body.innerHTML=questionBar+'<div class="rce-images">'+l.stages.map((s,i)=>'<button type="button" class="rce-card" data-jesus="'+i+'" onclick="luigiJesusPick('+i+')"><span class="rce-pic">'+s.art+'</span><strong>'+s.n+'</strong></button>').join('')+'</div><h3>ORDINA LE TAPPE DA 1 A '+l.stages.length+'</h3><div class="rce-slots">'+l.stages.map((_,i)=>'<button type="button" id="rce-slot-'+i+'" class="rce-slot" onclick="luigiJesusPlace('+i+')">'+(i+1)+'</button>').join('')+'</div>';return
}
if(l.type==="civicChoice"){
body.innerHTML=questionBar+'<div class="rce-images rce-two">'+l.choices.map(p=>'<button type="button" class="rce-card" data-answer="'+escapeHTML(p[1])+'" onclick="choose(this)"><span class="rce-pic">'+p[0]+'</span><strong>'+p[1]+'</strong></button>').join('')+'</div>';return
}
body.innerHTML=questionBar+'<div class="rce-images">'+l.pictures.map((p,i)=>'<button type="button" class="rce-card" data-answer="'+p+'" onclick="choose(this)"><span class="rce-pic">'+p+'</span><strong>IMMAGINE '+(i+1)+'</strong></button>').join('')+'</div>'
};
window.luigiReadQuestion=function(){
const msg=current?.type==="lifeOfJesus"?"METTI IN ORDINE LE IMMAGINI DELLA VITA DI GESÙ. TOCCA UNA IMMAGINE E POI UNA CASELLA NUMERATA.":current?.question;
const label=document.getElementById("rce-voice-state");
if(!msg)return;
if(!("speechSynthesis" in window)){if(label)label.textContent="AUDIO NON DISPONIBILE";return}
try{
speechSynthesis.cancel();
const speech=new SpeechSynthesisUtterance(msg);
speech.lang="it-IT";speech.rate=0.78;speech.pitch=1;
const voices=speechSynthesis.getVoices();
const v=voices.find(v=>v.lang.toLowerCase().startsWith("it")&&v.localService)||voices.find(v=>v.lang.toLowerCase().startsWith("it"));
if(v)speech.voice=v;
speech.onerror=()=>{if(label)label.textContent="VERIFICA LE VOCI ITALIANE DEL DISPOSITIVO";};
speechSynthesis.speak(speech);
if(label)label.textContent="ASCOLTA E SCEGLI";
}catch(e){if(label)label.textContent="AUDIO NON DISPONIBILE";}
};
window.luigiJesusPick=function(i){religiousChosen=i;document.querySelectorAll("[data-jesus]").forEach(b=>b.classList.toggle("rce-picked",Number(b.dataset.jesus)===i));resetFeedback()};
window.luigiJesusPlace=function(i){if(religiousChosen===null){if(placed[i]!==null){religiousChosen=placed[i];placed[i]=null}}else{placed=placed.map((x,j)=>x===religiousChosen?null:x);placed[i]=religiousChosen;religiousChosen=null}
placed.forEach((v,k)=>{const b=document.getElementById("rce-slot-"+k);b.innerHTML=v===null?String(k+1):'<span class="rce-pic">'+current.stages[v].art+'</span><strong>'+current.stages[v].n+'</strong>'});
document.querySelectorAll("[data-jesus]").forEach(b=>b.classList.remove("rce-picked"));resetFeedback()};
const oldCheck=checkAnswer;
checkAnswer=function(){if(current?.type==="lifeOfJesus"){selected=placed.length===current.stages.length&&placed.every((v,i)=>v===i)?"OK":"RIPROVA"}oldCheck()};
const css=document.createElement("style");css.textContent=`
.rce-voice{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:14px 0}.rce-voice button{font-size:20px;min-height:52px}.rce-voice span{font-size:14px;font-weight:700}\n.rce-images{display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:16px;margin:18px 0}
.rce-two{grid-template-columns:repeat(2,minmax(0,1fr))}
.rce-card,.rce-slot{border:4px solid #b4d5e7;background:#fff;border-radius:23px;min-height:170px;color:#17344b;padding:14px;font-size:19px;font-weight:900}
.rce-pic{display:block;font-size:clamp(76px,10vw,125px);line-height:1.35}.rce-card strong,.rce-slot strong{display:block}
.rce-card.selected,.rce-picked{background:#e4f8df;border-color:#279466}
.rce-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:12px}.rce-slot{border-style:dashed;background:#f2f9ff;font-size:34px}
.rce-slot .rce-pic{font-size:61px}
@media(max-width:570px){.rce-images{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.rce-card{min-height:135px;padding:7px;font-size:14px}.rce-pic{font-size:66px}.rce-slots{grid-template-columns:repeat(2,1fr)}}
`;document.head.append(css);
})();
