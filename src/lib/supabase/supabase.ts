import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "place your url here";
const supabaseKey = "Place your anon key here";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
