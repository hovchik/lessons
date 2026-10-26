"use client";

import { Brush, Eye, Lightbulb, Palette, PencilLine, Scissors, Star } from "lucide-react";
import type { WidgetProps } from "../art-block";
import { ArtFrame, ArtText } from "../frame";
import { UI } from "../labels";

const ICONS = [PencilLine, Palette, Eye, Brush, Scissors, Lightbulb, Star];
const TONES = ["#fde68a", "#fbcfe8", "#bfdbfe", "#bbf7d0", "#ddd6fe", "#fed7aa", "#a5f3fc"];

/** The lesson's exercises as colourful task cards. The body is a numbered Markdown list. */
export default function Tasks({ spec, lang }: WidgetProps) {
  const items = spec.body.split(/\n(?=\d+\.\s)/).map((s) => s.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  return (
    <ArtFrame kind="tasks" title={UI.tasks[lang]}>
      <ol className="art-tasks">
        {items.map((text, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <li key={i} className="art-task" style={{ ["--task" as string]: TONES[i % TONES.length] }}>
              <span className="art-task-icon" aria-hidden="true"><Icon className="size-5" /></span>
              <span className="art-task-num">{i + 1}</span>
              <ArtText className="art-task-text">{text}</ArtText>
            </li>
          );
        })}
      </ol>
    </ArtFrame>
  );
}
