import type { VisualMap } from "..";
import { grade5 } from "./grade-5";
import { grade6 } from "./grade-6";
import { grade7 } from "./grade-7";
import { grade8 } from "./grade-8";
import { grade9 } from "./grade-9";

/**
 * Informatics 5–12: labelled pictures (the computer, a home network, a flowchart, the memory
 * pyramid, a neural network, a web address, an HTML element, the CSS box, the operating system, two linked tables),
 * step-by-step animations (loading a website, packets, the processor's cycle, HTTPS, a stack and a
 * queue), hands-on widgets (binary, colours and text codes, passwords, a Scratch-style cat, a
 * spreadsheet, sorting and searching, logic gates, graphs, ciphers, compression, Python traces,
 * an SQL query builder, mean and median, a misleading graph, a neuron and nearest neighbours), real-data bars and timelines, plus a "Look closer" section for
 * every lesson in English, Armenian and Russian.
 */
export const informaticsVisuals: VisualMap = {
  5: grade5,
  6: grade6,
  7: grade7,
  8: grade8,
  9: grade9,
};
