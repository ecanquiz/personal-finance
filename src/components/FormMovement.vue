<script setup lang="ts">
import { ref } from 'vue'
import useFormMovement from '@/composables/useFormMovement'
import type { Category, Movement } from '@/types'

const props = defineProps<{
  categories: Category[]
  movement?: Movement
}>()

const { form } = useFormMovement(props)

const pending = ref(false)
const submit = ()=> {
  pending.value = true
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        pending.value = false
      );
      alert('Saved successfully !!');
    }, 300);
  });
  
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="grid lg:grid-cols-2 gap-4">

      <div class="block">
        <label>Id</label>
        <input type="text" v-model="form.id" />
      </div>

      <div class="block">
        <label>Date</label>
        <input type="text" v-model="form.date" />
      </div>

      <div class="block">
        <label class="block">Movement</label>
        <div class="inline mr-2">
          <input
            type="radio"
            v-model="form.type"
            :value="true"
            name="type"
          />
          <label class="ml-2">Income</label>
        </div>
        <div class="inline">
          <input
            type="radio"
            v-model="form.type"
            :value="false"
            name="type"
          />
          <label class="ml-2">Expenses</label>
        </div>
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

      <div class="block">
        <label class="mr-2">Balance</label>
        <input type="text" v-model="form.balance"/>
      </div>

      <div class="block">
        <label class="mr-2">Created at</label>
        <p> {{form.created_at }} </p>
      </div>
    </div>
    
    <button
      class="btn btn-primary mt-5 justify-self-start"
      type="submit"
      :text="pending ? 'Guardando...' : 'Guardar'"
      :isDisabled='pending'
      @submit="submit()"    
    >
      {{ pending ? 'Guardando...' : 'Guardar'}}
    </button>
  </form>
</template>
