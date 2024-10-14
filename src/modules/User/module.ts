// https://github.com/nuxt/starter/issues/261
import { defineNuxtModule, addImports, addImportsDir } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  name: 'user-module',
  configKey: 'user-module',
  setup (options: any, nuxt: Nuxt) {

    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    // Auto register composables
    // Not working OK
    //nuxt.hook('autoImports:dirs', (dirs) => {
    //  dirs.push(resolve(__dirname, './composables'))
    //})
    
    // Working OK
    /*addImports({
      name: 'useBlog', // name of the composable to be used
      as: 'useBlog', 
      from: resolve('./modules/User/composables/useBlog'), // path of composable 
    });*/
    
    // Working OK
    //addImportsDir(resolve('./modules/User/composables'));
    
    // Working OK
    addImportsDir(resolve(__dirname, './composables'));

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'users-page',
        path: '/users',
        file: resolve(__dirname, './pages/users/index.vue')
      }),
      pages.push({
        name: 'user-page',
        path: '/users/edit/:id',
        file: resolve(__dirname, './pages/users/edit/[id].vue')
      })
    })

    // Pinia store modules are auto imported
  }
})
