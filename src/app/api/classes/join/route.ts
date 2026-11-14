import { NextResponse } from "next/server";
import { z } from "zod";
import { joinClass } from "@/server/classes";
import { LIMITS, take, tooMany } from "@/server/rate-limit";
import { getCurrentUser } from "@/server/user-auth";

/** A pupil joins a class with its code, which shows their progress to the class's teacher. */
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = z.object({ code: z.string().min(4).max(20) }).safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "code" }, { status: 400 });
  const wait = await take(`class-join:${user.id}`, LIMITS.classJoinUser);
  if (wait) return tooMany(wait);
  const res = await joinClass(user.id, parsed.data.code);
  if ("error" in res) return NextResponse.json(res, { status: 400 });
  return NextResponse.json(res);
}
