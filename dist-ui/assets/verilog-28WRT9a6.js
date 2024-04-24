import{g as oe,c as ae}from"./index-6eJdXugE.js";function ce(S,L){for(var p=0;p<L.length;p++){const h=L[p];if(typeof h!="string"&&!Array.isArray(h)){for(const m in h)if(m!=="default"&&!(m in S)){const g=Object.getOwnPropertyDescriptor(h,m);g&&Object.defineProperty(S,m,g.get?g:{enumerable:!0,get:()=>h[m]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var fe={exports:{}};(function(S,L){(function(p){p(ae)})(function(p){p.defineMode("verilog",function(i,l){var a=i.indentUnit,f=l.statementIndentUnit||a,x=l.dontAlignCalls,k=l.compilerDirectivesUseRegularIndentation,z=l.noIndentKeywords||[],_=l.multiLineStrings,v=l.hooks||{};function b(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var $=b("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),E=/[\+\-\*\/!~&|^%=?:<>]/,O=/[\[\]{}()]/,J=/\d[0-9_]*/,Q=/\d*\s*'s?d\s*\d[0-9_]*/i,X=/\d*\s*'s?b\s*[xz01][xz01_]*/i,Y=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,Z=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,U=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,H=/^((`?\w+)|[)}\]])/,M=/[)}\]]/,A=new RegExp("^(`(?:ifdef|ifndef|elsif|else|endif|undef|undefineall|define|include|begin_keywords|celldefine|default|nettype|end_keywords|endcelldefine|line|nounconnected_drive|pragma|resetall|timescale|unconnected_drive))\\b"),ee=/^(`(?:ifdef|ifndef|elsif|else))\b/,W=/^(`(?:elsif|else|endif))\b/,c,d,ne=b("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),u={};for(var I in ne)u[I]="end"+I;u.begin="end",u.casex="endcase",u.casez="endcase",u.do="while",u.fork="join;join_any;join_none",u.covergroup="endgroup",u.macro_begin="macro_end";for(var te in z){var I=z[te];u[I]&&(u[I]=void 0)}var ie=b("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while extern typedef");function j(e,t){var n=e.peek(),r;if(v[n]&&(r=v[n](e,t))!=!1||v.tokenBase&&(r=v.tokenBase(e,t))!=!1)return r;if(/[,;:\.]/.test(n))return c=e.next(),null;if(O.test(n))return c=e.next(),"bracket";if(n=="`")if(e.next(),e.eatWhile(/[\w\$_]/)){var o=e.current();if(d=o,o.startsWith("`uvm_")&&o.endsWith("_begin")){var s=d.substr(0,d.length-5)+"end";u[o]=s,c="newblock"}else{e.eatSpace(),e.peek()=="("&&(c="newmacro");var B=e.current();e.backUp(B.length-o.length)}return"def"}else return null;if(n=="$")return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if(n=="#")return e.next(),e.eatWhile(/[\d_.]/),"def";if(n=="@")return e.next(),e.eatWhile(/[@]/),"def";if(n=='"')return e.next(),t.tokenize=re(n),t.tokenize(e,t);if(n=="/"){if(e.next(),e.eat("*"))return t.tokenize=q,q(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(U)||e.match(Q)||e.match(X)||e.match(Y)||e.match(Z)||e.match(J)||e.match(U))return"number";if(e.eatWhile(E))return c=e.current(),"meta";if(e.eatWhile(/[\w\$_]/)){var o=e.current();return $[o]?(u[o]&&(c="newblock",o==="fork"&&(e.eatSpace(),e.peek()==";"&&(c="newstatement"),e.backUp(e.current().length-o.length))),ie[o]&&(c="newstatement"),d=o,"keyword"):"variable"}return e.next(),null}function re(e){return function(t,n){for(var r=!1,o,s=!1;(o=t.next())!=null;){if(o==e&&!r){s=!0;break}r=!r&&o=="\\"}return(s||!(r||_))&&(n.tokenize=j),"string"}}function q(e,t){for(var n=!1,r;r=e.next();){if(r=="/"&&n){t.tokenize=j;break}n=r=="*"}return"comment"}function R(e,t,n,r,o,s){this.indented=e,this.column=t,this.type=n,this.scopekind=r,this.align=o,this.prev=s}function y(e,t,n,r){var o=e.indented,s=new R(o,t,n,r||"",null,e.context);return e.context=s}function w(e){var t=e.context.type;return(t==")"||t=="]"||t=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}function N(e,t){if(e==t)return!0;var n=t.split(";");for(var r in n)if(e==n[r])return!0;return!1}function T(e,t){return e==null?!1:e.scopekind===t?!0:T(e.prev,t)}function le(){var e=[];for(var t in u)if(u[t]){var n=u[t].split(";");for(var r in n)e.push(n[r])}var o=new RegExp("[{}()\\[\\]]|("+e.join("|")+")$");return o}return{electricInput:le(),startState:function(e){var t={tokenize:null,context:new R((e||0)-a,0,"top","top",!1),indented:0,compilerDirectiveIndented:0,startOfLine:!0};return v.startState&&v.startState(t),t},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),v.token){var r=v.token(e,t);if(r!==void 0)return r}if(e.eatSpace())return null;c=null,d=null;var r=(t.tokenize||j)(e,t);if(r=="comment"||r=="meta"||r=="variable")return(c==="="||c==="<=")&&!T(n,"assignment")&&(y(t,e.column()+c.length,"assignment","assignment"),n.align==null&&(n.align=!0)),r;n.align==null&&(n.align=!0);var o=n.type=="assignment"&&M.test(c)&&n.prev&&n.prev.type===c;if(c==n.type||o){if(o&&(n=w(t)),n=w(t),c==")"){if(n&&n.type==="macro")for(n=w(t);n&&(n.type=="statement"||n.type=="assignment");)n=w(t)}else if(c=="}"&&n&&n.type==="statement")for(;n&&n.type=="statement";)n=w(t)}else if((c==";"||c==",")&&(n.type=="statement"||n.type=="assignment")||n.type&&N(d,n.type))for(n=w(t);n&&(n.type=="statement"||n.type=="assignment");)n=w(t);else if(c=="{")y(t,e.column(),"}");else if(c=="[")y(t,e.column(),"]");else if(c=="(")y(t,e.column(),")");else if(n&&n.type=="endcase"&&c==":")y(t,e.column(),"statement","case");else if(c=="newstatement")y(t,e.column(),"statement",d);else if(c=="newblock"){if(!(d=="function"&&n&&(n.type=="statement"||n.type=="endgroup"))){if(!(d=="task"&&n&&n.type=="statement")){if(!(d=="class"&&n&&n.type=="statement")){var s=u[d];y(t,e.column(),s,d)}}}}else(c=="newmacro"||d&&d.match(A))&&(c=="newmacro"&&y(t,e.column(),"macro","macro"),d.match(W)&&(t.compilerDirectiveIndented-=f),d.match(ee)&&(t.compilerDirectiveIndented+=f));return t.startOfLine=!1,r},indent:function(e,t){if(e.tokenize!=j&&e.tokenize!=null)return p.Pass;if(v.indent){var n=v.indent(e);if(n>=0)return n}var r=e.context,o=t&&t.charAt(0);r.type=="statement"&&o=="}"&&(r=r.prev);var s=!1,B=t.match(H);return B&&(s=N(B[0],r.type)),!k&&t.match(A)?t.match(W)?e.compilerDirectiveIndented-f:e.compilerDirectiveIndented:r.type=="statement"?r.indented+(o=="{"?0:f):(M.test(r.type)||r.type=="assignment")&&r.align&&!x?r.column+(s?0:1):r.type==")"&&!s?r.indented+f:r.indented+(s?0:a)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}}),p.defineMIME("text/x-verilog",{name:"verilog"}),p.defineMIME("text/x-systemverilog",{name:"verilog"});var h={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"hr","/":"property","/-":"property","@":"variable-3","@-":"variable-3","@++":"variable-3","@+=":"variable-3","@+=-":"variable-3","@--":"variable-3","@-=":"variable-3","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable-2","**":"variable-2","\\":"keyword",'"':"comment"},m={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},g=3,D=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,P=/^[! ]  /,F=/^[! ] */,V=/^\/[\/\*]/;function C(i,l,a){var f=l/g;return"tlv-"+i.tlvIndentationStyle[f]+"-"+a}function G(i){var l;return(l=i.match(D,!1))&&l[2].length>0}p.defineMIME("text/x-tlv",{name:"verilog",hooks:{electricInput:!1,token:function(i,l){var a=void 0,f;if(i.sol()&&!l.tlvInBlockComment){i.peek()=="\\"&&(a="def",i.skipToEnd(),i.string.match(/\\SV/)?l.tlvCodeActive=!1:i.string.match(/\\TLV/)&&(l.tlvCodeActive=!0)),l.tlvCodeActive&&i.pos==0&&l.indented==0&&(f=i.match(F,!1))&&(l.indented=f[0].length);var x=l.indented,k=x/g;if(k<=l.tlvIndentationStyle.length){var z=i.string.length==x,_=k*g;if(_<i.string.length){var v=i.string.slice(_),b=v[0];m[b]&&(f=v.match(D))&&h[f[1]]&&(x+=g,b=="\\"&&_>0||(l.tlvIndentationStyle[k]=m[b],k++))}if(!z)for(;l.tlvIndentationStyle.length>k;)l.tlvIndentationStyle.pop()}l.tlvNextIndent=x}if(l.tlvCodeActive){var $=!1,f;if(a!==void 0)a+=" "+C(l,0,"scope-ident");else if(i.pos/g<l.tlvIndentationStyle.length&&(f=i.match(i.sol()?P:/^   /)))a="tlv-indent-"+(i.pos%2==0?"even":"odd")+" "+C(l,i.pos-g,"indent"),f[0].charAt(0)=="!"&&(a+=" tlv-alert-line-prefix"),G(i)&&(a+=" "+C(l,i.pos,"before-scope-ident"));else if(l.tlvInBlockComment)i.match(/^.*?\*\//)?l.tlvInBlockComment=!1:i.skipToEnd(),a="comment";else if((f=i.match(V))&&!l.tlvInBlockComment)f[0]=="//"?i.skipToEnd():l.tlvInBlockComment=!0,a="comment";else if(f=i.match(D)){var E=f[1],O=f[2];h.hasOwnProperty(E)&&(O.length>0||i.eol())?(a=h[E],i.column()==l.indented&&(a+=" "+C(l,i.column(),"scope-ident"))):(i.backUp(i.current().length-1),a="tlv-default")}else i.match(/^\t+/)?a="tlv-tab":i.match(/^[\[\]{}\(\);\:]+/)?a="meta":(f=i.match(/^[mM]4([\+_])?[\w\d_]*/))?a=f[1]=="+"?"tlv-m4-plus":"tlv-m4":i.match(/^ +/)?i.eol()?a="error":a="tlv-default":i.match(/^[\w\d_]+/)?a="number":(i.next(),a="tlv-default");$&&(a+=" tlv-statement")}else i.match(/^[mM]4([\w\d_]*)/)&&(a="tlv-m4");return a},indent:function(i){return i.tlvCodeActive==!0?i.tlvNextIndent:-1},startState:function(i){i.tlvIndentationStyle=[],i.tlvCodeActive=!0,i.tlvNextIndent=-1,i.tlvInBlockComment=!1}}})})})();var K=fe.exports;const de=oe(K),se=ce({__proto__:null,default:de},[K]);export{se as v};
