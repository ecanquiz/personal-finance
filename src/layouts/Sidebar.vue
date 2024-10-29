<script setup lang="ts">
import { ref } from "vue";
//import { useAuthStore } from "@/modules/Auth/stores/index"
import { useSidebar } from "@/composables/App/useSidebar";
//import RecursiveMenu from "@/layouts/RecursiveMenu/Index.vue";
import { useRoute } from 'vue-router'

const route = useRoute();

const { isOpen, isClose } = useSidebar()
//const store = useAuthStore()
</script>

<template>
  <!--div class="flex bg-base-100" v-if="store.authUser"-->
  <div class="flex bg-base-100" v-if="true">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->
    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="mt-10 bg-base-200 fixed z-50 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-0 block lg:hidden"
    >
      <nav class="py-6 px-6">
        <div 
          class="mb-2 py-1 px-2"
          :class="route.path.startsWith(`/dashboard`) ? 'activeClass' : 'inactiveClass'"
        >
          <AppLink :to="'/dashboard'">
            <span class="flex items-center group py-0">
              <!--Component v-if="menu && menu.icon!==''"
                :is="iconName"
                class="w-5 h-5 mr-2 fill-current"
              /-->
              Dashboard
            </span>
          </AppLink>
        </div>

        <div 
          class="mb-2 py-1 px-2"
          :class="route.path.startsWith(`/movements`) ? 'activeClass' : 'inactiveClass'"
        >
          <AppLink :to="'/movements'">
            <span class="flex items-center group py-0">
              <!--Component v-if="menu && menu.icon!==''"
                :is="iconName"
                class="w-5 h-5 mr-2 fill-current"
              /-->
              Todos los movimientos
            </span>
          </AppLink>
        </div>     
      </nav> 
    </div>

    <div
      :class="!isClose ? 'translate-x-0 ease-out w-full' : '-translate-x-full ease-in w-0'"
      class="bg-base-200 fixed z-30 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-x-0 hidden lg:block"
    >
      <nav class="py-6 px-6">
        <div 
          class="mb-2 py-1 px-2"
          :class="route.path.startsWith(`/dashboard`) ? 'activeClass' : 'inactiveClass'"
        >
          <AppLink :to="'/dashboard'">
            <span class="flex items-center group py-0">
              <!--Component v-if="menu && menu.icon!==''"
                :is="iconName"
                class="w-5 h-5 mr-2 fill-current"
              /-->
              Dashboard
            </span>
          </AppLink>
        </div>

        <div 
          class="mb-2 py-1 px-2"
          :class="route.path.startsWith(`/movements`) ? 'activeClass' : 'inactiveClass'"
        >
          <AppLink :to="'/movements'">
            <span class="flex items-center group py-0">
              <!--Component v-if="menu && menu.icon!==''"
                :is="iconName"
                class="w-5 h-5 mr-2 fill-current"
              /-->
              Todos los movimientos
            </span>
          </AppLink>
        </div>
  
      </nav> 
    </div>
  </div>
</template>

<style scoped>
.activeClass {
  @apply
    bg-gray-600
    bg-opacity-25    
    border-gray-100
    border-l-4
    -ml-3;
}
.inactiveClass {
  @apply
    border-gray-100
    hover:bg-gray-400    
    hover:bg-opacity-25
}
</style>