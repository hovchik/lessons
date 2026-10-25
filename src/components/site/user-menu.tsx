"use client";

import { LogOut, Trophy, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = { user: { displayName: string } | null; className?: string };

/** Header widget: "Log in" for guests, name → progress page plus log-out for pupils. */
export function UserMenu({ user, className }: Props) {
  const t = useTranslations("nav");
  const router = useRouter();
  if (!user) {
    return (
      <Link href="/login" className={cn("clay-sm clay-press inline-flex h-11 items-center gap-2 px-3 text-sm font-bold", className)}>
        <UserRound className="size-4 text-primary" aria-hidden="true" />
        <span className="hidden sm:inline">{t("login")}</span>
      </Link>
    );
  }
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Link href="/progress" className="clay-sm clay-press inline-flex h-11 max-w-[32vw] items-center gap-2 px-3 text-sm font-bold sm:max-w-48" title={t("progress")}>
        <Trophy className="size-4 shrink-0 text-accent" aria-hidden="true" />
        <span className="truncate">{user.displayName}</span>
      </Link>
      <button
        type="button"
        aria-label={t("logout")}
        title={t("logout")}
        onClick={async () => {
          await fetch("/api/auth/logout", { method: "POST" });
          router.push("/");
          router.refresh();
        }}
        className="hidden size-11 place-items-center rounded-xl text-muted-foreground hover:bg-muted sm:grid"
      >
        <LogOut className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
