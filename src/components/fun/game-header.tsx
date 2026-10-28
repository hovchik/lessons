import type { LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

/** The heading card of a game page, with a link back to the play hub. */
export function GameHeader({ icon: Icon, color, title, intro, back }: { icon: LucideIcon; color: string; title: string; intro: string; back: string }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted-foreground">
        <Link href="/play" className="inline-flex min-h-11 items-center hover:text-primary">{back}</Link>
      </nav>
      <header className={`clay relative overflow-hidden p-5 sm:p-8 ${color}`}>
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-50 blur-3xl" style={{ background: "var(--s-soft)" }} aria-hidden="true" />
        <div className="relative flex items-start gap-4">
          <span className="fx-pop grid size-14 shrink-0 place-items-center rounded-[20px] text-white shadow-clay-sm" style={{ background: "var(--s)" }}>
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-black text-balance sm:text-3xl">{title}</h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">{intro}</p>
          </div>
        </div>
      </header>
    </>
  );
}
