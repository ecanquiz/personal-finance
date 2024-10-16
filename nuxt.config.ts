// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // baseURL: '/personal-finance/',
  devServer: {
    port: 3000, // 3000 by default, change to 80 to dev container
  },
  app: {
    //baseURL: '/',
    baseURL: '/personal-finance/',
    /*head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }*/
  },
  //srcDir: 'src/', //@@=~~ root; @=~ src
  // alias: { '@my-lib': './lib' },  
  compatibilityDate: '2024-04-03',
  //css: [`assets/styles/main.css`],
  //css: [`assets/styles/main.min.css`],
  modules: [//'@nuxtjs/supabase',
  '@nuxt/ui',
  '@nuxtjs/tailwindcss', 
  '@vite-pwa/nuxt',
  "nuxt-lodash",
  '@/modules/User/module', '@pinia/nuxt', '@nuxt/ui', '@vite-pwa/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  ui: { global: true, },
  runtimeConfig: {
     secret: process.env.SECRET,
     public: { API_BASE_URL: process.env.API_BASE_URL, },
  },
  devtools: { enabled: true },
  pwa: {
    manifest: {
      name: 'Personal Finance',
      short_name: 'PerFin',
      description: 'Personal Finance App',
      theme_color: '#ffffff',
      "icons": [
        {
          "src": "pwa-64x64.png",
          "sizes": "64x64",
          "type": "image/png"
        },
        {
          "src": "pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "maskable-icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]      
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }

  }
})