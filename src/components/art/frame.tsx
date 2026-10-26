"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CircleHelp, Eye, FlaskConical, Footprints, Lightbulb, Palette, PencilLine, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FrameKind = "look" | "experiment" | "steps" | "draw" | "tasks" | "hints" | "palette" | "check";

const KIND: Record<FrameKind, { icon: typeof Eye; tone: string }> = {
  look: { icon: Eye, tone: "art-tone-sky" },
  experiment: { icon: FlaskConical, tone: "art-tone-violet" },
  steps: { icon: Footprints, tone: "art-tone-amber" },
  draw: { icon: PencilLine, tone: "art-tone-rose" },
  tasks: { icon: Sparkles, tone: "art-tone-emerald" },
  hints: { icon: Lightbulb, tone: "art-tone-amber" },
  palette: { icon: Palette, tone: "art-tone-rose" },
  check: { icon: CircleHelp, tone: "art-tone-emerald" },
};

/** The card every visual block sits in: a coloured label, an optional prompt, then the visual. */
export function ArtFrame({
  kind,
  title,
  body,
  children,
  className,
}: {
  kind: FrameKind;
  title: string;
  body?: string;
  children: ReactNode;
  className?: string;
}) {
  const { icon: Icon, tone } = KIND[kind];
  return (
    <figure className={cn("art-frame not-prose", tone, className)}>
      <figcaption className="art-head">
        <span className="art-badge" aria-hidden="true"><Icon className="size-4" /></span>
        <span className="art-title">{title}</span>
      </figcaption>
      {body ? <ArtText className="art-prompt">{body}</ArtText> : null}
      <div className="art-body">{children}</div>
    </figure>
  );
}

export function ArtText({ children, className }: { children: string; className?: string }) {
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}

/** A round tap-friendly toggle button used by the widgets. */
export function Chip({
  active,
  onClick,
  children,
  style,
  label,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
  label?: string;
}) {
  return (
    <button type="button" className={cn("art-chip", active && "is-active")} onClick={onClick} style={style} aria-pressed={active} aria-label={label}>
      {children}
    </button>
  );
}
