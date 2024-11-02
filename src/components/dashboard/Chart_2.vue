<script setup lang="ts">
  import { ref } from 'vue'
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  //const props = defineProps({ pickUp: Array })
  const props = defineProps({ backgroundColor: Array })

  //const labels = ref([])
  //const data = ref([])

  //labels.value = props.pickUp.map(e=>e.created_at)
  //data.value = props.pickUp.map(e=>e.total)

  const chartData = ref({
    labels: [ 'January', 'February', 'March'],
    //labels: labels.value,
    datasets: [
      {
        label: 'Data One',
        backgroundColor: props.backgroundColor,
        data: [40, 20, 12]
        //data: data.value
      }
    ]
  })
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })
</script>

<template>
  <div style="width: 450px">
    <Bar :data="chartData as unknown as any" :options="chartOptions" />
  </div>
</template> 