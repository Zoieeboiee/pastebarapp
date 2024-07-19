import{g as x,c as v}from"./main-udIhCHFz.js";function h(a,f){for(var s=0;s<f.length;s++){const o=f[s];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in a)){const i=Object.getOwnPropertyDescriptor(o,u);i&&Object.defineProperty(a,u,i.get?i:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var G={exports:{}};(function(a,f){(function(s){s(v)})(function(s){s.defineMode("asn.1",function(u,i){var S=u.indentUnit,T=i.keywords||{},m=i.cmipVerbs||{},y=i.compareTypes||{},C=i.status||{},g=i.tags||{},R=i.storage||{},D=i.modifier||{},b=i.accessTypes||{},L=i.multiLineStrings,P=i.indentStatements!==!1,A=/[\|\^]/,E;function M(e,t){var n=e.next();if(n=='"'||n=="'")return t.tokenize=U(n),t.tokenize(e,t);if(/[\[\]\(\){}:=,;]/.test(n))return E=n,"punctuation";if(n=="-"&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(A.test(n))return e.eatWhile(A),"operator";e.eatWhile(/[\w\-]/);var r=e.current();return T.propertyIsEnumerable(r)?"keyword":m.propertyIsEnumerable(r)?"variable cmipVerbs":y.propertyIsEnumerable(r)?"atom compareTypes":C.propertyIsEnumerable(r)?"comment status":g.propertyIsEnumerable(r)?"variable-3 tags":R.propertyIsEnumerable(r)?"builtin storage":D.propertyIsEnumerable(r)?"string-2 modifier":b.propertyIsEnumerable(r)?"atom accessTypes":"variable"}function U(e){return function(t,n){for(var r=!1,c,O=!1;(c=t.next())!=null;){if(c==e&&!r){var I=t.peek();I&&(I=I.toLowerCase(),(I=="b"||I=="h"||I=="o")&&t.next()),O=!0;break}r=!r&&c=="\\"}return(O||!(r||L))&&(n.tokenize=null),"string"}}function d(e,t,n,r,c){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=c}function p(e,t,n){var r=e.indented;return e.context&&e.context.type=="statement"&&(r=e.context.indented),e.context=new d(r,t,n,null,e.context)}function l(e){var t=e.context.type;return(t==")"||t=="]"||t=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new d((e||0)-S,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;E=null;var r=(t.tokenize||M)(e,t);if(r=="comment")return r;if(n.align==null&&(n.align=!0),(E==";"||E==":"||E==",")&&n.type=="statement")l(t);else if(E=="{")p(t,e.column(),"}");else if(E=="[")p(t,e.column(),"]");else if(E=="(")p(t,e.column(),")");else if(E=="}"){for(;n.type=="statement";)n=l(t);for(n.type=="}"&&(n=l(t));n.type=="statement";)n=l(t)}else E==n.type?l(t):P&&((n.type=="}"||n.type=="top")&&E!=";"||n.type=="statement"&&E=="newstatement")&&p(t,e.column(),"statement");return t.startOfLine=!1,r},electricChars:"{}",lineComment:"--",fold:"brace"}});function o(u){for(var i={},S=u.split(" "),T=0;T<S.length;++T)i[S[T]]=!0;return i}s.defineMIME("text/x-ttcn-asn",{name:"asn.1",keywords:o("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:o("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:o("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:o("current deprecated mandatory obsolete"),tags:o("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:o("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:o("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:o("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0})})})();var N=G.exports;const w=x(N),B=h({__proto__:null,default:w},[N]);export{B as a};
