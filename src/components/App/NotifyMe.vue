<script setup lang="ts">
import useNotifyMe from "@/composables/App/useNotifyMe"

const {permission, notifyMe} = useNotifyMe()
</script>

<template>
    <div class="mx-auto w-full lg:w-3/4 mt-7">
      <button v-if='!permission' class="btn btn-default" @click="notifyMe">Notify me!</button>
      <button v-else='permission' class="btn btn-default" @click="notifyMe">Try to notify me!</button>
  </div>
</template>