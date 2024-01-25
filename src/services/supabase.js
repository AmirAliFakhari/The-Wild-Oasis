import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rjgwszswfmxjxadzener.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ3dzenN3Zm14anhhZHplbmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMTQxMDYsImV4cCI6MjAxNjY5MDEwNn0.I6zBmlTv1Z1glYrH44dfl7kEW7NnE2dBUQxuCevsr9I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
