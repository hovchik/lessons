"use client";

import { useMemo, useState } from "react";
import { Check as Tick, RotateCcw } from "lucide-react";
import { ArtFrame, ArtText } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Note } from "../kit";
import { L, UI, t } from "../labels";

/**
 * Sort the cards into boxes, one card at a time, written in the lesson's own language:
 *
 *   ```sim
 *   sort
 *   Which pile does each piece of wood go on?
 *   # Tinder | Kindling | Fuel
 *   - Dry grass = 1
 *   - Twigs as thick as a pencil = 2
 *   > Small, dry and fluffy things catch first.
 *   ```
 *
 * `# ` gives the boxes split by `|`, `- text = n` a card for box n (from 1), `>` the explanation
 * shown at the end. Cards come in a fixed mixed order so the page renders the same every time.
 */
export function parseSort(body: string) {
  const q: string[] = [];
  let bins: string[] = [];
  const items: Array<{ text: string; bin: number }> = [];
  const why: string[] = [];
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("# ")) bins = line.slice(2).split("|").map((b) => b.trim()).filter(Boolean);
    else if (/^[-*] /.test(line)) {
      const m = line.slice(2).match(/^(.*?)\s*=\s*(\d+)\s*$/);
      if (m) items.push({ text: m[1].trim(), bin: Number(m[2]) - 1 });
      else items.push({ text: line.slice(2).trim(), bin: -1 });
    } else if (line.startsWith(">")) why.push(line.replace(/^>\s?/, ""));
    else if (!bins.length && !items.length) q.push(raw);
  }
  return { question: q.join("\n").trim(), bins, items, why: why.join(" ").trim() };
}

/** Problems with a sort block, for content:check. */
export function sortProblems(body: string): string[] {
  const { bins, items } = parseSort(body);
  const out: string[] = [];
  if (bins.length < 2 || bins.length > 4) out.push("sort needs 2 to 4 boxes on a '# A | B' line");
  if (items.length < 3) out.push("sort needs at least 3 cards");
  for (const it of items) if (it.bin < 0 || it.bin >= bins.length) out.push(`card "${it.text.slice(0, 30)}" has no box`);
  for (let b = 0; b < bins.length; b++) if (!items.some((it) => it.bin === b)) out.push(`box "${bins[b]}" gets no card`);
  return out;
}

const W = {
  title: t("Sort it out", "Դասավորի՛ր", "Разложи по местам"),
  card: t("Card {i} of {n}: where does it go?", "Քարտ {i}՝ {n}-ից․ որտե՞ղ է դրա տեղը", "Карточка {i} из {n}: куда её положить?"),
  wrong: t("Not that box. Think again!", "Այդ արկղը չէ։ Մի քիչ էլ մտածի՛ր։", "Не в эту коробку. Подумай ещё!"),
  done: t("All sorted!", "Ամեն ինչ իր տեղում է։", "Всё разложено!"),
  firstTry: t("{k} of {n} on the first try.", "{k}-ը {n}-ից՝ առաջին փորձից։", "{k} из {n} с первой попытки."),
};

/** A fixed shuffle (the same on the server and in every browser). */
function mixed<T>(xs: T[]): T[] {
  const out = xs.map((x, i) => ({ x, k: (i * 7 + 3) % 11 + i / 100 }));
  return out.sort((a, b) => a.k - b.k).map((o) => o.x);
}

export default function Sort({ spec, lang }: SimProps) {
  const { question, bins, items, why } = parseSort(spec.body);
  const deck = useMemo(() => mixed(items.map((it, i) => ({ ...it, id: i }))), [items.length]); // eslint-disable-line react-hooks/exhaustive-deps
  const [placed, setPlaced] = useState<number[]>([]);
  const [missed, setMissed] = useState<number[]>([]);
  const [wrongBin, setWrongBin] = useState<number | null>(null);
  const [tries, setTries] = useState(0);
  const cur = deck[placed.length];
  const done = !cur;
  const fmt = (s: ReturnType<typeof t>, v: Record<string, number>) => L(s, lang).replace(/\{(\w+)\}/g, (_, k) => String(v[k]));

  const choose = (b: number) => {
    if (!cur) return;
    if (b === cur.bin) {
      setPlaced((p) => [...p, cur.id]);
      setWrongBin(null);
    } else {
      setWrongBin(b);
      setTries((n) => n + 1);
      setMissed((m) => (m.includes(cur.id) ? m : [...m, cur.id]));
    }
  };
  const reset = () => {
    setPlaced([]);
    setMissed([]);
    setWrongBin(null);
  };

  return (
    <ArtFrame kind="sort" title={L(W.title, lang)} body={question || undefined}>
      {!done ? (
        <div className="howto-sort-now">
          <span className="art-step-num">{fmt(W.card, { i: placed.length + 1, n: deck.length })}</span>
          <div key={`${cur.id}-${tries}`} className={cn("howto-sort-card fx-pop", wrongBin !== null && "fx-wrong")}>
            <ArtText>{cur.text}</ArtText>
          </div>
        </div>
      ) : null}
      <div className="howto-sort-bins" style={{ gridTemplateColumns: `repeat(${bins.length}, minmax(0, 1fr))` }}>
        {bins.map((b, k) => (
          <button key={k} type="button" className={cn("howto-sort-bin", wrongBin === k && "is-wrong")} onClick={() => choose(k)} disabled={done}>
            <span className="howto-sort-bin-name">{b}</span>
            <ul>
              {deck
                .filter((it) => it.bin === k && placed.includes(it.id))
                .map((it) => (
                  <li key={it.id} className="fx-pop">
                    <Tick className="size-3.5 shrink-0" strokeWidth={3} aria-hidden="true" />
                    <span>{it.text}</span>
                  </li>
                ))}
            </ul>
          </button>
        ))}
      </div>
      {wrongBin !== null && !done ? <Note tone="bad">{L(W.wrong, lang)}</Note> : null}
      {done ? (
        <Note tone="good">
          <b>{L(W.done, lang)}</b> {fmt(W.firstTry, { k: deck.length - missed.length, n: deck.length })} {why}
        </Note>
      ) : null}
      {placed.length ? (
        <div className="art-row">
          <button type="button" className="art-btn" onClick={reset}>
            <RotateCcw className="size-4" aria-hidden="true" />
            {L(UI.retry, lang)}
          </button>
        </div>
      ) : null}
    </ArtFrame>
  );
}
