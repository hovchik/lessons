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
  // grade 2
  "tie-shoelaces": { emoji: "👟", safety: null },
  "cross-the-road": { emoji: "🚦", safety: "adult" },
  "butter-in-a-jar": { emoji: "🧈", safety: "care" },
  // grade 3
  "find-north": { emoji: "🧭", safety: "care" },
  "cuts-and-nosebleeds": { emoji: "🩹", safety: "ask" },
  "pine-cone-feeder": { emoji: "🐦", safety: "ask" },
};
