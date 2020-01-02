/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "worker.js",
  "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icon-128x128.b41cf25b.png",
    "revision": "ad701545bbd6da43b9d5f6c3db231293"
  },
  {
    "url": "icon-144x144.e76a1ed8.png",
    "revision": "889cb7b0c5c6948b514d9c4158abb3cb"
  },
  {
    "url": "icon-152x152.111b2c24.png",
    "revision": "20030827ba1f633f6509f6831059400e"
  },
  {
    "url": "icon-192x192.443e4bb3.png",
    "revision": "7c2204e48f3b9867ce6012b444d070fd"
  },
  {
    "url": "icon-384x384.d9f27e43.png",
    "revision": "70998b3e415197a6fca98754ab1b89ba"
  },
  {
    "url": "icon-512x512.640e23eb.png",
    "revision": "ea3a53e3628f193c4f3165964d309ca2"
  },
  {
    "url": "icon-72x72.1321f85f.png",
    "revision": "7e47ac761ea7d7c5999b1a8cfd08219c"
  },
  {
    "url": "icon-96x96.b7992b22.png",
    "revision": "3d9b913cee578bcadddf862b18e01a4d"
  },
  {
    "url": "index.html",
    "revision": "f5ea72a29f2c82e0429cd7bdf49a4d4f"
  },
  {
    "url": "main.fb6bbcaf.css",
    "revision": "44b21ce8a80e48f7cb40b8369baf6d31"
  },
  {
    "url": "main.fb6bbcaf.js",
    "revision": "ca59d2eea9212f79f9ebfb841e0bae7f"
  },
  {
    "url": "style.500aa19d.css",
    "revision": "bd63133925cf1540a3d8b6cd6f65e1db"
  },
  {
    "url": "style.500aa19d.js",
    "revision": "bd593716859e1f5290f795a46b668711"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
