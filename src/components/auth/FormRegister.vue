<script setup lang="ts">
  import { reactive } from "vue"
  // @ts-ignore
  import type { FormError, FormSubmitEvent } from '#ui/types'

  defineProps({
    error: [Object, String],
    sending: Boolean
  })

  const emit = defineEmits(['submit'])   

  const state = reactive({
    name: '',
    email : '',
    password: '',
    passwordConfirm: ''
  })

  const validateEmail = (email:string) => /\S+@\S+\.\S+/.test(email)
  const validatePassword = (password:string) => password.length > 5
  const validatePasswordConfirm = (
    passwordConfirm:string,
    password:string
  ) => passwordConfirm === password

  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    if (!state.passwordConfirm) errors.push({ path: 'passwordConfirm', message: 'Required' })

    if (!validateEmail(state.email)) errors.push({ path: 'email', message: 'Requires a valid email' })
    if (!validatePassword(state.password)) errors.push({ path: 'password', message: 'The password must be at least 6 characters' })
    if (!validatePasswordConfirm(state.passwordConfirm, state.password)) errors.push({ path: 'passwordConfirm', message: 'The password confirm must be equal than password' })
    
    return errors
  }

  const submit = async (event: FormSubmitEvent<any>) => {
    emit('submit', {
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirm: state.passwordConfirm
    })
  }
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="submit">
    <UFormGroup label="Name" name="name">
      <UInput
        type="text"
        label="Nombre completo"
        name="name"
        v-model="state.name"
        placeholder="Full name"
        class="mb-2"
        data-testid="name-input"
      />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput
        type="email"
        label="Correo"
        name="email"
        v-model="state.email"
        placeholder="email@domain.ext"
        class="mb-2"
        data-testid="email-input"
      />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput
        type="password"
        label="Clave"
        name="password"
        v-model="state.password"
        placeholder="Password"
        class="mb-2"
        data-testid="password-input"
      />
    </UFormGroup>

    <UFormGroup label="Password Confirm" name="passwordConfirm">
      <UInput
        type="password"
        label="Confirmar clave"
        name="passwordConfirm"
        v-model="state.passwordConfirm"
        placeholder="Confirm password"
        class="mb-4"
        data-testid="confirm-password-input"
      />  
    </UFormGroup> 
    
    <UButton
        color="lime"
        type="submit"
        :isDisabled='sending'
        data-testid="submit-btn"
    >
      {{ sending ? 'Registrándose...' : 'Registrarse' }}
    </UButton>
    
    <!--AppFlashMessage :error="error" /-->
    <!--AppFlashMessage :error='props.error' /-->
  </UForm>
</template>

