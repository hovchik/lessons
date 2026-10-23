"use client";

import { Eye, Loader2, Save, Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Lesson, QuizQuestion } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/site/markdown";
import { cn } from "@/lib/utils";

type Lang = "en" | "hy" | "ru";
const LANGS: Array<[Lang, string]> = [["en", "English"], ["hy", "Հայերեն"], ["ru", "Русский"]];

export function LessonEditor({ lesson: initial, siteUrl, claudeReady }: { lesson: Lesson; siteUrl: string; claudeReady: boolean }) {
  const router = useRouter();
  const [lesson, setLesson] = useState(initial);
  const [lang, setLang] = useState<Lang>("en");
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [, startTransition] = useTransition();
  const [quizJson, setQuizJson] = useState(JSON.stringify(initial.quiz, null, 2));
  const [quizError, setQuizError] = useState<string | null>(null);

  const setField = <K extends keyof Lesson>(key: K, value: Lesson[K]) => setLesson((l) => ({ ...l, [key]: value }));
  const setI18n = (key: "title" | "content", value: string) => setField(key, { ...lesson[key], [lang]: value });

  async function save(status?: "draft" | "published") {
    let quiz: QuizQuestion[];
    try {
      quiz = JSON.parse(quizJson);
      setQuizError(null);
    } catch {
      setQuizError("Quiz JSON is not valid");
      return;
    }
    setSaving(true);
    setMessage(null);
    const res = await fetch(`/api/admin/lessons/${lesson.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: lesson.title,
        objectives: lesson.objectives,
        content: lesson.content,
        quiz,
        durationMin: lesson.durationMin,
        status: status ?? lesson.status,
      }),
    });
    setSaving(false);
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setLesson(data.lesson);
      setMessage({ kind: "ok", text: status === "published" ? "Published." : status === "draft" ? "Unpublished." : "Saved." });
      startTransition(() => router.refresh());
    } else {
      setMessage({ kind: "error", text: data.error ?? "Save failed" });
    }
  }

  async function generate() {
    if (!confirm("Ask Claude to write this lesson in all three languages? Existing text for this lesson will be replaced.")) return;
    setGenerating(true);
    setMessage(null);
    const res = await fetch(`/api/admin/lessons/${lesson.id}/generate`, { method: "POST" });
    const data = await res.json().catch(() => ({}));
    setGenerating(false);
    if (res.ok) {
      setLesson(data.lesson);
      setQuizJson(JSON.stringify(data.lesson.quiz, null, 2));
      setMessage({ kind: "ok", text: "Generated. Review the text, then publish." });
    } else {
      setMessage({ kind: "error", text: data.error ?? "Generation failed" });
    }
  }

  const objectives = lesson.objectives[lang].join("\n");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black">{lesson.title.en}</h1>
          <p className="text-sm text-muted-foreground">
            <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold", lesson.status === "published" ? "bg-emerald-100 text-emerald-900" : "bg-muted")}>{lesson.status}</span>{" "}
            · source: {lesson.source} · updated {new Date(lesson.updatedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="accent" size="sm" onClick={generate} disabled={!claudeReady || generating || saving} title={claudeReady ? "" : "Set ANTHROPIC_API_KEY to enable"}>
            {generating ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Sparkles className="size-4" aria-hidden="true" />}
            {generating ? "Generating… (1–3 min)" : "Generate with Claude"}
          </Button>
          <Button variant="secondary" size="sm" onClick={() => save()} disabled={saving || generating}>
            <Save className="size-4" aria-hidden="true" /> Save
          </Button>
          {lesson.status === "published" ? (
            <Button variant="ghost" size="sm" onClick={() => save("draft")} disabled={saving || generating}>Unpublish</Button>
          ) : (
            <Button size="sm" onClick={() => save("published")} disabled={saving || generating}>Publish</Button>
          )}
          <a href={siteUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-1 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted">
            <Eye className="size-4" aria-hidden="true" /> View
          </a>
        </div>
      </div>

      {message && (
        <p role="status" className={cn("rounded-[var(--radius)] p-3 text-sm font-semibold", message.kind === "ok" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900")}>
          {message.text}
        </p>
      )}

      <div role="tablist" aria-label="Language" className="flex gap-2">
        {LANGS.map(([code, label]) => (
          <button
            key={code}
            role="tab"
            aria-selected={lang === code}
            onClick={() => setLang(code)}
            className={cn("clay-sm clay-press h-10 px-4 text-sm font-bold", lang === code && "text-primary ring-2 ring-primary")}
          >
            {label}
            {!lesson.content[code]?.trim() && <span className="ml-2 text-xs font-semibold text-muted-foreground">empty</span>}
          </button>
        ))}
        <label className="ml-auto inline-flex h-10 items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={preview} onChange={(e) => setPreview(e.target.checked)} className="size-4" /> Preview
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-bold">Title ({lang})</label>
            <input id="title" lang={lang} value={lesson.title[lang]} onChange={(e) => setI18n("title", e.target.value)} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
          </div>
          <div>
            <label htmlFor="objectives" className="block text-sm font-bold">Objectives ({lang}), one per line</label>
            <textarea id="objectives" lang={lang} rows={3} value={objectives} onChange={(e) => setField("objectives", { ...lesson.objectives, [lang]: e.target.value.split("\n").filter(Boolean) })} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 text-sm" />
          </div>
          <div className={cn("grid gap-4", preview && "xl:grid-cols-2")}>
            <div>
              <label htmlFor="content" className="block text-sm font-bold">Content ({lang}), Markdown + KaTeX</label>
              <textarea id="content" lang={lang} rows={28} value={lesson.content[lang]} onChange={(e) => setI18n("content", e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 font-mono text-sm leading-relaxed" />
            </div>
            {preview && (
              <div className="clay-sm max-h-[70vh] overflow-auto p-5">
                <Markdown>{lesson.content[lang] || "*Nothing to preview yet.*"}</Markdown>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="quiz" className="block text-sm font-bold">Quiz (JSON: prompt, options, answer index, explanation; each text is {"{en, hy, ru}"})</label>
            <textarea id="quiz" rows={10} value={quizJson} onChange={(e) => setQuizJson(e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 font-mono text-xs leading-relaxed" aria-invalid={!!quizError} />
            {quizError && <p role="alert" className="mt-1 text-sm font-semibold text-destructive">{quizError}</p>}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="clay-sm p-4">
            <label htmlFor="duration" className="block text-sm font-bold">Duration (min)</label>
            <input id="duration" type="number" min={5} max={180} value={lesson.durationMin} onChange={(e) => setField("durationMin", Number(e.target.value))} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
          </div>
          <div className="clay-sm p-4 text-xs text-muted-foreground">
            <p className="font-bold text-foreground">Tips</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Use <code>##</code> headings, tables and lists.</li>
              <li>Math: <code>$x^2$</code> inline, <code>$$…$$</code> on its own line.</li>
              <li>Draft lessons show “Coming soon” on the site.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
