import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";

function authCheck(req: NextRequest) {
  const auth = req.headers.get("authorization") ?? "";
  return auth.replace("Bearer ", "") === process.env.ADMIN_PASSWORD;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!authCheck(req)) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const { id } = await params;
  const body = await req.json();

  const { data, error } = await supabaseAdmin
    .from("realisations")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath("/realisations");
  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!authCheck(req)) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const { id } = await params;

  const { error } = await supabaseAdmin.from("realisations").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  revalidatePath("/realisations");
  return NextResponse.json({ ok: true });
}
