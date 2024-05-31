import{g as oe,c as ie}from"./index-e2EfRfh_.js";import{a as ae}from"./python-BbO_iHRS.js";import{r as le}from"./stex-CVXN_hFL.js";import{r as fe}from"./overlay-DHk1_Xk_.js";function ue(A,N){for(var f=0;f<N.length;f++){const p=N[f];if(typeof p!="string"&&!Array.isArray(p)){for(const i in p)if(i!=="default"&&!(i in A)){const x=Object.getOwnPropertyDescriptor(p,i);x&&Object.defineProperty(A,i,x.get?x:{enumerable:!0,get:()=>p[i]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var te={exports:{}};(function(A,N){(function(f){f(ie,ae,le(),fe())})(function(f){f.defineMode("rst",function(p,i){var x=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,b=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,w=/^``[^`\s](?:[^`]*[^`\s])``/,u=/^(?:[\d]+(?:[\.,]\d+)*)/,E=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,m=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,T="[Hh][Tt][Tt][Pp][Ss]?://",P="(?:[\\d\\w.-]+)\\.(?:\\w{2,6})",t="(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*",y=new RegExp("^"+T+P+t),R={token:function(l){if(l.match(x)&&l.match(/\W+|$/,!1))return"strong";if(l.match(b)&&l.match(/\W+|$/,!1))return"em";if(l.match(w)&&l.match(/\W+|$/,!1))return"string-2";if(l.match(u))return"number";if(l.match(E))return"positive";if(l.match(m))return"negative";if(l.match(y))return"link";for(;l.next()!=null&&!(l.match(x,!1)||l.match(b,!1)||l.match(w,!1)||l.match(u,!1)||l.match(E,!1)||l.match(m,!1)||l.match(y,!1)););return null}},W=f.getMode(p,i.backdrop||"rst-base");return f.overlayMode(W,R,!0)},"python","stex"),f.defineMode("rst-base",function(p){function i(n){var e=Array.prototype.slice.call(arguments,1);return n.replace(/{(\d+)}/g,function(r,j){return typeof e[j]!="undefined"?e[j]:r})}var x=f.getMode(p,"python"),b=f.getMode(p,"stex"),w="\\s+",u="(?:\\s*|\\W|$)",E=new RegExp(i("^{0}",u)),m="(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",T=new RegExp(i("^{0}",m)),P="(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",t=i("(?:{0}|`{1}`)",m,P),y="(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",R="(?:[^\\`]+)",W=new RegExp(i("^{0}",R)),l=new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),L=new RegExp(i("^\\.\\.{0}",w)),q=new RegExp(i("^_{0}:{1}|^__:{1}",t,u)),s=new RegExp(i("^{0}::{1}",t,u)),S=new RegExp(i("^\\|{0}\\|{1}{2}::{3}",y,w,t,u)),M=new RegExp(i("^\\[(?:\\d+|#{0}?|\\*)]{1}",t,u)),z=new RegExp(i("^\\[{0}\\]{1}",t,u)),O=new RegExp(i("^\\|{0}\\|",y)),H=new RegExp(i("^\\[(?:\\d+|#{0}?|\\*)]_",t)),B=new RegExp(i("^\\[{0}\\]_",t)),G=new RegExp(i("^{0}__?",t)),g=new RegExp(i("^`{0}`_",R)),_=new RegExp(i("^:{0}:`{1}`{2}",m,R,u)),k=new RegExp(i("^`{1}`:{0}:{2}",m,R,u)),$=new RegExp(i("^:{0}:{1}",m,u)),J=new RegExp(i("^{0}",t)),K=new RegExp(i("^::{0}",u)),X=new RegExp(i("^\\|{0}\\|",y)),Q=new RegExp(i("^{0}",w)),U=new RegExp(i("^{0}",t)),V=new RegExp(i("^::{0}",u)),Y=new RegExp("^_"),Z=new RegExp(i("^{0}|_",t)),C=new RegExp(i("^:{0}",u)),ee=new RegExp("^::\\s*$"),ne=new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s");function o(n,e){var r=null;if(n.sol()&&n.match(ne,!1))c(e,I,{mode:x,local:f.startState(x)});else if(n.sol()&&n.match(L))c(e,h),r="meta";else if(n.sol()&&n.match(l))c(e,o),r="header";else if(v(e)==_||n.match(_,!1))switch(d(e)){case 0:c(e,o,a(_,1)),n.match(/^:/),r="meta";break;case 1:c(e,o,a(_,2)),n.match(T),r="keyword",n.current().match(/^(?:math|latex)/)&&(e.tmp_stex=!0);break;case 2:c(e,o,a(_,3)),n.match(/^:`/),r="meta";break;case 3:if(e.tmp_stex&&(e.tmp_stex=void 0,e.tmp={mode:b,local:f.startState(b)}),e.tmp){if(n.peek()=="`"){c(e,o,a(_,4)),e.tmp=void 0;break}r=e.tmp.mode.token(n,e.tmp.local);break}c(e,o,a(_,4)),n.match(W),r="string";break;case 4:c(e,o,a(_,5)),n.match(/^`/),r="meta";break;case 5:c(e,o,a(_,6)),n.match(E);break;default:c(e,o)}else if(v(e)==k||n.match(k,!1))switch(d(e)){case 0:c(e,o,a(k,1)),n.match(/^`/),r="meta";break;case 1:c(e,o,a(k,2)),n.match(W),r="string";break;case 2:c(e,o,a(k,3)),n.match(/^`:/),r="meta";break;case 3:c(e,o,a(k,4)),n.match(T),r="keyword";break;case 4:c(e,o,a(k,5)),n.match(/^:/),r="meta";break;case 5:c(e,o,a(k,6)),n.match(E);break;default:c(e,o)}else if(v(e)==$||n.match($,!1))switch(d(e)){case 0:c(e,o,a($,1)),n.match(/^:/),r="meta";break;case 1:c(e,o,a($,2)),n.match(T),r="keyword";break;case 2:c(e,o,a($,3)),n.match(/^:/),r="meta";break;case 3:c(e,o,a($,4)),n.match(E);break;default:c(e,o)}else if(v(e)==O||n.match(O,!1))switch(d(e)){case 0:c(e,o,a(O,1)),n.match(X),r="variable-2";break;case 1:c(e,o,a(O,2)),n.match(/^_?_?/)&&(r="link");break;default:c(e,o)}else if(n.match(H))c(e,o),r="quote";else if(n.match(B))c(e,o),r="quote";else if(n.match(G))c(e,o),(!n.peek()||n.peek().match(/^\W$/))&&(r="link");else if(v(e)==g||n.match(g,!1))switch(d(e)){case 0:!n.peek()||n.peek().match(/^\W$/)?c(e,o,a(g,1)):n.match(g);break;case 1:c(e,o,a(g,2)),n.match(/^`/),r="link";break;case 2:c(e,o,a(g,3)),n.match(W);break;case 3:c(e,o,a(g,4)),n.match(/^`_/),r="link";break;default:c(e,o)}else n.match(ee)?c(e,re):n.next()&&c(e,o);return r}function h(n,e){var r=null;if(v(e)==S||n.match(S,!1))switch(d(e)){case 0:c(e,h,a(S,1)),n.match(X),r="variable-2";break;case 1:c(e,h,a(S,2)),n.match(Q);break;case 2:c(e,h,a(S,3)),n.match(U),r="keyword";break;case 3:c(e,h,a(S,4)),n.match(V),r="meta";break;default:c(e,o)}else if(v(e)==s||n.match(s,!1))switch(d(e)){case 0:c(e,h,a(s,1)),n.match(J),r="keyword",n.current().match(/^(?:math|latex)/)?e.tmp_stex=!0:n.current().match(/^python/)&&(e.tmp_py=!0);break;case 1:c(e,h,a(s,2)),n.match(K),r="meta",(n.match(/^latex\s*$/)||e.tmp_stex)&&(e.tmp_stex=void 0,c(e,I,{mode:b,local:f.startState(b)}));break;case 2:c(e,h,a(s,3)),(n.match(/^python\s*$/)||e.tmp_py)&&(e.tmp_py=void 0,c(e,I,{mode:x,local:f.startState(x)}));break;default:c(e,o)}else if(v(e)==q||n.match(q,!1))switch(d(e)){case 0:c(e,h,a(q,1)),n.match(Y),n.match(Z),r="link";break;case 1:c(e,h,a(q,2)),n.match(C),r="meta";break;default:c(e,o)}else n.match(M)||n.match(z)?(c(e,o),r="quote"):(n.eatSpace(),n.eol()?c(e,o):(n.skipToEnd(),c(e,ce),r="comment"));return r}function ce(n,e){return D(n,e,"comment")}function re(n,e){return D(n,e,"meta")}function D(n,e,r){return n.eol()||n.eatSpace()?(n.skipToEnd(),r):(c(e,o),null)}function I(n,e){return e.ctx.mode&&e.ctx.local?n.sol()?(n.eatSpace()||c(e,o),null):e.ctx.mode.token(n,e.ctx.local):(c(e,o),null)}function a(n,e,r,j){return{phase:n,stage:e,mode:r,local:j}}function c(n,e,r){n.tok=e,n.ctx=r||{}}function d(n){return n.ctx.stage||0}function v(n){return n.ctx.phase}return{startState:function(){return{tok:o,ctx:a(void 0,0)}},copyState:function(n){var e=n.ctx,r=n.tmp;return e.local&&(e={mode:e.mode,local:f.copyState(e.mode,e.local)}),r&&(r={mode:r.mode,local:f.copyState(r.mode,r.local)}),{tok:n.tok,ctx:e,tmp:r}},innerMode:function(n){return n.tmp?{state:n.tmp.local,mode:n.tmp.mode}:n.ctx.mode?{state:n.ctx.local,mode:n.ctx.mode}:null},token:function(n,e){return e.tok(n,e)}}},"python","stex"),f.defineMIME("text/x-rst","rst")})})();var F=te.exports;const xe=oe(F),ke=ue({__proto__:null,default:xe},[F]);export{ke as r};
