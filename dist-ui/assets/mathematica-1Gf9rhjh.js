import{g as k,c as x}from"./index-CRBEM506.js";function s(u,l){for(var a=0;a<l.length;a++){const i=l[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in u)){const f=Object.getOwnPropertyDescriptor(i,o);f&&Object.defineProperty(u,o,f.get?f:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}};(function(u,l){(function(a){a(x)})(function(a){a.defineMode("mathematica",function(i,o){var f="[a-zA-Z\\$][a-zA-Z0-9\\$]*",A="(?:\\d+)",z="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",$="(?:\\.\\w+|\\w+\\.\\w*|\\w+)",p="(?:`(?:`?"+z+")?)",Z=new RegExp("(?:"+A+"(?:\\^\\^"+$+p+"?(?:\\*\\^[+-]?\\d+)?))"),h=new RegExp("(?:"+z+p+"?(?:\\*\\^[+-]?\\d+)?)"),d=new RegExp("(?:`?)(?:"+f+")(?:`(?:"+f+"))*(?:`?)");function m(e,t){var r;return r=e.next(),r==='"'?(t.tokenize=b,t.tokenize(e,t)):r==="("&&e.eat("*")?(t.commentLevel++,t.tokenize=g,t.tokenize(e,t)):(e.backUp(1),e.match(Z,!0,!1)||e.match(h,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(d,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function b(e,t){for(var r,n=!1,c=!1;(r=e.next())!=null;){if(r==='"'&&!c){n=!0;break}c=!c&&r==="\\"}return n&&!c&&(t.tokenize=m),"string"}function g(e,t){for(var r,n;t.commentLevel>0&&(n=e.next())!=null;)r==="("&&n==="*"&&t.commentLevel++,r==="*"&&n===")"&&t.commentLevel--,r=n;return t.commentLevel<=0&&(t.tokenize=m),"comment"}return{startState:function(){return{tokenize:m,commentLevel:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)"}}),a.defineMIME("text/x-mathematica",{name:"mathematica"})})})();var v=w.exports;const _=k(v),E=s({__proto__:null,default:_},[v]);export{E as m};
