"use client";

import { Eye, Loader2, Save, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { TIP_CATEGORIES, type Tip, type TipCategory } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/site/markdown";
import { cn } from "@/lib/utils";
import { CATEGORY_LABELS } from "@/lib/tips";

type Lang = "en" | "hy" | "ru";
const LANGS: Array<[Lang, string]> = [["en", "English"], ["hy", "Հայերեն"], ["ru", "Русский"]];

export function TipEditor({ tip: initial, siteUrl, courseAdminUrl }: { tip: Tip; siteUrl: string; courseAdminUrl: string }) {
  const router = useRouter();
  const [tip, setTip] = useState(initial);
  const [lang, setLang] = useState<Lang>("en");
  const [preview, setPreview] = useState(true);
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [, startTransition] = useTransition();

  const setField = <K extends keyof Tip>(key: K, value: Tip[K]) => setTip((x) => ({ ...x, [key]: value }));
  const setI18n = (key: "title" | "body", value: string) => setField(key, { ...tip[key], [lang]: value });

  async function save(status?: "draft" | "published") {
    setBusy(true);
    setMessage(null);
    const res = await fetch(`/api/admin/tips/${tip.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: tip.title, body: tip.body, category: tip.category, position: tip.position, status: status ?? tip.status }),
    });
    setBusy(false);
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setTip(data.tip);
      setMessage({ kind: "ok", text: status === "published" ? "Published." : status === "draft" ? "Unpublished." : "Saved." });
      startTransition(() => router.refresh());
    } else {
      setMessage({ kind: "error", text: data.error ?? "Save failed" });
    }
  }

  async function remove() {
    if (!confirm("Remove this tip from the site in all three languages? You can restore it later from this page.")) return;
    setBusy(true);
    const res = await fetch(`/api/admin/tips/${tip.id}`, { method: "DELETE" });
    setBusy(false);
    if (res.ok) {
      router.push(courseAdminUrl);
      router.refresh();
    } else {
      setMessage({ kind: "error", text: "Delete failed" });
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-black sm:text-2xl">{tip.title.en || tip.slug}</h1>
          <p className="text-sm text-muted-foreground">
            <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold", tip.status === "published" ? "bg-emerald-100 text-emerald-900" : tip.status === "deleted" ? "bg-red-100 text-red-900" : "bg-muted")}>{tip.status}</span>{" "}
            · source: {tip.source} · updated {new Date(tip.updatedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto">
          <Button variant="secondary" size="sm" onClick={() => save()} disabled={busy}>
            {busy ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Save className="size-4" aria-hidden="true" />} Save
          </Button>
          {tip.status === "published" ? (
            <Button variant="ghost" size="sm" onClick={() => save("draft")} disabled={busy}>Unpublish</Button>
          ) : (
            <Button size="sm" onClick={() => save("published")} disabled={busy}>{tip.status === "deleted" ? "Restore and publish" : "Publish"}</Button>
          )}
          {tip.status !== "deleted" && (
            <Button variant="ghost" size="sm" onClick={remove} disabled={busy} className="text-destructive">
              <Trash2 className="size-4" aria-hidden="true" /> Delete
            </Button>
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
          <button
            key={code}
            role="tab"
            aria-selected={lang === code}
            onClick={() => setLang(code)}
            className={cn("clay-sm clay-press h-11 px-3 text-sm font-bold sm:px-4", lang === code && "text-primary ring-2 ring-primary")}
          >
            {label}
            {!tip.body[code]?.trim() && <span className="ml-2 text-xs font-semibold text-muted-foreground">empty</span>}
          </button>
        ))}
        <label className="inline-flex h-11 items-center gap-2 text-sm font-bold sm:ml-auto">
          <input type="checkbox" checked={preview} onChange={(e) => setPreview(e.target.checked)} className="size-5" /> Preview
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <div>
            <label htmlFor="tip-title" className="block text-sm font-bold">Title ({lang})</label>
            <input id="tip-title" lang={lang} value={tip.title[lang]} onChange={(e) => setI18n("title", e.target.value)} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
          </div>
          <div className={cn("grid gap-4", preview && "xl:grid-cols-2")}>
            <div>
              <label htmlFor="tip-body" className="block text-sm font-bold">Body ({lang}), Markdown + KaTeX</label>
              <textarea id="tip-body" lang={lang} rows={14} value={tip.body[lang]} onChange={(e) => setI18n("body", e.target.value)} className="mt-1 w-full rounded-[12px] border border-border bg-card p-3 font-mono text-sm leading-relaxed" />
            </div>
            {preview && (
              <div className="clay-sm max-h-[60vh] overflow-auto p-4 sm:p-5">
                <Markdown className="prose-lesson prose-tip">{tip.body[lang] || "*Nothing to preview yet.*"}</Markdown>
              </div>
            )}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="clay-sm p-4">
            <label htmlFor="tip-category" className="block text-sm font-bold">Category</label>
            <select id="tip-category" value={tip.category} onChange={(e) => setField("category", e.target.value as TipCategory)} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3 text-sm">
              {TIP_CATEGORIES.map((c) => <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>)}
            </select>
          </div>
          <div className="clay-sm p-4">
            <label htmlFor="tip-position" className="block text-sm font-bold">Order</label>
            <input id="tip-position" type="number" min={1} value={tip.position} onChange={(e) => setField("position", Number(e.target.value))} className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3" />
          </div>
          <div className="clay-sm p-4 text-xs text-muted-foreground">
            <p className="font-bold text-foreground">How to write a tip</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>One idea, one worked example, under 150 words.</li>
              <li>Math: <code>$x^2$</code> inline, <code>$$…$$</code> on its own line.</li>
              <li>Draft and deleted tips are hidden from the site. A deleted tip can be restored here and is never brought back by reseeding.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
