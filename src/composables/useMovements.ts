
import { ref } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement } from '../types'
const movements: Ref<Movement[]> = ref([])

export default () => {
    const pending = ref(false);

    const getMovements = async() => {
      pending.value = true;
      const { data } = await supabaseClient.from('movements').select();
      movements.value = data as Movement[];
      pending.value = false;  
    }

    return {
      movements,
      pending,

      getMovements
    }
}