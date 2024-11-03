
import { ref } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement } from '../types'

export default () => {
    const movement = ref<Movement>()
    const movements: Ref<Movement[]> = ref([])
    const pending = ref(false);

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
      const { data } = await supabaseClient
          .from('movements')
          .select(`*, categories (name, parent_id)`);
      movements.value = data as Movement[];

      pending.value = false;  
    }

    return {
      movement,
      movements,
      pending,

      getMovement,
      getMovements
    }
}