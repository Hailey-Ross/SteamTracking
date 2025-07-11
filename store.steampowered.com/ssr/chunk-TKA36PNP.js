import {
  B as _,
  D as R,
  E as h,
  d as C,
  o as P,
  v as N,
  z as E,
} from "./chunk-MZ74V35G.js";
import { b as d } from "./chunk-IUPFHTLM.js";
import { a as D } from "./chunk-HUTYBMB7.js";
import { p as f } from "./chunk-XA7OZ6YH.js";
import { a as L } from "./chunk-JCDGC4MQ.js";
import { e as s } from "./chunk-QFZBH32V.js";
var r = s(D()),
  a = s(L());
var l = s(f()),
  B = a.default.createContext({ Component: h });
var W = a.default.forwardRef(function (M, b) {
  let {
      "flow-children": x,
      onActivate: i,
      onCancel: p,
      focusClassName: y,
      focusWithinClassName: O,
      ...T
    } = M,
    { elemProps: e, navOptions: t, gamepadEvents: o } = R(T),
    c = {},
    m = P(x);
  m != 0 && (c.layout = m),
    i && ((e.onClick = e.onClick || i), (o.onOKButton = o.onOKButton || i)),
    o.onOKButton &&
      t.focusable === void 0 &&
      t.focusableIfNoChildren === void 0 &&
      (t.focusable = !0),
    p && (o.onCancelButton = o.onCancelButton || p);
  let { ref: u, node: n } = _({ ...c, ...t }),
    g = N();
  (e.className = (0, r.default)(e.className, "Panel", g && "Focusable")),
    C(o, u);
  let v = d(u, b);
  (t.focusable || t.focusableIfNoChildren) &&
    (!n || !n.Tree.BUseVirtualFocus()) &&
    (e.tabIndex = e.tabIndex || 0),
    t.focusable && (i || o.onOKButton) && (e.role ??= "button");
  let F = (0, a.useContext)(B).Component;
  return (0, l.jsx)(E.Provider, {
    value: n,
    children: n
      ? (0, l.jsx)(F, {
          ...e,
          divRef: v,
          node: n,
          focusClassName: (0, r.default)(y, "gpfocus"),
          focusWithinClassName: (0, r.default)(O, "gpfocuswithin"),
        })
      : (0, l.jsx)("div", { ...e, ref: v }),
  });
});
export { W as a };
