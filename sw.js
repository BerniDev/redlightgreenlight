if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-08b47157"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DzzJYzsz.css",revision:null},{url:"assets/index-RN4oQeDD.js",revision:null},{url:"index.html",revision:"6199d75f809f05542fb68e3568baeb60"},{url:"service-worker.js",revision:"b7174de09c0b6f08a4ebc2ad47e8ada8"},{url:"192.png",revision:"1d3b96eb7f937914b920aac47799a616"},{url:"512.png",revision:"71c8316880994b089869bc542dfd4e3f"},{url:"squidgame.mp3",revision:"d83c07162f3bd47d72031b38901d029a"},{url:"manifest.webmanifest",revision:"52c98c312263a4e0966c3d5925eeed65"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*\.(?:png|jpg|jpeg|svg|gif|mp3)$/,new e.CacheFirst({cacheName:"assets-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*$/,new e.NetworkFirst({cacheName:"pages-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
