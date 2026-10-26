"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

/** Small inline form on the admin course page that creates an empty draft tip. */
export function NewTipForm({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/tips", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ courseId, slug: slug.trim().toLowerCase() }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) router.push(`/admin/tips/${data.tip.id}`);
    else setError(data.error ?? "Could not create tip");
  }

  return (
    <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
      <label className="text-sm font-bold">
        New tip slug
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="e.g. multiply-by-11"
          pattern="[a-z0-9-]+"
          required
          className="mt-1 block h-11 w-56 rounded-[12px] border border-border bg-card px-3 font-mono text-sm"
        />
      </label>
      <Button type="submit" size="sm" disabled={busy}>
        <Plus className="size-4" aria-hidden="true" /> Add tip
      </Button>
      {error && <p role="alert" className="w-full text-sm font-semibold text-destructive">{error}</p>}
    </form>
  );
}
