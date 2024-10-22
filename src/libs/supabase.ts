import { supabaseUrl, supabaseKey } from '@/config/supabase'
import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export { supabaseClient };