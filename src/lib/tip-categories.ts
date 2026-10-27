/** Kept apart from the database schema so client components can import it. */
export const TIP_CATEGORIES = ["mentalMath", "memory", "problemSolving", "language", "exam", "study"] as const;
export type TipCategory = (typeof TIP_CATEGORIES)[number];
