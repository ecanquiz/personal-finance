<script setup lang="ts">
import LandingImage from '@/components/App/LandingImage.vue'
</script>

<template>
  <div class="m-10 sm:my-20 bg-base-100">
    <div class="sm:grid grid-cols-2 gap-4">
      <div class="my-auto"><LandingImage class= "w-full h-full"/></div>
      <div class="my-auto">
        <div class="">
          <div class="text-[#6C63FF] wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-xl justify-self-center">Perfin</p>
          </div>
          <div class="text-current wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-3xl justify-self-center">Finanzas Personales</p>
          </div>
          <div class="w-full wx-full wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-lg dark:text-gray-300 justify-self-center">PWA</p>
          </div>
          <div class="grid lg:grid-cols-2 gap-2 justify-center text-lg my-10 lg:space-x-5">            
            <AppLink
              to="/login"
              class="btn btn-primary block m-auto text-center"
              data-testid="login-link"
            >Iniciar Sesión</AppLink>
            <AppLink
              to="/register"
              class="btn btn-default block m-auto text-center" 
              data-testid="register-link"
            >Registrarse</AppLink>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

