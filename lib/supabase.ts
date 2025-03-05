import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ryulfkqfmhgyepvufivt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dWxma3FmbWhneWVwdnVmaXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjcwMDgsImV4cCI6MjA1Njc0MzAwOH0.C25jMDonBTDau1pWnUAwqUsXoD0dZliSxr5gJxPzsQU'
export const supabase = createClient(supabaseUrl, supabaseKey)