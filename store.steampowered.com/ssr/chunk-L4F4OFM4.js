const CLSTAMP = 9728496;

import { a as Z } from "./chunk-6EQDKIQ7.js";
import {
  a as K,
  b as q1,
  c as C1,
  f as K1,
  g as t2,
  i as i1,
  s as Y,
} from "./chunk-L563MXY3.js";
import { a as N2 } from "./chunk-VU5GHNHL.js";
import { a as P2 } from "./chunk-QIBPIVZJ.js";
import { a as m1 } from "./chunk-NAG7WYEP.js";
import { C as Q1, i as j } from "./chunk-KGGZ3CUE.js";
import { c as e2 } from "./chunk-RJZFDLID.js";
import {
  a as Y1,
  q as D,
  s as X1,
  u as J1,
  z as $1,
} from "./chunk-QZSZTXNW.js";
import { c as t1 } from "./chunk-FF664ZCL.js";
import { a as U } from "./chunk-URPHXMJR.js";
import {
  j as F1,
  o as O1,
  s as g,
  t as q,
  v as U1,
  w as j1,
} from "./chunk-YRUH6LBC.js";
import { j as b, p as V } from "./chunk-4PA5Y6JZ.js";
import { a as v } from "./chunk-NLJB2KUH.js";
import { c as W2, e as p, g as d, h as z1 } from "./chunk-CKLXZZTE.js";
var Z3 = W2((u1) => {
  "use strict";
  u1.byteLength = m3;
  u1.toByteArray = x3;
  u1.fromByteArray = H3;
  var B = [],
    y = [],
    M3 = typeof Uint8Array < "u" ? Uint8Array : Array,
    W1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (z = 0, _2 = W1.length; z < _2; ++z)
    (B[z] = W1[z]), (y[W1.charCodeAt(z)] = z);
  var z, _2;
  y[45] = 62;
  y[95] = 63;
  function A2(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    r === -1 && (r = t);
    var o = r === t ? 0 : 4 - (r % 4);
    return [r, o];
  }
  function m3(e) {
    var t = A2(e),
      r = t[0],
      o = t[1];
    return ((r + o) * 3) / 4 - o;
  }
  function w3(e, t, r) {
    return ((t + r) * 3) / 4 - r;
  }
  function x3(e) {
    var t,
      r = A2(e),
      o = r[0],
      C = r[1],
      i = new M3(w3(e, o, C)),
      l = 0,
      s = C > 0 ? o - 4 : o,
      a;
    for (a = 0; a < s; a += 4)
      (t =
        (y[e.charCodeAt(a)] << 18) |
        (y[e.charCodeAt(a + 1)] << 12) |
        (y[e.charCodeAt(a + 2)] << 6) |
        y[e.charCodeAt(a + 3)]),
        (i[l++] = (t >> 16) & 255),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255);
    return (
      C === 2 &&
        ((t = (y[e.charCodeAt(a)] << 2) | (y[e.charCodeAt(a + 1)] >> 4)),
        (i[l++] = t & 255)),
      C === 1 &&
        ((t =
          (y[e.charCodeAt(a)] << 10) |
          (y[e.charCodeAt(a + 1)] << 4) |
          (y[e.charCodeAt(a + 2)] >> 2)),
        (i[l++] = (t >> 8) & 255),
        (i[l++] = t & 255)),
      i
    );
  }
  function k3(e) {
    return B[(e >> 18) & 63] + B[(e >> 12) & 63] + B[(e >> 6) & 63] + B[e & 63];
  }
  function V3(e, t, r) {
    for (var o, C = [], i = t; i < r; i += 3)
      (o =
        ((e[i] << 16) & 16711680) +
        ((e[i + 1] << 8) & 65280) +
        (e[i + 2] & 255)),
        C.push(k3(o));
    return C.join("");
  }
  function H3(e) {
    for (
      var t, r = e.length, o = r % 3, C = [], i = 16383, l = 0, s = r - o;
      l < s;
      l += i
    )
      C.push(V3(e, l, l + i > s ? s : l + i));
    return (
      o === 1
        ? ((t = e[r - 1]), C.push(B[t >> 2] + B[(t << 4) & 63] + "=="))
        : o === 2 &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          C.push(B[t >> 10] + B[(t >> 4) & 63] + B[(t << 2) & 63] + "=")),
      C.join("")
    );
  }
});
var r2 = p(v());
if (!r2.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!i1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var w1 = p(P2());
function E2(e) {
  e();
}
function l1(e) {
  e || (e = E2), K1({ reactionScheduler: e });
}
var x1 = p(v());
function o2(e) {
  return t2(e);
}
var I2 = !1;
function R() {
  return I2;
}
var T2 = 1e4,
  D2 = 1e4,
  z2 = (function () {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (o) {
            o === void 0 && (o = T2),
              clearTimeout(r.sweepTimeout),
              (r.sweepTimeout = void 0);
            var C = Date.now();
            r.registrations.forEach(function (i, l) {
              C - i.registeredAt >= o &&
                (r.finalize(i.value), r.registrations.delete(l));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, o) {
          this.registrations.set(o, { value: r, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, D2));
        },
      }),
      e
    );
  })();
var C2 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : z2;
var N = new C2(function (e) {
  var t;
  (t = e.reaction) === null || t === void 0 || t.dispose(), (e.reaction = null);
});
var l2 = p(N2()),
  F2 = function () {};
function i2(e) {
  e.reaction = new C1("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function X(e, t) {
  if ((t === void 0 && (t = "observed"), R())) return e();
  var r = x1.default.useRef(null);
  if (!r.current) {
    var o = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (s) {
        return (
          N.unregister(o),
          (o.onStoreChange = s),
          o.reaction || (i2(o), (o.stateVersion = Symbol())),
          function () {
            var a;
            (o.onStoreChange = null),
              (a = o.reaction) === null || a === void 0 || a.dispose(),
              (o.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return o.stateVersion;
      },
    };
    r.current = o;
  }
  var C = r.current;
  C.reaction || (i2(C), N.register(r, C, C)),
    x1.default.useDebugValue(C.reaction, o2),
    (0, l2.useSyncExternalStore)(C.subscribe, C.getSnapshot, F2);
  var i, l;
  if (
    (C.reaction.track(function () {
      try {
        i = e();
      } catch (s) {
        l = s;
      }
    }),
    l)
  )
    throw l;
  return i;
}
var E = p(v());
var c2 = typeof Symbol == "function" && Symbol.for,
  n2 = c2
    ? Symbol.for("react.forward_ref")
    : typeof E.forwardRef == "function" &&
      (0, E.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  s2 = c2
    ? Symbol.for("react.memo")
    : typeof E.memo == "function" &&
      (0, E.memo)(function (e) {
        return null;
      }).$$typeof;
function k1(e, t) {
  var r;
  if (s2 && e.$$typeof === s2)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (R()) return e;
  var o = (r = t?.forwardRef) !== null && r !== void 0 ? r : !1,
    C = e,
    i = e.displayName || e.name;
  if (
    n2 &&
    e.$$typeof === n2 &&
    ((o = !0), (C = e.render), typeof C != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var l = function (s, a) {
    return X(function () {
      return C(s, a);
    }, i);
  };
  return (
    (l.displayName = e.displayName),
    Object.defineProperty(l, "name", {
      value: e.name,
      writable: !0,
      configurable: !0,
    }),
    e.contextTypes && (l.contextTypes = e.contextTypes),
    o && (l = (0, E.forwardRef)(l)),
    (l = (0, E.memo)(l)),
    U2(e, l),
    l
  );
}
var O2 = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function U2(e, t) {
  Object.keys(e).forEach(function (r) {
    O2[r] || Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
  });
}
function V1(e) {
  var t = e.children,
    r = e.render,
    o = t || r;
  return typeof o != "function" ? null : X(o);
}
V1.displayName = "Observer";
var j2 = p(v());
var X2 = p(v());
var Y2 = p(v());
var H1;
l1(w1.unstable_batchedUpdates);
var h4 =
  (H1 = N.finalizeAllImmediately) !== null && H1 !== void 0
    ? H1
    : function () {};
function Q2(e, t) {
  return t === void 0 && (t = "observed"), X(e, t);
}
var S = p(v());
function q2(e, t) {
  if (p2(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (var C = 0; C < r.length; C++)
    if (!Object.hasOwnProperty.call(t, r[C]) || !p2(e[r[C]], t[r[C]]))
      return !1;
  return !0;
}
function p2(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var u2 = Symbol("patchMixins"),
  m2 = Symbol("patchedDefinition");
function K2(e, t) {
  var r = (e[u2] = e[u2] || {}),
    o = (r[t] = r[t] || {});
  return (o.locks = o.locks || 0), (o.methods = o.methods || []), o;
}
function d2(e, t) {
  for (
    var r = this, o = arguments.length, C = new Array(o > 2 ? o - 2 : 0), i = 2;
    i < o;
    i++
  )
    C[i - 2] = arguments[i];
  t.locks++;
  try {
    var l;
    return e != null && (l = e.apply(this, C)), l;
  } finally {
    t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (s) {
          s.apply(r, C);
        });
  }
}
function f2(e, t) {
  var r = function () {
    for (var C = arguments.length, i = new Array(C), l = 0; l < C; l++)
      i[l] = arguments[l];
    d2.call.apply(d2, [this, e, t].concat(i));
  };
  return r;
}
function t3(e, t, r) {
  var o = K2(e, t);
  o.methods.indexOf(r) < 0 && o.methods.push(r);
  var C = Object.getOwnPropertyDescriptor(e, t);
  if (!(C && C[m2])) {
    var i = e[t],
      l = w2(e, t, C ? C.enumerable : void 0, o, i);
    Object.defineProperty(e, t, l);
  }
}
function w2(e, t, r, o, C) {
  var i,
    l = f2(C, o);
  return (
    (i = {}),
    (i[m2] = !0),
    (i.get = function () {
      return l;
    }),
    (i.set = function (a) {
      if (this === e) l = f2(a, o);
      else {
        var f = w2(this, t, r, o, a);
        Object.defineProperty(this, t, f);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var g2 = Symbol("ObserverAdministration"),
  L2 = Symbol("isMobXReactObserver");
function Z1(e) {
  var t;
  return (t = e[g2]) != null
    ? t
    : (e[g2] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: S1(e.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function e3(e) {
  var t = e.prototype;
  if (e[L2]) {
    var r = S1(e);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else e[L2] = !0;
  if (t.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (e.__proto__ !== S.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = v2;
    else if (t.shouldComponentUpdate !== v2)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var o = t.render;
  if (typeof o != "function") {
    var C = S1(e);
    throw new Error(
      "[mobx-react] class component (" +
        C +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: R() ? o : r3.call(this, o),
      }),
      this.render()
    );
  };
  var i = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var l = this;
      if (0) var s;
      var a = Z1(this);
      return (
        (a.mounted = !0),
        N.unregister(this),
        (a.forceUpdate = function () {
          return l.forceUpdate();
        }),
        (!a.reaction || a.reactionInvalidatedBeforeMount) && a.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    t3(t, "componentWillUnmount", function () {
      var l;
      if (!R()) {
        var s = Z1(this);
        (l = s.reaction) == null || l.dispose(),
          (s.reaction = null),
          (s.forceUpdate = null),
          (s.mounted = !1),
          (s.reactionInvalidatedBeforeMount = !1);
      }
    }),
    e
  );
}
function S1(e) {
  return e.displayName || e.name || "<component>";
}
function r3(e) {
  var t = e.bind(this),
    r = Z1(this);
  function o() {
    r.reaction ||
      ((r.reaction = o3(r)), r.mounted || N.register(this, r, this));
    var C = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = q1(!1, t);
        } catch (l) {
          C = l;
        }
      }),
      C)
    )
      throw C;
    return i;
  }
  return o;
}
function o3(e) {
  return new C1(e.name + ".render()", function () {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var t;
      (t = e.reaction) == null || t.dispose(), (e.reaction = null);
    }
  });
}
function v2(e, t) {
  return (
    R() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== t ? !0 : !q2(this.props, e)
  );
}
function b1(e, t) {
  if (t && t.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(S.Component, e) ||
    Object.prototype.isPrototypeOf.call(S.PureComponent, e)
      ? e3(e)
      : k1(e)
  );
}
function y1() {
  return (
    (y1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
          return e;
        }),
    y1.apply(this, arguments)
  );
}
function C3(e, t) {
  if (e == null) return {};
  var r = {},
    o = Object.keys(e),
    C,
    i;
  for (i = 0; i < o.length; i++)
    (C = o[i]), !(t.indexOf(C) >= 0) && (r[C] = e[C]);
  return r;
}
var i3 = ["children"],
  M2 = S.default.createContext({});
function l3(e) {
  var t = e.children,
    r = C3(e, i3),
    o = S.default.useContext(M2),
    C = S.default.useRef(y1({}, o, r)),
    i = C.current;
  if (0) var l;
  return S.default.createElement(M2.Provider, { value: i }, t);
}
l3.displayName = "MobXProvider";
var y4 = Number.parseInt(S.default.version.split(".")[0]);
if (!S.Component) throw new Error("mobx-react requires React to be available");
if (!K) throw new Error("mobx-react requires mobx to be available");
var c3 = p(v());
var n3 = p(v());
var n = p(V());
function F4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.48 35.05V29.35L16.51 29.34C13.4035 28.995 10.5086 27.5974 8.30636 25.3795C6.10411 23.1615 4.72712 20.2568 4.40423 17.1479C4.08134 14.039 4.83199 10.9133 6.53143 8.29011C8.23087 5.66691 10.7768 3.70423 13.7461 2.72822C16.7153 1.7522 19.9292 1.82163 22.8536 2.92496C25.7779 4.02829 28.2367 6.09909 29.8213 8.79322C31.4058 11.4874 32.0208 14.6426 31.564 17.7346C31.1071 20.8266 29.606 23.6692 27.31 25.79L16.48 35.05ZM10.36 15.65L15.77 21.05L25.39 11.43L23 9.04999L15.77 16.28L12.75 13.26L10.36 15.65Z",
      fill: "currentColor",
    }),
  });
}
function O4(e) {
  return (0, n.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      (0, n.jsx)("path", {
        d: "M14 17C15.4706 16.9968 16.9289 17.2682 18.3 17.8C16.5605 19.2553 15.269 21.1737 14.5752 23.333C13.8814 25.4922 13.8137 27.8039 14.38 30H2V29C2 25.8174 3.26428 22.7652 5.51472 20.5147C7.76515 18.2643 10.8174 17 14 17Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M10.6666 2.01118C11.6533 1.35189 12.8133 1 14 1C15.5913 1 17.1174 1.63214 18.2426 2.75736C19.3679 3.88258 20 5.4087 20 7C20 8.18669 19.6481 9.34673 18.9888 10.3334C18.3295 11.3201 17.3925 12.0892 16.2961 12.5433C15.1997 12.9974 13.9933 13.1162 12.8295 12.8847C11.6656 12.6532 10.5965 12.0818 9.75736 11.2426C8.91824 10.4035 8.3468 9.33443 8.11529 8.17054C7.88378 7.00666 8.0026 5.80026 8.45672 4.7039C8.91085 3.60754 9.67988 2.67047 10.6666 2.01118Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M32.5 27C32.5 28.2856 32.1188 29.5423 31.4046 30.6112C30.6903 31.6801 29.6752 32.5132 28.4874 33.0052C27.2997 33.4972 25.9928 33.6259 24.7319 33.3751C23.471 33.1243 22.3128 32.5052 21.4038 31.5962C20.4948 30.6872 19.8757 29.529 19.6249 28.2681C19.3741 27.0072 19.5028 25.7003 19.9948 24.5126C20.4868 23.3248 21.3199 22.3097 22.3888 21.5954C23.4577 20.8812 24.7144 20.5 26 20.5",
        stroke: "currentColor",
        strokeWidth: "3",
      }),
      (0, n.jsx)("path", {
        d: "M32.7419 20.4742L25.9919 24.3713L25.9919 16.5771L32.7419 20.4742Z",
        fill: "currentColor",
      }),
    ],
  });
}
function U4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 7H11V12H2V7ZM2 16H11V23L16 20.9545V31H2V16ZM20 31V20.9545L25 23V16H34V31H20ZM34 12H25V7H34V12ZM22 7H14V19L18 17.3636L22 19V7Z",
    }),
  });
}
function j4(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      d: "M18 17.8L4 10.05L18 2.29999L32 10.05L18 17.8ZM18 22.37L7.1 16.37L4 18.05L18 25.8L32 18.05L28.9 16.34L18 22.37ZM18 30.37L7.1 24.37L4 26.05L18 33.8L32 26.05L28.9 24.34L18 30.37Z",
      fill: "currentColor",
    }),
  });
}
function x2() {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
    "data-name": "Layer 1",
    viewBox: "0 0 128 128",
    x: "0px",
    y: "0px",
    children: (0, n.jsx)("polygon", {
      points:
        "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
    }),
  });
}
function Y4(e) {
  let t = e.color || "#FFFFFF";
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: Z("SVGIcon_Button", "SVGIcon_X_Line", e.className),
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("line", {
        fill: "none",
        stroke: t,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        x1: "212",
        y1: "212",
        x2: "44",
        y2: "44",
      }),
      (0, n.jsx)("line", {
        fill: "none",
        stroke: t,
        strokeWidth: "45",
        strokeMiterlimit: "10",
        x1: "44",
        y1: "212",
        x2: "212",
        y2: "44",
      }),
    ],
  });
}
function X4(e) {
  return t1()
    ? (0, n.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.63604 19.636C7.32387 17.9482 9.61305 17 12 17C12.4664 17 12.9292 17.0362 13.3844 17.1071C13.1338 18.0289 13 18.9988 13 20C13 25.0351 16.383 29.2801 21 30.5859V31H3V26C3 23.6131 3.94821 21.3239 5.63604 19.636ZM14.7779 13.1573C13.9556 13.7068 12.9889 14 12 14C10.6739 14 9.40215 13.4732 8.46447 12.5355C7.52678 11.5979 7 10.3261 7 9C7 8.0111 7.29324 7.0444 7.84265 6.22215C8.39206 5.39991 9.17295 4.75904 10.0866 4.3806C11.0002 4.00217 12.0055 3.90315 12.9755 4.09608C13.9454 4.289 14.8363 4.76521 15.5355 5.46447C16.2348 6.16373 16.711 7.05465 16.9039 8.02455C17.0969 8.99446 16.9978 9.99979 16.6194 10.9134C16.241 11.827 15.6001 12.6079 14.7779 13.1573Z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28ZM22.5 21.5V26H25.5V21.5H30V18.5H25.5V14H22.5V18.5H18V21.5H22.5Z",
            fill: "currentColor",
          }),
        ],
      })
    : (0, n.jsxs)("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        className: "SVGIcon_Button SVGIcon_AddFriend",
        x: "0px",
        y: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, n.jsx)("g", {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
            children: (0, n.jsx)("circle", {
              cx: "86.296",
              cy: "47.419",
              r: "33.526",
              fill: "currentcolor",
            }),
          }),
          (0, n.jsx)("path", {
            className: "friendBody",
            d: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            className: "plusCircle",
            d: "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z",
            fill: "currentColor",
          }),
        ],
      });
}
function J4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_4",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_FriendRequest",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("g", {
        className: "friendHead",
        transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
        children: (0, n.jsx)("circle", {
          cx: "85.923",
          cy: "47.419",
          r: "33.526",
        }),
      }),
      (0, n.jsx)("path", {
        className: "friendBody",
        d: "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231	c-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z",
      }),
      (0, n.jsx)("path", {
        className: "friendBodyFull",
        d: "M176.504,217.922v-42.624c0-35.443-17.002-64.217-57.483-64.217H106.96h-1.017H94.898 c-40.48,0.001-57.484,28.774-57.484,64.217v42.624c0,0,0,22.197,69.544,22.197C177.521,240.121,176.504,217.922,176.504,217.922z",
      }),
      (0, n.jsx)("path", {
        className: "friendArm",
        d: "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z",
      }),
      (0, n.jsx)("path", {
        className: "redCircle",
        d: "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z",
      }),
    ],
  });
}
function $4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Maximize",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("rect", {
        x: "24",
        y: "42.167",
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "208",
        height: "171.667",
      }),
      (0, n.jsx)("line", {
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "42",
        strokeMiterlimit: "10",
        x1: "24",
        y1: "54.01",
        x2: "232",
        y2: "54.01",
      }),
    ],
  });
}
function Q4() {
  return (0, n.jsx)("svg", {
    version: "1.1",
    id: "base",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Minimize",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: (0, n.jsx)("line", {
      fill: "none",
      stroke: "rgb(120, 138, 146)",
      strokeWidth: "18",
      strokeMiterlimit: "10",
      x1: "24",
      y1: "209.01",
      x2: "232",
      y2: "209.01",
    }),
  });
}
function q4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Restore",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("polyline", {
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "12",
        strokeMiterlimit: "10",
        points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
      }),
      (0, n.jsx)("rect", {
        x: "24",
        y: "90.861",
        fill: "none",
        stroke: "rgb(120, 138, 146)",
        strokeWidth: "18",
        strokeMiterlimit: "10",
        width: "149",
        height: "122.973",
      }),
    ],
  });
}
function K4() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_2",
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button SVGIcon_Trade",
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("path", {
        d: "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z",
      }),
      (0, n.jsx)("path", {
        d: "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z",
      }),
    ],
  });
}
function t5() {
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      overflow: "visible",
      width: "100%",
      height: "100%",
      maxWidth: "320px",
      maxHeight: "320px",
    },
    x: "0px",
    y: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("g", {
        className: "base",
        children: (0, n.jsx)("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
        }),
      }),
      (0, n.jsxs)("g", {
        className: "lines",
        children: [
          (0, n.jsx)("path", {
            className: "line1",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197",
          }),
          (0, n.jsx)("path", {
            className: "line2",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197",
          }),
          (0, n.jsx)("path", {
            className: "line3",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197",
          }),
        ],
      }),
      (0, n.jsxs)("g", {
        className: "lid",
        children: [
          (0, n.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88",
          }),
          (0, n.jsx)("path", {
            fill: "none",
            strokeWidth: "10",
            d: "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
          }),
        ],
      }),
    ],
  });
}
function e5(e) {
  let { bPending: t, bShowArm: r, className: o, ...C } = e;
  return t1({ bSuppressAssert: !0 })
    ? (0, n.jsxs)("svg", {
        className: Z("SVGIcon_Button", "SVGIcon_FriendIcon", o),
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...C,
        children: [
          (0, n.jsx)("path", {
            d: "M18 17C15.6131 17 13.3239 17.9482 11.636 19.636C9.94821 21.3239 9 23.6131 9 26V31H27V26C27 23.6131 26.0518 21.3239 24.364 19.636C22.6761 17.9482 20.3869 17 18 17ZM18 14C18.9889 14 19.9556 13.7068 20.7779 13.1573C21.6001 12.6079 22.241 11.827 22.6194 10.9134C22.9978 9.99979 23.0969 8.99446 22.9039 8.02455C22.711 7.05465 22.2348 6.16373 21.5355 5.46447C20.8363 4.76521 19.9454 4.289 18.9755 4.09608C18.0055 3.90315 17.0002 4.00217 16.0866 4.3806C15.173 4.75904 14.3921 5.39991 13.8427 6.22215C13.2932 7.0444 13 8.0111 13 9C13 10.3261 13.5268 11.5979 14.4645 12.5355C15.4021 13.4732 16.6739 14 18 14Z",
            fill: "currentColor",
          }),
          (0, n.jsx)("path", {
            className: "WavingArm",
            opacity: r ? "1" : "0",
            d: "M4.67541 11.8555C5.6007 10.8308 7.18156 10.7501 8.20635 11.6754L18.9515 21.3773L15.6007 25.0884L4.85556 15.3865C3.83077 14.4612 3.75011 12.8803 4.67541 11.8555V11.8555Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
          (0, n.jsx)("path", {
            opacity: r ? "1" : "0",
            d: "M32.3573 11.8876C33.2626 12.93 33.1515 14.509 32.109 15.4144L23.2784 23.083L20 19.3078L28.8305 11.6392C29.873 10.7339 31.452 10.8451 32.3573 11.8876Z",
            fill: "currentColor",
            strokeWidth: "0",
          }),
        ],
      })
    : (0, n.jsxs)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: Z(
          "SVGIcon_Button",
          "SVGIcon_FriendIcon",
          t ? " SVGIcon_FriendIcon_Pending" : "",
          o,
        ),
        x: "0px",
        y: "0px",
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        children: [
          (0, n.jsxs)("g", {
            className: "Outline",
            children: [
              (0, n.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, n.jsx)("path", {
                  d: "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z",
                }),
              }),
              (0, n.jsx)("path", {
                d: "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z",
              }),
              (0, n.jsx)("path", {
                className: "WavingArm",
                opacity: t ? "1" : "0",
                d: "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z",
              }),
            ],
          }),
          (0, n.jsxs)("g", {
            className: "foreground",
            children: [
              (0, n.jsx)("g", {
                transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)",
                children: (0, n.jsx)("circle", {
                  fill: "currentColor",
                  cx: "102.239",
                  cy: "49.488",
                  r: "33.446",
                }),
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z",
              }),
              (0, n.jsx)("path", {
                className: "WavingArm",
                opacity: t ? "1" : "0",
                d: "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z",
              }),
            ],
          }),
        ],
      });
}
function r5(e) {
  let t = Z("SVGIcon_Button", "SVGIcon_SteamLogo", e && e.className);
  return (0, n.jsxs)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#FFFFFF",
    className: t,
    x: "0px",
    y: "0px",
    viewBox: "0 0 256 256",
    children: [
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
      }),
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
      }),
      (0, n.jsx)("path", {
        fill: "currentColor",
        d: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
      }),
    ],
  });
}
function o5() {
  return (0, n.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    x: "0px",
    y: "0px",
    children: [
      (0, n.jsx)("path", {
        d: "M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z",
        fill: "currentColor",
      }),
      (0, n.jsx)("path", {
        d: "M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z",
        fill: "currentColor",
      }),
    ],
  });
}
function C5(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 4V20V24L7 20H24V4H2ZM34 12V32L29 28H12V24H28V12H34Z",
      fill: "currentColor",
    }),
  });
}
function i5(e) {
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, n.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33.78 19.22L19.22 33.78L4 18.56V4H18.56L33.78 19.22Z",
      fill: "currentColor",
    }),
  });
}
function l5(e) {
  let { className: t, ...r } = e;
  return (0, n.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: t,
    ...r,
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    children: (0, n.jsx)("circle", {
      fill: "currentColor",
      cx: "25",
      cy: "25",
      r: "25",
    }),
  });
}
var k2 = Object.seal({ onMoveUp: n1, onMoveDown: n1 }),
  n5 = Object.seal({ onMoveRight: n1, onMoveLeft: n1 });
function n1(e, t) {
  if (e.is_repeat) return !1;
  let r = t.GetRelativeDirection(e.button);
  return r == 1 ? t.BFocusFirstChild(0) : r == 2 ? t.BFocusLastChild(0) : !1;
}
var L = p(v());
var V2 = p(v());
var H = {
  "duration-app-launch": "800ms",
  ContextMenuMouseOverlay: "b7xYZZxB5B4-",
  ContextMenuPosition: "o6fauCzG3J8-",
  contextMenu: "Sax96NMRDNg-",
  ContextMenuPopup: "BPK-2blxjIY-",
  contextMenuContents: "S4vxdXl-Tt4-",
  contextMenuItem: "_9QNF01mSnJo-",
  active: "yQed0a0UPBs-",
  MenuSectionHeader: "g0TN7BV3VaU-",
  ContextMenuSeparator: "spxW2r-GYVk-",
  NoSeparation: "KYihcox8Ecg-",
  UpperCase: "Xf9GISpIH-g-",
  SubMenu: "zdQY8o-cjDw-",
  Label: "bP5c-culAkY-",
  Arrow: "fawTG34m89A-",
  IconContainer: "jkozd0TWs0M-",
  ContextMenuHRSeparator: "_2OCJzZW0nUA-",
  ForceDesktop: "DBVmBIxYzAc-",
  PopoutSubMenu: "MVJ6mtoRVF4-",
  PopoutSubMenuItems: "_3W6Oq18b4G0-",
};
var B1 = p(V()),
  R1 = V2.forwardRef((e, t) => {
    let { className: r, contextMenuStyles: o, disabled: C, ...i } = e;
    return (0, B1.jsx)("div", {
      ...i,
      ref: t,
      className: Z(
        r,
        (o || H).contextMenuItem,
        "contextMenuItem",
        C && "disabled",
      ),
    });
  });
R1.displayName = "MenuItem";
function H2(e, t = !0) {
  return function (r, o, C) {
    let i = C.value;
    C.value = function (...l) {
      let s = this[o + "_DebounceProperties"];
      s === void 0 &&
        (s = this[o + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        s.hTimer === void 0
          ? (t ? i.apply(this, l) : (s.nPending += 1),
            (s.hTimer = window.setInterval(() => {
              s.nPending > 0
                ? (i.apply(this, l), (s.nPending = 0))
                : (window.clearInterval(s.hTimer), (s.hTimer = void 0));
            }, e)))
          : (s.nPending += 1);
    };
  };
}
var u = p(V()),
  s1 = L.createContext(null),
  A = class extends L.Component {
    m_navRef = Q1();
    m_divRef = L.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        Y1(this.props.refInstance, this.instance);
    }
    componentDidUpdate(t) {
      t.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: t,
          className: r,
          label: o,
          onCancel: C,
          cancelText: i,
          refInstance: l,
          bForceDesktopPresentation: s,
          footer: a,
          ...f
        } = this.props,
        m = this.context.styles ?? H,
        w = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !s) {
        let x = () => {
          C && C(), this.instance.Hide();
        };
        return (0, u.jsxs)(m1, {
          ...f,
          className: Z(
            m.contextMenuContents,
            { [m.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            r,
          ),
          "flow-children": "column",
          onMoveLeft: this.HideIfSubmenu,
          onCancel: this.instance.BIsSubMenu() ? this.HideMenu : x,
          style: {
            overflowY: this.instance.BIsSubMenuVisible() ? "hidden" : void 0,
          },
          navEntryPreferPosition: 4,
          navRef: this.m_navRef,
          ref: this.m_divRef,
          ...k2,
          children: [
            t,
            !this.instance.BIsSubMenu() &&
              (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(S2, {}),
                  (0, u.jsx)(M, {
                    className: m.Cancel,
                    onSelected: x,
                    children: Y(w),
                  }),
                  a,
                ],
              }),
            this.instance.BIsSubMenuVisible() &&
              (0, u.jsx)("div", {
                className: m.contextMenuFade,
                onClick: () => this.instance.HideSubMenu(),
              }),
          ],
        });
      } else
        return (0, u.jsx)("div", {
          ...f,
          ref: this.m_divRef,
          className: Z(
            {
              [m.contextMenuContents]: !0,
              [m.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [m.ForceDesktop]: s,
            },
            r,
          ),
          children: t,
        });
    }
  };
z1(A, "contextType", s1),
  d([g], A.prototype, "HideIfSubmenu", 1),
  d([g], A.prototype, "HideMenu", 1),
  (A = d([b1], A));
var M = class extends L.PureComponent {
  static contextType = s1;
  m_ref = L.createRef();
  m_refDiv = L.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(t) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(t),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(t),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(t) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(t) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: t,
        bInteractableItem: r,
        onMoveRight: o,
        ...C
      } = this.props,
      i = this.context?.styles ?? H;
    return this.context.presentation == 1
      ? (0, u.jsx)(m1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...C,
          className: Z(
            this.props.className,
            i.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && i.Selected,
            this.props.tone == "positive" && i.Positive,
            this.props.tone == "emphasis" && i.Emphasis,
            this.props.tone == "destructive" && i.Destructive,
          ),
          focusClassName: i.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: o,
          unselectable: this.props.unselectable,
          role: C.role ?? "option",
          "aria-selected": this.props.selected ?? !1,
          children: this.props.children,
        })
      : (0, u.jsx)(R1, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ...C,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: C.role ?? "option",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
d([g], M.prototype, "OnClick", 1),
  d([g], M.prototype, "OnOKButton", 1),
  d([g], M.prototype, "OnMouseEnter", 1),
  d([g], M.prototype, "Focus", 1);
function S2(e) {
  let r = L.useContext(s1).styles ?? H;
  return (0, u.jsx)("div", { className: r.ContextMenuSeparator });
}
var G5 = (e) => {
    let t = t1();
    return (0, u.jsx)(_, { ...e, bInGamepadUI: t });
  },
  _ = class extends L.PureComponent {
    static contextType = s1;
    m_refItem = L.createRef();
    constructor(t) {
      super(t), (this.state = { bActive: !1 });
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      this.setState({ bActive: !1 }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus();
    }
    ShowSubMenu(t) {
      let r = t || this.m_refItem.current.element,
        o = this.instance.ShowSubMenu(r, this.RenderSubMenu);
      return o
        ? (this.setState({ bActive: !0 }),
          o.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, u.jsx)(A, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(t) {
      this.context.presentation == 0 && this.ShowSubMenu(t.currentTarget);
    }
    OnClick(t) {
      this.OnMouseEnter(t),
        this.props.onClick && this.props.onClick(t),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(t.currentTarget);
    }
    render() {
      let {
          label: t,
          selectedWithin: r,
          children: o,
          className: C,
          bInGamepadUI: i,
          ...l
        } = this.props,
        s = this.context.styles ?? H;
      return (0, u.jsxs)(M, {
        ...l,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: r && !this.state.bActive,
        className: Z(C, s.SubMenu, this.state.bActive && s.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, u.jsx)("div", { className: s.Label, children: t }),
          (0, u.jsx)("div", {
            className: s.Arrow,
            children: (0, u.jsx)(x2, {}),
          }),
        ],
      });
    }
  };
d([g], _.prototype, "OnSubMenuMouseEnter", 1),
  d([g], _.prototype, "OnSubMenuHidden", 1),
  d([g], _.prototype, "ShowSubMenu", 1),
  d([g], _.prototype, "RenderSubMenu", 1),
  d([g], _.prototype, "OnMouseEnter", 1),
  d([g], _.prototype, "OnClick", 1);
var G = class extends L.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(t) {
    super(t),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(t) {
    this.props.instance.SetElement(t),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            "resize",
            this.OnWindowResize,
          )),
      t &&
        (this.m_mutationObserver.observe(t, { childList: !0, subtree: !0 }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          t.ownerDocument.defaultView?.addEventListener(
            "resize",
            this.OnWindowResize,
          )),
      (this.m_elMenu = t || void 0),
      b.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState({ ready: !0 }, () => {
          this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
        }));
  }
  OnMenuMutation(t, r) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(t) {
    if (
      !(t.relatedTarget && D(t.currentTarget, t.relatedTarget)) &&
      !(
        t.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(t.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let r = u3() ? 150 : 0;
      this.props.instance.OnCancel(r);
    }
  }
  OnKeyDown(t) {
    t.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), t.preventDefault(), t.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !D(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let t = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      t && t.focus ? t.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(t = !1) {
    let r = this.props.options,
      o = this.m_elMenu,
      C = this.props.element;
    if (!o) return;
    let i = this.props.popup != null,
      l = this.parentWin;
    if (!l || (C && l.getComputedStyle(C).display === "none")) return;
    let s = this.props.clientX,
      a = this.props.clientY,
      f = 0,
      m = 0,
      w = l.innerWidth,
      x = l.innerHeight,
      d1 = 1,
      I = C?.getBoundingClientRect();
    if (i)
      if (
        (!r.bScreenCoordinates &&
          s !== void 0 &&
          a !== void 0 &&
          ((s += l.screenLeft), (a += l.screenTop)),
        I && (I = X1(l, I)),
        r.targetMonitor)
      )
        (d1 = r.targetMonitor.flMonitorScale),
          (f = r.targetMonitor.nScreenLeft),
          (m = r.targetMonitor.nScreenTop),
          (w = r.targetMonitor.nScreenWidth),
          (x = r.targetMonitor.nScreenHeight);
      else {
        let k = l.screen,
          T1 = 0,
          D1 = 0;
        k.availLeft && (T1 = k.availLeft),
          k.availTop && (D1 = k.availTop),
          (f = T1),
          (m = D1),
          (w = k.availWidth),
          (x = k.availHeight);
      }
    (r.bOverlapHorizontal || r.bOverlapVertical) && (s = a = void 0);
    let W = o.getBoundingClientRect();
    if (r.flGamepadScale && r.flGamepadScale > 0) {
      let k = r.flGamepadScale;
      W = new DOMRect(W.x * k, W.y * k, W.width * k, W.height * k);
    }
    let c = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      F = s ?? I.left,
      O = s ?? I.right,
      T = W.width;
    r.bMatchWidth && ((T = O - F), (c.menuWidth = T)),
      r.bGrowToElementWidth && (c.menuMinWidth = Math.max(T, O - F));
    let P1 = (r.bOverlapHorizontal ? O : F) - f - T,
      f1 = P1 > 0,
      N1 = f + w - (r.bOverlapHorizontal ? F : O) - T,
      g1 = N1 > 0,
      L1 = (r.bPreferPopLeft || !g1) && f1;
    !f1 &&
      !g1 &&
      ((L1 = f1 > g1),
      r.bFitToWindow && ((T += (L1 ? P1 : N1) - 8), (c.menuWidth = T))),
      L1
        ? (c.menuRight = w - (r.bOverlapHorizontal ? O : F))
        : (c.menuLeft = r.bOverlapHorizontal ? F : O);
    let $ = a ?? I.top,
      Q = a ?? I.bottom,
      P = o.scrollHeight;
    r.bMatchHeight && ((P = Q - $), (c.menuHeight = P));
    let v1 = (r.bOverlapVertical ? Q : $) - m - P,
      E1 = v1 > 0,
      M1 = m + x - (r.bOverlapVertical ? $ : Q) - P,
      I1 = M1 > 0,
      o1 = (r.bPreferPopTop || !I1) && E1 && !r.bDisablePopTop;
    if (!E1 && !I1) {
      let k =
        r.bShiftToFitWindow !== void 0
          ? r.bShiftToFitWindow
          : !!r.bFitToWindow && !r.bOverlapHorizontal;
      (o1 = v1 > M1 && !r.bDisablePopTop),
        k && (o1 ? (c.menuTop = 4) : (c.menuBottom = 4)),
        r.bFitToWindow &&
          (k ? (P = Math.min(P, x - 8)) : (P += o1 ? v1 : M1),
          (c.menuHeight = P - 8));
    }
    c.menuBottom === void 0 &&
      c.menuTop === void 0 &&
      (o1
        ? (c.menuBottom = x - (r.bOverlapVertical ? Q : $))
        : (c.menuTop = r.bOverlapVertical ? $ : Q)),
      i
        ? (c.menuHeight || (c.menuHeight = W.height),
          c.menuWidth || (c.menuWidth = W.width),
          c.menuBottom &&
            !c.menuTop &&
            ((c.menuTop = x - c.menuBottom - c.menuHeight),
            (c.menuBottom = void 0)),
          c.menuRight &&
            !c.menuLeft &&
            ((c.menuLeft = w - c.menuRight - c.menuWidth),
            (c.menuRight = void 0)))
        : l.getComputedStyle(o).position != "fixed" &&
          (c.menuLeft && (c.menuLeft += l.scrollX),
          c.menuTop && (c.menuTop += l.scrollY),
          c.menuBottom &&
            (c.menuBottom +=
              l.document.body.clientHeight - l.scrollY - l.innerHeight),
          c.menuRight &&
            (c.menuRight +=
              l.document.body.clientWidth - l.scrollX - l.innerWidth)),
      (t ||
        c.menuLeft !== this.state.menuLeft ||
        c.menuRight !== this.state.menuRight ||
        c.menuTop !== this.state.menuTop ||
        c.menuBottom !== this.state.menuBottom ||
        c.menuWidth !== this.state.menuWidth ||
        c.menuHeight !== this.state.menuHeight) &&
        this.setState(c);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let r = this.props.popup?.window,
      o = this.props.options;
    if (o.bScreenCoordinates) {
      let C = this.parentWin?.devicePixelRatio;
      if (o.targetMonitor) {
        let i = o.flGamepadScale || 1;
        C = (o.targetMonitor.flMonitorScale ?? 1) / i;
      }
      r?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, C),
        r?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          C,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((C) => {
      let i = this.state.menuLeft - this.parentWin.screenX,
        l = this.state.menuTop - this.parentWin.screenY;
      try {
        r?.SteamClient.Window.PositionWindowRelative(
          C,
          i,
          l,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (s) {
        console.error(s);
      }
    });
  }
  render() {
    let t = { visibility: this.state.ready ? "visible" : "hidden" };
    if (
      this.props.options.flGamepadScale &&
      this.props.options.flGamepadScale > 0
    )
      t.zoom = this.props.options.flGamepadScale;
    else if (
      this.props.options.bScreenCoordinates &&
      this.props.options.targetMonitor &&
      this.m_elMenu?.ownerDocument?.defaultView
    ) {
      let o = this.m_elMenu.ownerDocument.defaultView.devicePixelRatio;
      o != 1 &&
        (t.zoom = (this.props.options.targetMonitor.flMonitorScale ?? 1) / o);
    }
    this.props.popup
      ? (this.PositionPopupWindow(),
        this.state.menuMinWidth !== void 0 &&
          (t.minWidth = this.state.menuMinWidth))
      : (this.state.menuTop !== void 0
          ? (t.top = this.state.menuTop)
          : this.state.menuBottom !== void 0 &&
            (t.bottom = this.state.menuBottom),
        this.state.menuLeft !== void 0
          ? (t.left = this.state.menuLeft)
          : this.state.menuRight !== void 0 && (t.right = this.state.menuRight),
        this.state.menuHeight !== void 0 && (t.height = this.state.menuHeight),
        this.state.menuWidth !== void 0 && (t.width = this.state.menuWidth),
        this.state.menuMinWidth !== void 0 &&
          (t.minWidth = this.state.menuMinWidth));
    let r = this.props.options.strClassName || H.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (r += " visible"),
      (r += " " + H.ContextMenuPosition),
      (0, u.jsx)("div", {
        className: r,
        ref: this.BindMenuElement,
        style: t,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
d([g], G.prototype, "BindMenuElement", 1),
  d([g, H2(100)], G.prototype, "OnMenuMutation", 1),
  d([g], G.prototype, "OnWindowResize", 1),
  d([g], G.prototype, "OnBlur", 1),
  d([g], G.prototype, "OnKeyDown", 1),
  (G = d([b1], G));
function _5(e) {
  return (0, u.jsx)("div", { className: H.ContextMenuMouseOverlay });
}
function h3(e, t) {
  let r = t.createEvent("HTMLEvents");
  r.initEvent("change", !0, !1), e.dispatchEvent(r);
}
function A5(e) {
  let t = [],
    r = J1(e),
    o = r.getSelection(),
    C = o && o.rangeCount > 0 && o.toString().length > 0,
    i = e.target,
    l = !1,
    s = e.clientY,
    a = e.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (l = !0),
    b.IN_CLIENT && l && j(r, "Browser.GetSpellingSuggestions"))
  ) {
    let [f, ...m] = r.SteamClient.Browser.GetSpellingSuggestions(),
      w = i;
    w &&
      m.forEach((x, d1) => {
        t.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => {
                w.setRangeText(x),
                  h3(w, r.document),
                  w.setSelectionRange(w.selectionEnd, w.selectionEnd),
                  i.focus();
              },
              className: H.NoSeparation,
              children: x,
            },
            `spelling_${d1}_${x}`,
          ),
        );
      }),
      f &&
        j(r, "Browser.AddWordToDictionary") &&
        ((f = f.trim()),
        t.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => r.SteamClient.Browser.AddWordToDictionary(f),
              children: Y(
                "#ContextMenu_AddToDictionary",
                f.length < 30 ? f : f.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${f}`,
          ),
        ));
  }
  if (
    ((r.document.queryCommandEnabled("cut") || (C && l)) &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("cut");
            },
            children: Y("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (r.document.queryCommandEnabled("copy") || C) &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              r.document.execCommand("copy");
            },
            className: H.NoSeparation,
            children: Y("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    b.IN_CLIENT &&
      l &&
      j(r, "Browser.Paste") &&
      t.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.Paste();
            },
            className: H.NoSeparation,
            children: Y("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    b.IN_CLIENT && b.DEV_MODE)
  ) {
    let f = [];
    j(r, "Browser.OpenDevTools") &&
      f.push(
        (0, u.jsx)(
          M,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      j(r, "Browser.InspectElement") &&
        f.push(
          (0, u.jsx)(
            M,
            {
              onSelected: () => {
                i.focus(), r.SteamClient.Browser.InspectElement(s, a);
              },
              className: H.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      f.length > 0 &&
        (t.push((0, u.jsx)(S2, {}, "devtools-separator")), t.push(...f));
  }
  if (t.length) y2((0, u.jsx)(A, { children: t }), e, { bRootContextMenu: !0 });
  else {
    if (e.shiftKey) return;
    e.preventDefault(), e.stopPropagation();
  }
}
var p3 = "EnableContextMenuBlurDelay3";
function u3() {
  return (window.localStorage && window.localStorage.getItem(p3)) === "true";
}
var J = class J {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(t, r) {
    i1(this), (this.m_ContextMenuManager = t), (this.m_rctElement = r);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = J.s_nNextKeyValue), J.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(t) {
    this.m_element = t;
  }
  SetPopup(t) {
    this.m_popupContextMenu = t;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(t) {
    this.m_fnOnHideCallback = t;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(t = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(t);
  }
  Hide(t = 0) {
    t > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, t))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(t, r, o) {
    (this.m_options = { ...this.m_options, ...o }),
      (this.m_position.clientX = t),
      (this.m_position.clientY = r),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(t) {
    this.m_fnTakeFocus = t;
  }
  ShowSubMenu(t, r) {
    return this.m_elSubmenuItem == t
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = t),
        (this.m_submenu = new G1(this, r(), t, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    if (this.m_timerHideSubMenu > 0) return;
    let t = 150;
    this.m_timerHideSubMenu = window.setTimeout(() => {
      this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
    }, t);
  }
  OnSubMenuDismissed(t) {
    this.m_submenu == t && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      this.m_submenu &&
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(1),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        (this.m_submenu = void 0));
  }
  TakeFocus(t = 1) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(t),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(t) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(t) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(t))
    );
  }
  BInternalElementInChildHierarchy(t) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(t) ||
        this.m_submenu.BInternalElementInChildHierarchy(t))
    );
  }
  BIsChildElement(t) {
    return this.m_element
      ? D(this.m_element, t)
      : D(this.m_popupContextMenu?.root_element, t);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : D(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(t) {
    return (
      this.BInternalElementInParentHierarchy(t) ||
      this.BInternalElementInChildHierarchy(t)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(t) {
    this.m_rctLabel = t;
  }
};
d([K], J.prototype, "m_bVisible", 2), d([K.ref], J.prototype, "m_rctLabel", 2);
var e1 = J,
  c1 = class extends e1 {
    constructor(t, r, o, C, i, l) {
      super(t, r),
        (this.m_options = l || {}),
        (this.m_position = {
          element: o,
          clientX: C,
          clientY: i,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(t = 0) {
      super.Hide(t);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  G1 = class extends e1 {
    constructor(t, r, o, C) {
      super(t.Manager, r),
        (this.m_parentInstance = t),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: t.options.strClassName,
          bFitToWindow: t.options.bFitToWindow,
          bShiftToFitWindow: t.options.bShiftToFitWindow,
          bForcePopup: C,
        }),
        (this.m_position = {
          element: o,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  };
var a1 = class {
  m_callbacksMenusChanged = new O1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(t, r, o, C, i) {
    let l = new c1(this, t, r, o, C, i);
    return (
      i?.bCreateHidden &&
        (this.m_setHiddenMenus.add(l), this.m_callbacksMenusChanged.Dispatch()),
      l
    );
  }
  get OnMenusChanged() {
    return this.m_callbacksMenusChanged;
  }
  HideActiveMenu() {
    this.m_ActiveMenu?.options.bRetainOnHide
      ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
      : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
      (this.m_ActiveMenu = void 0);
  }
  get ActiveMenu() {
    return this.m_ActiveMenu;
  }
  GetVisibleMenus() {
    return this.m_ActiveMenu
      ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
      : [];
  }
  GetHiddenMenus() {
    return Array.from(this.m_setHiddenMenus);
  }
  GetAllMenus() {
    let t;
    return (
      this.m_ActiveMenu
        ? (t = [
            this.m_ActiveMenu,
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ])
        : (t = [
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ]),
      t.sort((r, o) => r.key - o.key)
    );
  }
  BShouldRenderMouseOverlay() {
    return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
  }
  ShowMenu(t) {
    if (t.BIsSubMenu()) this.m_rgActiveSubmenus.push(t);
    else {
      if (t == this.m_ActiveMenu) return;
      this.m_ActiveMenu &&
        (this.m_ActiveMenu.options.bRetainOnHide &&
          this.m_setHiddenMenus.add(this.m_ActiveMenu),
        this.m_ActiveMenu.Hide()),
        (this.m_ActiveMenu = t),
        this.m_setHiddenMenus.delete(t);
    }
    this.m_callbacksMenusChanged.Dispatch();
  }
  HideMenu(t) {
    t.BIsSubMenu()
      ? F1(this.m_rgActiveSubmenus, t) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (U(t == this.m_ActiveMenu, "Call to hide inactive menu"),
        t == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(t) {
    this.m_setHiddenMenus.delete(t);
  }
};
var _1 = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(t) {
      let r = t?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(r);
    }
    GetContextMenuManager(t) {
      let r = this.m_mapManagers.get(t);
      if (!r) {
        let o = t;
        for (; !r && o.opener; )
          (o = o.opener), (r = this.m_mapManagers.get(o));
      }
      return r || ((r = new a1()), this.m_mapManagers.set(t, r)), r;
    }
    SetMenuManager(t, r) {
      U(
        this.m_mapManagers.get(t) === void 0 || !r || t == window,
        `Stomping CContextMenuManager for ${t.document.title}!`,
      ),
        this.m_mapManagers.set(t, r);
    }
    RegisterChildWindow(t, r) {
      return (
        this.m_mapManagers.set(r, this.GetContextMenuManager(t)),
        () => this.m_mapManagers.delete(r)
      );
    }
  },
  f3 = new _1();
function y2(e, t, r) {
  let o,
    C,
    i,
    l = t;
  if (l?.preventDefault && l?.stopPropagation) {
    if (l.shiftKey || (l.altKey && !r?.bRootContextMenu)) return null;
    l.preventDefault(),
      l.stopPropagation(),
      (i = l.currentTarget),
      (o = l.clientX),
      (C = l.clientY);
  } else i = t;
  let a = f3
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(e, i, o, C, r);
  return a.Show(), r?.bCreateHidden && a.Hide(), a;
}
var h = p(V());
function s6(e) {
  let { direction: t, ...r } = e;
  switch (t) {
    case "up":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, h.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function c6(e) {
  let { direction: t, ...r } = e;
  switch (t) {
    case "up":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          fill: "currentColor",
          d: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          fill: "currentColor",
          d: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          d: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, h.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: (0, h.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function a6(e) {
  return (0, h.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: (0, h.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function h6(e) {
  let { alert: t, urgent: r, ...o } = e;
  return r
    ? (0, h.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...o,
        children: [
          (0, h.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, h.jsx)("path", {
            fill: "#FFC82C",
            d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : t
      ? (0, h.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...o,
          children: [
            (0, h.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, h.jsx)("path", {
              fill: "#1A9FFF",
              d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, h.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...o,
          children: (0, h.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, h.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, h.jsx)("path", {
                className: "SVGIcon_Notification_Uvula",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              }),
            ],
          }),
        });
}
function p6(e) {
  return (0, h.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: (0, h.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function u6(e) {
  return (0, h.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...e,
    children: [
      (0, h.jsx)("path", {
        d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, h.jsx)("path", {
        d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function d6(e) {
  return (0, h.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, h.jsx)("path", {
      d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function f6(e) {
  return (0, h.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, h.jsx)("path", {
      d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
var p1 = p(v());
var R2 = p(V()),
  h1 = class h1 extends p1.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = p1.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || "once") == "once";
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(t) {
      this.UpdateObserver(t);
    }
    UpdateObserver(t) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        t &&
        (t.rootMargin != this.m_observer.rootMargin ||
          t.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let r = this.m_refElement.current;
      if (
        (this.m_observer &&
          r != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && r)
      ) {
        let C = { root: this.FindScrollableAncestor(r) };
        this.props.rootMargin && (C.rootMargin = this.props.rootMargin),
          this.props.thresholds && (C.threshold = this.props.thresholds),
          (this.m_observer = e2(r, this.OnIntersection, C));
      }
      this.m_observer &&
        r &&
        r != this.m_elTracked &&
        (this.m_observer.observe(r), (this.m_elTracked = r));
    }
    FindScrollableAncestor(t) {
      return $1(t, (r) => {
        let o = this.props.bHorizontal
          ? window.getComputedStyle(r).overflowX
          : window.getComputedStyle(r).overflowY;
        return !!(
          o == "scroll" ||
          o == "auto" ||
          r.classList.contains(h1.GetScrollableClassname())
        );
      });
    }
    OnIntersection(t, r) {
      let o = !1;
      for (let C of t)
        if (C.isIntersecting) {
          o = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != o &&
        ((this.m_bPreviouslyIntersecting = o),
        this.props.onVisibilityChange && this.props.onVisibilityChange(o),
        o && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: t,
        rootMargin: r,
        trigger: o,
        bHorizontal: C,
        ...i
      } = this.props;
      return (0, R2.jsx)("div", {
        ref: this.m_refElement,
        ...i,
        children: this.props.children,
      });
    }
  };
d([g], h1.prototype, "OnIntersection", 1);
var b2 = h1;
var B2 = p(v());
var g3 = p(v());
var r1 = class e {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(t, r, o = null, C = null) {
    (e.sm_strDomain = t),
      (e.sm_strController = r),
      (e.sm_strMethod = o),
      (e.sm_strSubmethod = C),
      (e.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let t = { domain: e.sm_strDomain, controller: e.sm_strController };
    return (
      e.sm_strMethod && (t.method = e.sm_strMethod),
      e.sm_strSubmethod && (t.submethod = e.sm_strSubmethod),
      t
    );
  }
  static InstrumentLink(t, r, o = null) {
    let C = e.GetLinkParam(r, o);
    return q.AddNavParamToURL(t, C);
  }
  static GetLinkParam(t, r = null) {
    let o;
    if (typeof t != "string") {
      if (t.domain) return q.GetLinkParam(t, r);
      o = t.feature || "";
    }
    let C;
    if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
      return null;
    C = e.sm_strComputedLinkPrefix;
    let i = q.EncodeEventComponent(o);
    return i && ((C += "_" + i), r && (C += "_" + r)), C;
  }
  static ComputeStaticLinkPrefix() {
    return e.sm_strDomain
      ? ((e.sm_strComputedLinkPrefix = q.ComputeLinkPrefix(
          e.sm_strDomain,
          e.sm_strController,
          e.sm_strMethod,
          e.sm_strSubmethod,
        )),
        !0)
      : (U(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var A1 = p(v()),
  L3 = p(V()),
  N6 = A1.createContext({});
var G2 = p(V());
function v3(e) {
  let { children: t, ...r } = e,
    o = j1(),
    C = B2.useMemo(
      () => ({ ...r1.GetDefaultParams(), ...o, ...r }),
      [o, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, G2.jsx)(U1, { ...C, children: t });
}
export {
  Q2 as a,
  b1 as b,
  H as c,
  F4 as d,
  O4 as e,
  U4 as f,
  j4 as g,
  x2 as h,
  Y4 as i,
  X4 as j,
  J4 as k,
  $4 as l,
  Q4 as m,
  q4 as n,
  K4 as o,
  t5 as p,
  e5 as q,
  r5 as r,
  o5 as s,
  C5 as t,
  i5 as u,
  l5 as v,
  H2 as w,
  s1 as x,
  A as y,
  M as z,
  S2 as A,
  G5 as B,
  G as C,
  _5 as D,
  A5 as E,
  a1 as F,
  f3 as G,
  y2 as H,
  Z3 as I,
  s6 as J,
  c6 as K,
  a6 as L,
  h6 as M,
  p6 as N,
  u6 as O,
  d6 as P,
  f6 as Q,
  v3 as R,
  b2 as S,
};
