"use client";

import { KeyRound, LogOut, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { leaveOffline } from "@/components/site/offline-support";
import { useRouter } from "@/i18n/navigation";
import { notifyChanged } from "@/lib/live";

const inputClass = "mt-1 h-12 w-full rounded-[12px] border border-border bg-card px-3 text-base focus-visible:outline-primary";
const ERRORS = ["wrong_current", "too_many", "password_short", "password_common"] as const;
type Action = "password" | "signout" | "delete";

async function post(body: { action: Action; current: string; password?: string }) {
  try {
    const res = await fetch("/api/account", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    return res.ok ? null : ERRORS.find((e) => e === data.error) ?? "generic";
  } catch {
    return "generic";
  }
}

function PasswordInput({ label, value, onChange, autoComplete, hint }: { label: string; value: string; onChange: (v: string) => void; autoComplete: string; hint?: string }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold">{label}</label>
      <input id={id} type="password" required maxLength={200} autoComplete={autoComplete} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} aria-describedby={hint ? `${id}-hint` : undefined} />
      {hint && <p id={`${id}-hint`} className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Message({ error, done }: { error: string | null; done: string | null }) {
  const t = useTranslations("account");
  if (error) return <p role="alert" className="text-sm font-bold text-destructive">{t(`errors.${error}`)}</p>;
  if (done) return <p role="status" className="text-sm font-bold text-success">{done}</p>;
  return null;
}

/** A new password; other devices are signed out, this one stays signed in. */
export function ChangePasswordForm() {
  const t = useTranslations("account");
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [again, setAgain] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setDone(null);
        if (password !== again) return setError("mismatch");
        setBusy(true);
        const err = await post({ action: "password", current, password });
        setBusy(false);
        setError(err);
        if (!err) {
          setCurrent("");
          setPassword("");
          setAgain("");
          setDone(t("passwordDone"));
        }
      }}
    >
      <PasswordInput label={t("current")} value={current} onChange={setCurrent} autoComplete="current-password" />
      <PasswordInput label={t("newPassword")} value={password} onChange={setPassword} autoComplete="new-password" hint={t("newPasswordHint")} />
      <PasswordInput label={t("again")} value={again} onChange={setAgain} autoComplete="new-password" />
      <Message error={error} done={done} />
      <Button type="submit" disabled={busy || !current || !password || !again}>
        <KeyRound className="size-5" aria-hidden="true" />
        {t("passwordSubmit")}
      </Button>
    </form>
  );
}

/** Signs out every other phone and computer, e.g. after logging in on a school computer and forgetting to log out. */
export function SignOutEverywhereForm() {
  const t = useTranslations("account");
  const [current, setCurrent] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setDone(null);
        setBusy(true);
        const err = await post({ action: "signout", current });
        setBusy(false);
        setError(err);
        if (!err) {
          setCurrent("");
          setDone(t("signoutDone"));
        }
      }}
    >
      <PasswordInput label={t("current")} value={current} onChange={setCurrent} autoComplete="current-password" />
      <Message error={error} done={done} />
      <Button type="submit" variant="secondary" disabled={busy || !current}>
        <LogOut className="size-5" aria-hidden="true" />
        {t("signoutSubmit")}
      </Button>
    </form>
  );
}

/** Deletes the account and all its progress; asks for the password and a second press. */
export function DeleteAccountForm() {
  const t = useTranslations("account");
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [armed, setArmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!armed) return setArmed(true);
        setBusy(true);
        const err = await post({ action: "delete", current });
        setError(err);
        setArmed(false);
        if (err) return setBusy(false);
        await leaveOffline();
        router.push("/");
        notifyChanged();
      }}
    >
      <PasswordInput label={t("current")} value={current} onChange={(v) => { setCurrent(v); setArmed(false); }} autoComplete="current-password" />
      <Message error={error} done={null} />
      <Button type="submit" variant={armed ? "danger" : "secondary"} disabled={busy || !current}>
        <Trash2 className="size-5" aria-hidden="true" />
        {armed ? t("deleteSure") : t("deleteSubmit")}
      </Button>
    </form>
  );
}
