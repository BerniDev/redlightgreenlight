if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>i(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(c.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["./workbox-8734615b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C15-K--V.js",revision:null},{url:"assets/index-DzzJYzsz.css",revision:null},{url:"index.html",revision:"74638030c65ac7c998e0f4b1c0893659"},{url:"registerSW.js",revision:"a1553bdcbee25e9b87bb10eca51c02d3"},{url:"service-worker.js",revision:"40ad8a1523b06c6cd8667cc67b1e4b18"},{url:"192.png",revision:"1d3b96eb7f937914b920aac47799a616"},{url:"512.png",revision:"71c8316880994b089869bc542dfd4e3f"},{url:"squidgame.mp3",revision:"d83c07162f3bd47d72031b38901d029a"},{url:"manifest.webmanifest",revision:"77b60179eb7c779bd59a9d08bb8dc005"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination),new e.CacheFirst({cacheName:"js-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"style"===e.destination),new e.CacheFirst({cacheName:"css-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"audio"===e.destination),new e.CacheFirst({cacheName:"audio-cache",plugins:[]}),"GET")}));
