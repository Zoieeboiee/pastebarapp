import{g as u,r as s}from"./index-f7F5Jf2R.js";function c(t,f){for(var n=0;n<f.length;n++){const i=f[n];if(typeof i!="string"&&!Array.isArray(i)){for(const e in i)if(e!=="default"&&!(e in t)){const o=Object.getOwnPropertyDescriptor(i,e);o&&Object.defineProperty(t,e,o.get?o:{enumerable:!0,get:()=>i[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(t,f){(function(n){n(s())})(function(n){n.defineMode("properties",function(){return{token:function(i,e){var o=i.sol()||e.afterSection,p=i.eol();if(e.afterSection=!1,o&&(e.nextMultiline?(e.inMultiline=!0,e.nextMultiline=!1):e.position="def"),p&&!e.nextMultiline&&(e.inMultiline=!1,e.position="def"),o)for(;i.eatSpace(););var r=i.next();return o&&(r==="#"||r==="!"||r===";")?(e.position="comment",i.skipToEnd(),"comment"):o&&r==="["?(e.afterSection=!0,i.skipTo("]"),i.eat("]"),"header"):r==="="||r===":"?(e.position="quote",null):(r==="\\"&&e.position==="quote"&&i.eol()&&(e.nextMultiline=!0),e.position)},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}}),n.defineMIME("text/x-properties","properties"),n.defineMIME("text/x-ini","properties")})})();var l=x.exports;const d=u(l),M=c({__proto__:null,default:d},[l]);export{M as p};