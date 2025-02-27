import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'hhttps://ykypeavcxdblwsrisrfy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlreXBlYXZjeGRibHdzcmlzcmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MjE2MDYsImV4cCI6MjA1NTE5NzYwNn0.KjQloPlOINl7s5UTEST9wGQvyH07HsnbggU-7Ku0i94'
export const supabase = createClient(supabaseUrl, supabaseKey)