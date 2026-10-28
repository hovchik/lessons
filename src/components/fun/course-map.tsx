import { Flag, MapPin, Star, Trophy } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { MasteryLevel } from "@/lib/mastery";
import { cn } from "@/lib/utils";

type Stop = { position: number; title: string; level: MasteryLevel | null };

const W = 600;
const H = 170;

/** Where each stop sits: a winding path from left to right, up and down in turn. */
function layout(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    x: n === 1 ? W / 2 : 70 + (i * (W - 140)) / (n - 1),
    y: i % 2 === 0 ? 112 : 58,
  }));
}

/** A smooth path through the stops (a cubic between each pair). */
function pathThrough(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x - 50} ${pts[0].y + 22} Q ${pts[0].x - 24} ${pts[0].y + 6} ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const mx = (a.x + b.x) / 2;
    d += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
  }
  const z = pts[pts.length - 1];
  return `${d} Q ${z.x + 24} ${z.y - 6} ${z.x + 50} ${z.y - 22}`;
}

const STOP: Record<MasteryLevel, string> = {
  none: "bg-card text-muted-foreground ring-2 ring-border",
  familiar: "text-[var(--s-text)] ring-2 ring-[var(--s)]",
  proficient: "text-white",
  mastered: "bg-amber-400 text-amber-950 ring-3 ring-amber-200",
};

/**
 * The course as a journey: one stop per unit on a winding path, coloured by
 * the pupil's mastery, with a pin on the next unit to work on. Each stop
 * jumps to its unit below. Guests see the path without colours or pin.
 */
export async function CourseMap({ stops, signedIn }: { stops: Stop[]; signedIn: boolean }) {
  const t = await getTranslations("map");
  const tm = await getTranslations("mastery");
  const pts = layout(stops.length);
  const current = signedIn ? stops.findIndex((s) => s.level !== "proficient" && s.level !== "mastered") : -1;
  const doneCount = stops.filter((s) => s.level === "proficient" || s.level === "mastered").length;
  const done = (i: number) => stops[i].level === "proficient" || stops[i].level === "mastered";

  return (
    <section aria-labelledby="map-title" className="clay overflow-hidden p-4 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="map-title" className="text-lg font-extrabold sm:text-xl">{t("title")}</h2>
        {signedIn && <p className="text-sm font-bold text-muted-foreground">{t("progress", { n: doneCount, total: stops.length })}</p>}
      </div>
      {/* On a phone the map is taller than its drawing, so the path stretches (strokes keep their width) and the stops have room. */}
      <div className="relative mx-auto mt-2 min-h-48 w-full max-w-3xl sm:min-h-0" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
          <path d={pathThrough(pts)} fill="none" stroke="var(--s-soft)" strokeWidth="22" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d={pathThrough(pts)} fill="none" stroke="var(--s)" strokeOpacity="0.45" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          {/* The finished part of the road, drawn solid up to the last unit learned in a row. */}
          {signedIn &&
            pts.slice(1).map((b, i) => {
              if (!done(i) || !done(i + 1)) return null;
              const a = pts[i];
              const mx = (a.x + b.x) / 2;
              return <path key={i} d={`M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`} fill="none" stroke="var(--s)" strokeWidth="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />;
            })}
        </svg>
        <span className="absolute -translate-x-1/2 -translate-y-1/2 text-muted-foreground" style={{ left: `${((pts[0].x - 50) / W) * 100}%`, top: `${((pts[0].y + 22) / H) * 100}%` }} aria-hidden="true">
          <Flag className="size-5" />
        </span>
        <span
          className={cn("absolute -translate-x-1/2 -translate-y-1/2", signedIn && doneCount === stops.length ? "fx-breathe text-amber-500" : "text-muted-foreground")}
          style={{ left: `${((pts[pts.length - 1].x + 50) / W) * 100}%`, top: `${((pts[pts.length - 1].y - 22) / H) * 100}%` }}
          aria-hidden="true"
        >
          <Trophy className="size-6" />
        </span>
        <ol>
          {stops.map((s, i) => {
            const level = signedIn ? (s.level ?? "none") : "none";
            const here = i === current;
            return (
              <li key={s.position} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(pts[i].x / W) * 100}%`, top: `${(pts[i].y / H) * 100}%` }}>
                {here && (
                  <span className="fx-breathe absolute -top-7 left-1/2 -translate-x-1/2 text-[var(--s-text)] sm:-top-8" aria-hidden="true">
                    <MapPin className="size-6 fill-[var(--s-soft)] sm:size-7" />
                  </span>
                )}
                <a
                  href={`#unit-${s.position}`}
                  title={s.title}
                  aria-label={`${t("stop", { n: s.position, title: s.title })}${signedIn ? `, ${tm(level)}` : ""}${here ? `, ${t("here")}` : ""}`}
                  className={cn(
                    "clay-press grid size-11 place-items-center rounded-full text-base font-black shadow-clay-sm sm:size-14 sm:text-xl",
                    STOP[level],
                    here && "ring-4 ring-[var(--s)] ring-offset-2 ring-offset-card",
                  )}
                  style={level === "familiar" ? { background: "var(--s-soft)" } : level === "proficient" ? { background: "var(--s)" } : undefined}
                >
                  {level === "mastered" ? <Star className="size-5 fill-current sm:size-6" aria-hidden="true" /> : s.position}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      {signedIn && (
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-bold text-muted-foreground">
          {(["familiar", "proficient", "mastered"] as const).map((lv) => (
            <li key={lv} className="inline-flex items-center gap-1.5">
              <span className={cn("size-3 rounded-full", STOP[lv])} style={lv === "familiar" ? { background: "var(--s-soft)" } : lv === "proficient" ? { background: "var(--s)" } : undefined} aria-hidden="true" />
              {tm(lv)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
