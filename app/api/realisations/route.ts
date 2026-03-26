import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function authCheck(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.replace("Bearer ", "");
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("realisations")
    .select("*")
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  const body = await req.json();
  const { category, data } = body;

  if (!category || !data) {
    return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
  }

  // Get current max order_index for this category
  const { data: existing } = await supabaseAdmin
    .from("realisations")
    .select("order_index")
    .eq("category", category)
    .order("order_index", { ascending: false })
    .limit(1);

  const order_index = existing && existing.length > 0 ? existing[0].order_index + 1 : 0;

  const { data: inserted, error } = await supabaseAdmin
    .from("realisations")
    .insert({ category, data, order_index, visible: true })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(inserted, { status: 201 });
}
