(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\n.board {\n  border: 2px solid black;\n  width: 300px;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.cell {\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n  box-sizing: border-box;\n}\n\n.hit {\n  background-color: grey;\n}\n\n.ship {\n  background-color: green;\n}\n\n.invisible {\n  background-color: white;\n}\n\n.ship.hit {\n  background-color: red;\n}\n\n.ship.hit.sunk {\n  background-color: rgb(63, 22, 22);\n}\n",
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
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  a &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = a))
                      : (l[4] = "".concat(a))),
                  t.push(l));
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
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              d = r.base ? c[0] + r.base : c[0],
              l = o[d] || 0,
              p = "".concat(d, " ").concat(l);
            o[d] = l + 1;
            var u = n(p),
              h = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(h);
            else {
              var m = a(h, r);
              (r.byIndex = s),
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
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var s = n(o[i]);
              t[s].references--;
            }
            for (var c = r(e, a), d = 0; d < o.length; d++) {
              var l = n(o[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
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
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
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
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
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
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
            for (let r = 0; r < e; r++) {
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
              for (let r = 0; r < e.length; r++) this.board[t + r][n] = e;
              this.placedShips.push(e);
            } else {
              for (let r = 0; r < e.length; r++) this.board[t][n + r] = e;
              this.placedShips.push(e);
            }
          }
          placementIsValid(e, t, n) {
            if ("horizontal" === e.orientation) {
              if (t + e.length - 1 > this.columns) return !1;
              for (let r = 0; r < e.length; r++)
                if (null !== this.board[t + r][n]) return !1;
            } else {
              if (n + e.length - 1 > this.rows) return !1;
              for (let r = 0; r < e.length; r++)
                if (null !== this.board[t][n + r]) return !1;
            }
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
        },
        r = class {
          constructor(e, t) {
            (this.name = e), (this.type = t);
          }
          board = new t();
          ships = this.generateShips();
          generateShips() {
            return [new e(5), new e(4), new e(3), new e(3), new e(2)];
          }
          computerPlays(e) {
            let t,
              n,
              r = !1;
            for (; !r; )
              (t = Math.floor(10 * Math.random())),
                (n = Math.floor(10 * Math.random())),
                console.log(e.board.hitList),
                e.board.attackIsValid(t, n) && (r = !0);
            return (
              e.board.receiveAttack(t, n),
              console.log("computer attacked " + t + ", " + n),
              [t, n]
            );
          }
        },
        a = {
          players: [],
          currentTurn: null,
          gameSetup(e, t) {
            const n = new r(e, "human"),
              a = new r(t, "computer");
            n.board.placeShip(n.ships[0], 1, 1),
              n.ships[1].flip(),
              n.board.placeShip(n.ships[1], 7, 1),
              n.board.placeShip(n.ships[2], 1, 3),
              n.ships[3].flip(),
              n.board.placeShip(n.ships[3], 1, 5),
              n.board.placeShip(n.ships[4], 3, 5),
              a.board.placeShip(a.ships[0], 1, 1),
              a.ships[1].flip(),
              a.board.placeShip(a.ships[1], 7, 1),
              a.board.placeShip(a.ships[2], 1, 3),
              a.ships[3].flip(),
              a.board.placeShip(a.ships[3], 1, 5),
              a.board.placeShip(a.ships[4], 3, 5),
              (this.players = [n, a]),
              (this.currentTurn = this.players[Math.round(Math.random())]);
          },
          next() {
            if (this.currentTurn === this.players[0]) {
              if (0 === this.players[1].board.remainingShips())
                return void d(this.players[0]);
              this.currentTurn = this.players[1];
              const e = this.players[1].computerPlays(this.players[0]);
              c(e[0], e[1], this.players[0]), this.next();
            } else {
              if (0 === this.players[0].board.remainingShips())
                return void d(this.players[1]);
              this.currentTurn = this.players[0];
            }
          },
        };
      function o() {
        const e = document.createElement("div");
        (e.id = "name-form"), document.querySelector("body").appendChild(e);
        const t = document.createElement("div");
        t.textContent = "Player name: ";
        const n = document.createElement("input"),
          r = document.createElement("div");
        r.textContent = "Opponent name (computer): ";
        const o = document.createElement("input"),
          c = document.createElement("button");
        return (
          (c.textContent = "Start"),
          e.appendChild(t),
          e.appendChild(n),
          e.appendChild(r),
          e.appendChild(o),
          e.appendChild(c),
          c.addEventListener("click", () => {
            a.gameSetup(n.value, o.value),
              (document.querySelector("#main").innerHTML = "");
            const e = i(a.players[0]),
              t = i(a.players[1]);
            document.querySelector("#main").appendChild(e),
              document.querySelector("#main").appendChild(t),
              s(a.players[0]),
              s(a.players[1]),
              a.next();
          }),
          e
        );
      }
      function i(e) {
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
                for (let r = 0; r < 10; r++) {
                  const o = document.createElement("div");
                  if (
                    ((o.dataset.x = r),
                    (o.dataset.y = n),
                    (o.dataset.type = e.type),
                    o.classList.add("cell"),
                    t.appendChild(o),
                    "computer" === e.type)
                  ) {
                    const e = a.players[0],
                      t = a.players[1];
                    o.addEventListener("click", () => {
                      a.currentTurn === e &&
                        t.board.attackIsValid(r, n) &&
                        (t.board.receiveAttack(r, n), c(r, n, t), a.next());
                    });
                  }
                }
              return t;
            })(e)
          ),
          t
        );
      }
      function s(t) {
        for (let n = 0; n < 10; n++)
          for (let r = 0; r < 10; r++)
            if (t.board.board[n][r] instanceof e) {
              const e = document.querySelector(
                `.cell[data-x="${n}"][data-y="${r}"][data-type="${t.type}"]`
              );
              e.classList.add("ship"),
                "computer" === t.type && e.classList.add("invisible"),
                t.board.board[n][r].isSunk && e.classList.add("sunk");
            }
      }
      function c(t, n, r) {
        document
          .querySelector(
            `.cell[data-x="${t}"][data-y="${n}"][data-type="${r.type}"]`
          )
          .classList.add("hit"),
          r.board.board[t][n] instanceof e &&
            r.board.board[t][n].isSunk &&
            s(r);
      }
      function d(e) {
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
                    document.querySelector("#main").appendChild(o());
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
      var l = n(379),
        p = n.n(l),
        u = n(795),
        h = n.n(u),
        m = n(569),
        f = n.n(m),
        y = n(565),
        b = n.n(y),
        v = n(216),
        g = n.n(v),
        S = n(589),
        x = n.n(S),
        C = n(426),
        w = {};
      (w.styleTagTransform = x()),
        (w.setAttributes = b()),
        (w.insert = f().bind(null, "head")),
        (w.domAPI = h()),
        (w.insertStyleElement = g()),
        p()(C.Z, w),
        C.Z && C.Z.locals && C.Z.locals,
        (function () {
          const e = document.createElement("h1");
          (e.textContent = "Battleship: a battle of ships"),
            document.querySelector("body").appendChild(e);
          const t = document.createElement("div");
          (t.id = "main"), document.body.appendChild(t), t.appendChild(o());
        })();
    })();
})();
