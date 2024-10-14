<script setup lang="ts">
import { computed } from "vue"
import { useAuthStore } from '@/stores/auth'
import IconLogout from "@/components/icon/Logout.vue";

const authStore = computed(() => useAuthStore())
const logout = () => authStore.value.logout()
</script>

<template>
  <button
    type="button"
    @click="logout"
    class="inline-flex items-center space-x-2"
  >
    <span class="hidden sm:inline">Logout</span>
    <IconLogout class="w-6 h-6 text-white" />
  </button>
</template>

