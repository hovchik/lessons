"use client";

import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  return (
    <form
      className="clay w-full max-w-sm space-y-5 p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(null);
        const res = await fetch("/api/admin/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ password }) });
        setBusy(false);
        if (res.ok) {
          router.push("/admin");
          router.refresh();
        } else {
          setError((await res.json().catch(() => ({}))).error ?? "Login failed");
        }
      }}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-[14px] bg-primary text-primary-foreground">
          <Lock className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-xl font-extrabold">Admin panel</h1>
          <p className="text-sm text-muted-foreground">Sign in to edit courses and lessons.</p>
        </div>
      </div>
      {!configured && (
        <p className="rounded-[var(--radius)] bg-amber-50 p-3 text-sm text-amber-900">
          Set <code>ADMIN_PASSWORD</code> (not the example one) and <code>ADMIN_SESSION_SECRET</code> in <code>.env.local</code> to enable the admin panel.
        </p>
      )}
      <div>
        <label htmlFor="password" className="block text-sm font-bold">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 h-11 w-full rounded-[12px] border border-border bg-card px-3 focus-visible:outline-primary"
          aria-describedby={error ? "login-error" : undefined}
          aria-invalid={!!error}
        />
        {error && <p id="login-error" role="alert" className="mt-2 text-sm font-semibold text-destructive">{error}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={busy || !configured}>{busy ? "Signing in…" : "Sign in"}</Button>
    </form>
  );
}
