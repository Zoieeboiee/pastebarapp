import{g as j,c as D}from"./index-6eJdXugE.js";function O(c,f){for(var a=0;a<f.length;a++){const o=f[a];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in c)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(c,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(c,f){(function(a){a(D)})(function(a){a.defineMode("lua",function(o,l){var u=o.indentUnit;function b(e){return new RegExp("^(?:"+e.join("|")+")","i")}function s(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var v=s(l.specials||[]),k=s(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),x=s(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),w=s(["function","if","repeat","do","\\(","{"]),y=s(["end","until","\\)","}"]),E=b(["end","until","\\)","}","else","elseif"]);function p(e){for(var n=0;e.eat("=");)++n;return e.eat("["),n}function g(e,n){var t=e.next();return t=="-"&&e.eat("-")?e.eat("[")&&e.eat("[")?(n.cur=m(p(e),"comment"))(e,n):(e.skipToEnd(),"comment"):t=='"'||t=="'"?(n.cur=_(t))(e,n):t=="["&&/[\[=]/.test(e.peek())?(n.cur=m(p(e),"string"))(e,n):/\d/.test(t)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(t)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function m(e,n){return function(t,r){for(var i=null,d;(d=t.next())!=null;)if(i==null)d=="]"&&(i=0);else if(d=="=")++i;else if(d=="]"&&i==e){r.cur=g;break}else i=null;return n}}function _(e){return function(n,t){for(var r=!1,i;(i=n.next())!=null&&!(i==e&&!r);)r=!r&&i=="\\";return r||(t.cur=g),"string"}}return{startState:function(e){return{basecol:e||0,indentDepth:0,cur:g}},token:function(e,n){if(e.eatSpace())return null;var t=n.cur(e,n),r=e.current();return t=="variable"&&(x.test(r)?t="keyword":k.test(r)?t="builtin":v.test(r)&&(t="variable-2")),t!="comment"&&t!="string"&&(w.test(r)?++n.indentDepth:y.test(r)&&--n.indentDepth),t},indent:function(e,n){var t=E.test(n);return e.basecol+u*(e.indentDepth-(t?1:0))},electricInput:/^\s*(?:end|until|else|\)|\})$/,lineComment:"--",blockCommentStart:"--[[",blockCommentEnd:"]]"}}),a.defineMIME("text/x-lua","lua")})})();var h=S.exports;const R=j(h),T=O({__proto__:null,default:R},[h]);export{T as l};
