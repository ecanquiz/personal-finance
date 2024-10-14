<script setup lang="ts">
//const layout = "default";

// https://vite-pwa-org.netlify.app/frameworks/nuxt
const { $pwa } = useNuxtApp()

onMounted(() => {
  //if ($pwa.offlineReady)
  //  toast.success('App ready to work offline')
})
</script>

<template>
  <div>
    <!--NuxtLayout :name="layout"-->
    <NuxtLayout>
      <!--VitePwaManifest /-->
      <!--NuxtPwaManifest /-->
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>