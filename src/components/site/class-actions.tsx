"use client";

import { Check, Copy, Link2, LogOut, Plus, Trash2, UserMinus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

const inputClass = "mt-1 h-12 w-full rounded-[12px] border border-border bg-card px-3 text-base focus-visible:outline-primary";

async function send(url: string, method: "POST" | "DELETE", body?: unknown) {
  const res = await fetch(url, { method, headers: body ? { "content-type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  return { ok: res.ok, status: res.status, data };
}

export function CreateClassForm() {
  const t = useTranslations("classes");
  const router = useRouter();
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-end"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(null);
        const r = await send("/api/classes", "POST", { name });
        setBusy(false);
        if (r.ok) {
          setName("");
          router.push(`/classes/${(r.data.class as { id: string }).id}`);
        } else setError(r.data.error === "limit" ? t("errorLimit") : t("errorGeneric"));
      }}
    >
      <div className="flex-1">
        <label htmlFor="class-name" className="block text-sm font-bold">{t("nameLabel")}</label>
        <input id="class-name" required maxLength={60} value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} className={inputClass} />
      </div>
      <Button type="submit" disabled={busy || !name.trim()}>
        <Plus className="size-5" aria-hidden="true" />
        {t("create")}
      </Button>
      {error && <p role="alert" className="text-sm font-bold text-destructive sm:basis-full">{error}</p>}
    </form>
  );
}

export function JoinClassForm({ initialCode = "" }: { initialCode?: string }) {
  const t = useTranslations("classes");
  const router = useRouter();
  const [code, setCode] = useState(initialCode);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <form
      className="space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setMsg(null);
        const r = await send("/api/classes/join", "POST", { code });
        setBusy(false);
        if (r.ok) {
          setCode("");
          setMsg({ ok: true, text: t("joined", { name: (r.data.class as { name: string }).name }) });
          router.refresh();
        } else
          setMsg({
            ok: false,
            text: r.status === 429 ? t("errorTooMany") : r.data.error === "own" ? t("errorOwn") : r.data.error === "full" ? t("errorFull") : t("errorCode"),
          });
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="class-code" className="block text-sm font-bold">{t("codeLabel")}</label>
          <input
            id="class-code"
            required
            minLength={4}
            maxLength={12}
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className={`${inputClass} font-mono text-lg tracking-[0.3em] uppercase`}
          />
        </div>
        <Button type="submit" disabled={busy || code.trim().length < 4}>{t("join")}</Button>
      </div>
      <p className="text-sm text-muted-foreground">{t("joinNote")}</p>
      {msg && <p role={msg.ok ? "status" : "alert"} className={msg.ok ? "text-sm font-bold text-success" : "text-sm font-bold text-destructive"}>{msg.text}</p>}
    </form>
  );
}

/** A button that asks once more in place ("Sure?") before it acts, instead of a browser dialog. */
function ConfirmButton({ label, confirm, icon: Icon, onConfirm }: { label: string; confirm: string; icon: typeof Trash2; onConfirm: () => Promise<void> }) {
  const [armed, setArmed] = useState(false);
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      disabled={busy}
      onBlur={() => setArmed(false)}
      onClick={async () => {
        if (!armed) return setArmed(true);
        setBusy(true);
        await onConfirm();
        setBusy(false);
        setArmed(false);
      }}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold ${armed ? "bg-red-50 text-destructive" : "text-muted-foreground hover:bg-muted"}`}
    >
      <Icon className="size-4" aria-hidden="true" />
      {armed ? confirm : label}
    </button>
  );
}

export function LeaveClassButton({ classId }: { classId: string }) {
  const t = useTranslations("classes");
  const router = useRouter();
  return <ConfirmButton icon={LogOut} label={t("leave")} confirm={t("leaveSure")} onConfirm={async () => { await send(`/api/classes/${classId}/members/me`, "DELETE"); router.refresh(); }} />;
}

export function RemovePupilButton({ classId, userId }: { classId: string; userId: string }) {
  const t = useTranslations("classes");
  const router = useRouter();
  return <ConfirmButton icon={UserMinus} label={t("remove")} confirm={t("removeSure")} onConfirm={async () => { const r = await send(`/api/classes/${classId}/members/${userId}`, "DELETE"); if (r.ok) router.push(`/classes/${classId}`); }} />;
}

export function DeleteClassButton({ classId }: { classId: string }) {
  const t = useTranslations("classes");
  const router = useRouter();
  return <ConfirmButton icon={Trash2} label={t("delete")} confirm={t("deleteSure")} onConfirm={async () => { const r = await send(`/api/classes/${classId}`, "DELETE"); if (r.ok) router.push("/classes"); }} />;
}

export function CopyButton({ text, label }: { text: string; label: string }) {
  const t = useTranslations("classes");
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          // No clipboard (an old browser or a plain-http page): the text is on screen to copy by hand.
        }
      }}
      className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted"
    >
      {done ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      {done ? t("copied") : label}
    </button>
  );
}

/** The pupil's parent link: make one, copy it, make a new one (the old stops) or turn it off. */
export function ParentLinkCard({ url }: { url: string | null }) {
  const t = useTranslations("classes");
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const make = async () => {
    setBusy(true);
    await send("/api/parent-link", "POST");
    setBusy(false);
    router.refresh();
  };
  if (!url)
    return (
      <Button variant="secondary" onClick={make} disabled={busy}>
        <Link2 className="size-5" aria-hidden="true" />
        {t("parentMake")}
      </Button>
    );
  return (
    <div className="space-y-2">
      <p className="break-all rounded-[12px] bg-muted px-3 py-2 font-mono text-sm">{url}</p>
      <div className="flex flex-wrap gap-1">
        <CopyButton text={url} label={t("copyLink")} />
        <ConfirmButton icon={Link2} label={t("parentNew")} confirm={t("parentNewSure")} onConfirm={make} />
        <ConfirmButton icon={Trash2} label={t("parentOff")} confirm={t("parentOffSure")} onConfirm={async () => { await send("/api/parent-link", "DELETE"); router.refresh(); }} />
      </div>
    </div>
  );
}
