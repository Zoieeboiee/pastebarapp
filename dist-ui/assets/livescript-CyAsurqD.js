import{g as b,c as E}from"./index-CRBEM506.js";function A(l,d){for(var g=0;g<d.length;g++){const n=d[g];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in l)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(l,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var q={exports:{}};(function(l,d){(function(g){g(E)})(function(g){g.defineMode("livescript",function(){var w=function(e,t){var a=t.next||"start";if(a){t.next=t.next;var p=s[a];if(p.splice){for(var y=0;y<p.length;++y){var o=p[y];if(o.regex&&e.match(o.regex))return t.next=o.next||t.next,o.token}return e.next(),"error"}if(e.match(o=s[a]))return o.regex&&e.match(o.regex)?(t.next=o.next,o.token):(e.next(),"error")}return e.next(),"error"},h={startState:function(){return{next:"start",lastToken:{style:null,indent:0,content:""}}},token:function(e,t){for(;e.pos==e.start;)var a=w(e,t);return t.lastToken={style:a,indent:e.indentation(),content:e.current()},a.replace(/\./g," ")},indent:function(e){var t=e.lastToken.indent;return e.lastToken.content.match(i)&&(t+=2),t}};return h});var n="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",i=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+n+")?))\\s*$"),r="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",x={token:"string",regex:".+"},s={start:[{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+r},{token:"constant.language",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+r},{token:"invalid.illegal",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+r},{token:"language.support.class",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+r},{token:"language.support.function",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+r},{token:"variable.language",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+r},{token:"identifier",regex:n+"\\s*:(?![:=])"},{token:"variable",regex:n},{token:"keyword.operator",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword.variable",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"keyword.operator",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"//",next:"heregex"},{token:"string.regex",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]",next:"key"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"string.regex",regex:"\\s*#{"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],key:[{token:"keyword.operator",regex:"[.?@!]+"},{token:"identifier",regex:n,next:"start"},{token:"text",regex:"",next:"start"}],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{token:"comment.doc",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},x],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},x],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},x],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},x],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},x],words:[{token:"string",regex:".*?\\]>",next:"key"},x]};for(var f in s){var c=s[f];if(c.splice)for(var k=0,m=c.length;k<m;++k){var u=c[k];typeof u.regex=="string"&&(s[f][k].regex=new RegExp("^"+u.regex))}else typeof u.regex=="string"&&(s[f].regex=new RegExp("^"+c.regex))}g.defineMIME("text/x-livescript","livescript")})})();var v=q.exports;const _=b(v),j=A({__proto__:null,default:_},[v]);export{j as l};
