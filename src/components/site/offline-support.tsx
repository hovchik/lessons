"use client";

import { useEffect } from "react";
import { notifyChanged } from "@/lib/live";
import { dropOutbox, flushOutbox, settleOutbox } from "@/lib/outbox";

const OWNER = "lessons-device-owner";

function clearPages() {
  try {
    navigator.serviceWorker?.controller?.postMessage({ type: "clear-pages" });
  } catch {
    // No service worker: nothing kept.
  }
}

/**
 * Registers the service worker (public/sw.js) and sends answers kept while offline. Renders nothing.
 *
 * Pages kept offline show the account they were opened with, and waiting answers belong to it.
 * When another account (or nobody) is signed in now, without a log-out on this device in between
 * (the cookie ran out, or the password was changed elsewhere), both are forgotten first.
 */
export function OfflineSupport({ userId }: { userId: string | null }) {
  useEffect(() => {
    // Offline the page may itself come from the cache, so only a page from the server decides.
    if (!navigator.onLine) return;
    let owner: string | null = null;
    try {
      owner = localStorage.getItem(OWNER);
      if (userId) localStorage.setItem(OWNER, userId);
      else localStorage.removeItem(OWNER);
    } catch {
      return;
    }
    if (owner && owner !== userId) {
      dropOutbox();
      clearPages();
    }
  }, [userId]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
    const flush = () =>
      flushOutbox().then((n) => {
        if (n > 0) notifyChanged();
      });
    flush();
    window.addEventListener("online", flush);
    return () => window.removeEventListener("online", flush);
  }, []);
  return null;
}

/**
 * On log-out: sends or drops the answers still waiting, and forgets the pages kept for
 * offline use, so the next person on this device sees neither.
 */
export async function leaveOffline() {
  await settleOutbox();
  clearPages();
}
