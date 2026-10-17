/* Inglese e francese: lettura della parola, immagini e pronuncia. */
(function(){
'use strict';
const vocab={
 inglese:[
 ['APPLE','🍎','🚗','🐟'],['CAT','🐱','🐶','🚲'],['RED','🔴','🔵','🟢'],
 ['DOG','🐶','🐸','🐻'],['BOOK','📖','🥛','🚗'],['SUN','☀️','🌙','🌧️'],
 ['CAR','🚗','🚲','🚌'],['FISH','🐟','🐱','🐦'],['HOUSE','🏠','🏫','🚘'],
 ['BALL','⚽','🍎','🪑'],['TREE','🌳','🌹','🏠'],['BLUE','🔵','🟡','🟢']
 ],
 francese:[
 ['POMME','🍎','🍐','🍞'],['CHAT','🐱','🐶','🐟'],['CHIEN','🐶','🐸','🐻'],
 ['SOLEIL','☀️','🌙','☁️'],['LIVRE','📖','🪑','🎒'],['MAISON','🏠','🏫','🚗'],
 ['FLEUR','🌷','🌳','🍎'],['EAU','💧','🔥','🪨'],['LUNE','🌙','☀️','⭐'],
 ['VOITURE','🚗','🚲','🚂'],['BALLON','⚽','📕','🍞'],['ROUGE','🔴','🔵','🟢']
 ]
};
for(const lang of Object.keys(vocab))variants[lang]=vocab[lang].map(([word,right,...other])=>[word,[right,...other],right]);
const previousActivity=activity;
activity=function(l){const result=previousActivity(l);if(vocab[l.id]){const v=vocab[l.id][activityIndex];result.type='foreignPicture';result.foreignWord=v[0];result.expected=v[1];result.options=[v[1],v[2],v[3]];result.question='ASCOLTA E SCEGLI L’IMMAGINE CORRETTA.';result.hint='TOCCA LA FIGURA CHE CORRISPONDE ALLA PAROLA ROSSA.';result.title='PAROLA E IMMAGINE.'}return result};
const oldRender=renderLesson;
renderLesson=function(l){if(l.type!=='foreignPicture'){oldRender(l);return}document.getElementById('lessonBody').innerHTML='<div class="fl-word" lang="'+(l.id==='inglese'?'en':'fr')+'">'+escapeHTML(l.foreignWord)+'</div><button type="button" class="btn fl-audio" onclick="luigiSayForeign()">🔊 ASCOLTA / RIASCOLTA</button><div class="fl-images">'+l.options.map((p,i)=>'<button type="button" class="fl-picture" aria-label="IMMAGINE '+(i+1)+'" aria-pressed="false" data-answer="'+escapeHTML(p)+'" onclick="choose(this)"><span aria-hidden="true">'+p+'</span></button>').join('')+'</div><p class="fl-hint" id="fl-audio-status" role="status"></p>';
};
let utter=null;
window.luigiSayForeign=function(){
 if(!current||current.type!=='foreignPicture')return;
 const state=document.getElementById('fl-audio-status');
 if(!('speechSynthesis' in window)){if(state)state.textContent='AUDIO NON DISPONIBILE SU QUESTO DISPOSITIVO.';return}
 try{speechSynthesis.cancel();utter=new SpeechSynthesisUtterance(current.foreignWord.toLowerCase());utter.lang=current.id==='inglese'?'en-GB':'fr-FR';utter.rate=.75;utter.pitch=1;let voices=speechSynthesis.getVoices();const match=voices.find(v=>v.lang.toLowerCase().startsWith(current.id==='inglese'?'en':'fr')&&v.localService)||voices.find(v=>v.lang.toLowerCase().startsWith(current.id==='inglese'?'en':'fr'));if(match)utter.voice=match;utter.onerror=()=>{if(state)state.textContent='PRONUNCIA NON DISPONIBILE. CONTROLLA LE VOCI INSTALLATE SUL DISPOSITIVO.'};speechSynthesis.speak(utter);if(state)state.textContent='🔊 ASCOLTA LA PRONUNCIA.';}catch{if(state)state.textContent='IMPOSSIBILE RIPRODURRE L’AUDIO.'}
};
const style=document.createElement('style');style.textContent=`
.fl-word{font-size:clamp(52px,11vw,112px);color:#cc122d;font-weight:1000;text-align:center;letter-spacing:.04em;margin:18px 0 14px;overflow-wrap:anywhere}
.fl-audio{display:block;margin:8px auto 25px;background:#215d9b}
.fl-images{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.fl-picture{min-height:185px;border:4px solid #bad8eb;border-radius:24px;background:#fff;display:grid;place-items:center;padding:12px}
.fl-picture span{font-size:clamp(78px,11vw,130px)}.fl-picture.selected{border-color:#198651;background:#e8f9ed}
.fl-hint{text-align:center;font-weight:800;color:#465e70}
@media(max-width:560px){.fl-images{gap:8px}.fl-picture{min-height:125px;padding:4px}.fl-picture span{font-size:clamp(55px,12vw,80px)}}
`;document.head.append(style);
})();
