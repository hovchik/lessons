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
  // grade 4
  "campfire": { emoji: "🔥", safety: "adult" },
  "useful-knots": { emoji: "🪢", safety: "care" },
  "needle-compass": { emoji: "🧲", safety: "ask" },
  // grade 5
  "river-water": { emoji: "💧", safety: "adult" },
  "map-and-compass": { emoji: "🗺️", safety: "care" },
  "if-you-get-lost": { emoji: "🌲", safety: "care" },
  // grade 6
  "earthquake-safety": { emoji: "🏠", safety: "care" },
  "burn-first-aid": { emoji: "🚿", safety: "ask" },
  "lean-to-shelter": { emoji: "⛺", safety: "ask" },
  // grade 7
  "fire-without-matches": { emoji: "✨", safety: "adult" },
  "pocket-knife": { emoji: "🔪", safety: "adult" },
  "solar-oven": { emoji: "☀️", safety: "ask" },
  // grade 8
  "cpr": { emoji: "🫀", safety: "care" },
  "choking-first-aid": { emoji: "🆘", safety: "care" },
  "thunderstorm-safety": { emoji: "⛈️", safety: "care" },
  // grade 9
  "fix-a-puncture": { emoji: "🚲", safety: "ask" },
  "spot-fake-news": { emoji: "🔍", safety: null },
  "bake-bread": { emoji: "🍞", safety: "ask" },
  // grade 10
  "water-purification": { emoji: "🚰", safety: null },
  "give-a-speech": { emoji: "🎤", safety: null },
  "make-a-budget": { emoji: "💰", safety: null },
};
