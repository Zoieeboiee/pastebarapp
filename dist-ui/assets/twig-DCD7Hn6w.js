import{g as s,c as p}from"./index-CRBEM506.js";import{r as b}from"./multiplex-C31HUmz_.js";function m(u,c){for(var i=0;i<c.length;i++){const t=c[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in u)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(u,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(u,c){(function(i){i(p,b())})(function(i){i.defineMode("twig:inner",function(){var t=["and","as","autoescape","endautoescape","block","do","endblock","else","elseif","extends","for","endfor","embed","endembed","filter","endfilter","flush","from","if","endif","in","is","include","import","not","or","set","spaceless","endspaceless","with","endwith","trans","endtrans","blocktrans","endblocktrans","macro","endmacro","use","verbatim","endverbatim"],r=/^[+\-*&%=<>!?|~^]/,o=/^[:\[\(\{]/,l=["true","false","null","empty","defined","divisibleby","divisible by","even","odd","iterable","sameas","same as"],d=/^(\d[+\-\*\/])?\d+(\.\d+)?/;t=new RegExp("(("+t.join(")|(")+"))\\b"),l=new RegExp("(("+l.join(")|(")+"))\\b");function g(e,n){var f=e.peek();if(n.incomment)return e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(n.intag){if(n.operator){if(n.operator=!1,e.match(l))return"atom";if(e.match(d))return"number"}if(n.sign){if(n.sign=!1,e.match(l))return"atom";if(e.match(d))return"number"}if(n.instring)return f==n.instring&&(n.instring=!1),e.next(),"string";if(f=="'"||f=='"')return n.instring=f,e.next(),"string";if(e.match(n.intag+"}")||e.eat("-")&&e.match(n.intag+"}"))return n.intag=!1,"tag";if(e.match(r))return n.operator=!0,"operator";if(e.match(o))n.sign=!0;else if(e.eat(" ")||e.sol()){if(e.match(t))return"keyword";if(e.match(l))return"atom";if(e.match(d))return"number";e.sol()&&e.next()}else e.next();return"variable"}else if(e.eat("{")){if(e.eat("#"))return n.incomment=!0,e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(f=e.eat(/\{|%/))return n.intag=f,f=="{"&&(n.intag="}"),e.eat("-"),"tag"}e.next()}return{startState:function(){return{}},token:function(e,n){return g(e,n)}}}),i.defineMode("twig",function(t,r){var o=i.getMode(t,"twig:inner");return!r||!r.base?o:i.multiplexingMode(i.getMode(t,r.base),{open:/\{[{#%]/,close:/[}#%]\}/,mode:o,parseDelimiters:!0})}),i.defineMIME("text/x-twig","twig")})})();var a=x.exports;const h=s(a),v=m({__proto__:null,default:h},[a]);export{v as t};
