if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const o=e=>n(e,r),d={module:{uri:r},exports:c,require:o};i[r]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-08b47157"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DaCn_vme.js",revision:null},{url:"assets/index-DB6UlyVC.css",revision:null},{url:"index.html",revision:"0bc64f0788ca70320ab6cfcb9eb67434"},{url:"192.png",revision:"1d3b96eb7f937914b920aac47799a616"},{url:"512.png",revision:"71c8316880994b089869bc542dfd4e3f"},{url:"favicon.png",revision:"90b2e95fc8f69d57da36c98717d2ff89"},{url:"squidgame.mp3",revision:"d83c07162f3bd47d72031b38901d029a"},{url:"manifest.webmanifest",revision:"7c9fe0d617fe4c1412492623a409e547"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*\.(?:png|jpg|jpeg|svg|gif|mp3)$/,new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*$/,new e.NetworkFirst({cacheName:"pages-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
