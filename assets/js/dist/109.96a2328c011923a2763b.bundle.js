"use strict";(self.webpackChunkkcc_gem_theme=self.webpackChunkkcc_gem_theme||[]).push([[109],{109:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});const r=/^id=/g,o=/^\?/g,c=/\/$/g,s="userPrefersReducedMotion",a={behavior:"smooth",block:"center"},i={block:"center"};function l(e){return"true"==window.localStorage.getItem(s)?e.scrollIntoView(i):e.scrollIntoView(a),e.focus()}function u(e,n){-1!==e.search(r)&&function(e,n){let t=e.replace(r,"");l(document.querySelector(n).querySelector(`#${t}`))}(e,n)}function d(e){l(document.querySelector(e))}function g(e){var n;window.location.hash&&(n=window.location.hash.replace(c,""),document.querySelector(`.nav-tabs a[href="${n}"]`)?($(`.nav-tabs a[href="${n}"]`).on("shown.bs.tab",(()=>{window.location.search&&u(window.location.search.replace(o,""),n)})).tab("show"),d(`${n}-label`)):document.querySelector(`${n}.collapse`)&&($(n).on("shown.bs.collapse",(()=>{window.location.search&&u(window.location.search.replace(o,""),n)})).collapse("show"),d(n)))}var h=function(){(document.querySelector("#accordion")||document.querySelector(".nav.nav-tabs"))&&(g(),window.addEventListener("hashchange",g,!1))};const f={strong:/\*\*([^\*]*)\*\*/g,em:/_([^_]*)_/g};function w(e,n,t){return e.replace(n,t)}function p(e,n){const t={"\\*":"__asterisk__","\\_":"__underscore__","\\[":"__openBracket__","\\]":"__closeBracket__","\\(":"__openParenthesis__","\\)":"__closeParenthesis__"};for(let r in t)t.hasOwnProperty(r)&&(!0===n?e=w(e,r,t[r]):!1===n&&(e=w(e,t[r],r.replace(/^\\/g,""))));return e}function m(e,n){if(""===n)return e;for(var t in f)f.hasOwnProperty(t)&&(e=e.replace(f[t],"<"+t+">$1</"+t+">"));return e}function _(e,n){return""===n?e:e.replace(/^(.*)$/gm,'<p class="typography__alert">$1</p>')}var v=function(e){let[n,t,r,o,c,s]=e.result.values[2];if("FALSE"===n)return h();const a=document.getElementById("emergencyAlerts");let i=new Date,l=new Date(c),u=new Date(s);const d="FALSE"===o||"TRUE"===o&&l.getTime()<=i.getTime()&&u.getTime()>i.getTime(),g="TRUE"===t||"FALSE"===t&&"/"==window.location.pathname;let w=`\n<div class="container">\n  <div class="row">\n    <div class="col">\n      <div class="alert alert-warning">\n        ${function(e){const n=function(e){return e.replace(/\[(?<linkText>[^\]]*)\]\((?<linkHref>[^\)]*)\)/g,'<a href="$<linkHref>" target="_blank" rel="noopener noreferrer">$<linkText></a>')}(function(e){for(var n in f)f.hasOwnProperty(n)&&(e=e.replace(f[n],m));return e}(p(e,!0)));return p(function(e){return e.replace(/^(.*)$/gm,_)}(n),!1)}(r)}\n        </div>\n    </div>\n  </div>\n</div>`;return[i,l,u].map((e=>e.setHours(0,0,0,0))),d&&g&&function(e,n){e.innerHTML=n,e.classList.add("position__offset-alert--visible")}(a,w),h()};const y=function(e,n){let t={spreadsheetId:"1plXBiZY5pVbhNT-mszxEuqCl4zy8wMnz9gXXbbT_yLs"};return r="Alerts",t.range=r,t;var r}(),b={apiKey:"AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest"]};var S=function(){if(!document.getElementById("emergencyAlerts"))return h();gapi.client.init(b).then((()=>gapi.client.sheets.spreadsheets.values.get(y))).then((e=>(v(e),e))).then((e=>{!function(e){const n=e.result.values,t=n[1],r=n[2];for(let e=0,n=r.length;e<n;e++){const n=r[e],o=t[e];window.sessionStorage.setItem(o.replace(" ","-"),n)}}(e)}),(e=>{console.error("Execute error",e),h()}))};const k=window.sessionStorage;var E=function(){try{!function(){let e={result:{values:[0,0,[k.Visible,k.getItem("All-Pages"),k.getItem("Alert-Content"),k.getItem("Alert-Expiration"),k.Start,k.End]]}};var n;n=h,v(e),n()}()}catch(e){h(),console.error(`Error retrieving cached response in sessionStorage:\nName: ${e.name}\nMessage: ${e.message}\n${e}`)}},I=function(){(function(){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),n=-1!==window.navigator.userAgent.search(/MSIE/g);let t;t=!!e.matches,localStorage.setItem("userPrefersReducedMotion",t),n||e.addEventListener("change",(n=>{t=!!e.matches,localStorage.setItem("userPrefersReducedMotion",t)}))})(),window.sessionStorage.getItem("Alert-Content")?E():gapi.load("client",S)}}}]);