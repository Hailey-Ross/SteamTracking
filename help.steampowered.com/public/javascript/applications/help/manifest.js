/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9820966";
(() => {
  "use strict";
  var e,
    a,
    n,
    o,
    i,
    t = {},
    r = {};
  function l(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (e = []),
    (l.O = (a, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, i] = e[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(l.O).every((e) => l.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            e.splice(d--, 1);
            var s = o();
            void 0 !== s && (a = s);
          }
        }
        return a;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [n, o, i];
    }),
    (l.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return l.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (l.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ("object" == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      l.r(i);
      var t = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), l.d(i, t), i;
    }),
    (l.d = (e, a) => {
      for (var n in a)
        l.o(a, n) &&
          !l.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (l.f = {}),
    (l.e = (e) =>
      Promise.all(Object.keys(l.f).reduce((a, n) => (l.f[n](e, a), a), []))),
    (l.u = (e) =>
      "javascript/applications/help/" +
      {
        60: "localization/main_spanish-json",
        129: "localization/shared_swedish-json",
        139: "localization/shared_koreana-json",
        198: "localization/main_schinese-json",
        286: "localization/main_ukrainian-json",
        759: "localization/main_koreana-json",
        823: "localization/shared_portuguese-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        976: "greenenvelope",
        1389: "localization/shared_japanese-json",
        1423: "localization/shared_czech-json",
        1721: "localization/shared_arabic-json",
        1724: "localization/main_turkish-json",
        2021: "localization/shared_romanian-json",
        2199: "localization/shared_finnish-json",
        2446: "localization/main_brazilian-json",
        2481: "localization/shared_bulgarian-json",
        2664: "localization/shared_english-json",
        2959: "localization/shared_polish-json",
        3140: "localization/main_greek-json",
        3589: "localization/main_bulgarian-json",
        3594: "localization/shared_brazilian-json",
        3867: "localization/main_polish-json",
        4102: "localization/main_indonesian-json",
        4694: "localization/main_french-json",
        4952: "localization/shared_thai-json",
        5052: "localization/main_english-json",
        5103: "localization/main_sc_schinese-json",
        5388: "localization/main_norwegian-json",
        5553: "localization/shared_tchinese-json",
        5803: "localization/shared_latam-json",
        6120: "localization/shared_norwegian-json",
        6428: "localization/main_italian-json",
        6430: "localization/shared_dutch-json",
        6472: "localization/shared_turkish-json",
        6577: "localization/shared_russian-json",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        7345: "localization/main_hungarian-json",
        7442: "localization/shared_schinese-json",
        7553: "localization/main_romanian-json",
        7696: "localization/shared_italian-json",
        7724: "localization/main_thai-json",
        8021: "localization/main_russian-json",
        8291: "localization/shared_danish-json",
        8443: "localization/shared_sc_schinese-json",
        8522: "localization/shared_indonesian-json",
        8547: "localization/main_finnish-json",
        8674: "localization/shared_french-json",
        8724: "localization/main_german-json",
        8749: "localization/main_tchinese-json",
        8872: "localization/shared_greek-json",
        9053: "localization/shared_hungarian-json",
        9298: "localization/shared_ukrainian-json",
        9387: "localization/main_portuguese-json",
        9453: "localization/main_swedish-json",
        9515: "localization/main_czech-json",
        9783: "localization/main_latam-json",
        9857: "localization/main_japanese-json",
        9869: "localization/shared_vietnamese-json",
        9914: "localization/main_dutch-json",
      }[e] +
      ".js?contenthash=" +
      {
        60: "52d36db8a3eb8ce8bc5e",
        129: "60ef29594e477e823172",
        139: "332d61290ba969fb9b18",
        198: "83dbddd087af3cc381ea",
        286: "f528cf3967e461df2ca3",
        759: "9cb42abad86b3dabb6c8",
        823: "fc256ab9062975dbf7f4",
        831: "10dc211dfd129c6a445e",
        833: "f3f0b28b561cb224bdc4",
        976: "6833fb7f1109cc6e6c08",
        1389: "c1b9af4ea1e9b1e7eb4d",
        1423: "2019d928824623668857",
        1721: "c634214059eacac26a24",
        1724: "edf9cc0e15f8d752612d",
        2021: "960eeff0bad5732c9172",
        2199: "64fc2eb03d47c701df8f",
        2446: "1e14cfdf0fc0983649b4",
        2481: "dec93746ea1ddf96120e",
        2664: "f5e14d8f5129cf6c8e43",
        2959: "1408e3253ab14737b523",
        3140: "5ff8d86b8d7df01c5d0b",
        3589: "2d4113d858d09aaabfcb",
        3594: "00a0a157ba468ace216f",
        3867: "5fdc84016800f0b3c40b",
        4102: "be3069fad7610e99339b",
        4694: "59882d00b140e10d48f6",
        4952: "4f87fbce3ab7ca13a5ef",
        5052: "9fb80ef333ae1a1994c6",
        5103: "562df98ec7b9d228b91b",
        5388: "710efa21ee07c9414d56",
        5553: "ac3448b51330bc12d46f",
        5803: "e67126e5a26e88844981",
        6120: "5047552a57ed13c83881",
        6428: "6afb711ae8d4f17c01cd",
        6430: "70a1ce7c10edf069cecd",
        6472: "9426b66a4365913be541",
        6577: "1ef53dacf8596379324d",
        6752: "0c5163ee77ecfdca2ea8",
        6888: "e1e63dc33d79f051165c",
        7345: "99ee2c8fc99ede9a068c",
        7442: "f71b3db62bab86237b0c",
        7553: "1428a4ee622040531f51",
        7696: "9b4c567e8ffe52b0b051",
        7724: "89f01c4ce3a9b216de12",
        8021: "a9f8dff17bd16871e4c5",
        8291: "c198a597489b9cc9a530",
        8443: "505a73108fc538196a3d",
        8522: "879652a3f3372da41e12",
        8547: "03361207aad5f54dc1a7",
        8674: "98ab18334b029fb1df29",
        8724: "0b65723fc78210be4b29",
        8749: "3fc185a76a54a0d88045",
        8872: "71a864976b07ff17834d",
        9053: "cc704e8ca330a5274de9",
        9298: "e978485dccf6601bb589",
        9387: "bc0a6b1e79938252231e",
        9453: "e7f2b091158c018a274a",
        9515: "f4d42e6a69b6661681a8",
        9783: "f4daed142667ba86fecc",
        9857: "cb15ede643a0292bc2ab",
        9869: "5140c70af25d50ea5041",
        9914: "073440f813341702a1c0",
      }[e]),
    (l.miniCssF = (e) =>
      "css/applications/help/greenenvelope.css?contenthash=21f6413aff50f54e7633"),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (o = {}),
    (i = "Help:"),
    (l.l = (e, a, n, t) => {
      if (o[e]) o[e].push(a);
      else {
        var r, c;
        if (void 0 !== n)
          for (
            var s = document.getElementsByTagName("script"), d = 0;
            d < s.length;
            d++
          ) {
            var f = s[d];
            if (
              f.getAttribute("src") == e ||
              f.getAttribute("data-webpack") == i + n
            ) {
              r = f;
              break;
            }
          }
        r ||
          ((c = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          l.nc && r.setAttribute("nonce", l.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = e)),
          (o[e] = [a]);
        var b = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[e];
            if (
              (delete o[e],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = b.bind(null, r.onerror)),
          (r.onload = b.bind(null, r.onload)),
          c && document.head.appendChild(r);
      }
    }),
    (l.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (l.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var o = l.miniCssF(e),
                i = l.p + o;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (r = n[o]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === e || i === a))
                      return r;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var r;
                    if (
                      (i = (r = t[o]).getAttribute("data-href")) === e ||
                      i === a
                    )
                      return r;
                  }
                })(o, i)
              )
                return a();
              ((e, a, n, o, i) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        o();
                      else {
                        var r = n && n.type,
                          l = (n && n.target && n.target.href) || a,
                          c = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              l +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = r),
                          (c.request = l),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(c);
                      }
                    }),
                  (t.href = a),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(e, i, null, a, n);
            }),
          a = { 4556: 0 };
        l.f.miniCss = (n, o) => {
          a[n]
            ? o.push(a[n])
            : 0 !== a[n] &&
              { 976: 1 }[n] &&
              o.push(
                (a[n] = e(n).then(
                  () => {
                    a[n] = 0;
                  },
                  (e) => {
                    throw (delete a[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 4556: 0 };
      (l.f.j = (a, n) => {
        var o = l.o(e, a) ? e[a] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != a) {
            var i = new Promise((n, i) => (o = e[a] = [n, i]));
            n.push((o[2] = i));
            var t = l.p + l.u(a),
              r = new Error();
            l.l(
              t,
              (n) => {
                if (l.o(e, a) && (0 !== (o = e[a]) && (e[a] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (l.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var o,
            i,
            [t, r, c] = n,
            s = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (o in r) l.o(r, o) && (l.m[o] = r[o]);
            if (c) var d = c(l);
          }
          for (a && a(n); s < t.length; s++)
            (i = t[s]), l.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return l.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
