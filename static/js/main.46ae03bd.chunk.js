(this.webpackJsonpkuvera=this.webpackJsonpkuvera||[]).push([[0],{367:function(e,t,a){e.exports=a(484)},372:function(e,t,a){},373:function(e,t,a){},483:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(372),a(177)),u=a(28),s=(a(373),a(351)),i=a(122),m=a.n(i),f=a(178),p=a(82),d=a(348),y=a(352),E=a.n(y),b=a(197),g=a.n(b);var v=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),i=o[0],y=o[1],b=Object(n.useState)([]),v=Object(p.a)(b,2),h=v[0],j=v[1],O=Object(u.f)(),_=Object(n.useState)({}),k=Object(p.a)(_,2),S=k[0],w=k[1],z=Object(n.useState)({}),x=Object(p.a)(z,2),A=x[0],F=x[1],N=Object(n.useState)({}),C=Object(p.a)(N,2),B=C[0],J=C[1];return Object(n.useEffect)((function(){c(!0),function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.kuvera.in/api/v3/funds.json");case 2:t=e.sent,j(t.data),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(n.useEffect)((function(){var e=[];h.forEach((function(t){e.push({name:t.name,category:t.fund_category,type:t.fund_type,plan:t.plan,year_1_return:t.returns.year_1,year_3_return:t.returns.year_3,code:t.code})})),y(e);var t,a=[],n=[],r=[],c=Object(s.a)(h);try{for(c.s();!(t=c.n()).done;){var l=t.value;a.includes(l.fund_category)||a.push(l.fund_category),n.includes(l.fund_type)||n.push(l.fund_type),r.includes(l.plan)||r.push(l.plan)}}catch(O){c.e(O)}finally{c.f()}for(var o={},u=0,i=n;u<i.length;u++){var m=i[u];m&&(o[m]=m)}for(var f={},p=0,d=a;p<d.length;p++){var E=d[p];E&&(f[E]=E)}for(var b={},g=0,v=r;g<v.length;g++){var j=v[g];j&&(b[j]=j)}w(f),J(b),F(o)}),[h]),r.a.createElement(E.a,{isLoading:a,title:"Kuvara stocks dashboard",columns:[{title:"Name",field:"name"},{title:"Category",field:"category",lookup:S},{title:"Type",field:"type",lookup:A},{title:"Plan",field:"plan",lookup:B},{title:"Year 1 return",field:"year_1_return",customSort:function(e,t){return parseFloat(e.year_1_return)-parseFloat(t.year_3_return)},filtering:!1},{title:"Year 3 return",field:"year_3_return",customSort:function(e,t){return parseFloat(e.year_3_return)-parseFloat(t.year_3_return)},filtering:!1}],data:i,options:{sorting:!0,pageSize:100,pageSizeOptions:[50,100,200,1e3],headerStyle:{position:"sticky",top:0},maxBodyHeight:"85vh",filtering:!0},components:{Pagination:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:"table_footer"}))}},onRowClick:function(e,t){O.push("/explore/".concat(t.code))}})},h=a(333),j=a(308),O=a(303),_=a(511),k=a(309),S=a(186),w=a(301);a(483);var z=function(){var e=Object(u.g)().fundCode,t=Object(n.useState)({}),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(),s=Object(p.a)(o,2),i=s[0],d=s[1];return Object(n.useEffect)((function(){d(!0),function(){var t=Object(f.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://api.kuvera.in/api/v3/funds/".concat(e,".json"));case 2:a=t.sent,l(a.data[0]),d(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),console.log(c),r.a.createElement("div",{className:"fund-parent"},i?r.a.createElement(w.a,null):r.a.createElement(_.a,{component:S.a},r.a.createElement("h3",null,c.name),r.a.createElement(h.a,{size:"small","aria-label":"a dense table"},r.a.createElement(j.a,null,c&&Object.keys(c).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{key:e},r.a.createElement(O.a,{size:"small",component:"th",scope:"row"},r.a.createElement("b",null,e)),("object"!==typeof c[e]||Array.isArray(c[e])&&"object"!==typeof c[e][0])&&r.a.createElement(O.a,{size:"small"},c[e].toString())),"object"===typeof c[e]&&!Array.isArray(c[e])&&r.a.createElement(r.a.Fragment,null,c[e]&&Object.keys(c[e]).map((function(t){return r.a.createElement(k.a,null,r.a.createElement(O.a,{size:"small"}),r.a.createElement(O.a,{size:"small"},t.toString()),r.a.createElement(O.a,{className:"small_column",size:"small"},c[e][t].toString()))}))),Array.isArray(c[e])&&"object"===typeof c[e][0]&&c[e].map((function(e){return r.a.createElement(k.a,null,r.a.createElement(O.a,{className:"small_column",size:"small"}),e&&Object.keys(e).map((function(t){return r.a.createElement(k.a,null,r.a.createElement(O.a,{size:"small"}),r.a.createElement(O.a,{size:"small"},t.toString()),r.a.createElement(O.a,{size:"small",align:"left"},e[t].toString()))})))})))}))))))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(u.a,{exact:!0,path:"/explore"},r.a.createElement(v,null)),r.a.createElement(u.a,{path:"/explore/:fundCode"},r.a.createElement(z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[367,1,2]]]);
//# sourceMappingURL=main.46ae03bd.chunk.js.map