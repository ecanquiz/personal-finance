
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement, Category } from '../types'


export default () => {
    const router = useRouter();
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
      const balance = ref(0)

      const { data, error } = await supabaseClient
        .from('movements_view')
        .select(`*`)
        .order('id') //, { ascending: false }
        //.eq('month', '11')
        //.range(0,4);

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('DataBefore:', data);
          movements.value = (data as Movement[])
          .map((movement)=> {
            if (movement.movement_type==='Income') {
              balance.value = movement.amount + balance.value
            } else if (movement.movement_type==='Expenses') {
              balance.value = balance.value - movement.amount
            }
  
            return {
              ...movement,
              balance: balance.value
            }
          })
          console.log('DataAfter:', movements.value);
        }
      


      pending.value = false;  
    }

    const getMovementsByMonth = async() => {
      pending.value = true;           
      const { data, error } = await supabaseClient
        .from('movements_by_month_view')
        .select(`*`);

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('Data:', data);
        }
      pending.value = false;  
    }

    const insertMovement = async (payload: Movement): Promise<void> => {
      pending.value = true
      const { error } = await supabaseClient
        .from('movements')
        .insert(payload);
      
      if (error) {
        console.error('Error inserting data:', error);
      }
      else {
        alert('Record inserted successfully.');
        router.push('/movements');
      } 
      pending.value = false;
    }

    const updateMovement = async (payload: Movement, id: number): Promise<void> => {
      pending.value = true      
      const { error } = await supabaseClient
        .from('movements')
        .update(payload)
        .eq('id', id);
      
      if (error) {
        console.error('Error updating data:', error);
      }
      else {
        alert('Record updated successfully.');
        router.push('/movements');
      } 
      pending.value = false;
    }

    const submit = (movement: Movement, movementId?: number) => {  
      !movementId ? insertMovement(movement) : updateMovement(movement, movementId)
    }

    return {
      movement,
      movements,
      pending,

      getMovement,
      getMovements,
      getMovementsByMonth,
      submit
    }
}