
import { ref, onMounted } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement } from '../types'
const movements: Ref<Movement[]> = ref([])

export default () => {
    const pending = ref(false);

    const getMovements = async() => {
      pending.value = true;
      const { data } = await supabaseClient.from('movements').select(`*, categories (name)`);
      movements.value = data as Movement[];
      console.log(movements.value)
      pending.value = false;  
    }

    onMounted( async () => await getMovements() );

    return { movements, pending }
}