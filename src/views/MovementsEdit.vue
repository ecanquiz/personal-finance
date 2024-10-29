<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useMovements from '@/composables/useMovements'
import FormMovement from '@/components/FormMovement.vue'

const router = useRouter()
const props = defineProps<{
  id?: string
}>()

const {
  movement,
  pending,
  getMovement
} = useMovements();

onMounted( async () => await getMovement(props.id) ); 

const isRenderable = computed(
  () => (props.id && movement.value && Object.keys(movement.value).length > 0 ) || props.id===undefined
)
</script>

<template>
  <div class="container row col-md-6 mx-auto w-full">
    <div  class="flex space-x-2">
      <button
        class="btn btn-primary mb-4"
        @click="router.push({ path: '/movements' })"
      >
        See all movements
      </button>
    </div>

    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">
      {{$props.id ? 'Edit' : 'Create'}} Movement
    </h1>

    <FormMovement
      v-if="isRenderable"
      :movement="movement"
    />

  </div>
</template>
