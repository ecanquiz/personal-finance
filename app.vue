<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tojtdjayohnlrkqouhix.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvanRkamF5b2hubHJrcW91aGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NDkyNjIsImV4cCI6MjA0NDQyNTI2Mn0.h_HvRcbOS_2YDkSIL_d9k2U6wC7VZwOoA232OGYzIq4")

const movements = ref([])

async function getMovements() {
  const { data } = await supabase.from('movements').select()
  // @ts-ignore
  movements.value = data
}

onMounted(() => {
  getMovements()
  console.log(movements.value)
})
</script>
<template>
  <div>
    <!--NuxtRouteAnnouncer />
    <NuxtWelcome /-->
    <ul>
    <li v-for="movement in movements" :key="movement">{{ movement }}</li>
  </ul>
  </div>
</template>
