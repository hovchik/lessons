"use client";

import { Award, BookOpen, GraduationCap, Home, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLiveUser } from "./live-user";

/**
 * Bottom tab bar shown on phones only (hidden from `sm` up, where the header
 * nav takes over). Thumb-reachable, 56px tall plus the device safe area.
 */
export function MobileNav() {
  const reviewReady = useLiveUser()?.review.ready ?? 0;
  const t = useTranslations("nav");
  const tr = useTranslations("review");
  const pathname = usePathname();
  const items = [
    { href: "/", label: t("home"), icon: Home, active: pathname === "/" },
    { href: "/grade/1", label: t("grades"), icon: GraduationCap, active: pathname.startsWith("/grade/") },
    { href: "/subjects", label: t("subjects"), icon: BookOpen, active: pathname.startsWith("/subjects") },
    { href: "/exams", label: t("exams"), icon: Award, active: pathname.startsWith("/exams") },
    {
      href: "/progress",
      label: t("progress"),
      icon: Trophy,
      active: pathname.startsWith("/progress") || pathname.startsWith("/review") || pathname.startsWith("/login") || pathname.startsWith("/signup"),
      badge: reviewReady,
    },
  ] as const;

  return (
    <nav
      aria-label={t("menu")}
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-card/95 backdrop-blur-md sm:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ href, label, icon: Icon, active, ...rest }) => {
          const badge = "badge" in rest ? rest.badge : 0;
          return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 px-2 py-1.5 text-[11px] font-bold leading-tight transition-[color,transform] duration-200 active:scale-95",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {/* The pill behind the active tab grows in from the icon; the icon gives a small hop. */}
              <span
                className={cn(
                  "relative grid h-7 w-12 place-items-center rounded-full",
                  "before:absolute before:inset-0 before:rounded-full before:bg-primary/10 before:transition-[transform,opacity] before:duration-300 before:ease-[var(--ease-spring)]",
                  active ? "before:scale-100 before:opacity-100" : "before:scale-50 before:opacity-0",
                )}
              >
                <Icon className={cn("relative size-5", active && "fx-tab")} aria-hidden="true" />
                {badge > 0 && (
                  <span className="fx-pop absolute -right-0.5 -top-1 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-black leading-5 text-primary-foreground tabular-nums">
                    {badge > 99 ? "99+" : badge}
                  </span>
                )}
              </span>
              <span className="max-w-full truncate">{label}</span>
              {badge > 0 && <span className="sr-only">{tr("ready", { n: badge })}</span>}
            </Link>
          </li>
          );
        })}
      </ul>
    </nav>
  );
}
