<script setup lang="ts">
import {ref, onMounted} from 'vue';
import type {Ref} from "vue"
import useMovements from '@/composables/useMovements'
import Chart_1 from "@/components/dashboard/Chart_1.vue"
import Chart_2 from "@/components/dashboard/Chart_2.vue"
import Chart_3 from "@/components/dashboard/Chart_3.vue"
import Chart_4 from "@/components/dashboard/Chart_4.vue"
  
const {
  getMovements,
  //getMovementsTypeAndCategoryByMonthOfYear,
  getMovementsTypeAndCategoryByMonthOfYearType
} = useMovements();

const pending = ref(false);
const labels_1: Ref<string[]> = ref([])
const data_1: Ref<number[]> = ref([])
const labels_3: Ref<string[]> = ref([])
const data_3: Ref<number[]> = ref([])
const labels_4: Ref<string[]> = ref([])
const data_4: Ref<number[]> = ref([])

onMounted(async () => {
  pending.value=true
  const results = await Promise.all([
    getMovements(),
    getMovementsTypeAndCategoryByMonthOfYearType(false),
    getMovementsTypeAndCategoryByMonthOfYearType(true)
  ]).then(results => results );

  results[0]?.forEach((res)  => {
    labels_1.value.push(res.category as string)
    data_1.value.push(res.balance)
  });
  results[1]?.forEach((res)  => {
    labels_3.value.push(res.category)
    data_3.value.push(res.amount_tot)
  });
  results[2]?.forEach((res)  => {
    labels_4.value.push(res.category)
    data_4.value.push(res.amount_tot)
  });
  pending.value=false
})

const backgroundColorBlue = [
  '#172554',
  '#1e3a8a',
  '#1e40af',
  '#1d4ed8',
  '#2563eb',
  '#3b82f6',
  '#60a5fa',
  '#93c5fd',
  '#bfdbfe',
  '#dbeafe',
  '#eff6ff'
];

const backgroundColorRed = [
  '#450a0a',
  '#fef2f2',
  '#fee2e2',
  '#fecaca',
  '#fca5a5',
  '#f87171',
  '#ef4444',
  '#dc2626',
  '#b91c1c',
  '#991b1b',
  '#7f1d1d' 
];

const backgroundColorGreen = [
  '#052e16',
  '#14532d',
  '#166534',
  '#15803d',
  '#16a34a',
  '#22c55e',
  '#4ade80',
  '#86efac',
  '#bbf7d0',
  '#dcfce7',
  '#f0fdf4'
];
</script>
<template>
<div>
  <div class="w-full mb-10">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">Dashboard</h1>
  </div>
  <div class="section" v-if="!pending">
    <div class="flex flex-center column">
      <div        
        id="parent"
        class="grid lg:grid-cols-2 gap-20"
        style="overflow: hidden;"
      >
        <div class="block">
          <Chart_1
            v-if="labels_1 && data_1"
            :backgroundColor="backgroundColorBlue"
            :labels="labels_1"
            :data='data_1'
          />
        </div>
        <div class="block">
          <Chart_4 
            v-if="labels_4 && data_4"
            :backgroundColor="backgroundColorGreen"
            :labels="labels_4"
            :data='data_4'
          />
        </div>
        <div class="block">
          <Chart_2
            :backgroundColor="backgroundColorBlue"
          />
        </div>
        <div class="block">
          <Chart_3 v-if="labels_3 && data_3"
            :backgroundColor="backgroundColorRed"
            :labels="labels_3"
            :data='data_3'
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>


