import { NextResponse } from "next/server";
import { z } from "zod";
import { QuizResponseSchema } from "@/server/api-schemas";
import { askTutor } from "@/server/tutor";
import { getCurrentUser } from "@/server/user-auth";

/**
 * A hint for the second try of a question, or why an answer was wrong once it is shown.
 * The question is looked up from its item id; the client sends only the pupil's answer as shown.
 */
const Body = z.object({
  itemId: z.string().min(1).max(300),
  mode: z.enum(["hint", "why"]),
  level: z.union([z.literal(1), z.literal(2)]).default(1),
  locale: z.enum(["en", "hy", "ru"]),
  response: QuizResponseSchema.nullable(),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const result = await askTutor({ userId: user.id, ...parsed.data });
  if ("text" in result) return NextResponse.json(result);
  const status = { unavailable: 404, unknown: 400, busy: 429, failed: 502 }[result.error];
  return NextResponse.json(result, { status, headers: result.retryAfterMs ? { "retry-after": String(Math.ceil(result.retryAfterMs / 1000)) } : undefined });
}
