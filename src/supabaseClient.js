import {createClient} from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_API_URL;
const supabaseApiKey = process.env.REACT_APP_API_KEY;

export const supabase = createClient(supabaseUrl,supabaseApiKey)