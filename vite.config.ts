import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  // base: '/redlightgreenlight/',
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['favicon.svg', 'robots.txt', 'squidgame.mp3'], // Incluye los archivos de audio y favicon
      manifest: {
        name: "Red Light Green Light",
        short_name: "RLGL App",
        description: "PWA game based on Red Light, Green Light",
        theme_color: "#ffffff",
        icons: [
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }: { request: Request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
            },
          },
          {
            urlPattern: ({ request }: { request: Request }) => request.destination === 'script',
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-cache',
            },
          },
          {
            urlPattern: ({ request }: { request: Request }) => request.destination === 'style',
            handler: 'CacheFirst',
            options: {
              cacheName: 'css-cache',
            },
          },
          {
            urlPattern: ({ request }: { request: Request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
            },
          },
          {
            urlPattern: ({ request }: { request: Request }) => request.destination === 'audio',
            handler: 'CacheFirst',
            options: {
              cacheName: 'audio-cache',
            },
          },
        ],
      },
    }),
  ],
});
