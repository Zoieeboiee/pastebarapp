import{g as h,c as P}from"./index-6eJdXugE.js";function b(d,c){for(var E=0;E<c.length;E++){const l=c[E];if(typeof l!="string"&&!Array.isArray(l)){for(const R in l)if(R!=="default"&&!(R in d)){const A=Object.getOwnPropertyDescriptor(l,R);A&&Object.defineProperty(d,R,A.get?A:{enumerable:!0,get:()=>l[R]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}};(function(d,c){(function(E){E(P)})(function(E){E.defineMode("perl",function(){var $={"->":4,"++":4,"--":4,"**":4,"=~":4,"!~":4,"*":4,"/":4,"%":4,x:4,"+":4,"-":4,".":4,"<<":4,">>":4,"<":4,">":4,"<=":4,">=":4,lt:4,gt:4,le:4,ge:4,"==":4,"!=":4,"<=>":4,eq:4,ne:4,cmp:4,"~~":4,"&":4,"|":4,"^":4,"&&":4,"||":4,"//":4,"..":4,"...":4,"?":4,":":4,"=":4,"+=":4,"-=":4,"*=":4,",":4,"=>":4,"::":4,not:4,and:4,or:4,xor:4,BEGIN:[5,1],END:[5,1],PRINT:[5,1],PRINTF:[5,1],GETC:[5,1],READ:[5,1],READLINE:[5,1],DESTROY:[5,1],TIE:[5,1],TIEHANDLE:[5,1],UNTIE:[5,1],STDIN:5,STDIN_TOP:5,STDOUT:5,STDOUT_TOP:5,STDERR:5,STDERR_TOP:5,$ARG:5,$_:5,"@ARG":5,"@_":5,$LIST_SEPARATOR:5,'$"':5,$PROCESS_ID:5,$PID:5,$$:5,$REAL_GROUP_ID:5,$GID:5,"$(":5,$EFFECTIVE_GROUP_ID:5,$EGID:5,"$)":5,$PROGRAM_NAME:5,$0:5,$SUBSCRIPT_SEPARATOR:5,$SUBSEP:5,"$;":5,$REAL_USER_ID:5,$UID:5,"$<":5,$EFFECTIVE_USER_ID:5,$EUID:5,"$>":5,$a:5,$b:5,$COMPILING:5,"$^C":5,$DEBUGGING:5,"$^D":5,"${^ENCODING}":5,$ENV:5,"%ENV":5,$SYSTEM_FD_MAX:5,"$^F":5,"@F":5,"${^GLOBAL_PHASE}":5,"$^H":5,"%^H":5,"@INC":5,"%INC":5,$INPLACE_EDIT:5,"$^I":5,"$^M":5,$OSNAME:5,"$^O":5,"${^OPEN}":5,$PERLDB:5,"$^P":5,$SIG:5,"%SIG":5,$BASETIME:5,"$^T":5,"${^TAINT}":5,"${^UNICODE}":5,"${^UTF8CACHE}":5,"${^UTF8LOCALE}":5,$PERL_VERSION:5,"$^V":5,"${^WIN32_SLOPPY_STAT}":5,$EXECUTABLE_NAME:5,"$^X":5,$1:5,$MATCH:5,"$&":5,"${^MATCH}":5,$PREMATCH:5,"$`":5,"${^PREMATCH}":5,$POSTMATCH:5,"$'":5,"${^POSTMATCH}":5,$LAST_PAREN_MATCH:5,"$+":5,$LAST_SUBMATCH_RESULT:5,"$^N":5,"@LAST_MATCH_END":5,"@+":5,"%LAST_PAREN_MATCH":5,"%+":5,"@LAST_MATCH_START":5,"@-":5,"%LAST_MATCH_START":5,"%-":5,$LAST_REGEXP_CODE_RESULT:5,"$^R":5,"${^RE_DEBUG_FLAGS}":5,"${^RE_TRIE_MAXBUF}":5,$ARGV:5,"@ARGV":5,ARGV:5,ARGVOUT:5,$OUTPUT_FIELD_SEPARATOR:5,$OFS:5,"$,":5,$INPUT_LINE_NUMBER:5,$NR:5,"$.":5,$INPUT_RECORD_SEPARATOR:5,$RS:5,"$/":5,$OUTPUT_RECORD_SEPARATOR:5,$ORS:5,"$\\":5,$OUTPUT_AUTOFLUSH:5,"$|":5,$ACCUMULATOR:5,"$^A":5,$FORMAT_FORMFEED:5,"$^L":5,$FORMAT_PAGE_NUMBER:5,"$%":5,$FORMAT_LINES_LEFT:5,"$-":5,$FORMAT_LINE_BREAK_CHARACTERS:5,"$:":5,$FORMAT_LINES_PER_PAGE:5,"$=":5,$FORMAT_TOP_NAME:5,"$^":5,$FORMAT_NAME:5,"$~":5,"${^CHILD_ERROR_NATIVE}":5,$EXTENDED_OS_ERROR:5,"$^E":5,$EXCEPTIONS_BEING_CAUGHT:5,"$^S":5,$WARNING:5,"$^W":5,"${^WARNING_BITS}":5,$OS_ERROR:5,$ERRNO:5,"$!":5,"%OS_ERROR":5,"%ERRNO":5,"%!":5,$CHILD_ERROR:5,"$?":5,$EVAL_ERROR:5,"$@":5,$OFMT:5,"$#":5,"$*":5,$ARRAY_BASE:5,"$[":5,$OLD_PERL_VERSION:5,"$]":5,if:[1,1],elsif:[1,1],else:[1,1],while:[1,1],unless:[1,1],for:[1,1],foreach:[1,1],abs:1,accept:1,alarm:1,atan2:1,bind:1,binmode:1,bless:1,bootstrap:1,break:1,caller:1,chdir:1,chmod:1,chomp:1,chop:1,chown:1,chr:1,chroot:1,close:1,closedir:1,connect:1,continue:[1,1],cos:1,crypt:1,dbmclose:1,dbmopen:1,default:1,defined:1,delete:1,die:1,do:1,dump:1,each:1,endgrent:1,endhostent:1,endnetent:1,endprotoent:1,endpwent:1,endservent:1,eof:1,eval:1,exec:1,exists:1,exit:1,exp:1,fcntl:1,fileno:1,flock:1,fork:1,format:1,formline:1,getc:1,getgrent:1,getgrgid:1,getgrnam:1,gethostbyaddr:1,gethostbyname:1,gethostent:1,getlogin:1,getnetbyaddr:1,getnetbyname:1,getnetent:1,getpeername:1,getpgrp:1,getppid:1,getpriority:1,getprotobyname:1,getprotobynumber:1,getprotoent:1,getpwent:1,getpwnam:1,getpwuid:1,getservbyname:1,getservbyport:1,getservent:1,getsockname:1,getsockopt:1,given:1,glob:1,gmtime:1,goto:1,grep:1,hex:1,import:1,index:1,int:1,ioctl:1,join:1,keys:1,kill:1,last:1,lc:1,lcfirst:1,length:1,link:1,listen:1,local:2,localtime:1,lock:1,log:1,lstat:1,m:null,map:1,mkdir:1,msgctl:1,msgget:1,msgrcv:1,msgsnd:1,my:2,new:1,next:1,no:1,oct:1,open:1,opendir:1,ord:1,our:2,pack:1,package:1,pipe:1,pop:1,pos:1,print:1,printf:1,prototype:1,push:1,q:null,qq:null,qr:null,quotemeta:null,qw:null,qx:null,rand:1,read:1,readdir:1,readline:1,readlink:1,readpipe:1,recv:1,redo:1,ref:1,rename:1,require:1,reset:1,return:1,reverse:1,rewinddir:1,rindex:1,rmdir:1,s:null,say:1,scalar:1,seek:1,seekdir:1,select:1,semctl:1,semget:1,semop:1,send:1,setgrent:1,sethostent:1,setnetent:1,setpgrp:1,setpriority:1,setprotoent:1,setpwent:1,setservent:1,setsockopt:1,shift:1,shmctl:1,shmget:1,shmread:1,shmwrite:1,shutdown:1,sin:1,sleep:1,socket:1,socketpair:1,sort:1,splice:1,split:1,sprintf:1,sqrt:1,srand:1,stat:1,state:1,study:1,sub:1,substr:1,symlink:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,tell:1,telldir:1,tie:1,tied:1,time:1,times:1,tr:null,truncate:1,uc:1,ucfirst:1,umask:1,undef:1,unlink:1,unpack:1,unshift:1,untie:1,use:1,utime:1,values:1,vec:1,wait:1,waitpid:1,wantarray:1,warn:1,when:1,write:1,y:null},u="string-2",f=/[goseximacplud]/;function r(n,i,o,p,_){return i.chain=null,i.style=null,i.tail=null,i.tokenize=function(e,T){for(var S=!1,I,N=0;I=e.next();){if(I===o[N]&&!S)return o[++N]!==void 0?(T.chain=o[N],T.style=p,T.tail=_):_&&e.eatWhile(_),T.tokenize=g,p;S=!S&&I=="\\"}return p},i.tokenize(n,i)}function O(n,i,o){return i.tokenize=function(p,_){return p.string==o&&(_.tokenize=g),p.skipToEnd(),"string"},i.tokenize(n,i)}function g(n,i){if(n.eatSpace())return null;if(i.chain)return r(n,i,i.chain,i.style,i.tail);if(n.match(/^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/))return"number";if(n.match(/^<<(?=[_a-zA-Z])/))return n.eatWhile(/\w/),O(n,i,n.current().substr(2));if(n.sol()&&n.match(/^\=item(?!\w)/))return O(n,i,"=cut");var o=n.next();if(o=='"'||o=="'"){if(R(n,3)=="<<"+o){var p=n.pos;n.eatWhile(/\w/);var _=n.current().substr(1);if(_&&n.eat(o))return O(n,i,_);n.pos=p}return r(n,i,[o],"string")}if(o=="q"){var e=l(n,-2);if(!(e&&/\w/.test(e))){if(e=l(n,0),e=="x"){if(e=l(n,1),e=="(")return t(n,2),r(n,i,[")"],u,f);if(e=="[")return t(n,2),r(n,i,["]"],u,f);if(e=="{")return t(n,2),r(n,i,["}"],u,f);if(e=="<")return t(n,2),r(n,i,[">"],u,f);if(/[\^'"!~\/]/.test(e))return t(n,1),r(n,i,[n.eat(e)],u,f)}else if(e=="q"){if(e=l(n,1),e=="(")return t(n,2),r(n,i,[")"],"string");if(e=="[")return t(n,2),r(n,i,["]"],"string");if(e=="{")return t(n,2),r(n,i,["}"],"string");if(e=="<")return t(n,2),r(n,i,[">"],"string");if(/[\^'"!~\/]/.test(e))return t(n,1),r(n,i,[n.eat(e)],"string")}else if(e=="w"){if(e=l(n,1),e=="(")return t(n,2),r(n,i,[")"],"bracket");if(e=="[")return t(n,2),r(n,i,["]"],"bracket");if(e=="{")return t(n,2),r(n,i,["}"],"bracket");if(e=="<")return t(n,2),r(n,i,[">"],"bracket");if(/[\^'"!~\/]/.test(e))return t(n,1),r(n,i,[n.eat(e)],"bracket")}else if(e=="r"){if(e=l(n,1),e=="(")return t(n,2),r(n,i,[")"],u,f);if(e=="[")return t(n,2),r(n,i,["]"],u,f);if(e=="{")return t(n,2),r(n,i,["}"],u,f);if(e=="<")return t(n,2),r(n,i,[">"],u,f);if(/[\^'"!~\/]/.test(e))return t(n,1),r(n,i,[n.eat(e)],u,f)}else if(/[\^'"!~\/(\[{<]/.test(e)){if(e=="(")return t(n,1),r(n,i,[")"],"string");if(e=="[")return t(n,1),r(n,i,["]"],"string");if(e=="{")return t(n,1),r(n,i,["}"],"string");if(e=="<")return t(n,1),r(n,i,[">"],"string");if(/[\^'"!~\/]/.test(e))return r(n,i,[n.eat(e)],"string")}}}if(o=="m"){var e=l(n,-2);if(!(e&&/\w/.test(e))&&(e=n.eat(/[(\[{<\^'"!~\/]/),e)){if(/[\^'"!~\/]/.test(e))return r(n,i,[e],u,f);if(e=="(")return r(n,i,[")"],u,f);if(e=="[")return r(n,i,["]"],u,f);if(e=="{")return r(n,i,["}"],u,f);if(e=="<")return r(n,i,[">"],u,f)}}if(o=="s"){var e=/[\/>\]})\w]/.test(l(n,-2));if(!e&&(e=n.eat(/[(\[{<\^'"!~\/]/),e))return e=="["?r(n,i,["]","]"],u,f):e=="{"?r(n,i,["}","}"],u,f):e=="<"?r(n,i,[">",">"],u,f):e=="("?r(n,i,[")",")"],u,f):r(n,i,[e,e],u,f)}if(o=="y"){var e=/[\/>\]})\w]/.test(l(n,-2));if(!e&&(e=n.eat(/[(\[{<\^'"!~\/]/),e))return e=="["?r(n,i,["]","]"],u,f):e=="{"?r(n,i,["}","}"],u,f):e=="<"?r(n,i,[">",">"],u,f):e=="("?r(n,i,[")",")"],u,f):r(n,i,[e,e],u,f)}if(o=="t"){var e=/[\/>\]})\w]/.test(l(n,-2));if(!e&&(e=n.eat("r"),e&&(e=n.eat(/[(\[{<\^'"!~\/]/),e)))return e=="["?r(n,i,["]","]"],u,f):e=="{"?r(n,i,["}","}"],u,f):e=="<"?r(n,i,[">",">"],u,f):e=="("?r(n,i,[")",")"],u,f):r(n,i,[e,e],u,f)}if(o=="`")return r(n,i,[o],"variable-2");if(o=="/")return/~\s*$/.test(R(n))?r(n,i,[o],u,f):"operator";if(o=="$"){var p=n.pos;if(n.eatWhile(/\d/)||n.eat("{")&&n.eatWhile(/\d/)&&n.eat("}"))return"variable-2";n.pos=p}if(/[$@%]/.test(o)){var p=n.pos;if(n.eat("^")&&n.eat(/[A-Z]/)||!/[@$%&]/.test(l(n,-2))&&n.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/)){var e=n.current();if($[e])return"variable-2"}n.pos=p}if(/[$@%&]/.test(o)&&(n.eatWhile(/[\w$]/)||n.eat("{")&&n.eatWhile(/[\w$]/)&&n.eat("}"))){var e=n.current();return $[e]?"variable-2":"variable"}if(o=="#"&&l(n,-2)!="$")return n.skipToEnd(),"comment";if(/[:+\-\^*$&%@=<>!?|\/~\.]/.test(o)){var p=n.pos;if(n.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/),$[n.current()])return"operator";n.pos=p}if(o=="_"&&n.pos==1){if(A(n,6)=="_END__")return r(n,i,["\0"],"comment");if(A(n,7)=="_DATA__")return r(n,i,["\0"],"variable-2");if(A(n,7)=="_C__")return r(n,i,["\0"],"string")}if(/\w/.test(o)){var p=n.pos;if(l(n,-2)=="{"&&(l(n,0)=="}"||n.eatWhile(/\w/)&&l(n,0)=="}"))return"string";n.pos=p}if(/[A-Z]/.test(o)){var T=l(n,-2),p=n.pos;if(n.eatWhile(/[A-Z_]/),/[\da-z]/.test(l(n,0)))n.pos=p;else{var e=$[n.current()];return e?(e[1]&&(e=e[0]),T!=":"?e==1?"keyword":e==2?"def":e==3?"atom":e==4?"operator":e==5?"variable-2":"meta":"meta"):"meta"}}if(/[a-zA-Z_]/.test(o)){var T=l(n,-2);n.eatWhile(/\w/);var e=$[n.current()];return e?(e[1]&&(e=e[0]),T!=":"?e==1?"keyword":e==2?"def":e==3?"atom":e==4?"operator":e==5?"variable-2":"meta":"meta"):"meta"}return null}return{startState:function(){return{tokenize:g,chain:null,style:null,tail:null}},token:function(n,i){return(i.tokenize||g)(n,i)},lineComment:"#"}}),E.registerHelper("wordChars","perl",/[\w$]/),E.defineMIME("text/x-perl","perl");function l($,u){return $.string.charAt($.pos+(u||0))}function R($,u){if(u){var f=$.pos-u;return $.string.substr(f>=0?f:0,u)}else return $.string.substr(0,$.pos-1)}function A($,u){var f=$.string.length,r=f-$.pos+1;return $.string.substr($.pos,u&&u<f?u:r)}function t($,u){var f=$.pos+u,r;f<=0?$.pos=0:f>=(r=$.string.length-1)?$.pos=r:$.pos=f}})})();var v=k.exports;const D=h(v),y=b({__proto__:null,default:D},[v]);export{y as p};
