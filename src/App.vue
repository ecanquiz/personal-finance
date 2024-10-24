<script setup lang="ts">
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { usePermission } from '@vueuse/core'

const defaultLayout = "default"
const { currentRoute } = useRouter()
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

// Begings Notification logic
const notifications = ref(
  usePermission('notifications')
)

const permission = computed(
  () => notifications.value === "granted"
)

const notifyMe = () => {
  // We check if the browser supports notifications
  if (!("Notification" in window)) {
    alert(
      "This browser does not support desktop notifications",
    );
  }

  // We check if the permissions have been granted before
  else if (Notification.permission === "granted") {
    // If it is correct, we launch a notification
    if (import.meta.env.DEV) {
      const notification = new Notification("Hi dev, permissions have been granted before!");
    } else if (import.meta.env.PROD) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Hi prod, permissions have been granted before!");
      });
    }
  }

  // If not, we ask permission for notification
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user grants us, we create the notification
      if (permission === "granted") {
        if (import.meta.env.DEV) {
          const notification = new Notification("Hi dev, permissions are granted now!");
        } else if (import.meta.env.PROD) {          
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("Hi prod, permissions are granted now!");
          });          
        }
      }
    });
  }

  // Lastly, if the user has denied permission,
  // and wants to be respectful, there's no need to bother them.
}
</script>

<template>



  <component :is="layout">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </component>





  <div class="mx-auto w-full lg:w-3/4 mt-7">
      <button v-if='!permission' class="btn btn-default" @click="notifyMe">Notify me!</button>
      <button v-else='permission' class="btn btn-default" @click="notifyMe">Try to notify me!</button>
  </div>
</template>

<style lang="css" scoped>
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to{
    opacity:0;
  }
</style>
