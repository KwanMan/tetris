!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=17)}([function(t,n,e){!function(){"use strict";function n(){}function e(t,e){var o,r,i,u,a=arguments,c=R;for(u=arguments.length;u-- >2;)W.push(a[u]);for(e&&null!=e.children&&(W.length||W.push(e.children),delete e.children);W.length;)if((r=W.pop())&&void 0!==r.pop)for(u=r.length;u--;)W.push(r[u]);else!0!==r&&!1!==r||(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&o?c[c.length-1]+=r:c===R?c=[r]:c.push(r),o=i;var s=new n;return s.nodeName=t,s.children=c,s.attributes=null==e?void 0:e,s.key=null==e?void 0:e.key,void 0!==M.vnode&&M.vnode(s),s}function o(t,n){for(var e in n)t[e]=n[e];return t}function r(t,n){return e(t.nodeName,o(o({},t.attributes),n),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(M.debounceRendering||setTimeout)(u)}function u(){var t,n=A;for(A=[];t=n.pop();)t.__d&&T(t)}function a(t,n,e){return"string"==typeof n||"number"==typeof n?void 0!==t.splitText:"string"==typeof n.nodeName?!t._componentConstructor&&c(t,n.nodeName):e||t._componentConstructor===n.nodeName}function c(t,n){return t.__n===n||t.nodeName.toLowerCase()===n.toLowerCase()}function s(t){var n=o({},t.attributes);n.children=t.children;var e=t.nodeName.defaultProps;if(void 0!==e)for(var r in e)void 0===n[r]&&(n[r]=e[r]);return n}function f(t,n){var e=n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return e.__n=t,e}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,n,e,o,r){if("className"===n&&(n="class"),"key"===n);else if("ref"===n)e&&e(null),o&&o(t);else if("class"!==n||r)if("style"===n){if(o&&"string"!=typeof o&&"string"!=typeof e||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof e)for(var i in e)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===U.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===n)o&&(t.innerHTML=o.__html||"");else if("o"==n[0]&&"n"==n[1]){var u=n!==(n=n.replace(/Capture$/,""));n=n.toLowerCase().substring(2),o?e||t.addEventListener(n,v,u):t.removeEventListener(n,v,u),(t.__l||(t.__l={}))[n]=o}else if("list"!==n&&"type"!==n&&!r&&n in t)d(t,n,null==o?"":o),null!=o&&!1!==o||t.removeAttribute(n);else{var a=r&&n!==(n=n.replace(/^xlink\:?/,""));null==o||!1===o?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.removeAttribute(n):"function"!=typeof o&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),o):t.setAttribute(n,o))}else t.className=o||""}function d(t,n,e){try{t[n]=e}catch(t){}}function v(t){return this.__l[t.type](M.event&&M.event(t)||t)}function _(){for(var t;t=G.pop();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function m(t,n,e,o,r,i){V++||(E=null!=r&&void 0!==r.ownerSVGElement,B=null!=t&&!("__preactattr_"in t));var u=h(t,n,e,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--V||(B=!1,i||_()),u}function h(t,n,e,o,r){var i=t,u=E;if(null==n&&(n=""),"string"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=n&&(t.nodeValue=n):(i=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;if("function"==typeof n.nodeName)return L(t,n,e,o);if(E="svg"===n.nodeName||"foreignObject"!==n.nodeName&&E,(!t||!c(t,String(n.nodeName)))&&(i=f(String(n.nodeName),E),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var a=i.firstChild,s=i.__preactattr_||(i.__preactattr_={}),l=n.children;return!B&&l&&1===l.length&&"string"==typeof l[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=l[0]&&(a.nodeValue=l[0]):(l&&l.length||null!=a)&&g(i,l,e,o,B||null!=s.dangerouslySetInnerHTML),w(i,n.attributes,s),E=u,i}function g(t,n,e,o,r){var i,u,c,s,f=t.childNodes,p=[],d={},v=0,_=0,m=f.length,g=0,y=n?n.length:0;if(0!==m)for(var w=0;w<m;w++){var N=f[w],C=N.__preactattr_,k=y&&C?N._component?N._component.__k:C.key:null;null!=k?(v++,d[k]=N):(C||(void 0!==N.splitText?!r||N.nodeValue.trim():r))&&(p[g++]=N)}if(0!==y)for(var w=0;w<y;w++){c=n[w],s=null;var k=c.key;if(null!=k)v&&void 0!==d[k]&&(s=d[k],d[k]=void 0,v--);else if(!s&&_<g)for(i=_;i<g;i++)if(void 0!==p[i]&&a(u=p[i],c,r)){s=u,p[i]=void 0,i===g-1&&g--,i===_&&_++;break}s=h(s,c,e,o),s&&s!==t&&(w>=m?t.appendChild(s):s!==f[w]&&(s===f[w+1]?l(f[w]):t.insertBefore(s,f[w]||null)))}if(v)for(var w in d)void 0!==d[w]&&b(d[w],!1);for(;_<=g;)void 0!==(s=p[g--])&&b(s,!1)}function b(t,n){var e=t._component;e?S(e):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==n&&null!=t.__preactattr_||l(t),y(t))}function y(t){for(t=t.lastChild;t;){var n=t.previousSibling;b(t,!0),t=n}}function w(t,n,e){var o;for(o in e)n&&null!=n[o]||null==e[o]||p(t,o,e[o],e[o]=void 0,E);for(o in n)"children"===o||"innerHTML"===o||o in e&&n[o]===("value"===o||"checked"===o?t[o]:e[o])||p(t,o,e[o],e[o]=n[o],E)}function N(t){var n=t.constructor.name;(P[n]||(P[n]=[])).push(t)}function C(t,n,e){var o,r=P[t.name];if(t.prototype&&t.prototype.render?(o=new t(n,e),O.call(o,n,e)):(o=new O(n,e),o.constructor=t,o.render=k),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.__b=r[i].__b,r.splice(i,1);break}return o}function k(t,n,e){return this.constructor(t,e)}function x(t,n,e,o,r){t.__x||(t.__x=!0,(t.__r=n.ref)&&delete n.ref,(t.__k=n.key)&&delete n.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=n,t.__x=!1,0!==e&&(1!==e&&!1===M.syncComponentUpdates&&t.base?i(t):T(t,1,r)),t.__r&&t.__r(t))}function T(t,n,e,r){if(!t.__x){var i,u,a,c=t.props,f=t.state,l=t.context,p=t.__p||c,d=t.__s||f,v=t.__c||l,h=t.base,g=t.__b,y=h||g,w=t._component,N=!1;if(h&&(t.props=p,t.state=d,t.context=v,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,f,l)?N=!0:t.componentWillUpdate&&t.componentWillUpdate(c,f,l),t.props=c,t.state=f,t.context=l),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!N){i=t.render(c,f,l),t.getChildContext&&(l=o(o({},l),t.getChildContext()));var k,L,O=i&&i.nodeName;if("function"==typeof O){var j=s(i);u=w,u&&u.constructor===O&&j.key==u.__k?x(u,j,1,l,!1):(k=u,t._component=u=C(O,j,l),u.__b=u.__b||g,u.__u=t,x(u,j,0,l,!1),T(u,1,e,!0)),L=u.base}else a=y,k=w,k&&(a=t._component=null),(y||1===n)&&(a&&(a._component=null),L=m(a,i,l,e||!h,y&&y.parentNode,!0));if(y&&L!==y&&u!==w){var W=y.parentNode;W&&L!==W&&(W.replaceChild(L,y),k||(y._component=null,b(y,!1)))}if(k&&S(k),t.base=L,L&&!r){for(var R=t,U=t;U=U.__u;)(R=U).base=L;L._component=R,L._componentConstructor=R.constructor}}if(!h||e?G.unshift(t):N||(_(),t.componentDidUpdate&&t.componentDidUpdate(p,d,v),M.afterUpdate&&M.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);V||r||_()}}function L(t,n,e,o){for(var r=t&&t._component,i=r,u=t,a=r&&t._componentConstructor===n.nodeName,c=a,f=s(n);r&&!c&&(r=r.__u);)c=r.constructor===n.nodeName;return r&&c&&(!o||r._component)?(x(r,f,3,e,o),t=r.base):(i&&!a&&(S(i),t=u=null),r=C(n.nodeName,f,e),t&&!r.__b&&(r.__b=t,u=null),x(r,f,1,e,o),t=r.base,u&&t!==u&&(u._component=null,b(u,!1))),t}function S(t){M.beforeUnmount&&M.beforeUnmount(t);var n=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var e=t._component;e?S(e):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.__b=n,l(n),N(t),y(n)),t.__r&&t.__r(null)}function O(t,n){this.__d=!0,this.context=n,this.props=t,this.state=this.state||{}}function j(t,n,e){return m(e,t,{},!1,n,!1)}var M={},W=[],R=[],U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],G=[],V=0,E=!1,B=!1,P={};o(O.prototype,{setState:function(t,n){var e=this.state;this.__s||(this.__s=o({},e)),o(e,"function"==typeof t?t(e,this.props):t),n&&(this.__h=this.__h||[]).push(n),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),T(this,2)},render:function(){}});var D={h:e,createElement:e,cloneElement:r,Component:O,render:j,rerender:u,options:M};t.exports=D}()},function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return r});var o=20,r=10},function(t,n,e){var o,r;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function e(){for(var t=arguments,n=[],o=0;o<arguments.length;o++){var r=t[o];if(r){var u=typeof r;if("string"===u||"number"===u)n.push(r);else if(Array.isArray(r))n.push(e.apply(null,r));else if("object"===u)for(var a in r)i.call(r,a)&&r[a]&&n.push(a)}}return n.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=e:(o=[],void 0!==(r=function(){return e}.apply(n,o))&&(t.exports=r))}()},function(t,n,e){"use strict";function o(t){function n(n,e){return t[a([n,e])]}function e(n){return o(Object.assign({},t,u(n)))}function s(n){return n.getCoords().some(function(n){return t[a(n)]})}function f(){var n=o(Object.assign({},t)),e=0;return r(4,function(t){r(c.b,function(t){if(i(c.a,function(e){return n.get(e,t)}))return e++,n=n.deleteRow(t),!1})}),{board:n,removed:e}}function l(){var t=[];return r(c.b,function(e){var o=[];r(c.a,function(t){var r=c.b-e-1;o.push(n(t,r))}),t.push(o)}),t}function p(n){return o(Object.keys(t).reduce(function(e,o){var r=o.split(",").map(function(t){return Number(t)}),i=r[0],u=r[1];return u===n?e:(u<n&&(e[o]=t[o]),u>n&&(e[a([i,u-1])]=t[o]),e)},{}))}return void 0===t&&(t={}),{get:n,add:e,clashesWith:s,removeCompleted:f,getVisual:l,deleteRow:p}}function r(t,n){for(var e=0;e<t&&!1!==n(e);e++);}function i(t,n){for(var e=0;e<t;e++)if(!n(e))return!1;return!0}function u(t){var n=t.getColour();return t.getCoords().reduce(function(t,e){return t[a(e)]=n,t},{})}function a(t){return t[0]+","+t[1]}n.a=o;var c=e(1)},function(t,n,e){"use strict";function o(t){return t[Math.floor(Math.random()*t.length)]}function r(t,n){var e=!1;return function(){for(var o=[],r=arguments.length;r--;)o[r]=arguments[r];if(e)throw new Error(n);return e=!0,t.apply(void 0,o)}}n.b=o,n.a=r},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(14),u=e(3),a=e(9),c={32:"drop",37:"left",38:"rotate",39:"right",40:"down"},s=function(t){function n(){t.call(this),this.state={score:0,shape:e.i(u.a)().getVisual()}}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this,n=e.i(i.a)({onNewShape:function(n){t.setState({shape:n})},onNewScore:function(n){t.setState({score:n})}});document.onkeydown=function(t){var e=t.keyCode,o=c[e];o&&(t.preventDefault(),n.sendAction[o]())},n.startGame(),this.tetris=n},n.prototype.componentWillUnmount=function(){this.tetris.stopGame()},n.prototype.render=function(){var t=this.state,n=t.shape,e=t.score;return r.a.h(a.a,{rows:n,score:e})},n}(o.Component);n.a=s},function(t,n){function e(){}t.exports=function(t,n,o,r){function i(t){return{get:u(),mutate:a(t),actions:c(t)}}function u(){return function(){return r.get(s)}}function a(t){return function(n){s=r.mutator(s,n),o(r.get(s),t)}}function c(t){var e={};return Object.keys(n).forEach(function(o){e[o]=function(e){r.onAction(o,e),t.push({action:o,payload:e}),n[o](i(t),e)}}),e}var s=t||{};return r=Object.assign({},{onAction:e,get:function(t){return Object.assign({},t)},mutator:function(t,n){return Object.assign({},t,n)}},r),i([])}},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(2),u=e.n(i),a=e(8),c=function(t){function n(){t.apply(this,arguments)}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.render=function(){var t=u()("GameBoard",this.props.className);return r.a.h("div",{className:t},this.renderRows())},n.prototype.renderRows=function(){var t=this.props,n=t.rows;if(n)return n.map(function(t,n){return r.a.h(a.a,{row:t,key:n})})},n}(o.Component);n.a=c},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(10),u=function(t){var n=t.row;return r.a.h("div",{className:"GameRow"},n.map(function(t,n){return r.a.h(i.a,{color:t,key:n})}))};n.a=u},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(7),u=function(t){var n=t.rows,e=t.score;return r.a.h("div",{className:"Layout"},r.a.h(i.a,{className:"Layout-board",rows:n}),r.a.h("div",{className:"Layout-score"},e))};n.a=u},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(2),u=e.n(i),a=function(t){var n,e=t.color,o=u()((n={Tetrimino:!0,"Tetrimino--active":!!e},n["Tetrimino--"+e]=!0,n));return r.a.h("div",{className:o})};n.a=a},function(t,n,e){"use strict";function o(t){function n(){l||(f.actions.nextTick(),setTimeout(n,s.tick))}function o(){l=!0}function c(t){s.tick=t}var s=Object.assign({},a,t),f=e.i(i.a)(Object.assign({},s,{onLose:function(){o(),s.onLose()}})),l=!1;return{sendAction:r(f),startGame:e.i(u.a)(n,"Game already started"),stopGame:o,setTick:c}}function r(t){return["rotate","left","right","down","drop"].reduce(function(n,e){return n[e]=function(){t.actions[e]()},n},{})}n.a=o;var i=e(13),u=e(4),a={tick:500,onNewShape:function(){},onLinesRemoved:function(){},onLose:function(){}}},function(t,n,e){"use strict";function o(t){var n=t.onLinesRemoved,o=t.onLose;return{nextTick:function(t){var n=t.get,e=t.actions;n().liveTetrimino?e.down():e.introduceNew()},introduceNew:function(t){var n=t.get,i=t.mutate,u=n(),a=u.board,c=e.i(r.a)();a.clashesWith(c)?(console.log("you lose"),o()):i({liveTetrimino:c})},rotate:function(t){var n=t.get,e=t.mutate,o=n(),r=o.board,i=o.liveTetrimino;if(i){var u=i.clockwise();u.outOfBounds()||r.clashesWith(u)||e({liveTetrimino:u})}},left:function(t){var n=t.get,e=t.mutate,o=n(),r=o.board,i=o.liveTetrimino;if(i){var u=i.left();i.atLeft()||r.clashesWith(u)||e({liveTetrimino:u})}},right:function(t){var n=t.get,e=t.mutate,o=n(),r=o.board,i=o.liveTetrimino;if(i){var u=i.right();i.atRight()||r.clashesWith(u)||e({liveTetrimino:u})}},down:function(t){var n=t.get,e=t.mutate,o=t.actions,r=n(),i=r.board,u=r.liveTetrimino;if(u){var a=u.down();u.atBottom()||i.clashesWith(a)?(e({board:i.add(u),liveTetrimino:!1}),o.settled()):e({liveTetrimino:a})}},drop:function(t){var n=t.get,e=t.mutate,o=t.actions,r=n(),i=r.board,u=r.liveTetrimino;if(u){for(var a=u,c=a.down();!a.atBottom()&&!i.clashesWith(c);)a=c,c=a.down();e({board:i.add(a),liveTetrimino:!1}),o.settled()}},settled:function(t){var e=t.get,o=t.mutate,r=e(),i=r.board,u=i.removeCompleted(),a=u.board,c=u.removed;c&&(n(c),o({board:a}))}}}n.a=o;var r=e(15)},function(t,n,e){"use strict";function o(t){function n(t){var n,e=t.board,r=t.liveTetrimino;n=r?e.add(r).getVisual():e.getVisual(),o(n)}var o=t.onNewShape,r=t.onLinesRemoved,c=t.onLose;return i()({board:e.i(u.a)(),liveTetrimino:!1},e.i(a.a)({onLinesRemoved:r,onLose:c}),n)}n.a=o;var r=e(6),i=e.n(r),u=e(3),a=e(12)},function(t,n,e){"use strict";function o(t){var n=Object.assign({},i,t),o=0,u=0,a=e.i(r.a)({onNewShape:n.onNewShape,onLose:n.onLose,tick:n.tick,onLinesRemoved:function(t){o+=100*t,4===t&&(o+=100),n.onNewScore(o),u+=t,a.setTick(n.tick-5*u)}});return{sendAction:a.sendAction,startGame:a.startGame,stopGame:a.stopGame}}n.a=o;var r=e(11),i={tick:500,onNewScore:function(){},onLose:function(){}}},function(t,n,e){"use strict";function o(){var t=e.i(i.b)(a),n=e.i(i.b)(c);return e.i(r.a)(t,s,n)}n.a=o;var r=e(16),i=e(4),u=e(1),a=[[[-1,0],[0,0],[1,0],[2,0]],[[-1,0],[0,0],[1,0],[1,1]],[[-1,1],[-1,0],[0,0],[1,0]],[[-1,0],[0,0],[0,1],[1,1]],[[-1,1],[0,1],[0,0],[1,0]],[[0,1],[1,1],[0,0],[1,0]],[[-1,0],[0,0],[1,0],[0,1]]],c=["blue","red","yellow","green","orange","grey","pink"],s=[Math.floor(u.a/2),u.b-1]},function(t,n,e){"use strict";function o(t,n,e){function i(r){return o(t.map(function(t){var n=t[0],e=t[1];return r(n,e)}),n,e)}function u(r){var i=n[0],u=n[1];return o(t,r(i,u),e)}var a=n[0],c=n[1],s=t.map(function(t){var n=t[0],e=t[1];return[a+n,c+e]});return{getCoords:function(){return s.slice(0)},getColour:function(){return e},atBottom:function(){return s.some(function(t){t[0];return 0===t[1]})},atLeft:function(){return s.some(function(t){var n=t[0];t[1];return 0===n})},atRight:function(){return s.some(function(t){var n=t[0];t[1];return n===r.a-1})},outOfBounds:function(){return s.some(function(t){var n=t[0],e=t[1];return n<0||n>=r.a||e<0})},down:function(){return u(function(t,n){return[t,n-1]})},left:function(){return u(function(t,n){return[t-1,n]})},right:function(){return u(function(t,n){return[t+1,n]})},clockwise:function(){return i(function(t,n){return[n,-t]})},anticlockwise:function(){return i(function(t,n){return[-n,t]})}}}n.a=o;var r=e(1)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),r=e.n(o),i=e(5);r.a.render(r.a.h(i.a,null),document.querySelector(".root"))}]);