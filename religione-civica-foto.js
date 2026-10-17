/* Attivare solo dopo il caricamento delle fotografie locali in assets/religione e assets/civica. */
(function(){
"use strict";
const religione=[
["QUALE FESTA RICORDA LA NASCITA DI GESÙ?","natale",["natale","pasqua","chiesa"]],
["QUALE FESTA RICORDA LA RISURREZIONE DI GESÙ?","pasqua",["natale","pasqua","chiesa"]],
["QUALE IMMAGINE RAPPRESENTA L’ULTIMA CENA DI GESÙ?","ultima-cena",["ultima-cena","natale","chiesa"]],
["QUALE IMMAGINE RAPPRESENTA IL BATTESIMO DI GESÙ?","battesimo-gesu",["battesimo-gesu","ultima-cena","natale"]],
["QUALE IMMAGINE MOSTRA IL PRESEPE?","presepe",["presepe","chiesa","pasqua"]],
["QUALE IMMAGINE MOSTRA UNA CROCE?","croce",["croce","chiesa","presepe"]],
["QUALE IMMAGINE MOSTRA UNA CHIESA?","chiesa",["chiesa","pasqua","natale"]],
["QUALE GIORNO RICORDA L’INGRESSO DI GESÙ A GERUSALEMME CON I RAMI DI ULIVO?","domenica-palme",["domenica-palme","pasqua","natale"]]
];
const civica=[
["SE UN BAMBINO CADE, CHE COSA FAI?","aiutare-compagno","ignorare-compagno"],
["IL SEMAFORO È ROSSO. CHE COSA FAI?","fermarsi-semaforo","attraversare-rosso"],
["VUOI PARLARE IN CLASSE. CHE COSA FAI?","mano-alzata","disturbare-classe"],
["DOVE BUTTI LA CARTA?","carta-cestino","carta-terra"],
["SEI IN FILA. CHE COSA FAI?","aspettare-turno","spingere-fila"],
["QUANDO ENTRI IN CLASSE, CHE COSA FAI?","salutare","non-salutare"],
["DOVE ATTRAVERSI LA STRADA?","attraversare-strisce","attraversare-pericolo"],
["UN AMICO TI PRESTA UN LIBRO. CHE COSA FAI?","rispettare-libro","rovinare-libro"],
["DOVE BUTTI UNA BOTTIGLIA DI PLASTICA VUOTA?","differenziata-corretta","differenziata-sbagliata"],
["UN COMPAGNO È SOLO. CHE COSA FAI?","includere-compagno","escludere-compagno"]
];
religione.splice(3);
variants.religione=religione.map(x=>[x[0],x[2],x[1]]);
civica.splice(1);
variants.civica=civica.map(x=>[x[0],[x[1],x[2]],x[1]]);
const oldActivity=activity;
activity=function(l){const a=oldActivity(l);if(l.id==='religione'){const x=religione[activityIndex];a.type='religionPhoto';a.question=x[0];a.hint='ASCOLTA E SCEGLI LA FOTOGRAFIA GIUSTA.';a.expected=x[1];a.pictures=x[2]}if(l.id==='civica'){const x=civica[activityIndex];a.type='civicPhoto';a.question=x[0];a.hint='ASCOLTA E SCEGLI IL COMPORTAMENTO CORRETTO.';a.expected=x[1];a.pictures=[x[1],x[2]]}return a};
function say(question){if(!('speechSynthesis' in window))return false;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(question);u.lang='it-IT';u.rate=.8;const v=speechSynthesis.getVoices().find(x=>x.localService&&x.lang.toLowerCase().startsWith('it'));if(v)u.voice=v;speechSynthesis.speak(u);return true}catch{return false}}
window.luigiRceListen=function(){const el=document.getElementById('rce-voice-status');if(!say(current.question)&&el)el.textContent='AUDIO NON DISPONIBILE. INSTALLARE UNA VOCE ITALIANA LOCALE.'};
const prev=renderLesson;
renderLesson=function(l){if(!['religionPhoto','civicPhoto'].includes(l.type)){prev(l);return}
const main=document.querySelector('.exercise .instruction');if(main)main.textContent='ASCOLTA LA DOMANDA E SCEGLI LA FOTOGRAFIA.';
const folder=l.id==='religione'?'religione':'civica';const order=l.pictures.slice();if(activityIndex%2===1)order.reverse();
const el=document.getElementById('lessonBody');el.innerHTML='<h2 class="rce-red">'+escapeHTML(l.question)+'</h2><button class="btn rce-voice" onclick="luigiRceListen()">🔊 ASCOLTA / RIASCOLTA</button><p id="rce-voice-status" role="status"></p><div class="rce-real-photos">'+order.map((p,i)=>'<button type="button" class="rce-photo-button" data-answer="'+escapeHTML(p)+'" onclick="choose(this)" aria-label="FOTOGRAFIA '+(i+1)+'"><img src="assets/'+folder+'/'+p+'.jpg" alt="FOTOGRAFIA '+(i+1)+'" onerror="this.alt=\'IMMAGINE NON ANCORA DISPONIBILE\'"></button>').join('')+'</div>';
};
const style=document.createElement('style');style.textContent=`
.rce-red{color:#c71929;font-size:clamp(32px,5.5vw,65px);text-align:center;font-weight:1000;line-height:1.15}
.rce-voice{display:block;margin:12px auto 23px}
.rce-real-photos{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:15px}
.rce-photo-button{border:4px solid #b1d5e8;border-radius:22px;background:#fff;padding:8px;overflow:hidden;display:flex;align-items:center;min-width:0}
.rce-photo-button img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:contain;object-position:center;border-radius:14px;background:#f4f8fb}
.rce-photo-button.selected{border-color:#148f54;background:#e5f8eb}
@media(max-width:520px){.rce-real-photos{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.rce-photo-button{padding:4px}}
`;document.head.append(style);
})();
