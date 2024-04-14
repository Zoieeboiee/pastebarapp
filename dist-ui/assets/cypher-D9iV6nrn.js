import{g as w,r as k}from"./index-B8TKu3i0.js";function P(u,d){for(var c=0;c<d.length;c++){const l=d[c];if(typeof l!="string"&&!Array.isArray(l)){for(const r in l)if(r!=="default"&&!(r in u)){const i=Object.getOwnPropertyDescriptor(l,r);i&&Object.defineProperty(u,r,i.get?i:{enumerable:!0,get:()=>l[r]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(u,d){(function(c){c(k())})(function(c){var l=function(r){return new RegExp("^(?:"+r.join("|")+")$","i")};c.defineMode("cypher",function(r){var i=function(n){s=null;var e=n.next();if(e==='"')return n.match(/^[^"]*"/),"string";if(e==="'")return n.match(/^[^']*'/),"string";if(/[{}\(\),\.;\[\]]/.test(e))return s=e,"node";if(e==="/"&&n.eat("/"))return n.skipToEnd(),"comment";if(f.test(e))return n.eatWhile(f),null;if(n.eatWhile(/[_\w\d]/),n.eat(":"))return n.eatWhile(/[\w\d_\-]/),"atom";var t=n.current();return y.test(t)?"builtin":v.test(t)?"def":m.test(t)||b.test(t)?"keyword":"variable"},a=function(n,e,t){return n.context={prev:n.context,indent:n.indent,col:t,type:e}},p=function(n){return n.indent=n.context.indent,n.context=n.context.prev},g=r.indentUnit,s,y=l(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),v=l(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),m=l(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),b=l(["access","active","assign","all","alter","as","catalog","change","copy","create","constraint","constraints","current","database","databases","dbms","default","deny","drop","element","elements","exists","from","grant","graph","graphs","if","index","indexes","label","labels","management","match","name","names","new","node","nodes","not","of","on","or","password","populated","privileges","property","read","relationship","relationships","remove","replace","required","revoke","role","roles","set","show","start","status","stop","suspended","to","traverse","type","types","user","users","with","write"]),f=/[*+\-<>=&|~%^]/;return{startState:function(){return{tokenize:i,context:null,indent:0,col:0}},token:function(n,e){if(n.sol()&&(e.context&&e.context.align==null&&(e.context.align=!1),e.indent=n.indentation()),n.eatSpace())return null;var t=e.tokenize(n,e);if(t!=="comment"&&e.context&&e.context.align==null&&e.context.type!=="pattern"&&(e.context.align=!0),s==="(")a(e,")",n.column());else if(s==="[")a(e,"]",n.column());else if(s==="{")a(e,"}",n.column());else if(/[\]\}\)]/.test(s)){for(;e.context&&e.context.type==="pattern";)p(e);e.context&&s===e.context.type&&p(e)}else s==="."&&e.context&&e.context.type==="pattern"?p(e):/atom|string|variable/.test(t)&&e.context&&(/[\}\]]/.test(e.context.type)?a(e,"pattern",n.column()):e.context.type==="pattern"&&!e.context.align&&(e.context.align=!0,e.context.col=n.column()));return t},indent:function(n,e){var t=e&&e.charAt(0),o=n.context;if(/[\]\}]/.test(t))for(;o&&o.type==="pattern";)o=o.prev;var h=o&&t===o.type;return o?o.type==="keywords"?c.commands.newlineAndIndent:o.align?o.col+(h?0:1):o.indent+(h?0:g):0}}}),c.modeExtensions.cypher={autoFormatLineBreaks:function(r){for(var i,a,p,a=r.split("\n"),p=/\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g,i=0;i<a.length;i++)a[i]=a[i].replace(p," \n$1 ").trim();return a.join("\n")}},c.defineMIME("application/x-cypher-query","cypher")})})();var x=j.exports;const _=w(x),S=P({__proto__:null,default:_},[x]);export{S as c};
