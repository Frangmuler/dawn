!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){t.exports=e(1)},function(t,n,e){var r=e(2);r.init({language:"zh-CN"}),console.log(r("hello")),console.log(r("hello",{name:"i18n"})),console.log(r("test1",null,"test1-default1")),console.log(r("test2")),console.log(r("test1","test1-default2"))},function(t,n,e){(function(n){function r(){return r.get.apply(r,arguments)}var o=e(4),i=e(5);r.locale={},r.get=function(t,n,e){i.isString(n)&&(e=[n,n=e][0]);var r=this.locale[t]||e;return r=i.isNull(r)?t:r,i.each(n,function(t,n){r=r.replace(new RegExp("{"+t+"}","gm"),n||"")}),r},r.getLocale=function(t){var e=n.__locale;return!t||e?e:o[t]||o[t.split("-")[0]]||i.each(o,function(n){if(n.split("-")[0]==t.split("-")[0])return o[n]})},r.init=function(t){t=t||{};var n=t.language||"",e=t.defaultLanguage||"zh-CN";this.locale=this.getLocale(n)||this.getLocale(e)||{}},r.init(),t.exports=r}).call(n,e(3))},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n){t.exports={_t:1524742207975}},function(t,n,e){"use strict";function r(){}function o(t){return Object.prototype.toString.call(t)}function i(t){return/^\[object (.+)\]$/i.exec(o(t))[1]}function u(t){return void 0===t||null===t}function c(t){return u(t)?t:t.trim?t.trim():t.replace(/(^[\\s]*)|([\\s]*$)/g,"")}function a(t,n,e){return u(t)?t:t.replace(new RegExp(n,"g"),e)}function f(t,n){return!u(t)&&!u(n)&&0===t.indexOf(n)}function l(t,n){return!u(t)&&!u(n)&&t.indexOf(n)>-1}function s(t,n){return!u(t)&&!u(n)&&t.indexOf(n)===t.length-n.length}function p(t,n){return!u(t)&&!u(n)&&(n in t||t.hasOwnProperty(n))}function g(t){return!u(t)&&"function"==typeof t}function h(t){return!u(t)&&"AsyncFunction"===i(t)}function y(t){return!u(t)&&"GeneratorFunction"===i(t)}function b(t){return!u(t)&&"String"===i(t)}function v(t){return!u(t)&&"Number"===i(t)}function d(t){return!u(t)&&"Boolean"===i(t)}function m(t){return!u(t)&&(win.Element?t instanceof Element:t.tagName&&t.nodeType&&t.nodeName&&t.attributes&&t.ownerDocument)}function O(t){return!u(t)&&t instanceof Text}function x(t){if(u(t))return!1;var n=i(t);return"Object"===n||"Array"===n}function w(t){if(u(t))return!1;var n="Array"===i(t),e=t instanceof Array,r=!b(t)&&v(t.length)&&g(t.splice),o=!b(t)&&v(t.length)&&t[0];return n||e||r||o}function _(t){return!u(t)&&t instanceof Date}function j(t){return t instanceof RegExp}function P(t){return u(t)?[]:Array.prototype.slice.call(t)}function E(t){return v(t)?new Date(t):b(t)?new Date(a(a(t,"-","/"),"T"," ")):_(t)?t:null}function C(t,n,e){if(!u(t)&&!u(n))if(w(t))for(var r=t.length,o=0;o<r;o++){var i=n.call(e||t[o],o,t[o]);if(!u(i))return i}else for(var c in t){var i=n.call(e||t[c],c,t[c]);if(!u(i))return i}}function M(t,n,e){if(u(n)||u(t))return t;t=E(t),e=e||{};var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"w+":t.getDay(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)if(new RegExp("("+o+")").test(n)){var i=r[o];i=e[i]||i,n=n.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length))}return n}function A(t,n,e){return n=n||(w(t)?[]:{}),C(t,function(r){if(!(e&&e.indexOf(r)>-1))if(delete n[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}catch(e){n[r]=t[r]}else n[r]=t[r]}),n}function D(t,n){if(u(t)||b(t)||v(t)||d(t)||_(t))return t;var e=t;try{e=new t.constructor}catch(t){}return C(t,function(t,r){e[t]==r||l(n,t)||(x(r)?e[t]=D(r,n):e[t]=r)}),["toString","valueOf"].forEach(function(r){l(n,r)||$(e,r,t[r])}),e}function S(t,n,e,r,o){if(r)switch(r){case 1:return S(t.prototype,n.prototype,e,0);case 2:S(t.prototype,n.prototype,e,0);break;case 3:return S(t,n.prototype,e,0);case 4:return S(t.prototype,n,e,0)}return n=n||{},t=t||(w(n)?[]:{}),N(n).forEach(function(r){l(e,r)||o&&u(n[r])||(!x(n[r])||n[r].constructor!=Object&&n[r].constructor!=Array&&null!=n[r].constructor?t[r]=n[r]:t[r]=S(t[r],n[r],e,0,o))}),t}function $(t,n,e){if(arguments.length<1)throw new Error("Parameter missing");if(arguments.length<2)return C(t,function(n,e){$(t,n,e)});if(arguments.length<3)return $(t,n,t[n]);try{Object.defineProperty(t,n,{get:function(){return e},set:function(){throw new Error("Cannot assign to final property:"+n)},enumerable:!1,configurable:!1})}catch(r){t[n]=e}}function N(t){if(Object.keys)return Object.keys(t);var n=[];return C(t,function(t){n.push(t)}),n}function R(t,n){function e(){}if(Object.create)return Object.create(t,n);e.prototype=t;var r=new e;return n&&A(n,r),r}function F(t,n){if(Object.setPrototypeOf)return Object.setPrototypeOf(t,n||R(null));"__proto__"in Object||A(n,t),t.__proto__=n}function L(t){return t.__proto__?t.__proto__:Object.getPrototypeOf?Object.getPrototypeOf(t):t.constructor?t.constructor.prototype:void 0}function T(t,n){if(t===n)return!0;if(!x(t)||!x(n))return!1;var e=N(t),r=N(n);if(e.length!==r.length)return!1;var o=e.concat(r),i=R(null),u=!0;return C(o,function(e,r){i[r]||(T(t[r],n[r])||(u=!1),i[r]=!0)}),u}function k(t,n,e,r){if(r||(r=[e,e=r][0]),e=Math.abs(e||1),t<n)for(var o=t;o<=n;o+=e)r(o);else for(var o=t;o>=n;o-=e)r(o)}function z(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function B(t,n){var e=w(t)?[]:{};return C(t,function(t,r){e[t]=n(t,r)}),e}function U(t,n,e){u(t)||u(n)||""===n||(w(n)||(n=n.replace(/\[/,".").replace(/\]/,".").split(".")),C(n,function(r,o){u(o)||o.length<1||(r===n.length-1?t[o]=e:(t[o]=t[o]||{},t=t[o]))}))}function q(t,n){return u(t)||u(n)||""===n?t:(w(n)||(n=n.replace(/\[/,".").replace(/\]/,".").split(".")),C(n,function(n,e){u(e)||e.length<1||u(t)||(t=t[e])}),t)}function G(t){if(u(t))return t;var n=[];return C(t,function(t,e){n.indexOf(e)>-1||n.push(e)}),n}function H(t){if(!t)return[];var n=t.toString(),e=n.split(")")[0].split("=>")[0].split("(");return(e[1]||e[0]).split(",").map(function(t){return c(t)}).filter(function(t){return"function"!=t})}function W(t,n){if(!t)return t;n=n||40;var e=t.length,r=n/2;return e>n?t.substr(0,r)+"..."+t.substr(e-r):t}function Y(t){return b(t)?t.substring(0,1).toUpperCase()+t.substring(1):""}function Z(t){return b(t)?t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function I(t,n){return b(t)?(t&&(t=t.replace(/\-[a-z0-9]/g,function(t){return t.slice(1).toUpperCase()}),t=t.replace(/^[a-z]/i,function(t){return n?t.toUpperCase():t.toLowerCase()})),t):""}function J(t){return b(t)?(t&&(t=t.replace(/([A-Z])/g,"-$1"),"-"==t[0]&&(t=t.slice(1))),t.toLowerCase()):""}function K(t){var n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return t.replace(n,"<$1></$2>")}function Q(t){t=t||" ";var n=document.createElement("div");n.innerHTML=K(c(t));var e=P(n.childNodes);return C(e,function(t,e){n.removeChild(e)}),e}Object.defineProperty(n,"__esModule",{value:!0});var V=p;n.noop=r,n.toString=o,n.getType=i,n.isNull=u,n.trim=c,n.replace=a,n.startWith=f,n.contains=l,n.endWith=s,n.has=p,n.hasProperty=V,n.isFunction=g,n.isAsyncFunction=h,n.isGeneratorFunction=y,n.isString=b,n.isNumber=v,n.isBoolean=d,n.isElement=m,n.isText=O,n.isObject=x,n.isArray=w,n.isDate=_,n.isRegexp=j,n.toArray=P,n.toDate=E,n.each=C,n.formatDate=M,n.copy=A,n.clone=D,n.mix=S,n.final=$,n.keys=N,n.create=R,n.setPrototypeOf=F,n.getPrototypeOf=L,n.deepEqual=T,n.fromTo=k,n.newGuid=z,n.map=B,n.setByPath=U,n.getByPath=q,n.unique=G,n.getFunctionArgumentNames=H,n.short=W,n.firstUpper=Y,n.escapeRegExp=Z,n.toCamelCase=I,n.toSplitCase=J,n.htmlPrefilter=K,n.parseHTML=Q}]);
//# sourceMappingURL=index.js.map