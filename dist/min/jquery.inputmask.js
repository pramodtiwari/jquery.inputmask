/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.4.7
*/
(function(b){void 0===b.fn.inputmask&&(b.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:b.noop,onincomplete:b.noop,oncleared:b.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:b.noop,onKeyDown:b.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:b.noop,skipOptionalPartCharacter:" ",showTooltip:!1,
numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(b,H,E,y,x){x=b.length;H||("*"==E?x=y.length+1:1<E&&(x+=b.length*(E-1)));return x}},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},b.fn.inputmask=function(z,
H){function E(a){var b=document.createElement("input");a="on"+a;var c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}function y(d,e){var c=a.aliases[d];return c?(c.alias&&y(c.alias),b.extend(!0,a,c),b.extend(!0,a,e),!0):!1}function x(d){a.numericInput&&(d=d.split("").reverse().join(""));var e=!1,c=0,q=a.greedy,m=a.repeat;"*"==m&&(q=!1);1==d.length&&!1==q&&0!=m&&(a.placeholder="");d=b.map(d.split(""),function(b,l){var d=[];if(b==a.escapeChar)e=!0;else if(b!=a.optionalmarker.start&&
b!=a.optionalmarker.end||e){var g=a.definitions[b];if(g&&!e)for(var h=0;h<g.cardinality;h++)d.push(O(c+h));else d.push(b),e=!1;c+=d.length;return d}});for(var l=d.slice(),h=1;h<m&&q;h++)l=l.concat(d.slice());return{mask:l,repeat:m,greedy:q}}function P(d){a.numericInput&&(d=d.split("").reverse().join(""));var e=!1,c=!1,q=!1;return b.map(d.split(""),function(b,l){var d=[];if(b==a.escapeChar)c=!0;else{if(b!=a.optionalmarker.start||c){if(b!=a.optionalmarker.end||c){var F=a.definitions[b];if(F&&!c){for(var r=
F.prevalidator,f=r?r.length:0,g=1;g<F.cardinality;g++){var s=f>=g?r[g-1]:[],u=s.validator,s=s.cardinality;d.push({fn:u?"string"==typeof u?RegExp(u):new function(){this.test=u}:/./,cardinality:s?s:1,optionality:e,newBlockMarker:!0==e?q:!1,offset:0,casing:F.casing,def:F.definitionSymbol||b});!0==e&&(q=!1)}d.push({fn:F.validator?"string"==typeof F.validator?RegExp(F.validator):new function(){this.test=F.validator}:/./,cardinality:F.cardinality,optionality:e,newBlockMarker:q,offset:0,casing:F.casing,
def:F.definitionSymbol||b})}else d.push({fn:null,cardinality:0,optionality:e,newBlockMarker:q,offset:0,casing:null,def:b}),c=!1;q=!1;return d}e=!1}else e=!0;q=!0}})}function T(){function d(b){var c=b.length;for(i=0;i<c&&b.charAt(i)!=a.optionalmarker.start;i++);var d=[b.substring(0,i)];i<c&&d.push(b.substring(i+1,c));return d}function e(l,h,m){var r=0,f=0,g=h.length;for(i=0;i<g&&!(h.charAt(i)==a.optionalmarker.start&&r++,h.charAt(i)==a.optionalmarker.end&&f++,0<r&&r==f);i++);r=[h.substring(0,i)];i<
g&&r.push(h.substring(i+1,g));f=d(r[0]);1<f.length?(h=l+f[0]+(a.optionalmarker.start+f[1]+a.optionalmarker.end)+(1<r.length?r[1]:""),-1==b.inArray(h,q)&&""!=h&&(q.push(h),g=x(h),c.push({mask:h,_buffer:g.mask,buffer:g.mask.slice(),tests:P(h),lastValidPosition:-1,greedy:g.greedy,repeat:g.repeat,metadata:m})),h=l+f[0]+(1<r.length?r[1]:""),-1==b.inArray(h,q)&&""!=h&&(q.push(h),g=x(h),c.push({mask:h,_buffer:g.mask,buffer:g.mask.slice(),tests:P(h),lastValidPosition:-1,greedy:g.greedy,repeat:g.repeat,metadata:m})),
1<d(f[1]).length&&e(l+f[0],f[1]+r[1],m),1<r.length&&1<d(r[1]).length&&(e(l+f[0]+(a.optionalmarker.start+f[1]+a.optionalmarker.end),r[1],m),e(l+f[0],r[1],m))):(h=l+r,-1==b.inArray(h,q)&&""!=h&&(q.push(h),g=x(h),c.push({mask:h,_buffer:g.mask,buffer:g.mask.slice(),tests:P(h),lastValidPosition:-1,greedy:g.greedy,repeat:g.repeat,metadata:m})))}var c=[],q=[],m=[];b.isFunction(a.mask)&&(a.mask=a.mask.call(this,a));b.isArray(a.mask)?b.each(a.mask,function(a,b){void 0!=b.mask?e("",b.mask.toString(),b):e("",
b.toString())}):e("",a.mask.toString());(function(b){function c(){this.matches=[];this.isQuantifier=this.isOptional=this.isGroup=!1}var d=/(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[]()|\\]+|./g,e=new c,f,g=[];for(m=[];f=d.exec(b);)switch(f=f[0],f.charAt(0)){case a.optionalmarker.end:case a.groupmarker.end:f=g.pop();0<g.length?g[g.length-1].matches.push(f):(m.push(f),e=f);break;case a.optionalmarker.start:!e.isGroup&&0<e.matches.length&&m.push(e);e=new c;e.isOptional=!0;g.push(e);break;case a.groupmarker.start:!e.isGroup&&
0<e.matches.length&&m.push(e);e=new c;e.isGroup=!0;g.push(e);break;case a.quantifiermarker.start:var s=new c;s.isQuantifier=!0;s.matches.push(f);0<g.length?g[g.length-1].matches.push(s):e.matches.push(s);break;default:if(0<g.length)g[g.length-1].matches.push(f);else{if(e.isGroup||e.isOptional)e=new c;e.matches.push(f)}}0<e.matches.length&&m.push(e);return m})(a.mask);return a.greedy?c:c.sort(function(a,b){return a.mask.length-b.mask.length})}function O(b){return a.placeholder.charAt(b%a.placeholder.length)}
function D(d,e){function c(){return d[e]}function q(){return c().tests}function m(){return c()._buffer}function l(){return c().buffer}function h(n,p,K){function L(b,c,n,p){for(var e=f(b),ea=n?1:0,U="",k=c.buffer,X=c.tests[e].cardinality;X>ea;X--)U+=I(k,e-(X-1));n&&(U+=n);return null!=c.tests[e].fn?c.tests[e].fn.test(U,k,b,p,a):n==I(c._buffer,b,!0)||n==a.skipOptionalPartCharacter?{refresh:!0,c:I(c._buffer,b,!0),pos:b}:!1}if(K=!0===K){var m=L(n,c(),p,K);!0===m&&(m={pos:n});return m}var h=[],m=!1,q=
e,u=l().slice(),v=c().lastValidPosition;t(n);var w=[];b.each(d,function(a,b){if("object"==typeof b){e=a;var d=n,f=c().lastValidPosition,t;if(f==v){if(1<d-v)for(f=-1==f?0:f;f<d&&(t=L(f,c(),u[f],!0),!1!==t);f++)J(l(),f,u[f],!0),!0===t&&(t={pos:f}),t=t.pos||f,c().lastValidPosition<t&&(c().lastValidPosition=t);if(!r(d)&&!L(d,c(),p,K)){f=s(d)-d;for(t=0;t<f&&!1===L(++d,c(),p,K);t++);w.push(e)}}(c().lastValidPosition>=v||e==q)&&0<=d&&d<g()&&(m=L(d,c(),p,K),!1!==m&&(!0===m&&(m={pos:d}),t=m.pos||d,c().lastValidPosition<
t&&(c().lastValidPosition=t)),h.push({activeMasksetIndex:a,result:m}))}});e=q;return function(a,c){var e=!1;b.each(c,function(c,n){if(e=-1==b.inArray(n.activeMasksetIndex,a)&&!1!==n.result)return!1});if(e)c=b.map(c,function(c,n){if(-1==b.inArray(c.activeMasksetIndex,a))return c;d[c.activeMasksetIndex].lastValidPosition=v});else{var g=-1,K=-1;b.each(c,function(c,n){-1!=b.inArray(n.activeMasksetIndex,a)&&!1!==n.result&(-1==g||g>n.result.pos)&&(g=n.result.pos,K=n.activeMasksetIndex)});c=b.map(c,function(c,
U){if(-1!=b.inArray(c.activeMasksetIndex,a)){if(c.result.pos==g)return c;if(!1!==c.result){for(var k=n;k<g;k++)if(rsltValid=L(k,d[c.activeMasksetIndex],d[K].buffer[k],!0),!1===rsltValid){d[c.activeMasksetIndex].lastValidPosition=g-1;break}else J(d[c.activeMasksetIndex].buffer,k,d[K].buffer[k],!0),d[c.activeMasksetIndex].lastValidPosition=k;rsltValid=L(g,d[c.activeMasksetIndex],p,!0);!1!==rsltValid&&(J(d[c.activeMasksetIndex].buffer,g,p,!0),d[c.activeMasksetIndex].lastValidPosition=g);return c}}})}return c}(w,
h)}function u(){var a=e,p={activeMasksetIndex:0,lastValidPosition:-1,next:-1};b.each(d,function(a,b){"object"==typeof b&&(e=a,c().lastValidPosition>p.lastValidPosition?(p.activeMasksetIndex=a,p.lastValidPosition=c().lastValidPosition,p.next=s(c().lastValidPosition)):c().lastValidPosition==p.lastValidPosition&&(-1==p.next||p.next>s(c().lastValidPosition))&&(p.activeMasksetIndex=a,p.lastValidPosition=c().lastValidPosition,p.next=s(c().lastValidPosition)))});e=-1!=p.lastValidPosition&&d[a].lastValidPosition==
p.lastValidPosition?a:p.activeMasksetIndex;a!=e&&(z(l(),s(p.lastValidPosition),g()),c().writeOutBuffer=!0);v.data("_inputmask").activeMasksetIndex=e}function r(a){a=f(a);a=q()[a];return void 0!=a?a.fn:!1}function f(a){return a%q().length}function g(){return a.getMaskLength(m(),c().greedy,c().repeat,l(),a)}function s(a){var b=g();if(a>=b)return b;for(;++a<b&&!r(a););return a}function t(a){if(0>=a)return 0;for(;0<--a&&!r(a););return a}function J(a,b,c,e){e&&(b=x(a,b));e=q()[f(b)];var d=c;if(void 0!=
d&&void 0!=e)switch(e.casing){case "upper":d=c.toUpperCase();break;case "lower":d=c.toLowerCase()}a[b]=d}function I(a,b,c){c&&(b=x(a,b));return a[b]}function x(a,b){for(var c;void 0==a[b]&&a.length<g();)for(c=0;void 0!==m()[c];)a.push(m()[c++]);return b}function M(a,b,c){a._valueSet(b.join(""));void 0!=c&&w(a,c)}function z(a,b,c,e){for(var d=g();b<c&&b<d;b++)!0===e?r(b)||J(a,b,""):J(a,b,I(m().slice(),b,!0))}function A(a,b){var c=f(b);J(a,b,I(m(),c))}function y(a,l,f,h,r){h=void 0!=h?h.slice():E(a._valueGet()).split("");
b.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==f&&(e=0);l&&a._valueSet("");g();b.each(h,function(e,d){if(!0===r){var g=c().p,g=-1==g?g:t(g),h=-1==g?e:s(g);-1==b.inArray(d,m().slice(g+1,h))&&b(a).trigger("_keypress",[!0,d.charCodeAt(0),l,f,e])}else b(a).trigger("_keypress",[!0,d.charCodeAt(0),l,f,e])});!0===f&&-1!=c().p&&(c().lastValidPosition=t(c().p))}function H(a){return b.inputmask.escapeRegex.call(this,a)}function E(a){return a.replace(RegExp("("+
H(m().join(""))+")*$"),"")}function D(a){var b=l(),c=b.slice(),e,d;for(d=c.length-1;0<=d;d--)if(e=f(d),q()[e].optionality)if(r(d)&&h(d,b[d],!0))break;else c.pop();else break;M(a,c)}function P(a,c){if(!q()||!0!==c&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var d=b.map(l(),function(a,b){return r(b)&&h(b,a,!0)?a:null});return(B?d.reverse():d).join("")}function Q(b){!B||"number"!=typeof b||a.greedy&&""==a.placeholder||(b=l().length-b);return b}function w(c,d,e){var g=c.jquery&&0<c.length?c[0]:
c;if("number"==typeof d)d=Q(d),e=Q(e),b(c).is(":visible")&&(e="number"==typeof e?e:d,g.scrollLeft=g.scrollWidth,!1==a.insertMode&&d==e&&e++,g.setSelectionRange?(g.selectionStart=d,g.selectionEnd=Y?d:e):g.createTextRange&&(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",e),c.moveStart("character",d),c.select()));else{if(!b(c).is(":visible"))return{begin:0,end:0};g.setSelectionRange?(d=g.selectionStart,e=g.selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),
d=0-c.duplicate().moveStart("character",-1E5),e=d+c.text.length);d=Q(d);e=Q(e);return{begin:d,end:e}}}function V(c){if("*"!=a.repeat){var l=!1,h=0,s=e;b.each(d,function(a,b){if("object"==typeof b){e=a;var d=t(g());if(b.lastValidPosition>=h&&b.lastValidPosition==d){for(var s=!0,q=0;q<=d;q++){var u=r(q),v=f(q);if(u&&(void 0==c[q]||c[q]==O(q))||!u&&c[q]!=m()[v]){s=!1;break}}if(l=l||s)return!1}h=b.lastValidPosition}});e=s;return l}}var B=!1,R=l().join(""),v,T;this.unmaskedvalue=function(a,b){B=a.data("_inputmask").isRTL;
return P(a,b)};this.isComplete=function(a){return V(a)};this.mask=function(n){function p(a){a=b._data(a).events;b.each(a,function(a,c){b.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type&&"_keypress"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function x(a){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var d=c.get,e=
c.set;a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){e.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=b(this),c=b(this).data("_inputmask"),e=c.masksets,g=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[g]._buffer.join("")?d.call(this):""},set:function(a){e.call(this,a);b(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&
a.__lookupGetter__("value"))a._valueGet||(d=a.__lookupGetter__("value"),e=a.__lookupSetter__("value"),a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){e.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=b(this),c=b(this).data("_inputmask"),e=c.masksets,g=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=e[g]._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",
function(a){e.call(this,a);b(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),void 0==b.valHooks.text||!0!=b.valHooks.text.inputmaskpatch)d=b.valHooks.text&&b.valHooks.text.get?b.valHooks.text.get:function(a){return a.value},e=b.valHooks.text&&b.valHooks.text.set?b.valHooks.text.set:function(a,b){a.value=b;return a},jQuery.extend(b.valHooks,
{text:{get:function(a){var c=b(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=d(a);c=c.data("_inputmask");return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?a:""}return d(a)},set:function(a,c){var d=b(a),g=e(a,c);d.data("_inputmask")&&d.triggerHandler("setvalue.inputmask");return g},inputmaskpatch:!0}})}function L(a,b,d,e){var N=l();if(!1!==e)for(;!r(a)&&0<=a-1;)a--;for(e=a;e<b&&e<g();e++)if(r(e)){A(N,e);var n=s(e),u=I(N,n);if(u!=
O(n))if(n<g()&&!1!==h(e,u,!0)&&q()[f(e)].def==q()[f(n)].def)J(N,e,u,!0);else if(r(e))break}else A(N,e);void 0!=d&&J(N,t(b),d);if(!1==c().greedy){b=E(N.join("")).split("");N.length=b.length;e=0;for(d=N.length;e<d;e++)N[e]=b[e];0==N.length&&(c().buffer=m().slice())}return a}function H(a,b,e){var d=l();if(I(d,a,!0)!=O(a))for(var g=t(b);g>a&&0<=g;g--)if(r(g)){var n=t(g),s=I(d,n);if(s!=O(n))if(!1!==h(n,s,!0)&&q()[f(g)].def==q()[f(n)].def)J(d,g,s,!0),A(d,n);else break}else A(d,g);void 0!=e&&I(d,a)==O(a)&&
J(d,a,e);a=d.length;if(!1==c().greedy){e=E(d.join("")).split("");d.length=e.length;g=0;for(n=d.length;g<n;g++)d[g]=e[g];0==d.length&&(c().buffer=m().slice())}return b-(a-d.length)}function P(b,e,k){if(a.numericInput||B){switch(e){case a.keyCode.BACKSPACE:e=a.keyCode.DELETE;break;case a.keyCode.DELETE:e=a.keyCode.BACKSPACE}if(B){var f=k.end;k.end=k.begin;k.begin=f}}f=!0;k.begin==k.end?(f=e==a.keyCode.BACKSPACE?k.begin-1:k.begin,a.isNumeric&&""!=a.radixPoint&&l()[f]==a.radixPoint&&(k.begin=l().length-
1==f?k.begin:e==a.keyCode.BACKSPACE?f:s(f),k.end=k.begin),f=!1,e==a.keyCode.BACKSPACE?k.begin--:e==a.keyCode.DELETE&&k.end++):1!=k.end-k.begin||a.insertMode||(f=!1,e==a.keyCode.BACKSPACE&&k.begin--);z(l(),k.begin,k.end);var h=g();if(!1==a.greedy)L(k.begin,h,void 0,!B&&e==a.keyCode.BACKSPACE&&!f);else{for(var m=k.begin,n=k.begin;n<k.end;n++)if(r(n)||!f)m=L(k.begin,h,void 0,!B&&e==a.keyCode.BACKSPACE&&!f);f||(k.begin=m)}e=s(-1);z(l(),k.begin,k.end,!0);y(b,!1,void 0==d[1]||e>=k.end,l());c().lastValidPosition<
e?(c().lastValidPosition=-1,c().p=e):c().p=k.begin}function ba(e){W=!1;var d=this,k=b(d),f=e.keyCode,h=w(d);f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||fa&&127==f||e.ctrlKey&&88==f?(e.preventDefault(),88==f&&(R=l().join("")),P(d,f,h),u(),M(d,l(),c().p),d._valueGet()==m().join("")&&k.trigger("cleared"),a.showTooltip&&k.prop("title",c().mask)):f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?setTimeout(function(){var b=s(c().lastValidPosition);a.insertMode||b!=g()||e.shiftKey||b--;w(d,e.shiftKey?h.begin:b,
b)},0):f==a.keyCode.HOME&&!e.shiftKey||f==a.keyCode.PAGE_UP?w(d,0,e.shiftKey?h.begin:0):f==a.keyCode.ESCAPE||90==f&&e.ctrlKey?(y(d,!0,!1,R.split("")),k.click()):f!=a.keyCode.INSERT||e.shiftKey||e.ctrlKey?!1!=a.insertMode||e.shiftKey||(f==a.keyCode.RIGHT?setTimeout(function(){var a=w(d);w(d,a.begin)},0):f==a.keyCode.LEFT&&setTimeout(function(){var a=w(d);w(d,a.begin-1)},0)):(a.insertMode=!a.insertMode,w(d,a.insertMode||h.begin!=g()?h.begin:h.begin-1));k=w(d);!0===a.onKeyDown.call(this,e,l(),a)&&w(d,
k.begin,k.end);Z=-1!=b.inArray(f,a.ignorables)}function ca(f,m,k,n,q,r){if(void 0==k&&W)return!1;W=!0;var v=b(this);f=f||window.event;k=k||f.which||f.charCode||f.keyCode;if((!f.ctrlKey||!f.altKey)&&(f.ctrlKey||f.metaKey||Z)&&!0!==m)return!0;if(k){!0!==m&&46==k&&!1==f.shiftKey&&","==a.radixPoint&&(k=44);var p,y,x=String.fromCharCode(k);m?(k=q?r:c().lastValidPosition+1,p={begin:k,end:k}):p=w(this);r=B?1<p.begin-p.end||1==p.begin-p.end&&a.insertMode:1<p.end-p.begin||1==p.end-p.begin&&a.insertMode;var A=
e;r&&(e=A,b.each(d,function(a,b){"object"==typeof b&&(e=a,c().undoBuffer=l().join(""))}),P(this,a.keyCode.DELETE,p),a.insertMode||b.each(d,function(a,b){"object"==typeof b&&(e=a,H(p.begin,g()),c().lastValidPosition=s(c().lastValidPosition))}),e=A);var z=l().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==m&&-1!=z&&(a.greedy&&p.begin<=z?(p.begin=t(p.begin),p.end=p.begin):x==a.radixPoint&&(p.begin=z,p.end=p.begin));var C=p.begin;k=h(C,x,q);!0===q&&(k=[{activeMasksetIndex:e,result:k}]);var G=-1;b.each(k,
function(b,d){e=d.activeMasksetIndex;c().writeOutBuffer=!0;var f=d.result;if(!1!==f){var k=!1,h=l();!0!==f&&(k=f.refresh,C=void 0!=f.pos?f.pos:C,x=void 0!=f.c?f.c:x);if(!0!==k){if(!0==a.insertMode){f=g();for(h=h.slice();I(h,f,!0)!=O(f)&&f>=C;)f=0==f?-1:t(f);f>=C?(H(C,g(),x),h=c().lastValidPosition,f=s(h),f!=g()&&h>=C&&I(l(),f,!0)!=O(f)&&(c().lastValidPosition=f)):c().writeOutBuffer=!1}else J(h,C,x,!0);if(-1==G||G>s(C))G=s(C)}else!q&&(h=C<g()?C+1:C,-1==G||G>h)&&(G=h);G>c().p&&(c().p=G)}});!0!==q&&
(e=A,u());if(!1!==n&&(b.each(k,function(a,b){if(b.activeMasksetIndex==e)return y=b,!1}),void 0!=y)){var E=this;setTimeout(function(){a.onKeyValidation.call(E,y.result,a)},0);if(c().writeOutBuffer&&!1!==y.result){var D=l();n=m?void 0:a.numericInput?C>z?t(G):x==a.radixPoint?G-1:t(G-1):G;M(this,D,n);!0!==m&&setTimeout(function(){!0===V(D)&&v.trigger("complete")},0)}else r&&(c().buffer=c().undoBuffer.split(""))}a.showTooltip&&v.prop("title",c().mask);f.preventDefault()}}function Y(c){var e=b(this),d=
c.keyCode,f=l();da&&d==a.keyCode.BACKSPACE&&T==this._valueGet()&&ba.call(this,c);a.onKeyUp.call(this,c,f,a);d==a.keyCode.TAB&&a.showMaskOnFocus&&(e.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=m().slice(),M(this,f),w(this,0),R=l().join("")):(M(this,f),f.join("")==m().join("")&&-1!=b.inArray(a.radixPoint,f)?(w(this,Q(0)),e.click()):w(this,Q(0),Q(g()))))}v=b(n);if(v.is(":input")){v.data("_inputmask",{masksets:d,activeMasksetIndex:e,opts:a,isRTL:!1});a.showTooltip&&v.prop("title",c().mask);
c().greedy=c().greedy?c().greedy:0==c().repeat;if(null!=v.attr("maxLength")){var S=v.prop("maxLength");-1<S&&b.each(d,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=S)});g()>=S&&-1<S&&(S<m().length&&(m().length=S),!1==c().greedy&&(c().repeat=Math.round(S/m().length)),v.prop("maxLength",2*g()))}x(n);var W=!1,Z=!1;a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==n.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&v.css("text-align","right");if("rtl"==n.dir||
a.numericInput){n.dir="ltr";v.removeAttr("dir");var $=v.data("_inputmask");$.isRTL=!0;v.data("_inputmask",$);B=!0}v.unbind(".inputmask");v.removeClass("focus.inputmask");v.closest("form").bind("submit",function(){R!=l().join("")&&v.change()}).bind("reset",function(){setTimeout(function(){v.trigger("setvalue")},0)});v.bind("mouseenter.inputmask",function(){!b(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=l().join("")&&M(this,l())}).bind("blur.inputmask",function(){var c=b(this),
f=this._valueGet(),g=l();c.removeClass("focus.inputmask");R!=l().join("")&&c.change();a.clearMaskOnLostFocus&&""!=f&&(f==m().join("")?this._valueSet(""):D(this));!1===V(g)&&(c.trigger("incomplete"),a.clearIncomplete&&(b.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),e=0,a.clearMaskOnLostFocus?this._valueSet(""):(g=m().slice(),M(this,g))))}).bind("focus.inputmask",function(){var e=b(this),d=this._valueGet();a.showMaskOnFocus&&!e.hasClass("focus.inputmask")&&
(!a.showMaskOnHover||a.showMaskOnHover&&""==d)&&this._valueGet()!=l().join("")&&M(this,l(),s(c().lastValidPosition));e.addClass("focus.inputmask");R=l().join("")}).bind("mouseleave.inputmask",function(){var c=b(this);a.clearMaskOnLostFocus&&(c.hasClass("focus.inputmask")||this._valueGet()==c.attr("placeholder")||(this._valueGet()==m().join("")||""==this._valueGet()?this._valueSet(""):D(this)))}).bind("click.inputmask",function(){var e=this;setTimeout(function(){var d=w(e),f=l();if(d.begin==d.end){var d=
a.isRTL?Q(d.begin):d.begin,g=c().lastValidPosition,f=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=b.inArray(a.radixPoint,f)?a.numericInput?s(b.inArray(a.radixPoint,f)):b.inArray(a.radixPoint,f):s(g):s(g);d<f?r(d)?w(e,d):w(e,s(d)):w(e,f)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){w(a,0,s(c().lastValidPosition))},0)}).bind(ga+".inputmask dragdrop.inputmask drop.inputmask",function(a){var c=this,d=b(c);if("propertychange"==a.type&&c._valueGet().length<=g())return!0;
setTimeout(function(){y(c,!0,!1,void 0,!0);!0===V(l())&&d.trigger("complete");d.click()},0)}).bind("setvalue.inputmask",function(){y(this,!0);R=l().join("");this._valueGet()==m().join("")&&this._valueSet("")}).bind("_keypress.inputmask",ca).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared).bind("keyup.inputmask",Y);da?v.bind("input.inputmask",function(a){a=b(this);T=l().join("");y(this,!1,!1);M(this,l());!0===V(l())&&a.trigger("complete");
a.click()}):v.bind("keydown.inputmask",ba).bind("keypress.inputmask",ca);y(n,!0,!1);R=l().join("");var aa;try{aa=document.activeElement}catch(ha){}aa===n?(v.addClass("focus.inputmask"),w(n,s(c().lastValidPosition))):a.clearMaskOnLostFocus?l().join("")==m().join("")?n._valueSet(""):D(n):M(n,l());p(n)}};return this}var a=b.extend(!0,{},b.inputmask.defaults,H),A=null!==navigator.userAgent.match(/msie 10/i),fa=null!==navigator.userAgent.match(/iphone/i),Y=null!==navigator.userAgent.match(/android.*safari.*/i),
da=null!==navigator.userAgent.match(/android.*chrome.*/i),ga=E("paste")&&!A?"paste":E("input")?"input":"propertychange",u,t=0;if("string"===typeof z)switch(z){case "mask":return y(a.alias,H),u=T(),0==u.length?this:this.each(function(){D(b.extend(!0,{},u),0).mask(this)});case "unmaskedvalue":return A=b(this),A.data("_inputmask")?(u=A.data("_inputmask").masksets,t=A.data("_inputmask").activeMasksetIndex,a=A.data("_inputmask").opts,D(u,t).unmaskedvalue(A)):A.val();case "remove":return this.each(function(){var d=
b(this);if(d.data("_inputmask")){u=d.data("_inputmask").masksets;t=d.data("_inputmask").activeMasksetIndex;a=d.data("_inputmask").opts;this._valueSet(D(u,t).unmaskedvalue(d,!0));d.removeData("_inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(this,"value"));e&&e.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&
this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(c){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(u=this.data("_inputmask").masksets,t=this.data("_inputmask").activeMasksetIndex,u[t]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return u=this.data("_inputmask").masksets,
t=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,D(u,t).isComplete(this[0]._valueGet().split(""));case "getmetadata":if(this.data("_inputmask"))return u=this.data("_inputmask").masksets,t=this.data("_inputmask").activeMasksetIndex,u[t].metadata;return;default:return y(z,H)||(a.mask=z),u=T(),0==u.length?this:this.each(function(){D(b.extend(!0,{},u),t).mask(this)})}else{if("object"==typeof z)return a=b.extend(!0,{},b.inputmask.defaults,z),y(a.alias,z),u=T(),0==u.length?this:
this.each(function(){D(b.extend(!0,{},u),t).mask(this)});if(void 0==z)return this.each(function(){var d=b(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),e=b.parseJSON("{"+d+"}");b.extend(!0,e,H);a=b.extend(!0,{},b.inputmask.defaults,e);y(a.alias,e);a.alias=void 0;b(this).inputmask(a)}catch(c){}})}return this})})(jQuery);
