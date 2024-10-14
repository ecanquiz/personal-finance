<script setup lang="ts">
import FormUpdatePassword from "./FormUpdatePassword.vue"
import { useProfileUpdatePassword } from "@/composables/auth/useProfileUpdatePassword"

const {
  error,
  message,
  sending,
  updatePassword
} = useProfileUpdatePassword() 
</script>

<template>
  <FormUpdatePassword
    class="p-5 border rounded shadow"
    @submit='updatePassword'      
    :sending='sending'
    :error='error'
    :message="message"
  />
</template>
