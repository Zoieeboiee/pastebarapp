import{g as _,c as $}from"./index-6eJdXugE.js";import{a as M}from"./css-DBYHELj6.js";function W(w,a){for(var u=0;u<a.length;u++){const c=a[u];if(typeof c!="string"&&!Array.isArray(c)){for(const i in c)if(i!=="default"&&!(i in w)){const d=Object.getOwnPropertyDescriptor(c,i);d&&Object.defineProperty(w,i,d.get?d:{enumerable:!0,get:()=>c[i]})}}}return Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}var F={exports:{}};(function(w,a){(function(u){u($,M)})(function(u){u.defineMode("sass",function(c){var i=u.mimeModes["text/css"],d=i.propertyKeywords||{},O=i.colorKeywords||{},T=i.valueKeywords||{},j=i.fontProperties||{};function A(r){return new RegExp("^"+r.join("|"))}var K=["true","false","null","auto"],s=new RegExp("^"+K.join("|")),L=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"],z=A(L),R=/^::?[a-zA-Z_][\w\-]*/,t;function f(r){return!r.peek()||r.match(/\s+$/,!1)}function b(r,n){var e=r.peek();return e===")"?(r.next(),n.tokenizer=p,"operator"):e==="("?(r.next(),r.eatSpace(),"operator"):e==="'"||e==='"'?(n.tokenizer=g(r.next()),"string"):(n.tokenizer=g(")",!1),"string")}function H(r,n){return function(e,o){return e.sol()&&e.indentation()<=r?(o.tokenizer=p,p(e,o)):(n&&e.skipTo("*/")?(e.next(),e.next(),o.tokenizer=p):e.skipToEnd(),"comment")}}function g(r,n){n==null&&(n=!0);function e(o,k){var h=o.next(),x=o.peek(),v=o.string.charAt(o.pos-2),y=h!=="\\"&&x===r||h===r&&v!=="\\";return y?(h!==r&&n&&o.next(),f(o)&&(k.cursorHalf=0),k.tokenizer=p,"string"):h==="#"&&x==="{"?(k.tokenizer=P(e),o.next(),"operator"):"string"}return e}function P(r){return function(n,e){return n.peek()==="}"?(n.next(),e.tokenizer=r,"operator"):p(n,e)}}function l(r){if(r.indentCount==0){r.indentCount++;var n=r.scopes[0].offset,e=n+c.indentUnit;r.scopes.unshift({offset:e})}}function C(r){r.scopes.length!=1&&r.scopes.shift()}function p(r,n){var e=r.peek();if(r.match("/*"))return n.tokenizer=H(r.indentation(),!0),n.tokenizer(r,n);if(r.match("//"))return n.tokenizer=H(r.indentation(),!1),n.tokenizer(r,n);if(r.match("#{"))return n.tokenizer=P(p),"operator";if(e==='"'||e==="'")return r.next(),n.tokenizer=g(e),"string";if(n.cursorHalf){if(e==="#"&&(r.next(),r.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))||r.match(/^-?[0-9\.]+/))return f(r)&&(n.cursorHalf=0),"number";if(r.match(/^(px|em|in)\b/))return f(r)&&(n.cursorHalf=0),"unit";if(r.match(s))return f(r)&&(n.cursorHalf=0),"keyword";if(r.match(/^url/)&&r.peek()==="(")return n.tokenizer=b,f(r)&&(n.cursorHalf=0),"atom";if(e==="$")return r.next(),r.eatWhile(/[\w-]/),f(r)&&(n.cursorHalf=0),"variable-2";if(e==="!")return r.next(),n.cursorHalf=0,r.match(/^[\w]+/)?"keyword":"operator";if(r.match(z))return f(r)&&(n.cursorHalf=0),"operator";if(r.eatWhile(/[\w-]/))return f(r)&&(n.cursorHalf=0),t=r.current().toLowerCase(),T.hasOwnProperty(t)?"atom":O.hasOwnProperty(t)?"keyword":d.hasOwnProperty(t)?(n.prevProp=r.current().toLowerCase(),"property"):"tag";if(f(r))return n.cursorHalf=0,null}else{if(e==="-"&&r.match(/^-\w+-/))return"meta";if(e==="."){if(r.next(),r.match(/^[\w-]+/))return l(n),"qualifier";if(r.peek()==="#")return l(n),"tag"}if(e==="#"){if(r.next(),r.match(/^[\w-]+/))return l(n),"builtin";if(r.peek()==="#")return l(n),"tag"}if(e==="$")return r.next(),r.eatWhile(/[\w-]/),"variable-2";if(r.match(/^-?[0-9\.]+/))return"number";if(r.match(/^(px|em|in)\b/))return"unit";if(r.match(s))return"keyword";if(r.match(/^url/)&&r.peek()==="(")return n.tokenizer=b,"atom";if(e==="="&&r.match(/^=[\w-]+/))return l(n),"meta";if(e==="+"&&r.match(/^\+[\w-]+/))return"variable-3";if(e==="@"&&r.match("@extend")&&(r.match(/\s*[\w]/)||C(n)),r.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return l(n),"def";if(e==="@")return r.next(),r.eatWhile(/[\w-]/),"def";if(r.eatWhile(/[\w-]/))if(r.match(/ *: *[\w-\+\$#!\("']/,!1)){t=r.current().toLowerCase();var o=n.prevProp+"-"+t;return d.hasOwnProperty(o)?"property":d.hasOwnProperty(t)?(n.prevProp=t,"property"):j.hasOwnProperty(t)?"property":"tag"}else return r.match(/ *:/,!1)?(l(n),n.cursorHalf=1,n.prevProp=r.current().toLowerCase(),"property"):(r.match(/ *,/,!1)||l(n),"tag");if(e===":")return r.match(R)?"variable-3":(r.next(),n.cursorHalf=1,"operator")}return r.match(z)?"operator":(r.next(),null)}function S(r,n){r.sol()&&(n.indentCount=0);var e=n.tokenizer(r,n),o=r.current();if((o==="@return"||o==="}")&&C(n),e!==null){for(var k=r.pos-o.length,h=k+c.indentUnit*n.indentCount,x=[],v=0;v<n.scopes.length;v++){var y=n.scopes[v];y.offset<=h&&x.push(y)}n.scopes=x}return e}return{startState:function(){return{tokenizer:p,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(r,n){var e=S(r,n);return n.lastToken={style:e,content:r.current()},e},indent:function(r){return r.scopes[0].offset},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}},"css"),u.defineMIME("text/x-sass","sass")})})();var E=F.exports;const D=_(E),B=W({__proto__:null,default:D},[E]);export{E as a,B as s};
