<script setup lang="ts">
import { onMounted } from 'vue'
import useMovements from '../composables/useMovements'

const {
  movements,
  pending,

  getMovements
} = useMovements();

onMounted(
  async () => await getMovements()
);
</script>

<template>
  <div class="container w-full lg:w-3/4">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">Movements List</h1>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>          
          <th class="p-2">ID</th>
          <th class="p-2">DATE</th>
          <th class="p-2">MOVEMENT</th>
          <th class="p-2">CATEGORY</th>
          <th class="p-2">CONCEPT</th>
          <th class="p-2">BUDGET</th>
          <th class="p-2">AMOUNT</th>
          <th class="p-2">BALANCE</th>
          <th class="p-2">CREATED_AT</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="movement in movements"
          :key="movement.id"
          class="border-b dark:border-neutral-500"
        >          
          <td class="p-2">          
            <router-link
              class="text-indigo-600 hover:text-indigo-800 underline"
              :to="{ name: 'movements-edit', params: { id: movement.id }}"               
            >
              {{ movement.id }}
            </router-link>          
          </td>
          <td class="p-2">{{ movement.date }}</td>
          <td class="p-2">{{ movement.type_id }}</td>
          <td class="p-2">{{ movement.category }}</td>
          <td class="p-2">{{ movement.concept }}</td>
          <td class="p-2">{{ movement.budget }}</td>
          <td class="p-2">{{ movement.amount }}</td>
          <td class="p-2">{{ movement.balance }}</td>
          <td class="p-2">{{ movement.created_at.toString().substring(0,16) }}</td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="movements.length === 0">Empty list.</h4>
  </div>
</template>
