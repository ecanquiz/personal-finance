<script setup lang="ts">
  //import IconLogo from "@/icons/IconLogo.vue"
  import FormRegister from "../components/auth/FormRegister.vue";
  import { useRegister } from '../composables/auth/useRegister'
  import HostImage from "@/components/auth/HostImage.client.vue";

  const { register, sending, error } = useRegister()
</script>

<template>
  <div class="p-5 m-50 w-50">
    <!--IconLogo class= "flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/4 y-1/4 h-auto m-auto bg-transparent"/-->    
    <HostImage><h2 class="text-2xl text-center mx-auto absolute bottom-0 ml-56">Regístrerse</h2></HostImage>    
    <FormRegister
      class="p-5 bg-base-200 rounded shadow w-96 mx-auto"
      @submit='register'      
      :sending='sending'
      :error='error'
    />
    <p class="mt-2 text-center text-gray-500">
      <UButton to="/login" data-testid="login-link" color="lime">
        ¿Ya registrado?
      </UButton>
    </p>
  </div>
</template>

