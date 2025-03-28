'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ccc756f39aef2a1bbf3c65fd7eae832",
"version.json": "d4e3ab09390162fd9eace5c4680fb053",
"screenshots/screen1.png": "536133f64281b01a1e06cdc2f77b6f18",
"index.html": "0715bcae1d74b964f5dc548eb9f0e65c",
"/": "0715bcae1d74b964f5dc548eb9f0e65c",
"main.dart.js": "fa431e819c5199813e387e67a76f7c5f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "44677961688a89d829849bb930648827",
"splash.png": "536133f64281b01a1e06cdc2f77b6f18",
"icons/Icon-192.png": "44677961688a89d829849bb930648827",
"icons/Icon-maskable-192.png": "44677961688a89d829849bb930648827",
"icons/Icon-maskable-512.png": "44677961688a89d829849bb930648827",
"icons/Icon-512.png": "44677961688a89d829849bb930648827",
"manifest.json": "21ac8c4ade4caa56974de09a7c73467c",
"assets/AssetManifest.json": "4ea685b7b155c65101b8400f2de0378d",
"assets/NOTICES": "4b3c94c08b7364afaa4ef0d090674af1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e35fee1bf09fe3e0c0bf2628c4d2c657",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ce2482ec03b78eb60c1880dcf038bd98",
"assets/fonts/MaterialIcons-Regular.otf": "dcf09bc8dd4facd14b25d70bb38794d3",
"assets/assets/images/red_chariot.webp": "c657eb6bfd4357f0f28da186dd59f4a3",
"assets/assets/images/black_chariot.webp": "d26468d85e3f7419291629fc96368dfe",
"assets/assets/images/red_horse.webp": "2fb39f7de62c449ff5ab3baa15b3ac50",
"assets/assets/images/red_soldier.webp": "cd60ebd289006844a42d9ee824801043",
"assets/assets/images/black_soldier.webp": "5db5081aba350a88eae78d07d5f8af97",
"assets/assets/images/red_cannon.webp": "9ae17d54bf7068878fc77099079aa33c",
"assets/assets/images/black_cannon.webp": "f977403b7f7ad3c388db895d6bdcb55c",
"assets/assets/images/red_advisor.webp": "7af8379e78fd28fff573bb57e9f24259",
"assets/assets/images/black_horse.webp": "c1aa405f72b6b9c060e85ee93784e5b4",
"assets/assets/images/black_advisor.webp": "f6c73f56e38299485d9464cd1c83a81e",
"assets/assets/images/black_king.webp": "56f17b579aae6c09897ef45f6a81f25c",
"assets/assets/images/board_texture.webp": "536133f64281b01a1e06cdc2f77b6f18",
"assets/assets/images/wood_texture.webp": "536133f64281b01a1e06cdc2f77b6f18",
"assets/assets/images/black_elephant.webp": "6b169df81c9306ca7ddd2f327d04326a",
"assets/assets/images/red_elephant.webp": "8529a3dfe3cf942f42532f8c0ea63109",
"assets/assets/images/red_king.webp": "44677961688a89d829849bb930648827",
"assets/assets/images/effects/selection.webp": "6c9bc3e5d8f26a2158292b11de222813",
"assets/assets/images/effects/to.webp": "017a81cfda6d38249d8883692226bc1e",
"assets/assets/images/effects/from.webp": "0f6a684cee59934b6a289ad7e8d11e05",
"splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_14_Pro_Max_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_11__iPhone_XR_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_14_Pro_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png": "536133f64281b01a1e06cdc2f77b6f18",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
