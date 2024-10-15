<script setup lang="ts">
//const layout = "default";

// https://vite-pwa-org.netlify.app/frameworks/nuxt
//const { $pwa } = useNuxtApp()

onMounted(() => {
  //if ($pwa && $pwa.offlineReady)
    //console.log('App ready to work offline')
    //toast.success('App ready to work offline')
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