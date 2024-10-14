<script setup lang="ts">
import { ref } from "vue"
import { useAuthStore } from '@/stores/auth'
import { getError } from "@/utils/helpers"
import * as AuthService from "@/services/auth"
import AppBtn from "@/components/app/Btn.vue"
import AppFlashMessage from "@/components/app/FlashMessage.vue"

const store = useAuthStore()
const error = ref(null)
const message = ref(null)

const sendVerification = () => {
  error.value = null
  message.value = null

  const payload = { user: store.authUser.id }

  AuthService.sendVerification(payload)
    .then(() => (message.value = "Verification email sent."))
    .catch((err) => (error.value = getError(err)))
}
</script>

<template>
  <div>
    <form @submit.prevent="sendVerification">
      <!--AppBtn type="submit" text="Verify Email" /-->
     <UButton data-testid="login-link" color="lime">
        Verify Email
    </UButton>
    </form>
    <AppFlashMessage :message="message" :error="error" />
  </div>
</template>
