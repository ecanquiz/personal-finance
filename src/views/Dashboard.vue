<script setup lang="ts">
import {ref, onMounted} from 'vue';
import type {Ref} from "vue"
import useMovements from '@/composables/useMovements'
import Chart_1 from "@/components/dashboard/Chart_1.vue"
import Chart_2 from "@/components/dashboard/Chart_2.vue"
import Chart_3 from "@/components/dashboard/Chart_3.vue"
import Chart_4 from "@/components/dashboard/Chart_4.vue"
  
const { getMovementsTypeAndCategoryByMonthOfYear } = useMovements();

//const pickUp = ref([]);
const pending = ref(false);

const labels_3: Ref<string[]> = ref([])
const data_3: Ref<number[]> = ref([])

onMounted(async () => {
  pending.value=true
  const result = await getMovementsTypeAndCategoryByMonthOfYear()
    result?.forEach((res)  => {
      labels_3.value.push(res.category)
      data_3.value.push(res.amount_tot)
    })
    pending.value=false
})
/* v-if="pickUp && pickUp.length" */

const backgroundColor = [ '#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED' ];
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
        <div class="block"><Chart_1 :backgroundColor="backgroundColor"/></div>
        <div class="block"><Chart_4 :backgroundColor="backgroundColor"/></div>
        <div class="block"><Chart_2 :backgroundColor="backgroundColor"/></div>
        <div class="block">
          <Chart_3 v-if="labels_3 && data_3"
            :backgroundColor="backgroundColor"
            :labels="labels_3"
            :data='data_3'
          />
        </div>

        <!--div class="block"><Chart_1 :pickUp="pickUp"/></div>
        <div class="block"><Chart_4 :pickUp="pickUp"/></div>
        <div class="block"><Chart_2 :pickUp="pickUp"/></div>
        <div class="blockd"><Chart_3 :pickUp="pickUp"/></div-->
      </div>
    </div>
  </div>
</div>
</template>


