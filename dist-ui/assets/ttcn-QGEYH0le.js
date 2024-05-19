import{g as N,r as q}from"./index-D1lUn-ZY.js";function B(m,g){for(var u=0;u<g.length;u++){const o=g[u];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in m)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(m,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var F={exports:{}};(function(m,g){(function(u){u(q())})(function(u){u.defineMode("ttcn",function(l,i){var p=l.indentUnit,s=i.keywords||{},d=i.builtin||{},h=i.timerOps||{},v=i.portOps||{},M=i.configOps||{},S=i.verdictOps||{},z=i.sutOps||{},L=i.functionOps||{},C=i.verdictConsts||{},_=i.booleanConsts||{},j=i.otherConsts||{},P=i.types||{},W=i.visibilityModifiers||{},T=i.templateMatch||{},U=i.multiLineStrings,$=i.indentStatements!==!1,O=/[+\-*&@=<>!\/]/,c;function A(t,n){var e=t.next();if(e=='"'||e=="'")return n.tokenize=D(e),n.tokenize(t,n);if(/[\[\]{}\(\),;\\:\?\.]/.test(e))return c=e,"punctuation";if(e=="#")return t.skipToEnd(),"atom preprocessor";if(e=="%")return t.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(e))return t.eatWhile(/[\w\.]/),"number";if(e=="/"){if(t.eat("*"))return n.tokenize=k,k(t,n);if(t.eat("/"))return t.skipToEnd(),"comment"}if(O.test(e))return e=="@"&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(O),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var r=t.current();return s.propertyIsEnumerable(r)?"keyword":d.propertyIsEnumerable(r)?"builtin":h.propertyIsEnumerable(r)?"def timerOps":M.propertyIsEnumerable(r)?"def configOps":S.propertyIsEnumerable(r)?"def verdictOps":v.propertyIsEnumerable(r)?"def portOps":z.propertyIsEnumerable(r)?"def sutOps":L.propertyIsEnumerable(r)?"def functionOps":C.propertyIsEnumerable(r)?"string verdictConsts":_.propertyIsEnumerable(r)?"string booleanConsts":j.propertyIsEnumerable(r)?"string otherConsts":P.propertyIsEnumerable(r)?"builtin types":W.propertyIsEnumerable(r)?"builtin visibilityModifiers":T.propertyIsEnumerable(r)?"atom templateMatch":"variable"}function D(t){return function(n,e){for(var r=!1,y,E=!1;(y=n.next())!=null;){if(y==t&&!r){var f=n.peek();f&&(f=f.toLowerCase(),(f=="b"||f=="h"||f=="o")&&n.next()),E=!0;break}r=!r&&y=="\\"}return(E||!(r||U))&&(e.tokenize=null),"string"}}function k(t,n){for(var e=!1,r;r=t.next();){if(r=="/"&&e){n.tokenize=null;break}e=r=="*"}return"comment"}function w(t,n,e,r,y){this.indented=t,this.column=n,this.type=e,this.align=r,this.prev=y}function x(t,n,e){var r=t.indented;return t.context&&t.context.type=="statement"&&(r=t.context.indented),t.context=new w(r,n,e,null,t.context)}function b(t){var n=t.context.type;return(n==")"||n=="]"||n=="}")&&(t.indented=t.context.indented),t.context=t.context.prev}return{startState:function(t){return{tokenize:null,context:new w((t||0)-p,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,n){var e=n.context;if(t.sol()&&(e.align==null&&(e.align=!1),n.indented=t.indentation(),n.startOfLine=!0),t.eatSpace())return null;c=null;var r=(n.tokenize||A)(t,n);if(r=="comment")return r;if(e.align==null&&(e.align=!0),(c==";"||c==":"||c==",")&&e.type=="statement")b(n);else if(c=="{")x(n,t.column(),"}");else if(c=="[")x(n,t.column(),"]");else if(c=="(")x(n,t.column(),")");else if(c=="}"){for(;e.type=="statement";)e=b(n);for(e.type=="}"&&(e=b(n));e.type=="statement";)e=b(n)}else c==e.type?b(n):$&&((e.type=="}"||e.type=="top")&&c!=";"||e.type=="statement"&&c=="newstatement")&&x(n,t.column(),"statement");return n.startOfLine=!1,r},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}});function o(l){for(var i={},p=l.split(" "),s=0;s<p.length;++s)i[p[s]]=!0;return i}function a(l,i){typeof l=="string"&&(l=[l]);var p=[];function s(h){if(h)for(var v in h)h.hasOwnProperty(v)&&p.push(v)}s(i.keywords),s(i.builtin),s(i.timerOps),s(i.portOps),p.length&&(i.helperType=l[0],u.registerHelper("hintWords",l[0],p));for(var d=0;d<l.length;++d)u.defineMIME(l[d],i)}a(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:o("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:o("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:o("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:o("read running start stop timeout"),portOps:o("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:o("create connect disconnect done kill killed map unmap"),verdictOps:o("getverdict setverdict"),sutOps:o("action"),functionOps:o("apply derefers refers"),verdictConsts:o("error fail inconc none pass"),booleanConsts:o("true false"),otherConsts:o("null NULL omit"),visibilityModifiers:o("private public friend"),templateMatch:o("complement ifpresent subset superset permutation"),multiLineStrings:!0})})})();var I=F.exports;const H=N(I),J=B({__proto__:null,default:H},[I]);export{J as t};
