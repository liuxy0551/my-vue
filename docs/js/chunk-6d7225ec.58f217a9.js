(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d7225ec"],{"082d":function(t,e){function n(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;var o=Array(i);while(++r<i)o[r]=t[r+e];return o}t.exports=n},"0d7a":function(t,e,n){"use strict";var r=n("b2a2"),i=n("8a1c"),o=n("857c"),c=n("2732"),a=n("ef4c"),u=n("38eb"),l=n("d88d"),s=n("59da"),f=n("5139"),d=n("efe2"),p=[].push,v=Math.min,h=4294967295,g=!d((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var a,u,l,s=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,d+"g");while(a=f.call(g,r)){if(u=g.lastIndex,u>v&&(s.push(r.slice(v,a.index)),a.length>1&&a.index<r.length&&p.apply(s,a.slice(1)),l=a[0].length,v=u,s.length>=o))break;g.lastIndex===a.index&&g.lastIndex++}return v===r.length?!l&&g.test("")||s.push(""):s.push(r.slice(v)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=c(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var c=n(r,t,this,i,r!==e);if(c.done)return c.value;var f=o(t),d=String(this),p=a(f,RegExp),b=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),y=new p(g?f:"^(?:"+f.source+")",x),m=void 0===i?h:i>>>0;if(0===m)return[];if(0===d.length)return null===s(y,d)?[d]:[];var E=0,j=0,R=[];while(j<d.length){y.lastIndex=g?j:0;var A,S=s(y,g?d:d.slice(j));if(null===S||(A=v(l(y.lastIndex+(g?0:j)),d.length))===E)j=u(d,j,b);else{if(R.push(d.slice(E,j)),R.length===m)return R;for(var I=1;I<=S.length-1;I++)if(R.push(S[I]),R.length===m)return R;j=E=A}}return R.push(d.slice(E)),R}]}),!g)},1252:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amount"},[n("van-field",{attrs:{label:"金额数字：",type:"number",placeholder:"请输入金额，最长14位",maxlength:"14",clearable:"",autofocus:"","error-message":t.errMsg},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("ul",[n("li",[n("div",{staticClass:"label"},[t._v("方法一：")]),n("div",{staticClass:"value"},[t._v(t._s(t.amount1||"等待输入"))])]),n("li",[n("div",{staticClass:"label"},[t._v("方法二：")]),n("div",{staticClass:"value"},[t._v(t._s(t.amount2||"等待输入"))])])])],1)},i=[],o=(n("ecb4"),n("9302"),n("2eeb"),n("77ad"),n("e35a"),n("0d7a"),n("d5f4")),c=n.n(o),a={data:function(){return{amount:"",amount1:"",amount2:"",errMsg:""}},watch:{amount:function(t){var e=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;if(e.test(t)){this.errMsg="";var n=t.split(".")[0],r="";t.indexOf(".")>-1&&(r="."+t.split(".")[1]);var i=Math.ceil((n.length-3)/3);this.func1(t,n,r,i),this.func2(t,n,r,i)}else this.errMsg="金额格式不正确"}},methods:{func1:function(t,e,n,r){if(e.length>3){for(var i=[],o=0;o<r;o++)i.push(e.slice(e.length-3*(o+1),e.length-3*o));this.amount1=e.slice(0,e.length-3*r)+","+i.reverse().join(",")+n}else this.amount1=t},func2:function(t,e,n,r){if(e.length>3){var i=e.slice(0,e.length-3*r),o=e.slice(e.length-3*r),a=c()(o,3).map((function(t){return t.join("")}));this.amount2=i+","+a.join(",")+n}else this.amount2=t}}},u=a,l=(n("9093"),n("e90a")),s=Object(l["a"])(u,r,i,!1,null,"9c072ce6",null);e["default"]=s.exports},"22ef":function(t,e,n){"use strict";var r=n("efe2");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"25d5":function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function i(t,e){var i=typeof t;return e=null==e?n:e,!!e&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<e}t.exports=i},"27fa":function(t,e,n){var r=n("b9af"),i=Object.prototype,o=i.hasOwnProperty,c=i.toString,a=r?r.toStringTag:void 0;function u(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(u){}var i=c.call(t);return r&&(e?t[a]=n:delete t[a]),i}t.exports=u},"2eeb":function(t,e,n){"use strict";var r=n("1c8b"),i=n("5dfd").map,o=n("1ea7"),c=n("ff9c"),a=o("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"38eb":function(t,e,n){"use strict";var r=n("f62c").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"3dbc":function(t,e,n){},4074:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},"46ce":function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},"48b9":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("9edd"))},"50d3":function(t,e,n){var r=n("cb08"),i=n("6072");function o(t){return null!=t&&i(t.length)&&!r(t)}t.exports=o},5139:function(t,e,n){"use strict";var r=n("99ad"),i=n("22ef"),o=RegExp.prototype.exec,c=String.prototype.replace,a=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(a=function(t){var e,n,i,a,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,h=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",p)),s&&(n=new RegExp("^"+v+"$(?!\\s)",p)),u&&(e=f.lastIndex),i=o.call(d?n:f,g),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:u&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),s&&i&&i.length>1&&c.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=a},"533b":function(t,e,n){var r=n("4074"),i=n("50d3"),o=n("25d5"),c=n("dbbd");function a(t,e,n){if(!c(n))return!1;var a=typeof e;return!!("number"==a?i(n)&&o(e,n.length):"string"==a&&e in n)&&r(n[e],t)}t.exports=a},"59da":function(t,e,n){var r=n("2118"),i=n("5139");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6072:function(t,e){var n=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}t.exports=r},"77ad":function(t,e,n){"use strict";var r=n("1c8b"),i=n("a719"),o=n("74e7"),c=n("e1d6"),a=n("d88d"),u=n("da10"),l=n("1bbd"),s=n("90fb"),f=n("1ea7"),d=n("ff9c"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),g=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,r,s,f=u(this),d=a(f.length),p=c(t,d),v=c(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,p,v);for(r=new(void 0===n?Array:n)(b(v-p,0)),s=0;p<v;p++,s++)p in f&&l(r,s,f[p]);return r.length=s,r}})},8096:function(t,e,n){var r=n("48b9"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},"8a1c":function(t,e,n){var r=n("a719"),i=n("2118"),o=n("90fb"),c=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},9093:function(t,e,n){"use strict";var r=n("3dbc"),i=n.n(r);i.a},9302:function(t,e,n){"use strict";var r=n("1c8b"),i=n("692f"),o=n("da10"),c=n("d7e1"),a=[].join,u=i!=Object,l=c("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(t){return a.call(o(this),void 0===t?",":t)}})},"939d":function(t,e,n){var r=n("c9aa"),i=n("46ce"),o="[object Symbol]";function c(t){return"symbol"==typeof t||i(t)&&r(t)==o}t.exports=c},"99ad":function(t,e,n){"use strict";var r=n("857c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"9fa9":function(t,e,n){var r=n("fdf7"),i=1/0,o=17976931348623157e292;function c(t){if(!t)return 0===t?t:0;if(t=r(t),t===i||t===-i){var e=t<0?-1:1;return e*o}return t===t?t:0}t.exports=c},a1f8:function(t,e){var n=Object.prototype,r=n.toString;function i(t){return r.call(t)}t.exports=i},b2a2:function(t,e,n){"use strict";n("e35a");var r=n("1944"),i=n("efe2"),o=n("90fb"),c=n("5139"),a=n("0fc1"),u=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=o(t),h=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!l||!s||d)||"split"===t&&!p){var b=/./[v],x=n(v,""[t],(function(t,e,n,r,i){return e.exec===c?h&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],m=x[1];r(String.prototype,t,y),r(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&a(RegExp.prototype[v],"sham",!0)}},b9af:function(t,e,n){var r=n("8096"),i=r.Symbol;t.exports=i},c9aa:function(t,e,n){var r=n("b9af"),i=n("27fa"),o=n("a1f8"),c="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function l(t){return null==t?void 0===t?a:c:u&&u in Object(t)?i(t):o(t)}t.exports=l},cb08:function(t,e,n){var r=n("c9aa"),i=n("dbbd"),o="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";function l(t){if(!i(t))return!1;var e=r(t);return e==c||e==a||e==o||e==u}t.exports=l},d5f4:function(t,e,n){var r=n("082d"),i=n("533b"),o=n("f035"),c=Math.ceil,a=Math.max;function u(t,e,n){e=(n?i(t,e,n):void 0===e)?1:a(o(e),0);var u=null==t?0:t.length;if(!u||e<1)return[];var l=0,s=0,f=Array(c(u/e));while(l<u)f[s++]=r(t,l,l+=e);return f}t.exports=u},dbbd:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},e35a:function(t,e,n){"use strict";var r=n("1c8b"),i=n("5139");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},f035:function(t,e,n){var r=n("9fa9");function i(t){var e=r(t),n=e%1;return e===e?n?e-n:e:0}t.exports=i},f62c:function(t,e,n){var r=n("3da3"),i=n("2732"),o=function(t){return function(e,n){var o,c,a=String(i(e)),u=r(n),l=a.length;return u<0||u>=l?t?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===l||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):o:t?a.slice(u,u+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},fdf7:function(t,e,n){var r=n("dbbd"),i=n("939d"),o=NaN,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;function f(t){if("number"==typeof t)return t;if(i(t))return o;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=u.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=f}}]);