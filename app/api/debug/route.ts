import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    server_NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL || "undefined",
    server_NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env
      .NEXT_PUBLIC_SUPABASE_ANON_KEY
      ? "EXISTS"
      : "undefined",
    server_SUPABASE_URL: process.env.SUPABASE_URL || "undefined",
    server_SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
      ? "EXISTS"
      : "undefined",
  });
}
