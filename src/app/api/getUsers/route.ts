import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Server-side ONLY
    { auth: { persistSession: false } }
);

export async function GET() {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.listUsers();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ users: data.users });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
