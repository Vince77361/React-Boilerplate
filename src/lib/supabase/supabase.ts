import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzdpilddobrdgxrwlyzk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6ZHBpbGRkb2JyZGd4cndseXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0ODY2MDcsImV4cCI6MjA0MzA2MjYwN30.W5JkpG_UjBfRqd08QCIJdTpwR3Rpl5-MiA6fhj8vi0M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
