/**
 * Convex solids for the 3D geometry widget: build vertex lists, then find faces with a small
 * brute-force convex hull (the solids have at most ~100 vertices, and it runs once per shape).
 */

export type V = { x: number; y: number; z: number };
export type Solid = { verts: V[]; faces: number[][]; normals: V[]; edges: Array<{ a: number; b: number; f: number[]; smooth: boolean }> };

export const vsub = (a: V, b: V): V => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const vadd = (a: V, b: V): V => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export const vmul = (a: V, k: number): V => ({ x: a.x * k, y: a.y * k, z: a.z * k });
export const vdot = (a: V, b: V) => a.x * b.x + a.y * b.y + a.z * b.z;
export const vcross = (a: V, b: V): V => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
export const vlen = (a: V) => Math.hypot(a.x, a.y, a.z);

export function hull(verts: V[]): Solid {
  const n = verts.length;
  const span = Math.max(...verts.map(vlen), 1);
  const eps = 1e-6 * span;
  const seen = new Map<string, number[]>();
  const planes: Array<{ nrm: V; ids: number[] }> = [];
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) for (let k = j + 1; k < n; k++) {
    let nrm = vcross(vsub(verts[j], verts[i]), vsub(verts[k], verts[i]));
    const l = vlen(nrm);
    if (l < eps * eps * 10 + 1e-12) continue;
    nrm = vmul(nrm, 1 / l);
    const d = vdot(nrm, verts[i]);
    let pos = false, neg = false;
    const on: number[] = [];
    for (let m = 0; m < n; m++) {
      const s = vdot(nrm, verts[m]) - d;
      if (s > eps) pos = true; else if (s < -eps) neg = true; else on.push(m);
      if (pos && neg) break;
    }
    if (pos && neg) continue;
    if (pos) nrm = vmul(nrm, -1);
    const key = on.join(",");
    if (seen.has(key)) continue;
    seen.set(key, on);
    planes.push({ nrm, ids: on });
  }
  const faces: number[][] = [];
  const normals: V[] = [];
  for (const { nrm, ids } of planes) {
    const c = vmul(ids.reduce((s, i) => vadd(s, verts[i]), { x: 0, y: 0, z: 0 }), 1 / ids.length);
    const u0 = vsub(verts[ids[0]], c);
    const u = vmul(u0, 1 / (vlen(u0) || 1));
    const w = vcross(nrm, u);
    const sorted = [...ids].sort((p, q) => {
      const a = vsub(verts[p], c), b = vsub(verts[q], c);
      return Math.atan2(vdot(a, w), vdot(a, u)) - Math.atan2(vdot(b, w), vdot(b, u));
    });
    faces.push(sorted);
    normals.push(nrm);
  }
  const em = new Map<string, { a: number; b: number; f: number[] }>();
  faces.forEach((f, fi) => f.forEach((a, k) => {
    const b = f[(k + 1) % f.length];
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    const e = em.get(key) ?? { a: Math.min(a, b), b: Math.max(a, b), f: [] };
    e.f.push(fi);
    em.set(key, e);
  }));
  const edges = [...em.values()].map((e) => ({ ...e, smooth: e.f.length === 2 && vdot(normals[e.f[0]], normals[e.f[1]]) > Math.cos((24 * Math.PI) / 180) }));
  return { verts, faces, normals, edges };
}

/** Regular polygon in the xz-plane with side `a` (or circumradius `R` when `byRadius`). */
export function ngon(n: number, size: number, y = 0, byRadius = false): V[] {
  const R = byRadius ? size : size / (2 * Math.sin(Math.PI / n));
  return Array.from({ length: n }, (_, i) => {
    const t = -Math.PI / 2 + Math.PI / n + (i * 2 * Math.PI) / n;
    return { x: R * Math.cos(t), y, z: R * Math.sin(t) };
  });
}

export const prismVerts = (base: V[], h: number) => [...base.map((p) => ({ ...p, y: -h / 2 })), ...base.map((p) => ({ ...p, y: h / 2 }))];
export const pyramidVerts = (base: V[], h: number) => [...base.map((p) => ({ ...p, y: -h / 3 })), { x: 0, y: (2 * h) / 3, z: 0 }];
export const frustumVerts = (base: V[], k: number, h: number) => [...base.map((p) => ({ ...p, y: -h / 2 })), ...base.map((p) => ({ x: p.x * k, y: h / 2, z: p.z * k }))];
export const boxVerts = (a: number, b: number, c: number) => {
  const out: V[] = [];
  for (const x of [-a / 2, a / 2]) for (const y of [-c / 2, c / 2]) for (const z of [-b / 2, b / 2]) out.push({ x, y, z });
  return out;
};

const PHI = (1 + Math.sqrt(5)) / 2;
export const PLATONIC: Record<string, V[]> = {
  tetra: [{ x: 1, y: 1, z: 1 }, { x: 1, y: -1, z: -1 }, { x: -1, y: 1, z: -1 }, { x: -1, y: -1, z: 1 }],
  octa: [{ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 }, { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }].map((p) => vmul(p, 1.4)),
  icosa: [[0, 1, PHI], [0, -1, PHI], [0, 1, -PHI], [0, -1, -PHI], [1, PHI, 0], [-1, PHI, 0], [1, -PHI, 0], [-1, -PHI, 0], [PHI, 0, 1], [-PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, -1]].map(([x, y, z]) => vmul({ x, y, z }, 0.8)),
  dodeca: [
    ...[-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => ({ x, y, z })))),
    ...[-1, 1].flatMap((a) => [-1, 1].flatMap((b) => [{ x: 0, y: a / PHI, z: b * PHI }, { x: a / PHI, y: b * PHI, z: 0 }, { x: a * PHI, y: 0, z: b / PHI }])),
  ].map((p) => vmul(p, 0.85)),
};

/** Where the plane n·p = d cuts the solid: the section polygon, ordered around its centre. */
export function section(s: Solid, nrm: V, d: number): V[] {
  const pts: V[] = [];
  const eps = 1e-9;
  for (const e of s.edges) {
    const A = s.verts[e.a], B = s.verts[e.b];
    const sa = vdot(nrm, A) - d, sb = vdot(nrm, B) - d;
    if (Math.abs(sa) < eps) pts.push(A);
    if (Math.abs(sb) < eps) pts.push(B);
    if ((sa < -eps && sb > eps) || (sa > eps && sb < -eps)) pts.push(vadd(A, vmul(vsub(B, A), sa / (sa - sb))));
  }
  const uniq: V[] = [];
  for (const p of pts) if (!uniq.some((q) => vlen(vsub(p, q)) < 1e-6)) uniq.push(p);
  if (uniq.length < 3) return [];
  const c = vmul(uniq.reduce((a, p) => vadd(a, p), { x: 0, y: 0, z: 0 }), 1 / uniq.length);
  const u0 = vsub(uniq[0], c), u = vmul(u0, 1 / (vlen(u0) || 1)), w = vcross(nrm, u);
  return uniq.sort((p, q) => Math.atan2(vdot(vsub(p, c), w), vdot(vsub(p, c), u)) - Math.atan2(vdot(vsub(q, c), w), vdot(vsub(q, c), u)));
}

export function polyArea3(pts: V[]) {
  let s: V = { x: 0, y: 0, z: 0 };
  pts.forEach((p, i) => { s = vadd(s, vcross(p, pts[(i + 1) % pts.length])); });
  return vlen(s) / 2;
}
