(this.webpackJsonpantipodes=this.webpackJsonpantipodes||[]).push([[0],{110:function(e,n){},112:function(e,n){},162:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(29),l=t.n(i),c=(t(72),t(73),t(74),t(15)),a=t.n(c),s=t(164),u=t(165),f=t(166),p=t(5),g={lat:51.505,lng:-.09},d=null,h="50._7_30",b="__.1_203",j=null;function v(){return d=Object(s.a)(),j=a.a.layerGroup([]),document.getElementById("lat").setAttribute("value",h),document.getElementById("long").setAttribute("value",b),null}function m(e){for(var n=e.split(""),t=n.map((function(e){return"_"===e})),o=[""],r=0;o[0].length<7;){if(t[r])for(var i=o.length,l=0;l<i;l++){for(var c=1;c<10;c++){var a=o[l].split("").join("");o.push(a+c)}o[l]+="0"}else for(var s=0;s<o.length;s++)o[s]+=n[r];r++}return o}function O(){if(j&&j.clearLayers(),h.match("[0-9._]{7}"))if(b.match("[0-9_]{2}\\.[0-9_]{5}")){var e=h.replace(".",""),n=b.replace(".",""),t=m(e),o=m(n);t=t.filter((function(e){return e.slice(0,2)<56&&e.slice(0,2)>46})).map((function(e){return e.slice(0,2)+"."+e.slice(2)})),o=o.filter((function(e){return e.slice(0,2)<16&&e.slice(0,2)>4})).map((function(e){return e.slice(0,2)+"."+e.slice(2)})),console.log(t),console.log(o);for(var r=[],i=0;i<t.length;i++)for(var l=0;l<o.length;l++){var c=new a.a.latLng(t[i],o[l]);r.push(c)}console.log("# of locations: "+r.length);var s=a.a.canvas();r.forEach((function(e){j.addLayer(new a.a.circleMarker(e,{fillColor:"#ff0000",color:"#000000",renderer:s,weight:1}).bindPopup("["+e.lat+", "+e.lng+"]").on("mouseover",(function(e){this.openPopup()}))),j.addTo(d)}))}else console.log("invalid longitude");else console.log("invalid latitude")}function x(e){h=e.target.value}function y(e){b=e.target.getAttribute("value")}var C=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"inputs",children:["Breitegrad:",Object(p.jsx)("input",{id:"lat",onChange:x}),"L\xe4ngengrad:",Object(p.jsx)("input",{id:"long",onChange:y}),Object(p.jsx)("button",{onClick:O,children:"Marker anzeigen"})]}),Object(p.jsx)("div",{className:"maps-container",children:Object(p.jsx)("div",{className:"leaflet-container",children:Object(p.jsxs)(u.a,{center:g,zoom:3,doubleClickZoom:!1,worldCopyJump:!0,children:[Object(p.jsx)(v,{}),Object(p.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,167)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),o(e),r(e),i(e),l(e)}))},k=t(67),w=t.n(k);l.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),_(),w.a.publish("public",(function(e){}))},72:function(e,n,t){},73:function(e,n,t){}},[[162,1,2]]]);
//# sourceMappingURL=main.eca8f307.chunk.js.map