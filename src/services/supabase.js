import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://founzwhvlhphfzmlulua.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdW56d2h2bGhwaGZ6bWx1bHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MjAxMjcsImV4cCI6MjA2Mzk5NjEyN30.SJG-1O6SZ1WPqFbtruw4cSGUY5hE9xcuDC5BQHCrjgs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
