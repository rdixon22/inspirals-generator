// Inspirals by Radix (Rob Dixon)
// Single-image generator version

// Artblocks injects the tokenData variable into your sketch like so
//let tokenData = {"hash":"0xa55b214f361cc0f33644b86ff19d28e1c2d298b13157c621fb0cb05edb7f2a1f","tokenId":"13000233"};
//let tokenData = {"hash":"0xaeea04e79dc9ed6d3fd2377de7d17f31fa2d12d85e8e4233e8c34aab4b48f0f6","tokenId":"13000234"}
//let tokenData = {"hash":"0x8c34aab4b31fa8e4aeea04e79dc9ed6d3fd2377de7d17f2d12d85e233e48f0f6","tokenId":"13000235"}
let tokenData = genTokenData(13);
let features = [];

function genTokenData(projectNum)
{
  let data = {};

  let hash = "0x";
  for (var i = 0; i < 64; i++)
  {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;

  data.tokenId = projectNum * 1000000 + Math.floor(Math.random() * 1000);
  return data;
}

function skt( _p5c )
{

let pNames = 
{
  //_tileType: 0,
  // colors
  _sh: 1,
  _ss: 2,
  _sl: 3,
  _ch: 4,
  _cs: 5,
  _cl: 6,

  // tiling
  _presetIndex: 7,
  //_defaultShape: 8,
  //_spiralA: 9,
  //_spiralB: 10,

  // shape adjustments
  _adjust1: 11,
  _adjust2: 12,
  _adjust3: 13,
  _adjust4: 14,
  _adjust5: 15,
  _adjust6: 16,

  _colorScheme: 17,
  _lineStyle: 18,
  _sp: 19
}

// Produces 32 values between 0 and 255 inclusive
function extractParameters(tokenHash) 
{
  let values = [];
  let substr;
  for (let j = 0; j < 32; j++) 
  {
    substr = tokenHash.substr(2 + (j * 2), 2);
    values.push(parseInt(substr, 16));
  }
  return values;
}

let _shapeData = [
  // animation values a:[paramNum,min,max,speed]
  {t:1, a:[1, 0.33, 1.1, 0.6], n:true, e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.42267,y:1.3},{x:1,y:0}]]},
  {t:1, a:[3, 0.1, 0.936, 2], n:true,  e:[[{x:0,y:0},{x:0.3222946700076865,y:-1.4437240669732914},{x:1.2577165104542063,y:-1.241238565862889},{x:1,y:0}],[{x:0,y:0},{x:0.19435239879113608,y:-0.2121462045769702},{x:1,y:0}],[{x:0,y:0},{x:0.0927631955283914,y:0.17721879952585606},{x:1,y:0}]]},
  {t:1, a:[3, 0.06, 0.8], n:true, e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.39501110086210955,y:-1.2377667402241672},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:1, a:[1, 0, 0.83, 2], n:true, e:[[{x:0,y:0},{x:-0.05353694827226807,y:0.865555171584341},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.7554152453297225,y:0.43456453842299103},{x:1,y:0}]]},
  {t:2, a:[1,0.01,1.6,2], e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.21598295484323593,y:0.7861715627814503},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  // 5
  {t:2, a:[1, 0 ,1.98, 2], n:true, e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.07467601692513837,y:-0.022822019423502926},{x:0.16175442732856293,y:-0.05731116695026672},{x:0.547684345024384,y:0.2549508647457878},{x:0.5988714796718986,y:-0.31531311228958536},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:2, a:[1, 0, 1.5, 2], e:[[{x:0,y:0},{x:-0.04366013240889527,y:-0.6889805760347283},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.36688729223089855,y:-0.16226660819316374},{x:1,y:0}]]},
  {t:25, a:[1, 0, 1.6, 2], n:true, e:[[{x:0,y:0},{x:0.9012181692074642,y:0.5684035150915303},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.18735158654879314,y:1.0546610206912896},{x:1,y:0}]]},
  {t:26, a:[1, 0.1, 0.76], n:true, e:[[{x:0,y:0},{x:1.5882588201591359,y:-1.2495991825549029},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:4, a:[2, 0, 0.9, 2], n: true, e:[[{x:0,y:0},{x:1.647257216650234,y:-1.805811351735762},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.1664180896267995,y:1.6777892768239107},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  // 10
  {t:4, a:[5, 0.01, 1.85, 2], n: true, e:[[{x:0,y:0},{x:0.21612385568069037,y:1.9155203814938733},{x:1.0020292088706353,y:0.5622083067809953},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:6, a:[4, 0.01, 1.99, 2], n: true, e:[[{x:0,y:0},{x:0.41725541099173036,y:-0.21227685538493857},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:6, a:[3, 0.01, 1.8, 2], e:[[{x:0,y:0},{x:1.1156484496014745,y:-0.5696699195635277},{x:1,y:0}],[{x:0,y:0},{x:0.5915085224393015,y:0.6363066604679737},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:6, a:[4, 0.01, 1.99, 2], e:[[{x:0,y:0},{x:0.2437505513566527,y:1.7967912914204867},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:8, a:[1, 0, 1], e:[[{x:0,y:0},{x:1.224923771071932,y:-0.7178120433802748},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.7659587772462058,y:-1.4144435765755268},{x:1,y:0}]]},
  // 15
  {t:8, a:[3, 0, 1], e:[[{x:0,y:0},{x:0.5050060757302663,y:1.2136945753654427},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:8, a:[1, 0, 0.7, 2], e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.3013840829194331,y:-1.1746197659050606},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:9, a:[1, 0, 1.05, 2], n:true, e:[[{x:0,y:0},{x:0.6131484793451012,y:-0.281313758377036},{x:1,y:0}],[{x:0,y:0},{x:1.0166956662029636,y:-0.49707676867923123},{x:1,y:0}]]},
  {t:9, a:[1, 0, 0.99, 2], n:true, e:[[{x:0,y:0},{x:0.7576166176407408,y:2.3325045744108106},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:9, a:[1, 0.1, 1.98, 2], e:[[{x:0,y:0},{x:-0.1880592157268044,y:-1.298769431415768},{x:1,y:0}],[{x:0,y:0},{x:0.3806869343702517,y:-0.4774464120998052},{x:1,y:0}]]},  
  // 20
  {t:13, a:[2, 0.28, 0.78], e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.6388393518500166,y:0.9386683572165353},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:13, a:[2, 0, 1.98], e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:-0.2881840960663451,y:0.940305846622687},{x:1,y:0}]]},
  {t:15, a:[1,0.01,0.432], e:[[{x:0,y:0},{x:1.1497797270721564,y:1.1627200365861088},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:-0.11147190853988853,y:1.0193739015358383},{x:1,y:0}]]},
  {t:15, a:[1,0.01,0.58,2], n:true, e:[[{x:0,y:0},{x:0.32408059432386604,y:-0.2757273344775576},{x:0.10196111961047682,y:-1.0836279429110924},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:22, a:[1, 0.01,0.9,2], e:[[{x:0,y:0},{x:0.4008428518472027,y:-0.4954590190465238},{x:1,y:0}],[{x:0,y:0},{x:0.6525341186410483,y:0.43566406843543354},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  // 25
  {t:22,a:[1,0.01,1.12,2],e:[[{x:0,y:0},{x:0.5868408159458037,y:0.4865167478470753},{x:1,y:0}],[{x:0,y:0},{x:0.25983300676191456,y:0.8113704166932943},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},
  {t:23,a:[1,0.388,0.784,0.6], n: true, e:[[{x:0,y:0},{x:-0.006009323068224645,y:-2.040499661690926},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1.0239458334187905,y:0.8240446825786648},{x:1,y:0}]]},
  {t:23, a:[3,0.3,0.9,2], e:[[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.46777399803566255,y:-0.47888690330507233},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0.6943969362041145,y:-0.4447774888334517},{x:1,y:0}]]},
  {t:25, a:[1,0.01,1.268,2], n: true, e:[[{x:0,y:0},{x:-0.082784278463512,y:-0.6361110451102521},{x:0.8810541381465796,y:-1.0481520227015917},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:1,y:0}]]},

];
// iffy: 0, 38, 85, 102, 118
// best: 21, 24, 25, 29, 35, 51, 55, 65, 81, 93, 115, 117, 123, 124, 127
// k: 43,65,69,86
let _paramData = [
  {s:0, p:[0.18,0.588,0.048,0.788]},
  {s:0, p:[0.168,0.82,0.076,0.608], a:[1, 0.2, 1, 0.6]},
  {s:0, p:[0.18,0.588,0.016,0.196], a:[1, 0.1, 0.65]},
  {s:0, p:[0.152,0.54,0.016,0.72]},

  {s:1, p:[0.328,0.932,0,0.668]},
  //5
  {s:1, p:[0.264,0.776,0,0.584]},

  {s:2, p:[0.048,0.556,0.36,0.204], a:[3, 0, 1.3, 1.4]},
  {s:2, p:[0.012,0.48,0.144,0.608]},
  {s:2, p:[0.024,0.936,0.136,0.768], a:[1, 0.3, 1.0]},

  {s:3, p:[0.092,0.536,0.112,0.272], a:[3, 0, 1.3, 2]},
  // 10
  {s:3, p:[0.052,0.652,0.128,0.372]},
  {s:3, p:[0.088,0.528,0.06,0.208], a:[1,0.01,0.7, 1.4]},

  {s:4, p:[0.004,1.192,0.432,0.096], a:[1, 0, 1.6, 2]},
  {s:4, p:[0.072,0.064,0.28,0.264]},
  {s:4, p:[0.108,0.648,0.216,0.028]},
  // 15
  {s:4, p:[0.008,0.016,0.276,0.304]},

  {s:5, p:[0.088,0.036,0.24,0.148]},
  {s:5, p:[0.056,0.576,0.272,0]},
  {s:5, p:[0.052,1.448,0,0.492]},
  {s:5, p:[0.012,0.188,0.012,0.36]},
  // 20
  {s:5, p:[0.096,0,0.324,0.02]},
  {s:5, p:[0.132,0.304,0.128,0]},
  {s:5, p:[0.088,1.964,0.24,0.14]},
  {s:5, p:[0.124,1.964,0.044,0.288]},

  {s:6, p:[0.163,0.871,0.039,0.02]},
  // 25
  {s:6, p:[0.116,1.092,0.092,0.082]},
  {s:6, p:[0.196,0.084,0.036,0.076]},
  {s:6, p:[0.156,0.488,0.05,0.02]},
  {s:6, p:[0.08,0.632,0.136,0.036]},

  // 29 - 11111111
  {s:7, p:[0.072,0.86,0.032], k:true},
  // 30
  {s:7, p:[0.076,0.34,0.076]},
  {s:7, p:[0.044,1.876,0.16]},
  {s:7, p:[0.084,0.42,0.012]},
  {s:7, p:[0.028,0.4,0.164]},
  {s:7, p:[0.072,0.516,0.032]},
  // 35
  {s:7, p:[0.02,0.792,0.196]},

  {s:8, p:[0.064,0.072]},
  {s:8, p:[0.068,0.008]},
  {s:8, p:[0.008,0.152]},
  {s:8, p:[0.06,0.096]},

  // 40
  {s:9, p:[0.06,0.604,0.016,0.244,0.352,0.124]},
  {s:9, p:[0.02,0.624,0.172,0.28,0.456,0.084], a:[3, 0, 1, 2]},
  {s:9, p:[0.032,0.424,0.248,0.156,0.064,0.516], a:[4, 0, 1, 2]},
  {s:9, p:[0.036,0.568,0.06,0.276,0.412,0.332], k:true},
  {s:9, p:[0.06,0.212,0.02,0.424,0.18,0.236], a:[2, 0, 0.9], k:true},
  // 45
  {s:9, p:[0.056,0.608,0.032,0.264,0.348,0.124], a:[1, 0.01, 0.9]},
  {s:9, p:[0.148,0.692,0,0.288,0.432,0.096], a:[3, 0.01, 1, 1.4]},

  {s:10, p:[0.168,0.22,0.148,0.384,0.064,1.78]},
  {s:10, p:[0.172,0.176,0.16,0.524,0.304,1.836]},

  {s:11, p:[0.26,0.52,0.112,0.196,1.696]},
  // 50
  {s:11, p:[0.164,0.58,0.132,0.344,0.332]},
  {s:11, p:[0.26,0.52,0.116,0.5,1.7]},
  {s:11, p:[0.14,0.544,0.144,0.08,0.304], a:[1, 0.35, 1.5, 2]},
  {s:11, p:[0.216,0.52,0.048,0.072,0.488]},
  {s:11, p:[0.248,0.452,0,1.996,1.056]},
  // 55
  {s:11, p:[0.232,0,0.144,0.492,0.12]},

  {s:12, p:[0.16,0.712,0.368,1.224,0.516]},
  {s:12, p:[0.32,0.572,0.032,0.136,1.948]},
  {s:12, p:[0.38,0.596,0.012,0.96,0.008]},
  {s:12, p:[0.36,0.656,0.004,0.896,0.008]},
  // 60
  {s:12, p:[0.36,0.656,0.004,0.96,0.472]},

  {s:13, p:[0.12,0.488,0.22,0.52,1.068]},
  {s:13, p:[0.096,0.516,0.196,0.524,0.536]},
  {s:13, p:[0.048,0.472,0.252,0.376,1.212]},
  {s:13, p:[0.104,0.528,0.228,0.564,1.604]},
  // 65
  {s:13, p:[0.104,0.528,0.212,0,0.628], k:true},
  {s:13, p:[0.088,0.524,0.136,0.528,0.512]},

  {s:14, p:[0.32,1.172,0.232,1.768], a:[3, 0.9, 1.98, 1.4]},
  {s:14, p:[0.292,0.676,0.104,0.444]},
  {s:14, p:[0.144,0.424,0.14,0.08], a:[3, 0, 1, 1], k:true},

  // 70
  {s:15, p:[0.052,0.532,0.152,0.108]},
  {s:15, p:[0.164,0.428,0,0.084], a:[3, 0.01, 0.6, 1]},

  {s:16, p:[0.156,0.56,0.116,0.192]},
  {s:16, p:[0.308,0.836,0,0.4755], a:[1,0.35,0.8,1]},
  {s:16, p:[0.308,0.836,0,0.66], a:[1,0.35,1.0,1]},
  
  // 75
  {s:17, p:[0.052,0.096,0.1]},
  {s:17, p:[0.004,0.608,0.024]},
  {s:17, p:[0.004,0.084,0.024]},
  {s:17, p:[0.12,1.364,0.136], a:[1,0.01,1.7,2]},

  {s:18, p:[0.124,0.316,0.1]},
  // 80
  {s:18, p:[0.124,0.72,0.084]},
  {s:18, p:[0.172,0.72,0.052]},
  {s:18, p:[0.132,1.008,0.124]},
  {s:18, p:[0.088,0.104,0.096]},
  {s:18, p:[0.124,0.08,0.124], a:[1, 0.4, 1.18, 2]},
  // 85
  {s:19, p:[0.04,0.476,0.144]},
  {s:19, p:[0.108,0.208,0.08], k:true},
  {s:19, p:[0.16,0.068,0.12]},
  {s:19, p:[0.184,0.3,0.036]},
  {s:19, p:[0.024,1.916,0.22]},
  // 90
  {s:19, p:[0.176,1.948,0.056], a:[1, 0.3, 1.98, 2]},
  {s:19, p:[0.216,0.004,0.012]},

  {s:20, p:[0.148,0.068,0.596]},
  {s:20, p:[0.164,0.08,0.4], a:[2,0.16,0.788,1]},
  {s:20, p:[0.165,0.129,0.969], a:[2,0.16,1.0,1]},
  // 95
  {s:20, p:[0.165,0.151,0.5965], a:[2,0.204,0.82]}, 

  {s:21, p:[0.076,0.168,0.56], a:[2,0.364,1.98]},
  {s:21, p:[0.056,0.144,0.244]},
  {s:21, p:[0.004,0.264,0.012]},
  {s:21, p:[0.18,0.072,1.964]},
  // 100
  {s:22, p:[0.01,0.208,0.22]},
  {s:22, p:[0.02,0.092,0.292]},
  {s:22, p:[0.06,0.304,0.16]},
  {s:22, p:[0.196,0.024,0], a:[1,0.01,0.36]},
  {s:22, p:[0.02,0.171,0.196], a:[1,0.024,0.6]},
  // 105
  {s:23, p:[0.028,0.264,0.232]},
  {s:23, p:[0.056,0.14,0.056], a:[1,0.092,0.72,2]},
  {s:23, p:[0.084,0.06,0.08], a:[1,0.025,0.8,2]},

   // option 6: [1,0.01,0.95,2]?
  {s:24, p:[0.148,0.816,0.044], a:[1,0.01,1.45,2]},
  {s:24, p:[0.02,0.116,0.22], a:[1,0.01,1.37,2]},
  // 110
  {s:24, p:[0,0.128,0.14]},
  {s:24, p:[0.048,0.6,0.04], a:[1,0.01,0.78,2]},
  {s:24, p:[0.068,0.016,0.032]},
  {s:24, p:[0.052,1.084,0.16], a:[1,0.01,1.4,2]},

  {s:25, p:[0.06,1.004,0.264]},
  // 115
  {s:25, p:[0.048,0.012,0.168], a:[1,0.01,1,2]},
  {s:25, p:[0.036,0.188,0.076], a:[1,0.01,0.656,2]},
  {s:25, p:[0.048,0.7,0.092], a:[1,0.01,0.836,2]},

  //{s:26, p:[0.092,0.54,0.036,0.172], a:[3,0.1,0.72,0.6]},
  //{s:26, p:[0.036,0.468,0.136,0.34], a:[1,0.448,0.668]},
  {s:26, p:[0.216,0.372,0,0.644]},

  {s:27, p:[0.08,0.444,0.068,0.448]},
  {s:27, p:[0.004,0.576,0.252,0.076], a:[3,0.01,0.6,2]},
  {s:27, p:[0.116,0.2,0.056,0.972], a:[3,0.864,1.65,2]},
  {s:27, p:[0,0.628,0.348,0.02], a:[3,0.568,0.884,2]},

  {s:28, p:[0.064,0.484,0.04], a:[1,0.01,1.268,2]},
  {s:28, p:[0.008,1.072,0.176]},
  {s:28, p:[0.112,0,0.016], a:[1,0.01,1.268,2]},
  {s:28, p:[0.064,0.46,0.04]},
  {s:28, p:[0.04,1.232,0.096]},
  {s:28, p:[0.084,1.204,0.008]},
  {s:28, p:[0.068,0.812,0.004]}
]

const _lineModes = {
  Dark: 0,
  Mid: 1,
  Light: 2,
  None: 3
}
var sn;
var _special;
let spIds = [21, 24, 25, 29, 29, 35, 51, 55, 65, 81, 93, 115, 117, 123, 124, 127];
let spColors = [[175, 50, 12, 25],[200, 50, 12, 25],[220, 50, 12, 25],[250, 50, 15, 25],[280, 50, 15, 25],[320, 50, 15, 25]];

// --- GLOBALS ---

let _raw;
let renCan;

// colors

let _schemes = 
{
  Wild: 3,
  BW: 4,
  Family: 5
}
let _schemeNames = ["Wild", "Black and White", "Family"]; 
let _colorScheme = _schemes.Family;

let _cols = [];
let _lineColor;
let _tileColorSet;
let _lineStyle = 0;

let _startHue;
let _changeHue;

// tiling
let _currentPreset = 0;
let _tiling;
let _tParams;
let _tileShape;
let _tris = [];
let _tiling_V = { x: 0.0, y: 0.0 };
let _tiling_T = null;
let _tiling_iT = null;
let _edges = null;

let _presetIdx = 0;
let _doubleSpiral = false;

let spA;
let spB;
let adjs = [];

// infinity shader
let _shader1;

// canvas dimensions
let _WIDTH = null;
let _HEIGHT = null;

// offscreen graphics
const OG_SIZE = 256;
let og = null;
let og_M = null;

// ui
let _slidersHidden = true;
let _uiSliders = null;
let _fullscreen = true;

// io
let saveNum = 0;

// animation
let _isAnimating = false;

let apVal = 0.1;
let apChg = 0.0005;
let apMax = 0.99;
let apMin = 0.01;
let apIdx = -1;

// debug
//let fnt;
//let _debugLabel;

// --- METADATA ---
/**
 * Call this after all parameters have been set (post-setup)
 */
function setFeatures()
{
  let _feats = [];

  let _baseColorName = (_colorScheme == _schemes.BW ? "Black" : getColorName(_startHue + _changeHue));
  _feats.push("Base Color: " + _baseColorName);
  _feats.push("Color Scheme: " + _schemeNames[_colorScheme - 3]);
  _feats.push("Symmetry Type: " + _currentPreset.sh.t);
  _feats.push("Pattern: " + _presetIdx);
  _feats.push("Line Mode: " + Object.keys(_lineModes)[_lineStyle]);
  _feats.push("Distortions: " + _tiling.numParameters());

  features = _feats;
}

function getColorName(hue)
{
  hue = hue % 360;
  let _colorName = "Unknown";
  if (hue > 315)
  {
    _colorName =  "Red";
  }
  else if (hue > 300)
  {
    _colorName =  "Pink";
  }
  else if (hue > 255)
  {
    _colorName =  "Purple";
  }
  else if (hue > 300)
  {
    _colorName =  "Blue";
  }
  else if (hue > 185)
  {
    _colorName =  "Aqua";
  }
  else if (hue > 93)
  {
    _colorName =  "Green";
  }
  else if (hue > 63)
  {
    _colorName =  "Chartreuse";
  }
  else if (hue > 42)
  {
    _colorName =  "Yellow";
  }
  else if (hue > 11)
  {
    _colorName =  "Orange";
  }
  else
  {
    _colorName =  "Red";
  }
  return _colorName;
}

// --- P5 ---

_p5c.preload = () =>
{
  //fnt = _p5c.loadFont( 'helveticaneue.otf' );
}

_p5c.setup = () =>
{
  _WIDTH = window.innerWidth;
  _HEIGHT = window.innerHeight;

  renCan = _p5c.createCanvas(_WIDTH, _HEIGHT, _p5c.WEBGL);

  // 2DO: remove font in productionn
 // _p5c.textFont( fnt );

  const tp = tilingTypes[ 0 ];
  _tiling = new IsohedralTiling( tp );

  _p5c.textureWrap( _p5c.REPEAT );
  _p5c.textureMode( _p5c.NORMAL );

  _shader1 = _p5c.createShader(vs_code, fs_code);

  newSpiral(false);

  _p5c.noLoop();
}

_p5c.draw = () =>
{
  _p5c.background( 255 );
  _p5c.push();
  _p5c.translate( -_p5c.width/2, -_p5c.height/2 );

  let _animatingParams = (apIdx > -1) ? true : false;
  
  if( _animatingParams ) 
  {
    apVal += apChg;
    if ((apVal >= apMax && apChg > 0) || (apVal <= apMin && apChg < 0))
    {
      apChg = -apChg;
    }
    aps = _tiling.getParameters();
    aps[apIdx] = apVal;
    _tiling.setParameters(aps);
    defineShape();
  }

  if( _isAnimating ) 
  {
    const t1 = mul( _tiling_T, _tiling.getT1() );
    t1.x -= _tiling_T[2];
    t1.y -= _tiling_T[5];
    const _tLen = len( t1 );
    calcTransform();
    _tiling_V.x -= 0.005 * t1.x / _tLen;
    _tiling_V.y -= 0.005 * t1.y / _tLen;
  }

  drawSpiral();

  _p5c.pop();

  if( !_isAnimating && !_animatingParams ) 
  {
    _p5c.noLoop();
  }
}

// --- INTERACTION ---

_p5c.windowResized = () =>
{
  _WIDTH = window.innerWidth;
  _HEIGHT = window.innerHeight;

  _p5c.resizeCanvas( _WIDTH, _HEIGHT );
  _p5c.loop();
}

_p5c.keyReleased = () =>
{
  if (_p5c.key === 'f' || _p5c.key === 'F') 
  {
    _isAnimating = !_isAnimating;
    if (_isAnimating)
    {
      _p5c.loop();
    }
  }
  else if (_p5c.key === 'd' || _p5c.key === 'D') 
  {
    let animVals = _currentPreset.sh.a;
    if (_currentPreset.a != null)
    {
      animVals = _currentPreset.a;
    }
    animateParam(...animVals);
  }
  else if (_p5c.key === 'u' || _p5c.key === 'U') 
  {
    if (apIdx > -1) apIdx = -1;
    _toggleSliders();
  }
  else if (_p5c.key === 's' || _p5c.key === 'S') 
  {
    if (!_slidersHidden)
    {
      _toggleSliders();
    }
    _p5c.save(renCan, "inspiral_" + saveNum++ + ".jpg");
  }
  else if (_p5c.key === 't' || _p5c.key === 'T')
  {
    _doubleSpiral = !_doubleSpiral;
    _p5c.redraw();
  }
  else if (_p5c.key === 'c' || _p5c.key === 'C')
  {
    chooseColors(true);
    setTilingType(_currentPreset, true);
    _p5c.redraw();
  }
}

// ---COLORING ---

class Pmut {
  static rank( p ) {
    let identity = Object.keys( p );
    let product = p.slice();
    let rank = 1;
    while ( product.join() !== identity.join() ) {
      product = this.mult( product, p );
      rank++;
    }
    return rank;
  }

  static pow( p, exp ) {
    let product = p.slice();
    for ( let i = 0; i < exp - 1; i++ ) {
      product = this.mult( product, p );
    }
    return product;
  }

  static mult( p1, p2 ) {
    if ( p1.length !== p2.length ) {
      return [ ];
    }
    return p1.map( x => p2[ x ] );
  }

  static evaluate( p, start, num_times ) {
    let val = p[ start ];
    for ( let idx = 0; idx < num_times; ++idx ) {
      val = p[ val ];
    }
    return val;
  }
}

class Coloring {
  constructor( tiling, _colors, init, p1, p2 ) {
    this.tiling = tiling;
    this._colors = _colors;
    this.init = init;
    this.p1 = p1;
    this.p1rank = Pmut.rank( p1 );
    this.p2 = p2;
    this.p2rank = Pmut.rank( p2 );
  }

  getColour( a, b, asp ) 
  {
    let c = this.init[ asp ];
    const r1 = this.p1rank;
    const r2 = this.p2rank;

    c = Pmut.evaluate( this.p1, c, ((a%r1)+r1)%r1 );
    c = Pmut.evaluate( this.p2, c, ((b%r2)+r2)%r2 );

    return this._colors[ c ];
  }
}

class TileCol extends Coloring {
  constructor( tiling, _colrs ) {
    const clrg = tiling.ttd.clr;
    const init = clrg.slice( 0, tiling.numAspects() );
    const p1 = clrg.slice( 12, 15 );
    const p2 = clrg.slice( 15, 18 );
    super( tiling, _colrs, init, p1, p2 );
  }
}

function chooseColors(doCycle)
{
  let _startSat, _startLig, _blackAndWhite = false;
  let _newColors = [];
  if (_special && !doCycle)
  {
    _colorScheme = _schemes.Family;

    let si = _raw[pNames._sp] % spColors.length;
    //console.log("sp=" + pNames._sp + ", idx=" + si)
    let _newColors = spColors[si];
    _startHue = _newColors[0];
    _startSat = _newColors[1];
    _startLig = _newColors[2];
    _changeHue = _newColors[3];
  }
  else
  {
    // 2DO: Make special schemes more rare later
    _colorScheme = (_raw[pNames._colorScheme] % 32);
    if (_colorScheme > _schemes.Family) 
    {
      _colorScheme = _schemes.Family;
    }
    else if (_colorScheme < _schemes.Wild) 
    {
      _colorScheme = _schemes.Wild;
    }

    _blackAndWhite = (_colorScheme == _schemes.BW); 

    _startHue = doCycle ? (_startHue + 58) % 360 : _p5c.map(_raw[pNames._sh], 0, 255, 0, 360);
    // reduce chartreuse
    if (_startHue > 55 && _startHue < 87) 
    {
      _startHue += 32;
    }

    _startSat = _p5c.map(_raw[pNames._ss], 0, 255, 40, 100);
    _startLig = _p5c.map(_raw[pNames._sl], 0, 255, 0, 24);
    _changeHue = _p5c.map(_raw[pNames._ch], 0, 255, 2, 30); 
  }

  let _changeSat = _p5c.map(_raw[pNames._cs], 0, 255, 15, 35); 
  let _changeLig = _p5c.map(_raw[pNames._cl], 0, 255, 30, 42); 

  // bigger color swings
  if (_colorScheme == _schemes.Wild) 
  {
    _changeHue = Math.max(_changeHue, 15) * 3;
    _changeSat += 5;
    // reduce chartreuse
    if (_startHue >= 320) _startHue -= 130;
  }

  // determine line style
  let _needLine = _currentPreset.sh.n;
  if (_needLine == undefined) _needLine = false;

  _lineStyle = (_raw[pNames._lineStyle] % 8);
  if (_lineStyle > 3 || (_lineStyle == 3 && _needLine)) 
  {
    _lineStyle = 0;
  }

  if (_lineStyle == _lineModes.Dark) _changeLig += 9;
  
  // consider the middle color the base color
  //console.log("_startHue=" + _startHue + ", baseColor=" + getColorName(_startHue + _changeHue));

  _cols = [];
  if (_blackAndWhite && !doCycle) 
  {
    _cols.push(colHsl([0, 0, 0]));

    _cols.push(colHsl([0, 0, 100]));
    _lineColor = colHsl([_startHue, 0, 100]);

    _cols.push(colHsl([0, 0, 0]));
    _cols.push(colHsl([_startHue, 90, 255]));
  }
  else
  {
    let lig;
    let minLig = (_startHue+_changeHue > 62 && _startHue+_changeHue < 183) ? 94 : 89;
    let maxLig = (_colorScheme == _schemes.Wild) ? 97 : 100;

    for (let i = 0; i < 4; i++) 
    {
      lig = _startLig + (i * _changeLig);
      if (i >= 2) 
      {
        lig = Math.min(Math.max(lig, minLig), maxLig);
        //console.log("lig[" + i + "]=" + lig);
      }
      _cols.push(
        colHsl(
          [_startHue + (i * _changeHue),
          _startSat + (i * _changeSat),
          lig]
        )
      )
    }
  }
  if ((_lineStyle == _lineModes.Dark || _special) && !_blackAndWhite)
  {
    _lineColor = _cols[0];
  }
  else if (_lineStyle == _lineModes.Mid && !_blackAndWhite)
  {
    _lineColor = _cols[1];
  }
  else
  {
    _lineColor = colHsl([_startHue, _startSat, 100]);
  }
}

function colHsl(hslArray)
{
  // First convert the HSLuv values to a RGB array
  const rgb = hsluv.hsluvToRgb(hslArray);
  // Then use the RGB values in a scale of 0-255
  return _p5c.color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

// --- UTILS ---

function sub( V, W ) { return { x: V.x-W.x, y: V.y-W.y }; }
function dot( V, W ) { return V.x*W.x + V.y*W.y; }
function len( V ) { return Math.sqrt( dot( V, V ) ); }
function ptdist( V, W ) { return len( sub( V, W ) ); }
function inv( T ) {
  const det = T[0]*T[4] - T[1]*T[3];
  return [T[4]/det, -T[1]/det, (T[1]*T[5]-T[2]*T[4])/det,
    -T[3]/det, T[0]/det, (T[2]*T[3]-T[0]*T[5])/det];
}
function normalize( V ) {
  const l = len( V );
  return { x: V.x / l, y: V.y / l };
}

// --- SPIRALS ---
function newSpiral()
{
  _raw = extractParameters(tokenData.hash);

  setParams();
  chooseColors(false);
  setTilingType(_currentPreset);
  
  setFeatures();
  console.log(JSON.stringify(features));
}

// Sets sn, _presetIdx, _special, adjs, spA, spB
function setParams()
{
  sn = parseInt(tokenData.tokenId) % 1000000;
  _special = ((sn % 100) % 33 === 0); // (sn % 111) === 0
  if (_special) console.log("***");

  if (_special)
  {
    let spPresetIdx = Math.floor(_p5c.map(_raw[pNames._presetIndex], 0, 255, 0, spIds.length));
    _presetIdx = spIds[spPresetIdx];
    adjs = [ 0,0,0,0,0,0 ];
    _doubleSpiral = true;
  }
  else
  {
    _presetIdx = Math.floor(_p5c.map(_raw[pNames._presetIndex], 0, 255, 0, _paramData.length));
    adjs = [ _raw[pNames._adjust1], _raw[pNames._adjust2], _raw[pNames._adjust3],
             _raw[pNames._adjust4], _raw[pNames._adjust5], _raw[pNames._adjust6]];
    _doubleSpiral = false;
  }

  // stick with values that work for all presets
  spA = 2;
  spB = 7; 

  _currentPreset = _paramData[_presetIdx];
  _currentPreset.sh = _shapeData[_currentPreset.s];

  if (_currentPreset.sh.t == 3) 
  {
    spB = 6;
  }
  if (_currentPreset.k != undefined && _currentPreset.k)
  {
    adjs = [ 0,0,0,0,0,0 ];
  }
  //console.log("presetIdx=" + _presetIdx + ", type=" + _presets[_presetIdx].t + ", A=" + spA + ", B=" + spB);
}

function setTilingType(_typeData, _keepParams = false)
{
  _tiling.reset( _typeData.sh.t );
  _tParams = _tiling.getParameters();

  _tileColorSet = new TileCol( _tiling, _cols.slice( 0, 3 ) );

  _edges = [];

  // console.log("preset type=" + typeData.t + ", edges needed: " + tiling.numEdgeShapes() + ", given: " + typeData.e.length);
  let _adjMax = _keepParams ? 0 : 0.02; //0.02;
  if (_typeData.p != undefined && Array.isArray(_typeData.p))
  {
    _tParams = _typeData.p;
    for( let i = 0; i < _tParams.length; ++i ) 
    {
      //small adjustments
      if (adjs[i] > 0) _tParams[i] = Math.max(0.004, _tParams[i] + (adjs[i] / 256) * _adjMax - (_adjMax/2));
    }
  }
  else
  {
    // console.log("params=" + JSON.stringify(params));
    for( let i = 0; i < _tParams.length; ++i ) 
    {
      if (adjs[i] > 0) _tParams[i] = Math.max(0.004, _tParams[i] + (adjs[i] / 256) * (_adjMax*2) - _adjMax);
    }
  }
  _tiling.setParameters( _tParams );

  // use presets
  //console.log("edges=" + JSON.stringify(typeData.e));
  _edges = _typeData.sh.e;

  defineShape();

  // remove sliders
  if (!_slidersHidden)
  {
    removeSliders();
    addSliders();
  }
}

function defineShape()
{
  _tileShape = [];
  let _vertices = [];

  for( let i of _tiling.parts() ) 
  {
    const ej = _edges[i.id];
    let cur = i.rev ? (ej.length-2) : 1;
    const inc = i.rev ? -1 : 1;

    for( let idx = 0; idx < ej.length - 1; ++idx ) 
    {
      const { x, y } = mul( i.T, ej[cur] );
      _tileShape.push( { x : x, y : y } );
      _vertices.push( x );
      _vertices.push( y );
      cur += inc;
    }
  }
  _tris = earcut( _vertices );

  drawTranslationalUnit();
}

function getTilingRect( t1, t2 )
{
  const t1l = len( _tiling.getT1() );
  const t2l = len( _tiling.getT2() );

  const _margin = Math.sqrt( t1l*t1l + t2l*t2l );

  const det = t1.x*t2.y - t2.x*t1.y;

  const _pts = [
    { x: 0, y: 0 },
    (det < 0.0) ? t2 : t1,
    { x: t1.x + t2.x, y: t1.y + t2.y },
    (det < 0.0) ? t1 : t2 ];

  const v = normalize( sub( _pts[1], _pts[0] ) );
  const w = normalize( sub( _pts[3], _pts[0] ) );

  return [
    { x: _pts[0].x+_margin*(-v.x-w.x), y: _pts[0].y+_margin*(-v.y-w.y) },
    { x: _pts[1].x+_margin*(v.x-w.x), y: _pts[1].y+_margin*(v.y-w.y) },
    { x: _pts[2].x+_margin*(v.x+w.x), y: _pts[2].y+_margin*(v.y+w.y) },
    { x: _pts[3].x+_margin*(-v.x+w.x), y: _pts[3].y+_margin*(-v.y+w.y) } ];
}

function scaleVec( v, a )
{
  return { x: v.x * a, y: v.y * a };
}

// Draw one tile
function drawTranslationalUnit()
{
  if( og == null ) 
  {
    og = _p5c.createGraphics( OG_SIZE, OG_SIZE ); 
  }

  og.background( _cols[0] );

  clr = _tileColorSet;

  const r1 = Pmut.rank( clr.p1 );
  const r2 = Pmut.rank( clr.p2 );

  // t1 and t2 are translation vectors
  const t1 = scaleVec( _tiling.getT1(), r1 );
  const t2 = scaleVec( _tiling.getT2(), r2 );

  const det = (t1.x*t2.y - t2.x*t1.y);
  og_M = [ t2.y / det, -t1.y / det, -t2.x / det, t1.x / det ];
  const M = og_M;

  const est_sc = Math.sqrt( Math.abs( det / (r1 * r2) ) );

  og.push();
  og.applyMatrix( M[0], M[1], M[2], M[3], 0.0, 0.0 );
  const bx = getTilingRect( t1, t2 );

  for( let i of _tiling.fillRegionQuad( bx[0], bx[1], bx[2], bx[3] ) ) {
    const TT = i.T;
    let tshape = [];
    for( let v of _tileShape ) {
      let P = mul( TT, v );
      P.x *= OG_SIZE;
      P.y *= OG_SIZE;
      tshape.push( P );
    }

    const col = clr.getColour( i.t1, i.t2, i.aspect );

    og.fill( col );
    og.stroke( col );
    og.strokeWeight( est_sc );

    for( let idx = 0; idx < _tris.length; idx += 3 ) {
      og.triangle( 
        tshape[_tris[idx]].x, tshape[_tris[idx]].y,
        tshape[_tris[idx+1]].x, tshape[_tris[idx+1]].y,
        tshape[_tris[idx+2]].x, tshape[_tris[idx+2]].y );
    }

    if (_lineStyle == _lineModes.None && _colorScheme != _schemes.BW)
    {
      og.noStroke();
    }
    else
    {
      og.stroke( _lineColor );
    }
    
    og.strokeWeight( 6 * est_sc );
    og.strokeJoin( _p5c.ROUND );
    og.noFill();

    for( let idx = 0; idx < _tileShape.length; ++idx ) {
      const P = tshape[idx];
      const Q = tshape[(idx+1)%_tileShape.length];

      og.line( P.x, P.y, Q.x, Q.y );
    }
  }

  og.pop();
  calcTransform();
}

function calcTransform()
{
  const t1 = _tiling.getT1();
  const t2 = _tiling.getT2();
  const pA = Pmut.pow( clr.p1, spA );
  const pB = Pmut.pow( clr.p2, spB );
  const rv = Pmut.rank( Pmut.mult( pA, pB ) );

  let v = {
    x: spA * t1.x + spB * t2.x, 
    y: spA * t1.y + spB * t2.y };

  v = scaleVec( v, rv );

  _tiling_T = mul(
    matchSeg( {x:0.0,y:0.0}, {x:0.0,y:_p5c.TWO_PI} ),
    inv( matchSeg( {x:0.0,y:0.0}, v ) ) );

  _tiling_T[2] = _tiling_V.x;
  _tiling_T[5] = _tiling_V.y;

  _tiling_iT = inv( _tiling_T );
}

function drawSpiral()
{
  console.log("W,H = " + _WIDTH + "," + _HEIGHT);
  
  _p5c.noStroke();
  _p5c.shader( _shader1 );

  _shader1.setUniform( "res", [_WIDTH/2, _HEIGHT/2] );
  console.log("og w,h = " + og.width + "," + og.height);
  _shader1.setUniform( "tex", og );
  _shader1.setUniform( "mob", _doubleSpiral );
  _shader1.setUniform( "fullscreen", _fullscreen );

  const M = [og_M[0], og_M[2], 0.0, og_M[1], og_M[3], 0.0];
  const T = mul( M, _tiling_iT );
  _shader1.setUniform( "M", [T[0],T[3],0.0,T[1],T[4],0.0,T[2],T[5],1.0] );

  // rect(WIDTH/2,HEIGHT/2,WIDTH/2,HEIGHT/2);
  // It turns out that it basically doesn't matter what you put here,
  // as long as you send some geometry into the pipeline.  Processing
  // will feed WebGL a rectangle from (0,0) to (1,1) with matching
  // texture coordinates, and the shader will see that in the context
  // of a viewport covering (-1,-1) to (1,1). 
  _p5c.rect(0, 1, 2, 3);
}

function animateParam(paramIdx, minVal, maxVal, speed = 1)
{
  if (!_slidersHidden) _toggleSliders();

  // 2DO: comment out checking logic to reduce code size
  let numParams = _tiling.numParameters();
  if (paramIdx < 0 || paramIdx >= numParams || minVal >= maxVal || minVal < 0 || maxVal <= 0) return;

  if (paramIdx == apIdx)
  {
    // stop current param animation
    apIdx = -1;
  }
  else
  {
    let startParams = _tiling.getParameters();
    apVal = startParams[paramIdx];
    apIdx = paramIdx;
    apMin = Math.max(minVal, 0.005);
    apMax = Math.min(maxVal, 1.99);
    apChg = 0.0005 * speed;
    _p5c.loop();
  }
}

// --- SLIDERS ---

function removeSliders()
{
  if( _uiSliders != null ) {
    for( let s of _uiSliders ) {
      s.remove();
    }
    _uiSliders = null;
  }
}

function addSliders()
{
  let yy = 50;
  _uiSliders = [];

  for( let i = 0; i < _tParams.length; ++i ) {
    let sl = _p5c.createSlider( 0.0, 500.0, _tParams[i] * 250.0 );
    sl.position( _WIDTH/2 + 20, yy );
    sl.style( "width", "" + (_WIDTH/2-100) + "px" );
    sl.input( sliderParamChanged );
    yy += 30;
    _uiSliders.push( sl );
  }
}

function _toggleSliders()
{
  _slidersHidden = !_slidersHidden;
  if (_slidersHidden)
  {
    removeSliders();
  }
  else
  {
    addSliders();
  }
}

function sliderParamChanged()
{
  if( _uiSliders != null ) 
  {
    const params = _uiSliders.map( sl => sl.value() / 250.0 );
    _tiling.setParameters( params );
    defineShape();
    _p5c.loop();
  }
}

// --- SHADER CODE ---
let vs_code = 
'precision highp float;' +
'attribute vec3 aPosition;' +
'uniform bool fullscreen;' +
'varying vec2 uv;' +
'void main() {' +
	'  uv = aPosition.xy;' +
	'  vec4 pos = vec4(aPosition, 1.0);' +
	'  if( fullscreen ) {' +
		'    pos = vec4( 2.0*pos.x-1.0, 2.0*pos.y-1.0, pos.z, 1.0 );' +
	'  }' +
	'  pos.y = -pos.y;' +
	'  gl_Position = pos;' +
'}';
let fs_code = 
'precision highp float;' +
'uniform sampler2D tex;' +
'uniform vec2 res;' +
'uniform mat3 M;' +
'uniform bool mob;' +
'varying vec2 uv;' +
'void main() {' +
	'  vec2 asp = vec2( 1.0, res.y / res.x );' +
	'  vec2 cen = 0.5 * asp;' +
	'  vec2 v = uv * asp;' +
	'  vec2 p = v - cen;' +
	'  if( mob ) {' +
		'    float dia = length( res );' +
		'    float c = res.x / dia;' +
		'    float s = res.y / dia;' +
		'    mat3 rot = mat3( c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0 );' +
		'    p = (rot*vec3(p,1.0)).xy;' +
		'    p = (1.5*p+vec2(0.5,0.0));' +
		'    float l = (p.x-1.0)*(p.x-1.0) + p.y*p.y;' +
		'    p = vec2( (p.x-p.x*p.x-p.y*p.y)/l, p.y/l );' +
	'  }' +
	'  vec2 merc = vec2( log( length( p ) ), atan( p.y, p.x ) );' +
	'  vec4 col = texture2D( tex, (M * vec3( merc, 1.0 )).xy );' +
	'  gl_FragColor = col;' +
'}';

};
let myp5 = new p5( skt, 'skt' );

// --- LIBRARIES ---

// --- HSluv ---
(function() {function f(a){var c=[],b=Math.pow(a+16,3)/1560896;b=b>g?b:a/k;for(var d=0;3>d;){var e=d++,h=l[e][0],w=l[e][1];e=l[e][2];for(var x=0;2>x;){var y=x++,z=(632260*e-126452*w)*b+126452*y;c.push({b:(284517*h-94839*e)*b/z,a:((838422*e+769860*w+731718*h)*a*b-769860*y*a)/z})}}return c}function m(a){a=f(a);for(var c=Infinity,b=0;b<a.length;){var d=a[b];++b;c=Math.min(c,Math.abs(d.a)/Math.sqrt(Math.pow(d.b,2)+1))}return c}
function n(a,c){c=c/360*Math.PI*2;a=f(a);for(var b=Infinity,d=0;d<a.length;){var e=a[d];++d;e=e.a/(Math.sin(c)-e.b*Math.cos(c));0<=e&&(b=Math.min(b,e))}return b}function p(a,c){for(var b=0,d=0,e=a.length;d<e;){var h=d++;b+=a[h]*c[h]}return b}function q(a){return.0031308>=a?12.92*a:1.055*Math.pow(a,.4166666666666667)-.055}function r(a){return.04045<a?Math.pow((a+.055)/1.055,2.4):a/12.92}function t(a){return[q(p(l[0],a)),q(p(l[1],a)),q(p(l[2],a))]}
function u(a){a=[r(a[0]),r(a[1]),r(a[2])];return[p(v[0],a),p(v[1],a),p(v[2],a)]}function A(a){var c=a[0],b=a[1];a=c+15*b+3*a[2];0!=a?(c=4*c/a,a=9*b/a):a=c=NaN;b=b<=g?b/B*k:116*Math.pow(b/B,.3333333333333333)-16;return 0==b?[0,0,0]:[b,13*b*(c-C),13*b*(a-D)]}function E(a){var c=a[0];if(0==c)return[0,0,0];var b=a[1]/(13*c)+C;a=a[2]/(13*c)+D;c=8>=c?B*c/k:B*Math.pow((c+16)/116,3);b=0-9*c*b/((b-4)*a-b*a);return[b,c,(9*c-15*a*c-a*b)/(3*a)]}
function F(a){var c=a[0],b=a[1],d=a[2];a=Math.sqrt(b*b+d*d);1E-8>a?b=0:(b=180*Math.atan2(d,b)/Math.PI,0>b&&(b=360+b));return[c,a,b]}function G(a){var c=a[1],b=a[2]/360*2*Math.PI;return[a[0],Math.cos(b)*c,Math.sin(b)*c]}function H(a){var c=a[0],b=a[1];a=a[2];if(99.9999999<a)return[100,0,c];if(1E-8>a)return[0,0,c];b=n(a,c)/100*b;return[a,b,c]}function I(a){var c=a[0],b=a[1];a=a[2];if(99.9999999<c)return[a,0,100];if(1E-8>c)return[a,0,0];var d=n(c,a);return[a,b/d*100,c]}
function J(a){var c=a[0],b=a[1];a=a[2];if(99.9999999<a)return[100,0,c];if(1E-8>a)return[0,0,c];b=m(a)/100*b;return[a,b,c]}function K(a){var c=a[0],b=a[1];a=a[2];if(99.9999999<c)return[a,0,100];if(1E-8>c)return[a,0,0];var d=m(c);return[a,b/d*100,c]}function L(a){for(var c="#",b=0;3>b;){var d=b++;d=Math.round(255*a[d]);var e=d%16;c+=M.charAt((d-e)/16|0)+M.charAt(e)}return c}
function N(a){a=a.toLowerCase();for(var c=[],b=0;3>b;){var d=b++;c.push((16*M.indexOf(a.charAt(2*d+1))+M.indexOf(a.charAt(2*d+2)))/255)}return c}function O(a){return t(E(G(a)))}function P(a){return F(A(u(a)))}function Q(a){return O(H(a))}function R(a){return I(P(a))}function S(a){return O(J(a))}function T(a){return K(P(a))}
var l=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]],v=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]],B=1,C=.19783000664283,D=.46831999493879,k=903.2962962,g=.0088564516,M="0123456789abcdef";
window.hsluv={hsluvToRgb:Q,rgbToHsluv:R,hpluvToRgb:S,rgbToHpluv:T,hsluvToHex:function(a){return L(Q(a))},hexToHsluv:function(a){return R(N(a))},hpluvToHex:function(a){return L(S(a))},hexToHpluv:function(a){return T(N(a))},lchToHpluv:K,hpluvToLch:J,lchToHsluv:I,hsluvToLch:H,lchToLuv:G,luvToLch:F,xyzToLuv:A,luvToXyz:E,xyzToRgb:t,rgbToXyz:u,lchToRgb:O,rgbToLch:P};})();

// --- Earcut ---
// Earcut implementation from 
// https://github.com/mapbox/earcut

function earcut(data, holeIndices, dim) {

  dim = dim || 2;

  var hasHoles = holeIndices && holeIndices.length,
      outerLen = hasHoles ? holeIndices[0] * dim : data.length,
      outerNode = linkedList(data, 0, outerLen, dim, true),
      triangles = [];

  if (!outerNode || outerNode.next === outerNode.prev) return triangles;

  var minX, minY, maxX, maxY, x, y, invSize;

  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

  // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
  if (data.length > 80 * dim) {
      minX = maxX = data[0];
      minY = maxY = data[1];

      for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
      }

      // minX, minY and invSize are later used to transform coords into integers for z-order calculation
      invSize = Math.max(maxX - minX, maxY - minY);
      invSize = invSize !== 0 ? 1 / invSize : 0;
  }

  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

  return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
  var i, last;

  if (clockwise === (signedArea(data, start, end, dim) > 0)) {
      for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
  } else {
      for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
  }

  if (last && equals(last, last.next)) {
      removeNode(last);
      last = last.next;
  }

  return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;

  var p = start,
      again;
  do {
      again = false;

      if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next) break;
          again = true;

      } else {
          p = p.next;
      }
  } while (again || p !== end);

  return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;

  // interlink polygon nodes in z-order
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

  var stop = ear,
      prev, next;

  // iterate through ears, slicing them one by one
  while (ear.prev !== ear.next) {
      prev = ear.prev;
      next = ear.next;

      if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          // cut off the triangle
          triangles.push(prev.i / dim);
          triangles.push(ear.i / dim);
          triangles.push(next.i / dim);

          removeNode(ear);

          // skipping the next vertex leads to less sliver triangles
          ear = next.next;
          stop = next.next;

          continue;
      }

      ear = next;

      // if we looped through the whole remaining polygon and can't find any more ears
      if (ear === stop) {
          // try filtering points and slicing again
          if (!pass) {
              earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

          // if this didn't work, try curing all small self-intersections locally
          } else if (pass === 1) {
              ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
              earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

          // as a last resort, try splitting the remaining polygon into two
          } else if (pass === 2) {
              splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }

          break;
      }
  }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
  var a = ear.prev,
      b = ear,
      c = ear.next;

  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

  // now make sure we don't have other points inside the potential ear
  var p = ear.next.next;

  while (p !== ear.prev) {
      if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0) return false;
      p = p.next;
  }

  return true;
}

function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev,
      b = ear,
      c = ear.next;

  if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

  // triangle bbox; min & max are calculated like this for speed
  var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
      minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
      maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
      maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

  // z-order range for the current triangle bbox;
  var minZ = zOrder(minTX, minTY, minX, minY, invSize),
      maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

  var p = ear.prevZ,
      n = ear.nextZ;

  // look for points inside the triangle in both directions
  while (p && p.z >= minZ && n && n.z <= maxZ) {
      if (p !== ear.prev && p !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0) return false;
      p = p.prevZ;

      if (n !== ear.prev && n !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
          area(n.prev, n, n.next) >= 0) return false;
      n = n.nextZ;
  }

  // look for remaining points in decreasing z-order
  while (p && p.z >= minZ) {
      if (p !== ear.prev && p !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
          area(p.prev, p, p.next) >= 0) return false;
      p = p.prevZ;
  }

  // look for remaining points in increasing z-order
  while (n && n.z <= maxZ) {
      if (n !== ear.prev && n !== ear.next &&
          pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
          area(n.prev, n, n.next) >= 0) return false;
      n = n.nextZ;
  }

  return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
  var p = start;
  do {
      var a = p.prev,
          b = p.next.next;

      if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

          triangles.push(a.i / dim);
          triangles.push(p.i / dim);
          triangles.push(b.i / dim);

          // remove two nodes involved
          removeNode(p);
          removeNode(p.next);

          p = start = b;
      }
      p = p.next;
  } while (p !== start);

  return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  // look for a valid diagonal that divides the polygon into two
  var a = start;
  do {
      var b = a.next.next;
      while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
              // split the polygon in two by the diagonal
              var c = splitPolygon(a, b);

              // filter colinear points around the cuts
              a = filterPoints(a, a.next);
              c = filterPoints(c, c.next);

              // run earcut on each half
              earcutLinked(a, triangles, dim, minX, minY, invSize);
              earcutLinked(c, triangles, dim, minX, minY, invSize);
              return;
          }
          b = b.next;
      }
      a = a.next;
  } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
  var queue = [],
      i, len, start, end, list;

  for (i = 0, len = holeIndices.length; i < len; i++) {
      start = holeIndices[i] * dim;
      end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      list = linkedList(data, start, end, dim, false);
      if (list === list.next) list.steiner = true;
      queue.push(getLeftmost(list));
  }

  queue.sort(compareX);

  // process holes from left to right
  for (i = 0; i < queue.length; i++) {
      eliminateHole(queue[i], outerNode);
      outerNode = filterPoints(outerNode, outerNode.next);
  }

  return outerNode;
}

function compareX(a, b) {
  return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
  outerNode = findHoleBridge(hole, outerNode);
  if (outerNode) {
      var b = splitPolygon(outerNode, hole);

      // filter collinear points around the cuts
      filterPoints(outerNode, outerNode.next);
      filterPoints(b, b.next);
  }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
  var p = outerNode,
      hx = hole.x,
      hy = hole.y,
      qx = -Infinity,
      m;

  // find a segment intersected by a ray from the hole's leftmost point to the left;
  // segment's endpoint with lesser x will be potential connection point
  do {
      if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
              qx = x;
              if (x === hx) {
                  if (hy === p.y) return p;
                  if (hy === p.next.y) return p.next;
              }
              m = p.x < p.next.x ? p : p.next;
          }
      }
      p = p.next;
  } while (p !== outerNode);

  if (!m) return null;

  if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

  // look for points inside the triangle of hole point, segment intersection and endpoint;
  // if there are no points found, we have a valid connection;
  // otherwise choose the point of the minimum angle with the ray as connection point

  var stop = m,
      mx = m.x,
      my = m.y,
      tanMin = Infinity,
      tan;

  p = m;

  do {
      if (hx >= p.x && p.x >= mx && hx !== p.x &&
              pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

          tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

          if (locallyInside(p, hole) &&
              (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
              m = p;
              tanMin = tan;
          }
      }

      p = p.next;
  } while (p !== stop);

  return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
  var p = start;
  do {
      if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
      p.prevZ = p.prev;
      p.nextZ = p.next;
      p = p.next;
  } while (p !== start);

  p.prevZ.nextZ = null;
  p.prevZ = null;

  sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
  var i, p, q, e, tail, numMerges, pSize, qSize,
      inSize = 1;

  do {
      p = list;
      list = null;
      tail = null;
      numMerges = 0;

      while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
              pSize++;
              q = q.nextZ;
              if (!q) break;
          }
          qSize = inSize;

          while (pSize > 0 || (qSize > 0 && q)) {

              if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                  e = p;
                  p = p.nextZ;
                  pSize--;
              } else {
                  e = q;
                  q = q.nextZ;
                  qSize--;
              }

              if (tail) tail.nextZ = e;
              else list = e;

              e.prevZ = tail;
              tail = e;
          }

          p = q;
      }

      tail.nextZ = null;
      inSize *= 2;

  } while (numMerges > 1);

  return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
  // coords are transformed into non-negative 15-bit integer range
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;

  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
  var p = start,
      leftmost = start;
  do {
      if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
      p = p.next;
  } while (p !== start);

  return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
         (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
         (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
         (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
          (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
          equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));

  if (o1 !== o2 && o3 !== o4) return true; // general case

  if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
  if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
  if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
  if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

  return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
  var p = a;
  do {
      if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
              intersects(p, p.next, a, b)) return true;
      p = p.next;
  } while (p !== a);

  return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ?
      area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
      area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
  var p = a,
      inside = false,
      px = (a.x + b.x) / 2,
      py = (a.y + b.y) / 2;
  do {
      if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
              (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
          inside = !inside;
      p = p.next;
  } while (p !== a);

  return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y),
      b2 = new Node(b.i, b.x, b.y),
      an = a.next,
      bp = b.prev;

  a.next = b;
  b.prev = a;

  a2.next = an;
  an.prev = a2;

  b2.next = a2;
  a2.prev = b2;

  bp.next = b2;
  b2.prev = bp;

  return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);

  if (!last) {
      p.prev = p;
      p.next = p;

  } else {
      p.next = last.next;
      p.prev = last;
      last.next.prev = p;
      last.next = p;
  }
  return p;
}

function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;

  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
  // vertex index in coordinates array
  this.i = i;

  // vertex coordinates
  this.x = x;
  this.y = y;

  // previous and next vertex nodes in a polygon ring
  this.prev = null;
  this.next = null;

  // z-order curve value
  this.z = null;

  // previous and next nodes in z-order
  this.prevZ = null;
  this.nextZ = null;

  // indicates whether this is a steiner point
  this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

  var _polyArea = Math.abs(signedArea(data, 0, outerLen, dim));
  if (hasHoles) {
      for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          _polyArea -= Math.abs(signedArea(data, start, end, dim));
      }
  }

  var _triArea = 0;
  for (i = 0; i < triangles.length; i += 3) {
      var a = triangles[i] * dim;
      var b = triangles[i + 1] * dim;
      var c = triangles[i + 2] * dim;
      _triArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
          (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
  }

  return _polyArea === 0 && _triArea === 0 ? 0 :
      Math.abs((_triArea - _polyArea) / _polyArea);
};

function signedArea(data, start, end, dim) {
  var sum = 0;
  for (var i = start, j = end - dim; i < end; i += dim) {
      sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
      j = i;
  }
  return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
  var dim = data[0][0].length,
      result = {vertices: [], holes: [], dimensions: dim},
      holeIndex = 0;

  for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
      }
      if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
      }
  }
  return result;
};

// --- TACTILE ---

/*
 * Tactile-JS
 * Copyright 2018 Craig S. Kaplan, csk@uwaterloo.ca
 * Distributed under the terms of the 3-clause BSD license.
 */
const ES = {
	J : 10001,
	U : 10002,
	S : 10003,
	I : 10004,
};
const numTypes = 81;

function mul( A, B ) 
{
	if( B.hasOwnProperty( 'x' ) ) {
		// Matrix * Point
		return { 
			x : A[0]*B.x + A[1]*B.y + A[2],
			y : A[3]*B.x + A[4]*B.y + A[5] };
	} else {
		// Matrix * Matrix
		return [A[0]*B[0] + A[1]*B[3], 
			A[0]*B[1] + A[1]*B[4],
			A[0]*B[2] + A[1]*B[5] + A[2],

			A[3]*B[0] + A[4]*B[3], 
			A[3]*B[1] + A[4]*B[4],
			A[3]*B[2] + A[4]*B[5] + A[5]];
	}
};

function matchSeg( p, q )
{
	return [q.x-p.x, p.y-q.y, p.x,  q.y-p.y, q.x-p.x, p.y];
};

const tilingTypes = [1, 2, 3, 4, 5, 6, 8, 9, 13, 14, 15, 17, 22, 23, 25, 26, 27];

const es_00 = [ ES.J, ES.J, ES.J ];
const es_01 = [ ES.S, ES.J, ES.S, ES.S, ES.S ];
const es_02 = [ ES.S, ES.J, ES.J, ES.S ];
const es_03 = [ ES.S, ES.J, ES.S, ES.J ];
const es_04 = [ ES.S, ES.S, ES.S ];
const es_05 = [ ES.S, ES.J ];

const es_09 = [ ES.U, ES.S, ES.S ];
const es_10 = [ ES.J, ES.I ];
const es_11 = [ ES.S, ES.I, ES.S ];

const es_13 = [ ES.I, ES.S ];

const es_16 = [ ES.S, ES.J, ES.J ];
const es_17 = [ ES.J, ES.J, ES.I ];
const es_18 = [ ES.S, ES.S, ES.J, ES.S ];

const es_20 = [ ES.J, ES.J, ES.S ];
const es_21 = [ ES.S, ES.I, ES.I ];

const esi_00 = [ 0, 1, 2, 0, 1, 2 ];
const esi_01 = [ 0, 0, 1, 2, 2, 1 ];
const esi_02 = [ 0, 1, 0, 2, 1, 2 ];
const esi_03 = [ 0, 1, 2, 3, 1, 4 ];
const esi_04 = [ 0, 1, 2, 2, 1, 3 ];
const esi_05 = [ 0, 1, 2, 3, 1, 3 ];

const esi_07 = [ 0, 1, 1, 0, 1, 1 ];

const esi_09 = [ 0, 1, 2, 0, 2, 1 ];
const esi_10 = [ 0, 1, 0, 0, 1, 0 ];
const esi_11 = [ 0, 1, 2, 2, 1, 0 ];

const esi_14 = [ 0, 0, 1, 2, 1 ];
const esi_15 = [ 0, 1, 2, 3, 2 ];
const esi_16 = [ 0, 1, 2, 1, 2 ];

const eo_00 = [ false, false, false, false, false, false, false, true, false, true, false, true ];
const eo_01 = [ false, false, true, true, false, false, false, false, true, true, false, true ];
const eo_02 = [ false, false, false, false, true, true, false, false, false, true, true, true ];
const eo_03 = [ false, false, false, false, false, false, false, false, false, true, false, false ];
const eo_04 = [ false, false, false, false, false, false, true, true, false, true, false, false ];
const eo_05 = [ false, false, false, false, false, false, false, false, true, true, true, true ];

const eo_07 = [ false, false, false, false, false, false, false, false, false, false, false, false ];
const eo_08 = [ false, false, false, false, true, true, false, false, false, false, true, true ];

const eo_10 = [ false, false, false, false, false, false, false, true, true, false, true, false ];
const eo_11 = [ false, false, false, false, true, true, false, true, true, false, true, false ];
const eo_12 = [ false, false, false, false, false, false, true, false, true, false, true, false ];

const eo_14 = [ false, false, false, false, true, false, false, false, false, false, true, false ];

const eo_16 = [ false, false, true, true, false, false, false, false, false, true ];
const eo_17 = [ false, false, false, false, false, false, false, false, false, true ];
const eo_18 = [ false, false, true, false, false, false, false, false, true, false ];
const eo_19 = [ false, false, false, false, false, false, true, true, true, true ];

const dp_00 = [ 0.12239750492, 0.5, 0.143395479017, 0.625 ];
const dp_01 = [ 0.12239750492, 0.5, 0.225335752741, 0.225335752741 ];
const dp_02 = [ 0.12239750492, 0.5, 0.225335752741, 0.625 ];
const dp_03 = [ 0.12239750492, 0.5, 0.315470053838, 0.5, 0.315470053838, 0.5 ];
const dp_04 = [ 0.12239750492, 0.5, 0.225335752741, 0.225335752741, 0.5 ];
const dp_05 = [ 0.12239750492, 0.5, 0.225335752741, 0.625, 0.5 ];

const dp_07 = [ 0.12239750492, 0.5, 0.225335752741 ];

const dp_09 = [ 0.12239750492, 0.225335752741 ];
const dp_10 = [ 0.12239750492, 0.225335752741, 0.5 ];
const dp_11 = [ 0.12239750492, 0.225335752741, 0.225335752741 ];

const dp_14 = [ 0.230769230769, 0.5, 0.225335752741 ];
const dp_15 = [ 0.230769230769, 0.5, 0.225335752741, 0.5 ];
const dp_16 = [ 0.230769230769, 0.225335752741 ];
const dp_17 = [ 0.141304, 0.465108, 0.534891 ];

const tvc_00 = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -2.5, 3.9, 0, 5.5, 0, -0.4, 0, 5, 0, -4, 0.5, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -5.5, 0, 0.5, 0, 0, 0, 4, -2 ];
const tvc_01 = [
	3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -2.5, 3.9, 0, 0, 3.5, -0.4, 0, 5, 0, 0, -2, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -3.5, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const tvc_02 = [
	0, 0, -3.5, 0, 0.5, 0, 0, 0, 4, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -2.5, 3.9, 0, 3.5, 0, -0.4, 0, 5, 0, 4, -4.5, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ];
const tvc_03 = [
	0, 0, -2.5, 0, 0, 0, 0.5, 0, 0, 0, 3, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 0, 0, 0.1, 0, 5, 0, 0, 0, 0, -2.5, 3.9, 0, 0, 0, 2.5, 0, -0.4, 0, 5, 0, 0, 0, 3, -3.5, 3.9, 0, 0, 0, 0, 0, 0.1, 0, 5, 0, 0, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ];
const tvc_04 = [
	3.9, 0, 0, 3.5, 0, -0.4, 0, 5, 0, 0, 5, -4.5, 3.9, 0, 0, 0, 0, 0.1, 0, 5, 0, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -3.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 0, 0.1, 0, 5, 0, 0, 0, -2.5 ];
const tvc_05 = [
	3.9, 0, 3.5, 0, 0, -0.4, 0, -5, 0, 4, 0, 0.5, 3.9, 0, 0, 0, 5, -2.4, 0, 5, 0, 0, 0, -1.5, 0, 0, 0, 0, 5, -2.5, 0, 0, 0, 0, 0, 1, 0, 0, -3.5, 0, 0, 0.5, 0, 0, 0, 4, 0, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 0, 0.1, 0, -5, 0, 0, 0, 2.5 ];
const tvc_07 = [
	0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0.1, 0, 5, 0, -2.5, 3.9, 0, 3.5, -0.4, 0, 5, 0, -2, 3.9, 0, 0, 0.1, 0, 5, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -3.5, 0.5, 0, 0, 0, 0.5 ];
const tvc_09 = [
	0, 0, 0, 0, 0, 0, 3.9, 0, 0.1, 0, 0, 0, 3.9, 3.5, -0.4, 0, 0, 0.5, 3.9, 0, 0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, -3.5, 0.5, 0, 0, 0.5 ];
const tvc_10 = [
	0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0.1, 0, 0, 0, 0, 3.9, 3.5, 0, -0.4, 0, 0, 5, -2, 3.9, 0, 0, 0.1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, -3.5, 0, 0.5, 0, 0, 5, -2 ];
const tvc_11 = [
	3.9, 3.5, -0.4, 0, 0, 0.5, 3.9, 0, 0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, -3.5, 0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 3.9, 0, 0.1, 0, 0, 0 ];
const tvc_12 = [
	0, -3.5, 0, 0.5, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0.1, 0, 0, 0, 0, 3.9, 0, 3.5, -0.4, 0, 0, 0, 0.5, 3.9, 0, 0, 0.1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1 ];
const tvc_15 = [
	3.9, 0, 0, 0.1, 0, 5, 0, -2.5, 3.9, 0, 3.5, -0.4, 0, 5, 0, -2, 3.9, 0, 0, 0.1, 0, 5, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ];
const tvc_16 = [
	3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -2.5, 3.9, 0, 3.5, 0, -0.4, 0, 5, 0, 4, -4, 3.9, 0, 0, 0, 0.1, 0, 5, 0, 0, -1.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
const tvc_17 = [
	3.9, 0, 0.1, 0, 0, 0, 3.9, 3.5, -0.4, 0, 0, 0.5, 3.9, 0, 0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ];
const tvc_18 = [
	0, 0, 5, -2.5, 0, 0, 0, 1, 0, 0, -5, 2.5, 0, 10, 0, -4, 0, 0, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0.1, 0, -5, 0, 2.5, 3.9, 0, 5, -2.4, 0, 5, 0, -1.5 ];

const tc_00 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 3.9, 0, 5.5, 0, -0.4, 0, 5, 0, -4, -0.5 ];
const tc_01 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7.8, 0, 3.5, 3.5, -0.8, 0, 0, 0, 0, 0 ];
const tc_02 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -7.8, 0, -7, 0, 0.8, 0, 0, 0, 0, -1 ];
const tc_03 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -7.8, 0, -2.5, 0, -2.5, 0, 0.8, 0, -10, 0, 3, 0, -3, 4 ];
const tc_04 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -15.6, 0, -7, -7, 0, 1.6, 0, 0, 0, 0, 0, -2 ];
const tc_05 = [ 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, -3, 7.8, 0, 7, 0, 0, -0.8, 0, 0, 0, 0, 0, 0 ];

const tc_07 = [ 0, 0, 0, 0, 0, 0, 0, -1, 7.8, 0, 7, -0.8, 0, 0, 0, 0 ];

const tc_10 = [ 0, 0, 0, 0, 0, -1, 3.9, 3.5, -0.4, 0, 0, -0.5 ];
const tc_11 = [ 0, 0, 0, 0, 0, 0, 0, -1, 7.8, 7, 0, -0.8, 0, 0, 0, 0 ];
const tc_12 = [ 3.9, 3.5, -0.4, 0, 0, 0.5, 3.9, 3.5, -0.4, 0, 0, -0.5 ];
const tc_13 = [ 0, 0, 0, 0, 0, 0, 0, -1, -7.8, -3.5, -3.5, 0.8, 0, 0, 0, 0 ];
const tc_16 = [ -7.8, 0, -3.5, 0.3, 0, 0, 0, -0.5, -7.8, 0, -3.5, 0.3, 0, 0, 0, 0.5 ];
const tc_17 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7.8, 0, 3.5, 0, -0.3, 0, 10, 0, 4, -7.5 ];
const tc_19 = [ 0, 0, 0, 0, 0, 0, 0, 1, -15.6, 0, -7, 0.6, 0, 0, 0, 0 ];
const tc_20 = [ 0, 0, 0, 0, 0, 1, -7.8, -3.5, 0.3, 0, 0, 0.5 ];
const tc_21 = [ 0, 0, 0, 0, 0, 10, 0, -3, -7.8, 0, -10, 4.8, 0, 0, 0, 0 ];

const ac_00 = [
	0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ];
const ac_01 = [
	0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 7.8, 0, 0, 3.5, -0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, -0.5 ];
const ac_02 = [
	0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -3.9, 0, -3.5, 0, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 5, 0, 4, -4.5 ];
const ac_03 = [
	0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2.5, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 3, 0, 0, -1 ];
const ac_04 = [
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 7.8, 0, 0, 3.5, 0, -0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 10, 0, 0, 5, -6, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -3.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -7.8, 0, -3.5, -3.5, 0, 0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 10, 0, 0, 5, -7.5 ];
const ac_05 = [
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 7.8, 0, 3.5, 0, 5, -2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 4, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 3.9, 0, 0, 0, 5, -2.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 0, -1.5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3.9, 0, 3.5, 0, 0, -0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -5, 0, 4, 0, 0.5 ];
const ac_06 = [
	0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -0.5, 0, 0, -0.866025403784, 0, 0, 0.5, 0, 0, 0.866025403784, 0, 0, -0.5, 0, 0, -0.866025403784, 0, 0, -0.5, 0, 0, 0.866025403784, 0, 0, 1, 0, 0, -0.866025403784, 0, 0, -0.5, 0, 0, 0 ];
const ac_07 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 7.8, 0, 3.5, -0.3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -0.5 ];

const ac_09 = [
	0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ];
const ac_10 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 7.8, 3.5, 0, -0.3, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 5, -2 ];
const ac_11 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, -3.5, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0.5 ];

const ac_14 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ];
const ac_15 = [
	0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 7.8, 0, 3.5, 0, -0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 10, 0, 4, -6.5 ];
const ac_17 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 0, -7.8, 0, -3.5, 0.3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -0.5, 0, 0, 0, 1, 0, 0, 0, 0, -7.8, 0, -3.5, 0.3, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0.5 ];
const ac_18 = [
	0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1 ];
const ac_19 = [
	0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 10, 0, -3, 0, 0, 0, 1, 0, 0, 0, 0, -3.9, 0, -5, 2.4, 0, 0, 0, 0, 0, 0, 0, -1, 0, 5, 0, -1.5, 0, 0, 0, -1, 0, 0, 0, 0, 3.9, 0, 5, -2.4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, -1.5 ];

const c_00 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 3 ];
const c_01 = [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 3 ];
const c_02 = [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 1, 3 ];
const c_03 = [ 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 1, 3 ];
const c_04 = [ 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 3 ];

const c_06 = [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 2, 3 ];

const c_08 = [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 3 ];

const c_10 = [ 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 2, 3 ];
const c_11 = [ 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 0, 3 ];

const tiling_type_data = [
	// IH00 is undefined
	null,
	// IH01
	{
		n_par: 4,
		n_as: 1,
		n_v: 6,
		n_es: 3,
		es: es_00,
		eo: eo_00,
		esi: esi_00,
		d_par: dp_00,
		v_co: tvc_00,
		tr_co: tc_00,
		as_co: ac_00,
		clr: c_00
	},
	// IH02
	{
		n_par: 4,
		n_as: 2,
		n_v: 6,
		n_es: 3,
		es: es_00,
		eo: eo_01,
		esi: esi_01,
		d_par: dp_01,
		v_co: tvc_01,
		tr_co: tc_01,
		as_co: ac_01,
		clr: c_01
	},
	// IH03
	{
		n_par: 4,
		n_as: 2,
		n_v: 6,
		n_es: 3,
		es: es_00,
		eo: eo_02,
		esi: esi_02,
		d_par: dp_02,
		v_co: tvc_02,
		tr_co: tc_02,
		as_co: ac_02,
		clr: c_02
	},
	// IH04
	{
		n_par: 6,
		n_as: 2,
		n_v: 6,
		n_es: 5,
		es: es_01,
		eo: eo_03,
		esi: esi_03,
		d_par: dp_03,
		v_co: tvc_03,
		tr_co: tc_03,
		as_co: ac_03,
		clr: c_02
	},
	// IH05
  null,
	// IH06
	{
		n_par: 5,
		n_as: 4,
		n_v: 6,
		n_es: 4,
		es: es_03,
		eo: eo_05,
		esi: esi_05,
		d_par: dp_05,
		v_co: tvc_05,
		tr_co: tc_05,
		as_co: ac_05,
		clr: c_04
    },
    null,
	// IH08
	{
		n_par: 4,
		n_as: 1,
		n_v: 6,
		n_es: 3,
		es: es_04,
		eo: eo_07,
		esi: esi_00,
		d_par: dp_00,
		v_co: tvc_00,
		tr_co: tc_00,
		as_co: ac_00,
		clr: c_00
	},
	// IH09
	{
		n_par: 3,
		n_as: 2,
		n_v: 6,
		n_es: 2,
		es: es_05,
		eo: eo_08,
		esi: esi_07,
		d_par: dp_07,
		v_co: tvc_07,
		tr_co: tc_07,
		as_co: ac_07,
		clr: c_06
    },
    null,
    null,
    null,
	// IH13
	{
		n_par: 3,
		n_as: 2,
		n_v: 6,
		n_es: 3,
		es: es_09,
		eo: eo_10,
		esi: esi_09,
		d_par: dp_10,
		v_co: tvc_10,
		tr_co: tc_11,
		as_co: ac_10,
		clr: c_06
	},
	// IH14
	null,
	// IH15
	{
		n_par: 3,
		n_as: 2,
		n_v: 6,
		n_es: 3,
		es: es_11,
		eo: eo_12,
		esi: esi_11,
		d_par: dp_11,
		v_co: tvc_12,
		tr_co: tc_13,
		as_co: ac_11,
		clr: c_06
    },
    null,
	// IH17
    null,
    null,
    null,
    null,
    null,
	// IH22
	{
		n_par: 3,
		n_as: 2,
		n_v: 5,
		n_es: 3,
		es: es_17,
		eo: eo_16,
		esi: esi_14,
		d_par: dp_14,
		v_co: tvc_15,
		tr_co: tc_16,
		as_co: ac_14,
		clr: c_06
	},
	// IH23
	{
		n_par: 4,
		n_as: 2,
		n_v: 5,
		n_es: 4,
		es: es_18,
		eo: eo_17,
		esi: esi_15,
		d_par: dp_15,
		v_co: tvc_16,
		tr_co: tc_17,
		as_co: ac_15,
		clr: c_08
    },
    null,
	// IH25
	{
		n_par: 3,
		n_as: 4,
		n_v: 5,
		n_es: 3,
		es: es_20,
		eo: eo_16,
		esi: esi_14,
		d_par: dp_14,
		v_co: tvc_15,
		tr_co: tc_19,
		as_co: ac_17,
		clr: c_10
	},
	// IH26
	{
		n_par: 2,
		n_as: 2,
		n_v: 5,
		n_es: 3,
		es: es_21,
		eo: eo_18,
		esi: esi_14,
		d_par: dp_16,
		v_co: tvc_17,
		tr_co: tc_20,
		as_co: ac_18,
		clr: c_01
	}
];

function makePoint( coeffs, offs, params )
{
	let ret = { x : 0.0, y : 0.0 }

	for( let i = 0; i < params.length; ++i ) {
		ret.x += coeffs[offs+i] * params[i];
		ret.y += coeffs[offs+params.length+i] * params[i];
	}

	return ret;
};

function makeMatrix( coeffs, offs, params )
{
	let ret = []

	for( let row = 0; row < 2; ++row ) {
		for( let col = 0; col < 3; ++col ) {
			let val = 0.0;
			for( let idx = 0; idx < params.length; ++idx ) {
				val += coeffs[offs+idx] * params[idx];
			}
			ret.push( val );
			offs += params.length;
		}
	}

	return ret;
};

const M_orients = [
	[1.0, 0.0, 0.0,    0.0, 1.0, 0.0],   // IDENTITY
	[-1.0, 0.0, 1.0,   0.0, -1.0, 0.0],  // ROT
	[-1.0, 0.0, 1.0,   0.0, 1.0, 0.0],   // FLIP
	[1.0, 0.0, 0.0,    0.0, -1.0, 0.0]   // ROFL
];

const TSPI_U = [
	[0.5, 0.0, 0.0,    0.0, 0.5, 0.0],
	[-0.5, 0.0, 1.0,   0.0, 0.5, 0.0]
];

const TSPI_S = [
	[0.5, 0.0, 0.0,    0.0, 0.5, 0.0],
	[-0.5, 0.0, 1.0,   0.0, -0.5, 0.0]
];

class IsohedralTiling
{
	constructor( tp )
	{
		this.reset( tp );
	}

	reset( tp )
	{
    // console.log("tp=" + tp);
		this.tiling_type = tp;
		this.ttd = tiling_type_data[ tp ];
		this.parameters = this.ttd.d_par.slice( 0 );
		this.parameters.push( 1.0 );
		this.recompute();
	}

	recompute()
	{
		const ntv = this.numVertices();
		const np = this.numParameters();
		const na = this.numAspects();

		// Recompute tiling vertex locations.
		this.verts = [];
		for( let idx = 0; idx < ntv; ++idx ) {
			this.verts.push( makePoint( this.ttd.v_co,
				idx * (2 * (np + 1)), this.parameters ) );
		}

		// Recompute edge transforms and reversals from orientation information.
		this.reversals = [];
		this.edges = []
		for( let idx = 0; idx < ntv; ++idx ) {
			const fl = this.ttd.eo[2*idx];
			const ro = this.ttd.eo[2*idx+1];
			this.reversals.push( fl != ro );
			this.edges.push( 
				mul( matchSeg( this.verts[idx], this.verts[(idx+1)%ntv] ),
				M_orients[2*fl+ro] ) );
		}

		// Recompute aspect xforms.
		this.aspects = []
		for( let idx = 0; idx < na; ++idx ) {
			this.aspects.push( 
				makeMatrix( this.ttd.as_co, 6*(np+1)*idx,
					this.parameters ) );
		}
					
		// Recompute translation vectors.
		this.t1 = makePoint(
			this.ttd.tr_co, 0, this.parameters );
		this.t2 = makePoint(
			this.ttd.tr_co, 2*(np+1), this.parameters );
	}

	getTilingType()
	{
		return this.tiling_type;
	}

	numParameters()
	{
		return this.ttd.n_par;
	}

	setParameters( arr )
	{
		if( arr.length == (this.parameters.length-1) ) {
			this.parameters = arr.slice( 0 );
			this.parameters.push( 1.0 );
			this.recompute();
		}
	}

	// ADDED
	setParameter( idx, val )
	{
		if( idx < this.parameters.length ) 
		{
			this.parameters[idx] = val;
		}
	}

	getParameters()
	{
		return this.parameters.slice( 0, -1 );
	}

	numEdgeShapes()
	{
		return this.ttd.n_es;
	}

	getEdgeShape( idx )
	{
		return this.ttd.es[ idx ];
	}

	* shape()
	{
		for( let idx = 0; idx < this.numVertices(); ++idx ) {
			const an_id = this.ttd.esi[idx];

			yield {
				T : this.edges[idx],
				id : an_id,
				shape : this.ttd.es[ an_id ],
				rev : this.reversals[ idx ]
			};
		}
	}

	* parts()
	{
		for( let idx = 0; idx < this.numVertices(); ++idx ) {
			const an_id = this.ttd.esi[idx];
			const shp = this.ttd.es[an_id];

			if( (shp == ES.J) || (shp == ES.I) ) {
				yield {
					T : this.edges[idx],
					id : an_id,
					shape : shp,
					rev : this.reversals[ idx ],
					second : false
				};
			} else {
				const indices = this.reversals[idx] ? [1,0] : [0,1];
				const Ms = (shp == ES.U) ? TSPI_U : TSPI_S;

				yield {
					T : mul( this.edges[idx], Ms[indices[0]] ),
					id : an_id,
					shape : shp,
					rev : false,
					second : false
				};
				
				yield {
					T : mul( this.edges[idx], Ms[indices[1]] ),
					id : an_id,
					shape : shp,
					rev : true,
					second : true
				};
			}
		}
	}

	numVertices()
	{
		return this.ttd.n_v;
	}

	getVertex( idx )
	{
		return { ...this.verts[ idx ] };
	}

	vertices()
	{
		return this.verts.map( v => ({ ...v }) );
	}

	numAspects()
	{
		return this.ttd.n_as;
	}
	
	getAspectTransform( idx )
	{
		return [ ...this.aspects[ idx ] ];
	}

	getT1()
	{
		return { ...this.t1 };
	}

	getT2()
	{
		return { ...this.t2 };
	}

  // fillRegionBounds
	* fillRegionBounds( xmin, ymin, xmax, ymax )
	{
		yield* this.fillRegionQuad(
			{ x : xmin, y : ymin },
			{ x : xmax, y : ymin },
			{ x : xmax, y : ymax },
			{ x : xmin, y : ymax } );
	}

  // fillRegionQuad
	* fillRegionQuad( A, B, C, D )
	{
		const t1 = this.getT1();
		const t2 = this.getT2();
		const ttd = this.ttd;
		const aspects = this.aspects;

		function bc( M, p ) {
			return { 
				x : M[0]*p.x + M[1]*p.y,
				y : M[2]*p.x + M[3]*p.y };
		};

		function sampleAtHeight( P, Q, y )
		{
			const t = (y-P.y)/(Q.y-P.y);
			return { x : (1.0-t)*P.x + t*Q.x, y : y };
		}

		function* doFill( A, B, C, D, do_top )
		{
			let x1 = A.x;
			const dx1 = (D.x-A.x)/(D.y-A.y);
			let x2 = B.x;
			const dx2 = (C.x-B.x)/(C.y-B.y);
			const ymin = A.y;
			let ymax = C.y;

			if( do_top ) {
				ymax = ymax + 1.0;
			}

			let y = Math.floor( ymin );
			while( y < ymax ) {
				const yi = Math.trunc( y );
				let x = Math.floor( x1 );
				while( x < (x2 + 1e-7) ) {
					const xi = Math.trunc( x );

					for( let asp = 0; asp < ttd.n_as; ++asp ) {
						let M = aspects[ asp ].slice( 0 );
						M[2] += xi*t1.x + yi*t2.x;
						M[5] += xi*t1.y + yi*t2.y;

						yield {
							T : M,
							t1 : xi,
							t2 : yi,
							aspect : asp
						};
					}

					x += 1.0;
				}
				x1 += dx1;
				x2 += dx2;
				y += 1.0;
			}
		}

		function* fillFixX( A, B, C, D, do_top )
		{
			if( A.x > B.x ) {
				yield* doFill( B, A, D, C, do_top );
			} else {
				yield* doFill( A, B, C, D, do_top );
			}
		}
			
		function* fillFixY( A, B, C, D, do_top ) 
		{
			if( A.y > C.y ) {
				yield* doFill( C, D, A, B, do_top );
			} else {
				yield* doFill( A, B, C, D, do_top );
			}
		}

		const det = 1.0 / (t1.x*t2.y-t2.x*t1.y);
		const Mbc = [ t2.y * det, -t2.x * det, -t1.y * det, t1.x * det ];

		let pts = [ bc( Mbc, A ), bc( Mbc, B ), bc( Mbc, C ), bc( Mbc, D ) ];

		if( det < 0.0 ) {
			let tmp = pts[1];
			pts[1] = pts[3];
			pts[3] = tmp;
		}

		if( Math.abs( pts[0].y - pts[1].y ) < 1e-7 ) {
			yield* fillFixY( pts[0], pts[1], pts[2], pts[3], true );
		} else if( Math.abs( pts[1].y - pts[2].y ) < 1e-7 ) {
			yield* fillFixY( pts[1], pts[2], pts[3], pts[0], true );
		} else {
			let lowest = 0;
			for( let idx = 1; idx < 4; ++idx ) {
				if( pts[idx].y < pts[lowest].y ) {
					lowest = idx;
				}
			}

			let bottom = pts[lowest];
			let left = pts[(lowest+1)%4];
			let top = pts[(lowest+2)%4];
			let right = pts[(lowest+3)%4];

			if( left.x > right.x ) {
				let tmp = left;
				left = right;
				right = tmp;
			}

			if( left.y < right.y ) {
				const r1 = sampleAtHeight( bottom, right, left.y );
				const l2 = sampleAtHeight( left, top, right.y );
				yield* fillFixX( bottom, bottom, r1, left, false );
				yield* fillFixX( left, r1, right, l2, false );
				yield* fillFixX( l2, right, top, top, true );
			} else {
				const l1 = sampleAtHeight( bottom, left, right.y );
				const r2 = sampleAtHeight( right, top, left.y );
				yield* fillFixX( bottom, bottom, right, l1, false );
				yield* fillFixX( l1, right, r2, left, false );
				yield* fillFixX( left, r2, top, top, true );
			}
		}
	}
	
	getColour( a, b, asp )
	{
		const clrg = this.ttd.clr;
		const nc = clrg[18];

		let mt1 = a % nc;
		if( mt1 < 0 ) {
			mt1 += nc;
		}
		let mt2 = b % nc;
		if( mt2 < 0 ) {
			mt2 += nc;
		}
		let col = clrg[asp];

		for( let idx = 0; idx < mt1; ++idx ) {
			col = clrg[12+col];
		}
		for( let idx = 0; idx < mt2; ++idx ) {
			col = clrg[15+col];
		}
		return col;
	}
};

// -- minimization help ---
// function startupSequence()
// {
//   preload();
//   setup();
//   draw();
//   windowResized();
//   keyReleased();
// }

// startupSequence();