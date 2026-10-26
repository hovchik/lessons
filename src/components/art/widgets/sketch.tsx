"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Eraser, Grid3x3, Trash2, Undo2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WidgetProps } from "../art-block";
import { ArtFrame } from "../frame";
import { UI } from "../labels";

type Pt = [number, number];
type Stroke = { color: string; size: number; pts: Pt[] };

const PAPERS: Record<string, string> = {
  white: "#ffffff", cream: "#fbf3e2", dark: "#1c2f5e", black: "#141418", blue: "#d6ecfb", grey: "#d9d9de", pink: "#fde4ea",
};
const INKS = ["#1e1b4b", "#e0262f", "#ff8a1f", "#ffd21f", "#2f9e44", "#4fb3e8", "#1f5fbf", "#7d2e8f", "#8b5a2b", "#f48fb1", "#9ca3af", "#ffffff"];
const SIZES = [4, 10, 22];

/**
 * A drawing board. mode=free|mirror|kaleido|strip|frames|blot, guide=horizon|thirds|face|figure|circle|grid|vp|vp2|frame|axis,
 * paper=white|cream|dark|black|blue|grey|pink, n=6 for the kaleidoscope, cells=6 for the strip and the frames.
 */
export default function Sketch({ spec, lang }: WidgetProps) {
  const mode = spec.opts.mode ?? "free";
  const strip = mode === "strip";
  // frames: the same wide board split into cells, but nothing repeats (a storyboard, a panorama in parts).
  const wide = strip || mode === "frames";
  const W = wide ? 960 : 800;
  const H = wide ? 240 : 600;
  const paper = PAPERS[spec.opts.paper ?? "white"] ?? spec.opts.paper ?? "#fff";
  const dark = ["dark", "black"].includes(spec.opts.paper ?? "");
  const n = Math.max(2, Math.min(12, Number(spec.opts.n ?? 6)));
  const cells = Math.max(2, Math.min(10, Number(spec.opts.cells ?? 6)));
  const guide = spec.opts.guide ?? (mode === "mirror" || mode === "blot" ? "axis" : mode === "kaleido" ? "kaleido" : wide ? "cells" : "");

  const canvas = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const current = useRef<Stroke | null>(null);
  const [color, setColor] = useState(dark ? "#ffffff" : mode === "blot" ? "#7d2e8f" : "#1e1b4b");
  const [size, setSize] = useState(mode === "blot" ? SIZES[2] : SIZES[0]);
  const [erase, setErase] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [count, setCount] = useState(0);

  const copies = useCallback(
    ([x, y]: Pt): Pt[] => {
      if (mode === "mirror") return [[x, y], [W - x, y]];
      if (mode === "kaleido") {
        const cx = W / 2, cy = H / 2, dx = x - cx, dy = y - cy, out: Pt[] = [];
        for (let k = 0; k < n; k++) {
          const a = (2 * Math.PI * k) / n, c = Math.cos(a), s = Math.sin(a);
          out.push([cx + dx * c - dy * s, cy + dx * s + dy * c]);
          out.push([cx + dx * c + dy * s, cy + dx * s - dy * c]);
        }
        return out;
      }
      if (strip) {
        const tw = W / cells, lx = ((x % tw) + tw) % tw;
        return Array.from({ length: cells }, (_, k) => [lx + k * tw, y] as Pt);
      }
      return [[x, y]];
    },
    [mode, W, H, n, cells, strip],
  );

  const paint = useCallback(
    (ctx: CanvasRenderingContext2D, s: Stroke, from = 1) => {
      ctx.strokeStyle = s.color;
      ctx.fillStyle = s.color;
      ctx.lineWidth = s.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const pts = s.pts;
      if (pts.length === 1 && from <= 1) {
        for (const [x, y] of copies(pts[0])) { ctx.beginPath(); ctx.arc(x, y, s.size / 2, 0, Math.PI * 2); ctx.fill(); }
        return;
      }
      for (let i = Math.max(1, from); i < pts.length; i++) {
        const a = copies(pts[i - 1]), b = copies(pts[i]);
        ctx.beginPath();
        a.forEach((p, k) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(b[k][0], b[k][1]); });
        ctx.stroke();
      }
    },
    [copies],
  );

  const redraw = useCallback(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, W, H);
    for (const s of strokes.current) {
      if (s.color === "fold") foldPaper(ctx, W, H);
      else paint(ctx, s);
    }
  }, [paint, paper, W, H]);

  useEffect(() => { redraw(); }, [redraw]);

  const point = (e: React.PointerEvent): Pt => {
    const r = canvas.current!.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  };
  const down = (e: React.PointerEvent) => {
    e.preventDefault();
    canvas.current?.setPointerCapture(e.pointerId);
    current.current = { color: erase ? paper : color, size: erase ? size * 2 : size, pts: [point(e)] };
    const ctx = canvas.current?.getContext("2d");
    if (ctx) paint(ctx, current.current);
  };
  const move = (e: React.PointerEvent) => {
    const s = current.current;
    if (!s) return;
    s.pts.push(point(e));
    const ctx = canvas.current?.getContext("2d");
    if (ctx) paint(ctx, s, s.pts.length - 1);
  };
  const up = () => {
    if (current.current) {
      strokes.current.push(current.current);
      current.current = null;
      setCount(strokes.current.length);
    }
  };
  const undo = () => { strokes.current.pop(); setCount(strokes.current.length); redraw(); };
  const clear = () => { strokes.current = []; setCount(0); redraw(); };
  const fold = () => {
    strokes.current.push({ color: "fold", size: 0, pts: [] });
    setCount(strokes.current.length);
    redraw();
  };
  const download = () => {
    const url = canvas.current?.toDataURL("image/png");
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-drawing.png";
    a.click();
  };

  const hint = mode === "mirror" ? UI.mirrorHint : mode === "kaleido" ? UI.kaleidoHint : strip ? UI.stripHint : wide ? UI.framesHint : mode === "blot" ? UI.blotHint : null;
  const guideStroke = dark ? "rgba(255,255,255,.45)" : "rgba(79,70,229,.45)";

  return (
    <ArtFrame kind="draw" title={UI.sketch[lang]} body={spec.body}>
      <div className="art-sketch">
        {hint ? <p className="art-note">{hint[lang]}</p> : null}
        <div className="art-board" style={{ aspectRatio: `${W} / ${H}` }}>
          <canvas
            ref={canvas}
            width={W}
            height={H}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
            aria-label={UI.sketch[lang]}
          />
          {guide && showGuide ? <Guide kind={guide} W={W} H={H} stroke={guideStroke} n={n} cells={cells} /> : null}
        </div>
        <div className="art-tools">
          <div className="art-inks" role="group" aria-label={UI.colours[lang]}>
            {INKS.filter((c) => (dark ? c !== "#1e1b4b" : true)).map((c) => (
              <button key={c} type="button" className={cn("art-ink", !erase && c === color && "is-active")} style={{ background: c }} onClick={() => { setColor(c); setErase(false); }} aria-label={c} aria-pressed={!erase && c === color} />
            ))}
          </div>
          <div className="art-row">
            <div className="art-sizes" role="group" aria-label={UI.brush[lang]}>
              {SIZES.map((s) => (
                <button key={s} type="button" className={cn("art-size", size === s && "is-active")} onClick={() => setSize(s)} aria-label={`${UI.brush[lang]} ${s}`} aria-pressed={size === s}>
                  <span style={{ width: Math.max(4, s * 0.8), height: Math.max(4, s * 0.8) }} />
                </button>
              ))}
            </div>
            <ToolBtn on={erase} onClick={() => setErase(!erase)} label={UI.eraser[lang]}><Eraser className="size-4" /></ToolBtn>
            {guide ? <ToolBtn on={showGuide} onClick={() => setShowGuide(!showGuide)} label={UI.guide[lang]}><Grid3x3 className="size-4" /></ToolBtn> : null}
            <ToolBtn onClick={undo} label={UI.undo[lang]} disabled={!count}><Undo2 className="size-4" /></ToolBtn>
            <ToolBtn onClick={clear} label={UI.clear[lang]} disabled={!count}><Trash2 className="size-4" /></ToolBtn>
            <ToolBtn onClick={download} label={UI.save[lang]}><Download className="size-4" /></ToolBtn>
          </div>
          {mode === "blot" ? (
            <button type="button" className="art-btn is-primary art-wide" onClick={fold} disabled={!count}>{UI.fold[lang]}</button>
          ) : null}
        </div>
      </div>
    </ArtFrame>
  );
}

function ToolBtn({ on, onClick, label, disabled, children }: { on?: boolean; onClick: () => void; label: string; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button type="button" className={cn("art-tool", on && "is-active")} onClick={onClick} aria-label={label} title={label} disabled={disabled} aria-pressed={on}>
      {children}
    </button>
  );
}

/** Prints the left half onto the right half, like folding a sheet with wet paint. */
function foldPaper(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const left = ctx.getImageData(0, 0, W / 2, H);
  const tmp = document.createElement("canvas");
  tmp.width = W / 2;
  tmp.height = H;
  tmp.getContext("2d")!.putImageData(left, 0, 0);
  ctx.save();
  ctx.globalAlpha = 0.92;
  ctx.filter = "blur(1.2px)";
  ctx.translate(W, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(tmp, 0, 0);
  ctx.restore();
}

function Guide({ kind, W, H, stroke, n, cells }: { kind: string; W: number; H: number; stroke: string; n: number; cells: number }) {
  const p = { stroke, strokeWidth: 2, fill: "none", strokeDasharray: "8 8", vectorEffect: "non-scaling-stroke" as const };
  let g: React.ReactNode = null;
  switch (kind) {
    case "axis": g = <line x1={W / 2} y1={0} x2={W / 2} y2={H} {...p} />; break;
    case "horizon": g = <line x1={0} y1={H * 0.45} x2={W} y2={H * 0.45} {...p} />; break;
    case "thirds": g = <>{[1, 2].map((k) => <line key={`v${k}`} x1={(W * k) / 3} y1={0} x2={(W * k) / 3} y2={H} {...p} />)}{[1, 2].map((k) => <line key={`h${k}`} x1={0} y1={(H * k) / 3} x2={W} y2={(H * k) / 3} {...p} />)}</>; break;
    case "grid": g = <>{Array.from({ length: 7 }, (_, k) => <line key={`v${k}`} x1={(W * (k + 1)) / 8} y1={0} x2={(W * (k + 1)) / 8} y2={H} {...p} />)}{Array.from({ length: 5 }, (_, k) => <line key={`h${k}`} x1={0} y1={(H * (k + 1)) / 6} x2={W} y2={(H * (k + 1)) / 6} {...p} />)}</>; break;
    case "circle": g = <circle cx={W / 2} cy={H / 2} r={H * 0.42} {...p} />; break;
    case "frame": g = <rect x={W * 0.06} y={H * 0.08} width={W * 0.88} height={H * 0.84} rx={12} {...p} />; break;
    case "cells": g = <>{Array.from({ length: cells - 1 }, (_, k) => <line key={k} x1={(W * (k + 1)) / cells} y1={0} x2={(W * (k + 1)) / cells} y2={H} {...p} />)}</>; break;
    case "kaleido": g = <>{Array.from({ length: n }, (_, k) => { const a = (2 * Math.PI * k) / n - Math.PI / 2; return <line key={k} x1={W / 2} y1={H / 2} x2={W / 2 + Math.cos(a) * H} y2={H / 2 + Math.sin(a) * H} {...p} />; })}</>; break;
    case "vp": {
      const vx = W / 2, vy = H * 0.42;
      g = <><line x1={0} y1={vy} x2={W} y2={vy} {...p} />{[[0, H], [W, H], [0, 0], [W, 0], [W * 0.3, H], [W * 0.7, H]].map(([x, y], k) => <line key={k} x1={vx} y1={vy} x2={x} y2={y} {...p} />)}<circle cx={vx} cy={vy} r={6} fill={stroke} /></>;
      break;
    }
    case "vp2": {
      const vy = H * 0.4;
      g = <><line x1={0} y1={vy} x2={W} y2={vy} {...p} /><circle cx={W * 0.06} cy={vy} r={6} fill={stroke} /><circle cx={W * 0.94} cy={vy} r={6} fill={stroke} />{[H * 0.15, H * 0.95].map((y, k) => <g key={k}><line x1={W * 0.06} y1={vy} x2={W * 0.5} y2={y} {...p} /><line x1={W * 0.94} y1={vy} x2={W * 0.5} y2={y} {...p} /></g>)}<line x1={W * 0.5} y1={H * 0.15} x2={W * 0.5} y2={H * 0.95} {...p} /></>;
      break;
    }
    case "face": {
      const cx = W / 2, cy = H / 2, rx = H * 0.3, ry = H * 0.42;
      g = <><ellipse cx={cx} cy={cy} rx={rx} ry={ry} {...p} /><line x1={cx} y1={cy - ry} x2={cx} y2={cy + ry} {...p} /><line x1={cx - rx} y1={cy} x2={cx + rx} y2={cy} {...p} /><line x1={cx - rx * 0.8} y1={cy + ry / 2} x2={cx + rx * 0.8} y2={cy + ry / 2} {...p} /><line x1={cx - rx * 0.6} y1={cy + ry * 0.67} x2={cx + rx * 0.6} y2={cy + ry * 0.67} {...p} /></>;
      break;
    }
    case "figure": {
      const h = H * 0.9 / 7.5, cx = W / 2, top = H * 0.05;
      g = <>{Array.from({ length: 8 }, (_, k) => <line key={k} x1={cx - 140} y1={top + k * h} x2={cx + 140} y2={top + k * h} {...p} />)}<ellipse cx={cx} cy={top + h / 2} rx={h * 0.36} ry={h / 2} {...p} /><line x1={cx} y1={top} x2={cx} y2={top + 7.5 * h} {...p} /></>;
      break;
    }
  }
  return (
    <svg className="art-guide" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">{g}</svg>
  );
}

