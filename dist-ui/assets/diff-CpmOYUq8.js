import{g as s,r as d}from"./index-lZtL9rhT.js";function c(n,f){for(var t=0;t<f.length;t++){const r=f[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(n,f){(function(t){t(d())})(function(t){t.defineMode("diff",function(){var r={"+":"positive","-":"negative","@":"meta"};return{token:function(e){var o=e.string.search(/[\t ]+?$/);if(!e.sol()||o===0)return e.skipToEnd(),("error "+(r[e.string.charAt(0)]||"")).replace(/ $/,"");var p=r[e.peek()]||e.skipToEnd();return o===-1?e.skipToEnd():e.pos=o,p}}}),t.defineMIME("text/x-diff","diff")})})();var i=u.exports;const a=s(i),g=c({__proto__:null,default:a},[i]);export{g as d};
