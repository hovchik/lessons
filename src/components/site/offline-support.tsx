"use client";

import { useEffect } from "react";
import { notifyChanged } from "@/lib/live";
import { flushOutbox, settleOutbox } from "@/lib/outbox";

/** Registers the service worker (public/sw.js) and sends answers kept while offline. Renders nothing. */
export function OfflineSupport() {
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
  try {
    navigator.serviceWorker?.controller?.postMessage({ type: "clear-pages" });
  } catch {
    // No service worker: nothing kept.
  }
}
