import type { VisualMap } from "..";
import { grade5 } from "./grade-5";
import { grade6 } from "./grade-6";
import { grade7 } from "./grade-7";
import { grade8 } from "./grade-8";
import { grade9 } from "./grade-9";
import { grade10 } from "./grade-10";
import { grade11 } from "./grade-11";

/**
 * Church history 5–11: labelled pictures (the Bible as a library, the six days, Abraham's family, the two tablets, the four Evangelists, the sower, Holy Week, the fifty days of Easter, a map of the apostles' Armenia, Gregory's family, three church plans, a medieval monastery, the four sees, the Trinity, the seven sacraments, a church plan, the church year, a khachkar, Khrimian's paper ladle, faith, hope and love, a wedding, the road to Jericho), timelines (when countries became Christian, the councils, where the catholicos lived, the Church under Russia, through the Genocide, in Soviet times and since independence, dialogue between churches),
 * bar charts (the size of Noah's ark, the books of the prophets, the translators' journeys, followers of the world's religions), plus a "Look closer" section for every lesson
 * in English, Armenian and Russian.
 */
export const churchHistoryVisuals: VisualMap = {
  5: grade5,
  6: grade6,
  7: grade7,
  8: grade8,
  9: grade9,
  10: grade10,
  11: grade11,
};
