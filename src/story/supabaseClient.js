// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://clqponroxhmkvijerrih.supabase.co'; // Reemplazá con tu URL real
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscXBvbnJveGhta3ZpamVycmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4OTAxOTEsImV4cCI6MjA2NDQ2NjE5MX0.dsqjOV9mZSQCmjzeJWCnlKYW2l7QQpZurp_yOPziSQE'; // Reemplazá con tu anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
