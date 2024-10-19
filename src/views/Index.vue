<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useIndex from '../composables/useIndex'
// @ts-ignore
import { createClient } from '@supabase/supabase-js'

const { pending, tasks } = useIndex()
const supabaseUrl = 'https://tojtdjayohnlrkqouhix.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvanRkamF5b2hubHJrcW91aGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NDkyNjIsImV4cCI6MjA0NDQyNTI2Mn0.h_HvRcbOS_2YDkSIL_d9k2U6wC7VZwOoA232OGYzIq4")
const movements = ref([])
async function getMovements() {
  const { data } = await supabase.from('movements').select()
  // @ts-ignore
  movements.value = data
}
onMounted(async () => {
 await getMovements()
  console.log('sfsf', movements.value)
})
</script>

<template>
  <div class="container mx-auto w-full lg:w-3/4">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">ToDo List</h1>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>          
          <th class="p-2">Title</th>
          <th class="p-2">Description</th>
          <th class="p-2">Done</th>          
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in tasks"
          :key="task.id"
          class="border-b dark:border-neutral-500"
        >          
          <td class="p-2">          
            <router-link
              class="text-indigo-600 hover:text-indigo-800 underline"
              :to="{ name: 'edit', params: { id: task.id }}"               
            >
              {{ task.title }}
            </router-link>          
          </td>
          <td class="p-2">{{ task.description }}</td>
          <td class="p-2">{{ task.done }}</td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="tasks.length === 0">Empty list.</h4>
    <ul>
      <li v-for="country in movements" :key="country">{{ country }}</li>
    </ul>
  </div>
</template>
