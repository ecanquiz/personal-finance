<script setup lang="ts">
import useFormMovement from '@/composables/useFormMovement'
import type { Movement } from '@/types'

const props = defineProps<{ movement?: Movement }>()

const { form } = useFormMovement(props)
</script>

<template>
  <form>
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
        <label class="mr-2">Movement</label>
        <input type="checkbox" v-model="form.type"/>
      </div>

      <div class="block">
        <label class="mr-2">Category id</label>
        <input type="text" v-model="form.category_id"/>
      </div>

      <div class="block">
        <label class="mr-2">Category</label>
        <input type="text" v-model="form.categories.name"/>
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
  </form>
</template>
