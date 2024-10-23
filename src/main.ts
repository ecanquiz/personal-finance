import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppLink', defineAsyncComponent(() => import('@/components/App/AppLink.vue')))   
app.component('DefaultLayout', defineAsyncComponent(() => import('@/layouts/DashboardLayout.vue')))
app.component('EmptyLayout', defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue')))
app.mount('#app')
