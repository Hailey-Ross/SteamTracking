import { d as i } from "./chunk-PGNB6ILX.js";
var a = "./store_brazilian-3XL3VYCA.json";
var o = "./store_bulgarian-C6GMJOCA.json";
var n = "./store_czech-J7L6LACA.json";
var _ = "./store_danish-MJNNXKBA.json";
var r = "./store_dutch-C7QXEGAA.json";
var l = "./store_english-NSZ7O5CA.json";
var c = "./store_finnish-RDDCXSBA.json";
var d = "./store_french-QJP467DA.json";
var m = "./store_german-DMTK5ZAA.json";
var p = "./store_greek-QT2PO6AA.json";
var u = "./store_hungarian-S7VMLZBA.json";
var h = "./store_indonesian-Y3S43IDA.json";
var g = "./store_italian-BA62OJBA.json";
var v = "./store_japanese-A4SUKXDA.json";
var y = "./store_koreana-YHF6JSCA.json";
var w = "./store_latam-VOSH6UCA.json";
var f = "./store_norwegian-5UMQCJAA.json";
var b = "./store_polish-QB624NCA.json";
var k = "./store_portuguese-STTTF2BA.json";
var S = "./store_romanian-SQ3BT6DA.json";
var z = "./store_russian-3E5NF5DA.json";
var $ = "./store_schinese-XKDYYTDA.json";
var j = "./store_spanish-3PUCKICA.json";
var D = "./store_swedish-CZZ2GSBA.json";
var P = "./store_tchinese-ET3WRYAA.json";
var T = "./store_thai-V3QW4PCA.json";
var C = "./store_turkish-WSB3T5DA.json";
var N = "./store_ukrainian-ZZAL7EBA.json";
var V = "./store_vietnamese-DMTA6MCA.json";
var e = {};
e.brazilian = a;
e.bulgarian = o;
e.czech = n;
e.danish = _;
e.dutch = r;
e.english = l;
e.finnish = c;
e.french = d;
e.german = m;
e.greek = p;
e.hungarian = u;
e.indonesian = h;
e.italian = g;
e.japanese = v;
e.koreana = y;
e.latam = w;
e.norwegian = f;
e.polish = b;
e.portuguese = k;
e.romanian = S;
e.russian = z;
e.schinese = $;
e.spanish = j;
e.swedish = D;
e.tchinese = P;
e.thai = T;
e.turkish = C;
e.ukrainian = N;
e.vietnamese = V;
async function t(s) {
  if (e[s]) return (await fetch(new URL(e[s], import.meta.url))).json();
}
var ht = i(t);
export { ht as a };
