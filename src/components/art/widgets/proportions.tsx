"use client";

import { useState } from "react";
import type { Tr } from "@/lib/art/spec";
import { tr } from "@/lib/art/spec";
import type { WidgetProps } from "../art-block";
import { ArtFrame, Chip } from "../frame";
import { UI } from "../labels";

const t = (en: string, hy: string, ru: string): Tr => ({ en, hy, ru });
const AGES: Array<{ name: Tr; heads: number }> = [
  { name: t("1 year", "1 տարեկան", "1 год"), heads: 4 },
  { name: t("6 years", "6 տարեկան", "6 лет"), heads: 5.5 },
  { name: t("12 years", "12 տարեկան", "12 лет"), heads: 6.5 },
  { name: t("adult", "մեծահասակ", "взрослый"), heads: 7.5 },
];

/** Body proportions measured in heads (mode=figure), or a face with guide lines (mode=face). */
export default function Proportions({ spec, lang }: WidgetProps) {
  return spec.opts.mode === "face" ? <Face spec={spec} lang={lang} /> : <Figure spec={spec} lang={lang} />;
}

function Figure({ spec, lang }: WidgetProps) {
  const [k, setK] = useState(3);
  const N = AGES[k].heads;
  const H = 170, top = 14, h = H / N, cx = 150;
  const y = (heads: number) => top + heads * h;
  const crotch = y(N / 2), shoulder = y(1.3), waist = y(N * 0.36), sw = h * 0.95, hw = h * 0.42;
  const knee = (crotch + y(N)) / 2;
  return (
    <ArtFrame kind="experiment" title={UI.proportions[lang]} body={spec.body || UI.propHint[lang]}>
      <div className="art-persp">
        <svg viewBox="0 0 300 200" className="art-scene" aria-hidden="true">
          <rect width="300" height="200" fill="#fffdf7" />
          {Array.from({ length: Math.ceil(N) + 1 }, (_, i) => (
            <g key={i}>
              <line x1="70" y1={y(Math.min(i, N))} x2="230" y2={y(Math.min(i, N))} stroke="#4f46e5" strokeDasharray="4 4" opacity=".5" />
              {i < N ? <text x="62" y={y(i) + Math.min(h, (N - i) * h) / 2 + 4} textAnchor="end" className="art-svg-text" fill="#4f46e5">{i + 1}</text> : null}
            </g>
          ))}
          <g stroke="#f2c4a4" strokeLinecap="round" fill="none">
            <path d={`M${cx - sw + 4} ${shoulder + 4} L${cx - sw - h * 0.1} ${(shoulder + crotch) / 2} L${cx - sw * 0.95} ${crotch + h * 0.15}`} strokeWidth={h * 0.24} />
            <path d={`M${cx + sw - 4} ${shoulder + 4} L${cx + sw + h * 0.1} ${(shoulder + crotch) / 2} L${cx + sw * 0.95} ${crotch + h * 0.15}`} strokeWidth={h * 0.24} />
          </g>
          <g stroke="#1f5fbf" strokeLinecap="round" fill="none" strokeWidth={h * 0.36}>
            <path d={`M${cx - hw * 0.55} ${crotch - 4} L${cx - hw * 0.62} ${knee} L${cx - hw * 0.6} ${y(N) - h * 0.15}`} />
            <path d={`M${cx + hw * 0.55} ${crotch - 4} L${cx + hw * 0.62} ${knee} L${cx + hw * 0.6} ${y(N) - h * 0.15}`} />
          </g>
          <path d={`M${cx - hw * 0.6} ${y(N) - 3} h-${h * 0.35} M${cx + hw * 0.6} ${y(N) - 3} h${h * 0.35}`} stroke="#1e1b4b" strokeWidth={h * 0.16} strokeLinecap="round" />
          <path d={`M${cx - sw} ${shoulder} Q${cx} ${shoulder - h * 0.2} ${cx + sw} ${shoulder} L${cx + sw * 0.72} ${waist} L${cx + hw * 1.1} ${crotch} L${cx - hw * 1.1} ${crotch} L${cx - sw * 0.72} ${waist}Z`} fill="#7d2e8f" />
          <rect x={cx - h * 0.14} y={y(0.9)} width={h * 0.28} height={shoulder - y(0.9)} fill="#f2c4a4" />
          <ellipse cx={cx} cy={y(0.5)} rx={h * 0.4} ry={h * 0.5} fill="#f2c4a4" />
          <path d={`M${cx - h * 0.42} ${y(0.45)} C${cx - h * 0.42} ${y(-0.05)} ${cx + h * 0.42} ${y(-0.05)} ${cx + h * 0.42} ${y(0.45)} C${cx + h * 0.2} ${y(0.2)} ${cx - h * 0.2} ${y(0.2)} ${cx - h * 0.42} ${y(0.45)}Z`} fill="#6b3a1a" />
          <text x="294" y="24" textAnchor="end" className="art-svg-text" fill="#1e1b4b" style={{ fontSize: 14 }}>{N}</text>
          <text x="294" y="38" textAnchor="end" className="art-svg-text" fill="#1e1b4b">{UI.heads[lang]}</text>
        </svg>
        <div className="art-chips">{AGES.map((a, i) => <Chip key={i} active={i === k} onClick={() => setK(i)}>{tr(a.name, lang)}</Chip>)}</div>
      </div>
    </ArtFrame>
  );
}

function Face({ spec, lang }: WidgetProps) {
  const [guides, setGuides] = useState(true);
  return (
    <ArtFrame kind="experiment" title={UI.proportions[lang]} body={spec.body || UI.faceHint[lang]}>
      <div className="art-persp">
        <svg viewBox="0 0 300 200" className="art-scene" aria-hidden="true">
          <rect width="300" height="200" fill="#fffdf7" />
          <ellipse cx="150" cy="100" rx="58" ry="80" fill="#f2c4a4" />
          <path d="M92 90 C92 20 208 20 208 90 C196 50 104 50 92 90Z" fill="#4a2a1a" />
          <path d="M92 100 C82 100 82 134 94 134Z M208 100 C218 100 218 134 206 134Z" fill="#e3a37f" />
          <path d="M116 100 C122 93 134 93 140 100 C134 105 122 105 116 100Z M160 100 C166 93 178 93 184 100 C178 105 166 105 160 100Z" fill="#fff" stroke="#4a2a1a" strokeWidth="1.5" />
          <circle cx="128" cy="100" r="4" fill="#4a2a1a" /><circle cx="172" cy="100" r="4" fill="#4a2a1a" />
          <path d="M112 88 C120 82 134 82 140 86 M160 86 C166 82 180 82 188 88" stroke="#4a2a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M146 104 L142 136 C146 140 154 140 158 136 L154 104" stroke="#c98263" strokeWidth="2" fill="none" />
          <path d="M134 152 C144 160 156 160 166 152 C156 156 144 156 134 152Z" fill="#c9302c" stroke="#c9302c" strokeWidth="2" />
          {guides ? (
            <g stroke="#4f46e5" strokeDasharray="5 4" strokeWidth="1.2" opacity=".8">
              <line x1="150" y1="16" x2="150" y2="184" />
              <line x1="80" y1="100" x2="220" y2="100" />
              <line x1="86" y1="140" x2="214" y2="140" />
              <line x1="96" y1="153" x2="204" y2="153" />
              <line x1="84" y1="20" x2="216" y2="20" /><line x1="84" y1="180" x2="216" y2="180" />
              <path d="M240 20 V100 M236 20 H244 M236 100 H244 M240 100 V180 M236 180 H244" strokeDasharray="none" />
              <text x="248" y="64" className="art-svg-text" fill="#4f46e5" stroke="none">½</text>
              <text x="248" y="144" className="art-svg-text" fill="#4f46e5" stroke="none">½</text>
            </g>
          ) : null}
        </svg>
        <div className="art-chips"><Chip active={guides} onClick={() => setGuides(!guides)}>{UI.guide[lang]}</Chip></div>
      </div>
    </ArtFrame>
  );
}
