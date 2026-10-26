"use client";

import { BookOpen, GraduationCap, Home, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Bottom tab bar shown on phones only (hidden from `sm` up, where the header
 * nav takes over). Thumb-reachable, 56px tall plus the device safe area.
 */
export function MobileNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const items = [
    { href: "/", label: t("home"), icon: Home, active: pathname === "/" },
    { href: "/grade/1", label: t("grades"), icon: GraduationCap, active: pathname.startsWith("/grade/") },
    { href: "/subjects", label: t("subjects"), icon: BookOpen, active: pathname.startsWith("/subjects") },
    { href: "/progress", label: t("progress"), icon: Trophy, active: pathname.startsWith("/progress") || pathname.startsWith("/login") || pathname.startsWith("/signup") },
  ] as const;

  return (
    <nav
      aria-label={t("menu")}
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-card/95 backdrop-blur-md sm:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ href, label, icon: Icon, active }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 px-2 py-1.5 text-[11px] font-bold leading-tight",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              <span className={cn("grid h-7 w-12 place-items-center rounded-full transition-colors", active && "bg-primary/10")}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="max-w-full truncate">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
