import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{

   /* {
      path: "/",
      name: "Home",     
      meta: { layout: "empty" },      
      component: () => import("../views/Home.vue").then(m => m.default)
  }, {
      path: "/login",
      name: "Login",
      meta: { layout: "empty" },
      component: () => import("../views/Login.vue").then(m => m.default)
  }, {
      path: "/register",
      name: "Register",    
      meta: { layout: "empty" },
      component: () => import("../views/Register.vue").then(m => m.default)
  }*/

      path: '/',
      name: 'index',
      meta: { layout: "default" },
      component: Index
    }, {
      path: '/edit/:id(\\d+)',      
      name: 'edit',
      meta: { layout: "default" },
      component: () => import('../views/Edit.vue'),
      props: true
  }]
})

export default router
