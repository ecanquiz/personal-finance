<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useAuthStore } from "@/stores/auth"
import AppBtn from "@/components/app/Btn.vue"
import AppInput from '@/components/app/Input.vue'
import AppFlashMessage from "@/components/app/FlashMessage.vue"
 
defineProps<{
  message?: string
  error?: string
  sending?: boolean
}>()
   
const emit = defineEmits(['submit'])

const store = useAuthStore()  
const name = ref<string>()
const email = ref<string>()
const loading = ref(false)
  
const submit = async () => {
  emit('submit', {
    name: name.value,
    email: email.value
  })
}

onMounted(async () => {
  if (store.authUser) {    
    loading.value = true
    await store.getAuthUser()
    loading.value = false
  }
  name.value = store.authUser.name
  email.value = store.authUser.email
})
</script>

<template>
  <form @submit.prevent="submit">
    <AppInput
      type="text"
      label="Nombre"
      name="name"
      v-model="name"
      class="mb-2"
      data-testid="name-input"
    />
    <AppInput
      type="email"
      label="Correo"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      class="mb-4"
      data-testid="email-input"
    />
    <!--AppBtn
      type="submit"
      :text="sending ? 'Guardando...': 'Guardar'"
      :isDisabled="sending"
      data-testid="submit-button"
    /-->
    
    <UButton data-testid="login-link" color="lime">
        {{sending ? 'Guardando...': 'Guardar'}}
    </UButton>
    <AppFlashMessage :message="message" :error="error" />
  </form>
</template>
