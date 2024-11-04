
import { ref } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement, Category } from '../types'

export default () => {
    const movement = ref<Movement>()
    const movements: Ref<Movement[]> = ref([])
    const categories = ref<Category[]>([])
    const pending = ref(false);

    const getCategories = async(type = false) => {
      pending.value = true;
      const { data } = await supabaseClient
        .from('categories')
        .select(`id, name`)
        .eq('type', type);          
      categories.value = data as Category[];
      pending.value = false;  
    }

    const getMovement = async(id?: string) => {
      pending.value = true;
      const { data } = await supabaseClient
        .from('movements')
        .select(`*, categories (name)`).eq('id', id)
        .single();          
      movement.value = data as Movement;
      pending.value = false;  
    }

    const getMovements = async() => {
      pending.value = true;
      const balance = ref(0)

      const { data } = await supabaseClient
        .from('movements')
        .select(`*, categories (name, type)`);
      
      movements.value = (data as Movement[])
        .map((movement)=> {
          balance.value = movement.type 
            ? movement.amount + balance.value
            : balance.value - movement.amount;

          return {
            ...movement,
            balance: balance.value
          }
        })

      pending.value = false;  
    }

    return {
      categories,
      movement,
      movements,
      pending,

      getCategories,
      getMovement,
      getMovements
    }
}