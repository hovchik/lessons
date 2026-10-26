"use client";

import { useState, type ReactElement } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, deg, fmt, Note, rad, Readouts, Slider, Stage, useDrag } from "../kit";
import { L, t, UI, un } from "../labels";

const W = {
  reflection: t("Experiment: reflection", "Փորձ․ անդրադարձում", "Опыт: отражение"),
  reflectionHint: t(
    "Turn the laser. The angle of reflection always equals the angle of incidence; both are measured from the normal (the dashed line).",
    "Պտտի՛ր լազերը։ Անդրադարձման անկյունը միշտ հավասար է անկման անկյանը․ երկուսն էլ չափվում են ուղղահայացից (կետագծից)։",
    "Поворачивай лазер. Угол отражения всегда равен углу падения; оба отсчитываются от перпендикуляра (пунктир).",
  ),
  mirror: t("Experiment: the image in a plane mirror", "Փորձ․ պատկերը հարթ հայելում", "Опыт: изображение в плоском зеркале"),
  mirrorHint: t(
    "Drag the candle and the eye. The image is as far behind the mirror as the candle is in front of it. The rays only seem to come from there.",
    "Քաշի՛ր մոմը և աչքը։ Պատկերը հայելու հետևում է այնքան հեռու, որքան մոմը՝ առջևում։ Ճառագայթները միայն թվում է, թե գալիս են այնտեղից։",
    "Перемещай свечу и глаз. Изображение находится за зеркалом так же далеко, как свеча перед ним. Лучи лишь кажутся идущими оттуда.",
  ),
  refraction: t("Experiment: refraction", "Փորձ․ բեկում", "Опыт: преломление"),
  refractionHint: t(
    "Light bends at the border of two media: n₁·sin α = n₂·sin β. Send the ray from glass into air at a steep angle to see total internal reflection.",
    "Լույսը բեկվում է երկու միջավայրերի սահմանին․ n₁·sin α = n₂·sin β։ Ապակուց օդ ուղարկի՛ր ճառագայթը մեծ անկյան տակ՝ տեսնելու լրիվ ներքին անդրադարձումը։",
    "Свет преломляется на границе двух сред: n₁·sin α = n₂·sin β. Направь луч из стекла в воздух под большим углом, чтобы увидеть полное внутреннее отражение.",
  ),
  lens: t("Experiment: images formed by a lens", "Փորձ․ ոսպնյակի տված պատկերները", "Опыт: изображения в линзе"),
  lensHint: t(
    "Drag the candle along the axis. Follow the three special rays and see where the image appears: real or virtual, larger or smaller, upright or upside down.",
    "Քաշի՛ր մոմը առանցքի երկայնքով։ Հետևի՛ր երեք հատուկ ճառագայթներին և տե՛ս, թե որտեղ է պատկերը․ իրական, թե կեղծ, մեծ, թե փոքր, ուղիղ, թե շրջված։",
    "Двигай свечу вдоль оси. Следи за тремя особыми лучами и смотри, где получается изображение: действительное или мнимое, больше или меньше, прямое или перевёрнутое.",
  ),
  prism: t("Experiment: a prism splits white light", "Փորձ․ պրիզման բաժանում է սպիտակ լույսը", "Опыт: призма разлагает белый свет"),
  prismHint: t(
    "White light is a mix of colours. Glass bends violet a little more than red, so the colours fan out into a spectrum (Newton's experiment).",
    "Սպիտակ լույսը գույների խառնուրդ է։ Ապակին մանուշակագույնը բեկում է մի փոքր ավելի, քան կարմիրը, ուստի գույները բացվում են սպեկտրի (Նյուտոնի փորձը)։",
    "Белый свет — смесь цветов. Стекло преломляет фиолетовый чуть сильнее красного, поэтому цвета расходятся веером в спектр (опыт Ньютона).",
  ),
  shadow: t("Experiment: shadow and half-shadow", "Փորձ․ ստվեր և կիսաստվեր", "Опыт: тень и полутень"),
  shadowHint: t(
    "Light travels in straight lines. A tiny lamp gives a sharp shadow; a big lamp gives a dark umbra with a lighter penumbra around it, like in a solar eclipse.",
    "Լույսը տարածվում է ուղիղ գծերով։ Փոքրիկ լամպը տալիս է հստակ ստվեր, մեծ լամպը՝ մութ ստվեր և դրա շուրջը ավելի բաց կիսաստվեր, ինչպես Արեգակի խավարման ժամանակ։",
    "Свет распространяется прямолинейно. Маленькая лампа даёт резкую тень, большая — тёмную тень и светлую полутень вокруг, как при солнечном затмении.",
  ),
  eye: t("Experiment: the eye and glasses", "Փորձ․ աչքը և ակնոցները", "Опыт: глаз и очки"),
  eyeHint: t(
    "A sharp picture needs the rays to meet on the retina. In short sight they meet in front of it, in long sight behind it. Put on the right glasses.",
    "Հստակ պատկերի համար ճառագայթները պետք է հատվեն ցանցաթաղանթի վրա։ Կարճատեսության դեպքում դրանք հատվում են դրա առջևում, հեռատեսության դեպքում՝ հետևում։ Դի՛ր ճիշտ ակնոցները։",
    "Для резкого изображения лучи должны сходиться на сетчатке. При близорукости они сходятся перед ней, при дальнозоркости — за ней. Надень правильные очки.",
  ),
  angle: t("Angle of incidence α", "Անկման անկյուն α", "Угол падения α"),
  top: t("Upper medium", "Վերին միջավայր", "Верхняя среда"),
  bottom: t("Lower medium", "Ստորին միջավայր", "Нижняя среда"),
  air: t("air", "օդ", "воздух"),
  water: t("water", "ջուր", "вода"),
  glass: t("glass", "ապակի", "стекло"),
  diamond: t("diamond", "ադամանդ", "алмаз"),
  tir: t("Total internal reflection: no light leaves the denser medium.", "Լրիվ ներքին անդրադարձում․ լույսը դուրս չի գալիս ավելի խիտ միջավայրից։", "Полное внутреннее отражение: свет не выходит из оптически более плотной среды."),
  critical: t("Critical angle", "Սահմանային անկյուն", "Предельный угол"),
  refr: t("Angle of refraction β", "Բեկման անկյուն β", "Угол преломления β"),
  converging: t("Converging lens", "Հավաքող ոսպնյակ", "Собирающая линза"),
  diverging: t("Diverging lens", "Ցրող ոսպնյակ", "Рассеивающая линза"),
  focal: t("Focal length F", "Կիզակետային հեռավորություն F", "Фокусное расстояние F"),
  d: t("Object distance d", "Առարկայի հեռավորություն d", "Расстояние до предмета d"),
  f: t("Image distance f", "Պատկերի հեռավորություն f", "Расстояние до изображения f"),
  k: t("Magnification Γ", "Խոշորացում Γ", "Увеличение Γ"),
  power: t("Optical power D", "Օպտիկական ուժ D", "Оптическая сила D"),
  real: t("real, upside down", "իրական, շրջված", "действительное, перевёрнутое"),
  virtual: t("virtual, upright", "կեղծ, ուղիղ", "мнимое, прямое"),
  none: t("no image: the rays leave parallel", "պատկեր չկա․ ճառագայթները դուրս են գալիս զուգահեռ", "изображения нет: лучи выходят параллельно"),
  bigger: t("larger", "մեծացված", "увеличенное"),
  smaller: t("smaller", "փոքրացված", "уменьшенное"),
  apex: t("Prism angle", "Պրիզմայի անկյուն", "Угол призмы"),
  lampSize: t("Lamp size", "Լամպի չափ", "Размер лампы"),
  umbra: t("umbra", "ստվեր", "тень"),
  penumbra: t("penumbra", "կիսաստվեր", "полутень"),
  normal: t("normal", "նորմալ", "нормальное"),
  myopia: t("short sight", "կարճատեսություն", "близорукость"),
  hyperopia: t("long sight", "հեռատեսություն", "дальнозоркость"),
  glasses: t("Glasses", "Ակնոցներ", "Очки"),
  noGlasses: t("none", "առանց", "без очков"),
  minus: t("diverging (−)", "ցրող (−)", "рассеивающие (−)"),
  plus: t("converging (+)", "հավաքող (+)", "собирающие (+)"),
  sharp: t("Sharp: the rays meet on the retina.", "Հստակ է․ ճառագայթները հատվում են ցանցաթաղանթի վրա։", "Резко: лучи сходятся на сетчатке."),
  front: t("Blurred: the rays meet in front of the retina.", "Աղոտ է․ ճառագայթները հատվում են ցանցաթաղանթի առջևում։", "Размыто: лучи сходятся перед сетчаткой."),
  behind: t("Blurred: the rays would meet behind the retina.", "Աղոտ է․ ճառագայթները կհատվեին ցանցաթաղանթի հետևում։", "Размыто: лучи сошлись бы за сетчаткой."),
};
const N = { air: 1, water: 1.33, glass: 1.5, diamond: 2.42 } as const;
type Med = keyof typeof N;
const MED_COLOR: Record<Med, string> = { air: "#f8fafc", water: "#bae6fd", glass: "#cffafe", diamond: "#e0e7ff" };

export default function Optics({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "lens";
  if (m === "reflection") return <Reflection spec={spec} lang={lang} />;
  if (m === "mirror") return <Mirror spec={spec} lang={lang} />;
  if (m === "refraction") return <Refraction spec={spec} lang={lang} />;
  if (m === "prism") return <Prism spec={spec} lang={lang} />;
  if (m === "shadow") return <Shadow spec={spec} lang={lang} />;
  if (m === "eye") return <Eye spec={spec} lang={lang} />;
  return <Lens spec={spec} lang={lang} />;
}

const RAY = "#ef4444";

function Reflection({ spec, lang }: SimProps) {
  const [a, setA] = useState(40);
  const o = { x: 160, y: 160 };
  const r = 130;
  const src = { x: o.x - Math.sin(rad(a)) * r, y: o.y - Math.cos(rad(a)) * r };
  const out = { x: o.x + Math.sin(rad(a)) * r, y: o.y - Math.cos(rad(a)) * r };
  const arc = (from: number, to: number, rr: number) => `M ${o.x + Math.sin(rad(from)) * rr} ${o.y - Math.cos(rad(from)) * rr} A ${rr} ${rr} 0 0 ${to > from ? 1 : 0} ${o.x + Math.sin(rad(to)) * rr} ${o.y - Math.cos(rad(to)) * rr}`;
  return (
    <ArtFrame kind="experiment" title={L(W.reflection, lang)} body={spec.body || L(W.reflectionHint, lang)}>
      <Stage w={320} h={190} label={L(W.reflection, lang)}>
        <rect x="20" y="160" width="280" height="10" fill="#cbd5e1" />
        {Array.from({ length: 28 }, (_, i) => <line key={i} x1={24 + i * 10} y1="170" x2={18 + i * 10} y2="178" stroke="#94a3b8" />)}
        <line x1={o.x} y1={o.y} x2={o.x} y2="20" stroke="#64748b" strokeDasharray="4 3" />
        <path d={arc(-a, 0, 34)} fill="none" stroke="#2563eb" strokeWidth="2" />
        <path d={arc(0, a, 42)} fill="none" stroke="#059669" strokeWidth="2" />
        <text x={o.x - 30} y={o.y - 40} className="sim-tag" fill="#2563eb">α = {a}°</text>
        <text x={o.x + 14} y={o.y - 48} className="sim-tag" fill="#059669">β = {a}°</text>
        <Arrow x1={src.x} y1={src.y} x2={o.x} y2={o.y} color={RAY} width={2.5} />
        <Arrow x1={o.x} y1={o.y} x2={out.x} y2={out.y} color={RAY} width={2.5} />
        <rect x={src.x - 12} y={src.y - 6} width="24" height="12" rx="3" fill="#1e1b4b" transform={`rotate(${90 - a} ${src.x} ${src.y})`} />
      </Stage>
      <Controls>
        <Slider label={L(W.angle, lang)} value={a} min={0} max={85} step={5} unit="°" digits={0} lang={lang} onChange={setA} />
      </Controls>
    </ArtFrame>
  );
}

function Mirror({ spec, lang }: SimProps) {
  const [obj, setObj] = useState({ x: 90, y: 110 });
  const [eye, setEye] = useState({ x: 70, y: 40 });
  const mx = 180;
  const drag = useDrag<"o" | "e">(
    (p) => (Math.hypot(p.x - obj.x, p.y - obj.y) < 22 ? "o" : Math.hypot(p.x - eye.x, p.y - eye.y) < 22 ? "e" : null),
    (k, p) => {
      const q = { x: Math.min(mx - 15, Math.max(15, p.x)), y: Math.min(185, Math.max(15, p.y)) };
      if (k === "o") setObj(q); else setEye(q);
    },
  );
  const img = { x: 2 * mx - obj.x, y: obj.y };
  // where the ray from the image to the eye crosses the mirror
  const k = (mx - img.x) / (eye.x - img.x);
  const hit = { x: mx, y: img.y + (eye.y - img.y) * k };
  return (
    <ArtFrame kind="experiment" title={L(W.mirror, lang)} body={spec.body || L(W.mirrorHint, lang)}>
      <Stage w={320} h={200} label={L(W.mirror, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <rect x={mx} y="10" width="8" height="180" fill="#bae6fd" stroke="#0284c7" />
        <line x1={obj.x} y1={obj.y} x2={img.x} y2={img.y} stroke="#94a3b8" strokeDasharray="3 3" />
        <Arrow x1={obj.x} y1={obj.y - 10} x2={hit.x} y2={hit.y} color={RAY} width={2} />
        <Arrow x1={hit.x} y1={hit.y} x2={eye.x} y2={eye.y} color={RAY} width={2} />
        <line x1={hit.x} y1={hit.y} x2={img.x} y2={img.y - 10} stroke={RAY} strokeDasharray="4 3" opacity="0.6" />
        {[obj, img].map((c, i) => (
          <g key={i} opacity={i ? 0.45 : 1} className={i ? undefined : "sim-handle"}>
            <rect x={c.x - 5} y={c.y - 8} width="10" height="26" rx="2" fill="#fde68a" stroke="#a16207" />
            <path d={`M ${c.x} ${c.y - 22} q 6 8 0 14 q -6 -6 0 -14`} fill="#f97316" />
          </g>
        ))}
        <g className="sim-handle">
          <ellipse cx={eye.x} cy={eye.y} rx="14" ry="9" fill="#fff" stroke="#1e1b4b" strokeWidth="2" />
          <circle cx={eye.x + 4} cy={eye.y} r="4.5" fill="#1e1b4b" />
        </g>
        <text x={mx - 6} y="196" textAnchor="end" className="sim-small">{fmt((mx - obj.x) / 10, 1, lang)} {un("cm", lang)}</text>
        <text x={mx + 14} y="196" className="sim-small">{fmt((img.x - mx) / 10, 1, lang)} {un("cm", lang)}</text>
      </Stage>
      <p className="art-note">{L(UI.drag, lang)}</p>
    </ArtFrame>
  );
}

function Refraction({ spec, lang }: SimProps) {
  const [a, setA] = useState(40);
  const [m1, setM1] = useState<Med>((spec.opts.from as Med) ?? "air");
  const [m2, setM2] = useState<Med>((spec.opts.to as Med) ?? "water");
  const n1 = N[m1], n2 = N[m2];
  const s = (n1 * Math.sin(rad(a))) / n2;
  const tir = s > 1;
  const b = tir ? 0 : deg(Math.asin(s));
  const o = { x: 160, y: 100 };
  const r = 95;
  const src = { x: o.x - Math.sin(rad(a)) * r, y: o.y - Math.cos(rad(a)) * r };
  const refl = { x: o.x + Math.sin(rad(a)) * r, y: o.y - Math.cos(rad(a)) * r };
  const out = { x: o.x + Math.sin(rad(b)) * r, y: o.y + Math.cos(rad(b)) * r };
  const crit = n1 > n2 ? deg(Math.asin(n2 / n1)) : null;
  const opts = (Object.keys(N) as Med[]).map((k) => [k, `${L(W[k], lang)} ${String(N[k]).replace(".", lang === "en" ? "." : ",")}`] as [Med, string]);
  return (
    <ArtFrame kind="experiment" title={L(W.refraction, lang)} body={spec.body || L(W.refractionHint, lang)}>
      <Stage w={320} h={200} label={L(W.refraction, lang)}>
        <rect x="0" y="0" width="320" height="100" fill={MED_COLOR[m1]} />
        <rect x="0" y="100" width="320" height="100" fill={MED_COLOR[m2]} />
        <line x1="0" x2="320" y1="100" y2="100" stroke="#475569" />
        <line x1={o.x} y1="5" x2={o.x} y2="195" stroke="#64748b" strokeDasharray="4 3" />
        <Arrow x1={src.x} y1={src.y} x2={o.x} y2={o.y} color={RAY} width={2.5} />
        <line x1={o.x} y1={o.y} x2={refl.x} y2={refl.y} stroke={RAY} strokeWidth={tir ? 2.5 : 1} opacity={tir ? 1 : 0.35} />
        {!tir ? <Arrow x1={o.x} y1={o.y} x2={out.x} y2={out.y} color={RAY} width={2.5} /> : null}
        <text x="8" y="16" className="sim-tag" fill="#1e1b4b">n₁ = {fmt(n1, 2, lang)}</text>
        <text x="8" y="192" className="sim-tag" fill="#1e1b4b">n₂ = {fmt(n2, 2, lang)}</text>
        <text x={o.x - 52} y={o.y - 40} className="sim-tag" fill="#2563eb">α = {a}°</text>
        {!tir ? <text x={o.x + 8} y={o.y + 50} className="sim-tag" fill="#059669">β = {fmt(b, 1, lang)}°</text> : null}
      </Stage>
      {tir ? <Note tone="bad">{L(W.tir, lang)}</Note> : null}
      <Readouts items={[[L(W.refr, lang), tir ? "—" : `${fmt(b, 1, lang)}°`, "#059669"], ...(crit ? [[L(W.critical, lang), `${fmt(crit, 1, lang)}°`, "#e11d48"] as [string, string, string]] : [])]} />
      <Controls>
        <Slider label={L(W.angle, lang)} value={a} min={0} max={85} step={1} unit="°" digits={0} lang={lang} onChange={setA} />
        <p className="art-ctrl-label">{L(W.top, lang)}</p>
        <Choice value={m1} options={opts} onChange={setM1} />
        <p className="art-ctrl-label">{L(W.bottom, lang)}</p>
        <Choice value={m2} options={opts} onChange={setM2} />
      </Controls>
    </ArtFrame>
  );
}

function Lens({ spec, lang }: SimProps) {
  const [kind, setKind] = useState<"conv" | "div">(spec.opts.kind === "diverging" ? "div" : "conv");
  const [F, setF] = useState(50); // px; 10 px = 2 cm
  const [d, setD] = useState(130);
  const cx = 170, cy = 105, h = 34;
  const f = kind === "conv" ? F : -F;
  const drag = useDrag<"o">((p) => (Math.abs(p.x - (cx - d)) < 20 && p.y > cy - h - 20 && p.y < cy + 10 ? "o" : null), (_, p) => setD(Math.round(Math.min(160, Math.max(12, cx - p.x)))));
  const atF = Math.abs(d - f) < 1;
  const v = atF ? Infinity : (d * f) / (d - f); // image distance (positive: right side, real)
  const hi = Number.isFinite(v) ? (-h * v) / d : 0;
  const ox = cx - d, top = { x: ox, y: cy - h };
  const ix = cx + v, iy = cy - hi;
  const far = (x: number, y: number, x2: number, y2: number) => {
    // extend the ray from (x,y) through (x2,y2) to the frame edge
    const k = (330 - x) / (x2 - x || 1e-6);
    return { x: x + (x2 - x) * k, y: y + (y2 - y) * k };
  };
  const cm = (px: number) => px / 5;
  const rays: ReactElement[] = [];
  // 1) parallel to the axis, then through F' (or away from F for a diverging lens)
  rays.push(<line key="p1" x1={top.x} y1={top.y} x2={cx} y2={top.y} stroke={RAY} strokeWidth="1.8" />);
  const fp = { x: cx + f, y: cy };
  const r1 = far(cx, top.y, fp.x, fp.y);
  if (kind === "conv") rays.push(<line key="p2" x1={cx} y1={top.y} x2={r1.x} y2={r1.y} stroke={RAY} strokeWidth="1.8" />);
  else {
    // appears to come from the front focus F (left)
    const fx = cx - F;
    const end = far(fx, cy, cx, top.y);
    rays.push(<line key="p2" x1={cx} y1={top.y} x2={end.x} y2={end.y} stroke={RAY} strokeWidth="1.8" />);
    rays.push(<line key="p3" x1={fx} y1={cy} x2={cx} y2={top.y} stroke={RAY} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />);
  }
  // 2) through the centre, straight
  const c2 = far(top.x, top.y, cx, cy);
  rays.push(<line key="c" x1={top.x} y1={top.y} x2={c2.x} y2={c2.y} stroke="#f59e0b" strokeWidth="1.8" />);
  // virtual image: dashed extensions back
  const virtual = Number.isFinite(v) && v < 0;
  if (virtual) {
    rays.push(<line key="v1" x1={cx} y1={top.y} x2={ix} y2={iy} stroke={RAY} strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />);
    rays.push(<line key="v2" x1={top.x} y1={top.y} x2={ix} y2={iy} stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />);
  }
  const k = Number.isFinite(v) ? Math.abs(v / d) : Infinity;
  const kindText = !Number.isFinite(v) ? L(W.none, lang) : `${L(virtual ? W.virtual : W.real, lang)}, ${L(k > 1 ? W.bigger : W.smaller, lang)}`;
  return (
    <ArtFrame kind="experiment" title={L(W.lens, lang)} body={spec.body || L(W.lensHint, lang)}>
      <Stage w={330} h={210} label={L(W.lens, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <line x1="0" x2="330" y1={cy} y2={cy} stroke="#94a3b8" />
        {[-2, -1, 1, 2].map((m) => (
          <g key={m}>
            <circle cx={cx + m * F} cy={cy} r="3" fill="#1e1b4b" />
            <text x={cx + m * F} y={cy + 14} textAnchor="middle" className="sim-small">{Math.abs(m) === 2 ? "2F" : "F"}</text>
          </g>
        ))}
        {kind === "conv" ? (
          <path d={`M ${cx} ${cy - 80} Q ${cx + 14} ${cy} ${cx} ${cy + 80} Q ${cx - 14} ${cy} ${cx} ${cy - 80}`} fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
        ) : (
          <path d={`M ${cx - 9} ${cy - 80} L ${cx + 9} ${cy - 80} Q ${cx + 2} ${cy} ${cx + 9} ${cy + 80} L ${cx - 9} ${cy + 80} Q ${cx - 2} ${cy} ${cx - 9} ${cy - 80}`} fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" opacity="0.8" />
        )}
        {rays}
        <g className="sim-handle">
          <Arrow x1={ox} y1={cy} x2={ox} y2={cy - h} color="#4f46e5" width={4} />
          <circle cx={ox} cy={cy - h - 6} r="12" fill="#4f46e5" opacity="0.12" />
        </g>
        {Number.isFinite(v) && Math.abs(ix) < 2000 ? <Arrow x1={ix} y1={cy} x2={ix} y2={iy} color="#059669" width={4} dash={virtual ? "5 3" : undefined} /> : null}
      </Stage>
      <p className="art-note">{L(UI.drag, lang)} · {kindText}</p>
      <Readouts
        items={[
          [L(W.d, lang), `${fmt(cm(d), 1, lang)} ${un("cm", lang)}`, "#4f46e5"],
          [L(W.f, lang), Number.isFinite(v) ? `${fmt(cm(v), 1, lang)} ${un("cm", lang)}` : "∞", "#059669"],
          [L(W.k, lang), Number.isFinite(k) ? fmt(k, 2, lang) : "∞"],
          [L(W.power, lang), `${fmt(100 / cm(f), 1, lang)} ${un("D", lang)}`],
        ]}
      />
      <Controls>
        <Choice value={kind} options={[["conv", L(W.converging, lang)], ["div", L(W.diverging, lang)]]} onChange={setKind} />
        <Slider label={L(W.focal, lang)} value={F} min={30} max={70} step={5} unit="" digits={0} lang={lang} onChange={setF} />
      </Controls>
    </ArtFrame>
  );
}

type P = { x: number; y: number };
function refract(dir: P, nrm: P, n1: number, n2: number): P | null {
  // nrm points against the incoming ray
  const cos1 = -(dir.x * nrm.x + dir.y * nrm.y);
  const r = n1 / n2;
  const k = 1 - r * r * (1 - cos1 * cos1);
  if (k < 0) return null;
  const c2 = Math.sqrt(k);
  return { x: r * dir.x + (r * cos1 - c2) * nrm.x, y: r * dir.y + (r * cos1 - c2) * nrm.y };
}
function hitLine(p: P, d: P, a: P, b: P) {
  const ex = b.x - a.x, ey = b.y - a.y;
  const den = d.x * ey - d.y * ex;
  if (Math.abs(den) < 1e-9) return null;
  const tt = ((a.x - p.x) * ey - (a.y - p.y) * ex) / den;
  const u = ((a.x - p.x) * d.y - (a.y - p.y) * d.x) / den;
  return tt > 0 && u >= 0 && u <= 1 ? { x: p.x + d.x * tt, y: p.y + d.y * tt } : null;
}
const SPECTRUM: Array<[string, number]> = [["#ef4444", 1.51], ["#f97316", 1.514], ["#facc15", 1.518], ["#22c55e", 1.522], ["#06b6d4", 1.526], ["#3b82f6", 1.53], ["#8b5cf6", 1.535]];

function Prism({ spec, lang }: SimProps) {
  const [apex, setApex] = useState(60);
  const c = { x: 160, y: 120 }, side = 120;
  const half = rad(apex / 2);
  const height = side * Math.cos(half);
  const A = { x: c.x, y: c.y - height * 0.66 };
  const B = { x: c.x - side * Math.sin(half), y: A.y + height };
  const Cc = { x: c.x + side * Math.sin(half), y: A.y + height };
  const start = { x: 10, y: A.y + height * 0.62 };
  const dir0 = { x: 1, y: -0.12 };
  const n0 = Math.hypot(dir0.x, dir0.y);
  const d0 = { x: dir0.x / n0, y: dir0.y / n0 };
  const p1 = hitLine(start, d0, A, B);
  const norm = (a: P, b: P, out: boolean) => { const ex = b.x - a.x, ey = b.y - a.y, l = Math.hypot(ex, ey); const nx = ey / l, ny = -ex / l; return out ? { x: nx, y: ny } : { x: -nx, y: -ny }; };
  const paths: ReactElement[] = [];
  if (p1) {
    for (const [col, n] of SPECTRUM) {
      const nEx = 1.5 + (n - 1.51) * 6; // real dispersion is small; exaggerate it to see the fan
      const d1 = refract(d0, norm(A, B, true), 1, nEx);
      if (!d1) continue;
      const p2 = hitLine({ x: p1.x + d1.x * 0.1, y: p1.y + d1.y * 0.1 }, d1, A, Cc);
      if (!p2) continue;
      const d2 = refract(d1, norm(A, Cc, false), nEx, 1);
      if (!d2) continue;
      paths.push(<g key={col}><line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={col} strokeWidth="1.2" opacity="0.6" /><line x1={p2.x} y1={p2.y} x2={p2.x + d2.x * 220} y2={p2.y + d2.y * 220} stroke={col} strokeWidth="2.5" /></g>);
    }
  }
  return (
    <ArtFrame kind="experiment" title={L(W.prism, lang)} body={spec.body || L(W.prismHint, lang)}>
      <Stage w={320} h={200} label={L(W.prism, lang)} bg="#0f172a">
        {p1 ? <line x1={start.x} y1={start.y} x2={p1.x} y2={p1.y} stroke="#fff" strokeWidth="3" /> : null}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${Cc.x},${Cc.y}`} fill="#bae6fd" opacity="0.25" stroke="#e0f2fe" strokeWidth="1.5" />
        {paths}
      </Stage>
      <Controls>
        <Slider label={L(W.apex, lang)} value={apex} min={30} max={70} step={5} unit="°" digits={0} lang={lang} onChange={setApex} />
      </Controls>
    </ArtFrame>
  );
}

function Shadow({ spec, lang }: SimProps) {
  const [size, setSize] = useState(20);
  const L0 = { x: 40, y: 100 }, ob = { x: 160, y: 100, r: 22 }, sx = 300;
  const s1 = { x: L0.x, y: L0.y - size / 2 }, s2 = { x: L0.x, y: L0.y + size / 2 };
  const proj = (from: P, through: P) => ({ x: sx, y: from.y + ((through.y - from.y) * (sx - from.x)) / (through.x - from.x) });
  // umbra: no part of the lamp is seen, bounded by the rays from the top of the lamp past the top
  // of the ball and from the bottom past the bottom; the crossed rays bound the penumbra
  const uTop = proj(s1, { x: ob.x, y: ob.y - ob.r });
  const uBot = proj(s2, { x: ob.x, y: ob.y + ob.r });
  const pTop = proj(s2, { x: ob.x, y: ob.y - ob.r });
  const pBot = proj(s1, { x: ob.x, y: ob.y + ob.r });
  const umbra = uTop.y < uBot.y;
  return (
    <ArtFrame kind="experiment" title={L(W.shadow, lang)} body={spec.body || L(W.shadowHint, lang)}>
      <Stage w={320} h={200} label={L(W.shadow, lang)} bg="#1e293b">
        <polygon points={`${ob.x},${ob.y - ob.r} ${sx},${pTop.y} ${sx},${pBot.y} ${ob.x},${ob.y + ob.r}`} fill="#64748b" opacity="0.6" />
        {umbra ? <polygon points={`${ob.x},${ob.y - ob.r} ${sx},${uTop.y} ${sx},${uBot.y} ${ob.x},${ob.y + ob.r}`} fill="#020617" /> : null}
        <line x1={s2.x} y1={s2.y} x2={pTop.x} y2={pTop.y} stroke="#fde68a" strokeWidth="1" opacity="0.6" />
        <line x1={s1.x} y1={s1.y} x2={pBot.x} y2={pBot.y} stroke="#fde68a" strokeWidth="1" opacity="0.6" />
        <line x1={s1.x} y1={s1.y} x2={uTop.x} y2={uTop.y} stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" />
        <line x1={s2.x} y1={s2.y} x2={uBot.x} y2={uBot.y} stroke="#fde68a" strokeWidth="1" strokeDasharray="3 3" />
        <rect x={L0.x - 6} y={s1.y} width="12" height={Math.max(2, size)} rx="6" fill="#facc15" />
        <circle cx={ob.x} cy={ob.y} r={ob.r} fill="#3b82f6" />
        <rect x={sx} y="10" width="8" height="180" fill="#e2e8f0" />
        <text x={sx - 4} y={(uTop.y + uBot.y) / 2 + 4} textAnchor="end" className="sim-small" fill="#e2e8f0">{umbra ? L(W.umbra, lang) : ""}</text>
        {size > 2 ? <text x={sx - 4} y={pTop.y - 4} textAnchor="end" className="sim-small" fill="#e2e8f0">{L(W.penumbra, lang)}</text> : null}
      </Stage>
      <Controls>
        <Slider label={L(W.lampSize, lang)} value={size} min={0} max={80} step={5} digits={0} lang={lang} onChange={setSize} />
      </Controls>
    </ArtFrame>
  );
}

function Eye({ spec, lang }: SimProps) {
  const [eye, setEye] = useState<"normal" | "myopia" | "hyperopia">("myopia");
  const [gl, setGl] = useState<"none" | "minus" | "plus">("none");
  const retina = 250;
  const lensX = 150;
  // focus distance behind the lens for parallel rays
  let focus = eye === "normal" ? retina : eye === "myopia" ? 215 : 290;
  if (gl === "minus") focus += 35;
  if (gl === "plus") focus -= 40;
  const sharp = Math.abs(focus - retina) < 6;
  const ys = [-30, -15, 15, 30];
  return (
    <ArtFrame kind="experiment" title={L(W.eye, lang)} body={spec.body || L(W.eyeHint, lang)}>
      <Stage w={320} h={180} label={L(W.eye, lang)}>
        <ellipse cx="200" cy="90" rx="62" ry="58" fill="#fff7ed" stroke="#1e1b4b" strokeWidth="2" />
        <path d={`M ${retina} 50 Q ${retina + 14} 90 ${retina} 130`} fill="none" stroke="#e11d48" strokeWidth="4" />
        <ellipse cx={lensX} cy="90" rx="8" ry="26" fill="#bae6fd" stroke="#0284c7" />
        {gl !== "none" ? <ellipse cx="96" cy="90" rx={gl === "plus" ? 6 : 3} ry="30" fill="#e0f2fe" stroke="#475569" strokeWidth="2" /> : null}
        {ys.map((y) => {
          const fy = 90; // focus on the axis
          const ex = Math.min(retina, focus) ;
          const endY = 90 + y + ((fy - (90 + y)) * (ex - lensX)) / (focus - lensX);
          const pastY = focus < retina ? fy + ((fy - (90 + y)) * (retina - focus)) / (focus - lensX) : endY;
          return (
            <g key={y}>
              <line x1="10" y1={90 + y} x2={lensX} y2={90 + y} stroke={RAY} strokeWidth="1.5" />
              <line x1={lensX} y1={90 + y} x2={ex} y2={endY} stroke={RAY} strokeWidth="1.5" />
              {focus < retina ? <line x1={focus} y1={fy} x2={retina} y2={pastY} stroke={RAY} strokeWidth="1.5" /> : null}
            </g>
          );
        })}
        <circle cx={retina} cy="90" r={sharp ? 3 : 9} fill={sharp ? "#059669" : "#f97316"} opacity="0.7" />
      </Stage>
      <Note tone={sharp ? "good" : "bad"}>{L(sharp ? W.sharp : focus < retina ? W.front : W.behind, lang)}</Note>
      <Controls>
        <Choice value={eye} options={[["normal", L(W.normal, lang)], ["myopia", L(W.myopia, lang)], ["hyperopia", L(W.hyperopia, lang)]]} onChange={setEye} />
        <p className="art-ctrl-label">{L(W.glasses, lang)}</p>
        <Choice value={gl} options={[["none", L(W.noGlasses, lang)], ["minus", L(W.minus, lang)], ["plus", L(W.plus, lang)]]} onChange={setGl} />
      </Controls>
    </ArtFrame>
  );
}

