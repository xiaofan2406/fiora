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
  'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js'
);

workbox.core.setCacheNameDetails({ prefix: 'gatsby-plugin-offline' });

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: 'webpack-runtime-6ba3635fb04664b79009.js',
  },
  {
    url: 'app.e48228566058b435d4d5.css',
    revision: '48bed4c54fdcef7cd7f1b47da942658f',
  },
  {
    url: 'app-2767742ba9673fda5409.js',
  },
  {
    url:
      'component---node-modules-gatsby-plugin-offline-app-shell-js-51865c88349f233c6b22.js',
  },
  {
    url: 'index.html',
    revision: '5a9707e09850c5dc77474bd1c64748bd',
  },
  {
    url: 'offline-plugin-app-shell-fallback/index.html',
    revision: 'c5804038cfb3ad687c9ab529325d7930',
  },
  {
    url: 'component---src-pages-index-mdx-cfb4cb388f355a54b50a.js',
  },
  {
    url: '0-28873b08a6fb20405fc0.js',
  },
  {
    url: 'static/d/864/path---index-6a9-YV2xtnt8tPyAY05Un6wm26zkpgI.json',
    revision: '7e74f848bb043b2e9cb23f5e98bcaf25',
  },
  {
    url: 'component---src-pages-404-mdx-fbdf9de8f76dd184a2bf.js',
  },
  {
    url:
      'static/d/408/path---404-html-516-62a-YV2xtnt8tPyAY05Un6wm26zkpgI.json',
    revision: '7e74f848bb043b2e9cb23f5e98bcaf25',
  },
  {
    url:
      'static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json',
    revision: 'c2508676a2f33ea9f1f0bf472997f9a0',
  },
  {
    url: 'manifest.webmanifest',
    revision: 'eca8121ec7ee64cb73b1fa3e5ca0c06f',
  },
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  '/offline-plugin-app-shell-fallback/index.html',
  {
    whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
    blacklist: [/\?(.+&)?no-cache=1$/],
  }
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  workbox.strategies.staleWhileRevalidate(),
  'GET'
);
