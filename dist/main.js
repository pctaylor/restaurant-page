(()=>{"use strict";var n,e,t,r,a,o,i,c,s,d,u,l,p,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"* {\n    text-align: center;\n    padding: 8px;\n}\n\n/* ------------------------------------------------------\n*  RESTAURANT WELCOME\n* ------------------------------------------------------*/\n/* LANDING IMAGE */\n#landing-img {\n    height: 500px;\n}\n\n/* RESTAURANT NAME */\n#name {\n    font-size: 48px;\n    font-weight: 700;\n}\n\n/* RESTAURANT TAG LINE */\n#tagLine {\n    font-size: 24px;\n}\n\n/* ------------------------------------------------------\n*  USER ACTION TABS: ABOUT, CONTACT, MENU\n* ------------------------------------------------------*/\n\n#tab-container {\n    display: flex;\n    justify-content: center;\n    gap: 24px;\n}\n\n.tab {\n    padding: 16px;\n    width: 100px;\n    border: solid black 1px;\n    background-color: white;\n    border-radius: 25px;\n}\n\n.tab:hover {\n    background-color: black;\n    color: white;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var u=t(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),a=h(569),o=h.n(a),i=h(565),c=h.n(i),s=h(216),d=h.n(s),u=h(589),l=h.n(u),p=h(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("hello, world"),document.addEventListener("DOMContentLoaded",(function(){(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.id="name",e.innerHTML="Cannibal Joe's Human Meat Market",n.appendChild(e);const t=document.createElement("img");t.src="../src/images/Human-cannibalism-engraving-Theodor-de-Bry.webp",t.alt="Canibal Joe's Human Meat Market",t.id="landing-img",n.appendChild(t);const r=document.createElement("div");r.id="tagLine",r.innerHTML="Offering <em>the best</em> brains, hearts, steaks, and bones since 1919",n.appendChild(r);const a=document.createElement("div");a.id="tab-container",n.appendChild(a),["about","menu","contact"].forEach((function(n){const e=document.createElement("div");e.className="tab",e.id=n,e.innerHTML=n.toUpperCase(),a.appendChild(e)}))})()}))})();