"use client";

import type { ArtLang } from "@/lib/art/spec";
import { L, t } from "../labels";
import { ease, scatter, Tag } from "./draw";
import type { Mech } from "./types";

/* Step-by-step primary science: the phases of the Moon. */

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const T = (lang: ArtLang, en: string, hy: string, ru: string) => L(t(en, hy, ru), lang);
const rad = (d: number) => (d * Math.PI) / 180;

/* ---------------- moon phases ---------------- */

/** Where the Moon is, as an angle round the Earth (0 = away from the Sun, anticlockwise as seen from the north). */
const MOON_AT = [180, 225, 270, 360, 450];
const DAY = [0, 4, 7, 15, 22];
const EX = 112, EY = 112, R = 64;

/** The Moon as seen from the Earth (northern hemisphere): e is the angle from the Sun, 0 = new, 180 = full. */
function Phase({ x, y, r, e }: { x: number; y: number; r: number; e: number }) {
  const ee = ((e % 360) + 360) % 360;
  const waxing = ee <= 180;
  const c = Math.cos(rad(ee));
  const rx = Math.max(0.01, r * Math.abs(c));
  const s1 = waxing ? 1 : 0;
  const s2 = waxing ? (c > 0 ? 0 : 1) : (c > 0 ? 1 : 0);
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#334155" />
      <path d={`M${x},${y - r} A${r},${r} 0 0 ${s1} ${x},${y + r} A${rx},${r} 0 0 ${s2} ${x},${y - r} Z`} fill="#fef9c3" />
      <circle cx={x} cy={y} r={r} fill="none" stroke="#64748b" strokeWidth="1" />
    </g>
  );
}

const moonphases: Mech = {
  title: t("Why the Moon changes its shape", "Ինչու է Լուսինը փոխում իր տեսքը", "Почему Луна меняет свой вид"),
  hint: t("Left: the view from far above the North Pole. Right: what we see from the Earth.", "Ձախում՝ տեսքը Հյուսիսային բևեռից շատ վերևից։ Աջում՝ այն, ինչ տեսնում ենք Երկրից։", "Слева — вид издалека над Северным полюсом. Справа — что мы видим с Земли."),
  caps: [
    t("New moon: the Moon is between the Earth and the Sun. Its lit half faces away from us, so we cannot see it.", "Նոր լուսին․ Լուսինը Երկրի և Արեգակի միջև է։ Նրա լուսավորված կեսը նայում է մեզանից հակառակ կողմ, և մենք այն չենք տեսնում։", "Новолуние: Луна между Землёй и Солнцем. Её освещённая половина обращена от нас, и мы её не видим."),
    t("A few days later the Moon has moved along its path. We see a thin edge of the lit half: a waxing crescent in the evening sky.", "Մի քանի օր անց Լուսինը առաջ է շարժվել իր ուղեծրով։ Մենք տեսնում ենք լուսավորված կեսի բարակ եզրը՝ աճող մահիկ երեկոյան երկնքում։", "Через несколько дней Луна продвинулась по своему пути. Мы видим тонкий край освещённой половины — растущий месяц на вечернем небе."),
    t("About a week after the new moon we look at the Moon from the side: half of the lit half faces us. That is the half moon.", "Նոր լուսնից մոտ մեկ շաբաթ անց մենք Լուսնին նայում ենք կողքից․ լուսավորված կեսի կեսն է նայում մեզ։ Սա կիսալուսինն է։", "Примерно через неделю после новолуния мы смотрим на Луну сбоку: к нам обращена половина освещённой половины. Это половина Луны."),
    t("About two weeks after the new moon the Earth is between the Sun and the Moon. The whole lit half faces us: a full moon, rising at sunset.", "Նոր լուսնից մոտ երկու շաբաթ անց Երկիրն Արեգակի և Լուսնի միջև է։ Ամբողջ լուսավորված կեսը նայում է մեզ․ լիալուսին, որը ծագում է մայրամուտին։", "Примерно через две недели после новолуния Земля между Солнцем и Луной. К нам обращена вся освещённая половина — полнолуние, Луна восходит на закате."),
    t("Then the lit part shrinks from the other side: a waning moon, seen in the morning. About 29 and a half days after one new moon comes the next.", "Հետո լուսավորված մասը փոքրանում է մյուս կողմից․ նվազող լուսին, որը երևում է առավոտյան։ Մի նոր լուսնից մոտ 29 ու կես օր անց գալիս է հաջորդը։", "Потом освещённая часть уменьшается с другой стороны — убывающая Луна, её видно утром. Примерно через 29 с половиной дней после одного новолуния наступает следующее."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.6));
    const a = lerp(i === 0 ? 135 : MOON_AT[i - 1], MOON_AT[i], k);
    const mx = EX + R * Math.cos(rad(a)), my = EY - R * Math.sin(rad(a));
    const label = [
      T(lang, "New moon", "Նոր լուսին", "Новолуние"),
      T(lang, "Waxing crescent", "Աճող մահիկ", "Растущий месяц"),
      T(lang, "Half moon", "Կիսալուսին", "Половина Луны"),
      T(lang, "Full moon", "Լիալուսին", "Полнолуние"),
      T(lang, "Waning moon", "Նվազող լուսին", "Убывающая Луна"),
    ][i];
    return (
      <g>
        <rect width="320" height="220" fill="#0f172a" />
        {scatter(36, 0, 0, 320, 220, 5).map((q, j) => <circle key={j} cx={q.x} cy={q.y} r="0.8" fill="#e2e8f0" opacity="0.5" />)}
        {/* sunlight from the left */}
        <circle cx="-30" cy="112" r="44" fill="#facc15" />
        {[40, 76, 112, 148, 184].map((y, j) => (
          <line key={j} x1="20" y1={y} x2="34" y2={y} stroke="#fde047" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        ))}
        <Tag x={8} y={20} color="#fde68a" anchor="start" plain>{T(lang, "Sunlight", "Արևի լույս", "Свет Солнца")}</Tag>
        <circle cx={EX} cy={EY} r={R} fill="none" stroke="#475569" strokeDasharray="3 4" />
        {/* the Earth: day on the side facing the Sun */}
        <circle cx={EX} cy={EY} r="16" fill="#1e3a8a" />
        <path d={`M${EX},${EY - 16} A16,16 0 0 0 ${EX},${EY + 16} Z`} fill="#60a5fa" />
        <Tag x={EX} y={EY + 30} color="#bfdbfe" plain>{T(lang, "Earth", "Երկիր", "Земля")}</Tag>
        {/* the Moon: always lit on the side facing the Sun */}
        <circle cx={mx} cy={my} r="8" fill="#334155" />
        <path d={`M${mx},${my - 8} A8,8 0 0 0 ${mx},${my + 8} Z`} fill="#fef9c3" />
        <line x1={EX} y1={EY} x2={mx} y2={my} stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.7" />
        {/* what we see */}
        <rect x="200" y="38" width="108" height="136" rx="10" fill="#1e293b" stroke="#334155" />
        <Tag x={254} y={56} color="#cbd5e1" plain>{T(lang, "From the Earth", "Երկրից", "С Земли")}</Tag>
        <Phase x={254} y={110} r={34} e={a - 180} />
        <Tag x={254} y={164} color="#fef08a" plain>{label}</Tag>
        <Tag x={160} y={212} color="#94a3b8" plain>{T(lang, `day ${DAY[i]} of 29.5`, `օր ${DAY[i]}՝ 29,5-ից`, `день ${DAY[i]} из 29,5`)}</Tag>
      </g>
    );
  },
  dark: true,
};

export const MECHS: Record<string, Mech> = { moonphases };
