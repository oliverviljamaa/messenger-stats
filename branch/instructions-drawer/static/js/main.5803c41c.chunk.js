(this["webpackJsonpmessenger-stats"]=this["webpackJsonpmessenger-stats"]||[]).push([[0],{313:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},316:function(e,t,n){"use strict";var a,r=n(22),o=(n(287),n(111)),c=n(0),l=n.n(c),i=n(47),s=n.n(i),u=n(140),m=n(201),d=n(92),f=n(202),g=n(95),h=n(605),E=n(203),b=n(606),p=n(607),y=n(608),v=n(622),O=n(609),w=n(610),k=n(619);!function(e){e.DAY="DAY",e.WEEK="WEEK",e.MONTH="MONTH",e.YEAR="YEAR"}(a||(a={}));var j=a.DAY,M=a.WEEK,A=a.MONTH,T=a.YEAR;function x(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(t).map(R),e.next=3,Promise.all(n);case 3:return a=e.sent.flat(),e.abrupt("return",N(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D={senders:[],messages:{DAY:[],WEEK:[],MONTH:[],YEAR:[]}};function N(e){var t=function(e){return Object(g.sortBy)(e,"time")}(e),n=function(e){return Object(g.orderBy)(Object.entries(F(e)).map((function(e){var t=Object(r.a)(e,2);return{sender:t[0],numberOfMessages:t[1]}})),"numberOfMessages","desc").map((function(e){return e.sender}))}(e),a=function(e){return function(e,t,n){return function(e,t){var n=function(e,t){return Object(g.groupBy)(e,(function(e){var n=e.time;return K(t)(n)}))}(e,t);return function(e,t){if(0===e.length)return function(){return[]};var n=e[0].time,a=e[e.length-1].time,r=K(t)(n),o=a;return{DAY:function(){return Object(y.a)({start:r,end:o})},WEEK:function(){return Object(v.a)({start:r,end:o},{weekStartsOn:1})},MONTH:function(){return Object(O.a)({start:r,end:o})},YEAR:function(){return Object(w.a)({start:r,end:o})}}[t]}(e,t)().map((function(e){return{time:e.getTime(),messages:n[e.getTime()]||[]}}))}(e,t).map((function(e){var a=e.time,r=F(e.messages);return Object(m.a)({id:_(Number(a),t)},n.reduce((function(e,t){return Object(m.a)({},e,Object(u.a)({},t,r[t]||0))}),{}))}))}(t,e,n)};return{senders:n,messages:{DAY:a(j),WEEK:a(M),MONTH:a(A),YEAR:a(T)}}}function R(e){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return n=e.sent,e.abrupt("return",n?B(n):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return n=e.sent,e.abrupt("return",n?JSON.parse(n):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){var n,a=null===(n=e.target)||void 0===n?void 0:n.result;t(a?a.toString():null)},n.readAsText(e)}))}function B(e){return e.messages.map((function(e){var t=e.sender_name,n=e.content,a=e.timestamp_ms;return{sender:Object(f.decode)(t),content:n?Object(f.decode)(n):null,time:a}}))}function F(e){return Object(g.mapValues)(function(e){return Object(g.groupBy)(e,(function(e){return e.sender}))}(e),(function(e){return e.length}))}function K(e){return{DAY:function(e){return Object(h.a)(e).getTime()},WEEK:function(e){return Object(E.a)(e,{weekStartsOn:1}).getTime()},MONTH:function(e){return Object(b.a)(e).getTime()},YEAR:function(e){return Object(p.a)(e).getTime()}}[e]}function _(e,t){return"".concat(Object(k.a)(new Date(e),{DAY:"dd/MM/yyyy",WEEK:"dd/MM/yyyy",MONTH:"MMM yyyy",YEAR:"yyyy"}[t])).concat({DAY:"",WEEK:" week",MONTH:"",YEAR:""}[t])}n(590);var P=n(315),U=(n(154),n(146)),q=n(624);n(368);function I(){}var J=function(e){var t=e.onComplete,n=e.style;return l.a.createElement("div",null,l.a.createElement(P.a,{beforeUpload:function(){var e=Object(d.a)(s.a.mark((function e(n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a,n.uid!==o[o.length-1].uid){e.next=5;break}return e.next=3,x(a);case 3:r=e.sent,t(r);case 5:return e.abrupt("return",Promise.resolve());case 6:case"end":return e.stop()}var o}),e)})));return function(t,n){return e.apply(this,arguments)}}(),customRequest:I,accept:"application/json",multiple:!0,showUploadList:!1},l.a.createElement(U.a,{block:!0,style:n},l.a.createElement(q.a,null)," Upload messages")))},L=(n(439),n(317)),V=n(625),z=o.a.Paragraph,G=o.a.Text,Q=function(e){var t=e.style,n=Object(c.useState)(!1),a=Object(r.a)(n,2),o=a[0],i=a[1];return l.a.createElement("div",null,l.a.createElement(U.a,{type:"link",block:!0,onClick:function(){return i(!0)},style:t},"How does it work",l.a.createElement(V.a,null)),l.a.createElement(L.a,{title:"How does it work",onClose:function(){return i(!1)},visible:o,width:480,footer:l.a.createElement("div",{style:{textAlign:"center"}},"Made with"," ",l.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc99")," ","by"," ",l.a.createElement("a",{href:"https://github.com/oliverviljamaa",target:"_blank",rel:"noopener noreferrer"},"Oliver Viljamaa"),".")},l.a.createElement(z,null,"You need to request your data from Facebook to get the message files needed to use this visualization tool. It's easy and secure, but you may need to wait a bit."),l.a.createElement("ol",null,l.a.createElement("li",null,"Follow"," ",l.a.createElement("a",{href:"https://www.facebook.com/help/212802592074644",target:"_blank",rel:"noopener noreferrer"},"Facebook's guide on how to request a copy of your data"),". Select only ",l.a.createElement(G,{strong:!0},"Messages")," from the categories in the download page. Choose ",l.a.createElement(G,{strong:!0},"Format: JSON")," and ",l.a.createElement(G,{strong:!0},"Media Quality: Low")," and click ",l.a.createElement(G,{strong:!0},"Create File"),"."),l.a.createElement("li",null,"When the file is ready, Facebook will send you an email titled"," ",l.a.createElement(G,{strong:!0},"Your Facebook information file is ready"),". If you have many messages, this may take up to a few days."),l.a.createElement("li",null,"Download the file from the link in the email and extract the zipped file's contents."),l.a.createElement("li",null,"Come back to this site, click ",l.a.createElement(G,{strong:!0},"Upload messages")," and select all the"," ",l.a.createElement(G,{strong:!0},"messages_*.json")," files from any chat folder. You'll find the chat folders in the ",l.a.createElement(G,{strong:!0},"inbox/")," folder in the folder you just extracted."),l.a.createElement("li",null,"Don't worry, your messages are never uploaded anywhere \u2014 the tool is built with privacy in mind and works locally on your computer. To verify this, try loading the page, turning off your internet connection, and uploading some messages: the tool will still work."),l.a.createElement("li",null,"Enjoy and"," ",l.a.createElement("a",{href:"https://forms.gle/Dqn4NC6tRrH1D5qA7",target:"_blank",rel:"noopener noreferrer"},"leave feedback"),"!"))))},$=(n(449),n(214)),X=function(e){var t=e.selected,n=e.onSelect,r=e.disabled,o=e.disabledUnits,c=e.style;return l.a.createElement($.a.Group,{disabled:r,style:c},Object.values(a).map((function(e){return l.a.createElement($.a.Button,{value:e,checked:e===t,onChange:function(e){var t=e.target.value;return n(t)},disabled:o.includes(e),key:e},e)})))},Z=(n(451),n(319)),ee=n(318),te=(n(453),n(304)),ne=(n(455),n(215)),ae=function(e){var t=e.senders,n=e.selected,a=e.onChange,r=e.colors;return l.a.createElement("div",null,l.a.createElement(ne.a,{indeterminate:n.length>0&&n.length<t.length,onChange:function(e){var n=e.target.checked;return a(n?t:[])},checked:n.length===t.length},"All senders"),l.a.createElement(te.a,{style:{margin:"12px 0"}}),t.map((function(e,t){return l.a.createElement(c.Fragment,{key:e},l.a.createElement(ne.a,{onChange:function(t){var r=t.target.checked;return a(r?[].concat(Object(ee.a)(n),[e]):n.filter((function(t){return t!==e})))},checked:n.includes(e)},l.a.createElement(Z.a,{color:r[t%r.length],text:e})),l.a.createElement("br",null))})))},re=(n(457),n(57)),oe=function(){return l.a.createElement(re.a,{image:re.a.PRESENTED_IMAGE_SIMPLE,style:{marginTop:128}})},ce=n(305);function le(e){return e.length>20?e.filter((function(t,n){return n%Math.floor(e.length/20)===0})).map((function(e){return e.id})):void 0}var ie=function(e){var t=e.senders,n=e.data,a=e.colors;return l.a.createElement("div",{style:{height:640}},l.a.createElement(ce.a,{data:n,keys:t,colors:a,margin:{top:48,right:48,bottom:96,left:72},enableLabel:!1,axisBottom:{tickPadding:8,tickRotation:-45,tickValues:le(n)},animate:!1}))},se=["#dc3f66","#67be40","#a859ce","#3fc06f","#d246a2","#4f8c28","#616cdc","#b8b939","#5861a9","#de9230","#4c96d0","#d1512e","#47c3d7","#a9484b","#65c59e","#944e98","#85bd67","#cf87d1","#44894d","#9594de","#918724","#a04a72","#31957f","#e383a2","#2a6a45","#e3876d","#9fab64","#9e622c","#696b2b","#d1a563"],ue=o.a.Title;function me(e){return Object.values(a).filter((function(t){return e.messages[t].length>500}))}t.a=function(){var e=Object(c.useState)(D),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(n.senders),s=Object(r.a)(i,2),u=s[0],m=s[1],d=Object(c.useState)(a.MONTH),f=Object(r.a)(d,2),g=f[0],h=f[1],E=n.senders,b=n.messages[g];return l.a.createElement("main",{style:{padding:32}},l.a.createElement(ue,null,"Messenger stats"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(Q,null),l.a.createElement(J,{onComplete:function(e){m(e.senders),o(e)},style:{marginBottom:24}}),l.a.createElement(X,{selected:g,onSelect:h,disabled:n===D,disabledUnits:me(n),style:{marginBottom:24}}),E.length>0&&l.a.createElement(ae,{senders:E,selected:u,onChange:m,colors:se})),l.a.createElement("div",{style:{flex:1}},n===D?l.a.createElement(oe,null):l.a.createElement(ie,{senders:u,data:b,colors:se}))))}},354:function(e,t,n){e.exports=n(355)},355:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(12),o=n.n(r),c=(n(361),n(314)),l=n(316),i=n(313),s=Object(c.hot)(e)(l.a);o.a.render(a.a.createElement(s,null),document.getElementById("root")),i.a()}.call(this,n(356)(e))},361:function(e,t,n){},368:function(e,t,n){}},[[354,1,2]]]);
//# sourceMappingURL=main.5803c41c.chunk.js.map