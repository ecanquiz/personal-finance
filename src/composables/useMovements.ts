
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement, MovementForm } from '../types'

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
      const { data, error } = await supabaseClient
        .from(`movements_with_balances_view`)
        .select(`*`)
        .order('id') //, { ascending: false }
        //.eq('month', '11')
        //.range(0,4);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        return movements.value = (data as unknown as Movement[]).reverse();
      }
      pending.value = false;  
    }

    const getMovementsTypeAndCategoryByMonthOfYear = async() => {
      pending.value = true;           
      const { data, error } = await supabaseClient
        .from('movements_type_and_category_by_mont_of_year_view')
        .select(`*`)

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          //console.log('Data:', data);
          return data;
        }
      pending.value = false;  
    }

    const getMovementsTypeAndCategoryByMonthOfYearType = async(movementType = false) => {
      pending.value = true;           
      const { data, error } = await supabaseClient
        .from('movements_type_and_category_by_mont_of_year_view')
        .select(`*`)
        .eq('movement_type', movementType);

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          //console.log('Data:', data);
          return data;
        }
      pending.value = false;  
    }

    const insertMovement = async (payload: MovementForm): Promise<void> => {
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

    const updateMovement = async (payload: MovementForm, id: number): Promise<void> => {
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

    const submit = (movement: MovementForm, movementId?: number) => {    
      !movementId ? insertMovement(movement) : updateMovement(movement, movementId)
    }

    return {
      movement,
      movements,
      pending,

      getMovement,
      getMovements,
      getMovementsTypeAndCategoryByMonthOfYear,
      getMovementsTypeAndCategoryByMonthOfYearType,
      submit
    }
}