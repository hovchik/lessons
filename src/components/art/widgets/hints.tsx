"use client";

import { Lightbulb } from "lucide-react";
import type { WidgetProps } from "../art-block";
import { ArtText } from "../frame";
import { UI } from "../labels";

/** Answers and ideas, folded away so pupils try the tasks first. */
export default function Hints({ spec, lang }: WidgetProps) {
  return (
    <details className="art-hints not-prose">
      <summary>
        <Lightbulb className="size-5" aria-hidden="true" />
        <span>{UI.showHints[lang]}</span>
      </summary>
      <ArtText className="art-hints-body">{spec.body}</ArtText>
    </details>
  );
}
