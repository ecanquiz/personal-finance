import { reactive, ref } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Category, Movement, Props } from '@/types'

export default (props: Props) => {
  const categories = ref<Category[]>([])
  const pending = ref(false);

  const form = reactive<Movement>({
    amount: 0,
    balance: 0,
    budget: 0,
    categories: {id: 0, name: '', type: false},
    category_id: 0,
    concept: "",
    created_at: new Date().toISOString() as unknown as Date,
    date: new Date().toISOString().slice(0, 10) as unknown as Date,
    id: 0,
    type: false
  })

  if (props && props.movement) {
    form.amount= props.movement.amount
    form.balance= props.movement.balance
    form.budget= props.movement.budget
    form.categories= props.movement.categories
    form.category_id= props.movement.category_id
    form.concept= props.movement.concept
    form.created_at= props.movement.created_at
    form.date= props.movement.date
    form.id= props.movement.id
    form.type= props.movement.type
  }

  const getCategories = async(type = false) => {
    pending.value = true;
    const { data } = await supabaseClient
      .from('categories')
      .select(`id, name`)
      .eq('type', type);          
    categories.value = data as Category[];
    pending.value = false;  
  }

  return {
    categories,
    form,
    pending,
    
    getCategories
  }
}
