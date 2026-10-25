"use client";

import { Eye, Save } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Exam, ExamQuestion } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/site/markdown";
import { cn } from "@/lib/utils";

type Lang = "en" | "hy" | "ru";
const LANGS: Array<[Lang, string]> = [["en", "English"], ["hy", "Հայերեն"], ["ru", "Русский"]];

export function ExamEditor({ exam: initial, siteUrl }: { exam: Exam; siteUrl: string }) {
  const router = useRouter();
  const [exam, setExam] = useState(initial);
  const [lang, setLang] = useState<Lang>("en");
  const [preview, setPreview] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [, startTransition] = useTransition();
  const [questionsJson, setQuestionsJson] = useState(JSON.stringify(initial.questions, null, 2));
  const [questionsError, setQuestionsError] = useState<string | null>(null);

  const setField = <K extends keyof Exam>(key: K, value: Exam[K]) => setExam((e) => ({ ...e, [key]: value }));
  const setI18n = (key: "title" | "description" | "format", value: string) => setField(key, { ...exam[key], [lang]: value });

  async function save(status?: "draft" | "published") {
    let questions: ExamQuestion[];
    try {
      questions = JSON.parse(questionsJson);
      if (!Array.isArray(questions)) throw new Error();
      setQuestionsError(null);
    } catch {
      setQuestionsError("Questions JSON is not valid");
      return;
    }
    setSaving(true);
    setMessage(null);
    const res = await fetch(`/api/admin/exams/${exam.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: exam.title,
        description: exam.description,
        format: exam.format,
        questions,
        durationMin: exam.durationMin,
        passPercent: exam.passPercent,
        scale: exam.scale,
        status: status ?? exam.status,
      }),
    });
    setSaving(false);
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setExam(data.exam);
      setQuestionsJson(JSON.stringify(data.exam.questions, null, 2));
      setMessage({ kind: "ok", text: status === "published" ? "Published." : status === "draft" ? "Unpublished." : "Saved." });
      startTransition(() => router.refresh());
    } else {
      setMessage({ kind: "error", text: data.error ?? "Save failed" });
    }
  }

  const total = exam.questions.reduce((a, q) => a + (q.points ?? 1), 0);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-black sm:text-2xl">{exam.title.en}</h1>
          <p className="text-sm text-muted-foreground">
            <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold", exam.status === "published" ? "bg-emerald-100 text-emerald-900" : "bg-muted")}>{exam.status}</span>{" "}
            · {exam.kind} · {exam.system} · grade {exam.grade} · {exam.questions.length} questions, {total} points · source: {exam.source} · updated {new Date(exam.updatedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <Button variant="secondary" size="sm" onClick={() => save()} disabled={saving}>
            <Save className="size-4" aria-hidden="true" /> Save
          </Button>
          {exam.status === "published" ? (
            <Button variant="ghost" size="sm" onClick={() => save("draft")} disabled={saving}>Unpublish</Button>
          ) : (
            <Button size="sm" onClick={() => save("published")} disabled={saving}>Publish</Button>
          )}
          <a href={siteUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted">
            <Eye className="size-4" aria-hidden="true" /> View
          </a>
        </div>
      </div>

      {message && (
        <p role="status" className={cn("rounded-[var(--radius)] p-3 text-sm font-semibold", message.kind === "ok" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900")}>
          {message.text}
        </p>
      )}

      <div role="tablist" aria-label="Language" className="flex flex-wrap items-center gap-2">
        {LANGS.map(([code, label]) => (
          <button key={code} role="tab" aria-selected={lang === code} onClick={() => setLang(code)} className={cn("clay-sm clay-press h-11 px-3 text-sm font-bold sm:px-4", lang === code && "text-primary ring-2 ring-primary")}>
            {label}
          </button>
        ))}
        <label className="inline-flex h-11 items-center gap-2 text-sm font-bold sm:ml-auto">
          <input type="checkbox" checked={preview} onChange={(e) => setPreview(e.target.checked)} className="size-5" /> Preview
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-bold">Title ({lang})</label>
            <input id="title" lang={lang} value={exam.title[lang]} onChange={(e) => setI18n("title", e.target.value)} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-bold">Description ({lang})</label>
            <textarea id="description" lang={lang} rows={3} value={exam.description[lang]} onChange={(e) => setI18n("description", e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 text-sm" />
          </div>
          <div className={cn("grid gap-4", preview && "xl:grid-cols-2")}>
            <div>
              <label htmlFor="format" className="block text-sm font-bold">About the exam ({lang}), Markdown + KaTeX</label>
              <textarea id="format" lang={lang} rows={preview ? 14 : 18} value={exam.format[lang]} onChange={(e) => setI18n("format", e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 font-mono text-sm leading-relaxed" />
            </div>
            {preview && (
              <div className="clay-sm max-h-[60vh] overflow-auto p-4 sm:p-5">
                <Markdown>{exam.format[lang] || "*Nothing to preview yet.*"}</Markdown>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="questions" className="block text-sm font-bold">Questions (JSON: prompt, options, answer index, explanation, points, topic; each text is {"{en, hy, ru}"})</label>
            <textarea id="questions" rows={18} value={questionsJson} onChange={(e) => setQuestionsJson(e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 font-mono text-xs leading-relaxed" aria-invalid={!!questionsError} />
            {questionsError && <p role="alert" className="mt-1 text-sm font-semibold text-destructive">{questionsError}</p>}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="clay-sm space-y-3 p-4">
            <div>
              <label htmlFor="duration" className="block text-sm font-bold">Duration (min)</label>
              <input id="duration" type="number" min={5} max={300} value={exam.durationMin} onChange={(e) => setField("durationMin", Number(e.target.value))} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
            </div>
            <div>
              <label htmlFor="pass" className="block text-sm font-bold">Pass mark (% of points)</label>
              <input id="pass" type="number" min={1} max={99} value={exam.passPercent} onChange={(e) => setField("passPercent", Number(e.target.value))} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
            </div>
            <div>
              <label htmlFor="scale" className="block text-sm font-bold">Result scale</label>
              <select id="scale" value={exam.scale} onChange={(e) => setField("scale", e.target.value as Exam["scale"])} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3">
                <option value="am20">Armenia · 20-point</option>
                <option value="ru5">Russia · 5-point</option>
                <option value="mixed">Both · 10-point and 5-point</option>
              </select>
            </div>
          </div>
          <div className="clay-sm p-4 text-xs text-muted-foreground">
            <p className="font-bold text-foreground">Tips</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Prompts and options are plain text: use ², √, × instead of LaTeX.</li>
              <li><code>points</code> defaults to 1; harder tasks can be worth 2–4.</li>
              <li><code>answer</code> is the 0-based index of the correct option.</li>
              <li>Draft exams are hidden from the site.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
