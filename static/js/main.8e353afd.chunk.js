(this.webpackJsonpguitarapp=this.webpackJsonpguitarapp||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(50),o=n.n(a),c=n(222),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=n(221),d=n(53),j=n(17),b=n(126),h=Object(b.a)({}),m=n(21),f=n(11),p=n(6),g=n(223),O=n(232),x=n(224),v=n(234),w=n(233),y=n(235),C=n(114),k=n.n(C),V=n(115),S=n.n(V),I=n(7),M=n(28),N=n(225),z=n(1),A=function(e){return Object(z.jsx)(g.a,{sx:{margin:"8px 0",flex:"0 1 auto"},children:Object(z.jsxs)(x.a,Object(m.a)(Object(m.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(z.jsx)(N.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))})},E=n(226),R=Object(I.a)(E.a,{shouldForwardProp:function(e){return"open"!==e&&"drawerWidth"!==e}})((function(e){var t=e.theme,n=e.open,i=e.drawerWidth;return Object(m.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:i,width:"calc(100% - ".concat(i,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),W=n(213),D=Object(I.a)(W.a,{shouldForwardProp:function(e){return"open"!==e&&"drawerWidth"!==e}})((function(e){var t,n=e.theme,i=e.open,r=e.drawerWidth;return{zIndex:n.zIndex.drawer,"& .MuiDrawer-paper":Object(m.a)((t={position:"relative",whiteSpace:"nowrap",width:r,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})},Object(p.a)(t,n.breakpoints.down("sm"),{position:"absolute",height:"100%",zIndex:n.zIndex.appBar}),Object(p.a)(t,"boxSizing","border-box"),t),!i&&Object(p.a)({overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7)},n.breakpoints.up("sm"),{width:n.spacing(9)}))}})),F=Object(I.a)("div")((function(e){return{zIndex:e.theme.zIndex.drawer-1,width:"100vw",height:"100vh",position:"fixed",backgroundColor:"black",animation:"fadeIn 500ms ease",opacity:.2,"@keyframes fadeIn":{from:{opacity:0},to:{opacity:.2}}}})),T=n(228),G=n(229),P=n(230),U=n(231),Q=n(111),B=n.n(Q),J=n(112),L=n.n(J),X=n(110),$=n.n(X),K=[{path:"/games",text:"Games",Icon:Object(z.jsx)($.a,{})},{path:"/lessons",text:"Lessons",Icon:Object(z.jsx)(B.a,{})},{path:"/constructor",text:"Constructor",Icon:Object(z.jsx)(L.a,{})}],H=function(){var e=Object(j.g)(),t=Object(j.h)(),n=Object(i.useCallback)((function(t){return function(){e.push(t)}}),[e]),r=function(e){return t.pathname.includes(e)};return Object(z.jsx)(T.a,{children:K.map((function(e){var t=e.Icon,i=e.text,a=e.path;return Object(z.jsxs)(G.a,{onClick:n(a),selected:r(a),children:[Object(z.jsx)(P.a,{children:t}),Object(z.jsx)(U.a,{primary:i})]},a)}))})},Y=Object(b.a)(),q=Object(I.a)("main")((function(e){var t=e.theme;return Object(p.a)({backgroundColor:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto",display:"flex",flexDirection:"column"},t.breakpoints.down("sm"),{marginLeft:t.spacing(7),width:"calc(100% - ".concat(t.spacing(7),"px)")})})),Z=Object(I.a)(F)((function(e){var t=e.theme;return Object(p.a)({},t.breakpoints.up("sm"),{display:"none"})})),_=function(e){var t,n=e.children,r=Object(j.h)(),a=Object(M.a)(),o=Object(i.useState)(window.innerWidth>a.breakpoints.values.md),s=Object(f.a)(o,2),u=s[0],d=s[1],b=function(){d(!u)},h=null===(t=K.find((function(e){return r.pathname.includes(e.path)})))||void 0===t?void 0:t.text;return Object(z.jsx)(l.a,{theme:Y,children:Object(z.jsxs)(g.a,{sx:{display:"flex"},children:[Object(z.jsx)(c.a,{}),Object(z.jsx)(R,{position:"absolute",open:u,drawerWidth:240,children:Object(z.jsxs)(O.a,{variant:"dense",sx:{pr:"24px"},children:[Object(z.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:b,sx:Object(m.a)({marginRight:"36px"},u&&{display:"none"}),children:Object(z.jsx)(k.a,{})}),Object(z.jsx)(x.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:h})]})}),Object(z.jsxs)(D,{variant:"permanent",open:u,drawerWidth:240,children:[Object(z.jsx)(O.a,{variant:"dense",sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:Object(z.jsx)(w.a,{onClick:b,children:Object(z.jsx)(S.a,{})})}),Object(z.jsx)(v.a,{}),Object(z.jsx)(H,{})]}),u&&Object(z.jsx)(Z,{onClick:b}),Object(z.jsxs)(q,{children:[Object(z.jsx)(O.a,{variant:"dense",sx:{flex:"0 1 auto"}}),Object(z.jsx)(y.a,{maxWidth:"lg",sx:{mt:2,mb:4,flexGrow:1},children:n}),Object(z.jsx)(A,{})]})]})})},ee=n(14),te=n(87),ne=n(212),ie=n(128),re=n(209),ae=n(124),oe=n(210),ce=n(211),se=n(218),ue=n(20),le=n(26),de=n(36),je=n(42),be=new Map([[0,"C"],[1,"D"],[2,"E"],[3,"F"],[4,"G"],[5,"A"],[6,"B"]]),he=new Map([[0,"C"],[1,"D"],[2,"E"],[3,"G"],[4,"A"]]),me=new Map([[0,"major"],[1,"minor"]]),fe=new Map([[0,"triad"],[1,"sus2"],[2,"sus4"],[3,"maj7"],[4,"sept"]]);var pe=Object(je.a)("map"),ge=function(){function e(t){Object(ue.a)(this,e),Object.defineProperty(this,pe,{writable:!0,value:void 0}),Object(de.a)(this,pe)[pe]=t}return Object(le.a)(e,[{key:"randomize",value:function(){return Object(de.a)(this,pe)[pe].get((e=0,t=Object(de.a)(this,pe)[pe].size,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)));var e,t}}]),e}(),Oe=Object(je.a)("map"),xe=function(){function e(){Object(ue.a)(this,e),Object.defineProperty(this,Oe,{writable:!0,value:new ge(fe)})}return Object(le.a)(e,[{key:"randomize",value:function(){return Object(de.a)(this,Oe)[Oe].randomize()}}]),e}(),ve=Object(je.a)("map"),we=function(){function e(){Object(ue.a)(this,e),Object.defineProperty(this,ve,{writable:!0,value:new ge(be)})}return Object(le.a)(e,[{key:"randomize",value:function(){return Object(de.a)(this,ve)[ve].randomize()}}]),e}(),ye=Object(je.a)("map"),Ce=function(){function e(){Object(ue.a)(this,e),Object.defineProperty(this,ye,{writable:!0,value:new ge(he)})}return Object(le.a)(e,[{key:"randomize",value:function(){return Object(de.a)(this,ye)[ye].randomize()}}]),e}(),ke=Object(je.a)("map"),Ve=function(){function e(){Object(ue.a)(this,e),Object.defineProperty(this,ke,{writable:!0,value:new ge(me)})}return Object(le.a)(e,[{key:"randomize",value:function(){return Object(de.a)(this,ke)[ke].randomize()}}]),e}();var Se=function(){function e(){Object(ue.a)(this,e)}return Object(le.a)(e,null,[{key:"randomizeChord",value:function(e){var t=e.noteValue,n=e.scaleValue,i=e.modificationValue,r=e.formValue;return function(e,t,n,i){var r=e;switch(i){case"triad":case"sept":"minor"===n&&(r+="m")}switch(i){case"sus2":case"sus4":case"maj7":r+=i;break;case"sept":r+="7"}"none"===t||(r+="(".concat(t,")"));return r}(t||this.noteRandomizer.randomize()||"C",r||this.formRandomizer.randomize()||"none",n||this.scaleRandomizer.randomize()||"major",i||this.chordModificationRandomizer.randomize()||"triad")}}]),e}();Se.noteRandomizer=new we,Se.formRandomizer=new Ce,Se.scaleRandomizer=new Ve,Se.chordModificationRandomizer=new xe;var Ie=n(227),Me=n(207),Ne=Object(I.a)(Ie.a)((function(e){var t=e.theme;return Object(p.a)({display:"flex",alignItems:"center",justifyContent:"center",height:170,minWidth:170,boxSizing:"border-box"},t.breakpoints.down("md"),{height:150,minWidth:150})})),ze=function(e){var t=e.chord,n=e.className,i=Object(M.a)(),r=Object(Me.a)(i.breakpoints.down("md"));return Object(z.jsx)(Ne,{elevation:3,className:n,children:Object(z.jsx)(x.a,{variant:r?"h3":"h2",children:t})})},Ae=Object(I.a)("div")((function(e){var t=e.theme;return{display:"flex",minWidth:"1000px",justifyContent:"center",alignItems:"center",overflowX:"hidden",padding:t.spacing(1),position:"relative",borderRadius:t.spacing(2)}})),Ee=Object(I.a)(ze)((function(){return{position:"absolute",transitionProperty:"left",transitionDuration:"500ms",transitionTimingFunction:"ease"}})),Re=Object(I.a)(ze)((function(){return{opacity:0}})),We=Object(I.a)("div")((function(){return{width:"100%",height:"100%",position:"absolute",zIndex:1,right:0,background:"linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 80%),\n     linear-gradient(to left, rgba(255,255,0,0) 60%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 90%)"}})),De=function(e){var t=e.chords;return Object(z.jsxs)(Ae,{children:[Object(z.jsx)(We,{}),t.map((function(e,t){return Object(z.jsx)(Ee,{chord:e.chord,sx:{left:"".concat(t?15+25*t:0,"%")}},e.id)})),Object(z.jsx)(Re,{chord:"C"})]})},Fe=new Map([["scaleKeyNoteEAstring",{title:"Note on E/A string",description:"Find random note on E/A string",group:"Scale, key",configurations:[{modificationValue:"triad",formValue:"none",scaleValue:"major"}],level:"easy"}],["scaleKeyNoteDstring",{title:"Note on D string",description:"Find random note on D string",group:"Scale, key",configurations:[{modificationValue:"triad",formValue:"none",scaleValue:"major"}],level:"intermediate"}],["scaleKeyMajorScaleEAstring",{title:"Major scale E/A string",description:"Practice builting major scale for E and A string",group:"Scale, key",configurations:[{modificationValue:"triad",formValue:"none",scaleValue:"major"}],level:"easy"}],["cagedCChordMixed",{title:"C chord in mixed E/A/C/G/D forms",description:"Practice C Major chord for mixed E/A/C/G/D forms",group:"CAGED",configurations:[{modificationValue:"triad",scaleValue:"major",noteValue:"C"}],level:"intermediate"}],["cagedCMinorChordMixed",{title:"C minor in mixed E/A/C/G/D forms",description:"Practice C MINOR chord for mixed E/A/C/G/D forms",group:"CAGED",configurations:[{modificationValue:"triad",scaleValue:"minor",noteValue:"C"}],level:"intermediate"}],["fingeringBEMajorMixedForms",{title:"B and E chords in mixed forms",description:"Practice two MAJOR(B and E) chords in random forms",group:"Fingering",configurations:[{modificationValue:"triad",scaleValue:"major",noteValue:"B"},{modificationValue:"triad",scaleValue:"major",noteValue:"E"}],level:"intermediate"}],["fingeringCGMinorMixedForms",{title:"Cm and Gm chords in mixed forms",description:"Practice two MINOR(Cm and Gm) chords in random forms",group:"Fingering",configurations:[{modificationValue:"triad",scaleValue:"minor",noteValue:"C"},{modificationValue:"triad",scaleValue:"minor",noteValue:"G"}],level:"intermediate"}],["fingeringCGAmFMixedForms",{title:"C-G-Am-F in mixed forms",description:"Practice C-G-Am-F in random forms",group:"Fingering",configurations:[{modificationValue:"triad",scaleValue:"major",noteValue:"C"},{modificationValue:"triad",scaleValue:"major",noteValue:"G"},{modificationValue:"triad",scaleValue:"minor",noteValue:"A"},{modificationValue:"triad",scaleValue:"major",noteValue:"F"}],level:"upperIntermediate"}],["fingeringMajorChordsMixedForms",{title:"Random MAJOR chords in random forms",description:"Practice MAJOR chords in random forms",group:"Fingering",configurations:[{modificationValue:"triad",scaleValue:"major"}],level:"upperIntermediate"}],["fingeringMinorsChordsMixedForms",{title:"Random MINOR chords in random forms",description:"Practice MINOR chords in random forms",group:"Fingering",configurations:[{modificationValue:"triad",scaleValue:"minor"}],level:"upperIntermediate"}],["fingeringRandomChordsRandomForms",{title:"Major and minor chords in random forms",description:"Pracitce MAJOR and MINOR chords in MIXED forms",group:"Fingering",configurations:[{modificationValue:"triad"}],level:"hard"}]]),Te=new Map([["eString",{title:"Notes on E string",description:"Use E string(6) to find the note",configurations:[{scaleValue:"major",modificationValue:"triad",formValue:"none"}],level:"easy"}]]),Ge=new Map([["eString",{title:"Notes on E string",description:"Use E string(6) to find the note",configurations:[{scaleValue:"major",modificationValue:"triad",formValue:"none"}],level:"easy"}],["aString",{title:"Notes on A string",description:"Use A string(5) to find the note",configurations:[{scaleValue:"major",modificationValue:"triad",formValue:"none"}],level:"easy"}],["dString",{title:"Notes on D string",description:"Use D string(4) to find the note",configurations:[{scaleValue:"major",modificationValue:"triad",formValue:"none"}],level:"intermediate"}]]),Pe=new Map([].concat(Object(ee.a)(Fe.entries()),Object(ee.a)(Te.entries()),Object(ee.a)(Ge.entries()))),Ue=n(121),Qe=n.n(Ue),Be=n(120),Je=n.n(Be),Le=n(122),Xe=n.n(Le),$e=n(123),Ke=n.n($e),He=n(208),Ye=n(216),qe=n(118),Ze=n.n(qe),_e=n(119),et=n.n(_e),tt=n(116),nt=n.n(tt),it=n(117),rt=n.n(it),at=function(e){var t=e.currentQuarter,n=Array.from({length:4},(function(e,n){var i=0===n?"secondary":"primary",r=n===t?nt.a:rt.a;return Object(z.jsx)(r,{fontSize:"large",color:i},n)}));return Object(z.jsx)(g.a,{display:"flex",children:n})},ot=function(e){var t=e.enabled,n=e.tempo,r=e.currentNote,a=e.soundOn,o=e.handleTempoChange,c=e.toggleEnabled,s=e.toggleSoundOn,u=Object(i.useCallback)((function(e,t){t&&!Array.isArray(t)&&o(t)}),[o]);return Object(z.jsxs)(g.a,{display:"flex",maxWidth:320,width:"100%",alignItems:"center",flexDirection:"column",children:[Object(z.jsxs)(x.a,{variant:"h5",children:[n," bpm"]}),Object(z.jsx)(g.a,{maxWidth:"100%",width:"100%",sx:{borderRadius:16},children:Object(z.jsxs)(He.a,{spacing:1,direction:"row",sx:{mb:1},alignItems:"center",children:[Object(z.jsx)(w.a,{color:"primary",onClick:function(){return n>20&&o(n-1)},children:Object(z.jsx)(Ze.a,{})}),Object(z.jsx)(Ye.a,{"aria-label":"Tempo",step:1,value:n,min:20,max:180,onChange:u}),Object(z.jsx)(w.a,{color:"primary",onClick:function(){return n<180&&o(n+1)},children:Object(z.jsx)(et.a,{})})]})}),Object(z.jsxs)(g.a,{display:"flex",alignItems:"center",children:[Object(z.jsx)(at,{currentQuarter:r}),Object(z.jsx)(w.a,{size:"large",onClick:c,children:t?Object(z.jsx)(Je.a,{fontSize:"large",color:"primary"}):Object(z.jsx)(Qe.a,{fontSize:"large",color:"secondary"})}),Object(z.jsx)(w.a,{size:"large",onClick:s,children:a?Object(z.jsx)(Xe.a,{fontSize:"large",color:"primary"}):Object(z.jsx)(Ke.a,{fontSize:"large",color:"secondary"})})]})]})},ct=n(129),st=n(127),ut=function(e){Object(ct.a)(n,e);var t=Object(st.a)(n);function n(e,i){var r;return Object(ue.a)(this,n),(r=t.call(this)).audioContext=void 0,r.currentQuarterNote=0,r.tempo=void 0,r.lookahead=25,r.scheduleAheadTime=.1,r.nextNoteTime=0,r.intervalID=null,r.soundOn=void 0,r.isRunning=!1,r.tempo=e,r.soundOn=i,r.audioContext=new(window.AudioContext||window.webkitAudioContext),r}return Object(le.a)(n,[{key:"nextNote",value:function(){var e=60/this.tempo;this.nextNoteTime+=e,this.currentQuarterNote++,4===this.currentQuarterNote&&(this.currentQuarterNote=0)}},{key:"scheduleNote",value:function(e,t){var n=this.audioContext.createOscillator();if(this.soundOn){var i=this.audioContext.createGain();n.frequency.value=3===e?1e3:800,i.gain.value=1,i.gain.exponentialRampToValueAtTime(1,t+.001),i.gain.exponentialRampToValueAtTime(.001,t+.02),n.connect(i),i.connect(this.audioContext.destination)}n.start(t),n.stop(t+.03)}},{key:"scheduler",value:function(){for(;this.nextNoteTime<this.audioContext.currentTime+this.scheduleAheadTime;)this.scheduleNote(this.currentQuarterNote,this.nextNoteTime),this.nextNote(),this.next(this.currentQuarterNote)}},{key:"start",value:function(){var e=this;this.isRunning||(this.isRunning=!0,this.currentQuarterNote=0,this.nextNoteTime=this.audioContext.currentTime+.05,this.intervalID=setInterval((function(){return e.scheduler()}),this.lookahead))}},{key:"stop",value:function(){this.isRunning=!1,this.currentQuarterNote=0,this.intervalID&&clearInterval(this.intervalID)}},{key:"updateTempo",value:function(e){this.tempo=e}},{key:"toggleSound",value:function(){this.soundOn=!this.soundOn}},{key:"getCurrentQuarterNote",value:function(){return this.currentQuarterNote}},{key:"startStop",value:function(){this.isRunning?this.stop():this.start()}}]),n}(n(220).a),lt="userTempo",dt="userSoundOn",jt=new function e(){Object(ue.a)(this,e),this.getUserTempo=function(){var e=Number(localStorage.getItem(lt));return Number.isNaN(e)?e:60},this.setUserTempo=function(e){localStorage.setItem(lt,String(e))},this.setUserSoundOn=function(e){return localStorage.setItem(dt,String(e))},this.getUserSoundOn=function(){var e;return null===(e=localStorage.getItem(dt)===String(!0))||void 0===e||e}},bt=jt.getUserTempo(),ht=jt.getUserSoundOn(),mt=["metronome$"],ft=Object(I.a)("div")((function(){return{display:"flex",flexDirection:"column",alignItems:"center"}})),pt=Object(I.a)("div")((function(e){return{display:"flex",justifyContent:"center",overflowX:"hidden",maxWidth:"100%",borderRadius:e.theme.spacing(2)}}));function gt(e,t){return e.pipe(Object(ae.a)((function(e){var n=e%t.configurations.length;return Se.randomizeChord(t.configurations[n])})))}var Ot=function(){var e=Object(i.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(j.i)().id,o=Object(i.useMemo)((function(){return Pe.get(a)}),[a]),c=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(ht),o=Object(f.a)(a,2),c=o[0],s=o[1],u=Object(i.useState)(bt),l=Object(f.a)(u,2),d=l[0],j=l[1],b=Object(i.useState)(0),h=Object(f.a)(b,2),m=h[0],p=h[1],g=Object(i.useMemo)((function(){return new ut(bt,ht)}),[]);Object(i.useEffect)((function(){var e;return n&&(e=g.subscribe(p)),function(){var t;return null===(t=e)||void 0===t?void 0:t.unsubscribe()}}),[g,n]),Object(i.useEffect)((function(){return function(){return g.stop()}}),[g]),Object(i.useEffect)((function(){n&&g.updateTempo(d)}),[d,n,g]);var O=Object(i.useCallback)((function(){g.startStop(),n&&p(g.getCurrentQuarterNote()),r(!n)}),[n,g]),x=Object(i.useCallback)((function(){g.toggleSound(),s((function(e){return!e}))}),[g]);return{metronome$:g,enabled:n,tempo:d,currentNote:m,soundOn:c,handleTempoChange:j,toggleEnabled:O,toggleSoundOn:x}}(),s=c.metronome$,u=Object(te.a)(c,mt),l=u.enabled;return Object(i.useEffect)((function(){var e;return o&&(e=Object(ne.a)(Object(ie.a)(""),gt(Object(re.a)(Math.max(3,o.configurations.length)),o)).pipe(Object(ae.a)((function(e){return{id:Object(se.a)(),chord:e}})),Object(oe.a)((function(e,t){return[].concat(Object(ee.a)(e),[t])}),[])).subscribe(r)),function(){var t;return null===(t=e)||void 0===t?void 0:t.unsubscribe()}}),[o]),Object(i.useEffect)((function(){var e;if(o&&l){var t=s.pipe(Object(ce.a)((function(e){return!e})));e=gt(t,o).subscribe((function(e){return r((function(t){return[].concat(Object(ee.a)(t.slice(1)),[{id:Object(se.a)(),chord:e}])}))}))}return function(){var t;null===(t=e)||void 0===t||t.unsubscribe()}}),[o,s,l]),o?Object(z.jsxs)(ft,{children:[Object(z.jsx)(ot,Object(m.a)({},u)),Object(z.jsx)(pt,{children:Object(z.jsx)(De,{chords:n})})]}):Object(z.jsx)(j.a,{to:"/games"})},xt=n(215),vt=n(241),wt=n(219),yt=n(217),Ct=n(240),kt=n(239),Vt=n(125),St=n.n(Vt),It=n(236),Mt=n(238),Nt=n(237),zt={easy:"Easy",intermediate:"Intermediate",upperIntermediate:"Upper Intermediate",hard:"Hard",expert:"Expert"},At={easy:"lesson-easy.jpg",intermediate:"lesson-intermediate.jpg",upperIntermediate:"lesson-upper-intermediate.jpg",hard:"lesson-hard.jpg",expert:"lesson-expert.jpg"},Et=function(e){var t=e.level,n=e.title,i=e.description;return Object(z.jsxs)(It.a,{sx:{maxWidth:345},children:[Object(z.jsx)(Nt.a,{component:"img",alt:"green iguana",height:"140",image:At[t]}),Object(z.jsxs)(Mt.a,{children:[Object(z.jsx)(x.a,{gutterBottom:!0,variant:"h5",children:n}),Object(z.jsx)(x.a,{variant:"body2",sx:{mb:2,display:"inline-block"},children:"Level:"})," ",Object(z.jsx)(x.a,{variant:"body2",sx:{mb:2,display:"inline-block"},children:zt[t]}),Object(z.jsx)(x.a,{variant:"body1",color:"text.secondary",children:i})]})]})},Rt=Object(I.a)(d.b)({textDecoration:"none"}),Wt=Object(I.a)(x.a)((function(){return{width:"33%",flexShrink:0,fontWeight:"bold"}})),Dt=function(e){var t=e.lessons,n=r.a.useState(!1),a=Object(f.a)(n,2),o=a[0],c=a[1],s=Object(i.useMemo)((function(){return function(e){return Array.from(e.entries()).reduce((function(e,t){var n,i,r,a=Object(f.a)(t,2),o=a[0],c=a[1];return c.group?((null===(n=e[c.group])||void 0===n?void 0:n.length)||(e[c.group]=[]),null===(i=e[c.group])||void 0===i||i.push({key:o,config:c})):((null===(r=e.unknown)||void 0===r?void 0:r.length)||(e.unknown=[]),e.unknown.push({key:o,config:c})),e}),{})}(t)}),[t]);return Object(z.jsx)(z.Fragment,{children:Object.entries(s).sort((function(e){return"unknown"===e[0]?1:0})).map((function(e){var t,n=Object(f.a)(e,2),i=n[0],r=n[1],a=Object(z.jsx)(wt.a,{container:!0,spacing:2,justifyContent:"center",children:r.map((function(e){var t=e.key,n=e.config;return Object(z.jsx)(wt.a,{item:!0,md:4,sm:6,xs:12,children:Object(z.jsx)(Rt,{to:"/lesson/".concat(t),children:Object(z.jsx)(Et,Object(m.a)({},n))})},t)}))});return"unknown"===i?a:Object(z.jsxs)(yt.a,{expanded:o===i,onChange:(t=i,function(e,n){c(!!n&&t)}),sx:{mt:2},children:[Object(z.jsx)(kt.a,{expandIcon:Object(z.jsx)(St.a,{}),"aria-controls":"".concat(i,"-content"),id:"".concat(i,"-header"),children:Object(z.jsx)(Wt,{variant:"h5",children:i})}),Object(z.jsx)(Ct.a,{children:a})]},i)}))})},Ft=Object(I.a)("img")((function(){return{maxWidth:"100%",maxHeight:"100%",margin:"auto",display:"block"}})),Tt=function(){return Object(z.jsx)(Ft,{src:"development.png",alt:"Development"})},Gt=["children","value","index"];function Pt(e){var t=e.children,n=e.value,i=e.index,r=Object(te.a)(e,Gt);return Object(z.jsx)("div",Object(m.a)(Object(m.a)({role:"tabpanel",hidden:n!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},r),{},{children:n===i&&Object(z.jsx)(g.a,{children:Object(z.jsx)(x.a,{children:t})})}))}function Ut(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Qt=function(){var e=i.useState(0),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(z.jsxs)(g.a,{sx:{width:"100%"},children:[Object(z.jsx)(g.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(z.jsxs)(xt.a,{value:n,onChange:function(e,t){r(t)},"aria-label":"basic tabs example",children:[Object(z.jsx)(vt.a,Object(m.a)({label:"First course"},Ut(0))),Object(z.jsx)(vt.a,Object(m.a)({label:"Second course"},Ut(1)))]})}),Object(z.jsx)(Pt,{value:n,index:0,children:Object(z.jsx)(Dt,{lessons:Fe})}),Object(z.jsx)(Pt,{value:n,index:1,children:Object(z.jsx)(Tt,{})})]})},Bt=function(){return Object(z.jsx)(Tt,{})},Jt=function(){return Object(z.jsx)(Dt,{lessons:Ge})},Lt=function(){return Object(z.jsx)(l.a,{theme:h,children:Object(z.jsx)(d.a,{basename:"/guitarapp",children:Object(z.jsx)(_,{children:Object(z.jsxs)(j.d,{children:[Object(z.jsx)(j.b,{exact:!0,path:"/constructor",children:Object(z.jsx)(Bt,{})}),Object(z.jsx)(j.b,{exact:!0,path:"/lessons",children:Object(z.jsx)(Qt,{})}),Object(z.jsx)(j.b,{exact:!0,path:"/lesson/:id",children:Object(z.jsx)(Ot,{})}),Object(z.jsx)(j.b,{exact:!0,path:"/games",children:Object(z.jsx)(Jt,{})}),Object(z.jsx)(j.a,{to:"/games"})]})})})})};o.a.render(Object(z.jsxs)(r.a.StrictMode,{children:[Object(z.jsx)(c.a,{}),Object(z.jsx)(Lt,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/guitarapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/guitarapp","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):u(t,e)}))}}()}},[[150,1,2]]]);
//# sourceMappingURL=main.8e353afd.chunk.js.map