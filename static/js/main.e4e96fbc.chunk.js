(this.webpackJsonpantipodes=this.webpackJsonpantipodes||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),l=t(5),i=t.n(l),a=(t(13),t(14),t(15),t(3)),c=t.n(a),s=t(19),u=t(20),d=t(21),g=t(1),p={lat:51.505,lng:-.09},f=null,h="50._7_30",j="__.1_203",v=null;function b(){return f=Object(s.a)(),v=c.a.layerGroup([]),document.getElementById("lat").setAttribute("value",h),document.getElementById("long").setAttribute("value",j),null}function m(e){for(var n=e.split(""),t=n.map((function(e){return"_"===e})),o=[""],r=0;o[0].length<7;){if(t[r])for(var l=o.length,i=0;i<l;i++){for(var a=1;a<10;a++){var c=o[i].split("").join("");o.push(c+a)}o[i]+="0"}else for(var s=0;s<o.length;s++)o[s]+=n[r];r++}return o}function O(){if(v&&v.clearLayers(),h.match("[0-9._]{7}"))if(j.match("[0-9_]{2}\\.[0-9_]{5}")){var e=h.replace(".",""),n=j.replace(".",""),t=m(e),o=m(n);t=t.filter((function(e){return e.slice(0,2)<56&&e.slice(0,2)>46})).map((function(e){return e.slice(0,2)+"."+e.slice(2)})),o=o.filter((function(e){return e.slice(0,2)<16&&e.slice(0,2)>4})).map((function(e){return e.slice(0,2)+"."+e.slice(2)})),console.log(t),console.log(o);for(var r=[],l=0;l<t.length;l++)for(var i=0;i<o.length;i++){var a=new c.a.latLng(t[l],o[i]);r.push(a)}console.log("# of locations: "+r.length);var s=c.a.canvas();r.forEach((function(e){v.addLayer(new c.a.circleMarker(e,{fillColor:"#ff0000",color:"#000000",renderer:s,weight:1}).bindPopup("["+e.lat+", "+e.lng+"]").on("mouseover",(function(e){this.openPopup()}))),v.addTo(f)}))}else console.log("invalid longitude");else console.log("invalid latitude")}function x(e){h=e.target.value}function y(e){j=e.target.value}var C=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{className:"inputs",children:["Breitegrad:",Object(g.jsx)("input",{id:"lat",onChange:x}),"L\xe4ngengrad:",Object(g.jsx)("input",{id:"long",onChange:y}),Object(g.jsx)("button",{onClick:O,children:"Marker anzeigen"})]}),Object(g.jsx)("div",{className:"maps-container",children:Object(g.jsx)("div",{className:"leaflet-container",children:Object(g.jsxs)(u.a,{center:p,zoom:3,doubleClickZoom:!1,worldCopyJump:!0,children:[Object(g.jsx)(b,{}),Object(g.jsx)(d.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,l=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),l(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),_()}},[[17,1,2]]]);
//# sourceMappingURL=main.e4e96fbc.chunk.js.map