import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppLink', defineAsyncComponent(() => import('@/components/App/AppLink.vue')))
app.component('AppBtn', defineAsyncComponent(() => import('@/components/App/AppBtn.vue')))   
app.component('AppInput', defineAsyncComponent(() => import('@/components/App/AppInput.vue')))   
app.component('AppErrorMessage', defineAsyncComponent(() => import('@/components/App/AppErrorMessage.vue')))
app.component('AppFlashMessage', defineAsyncComponent(() => import('@/components/App/AppFlashMessage.vue')))   
app.component('DefaultLayout', defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue')))
app.component('EmptyLayout', defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue')))
app.mount('#app')
