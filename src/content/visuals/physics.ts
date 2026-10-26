import type { VisualMap } from ".";

export const physicsVisuals: VisualMap = {
  7: {
    speed: ["motion mode=uniform"],
    "distance-time-graphs": ["motion mode=accel"],
  },
  8: {
    "resistance-ohms-law": ["circuit mode=ohm"],
    "series-parallel": ["circuit mode=series", "circuit mode=parallel"],
  },
};
