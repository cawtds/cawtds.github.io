(this.webpackJsonploactionguesser=this.webpackJsonploactionguesser||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),l=t(5),a=t.n(l),i=(t(13),t(14),t(15),t(3)),c=t.n(i),s=t(19),u=t(20),d=t(21),g=t(1),h={lat:51.505,lng:-.09},f=null,p="50._796_",v="__.4_2_3",m=null;function j(){return f=Object(s.a)(),m=c.a.layerGroup([]),document.getElementById("lat").setAttribute("value",p),document.getElementById("long").setAttribute("value",v),null}function b(){var e=Date.now();m.clearLayers();var n=document.getElementById("resulttext");if(!p.match("^[0-9_]+\\.[0-9_]+$"))return console.log("invalid latitude"),n.hidden=!1,n.style="color: red;",void(n.innerHTML="Invalider Breitengrad");if(!v.match("^[0-9_]+\\.[0-9_]+$"))return console.log("invalid longitude"),n.hidden=!1,n.style="color: red;",void(n.innerHTML="Invalider L\xe4ngengrad");var t=p.indexOf("."),r=v.indexOf("."),o=p.replace(".",""),l=v.replace(".",""),a=x(o),i=x(l),s=Date.now();console.log("get lat/long: "+(s-e)+"ms"),a=a.map((function(e){return e.slice(Math.min(O(e),t),t)+"."+e.slice(t)})).filter((function(e){return e<55.4&&e>47.270108})),i=i.map((function(e){return e.slice(Math.min(O(e),r),r)+"."+e.slice(r)})).filter((function(e){return e<15.033334&&e>5.866666}));for(var u=[],d=0;d<a.length;d++)for(var g=0;g<i.length;g++){var h=new c.a.latLng(a[d],i[g]);u.push(h)}var j=Date.now();console.log("get locations: "+(j-s)+"ms"),console.log("# of locations: "+u.length),u.length>1e5?(n.innerHTML=u.length+" m\xf6gliche Orte gefunden. Es werden nur 100000 angezeigt.",n.style="color: orange;"):(n.innerHTML=u.length+" m\xf6gliche Orte gefunden",n.style="color: green;"),n.hidden=!1;for(var b=c.a.canvas(),y=0;y<Math.min(u.length,1e5);y++){var w=u[y];m.addLayer(new c.a.circleMarker(w,{fillColor:"#ff0000",color:"#000000",renderer:b,weight:1}).bindPopup("["+w.lat+", "+w.lng+"]").on("mouseover",(function(e){this.openPopup()}))),m.addTo(f)}var L=Date.now();console.log("add markers: "+(L-j)+"ms")}function O(e){var n=0;if(e.length<=0)return 0;for(;e.length>0&&e.startsWith("0");)e=e.slice(1,e.length),n++;return n}function x(e){for(var n=e.split(""),t=n.map((function(e){return"_"===e})),r=[""],o=0;r[0].length<e.length;){if(t[o])for(var l=r.length,a=0;a<l;a++){for(var i=1;i<10;i++){var c=r[a].split("").join("");r.push(c+i)}r[a]+="0"}else for(var s=0;s<r.length;s++)r[s]+=n[o];o++}return r}function y(e){p=e.target.value}function w(e){v=e.target.value}var L=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"inputs",children:[Object(g.jsx)("span",{children:"Breitengrad:"}),Object(g.jsx)("input",{className:"input",id:"lat",onChange:y}),Object(g.jsx)("span",{children:"L\xe4ngengrad:"}),Object(g.jsx)("input",{id:"long",onChange:w}),Object(g.jsx)("button",{onClick:b,children:"Marker anzeigen"}),Object(g.jsx)("span",{id:"resulttext",hidden:!0})]}),Object(g.jsx)("div",{className:"maps-container",children:Object(g.jsx)("div",{className:"leaflet-container",children:Object(g.jsxs)(u.a,{center:h,zoom:3,doubleClickZoom:!1,worldCopyJump:!0,children:[Object(g.jsx)(j,{}),Object(g.jsx)(d.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,l=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),l(e),a(e)}))};a.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),M()}},[[17,1,2]]]);
//# sourceMappingURL=main.f45d46c7.chunk.js.map