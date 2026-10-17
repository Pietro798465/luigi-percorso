(function installLuigiExtra(){
  const style=document.createElement('style');
  style.textContent=`
    .enh-visual{border:3px solid #d7e7f4;border-radius:24px;background:linear-gradient(150deg,#f7fcff,#edf7ff);padding:20px;margin:16px 0}
    .enh-hint{font-size:clamp(17px,2vw,23px);font-weight:850;color:#295573;line-height:1.45;margin:8px 0 16px}
    .enh-bank{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin:18px 0}
    .enh-card{border:3px solid #a8c7e2;border-radius:20px;background:white;min-width:125px;min-height:110px;padding:12px 16px;font-size:21px;font-weight:900;color:#153b5b;box-shadow:0 6px 0 #cfdeeb;cursor:pointer;touch-action:manipulation}
    .enh-card[aria-pressed="true"]{border-color:#ff9c47;background:#fff5db;transform:translateY(3px);box-shadow:0 3px 0 #d4aa74}
    .enh-emoji{font-size:clamp(48px,6vw,73px);display:block;margin:4px}
    .enh-slots{display:grid;grid-template-columns:repeat(auto-fit,minmax(134px,1fr));gap:12px;margin:15px 0}
    .enh-slot{min-height:135px;border:3px dashed #85b8d2;border-radius:20px;background:white;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:#295573;cursor:pointer}
    .enh-number{display:inline-grid;place-items:center;border-radius:50%;width:39px;height:39px;background:#226cab;color:white;font-size:22px;margin:4px}
    .enh-slot .enh-emoji{font-size:48px}.enh-slot strong{font-size:15px}
    .enh-mini{font-size:14px;color:#526d7e;font-weight:750;margin-top:8px}
    .enh-bin{min-height:158px;border:4px solid;border-radius:22px;background:white;font-size:17px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:8px;cursor:pointer}
    .enh-bin .enh-emoji{font-size:45px}.enh-bin-label{font-size:17px;letter-spacing:.02em}
    .enh-bin.paper{border-color:#4b9be1;background:#eaf6ff}.enh-bin.bio{border-color:#b88149;background:#fff3e2}
    .enh-bin.plastic{border-color:#ecb536;background:#fff9df}.enh-bin.metal{border-color:#79b4ad;background:#e7faf7}
    .enh-bin.waste{border-color:#a0a6b0;background:#f1f3f6}
    .enh-foreign{font-size:clamp(42px,7vw,78px)!important;color:#d21d31!important;font-weight:1000;letter-spacing:.04em}
    .enh-math{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:15px}
    .enh-math-box{border:3px solid #b9d6e9;border-radius:20px;background:#fff;padding:12px;width:min(100%,270px);text-align:center}
    .enh-math-count{font-size:44px;font-weight:1000;color:#19557e}
    .enh-math-icons{display:flex;flex-wrap:wrap;gap:3px;justify-content:center;font-size:34px}
    .enh-math-sign{font-size:53px;font-weight:1000;color:#dc6d43}
    .enh-puzzle-board{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;width:min(100%,420px);margin:auto}
    .enh-puzzle-cell{aspect-ratio:1/1;border:4px dashed #abc8d9;border-radius:18px;background:#eaf3fa;overflow:hidden;padding:0;cursor:pointer;position:relative}
    .enh-puzzle-piece{width:100%;height:100%;background-repeat:no-repeat;background-size:200% 200%;border-radius:13px;display:block}
    .enh-art-layout{display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:start}
    .enh-art-bank{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .enh-art-bank .enh-card{min-width:0;height:172px;padding:3px}.enh-art-bank .enh-puzzle-piece{height:100%;min-height:160px}
    .enh-art-note{font-size:15px;color:#526d7e}
    .enh-preview{max-width:130px;max-height:100px;display:block;margin:7px auto;border:3px solid white;border-radius:10px}
    .enh-music-play{background:linear-gradient(130deg,#245fa0,#7c4db2);color:white;border:0;border-radius:22px;font-size:clamp(23px,3vw,30px);font-weight:900;padding:20px 27px;min-height:86px;cursor:pointer;box-shadow:0 8px 16px #293d6629}
    .enh-music-layout{text-align:center}.enh-music-question{font-size:22px;font-weight:850;padding:14px}
    .enh-music-options{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:14px}
    .enh-music-options .choice{font-size:55px;padding:18px;min-height:120px}
    .enh-music-options .choice span{display:block;font-size:18px}
    .enh-credits{text-align:center;font-size:12px;color:#597389;margin-top:12px}
    @media(max-width:710px){.enh-art-layout{grid-template-columns:1fr}.enh-art-bank{grid-template-columns:repeat(4,1fr)}.enh-art-bank .enh-card{height:90px}.enh-art-bank .enh-puzzle-piece{min-height:80px}.enh-slots{grid-template-columns:repeat(2,1fr)}.enh-card{min-width:105px;font-size:17px}.enh-math-box{width:45%}.enh-math-icons{font-size:28px}}
  `;
  document.head.appendChild(style);
  const raw=`
GE|LATO|🍨
OM|BRELLONE|🏖️
ME|LONE|🍈
FAR|FALLA|🦋
LI|MONATA|🍋
SO|LE|☀️
CON|CHIGLIA|🐚
MA|RE|🌊
AN|GURIA|🍉
PA|NE|🍞
CA|SA|🏠
GAT|TO|🐱
CA|NE|🐶
GAL|LO|🐓
TO|PO|🐭
LU|NA|🌙
STEL|LA|⭐
FIO|RE|🌷
AL|BERO|🌳
FO|GLIA|🍃
FRA|GOLA|🍓
BA|NANA|🍌
PE|RA|🍐
ME|LA|🍎
AR|ANCIA|🍊
CI|LIEGIA|🍒
U|VA|🍇
PIZ|ZA|🍕
PA|STA|🍝
RI|SO|🍚
LAT|TE|🥛
AC|QUA|💧
BI|SCOTTO|🍪
TOR|TA|🎂
FOR|MAGGIO|🧀
PE|SCE|🐟
POL|LO|🍗
UO|VO|🥚
PO|MODORO|🍅
CA|ROTA|🥕
AU|TO|🚗
TRE|NO|🚆
BI|CI|🚲
NA|VE|🚢
AE|REO|✈️
BAR|CA|⛵
CA|MION|🚚
MO|TO|🏍️
RAZ|ZO|🚀
STRA|DA|🛣️
PON|TE|🌉
PAR|CO|🏞️
SCA|LA|🪜
SE|DIA|🪑
TA|VOLO|🍽️
LET|TO|🛏️
POR|TA|🚪
FI|NESTRA|🪟
MU|RO|🧱
LI|BRO|📘
PEN|NA|🖊️
MA|TITA|✏️
GOM|MA|🧽
FO|GLIO|📄
ZAI|NO|🎒
SCA|TOLA|📦
PEN|NELLO|🖌️
CO|LORE|🖍️
RI|GHELLO|📏
O|ROLOGIO|🕒
TE|LEFONO|📱
COM|PUTER|💻
TA|STIERA|⌨️
MOU|SE|🖱️
SCHER|MO|🖥️
CHI|TARRA|🎸
PIA|NOFORTE|🎹
TAM|BURO|🥁
FLAU|TO|🪈
PAL|LA|⚽
CAL|CIO|🥅
COR|SA|🏃
SAL|TO|🤸
BA|GNO|🚿
SPAZ|ZOLINO|🪥
SA|PONE|🧼
AS|CIUGAMANO|🧻
VE|STITO|👕
CA|MICIA|👔
GIAC|CA|🧥
SCAR|PA|👟
CAL|ZA|🧦
CAP|PELLO|🧢
GUAN|TO|🧤
SCIAR|PA|🧣
NE|VE|❄️
PIOG|GIA|🌧️
VEN|TO|🌬️
NU|VOLA|☁️
AR|COBALENO|🌈
PRA|TO|🌱
MON|TAGNA|⛰️
FIU|ME|🏞️
LA|GO|🏞️
SPIAG|GIA|🏖️
DE|SERTO|🏜️
I|SOLA|🏝️
LE|ONE|🦁
TI|GRE|🐯
ZE|BRA|🦓
E|LEFANTE|🐘
GI|RAFFA|🦒
SCIM|MIA|🐒
OR|SO|🐻
LU|PO|🐺
VOL|PE|🦊
A|PE|🐝
FOR|MICA|🐜
RA|GNO|🕷️
SER|PENTE|🐍
RA|NA|🐸
TAR|TARUGA|🐢
DEL|FINO|🐬
BA|LENA|🐳
POL|PO|🐙
GRAN|CHIO|🦀
CA|VALLO|🐎
PE|CORA|🐑
MUC|CA|🐄
MA|IALE|🐖
CO|NIGLIO|🐇
PUL|CINO|🐤
A|NATRA|🦆
  `.trim().split('\n').map(row=>row.trim().split('|'));
  const syllables=raw.filter(parts=>parts.length===3).slice(0,100);
  const bank=['BA','CA','PA','MO','LU','SA','TO','LA','PI','RE','CO','FI','MA','NO','GE','SI','RU','TI','FA','NE','DO','VA','ME','LE','SO','TA','AN','CHI','ZA','BO','NA'];
  variants.italiano=syllables.map(([syllable,ending,picture],i)=>{
    const decoys=[];
    for(let n=0;n<bank.length&&decoys.length<2;n++){const x=bank[(i*7+n*9)%bank.length];if(x!==syllable&&!decoys.includes(x))decoys.push(x)}
    const options=[syllable,...decoys];options.push(options.shift());
    if(i%3===1)options.reverse();
    return ['__'+ending,options,syllable,picture];
  });
  const firstFour=variants.spesa.slice();
  for(let i=0;i<products.length;i++)for(let j=i+1;j<products.length;j++){
    const names=[products[i].id.toUpperCase(),products[j].id.toUpperCase()];
    if(!firstFour.some(v=>v[0].slice().sort().join(' / ')==names.slice().sort().join(' / ')))firstFour.push([names,products[i].price+products[j].price]);
  }
  variants.spesa=firstFour;
  const historical=[
    ['DINOSAURI','🦕','MOLTI MILIONI DI ANNI FA'],
    ['ANTICO EGITTO','🏺','LE PIRAMIDI'],
    ['ANTICA ROMA','🏛️','L’IMPERO ROMANO'],
    ['1492: VIAGGIO DI COLOMBO','⛵','LA TRAVERSATA DELL’ATLANTICO'],
    ['OGGI','🏙️','IL MONDO DI OGGI']
  ];
  variants.storia=[
    ['METTI IN ORDINE LE CINQUE TAPPE DELLA STORIA','OK'],
    ['RICOSTRUISCI LA LINEA DEL TEMPO','OK'],
    ['DAL PASSATO A OGGI: ORDINA LE IMMAGINI','OK']
  ];
  variants.tecnologia=[['RACCOLTA DIFFERENZIATA','OK'],['METTI OGNI OGGETTO NEL SUO CESTINO','OK'],['SEPARA I MATERIALI','OK']];
  const paintings=[
    {title:'NOTTE STELLATA',by:'VINCENT VAN GOGH',filename:'Starry_Night.webp',fallback:'🌌'},
    {title:'I GIRASOLI',by:'VINCENT VAN GOGH',filename:'Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg',fallback:'🌻'},
    {title:'LA GIOCONDA',by:'LEONARDO DA VINCI',filename:'Mona_Lisa.jpg',fallback:'🖼️'},
    {title:'L’URLO',by:'EDVARD MUNCH',filename:'Edvard_Munch_-_The_Scream.jpg',fallback:'😱'},
    {title:'LA NASCITA DI VENERE',by:'SANDRO BOTTICELLI',filename:'Birth_of_Venus_Botticelli.jpg',fallback:'🐚'}
  ];
  variants.arte=paintings.map(x=>[x.title,'OK']);
  const instruments=[
    {name:'CHITARRA',picture:'🎸'},
    {name:'PIANOFORTE',picture:'🎹'},
    {name:'TAMBURO',picture:'🥁'},
    {name:'FLAUTO',picture:'🪈'}
  ];
  variants.musica=instruments.map(x=>[x.name,'OK']);
  const lessonTechnology=lessons.find(x=>x.id==='tecnologia');lessonTechnology.tag='RACCOLTA DIFFERENZIATA';lessonTechnology.title='OGNI OGGETTO AL SUO POSTO';
  const lessonHistory=lessons.find(x=>x.id==='storia');lessonHistory.tag='LA LINEA DEL TEMPO';lessonHistory.title='DAL PASSATO A OGGI';
  const lessonArt=lessons.find(x=>x.id==='arte');lessonArt.tag='PUZZLE DI QUADRI FAMOSI';lessonArt.title='RICOMPONI IL DIPINTO';
  const lessonMusic=lessons.find(x=>x.id==='musica');lessonMusic.tag='ASCOLTO E RICONOSCIMENTO';lessonMusic.title='ASCOLTA E SCEGLI';
  let chosenHistory=null,hslots=[],chosenRecycle=null,rslots=[],chosenPuzzle=null,pslots=[],audioContext=null;
  const originalActivity=activity;
  activity=function(l){
    const o=originalActivity(l);
    if(l.id==='storia'){o.type='historysort';o.expected='OK';o.question='METTI IN ORDINE I FATTI, DAL PIÙ ANTICO A OGGI.';o.hint='TOCCA UN’IMMAGINE, POI IL NUMERO DOVE VUOI METTERLA.'}
    if(l.id==='tecnologia'){o.type='recycle';o.expected='OK';o.question='METTI OGNI OGGETTO NEL CESTINO CORRETTO.';o.hint='TOCCA UN OGGETTO, POI IL CESTINO GIUSTO.'}
    if(l.id==='arte'){o.type='artpuzzle';o.expected='OK';o.painting=paintings[activityIndex];o.question='RICOMPONI IL QUADRO: '+o.painting.title;o.hint='TOCCA UN PEZZO, POI LA CASELLA NELLA POSIZIONE GIUSTA.'}
    if(l.id==='musica'){o.type='musicgame';o.expected='OK';o.instrument=instruments[activityIndex];o.question='ASCOLTA IL SUONO E SCEGLI LO STRUMENTO.';o.hint='PUOI ASCOLTARE IL SUONO PIÙ VOLTE.'}
    if(l.id==='matematica'&&o.mathNumbers){
      const examples=[['🍎','🍐','MELE','PERE','FRUTTI'],['🍪','🧁','BISCOTTI','DOLCETTI','DOLCI'],['🚗','🚌','AUTOMOBILI','AUTOBUS','VEICOLI'],['🐱','🐶','GATTI','CANI','ANIMALI'],['⭐','🌼','STELLE','FIORI','OGGETTI'],['🍓','🍇','FRAGOLE','GRAPPOLI D’UVA','FRUTTI'],['⚽','🏀','PALLONI','PALLONI DA BASKET','PALLONI'],['✏️','🖍️','MATITE','PASTELLI','OGGETTI'],['🧸','🚂','ORSETTI','TRENINI','GIOCATTOLI'],['🍎','🍊','MELE','ARANCE','FRUTTI']];
      const e=examples[activityIndex%examples.length];o.mathIcons=[e[0],e[1]];
      if(o.mathSign==='+')o.question='CI SONO '+o.mathNumbers[0]+' '+e[2]+' E '+o.mathNumbers[1]+' '+e[3]+'. QUANTI '+e[4]+' IN TUTTO?';
      else o.question='CI SONO '+o.mathNumbers[0]+' '+e[2]+'. NE TOGLIAMO '+o.mathNumbers[1]+'. QUANTI NE RESTANO?';
    }
    return o;
  };
  function markChoice(button){selected=button.dataset.answer;document.querySelectorAll('[data-answer]').forEach(x=>{x.classList.toggle('selected',x===button);x.setAttribute('aria-pressed',x===button?'true':'false')});resetFeedback()}
  function stageCard(emoji,name){return '<span class="enh-emoji">'+emoji+'</span><strong>'+escapeHTML(name)+'</strong>'}
  function renderHistory(body){
    chosenHistory=null;hslots=Array(5).fill(null);
    const order=[3,0,4,2,1].map((v,i)=>[2,4,1,0,3][(i+activityIndex)%5]); // stable shuffled order
    body.innerHTML='<div class="enh-visual"><p class="enh-hint">👆 SCEGLI UN’IMMAGINE E METTILA NELLA CASELLA 1, 2, 3, 4 O 5.</p><div class="enh-bank" id="historyBank">'+order.map(i=>'<button class="enh-card" data-hist="'+i+'" draggable="true" ondragstart="luigiHistDrag(event,'+i+')" onclick="luigiHistSelect('+i+')">'+stageCard(historical[i][1],historical[i][0])+'</button>').join('')+'</div><div class="enh-slots" id="historySlots">'+Array.from({length:5},(_,i)=>'<button class="enh-slot" onclick="luigiHistPlace('+i+')" ondragover="event.preventDefault()" ondrop="luigiHistDrop(event,'+i+')"><span class="enh-number">'+(i+1)+'</span><span id="histSlot'+i+'">?</span></button>').join('')+'</div><p class="enh-mini">PUOI TOCCARE LE FIGURE O TRASCINARLE.</p></div>';
    refreshHistory();
  }
  function refreshHistory(){
    for(let i=0;i<5;i++){const x=document.getElementById('histSlot'+i);if(x)x.innerHTML=hslots[i]===null?'?':stageCard(historical[hslots[i]][1],historical[hslots[i]][0])}
    document.querySelectorAll('[data-hist]').forEach(x=>{const i=+x.dataset.hist;const used=hslots.includes(i);x.style.opacity=used?'.35':'1';x.setAttribute('aria-pressed',chosenHistory===i?'true':'false')});resetFeedback()
  }
  window.luigiHistSelect=function(i){chosenHistory=i;refreshHistory()};
  window.luigiHistPlace=function(slot){if(chosenHistory===null){chosenHistory=hslots[slot];hslots[slot]=null;}else{hslots=hslots.map(x=>x===chosenHistory?null:x);hslots[slot]=chosenHistory;chosenHistory=null}refreshHistory()};
  window.luigiHistDrag=function(e,i){e.dataTransfer.setData('text/plain',String(i));chosenHistory=i};
  window.luigiHistDrop=function(e,slot){e.preventDefault();let i=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(i)&&i>=0&&i<5){chosenHistory=i;window.luigiHistPlace(slot)}};
  const trash=[
    {item:'BUCCIA DI BANANA',pic:'🍌',bin:'UMIDO',class:'bio',icon:'🌱'},
    {item:'GIORNALE',pic:'📰',bin:'CARTA',class:'paper',icon:'📄'},
    {item:'BOTTIGLIA DI PLASTICA',pic:'🧴',bin:'PLASTICA',class:'plastic',icon:'♻️'},
    {item:'LATTINA',pic:'🥫',bin:'METALLI',class:'metal',icon:'🥫'},
    {item:'SPUGNA USATA',pic:'🧽',bin:'INDIFFERENZIATO',class:'waste',icon:'🗑️'}
  ];
  function renderRecycle(body){
    chosenRecycle=null;rslots=Array(5).fill(null);
    const order=[2,0,4,1,3].map((_,i)=>[2,0,4,1,3][(i+activityIndex)%5]);
    body.innerHTML='<div class="enh-visual"><p class="enh-hint">♻️ CINQUE OGGETTI, CINQUE CESTINI. UNO PER OGNI CESTINO.</p><div class="enh-bank">'+order.map(i=>'<button class="enh-card" data-trash="'+i+'" draggable="true" ondragstart="luigiTrashDrag(event,'+i+')" onclick="luigiTrashSelect('+i+')">'+stageCard(trash[i].pic,trash[i].item)+'</button>').join('')+'</div><div class="enh-slots">'+trash.map((b,i)=>'<button class="enh-bin '+b.class+'" onclick="luigiTrashPlace('+i+')" ondragover="event.preventDefault()" ondrop="luigiTrashDrop(event,'+i+')"><span class="enh-emoji">'+b.icon+'</span><span class="enh-bin-label">'+b.bin+'</span><span id="trashSlot'+i+'">?</span></button>').join('')+'</div></div>';
    refreshRecycle()
  }
  function refreshRecycle(){
    for(let i=0;i<5;i++){const x=document.getElementById('trashSlot'+i);if(x)x.innerHTML=rslots[i]===null?'?':stageCard(trash[rslots[i]].pic,trash[rslots[i]].item)}
    document.querySelectorAll('[data-trash]').forEach(x=>{const i=+x.dataset.trash;x.style.opacity=rslots.includes(i)?'.35':'1';x.setAttribute('aria-pressed',chosenRecycle===i?'true':'false')});resetFeedback()
  }
  window.luigiTrashSelect=function(i){chosenRecycle=i;refreshRecycle()};
  window.luigiTrashPlace=function(slot){if(chosenRecycle===null){chosenRecycle=rslots[slot];rslots[slot]=null}else{rslots=rslots.map(x=>x===chosenRecycle?null:x);rslots[slot]=chosenRecycle;chosenRecycle=null}refreshRecycle()};
  window.luigiTrashDrag=function(e,i){e.dataTransfer.setData('text/plain',String(i));chosenRecycle=i};
  window.luigiTrashDrop=function(e,slot){e.preventDefault();let i=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(i)&&i>=0&&i<5){chosenRecycle=i;window.luigiTrashPlace(slot)}};
  function paintURL(p){return 'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(p.filename)+'?width=800'}
  function paintPiece(num,p){const x=num%2===0?'0%':'100%',y=num<2?'0%':'100%';return '<span class="enh-puzzle-piece" style="background-image:url(&quot;'+paintURL(p)+'&quot;);background-position:'+x+' '+y+'"></span>'}
  function renderArt(body){
    chosenPuzzle=null;pslots=[null,null,null,null];
    const p=current.painting;
    const order=[2,0,3,1].map((_,i)=>[2,0,3,1][(i+activityIndex)%4]);
    body.innerHTML='<div class="enh-visual"><p class="enh-hint">🧩 METTI I QUATTRO PEZZI AL POSTO GIUSTO.</p><div class="enh-art-layout"><div><div class="enh-art-bank">'+order.map(i=>'<button class="enh-card" data-puzzle="'+i+'" onclick="luigiArtSelect('+i+')">'+paintPiece(i,p)+'</button>').join('')+'</div><p class="enh-mini">TOCCA UN PEZZO, POI UNA CASELLA A DESTRA.</p></div><div><div class="enh-puzzle-board">'+[0,1,2,3].map(i=>'<button class="enh-puzzle-cell" id="puzzleSlot'+i+'" onclick="luigiArtPlace('+i+')" aria-label="CASELLA '+(i+1)+'">+</button>').join('')+'</div><p class="enh-mini">'+p.title+' · '+p.by+'</p></div></div><div class="enh-credits">IMMAGINI DELLE OPERE: WIKIMEDIA COMMONS. PER IL PRIMO CARICAMENTO DEI DIPINTI OCCORRE INTERNET.</div></div>';
    refreshArt()
  }
  function refreshArt(){
    const p=current.painting;
    for(let i=0;i<4;i++){const x=document.getElementById('puzzleSlot'+i);if(x)x.innerHTML=pslots[i]===null?'<span style="font-size:45px;color:#9bbdd2">'+(i+1)+'</span>':paintPiece(pslots[i],p)}
    document.querySelectorAll('[data-puzzle]').forEach(x=>{const i=+x.dataset.puzzle;x.style.opacity=pslots.includes(i)?'.3':'1';x.setAttribute('aria-pressed',chosenPuzzle===i?'true':'false')});resetFeedback()
  }
  window.luigiArtSelect=function(i){chosenPuzzle=i;refreshArt()};
  window.luigiArtPlace=function(slot){if(chosenPuzzle===null){chosenPuzzle=pslots[slot];pslots[slot]=null}else{pslots=pslots.map(x=>x===chosenPuzzle?null:x);pslots[slot]=chosenPuzzle;chosenPuzzle=null}refreshArt()};
  function renderMusic(body){
    body.innerHTML='<div class="enh-visual enh-music-layout"><p class="enh-music-question">👂 ASCOLTA IL SUONO, POI SCEGLI LO STRUMENTO.</p><button class="enh-music-play" onclick="luigiPlayInstrument()">🔊 ASCOLTA LO STRUMENTO</button><p class="enh-mini">PUOI ASCOLTARE PIÙ VOLTE.</p><div class="enh-music-options">'+instruments.map((x,i)=>'<button class="choice" data-answer="'+x.name+'" onclick="choose(this)">'+x.picture+'<span>'+x.name+'</span></button>').join('')+'</div><p class="enh-credits">SUONI SEMPLIFICATI GENERATI DAL COMPUTER; NON SONO REGISTRAZIONI DI STRUMENTI REALI.</p></div>'
  }
  window.luigiPlayInstrument=function(){
    const AudioCtor=window.AudioContext||window.webkitAudioContext;if(!AudioCtor)return;
    if(!audioContext)audioContext=new AudioCtor();audioContext.resume();
    const t=audioContext.currentTime+.03;const idx=activityIndex%4;
    function note(freq,start,len,wave,volume){const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=wave;osc.frequency.value=freq;osc.connect(gain);gain.connect(audioContext.destination);gain.gain.setValueAtTime(.001,start);gain.gain.exponentialRampToValueAtTime(Math.max(.001,volume),start+.015);gain.gain.exponentialRampToValueAtTime(.001,start+len);osc.start(start);osc.stop(start+len+.02)}
    if(idx===0){[196,247,294,392].forEach((f,i)=>note(f,t+i*.12,.75,'triangle',.14))}
    if(idx===1){[262,330,392,523].forEach((f,i)=>{note(f,t+i*.30,.9,'sine',.20);note(f*2,t+i*.30,.35,'triangle',.04)})}
    if(idx===2){
      const b=audioContext.createBuffer(1,Math.floor(audioContext.sampleRate*.17),audioContext.sampleRate),d=b.getChannelData(0);
      for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,4);
      [0,.4,.8].forEach(dt=>{const n=audioContext.createBufferSource(),g=audioContext.createGain();n.buffer=b;n.connect(g);g.connect(audioContext.destination);g.gain.value=.3;n.start(t+dt)})
    }
    if(idx===3){[392,440,494,523,494,440,392].forEach((f,i)=>note(f,t+i*.29,.28,'sine',.20))}
  };
  const oldRender=renderLesson;
  renderLesson=function(l){
    const body=document.getElementById('lessonBody');
    if(l.type==='historysort'){renderHistory(body);return}
    if(l.type==='recycle'){renderRecycle(body);return}
    if(l.type==='artpuzzle'){renderArt(body);return}
    if(l.type==='musicgame'){renderMusic(body);return}
    if(l.id==='matematica'&&l.mathNumbers){
      const a=l.mathNumbers[0],b=l.mathNumbers[1],icons=l.mathIcons||['🍎','🍐'];
      body.innerHTML='<div class="enh-visual"><div class="enh-math"><div class="enh-math-box"><div class="enh-math-count">'+a+'</div><div class="enh-math-icons">'+Array(a).fill(icons[0]).map(x=>'<span>'+x+'</span>').join('')+'</div></div><div class="enh-math-sign">'+l.mathSign+'</div><div class="enh-math-box"><div class="enh-math-count">'+b+'</div><div class="enh-math-icons">'+Array(b).fill(l.mathSign==='+'?icons[1]:icons[0]).map(x=>'<span>'+x+'</span>').join('')+'</div></div><div class="enh-math-sign">= ?</div></div></div>'+choiceButtons(l);return
    }
    oldRender(l);
  };
  const oldCheck=checkAnswer;
  checkAnswer=function(){
    if(current&&['historysort','recycle','artpuzzle','musicgame'].includes(current.type)){
      if(current.type==='historysort')selected=hslots.length===5&&hslots.every((x,i)=>x===i)?'OK':'RIPROVA';
      if(current.type==='recycle')selected=rslots.length===5&&rslots.every((x,i)=>x===i)?'OK':'RIPROVA';
      if(current.type==='artpuzzle')selected=pslots.length===4&&pslots.every((x,i)=>x===i)?'OK':'RIPROVA';
      if(current.type==='musicgame')selected=selected===current.instrument.name?'OK':'RIPROVA';
    }
    oldCheck();
  };
  const oldPlay=playVoice,oldStop=stopVoice;
  stopVoice=function(){if('speechSynthesis'in window)window.speechSynthesis.cancel();oldStop()};
  playVoice=function(k){
    if(!voiceEnabled)return;
    const unsupported=current&&(['historysort','recycle','artpuzzle','musicgame'].includes(current.type)||current.id==='italiano'||current.id==='matematica'||current.id==='tecnologia');
    if(VOICE_AUDIO[k]&&!unsupported){oldPlay(k);return}
    if((k==='good'||k==='retry'||k==='home')&&VOICE_AUDIO[k]){oldPlay(k);return}
    if(!('speechSynthesis'in window)){if(VOICE_AUDIO[k])oldPlay(k);return}
    let phrase='';
    if(k==='help')phrase=current?.hint||'TOCCA LA RISPOSTA GIUSTA';
    else if(current&&k.startsWith(current.id+':'))phrase=current.id==='italiano'?'GUARDA L’IMMAGINE. COMPLETA LA PAROLA: '+current.question.replace('__','PUNTO PUNTO')+'. SCEGLI LA SILLABA.':current.question;
    else if(k.startsWith('scienze')||k.startsWith('geografia')){if(VOICE_AUDIO[k]){oldPlay(k);return}phrase=current?.question||''}
    else phrase=current?.question||'';
    if(!phrase)return;
    stopVoice();
    try{const u=new SpeechSynthesisUtterance(phrase);u.lang='it-IT';u.rate=.82;u.pitch=1.03;window.speechSynthesis.speak(u)}catch{}
  };
  const oldOpen=openLesson;
  openLesson=function(id){oldOpen(id);if(current?.foreignWord){const n=document.querySelector('.foreign-word');if(n)n.classList.add('enh-foreign')}};
  const originalNext=nextLesson;
  nextLesson=function(){if(audioContext&&audioContext.state==='running')audioContext.suspend();originalNext()};
  // Keep identity's two fields on one row, while preserving the other personal prompts.
  const identityExtra=document.createElement('style');identityExtra.textContent='@media(min-width:430px){.identity-fields>label:first-child,.identity-fields>label:nth-child(2){grid-column:auto}}';document.head.appendChild(identityExtra);

  const oldHome=home;
  home=function(){
    oldHome();
    const completed=lessons.filter(l=>(variants[l.id]||[l]).every((_,i)=>saved.results[l.id+'_'+i]?.correct)).length;
    const badge=document.querySelector('.section-h .tag');
    if(badge)badge.textContent=completed+' / '+lessons.length+' MATERIE COMPLETATE';
  };
  showTeacher=function(){
    stopVoice();current=null;setCalculator(false);
    const rows=lessons.map(l=>{
      const count=(variants[l.id]||[l]).length;
      const records=Array.from({length:count},(_,i)=>saved.results[l.id+'_'+i]);
      const done=records.filter(Boolean).length,correct=records.filter(x=>x?.correct).length;
      const attempts=records.reduce((n,r)=>n+(r?.attempts||0),0);
      return '<tr><td>'+l.icon+' '+escapeHTML(l.subject)+'</td><td>'+done+' / '+count+'</td><td>'+correct+'</td><td>'+attempts+'</td></tr>';
    }).join('');
    const total=lessons.reduce((n,l)=>n+(variants[l.id]||[l]).length,0);
    const done=Object.values(saved.results).filter(r=>r&&r.subject).length;
    const good=Object.values(saved.results).filter(r=>r?.correct).length;
    app.innerHTML='<div class="stage-head"><button class="back" onclick="home()">← MATERIE</button><h1>📋 REGISTRO DEL DOCENTE</h1></div><section class="teacher"><h2>RISULTATI DEL PERCORSO</h2><p>I RISULTATI SONO OSSERVAZIONI DIDATTICHE, NON VOTI AUTOMATICI. LA VALUTAZIONE SEGUE IL PEI E IL GIUDIZIO DEI DOCENTI.</p><div class="summary"><div>ATTIVITÀ SVOLTE<strong>'+done+'</strong></div><div>ATTIVITÀ CORRETTE<strong>'+good+'</strong></div><div>ATTIVITÀ DISPONIBILI<strong>'+total+'</strong></div></div><div style="overflow-x:auto"><table class="report-table"><thead><tr><th>MATERIA</th><th>SVOLTE</th><th>CORRETTE</th><th>TENTATIVI</th></tr></thead><tbody>'+rows+'</tbody></table></div><p class="note">I DATI RESTANO SOLO SU QUESTO DISPOSITIVO. PER CONSERVARLI ESPORTA IL REPORT CSV.</p><div class="actions"><button class="btn" onclick="exportCSV()">⬇ ESPORTA TUTTE LE ATTIVITÀ</button><button class="btn secondary" onclick="window.print()">🖨 STAMPA</button><button class="btn secondary" onclick="resetWithConfirm()">CANCELLA RISULTATI LOCALI</button></div></section>';
  };
  exportCSV=function(){
    const cols=['MATERIA','ESERCIZIO','DATA','ESITO','RISPOSTA','TENTATIVI','MODALITÀ','AUTONOMIA'];
    const rows=[cols.join(';')];
    for(const l of lessons)for(let i=0;i<(variants[l.id]||[l]).length;i++){
      const r=saved.results[l.id+'_'+i];
      const values=[l.subject,i+1,r?.date||'',r?(r.correct?'CORRETTA':'DA CONSOLIDARE'):'NON SVOLTA',r?.answer||'',r?.attempts||'',r?.mode||'',r?.autonomy||''];
      rows.push(values.map(v=>{
        let cell=String(v??'');
        // Evita che Excel interpreti eventuali risposte come formule.
        if(/^[\s]*[=+\-@]/.test(cell))cell="'"+cell;
        return '"'+cell.replace(/"/g,'""')+'"';
      }).join(';'));
    }
    const csv=rows.join('\r\n');
    const blob=new Blob(['\uFEFF',csv],{type:'text/csv;charset=utf-8'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='LUIGI_REGISTRO_ATTIVITA.csv';a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  // LUIGI_SCHOOL_HEADING_V1
  // Testata informativa del percorso didattico; non è un sito ufficiale dell'istituto.
  const schoolHeaderStyle=document.createElement('style');
  schoolHeaderStyle.textContent=`
    #luigi-school-header{box-sizing:border-box;width:min(1180px,calc(100% - 28px));margin:16px auto 12px;padding:16px 22px;
      border-radius:22px;background:linear-gradient(120deg,#102f56,#2364a3);color:#fff;
      box-shadow:0 6px 22px rgba(21,59,96,.19);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;text-align:left}
    #luigi-school-header *{box-sizing:border-box}
    #luigi-school-header .school-kicker{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;opacity:.86}
    #luigi-school-header .school-title{font-size:clamp(19px,3vw,29px);line-height:1.22;font-weight:850;margin:6px 0}
    #luigi-school-header .school-location{font-size:14px;font-weight:650;opacity:.89}
    #luigi-school-header .school-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    #luigi-school-header .school-tags span{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);
      border-radius:999px;padding:6px 11px;font-size:14px;font-weight:800}
    #luigi-school-header .school-smallprint{margin:10px 0 0;font-size:11px;line-height:1.4;opacity:.78}
    @media(max-width:520px){#luigi-school-header{padding:14px 16px;border-radius:16px}
      #luigi-school-header .school-tags span{font-size:12px;padding:5px 9px}}
    @media print{#luigi-school-header{color:#000;background:#fff;box-shadow:none;border:1px solid #bbb;page-break-inside:avoid}}
  `;
  document.head.appendChild(schoolHeaderStyle);
  if(!document.getElementById('luigi-school-header')){
    const schoolHeader=document.createElement('header');
    schoolHeader.id='luigi-school-header';
    schoolHeader.setAttribute('aria-label','Intestazione del percorso didattico');
    schoolHeader.innerHTML='<div class="school-kicker">Percorso didattico interattivo · A.S. 2026/2027</div>'
      +'<div class="school-title">Istituto Comprensivo “Rocco – Cav. Cinquegrana”</div>'
      +'<div class="school-location">Sant’Arpino (CE) · Scuola secondaria di primo grado</div>'
      +'<div class="school-tags"><span>Classe 3ª E</span><span>Percorso di Luigi</span></div>'
      +'<p class="school-smallprint">Materiale didattico personalizzato. Non è il sito ufficiale dell’istituto.</p>';
    document.body.insertBefore(schoolHeader,document.body.firstChild);
  }

  home();
})();
