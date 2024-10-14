<script setup lang="ts">  
  //import IconLogo from "../icon/Logo.vue"
  import HostImage from "@/components/auth/HostImage.client.vue";
  import FormLogin from "../components/auth/FormLogin.vue";
  import { useLogin } from '../composables/auth/useLogin'  

  const { login, sending, error } = useLogin()
</script>

<template>
  <div class="p-5">
    <!--IconLogo class= "flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/4 y-1/4 h-auto m-auto bg-transparent"/-->
    <HostImage>
      <h2 class="text-2xl text-center absolute bottom-0 ml-56">Inicio de Sesión</h2>
    </HostImage>
    <FormLogin
      class="p-5 bg-base-200 rounded shadow w-96 mx-auto"
      @submit='login($event)'      
      :sending='sending'
      :error='error'
    />
    <p class="mt-2 text-center text-gray-500">
      <NuxtLink
        to="/register"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="register-link"
      >
        Regístrese para obtener una cuenta
      </NuxtLink><br>
      <!--NuxtLink
        to="/forgot-password"
        class="underline text-sm text-gray-600 hover:text-gray-900"
        data-testid="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </NuxtLink-->
    </p>
  </div>
</template>
