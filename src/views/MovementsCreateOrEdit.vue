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
  categories,
  movement,
  pending,
  getMovement,
  getCategories
} = useMovements();

if (props && props.id) {
  onMounted(
    async () => {
      await getMovement(props.id)
      if (movement.value ) {
        await getCategories(movement.value.type)
      }
  }); 
} else {
  getCategories(false)
}

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
      :categories="categories"
      :movement="movement"
    />

  </div>
</template>
