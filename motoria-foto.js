/* MODULO PRONTO: SPORT FOTOGRAFICI. Attivare in index.html solo dopo aver caricato assets/foto_sport_luigi.jpg */
(function(){
'use strict';
const sportWords=['CALCIO','PALLAVOLO','PALLACANESTRO','TENNIS','NUOTO','CORSA','CICLISMO','GINNASTICA','SCI','PATTINAGGIO','BOXE','CANOTTAGGIO','SURF','RUGBY','PING PONG'];
const photo='assets/motoria/';
const previousRender=renderLesson;
const voice=function(phrase){if(!('speechSynthesis' in window))return false;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(phrase);u.lang='it-IT';u.rate=.78;const v=speechSynthesis.getVoices().find(v=>v.localService&&v.lang.toLowerCase().startsWith('it'));if(v)u.voice=v;speechSynthesis.speak(u);return true}catch{return false}};
window.luigiSportAscolta=function(){const p=sportWords[activityIndex];if(!voice(p)){const n=document.getElementById('sport-audio-status');if(n)n.textContent='VOCE NON DISPONIBILE SU QUESTO DISPOSITIVO'}};
function photoStyle(i){return 'background-image:url(\"assets/motoria/'+sportWords[i].toLowerCase().replaceAll(' ','-')+'.jpg\");'}
renderLesson=function(l){
 if(l.id!=='motoria'){previousRender(l);return}
 const i=activityIndex%15;const choices=[i,(i+4)%15,(i+9)%15].sort((a,b)=>((a*7+activityIndex*3)%19)-((b*7+activityIndex*3)%19));
 l.type='sportChoice';l.question='RICONOSCI LO SPORT';l.expected=sportWords[i];l.hint='ASCOLTA IL NOME, POI SCEGLI LA FOTOGRAFIA GIUSTA.';
 const headline=document.querySelector('.exercise .instruction');if(headline)headline.textContent='GUARDA LE FOTOGRAFIE E SCEGLI LO SPORT.';
 const body=document.getElementById('lessonBody');
 body.innerHTML='<div class="sport-red-word">'+sportWords[i]+'</div><button class="btn sport-voice" type="button" onclick="luigiSportAscolta()">🔊 ASCOLTA / RIASCOLTA</button><p id="sport-audio-status" role="status"></p><div class="sport-photo-grid">'+choices.map((k,j)=>'<button type="button" class="sport-photo-card" aria-label="FOTOGRAFIA '+(j+1)+'" aria-pressed="false" data-answer="'+sportWords[k]+'" onclick="choose(this)"><span class="sport-photo" style="'+photoStyle(k)+'"></span><strong>FOTOGRAFIA '+(j+1)+'</strong></button>').join('')+'</div>';
};
const style=document.createElement('style');style.textContent=`
.sport-red-word{font-size:clamp(55px,11vw,110px);font-weight:1000;color:#c81729;text-align:center;line-height:1.1;margin:20px 0}
.sport-voice{display:block;margin:15px auto 25px}
.sport-photo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.sport-photo-card{border:4px solid #afd4e7;background:#fff;border-radius:20px;overflow:hidden;padding:5px;color:#194362;min-height:215px}
.sport-photo-card strong{display:block;font-size:15px;margin:8px 0}
.sport-photo-card.selected{border-color:#238452;background:#e5fae9}
.sport-photo{display:block;background-size:cover;background-position:center;width:100%;aspect-ratio:0.89;background-repeat:no-repeat;border-radius:13px}
@media(max-width:650px){.sport-photo-grid{gap:6px}.sport-photo-card{min-height:110px;padding:3px;border-width:3px}.sport-photo-card strong{font-size:10px}}
`;document.head.append(style);
})();
