/* Correzioni richieste 18 ottobre: audio, matematica, identità e risposte */
(function(){
'use strict';
function say(text){
 if(!('speechSynthesis' in window)){alert('La voce non è disponibile su questo dispositivo.');return}
 speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(text);u.lang='it-IT';u.rate=.8;
 const voices=speechSynthesis.getVoices();
 u.voice=voices.find(v=>v.lang.startsWith('it')&&v.localService)||voices.find(v=>v.lang.startsWith('it'))||null;
 speechSynthesis.speak(u);
}
window.luigiSpeak=say;
const labels={nome:'COME TI CHIAMI? SCRIVI IL TUO NOME E COGNOME.',eta:'QUANTI ANNI HAI?',nascita:'QUANDO SEI NATO?',luogo:'DOVE SEI NATO?',citta:'DOVE VIVI?',occhi:'DI CHE COLORE SONO I TUOI OCCHI?',capelli:'DI CHE COLORE SONO I TUOI CAPELLI?',naso:'COME È IL TUO NASO?',colore:'QUAL È IL TUO COLORE PREFERITO?',cibo:'QUAL È IL TUO CIBO PREFERITO?'};
function makeMath(){
 const exercises=[];
 for(let i=0;i<100;i++){
   let a,b,op,result;
   if(i%4===2){op='-';a=3+(i*7)%18;b=1+(i*3)%a;result=a-b}
   else {op='+';a=1+(i*7)%12;b=1+(i*11)%(21-a);result=a+b}
   const choices=[result];for(let k=1;choices.length<3;k++){const v=Math.max(0,Math.min(20,result+(k%2?-1:1)*Math.ceil(k/2)));if(!choices.includes(v))choices.push(v)}
   for(let k=choices.length-1;k>0;k--){const j=(i*11+k*3)%(k+1);[choices[k],choices[j]]=[choices[j],choices[k]]}
   exercises.push([a+' '+op+' '+b+' = ?',choices.map(String),String(result)]);
 }
 variants.matematica=exercises;
}
makeMath();
function enhance(){
 const body=document.getElementById('lessonBody');if(!body||!current)return;
 const section=body.closest('.exercise'),instruction=section?.querySelector('.instruction');
 if(instruction&&!section.querySelector('.luigi-read-instruction')){
  const b=document.createElement('button');b.type='button';b.className='btn secondary luigi-read-instruction';b.textContent='🔊 ASCOLTA / RIASCOLTA LA CONSEGNA';
  b.addEventListener('click',()=>say([current.question,current.hint].filter(Boolean).join('. ')));
  instruction.after(b);
 }
 if(current.id==='italiano' && !body.querySelector('.luigi-read-word')){
  const b=document.createElement('button');b.type='button';b.className='btn secondary luigi-read-word';b.textContent='🔊 ASCOLTA LA PAROLA';
  b.onclick=()=>{
   const displayed=String(current.question||'').replace(/[_…]+/g,' pausa ');
   say('ASCOLTA LA PAROLA DA COMPLETARE. '+displayed);
  };
  body.prepend(b);
 }
 if(current.id==='matematica'){
  if(!body.querySelector('.luigi-math-calc')){
   const wrap=document.createElement('div');wrap.className='luigi-math-calc';
   wrap.innerHTML='<button type="button" class="btn secondary" id="luigi-calc-toggle">🧮 CALCOLATRICE</button><div id="luigi-calc-panel" hidden><output id="luigi-calc-screen">0</output><div class="luigi-calc-keys"></div></div>';
   body.append(wrap);
   const panel=wrap.querySelector('#luigi-calc-panel'),display=wrap.querySelector('output');let expr='';
   wrap.querySelector('#luigi-calc-toggle').onclick=()=>{panel.hidden=!panel.hidden};
   const keys=['7','8','9','+','4','5','6','−','1','2','3','=','C','0','⌫'];
   for(const key of keys){const b=document.createElement('button');b.type='button';b.textContent=key;
    b.onclick=()=>{if(key==='C')expr='';else if(key==='⌫')expr=expr.slice(0,-1);else if(key==='='){const m=expr.match(/^(\d+)([+−])(\d+)$/);expr=m?String(m[2]==='+'?+m[1]+ +m[3]:+m[1]- +m[3]):'ERRORE'}else{if(expr==='ERRORE')expr='';expr+=key}display.textContent=expr||'0'};
    wrap.querySelector('.luigi-calc-keys').append(b);
   }
  }
 }
 if(current.type==='identity'){
  const fields=body.querySelector('.identity-fields');
  if(fields){
   const nome=fields.querySelector('[data-identity="nome"]'),cognome=fields.querySelector('[data-identity="cognome"]');
   if(nome&&cognome){nome.value=((identityData.nome||'')+' '+(identityData.cognome||'')).trim();nome.dataset.identity='nomeCompleto';nome.oninput=()=>{const v=nome.value.trim().split(/\s+/);identityData.nome=v.shift()||'';identityData.cognome=v.join(' ');drawPortrait();resetFeedback()};cognome.closest('label')?.remove();}
   for(const field of fields.querySelectorAll('label')){
    const input=field.querySelector('input,select');if(!input||field.querySelector('.luigi-field-speak'))continue;
    const id=input.dataset.identity==='nomeCompleto'?'nome':input.dataset.identity;
    const b=document.createElement('button');b.type='button';b.className='luigi-field-speak';b.textContent='🔊 ASCOLTA';b.setAttribute('aria-label','Ascolta la domanda: '+(labels[id]||id));b.onclick=()=>say(labels[id]||field.textContent);
    field.insertBefore(b,input);
   }
  }
 }
 // Non duplicare i comandi delle materie che già hanno un pulsante vocale dedicato.
 if(current.id==='religione'&&body.querySelectorAll('img').length){
   body.querySelectorAll('img').forEach(img=>{if(img.alt?.toUpperCase().includes('PASQUA')&&!img.parentElement.textContent.includes('PASQUA')){const t=document.createElement('strong');t.textContent='PASQUA';img.parentElement.append(t)}})
 }
}
const oldRender=renderLesson;
renderLesson=function(l){oldRender(l);enhance()};
const oldOpen=openLesson;
openLesson=function(id){oldOpen(id);enhance()};
const css=document.createElement('style');css.textContent=`
.luigi-read-instruction{display:block;margin:10px 0 18px;font-size:17px!important}
.luigi-math-calc{margin:18px 0;max-width:370px}.luigi-math-calc button{font-weight:800}
#luigi-calc-panel{position:static;margin-top:10px;border:2px solid #b7d4e9;border-radius:16px;padding:12px;background:#fff}
#luigi-calc-panel[hidden]{display:none!important}
#luigi-calc-screen{display:block;font-size:34px;font-weight:900;background:#edf6fc;border-radius:8px;text-align:right;padding:10px;margin-bottom:8px;min-height:55px}
.luigi-calc-keys{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}
.luigi-calc-keys button{min-height:52px;font-size:22px;background:#e9f4fc;border:1px solid #b7d4e9;border-radius:9px}
.identity-fields label{position:relative}.identity-fields .luigi-field-speak{display:block;margin:4px 0;background:#e5f2fb;border:1px solid #9ac9e7;border-radius:7px;padding:5px 9px;font-size:12px;font-weight:800}
`;document.head.append(css);
})();
