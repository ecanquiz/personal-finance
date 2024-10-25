import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "Home",     
    meta: { layout: "empty" },      
    component: Home
  }, {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue").then(m => m.default)
  }, {
    path: "/register",
    name: "Register",    
    meta: { layout: "empty" },
    component: () => import("@/views/Register.vue").then(m => m.default)
  }, {
    path: "/dashboard",
    name: "dashboard",
    meta: { layout: "default" },
    component: () => import("@/views/Dashboard.vue").then(m => m.default)
}, {
    path: '/movements',
    name: 'movements',
    meta: { layout: "default" },
    component: () => import('@/views/Movements.vue'),

  }, {
    path: '/movements/edit/:id(\\d+)',      
    name: 'movements-edit',
    meta: { layout: "default" },
    component: () => import('@/views/MovementsEdit.vue'),
    props: true
  }/*, {
    path: "/profile",
    name: "profile",
    meta: { middleware: [auth] },
    component: () => import("@/modules/Auth/views/Profile.vue").then(m => m.default),
}, {
    path: "/about",
    name: "About",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/modules/Auth/components/About.vue").then(m => m.default)
}, */,{
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { layout: "empty" },
    component: () => import("@/views/NotFound.vue").then(m => m.default),    
}]
})

export default router
