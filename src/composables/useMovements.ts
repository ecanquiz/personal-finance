
import { ref } from 'vue'
import { supabaseClient } from '../libs/supabase'
import type { Ref } from 'vue'
import type { Movement, Category } from '../types'

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

    const getMovementsByMonth = async() => {
      //https://vivasart.com/en/blog/grouping-data-in-supabase-a-beginners-guide-with-examples
      /**
       *  CREATE VIEW movements_by_month_view AS
            SELECT
            type,
            SUM(amount), TO_CHAR(DATE(date), 'MM') AS mm,
            TO_CHAR(DATE(date), 'Month') AS month
            FROM movements 
            GROUP by type, month, mm 
            ORDER BY mm;

          select * from movements_by_month_view
       */
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

    return {
      movement,
      movements,
      pending,

      getMovement,
      getMovements,
      getMovementsByMonth
    }
}