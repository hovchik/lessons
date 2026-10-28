import { Fragment } from "react";

/**
 * Plain calculation text drawn nicely: "3/4" becomes a stacked fraction and
 * a decimal point becomes a comma in Armenian and Russian.
 */
export function MathText({ text, locale }: { text: string; locale: string }) {
  const comma = locale !== "en";
  const parts = text.split(/(\d+\/\d+)/);
  return (
    <>
      {parts.map((p, i) => {
        const m = /^(\d+)\/(\d+)$/.exec(p);
        if (m) return <Frac key={i} n={m[1]} d={m[2]} />;
        return <Fragment key={i}>{comma ? p.replace(/(\d)\.(\d)/g, "$1,$2") : p}</Fragment>;
      })}
    </>
  );
}

export function Frac({ n, d }: { n: string; d: string }) {
  return (
    <span className="mx-0.5 inline-flex flex-col items-center align-middle text-[0.8em] leading-none" role="math" aria-label={`${n}/${d}`}>
      <span className="px-0.5">{n}</span>
      <span className="my-[0.08em] h-[0.08em] min-h-[2px] w-full rounded bg-current" aria-hidden="true" />
      <span className="px-0.5">{d}</span>
    </span>
  );
}
