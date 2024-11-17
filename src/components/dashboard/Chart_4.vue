<script setup lang="ts">
  import { ref } from 'vue'
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

  ChartJS.register(ArcElement, Tooltip, Legend)

  //const props = defineProps({ pickUp: Array })

  const props = defineProps({
    backgroundColor: Array,
    labels: Array,
    data: Array
  })

  //const labels = ref([])
  //const data = ref([])

  //labels.value = props.pickUp.map(e=>e.created_at)
  //data.value = props.pickUp.map(e=>e.total)

  const chartData = ref({
    //labels: [ 'January', 'February', 'March'],
    labels: props.labels,
    datasets: [
      {
        label: 'Data One',
        backgroundColor: props.backgroundColor,
        //data: [40, 20, 12]
        data: props.data
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
    <Doughnut :data="chartData as unknown as any" :options="chartOptions" />
  </div>
</template> 