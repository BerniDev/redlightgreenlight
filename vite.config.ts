import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

console.log('VITE_PORT:', process.env.VITE_PORT);

export default defineConfig(() => ({
  server: {
    open: true,
    port: parseInt(process.env.VITE_PORT || '4173', 10),
    strictPort: true,
  },
  base: "/redlightgreenlight/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "favicon.ico", "squidgame.mp3"],
      manifest: {
        name: "Red Light Green Light",
        short_name: "RLGL",
        description: "Red light green light game",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/redlightgreenlight/",
        start_url: "/redlightgreenlight/",
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
          {
            src: "favicon.png",
            sizes: "64x64",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              /^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*\.(?:png|jpg|jpeg|svg|gif|mp3)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
          {
            urlPattern:
              /^https:\/\/bernidev\.github\.io\/redlightgreenlight\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
        ],
      },
    }),
  ],
}));
