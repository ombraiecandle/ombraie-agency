import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client public (lecture côté serveur)
export const supabase = createClient(url, anon);

// Client admin (lecture + écriture, côté serveur uniquement)
export const supabaseAdmin = createClient(url, service ?? anon);
