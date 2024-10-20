/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9264262";
(() => {
  "use strict";
  var e,
    a,
    n,
    s,
    d,
    c = {},
    r = {};
  function i(e) {
    var a = r[e];
    if (void 0 !== a) return a.exports;
    var n = (r[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.m = c),
    (e = []),
    (i.O = (a, n, s, d) => {
      if (!n) {
        var c = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [n, s, d] = e[b], r = !0, f = 0; f < n.length; f++)
            (!1 & d || c >= d) && Object.keys(i.O).every((e) => i.O[e](n[f]))
              ? n.splice(f--, 1)
              : ((r = !1), d < c && (c = d));
          if (r) {
            e.splice(b--, 1);
            var o = s();
            void 0 !== o && (a = o);
          }
        }
        return a;
      }
      d = d || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
      e[b] = [n, s, d];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var d = Object.create(null);
      i.r(d);
      var c = {};
      a = a || [null, n({}), n([]), n(n)];
      for (var r = 2 & s && e; "object" == typeof r && !~a.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), i.d(d, c), d;
    }),
    (i.d = (e, a) => {
      for (var n in a)
        i.o(a, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, n) => (i.f[n](e, a), a), []))),
    (i.u = (e) =>
      "javascript/applications/appmgmt/" +
      ({
        67: "main_czech-json",
        144: "marketing_japanese-json",
        407: "marketing_indonesian-json",
        414: "sales_polish-json",
        478: "marketing_danish-json",
        494: "sales_hungarian-json",
        539: "main_finnish-json",
        614: "marketing_hungarian-json",
        809: "marketing_thai-json",
        934: "sales_danish-json",
        976: "shared_thai-json",
        1048: "sales_japanese-json",
        1065: "marketing_brazilian-json",
        1084: "libraries~4ec87c66d",
        1101: "pricingtool",
        1225: "shared_swedish-json",
        1227: "sales_greek-json",
        1337: "main_japanese-json",
        1351: "sales_turkish-json",
        1369: "main_vietnamese-json",
        1396: "sales_sc_schinese-json",
        1449: "shared_bulgarian-json",
        1531: "shared_italian-json",
        1543: "sales_spanish-json",
        1606: "main_brazilian-json",
        1784: "libraries~4eb095478",
        1973: "shared_japanese-json",
        2201: "libraries~e459d0d7a",
        2206: "sales_russian-json",
        2256: "shared_english-json",
        2320: "shared_norwegian-json",
        2435: "shared_latam-json",
        2455: "storeadmin",
        2500: "main_spanish-json",
        2543: "main_latam-json",
        2632: "shared_spanish-json",
        2702: "main_french-json",
        2708: "main_italian-json",
        2726: "marketing_polish-json",
        2749: "shared_romanian-json",
        2785: "libraries~5da2a553c",
        2842: "sales_portuguese-json",
        2855: "marketing_norwegian-json",
        2946: "libraries~01f083eeb",
        2954: "shared_ukrainian-json",
        2992: "marketing_koreana-json",
        2995: "logoedtior",
        3025: "contenthubpages",
        3216: "sales_czech-json",
        3219: "chunk~916a49bc4",
        3266: "main_dutch-json",
        3350: "deadlines",
        3374: "main_schinese-json",
        3436: "marketing_finnish-json",
        3562: "sales_bulgarian-json",
        3569: "sales_thai-json",
        3701: "main_swedish-json",
        3710: "shared_arabic-json",
        3810: "libraries~8fdaa6e5d",
        3833: "marketing_ukrainian-json",
        3872: "marketing_tchinese-json",
        3912: "marketing_vietnamese-json",
        3940: "main_thai-json",
        4072: "chunk~8fdaa6e5d",
        4153: "main_romanian-json",
        4160: "chunk~bb5324543",
        4182: "sales_swedish-json",
        4226: "steamdeck",
        4227: "chunk~fbdfc9496",
        4262: "steamml",
        4268: "events",
        4372: "sales_finnish-json",
        4419: "main_portuguese-json",
        4893: "main_bulgarian-json",
        4917: "main_tchinese-json",
        4985: "resquemsg",
        5018: "shared_french-json",
        5027: "sdrconnections",
        5110: "shared_dutch-json",
        5136: "recappages",
        5183: "sales_norwegian-json",
        5193: "libraries~511d96142",
        5231: "marketing_english-json",
        5232: "sales_latam-json",
        5240: "sales_tchinese-json",
        5241: "shared_tchinese-json",
        5467: "chunk~901a9da66",
        5484: "main_greek-json",
        5605: "sales_dutch-json",
        5791: "sales_indonesian-json",
        5839: "chunk~689bb7175",
        5841: "libraries~e9c7aadaf",
        5933: "steamlearn",
        5970: "chunk~2caae0244",
        6031: "shared_finnish-json",
        6060: "chunk~01f083eeb",
        6103: "sales_english-json",
        6149: "shared_vietnamese-json",
        6159: "main_koreana-json",
        6165: "shared_hungarian-json",
        6208: "shared_german-json",
        6224: "sales_vietnamese-json",
        6236: "main_german-json",
        6239: "shared_portuguese-json",
        6343: "timelinemarkers",
        6383: "sales_italian-json",
        6403: "marketing_schinese-json",
        6459: "sales_schinese-json",
        6523: "shared_danish-json",
        6542: "libraries~9d44baec0",
        6562: "shared_brazilian-json",
        6589: "main_russian-json",
        6716: "marketing_sc_schinese-json",
        6728: "marketing_latam-json",
        6759: "marketing_italian-json",
        6845: "marketing_dutch-json",
        6948: "main_norwegian-json",
        6966: "login",
        6979: "main_polish-json",
        6995: "libraries~65c77a859",
        7064: "marketing_czech-json",
        7352: "chunk~9e65e27a0",
        7378: "libraries~45b6949a4",
        7383: "adminpromoreviewdashboard",
        7439: "marketing_spanish-json",
        7499: "chunk~e9c7aadaf",
        7539: "shared_koreana-json",
        7591: "shared_czech-json",
        7625: "main_hungarian-json",
        7631: "sales_french-json",
        7633: "sales_brazilian-json",
        7681: "sales_ukrainian-json",
        7786: "shared_schinese-json",
        7796: "main_turkish-json",
        7798: "main_ukrainian-json",
        7926: "marketing_russian-json",
        8025: "shared_russian-json",
        8306: "shared_indonesian-json",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
        8585: "marketing_german-json",
        8591: "chunk~9393bd9c1",
        8632: "libraries~2caae0244",
        8718: "marketing_swedish-json",
        8755: "marketing_greek-json",
        8758: "chunk~4b4a4243d",
        8801: "sales_german-json",
        8932: "libraries~4b4a4243d",
        8967: "shared_polish-json",
        8995: "chunk~5da2a553c",
        9027: "shared_sc_schinese-json",
        9152: "shared_turkish-json",
        9188: "main_english-json",
        9207: "marketing_french-json",
        9391: "marketing_turkish-json",
        9431: "main_danish-json",
        9566: "main_indonesian-json",
        9650: "marketing_bulgarian-json",
        9712: "shared_greek-json",
        9730: "marketing_portuguese-json",
        9747: "chunk~e459d0d7a",
        9812: "sales_romanian-json",
        9916: "marketing_romanian-json",
        9992: "sales_koreana-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        67: "446f489197d9a99c4da0",
        144: "b562c661233a53c77aef",
        407: "0fa7eda9d4702949e298",
        414: "b6e192f88fa418a88714",
        478: "67dbfec06a27186dc643",
        494: "487c1987a3fd2653d7db",
        539: "7575a4a6b1632ea6db9a",
        614: "b11f901d2d4a81358243",
        809: "27a89228dea38e8cfaa5",
        934: "1af69801894f42265b44",
        976: "1f7dc73da264fdbdfafe",
        1048: "8c8649fb2bcbad8f462f",
        1065: "7b06772a52948c22777b",
        1084: "55e91c7aa6bd8136de87",
        1101: "20ccf0eb6f7c5b2f9c09",
        1225: "21efddc6834ff785eb5a",
        1227: "80d5d044fd079749aae1",
        1337: "e85b17b0a26af8ee3c41",
        1351: "c9c860143e0be31645aa",
        1369: "8969a139f48966c877b7",
        1396: "f743fc982a08a30cfb3a",
        1449: "02c98570831e6397e363",
        1531: "578bfd4595330f0fbefa",
        1543: "189440fdb6f5199790f0",
        1606: "64c20bd22fa54e779e18",
        1784: "586c9bdaae198af54af0",
        1973: "3422b3ef19df37598bf2",
        2201: "49cc10685864f40c9593",
        2206: "51853f6beab5f5f67018",
        2256: "80d84e6bff7b01ff68e7",
        2320: "35a9f5c05c748bf3780f",
        2435: "fafc654384086750d7a3",
        2455: "47ca0e07fda9689da07f",
        2500: "1a2637f2b1e5a8eefc44",
        2543: "926c9114a3991d97fe48",
        2632: "d2e4673627aa6530330a",
        2702: "9877a92537bc73273672",
        2708: "13aba6f24e32f63fa33a",
        2726: "99f861efb65ec5140536",
        2749: "ef2ab4dc31d77986be28",
        2785: "92a0c4e49637e0cfff13",
        2842: "c82f16e8b0b51414def3",
        2855: "b997339d615f265f149c",
        2946: "5a623db960fe744ba02a",
        2954: "9154b10603854e75a184",
        2992: "312adbddaf87d5b001c3",
        2995: "d9662877d5dffd11b4fa",
        3025: "921eee5313ac6a5dbd9f",
        3216: "e58b21a0dd49d166d5af",
        3219: "d29131607251fd36e8b2",
        3266: "f1352f07c9ad189342a1",
        3350: "b28e14232513a5247abf",
        3374: "2cbba5dfa4d35253be1f",
        3436: "56c22a9c9edc3731c12f",
        3562: "d9f2e4024854ac290bbb",
        3569: "f7cbc41a4bb09c6ab154",
        3701: "a2f1abaecc7c68385c41",
        3710: "9f0600a2ec6513b3c14b",
        3810: "268d657e3d71178a3b4a",
        3833: "570ca46f2586269634bb",
        3872: "6d443b2c15eadfb58676",
        3912: "501e40ac916ce880ccb7",
        3940: "8383ee9c44c8332ea6ec",
        4072: "0065bcf826d6e39a0200",
        4153: "9020e92c99e9395e917f",
        4160: "b8fe846d434a3fa572ac",
        4182: "27929ffba9840278b2cf",
        4226: "819c6a6883f8feaa67e8",
        4227: "fc8115b2d4b12f551351",
        4262: "d34414ea8b31503ab798",
        4268: "993abac0f3ab589e6747",
        4372: "3e964f239c254d3d5351",
        4419: "e75a3db12c58333225a0",
        4893: "e3f5384e9a1c32e112fa",
        4917: "1bac887cd0d6e60b5c89",
        4985: "58c9819c61959f452130",
        5018: "f4d2bf33074da9db818d",
        5027: "8785a73df8e5dd468157",
        5110: "6fc3ea5bd91a8dd24319",
        5136: "ab57f0b05a572319d920",
        5183: "edb513dfe0601e59eef0",
        5193: "da42aa93a400e7ca8ff4",
        5231: "8d35d2c168148d961e4b",
        5232: "704896fc38e524200353",
        5240: "a31deb3e11d3d564a507",
        5241: "39c56806771c26f9075d",
        5467: "186fcfee415f076bf3ed",
        5484: "b921d18b74a9f0bc40bc",
        5605: "c8eee0c9e5fad2d19815",
        5791: "24f444c42ad137daabc5",
        5839: "f6918593568b9decfb88",
        5841: "82e88ecdbd59e37477df",
        5933: "0890279d2fcc46a55322",
        5970: "4c16b8f10577743e48b6",
        6031: "1528769d8d6f7a48309b",
        6060: "2b0d4eafda93395058cf",
        6103: "e65bc3c7988779ee1738",
        6149: "2c868c1883eef377bf6d",
        6159: "69a835129b585a813bac",
        6165: "b46c6a2a6f7f55f8a863",
        6208: "21f654d12200fad73287",
        6209: "4e698d630904e1014747",
        6224: "94a02eeb889f1dc7d3e7",
        6236: "0086a69002dcd52e511e",
        6239: "3a27335a298d73f1a6a4",
        6343: "fdcfe66a7a9fbdc420bd",
        6383: "c7f3346333221060e4ea",
        6403: "cfbafd2d4bccc3dcfb37",
        6459: "c955abb4cb20a20e0e46",
        6523: "81ee29a941c7bdfbc6f9",
        6542: "03989cddedf4afcf7a39",
        6562: "774ae8b1c4522ecac403",
        6589: "fee2a47163cfa9082bfb",
        6716: "830932a38d1fca0ebaf4",
        6728: "0a7ab5fb2ea622866b36",
        6759: "47a07b41158db417ed0f",
        6845: "1f08970fd9bf5df19d4f",
        6948: "669ef4b5b403c9196884",
        6966: "fd430084bdbac1e82f17",
        6979: "b282d27f82082bb59db3",
        6995: "a580480ea0c88f7c76dd",
        7064: "79fdc548a6981d595bab",
        7352: "f8eee0a672a717e23fbc",
        7378: "540221c8ad95eeae4435",
        7383: "1cae9bcfe6993c6080d6",
        7439: "ca4bc033703dfbc13363",
        7499: "5f081f3f85f22d1510e4",
        7539: "b05c85ca2615d03297bc",
        7591: "fd73fabee09fe2558e00",
        7625: "1567e1ae9be68dfa6dd9",
        7631: "a2bb692c9542af898cb8",
        7633: "7741e73ed5692e5d6781",
        7681: "d5d07149cedcd1c65bae",
        7786: "cc0625722257fccf9b5b",
        7796: "850cd1329dacf4467be9",
        7798: "a67d8e4845c9376f27d9",
        7926: "a7b6de5f904a09afa838",
        8025: "9a670225487a6a44099a",
        8306: "5115ecb770dc4e788d87",
        8350: "6be15bc98a2a552403b0",
        8396: "f10c2bd803f9bbb325c3",
        8523: "c9d3ac5c121f742bbe17",
        8585: "953c18338309f9c31dc6",
        8591: "a1dadbd6d41aede35281",
        8632: "1ce1b8b3b6ca822a2dc4",
        8718: "16761bc91d471d5284ef",
        8755: "05b70d2f0999664cf49a",
        8758: "98f8b33cb7397ec346d1",
        8801: "bd4beb0ebf93895cdd85",
        8932: "c990afb349a3ef5e0267",
        8967: "e6654629e1cb9fa162fe",
        8995: "f62bcd5be164a27763f9",
        9027: "be517d4f1a9bc2f8ae91",
        9152: "7980ca72e5d4da2484cb",
        9188: "94617a38807a8a0742cc",
        9207: "b55c80f56741fd6654dd",
        9391: "5a3e33002846c38a0ff4",
        9431: "67ef9c43c3dd3c8104d4",
        9566: "0e76d15f386461f0a244",
        9650: "60e1fc59f0b40a256627",
        9712: "1de7602e347386ed501e",
        9730: "0468e88b3a9783806fb3",
        9747: "0ddc205a5113f0114b03",
        9812: "24883195ab7398ac24b3",
        9916: "d98452c8286b02ff4f0a",
        9992: "39e48b76acdfc2102d32",
      }[e]),
    (i.miniCssF = (e) =>
      "css/applications/appmgmt/" +
      {
        1101: "pricingtool",
        2455: "storeadmin",
        2785: "libraries~5da2a553c",
        2995: "logoedtior",
        3025: "contenthubpages",
        3350: "deadlines",
        4072: "chunk~8fdaa6e5d",
        4226: "steamdeck",
        4262: "steamml",
        4268: "events",
        4985: "resquemsg",
        5027: "sdrconnections",
        5933: "steamlearn",
        5970: "chunk~2caae0244",
        6343: "timelinemarkers",
        7383: "adminpromoreviewdashboard",
        8350: "chunk~4ec87c66d",
        8396: "broadcast",
        8523: "publisherdashboard",
      }[e] +
      ".css?contenthash=" +
      {
        1101: "0fbd0e93b254aa82d98e",
        2455: "5608dbb1a70845f05ffc",
        2785: "da3b05b688206293fc3e",
        2995: "68490a0464a23c4c13fe",
        3025: "f2fb61aa145f9045244a",
        3350: "4f5cc9542df69aaf1e44",
        4072: "36f12bdcd4a8ae076443",
        4226: "f355e2c45b0604a5b7f2",
        4262: "61877d984bfcf3e7f40f",
        4268: "72754683cb5f05b7283c",
        4985: "fe01caf6b05ba287b7b3",
        5027: "33eb9d66d0507e03ca68",
        5933: "dd546a63d9afd671b4b5",
        5970: "a6e61eda14be23b61498",
        6343: "1fbe255dcd4afac63b34",
        7383: "7d397c627b354e1a49cf",
        8350: "e1ab9319dab9354cc088",
        8396: "270d67397cba0f40cd94",
        8523: "febeaf5a4a1b01fa0ba2",
      }[e]),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (s = {}),
    (d = "appmgmt-storeadmin:"),
    (i.l = (e, a, n, c) => {
      if (s[e]) s[e].push(a);
      else {
        var r, f;
        if (void 0 !== n)
          for (
            var o = document.getElementsByTagName("script"), b = 0;
            b < o.length;
            b++
          ) {
            var t = o[b];
            if (
              t.getAttribute("src") == e ||
              t.getAttribute("data-webpack") == d + n
            ) {
              r = t;
              break;
            }
          }
        r ||
          ((f = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          i.nc && r.setAttribute("nonce", i.nc),
          r.setAttribute("data-webpack", d + n),
          (r.src = e)),
          (s[e] = [a]);
        var l = (a, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var d = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              d && d.forEach((e) => e(n)),
              a)
            )
              return a(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = l.bind(null, r.onerror)),
          (r.onload = l.bind(null, r.onload)),
          f && document.head.appendChild(r);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((a, n) => {
              var s = i.miniCssF(e),
                d = i.p + s;
              if (
                ((e, a) => {
                  for (
                    var n = document.getElementsByTagName("link"), s = 0;
                    s < n.length;
                    s++
                  ) {
                    var d =
                      (r = n[s]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (d === e || d === a))
                      return r;
                  }
                  var c = document.getElementsByTagName("style");
                  for (s = 0; s < c.length; s++) {
                    var r;
                    if (
                      (d = (r = c[s]).getAttribute("data-href")) === e ||
                      d === a
                    )
                      return r;
                  }
                })(s, d)
              )
                return a();
              ((e, a, n, s, d) => {
                var c = document.createElement("link");
                (c.rel = "stylesheet"),
                  (c.type = "text/css"),
                  (c.onerror = c.onload =
                    (n) => {
                      if (((c.onerror = c.onload = null), "load" === n.type))
                        s();
                      else {
                        var r = n && n.type,
                          i = (n && n.target && n.target.href) || a,
                          f = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              r +
                              ": " +
                              i +
                              ")",
                          );
                        (f.name = "ChunkLoadError"),
                          (f.code = "CSS_CHUNK_LOAD_FAILED"),
                          (f.type = r),
                          (f.request = i),
                          c.parentNode && c.parentNode.removeChild(c),
                          d(f);
                      }
                    }),
                  (c.href = a),
                  n
                    ? n.parentNode.insertBefore(c, n.nextSibling)
                    : document.head.appendChild(c);
              })(e, d, null, a, n);
            }),
          a = { 4556: 0 };
        i.f.miniCss = (n, s) => {
          a[n]
            ? s.push(a[n])
            : 0 !== a[n] &&
              {
                1101: 1,
                2455: 1,
                2785: 1,
                2995: 1,
                3025: 1,
                3350: 1,
                4072: 1,
                4226: 1,
                4262: 1,
                4268: 1,
                4985: 1,
                5027: 1,
                5933: 1,
                5970: 1,
                6343: 1,
                7383: 1,
                8350: 1,
                8396: 1,
                8523: 1,
              }[n] &&
              s.push(
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
      (i.f.j = (a, n) => {
        var s = i.o(e, a) ? e[a] : void 0;
        if (0 !== s)
          if (s) n.push(s[2]);
          else if (4556 != a) {
            var d = new Promise((n, d) => (s = e[a] = [n, d]));
            n.push((s[2] = d));
            var c = i.p + i.u(a),
              r = new Error();
            i.l(
              c,
              (n) => {
                if (i.o(e, a) && (0 !== (s = e[a]) && (e[a] = void 0), s)) {
                  var d = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = d),
                    (r.request = c),
                    s[1](r);
                }
              },
              "chunk-" + a,
              a,
            );
          } else e[a] = 0;
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, n) => {
          var s,
            d,
            [c, r, f] = n,
            o = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (f) var b = f(i);
          }
          for (a && a(n); o < c.length; o++)
            (d = c[o]), i.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return i.O(b);
        },
        n = (self.webpackChunkappmgmt_storeadmin =
          self.webpackChunkappmgmt_storeadmin || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })();
})();
