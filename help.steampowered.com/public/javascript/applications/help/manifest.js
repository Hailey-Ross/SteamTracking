/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8456330";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t,
    r,
    c = {},
    l = {};
  function s(a) {
    var e = l[a];
    if (void 0 !== e) return e.exports;
    var n = (l[a] = { id: a, loaded: !1, exports: {} });
    return c[a].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = c),
    (a = []),
    (s.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(s.O).every((a) => s.O[a](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            a.splice(d--, 1);
            var l = o();
            void 0 !== l && (e = l);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (s.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return s.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (s.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      s.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), s.d(i, t), i;
    }),
    (s.d = (a, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (s.f = {}),
    (s.e = (a) =>
      Promise.all(Object.keys(s.f).reduce((e, n) => (s.f[n](a, e), e), []))),
    (s.u = (a) =>
      "javascript/applications/help/" +
      {
        27: "localization/shared_japanese-json",
        113: "localization/main_romanian-json",
        131: "localization/shared_english-json",
        146: "localization/shared_indonesian-json",
        301: "localization/main_russian-json",
        617: "localization/main_portuguese-json",
        755: "localization/shared_schinese-json",
        1133: "localization/main_bulgarian-json",
        1195: "localization/main_tchinese-json",
        1261: "localization/shared_norwegian-json",
        1311: "localization/main_greek-json",
        1579: "localization/shared_ukrainian-json",
        1953: "localization/shared_finnish-json",
        2138: "localization/shared_thai-json",
        2351: "localization/main_swedish-json",
        2557: "localization/main_ukrainian-json",
        2603: "localization/main_indonesian-json",
        2738: "localization/shared_turkish-json",
        2822: "localization/shared_greek-json",
        3038: "localization/main_french-json",
        3068: "greenenvelope",
        3298: "localization/shared_brazilian-json",
        3602: "localization/shared_dutch-json",
        4097: "localization/shared_spanish-json",
        4183: "localization/shared_danish-json",
        4358: "localization/shared_sc_schinese-json",
        4445: "localization/shared_german-json",
        4469: "localization/shared_koreana-json",
        4487: "localization/shared_swedish-json",
        4513: "localization/shared_italian-json",
        4729: "localization/shared_french-json",
        5012: "localization/main_italian-json",
        5277: "localization/main_latam-json",
        5279: "localization/shared_hungarian-json",
        5425: "libraries~c11312a05",
        5493: "localization/main_thai-json",
        5757: "localization/main_norwegian-json",
        6091: "localization/main_koreana-json",
        6403: "localization/shared_russian-json",
        6415: "localization/main_brazilian-json",
        6457: "localization/main_turkish-json",
        6844: "localization/shared_polish-json",
        6962: "localization/main_dutch-json",
        7629: "localization/main_schinese-json",
        7660: "localization/shared_romanian-json",
        7769: "localization/main_german-json",
        7781: "localization/shared_bulgarian-json",
        7832: "localization/shared_arabic-json",
        7901: "localization/main_vietnamese-json",
        8085: "localization/shared_czech-json",
        8274: "localization/main_hungarian-json",
        8282: "localization/main_czech-json",
        8291: "localization/main_polish-json",
        8427: "localization/main_finnish-json",
        8433: "localization/shared_vietnamese-json",
        8525: "localization/main_spanish-json",
        8592: "localization/main_danish-json",
        9233: "localization/main_japanese-json",
        9389: "localization/main_sc_schinese-json",
        9547: "localization/shared_tchinese-json",
        9665: "localization/main_english-json",
        9854: "localization/shared_portuguese-json",
        9951: "localization/shared_latam-json",
      }[a] +
      ".js?contenthash=" +
      {
        27: "305da52fe3d794221223",
        113: "f7d3d65afc7b0e267a79",
        131: "372bec2259d9c1a017ed",
        146: "6535159f3d81833eb66f",
        301: "39a0e736242a5c0a21bb",
        617: "0037e02f40fd8079dd8d",
        755: "5af7a9b9973bfead9eb2",
        1133: "3dec3f5c468b415d08e2",
        1195: "18c451f2e2cd70e89fc8",
        1261: "d1693e6961806f3b4277",
        1311: "afe19b4ccbb10fc9e943",
        1579: "dc6fd543bd97b54a0c3d",
        1953: "81ff060044d456d794bb",
        2138: "e9fd282037a39376b746",
        2351: "c9632a3a1bfdb307a1d9",
        2557: "eb5bd7a4caf4dd05fcf9",
        2603: "6dd6f22ab89ad8ba0b78",
        2738: "66e7926079307b20b0a7",
        2822: "c64c07dbb06d342a6573",
        3038: "34388b715f750eaeb721",
        3068: "6b58781194726ff218c5",
        3298: "13252b2a5bda6380753c",
        3602: "fd0792a90bf0672ae9ff",
        4097: "5d0bb1bd29bd8f626626",
        4183: "b68759f5b21c26701d06",
        4358: "6c6197fe3b5cf018021e",
        4445: "3ea3641ecbc97536d45c",
        4469: "b33a3f8a747750a47e73",
        4487: "96d45494874ed713bc09",
        4513: "83d6012521a324f0e93b",
        4729: "4525eafca888d555007d",
        5012: "388fe80aa4bcea5a2d07",
        5277: "720c1b788fec0f79ace8",
        5279: "2d2080cb47059a3c69f3",
        5425: "f3fb6d754a97556fa15d",
        5493: "c3b4c90f7952bcbededa",
        5757: "e95d37642dd762d0bb9d",
        6091: "044ee68e7da5bac87bbc",
        6403: "b415e44a968d3fad889b",
        6415: "0260cb14a0168b2882b2",
        6457: "e59a1ac7a964b774d2c7",
        6844: "18d9237ee5b950a230ff",
        6962: "6178035caddad9ad6cd9",
        7629: "9376d43b96c2261850f8",
        7660: "04694d9a13a21ab3f04e",
        7769: "3e3fa97d5f6152d2502c",
        7781: "3f960ee2eb89cbd2a7e9",
        7832: "29fd6d9d173a1c6e1379",
        7901: "ff1b71649ff6ce41491d",
        8085: "55852ad015d31cdf74c3",
        8274: "f0e5a42e065306b306ff",
        8282: "52bc2fa22c99ca2f8cb9",
        8291: "1aa5b9663522880da476",
        8427: "7775180bc1df54afec62",
        8433: "42f18b106bef099c1dc3",
        8525: "9e09063cb2becf8dc415",
        8592: "f0cff1d2329d13ad7556",
        9233: "cd3dd761267e89820a23",
        9389: "7819710f483b4651448b",
        9547: "097ab8100d08465b8cf3",
        9665: "5e042a69bdde05d584cf",
        9854: "318204fde660845e4ac3",
        9951: "dda9b3e0818df7828b6e",
      }[a]),
    (s.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=7a07022f9d922a4df973"),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (s.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var f = l[d];
            if (
              f.getAttribute("src") == a ||
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
          s.nc && r.setAttribute("nonce", s.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
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
    (s.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (s.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (() => {
      var a;
      s.g.importScripts && (a = s.g.location + "");
      var e = s.g.document;
      if (!a && e && (e.currentScript && (a = e.currentScript.src), !a)) {
        var n = e.getElementsByTagName("script");
        n.length && (a = n[n.length - 1].src);
      }
      if (!a)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (a = a
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = a + "../../../");
    })(),
    (t = (a) =>
      new Promise((e, n) => {
        var o = s.miniCssF(a),
          i = s.p + o;
        if (
          ((a, e) => {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var i =
                (r = n[o]).getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (i === a || i === e)) return r;
            }
            var t = document.getElementsByTagName("style");
            for (o = 0; o < t.length; o++) {
              var r;
              if ((i = (r = t[o]).getAttribute("data-href")) === a || i === e)
                return r;
            }
          })(o, i)
        )
          return e();
        ((a, e, n, o) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (t) => {
                if (((i.onerror = i.onload = null), "load" === t.type)) n();
                else {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    c = (t && t.target && t.target.href) || e,
                    l = new Error(
                      "Loading CSS chunk " + a + " failed.\n(" + c + ")",
                    );
                  (l.code = "CSS_CHUNK_LOAD_FAILED"),
                    (l.type = r),
                    (l.request = c),
                    i.parentNode.removeChild(i),
                    o(l);
                }
              }),
            (i.href = e),
            document.head.appendChild(i);
        })(a, i, e, n);
      })),
    (r = { 6700: 0 }),
    (s.f.miniCss = (a, e) => {
      r[a]
        ? e.push(r[a])
        : 0 !== r[a] &&
          { 3068: 1 }[a] &&
          e.push(
            (r[a] = t(a).then(
              () => {
                r[a] = 0;
              },
              (e) => {
                throw (delete r[a], e);
              },
            )),
          );
    }),
    (() => {
      var a = { 6700: 0 };
      (s.f.j = (e, n) => {
        var o = s.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (6700 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = s.p + s.u(e),
              r = new Error();
            s.l(
              t,
              (n) => {
                if (s.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + e,
              e,
            );
          } else a[e] = 0;
      }),
        (s.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, c] = n,
            l = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) s.o(r, o) && (s.m[o] = r[o]);
            if (c) var d = c(s);
          }
          for (e && e(n); l < t.length; l++)
            (i = t[l]), s.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return s.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
