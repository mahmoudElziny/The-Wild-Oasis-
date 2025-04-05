import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ppmizsdaagwxepjukjgx.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbWl6c2RhYWd3eGVwanVramd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1Mjk2NzgsImV4cCI6MjA1ODEwNTY3OH0.xggFZSKK1_mwLpvRWVFourM4ZNWkZfacAD9o-OUYOus`;
const supabase = createClient(supabaseUrl, supabaseKey, { global: { fetch: fetch.bind(globalThis) } });

export default supabase;