<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
if (!isDark.value)
  toggleDark()
</script>

<template>
  <div class="section">  
    <slot />
  </div>
</template>

<style scoped>
.section {
  @apply flex justify-center min-h-screen p-8;
}
</style>
