"use client";

import { AlertTriangle, Bell, BellOff, BellRing, CalendarPlus, Clock, Download, MapPin, Pencil, Plus, Trash2, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button, buttonClasses } from "@/components/ui/button";
import { SubjectIcon } from "@/components/ui/subject-icon";
import { notifyChanged } from "@/lib/live";
import {
  DAYS,
  daysOf,
  fromMinutes,
  isoWeekday,
  localDate,
  maskOf,
  MINUTES_BEFORE,
  nowAndNext,
  overlaps,
  toMinutes,
  WORK_DAYS,
  type Entry,
  type Reminder,
} from "@/lib/schedule";
import { cn } from "@/lib/utils";
import { useNow, useScheduleFormat, type ScheduleSubject } from "./schedule-format";
import { showSystemNotification } from "./reminder-watcher";

const inputClass = "mt-1 h-12 w-full rounded-[12px] border border-border bg-card px-3 text-base focus-visible:outline-primary";
const labelClass = "block text-sm font-bold";

async function send(url: string, method: "POST" | "PUT" | "DELETE", body?: unknown) {
  try {
    const res = await fetch(url, { method, headers: body ? { "content-type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    return { ok: res.ok, data };
  } catch {
    return { ok: false, data: {} as Record<string, unknown> };
  }
}

/** A native modal dialog: focus stays inside, Esc and a tap outside close it. Bottom sheet on phones. */
function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  const t = useTranslations("schedule");
  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="fx-rise mx-auto mb-0 mt-auto max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-[24px] bg-card p-0 text-foreground shadow-clay backdrop:bg-slate-900/40 sm:my-auto sm:rounded-[24px]"
    >
      {open && (
        <div className="p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-xl font-extrabold">{title}</h2>
            <button type="button" onClick={onClose} aria-label={t("close")} className="grid size-11 place-items-center rounded-xl text-muted-foreground hover:bg-muted">
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          {children}
        </div>
      )}
    </dialog>
  );
}

/** Asks once more in place ("Sure?") before it acts, instead of a browser dialog. */
function ConfirmButton({ label, confirm, onConfirm, className }: { label: string; confirm: string; onConfirm: () => Promise<void>; className?: string }) {
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
      className={cn("inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold", armed ? "bg-red-50 text-destructive" : "text-muted-foreground hover:bg-muted", className)}
    >
      <Trash2 className="size-4" aria-hidden="true" />
      {armed ? confirm : label}
    </button>
  );
}

/** Weekday chips; `single` makes them pick exactly one. */
function DayPicker({ value, onChange, single, label, dayShort }: { value: number[]; onChange: (d: number[]) => void; single?: boolean; label: string; dayShort: (d: number) => string }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {DAYS.map((d) => {
          const on = value.includes(d);
          return (
            <button
              key={d}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(single ? [d] : on ? value.filter((x) => x !== d) : [...value, d].sort())}
              className={cn("h-11 rounded-[12px] text-sm font-bold capitalize transition-colors", on ? "bg-primary text-primary-foreground shadow-clay-sm" : "bg-muted text-muted-foreground hover:text-foreground")}
            >
              {dayShort(d)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

type EntryDraft = { id: string | null; days: number[]; subjectId: string; title: string; start: string; end: string; place: string; note: string; remind: number };

/** A new class on `day` starts 10 minutes after the day's last one ends (45-minute lessons), or at 09:00. */
function newDraft(day: number, entries: Entry[]): EntryDraft {
  const last = entries.filter((e) => e.day === day).sort((a, b) => a.end.localeCompare(b.end)).at(-1);
  const start = last ? Math.min(toMinutes(last.end) + 10, 23 * 60 - 45) : 9 * 60;
  return { id: null, days: [day], subjectId: "", title: "", start: fromMinutes(start), end: fromMinutes(start + 45), place: "", note: "", remind: 0 };
}

function EntryForm({ draft, subjects, onDone }: { draft: EntryDraft; subjects: ScheduleSubject[]; onDone: () => void }) {
  const t = useTranslations("schedule");
  const f = useScheduleFormat(subjects);
  const [d, setD] = useState(draft);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = (patch: Partial<EntryDraft>) => setD((x) => ({ ...x, ...patch }));
  const errors: Record<string, string> = { end: t("errorEnd"), title: t("errorTitle"), limit: t("errorLimit"), days: t("errorDays") };
  const subjectName = subjects.find((s) => s.id === d.subjectId)?.name;

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!d.days.length) return setError(errors.days);
        if (toMinutes(d.start) >= toMinutes(d.end)) return setError(errors.end);
        if (!d.subjectId && !d.title.trim()) return setError(errors.title);
        setBusy(true);
        setError(null);
        const body = { subjectId: d.subjectId || null, title: d.title, start: d.start, end: d.end, place: d.place, note: d.note, remind: d.remind || null };
        const r = d.id ? await send(`/api/schedule/entries/${d.id}`, "PUT", { ...body, day: d.days[0] }) : await send("/api/schedule/entries", "POST", { ...body, days: d.days });
        setBusy(false);
        if (!r.ok) return setError(errors[String(r.data.error)] ?? t("errorGeneric"));
        notifyChanged({ schedule: true });
        onDone();
      }}
    >
      <div>
        <label htmlFor="sch-subject" className={labelClass}>{t("subject")}</label>
        <select id="sch-subject" value={d.subjectId} onChange={(e) => set({ subjectId: e.target.value })} className={inputClass}>
          <option value="">{t("otherSubject")}</option>
          {subjects.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sch-title" className={labelClass}>{t("titleLabel")}</label>
        <input id="sch-title" maxLength={60} value={d.title} onChange={(e) => set({ title: e.target.value })} placeholder={subjectName ?? t("titlePlaceholder")} required={!d.subjectId} className={inputClass} />
      </div>
      <DayPicker value={d.days} onChange={(days) => set({ days })} single={!!d.id} label={d.id ? t("day") : t("days")} dayShort={f.dayShort} />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="sch-start" className={labelClass}>{t("start")}</label>
          <input
            id="sch-start"
            type="time"
            required
            value={d.start}
            onChange={(e) => {
              const v = e.target.value;
              if (!v) return set({ start: v });
              // Moving the start keeps the class as long as it was.
              const len = Math.max(toMinutes(d.end) - toMinutes(d.start), 5);
              set({ start: v, end: fromMinutes(Math.min(toMinutes(v) + len, 23 * 60 + 59)) });
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="sch-end" className={labelClass}>{t("end")}</label>
          <input id="sch-end" type="time" required value={d.end} onChange={(e) => set({ end: e.target.value })} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="sch-place" className={labelClass}>{t("place")}</label>
        <input id="sch-place" maxLength={60} value={d.place} onChange={(e) => set({ place: e.target.value })} placeholder={t("placePlaceholder")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="sch-note" className={labelClass}>{t("note")}</label>
        <textarea id="sch-note" maxLength={300} rows={2} value={d.note} onChange={(e) => set({ note: e.target.value })} placeholder={t("notePlaceholder")} className={cn(inputClass, "h-auto py-2")} />
      </div>
      <div>
        <label htmlFor="sch-remind" className={labelClass}>{t("remind")}</label>
        <select id="sch-remind" value={d.remind} onChange={(e) => set({ remind: Number(e.target.value) })} className={inputClass}>
          <option value={0}>{t("remindOff")}</option>
          {MINUTES_BEFORE.map((n) => (
            <option key={n} value={n}>{t("remindMinutes", { n })}</option>
          ))}
        </select>
      </div>
      {error && <p role="alert" className="text-sm font-bold text-destructive">{error}</p>}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <Button type="submit" disabled={busy}>{t("save")}</Button>
        {d.id && (
          <ConfirmButton
            label={t("delete")}
            confirm={t("deleteSure")}
            className="ml-auto"
            onConfirm={async () => {
              const r = await send(`/api/schedule/entries/${d.id}`, "DELETE");
              if (!r.ok) return setError(t("errorGeneric"));
              notifyChanged({ schedule: true });
              onDone();
            }}
          />
        )}
      </div>
    </form>
  );
}

function EntryCard({ e, subject, title, reminder, now, clash, onEdit }: { e: Entry; subject?: ScheduleSubject; title: string; reminder?: Reminder; now: "now" | "next" | null; clash: boolean; onEdit: () => void }) {
  const t = useTranslations("schedule");
  return (
    <button
      type="button"
      onClick={onEdit}
      className={cn(
        "clay-press group relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border border-border/70 bg-card p-3 pl-4 text-left shadow-clay-sm",
        subject && `subject-${subject.color}`,
        now === "now" && "ring-2 ring-primary",
      )}
    >
      <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: subject ? "var(--s)" : "var(--primary)" }} aria-hidden="true" />
      <span className="grid size-9 shrink-0 place-items-center rounded-xl" style={{ background: subject ? "var(--s-soft)" : "var(--muted)", color: subject ? "var(--s-text)" : "var(--primary)" }}>
        {subject ? <SubjectIcon name={subject.icon} className="size-5" /> : <Clock className="size-5" aria-hidden="true" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 text-xs font-bold tabular-nums text-muted-foreground">
          {e.start}–{e.end}
          {now && <span className={cn("rounded-full px-2 py-px text-[11px] font-black uppercase", now === "now" ? "bg-primary text-primary-foreground" : "bg-muted text-primary")}>{t(now)}</span>}
        </span>
        <span className="line-clamp-2 font-extrabold leading-snug [overflow-wrap:anywhere]">{title}</span>
        {(e.place || reminder || clash) && (
          <span className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-xs text-muted-foreground">
            {e.place && (
              <span className="inline-flex min-w-0 items-center gap-1">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{e.place}</span>
              </span>
            )}
            {reminder && (
              <span className="inline-flex items-center gap-1" title={t("remindMinutes", { n: reminder.minutesBefore ?? 0 })}>
                {reminder.enabled ? <Bell className="size-3.5" aria-hidden="true" /> : <BellOff className="size-3.5" aria-hidden="true" />}
                {t("minutesShort", { n: reminder.minutesBefore ?? 0 })}
              </span>
            )}
            {clash && (
              <span className="inline-flex items-center gap-1 text-amber-700">
                <AlertTriangle className="size-3.5" aria-hidden="true" />
                {t("overlap")}
              </span>
            )}
          </span>
        )}
        {e.note && <span className="mt-1 block text-xs text-muted-foreground line-clamp-2">{e.note}</span>}
      </span>
      <Pencil className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </button>
  );
}

type ReminderDraft = { id: string | null; kind: "weekly" | "once"; title: string; days: number[]; date: string; time: string };

function ReminderForm({ draft, subjects, onDone }: { draft: ReminderDraft; subjects: ScheduleSubject[]; onDone: () => void }) {
  const t = useTranslations("schedule");
  const f = useScheduleFormat(subjects);
  const [d, setD] = useState(draft);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = (patch: Partial<ReminderDraft>) => setD((x) => ({ ...x, ...patch }));
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (d.kind === "weekly" && !d.days.length) return setError(t("errorDays"));
        setBusy(true);
        setError(null);
        const body = d.kind === "weekly" ? { kind: "weekly", title: d.title, days: maskOf(d.days), time: d.time } : { kind: "once", title: d.title, date: d.date, time: d.time };
        const r = d.id ? await send(`/api/schedule/reminders/${d.id}`, "PUT", body) : await send("/api/schedule/reminders", "POST", body);
        setBusy(false);
        if (!r.ok) return setError(r.data.error === "limit" ? t("errorReminderLimit") : t("errorGeneric"));
        notifyChanged({ schedule: true });
        onDone();
      }}
    >
      <div>
        <label htmlFor="rem-title" className={labelClass}>{t("reminderText")}</label>
        <input id="rem-title" required maxLength={80} value={d.title} onChange={(e) => set({ title: e.target.value })} placeholder={t("reminderPlaceholder")} className={inputClass} />
      </div>
      <fieldset>
        <legend className={labelClass}>{t("repeat")}</legend>
        <div className="mt-1 grid grid-cols-2 gap-1 rounded-[14px] bg-muted p-1">
          {(["weekly", "once"] as const).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={d.kind === k}
              onClick={() => set({ kind: k })}
              className={cn("min-h-11 rounded-[12px] px-2 text-sm font-bold", d.kind === k ? "bg-card text-foreground shadow-clay-sm" : "text-muted-foreground")}
            >
              {k === "weekly" ? t("repeatWeekly") : t("repeatOnce")}
            </button>
          ))}
        </div>
      </fieldset>
      {d.kind === "weekly" ? (
        <DayPicker value={d.days} onChange={(days) => set({ days })} label={t("days")} dayShort={f.dayShort} />
      ) : (
        <div>
          <label htmlFor="rem-date" className={labelClass}>{t("date")}</label>
          <input id="rem-date" type="date" required value={d.date} onChange={(e) => set({ date: e.target.value })} className={inputClass} />
        </div>
      )}
      <div>
        <label htmlFor="rem-time" className={labelClass}>{t("time")}</label>
        <input id="rem-time" type="time" required value={d.time} onChange={(e) => set({ time: e.target.value })} className={inputClass} />
      </div>
      {error && <p role="alert" className="text-sm font-bold text-destructive">{error}</p>}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <Button type="submit" disabled={busy}>{t("save")}</Button>
        {d.id && (
          <ConfirmButton
            label={t("delete")}
            confirm={t("delete") + "?"}
            className="ml-auto"
            onConfirm={async () => {
              await send(`/api/schedule/reminders/${d.id}`, "DELETE");
              notifyChanged({ schedule: true });
              onDone();
            }}
          />
        )}
      </div>
    </form>
  );
}

/** On/off switch for one reminder. */
function ReminderSwitch({ r }: { r: Reminder }) {
  const t = useTranslations("schedule");
  const [on, setOn] = useState(r.enabled);
  useEffect(() => setOn(r.enabled), [r.enabled]);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={t("toggleLabel")}
      onClick={async () => {
        setOn(!on);
        const res = await send(`/api/schedule/reminders/${r.id}`, "PUT", { enabled: !on });
        if (!res.ok) setOn(on);
        else notifyChanged({ schedule: true });
      }}
      className="grid min-h-11 shrink-0 place-items-center px-1"
    >
      <span className={cn("relative h-7 w-12 rounded-full transition-colors", on ? "bg-primary" : "bg-slate-300")}>
        <span className={cn("absolute top-0.5 size-6 rounded-full bg-white shadow transition-[left] duration-200", on ? "left-[22px]" : "left-0.5")} />
      </span>
    </button>
  );
}

type NotifyState = "unsupported" | "default" | "granted" | "denied";

function NotificationsCard() {
  const t = useTranslations("schedule");
  const locale = useLocale();
  const [state, setState] = useState<NotifyState | null>(null);
  useEffect(() => {
    // Browsers only offer notifications on https (or localhost).
    setState(typeof Notification === "undefined" || !window.isSecureContext ? "unsupported" : (Notification.permission as NotifyState));
  }, []);
  return (
    <section aria-labelledby="notify-title" className="clay space-y-5 p-5 sm:p-7">
      <div className="space-y-3">
        <h2 id="notify-title" className="flex items-center gap-2 text-xl font-extrabold">
          <BellRing className="size-6 text-primary" aria-hidden="true" />
          {t("notifyTitle")}
        </h2>
        <p className="text-muted-foreground">{t("notifyIntro")}</p>
        {state === "unsupported" && <p className="rounded-[12px] bg-muted px-3 py-2 text-sm">{t("notifyUnsupported")}</p>}
        {state === "denied" && <p className="rounded-[12px] bg-amber-50 px-3 py-2 text-sm text-amber-900">{t("notifyDenied")}</p>}
        {state === "default" && (
          <div className="space-y-2">
            <Button variant="secondary" onClick={async () => setState((await Notification.requestPermission()) as NotifyState)}>
              <Bell className="size-5" aria-hidden="true" />
              {t("notifyOn")}
            </Button>
            <p className="text-sm text-muted-foreground">{t("notifyOnText")}</p>
          </div>
        )}
        {state === "granted" && (
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold text-success">{t("notifyGranted")}</p>
            <button type="button" onClick={() => showSystemNotification(t("testTitle"), t("testBody"), "lessons-test", `/${locale}/schedule`)} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-bold text-primary hover:bg-muted">
              <BellRing className="size-4" aria-hidden="true" />
              {t("notifyTest")}
            </button>
          </div>
        )}
      </div>
      <div className="space-y-3 border-t border-border/70 pt-5">
        <h3 className="flex items-center gap-2 font-extrabold">
          <CalendarPlus className="size-5 text-primary" aria-hidden="true" />
          {t("calendarTitle")}
        </h3>
        <p className="text-sm text-muted-foreground">{t("calendarText")}</p>
        <a href={`/api/schedule/calendar?locale=${locale}`} download="schedule.ics" className={buttonClasses({ variant: "secondary", size: "sm" })}>
          <Download className="size-4" aria-hidden="true" />
          {t("calendarButton")}
        </a>
      </div>
    </section>
  );
}

/** The whole schedule page below its header: now/next, the week, reminders and how they reach the pupil. */
export function ScheduleBoard({ entries, reminders, subjects }: { entries: Entry[]; reminders: Reminder[]; subjects: ScheduleSubject[] }) {
  const t = useTranslations("schedule");
  const f = useScheduleFormat(subjects);
  const now = useNow();
  const [entryDraft, setEntryDraft] = useState<EntryDraft | null>(null);
  const [reminderDraft, setReminderDraft] = useState<ReminderDraft | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [weekend, setWeekend] = useState(false);
  const today = now ? isoWeekday(now) : null;
  const shownDay = day ?? today ?? 1;

  const byEntry = useMemo(() => new Map(reminders.filter((r) => r.kind === "class").map((r) => [r.entryId, r])), [reminders]);
  const clashes = useMemo(() => overlaps(entries), [entries]);
  const nn = now ? nowAndNext(entries, now) : null;
  const columns = DAYS.filter((d) => d <= 5 || weekend || entries.some((e) => e.day === d));
  const own = reminders.filter((r) => r.kind !== "class");
  // Class reminders in timetable order (the classes come sorted by day and time).
  const classReminders = entries.map((e) => byEntry.get(e.id)).filter((r): r is Reminder => !!r);

  const openNew = (d: number) => setEntryDraft(newDraft(d, entries));
  const openEdit = (e: Entry) => {
    const r = byEntry.get(e.id);
    setEntryDraft({ id: e.id, days: [e.day], subjectId: e.subjectId ?? "", title: e.title, start: e.start, end: e.end, place: e.place, note: e.note, remind: r?.enabled ? (r.minutesBefore ?? 0) : 0 });
  };
  const card = (e: Entry) => (
    <li key={e.id}>
      <EntryCard
        e={e}
        subject={e.subjectId ? f.subject.get(e.subjectId) : undefined}
        title={f.titleOf(e)}
        reminder={byEntry.get(e.id)}
        now={nn?.current?.id === e.id ? "now" : nn?.next?.id === e.id && nn.next.day === today ? "next" : null}
        clash={clashes.has(e.id)}
        onEdit={() => openEdit(e)}
      />
    </li>
  );
  const ofDay = (d: number) => entries.filter((e) => e.day === d);

  return (
    <div className="space-y-6 sm:space-y-8">
      {nn && (nn.current || nn.next) && (
        <div className="clay-sm fx-in flex flex-col gap-1 px-4 py-3 text-sm font-bold sm:flex-row sm:gap-4">
          {nn.current && <span className="text-primary">{t("nowLine", { title: f.titleOf(nn.current), end: nn.current.end })}</span>}
          {nn.next && (
            <span className="text-muted-foreground">
              {nn.next.day === today ? t("nextLine", { title: f.titleOf(nn.next), time: nn.next.start }) : t("nextLineDay", { title: f.titleOf(nn.next), day: f.dayLong(nn.next.day), time: nn.next.start })}
            </span>
          )}
        </div>
      )}

      <section aria-labelledby="week-title" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="week-title" className="text-xl font-extrabold sm:text-2xl">{t("weekTitle")}</h2>
          <div className="flex flex-wrap items-center gap-1">
            {!columns.includes(6) || !columns.includes(7) ? (
              <button type="button" onClick={() => setWeekend(true)} className="hidden min-h-11 rounded-xl px-3 text-sm font-bold text-muted-foreground hover:bg-muted md:inline-flex md:items-center">
                {t("showWeekend")}
              </button>
            ) : null}
            <Button size="sm" onClick={() => openNew(shownDay)}>
              <Plus className="size-4" aria-hidden="true" />
              {t("addClass")}
            </Button>
          </div>
        </div>

        {entries.length === 0 && <p className="clay-sm px-4 py-3 text-muted-foreground">{t("emptyWeek")}</p>}

        {/* Phones: one day at a time. */}
        <div className="space-y-3 md:hidden">
          <div role="tablist" aria-label={t("weekTitle")} className="grid grid-cols-7 gap-1">
            {DAYS.map((d) => {
              const n = ofDay(d).length;
              return (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={shownDay === d}
                  onClick={() => setDay(d)}
                  className={cn(
                    "relative flex h-14 flex-col items-center justify-center rounded-[14px] text-xs font-bold capitalize",
                    shownDay === d ? "bg-primary text-primary-foreground shadow-clay-sm" : "bg-card text-muted-foreground shadow-clay-sm",
                    today === d && shownDay !== d && "text-primary ring-2 ring-primary/40",
                  )}
                >
                  {f.dayShort(d)}
                  <span className={cn("mt-1 size-1.5 rounded-full", n ? (shownDay === d ? "bg-primary-foreground" : "bg-primary") : "bg-transparent")} aria-hidden="true" />
                  <span className="sr-only">{n}</span>
                </button>
              );
            })}
          </div>
          <div role="tabpanel" aria-label={f.dayLong(shownDay)} className="space-y-2">
            <h3 className="font-extrabold capitalize">{f.dayLong(shownDay)}</h3>
            {ofDay(shownDay).length ? <ul key={shownDay} className="stagger space-y-2">{ofDay(shownDay).map(card)}</ul> : <p className="text-sm text-muted-foreground">{t("noClassesDay")}</p>}
            <button type="button" onClick={() => openNew(shownDay)} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border text-sm font-bold text-muted-foreground active:bg-muted">
              <Plus className="size-4" aria-hidden="true" />
              {t("addTo", { day: f.dayLong(shownDay) })}
            </button>
          </div>
        </div>

        {/* Tablets and up: the whole week side by side. */}
        <div className="hidden gap-3 md:grid" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
          {columns.map((d) => (
            <div key={d} className={cn("flex flex-col gap-2 rounded-[20px] bg-muted/50 p-2", today === d && "bg-primary/10 ring-2 ring-primary/30")}>
              <h3 className={cn("px-1 pt-1 text-sm font-black capitalize", today === d ? "text-primary" : "text-muted-foreground")}>{f.dayLong(d)}</h3>
              {ofDay(d).length > 0 && <ul className="space-y-2">{ofDay(d).map(card)}</ul>}
              <button type="button" onClick={() => openNew(d)} aria-label={t("addTo", { day: f.dayLong(d) })} title={t("addTo", { day: f.dayLong(d) })} className="mt-auto grid min-h-11 place-items-center rounded-xl text-muted-foreground hover:bg-card hover:text-primary">
                <Plus className="size-5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
        {entries.length > 0 && (
          <div className="flex justify-end">
            <ConfirmButton
              label={t("clearAll")}
              confirm={t("clearSure")}
              onConfirm={async () => {
                await send("/api/schedule/entries", "DELETE");
                notifyChanged({ schedule: true });
              }}
            />
          </div>
        )}
      </section>

      <section aria-labelledby="rem-title-h" className="clay space-y-4 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="rem-title-h" className="flex items-center gap-2 text-xl font-extrabold">
            <Bell className="size-6 text-primary" aria-hidden="true" />
            {t("remindersTitle")}
          </h2>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setReminderDraft({ id: null, kind: "weekly", title: "", days: [...WORK_DAYS], date: now ? localDate(now) : "", time: "18:00" })}
          >
            <Plus className="size-4" aria-hidden="true" />
            {t("addReminder")}
          </Button>
        </div>
        <p className="text-muted-foreground">{t("remindersIntro")}</p>
        {own.length + classReminders.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t("noReminders")}</p>
        ) : (
          <ul className="divide-y divide-border/70 overflow-hidden rounded-[var(--radius)] border border-border/70">
            {[...classReminders, ...own].map((r) => {
              const next = now && r.enabled ? f.nextLabel(r, entries, now) : null;
              const passed = now && r.kind === "once" && !f.nextLabel(r, entries, now);
              const entry = entries.find((e) => e.id === r.entryId);
              return (
                <li key={r.id} className={cn("flex items-center gap-2 px-3 py-2 sm:px-4", !r.enabled && "opacity-60")}>
                  <button
                    type="button"
                    onClick={() =>
                      entry
                        ? openEdit(entry)
                        : setReminderDraft({ id: r.id, kind: r.kind === "once" ? "once" : "weekly", title: r.title, days: r.kind === "weekly" ? daysOf(r.days) : [...WORK_DAYS], date: r.date ?? "", time: r.time ?? "18:00" })
                    }
                    className="flex min-h-12 min-w-0 flex-1 items-center gap-3 rounded-xl text-left"
                    aria-label={`${t("edit")}: ${r.kind === "class" && entry ? f.titleOf(entry) : r.title}`}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      {r.kind === "class" ? <Clock className="size-5" aria-hidden="true" /> : <Bell className="size-5" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-bold">{r.kind === "class" && entry ? f.titleOf(entry) : r.title}</span>
                      <span className="block text-sm text-muted-foreground">{f.describe(r, entries)}</span>
                      {next && <span className="block text-xs font-bold text-primary">{t("nextAt", { when: next })}</span>}
                      {passed && <span className="block text-xs font-bold text-muted-foreground">{t("passed")}</span>}
                    </span>
                  </button>
                  <ReminderSwitch r={r} />
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <NotificationsCard />

      <Sheet open={!!entryDraft} onClose={() => setEntryDraft(null)} title={entryDraft?.id ? t("editTitle") : t("newTitle")}>
        {entryDraft && <EntryForm key={entryDraft.id ?? `new-${entryDraft.days[0]}`} draft={entryDraft} subjects={subjects} onDone={() => setEntryDraft(null)} />}
      </Sheet>
      <Sheet open={!!reminderDraft} onClose={() => setReminderDraft(null)} title={reminderDraft?.id ? t("editReminder") : t("newReminder")}>
        {reminderDraft && <ReminderForm key={reminderDraft.id ?? "new"} draft={reminderDraft} subjects={subjects} onDone={() => setReminderDraft(null)} />}
      </Sheet>
    </div>
  );
}
