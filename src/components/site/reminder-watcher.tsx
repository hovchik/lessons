"use client";

import { Bell, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { onChanged } from "@/lib/live";
import { alarmsBetween, GRACE_MS, type Alarm, type Entry, type Reminder } from "@/lib/schedule";
import { pick } from "@/lib/utils";
import type { I18nText } from "@/server/db/schema";

/**
 * Shows the pupil's reminders when their time comes, on whatever page of the
 * app is open: a card in the corner, and (if they allowed notifications) a
 * system notification when the tab is in the background.
 *
 * The browser decides when a reminder is due, from its own clock, because the
 * times are wall-clock times in the pupil's zone. Nothing can fire while the
 * app is closed: for that the schedule page offers a calendar file.
 */

const FIRED_KEY = "lessons:reminders-fired";
const KEEP_MS = 2 * 86_400_000;
const MAX_TOASTS = 3;
const RELOAD_MS = 10 * 60_000;

/** Which reminders this device has already shown (so two tabs, or a reload, don't repeat one). */
function readFired(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(FIRED_KEY) ?? "{}") as Record<string, number>;
  } catch {
    return {};
  }
}

/** Marks a reminder shown; false if another tab got there first. */
function claim(key: string, now: number) {
  const fired = readFired();
  if (fired[key]) return false;
  for (const k of Object.keys(fired)) if (now - fired[k] > KEEP_MS) delete fired[k];
  fired[key] = now;
  try {
    localStorage.setItem(FIRED_KEY, JSON.stringify(fired));
  } catch {
    // Private mode: the reminder still shows, it may repeat in another tab.
  }
  return true;
}

/** A system notification, through the service worker where there is one (phones need that). */
export async function showSystemNotification(title: string, body: string, tag: string, url: string) {
  try {
    if (typeof Notification === "undefined" || Notification.permission !== "granted") return false;
    const options = { body, tag, icon: "/icons/icon-192.png", badge: "/icons/icon-192.png", data: { url } };
    const reg = await navigator.serviceWorker?.getRegistration();
    if (reg) await reg.showNotification(title, options);
    else new Notification(title, options);
    return true;
  } catch {
    return false;
  }
}

type Toast = { key: string; title: string; body: string };
/** What /api/schedule answers: the classes, the reminders and the names of the subjects the classes use. */
type Schedule = { entries: Entry[]; reminders: Reminder[]; names: Record<string, I18nText> };

/** `account` is the signed-in user's id (null for a guest), so a change of account starts the watcher afresh. */
export function ReminderWatcher({ account }: { account: string | null }) {
  const t = useTranslations("schedule");
  const locale = useLocale();
  const data = useRef<Schedule | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const loadedAt = useRef(0);
  const generation = useRef(0);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const text = useCallback(
    (a: Alarm): Toast => {
      if (a.entry) {
        const title = a.title || pick(data.current?.names[a.entry.subjectId ?? ""], locale) || t("untitled");
        return { key: a.key, title, body: [t("toastClass", { time: a.entry.start }), a.entry.place].filter(Boolean).join(" · ") };
      }
      const hhmm = `${String(a.at.getHours()).padStart(2, "0")}:${String(a.at.getMinutes()).padStart(2, "0")}`;
      return { key: a.key, title: a.title, body: hhmm };
    },
    [t, locale],
  );

  const check = useCallback(() => {
    clearTimeout(timer.current);
    const d = data.current;
    if (!d || !d.reminders.length) return;
    const now = new Date();
    const due = alarmsBetween(d.reminders, d.entries, new Date(now.getTime() - GRACE_MS), now);
    const fresh: Toast[] = [];
    for (const a of due) {
      if (!claim(a.key, now.getTime())) continue;
      const toast = text(a);
      fresh.push(toast);
      if (document.visibilityState !== "visible") void showSystemNotification(toast.title, toast.body, a.key, `/${locale}/schedule`);
    }
    if (fresh.length) {
      setToasts((list) => [...list, ...fresh].slice(-MAX_TOASTS));
      // Browsers refuse (and log) a buzz before the first tap on the page.
      if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.(200);
    }
    // Wake for the next one, or look again in a minute (a background tab's timers run late).
    const next = alarmsBetween(d.reminders, d.entries, new Date(now.getTime() + 1), new Date(now.getTime() + 86_400_000))[0];
    const wait = next ? Math.min(next.at.getTime() - now.getTime() + 500, 60_000) : 60_000;
    timer.current = setTimeout(check, Math.max(wait, 1000));
  }, [locale, text]);

  const load = useCallback(async () => {
    // Only the newest request of the account that is signed in now may answer: a slow earlier one
    // must not undo a later change, and one sent before a log-out must not bring the reminders back.
    const mine = ++generation.current;
    try {
      const res = await fetch("/api/schedule", { cache: "no-store" });
      if (!res.ok) return;
      const next = (await res.json()) as Schedule;
      if (mine !== generation.current) return;
      const prev = data.current;
      if (prev) {
        // A reminder just added or moved to a time a few minutes ago is not news: it waits for its next turn.
        const now = new Date();
        const from = new Date(now.getTime() - GRACE_MS);
        const known = new Set(alarmsBetween(prev.reminders, prev.entries, from, now).map((a) => a.key));
        for (const a of alarmsBetween(next.reminders, next.entries, from, now)) if (!known.has(a.key)) claim(a.key, now.getTime());
      }
      data.current = next;
      loadedAt.current = Date.now();
      check();
    } catch {
      // Offline: the reminders read earlier keep working.
    }
  }, [check]);

  useEffect(() => {
    // Signed out, or another account signed in on this device: forget what was read and what is showing.
    generation.current++;
    data.current = null;
    clearTimeout(timer.current);
    setToasts([]);
    if (!account) return;
    void load();
    const off = onChanged((change) => change.schedule && void load());
    // Back on the tab: show what came due, and after a while away read the reminders again (another device may have changed them).
    const onVisible = () => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - loadedAt.current > RELOAD_MS) void load();
      else check();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      off();
      document.removeEventListener("visibilitychange", onVisible);
      clearTimeout(timer.current);
    };
  }, [account, load, check]);

  if (!toasts.length) return null;
  const drop = (key: string) => setToasts((list) => list.filter((x) => x.key !== key));
  return (
    <div className="pointer-events-none fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-50 flex flex-col items-end gap-2 md:inset-x-auto md:bottom-6 md:right-6" role="region" aria-label={t("remindersTitle")}>
      {toasts.map((x) => (
        <div key={x.key} role="alert" className="fx-in clay pointer-events-auto flex w-full max-w-sm items-start gap-3 border-2 border-primary/30 p-3 sm:p-4">
          <span className="fx-pop grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-clay-sm">
            <Bell className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-extrabold leading-snug">{x.title}</p>
            <p className="text-sm text-muted-foreground">{x.body}</p>
            <Link href="/schedule" onClick={() => drop(x.key)} className="mt-1 inline-flex min-h-9 items-center text-sm font-bold text-primary hover:underline">
              {t("toastOpen")}
            </Link>
          </div>
          <button type="button" onClick={() => drop(x.key)} aria-label={t("toastDismiss")} className="grid size-11 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-muted">
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}
