!function(o){function e(e){for(var n,t,r=e[0],a=e[1],l=e[2],i=0,c=[];i<r.length;i++)t=r[i],s[t]&&c.push(s[t][0]),s[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n]);for(f&&f(e);c.length;)c.shift()();return m.push.apply(m,l||[]),u()}function u(){for(var e,n=0;n<m.length;n++){for(var t=m[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==s[l]&&(r=!1)}r&&(m.splice(n--,1),e=d(d.s=t[0]))}return e}var t={},s={0:0},m=[];function d(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(l){var e,n=[],t=s[l];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(e,n){t=s[l]=[e,n]});n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=d.p+"templates/"+({1:"src-pages-404"}[e=l]||e)+"."+{1:"ec66ff93"}[e]+".js",a=function(e){i.onerror=i.onload=null,clearTimeout(c);var n=s[l];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+l+" failed.\n("+t+": "+r+")");a.type=t,a.request=r,n[1](a)}s[l]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},d.m=o,d.c=t,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)d.d(t,r,function(e){return n[e]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var f=r;m.push([53,2]),u()}({115:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(20),i=t.n(l),c=t(47),o=t(2),u=t(6);function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    body {\n        font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n        'Lucida Grande', sans-serif;\n        font-weight: 300;\n        font-size: 16px;\n        margin: 0;\n        padding: 0;\n        background-color: ",";\n        color: ",";\n        line-height: 1.5;\n    }\n    \n    a {\n        text-decoration: none;\n        color: #108db8;\n        font-weight: bold;\n    }\n    \n    img {\n        max-width: 100%;\n    }\n    \n    nav {\n        width: 100%;\n        background: #108db8;\n    }\n    \n    nav a {\n        color: white;\n        padding: 1rem;\n        display: inline-block;\n    }\n    \n    .content {\n        padding: 1rem;\n    }\n"]);return s=function(){return e},e}var m=Object(o.a)(s(),u.a,u.b),d=t(8),f=t(23);function p(){var e=v(["\n    max-width: 400px;\n  "]);return p=function(){return e},e}function g(){var e=v(["\n  max-width: 300px;\n\n  ","\n"]);return g=function(){return e},e}function h(){var e=v(["\n  padding: 20px 0;\n  text-align: center;\n"]);return h=function(){return e},e}function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var E=o.c.div(h()),b=o.c.img(g(),d.a.tablet(p()));var y,w=function(){return a.a.createElement(c.Root,null,a.a.createElement(m,null),a.a.createElement(E,null,a.a.createElement(b,{src:"./images/logo.png"})),a.a.createElement("div",{className:"content"},a.a.createElement(f.default,null)))};n.default=w;if("undefined"!=typeof document){var x=i.a.hydrate||i.a.render;y=w,x(a.a.createElement(y,null),document.getElementById("root"))}},23:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),l=t(8),i=t(6);function c(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding: 15px 0;\n    border-top: 1px solid ",";\n    border-bottom: 1px solid ",";\n"]);return c=function(){return e},e}var u=a.c.h2(c(),i.d,i.d),s=function(e){var n=e.title;return o.a.createElement(r.Fragment,null,o.a.createElement(u,null,n))};function m(){var e=h(["\n    width: 100%;\n"]);return m=function(){return e},e}function d(){var e=h(["\n        min-height: ",";\n    "]);return d=function(){return e},e}function f(){var e=h(["\n    ","\n"]);return f=function(){return e},e}function p(){var e=h(["\n    width: ","px;\n    height: ","px;;\n    background-color: ",";\n"]);return p=function(){return e},e}function g(){var e=h(["\n    box-sizing: border-box;\n    max-width: 320px;\n    padding: 10px;\n"]);return g=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var v=a.c.div(g()),E=a.c.div(p(),function(e){return e.width?e.width:"300"},function(e){return e.width?e.width:"300"},i.c),b=a.c.div(f(),l.a.tablet(d(),function(e){return e.source&&"dashcam"===e.source?"250px":"0"})),y=a.c.img(m()),w=function(e){var n=e.width,t=e.imgUrl,r=e.subTitle,a=e.description,l=e.source,i=e.children,c=t?o.a.createElement(b,{source:l},o.a.createElement(y,{src:t,alt:a})):o.a.createElement(E,{width:n});return o.a.createElement(v,null,c,o.a.createElement("div",null,r&&o.a.createElement("h3",null,r),a&&o.a.createElement("p",null,a),i))};function x(){var e=U(["\n    text-decoration: underline;\n"]);return x=function(){return e},e}function j(){var e=U([""]);return j=function(){return e},e}function O(){var e=U(["\n    ","\n"]);return O=function(){return e},e}function k(){var e=U(["\n        justify-content: flex-start;\n    "]);return k=function(){return e},e}function P(){var e=U(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    ","\n"]);return P=function(){return e},e}function U(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var C="./images/thumbnails/wrapping",D=a.c.div(P(),l.a.tablet(k())),z=a.c.ul(O(),function(e){return e.listStyle&&"list-style: ".concat(e.listStyle)}),F=a.c.li(j()),S=a.c.h3(x()),M=function(){return o.a.createElement("section",{id:"wrapping"},o.a.createElement(s,{title:"Car Wrapping"}),o.a.createElement("div",null,o.a.createElement(S,null,"Full Wraps"),o.a.createElement("p",null,"For those who want to go the full distance in terms of changing up your vehicle, this is for you. Full car wraps are the most expensive car wrapping option and can take days to complete depending on the material used and the vehicle being wrapped. It is essential to use the most skilled installers for your full wrap. Full car wraps can be used to:"),o.a.createElement(z,null,o.a.createElement(F,null,"Completely change the whole look and style of your vehicle"),o.a.createElement(F,null,"Convert your car to a completely different colour, without all of the long delays that can hold back getting your car in shape as well as the extreme costs."),o.a.createElement(F,null,"Be unique and take your car to a new level with a textured material."),o.a.createElement(F,null,"Protect the vehicle body paintwork and help hold the resale value of your vehicle.")),o.a.createElement(D,null,o.a.createElement(w,{imgUrl:"".concat(C,"/full/camo-bmw-m4.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/full/lamborghini-aventador-2.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/full/lamborghini-aventador.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/full/lamborghini-gallardo-2.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/full/sl500.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/full/lamborghini-murcielago.jpg"),description:""}))),o.a.createElement("div",null,o.a.createElement(S,null,"Partial Wraps"),o.a.createElement("p",null,"Suggested applicable area:"),o.a.createElement(z,null,o.a.createElement(F,null,"Side mirrors"),o.a.createElement(F,null,"Spoiler or Boot lip")),o.a.createElement("p",null,"A partial wrapping an quick and affordable car mod. Getting a partially wrapping can:"),o.a.createElement(z,null,o.a.createElement(F,null,"Transform the style of your car by giving you an extra layer of colour compared to similar vehicles."),o.a.createElement(F,null,"Add a simple contrast to the look of your car without going over the top and making your car seem too loud."),o.a.createElement(F,null,"Add minor texturing to your vehicle styling with a finish such as carbon fibre to really add another layer of class to the overall design.")),o.a.createElement(D,null,o.a.createElement(w,{imgUrl:"".concat(C,"/partial/partial-maserati.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/partial/partial-wrap.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/partial/partial-wrap-2.jpg"),description:""}))),o.a.createElement("div",null,o.a.createElement(S,null,"Roof Wraps"),o.a.createElement("p",null,"Roof wraps are used to add patterns to vehicles or to streamline the design and look of the vehicle by adding a dark contrasting colour. Using a finish of carbon fibre can visibly add to the quality and look of a vehicle, especially high end models. Whatever your choice is, though, roof wraps can help:"),o.a.createElement(z,null,o.a.createElement(F,null,"Change the overall look and feel of your vehicle."),o.a.createElement(F,null,"Use colour to add contrast and alter the design of the car."),o.a.createElement(F,null,"Use textured materials that interact with light differently."),o.a.createElement(F,null,"Provide protection to the paintwork below.")),o.a.createElement(D,null,o.a.createElement(w,{imgUrl:"".concat(C,"/roof/roof-rangerover.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/roof/roof-stinger.jpg"),description:""}))),o.a.createElement("div",null,o.a.createElement(S,null,"PPF (Paint protection film)"),o.a.createElement("p",null,"Paint protection kits are a totally clear and invisible way of protecting your car bodywork from general wear and tear, stone chips and minor abrasions. Suggested applicable area:"),o.a.createElement(z,null,o.a.createElement(F,null,"Full front package available which includes bonnet, bumper bar and guards"),o.a.createElement(F,null,"Head lights"),o.a.createElement(F,null,"Door edges"),o.a.createElement(F,null,"Door cup"),o.a.createElement(F,null,"Fuel cap lid"),o.a.createElement(F,null,"Boot area")),o.a.createElement(D,null,o.a.createElement(w,{imgUrl:"".concat(C,"/ppf/ppf-jaguar.jpg"),description:""}),o.a.createElement(w,{imgUrl:"".concat(C,"/ppf/ppf-porsche.jpg"),description:""}))),o.a.createElement("div",null,o.a.createElement(S,null,"Headlight & Taillight Tinting"),o.a.createElement(D,null,o.a.createElement(w,{imgUrl:"".concat(C,"/tinting/taillight-tinting-before.jpg"),description:"Before"}),o.a.createElement(w,{imgUrl:"".concat(C,"/tinting/taillight-tinting-after.jpg"),description:"After"}))))};function W(){var e=_(['\n    list-style-type: none;\n    padding-left: 10px;\n    \n    & > li {\n        text-indent: -5px;\n    }\n\n    & > li:before {\n        content: "- ";\n        text-indent: -5px;\n    }\n']);return W=function(){return e},e}function A(){var e=_(["\n        flex-direction: row;\n        align-items: flex-start;\n    "]);return A=function(){return e},e}function B(){var e=_(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n\n    ","\n"]);return B=function(){return e},e}function _(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var H="./images/thumbnails/dashcam",T=a.c.div(B(),l.a.tablet(A())),G=a.c.ul(W()),N=function(){return o.a.createElement(G,null,o.a.createElement("li",null,"2 Channel (Front/Rear)"),o.a.createElement("li",null,"QHD/Full HD (1440p/1080p)"),o.a.createElement("li",null,"Wireless connectivity(WiFi)"),o.a.createElement("li",null,"32GB Memory card supplied"),o.a.createElement("li",null,"128GB Upgradable"),o.a.createElement("li",null,"Car Battery Discharge Protection"),o.a.createElement("li",null,"Security LED"),o.a.createElement("li",null,"Apple iOS/Android compatible"))},L=function(){return o.a.createElement(G,null,o.a.createElement("li",null,"2 Channel (Front/Rear)"),o.a.createElement("li",null,"Full HD/Full HD (1080p/1080p)"),o.a.createElement("li",null,"Sony EXMOR CMOS image sensor"),o.a.createElement("li",null,"Wireless connectivity(WiFi)"),o.a.createElement("li",null,'3.5" Full touch LCD (480*320)'),o.a.createElement("li",null,"32GB Memory card supplied"),o.a.createElement("li",null,"128GB Upgradable"),o.a.createElement("li",null,"Car Battery Discharge Protection"),o.a.createElement("li",null,"Security LED"),o.a.createElement("li",null,"Apple iOS/Android compatible"))},I=function(){return o.a.createElement(G,null,o.a.createElement("li",null,"2 Channel (Front/Rear)"),o.a.createElement("li",null,"HD/HD (720p/720p)"),o.a.createElement("li",null,'3.5" Full touch LCD (480*320)'),o.a.createElement("li",null,"16GB Memory card supplied"),o.a.createElement("li",null,"128GB Upgradable"),o.a.createElement("li",null,"Car Battery Discharge Protection"),o.a.createElement("li",null,"Security LED"))},R=function(){return o.a.createElement("section",{id:"dashcam"},o.a.createElement(s,{title:"DashCam"}),o.a.createElement("div",null,o.a.createElement(S,null,"WINYCAM"),o.a.createElement("p",null,"WINYCAM is the longest lasting Car Dashcam brand in Korea where this market maturity is the WINYCAM do have the best clear image quality on wide temperature & brightness variation in the world and a reliable system working without failing to record video, audio and special sensor data. Seems to be very simples, but these are critically required for Car Dashcam. We proud ourselves low defective rate and high reliable technology, And we have contracted 5 big brands named company as OEM / ODM, which means our product quality is qualified in the market. We can gurantee we could satisfy custmers who choose WINYCAM")),o.a.createElement(T,null,o.a.createElement(w,{width:200,source:"dashcam",imgUrl:"".concat(H,"/cls-740.png"),subTitle:"CLS-740"},o.a.createElement(N,null)),o.a.createElement(w,{width:200,source:"dashcam",imgUrl:"".concat(H,"/fx-air.jpg"),subTitle:"FX Air"},o.a.createElement(L,null)),o.a.createElement(w,{width:200,source:"dashcam",imgUrl:"".concat(H,"/hx-200.png"),subTitle:"HX-200"},o.a.createElement(I,null))))};function q(){var e=Z(["\n  width: 360px;\n"]);return q=function(){return e},e}function X(){var e=Z(["\n  margin: 0;\n  text-align: center;\n"]);return X=function(){return e},e}function Y(){var e=Z(["\n  margin-top: 10px;\n  margin-bottom: 0;\n  text-align: center;\n"]);return Y=function(){return e},e}function J(){var e=Z(["\n  padding: 10px;\n  border-radius: 2px;\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  text-align: center;\n"]);return J=function(){return e},e}function K(){var e=Z(["\n  max-width: 360px;\n  min-height: 350px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 5px;\n  border: 1px solid ",";\n"]);return K=function(){return e},e}function Q(){var e=Z(["\n    flex-direction: row;\n    justify-content: center;\n  "]);return Q=function(){return e},e}function V(){var e=Z(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  ","\n"]);return V=function(){return e},e}function Z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var $=a.c.section(V(),l.a.tablet(Q())),ee=a.c.div(K(),i.c),ne=a.c.a(J(),i.a,i.b),te=a.c.h2(Y()),re=a.c.div(X()),ae=a.c.img(q()),le=function(e){var n=e.title,t=e.description,r=e.imgUrl,a=e.buttonText,l="Wrapping"===n?"#wrapping":"#dashcam";return o.a.createElement(ee,null,o.a.createElement("div",null,o.a.createElement(te,null,n),t&&o.a.createElement(re,null,t)),o.a.createElement(ae,{src:r}),o.a.createElement(ne,{href:l},a))},ie=function(){return o.a.createElement(le,{title:"Wrapping",imgUrl:"./images/alfaromeo.jpg",description:"Car wrapping",buttonText:"Go Wrapping"})},ce=function(){return o.a.createElement(le,{title:"DashCam",imgUrl:"".concat(H,"/cls-740.png"),description:"Sales & Installation",buttonText:"Go DashCam"})},oe=function(){return o.a.createElement($,null,o.a.createElement(ie,null),o.a.createElement(ce,null))};function ue(){var e=me(["\n  margin: 0 5px;\n"]);return ue=function(){return e},e}function se(){var e=me(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]);return se=function(){return e},e}function me(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var de=a.c.div(se()),fe=a.c.a(ue()),pe=function(){return o.a.createElement(fe,{href:"https://www.facebook.com/motorjunctionmoorabbin/",target:"_blank"},o.a.createElement("img",{style:{width:"46px"},src:"./images/thumbnails/sns/flogo_RGB_HEX-72.png",alt:"facebook icon"}))},ge=function(){return o.a.createElement(fe,{href:"https://www.instagram.com/motorjunction_official/",target:"_blank"},o.a.createElement("img",{src:"./images/thumbnails/sns/IG_Glyph_Fill.png",alt:"facebook icon"}))},he=function(){return o.a.createElement(de,null,o.a.createElement(pe,null),o.a.createElement(ge,null))};function ve(){var e=je(["\n  font-size: 16px;\n"]);return ve=function(){return e},e}function Ee(){var e=je(["\n  font-size: 45px;\n  margin: 20px 0 30px 0;\n  text-align: center;\n\n  a {\n    color: ",";\n  }\n"]);return Ee=function(){return e},e}function be(){var e=je(["\n    height: 50px;\n"]);return be=function(){return e},e}function ye(){var e=je(["\n  margin-top: -50px;\n"]);return ye=function(){return e},e}function we(){var e=je(["\n  max-width: 650px;\n  margin: 0 auto;\n  text-align: center;\n"]);return we=function(){return e},e}function xe(){var e=je(["\n  visibility: hidden;\n  margin: 0;\n"]);return xe=function(){return e},e}function je(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Oe=a.c.h1(xe()),ke=a.c.p(we()),Pe=a.c.div(ye()),Ue=a.c.div(be()),Ce=a.c.div(Ee(),i.b),De=a.c.div(ve());n.default=function(){return o.a.createElement(Pe,null,o.a.createElement(Oe,null,"Motor Junction"),o.a.createElement(ke,null,"One stop Automotive Workshop.",o.a.createElement("br",null),"All mechanical works, Quality Vinyl Wrapping, 2 Channel Dash Cam Sale & Installation",o.a.createElement("br",null),"opening from 8am to 5pm, Monday to Friday"),o.a.createElement(Ce,null,o.a.createElement("a",{href:"tel:03 9553 1344"},"03 9553 1344"),o.a.createElement(De,null,"81 Keys Rd Moorabbin VIC 3189")),o.a.createElement(he,null),o.a.createElement(oe,null),o.a.createElement(Ue,null),o.a.createElement(M,null),o.a.createElement(Ue,null),o.a.createElement(R,null))}},32:function(e,n,t){"use strict";t.r(n);n.default=[{location:"/Users/jim/Developments/jkimau/motor-junction/node_modules/react-static-plugin-styled-components",plugins:[],hooks:{}},{location:"/Users/jim/Developments/jkimau/motor-junction",plugins:[],hooks:{}}]},40:function(e,s,m){"use strict";m.r(s),function(e){var n=m(24),t=m.n(n),r=m(25),a=m.n(r),l=m(15),i=m.n(l);Object(l.setHasBabelPlugin)();var c={loading:function(){return null},error:function(e){return console.error(e.error),React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")}},o=i()(a()({id:"../src/pages/404.js",load:function(){return Promise.all([m.e(1).then(m.bind(null,52))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/pages/404.js")},resolve:function(){return 52},chunkName:function(){return"src-pages-404"}}),c),u=i()(a()({id:"../src/pages/index.js",load:function(){return Promise.all([Promise.resolve().then(m.bind(null,23))]).then(function(e){return e[0]})},path:function(){return t.a.join(e,"../src/pages/index.js")},resolve:function(){return 23},chunkName:function(){return"src-pages-index"}}),c);s.default=[o,u]}.call(this,"/")},53:function(e,n,t){t(54),t(81),e.exports=t(89)},6:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return a}),t.d(n,"c",function(){return l}),t.d(n,"d",function(){return i});var r="#E3C163",a="#111312",l="#eee",i="#ccc"},8:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(2);function a(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n      @media (min-width: ","em) {\n        ","\n      }\n    "]);return a=function(){return e},e}var l={desktop:992,tablet:768,phone:576},i=Object.keys(l).reduce(function(e,n){return e[n]=function(){return Object(r.b)(a(),l[n]/16,r.b.apply(void 0,arguments))},e},{})},84:function(e,n,t){var r={".":18,"./":18,"./index":18,"./index.js":18};function a(e){var n=l(e);return t(n)}function l(e){var n=r[e];if(n+1)return n;var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return Object.keys(r)},a.resolve=l,(e.exports=a).id=84}});
//# sourceMappingURL=main.84dc0d01.js.map