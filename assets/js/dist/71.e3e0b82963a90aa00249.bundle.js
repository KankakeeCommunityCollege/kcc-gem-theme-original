(self.webpackChunkkcc_gem_theme=self.webpackChunkkcc_gem_theme||[]).push([[71],{71:function(e,t,n){"use strict";n.r(t),n(4916),n(4765),t.default=function(){var e,t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=-1!==window.navigator.userAgent.search(/MSIE/g);e=!!t.matches,localStorage.setItem("userPrefersReducedMotion",e),n||t.addEventListener("change",(function(n){e=!!t.matches,localStorage.setItem("userPrefersReducedMotion",e)}))}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),c=n(2261),a=n(7293),o=n(5112),l=n(8880),i=o("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var x=o(e),d=!a((function(){var t={};return t[x]=function(){return 7},7!=""[e](t)})),f=d&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[i]=function(){return n},n.flags="",n[x]=/./[x]),n.exec=function(){return t=!0,null},n[x](""),!t}));if(!d||!f||n){var p=/./[x],g=t(x,""[e],(function(e,t,n,r,a){var o=t.exec;return o===c||o===u.exec?d&&!a?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(u,x,g[1])}s&&l(u[x],"sham",!0)}},7651:function(e,t,n){var r=n(4326),c=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var a=n.call(e,t);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},2261:function(e,t,n){"use strict";var r,c,a=n(1340),o=n(7066),l=n(2999),i=n(2309),u=n(30),s=n(9909).get,x=n(9441),d=n(8173),f=RegExp.prototype.exec,p=i("native-string-replace",String.prototype.replace),g=f,v=(r=/a/,c=/b*/g,f.call(r,"a"),f.call(c,"a"),0!==r.lastIndex||0!==c.lastIndex),h=l.UNSUPPORTED_Y||l.BROKEN_CARET,I=void 0!==/()??/.exec("")[1];(v||I||h||x||d)&&(g=function(e){var t,n,r,c,l,i,x,d=this,E=s(d),R=a(e),m=E.raw;if(m)return m.lastIndex=d.lastIndex,t=g.call(m,R),d.lastIndex=m.lastIndex,t;var b=E.groups,y=h&&d.sticky,w=o.call(d),k=d.source,_=0,O=R;if(y&&(-1===(w=w.replace("y","")).indexOf("g")&&(w+="g"),O=R.slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==R.charAt(d.lastIndex-1))&&(k="(?: "+k+")",O=" "+O,_++),n=new RegExp("^(?:"+k+")",w)),I&&(n=new RegExp("^"+k+"$(?!\\s)",w)),v&&(r=d.lastIndex),c=f.call(y?n:d,O),y?c?(c.input=c.input.slice(_),c[0]=c[0].slice(_),c.index=d.lastIndex,d.lastIndex+=c[0].length):d.lastIndex=0:v&&c&&(d.lastIndex=d.global?c.index+c[0].length:r),I&&c&&c.length>1&&p.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c&&b)for(c.groups=i=u(null),l=0;l<b.length;l++)i[(x=b[l])[0]]=c[x[1]];return c}),e.exports=g},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){var r=n(7293),c=n(7854).RegExp;t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},9441:function(e,t,n){var r=n(7293),c=n(7854).RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},8173:function(e,t,n){var r=n(7293),c=n(7854).RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1150:function(e){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},4916:function(e,t,n){"use strict";var r=n(2109),c=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},4765:function(e,t,n){"use strict";var r=n(7007),c=n(9670),a=n(4488),o=n(1150),l=n(1340),i=n(7651);r("search",(function(e,t,n){return[function(t){var n=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](l(n))},function(e){var r=c(this),a=l(e),u=n(t,r,a);if(u.done)return u.value;var s=r.lastIndex;o(s,0)||(r.lastIndex=0);var x=i(r,a);return o(r.lastIndex,s)||(r.lastIndex=s),null===x?-1:x.index}]}))}}]);