(this.webpackJsonploactionguesser=this.webpackJsonploactionguesser||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),l=t(5),o=t.n(l),a=(t(13),t(14),t(15),t(3)),c=t.n(a),s=t(19),u=t(20),d=t(21),g=t(1),h={lat:51.505,lng:-.09},f=null,p="50._7_30",j="__.1_203",v=null;function m(){return f=Object(s.a)(),v=c.a.layerGroup([]),document.getElementById("lat").setAttribute("value",p),document.getElementById("long").setAttribute("value",j),null}function b(){v.clearLayers();var e=document.getElementById("resulttext");if(!p.match("^[0-9_]+\\.[0-9_]+$"))return console.log("invalid latitude"),e.hidden=!1,e.style="color: red;",void(e.innerHTML="Invalider Breitengrad");if(!j.match("^[0-9_]+\\.[0-9_]+$"))return console.log("invalid longitude"),e.hidden=!1,e.style="color: red;",void(e.innerHTML="Invalider L\xe4ngengrad");var n=p.indexOf("."),t=j.indexOf("."),r=p.replace(".",""),i=j.replace(".",""),l=x(r),o=x(i);l=l.map((function(e){return e.slice(Math.min(O(e),n),n)+"."+e.slice(n)})).filter((function(e){return e<55.4&&e>47.270108})),o=o.map((function(e){return e.slice(Math.min(O(e),t),t)+"."+e.slice(t)})).filter((function(e){return e<15.033334&&e>5.866666}));for(var a=[],s=0;s<l.length;s++)for(var u=0;u<o.length;u++){var d=new c.a.latLng(l[s],o[u]);a.push(d)}console.log("# of locations: "+a.length),a.length>1e5?(e.innerHTML=a.length+" m\xf6gliche Orte gefunden. Es werden nur 100000 angezeigt.",e.style="color: orange;"):(e.innerHTML=a.length+" m\xf6gliche Orte gefunden",e.style="color: green;"),e.hidden=!1;for(var g=c.a.canvas(),h=0;h<Math.min(a.length,1e5);h++){var m=a[h];v.addLayer(new c.a.circleMarker(m,{fillColor:"#ff0000",color:"#000000",renderer:g,weight:1}).bindPopup("["+m.lat+", "+m.lng+"]").on("mouseover",(function(e){this.openPopup()}))),v.addTo(f)}}function O(e){var n=0;if(e.length<=0)return 0;for(;e.length>0&&e.startsWith("0");)e=e.slice(1,e.length),n++;return n}function x(e){for(var n=e.split(""),t=n.map((function(e){return"_"===e})),r=[""],i=0;r[0].length<e.length;){if(t[i])for(var l=r.length,o=0;o<l;o++){for(var a=1;a<10;a++){var c=r[o].split("").join("");r.push(c+a)}r[o]+="0"}else for(var s=0;s<r.length;s++)r[s]+=n[i];i++}return r}function y(e){p=e.target.value}function L(e){j=e.target.value}var M=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"inputs",children:[Object(g.jsx)("span",{children:"Breitengrad:"}),Object(g.jsx)("input",{className:"input",id:"lat",onChange:y}),Object(g.jsx)("span",{children:"L\xe4ngengrad:"}),Object(g.jsx)("input",{id:"long",onChange:L}),Object(g.jsx)("button",{onClick:b,children:"Marker anzeigen"}),Object(g.jsx)("span",{id:"resulttext",hidden:!0})]}),Object(g.jsx)("div",{className:"maps-container",children:Object(g.jsx)("div",{className:"leaflet-container",children:Object(g.jsxs)(u.a,{center:h,zoom:3,doubleClickZoom:!1,worldCopyJump:!0,children:[Object(g.jsx)(m,{}),Object(g.jsx)(d.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,l=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),l(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),_()}},[[17,1,2]]]);
//# sourceMappingURL=main.8dc90757.chunk.js.map