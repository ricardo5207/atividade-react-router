import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const TABELA = import.meta.env.VITE_SUPABASE_TABLE || "nome_da_tabela";

export const configurado = Boolean(url && anonKey);

// Usa apenas a chave pública (anon). Nunca use a service_role no front-end.
export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  anonKey || "placeholder"
);
