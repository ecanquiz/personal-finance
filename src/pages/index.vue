<script setup lang="ts">
import HostImage from "@/components/auth/HostImage.client.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="m-20 sm:my-20 bg-base-200">
    <div class="sm:grid grid-cols-2 gap-4">
      <div class="m-auto">
          <HostImage />
      </div>
      <div class="m-auto">
        <div class="">
          <div class="text-[#6C63FF] wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-xl justify-self-center">Backend / Frontend</p>
          </div>
          <div class="text-current wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-3xl justify-self-center">LaraNuxt [api*ssr]</p>
          </div>
          <div class="w-full wx-full wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-lg dark:text-gray-300 justify-self-center">Laravel & Nuxt (Scaffolding)</p>
          </div>
          <div class="flex justify-center text-lg my-10 space-x-5">
            <UButton to="/login" data-testid="login-link" color="lime">Iniciar Sesión</UButton>
            <UButton to="/register" data-testid="register-link" color="lime">Registrarse</UButton> 
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>



