(this["webpackJsonpmessenger-stats"]=this["webpackJsonpmessenger-stats"]||[]).push([[0],{303:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},307:function(e,t,n){"use strict";var r,a=n(27),u=(n(569),n(306)),c=n(1),i=n.n(c),o=n(44),s=n.n(o),l=n(136),f=n(192),m=n(89),d=n(193),p=n(92),b=n(586),E=n(194),O=n(587),g=n(588),v=n(589),h=n(604),y=n(590),j=n(591),w=n(600);!function(e){e.DAY="DAY",e.WEEK="WEEK",e.MONTH="MONTH",e.YEAR="YEAR"}(r||(r={}));var M=r.DAY,A=r.WEEK,k=r.MONTH,T=r.YEAR;function Y(e){return R.apply(this,arguments)}function R(){return(R=Object(m.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(t).map(W),e.next=3,Promise.all(n);case 3:return r=e.sent.flat(),e.abrupt("return",x(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={DAY:[],WEEK:[],MONTH:[],YEAR:[]};function x(e){return{DAY:P(e,M),WEEK:P(e,A),MONTH:P(e,k),YEAR:P(e,T)}}function W(e){return D.apply(this,arguments)}function D(){return(D=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:return n=e.sent,e.abrupt("return",n?B(n):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:return n=e.sent,e.abrupt("return",n?JSON.parse(n):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r?r.toString():null)},n.readAsText(e)}))}function B(e){return e.messages.map((function(e){var t=e.sender_name,n=e.content,r=e.timestamp_ms;return{sender:Object(d.decode)(t),content:n?Object(d.decode)(n):null,time:r}}))}function P(e,t){var n=Object(p.sortBy)(e,"time"),r=function(e){return Object(p.orderBy)(Object.entries(U(e)).map((function(e){var t=Object(a.a)(e,2);return{sender:t[0],numberOfMessages:t[1]}})),"numberOfMessages","desc").map((function(e){return e.sender}))}(n);return function(e,t){var n=function(e,t){return Object(p.groupBy)(e,(function(e){var n=e.time;return _(t)(n)}))}(e,t);return function(e,t){if(0===e.length)return function(){return[]};var n=e[0].time,r=e[e.length-1].time,a=_(t)(n),u=r;return{DAY:function(){return Object(v.a)({start:a,end:u})},WEEK:function(){return Object(h.a)({start:a,end:u},{weekStartsOn:1})},MONTH:function(){return Object(y.a)({start:a,end:u})},YEAR:function(){return Object(j.a)({start:a,end:u})}}[t]}(e,t)().map((function(e){return{time:e.getTime(),messages:n[e.getTime()]||[]}}))}(n,t).map((function(e){var n=e.time,a=U(e.messages);return Object(f.a)({id:C(Number(n),t)},r.reduce((function(e,t){return Object(f.a)({},e,Object(l.a)({},t,a[t]||0))}),{}))}))}function U(e){return Object(p.mapValues)(function(e){return Object(p.groupBy)(e,(function(e){return e.sender}))}(e),(function(e){return e.length}))}function _(e){return{DAY:function(e){return Object(b.a)(e).getTime()},WEEK:function(e){return Object(E.a)(e,{weekStartsOn:1}).getTime()},MONTH:function(e){return Object(O.a)(e).getTime()},YEAR:function(e){return Object(g.a)(e).getTime()}}[e]}function C(e,t){return"".concat(Object(w.a)(new Date(e),{DAY:"dd/MM/yyyy",WEEK:"dd/MM/yyyy",MONTH:"MMM yyyy",YEAR:"yyyy"}[t])).concat({DAY:"",WEEK:" week",MONTH:"",YEAR:""}[t])}n(570);var I=n(305),J=(n(210),n(308)),L=n(602);function F(){}var G=function(e){var t=e.onComplete,n=e.style;return i.a.createElement(I.a,{beforeUpload:function(){var e=Object(m.a)(s.a.mark((function e(n,r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=r,n.uid!==u[u.length-1].uid){e.next=5;break}return e.next=3,Y(r);case 3:a=e.sent,t(a);case 5:return e.abrupt("return",Promise.resolve());case 6:case"end":return e.stop()}var u}),e)})));return function(t,n){return e.apply(this,arguments)}}(),customRequest:F,accept:"application/json",multiple:!0,showUploadList:!1},i.a.createElement(J.a,{style:n},i.a.createElement(L.a,null)," Upload messages"))},V=(n(426),n(205)),q=function(e){var t=e.selected,n=e.onSelect,a=e.disabled,u=e.disabledUnits;return i.a.createElement(V.a.Group,{disabled:a},Object.values(r).map((function(e){return i.a.createElement(V.a.Button,{value:e,checked:e===t,onChange:function(e){var t=e.target.value;return n(t)},disabled:u.includes(e),key:e},e)})))},X=(n(428),n(54)),$=function(){return i.a.createElement(X.a,{image:X.a.PRESENTED_IMAGE_SIMPLE,style:{marginTop:128}})},z=n(289);function Q(e){return e.length>20?e.filter((function(t,n){return n%Math.floor(e.length/20)===0})).map((function(e){return e.id})):void 0}var Z=function(e){var t=e.data;return i.a.createElement("div",{style:{height:640}},i.a.createElement(z.a,{data:t,keys:t.length>0?Object.keys(t[0]).filter((function(e){return"id"!==e})):[],margin:{top:48,right:256,bottom:96,left:48},enableLabel:!1,axisBottom:{tickPadding:8,tickRotation:-45,tickValues:Q(t)},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",translateX:128,itemWidth:128,itemHeight:20}],animate:!1}))},ee=u.a.Title;function te(e){return Object.values(r).filter((function(t){return e[t].length>500}))}t.a=function(){var e=Object(c.useState)(N),t=Object(a.a)(e,2),n=t[0],u=t[1],o=Object(c.useState)(r.MONTH),s=Object(a.a)(o,2),l=s[0],f=s[1],m=n[l];return i.a.createElement("main",{style:{padding:32}},i.a.createElement(ee,null,"Messenger stats"),i.a.createElement(G,{onComplete:u,style:{marginRight:16}}),i.a.createElement(q,{selected:l,onSelect:f,disabled:n===N,disabledUnits:te(n)}),n===N?i.a.createElement($,null):i.a.createElement(Z,{data:m}))}},342:function(e,t,n){e.exports=n(343)},343:function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),r=n.n(t),a=n(13),u=n.n(a),c=(n(349),n(304)),i=n(307),o=n(303),s=Object(c.hot)(e)(i.a);u.a.render(r.a.createElement(s,null),document.getElementById("root")),o.a()}.call(this,n(344)(e))},349:function(e,t,n){}},[[342,1,2]]]);
//# sourceMappingURL=main.f3ed7759.chunk.js.map