import { a as R } from "./chunk-BKGYRNQI.js";
import { e as T } from "./chunk-XSIUNGIQ.js";
var o = T(R());
var l = T(R());
function p(e, t) {
  e != null &&
    (typeof e == "function" ? e(t) : "current" in e && (e.current = t));
}
function v(...e) {
  return l.useCallback((t) => {
    for (let n of e) p(n, t);
  }, e);
}
function k(...e) {
  if (!(!e || e.length === 0))
    return e.length === 1
      ? e[0]
      : (t) =>
          e.forEach((n) => {
            if (n) typeof n == "function" ? n(t) : (n.current = t);
            else return;
          });
}
function h(e, t) {
  let n = l.useRef();
  return l.useCallback((i) => {
    n.current && n.current(), (n.current = e(i));
  }, t);
}
function H(e) {
  let t = l.useRef(null),
    n = v(e, t);
  return { refWithValue: t, refForElement: n };
}
function C(e, t) {
  let n = l.useRef(!1);
  l.useLayoutEffect(
    () => () => {
      n.current && p(e, void 0);
    },
    [e],
  ),
    l.useLayoutEffect(() => {
      (t || n.current) && (p(e, t), (n.current = !!t));
    }, [e, t]);
}
function I() {
  let [, e] = o.useState(0);
  return o.useCallback(() => e((n) => n + 1), []);
}
function O(e, t, n) {
  return h(
    (r) => {
      if (!(!r || !t))
        return r.addEventListener(e, t, n), () => r.removeEventListener(e, t);
    },
    [e, t],
  );
}
function L(e, t, n, r) {
  o.useEffect(() => {
    if (!(!e || !n))
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }, [e, t, n]);
}
function D(e, t, n, r) {
  return L(
    e,
    "message",
    function (i) {
      t.includes(i.data) && n(this, i);
    },
    r,
  );
}
function N(e, t) {
  o.useLayoutEffect(() => {
    if (!t || !e) return;
    let n = e.Register(t);
    return () => n.Unregister();
  }, [e, t]);
}
function F(e) {
  let [t, n] = o.useState(e?.Value);
  return (
    o.useEffect(() => {
      if (e == null) return;
      let r = e.Subscribe(n);
      return n(e.Value), r?.Unsubscribe;
    }, [e]),
    t
  );
}
function x(e, t) {
  let [n, r] = o.useState(e);
  return (
    o.useEffect(() => {
      if (e) {
        r(!0);
        return;
      } else {
        let i = window.setTimeout(() => r(!1), t);
        return () => window.clearTimeout(i);
      }
    }, [e, t]),
    n
  );
}
function W(e, t) {
  return x(e, t) || e;
}
function A(e = !1) {
  let [t, n] = o.useState(e),
    r = o.useCallback(() => n(!0), []),
    i = o.useCallback(() => n(!1), []);
  return [t, r, i];
}
function g(e, ...t) {
  let n = [],
    r = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    i = 0,
    s;
  for (; (s = r.exec(e)); ) {
    (i += s[0].length), n.push(s[1]);
    let f = parseInt(s[2]),
      a = s[3] || "",
      c = g(a, ...t),
      d = (f >= 1 && f <= t.length ? t[f - 1] : null)
        ? o.cloneElement(t[f - 1], {}, a ? c : null)
        : a;
    n.push(d);
  }
  return n.push(e.slice(i)), o.createElement(o.Fragment, null, ...n);
}
function E(e) {
  return e != null && e.focus !== void 0;
}
function z(e, t) {
  let n = t;
  for (; n; ) {
    if (
      (n.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (n = n.parentNode.host),
      n == e)
    )
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function Y(e, t) {
  let n = 0,
    r = 0;
  return (
    t.right < e.left
      ? (n = e.left - t.right)
      : t.left > e.right && (n = t.left - e.right),
    t.bottom < e.top
      ? (r = e.top - t.bottom)
      : t.top > e.bottom && (r = t.top - e.bottom),
    Math.sqrt(n * n + r * r)
  );
}
function G(e, t) {
  return {
    top: e.screenTop + t.top,
    bottom: e.screenTop + t.bottom,
    left: e.screenLeft + t.left,
    right: e.screenLeft + t.right,
  };
}
function $(e) {
  let t = 1,
    n = e;
  for (; n != null && n.tagName != "HTML"; ) {
    let r = getComputedStyle(n);
    if (r.zoom) {
      let i = Number.parseFloat(r.zoom);
      isNaN(i) || (t *= i);
    }
    n = n.parentElement;
  }
  return t;
}
function q(e) {
  let t;
  return (
    e && E(e.currentTarget) && (t = e.currentTarget.ownerDocument.defaultView),
    t
  );
}
function X(e) {
  let t;
  return e && (t = e.ownerDocument.defaultView), t;
}
function j(e) {
  return e.nodeName === "INPUT";
}
function Z(e, t) {
  switch (e) {
    case "TEXTAREA":
      return !0;
    case "INPUT":
      switch (t) {
        case "date":
        case "datetime-local":
        case "datetime":
        case "email":
        case "month":
        case "number":
        case "password":
        case "search":
        case "tel":
        case "text":
        case "time":
        case "url":
        case "week":
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function M(e, t) {
  let n = e?.parentElement;
  for (; n; ) {
    if (E(n)) {
      if (!t || t == "x") {
        let r = window.getComputedStyle(n);
        if (
          r.overflowX == "scroll" ||
          r.overflowX == "auto" ||
          r.position == "fixed"
        )
          break;
      }
      if (!t || t == "y") {
        let r = window.getComputedStyle(n);
        if (
          r.overflowY == "scroll" ||
          r.overflowY == "auto" ||
          r.position == "fixed"
        )
          break;
      }
    }
    n = n.parentElement;
  }
  return E(n) ? n : null;
}
function J(e, t) {
  let n = [],
    r = e;
  for (; (r = M(r, t)); ) n.push(r);
  return n;
}
function Q(e, t) {
  let n = e;
  for (; n; ) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function ee() {
  return y(document);
}
function y(e) {
  let t = {};
  return (
    e.querySelectorAll('link[rel="stylesheet"]').forEach((r) => {
      t[r.href] = r;
    }),
    t
  );
}
function te(e, t) {
  w(e.document, t, !0);
}
function w(e, t, n) {
  let r = Object.assign({}, t),
    i = e.getElementsByTagName("head")[0],
    s = i.getElementsByTagName("link"),
    f = s.length;
  for (let c = 0; c < f; ++c) {
    let u = s[c];
    r[u.href] ? delete r[u.href] : n && u.parentNode?.removeChild(u);
  }
  let a = [];
  for (let c in r) {
    let u = r[c],
      d = e.createElement("link");
    for (let m = 0; m < u.attributes.length; m++) {
      let b = u.attributes.item(m);
      d.setAttribute(b.name, b.value);
    }
    a.push(d);
  }
  return i.prepend(...a), a;
}
export {
  p as a,
  v as b,
  k as c,
  h as d,
  H as e,
  C as f,
  I as g,
  O as h,
  L as i,
  D as j,
  N as k,
  F as l,
  W as m,
  A as n,
  g as o,
  E as p,
  z as q,
  Y as r,
  G as s,
  $ as t,
  q as u,
  X as v,
  j as w,
  Z as x,
  M as y,
  J as z,
  Q as A,
  ee as B,
  te as C,
  w as D,
};
