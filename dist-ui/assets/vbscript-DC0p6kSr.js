import{g as Q,c as X}from"./index-EQtFQ_9l.js";function ee(b,s){for(var a=0;a<s.length;a++){const o=s[a];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in b)){const l=Object.getOwnPropertyDescriptor(o,u);l&&Object.defineProperty(b,u,l.get?l:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var re={exports:{}};(function(b,s){(function(a){a(X)})(function(a){a.defineMode("vbscript",function(o,u){var l="error";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var w=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),k=new RegExp("^((<>)|(<=)|(>=))"),O=new RegExp("^[\\.,]"),C=new RegExp("^[\\(\\)]"),I=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),S=["class","sub","select","while","if","function","property","with","for"],E=["else","elseif","case"],j=["next","loop","wend"],D=t(["and","or","not","xor","is","mod","eqv","imp"]),T=["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"],F=["true","false","nothing","empty","null"],L=["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"],R=["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"],v=["WScript","err","debug","RegExp"],z=["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"],W=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"],A=["server","response","request","session","application"],B=["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"],K=["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],d=W.concat(z);v=v.concat(R),o.isASP&&(v=v.concat(A),d=d.concat(K,B));var M=t(T),_=t(F),N=t(L),P=t(v),q=t(d),U='"',Y=t(S),g=t(E),y=t(j),h=t(["end"]),H=t(["do"]),J=t(["on error resume next","exit"]),V=t(["rem"]);function m(e,r){r.currentIndent++}function f(e,r){r.currentIndent--}function p(e,r){if(e.eatSpace())return"space";var n=e.peek();if(n==="'"||e.match(V))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var i=!1;if((e.match(/^\d*\.\d+/i)||e.match(/^\d+\.\d*/)||e.match(/^\.\d+/))&&(i=!0),i)return e.eat(/J/i),"number";var c=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?c=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),c=!0):e.match(/^0(?![\dx])/i)&&(c=!0),c)return e.eat(/L/i),"number"}return e.match(U)?(r.tokenize=$(e.current()),r.tokenize(e,r)):e.match(k)||e.match(w)||e.match(D)?"operator":e.match(O)?null:e.match(C)?"bracket":e.match(J)?(r.doInCurrentLine=!0,"keyword"):e.match(H)?(m(e,r),r.doInCurrentLine=!0,"keyword"):e.match(Y)?(r.doInCurrentLine?r.doInCurrentLine=!1:m(e,r),"keyword"):e.match(g)?"keyword":e.match(h)?(f(e,r),f(e,r),"keyword"):e.match(y)?(r.doInCurrentLine?r.doInCurrentLine=!1:f(e,r),"keyword"):e.match(M)?"keyword":e.match(_)?"atom":e.match(q)?"variable-2":e.match(N)?"builtin":e.match(P)?"variable-2":e.match(I)?"variable":(e.next(),l)}function $(e){var r=e.length==1,n="string";return function(i,c){for(;!i.eol();){if(i.eatWhile(/[^'"]/),i.match(e))return c.tokenize=p,n;i.eat(/['"]/)}if(r){if(u.singleLineStringErrors)return l;c.tokenize=p}return n}}function G(e,r){var n=r.tokenize(e,r),i=e.current();return i==="."?(n=r.tokenize(e,r),i=e.current(),n&&(n.substr(0,8)==="variable"||n==="builtin"||n==="keyword")?((n==="builtin"||n==="keyword")&&(n="variable"),d.indexOf(i.substr(1))>-1&&(n="variable-2"),n):l):n}var Z={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:p,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,r){e.sol()&&(r.currentIndent+=r.nextLineIndent,r.nextLineIndent=0,r.doInCurrentLine=0);var n=G(e,r);return r.lastToken={style:n,content:e.current()},n==="space"&&(n=null),n},indent:function(e,r){var n=r.replace(/^\s+|\s+$/g,"");return n.match(y)||n.match(h)||n.match(g)?o.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*o.indentUnit}};return Z}),a.defineMIME("text/vbscript","vbscript")})})();var x=re.exports;const ne=Q(x),ie=ee({__proto__:null,default:ne},[x]);export{ie as v};