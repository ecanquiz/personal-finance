<script setup lang="ts">
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth"
//import Logout from "@/modules/Auth/components/Logout.vue"

const store = computed(() => useAuthStore())

</script>
<template>
<div
  class="absolute right-0 mt-2 py-2 w-max bg-base-100 rounded-md shadow-xl z-20"
  >
    <NuxtLink
      to="/profile"
      class="block px-4 py-2 text-sm hover:bg-gray-400"
    >
      <p v-if="store.authUser">{{ store.authUser.bank_description }}</p>
      <p>{{ store.authUser && store.authUser.name ? store.authUser.name : 'Profile' }}</p> 
    </NuxtLink>

    <NuxtLink
      to="/"
        class="block px-4 py-2 text-sm hover:bg-gray-400"
      >
      <AuthLogout />
    </NuxtLink> 
  </div>
</template>
 