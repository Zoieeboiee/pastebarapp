import{g as x,r as z}from"./index-BZ_QCo8h.js";function O(l,a){for(var o=0;o<a.length;o++){const i=a[o];if(typeof i!="string"&&!Array.isArray(i)){for(const u in i)if(u!=="default"&&!(u in l)){const f=Object.getOwnPropertyDescriptor(i,u);f&&Object.defineProperty(l,u,f.get?f:{enumerable:!0,get:()=>i[u]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(l,a){(function(o){o(z())})(function(o){o.defineMode("solr",function(){var i=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,u=/[\|\!\+\-\*\?\~\^\&]/,f=/^(OR|AND|NOT|TO)$/i;function k(e){return parseFloat(e).toString()===e}function g(e){return function(t,n){for(var r=!1,c;(c=t.next())!=null&&!(c==e&&!r);)r=!r&&c=="\\";return r||(n.tokenize=s),"string"}}function d(e){return function(t,n){var r="operator";return e=="+"?r+=" positive":e=="-"?r+=" negative":e=="|"?t.eat(/\|/):e=="&"?t.eat(/\&/):e=="^"&&(r+=" boost"),n.tokenize=s,r}}function v(e){return function(t,n){for(var r=e;(e=t.peek())&&e.match(i)!=null;)r+=t.next();return n.tokenize=s,f.test(r)?"operator":k(r)?"number":t.peek()==":"?"field":"string"}}function s(e,t){var n=e.next();return n=='"'?t.tokenize=g(n):u.test(n)?t.tokenize=d(n):i.test(n)&&(t.tokenize=v(n)),t.tokenize!=s?t.tokenize(e,t):null}return{startState:function(){return{tokenize:s}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),o.defineMIME("text/x-solr","solr")})})();var p=b.exports;const y=x(p),m=O({__proto__:null,default:y},[p]);export{m as s};
