/**
 * The class timetable and its reminders, as the browser and the server share them.
 *
 * Times are wall-clock "HH:MM" with no time zone: a class at 09:00 is at 09:00
 * wherever the pupil is, so the browser (which knows the pupil's clock) works
 * out when a reminder is due. Everything here is pure so it can be tested.
 */

export type Entry = {
  id: string;
  /** 1 = Monday … 7 = Sunday. */
  day: number;
  start: string;
  end: string;
  subjectId: string | null;
  title: string;
  place: string;
  note: string;
};

export type ReminderKind = "class" | "weekly" | "once";

export type Reminder = {
  id: string;
  kind: ReminderKind;
  entryId: string | null;
  minutesBefore: number | null;
  title: string;
  /** Weekdays as bits: Monday = 1, Tuesday = 2 … Sunday = 64. */
  days: number;
  date: string | null;
  time: string | null;
  enabled: boolean;
};

export const DAYS = [1, 2, 3, 4, 5, 6, 7] as const;
export const WORK_DAYS = [1, 2, 3, 4, 5] as const;
/** Choices for "remind me before the class". */
export const MINUTES_BEFORE = [5, 10, 15, 30, 60] as const;
export const MAX_ENTRIES = 100;
export const MAX_REMINDERS = 60;
/** A reminder found up to this long after its time still shows (the tab was asleep or just opened). */
export const GRACE_MS = 15 * 60_000;

export const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
export const DATE_RE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export const toMinutes = (hhmm: string) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));
export const fromMinutes = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

export const dayBit = (day: number) => 1 << (day - 1);
export const daysOf = (mask: number) => DAYS.filter((d) => mask & dayBit(d));
export const maskOf = (days: readonly number[]) => days.reduce((m, d) => m | dayBit(d), 0);

/** Monday = 1 … Sunday = 7 for a local date. */
export const isoWeekday = (d: Date) => ((d.getDay() + 6) % 7) + 1;

/** The local date as YYYY-MM-DD. */
export const localDate = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** Control, invisible and text-direction characters: they have no place in a class name and can disguise text. */
const HIDDEN = /[\u0000-\u0008\u000b-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u202a-\u202e\u2060-\u2069\ufeff]/g;

/** Drops hidden characters, collapses spaces and trims to `max` characters (input from a form). */
export const cleanText = (s: string, max: number) => s.replace(HIDDEN, "").replace(/\s+/g, " ").trim().slice(0, max);
/** The same for a note, which keeps its line breaks. */
export const cleanNote = (s: string, max: number) => s.replace(HIDDEN, "").replace(/[^\S\n]+/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);

/** Classes in timetable order: by day, then start time. */
export const sortEntries = <T extends Pick<Entry, "day" | "start" | "end">>(list: T[]) =>
  [...list].sort((a, b) => a.day - b.day || a.start.localeCompare(b.start) || a.end.localeCompare(b.end));

/** Pairs of classes on the same day whose times overlap, by id (shown as a warning, not refused). */
export function overlaps(list: Entry[]) {
  const out = new Set<string>();
  for (const a of list)
    for (const b of list)
      if (a.id < b.id && a.day === b.day && toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end)) {
        out.add(a.id);
        out.add(b.id);
      }
  return out;
}

/** A local Date on `date`'s day at `hhmm`, `addDays` later. */
function at(date: Date, hhmm: string, addDays = 0) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + addDays, Number(hhmm.slice(0, 2)), Number(hhmm.slice(3, 5)));
}

export type Alarm = {
  /** Reminder id plus the time it fires, so each week's reminder is told apart. */
  key: string;
  reminderId: string;
  at: Date;
  title: string;
  /** The class it is for, when it is a class reminder. */
  entry: Entry | null;
};

/**
 * Every time the reminders fire between `from` and `to` (both local Dates),
 * earliest first. Turned-off reminders and class reminders whose class is gone
 * never fire.
 */
export function alarmsBetween(reminders: Reminder[], entries: Entry[], from: Date, to: Date): Alarm[] {
  const byId = new Map(entries.map((e) => [e.id, e]));
  const out: Alarm[] = [];
  const push = (r: Reminder, when: Date, title: string, entry: Entry | null) => {
    if (when >= from && when <= to) out.push({ key: `${r.id}@${when.getTime()}`, reminderId: r.id, at: when, title, entry });
  };
  // One day early so a class just after midnight with a reminder the evening before is found.
  const startDay = new Date(from.getFullYear(), from.getMonth(), from.getDate() - 1);
  const days = Math.ceil((to.getTime() - startDay.getTime()) / 86_400_000) + 1;
  for (const r of reminders) {
    if (!r.enabled) continue;
    if (r.kind === "once") {
      if (r.date && r.time && DATE_RE.test(r.date) && TIME_RE.test(r.time)) {
        const [y, m, d] = r.date.split("-").map(Number);
        push(r, at(new Date(y, m - 1, d), r.time), r.title, null);
      }
      continue;
    }
    for (let i = 0; i <= days; i++) {
      const day = new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() + i);
      const wd = isoWeekday(day);
      if (r.kind === "weekly") {
        if (r.time && r.days & dayBit(wd)) push(r, at(day, r.time), r.title, null);
      } else {
        const e = r.entryId ? byId.get(r.entryId) : undefined;
        if (e && e.day === wd) {
          const when = at(day, e.start);
          when.setMinutes(when.getMinutes() - (r.minutesBefore ?? 0));
          push(r, when, r.title || e.title, e);
        }
      }
    }
  }
  return out.sort((a, b) => a.at.getTime() - b.at.getTime());
}

/** The next time a reminder fires after `now`, within a week (null if it never does). */
export function nextAlarm(r: Reminder, entries: Entry[], now: Date) {
  const until = r.kind === "once" ? new Date(8.64e15) : new Date(now.getTime() + 8 * 86_400_000);
  return alarmsBetween([{ ...r, enabled: true }], entries, now, until)[0]?.at ?? null;
}

/** What the timetable shows as happening now and next for a local time. */
export function nowAndNext(entries: Entry[], now: Date) {
  const sorted = sortEntries(entries);
  const wd = isoWeekday(now);
  const mins = now.getHours() * 60 + now.getMinutes();
  const current = sorted.find((e) => e.day === wd && toMinutes(e.start) <= mins && mins < toMinutes(e.end)) ?? null;
  // The first class after now, this week or wrapping round to next week.
  const after = sorted.find((e) => e.day > wd || (e.day === wd && toMinutes(e.start) > mins)) ?? sorted[0] ?? null;
  const today = sorted.filter((e) => e.day === wd);
  return { current, next: after && after !== current ? after : null, today };
}

// ---- Calendar file (.ics) -------------------------------------------------

const icsEscape = (s: string) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/([,;])/g, "\\$1");

/** Folds a line at 75 bytes as RFC 5545 asks (continuation lines start with a space). */
function fold(line: string) {
  const bytes = new TextEncoder();
  if (bytes.encode(line).length <= 75) return line;
  const out: string[] = [];
  let cur = "";
  for (const ch of line) {
    if (bytes.encode(cur + ch).length > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = "";
    }
    cur += ch;
  }
  out.push(cur);
  return out.join("\r\n ");
}

const icsDate = (d: Date) => localDate(d).replace(/-/g, "");
const icsDateTime = (d: Date, hhmm: string) => `${icsDate(d)}T${hhmm.replace(":", "")}00`;
const BYDAY = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

/**
 * The timetable and its reminders as a calendar file, so a phone's calendar app
 * reminds the pupil even when the site is closed. Times are "floating" (no time
 * zone): 09:00 stays 09:00 in whatever zone the calendar is in.
 */
export function buildIcs(opts: {
  entries: Entry[];
  reminders: Reminder[];
  /** The title to show for a class (its subject's name in the pupil's language when it has no title). */
  titleOf: (e: Entry) => string;
  calendarName: string;
  /** Any day of the week the classes start from (today). */
  today: Date;
  host: string;
  stamp: Date;
}) {
  const { entries, reminders, titleOf, calendarName, today, host, stamp } = opts;
  const dtstamp = `${stamp.toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//lessons//schedule//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", `X-WR-CALNAME:${icsEscape(calendarName)}`];
  // The date of weekday `day` in the week of `today` (Monday first), so the first class is this week.
  const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (isoWeekday(today) - 1));
  const dateOf = (day: number) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + day - 1);
  const alarm = (minutes: number, text: string) => ["BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${icsEscape(text)}`, `TRIGGER:-PT${minutes}M`, "END:VALARM"];

  const classReminder = new Map(reminders.filter((r) => r.kind === "class" && r.enabled && r.entryId).map((r) => [r.entryId!, r]));
  for (const e of sortEntries(entries)) {
    const d = dateOf(e.day);
    const title = titleOf(e);
    lines.push("BEGIN:VEVENT", `UID:class-${e.id}@${host}`, `DTSTAMP:${dtstamp}`, `DTSTART:${icsDateTime(d, e.start)}`, `DTEND:${icsDateTime(d, e.end)}`, `RRULE:FREQ=WEEKLY;BYDAY=${BYDAY[e.day - 1]}`, `SUMMARY:${icsEscape(title)}`);
    if (e.place) lines.push(`LOCATION:${icsEscape(e.place)}`);
    if (e.note) lines.push(`DESCRIPTION:${icsEscape(e.note)}`);
    const r = classReminder.get(e.id);
    if (r) lines.push(...alarm(r.minutesBefore ?? 0, r.title || title));
    lines.push("END:VEVENT");
  }
  for (const r of reminders) {
    if (!r.enabled || r.kind === "class" || !r.time) continue;
    let start: Date;
    let rule: string | null = null;
    if (r.kind === "weekly") {
      const days = daysOf(r.days);
      if (!days.length) continue;
      start = dateOf(days[0]);
      rule = `RRULE:FREQ=WEEKLY;BYDAY=${days.map((x) => BYDAY[x - 1]).join(",")}`;
    } else {
      if (!r.date || !DATE_RE.test(r.date)) continue;
      const [y, m, dd] = r.date.split("-").map(Number);
      start = new Date(y, m - 1, dd);
    }
    const end = fromMinutes(Math.min(toMinutes(r.time) + 15, 23 * 60 + 59));
    lines.push("BEGIN:VEVENT", `UID:reminder-${r.id}@${host}`, `DTSTAMP:${dtstamp}`, `DTSTART:${icsDateTime(start, r.time)}`, `DTEND:${icsDateTime(start, end)}`);
    if (rule) lines.push(rule);
    lines.push(`SUMMARY:${icsEscape(r.title)}`, ...alarm(0, r.title), "END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.map(fold).join("\r\n") + "\r\n";
}
