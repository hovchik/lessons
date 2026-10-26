"use client";

import { LogIn, UserRoundPlus } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { GRADES } from "@/lib/utils";

const ERROR_KEYS = ["wrong_credentials", "taken", "bad_username", "password_short", "name_required", "disabled", "not_configured", "generic"] as const;
const USERNAME_RE = /^[a-z0-9_.-]{3,24}$/;
const MIN_PASSWORD = 4;
type ErrorKey = (typeof ERROR_KEYS)[number];

const inputClass = "mt-1 h-12 w-full rounded-[12px] border border-border bg-card px-3 text-base focus-visible:outline-primary";

/** Login and sign-up form for pupils. Posts JSON to /api/auth/* and then goes to `next` or the progress page. */
export function AuthForm({ mode, configured }: { mode: "login" | "signup"; configured: boolean }) {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [grade, setGrade] = useState<string>("");
  const [error, setError] = useState<ErrorKey | null>(null);
  const [busy, setBusy] = useState(false);
  const isSignup = mode === "signup";
  const Icon = isSignup ? UserRoundPlus : LogIn;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (isSignup) {
      // Check here first so the pupil sees exactly what to fix.
      if (!displayName.trim()) return setError("name_required");
      if (!USERNAME_RE.test(username.trim().toLowerCase())) return setError("bad_username");
      if (password.length < MIN_PASSWORD) return setError("password_short");
    }
    setBusy(true);
    try {
      const body = isSignup
        ? { username, password, displayName, grade: grade ? Number(grade) : null, locale }
        : { username, password };
      const res = await fetch(`/api/auth/${mode}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      if (res.ok) {
        // Only follow same-site relative paths.
        const target = next && next.startsWith("/") && !next.startsWith("//") ? next : "/progress";
        router.push(target);
        router.refresh();
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      const key = data.error && (ERROR_KEYS as readonly string[]).includes(data.error) ? (data.error as ErrorKey) : "generic";
      setError(key);
    } catch {
      setError("generic");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="clay mx-auto w-full max-w-md space-y-5 p-6 sm:p-8" onSubmit={submit} noValidate>
      <div className="flex items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-primary text-primary-foreground shadow-clay-sm">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-2xl font-black">{t(isSignup ? "signupTitle" : "loginTitle")}</h1>
          <p className="text-sm text-muted-foreground">{t(isSignup ? "signupText" : "loginText")}</p>
        </div>
      </div>

      {!configured && <p className="rounded-[var(--radius)] bg-amber-50 p-3 text-sm font-semibold text-amber-900">{t("errors.not_configured")}</p>}

      {isSignup && (
        <div>
          <label htmlFor="displayName" className="block text-sm font-bold">{t("displayName")}</label>
          <input id="displayName" required maxLength={60} autoComplete="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className={inputClass} />
        </div>
      )}
      <div>
        <label htmlFor="username" className="block text-sm font-bold">{t("username")}</label>
        <input
          id="username"
          required
          autoComplete="username"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClass}
          aria-describedby={isSignup ? "username-hint" : undefined}
        />
        {isSignup && <p id="username-hint" className="mt-1 text-xs text-muted-foreground">{t("usernameHint")}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-bold">{t("password")}</label>
        <input
          id="password"
          type="password"
          required
          minLength={isSignup ? MIN_PASSWORD : 1}
          autoComplete={isSignup ? "new-password" : "current-password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
          aria-describedby={isSignup ? "password-hint" : undefined}
        />
        {isSignup && <p id="password-hint" className="mt-1 text-xs text-muted-foreground">{t("passwordHint")}</p>}
      </div>
      {isSignup && (
        <div>
          <label htmlFor="grade" className="block text-sm font-bold">{t("grade")}</label>
          <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} className={inputClass}>
            <option value="">{t("gradeOptional")}</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      )}

      {error && <p role="alert" className="text-sm font-semibold text-destructive">{t(`errors.${error}`)}</p>}

      <Button type="submit" className="w-full" size="lg" disabled={busy || !configured}>
        {busy ? t("busy") : t(isSignup ? "submitSignup" : "submitLogin")}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {t(isSignup ? "haveAccount" : "noAccount")}{" "}
        <Link href={isSignup ? "/login" : "/signup"} className="font-bold text-primary hover:underline">
          {t(isSignup ? "submitLogin" : "submitSignup")}
        </Link>
      </p>
    </form>
  );
}
