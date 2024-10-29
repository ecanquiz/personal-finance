import { ref } from 'vue'
import type { Movement, Props } from '@/types'

export default (props: Props) => {
  const form = ref(props.movement as Movement) 

  return { form }
}
