(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-324ed5ff"],{"00fd":function(t,n,e){var r=e("9e69"),i=Object.prototype,o=i.hasOwnProperty,u=i.toString,a=r?r.toStringTag:void 0;function c(t){var n=o.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(c){}var i=u.call(t);return r&&(n?t[a]=e:delete t[a]),i}t.exports=c},1252:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"amount"},[e("div",{staticClass:"input-btn"},[e("van-field",{attrs:{label:"金额数字：",type:"number",placeholder:"请输入最长12位数字",maxlength:"12",clearable:"",autofocus:"","error-message":t.errMsg},model:{value:t.amount,callback:function(n){t.amount=n},expression:"amount"}}),e("van-button",{directives:[{name:"log",rawName:"v-log",value:["金额数字",t.amount],expression:"['金额数字', amount]"}],attrs:{type:"primary"},on:{click:t.done}},[t._v("确认")])],1),e("ul",[e("li",[e("div",{staticClass:"label"},[t._v("方法一：")]),e("div",{staticClass:"value"},[t._v(t._s(t.amount1||"等待输入"))])]),e("li",[e("div",{staticClass:"label"},[t._v("方法二：")]),e("div",{staticClass:"value"},[t._v(t._s(t.amount2||"等待输入"))])])])])},i=[],o=(e("1276"),e("ac1f"),e("fb6a"),e("a15b"),e("d81d"),e("91c8")),u=e.n(o),a={data:function(){return{amount:"",amount1:"",amount2:"",errMsg:""}},methods:{done:function(){var t=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;if(t.test(this.amount)){this.errMsg="";var n=this.amount.split(".")[0],e="";this.amount.indexOf(".")>-1&&(e="."+this.amount.split(".")[1]);var r=Math.ceil((n.length-3)/3);this.func1(this.amount,n,e,r),this.func2(this.amount,n,e,r)}else this.errMsg="金额格式不正确"},func1:function(t,n,e,r){if(n.length>3){for(var i=[],o=0;o<r;o++)i.push(n.slice(n.length-3*(o+1),n.length-3*o));this.amount1=n.slice(0,n.length-3*r)+","+i.reverse().join(",")+e}else this.amount1=t},func2:function(t,n,e,r){if(n.length>3){var i=n.slice(0,n.length-3*r),o=n.slice(n.length-3*r),a=u()(o,3).map((function(t){return t.join("")}));this.amount2=i+","+a.join(",")+e}else this.amount2=t}}},c=a,l=(e("f51f"),e("2877")),s=Object(l["a"])(c,r,i,!1,null,"da96e7a4",null);n["default"]=s.exports},1276:function(t,n,e){"use strict";var r=e("d784"),i=e("44e7"),o=e("825a"),u=e("1d80"),a=e("4840"),c=e("8aa5"),l=e("50c4"),s=e("14c3"),f=e("9263"),p=e("d039"),v=[].push,d=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(u(this)),o=void 0===e?h:e>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,o);var a,c,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,p+"g");while(a=f.call(g,r)){if(c=g.lastIndex,c>d&&(s.push(r.slice(d,a.index)),a.length>1&&a.index<r.length&&v.apply(s,a.slice(1)),l=a[0].length,d=c,s.length>=o))break;g.lastIndex===a.index&&g.lastIndex++}return d===r.length?!l&&g.test("")||s.push(""):s.push(r.slice(d)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=u(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,e):r.call(String(i),n,e)},function(t,i){var u=e(r,t,this,i,r!==n);if(u.done)return u.value;var f=o(t),p=String(this),v=a(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),m=new v(g?f:"^(?:"+f.source+")",b),y=void 0===i?h:i>>>0;if(0===y)return[];if(0===p.length)return null===s(m,p)?[p]:[];var E=0,j=0,R=[];while(j<p.length){m.lastIndex=g?j:0;var I,w=s(m,g?p:p.slice(j));if(null===w||(I=d(l(m.lastIndex+(g?0:j)),p.length))===E)j=c(p,j,x);else{if(R.push(p.slice(E,j)),R.length===y)return R;for(var O=1;O<=w.length-1;O++)if(R.push(w[O]),R.length===y)return R;j=E=I}}return R.push(p.slice(E)),R}]}),!g)},1310:function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},"14c3":function(t,n,e){var r=e("c6b6"),i=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var o=e.call(t,n);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},"1a8c":function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},"29f3":function(t,n){var e=Object.prototype,r=e.toString;function i(t){return r.call(t)}t.exports=i},"2b10":function(t,n){function e(t,n,e){var r=-1,i=t.length;n<0&&(n=-n>i?0:i+n),e=e>i?i:e,e<0&&(e+=i),i=n>e?0:e-n>>>0,n>>>=0;var o=Array(i);while(++r<i)o[r]=t[r+n];return o}t.exports=e},"2b3e":function(t,n,e){var r=e("585a"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},"30c9":function(t,n,e){var r=e("9520"),i=e("b218");function o(t){return null!=t&&i(t.length)&&!r(t)}t.exports=o},3729:function(t,n,e){var r=e("9e69"),i=e("00fd"),o=e("29f3"),u="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function l(t){return null==t?void 0===t?a:u:c&&c in Object(t)?i(t):o(t)}t.exports=l},"44e7":function(t,n,e){var r=e("861d"),i=e("c6b6"),o=e("b622"),u=o("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[u])?!!n:"RegExp"==i(t))}},"4b17":function(t,n,e){var r=e("6428");function i(t){var n=r(t),e=n%1;return n===n?e?n-e:n:0}t.exports=i},"4cef":function(t,n){var e=/\s/;function r(t){var n=t.length;while(n--&&e.test(t.charAt(n)));return n}t.exports=r},"585a":function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("c8ba"))},6428:function(t,n,e){var r=e("b4b0"),i=1/0,o=17976931348623157e292;function u(t){if(!t)return 0===t?t:0;if(t=r(t),t===i||t===-i){var n=t<0?-1:1;return n*o}return t===t?t:0}t.exports=u},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},"8d74":function(t,n,e){var r=e("4cef"),i=/^\s+/;function o(t){return t?t.slice(0,r(t)+1).replace(i,""):t}t.exports=o},"91c8":function(t,n,e){var r=e("2b10"),i=e("9aff"),o=e("4b17"),u=Math.ceil,a=Math.max;function c(t,n,e){n=(e?i(t,n,e):void 0===n)?1:a(o(n),0);var c=null==t?0:t.length;if(!c||n<1)return[];var l=0,s=0,f=Array(u(c/n));while(l<c)f[s++]=r(t,l,l+=n);return f}t.exports=c},9263:function(t,n,e){"use strict";var r=e("ad6d"),i=e("9f7f"),o=RegExp.prototype.exec,u=String.prototype.replace,a=o,c=function(){var t=/a/,n=/b*/g;return o.call(t,"a"),o.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=c||s||l;f&&(a=function(t){var n,e,i,a,f=this,p=l&&f.sticky,v=r.call(f),d=f.source,h=0,g=t;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),e=new RegExp("^(?:"+d+")",v)),s&&(e=new RegExp("^"+d+"$(?!\\s)",v)),c&&(n=f.lastIndex),i=o.call(p?e:f,g),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:c&&i&&(f.lastIndex=f.global?i.index+i[0].length:n),s&&i&&i.length>1&&u.call(i[0],e,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=a},9520:function(t,n,e){var r=e("3729"),i=e("1a8c"),o="[object AsyncFunction]",u="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function l(t){if(!i(t))return!1;var n=r(t);return n==u||n==a||n==o||n==c}t.exports=l},9638:function(t,n){function e(t,n){return t===n||t!==t&&n!==n}t.exports=e},"9aff":function(t,n,e){var r=e("9638"),i=e("30c9"),o=e("c098"),u=e("1a8c");function a(t,n,e){if(!u(e))return!1;var a=typeof n;return!!("number"==a?i(e)&&o(n,e.length):"string"==a&&n in e)&&r(e[n],t)}t.exports=a},"9e69":function(t,n,e){var r=e("2b3e"),i=r.Symbol;t.exports=i},"9f7f":function(t,n,e){"use strict";var r=e("d039");function i(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,n,e){"use strict";var r=e("23e7"),i=e("44ad"),o=e("fc6a"),u=e("a640"),a=[].join,c=i!=Object,l=u("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(t){return a.call(o(this),void 0===t?",":t)}})},ac1f:function(t,n,e){"use strict";var r=e("23e7"),i=e("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b218:function(t,n){var e=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}t.exports=r},b2d6:function(t,n,e){},b4b0:function(t,n,e){var r=e("8d74"),i=e("1a8c"),o=e("ffd6"),u=NaN,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;function f(t){if("number"==typeof t)return t;if(o(t))return u;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=c.test(t);return e||l.test(t)?s(t.slice(2),e?2:8):a.test(t)?u:+t}t.exports=f},c098:function(t,n){var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function i(t,n){var i=typeof t;return n=null==n?e:n,!!n&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<n}t.exports=i},d784:function(t,n,e){"use strict";e("ac1f");var r=e("6eeb"),i=e("d039"),o=e("b622"),u=e("9263"),a=e("9112"),c=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var d=o(t),h=!i((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),g=h&&!i((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[c]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!h||!g||"replace"===t&&(!l||!s||p)||"split"===t&&!v){var x=/./[d],b=e(d,""[t],(function(t,n,e,r,i){return n.exec===u?h&&!i?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],y=b[1];r(String.prototype,t,m),r(RegExp.prototype,d,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}f&&a(RegExp.prototype[d],"sham",!0)}},d81d:function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").map,o=e("1dde"),u=o("map");r({target:"Array",proto:!0,forced:!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f51f:function(t,n,e){"use strict";e("b2d6")},ffd6:function(t,n,e){var r=e("3729"),i=e("1310"),o="[object Symbol]";function u(t){return"symbol"==typeof t||i(t)&&r(t)==o}t.exports=u}}]);