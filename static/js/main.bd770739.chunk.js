(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),c=a.n(o),i=(a(22),a(4)),u=a(1),r=a(3),s=(a(23),a(5)),m=a.n(s);a(41);function d(e){var t=e.updateSchool,a=e.updateClicked,o=e.setUpdateClicked,c=e.schoolInfo,i=c.id,s=c.name,m=c.about,d=c.location,p=c.admission,f=c.image_url,h=Object(n.useState)({name:"",about:"",location:"",admission:"",image_url:""}),b=Object(r.a)(h,2),E=b[0],v=b[1];return Object(n.useEffect)((function(){v(Object(u.a)({},E,{name:s,about:m,location:d,admission:p,image_url:f}))}),[]),l.a.createElement("div",{className:"update-school-form"},l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Name"),l.a.createElement("input",{value:E.name,onChange:function(e){return v(Object(u.a)({},E,{name:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Description"),l.a.createElement("input",{value:E.about,onChange:function(e){return v(Object(u.a)({},E,{about:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Location"),l.a.createElement("input",{value:E.location,onChange:function(e){return v(Object(u.a)({},E,{location:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"Admission Requirements"),l.a.createElement("input",{value:E.admission,onChange:function(e){return v(Object(u.a)({},E,{admission:e.target.value}))}})),l.a.createElement("div",null,l.a.createElement("p",null,"Update School Picture"),l.a.createElement("input",{type:"file",name:"image",onChange:function(e){return v(Object(u.a)({},E,{image_url:e.target.files[0]}))}})),l.a.createElement("div",{className:"buttons-update"},l.a.createElement("button",{className:"save-button",type:"submit",onClick:function(){Object.values(E).includes("")||Object.values(E).includes(null)?alert("Please fill out all fields!"):(t(E,i),o(!a))}},"Save"),l.a.createElement("button",{className:"close",onClick:function(){return o(!a)}},"X")))}a(42);function p(e){var t=e.updateSchool,a=e.schoolInfo,o=e.schoolInfo,c=o.name,i=o.about,u=o.location,s=o.admission,m=o.image_url,p=Object(n.useState)(!1),f=Object(r.a)(p,2),h=f[0],b=f[1],E=Object(n.useState)(!1),v=Object(r.a)(E,2),g=v[0],j=v[1];return l.a.createElement("div",null,l.a.createElement("div",{style:{display:h?"none":"flex"},onClick:function(){return j(!g)},className:"school-listing"},l.a.createElement("img",{src:m,style:{width:"120px",height:"100px"}}),l.a.createElement("div",{className:"school-info"},l.a.createElement("div",{className:"school-unclicked"},l.a.createElement("div",{style:{fontWeight:"bolder"}},c)),l.a.createElement("div",{className:"school-clicked",style:{display:g?"flex":"none"}},l.a.createElement("div",{className:"school-clicked-info"},l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bolder"}},"About:")," ",i),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bolder"}},"Location:")," ",u),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bolder"}},"Admission Requirements:")," ",s)),l.a.createElement("button",{className:"school-update-button",onClick:function(){return b(!h)}},"Update")))),l.a.createElement("div",{className:"update-form",style:{display:h?"flex":"none"}},l.a.createElement(d,{schoolInfo:a,updateSchool:t,updateClicked:h,setUpdateClicked:b})))}a(43);function f(e){var t=e.handleAdd,a=Object(n.useState)({name:"",about:"",location:"",admission:"",image_url:""}),o=Object(r.a)(a,2),c=o[0],i=o[1];return l.a.createElement("div",{className:"add-school-form"},l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Name"),l.a.createElement("input",{value:c.name,onChange:function(e){return i(Object(u.a)({},c,{name:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Description"),l.a.createElement("input",{value:c.about,onChange:function(e){return i(Object(u.a)({},c,{about:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"School Location"),l.a.createElement("input",{value:c.location,onChange:function(e){return i(Object(u.a)({},c,{location:e.target.value}))}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("p",null,"Admission Requirements"),l.a.createElement("input",{value:c.admission,onChange:function(e){return i(Object(u.a)({},c,{admission:e.target.value}))}})),l.a.createElement("div",null,l.a.createElement("p",null,"Upload School Picture"),l.a.createElement("input",{type:"file",name:"image",onChange:function(e){return i(Object(u.a)({},c,{image_url:e.target.files[0]}))}})),l.a.createElement("button",{onClick:function(){Object.values(c).includes("")?alert("Please fll out all fields"):(t(c),i(Object(u.a)({},c,{name:"",about:"",location:"",admission:"",image_url:""})))}},"Add"))}var h=a(6),b=a.n(h);var E=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),s=Object(r.a)(c,2),d=s[0],h=s[1],E=Object(n.useState)(!1),v=Object(r.a)(E,2),g=v[0],j=v[1];Object(n.useEffect)((function(){m.a.get("https://cryptic-harbor-64765.herokuapp.com/").then((function(e){var t=e.data.rows.reduce((function(e,t){return Object(u.a)({},e,Object(i.a)({},t.id,{id:t.id,name:t.name,about:t.about,location:t.location,admission:t.admission,image_url:t.image_url}))}),{});o(t)}))}),[d]);var O=function(e,t){var a=e.name,n=e.about,l=e.location,o=e.admission,c=e.image_url,i=b()(a,n,l,o,c);m.a.put("https://cryptic-harbor-64765.herokuapp.com/school/update/".concat(t),i).then((function(){h(!d)}))};return console.log(a),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"Dynamic School List"),l.a.createElement("h4",null,"Home")),l.a.createElement("div",{className:"all-schools"},l.a.createElement("h3",null,"List of Schools"),l.a.createElement("div",{className:"add-school-div"},l.a.createElement("button",{className:"add-school-button",onClick:function(){return j(!g)}},"Add School ",l.a.createElement("span",null,"+")),l.a.createElement("div",{style:{display:g?"block":"none"}},l.a.createElement(f,{handleAdd:function(e){var t=e.name,a=e.about,n=e.location,l=e.admission,o=e.image_url,c=b()(t,a,n,l,o);m.a.post("https://cryptic-harbor-64765.herokuapp.com/school/add",c).then((function(){h(!d),j(!g)}))}}))),l.a.createElement("div",{className:"school-list"},Object.values(a).map((function(e){return l.a.createElement(p,{key:e.id,schoolInfo:e,updateSchool:O})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t){e.exports=function(e,t,a,n,l){var o=new FormData;return o.append("name",e),o.append("about",t),o.append("location",a),o.append("admission",n),o.append("image",l),o}}},[[17,1,2]]]);
//# sourceMappingURL=main.bd770739.chunk.js.map