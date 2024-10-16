<script setup lang="ts">
  import { reactive } from "vue"
  import type { FormLogin } from "types/auth";
  // @ts-ignore
  import type { FormError, FormSubmitEvent } from '#ui/types'

  const props = defineProps<{
    error?: object | string | undefined,
    sending: boolean
  }>()  

  const emit = defineEmits<{
    (e: 'submit', { email, password }: FormLogin): void
  }>()

  const state = reactive({
    email: '',
    password : ''
  })

  const validateEmail = (email:string) => /\S+@\S+\.\S+/.test(email)
  const validatePassword = (password:string) => password.length > 5

  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    if (!validateEmail(state.email)) errors.push({ path: 'email', message: 'Requires a valid email' })
    if (!validatePassword(state.password)) errors.push({ path: 'password', message: 'The password must be at least 6 characters' })

    return errors
  }

  const submit = async (event: FormSubmitEvent<any>) => {
  
  console.log('sdfsdf')
  
    emit('submit', {
      email: state.email,
      password: state.password
    })
  }
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="submit">
    <UFormGroup label="Email" name="email">
      <UInput
        type="email"
        label="Correo Electrónico"
        name="email"
        v-model="state.email"
        autocomplete="email"
        placeholder="email@domain.ext"      
        class="mb-2"
        data-testid="email-input"      
      />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput
        type="password"
        label="Contraseña"
        name="password"
        placeholder="password"
        v-model="state.password"
        class="mb-4"
        data-testid="password-input"
      />
    </UFormGroup>   

    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
      <label class="flex items-center">
        <input
          type="checkbox"
          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50i mb-4"
          name="remember">
          <span class="ml-2 mb-3 text-sm text-gray-600">
            Recuérdame
          </span>
      </label>

      <UButton
        color="lime"
        class="justify-center"
        type="submit"
        :isDisabled='props.sending'
        data-testid="submit-btn"
      >
        {{ props.sending ? 'Iniciando sesión...' : 'Iniciar sesión' }}
      </UButton>

    </div>
    <AppFlashMessage :error='props.error' />
  </UForm>
  <!--/form-->
</template>
