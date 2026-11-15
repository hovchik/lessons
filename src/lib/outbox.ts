/**
 * Answers sent while offline wait here (in this browser) and go out when the
 * connection is back: on the "online" event and on the next page load. Only
 * for saves whose reply the page can do without (a finished quiz, a lesson
 * marked done); answers that need the server's verdict are not queued.
 */
const KEY = "lessons-outbox";
type Entry = { url: string; body: unknown; at: number };
const WEEK = 7 * 24 * 60 * 60 * 1000;

function read(): Entry[] {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) ?? "[]") as Entry[];
    return Array.isArray(list) ? list.filter((e) => Date.now() - e.at < WEEK) : [];
  } catch {
    return [];
  }
}
function write(list: Entry[]) {
  try {
    if (list.length) localStorage.setItem(KEY, JSON.stringify(list.slice(-50)));
    else localStorage.removeItem(KEY);
  } catch {
    // Private mode or full storage: the answer is lost, as it was before.
  }
}

const post = (url: string, body: unknown) => fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });

/**
 * Posts now, or keeps it for later when the network is down. Returns the response,
 * or "queued". A server error is not queued: sending it again would fail the same way.
 */
export async function postOrQueue(url: string, body: unknown): Promise<Response | "queued"> {
  try {
    return await post(url, body);
  } catch {
    write([...read(), { url, body, at: Date.now() }]);
    return "queued";
  }
}

export const pendingCount = () => read().length;

/**
 * On log-out: what is waiting belongs to the account that is leaving, so it is sent
 * now if it can be, and otherwise dropped rather than saved to the next account.
 */
export async function settleOutbox() {
  await flushOutbox();
  write([]);
}

/** Forgets what is waiting without sending it: it belongs to an account that is no longer signed in here. */
export function dropOutbox() {
  write([]);
}

let flushing = false;
/** Sends what is waiting, oldest first; stops at the first network failure. Returns how many went. */
export async function flushOutbox(): Promise<number> {
  if (flushing) return 0;
  flushing = true;
  let sent = 0;
  try {
    let list = read();
    while (list.length) {
      try {
        await post(list[0].url, list[0].body);
      } catch {
        break;
      }
      sent++;
      list = list.slice(1);
      write(list);
    }
  } finally {
    flushing = false;
  }
  return sent;
}
