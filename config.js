// config.js

const SUPABASE_URL = "https://sb_publishable_XdL_tfSBfAAfR2tqJxB5rA_CipP1mXJ.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_XdL_tfSBfAAfR2tqJxB5rA_CipP1mXJ";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
