"use client";

import { useEffect, useRef, useState } from "react";

/** Minimal 3D for molecules, crystals and solids: turn by dragging, orthographic projection. */

export type V3 = { x: number; y: number; z: number };
export type Rot = { yaw: number; pitch: number };

export function rotate(p: V3, r: Rot): V3 {
  const cy = Math.cos(r.yaw), sy = Math.sin(r.yaw);
  const x1 = p.x * cy + p.z * sy;
  const z1 = -p.x * sy + p.z * cy;
  const cp = Math.cos(r.pitch), sp = Math.sin(r.pitch);
  return { x: x1, y: p.y * cp - z1 * sp, z: p.y * sp + z1 * cp };
}

/** Screen position (y down) and depth (bigger = nearer) of a point. */
export function project(p: V3, r: Rot, scale: number, cx: number, cy: number) {
  const q = rotate(p, r);
  return { x: cx + q.x * scale, y: cy - q.y * scale, z: q.z };
}

/**
 * Drag to turn; turns slowly by itself until the first touch (unless `auto` is false).
 * Respects prefers-reduced-motion.
 */
export function useOrbit(init: Rot = { yaw: 0.6, pitch: 0.35 }, auto = true) {
  const [rot, setRot] = useState(init);
  const [spin, setSpin] = useState(auto);
  const drag = useRef<{ x: number; y: number; r: Rot } | null>(null);
  useEffect(() => {
    if (!spin) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setRot((r) => ({ ...r, yaw: r.yaw + dt * 0.5 }));
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [spin]);
  const handlers = {
    onPointerDown: (e: React.PointerEvent<SVGSVGElement>) => {
      setSpin(false);
      drag.current = { x: e.clientX, y: e.clientY, r: rot };
      (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: React.PointerEvent<SVGSVGElement>) => {
      const d = drag.current;
      if (!d) return;
      setRot({ yaw: d.r.yaw + (e.clientX - d.x) * 0.012, pitch: Math.max(-1.5, Math.min(1.5, d.r.pitch + (e.clientY - d.y) * 0.012)) });
    },
    onPointerUp: () => { drag.current = null; },
    onPointerCancel: () => { drag.current = null; },
  };
  return { rot, setRot, spin, setSpin, handlers };
}
