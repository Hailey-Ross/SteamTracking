import { b as l } from "./chunk-6R5YGRMU.js";
import { r as o, w as s } from "./chunk-WSHEPKLJ.js";
import { e as i } from "./chunk-MUQLA4BT.js";
import { m as a } from "./chunk-XA7OZ6YH.js";
function u(t) {
  return ["PlayerLinkDetails", t];
}
function y(t, r) {
  let e =
    typeof r == "number"
      ? o.InitFromAccountID(r, a.EUNIVERSE).ConvertTo64BitString()
      : r;
  return {
    queryKey: u(e),
    queryFn: async () => {
      if (e) {
        let n = await t.load(e);
        return delete n?.private_data?.account_name, n;
      }
      return null;
    },
    enabled: !!e,
  };
}
function L(t) {
  let r = s(),
    e = l(r);
  return i(y(e, t));
}
export { y as a, L as b };
