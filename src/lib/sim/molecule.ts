/**
 * Tiny molecule builder for the 3D ball-and-stick viewer.
 *
 * Molecules are written in a small subset of SMILES (atoms B C N O P S F Cl Br I, bracket atoms
 * such as [Na+] or [NH4+], bonds - = #, branches and ring numbers). Hydrogens are added from the
 * usual valences, and 3D positions come from a short relaxation that keeps bond lengths and the
 * VSEPR angles (180°, 120°, 109.5°), counting lone pairs as electron domains.
 */
export type Atom = { el: string; charge: number; h: number; lp: number; x: number; y: number; z: number; ghost?: boolean };
export type Bond = { a: number; b: number; order: number; ring?: boolean };
export type Molecule = { atoms: Atom[]; bonds: Bond[] };

const VALENCE: Record<string, number[]> = { H: [1], B: [3], C: [4], N: [3, 5], O: [2], P: [3, 5], S: [2, 4, 6], F: [1], Cl: [1, 3, 5, 7], Br: [1], I: [1, 3, 5, 7], Si: [4] };
const VALENCE_E: Record<string, number> = { H: 1, B: 3, C: 4, N: 5, O: 6, P: 5, S: 6, F: 7, Cl: 7, Br: 7, I: 7, Si: 4, Na: 1, K: 1, Mg: 2, Ca: 2, Al: 3 };
const RADIUS: Record<string, number> = { H: 0.32, C: 0.76, N: 0.71, O: 0.66, S: 1.05, P: 1.07, F: 0.57, Cl: 1.02, Br: 1.2, I: 1.39, B: 0.84, Si: 1.11 };

export function parseSmiles(s: string): Molecule {
  const atoms: Atom[] = [];
  const bonds: Bond[] = [];
  const stack: number[] = [];
  const rings: Record<string, { at: number; order: number }> = {};
  let prev = -1;
  let order = 1;
  let i = 0;
  const add = (el: string, charge = 0, hFixed: number | null = null) => {
    const k = atoms.length;
    atoms.push({ el, charge, h: hFixed ?? -1, lp: 0, x: 0, y: 0, z: 0 });
    if (prev >= 0) bonds.push({ a: prev, b: k, order });
    order = 1;
    prev = k;
  };
  while (i < s.length) {
    const c = s[i];
    if (c === "(") { stack.push(prev); i++; continue; }
    if (c === ")") { prev = stack.pop() ?? prev; i++; continue; }
    if (c === "-") { order = 1; i++; continue; }
    if (c === "=") { order = 2; i++; continue; }
    if (c === "#") { order = 3; i++; continue; }
    if (/\d/.test(c)) {
      const r = rings[c];
      if (r) { bonds.push({ a: r.at, b: prev, order: Math.max(order, r.order), ring: true }); delete rings[c]; order = 1; }
      else { rings[c] = { at: prev, order }; order = 1; }
      i++;
      continue;
    }
    if (c === "[") {
      const end = s.indexOf("]", i);
      const body = s.slice(i + 1, end);
      const m = body.match(/^([A-Z][a-z]?)(H(\d?))?([+-]+|[+-]\d)?$/);
      if (m) {
        const hc = m[2] ? Number(m[3] || 1) : 0;
        const ch = m[4] ? (m[4].length > 1 && /\d/.test(m[4][1]) ? Number(m[4][1]) * (m[4][0] === "-" ? -1 : 1) : (m[4][0] === "-" ? -1 : 1) * m[4].length) : 0;
        add(m[1], ch, hc);
      }
      i = end + 1;
      continue;
    }
    const two = s.slice(i, i + 2);
    if (two === "Cl" || two === "Br" || two === "Si") { add(two); i += 2; continue; }
    if (/[BCNOPSFIH]/.test(c)) { add(c); i++; continue; }
    i++;
  }
  // implicit hydrogens and lone pairs
  const used = atoms.map(() => 0);
  for (const b of bonds) { used[b.a] += b.order; used[b.b] += b.order; }
  atoms.forEach((a, k) => {
    if (a.h < 0) {
      const v = (VALENCE[a.el] ?? [0]).find((x) => x >= used[k]) ?? used[k];
      a.h = Math.max(0, v - used[k]);
    }
    const ve = VALENCE_E[a.el] ?? 4;
    a.lp = Math.max(0, Math.floor((ve - a.charge - used[k] - a.h) / 2));
  });
  // make the hydrogens explicit
  const n = atoms.length;
  for (let k = 0; k < n; k++) {
    for (let j = 0; j < atoms[k].h; j++) {
      atoms.push({ el: "H", charge: 0, h: 0, lp: 0, x: 0, y: 0, z: 0 });
      bonds.push({ a: k, b: atoms.length - 1, order: 1 });
    }
  }
  return { atoms, bonds };
}

function rand(seed: number) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

/** Gives the atoms 3D positions (in ångström) and adds a ghost atom for every lone pair. */
export function layout(mol: Molecule, withLonePairs = true): Molecule {
  const atoms: Atom[] = mol.atoms.map((a) => ({ ...a }));
  const bonds: Bond[] = mol.bonds.map((b) => ({ ...b }));
  if (withLonePairs) {
    const n = atoms.length;
    for (let k = 0; k < n; k++) {
      const deg = bonds.filter((b) => b.a === k || b.b === k).length;
      if (deg < 2 && atoms[k].el !== "N") continue; // lone pairs matter only for the shape around centres
      for (let j = 0; j < atoms[k].lp; j++) {
        atoms.push({ el: "LP", charge: 0, h: 0, lp: 0, x: 0, y: 0, z: 0, ghost: true });
        bonds.push({ a: k, b: atoms.length - 1, order: 0 });
      }
    }
  }
  const N = atoms.length;
  const r = rand(7);
  const nb: number[][] = atoms.map(() => []);
  bonds.forEach((b) => { nb[b.a].push(b.b); nb[b.b].push(b.a); });
  // start from a zigzag of the heavy atoms in written order, hydrogens and lone pairs near their atom,
  // so rings close without tangling
  let heavy = 0;
  atoms.forEach((a) => {
    if (a.el === "H" || a.ghost) return;
    a.x = heavy * 1.2; a.y = (heavy % 2) * 0.7; a.z = (r() - 0.5) * 0.2;
    heavy++;
  });
  atoms.forEach((a, k) => {
    if (a.el !== "H" && !a.ghost) return;
    const p = atoms[nb[k][0] ?? 0];
    a.x = p.x + r() * 2 - 1; a.y = p.y + r() * 2 - 1; a.z = p.z + r() * 2 - 1;
  });
  // flat six-membered rings (benzene and friends): equal bonds, and opposite atoms pulled apart
  // so the ring stays planar
  const flat: number[][] = [];
  bonds.filter((b) => b.ring).forEach((rb) => {
    const prevOf = new Map<number, number>([[rb.a, -1]]);
    const queue = [rb.a];
    while (queue.length) {
      const k = queue.shift()!;
      for (const j of nb[k]) {
        if (prevOf.has(j) || atoms[j].ghost || (k === rb.a && j === rb.b)) continue;
        prevOf.set(j, k);
        queue.push(j);
      }
    }
    const ring: number[] = [];
    for (let k = rb.b; k !== -1 && k !== undefined; k = prevOf.get(k)!) ring.push(k);
    if (ring.length === 6 && ring.every((k) => nb[k].length === 3)) flat.push(ring);
  });
  const inFlat = (a: number, b: number) => flat.some((ring) => ring.includes(a) && ring.includes(b));
  const len = (b: Bond) => {
    const A = atoms[b.a], B = atoms[b.b];
    if (A.ghost || B.ghost) return 0.55;
    const base = (RADIUS[A.el] ?? 0.8) + (RADIUS[B.el] ?? 0.8);
    if (inFlat(b.a, b.b)) return base * 0.92;
    return base * (b.order === 2 ? 0.87 : b.order === 3 ? 0.78 : 1);
  };
  const springs: Array<[number, number, number, number]> = [];
  bonds.forEach((b) => springs.push([b.a, b.b, len(b), 1]));
  atoms.forEach((_, k) => {
    const ns = nb[k];
    const dom = ns.length;
    if (dom < 2) return;
    const ang = dom === 2 ? Math.PI : dom === 3 ? (2 * Math.PI) / 3 : dom === 4 ? Math.acos(-1 / 3) : dom === 5 ? Math.PI / 2 : Math.PI / 2;
    for (let p = 0; p < ns.length; p++) for (let q = p + 1; q < ns.length; q++) {
      const b1 = bonds.find((b) => (b.a === k && b.b === ns[p]) || (b.b === k && b.a === ns[p]))!;
      const b2 = bonds.find((b) => (b.a === k && b.b === ns[q]) || (b.b === k && b.a === ns[q]))!;
      const d1 = len(b1), d2 = len(b2);
      springs.push([ns[p], ns[q], Math.sqrt(d1 * d1 + d2 * d2 - 2 * d1 * d2 * Math.cos(ang)), 1.4]);
    }
  });
  flat.forEach((ring) => {
    for (let q = 0; q < 3; q++) springs.push([ring[q], ring[q + 3], 2 * 1.52 * 0.92, 1]);
  });
  const linked = new Set(springs.map(([a, b]) => a * 1000 + b));
  for (let it = 0; it < 2500; it++) {
    const step = 0.12 * (1 - it / 2700);
    const f = atoms.map(() => ({ x: 0, y: 0, z: 0 }));
    for (const [a, b, d0, k] of springs) {
      const A = atoms[a], B = atoms[b];
      const dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
      const d = Math.hypot(dx, dy, dz) || 1e-6;
      const g = (k * (d - d0)) / d;
      f[a].x += g * dx; f[a].y += g * dy; f[a].z += g * dz;
      f[b].x -= g * dx; f[b].y -= g * dy; f[b].z -= g * dz;
    }
    for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) {
      if (linked.has(a * 1000 + b) || linked.has(b * 1000 + a)) continue;
      const A = atoms[a], B = atoms[b];
      const dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
      const d2 = dx * dx + dy * dy + dz * dz + 0.01;
      if (d2 > 9) continue;
      const g = -0.08 / d2;
      f[a].x += g * dx; f[a].y += g * dy; f[a].z += g * dz;
      f[b].x -= g * dx; f[b].y -= g * dy; f[b].z -= g * dz;
    }
    atoms.forEach((A, k) => { A.x += f[k].x * step; A.y += f[k].y * step; A.z += f[k].z * step; });
    for (const ring of flat) {
      const c = { x: 0, y: 0, z: 0 };
      ring.forEach((k) => { c.x += atoms[k].x / 6; c.y += atoms[k].y / 6; c.z += atoms[k].z / 6; });
      const n = { x: 0, y: 0, z: 0 };
      ring.forEach((k, q) => {
        const A = atoms[k], B = atoms[ring[(q + 1) % 6]];
        const u = { x: A.x - c.x, y: A.y - c.y, z: A.z - c.z }, v = { x: B.x - c.x, y: B.y - c.y, z: B.z - c.z };
        n.x += u.y * v.z - u.z * v.y; n.y += u.z * v.x - u.x * v.z; n.z += u.x * v.y - u.y * v.x;
      });
      const nl = Math.hypot(n.x, n.y, n.z) || 1;
      ring.forEach((k) => {
        const A = atoms[k];
        const d = ((A.x - c.x) * n.x + (A.y - c.y) * n.y + (A.z - c.z) * n.z) / nl;
        A.x -= (n.x / nl) * d * 0.2; A.y -= (n.y / nl) * d * 0.2; A.z -= (n.z / nl) * d * 0.2;
      });
    }
  }
  // centre
  const real = atoms.filter((a) => !a.ghost);
  const cx = real.reduce((s, a) => s + a.x, 0) / real.length;
  const cy = real.reduce((s, a) => s + a.y, 0) / real.length;
  const cz = real.reduce((s, a) => s + a.z, 0) / real.length;
  atoms.forEach((a) => { a.x -= cx; a.y -= cy; a.z -= cz; });
  return { atoms, bonds };
}

/** Molecular formula in Hill order (C, H, then alphabetical), e.g. C2H6O. */
export function formulaOf(mol: Molecule) {
  const count: Record<string, number> = {};
  mol.atoms.forEach((a) => { if (!a.ghost) count[a.el] = (count[a.el] ?? 0) + 1; });
  const keys = Object.keys(count).sort((a, b) => (a === "C" ? -1 : b === "C" ? 1 : a === "H" ? -1 : b === "H" ? 1 : a.localeCompare(b)));
  const sub = (n: number) => (n === 1 ? "" : String(n).replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]));
  return keys.map((k) => k + sub(count[k])).join("");
}

export const CPK: Record<string, string> = { H: "#f8fafc", C: "#334155", N: "#2563eb", O: "#ef4444", S: "#eab308", P: "#f97316", F: "#22c55e", Cl: "#16a34a", Br: "#9a3412", I: "#7e22ce", B: "#fda4af", Si: "#a8a29e", Na: "#a855f7", K: "#8b5cf6", Mg: "#16a34a", Ca: "#65a30d", Fe: "#ea580c", Cu: "#c2410c", Zn: "#64748b", Al: "#94a3b8", LP: "#f472b6" };
export const SIZE: Record<string, number> = { H: 0.25, C: 0.38, N: 0.37, O: 0.36, S: 0.48, P: 0.48, F: 0.32, Cl: 0.46, Br: 0.5, I: 0.56, B: 0.4, Si: 0.5 };
