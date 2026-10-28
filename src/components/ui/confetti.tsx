const COLORS = ["#4f46e5", "#818cf8", "#ea580c", "#f59e0b", "#15803d", "#e11d48", "#0284c7"];

/**
 * A one-off burst of confetti over a result card. Purely decorative: the parent
 * must be `relative`, and the pieces are hidden when the pupil asks for less motion.
 * The spread is fixed (no Math.random) so server and client render the same markup.
 */
export function Confetti({ pieces = 28 }: { pieces?: number }) {
  return (
    <span className="confetti" aria-hidden="true">
      {Array.from({ length: pieces }, (_, k) => {
        const angle = (k / pieces) * Math.PI * 2 + (k % 3) * 0.35;
        const reach = 90 + ((k * 37) % 90);
        const style = {
          "--x": `${Math.round(Math.cos(angle) * reach * 1.6)}px`,
          "--y": `${Math.round(Math.sin(angle) * reach - 70)}px`,
          "--r": `${((k * 97) % 720) - 360}deg`,
          "--c": COLORS[k % COLORS.length],
          "--d": `${(k % 6) * 25}ms`,
        } as React.CSSProperties;
        return <i key={k} style={style} />;
      })}
    </span>
  );
}
