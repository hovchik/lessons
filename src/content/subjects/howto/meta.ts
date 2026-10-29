/**
 * The look of each how-to lesson on the hub page: its emoji and how much an adult has to be
 * involved (see widgets/safety.tsx). Kept apart from the lesson texts so pages can import it cheaply;
 * the lesson builder checks that every lesson is listed here and that its safety blocks agree.
 */
export type Safety = "adult" | "ask" | "care";
export type HowtoMeta = { emoji: string; safety: Safety | null };

export const HOWTO_META: Record<string, HowtoMeta> = {
  // grade 1
  "wash-your-hands": { emoji: "🧼", safety: null },
  "call-for-help": { emoji: "📞", safety: "care" },
  "grow-a-bean": { emoji: "🌱", safety: null },
};
