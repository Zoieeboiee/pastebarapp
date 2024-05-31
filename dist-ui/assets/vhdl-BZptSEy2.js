import{g as C,c as _}from"./index-e2EfRfh_.js";function L(g,b){for(var f=0;f<b.length;f++){const l=b[f];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in g)){const u=Object.getOwnPropertyDescriptor(l,a);u&&Object.defineProperty(g,a,u.get?u:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var $={exports:{}};(function(g,b){(function(f){f(_)})(function(f){function l(u){for(var s={},c=u.split(","),d=0;d<c.length;++d){var v=c[d].toUpperCase(),y=c[d].charAt(0).toUpperCase()+c[d].slice(1);s[c[d]]=!0,s[v]=!0,s[y]=!0}return s}function a(u){return u.eatWhile(/[\w\$_]/),"meta"}f.defineMode("vhdl",function(u,s){var c=u.indentUnit,d=s.atoms||l("null"),v=s.hooks||{"`":a,$:a},y=s.multiLineStrings,O=l("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"),E=l("architecture,entity,begin,case,port,else,elsif,end,for,function,if"),k=/[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/,i;function x(e,n){var t=e.next();if(v[t]){var r=v[t](e,n);if(r!==!1)return r}if(t=='"')return n.tokenize=j(t),n.tokenize(e,n);if(t=="'")return n.tokenize=S(t),n.tokenize(e,n);if(/[\[\]{}\(\),;\:\.]/.test(t))return i=t,null;if(/[\d']/.test(t))return e.eatWhile(/[\w\.']/),"number";if(t=="-"&&e.eat("-"))return e.skipToEnd(),"comment";if(k.test(t))return e.eatWhile(k),"operator";e.eatWhile(/[\w\$_]/);var o=e.current();return O.propertyIsEnumerable(o.toLowerCase())?(E.propertyIsEnumerable(o)&&(i="newstatement"),"keyword"):d.propertyIsEnumerable(o)?"atom":"variable"}function S(e){return function(n,t){for(var r=!1,o,h=!1;(o=n.next())!=null;){if(o==e&&!r){h=!0;break}r=!r&&o=="--"}return(h||!(r||y))&&(t.tokenize=x),"string"}}function j(e){return function(n,t){for(var r=!1,o,h=!1;(o=n.next())!=null;){if(o==e&&!r){h=!0;break}r=!r&&o=="--"}return(h||!(r||y))&&(t.tokenize=x),"string-2"}}function w(e,n,t,r,o){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=o}function m(e,n,t){return e.context=new w(e.indented,n,t,null,e.context)}function p(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new w((e||0)-c,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;i=null;var r=(n.tokenize||x)(e,n);if(r=="comment"||r=="meta")return r;if(t.align==null&&(t.align=!0),(i==";"||i==":")&&t.type=="statement")p(n);else if(i=="{")m(n,e.column(),"}");else if(i=="[")m(n,e.column(),"]");else if(i=="(")m(n,e.column(),")");else if(i=="}"){for(;t.type=="statement";)t=p(n);for(t.type=="}"&&(t=p(n));t.type=="statement";)t=p(n)}else i==t.type?p(n):(t.type=="}"||t.type=="top"||t.type=="statement"&&i=="newstatement")&&m(n,e.column(),"statement");return n.startOfLine=!1,r},indent:function(e,n){if(e.tokenize!=x&&e.tokenize!=null)return 0;var t=n&&n.charAt(0),r=e.context,o=t==r.type;return r.type=="statement"?r.indented+(t=="{"?0:c):r.align?r.column+(o?0:1):r.indented+(o?0:c)},electricChars:"{}"}}),f.defineMIME("text/x-vhdl","vhdl")})})();var z=$.exports;const I=C(z),U=L({__proto__:null,default:I},[z]);export{U as v};
