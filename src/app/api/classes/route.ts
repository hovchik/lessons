import { NextResponse } from "next/server";
import { z } from "zod";
import { createClass } from "@/server/classes";
import { getCurrentUser } from "@/server/user-auth";

/** Opens a class; any account can, and becomes its teacher. */
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = z.object({ name: z.string().min(1).max(100) }).safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "name" }, { status: 400 });
  const res = await createClass(user.id, parsed.data.name);
  if ("error" in res) return NextResponse.json(res, { status: 400 });
  return NextResponse.json(res);
}
