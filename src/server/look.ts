import { eq } from "drizzle-orm";
import { lookBack, type LookQuestion } from "@/lib/lesson-look";
import { parseItemId } from "@/lib/memory";
import { pick, type Locale } from "@/lib/utils";
import { cachedContent } from "./content-cache";
import { getDb, schema } from "./db/client";
import type { I18nText, QuizQuestion } from "./db/schema";
import { renderMarkdownPieces, type Piece } from "./markdown-html";

/** The lesson passage behind a quiz question, ready to show: rendered HTML plus text to find it on the page. */
export type Look = { html: string; find: string[] };

const LOCALES: Locale[] = ["en", "hy", "ru"];

/** The words a question and its right answer are made of, in one language. */
export function lookQuestion(q: QuizQuestion, locale: string): LookQuestion {
  const f = (t: I18nText | undefined) => (t ? pick(t, locale) : "");
  if (!("kind" in q) || !q.kind) return { prompt: f(q.prompt), right: [f(q.options[q.answer])], wrong: q.options.filter((_, i) => i !== q.answer).map(f) };
  switch (q.kind) {
    case "number":
      return { prompt: f(q.prompt), right: [String(q.answer), f(q.unit)], wrong: [] };
    case "gap":
      return { prompt: f(q.prompt), right: [f(q.text), ...q.gaps.map(f)], wrong: [] };
    case "order":
      return { prompt: f(q.prompt), right: q.items.map(f), wrong: [] };
    case "match":
      return { prompt: f(q.prompt), right: q.pairs.flat().map(f), wrong: [] };
    default:
      return { prompt: f(q.prompt), right: [], wrong: [] };
  }
}

/** Renders a short Markdown passage to one HTML string (no interactive blocks can be in it). */
export function passageHtml(markdown: string, locale: string): string {
  const out = (p: Piece): string => {
    if (typeof p === "string") return p.replace(/[&<>]/g, (c) => (c === "&" ? "&amp;" : c === "<" ? "&lt;" : "&gt;"));
    if ("block" in p) return "";
    const cls = typeof p.props.className === "string" ? ` class="${p.props.className}"` : "";
    if ("children" in p) return `<${p.tag}${cls}>${p.children.map(out).join("")}</${p.tag}>`;
    return `<${p.tag}${cls}>${p.html ?? ""}</${p.tag}>`;
  };
  return renderMarkdownPieces(markdown, locale).map(out).join("");
}

/** The look-back passage of every quiz question of a lesson, per language. Cached with the content. */
export function lessonLooks(lessonId: string): Promise<Record<Locale, (Look | null)[]>> {
  return cachedContent("looks", lessonId, 600, async () => {
    const db = await getDb();
    const row = await db.select({ content: schema.lessons.content, quiz: schema.lessons.quiz }).from(schema.lessons).where(eq(schema.lessons.id, lessonId)).get();
    const out = { en: [], hy: [], ru: [] } as Record<Locale, (Look | null)[]>;
    if (!row) return out;
    for (const l of LOCALES) {
      // A lesson written only in Armenian shows its Armenian text, so its passages come from there too.
      const own = row.content?.[l]?.trim() ? l : "hy";
      const body = row.content?.[own] ?? "";
      out[l] = lookBack(body, row.quiz.map((q) => lookQuestion(q, own))).map((p) => (p ? { html: passageHtml(p.markdown, own), find: p.find } : null));
    }
    return out;
  });
}

/** Looks for a set of quiz item ids of one or more lessons, in one language. */
export async function looksFor(items: { lessonId: string; index: number }[], locale: string): Promise<(Look | null)[]> {
  const l = (LOCALES.includes(locale as Locale) ? locale : "en") as Locale;
  const ids = [...new Set(items.map((i) => i.lessonId).filter(Boolean))];
  const all = new Map(await Promise.all(ids.map(async (id) => [id, await lessonLooks(id)] as const)));
  return items.map((i) => all.get(i.lessonId)?.[l][i.index] ?? null);
}

/** The passage behind one quiz item in every language (for answers checked by an API, where the page's language isn't known). */
export async function lookAllLanguages(itemId: string): Promise<Record<Locale, Look | null> | null> {
  const id = parseItemId(itemId);
  if (!id || id.source !== "quiz") return null;
  const all = await lessonLooks(id.refId);
  const out = { en: all.en[id.index] ?? null, hy: all.hy[id.index] ?? null, ru: all.ru[id.index] ?? null };
  return out.en || out.hy || out.ru ? out : null;
}

/** Adds the look-back passage, in one language, to review items that come from a lesson quiz. */
export async function withLooks<T extends { itemId: string }>(items: T[], locale: string): Promise<(T & { look: Look | null })[]> {
  const refs = items.map((i) => parseItemId(i.itemId));
  const looks = await looksFor(
    refs.map((r) => (r?.source === "quiz" ? { lessonId: r.refId, index: r.index } : { lessonId: "", index: -1 })),
    locale,
  );
  return items.map((it, i) => ({ ...it, look: refs[i]?.source === "quiz" ? looks[i] : null }));
}
