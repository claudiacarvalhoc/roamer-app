(this["webpackJsonproamer-app"]=this["webpackJsonproamer-app"]||[]).push([[0],{10:function(e,t,a){e.exports={icon:"icons_icon__3W1_E"}},13:function(e,t,a){e.exports={container:"language_container__3884H",flag:"language_flag__1BjlF",language:"language_language__1iw28"}},16:function(e,t,a){e.exports={label:"label_label__21lcP",name:"label_name__1UsCm",value:"label_value__3kP0W",highlighted:"label_highlighted__2nzCf"}},17:function(e,t,a){e.exports={container:"card_container__3G4Fa",progressBar:"card_progressBar__2G1MJ",labels:"card_labels__2Kb3m",trash:"card_trash__2aJRz"}},20:function(e,t,a){e.exports={app:"app_app__M9MMq",project:"app_project__1cezf",collapsed:"app_collapsed__2Hclo"}},21:function(e,t,a){e.exports={tag:"badge_tag__1lMMI",orange:"badge_orange__1D7Zb",green:"badge_green__3YFv3"}},27:function(e,t,a){e.exports={button:"button_button__3_GL1",primary:"button_primary__17m96",secondary:"button_secondary__3v91q"}},28:function(e,t,a){e.exports={modal:"modal_modal__1DF1f",content:"modal_content__1tQ-X"}},36:function(e,t,a){e.exports={menu:"menu_menu__2lX_i"}},37:function(e,t,a){e.exports={divider:"divider_divider__3A5B_"}},44:function(e,t,a){},5:function(e,t,a){e.exports={container:"project_container__2jO-H",collapsed:"project_collapsed__3583I",divider:"project_divider__Fpga-",cards:"project_cards__1sS75",card:"project_card__d3i2E",addcard:"project_addcard__3jE3S",modal:"project_modal__1NWBI",modalTitle:"project_modalTitle__2-uoB",modalButtons:"project_modalButtons__37aEs",modalButton:"project_modalButton__YjI43",modalSelect:"project_modalSelect__362ud"}},61:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(12),l=a.n(c),i=(a(44),a(11)),r=a(33),o=a(4),d="ADD_PROJECT",u="ADD_LANGUAGES",j="REMOVE_TRANSLATION",h="EXPAND_PROJECTS",p="COLLAPSE_PROJECTS",x={expand:!0,projects:[{id:1,name:"Roamer App (Android SDK test)",done:30,baseWords:160246,team:26,keys:1834,issues:47514,icons:["up","down","check","user","rate","camera","book"],badges:[{name:"Roamer",type:"orange"},{name:"iOS",type:"green"}],translationSections:[{id:1,country:"uk",language:"English",done:20,wordsToDo:16246,unverified:5e4},{id:2,country:"uk",language:"English",done:20,wordsToDo:16246,unverified:5e4},{id:3,country:"uk",language:"English",done:20,wordsToDo:16246,unverified:5e4},{id:4,country:"uk",language:"English",done:20,wordsToDo:16246,unverified:5e4},{id:5,country:"ru",language:"Russian",done:45,wordsToDo:16246,unverified:5e4},{id:6,country:"ru",language:"Russian",done:45,wordsToDo:16246,unverified:5e4},{id:7,country:"ru",language:"Russian",done:45,wordsToDo:16246,unverified:5e4},{id:8,country:"ru",language:"Russian",done:45,wordsToDo:16246,unverified:5e4},{id:9,country:"it",language:"Italian",done:83,wordsToDo:16246,unverified:5e4},{id:10,country:"it",language:"Italian",done:83,wordsToDo:16246,unverified:5e4},{id:11,country:"it",language:"Italian",done:83,wordsToDo:16246,unverified:5e4},{id:12,country:"it",language:"Italian",done:83,wordsToDo:16246,unverified:5e4},{id:13,country:"mk",language:"Macedonian",done:67,wordsToDo:16246,unverified:5e4},{id:14,country:"mk",language:"Macedonian",done:67,wordsToDo:16246,unverified:5e4},{id:15,country:"mk",language:"Macedonian",done:67,wordsToDo:16246,unverified:5e4}]}],MenuTextsState:{projectText:"New project \u21e7\u2318P",expandText:"Expand all",collapseText:"Collapse all"},projectTexts:{doneText:"DONE",baseWordsText:"BASE WORDS",teamText:"TEAM",keysText:"KEYS",qaIssuesText:"QA ISSUES",wordsToDoText:"WORDS TO DO",unverifiedText:"UNVERIFIED",addLanguageText:"Add language",modalTitleText:"Add Languages",closeButtonText:"Close",addButtonText:"Add",languagesText:[{value:"ru",label:"Russian"},{value:"de",label:"German"},{value:"uk",label:"English"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"es",label:"Spanish"},{value:"ua",label:"Ukrainian"},{value:"pl",label:"Poland"},{value:"ro",label:"Polish"},{value:"nl",label:"Dutch"},{value:"cz",label:"Czech"},{value:"gr",label:"Greek"},{value:"pt",label:"Portuguese"},{value:"se",label:"Swedish"},{value:"bu",label:"Hungarian"},{value:"by",label:"Belarusian"},{value:"rs",label:"Serbian"},{value:"bg",label:"Bulgarian"},{value:"dk",label:"Danish"},{value:"fi",label:"Finnish"},{value:"mk",label:"Macedonian"}]}},b={id:0,name:"Roamer App (Android SDK test)",done:0,baseWords:160246,team:26,keys:1834,issues:47514,icons:["up","down","check","user","rate","camera","book"],badges:[{name:"Roamer",type:"orange"},{name:"iOS",type:"green"}],translationSections:[]},g=a(19),m=a.n(g),v=Object(i.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var a=e.projects.slice(),n=e.projects.length+1,s=Object(o.a)(Object(o.a)({},t.project),{},{id:n,name:"".concat(t.project.name," ").concat(n)});return a.push(s),Object(o.a)(Object(o.a)({},e),{},{projects:a});case u:var c=m.a.cloneDeep(e.projects),l=c.findIndex((function(e){return e.id===t.projectId}));return c[l].translationSections=t.translationsSections,Object(o.a)(Object(o.a)({},e),{},{projects:c});case j:var i=m.a.cloneDeep(e.projects),r=i.findIndex((function(e){return e.id===t.projectId}));return i[r].translationSections=m.a.remove(i[r].translationSections,(function(e){return e.id!==t.translationId})),Object(o.a)(Object(o.a)({},e),{},{projects:i});case h:return Object(o.a)(Object(o.a)({},e),{},{expand:!0});case p:return Object(o.a)(Object(o.a)({},e),{},{expand:!1});default:return Object(o.a)({},e)}}}),O=a(35),f="state",_=function(e){var t,a=Object(r.createLogger)(),n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,s=[O.a,a],c=null!==(t=function(){try{var e=localStorage.getItem(f);return null!==e?JSON.parse(e):void 0}catch(t){return void console.error("Error loading state from local storage",t)}}())&&void 0!==t?t:e,l=Object(i.e)(v,{app:c},n(i.a.apply(void 0,s)));return l.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem(f,t)}catch(a){console.error("Error saving state on local storage",a)}}(l.getState().app)})),l},w=a(6),C=a(7),N=a(20),y=a.n(N),T=a(36),L=a.n(T),k=a(3),D=a.n(k),B=a(27),M=a.n(B),S=a(0),E=function(e){var t=e.className,a=e.text,n=e.type,s=e.onClick;return Object(S.jsx)("button",{className:D()(t,M.a.button,M.a[n]),onClick:s,children:a})},F=function(e){return e.app.expand},V=function(e){return e.app.projects},R=function(e){return e.app.projectTexts},H=a(39),Z=function(){return function(e){return e({type:d,project:b}),Promise.resolve()}},I=function(e,t){return function(a){var n,s=e.translationSections.slice(),c=s.length>0?s[s.length-1].id:0;return s.push.apply(s,Object(H.a)(t.map((function(e){return{id:++c,country:e.value,language:e.label,done:0,wordsToDo:4e4,unverified:0}})))),a((n=e.id,{type:u,projectId:n,translationsSections:s})),Promise.resolve()}},A=function(e,t){return function(a){return a(function(e,t){return{type:j,projectId:e,translationId:t}}(e,t)),Promise.resolve()}},P=Object(w.b)((function(e){var t=function(e){return e.app.MenuTextsState}(e);return{projectText:t.projectText,expandText:t.expandText,collapseText:t.collapseText}}),(function(e){return{addProject:function(){return e(Z())},expand:function(){return e({type:h})},collapse:function(){return e({type:p})}}}))((function(e){var t=e.projectText,a=e.expandText,n=e.collapseText,s=e.addProject,c=e.expand,l=e.collapse;return Object(S.jsxs)("div",{className:L.a.menu,children:[Object(S.jsx)(E,{"data-test":"button-new-project",text:t,onClick:function(){return s()},type:"primary"}),Object(S.jsx)(E,{"data-test":"button-expand",text:a,onClick:function(){return c()},type:"secondary"}),Object(S.jsx)(E,{"data-test":"button-collapse",text:n,onClick:function(){return l()},type:"secondary"})]})})),W=a(29),U=a(8),J=a.n(U),z="#DB1F35",G=function(e){return e>0&&e<25?z:e>=20&&e<70?"#FFC400":e>=70&&e<=100?"#5489DC":z},q=function(e){var t=e.className,a=e.percentage,n={width:"".concat(a,"%"),border:"2px solid ".concat(G(a)),marginTop:"-2px",marginLeft:"-2px"};return Object(S.jsx)("div",{className:D()(t),children:Object(S.jsx)("div",{style:{height:0,width:"100%",border:"2px solid #CFCFCF"},children:Object(S.jsx)("div",{style:n})})})},X=a(16),K=a.n(X),Y=function(e){var t=e.name,a=e.value,n=e.highlighted;return Object(S.jsxs)("div",{className:K.a.label,children:[Object(S.jsx)("p",{className:K.a.name,children:t}),Object(S.jsx)("p",{className:D()(K.a.value,Object(C.a)({},K.a.highlighted,n)),children:a})]})},Q=a(10),$=a.n(Q),ee=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71572 0 0 6.71573 0 15C0 23.2843 6.71572 30 15 30Z",fill:"#B7D9D0"}),Object(S.jsx)("path",{d:"M22.4916 14.9999L14.9999 7.5082L7.49164 15.0165L8.81761 16.3425L14.0552 11.1049V22.5082H15.9281V11.0883L21.1657 16.3259L22.4916 14.9999Z",fill:"white"})]})},te=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",fill:"#DDBBBA"}),Object(S.jsx)("path",{d:"M7.50836 14.9999L15.0001 22.4916L22.5084 14.9833L21.1824 13.6574L15.9448 18.8949V7.5082H14.0719V18.9115L8.83433 13.6739L7.50836 14.9999Z",fill:"white"})]})},ae=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M25.5888 25.5995C31.4434 19.7449 31.4434 10.2528 25.5888 4.39818C19.7342 -1.45639 10.2421 -1.45639 4.38754 4.39818C-1.46704 10.2528 -1.46704 19.7449 4.38754 25.5995C10.2421 31.454 19.7342 31.454 25.5888 25.5995Z",fill:"#CFD6C2"}),Object(S.jsx)("path",{d:"M12.159 18.9343L7.852 14.6438L6.54333 15.9525L12.159 21.5682L22.4793 11.2479L21.1706 9.93922L12.159 18.9343Z",fill:"white"})]})},ne=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",fill:"#D1D1D1"}),Object(S.jsx)("path",{d:"M23.5191 18.9116C21.4473 16.5249 18.3976 15 14.9998 15C11.5854 15 8.53572 16.5083 6.48047 18.9116C7.95561 22.1436 11.2208 24.3812 14.9998 24.3812C18.7788 24.3812 22.0274 22.1436 23.5191 18.9116Z",fill:"white"}),Object(S.jsx)("path",{d:"M14.9837 14.0551C17.0525 14.0551 18.7296 12.378 18.7296 10.3092C18.7296 8.24045 17.0525 6.56338 14.9837 6.56338C12.9149 6.56338 11.2379 8.24045 11.2379 10.3092C11.2379 12.378 12.9149 14.0551 14.9837 14.0551Z",fill:"white"})]})},se=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",fill:"#C0C2DA"}),Object(S.jsx)("path",{d:"M21.7126 15.0002L18.5303 9.49744L17.4529 7.62451L11.2872 18.2985L9.38111 15.0002V15.0168V15.0002H5.63525V16.8897H8.30376L10.1933 20.1715L11.2872 22.0444L17.4529 11.3704L20.6353 16.8897H24.3811V15.0002H21.7126Z",fill:"white"})]})},ce=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",fill:"#E6C3A4"}),Object(S.jsx)("path",{d:"M15.0172 17.8177C16.5734 17.8177 17.8349 16.5562 17.8349 15C17.8349 13.4438 16.5734 12.1823 15.0172 12.1823C13.461 12.1823 12.1995 13.4438 12.1995 15C12.1995 16.5562 13.461 17.8177 15.0172 17.8177Z",fill:"white"}),Object(S.jsx)("path",{d:"M10.4758 8.43671H7.50891C6.48129 8.43671 5.63599 9.28201 5.63599 10.3096V19.6909C5.63599 20.7185 6.48129 21.5638 7.50891 21.5638H22.5089C23.5365 21.5638 24.3818 20.7185 24.3818 19.6909V10.3096C24.3818 9.28201 23.5365 8.43671 22.5089 8.43671H19.5421H10.4758ZM15.0006 19.6909C12.415 19.6909 10.31 17.5859 10.31 15.0002C10.31 12.4146 12.415 10.3096 15.0006 10.3096C17.5863 10.3096 19.6912 12.4146 19.6912 15.0002C19.6912 17.5859 17.6028 19.6909 15.0006 19.6909Z",fill:"white"})]})},le=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("path",{d:"M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",fill:"#B5D1E3"}),Object(S.jsx)("path",{d:"M9.82858 6.49716C7.93908 6.49716 6.1656 7.02755 4.67389 7.95573V22.6242C6.18218 21.6961 7.93908 21.1657 9.82858 21.1657C11.7181 21.1657 13.4916 21.6961 14.9833 22.6242V7.95573C13.4916 7.02755 11.7181 6.49716 9.82858 6.49716Z",fill:"white"}),Object(S.jsx)("path",{d:"M20.1547 6.49716C18.2652 6.49716 16.4917 7.02755 15 7.95573V9.82865C16.5083 8.90048 18.2652 8.37009 20.1547 8.37009C21.2983 8.37009 22.4088 8.56898 23.4365 8.93363V19.8563C22.4088 19.4916 21.2983 19.2927 20.1547 19.2927C18.2652 19.2927 16.4917 19.8231 15 20.7513V22.6077C16.5083 21.6795 18.2652 21.1657 20.1547 21.1657C22.0442 21.1657 23.8177 21.6961 25.3094 22.6242V7.95573C23.8011 7.02755 22.0442 6.49716 20.1547 6.49716Z",fill:"white"}),Object(S.jsx)("path",{d:"M20.1548 11.0054C18.6465 11.0054 17.2211 11.3534 15.9283 11.9501V13.8231C17.2045 13.2098 18.6299 12.8783 20.1548 12.8783C20.967 12.8783 21.746 12.9777 22.4918 13.1601V11.2871C21.746 11.1048 20.967 11.0054 20.1548 11.0054Z",fill:"white"}),Object(S.jsx)("path",{d:"M22.4918 15.0333C21.746 14.851 20.9504 14.7516 20.1548 14.7516C18.6465 14.7516 17.2211 15.0996 15.9283 15.6963V17.5692C17.2045 16.956 18.6299 16.6245 20.1548 16.6245C20.967 16.6245 21.746 16.7239 22.4918 16.9063V15.0333Z",fill:"white"})]})},ie=function(e){var t=e.className;return Object(S.jsx)("svg",{className:t,height:"15",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 488.936 488.936",children:Object(S.jsx)("g",{children:Object(S.jsxs)("g",{children:[Object(S.jsx)("path",{d:"M381.16,111.948H107.376c-6.468,0-12.667,2.819-17.171,7.457c-4.504,4.649-6.934,11.014-6.738,17.477l9.323,307.69 c0.39,12.92,10.972,23.312,23.903,23.312h20.136v-21.012c0-24.121,19.368-44.049,43.488-44.049h127.896 c24.131,0,43.893,19.928,43.893,44.049v21.012h19.73c12.933,0,23.52-10.346,23.913-23.268l9.314-307.7 c0.195-6.462-2.234-12.863-6.738-17.513C393.821,114.767,387.634,111.948,381.16,111.948z"}),Object(S.jsx)("path",{d:"M309.166,435.355H181.271c-6.163,0-11.915,4.383-11.915,11.516v30.969c0,6.672,5.342,11.096,11.915,11.096h127.895 c6.323,0,11.366-4.773,11.366-11.096v-30.969C320.532,440.561,315.489,435.355,309.166,435.355z"}),Object(S.jsx)("path",{d:"M427.696,27.106C427.696,12.138,415.563,0,400.591,0H88.344C73.372,0,61.239,12.138,61.239,27.106v30.946 c0,14.973,12.133,27.106,27.105,27.106H400.59c14.973,0,27.105-12.133,27.105-27.106L427.696,27.106L427.696,27.106z"})]})})})},re=function(e){return"up"===e?Object(S.jsx)(ee,{className:$.a.icon},"type-".concat(e)):"down"===e?Object(S.jsx)(te,{className:$.a.icon},"type-".concat(e)):"check"===e?Object(S.jsx)(ae,{className:$.a.icon},"type-".concat(e)):"user"===e?Object(S.jsx)(ne,{className:$.a.icon},"type-".concat(e)):"rate"===e?Object(S.jsx)(se,{className:$.a.icon},"type-".concat(e)):"camera"===e?Object(S.jsx)(ce,{className:$.a.icon},"type-".concat(e)):"book"===e?Object(S.jsx)(le,{className:$.a.icon},"type-".concat(e)):"trash"===e?Object(S.jsx)(ie,{className:$.a.icon},"type-".concat(e)):Object(S.jsx)(S.Fragment,{})},oe=function(e){var t=e.className,a=e.types;return Object(S.jsx)("div",{className:t,children:!!a&&a.map((function(e){return re(e)}))})},de=a(21),ue=a.n(de),je=function(e){var t,a=e.className,n=e.name,s=e.type,c=void 0===s?"orange":s;return Object(S.jsx)("div",{className:D()(ue.a.tag,a,(t={},Object(C.a)(t,ue.a.orange,"orange"===c),Object(C.a)(t,ue.a.green,"green"===c),t)),children:n})},he=Object(w.b)((function(e){return{texts:R(e)}}))((function(e){var t=e.project,a=e.texts,n=t.badges.length>0;return Object(S.jsxs)("div",{className:J.a.container,children:[Object(S.jsx)("h1",{className:J.a.summaryTitle,children:t.name}),Object(S.jsx)(q,{className:J.a.progressBar,percentage:t.done}),Object(S.jsxs)("div",{className:J.a.line,children:[Object(S.jsx)(Y,{name:a.doneText,value:"".concat(t.done,"%"),highlighted:!1}),Object(S.jsx)(Y,{name:a.baseWordsText,value:"".concat(t.baseWords),highlighted:!1})]}),Object(S.jsxs)("div",{className:J.a.line,children:[Object(S.jsx)(Y,{name:a.teamText,value:"".concat(t.team),highlighted:!0}),Object(S.jsx)(Y,{name:a.keysText,value:"".concat(t.keys),highlighted:!1})]}),Object(S.jsx)("div",{className:J.a.line,children:Object(S.jsx)(Y,{name:a.qaIssuesText,value:"".concat(t.issues),highlighted:!0})}),Object(S.jsx)("div",{className:J.a.iconsLines,children:Object(S.jsx)(oe,{className:J.a.icons,types:t.icons})}),n&&Object(S.jsx)("div",{"data-test":"summary-badges",className:J.a.badgesLine,children:t.badges.map((function(e){return Object(S.jsx)(je,{className:J.a.badge,name:e.name,type:e.type},"badge-".concat(e.name))}))})]})})),pe=a(5),xe=a.n(pe),be=a(37),ge=a.n(be),me=function(e){var t=e.className;return Object(S.jsx)("div",{className:D()(t,ge.a.divider)})},ve=a(17),Oe=a.n(ve),fe=a(13),_e=a.n(fe),we=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("rect",{width:"14",height:"10",rx:"1",fill:"white"}),Object(S.jsx)("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"14",height:"10",children:Object(S.jsx)("rect",{width:"14",height:"10",rx:"1",fill:"white"})}),Object(S.jsxs)("g",{mask:"url(#mask0)",children:[Object(S.jsx)("rect",{width:"14",height:"10",fill:"#0A17A7"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-0.640625 -0.958496L5.33333 3.07099V-0.666992H8.66667V3.07161L14.6413 -0.958361L15.3869 0.147022L10.6635 3.33301H14V6.66634H10.6637L15.3874 9.85257L14.6418 10.958L8.66667 6.92764V10.6663H5.33333V6.92826L-0.641128 10.9581L-1.38672 9.8527L3.33726 6.66634H0V3.33301H3.3374L-1.38622 0.146887L-0.640625 -0.958496Z",fill:"white"}),Object(S.jsx)("path",{d:"M9.33333 3.1661L15.666 -1",stroke:"#DB1F35",strokeWidth:"0.666667",strokeLinecap:"round"}),Object(S.jsx)("path",{d:"M10.0065 6.84871L15.6834 10.6751",stroke:"#DB1F35",strokeWidth:"0.666667",strokeLinecap:"round"}),Object(S.jsx)("path",{d:"M4.6445 6.80232L-1.91927 11.1551",stroke:"#DB1F35",strokeWidth:"0.666667",strokeLinecap:"round"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6H6V10H8V6H14V4H8V0H6V4H0V6Z",fill:"#E6273E"})]})]})},Ce=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"14",height:"7",viewBox:"0 0 14 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"-3",width:"14",height:"10",children:Object(S.jsx)("rect",{x:"0.25",y:"-2.75",width:"13.5",height:"9.5",rx:"0.75",fill:"white",stroke:"white",strokeWidth:"0.5"})}),Object(S.jsxs)("g",{mask:"url(#mask0)",children:[Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3.66666H14V0.333328H0V3.66666Z",fill:"#0C47B7"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.99967H14V3.66634H0V6.99967Z",fill:"#E53B35"})]})]})},Ne=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("rect",{x:"0.25",y:"0.25",width:"13.5",height:"9.5",rx:"1.75",fill:"white",stroke:"#F5F5F5",strokeWidth:"0.5"}),Object(S.jsx)("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"14",height:"10",children:Object(S.jsx)("rect",{x:"0.25",y:"0.25",width:"13.5",height:"9.5",rx:"0.75",fill:"white",stroke:"white",strokeWidth:"0.5"})}),Object(S.jsxs)("g",{mask:"url(#mask0)",children:[Object(S.jsx)("rect",{x:"9.33301",width:"4.66667",height:"10",fill:"#E43D4C"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10H4.66667V0H0V10Z",fill:"#1BB65D"})]})]})},ye=function(e){var t=e.className;return Object(S.jsxs)("svg",{className:t,width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(S.jsx)("rect",{width:"14",height:"10",fill:"#E81B26"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3.99992L7 4.99992L14 3.99992V5.99992L7 4.99992L0 5.99992V3.99992Z",fill:"#FFE94F"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M-0.357727 10.2787L6.99971 4.9997L13.0189 -1.76562L14.3571 -0.279329L6.99971 4.9997L0.980534 11.765L-0.357727 10.2787Z",fill:"#FFE94F"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.3569 10.2787L6.9995 4.9997L0.980327 -1.76562L-0.357934 -0.279329L6.9995 4.9997L13.0187 11.765L14.3569 10.2787Z",fill:"#FFE94F"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99963 4.99992L5.99963 -7.62939e-05H7.99963L6.99963 4.99992L7.99963 9.99992H5.99963L6.99963 4.99992Z",fill:"#FFE94F"}),Object(S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99886 7.33293C8.28753 7.33293 9.33219 6.28826 9.33219 4.99959C9.33219 3.71093 8.28753 2.66626 6.99886 2.66626C5.7102 2.66626 4.66553 3.71093 4.66553 4.99959C4.66553 6.28826 5.7102 7.33293 6.99886 7.33293Z",fill:"#FFE94F"})]})},Te=function(e){return"uk"===e?Object(S.jsx)(we,{className:_e.a.flag},"vector-".concat(e)):"it"===e?Object(S.jsx)(Ne,{className:_e.a.flag},"vector-".concat(e)):"ru"===e?Object(S.jsx)(Ce,{className:_e.a.flag},"vector-".concat(e)):"mk"===e?Object(S.jsx)(ye,{className:_e.a.flag},"vector-".concat(e)):Object(S.jsx)(S.Fragment,{})},Le=function(e){var t=e.name,a=e.flag;return Object(S.jsxs)("div",{className:_e.a.container,children:[Te(a),Object(S.jsx)("p",{className:_e.a.language,children:t})]})},ke=Object(w.b)((function(e){return{texts:R(e)}}))((function(e){var t=e.className,a=e.translation,n=e.texts,s=e.onDeleteClick;return Object(S.jsxs)("div",{className:D()(t,Oe.a.container),children:[Object(S.jsx)(Le,{name:a.language,flag:a.country}),Object(S.jsx)("div",{onClick:function(){return s(a.id)},children:Object(S.jsx)(oe,{className:Oe.a.trash,types:["trash"]})}),Object(S.jsx)(q,{className:Oe.a.progressBar,percentage:a.done}),Object(S.jsxs)("div",{className:Oe.a.labels,children:[Object(S.jsx)(Y,{name:n.doneText,value:"".concat(a.done,"%"),highlighted:!1}),Object(S.jsx)(Y,{name:n.wordsToDoText,value:"".concat(a.wordsToDo),highlighted:!0}),Object(S.jsx)(Y,{name:n.unverifiedText,value:"".concat(a.unverified),highlighted:!0})]})]})})),De=a(28),Be=a.n(De),Me=function(e){var t=e.children;return Object(S.jsx)("div",{className:Be.a.modal,children:Object(S.jsx)("div",{className:Be.a.content,children:t})})},Se=a(38),Ee=Object(w.b)((function(e){var t=R(e);return{addLanguageText:t.addLanguageText,isExpanded:F(e),closeButtonText:t.closeButtonText,addButtonText:t.addButtonText,modalTitleText:t.modalTitleText,languagesOptions:t.languagesText}}),(function(e){return{addSelectedLanguages:function(t,a){return e(I(t,a))},removeTranslation:function(t,a){return e(A(t,a))}}}))((function(e){var t=e.className,a=e.isExpanded,s=e.addLanguageText,c=e.modalTitleText,l=e.closeButtonText,i=e.addButtonText,r=e.languagesOptions,o=e.project,d=e.addSelectedLanguages,u=e.removeTranslation,j=o.translationSections,h=0===j.length,p=Object(n.useState)(!1),x=Object(W.a)(p,2),b=x[0],g=x[1],m=Object(n.useState)([]),v=Object(W.a)(m,2),O=v[0],f=v[1],_=function(){g(!1)};return Object(S.jsxs)("div",{className:D()(t,xe.a.container,Object(C.a)({},xe.a.collapsed,!a)),children:[Object(S.jsx)(he,{project:o}),a&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(me,{"data-test":"project-divider",className:xe.a.divider}),Object(S.jsxs)("div",{"data-test":"project-translations",className:xe.a.cards,children:[!h&&j.map((function(e){return Object(S.jsx)(ke,{className:xe.a.card,translation:e,onDeleteClick:function(){return u(o.id,e.id)}},"translation_".concat(e.id))})),Object(S.jsx)(E,{"data-test":"project-add-language",className:xe.a.addcard,text:s,type:"secondary",onClick:function(){g(!0)}})]})]}),b&&Object(S.jsx)(Me,{"data-test":"project-add-language",children:Object(S.jsxs)("div",{className:xe.a.modal,children:[Object(S.jsx)("h2",{className:xe.a.modalTitle,children:c}),Object(S.jsx)("div",{className:xe.a.modalSelect,children:Object(S.jsx)(Se.a,{isMulti:!0,options:r,onChange:function(e){return f(e)}})}),Object(S.jsxs)("div",{className:xe.a.modalButtons,children:[Object(S.jsx)(E,{className:xe.a.modalButton,text:l,type:"secondary",onClick:_}),Object(S.jsx)(E,{className:xe.a.modalButton,text:i,type:"primary",onClick:function(){console.log({selectedLanguages:O}),d(o,O),_()}})]})]})})]})})),Fe=Object(w.b)((function(e){return{isExpanded:F(e),projects:V(e)}}))((function(e){var t=e.isExpanded,a=e.projects,n=void 0===a?[]:a,s=!!n&&0===n.length;return Object(S.jsxs)("div",{className:y.a.app,children:[Object(S.jsx)(P,{}),!s&&Object(S.jsx)("div",{"data-test":"app-projects",className:D()(Object(C.a)({},y.a.collapsed,!t)),children:n.map((function(e){return Object(S.jsx)(Ee,{className:y.a.project,project:e},"project-".concat(e.id))}))})]})})),Ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))},Re=_(x);l.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(w.a,{store:Re,children:Object(S.jsx)(Fe,{})})}),document.getElementById("root")),Ve()},8:function(e,t,a){e.exports={container:"summary_container__1F3wn",summaryTitle:"summary_summaryTitle__qV7Mt",progressBar:"summary_progressBar__2j6lv",line:"summary_line__kDb_d",iconsLines:"summary_iconsLines__2wcrI",badgesLine:"summary_badgesLine__3IaMG",badge:"summary_badge__dDJRt",icons:"summary_icons__1uph9"}}},[[61,1,2]]]);
//# sourceMappingURL=main.bf40fd18.chunk.js.map