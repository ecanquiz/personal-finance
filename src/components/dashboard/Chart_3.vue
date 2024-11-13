<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

  ChartJS.register(ArcElement, Tooltip, Legend)
  //const props = defineProps({ pickUp: Array })
  //labels.value = props.pickUp.map(e=>e.created_at)
  const props = defineProps({
    backgroundColor: Array,
    labels: Array,
    data: Array
  })



  //const labels = ref([])
  //const data = ref([])

  //data.value = props.pickUp.map(e=>e.total)

  

  const chartData = ref({
    //labels: [ 'January', 'February', 'March'],
    //labels:[],
    labels: props.labels,
    datasets: [
      {
        label: 'Data One',
        backgroundColor: props.backgroundColor,
        //data: [40, 20, 12]
        //data: data.value
        data: props.data
      }
    ]
  })
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })

  //chartData.value.labels=toRaw(labels.value)


  //chartData.value.datasets[0].data=data.value


</script>

<template>
  <div style="width: 450px" v-if="props.labels && props.data">
    <Pie :data="chartData as unknown as any" :options="chartOptions" />
  </div>
</template> 