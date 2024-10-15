// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // baseURL: '/personal-finance/',
  devServer: {
    port: 3000, // 3000 by default, change to 80 to dev container
  },
  app: {
    baseURL: '/',
    //baseURL: '/personal-finance',
    /*head: {
      htmlAttrs: {
        style: 'background-color: #111; color: #f0f0f0'
      }
    }*/
  },
  srcDir: 'src/', //@@=~~ root; @=~ src
  // alias: { '@my-lib': './lib' },  
  compatibilityDate: '2024-04-03',
  //css: [`assets/styles/main.css`],
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
  devtools: { enabled: true }
})