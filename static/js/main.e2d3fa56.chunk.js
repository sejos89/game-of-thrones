(this["webpackJsonpgame-of-thrones"]=this["webpackJsonpgame-of-thrones"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('{"footer":{"characters":"PERSONAJES","houses":"CASAS","chronology":"CRONOLOGIA"},"header":{"search":"Buscar..."},"characters":{"house":"CASA","allegiances":"ALIANZAS","appearances":"APARICIONES","father":"PADRE","siblings":"HERMANOS","titles":"TITULOS"},"houses":{"words":"LEMA","seat":"SEDE","region":"REGION","allegiances":"APARICIONES","religion":"RELIGION","created":"FUNDACION"}}')},36:function(e){e.exports=JSON.parse('{"footer":{"characters":"CHARACTERS","houses":"HOUSES","chronology":"CHRONOLOGY"},"header":{"search":"Search..."},"characters":{"house":"HOUSE","allegiances":"ALLEGIANCES","appearances":"APPEARANCES","father":"FATHER","siblings":"SIBLINGS","titles":"TITLES"},"houses":{"words":"WORDS","seat":"SEAT","region":"REGION","allegiances":"ALLEGIANCES","religion":"RELIGION","created":"CREATED"}}')},42:function(e,c,t){},43:function(e,c,t){},61:function(e,c,t){},67:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){},77:function(e,c,t){},78:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),n=t.n(s),i=t(30),l=t.n(i),r=(t(42),t(43),t(6)),o=t(3),j=t(2),d=t(10),h=t.n(d);t(61);function b(e){return Object(a.jsx)("div",{className:"row",children:e.items.map((function(e,c){return Object(a.jsxs)("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2 my-3 px-2",children:[Object(a.jsxs)("div",{className:"frame",children:[!e.logoURL&&Object(a.jsxs)(r.b,{to:"/characters/".concat(e.name),children:[e.image&&Object(a.jsx)("img",{className:"image-gallery",src:e.image,alt:"got"}),Object(a.jsx)("div",{className:"hover-name",children:e.name})]}),e.logoURL&&Object(a.jsx)(r.b,{to:"/houses/".concat(e.name),children:Object(a.jsx)("img",{src:e.logoURL,alt:"got"})})]}),e.logoURL&&Object(a.jsxs)("p",{children:[" ",e.name," "]})]},c)}))})}t(67);var u=t(80);function O(){var e=Object(u.a)("global"),c=Object(j.a)(e,2),t=c[0],s=(c[1],Object(o.g)());return Object(a.jsx)("footer",{className:"App-footer container-fluid",children:Object(a.jsxs)("ul",{className:"nav w-100 justify-content-around",children:[Object(a.jsx)("li",{className:"nav-item ",children:Object(a.jsx)(r.b,{to:"/characters",children:Object(a.jsx)("p",{className:"footer-titles ".concat("/characters"===s.pathname?"selected-link":""),children:t("footer.characters")})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/houses",children:Object(a.jsx)("p",{className:"footer-titles ".concat("/houses"===s.pathname?"selected-link":""),children:t("footer.houses")})})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/chronology",children:Object(a.jsx)("p",{className:"footer-titles ".concat("/chronology"===s.pathname?"selected-link":""),children:t("footer.chronology")})})})]})})}t(73);function m(e){var c=e.onSearch,t=e.goBack,s=e.charac,n=Object(u.a)("global"),i=Object(j.a)(n,2),l=i[0],o=i[1];return Object(a.jsxs)("header",{className:"App-header fixed-top container d-flex align-items-center",children:[c&&Object(a.jsx)("input",{id:"search-bar",type:"text",placeholder:l("header.search"),onChange:c}),t&&Object(a.jsx)("button",{type:"button",id:"back-button",onClick:t,children:Object(a.jsx)("i",{className:"fa fa-arrow-left fa-2x"})}),Object(a.jsxs)("ul",{className:"container d-flex justify-content-end align-items-center h-100 m-0",children:[(c||t||s)&&Object(a.jsx)("li",{className:"mx-2",id:"list-header",children:Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("button",{className:"fa fa-home header-icons header-icons--home"})})}),Object(a.jsx)("li",{className:"mx-2",id:"list-header",children:Object(a.jsx)("button",{className:"flag-icon flag-icon-es header-icons",onClick:function(){return o.changeLanguage("es")}})}),Object(a.jsx)("li",{className:"mx-2",id:"list-header",children:Object(a.jsx)("button",{className:"flag-icon flag-icon-gb header-icons",onClick:function(){return o.changeLanguage("en")}})})]})]})}function x(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),r=l[0],o=l[1];Object(s.useEffect)((function(){h.a.get("https://api.got.show/api/show/characters").then((function(e){console.log(e.data),n(e.data)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onSearch:function(e){o(e.currentTarget.value)}}),Object(a.jsx)("div",{class:"container make-space scrollBar",children:Object(a.jsx)(b,{items:t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))})}),Object(a.jsx)(O,{})]})}t(74);function g(){var e,c,t,n,i=Object(u.a)("global"),l=Object(j.a)(i,2),r=l[0],d=(l[1],Object(o.h)().name),b=Object(o.f)(),O=Object(s.useState)({}),x=Object(j.a)(O,2),g=x[0],f=x[1],p=Object(s.useState)(""),N=Object(j.a)(p,2),v=N[0],w=N[1];Object(s.useEffect)((function(){h.a.get("https://api.got.show/api/show/"+"characters/".concat(d)).then((function(e){f(e.data),h.a.get("https://api.got.show/api/show/"+"houses/".concat(e.data.house)).then((function(e){console.log(e.data),0!==e.data.length&&w(e.data[0].logoURL)}))}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{goBack:function(){return b.goBack()}}),Object(a.jsxs)("div",{className:"container make-space make-space--no-footer",id:"detail-container",children:[Object(a.jsx)("div",{className:"character-header row justify-content-center",children:Object(a.jsx)("figure",{className:"header-img",children:Object(a.jsx)("img",{src:g.image,alt:g.name})})}),Object(a.jsx)("p",{className:"header-name mb-5",children:g.name}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.house")}),v&&Object(a.jsx)("figure",{className:"house-img",children:Object(a.jsx)("img",{src:v,alt:""})})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.allegiances")}),Object(a.jsx)("ul",{className:"list-with-scroll scrollBar",children:null!==(e=null===(c=g.allegiances)||void 0===c?void 0:c.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})})))&&void 0!==e?e:"Loading ...."})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.appearances")}),Object(a.jsx)("ul",{className:"list-with-scroll scrollBar",children:null===(t=g.appearances)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.father")}),Object(a.jsx)("p",{className:"detail-list",children:g.father})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.siblings")}),Object(a.jsx)("ul",{className:"list-with-scroll scrollBar",children:null===(n=g.siblings)||void 0===n?void 0:n.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:r("characters.titles")}),Object(a.jsx)("ul",{className:"list-with-scroll scrollBar",children:g.titles&&g.titles.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]})]})]})]})}function f(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),r=l[0],o=l[1];Object(s.useEffect)((function(){h.a.get("https://api.got.show/api/show/houses").then((function(e){var c=e.data.filter((function(e){return e.logoURL}));n(c)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onSearch:function(e){o(e.currentTarget.value)}}),Object(a.jsx)("div",{class:"container make-space scrollBar",children:Object(a.jsx)(b,{items:t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))})}),Object(a.jsx)(O,{})]})}t(75);function p(){var e,c,t,n,i,l=Object(u.a)("global"),r=Object(j.a)(l,2),d=r[0],b=(r[1],Object(o.h)().name),O=Object(o.f)(),x=Object(s.useState)({}),g=Object(j.a)(x,2),f=g[0],p=g[1];Object(s.useEffect)((function(){h.a.get("https://api.got.show/api/show/"+"houses/".concat(b)).then((function(e){p(e.data[0]),console.log(e.data)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{goBack:function(){return O.goBack()}}),Object(a.jsxs)("div",{className:"container make-space make-space--no-footer",id:"detail-container",children:[Object(a.jsx)("div",{className:"character-header row justify-content-center",children:Object(a.jsx)("figure",{className:"header-img-house",children:Object(a.jsx)("img",{src:f.logoURL,alt:f.name})})}),Object(a.jsx)("p",{className:"header-name mb-5",children:f.name}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.words")}),Object(a.jsx)("p",{className:"detail-list",children:f.words})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.seat")}),Object(a.jsx)("ul",{className:"list-with-scroll",children:null===(e=f.seat)||void 0===e?void 0:e.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.region")}),Object(a.jsx)("ul",{className:"list-with-scroll",children:null===(c=f.region)||void 0===c?void 0:c.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.allegiances")}),Object(a.jsx)("ul",{className:"list-with-scroll",children:null===(t=f.allegiance)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.religion")}),Object(a.jsx)("ul",{className:"list-with-scroll",children:null===(n=f.religion)||void 0===n?void 0:n.map((function(e){return Object(a.jsx)("li",{className:"detail-list",children:e})}))})]}),Object(a.jsxs)("div",{className:"col detail-field",children:[Object(a.jsx)("h6",{children:d("houses.created")}),Object(a.jsx)("p",{className:"detail-list",children:null===(i=f.createdAt)||void 0===i?void 0:i.slice(0,10)})]})]})]})]})}t(76);var N=[];function v(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),r=l[0],o=l[1],d=Object(s.useState)(""),b=Object(j.a)(d,2),u=b[0],x=b[1],g=Object(s.useState)(!0),f=Object(j.a)(g,2),p=f[0],v=f[1],w=function(e){return e.reduce((function(e,c){return e.age.age>c.age.age?e:c})).age.age},S=function(e){return e.reduce((function(e,c){return e.age.age<c.age.age?e:c})).age.age};Object(s.useEffect)((function(){h.a.get("https://api.got.show/api/show/characters").then((function(e){N=e.data.filter((function(e){var c;return null===(c=e.age)||void 0===c?void 0:c.age})),n(N),o(S(N)),x(w(N))}))}),[]);var A=function(e){return e.sort((function(e,c){return p?e.age.age-c.age.age:c.age.age-e.age.age}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{charac:t,onSearch:function(e){var c=e.currentTarget.value,t=N.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));n(t),t.length&&(console.log(t),o(S(t)),x(w(t)))}}),Object(a.jsxs)("div",{class:"container make-space scrollBar",children:[Object(a.jsx)("div",{id:"button-container",className:"d-flex justify-content-center align-items-end",children:Object(a.jsx)("button",{onClick:function(){return v(!p)},id:"button-age",children:p?r:u})}),Object(a.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(a.jsxs)("div",{className:"d-flex flex-column align-items-center column-contain",children:[Object(a.jsx)("div",{id:"vl",className:"d-flex flex-column align-items-end justify-content-between",children:p?Object(a.jsx)("span",{class:"arrow up"}):Object(a.jsx)("span",{class:"arrow down"})}),A(t).filter((function(e,c){return c%2===0})).map((function(e,c){return Object(a.jsxs)("div",{id:"cont-1",className:"d-flex flex-column align-items-center w-100",children:[Object(a.jsx)("p",{className:"mb-1",children:e.age.age}),Object(a.jsx)("p",{className:"mb-1",children:e.name}),Object(a.jsx)("figure",{id:"character-figure",children:Object(a.jsx)("img",{id:"character-image",src:e.image,alt:""})})]})}))]}),Object(a.jsxs)("div",{className:"d-flex flex-column align-items-center column-contain",children:[Object(a.jsx)("div",{id:"space-div"}),A(t).filter((function(e,c){return c%2!==0})).map((function(e,c){return Object(a.jsxs)("div",{id:"cont-2",className:"d-flex flex-column align-items-center w-100",children:[Object(a.jsx)("p",{className:"mb-1",children:e.age.age}),Object(a.jsx)("p",{className:"mb-1",children:e.name}),Object(a.jsx)("figure",{id:"character-figure",children:Object(a.jsx)("img",{id:"character-image",src:e.image,alt:""})})]})}))]})]})]}),Object(a.jsx)(O,{})]})}t(77);function w(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{}),Object(a.jsx)("div",{class:"homepage",children:"GAME OF THRONES"}),Object(a.jsx)(O,{})]})}var S=function(){return Object(a.jsx)(r.a,{children:Object(a.jsx)("div",{className:"App p-0",children:Object(a.jsx)("main",{className:"App-body",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/characters/:name",children:Object(a.jsx)(g,{})}),Object(a.jsx)(o.a,{path:"/houses/:name",children:Object(a.jsx)(p,{})}),Object(a.jsx)(o.a,{path:"/characters",children:Object(a.jsx)(x,{})}),Object(a.jsx)(o.a,{path:"/houses",children:Object(a.jsx)(f,{})}),Object(a.jsx)(o.a,{path:"/chronology",children:Object(a.jsx)(v,{})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(w,{})})]})})})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),a(e),s(e),n(e),i(e)}))},E=t(79),L=t(20),C=t(35),R=t(36);L.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{es:{global:C},en:{global:R}}}),l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(E.a,{i18n:L.a,children:Object(a.jsx)(S,{})})}),document.getElementById("root")),A()}},[[78,1,2]]]);
//# sourceMappingURL=main.e2d3fa56.chunk.js.map