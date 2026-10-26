import type { VisualBlock } from ".";

/**
 * Extra explanation for a lesson, in all three languages, under a "Look closer" heading.
 * Write it as Markdown (KaTeX allowed, as in lesson bodies). Placed before the exercises.
 */
export function closer(en: string, hy: string, ru: string): VisualBlock {
  return {
    md: {
      en: `### 🔎 Look closer\n\n${en.trim()}`,
      hy: `### 🔎 Ավելի մանրամասն\n\n${hy.trim()}`,
      ru: `### 🔎 Подробнее\n\n${ru.trim()}`,
    },
  };
}

/** A short "did you know" fact as a highlighted quote, placed before the exercises. */
export function fact(en: string, hy: string, ru: string): VisualBlock {
  const q = (head: string, s: string) => `> 💡 **${head}** ${s.trim().replace(/\n+/g, " ")}`;
  return { md: { en: q("Did you know?", en), hy: q("Հետաքրքիր է իմանալ։", hy), ru: q("Интересно знать.", ru) } };
}
