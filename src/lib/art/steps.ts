import { STEPS_1, type Step, type StepGuide } from "./steps-1";
import { STEPS_2 } from "./steps-2";

export type { Step, StepGuide };

/** All step-by-step guides for the `steps` block, by id. */
export const STEPS: Record<string, StepGuide> = { ...STEPS_1, ...STEPS_2 };
