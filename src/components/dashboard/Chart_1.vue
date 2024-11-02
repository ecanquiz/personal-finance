<script setup lang="ts">
//https://vue-chartjs.org/examples/
  import { ref, toRaw } from 'vue'
  import { Line } from 'vue-chartjs'
  import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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
    <Line :data="chartData as unknown as any" :options="chartOptions" />
  </div>
</template> 