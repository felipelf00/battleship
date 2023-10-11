(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => s });
        var o = n(81),
          a = n.n(o),
          r = n(645),
          i = n.n(r)()(a());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;700&display=swap);",
        ]),
          i.push([
            e.id,
            '* {\n  font-family: "Martian Mono", monospace;\n}\n\n:root {\n  --text: #0f1a20;\n  --bg: #f0f3f5;\n  --ship: #a0ad69;\n  /* --ship: #d5e1a3; */\n  --ocean: #78a1bb;\n  --hit: #f42c04;\n  --sunk: #6e2f22;\n}\n\nbody {\n  margin: 0;\n  padding: 20px;\n  box-sizing: border-box;\n\n  color: var(--text);\n  background-color: var(--bg);\n}\n\n#main-title {\n  text-align: center;\n  margin-bottom: 69px;\n}\n\nbutton {\n  display: block;\n  background-color: var(--ocean);\n  padding: 8px 12px;\n}\n\n#name-form button {\n  margin: auto;\n  margin-top: 20px;\n}\n\n#name-form input {\n  width: 280px;\n  margin-top: 7px;\n}\n\n#name-form div {\n  margin-top: 20px;\n}\n\n.hidden {\n  display: none;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  justify-content: center;\n}\n\n.player-area.computer .board {\n  position: relative;\n}\n\n#positioning-display {\n  position: absolute;\n  top: 0;\n  background-color: var(--bg);\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n#instructions {\n  text-align: center;\n}\n\n#ship-display {\n  width: 160px;\n  height: 160px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  border: 2px solid var(--text);\n  width: 300px;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n  border: 1px solid var(--text);\n  width: 30px;\n  height: 30px;\n  box-sizing: border-box;\n}\n\n.hit {\n  background-color: var(--ocean);\n}\n\n.ship,\n.good-pos {\n  background-color: var(--ship);\n}\n\n.invisible {\n  background-color: var(--bg);\n}\n\n.ship.hit,\n.bad-pos {\n  background-color: var(--hit);\n}\n\n.ship.hit.sunk {\n  background-color: var(--sunk);\n}\n\n#ship.horizontal {\n  display: flex;\n}\n\n#ship.vertical {\n  display: flex;\n  flex-direction: column;\n}\n\n#game-over {\n  margin: auto;\n}\n\n#game-over button {\n  margin: auto;\n  margin-top: 20px;\n}\n\n@media only screen and (min-width: 600px) {\n  #main {\n    flex-direction: row;\n  }\n}\n',
            "",
          ]);
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, a, r) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c]);
                (o && i[d[0]]) ||
                  (void 0 !== r &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = r)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var r = {}, i = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = o.base ? l[0] + o.base : l[0],
              d = r[c] || 0,
              p = "".concat(c, " ").concat(d);
            r[c] = d + 1;
            var u = n(p),
              h = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(h);
            else {
              var m = a(h, o);
              (o.byIndex = s),
                t.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var r = o((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < r.length; i++) {
              var s = n(r[i]);
              t[s].references--;
            }
            for (var l = o(e, a), c = 0; c < r.length; c++) {
              var d = n(r[c]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            r = l;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  a && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var r = n.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var r = (t[o] = { id: o, exports: {} });
    return e[o](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      const e = class {
          constructor(e) {
            this.length = e;
          }
          damage = 0;
          isSunk = !1;
          orientation = "horizontal";
          hit() {
            (this.damage += 1),
              this.damage >= this.length && (this.isSunk = !0);
          }
          flip() {
            "horizontal" === this.orientation
              ? (this.orientation = "vertical")
              : (this.orientation = "horizontal");
          }
        },
        t = class {
          createBoard(e, t) {
            let n = [];
            for (let o = 0; o < e; o++) {
              let e = [];
              for (let n = 0; n < t; n++) e.push(null);
              n.push(e);
            }
            return n;
          }
          rows = 10;
          columns = 10;
          board = this.createBoard(this.rows, this.columns);
          hitList = [];
          placedShips = [];
          placeShip(e, t, n) {
            if (!this.placementIsValid(e, t, n))
              throw new Error("invalid placement");
            if ("horizontal" === e.orientation) {
              for (let o = 0; o < e.length; o++) this.board[t + o][n] = e;
              this.placedShips.push(e);
            } else {
              for (let o = 0; o < e.length; o++) this.board[t][n + o] = e;
              this.placedShips.push(e);
            }
          }
          placementIsValid(e, t, n) {
            if ("horizontal" === e.orientation) {
              for (let o = 0; o < e.length; o++)
                if (t + o >= this.board.length || null !== this.board[t + o][n])
                  return !1;
            } else
              for (let o = 0; o < e.length; o++)
                if (
                  n + o >= this.board[t].length ||
                  null !== this.board[t][n + o]
                )
                  return !1;
            return !0;
          }
          attackIsValid(e, t) {
            return !this.hitList.some((n) => n[0] === e && n[1] === t);
          }
          receiveAttack(t, n) {
            this.hitList.push([t, n]),
              this.board[t][n] instanceof e && this.board[t][n].hit();
          }
          remainingShips() {
            return this.placedShips.reduce((e, t) => (t.isSunk ? e : e + 1), 0);
          }
          clearBoard() {
            for (let e = 0; e < this.rows; e++)
              for (let t = 0; t < this.columns; t++) this.board[e][t] = null;
          }
          hasGoodTarget() {
            return this.placedShips.some((e) => e.damage > 0 && !e.isSunk);
          }
        },
        o = class {
          constructor(e, t) {
            (this.name = e), (this.type = t);
          }
          board = new t();
          ships = this.generateShips();
          generateShips() {
            return [new e(5), new e(4), new e(3), new e(3), new e(2)];
          }
          computerPlays(t) {
            let n,
              o,
              a,
              r = !1;
            if (!t.board.hasGoodTarget()) {
              for (; !r; )
                (n = Math.floor(10 * Math.random())),
                  (o = Math.floor(10 * Math.random())),
                  t.board.attackIsValid(n, o) && (r = !0);
              return t.board.receiveAttack(n, o), [n, o];
            }
            let i,
              s = 1;
            for (; void 0 === a; ) {
              t.board.hitList.length - s < 0 &&
                ((a = null),
                console.log("there's no last hit bc game just started"));
              let n = t.board.hitList[t.board.hitList.length - s];
              console.log(n),
                t.board.board[n[0]][n[1]] instanceof e &&
                  !t.board.board[n[0]][n[1]].isSunk &&
                  (a = n),
                (s += 1);
            }
            let l = [];
            a[0] + 1 >= 0 &&
              a[0] + 1 < 10 &&
              a[1] >= 0 &&
              a[1] < 10 &&
              l.push([a[0] + 1, a[1]]),
              a[0] - 1 >= 0 &&
                a[0] - 1 < 10 &&
                a[1] >= 0 &&
                a[1] < 10 &&
                l.push([a[0] - 1, a[1]]),
              a[0] >= 0 &&
                a[0] < 10 &&
                a[1] + 1 >= 0 &&
                a[1] + 1 < 10 &&
                l.push([a[0], a[1] + 1]),
              a[0] >= 0 &&
                a[0] < 10 &&
                a[1] - 1 >= 0 &&
                a[1] - 1 < 10 &&
                l.push([a[0], a[1] - 1]),
              console.log("Neighbors: "),
              console.log(l);
            let c = l.reduce(
                (e, n) =>
                  t.board.hitList.some((e) => e.every((e, t) => e === n[t]))
                    ? e
                    : e.concat([[n[0], n[1]]]),
                []
              ),
              d = l.reduce(
                (n, o) =>
                  t.board.board[o[0]][o[1]] instanceof e &&
                  !t.board.board[o[0]][o[1]].isSunk &&
                  t.board.hitList.some((e) => e.every((e, t) => e === o[t]))
                    ? n.concat([[o[0], o[1]]])
                    : n,
                []
              );
            if (
              (console.log("unsunkShipNeighbors:"),
              console.log(d),
              console.log("emptyNeighbors:"),
              console.log(c),
              0 === d.length)
            ) {
              console.log("No neighbor hits");
              let e = Math.floor(Math.random() * c.length);
              if (
                (console.log("Random index: " + e),
                (i = c[e]),
                console.log("Next hit: " + i),
                i)
              )
                return t.board.receiveAttack(i[0], i[1]), [i[0], i[1]];
            }
            if (d[0][1] === a[1] - 1) {
              if (
                (console.log("Neighbor hit on top"),
                t.board.attackIsValid(a[0], a[1] + 1))
              )
                return (
                  t.board.receiveAttack(a[0], a[1] + 1),
                  console.log("Attacking below"),
                  [a[0], a[1] + 1]
                );
              {
                let e = 1;
                for (; d[0][1] - e >= 0; ) {
                  if (t.board.attackIsValid(d[0][0], d[0][1] - e))
                    return (
                      t.board.receiveAttack(d[0][0], d[0][1] - e),
                      console.log("Attacking further above"),
                      [d[0][0], d[0][1] - e]
                    );
                  e += 1;
                }
              }
            }
            if (d[0][0] === a[0] + 1) {
              if (
                (console.log("Neighbor hit on right"),
                t.board.attackIsValid(a[0] - 1, a[1]))
              )
                return (
                  t.board.receiveAttack(a[0] - 1, a[1]),
                  console.log("Attacking left"),
                  [a[0] - 1, a[1]]
                );
              {
                let e = 1;
                for (; d[0][0] + e < 10; ) {
                  if (t.board.attackIsValid(d[0][0] + e, d[0][1]))
                    return (
                      t.board.receiveAttack(d[0][0] + e, d[0][1]),
                      console.log("Attacking further right"),
                      [d[0][0] + e, d[0][1]]
                    );
                  e += 1;
                }
              }
            }
            if (d[0][1] === a[1] + 1) {
              if (
                (console.log("Neighbor below"),
                t.board.attackIsValid(a[0], a[1] - 1))
              )
                return (
                  console.log("Attacking top"),
                  t.board.receiveAttack(a[0], a[1] - 1),
                  [a[0], a[1] - 1]
                );
              {
                let e = 1;
                for (; d[0][1] + e < 10; ) {
                  if (t.board.attackIsValid(d[0][0], d[0][1] + e))
                    return (
                      t.board.receiveAttack(d[0][0], d[0][1] + e),
                      console.log("Attacking further below"),
                      [d[0][0], d[0][1] + e]
                    );
                  e += 1;
                }
              }
            }
            if (d[0][0] === a[0] - 1) {
              if (
                (console.log("Neighbor on left"),
                t.board.attackIsValid(a[0] + 1, a[1]))
              )
                return (
                  console.log("Attacking right"),
                  t.board.receiveAttack(a[0] + 1, a[1]),
                  [a[0] + 1, a[1]]
                );
              {
                let e = 1;
                for (; d[0][0] - e >= 0; ) {
                  if (t.board.attackIsValid(d[0][0] - e, d[0][1]))
                    return (
                      t.board.receiveAttack(d[0][0] - e, d[0][1]),
                      console.log("Attacking further right"),
                      [d[0][0] - e, d[0][1]]
                    );
                  e += 1;
                }
              }
            }
            for (; !r; )
              (n = Math.floor(10 * Math.random())),
                (o = Math.floor(10 * Math.random())),
                t.board.attackIsValid(n, o) && (r = !0);
            return (
              console.log("something's wrong... random attack"),
              t.board.receiveAttack(n, o),
              [n, o]
            );
          }
        },
        a = {
          players: [],
          currentTurn: null,
          ready: !1,
          gameSetup(e, t) {
            const n = new o(e, "human"),
              a = new o(t, "computer");
            (this.players = [n, a]),
              this.placeComputerShips(),
              (this.currentTurn = this.players[Math.round(Math.random())]);
          },
          placeComputerShips() {
            this.players[1].ships.forEach((e) => {
              let t,
                n,
                o = !1;
              for (Math.random() >= 0.5 && e.flip(); !o; )
                (t = Math.floor(10 * Math.random())),
                  (n = Math.floor(10 * Math.random())),
                  console.log(
                    `Ship size: ${e.length}, ${e.orientation}x: ${t}, y: ${n}`
                  ),
                  this.players[1].board.placementIsValid(e, t, n) && (o = !0);
              this.players[1].board.placeShip(e, t, n), console.log("placed");
            });
          },
          next() {
            if (this.currentTurn === this.players[0]) {
              if (this.ready && 0 === this.players[1].board.remainingShips())
                return u(this.players[0]), void (this.ready = !1);
              this.currentTurn = this.players[1];
              const e = this.players[1].computerPlays(this.players[0]);
              console.log(e), p(e[0], e[1], this.players[0]), this.next();
            } else {
              if (this.ready && 0 === this.players[0].board.remainingShips())
                return void u(this.players[1]);
              this.currentTurn = this.players[0];
            }
          },
        },
        r = a;
      function i() {
        const e = document.createElement("div");
        (e.id = "name-form"), document.querySelector("body").appendChild(e);
        const t = document.createElement("div");
        t.textContent = "Player name: ";
        const n = document.createElement("input"),
          o = document.createElement("div");
        o.textContent = "Opponent name (computer): ";
        const a = document.createElement("input"),
          i = document.createElement("button");
        return (
          (i.textContent = "Start"),
          e.appendChild(t),
          e.appendChild(n),
          e.appendChild(o),
          e.appendChild(a),
          e.appendChild(i),
          i.addEventListener("click", () => {
            r.gameSetup(n.value, a.value),
              (document.querySelector("#main").innerHTML = "");
            const e = c(r.players[0]),
              t = c(r.players[1]);
            t.classList.add("computer"),
              document.querySelector("#main").appendChild(e),
              document.querySelector("#main").appendChild(t),
              document
                .querySelector(".player-area.computer .board")
                .appendChild(
                  (function () {
                    const e = document.createElement("div");
                    e.id = "positioning-display";
                    const t = document.createElement("div");
                    (t.id = "instructions"),
                      (t.textContent =
                        "Click your board to position your ship");
                    const n = document.createElement("div");
                    (n.id = "ship-display"),
                      n.appendChild(l(r.players[0].ships[0])),
                      (n.dataset.ship = 0);
                    const o = document.createElement("button");
                    return (
                      (o.id = "flip"),
                      (o.textContent = "Flip orientation (f)"),
                      o.addEventListener("click", s),
                      document.addEventListener("keydown", s),
                      e.appendChild(t),
                      e.appendChild(n),
                      e.appendChild(o),
                      e
                    );
                  })()
                ),
              d(r.players[0]),
              d(r.players[1]);
          }),
          e
        );
      }
      function s(e) {
        if ("click" === e.type || ("keydown" === e.type && "f" === e.key)) {
          const e = document.querySelector("#ship-display");
          r.players[0].ships[e.dataset.ship].flip(),
            (e.innerHTML = ""),
            e.appendChild(l(r.players[0].ships[e.dataset.ship])),
            document
              .querySelectorAll(".good-pos")
              .forEach((e) => e.classList.remove("good-pos")),
            document
              .querySelectorAll(".bad-pos")
              .forEach((e) => e.classList.remove("bad-pos"));
        }
      }
      function l(e) {
        const t = document.createElement("div");
        (t.id = "ship"),
          "horizontal" === e.orientation && t.classList.add("horizontal"),
          "vertical" === e.orientation && t.classList.add("vertical");
        for (let n = 0; n < e.length; n++) {
          const e = document.createElement("div");
          e.classList.add("cell", "ship"), t.appendChild(e);
        }
        return t;
      }
      function c(e) {
        const t = document.createElement("div");
        t.classList.add("player-area");
        const n = document.createElement("h3");
        return (
          (n.textContent = e.name),
          n.classList.add("player-name"),
          t.appendChild(n),
          t.appendChild(
            (function (e) {
              const t = document.createElement("div");
              t.classList.add("board");
              for (let n = 0; n < 10; n++)
                for (let o = 0; o < 10; o++) {
                  const a = document.createElement("div");
                  if (
                    ((a.dataset.x = o),
                    (a.dataset.y = n),
                    (a.dataset.type = e.type),
                    a.classList.add("cell"),
                    t.appendChild(a),
                    "human" === e.type)
                  ) {
                    const t = r.players[0];
                    a.addEventListener("mouseenter", () => {
                      if (!r.ready) {
                        const e = t.ships[t.board.placedShips.length];
                        let n = parseInt(a.dataset.x),
                          o = parseInt(a.dataset.y);
                        if ("horizontal" === e.orientation)
                          if (n + e.length - 1 > 9)
                            for (let e = 0; e + n <= 9; e++) {
                              const t = document.querySelector(
                                `.cell[data-x="${n + e}"][data-y="${o}"]`
                              );
                              t && t.classList.add("bad-pos");
                            }
                          else
                            for (let t = 0; t < e.length; t++) {
                              const e = document.querySelector(
                                `.cell[data-x="${n + t}"][data-y="${o}"]`
                              );
                              e && e.classList.add("good-pos");
                            }
                        else if (o + e.length - 1 > 9)
                          for (let e = 0; e + o <= 9; e++) {
                            const t = document.querySelector(
                              `.cell[data-x="${n}"][data-y="${o + e}"]`
                            );
                            t && t.classList.add("bad-pos");
                          }
                        else
                          for (let t = 0; t < e.length; t++) {
                            const e = document.querySelector(
                              `.cell[data-x="${n}"][data-y="${o + t}"]`
                            );
                            e && e.classList.add("good-pos");
                          }
                      }
                    }),
                      a.addEventListener("mouseleave", () => {
                        if (!r.ready) {
                          const e = t.ships[t.board.placedShips.length];
                          let n = parseInt(a.dataset.x),
                            o = parseInt(a.dataset.y);
                          if ("horizontal" === e.orientation)
                            if (n + e.length - 1 > 9)
                              for (let e = 0; e + n <= 9; e++) {
                                const t = document.querySelector(
                                  `.cell[data-x="${n + e}"][data-y="${o}"]`
                                );
                                t && t.classList.remove("bad-pos");
                              }
                            else
                              for (let t = 0; t < e.length; t++) {
                                const e = document.querySelector(
                                  `.cell[data-x="${n + t}"][data-y="${o}"]`
                                );
                                e && e.classList.remove("good-pos");
                              }
                          else if (o + e.length - 1 > 9)
                            for (let e = 0; e + o <= 9; e++) {
                              const t = document.querySelector(
                                `.cell[data-x="${n}"][data-y="${o + e}"]`
                              );
                              t && t.classList.remove("bad-pos");
                            }
                          else
                            for (let t = 0; t < e.length; t++) {
                              const e = document.querySelector(
                                `.cell[data-x="${n}"][data-y="${o + t}"]`
                              );
                              e && e.classList.remove("good-pos");
                            }
                        }
                      }),
                      a.addEventListener("click", () => {
                        if (!r.ready) {
                          const a = t.ships[t.board.placedShips.length];
                          if (
                            (t.board.placeShip(a, o, n),
                            d(e),
                            t.board.placedShips.length >= 5)
                          ) {
                            r.ready = !0;
                            const e = document.querySelector(
                                ".player-area.computer .board"
                              ),
                              t = document.querySelector(
                                "#positioning-display"
                              );
                            return e.removeChild(t), void r.next();
                          }
                          const i = t.ships[t.board.placedShips.length];
                          (document.querySelector("#ship-display").innerHTML =
                            ""),
                            document
                              .querySelector("#ship-display")
                              .appendChild(l(i)),
                            (document.querySelector(
                              "#ship-display"
                            ).dataset.ship = t.board.placedShips.length);
                        }
                      });
                  }
                  if ("computer" === e.type) {
                    const e = r.players[0],
                      t = r.players[1];
                    a.addEventListener("click", () => {
                      r.currentTurn === e &&
                        t.board.attackIsValid(o, n) &&
                        (t.board.receiveAttack(o, n), p(o, n, t), r.next());
                    });
                  }
                }
              return t;
            })(e)
          ),
          t
        );
      }
      function d(t) {
        for (let n = 0; n < 10; n++)
          for (let o = 0; o < 10; o++)
            if (t.board.board[n][o] instanceof e) {
              const e = document.querySelector(
                `.cell[data-x="${n}"][data-y="${o}"][data-type="${t.type}"]`
              );
              e.classList.add("ship"),
                "computer" === t.type && e.classList.add("invisible"),
                t.board.board[n][o].isSunk && e.classList.add("sunk");
            }
      }
      function p(t, n, o) {
        document
          .querySelector(
            `.cell[data-x="${t}"][data-y="${n}"][data-type="${o.type}"]`
          )
          .classList.add("hit"),
          o.board.board[t][n] instanceof e &&
            o.board.board[t][n].isSunk &&
            d(o);
      }
      function u(e) {
        (document.querySelector("#main").innerHTML = ""),
          document.querySelector("#main").appendChild(
            (function () {
              const e = document.createElement("div");
              (e.id = "game-over"), e.classList.add("hidden");
              const t = document.createElement("div");
              t.id = "winner-message";
              const n = document.createElement("button");
              return (
                (n.textContent = "Play again"),
                e.appendChild(t),
                e.appendChild(n),
                n.addEventListener("click", () => {
                  (document.querySelector("#main").innerHTML = ""),
                    document.querySelector("#main").appendChild(i());
                }),
                e
              );
            })()
          ),
          document.querySelector("#game-over").classList.remove("hidden"),
          (document.querySelector(
            "#winner-message"
          ).textContent = `${e.name} wins!`);
      }
      var h = n(379),
        m = n.n(h),
        f = n(795),
        g = n.n(f),
        y = n(569),
        b = n.n(y),
        v = n(565),
        x = n.n(v),
        S = n(216),
        k = n.n(S),
        L = n(589),
        C = n.n(L),
        E = n(426),
        w = {};
      (w.styleTagTransform = C()),
        (w.setAttributes = x()),
        (w.insert = b().bind(null, "head")),
        (w.domAPI = g()),
        (w.insertStyleElement = k()),
        m()(E.Z, w),
        E.Z && E.Z.locals && E.Z.locals,
        (function () {
          const e = document.createElement("h1");
          (e.textContent = "Battleship: a battle of ships"),
            (e.id = "main-title"),
            document.querySelector("body").appendChild(e);
          const t = document.createElement("div");
          (t.id = "main"), document.body.appendChild(t), t.appendChild(i());
        })();
    })();
})();
