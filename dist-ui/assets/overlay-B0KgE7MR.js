import{c as y}from"./main-udIhCHFz.js";var a={exports:{}},v;function f(){return v||(v=1,function(c,s){(function(e){e(y)})(function(e){e.overlayMode=function(r,u,i){return{startState:function(){return{base:e.startState(r),overlay:e.startState(u),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(o){return{base:e.copyState(r,o.base),overlay:e.copyState(u,o.overlay),basePos:o.basePos,baseCur:null,overlayPos:o.overlayPos,overlayCur:null}},token:function(o,n){return(o!=n.streamSeen||Math.min(n.basePos,n.overlayPos)<o.start)&&(n.streamSeen=o,n.basePos=n.overlayPos=o.start),o.start==n.basePos&&(n.baseCur=r.token(o,n.base),n.basePos=o.pos),o.start==n.overlayPos&&(o.pos=o.start,n.overlayCur=u.token(o,n.overlay),n.overlayPos=o.pos),o.pos=Math.min(n.basePos,n.overlayPos),n.overlayCur==null?n.baseCur:n.baseCur!=null&&n.overlay.combineTokens||i&&n.overlay.combineTokens==null?n.baseCur+" "+n.overlayCur:n.overlayCur},indent:r.indent&&function(o,n,l){return r.indent(o.base,n,l)},electricChars:r.electricChars,innerMode:function(o){return{state:o.base,mode:r}},blankLine:function(o){var n,l;return r.blankLine&&(n=r.blankLine(o.base)),u.blankLine&&(l=u.blankLine(o.overlay)),l==null?n:i&&n!=null?n+" "+l:l}}}})}()),a.exports}export{f as r};
