'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a6afa9bcafcc59f71e97d6a608659a12",
"assets/AssetManifest.bin.json": "929b0134d4ec1b282d357bce8c0e8ff4",
"assets/AssetManifest.json": "4edc4a87f84135084861a9050aa869bd",
"assets/assets/aerox.png": "869f88fcf1eb4111df37da81ff62cf15",
"assets/assets/aerox155.png": "eb90dc7d5b1e42c0b11f20a317530830",
"assets/assets/backgroundr1.jpg": "7e503b617fcaee477c3a539716885f22",
"assets/assets/bglogin.jpg": "a5f1df3c05a1a4461041ffc12259f8b0",
"assets/assets/busi.jpg": "57503a4a8e73fdd908fcb2e8644099c1",
"assets/assets/classy.png": "55cf49f28e6cddfccfd956685fc9eae2",
"assets/assets/fazzio.png": "e7b28028aa43e351e3a7bff384bd9cab",
"assets/assets/filter_udara.jpg": "cca6f2c98cf6c50e1a5b107b34f4e650",
"assets/assets/fino.png": "909d5478edf8bd315f380874ed13e683",
"assets/assets/freego125.png": "0c76150e45811b50099adb8467fc8a18",
"assets/assets/gear125.png": "1341dfa1304db995a6eee48400f377e2",
"assets/assets/gear_ultima.png": "caa07602d4e7835f8377a6c9b48db238",
"assets/assets/grandfilano.png": "a60b327090fa896eb0f7da30df0815d1",
"assets/assets/handgrip.png": "3979d79c8fb3ee850eccd5d96bf26bc8",
"assets/assets/jupiterz1.png": "bc504f86094abcf10e71453481150c6c",
"assets/assets/kampas_rem.jpg": "d89db90d34df6f8b8b5feb7522259a00",
"assets/assets/lexi.png": "cb57199caf5660e064bbfe39fbd3222f",
"assets/assets/logo%2520lintang.png": "bf702a9044bd555ff05260c08e3ed1e7",
"assets/assets/logo%2520yamaha.png": "d091b173ecb835295756359145e1bddf",
"assets/assets/logoyamaha.png": "8fd145af7851c1bbe4a808bfe09fe7eb",
"assets/assets/matic.png": "c347ec2778ab0becd587813c5ea6ec1f",
"assets/assets/maxi.png": "d79f9fefe136617e392b1e7637216d1f",
"assets/assets/mio.png": "df6b5378d33781186fa96e782386a4bb",
"assets/assets/moped.png": "8f6855bb89795075a32f451e2134fc72",
"assets/assets/mt15.png": "22ceefb7e8d189c69b487ddb12218073",
"assets/assets/mt25.png": "5d92d509074f44a56fdc91c7b1aace29",
"assets/assets/mxking150.png": "6358d1fd048bb4046cf8059e255ff9f0",
"assets/assets/nmax.png": "256929e86bcde05a3deb669ef0b88227",
"assets/assets/nmax155.png": "206a997e7261b8333fceed9bd1c0511b",
"assets/assets/part_oli.jpg": "03e0e61d12cf07975e4fa4e276a83231",
"assets/assets/r15.png": "5cdc5a561bacd487f727b7e64ebb4434",
"assets/assets/r25.png": "8f759f133d8fe627f9434190cf3048c9",
"assets/assets/rantai.jpg": "f017aad058e79d3fd52fb4a05d95c159",
"assets/assets/shock.jpg": "8f5bd8165063e11eae5c542cb7fad933",
"assets/assets/slider1.jpg": "f986c04cdb877deee4bec11981ffd3a4",
"assets/assets/slider10.jpg": "4ce5d8490a6b7ec8e7163a9c86b91175",
"assets/assets/slider11.jpg": "7b491e24ffae16e69076a3570c38f2e7",
"assets/assets/slider2.jpg": "c9564b440dbdf11690cd7ddf4297b076",
"assets/assets/slider3.jpg": "c4c03ae7bb072e26698b006318f0289f",
"assets/assets/slider4.jpg": "92feeef39e9fbf5cff2b553c0d1369e2",
"assets/assets/slider5.jpg": "c9d38a19135313f0badb3df77ee0595c",
"assets/assets/slider6.jpg": "840ff3e8b1f6eb2b24def80c8e88d728",
"assets/assets/slider7.jpg": "e66fb3b0eaefb19a304f66080c5437f9",
"assets/assets/slider8.jpg": "93aaa50967397ae67fe2daa73736d174",
"assets/assets/slider9.jpg": "89fb3437e690c8380f66186b0954cee1",
"assets/assets/spion.jpg": "f41dd85a6de15b0c1782dd00594cf16b",
"assets/assets/sport.png": "d8700c792395b6d510fa4f9c940c69e9",
"assets/assets/vegaforce.png": "1cd1172b3d0b5e5c58db266a1a541df3",
"assets/assets/vixion155.png": "7627586df67288807b46cd75610f7702",
"assets/assets/xmax.png": "9c3460d7b293189687342499d6193ad4",
"assets/assets/xride125.png": "6243ef44d59b1cd5cae3f43583d8c4a6",
"assets/assets/xsr155.png": "ee989aeadd12c811dd78eaaa89ed2ed7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e42d8e9969fa97b5b4b22a76045f289e",
"assets/NOTICES": "5518288e9a23491abcf21d65f5476b53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a7d8a84063b61518452b7a4f4c2b0247",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7dac15a5377f181855143d47fb47093",
"/": "e7dac15a5377f181855143d47fb47093",
"main.dart.js": "1f8afa3f6cde9d12a552c754bc09a51c",
"manifest.json": "dcda226fc263b6215221e0ed9b5967d0",
"version.json": "dd6250e0eecf6e2e47b0f7eaf5d8ca22"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
