"use client";

import { L, t } from "../labels";
import { ease, Tag } from "./draw";
import type { Mech } from "./types";

/* ---------------- drawing helpers ---------------- */

type Pt = { x: number; y: number };
const INK = "#1e1b4b", ARC = "#4f46e5", NEW = "#e11d48", SOFT = "#94a3b8";

/** Part of a circle from angle a0 to a1 (degrees, screen orientation), drawn up to fraction k. */
function Arc({ c, r, a0, a1, k = 1, color = ARC }: { c: Pt; r: number; a0: number; a1: number; k?: number; color?: string }) {
  const e = a0 + (a1 - a0) * k;
  const p = (a: number) => ({ x: c.x + r * Math.cos((a * Math.PI) / 180), y: c.y + r * Math.sin((a * Math.PI) / 180) });
  const s = p(a0), f = p(e);
  if (k <= 0.001) return null;
  return <path d={`M${s.x},${s.y} A${r},${r} 0 ${Math.abs(e - a0) > 180 ? 1 : 0} ${e > a0 ? 1 : 0} ${f.x},${f.y}`} fill="none" stroke={color} strokeWidth="1.6" />;
}

function Ln({ a, b, k = 1, color = INK, w = 2, dash }: { a: Pt; b: Pt; k?: number; color?: string; w?: number; dash?: string }) {
  if (k <= 0.001) return null;
  return <line x1={a.x} y1={a.y} x2={a.x + (b.x - a.x) * k} y2={a.y + (b.y - a.y) * k} stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" />;
}

const Dot = ({ p, color = INK }: { p: Pt; color?: string }) => <circle cx={p.x} cy={p.y} r="3.2" fill={color} />;

/** A compass leg pair standing at c with the pencil at angle a. */
function Compass({ c, r, a }: { c: Pt; r: number; a: number }) {
  const tip = { x: c.x + r * Math.cos((a * Math.PI) / 180), y: c.y + r * Math.sin((a * Math.PI) / 180) };
  const top = { x: (c.x + tip.x) / 2, y: Math.min(c.y, tip.y) - r * 0.6 };
  return (
    <g opacity="0.85">
      <line x1={c.x} y1={c.y} x2={top.x} y2={top.y} stroke="#64748b" strokeWidth="2.5" />
      <line x1={tip.x} y1={tip.y} x2={top.x} y2={top.y} stroke="#64748b" strokeWidth="2.5" />
      <circle cx={top.x} cy={top.y} r="3.5" fill="#475569" />
      <circle cx={tip.x} cy={tip.y} r="2.5" fill="#f59e0b" />
    </g>
  );
}

const ang = (c: Pt, p: Pt) => (Math.atan2(p.y - c.y, p.x - c.x) * 180) / Math.PI;
const circleMeet = (c1: Pt, c2: Pt, r1: number, r2: number) => {
  const d = Math.hypot(c2.x - c1.x, c2.y - c1.y), a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const m = { x: c1.x + (a * (c2.x - c1.x)) / d, y: c1.y + (a * (c2.y - c1.y)) / d };
  return [{ x: m.x + (h * (c2.y - c1.y)) / d, y: m.y - (h * (c2.x - c1.x)) / d }, { x: m.x - (h * (c2.y - c1.y)) / d, y: m.y + (h * (c2.x - c1.x)) / d }];
};

/* ---------------- midpoint / perpendicular bisector ---------------- */

const midpoint: Mech = {
  title: t("Construct the midpoint of a segment", "Կառուցի՛ր հատվածի միջնակետը", "Построй середину отрезка"),
  caps: [
    t("We have a segment AB. Open the compass wider than half of AB.", "Ունենք AB հատված։ Կարկինը բացի՛ր AB-ի կեսից ավելի։", "Дан отрезок AB. Раствори циркуль больше половины AB."),
    t("With the needle at A, draw an arc above and below the segment.", "Ասեղը դնելով A-ում՝ տա՛ր աղեղ հատվածից վեր և վար։", "Поставив иглу в A, проведи дугу выше и ниже отрезка."),
    t("Without changing the opening, draw the same arc from B. The arcs cross at P and Q.", "Չփոխելով բացվածքը՝ նույն աղեղը տա՛ր B-ից։ Աղեղները հատվում են P և Q կետերում։", "Не меняя раствора, проведи такую же дугу из B. Дуги пересекутся в точках P и Q."),
    t("The line PQ is the perpendicular bisector: it meets AB at its midpoint M at a right angle.", "PQ ուղիղը միջնուղղահայացն է․ այն AB-ն հատում է նրա M միջնակետում՝ ուղիղ անկյան տակ։", "Прямая PQ — серединный перпендикуляр: она пересекает AB в его середине M под прямым углом."),
  ],
  draw: (i, p) => {
    const A = { x: 80, y: 120 }, B = { x: 240, y: 120 }, r = 110;
    const [P, Q] = circleMeet(A, B, r, r);
    const k = ease(p);
    return (
      <g>
        <Ln a={A} b={B} w={2.5} />
        <Dot p={A} /><Dot p={B} />
        <Tag x={A.x - 10} y={A.y + 4}>A</Tag><Tag x={B.x + 10} y={B.y + 4}>B</Tag>
        {i >= 1 ? <Arc c={A} r={r} a0={-60} a1={60} k={i === 1 ? k : 1} /> : null}
        {i >= 2 ? <Arc c={B} r={r} a0={120} a1={240} k={i === 2 ? k : 1} /> : null}
        {i === 0 ? <Compass c={A} r={r} a={-20} /> : null}
        {i === 1 ? <Compass c={A} r={r} a={-60 + 120 * k} /> : null}
        {i === 2 ? <Compass c={B} r={r} a={120 + 120 * k} /> : null}
        {i >= 2 ? <><Dot p={P} color={NEW} /><Dot p={Q} color={NEW} /><Tag x={P.x + 10} y={P.y} color={NEW}>P</Tag><Tag x={Q.x + 10} y={Q.y + 8} color={NEW}>Q</Tag></> : null}
        {i === 3 ? (
          <g>
            <Ln a={P} b={Q} color={NEW} k={k} />
            <Dot p={{ x: 160, y: 120 }} color={NEW} />
            <Tag x={170} y={136} color={NEW}>M</Tag>
            <path d="M160,110 L170,110 L170,120" fill="none" stroke={NEW} strokeWidth="1.5" />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- angle bisector ---------------- */

const bisectAngle: Mech = {
  title: t("Construct the bisector of an angle", "Կառուցի՛ր անկյան կիսորդը", "Построй биссектрису угла"),
  caps: [
    t("We have an angle with vertex O. Draw an arc centred at O that crosses both sides, at A and B.", "Ունենք O գագաթով անկյուն։ O կենտրոնով տա՛ր աղեղ, որը հատում է երկու կողմերը A և B կետերում։", "Дан угол с вершиной O. Проведи дугу с центром в O, пересекающую обе стороны в точках A и B."),
    t("From A draw an arc inside the angle.", "A-ից տա՛ր աղեղ անկյան ներսում։", "Из A проведи дугу внутри угла."),
    t("From B draw an arc of the same radius. It crosses the first one at C.", "B-ից տա՛ր նույն շառավղով աղեղ։ Այն հատում է առաջինը C կետում։", "Из B проведи дугу того же радиуса. Она пересечёт первую в точке C."),
    t("The ray OC is the bisector: triangles OAC and OBC are equal (three equal sides), so ∠AOC = ∠BOC.", "OC ճառագայթը կիսորդն է․ OAC և OBC եռանկյունները հավասար են (երեք հավասար կողմեր), ուստի ∠AOC = ∠BOC։", "Луч OC — биссектриса: треугольники OAC и OBC равны (по трём сторонам), значит ∠AOC = ∠BOC."),
  ],
  draw: (i, p) => {
    const O = { x: 50, y: 170 }, E1 = { x: 290, y: 170 }, E2 = { x: 250, y: 30 };
    const r = 90, a2 = ang(O, E2);
    const A = { x: O.x + r, y: O.y }, B = { x: O.x + r * Math.cos((a2 * Math.PI) / 180), y: O.y + r * Math.sin((a2 * Math.PI) / 180) };
    const r2 = 80;
    const [, C] = circleMeet(A, B, r2, r2);
    const k = ease(p);
    const Cc = C.x > O.x ? C : circleMeet(A, B, r2, r2)[0];
    return (
      <g>
        <Ln a={O} b={E1} w={2.5} /><Ln a={O} b={E2} w={2.5} />
        <Dot p={O} /><Tag x={O.x - 8} y={O.y + 12}>O</Tag>
        <Arc c={O} r={r} a0={10} a1={a2 - 10} k={i === 0 ? k : 1} />
        {i >= 0 ? <><Dot p={A} color={ARC} /><Dot p={B} color={ARC} /><Tag x={A.x + 4} y={A.y + 14} color={ARC}>A</Tag><Tag x={B.x - 10} y={B.y - 4} color={ARC}>B</Tag></> : null}
        {i >= 1 ? <Arc c={A} r={r2} a0={-140} a1={-60} k={i === 1 ? k : 1} /> : null}
        {i >= 2 ? <Arc c={B} r={r2} a0={-30} a1={50} k={i === 2 ? k : 1} /> : null}
        {i === 1 ? <Compass c={A} r={r2} a={-140 + 80 * k} /> : null}
        {i === 2 ? <Compass c={B} r={r2} a={-30 + 80 * k} /> : null}
        {i >= 2 ? <><Dot p={Cc} color={NEW} /><Tag x={Cc.x + 10} y={Cc.y} color={NEW}>C</Tag></> : null}
        {i === 3 ? <g><Ln a={O} b={{ x: O.x + (Cc.x - O.x) * 1.6, y: O.y + (Cc.y - O.y) * 1.6 }} color={NEW} k={k} /><Ln a={A} b={Cc} color={SOFT} dash="4 3" w={1.4} /><Ln a={B} b={Cc} color={SOFT} dash="4 3" w={1.4} /></g> : null}
      </g>
    );
  },
};

/* ---------------- perpendicular from a point ---------------- */

const perpendicular: Mech = {
  title: t("Drop a perpendicular from a point to a line", "Կետից տա՛ր ուղղահայաց ուղղին", "Опусти перпендикуляр из точки на прямую"),
  caps: [
    t("We have a line a and a point M not on it.", "Ունենք a ուղիղ և նրա վրա չգտնվող M կետ։", "Даны прямая a и точка M вне её."),
    t("Draw an arc centred at M that cuts the line at two points A and B.", "M կենտրոնով տա՛ր աղեղ, որը ուղիղը հատում է երկու կետում՝ A և B։", "Проведи дугу с центром M, пересекающую прямую в двух точках A и B."),
    t("From A and B draw equal arcs below the line; they meet at N.", "A-ից և B-ից տա՛ր հավասար աղեղներ ուղղից ներքև․ դրանք հատվում են N կետում։", "Из A и B проведи равные дуги под прямой; они пересекутся в точке N."),
    t("The line MN is perpendicular to a. Its piece MH is the distance from M to the line.", "MN ուղիղն ուղղահայաց է a-ին։ Նրա MH հատվածը M-ի հեռավորությունն է ուղղից։", "Прямая MN перпендикулярна a. Её отрезок MH — расстояние от M до прямой."),
  ],
  draw: (i, p) => {
    const M = { x: 160, y: 40 }, r = 100;
    const dx = Math.sqrt(r * r - 80 * 80);
    const A = { x: 160 - dx, y: 120 }, B = { x: 160 + dx, y: 120 };
    const N = { x: 160, y: 120 + Math.sqrt(90 * 90 - dx * dx) };
    const k = ease(p);
    return (
      <g>
        <Ln a={{ x: 20, y: 120 }} b={{ x: 300, y: 120 }} w={2.5} />
        <Tag x={296} y={112}>a</Tag>
        <Dot p={M} /><Tag x={M.x + 12} y={M.y}>M</Tag>
        {i >= 1 ? <Arc c={M} r={r} a0={60} a1={120} k={i === 1 ? k : 1} /> : null}
        {i === 1 ? <Compass c={M} r={r} a={60 + 60 * k} /> : null}
        {i >= 1 ? <><Dot p={A} color={ARC} /><Dot p={B} color={ARC} /><Tag x={A.x - 6} y={A.y - 8} color={ARC}>A</Tag><Tag x={B.x + 6} y={B.y - 8} color={ARC}>B</Tag></> : null}
        {i >= 2 ? <><Arc c={A} r={90} a0={30} a1={80} k={i === 2 ? k : 1} /><Arc c={B} r={90} a0={100} a1={150} k={i === 2 ? k : 1} /><Dot p={N} color={NEW} /><Tag x={N.x + 12} y={N.y} color={NEW}>N</Tag></> : null}
        {i === 3 ? <g><Ln a={M} b={N} color={NEW} k={k} /><path d="M160,110 L170,110 L170,120" fill="none" stroke={NEW} strokeWidth="1.5" /><Tag x={150} y={134} color={NEW}>H</Tag></g> : null}
      </g>
    );
  },
};

/* ---------------- copy an angle ---------------- */

const copyAngle: Mech = {
  title: t("Copy an angle", "Կառուցի՛ր տրվածին հավասար անկյուն", "Отложи угол, равный данному"),
  caps: [
    t("Given the angle A on the left and a ray O on the right.", "Տրված է A անկյունը ձախում և O ճառագայթը աջում։", "Дан угол A слева и луч с началом O справа."),
    t("Draw arcs with the same radius from A and from O. The first one cuts the sides of the angle at B and C.", "Նույն շառավղով աղեղներ տա՛ր A-ից և O-ից։ Առաջինը անկյան կողմերը հատում է B և C կետերում։", "Проведи дуги одного радиуса из A и из O. Первая пересечёт стороны угла в точках B и C."),
    t("Measure BC with the compass and mark it from D on the second arc: you get E.", "Կարկինով չափի՛ր BC-ն և այն տեղադրի՛ր D-ից երկրորդ աղեղի վրա․ ստացվում է E։", "Измерь циркулем BC и отложи от D на второй дуге: получится E."),
    t("Draw the ray OE. ∠DOE = ∠BAC, because triangles ABC and ODE are equal by three sides.", "Տա՛ր OE ճառագայթը։ ∠DOE = ∠BAC, քանի որ ABC և ODE եռանկյունները հավասար են երեք կողմերով։", "Проведи луч OE. ∠DOE = ∠BAC, так как треугольники ABC и ODE равны по трём сторонам."),
  ],
  draw: (i, p) => {
    const A = { x: 30, y: 170 }, O = { x: 180, y: 170 }, r = 70, th = -40;
    const B = { x: A.x + r, y: A.y }, C = { x: A.x + r * Math.cos((th * Math.PI) / 180), y: A.y + r * Math.sin((th * Math.PI) / 180) };
    const D = { x: O.x + r, y: O.y }, E = { x: O.x + r * Math.cos((th * Math.PI) / 180), y: O.y + r * Math.sin((th * Math.PI) / 180) };
    const k = ease(p);
    const bc = Math.hypot(B.x - C.x, B.y - C.y);
    return (
      <g>
        <Ln a={A} b={{ x: 150, y: 170 }} w={2.5} /><Ln a={A} b={{ x: A.x + 130 * Math.cos((th * Math.PI) / 180), y: A.y + 130 * Math.sin((th * Math.PI) / 180) }} w={2.5} />
        <Ln a={O} b={{ x: 310, y: 170 }} w={2.5} />
        <Dot p={A} /><Dot p={O} /><Tag x={A.x - 6} y={A.y + 14}>A</Tag><Tag x={O.x - 6} y={O.y + 14}>O</Tag>
        {i >= 1 ? <><Arc c={A} r={r} a0={8} a1={th - 12} k={i === 1 ? k : 1} /><Arc c={O} r={r} a0={8} a1={th - 12} k={i === 1 ? k : 1} /><Dot p={B} color={ARC} /><Dot p={C} color={ARC} /><Dot p={D} color={ARC} /><Tag x={B.x + 4} y={B.y + 14} color={ARC}>B</Tag><Tag x={C.x} y={C.y - 8} color={ARC}>C</Tag><Tag x={D.x + 4} y={D.y + 14} color={ARC}>D</Tag></> : null}
        {i >= 2 ? <><Ln a={B} b={C} color={SOFT} dash="4 3" /><Arc c={D} r={bc} a0={-150} a1={-100} k={i === 2 ? k : 1} color={NEW} /></> : null}
        {i === 2 ? <Compass c={D} r={bc} a={-150 + 50 * k} /> : null}
        {i >= 2 ? <><Dot p={E} color={NEW} /><Tag x={E.x + 4} y={E.y - 8} color={NEW}>E</Tag></> : null}
        {i === 3 ? <><Ln a={O} b={{ x: O.x + 130 * Math.cos((th * Math.PI) / 180), y: O.y + 130 * Math.sin((th * Math.PI) / 180) }} color={NEW} k={k} w={2.5} /><Ln a={D} b={E} color={SOFT} dash="4 3" /></> : null}
      </g>
    );
  },
};

/* ---------------- triangle from three sides ---------------- */

const sss: Mech = {
  title: t("Construct a triangle from three sides", "Կառուցի՛ր եռանկյուն երեք կողմերով", "Построй треугольник по трём сторонам"),
  caps: [
    t("Given three segments a, b and c. Draw a line and mark AB = c on it.", "Տրված են a, b և c հատվածները։ Տա՛ր ուղիղ և դրա վրա նշի՛ր AB = c։", "Даны отрезки a, b и c. Проведи прямую и отложи на ней AB = c."),
    t("Draw an arc of radius b centred at A.", "Տա՛ր b շառավղով աղեղ A կենտրոնով։", "Проведи дугу радиусом b с центром A."),
    t("Draw an arc of radius a centred at B. The arcs cross at C.", "Տա՛ր a շառավղով աղեղ B կենտրոնով։ Աղեղները հատվում են C կետում։", "Проведи дугу радиусом a с центром B. Дуги пересекутся в точке C."),
    t("Join C to A and B: triangle ABC has the given sides. It works only if each side is shorter than the sum of the other two.", "Միացրո՛ւ C-ն A-ին և B-ին․ ABC եռանկյունն ունի տրված կողմերը։ Դա հնարավոր է միայն եթե յուրաքանչյուր կողմ փոքր է մյուս երկուսի գումարից։", "Соедини C с A и B: у треугольника ABC заданные стороны. Это возможно, только если каждая сторона меньше суммы двух других."),
  ],
  draw: (i, p, lang) => {
    const a = 110, b = 90, c = 160;
    const A = { x: 70, y: 180 }, B = { x: 230, y: 180 };
    const [C] = circleMeet(A, B, b, a);
    const k = ease(p);
    return (
      <g>
        <g transform="translate(14 20)">
          <Ln a={{ x: 0, y: 0 }} b={{ x: a * 0.6, y: 0 }} color="#0891b2" w={3} /><Tag x={a * 0.6 + 10} y={4}>a</Tag>
          <Ln a={{ x: 0, y: 14 }} b={{ x: b * 0.6, y: 14 }} color="#16a34a" w={3} /><Tag x={b * 0.6 + 10} y={18}>b</Tag>
          <Ln a={{ x: 0, y: 28 }} b={{ x: c * 0.6, y: 28 }} color="#d97706" w={3} /><Tag x={c * 0.6 + 10} y={32}>c</Tag>
          <text x="0" y="48" className="sim-small">{L(t("(drawn smaller)", "(փոքրացված)", "(в уменьшенном виде)"), lang)}</text>
        </g>
        <Ln a={{ x: 30, y: 180 }} b={{ x: 300, y: 180 }} color={SOFT} w={1.2} />
        <Ln a={A} b={B} color="#d97706" w={3} k={i === 0 ? k : 1} />
        <Dot p={A} /><Dot p={B} /><Tag x={A.x - 4} y={A.y + 14}>A</Tag><Tag x={B.x + 4} y={B.y + 14}>B</Tag>
        {i >= 1 ? <Arc c={A} r={b} a0={-110} a1={-20} k={i === 1 ? k : 1} color="#16a34a" /> : null}
        {i === 1 ? <Compass c={A} r={b} a={-110 + 90 * k} /> : null}
        {i >= 2 ? <Arc c={B} r={a} a0={-170} a1={-100} k={i === 2 ? k : 1} color="#0891b2" /> : null}
        {i === 2 ? <Compass c={B} r={a} a={-170 + 70 * k} /> : null}
        {i >= 2 ? <><Dot p={C} color={NEW} /><Tag x={C.x} y={C.y - 10} color={NEW}>C</Tag></> : null}
        {i === 3 ? <><Ln a={A} b={C} color="#16a34a" w={3} k={k} /><Ln a={B} b={C} color="#0891b2" w={3} k={k} /></> : null}
      </g>
    );
  },
};

/* ---------------- parallel through a point ---------------- */

const parallelLine: Mech = {
  title: t("Draw a parallel line through a point", "Կետով տա՛ր զուգահեռ ուղիղ", "Проведи параллельную прямую через точку"),
  caps: [
    t("Given a line a and a point M outside it.", "Տրված են a ուղիղը և դրանից դուրս M կետը։", "Даны прямая a и точка M вне её."),
    t("Draw any line through M that crosses a at O. It makes an angle α with a.", "M-ով տա՛ր ցանկացած ուղիղ, որը a-ն հատում է O կետում։ Այն a-ի հետ կազմում է α անկյուն։", "Проведи через M любую прямую, пересекающую a в точке O. Она образует с a угол α."),
    t("At M copy the angle α so that it lies in the corresponding position.", "M-ում կառուցի՛ր α-ին հավասար անկյուն համապատասխան դիրքում։", "В точке M отложи угол, равный α, в соответственном положении."),
    t("The new side through M is parallel to a: equal corresponding angles mean parallel lines.", "M-ով անցնող նոր կողմը զուգահեռ է a-ին․ հավասար համապատասխան անկյունները նշանակում են զուգահեռ ուղիղներ։", "Новая сторона через M параллельна a: равные соответственные углы означают параллельность."),
  ],
  draw: (i, p) => {
    const O = { x: 110, y: 170 }, M = { x: 170, y: 70 };
    const k = ease(p);
    const d = { x: M.x - O.x, y: M.y - O.y };
    const far = { x: O.x + d.x * 1.6, y: O.y + d.y * 1.6 };
    return (
      <g>
        <Ln a={{ x: 20, y: 170 }} b={{ x: 300, y: 170 }} w={2.5} /><Tag x={296} y={162}>a</Tag>
        <Dot p={M} /><Tag x={M.x - 14} y={M.y - 4}>M</Tag>
        {i >= 1 ? <><Ln a={{ x: O.x - d.x * 0.3, y: O.y - d.y * 0.3 }} b={far} color={SOFT} k={i === 1 ? k : 1} /><Dot p={O} /><Tag x={O.x - 12} y={O.y + 14}>O</Tag><Arc c={O} r={26} a0={ang(O, M)} a1={0} color={ARC} /><Tag x={O.x + 34} y={O.y - 10} color={ARC}>α</Tag></> : null}
        {i >= 2 ? <><Arc c={M} r={26} a0={ang(O, M)} a1={0} color={NEW} k={i === 2 ? k : 1} /><Tag x={M.x + 34} y={M.y - 10} color={NEW}>α</Tag></> : null}
        {i === 3 ? <Ln a={{ x: 20, y: 70 }} b={{ x: 300, y: 70 }} color={NEW} w={2.5} k={k} /> : null}
      </g>
    );
  },
};

/* ---------------- angle sum of a triangle ---------------- */

const angleSum: Mech = {
  title: t("Why the angles of a triangle add up to 180°", "Ինչու է եռանկյան անկյունների գումարը 180°", "Почему сумма углов треугольника 180°"),
  caps: [
    t("Take any triangle ABC with angles α, β and γ.", "Վերցրո՛ւ ցանկացած ABC եռանկյուն α, β և γ անկյուններով։", "Возьми любой треугольник ABC с углами α, β и γ."),
    t("Through C draw the line parallel to AB.", "C-ով տա՛ր AB-ին զուգահեռ ուղիղ։", "Через C проведи прямую, параллельную AB."),
    t("Next to C there are angles equal to α and β: they are alternate angles with the parallel lines.", "C-ի մոտ առաջանում են α-ին և β-ին հավասար անկյուններ․ դրանք խաչադիր անկյուններ են զուգահեռ ուղիղների դեպքում։", "У вершины C появляются углы, равные α и β: это накрест лежащие углы при параллельных прямых."),
    t("Together α, γ and β make a straight angle at C, so α + β + γ = 180°.", "α, γ և β միասին C-ում կազմում են փռված անկյուն, ուստի α + β + γ = 180°։", "Вместе α, γ и β образуют у C развёрнутый угол, поэтому α + β + γ = 180°."),
  ],
  draw: (i, p) => {
    const A = { x: 50, y: 180 }, B = { x: 270, y: 180 }, C = { x: 130, y: 60 };
    const k = ease(p);
    const aA = ang(A, C), aB = ang(B, C);
    return (
      <g>
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="#eef2ff" stroke={INK} strokeWidth="2.2" />
        <Tag x={A.x - 8} y={A.y + 12}>A</Tag><Tag x={B.x + 8} y={B.y + 12}>B</Tag><Tag x={C.x} y={C.y - 12}>C</Tag>
        <Arc c={A} r={26} a0={aA} a1={0} color="#4f46e5" /><Tag x={A.x + 36} y={A.y - 8} color="#4f46e5">α</Tag>
        <Arc c={B} r={26} a0={180} a1={aB + 360} color="#e11d48" /><Tag x={B.x - 36} y={B.y - 6} color="#e11d48">β</Tag>
        <Arc c={C} r={20} a0={ang(C, A)} a1={ang(C, B)} color="#16a34a" /><Tag x={C.x + 2} y={C.y + 32} color="#16a34a">γ</Tag>
        {i >= 1 ? <Ln a={{ x: C.x - 110, y: C.y }} b={{ x: C.x + 160, y: C.y }} color={SOFT} k={i === 1 ? k : 1} /> : null}
        {i >= 2 ? (
          <g opacity={i === 2 ? k : 1}>
            <Arc c={C} r={26} a0={180} a1={180 + aA} color="#4f46e5" /><Tag x={C.x - 40} y={C.y + 12} color="#4f46e5">α</Tag>
            <Arc c={C} r={26} a0={ang(C, B)} a1={0} color="#e11d48" /><Tag x={C.x + 42} y={C.y + 12} color="#e11d48">β</Tag>
          </g>
        ) : null}
        {i === 3 ? <Tag x={220} y={26} color="#4f46e5">α + γ + β = 180°</Tag> : null}
      </g>
    );
  },
};

/* ---------------- theorem of three perpendiculars ---------------- */

const threePerp: Mech = {
  title: t("The theorem of three perpendiculars", "Երեք ուղղահայացների թեորեմը", "Теорема о трёх перпендикулярах"),
  caps: [
    t("A plane α, a line a in it and a point M above the plane.", "α հարթություն, նրանում a ուղիղ և հարթությունից վեր M կետ։", "Плоскость α, прямая a в ней и точка M над плоскостью."),
    t("MO is perpendicular to the plane, and MA is an oblique line. OA is the projection of MA onto the plane.", "MO-ն ուղղահայաց է հարթությանը, MA-ն թեք է։ OA-ն MA-ի պրոյեկցիան է հարթության վրա։", "MO — перпендикуляр к плоскости, MA — наклонная. OA — проекция MA на плоскость."),
    t("If the projection OA is perpendicular to the line a…", "Եթե OA պրոյեկցիան ուղղահայաց է a ուղղին…", "Если проекция OA перпендикулярна прямой a…"),
    t("…then the oblique MA is perpendicular to a as well. And the converse is also true.", "…ապա MA թեքը նույնպես ուղղահայաց է a-ին։ Ճիշտ է նաև հակադարձը։", "…то и наклонная MA перпендикулярна a. Верно и обратное."),
  ],
  draw: (i, p, lang) => {
    const k = ease(p);
    const O = { x: 120, y: 160 }, M = { x: 120, y: 40 }, A = { x: 215, y: 140 };
    const a1 = { x: 175, y: 195 }, a2 = { x: 255, y: 85 };
    return (
      <g>
        <polygon points="20,190 230,210 300,120 90,105" fill="#e0e7ff" stroke={SOFT} />
        <Tag x={40} y={180}>α</Tag>
        <Ln a={a1} b={a2} w={2.5} /><Tag x={262} y={84}>a</Tag>
        <Dot p={M} /><Tag x={M.x - 12} y={M.y}>M</Tag>
        {i >= 1 ? <><Ln a={M} b={O} color="#16a34a" k={i === 1 ? k : 1} /><Dot p={O} color="#16a34a" /><Tag x={O.x - 12} y={O.y + 8} color="#16a34a">O</Tag><Ln a={M} b={A} color={ARC} k={i === 1 ? k : 1} /><Ln a={O} b={A} color="#d97706" dash="5 4" k={i === 1 ? k : 1} /><Dot p={A} /><Tag x={A.x + 10} y={A.y + 10}>A</Tag></> : null}
        {i >= 2 ? <path d={`M${A.x - 9},${A.y - 1} L${A.x - 4},${A.y + 7} L${A.x + 4},${A.y + 6}`} fill="none" stroke="#d97706" strokeWidth="1.6" opacity={i === 2 ? k : 1} /> : null}
        {i >= 3 ? <path d={`M${A.x - 5},${A.y - 9} L${A.x + 1},${A.y - 12} L${A.x + 5},${A.y - 5}`} fill="none" stroke={NEW} strokeWidth="1.8" opacity={k} /> : null}
        {i === 3 ? <Tag x={160} y={22} color={NEW}>OA ⊥ a ⇒ MA ⊥ a</Tag> : null}
        {i === 1 ? <text x="170" y="24" className="sim-small">{L(t("MO ⊥ α", "MO ⊥ α", "MO ⊥ α"), lang)}</text> : null}
      </g>
    );
  },
};

/* ---------------- section of a cube ---------------- */

const cubeSection: Mech = {
  title: t("Constructing a section of a cube", "Խորանարդի հատույթի կառուցում", "Построение сечения куба"),
  caps: [
    t("Points P, Q and R are on three edges of the cube. We look for the section by the plane PQR.", "P, Q և R կետերը գտնվում են խորանարդի երեք կողերի վրա։ Փնտրում ենք PQR հարթությամբ հատույթը։", "Точки P, Q и R лежат на трёх рёбрах куба. Ищем сечение плоскостью PQR."),
    t("P and Q lie in the top face, so join them. P and R lie in the front face: join them too.", "P-ն և Q-ն գտնվում են վերին նիստում, ուստի միացրո՛ւ դրանք։ P-ն և R-ը գտնվում են առջևի նիստում․ միացրո՛ւ նաև դրանք։", "P и Q лежат в верхней грани, соедини их. P и R лежат в передней грани: соедини и их."),
    t("The top and bottom faces are parallel, so the plane cuts them along parallel lines: through R draw a line parallel to PQ. It meets an edge at S.", "Վերին և ստորին նիստերը զուգահեռ են, ուստի հարթությունը դրանք հատում է զուգահեռ ուղիղներով․ R-ով տա՛ր PQ-ին զուգահեռ ուղիղ։ Այն կողը հատում է S կետում։", "Верхняя и нижняя грани параллельны, поэтому плоскость пересекает их по параллельным прямым: через R проведи прямую, параллельную PQ. Она пересечёт ребро в точке S."),
    t("S and Q lie in the right face: join them. The section PQSR is a trapezoid, because PQ ∥ RS.", "S-ը և Q-ն գտնվում են աջ նիստում․ միացրո՛ւ դրանք։ PQSR հատույթը սեղան է, քանի որ PQ ∥ RS։", "S и Q лежат в правой грани: соедини их. Сечение PQSR — трапеция, ведь PQ ∥ RS."),
  ],
  draw: (i, p) => {
    const k = ease(p);
    const s = 110, o = { x: 90, y: 190 }, dx = 55, dy = -40;
    const v = (x: number, y: number, z: number) => ({ x: o.x + x * s + z * dx, y: o.y - y * s + z * dy });
    const V = [v(0, 0, 0), v(1, 0, 0), v(1, 1, 0), v(0, 1, 0), v(0, 0, 1), v(1, 0, 1), v(1, 1, 1), v(0, 1, 1)];
    const E: Array<[number, number, boolean]> = [[0, 1, true], [1, 2, true], [2, 3, true], [3, 0, true], [4, 5, false], [5, 6, true], [6, 7, true], [7, 4, false], [0, 4, false], [1, 5, true], [2, 6, true], [3, 7, true]];
    const P = v(0.3, 1, 0), Q = v(1, 1, 0.7), R = v(0.6, 0, 0), S = v(1, 0, 0.4);
    const pts: Array<[Pt, string, number, number]> = [[P, "P", -6, -8], [Q, "Q", 12, -2], [R, "R", -4, 16], [S, "S", 12, 10]];
    return (
      <g>
        {i === 3 ? <polygon points={[P, Q, S, R].map((h) => `${h.x},${h.y}`).join(" ")} fill="#f472b6" fillOpacity={0.4 * k} /> : null}
        {E.map(([a, b, vis], n) => <Ln key={n} a={V[a]} b={V[b]} dash={vis ? undefined : "4 3"} w={vis ? 2 : 1.2} color={vis ? INK : SOFT} />)}
        {i >= 1 ? <><Ln a={P} b={Q} color={NEW} k={i === 1 ? k : 1} /><Ln a={P} b={R} color={NEW} k={i === 1 ? k : 1} /></> : null}
        {i >= 2 ? <Ln a={R} b={S} color={ARC} dash="5 4" k={i === 2 ? k : 1} /> : null}
        {i >= 3 ? <Ln a={S} b={Q} color={NEW} k={k} /> : null}
        {pts.map(([q, name, ox, oy], n) => (n < 3 || i >= 2 ? <g key={n}><Dot p={q} color={NEW} /><Tag x={q.x + ox} y={q.y + oy} color={NEW}>{name}</Tag></g> : null))}
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { midpoint, bisectAngle, perpendicular, copyAngle, sss, parallelLine, angleSum, threePerp, cubeSection };
