(function(e){function n(n){for(var a,o,u=n[0],i=n[1],l=n[2],m=0,s=[];m<u.length;m++)o=u[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({camera:"camera",home:"home"}[e]||e)+"."+{camera:"53b08ac4",home:"da9ec0b6"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={camera:1,home:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({camera:"camera",home:"home"}[e]||e)+"."+{camera:"18448236",home:"4a6c31d5"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],m=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(m===a||m===r))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],m=l.getAttribute("data-href");if(m===a||m===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=c);var l,m=document.createElement("script");m.charset="utf-8",m.timeout=120,i.nc&&m.setAttribute("nonce",i.nc),m.src=u(e);var s=new Error;l=function(n){m.onerror=m.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,t[1](s)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:m})}),12e4);m.onerror=m.onload=l,document.head.appendChild(m)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],m=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var f=m;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"513c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("5ee5"),o=t.n(a),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.keepAlive?t("router-view",{key:e.$route.name}):e._e()],1),e.$route.meta.keepAlive?e._e():t("router-view")],1)},c=[],u=1279122751,i={mounted:function(){this.$nextTick((function(){var e=document.createElement("script");e.src="https://v1.cnzz.com/z_stat.php?id=".concat(u,"&web_id=").concat(u),e.language="JavaScript",e.id="cnzz",document.body.appendChild(e)}))}},l=t("cf2d"),m={name:"app",mixins:[i,l["a"]]},s=m,f=(t("034f"),t("2877")),p=Object(f["a"])(s,r,c,!1,null,null,null),d=p.exports,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},[t("router-view"),t("van-tabbar",{staticClass:"home-tab",attrs:{route:""}},[t("van-tabbar-item",{attrs:{replace:"",to:{name:"Camera"},icon:"play-circle-o"}},[e._v("Camera")]),t("van-tabbar-item",{attrs:{replace:"",to:{name:"Home"},icon:"home-o"}},[e._v("Home")])],1)],1)},v=[],g={name:"Layout"},y=g,C=(t("bd79"),Object(f["a"])(y,b,v,!1,null,null,null)),w=C.exports;o.a.use(h["a"]);var E=[{path:"",component:w,children:[{path:"",name:"Camera",meta:{title:"Camera"},component:function(){return t.e("camera").then(t.bind(null,"1449"))}}]},{path:"/home",component:w,children:[{path:"",name:"Home",component:function(){return t.e("home").then(t.bind(null,"eea6"))}}]},{path:"/lodash",name:"Lodash",meta:{title:"Lodash"},component:function(){return t.e("home").then(t.bind(null,"eda2"))}},{path:"/element",name:"Element",meta:{title:"Element"},component:function(){return t.e("home").then(t.bind(null,"676f"))}},{path:"/css/triangle",name:"CSSTriangle",meta:{title:"钝角三角形"},component:function(){return t.e("home").then(t.bind(null,"3c0a"))}},{path:"/css/rectangle",name:"CSSRectangle",meta:{title:"矩形"},component:function(){return t.e("home").then(t.bind(null,"baa3"))}},{path:"/css/bubble",name:"CSSBubble",meta:{title:"气泡对话框"},component:function(){return t.e("home").then(t.bind(null,"c150"))}},{path:"/bubble",name:"Bubble",meta:{title:"冒泡排序"},component:function(){return t.e("home").then(t.bind(null,"9cd2"))}},{path:"/amount",name:"Amount",meta:{title:"金额展示"},component:function(){return t.e("home").then(t.bind(null,"1252"))}},{path:"/array",name:"Array",meta:{title:"数组元素交换"},component:function(){return t.e("home").then(t.bind(null,"1a47"))}},{path:"/v-console",name:"vConsole",meta:{title:"vConsole",keepAlive:!0},component:function(){return t.e("home").then(t.bind(null,"bb12"))}},{path:"/signed-board",name:"SignedBoard",meta:{title:"手签板"},component:function(){return t.e("home").then(t.bind(null,"b3a2"))}},{path:"/imgCDN",name:"ImgCDN",meta:{title:"img CDN"},component:function(){return t.e("home").then(t.bind(null,"6ee8"))}},{path:"/cloud-ui",name:"CloudUI",meta:{title:"Cloud UI"},component:function(){return t.e("home").then(t.bind(null,"cf55"))}}],_=new h["a"]({base:"/",routes:E}),k=_,S=(t("513c"),t("5cfb"),t("e7e5"),t("d399")),O=(t("b000"),t("1a23")),j=(t("be7f"),t("565f")),x=(t("66b9"),t("b650")),A=(t("a52c"),t("2ed4")),L=(t("537a"),t("ac28")),P=(t("159b"),t("b0c0"),[L["a"],A["a"],x["a"],j["a"],O["a"],S["a"]]),T={install:function(e){P.forEach((function(n){return[e.component(n.name,n)]}))}},N=(t("1951"),t("450d"),t("eedf")),$=t.n(N),z=(t("6611"),t("e772")),B=t.n(z),D=(t("1f1a"),t("4e4b")),H=t.n(D),I=(t("10cb"),t("f3ad")),M=t.n(I),J=[M.a,H.a,B.a,$.a],U={install:function(e){J.forEach((function(n){return[e.component(n.name,n)]}))}},q=(t("fdc9"),t("6e81")),F=t("acb7"),K=t("cb7c"),R=t("f880"),G=[F["a"],q["a"],K["a"]],Q={install:function(e){G.forEach((function(n){return[e.use(n)]})),e.use(R["a"])}};k.beforeEach((function(e,n,t){document.title=e.meta.title||"前端 Demo",t()}));var V=t("2909"),W=(t("99af"),{install:function(e){e.directive("log",{bind:function(e,n){e.addEventListener("click",(function(){window._czc.push(["_trackEvent"].concat(Object(V["a"])(n.value)))}),!1)},unbind:function(e){e.removeEventListener("click",(function(){console.log("remove")}))}})}}),X={install:function(e){e.use(W)}};o.a.config.productionTip=!1,o.a.use(T),o.a.use(U),o.a.use(Q),o.a.use(X),new o.a({router:k,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){},a0e4:function(e,n,t){},bd79:function(e,n,t){"use strict";t("a0e4")}});