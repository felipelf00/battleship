(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\n.board {\n  border: 2px solid black;\n  width: 300px;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n  box-sizing: border-box;\n}\n",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:(e,t,n)=>{const r=n(643);e.exports=class{createBoard(e,t){let n=[];for(let r=0;r<e;r++){let e=[];for(let n=0;n<t;n++)e.push(null);n.push(e)}return n}rows=10;columns=10;board=this.createBoard(this.rows,this.columns);hitList=[];placedShips=[];placeShip(e,t,n){if(!this.placementIsValid(e,t,n))throw new Error("invalid placement");if("horizontal"===e.orientation){for(let r=0;r<e.length;r++)this.board[t+r][n]=e;this.placedShips.push(e)}else{for(let r=0;r<e.length;r++)this.board[t][n+r]=e;this.placedShips.push(e)}}placementIsValid(e,t,n){if("horizontal"===e.orientation){if(t+e.length-1>this.columns)return!1;for(let r=0;r<e.length;r++)if(null!==this.board[t+r][n])return!1}else{if(n+e.length-1>this.rows)return!1;for(let r=0;r<e.length;r++)if(null!==this.board[t][n+r])return!1}return!0}receiveAttack(e,t){this.hitList.push([e,t]),this.board[e][t]instanceof r&&this.board[e][t].hit()}remainingShips(){return this.placedShips.reduce(((e,t)=>t.isSunk?e:e+1),0)}clearBoard(){for(let e=0;e<this.rows;e++)for(let t=0;t<this.columns;t++)this.board[e][t]=null}}},507:(e,t,n)=>{const r=n(643),o=n(498);e.exports=class{constructor(e,t){this.name=e,this.type=t}board=new o;ships=this.generateShips();generateShips(){return[new r(5),new r(4),new r(3),new r(3),new r(2)]}computerPlays(e){let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());e.Gameboard.receiveAttack(t,n)}}},643:e=>{e.exports=class{constructor(e){this.length=e}damage=0;isSunk=!1;orientation="horizontal";hit(){this.damage+=1,this.damage>=this.length&&(this.isSunk=!0)}flip(){"horizontal"===this.orientation?this.orientation="vertical":this.orientation="horizontal"}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=n(507);let t=[];function r(e){const t=document.createElement("div");t.classList.add("player-area");const n=document.createElement("h3");return n.textContent=e.name,n.classList.add("player-name"),t.appendChild(n),t.appendChild(function(e){const t=document.createElement("div");t.classList.add("board");for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=document.createElement("div");o.dataset.x=n,o.dataset.y=r,o.dataset.type=e.type,o.classList.add("cell"),t.appendChild(o)}return t}(e)),t}var o=n(379),a=n.n(o),i=n(795),s=n.n(i),c=n(569),l=n.n(c),d=n(565),p=n.n(d),u=n(216),h=n.n(u),f=n(589),m=n.n(f),v=n(426),b={};b.styleTagTransform=m(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=h(),a()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.createElement("h1");n.textContent="Battleship: a battle of ships",document.querySelector("body").appendChild(n),document.querySelector("body").appendChild(function(){const n=document.createElement("div");n.id="name-form",document.querySelector("body").appendChild(n);const o=document.createElement("div");o.textContent="Player name: ";const a=document.createElement("input"),i=document.createElement("div");i.textContent="Opponent name (computer): ";const s=document.createElement("input"),c=document.createElement("button");return c.textContent="Start",n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(s),n.appendChild(c),c.addEventListener("click",(()=>{!function(n,r){const o=new e(n,"human"),a=new e(r,"computer");o.board.placeShip(o.ships[0],2,2),o.ships[1].flip(),o.board.placeShip(o.ships[1],8,2),o.board.placeShip(o.ships[2],2,4),o.ships[3].flip(),o.board.placeShip(o.ships[3],2,6),o.board.placeShip(o.ships[4],4,6),a.board.placeShip(a.ships[0],2,2),a.ships[1].flip(),a.board.placeShip(a.ships[1],8,2),a.board.placeShip(a.ships[2],2,4),a.ships[3].flip(),a.board.placeShip(a.ships[3],2,6),a.board.placeShip(a.ships[4],4,6),t=[],t.push(o,a)}(a.value,s.value),a.value="",s.value="",n.classList.add("hidden");const o=r(t[0]),i=r(t[1]);document.querySelector("body").appendChild(o),document.querySelector("body").appendChild(i)})),n}())}()})()})();