(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ea984dc"],{"1e53":function(n,t,o){"use strict";var e=o("db65"),a=o.n(e);a.a},b3a2:function(n,t,o){"use strict";o.r(t);var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("sy-scroll",{staticClass:"signed-board"},[o("sy-signed-board",{ref:"signedBoardRef",attrs:{options:n.options},on:{changeMoveCount:n.changeMoveCount}},[o("div",{staticClass:"btn-box"},[o("van-button",{on:{click:n.uploadImage}},[n._v("上传签名")]),o("van-button",{on:{click:n.signAgain}},[n._v("重签")])],1)])],1)},a=[];function s(n){let t=n.split(","),o=t[0].match(/:(.*?);/)[1],e=atob(t[1]),a=e.length,s=new Uint8Array(a);while(a--)s[a]=e.charCodeAt(a);return new Blob([s],{type:o})}var i={data:function(){return{moveCount:0,minMoveCount:50,options:{}}},methods:{changeMoveCount:function(n){this.moveCount=n},uploadImage:function(){if(this.moveCount){var n=this.$refs["signedBoardRef"].toImage();console.log(n);var t=s(n);console.log(t),this.$toast("上传成功")}else this.$toast("请先签名")},signAgain:function(){this.$refs["signedBoardRef"].clear()}}},c=i,r=(o("1e53"),o("9ca4")),u=Object(r["a"])(c,e,a,!1,null,"318aa780",null);t["default"]=u.exports},db65:function(n,t,o){}}]);