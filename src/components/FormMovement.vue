<script setup lang="ts">
import { onMounted } from 'vue'
import useFormMovement from '@/composables/useFormMovement'
import type { MovementForm } from '@/types'

const props = defineProps<{
  movement?: MovementForm,
  pending: boolean
}>()

const {
  categories,  
  form,
  pending: loading,

  getCategories
} = useFormMovement(props)

onMounted(
  async () => {
    if (props && props.movement ) {
      await getCategories(props.movement.movement_type)
    } else {
      await getCategories(false)
    }
  }
); 

const changeCategories = (type: boolean): void => {
  form.category_id = 0;
  getCategories(type);
}

const emit = defineEmits<{
  (e: 'submit', form: MovementForm, movementId?: number): void
}>()

const submit = () => {
  emit('submit', {
    number: form.number,
    moment: form.moment,
    category_id: form.category_id,
    concept: form.concept,
    budget: form.budget,
    amount: form.amount,
    movement_type: form.movement_type,
  }, props.movement ? props.movement!.id : undefined)
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="grid lg:grid-cols-2 gap-4">

      <div class="block">
        <label class="block">Movement</label>
        <div class="inline mr-2">
          <input
            type="radio"
            v-model="form.movement_type"
            :value="true"
            name="type"
            @click="changeCategories(true)"
          />
          <label class="ml-2">Income</label>
        </div>
        <div class="inline">
          <input
            type="radio"
            v-model="form.movement_type"
            :value="false"
            name="type"
            @click="changeCategories(false)"
          />
          <label class="ml-2">Expenses</label>
        </div>
      </div>

      <div class="block mr-2">
        <input type="hidden" v-model="form.id" />
        <label class="block mb-2">Number</label>
        <span class="border border-gray-300 pl-2 py-2 bg-gray-100 text-gray-400" style="padding-right: 69%;" >{{ form.number }}</span>
      </div>

      <div class="block">
        <label>Date</label>
        <input type="text" v-model="form.moment" />
      </div>

      <div class="block">
        <label>Select a frequency</label>
        <select v-model="form.category_id">
          <option
            v-for="option in categories"
            :value="option.id"
            :key="option.id"
            :selected="option.id === form.category_id"
          >{{ option.name }}</option>
        </select>
      </div>

      <div class="block">
        <label class="mr-2">Concept</label>
        <input type="text" v-model="form.concept"/>
      </div>

      <div class="block">
        <label class="mr-2">Budget</label>
        <input type="text" v-model="form.budget"/>
      </div>

      <div class="block">
        <label class="mr-2">Amount</label>
        <input type="text" v-model="form.amount"/>
      </div>
    </div>
    
    <button
      class="btn btn-primary mt-5 justify-self-start"
      type="submit"
      :text="pending ? 'Guardando...' : 'Guardar'"
      :isDisabled='pending'
      @submit="submit()"    
    >
      {{ props.pending ? 'Guardando...' : 'Guardar'}}
    </button>
  </form>
</template>
