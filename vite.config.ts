import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-finance/',
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],     
      manifest: { 
        name: 'Personal Finance',
        short_name: 'Perfin',
        description: 'Personal Finance PWA',
        theme_color: '#ffffff',
        icons: [{
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        }, {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }, {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        }, {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [       
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst' as const,
            options: {
              cacheName: 'google-fonts-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },        
          {
            urlPattern: /^https:\/\/tojtdjayohnlrkqouhix\.supabase\.co\/.*/,
            handler: "NetworkFirst" as const,
            method: 'GET',
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true
      } 
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
