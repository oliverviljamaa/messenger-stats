(this["webpackJsonpmessenger-stats"]=this["webpackJsonpmessenger-stats"]||[]).push([[0],{310:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},313:function(e,t,n){"use strict";var a,r=n(104),o=n(94),c=(n(363),n(318)),l=(n(229),n(315)),i=(n(367),n(223)),u=(n(368),n(319)),s=n(40),m=(n(230),n(129)),d=n(0),f=n.n(d),b=n(65),g=n.n(b),h=n(108),p=n(208),E=n(113),y=n(597),v=n(209),O=n(598),j=n(599),w=n(600),k=n(614),M=n(601),x=n(602),A=n(611);!function(e){e.DAY="DAY",e.WEEK="WEEK",e.MONTH="MONTH",e.YEAR="YEAR"}(a||(a={}));var T=a.DAY,S=a.WEEK,Y=a.MONTH,C=a.YEAR;function D(e){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(t).map(B),e.next=3,Promise.all(n);case 3:return a=e.sent.flat(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=function(e){return Object(E.sortBy)(e,"time")}(e),n=function(e){return Object(E.orderBy)(Object.entries(P(e)).map((function(e){var t=Object(s.a)(e,2);return{sender:t[0],numberOfMessages:t[1]}})),"numberOfMessages","desc").map((function(e){return e.sender}))}(e),a=function(e){return function(e,t,n){return function(e,t){var n=function(e,t){return Object(E.groupBy)(e,(function(e){var n=e.time;return L(t)(n)}))}(e,t);return function(e,t){if(0===e.length)return function(){return[]};var n=e[0].time,a=e[e.length-1].time,r=L(t)(n),o=a;return{DAY:function(){return Object(w.a)({start:r,end:o})},WEEK:function(){return Object(k.a)({start:r,end:o},{weekStartsOn:1})},MONTH:function(){return Object(M.a)({start:r,end:o})},YEAR:function(){return Object(x.a)({start:r,end:o})}}[t]}(e,t)().map((function(e){return{time:e.getTime(),messages:n[e.getTime()]||[]}}))}(e,t).map((function(e){var a=e.time,c=P(e.messages);return Object(o.a)({id:U(Number(a),t)},n.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t,c[t]||0))}),{}))}))}(t,e,n)};return{senders:n,numberOfMessages:{DAY:a(T),WEEK:a(S),MONTH:a(Y),YEAR:a(C)}}}function B(e){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:return n=e.sent,e.abrupt("return",n?_(n):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return F.apply(this,arguments)}function F(){return(F=Object(h.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:return n=e.sent,e.abrupt("return",n?JSON.parse(n):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){var n,a=null===(n=e.target)||void 0===n?void 0:n.result;t(a?a.toString():null)},n.readAsText(e)}))}function _(e){return e.messages.map((function(e){var t=e.sender_name,n=e.content,a=e.timestamp_ms;return{sender:Object(p.decode)(t),content:n?Object(p.decode)(n):null,time:a}}))}function P(e){return Object(E.mapValues)(function(e){return Object(E.groupBy)(e,(function(e){return e.sender}))}(e),(function(e){return e.length}))}function L(e){return{DAY:function(e){return Object(y.a)(e).getTime()},WEEK:function(e){return Object(v.a)(e,{weekStartsOn:1}).getTime()},MONTH:function(e){return Object(O.a)(e).getTime()},YEAR:function(e){return Object(j.a)(e).getTime()}}[e]}function U(e,t){return"".concat(Object(A.a)(new Date(e),{DAY:"dd/MM/yyyy",WEEK:"dd/MM/yyyy",MONTH:"MMM yyyy",YEAR:"yyyy"}[t])).concat({DAY:"",WEEK:" week",MONTH:"",YEAR:""}[t])}n(582);var q=n(312),I=(n(134),n(62)),J=n(616);n(374);function z(){}var V=function(e){var t=e.onComplete,n=e.style;return f.a.createElement("div",null,f.a.createElement(q.a,{beforeUpload:function(){var e=Object(h.a)(g.a.mark((function e(n,a){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a,n.uid!==o[o.length-1].uid){e.next=5;break}return e.next=3,D(a);case 3:r=e.sent,t(r);case 5:return e.abrupt("return",Promise.resolve());case 6:case"end":return e.stop()}var o}),e)})));return function(t,n){return e.apply(this,arguments)}}(),customRequest:z,accept:"application/json",multiple:!0,showUploadList:!1},f.a.createElement(I.a,{block:!0,style:n},f.a.createElement(J.a,null)," Upload messages")))},G=(n(413),n(314)),Q=n(617),$=m.a.Paragraph,X=m.a.Text,Z=function(e){var t=e.style,n=Object(d.useState)(!1),a=Object(s.a)(n,2),r=a[0],o=a[1];return f.a.createElement("div",null,f.a.createElement(I.a,{type:"link",block:!0,onClick:function(){return o(!0)},style:t},"How does it work",f.a.createElement(Q.a,null)),f.a.createElement(G.a,{title:"How does it work",onClose:function(){return o(!1)},visible:r,width:Math.min(window.innerWidth,480),footer:f.a.createElement("div",{style:{textAlign:"center"}},"Made with"," ",f.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc99")," ","by"," ",f.a.createElement("a",{href:"https://github.com/oliverviljamaa",target:"_blank",rel:"noopener noreferrer"},"Oliver Viljamaa"),".")},f.a.createElement($,null,"You need to request your data from Facebook to get the message files needed to use this visualization tool. It's easy and secure, but you may need to wait a bit."),f.a.createElement("ol",null,f.a.createElement("li",null,"Follow"," ",f.a.createElement("a",{href:"https://www.facebook.com/help/212802592074644",target:"_blank",rel:"noopener noreferrer"},"Facebook's guide on how to request a copy of your data"),". Select only ",f.a.createElement(X,{strong:!0},"Messages")," from the categories in the download page. Choose ",f.a.createElement(X,{strong:!0},"Format: JSON")," and ",f.a.createElement(X,{strong:!0},"Media Quality: Low")," and click ",f.a.createElement(X,{strong:!0},"Create File"),"."),f.a.createElement("li",null,"When the file is ready, Facebook will send you an email titled"," ",f.a.createElement(X,{strong:!0},"Your Facebook information file is ready"),". If you have many messages, this may take up to a few days."),f.a.createElement("li",null,"Download the file from the link in the email and extract the zipped file's contents."),f.a.createElement("li",null,"Come back to this site, click ",f.a.createElement(X,{strong:!0},"Upload messages")," and select all the"," ",f.a.createElement(X,{strong:!0},"messages_*.json")," files from any chat folder. You'll find the chat folders in the ",f.a.createElement(X,{strong:!0},"inbox/")," folder in the folder you just extracted."),f.a.createElement("li",null,"Don't worry, your messages are never uploaded anywhere \u2014 the tool is built with privacy in mind and works locally on your computer. To verify this, try loading the page, turning off your internet connection, and uploading some messages: the tool will still work."),f.a.createElement("li",null,"Enjoy and"," ",f.a.createElement("a",{href:"https://forms.gle/Dqn4NC6tRrH1D5qA7",target:"_blank",rel:"noopener noreferrer"},"leave feedback"),"!"))))},ee=(n(434),n(221)),te=function(e){var t=e.selected,n=e.onSelect,r=e.disabled,o=e.disabledUnits,c=e.style;return f.a.createElement(ee.a.Group,{disabled:r,style:c},Object.values(a).map((function(e){return f.a.createElement(ee.a.Button,{value:e,checked:e===t,onChange:function(e){var t=e.target.value;return n(t)},disabled:o.includes(e),key:e},e)})))},ne=(n(436),n(317)),ae=n(316),re=(n(438),n(300)),oe=(n(440),n(222)),ce=function(e){var t=e.senders,n=e.selected,a=e.onChange,r=e.colorMap;return f.a.createElement("div",null,f.a.createElement(oe.a,{indeterminate:n.length>0&&n.length<t.length,onChange:function(e){var n=e.target.checked;return a(n?t:[])},checked:n.length===t.length},"All senders"),f.a.createElement(re.a,{style:{margin:"12px 0"}}),t.map((function(e){return f.a.createElement(d.Fragment,{key:e},f.a.createElement(oe.a,{onChange:function(t){var r=t.target.checked;return a(r?[].concat(Object(ae.a)(n),[e]):n.filter((function(t){return t!==e})))},checked:n.includes(e)},f.a.createElement(ne.a,{color:r[e],text:e})),f.a.createElement("br",null))})))},le=(n(442),n(76)),ie=function(){return f.a.createElement(le.a,{image:le.a.PRESENTED_IMAGE_SIMPLE,style:{marginTop:128}})},ue=n(301);function se(e){return e.length>20?e.filter((function(t,n){return n%Math.floor(e.length/20)===0})).map((function(e){return e.id})):void 0}var me=function(e){var t=e.senders,n=e.data,a=e.colorMap;return f.a.createElement("div",{style:{height:640}},f.a.createElement(ue.a,{data:n,keys:t,colors:t.map((function(e){return a[e]})),margin:{top:48,right:48,bottom:96,left:72},enableLabel:!1,axisBottom:{tickPadding:8,tickRotation:-45,tickValues:se(n)},animate:!1}))},de=["#dc3f66","#67be40","#a859ce","#3fc06f","#d246a2","#4f8c28","#616cdc","#b8b939","#5861a9","#de9230","#4c96d0","#d1512e","#47c3d7","#a9484b","#65c59e","#944e98","#85bd67","#cf87d1","#44894d","#9594de","#918724","#a04a72","#31957f","#e383a2","#2a6a45","#e3876d","#9fab64","#9e622c","#696b2b","#d1a563"],fe=m.a.Title;function be(e){return Object.values(a).filter((function(t){return e.numberOfMessages[t].length>500}))}t.a=function(){var e=Object(d.useState)([]),t=Object(s.a)(e,2),n=t[0],m=t[1],b=Object(d.useState)(R(n)),g=Object(s.a)(b,2),h=g[0],p=g[1],E=Object(d.useState)(""),y=Object(s.a)(E,2),v=y[0],O=y[1],j=Object(d.useState)({}),w=Object(s.a)(j,2),k=w[0],M=w[1],x=Object(d.useState)(h.senders),A=Object(s.a)(x,2),T=A[0],S=A[1],Y=Object(d.useState)(a.MONTH),C=Object(s.a)(Y,2),D=C[0],N=C[1],B=h.senders,H=h.numberOfMessages,W=B.length>0,F=H[D];return Object(d.useEffect)((function(){var e=R(v?function(e,t){return e.filter((function(e){var n;return null===(n=e.content)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())}))}(n,v):n);p(e),S(e.senders),M(function(e){return e.senders.reduce((function(e,t,n){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t,de[n%de.length]))}),{})}(e))}),[n,v]),f.a.createElement("main",{style:{padding:32}},f.a.createElement(fe,null,"Messenger stats"),f.a.createElement(c.a,null,f.a.createElement(i.a,{xs:24,lg:0},f.a.createElement(u.a,{message:"To use the visualization tool, please return to this page on a device with a bigger screen, such as your laptop or desktop computer.",type:"warning"})),f.a.createElement(i.a,{xs:0,lg:24},f.a.createElement("div",{style:{display:"flex"}},f.a.createElement("div",null,f.a.createElement(Z,null),f.a.createElement(V,{onComplete:m,style:{marginBottom:24}}),f.a.createElement("div",{style:{marginBottom:24}},f.a.createElement(l.a.Search,{placeholder:"Filter by keyword","aria-label":"Filter by keyword",onSearch:function(e){return O(e)},role:"textbox",enterButton:!0})),f.a.createElement(te,{selected:D,onSelect:N,disabled:!W,disabledUnits:be(h),style:{marginBottom:24}}),B.length>0&&f.a.createElement(ce,{senders:B,selected:T,onChange:S,colorMap:k})),f.a.createElement("div",{style:{flex:1}},W?f.a.createElement(me,{senders:T,data:F,colorMap:k}):f.a.createElement(ie,null))))))}},355:function(e,t,n){e.exports=n(356)},356:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(18),o=n.n(r),c=(n(362),n(311)),l=n(313),i=n(310),u=Object(c.hot)(e)(l.a);o.a.render(a.a.createElement(u,null),document.getElementById("root")),i.a()}.call(this,n(357)(e))},362:function(e,t,n){},374:function(e,t,n){}},[[355,1,2]]]);
//# sourceMappingURL=main.8a0a03f4.chunk.js.map