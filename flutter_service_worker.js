'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e0d3d74efb7953940825aa6c1621acb",
"index.html": "42c0769872a955f096174c1a98e9f719",
"/": "42c0769872a955f096174c1a98e9f719",
"main.dart.js": "a7ddc6df20118775a76d4039e14ae6bc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c710499c7058495100ce52a333241d5a",
"assets/AssetManifest.json": "61d4350b4719ac3d1c175f30b8d7acc1",
"assets/NOTICES": "f1ae770a681ae2f4c968a96e948a8e41",
"assets/FontManifest.json": "67e5a85e8ec2839854489f4a0a6f229b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/arrivalByTrain.png": "760d3f1f5bc30e55b00dde0d5676ac72",
"assets/assets/images/fig6.png": "660c8ef4aac09157ac26e9088b7f2315",
"assets/assets/images/PMLogoOld.jpg": "ecac0333fd64e7526b81081f01f23a90",
"assets/assets/images/bgTransparent.png": "dea91d44843badc12127e545e60f47d2",
"assets/assets/images/contactInfoCombi.png": "9b90fc4e5490aebf88c0d9946f2804d3",
"assets/assets/images/fconsultingFig.png": "ef81a9c3176104bc29ed344ebd512bec",
"assets/assets/images/uiuxThick.png": "82edad8ea1dc7f3ab200fe33a923f33e",
"assets/assets/images/bgGreyBWLogo.png": "41c1f32b5a4a730855fc0f831b30b011",
"assets/assets/images/combi.png": "218980ea1fc172d1bf65b13e07f30f9a",
"assets/assets/images/fflutterFig.png": "349b441b7d2eda655f6a6620827e7acb",
"assets/assets/images/coffee1smaller.png": "0df7aeaf386cf3c7aa9ec4a5d81f5437",
"assets/assets/images/bgDarkBlackWhiteLogo.png": "a39faf27473c07954411d8e12cbc9eff",
"assets/assets/images/presentation.png": "3b78308b8e9bcc6dbadd3554d8cee120",
"assets/assets/images/topLeftCornerGradientBig.png": "cceea82324ddee45fa720ddf093aac75",
"assets/assets/images/coffee1.png": "7cb69579e7d7f0b4817082c8fcea25b5",
"assets/assets/images/pmLogoReimagined.png": "ca365526d588bca5abffb48b2a4873b7",
"assets/assets/images/coffee1x2smaller.png": "f0e53cb1122f0ea2d4c7ae84bd06f9d2",
"assets/assets/images/bwLogoBluebg.png": "0ceb726dc1635bdd61e3353d28dc5fda",
"assets/assets/images/RightSide.png": "198e627f9a361056daa96c3d2f9df78b",
"assets/assets/images/fhelloFig.png": "2e29ae3907637970e8f4d4c0697117c8",
"assets/assets/images/coffee2.jpeg": "1ed2c0ed75c5650ddf9e32ae230b85e3",
"assets/assets/images/crossPlatformIconThick.png": "599d1d8b9d32decdad12bda0a59a3710",
"assets/assets/images/feclipseFig.png": "9382d6f4dd25e53578806dc1564a8f91",
"assets/assets/images/lightning.png": "0a684dd4aaeaebe5f47ad8f568d09e81",
"assets/assets/images/LeftSide.png": "db9aad766babf50a94c44df378604503",
"assets/assets/images/coffee1.jpeg": "6c5797ee1dfaedb678d23c5fbb0407f5",
"assets/assets/images/headOnTable.png": "35d4a00aa7820711bcac6cf881cad43b",
"assets/assets/images/pmLogoNewColors.png": "4da14a274fc0ee24dbff904df1b2aef4",
"assets/assets/images/aboutFigs.png": "bf11469b5fbf9f918484db7f51cba541",
"assets/assets/images/bgLogoSmall.png": "a4a4ae343e19bcf48dc3d11d0f7373ff",
"assets/assets/images/coffee2smaller.png": "67e7eb665a0937769f8d8a204715e290",
"assets/assets/images/PMLogoRemade.png": "84c786592b7135bf84c9b8cda787f9c5",
"assets/assets/images/location.png": "e41bba0d08f0a90c85e381013442e5c6",
"assets/assets/images/arrivalByCar.png": "5b50a2cacdd9fb8a62bbcd154f3b5faf",
"assets/assets/images/fflutterFigSmall.png": "9963f3766bca21319402a3fcb3b02259",
"assets/assets/images/topLeftCornerGradient.png": "c12915aa320ea0d6de65ad0f5441cdd7",
"assets/assets/images/fandroidFig.png": "b1e6f6bb6b9f0d84658b5fbcdc7d0479",
"assets/assets/images/fflutterFigSlice.png": "61ab0c038163c208af2f1b3302994467",
"assets/assets/images/helloFig.png": "597bea5b4bf136e41e2d64d63a22d763",
"assets/assets/images/pmlogoSmallGaps.png": "ab9a58011f54fd2a7da06c7c8a3629a9",
"assets/assets/images/programming.png": "5fcec13b4aa2c37836e7a5779fb8eed3",
"assets/assets/images/pmlogo.png": "379c3b027ea021fb27993249ae0ca901",
"assets/assets/images/speedIcon.png": "bfbcf66e8be8e585952c9fd30cd1e489",
"assets/assets/images/bgLightBWLogoSimple.png": "2d1a65847a1d48e66268440c5c1420f2",
"assets/assets/images/arrivalByTrainRev.png": "70cf68dc9c5e03c56c7d74e84bfee44c",
"assets/assets/images/pricingIcon2.png": "aefa94bde3e5456d0be790efb6833029",
"assets/assets/images/minimal.jpg": "176a46fa122e42c2ec2f0c9be4061e1e",
"assets/assets/images/bgLogo.png": "52a00cfb98acbef2ae7ff63f1e125d03",
"assets/assets/images/topLeftCornerGradientSmall.png": "e0fc21a356eabb2f1329d90af5d36879",
"assets/assets/images/bgLaptop.jpg": "8166e68b66e42bcea3c8115e06554405",
"assets/assets/images/productivityIconThick.png": "e1924b0182652213b8394f2e88a4094d",
"assets/assets/images/fflutterFigSmallDarkBlue.png": "3aedba050ba3e93a03838702c394534d",
"assets/assets/rive/partmaster.riv": "7c31a052e21585808aa8e280b40fc5f0",
"assets/assets/fonts/jetbrains/JetBrainsMono-Thin.ttf": "bfe2ec0a0644c54aab4ef5c62270e9d8",
"assets/assets/fonts/jetbrains/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/assets/fonts/jetbrains/JetBrainsMono-LightItalic.ttf": "31ea3e84275f092f9a2790a2d07eaf36",
"assets/assets/fonts/jetbrains/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-ExtraLightItalic.ttf": "d8112bc0e74d85824163b0ca3d0de54c",
"assets/assets/fonts/jetbrains/JetBrainsMono-ExtraLightItalic.ttf": "1673c5d8387eac872c5e15737a2e49b3",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-ExtraLight.ttf": "68e6f1945543105ea2a43364bc6bc535",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-MediumItalic.ttf": "dbf148d4c8d4fead71a9825b3af0277c",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-Light.ttf": "dee3c485a9b31c177dd67c3889c18b7b",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-BoldItalic.ttf": "e392246c40323c4c997a71d722f30de0",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-SemiBold.ttf": "aaef3e0b21fa98ef7ba23272181ccbc1",
"assets/assets/fonts/jetbrains/JetBrainsMono-SemiBoldItalic.ttf": "eff07c40d692cec6eef64a6d7c342709",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-LightItalic.ttf": "b99346913b42ee5bd3527a28c875c987",
"assets/assets/fonts/jetbrains/JetBrainsMono-Light.ttf": "5f0dea0a306e3416b10c4f96ba8e854c",
"assets/assets/fonts/jetbrains/JetBrainsMono-MediumItalic.ttf": "7c0fde06b7cfe8baa7d85fae639b60ea",
"assets/assets/fonts/jetbrains/JetBrainsMono-ExtraBold.ttf": "fb177aca3a88192fea54d61ccdfccb90",
"assets/assets/fonts/jetbrains/JetBrainsMono-SemiBold.ttf": "1f31a0afcc72c1472ce7801fe86b5d53",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-Regular.ttf": "fbd467fbc7230e0bcfc20de2e15b3777",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-Medium.ttf": "f7c6c0b6227688cf4803d6a1adf6c6e2",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-Thin.ttf": "b460b6834ffdf2617878073248dcc024",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-SemiBoldItalic.ttf": "8c00e2f7fa5a067d9475fe05a1422ad2",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-ExtraBoldItalic.ttf": "36b4335318e191d7d6a2944271cd9ba9",
"assets/assets/fonts/jetbrains/JetBrainsMono-ExtraBoldItalic.ttf": "ef33cdb6734a9a9a40983fcb553e7460",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-ExtraBold.ttf": "9c8e92134aa6704afa52ca229decbaf1",
"assets/assets/fonts/jetbrains/JetBrainsMono-ExtraLight.ttf": "8fd44009bd92b12998cfe8cd28cb382a",
"assets/assets/fonts/jetbrains/JetBrainsMono-Medium.ttf": "2ab3c46a017cadf52f504054eee882ad",
"assets/assets/fonts/jetbrains/JetBrainsMono-BoldItalic.ttf": "b91689d7bbb1eec1e1c839d7ef9a0340",
"assets/assets/fonts/jetbrains/JetBrainsMonoNL-Bold.ttf": "0eded1037d649a0d48cfc1fa3d82ea12",
"assets/assets/fonts/sfmono/SFMonoMediumItalic.otf": "356df2fe1393b0496b8132480c57f6b3",
"assets/assets/fonts/sfmono/SFMonoSemiBoldItalic.otf": "badfd0a2c1d158ae22bf956de85eb68b",
"assets/assets/fonts/sfmono/SFMonoBoldItalic.otf": "46d32931769b21e70cfcdb6ea2d0a1cd",
"assets/assets/fonts/sfmono/SFMonoMedium.otf": "dd6296df915f391c29989c19e3e8a94e",
"assets/assets/fonts/sfmono/SFMonoHeavy.otf": "a20c143b7bec53cd427818b26c17d246",
"assets/assets/fonts/sfmono/SFMonoBold.otf": "a587827f55348749f899f4ab8169cbe2",
"assets/assets/fonts/sfmono/SFMonoLight.otf": "761bd0787c7aed01f9dd25433db0bfa5",
"assets/assets/fonts/sfmono/SFMonoLightItalic.otf": "6762cf0345fa31ebcddeac4d7395c765",
"assets/assets/fonts/sfmono/SFMonoHeavyItalic.otf": "f1a0b99769778ac82fef12fdfc6c366c",
"assets/assets/fonts/sfmono/SFMonoSemiBold.otf": "ae31eb443da4810ba47c860df97548ad",
"assets/assets/fonts/sfmono/SFMonoRegular.otf": "41b67f4d3dcf092055b37014cbe5cd05",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "471a0493b1695aa975532d42ea7c0d84",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "616c74c716c5c55f333bb8f91af216fb",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "d88fa2ca46d05df6986d2eaeafee2225",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "426a4b74bf1d6920508384899bfb695b",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "3ebc1a21c12a3051dcdd80e7605eb630",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "39833eed48300f751547827bd709ddc5",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "7cc3c8b2cf1436f14f94e4788f131454",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "dc2f156b60f53c591fc0d2b98cbf01bf",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "55e37a35525c63e130e76d588f2f5e8d",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "a8802bc3d04c500037fff80756ec3da7",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "67e72285fcfc55467364a1493004cb9e",
"assets/assets/fonts/alata/Alata-Regular.ttf": "ef90e02223b26fc1c4d54b244852bf8c",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
