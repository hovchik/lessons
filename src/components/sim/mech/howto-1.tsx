"use client";

import { t } from "../labels";
import type { Mech } from "./types";
import { Adult, Arrow, Bubbles, Drop, Flame, GREEN, Ground, Hand, INK, K, Kid, Mark, Pill, RED, SKIN, SKIN_D, SOIL, Sun, Tree, Tx, WATER, WOOD, lerp, wob } from "./howto-draw";

/* How-to step players, grades 1–4. */

const GREENISH = "#4ade80";

/* ---------------- grade 1: washing hands ---------------- */

const Tap = ({ on, p }: { on: boolean; p: number }) => (
  <g>
    <rect x={150} y={8} width={60} height={14} rx={6} fill="#94a3b8" />
    <rect x={150} y={18} width={14} height={22} rx={5} fill="#94a3b8" />
    <circle cx={190} cy={14} r={6} fill="#64748b" />
    {on ? (
      <g>
        <rect x={152} y={40} width={10} height={78} fill={WATER} opacity="0.55" />
        {[0, 1, 2, 3].map((k) => <Drop key={k} x={157 + (k % 2 ? 3 : -3)} y={46 + ((p * 80 + k * 20) % 72)} s={3} fill="#0ea5e9" />)}
      </g>
    ) : null}
  </g>
);

const Timer = ({ secs, lang }: { secs: number; lang: "en" | "hy" | "ru" }) => {
  const a = (secs / 20) * Math.PI * 2;
  const x = 282 + Math.sin(a) * 18, y = 42 - Math.cos(a) * 18;
  return (
    <g>
      <circle cx={282} cy={42} r={18} fill="#fff" stroke="#cbd5e1" strokeWidth="4" />
      <path d={`M282,24 A18,18 0 ${a > Math.PI ? 1 : 0} 1 ${x},${y}`} fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
      <text x={282} y={46} textAnchor="middle" fontSize="11" fontWeight="900" fill={INK}>{Math.round(secs)}</text>
      <Tx x={282} y={74} s={t("seconds", "վայրկյան", "секунд")} lang={lang} size={7.5} fill="#475569" />
    </g>
  );
};

const handwash: Mech = {
  title: t("Washing hands, step by step", "Ձեռքերը լվանալը՝ քայլ առ քայլ", "Моем руки шаг за шагом"),
  hint: t("Do each step along with the picture. Steps 3 to 6 together take about 20 seconds.", "Յուրաքանչյուր քայլն արա՛ նկարի հետ միասին։ 3-6-րդ քայլերը միասին տևում են մոտ 20 վայրկյան։", "Делай каждый шаг вместе с картинкой. Шаги 3–6 вместе занимают около 20 секунд."),
  caps: [
    t("Wet your hands under the tap.", "Ծորակի տակ թրջի՛ր ձեռքերդ։", "Намочи руки под краном."),
    t("Put on some soap, then turn off the tap so you don't waste water.", "Օճառ վերցրու և փակի՛ր ծորակը, որպեսզի ջուրն իզուր չհոսի։", "Возьми мыло и закрой кран, чтобы вода не текла зря."),
    t("Rub your palms together until you get lots of foam.", "Ափերդ իրար շփի՛ր, մինչև շատ փրփուր գոյանա։", "Потри ладони друг о друга, пока не появится много пены."),
    t("Rub the back of each hand with the other palm.", "Մի ափով շփի՛ր մյուս ձեռքի հետնամասը, հետո՝ հակառակը։", "Потри ладонью тыльную сторону другой руки, потом наоборот."),
    t("Lace your fingers together and rub between them.", "Մատներդ միահյուսի՛ր և շփի՛ր դրանց արանքները։", "Сцепи пальцы и потри между ними."),
    t("Hold each thumb in the other hand and twist. Then rub your fingertips in your palm to clean under the nails.", "Բութ մատը բռնի՛ր մյուս ձեռքով և պտտի՛ր։ Հետո մատների ծայրերը շփի՛ր ափիդ՝ եղունգների տակը մաքրելու համար։", "Обхвати каждый большой палец другой рукой и покрути. Потом потри кончики пальцев о ладонь, чтобы очистить под ногтями."),
    t("Turn on the tap and rinse off all the foam.", "Բացի՛ր ծորակը և լվա՛ ամբողջ փրփուրը։", "Открой кран и смой всю пену."),
    t("Dry your hands with a clean towel. Done!", "Չորացրո՛ւ ձեռքերդ մաքուր սրբիչով։ Պատրաստ է։", "Вытри руки чистым полотенцем. Готово!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const w = wob(p, 3) * 6;
    const sink = <path d="M40,150 h240 l-20,50 h-200 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />;
    const secs = i < 2 ? 0 : i > 5 ? 20 : (i - 2) * 5 + p * 5;
    if (i === 0) return (
      <g>{sink}<Tap on p={p} /><Hand x={130} y={130} rot={-60} flip /><Hand x={186} y={130} rot={60} /></g>
    );
    if (i === 1) return (
      <g>
        {sink}<Tap on={false} p={p} />
        <rect x={238} y={92} width={30} height={46} rx={8} fill="#a78bfa" /><rect x={248} y={76} width={10} height={18} fill="#7c3aed" /><rect x={240} y={74} width={26} height={6} rx={3} fill="#7c3aed" />
        <Hand x={170} y={125} rot={-10} s={1.2} />
        <ellipse cx={170} cy={lerp(80, 120, k)} rx={7} ry={5} fill="#c4b5fd" stroke="#7c3aed" />
        <Arrow d="M240,80 C220,70 200,74 182,86" c="#7c3aed" />
      </g>
    );
    if (i === 2) return (
      <g>
        {sink}<Timer secs={secs} lang={lang} />
        <Hand x={145 + w} y={110} rot={-80} s={1.2} flip />
        <Hand x={175 - w} y={110} rot={80} s={1.2} />
        <Bubbles x={160} y={95} w={70} h={40} n={12} p={p} />
        <Arrow d="M120,150 C140,165 180,165 200,150" c="#0ea5e9" />
      </g>
    );
    if (i === 3) return (
      <g>
        {sink}<Timer secs={secs} lang={lang} />
        <Hand x={160} y={120} rot={-90} s={1.2} back />
        <Hand x={162 + w} y={104} rot={-90} s={1.1} flip />
        <Bubbles x={150} y={110} w={80} h={30} n={10} p={p} />
        <Arrow d="M110,80 h90" c="#0ea5e9" />
      </g>
    );
    if (i === 4) return (
      <g>
        {sink}<Timer secs={secs} lang={lang} />
        <Hand x={140} y={118 + w * 0.5} rot={-40} s={1.2} flip />
        <Hand x={180} y={118 - w * 0.5} rot={40} s={1.2} />
        <Bubbles x={160} y={88} w={50} h={30} n={8} p={p} />
        <Arrow d="M160,148 v-20" c="#0ea5e9" />
        <Arrow d="M160,60 v20" c="#0ea5e9" />
      </g>
    );
    if (i === 5) return (
      <g>
        {sink}<Timer secs={secs} lang={lang} />
        <Hand x={115} y={118} rot={0} s={1.1} />
        <circle cx={140} cy={92} r={12} fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 4" transform={`rotate(${p * 360} 140 92)`} />
        <Tx x={115} y={66} s={t("thumbs", "բութ մատներ", "большие пальцы")} lang={lang} />
        <Hand x={215} y={120} rot={0} s={1.1} flip />
        <g transform={`rotate(${w * 4} 215 112)`}><circle cx={215} cy={112} r={7} fill={SKIN} stroke={SKIN_D} /><circle cx={208} cy={108} r={5} fill={SKIN} stroke={SKIN_D} /><circle cx={222} cy={108} r={5} fill={SKIN} stroke={SKIN_D} /></g>
        <Tx x={215} y={66} s={t("under the nails", "եղունգների տակ", "под ногтями")} lang={lang} />
      </g>
    );
    if (i === 6) return (
      <g>
        {sink}<Tap on p={p} />
        <Hand x={135} y={128} rot={-60} flip /><Hand x={180} y={128} rot={60} />
        <Bubbles x={160} y={lerp(120, 175, p)} w={70} h={14} n={6} p={p} />
      </g>
    );
    return (
      <g>
        {sink}
        <rect x={120 + w} y={70} width={80} height={70} rx={8} fill="#fda4af" />
        {[0, 1, 2].map((r) => <line key={r} x1={124 + w} y1={84 + r * 18} x2={196 + w} y2={84 + r * 18} stroke="#fb7185" strokeWidth="3" />)}
        <Hand x={128} y={128} rot={-30} flip /><Hand x={192} y={128} rot={30} />
        <Mark x={160} y={40} ok r={13} />
      </g>
    );
  },
};

/* ---------------- grade 1: calling for help ---------------- */

const Phone = ({ children, glow }: { children?: React.ReactNode; glow?: boolean }) => (
  <g>
    {glow ? <rect x={176} y={18} width={108} height={190} rx={18} fill="#fde68a" opacity="0.6" /> : null}
    <rect x={180} y={22} width={100} height={182} rx={16} fill="#1e293b" />
    <rect x={186} y={36} width={88} height={150} rx={6} fill="#f8fafc" />
    <circle cx={230} cy={196} r={5} fill="#475569" />
    {children}
  </g>
);

const Bubble = ({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: React.ReactNode }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={10} fill="#fff" stroke="#6366f1" strokeWidth="1.5" />
    <path d={`M${x + 18},${y + h} l-6,12 l16,-12`} fill="#fff" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x={x + 10} y={y + h - 2} width={18} height={3} fill="#fff" />
    {children}
  </g>
);

const keypad = (hot: number[], p: number) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  return keys.map((ch, k) => {
    const x = 200 + (k % 3) * 30, y = 92 + Math.floor(k / 3) * 22;
    const on = hot.includes(k) && (k === 0 ? p < 0.66 : p > 0.55 || k !== 1);
    return (
      <g key={k}>
        <circle cx={x} cy={y} r={9} fill={on ? "#16a34a" : "#e2e8f0"} />
        <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontWeight="900" fill={on ? "#fff" : INK}>{ch}</text>
      </g>
    );
  });
};

const callhelp: Mech = {
  title: t("Calling for help", "Ինչպես օգնություն կանչել", "Как вызвать помощь"),
  hint: t("112 works in Armenia, in Russia and in many other countries, even from a phone with no money on it.", "112 համարն աշխատում է Հայաստանում, Ռուսաստանում և շատ այլ երկրներում, նույնիսկ եթե հեռախոսում գումար չկա։", "Номер 112 работает в Армении, в России и во многих других странах, даже если на телефоне нет денег."),
  caps: [
    t("Something bad has happened: a fire, someone is badly hurt or lies very still. First move away from the danger.", "Ինչ-որ վատ բան է պատահել․ հրդեհ է, մեկը ծանր վնասվել է կամ պառկած է ու չի շարժվում։ Նախ հեռացի՛ր վտանգից։", "Случилось что-то плохое: пожар, кто-то сильно поранился или лежит и не двигается. Сначала отойди от опасности."),
    t("Call a grown-up you know. If nobody is near, dial 1, 1, 2 on any phone.", "Կանչի՛ր ծանոթ մեծահասակի։ Եթե մոտակայքում ոչ ոք չկա, ցանկացած հեռախոսով հավաքի՛ր 1, 1, 2։", "Позови знакомого взрослого. Если рядом никого нет, набери 1, 1, 2 на любом телефоне."),
    t("Say what has happened: \"My grandma fell and doesn't wake up.\"", "Ասա՛, թե ինչ է պատահել․ «Տատիկս ընկել է և չի արթնանում»։", "Скажи, что случилось: «Бабушка упала и не просыпается»."),
    t("Say where you are: the town, the street, the house and the flat number.", "Ասա՛, թե որտեղ ես․ քաղաքը, փողոցը, տան և բնակարանի համարը։", "Скажи, где ты: город, улицу, номер дома и квартиры."),
    t("Say your name and answer the questions. Speak slowly and clearly.", "Ասա՛ անունդ և պատասխանի՛ր հարցերին։ Խոսի՛ր դանդաղ և պարզ։", "Назови своё имя и отвечай на вопросы. Говори медленно и чётко."),
    t("Don't hang up until they tell you to. Help is on the way!", "Մի՛ անջատիր, մինչև քեզ չասեն։ Օգնությունն արդեն ճանապարհին է։", "Не клади трубку, пока тебе не скажут. Помощь уже едет!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <Ground y={190} />
        <rect x={190} y={90} width={90} height={100} fill="#fde68a" stroke={WOOD} strokeWidth="2" />
        <path d="M180,92 l55,-40 l55,40 Z" fill="#b91c1c" />
        <rect x={210} y={120} width={22} height={22} fill="#7dd3fc" stroke={WOOD} />
        <Flame x={222} y={118} s={26} p={p} />
        <Flame x={262} y={88} s={20} p={p + 0.3} />
        <Kid x={lerp(150, 70, k)} y={190} arms={[60, 60]} />
        <Arrow d="M150,150 h-60" c={RED} />
      </g>
    );
    if (i === 1) return (
      <g>
        <Kid x={90} y={200} s={1.6} arms={[10, 150]} />
        <Phone>
          <Tx x={230} y={58} s={t("Emergency", "Արտակարգ", "Экстренный")} lang={lang} size={9} fill={RED} />
          <text x={230} y={78} textAnchor="middle" fontSize="18" fontWeight="900" fill={INK}>{p < 0.33 ? "1" : p < 0.55 ? "11" : "112"}</text>
          {keypad([0, 1], p)}
        </Phone>
      </g>
    );
    const say = [
      { e: t("WHAT?", "Ի՞ՆՉ", "ЧТО?"), s: t("Grandma fell|and doesn't|wake up", "Տատիկն ընկել է|և չի|արթնանում", "Бабушка упала|и не|просыпается") },
      { e: t("WHERE?", "ՈՐՏԵ՞Ղ", "ГДЕ?"), s: t("Yerevan,|12 Abovyan St,|flat 5", "Երևան,|Աբովյան 12,|բն․ 5", "Ереван,|ул. Абовяна, 12,|кв. 5") },
      { e: t("WHO?", "Ո՞Վ", "КТО?"), s: t("My name|is Ani,|I am 7", "Անունս|Անի է,|7 տարեկան եմ", "Меня зовут|Ани,|мне 7 лет") },
    ];
    if (i >= 2 && i <= 4) {
      const b = say[i - 2];
      return (
        <g>
          <Kid x={70} y={205} s={1.6} arms={[10, 160]} />
          <Bubble x={100} y={26} w={100} h={62}>
            <Tx x={150} y={44} s={b.e} lang={lang} size={11} fill={RED} w={900} />
            <Tx x={150} y={58} s={b.s} lang={lang} size={8} />
          </Bubble>
          <Phone>
            <circle cx={230} cy={100} r={22} fill="#dcfce7" />
            <path d="M220,92 q4,-6 8,0 l-2,4 q4,8 10,10 l4,-2 q6,4 0,8 q-14,4 -24,-14 Z" fill="#16a34a" />
            <Tx x={230} y={146} s={t("112 is listening", "112-ը լսում է", "112 слушает")} lang={lang} size={8.5} />
            <text x={230} y={166} textAnchor="middle" fontSize="10" fontWeight="800" fill="#16a34a">{`0:${String(10 + i * 12 + Math.floor(p * 10)).padStart(2, "0")}`}</text>
          </Phone>
        </g>
      );
    }
    return (
      <g>
        <Ground y={190} fill="#cbd5e1" />
        <g transform={`translate(${lerp(-120, 0, k)},0)`}>
          <rect x={30} y={120} width={130} height={56} rx={10} fill="#fff" stroke="#94a3b8" strokeWidth="2" />
          <rect x={150} y={136} width={30} height={40} rx={6} fill="#fff" stroke="#94a3b8" strokeWidth="2" />
          <rect x={60} y={134} width={30} height={22} fill="#e2e8f0" />
          <path d="M115,134 h12 v-8 h8 v8 h12 v8 h-12 v8 h-8 v-8 h-12 Z" fill={RED} />
          <rect x={80} y={110} width={24} height={10} rx={3} fill={p % 0.5 < 0.25 ? "#3b82f6" : RED} />
          <circle cx={62} cy={180} r={11} fill="#334155" /><circle cx={150} cy={180} r={11} fill="#334155" />
        </g>
        <Kid x={260} y={190} arms={[150, 150]} />
        <Mark x={260} y={110} ok r={12} />
      </g>
    );
  },
};

/* ---------------- grade 1: a bean in a jar ---------------- */

const Jar = ({ water = 12 }: { water?: number }) => (
  <g>
    <rect x={110} y={52} width={100} height={150} rx={14} fill="#e0f2fe" fillOpacity="0.5" stroke="#7dd3fc" strokeWidth="3" />
    <rect x={106} y={44} width={108} height={12} rx={4} fill="#bae6fd" />
    <rect x={114} y={60} width={92} height={138} rx={10} fill="#fff" opacity="0.9" />
    <rect x={113} y={198 - water} width={94} height={water} rx={4} fill={WATER} opacity="0.6" />
  </g>
);

const Bean = ({ x, y, s = 1, swell = 0 }: { x: number; y: number; s?: number; swell?: number }) => (
  <ellipse cx={x} cy={y} rx={(11 + swell * 3) * s} ry={(7 + swell * 2) * s} fill="#b45309" stroke="#78350f" strokeWidth="1.2" />
);

const beanjar: Mech = {
  title: t("Watch a bean grow", "Հետևի՛ր, թե ինչպես է լոբին աճում", "Смотрим, как растёт фасоль"),
  hint: t("You need a glass jar, kitchen paper, water and two or three dry beans.", "Քեզ պետք է ապակե տարա, խոհանոցային թուղթ, ջուր և երկու-երեք չոր լոբի։", "Нужны стеклянная банка, бумажное полотенце, вода и две-три сухие фасолины."),
  caps: [
    t("Line the jar with folded kitchen paper and pour a little water in the bottom.", "Տարայի ներսը շարի՛ր ծալված խոհանոցային թղթով և հատակին մի քիչ ջուր լցրու։", "Выстели банку сложенным бумажным полотенцем и налей на дно немного воды."),
    t("Push the beans between the glass and the paper, halfway up, so you can see them.", "Լոբիները խոթի՛ր ապակու և թղթի արանքը՝ մինչև կեսը, որ տեսնես դրանք։", "Засунь фасолины между стеклом и бумагой, на середину высоты, чтобы их было видно."),
    t("Day 2: the bean drinks water and swells. Keep the paper wet, but don't drown the bean.", "2-րդ օր․ լոբին ջուր է խմում և ուռչում։ Թուղթը թաց պահի՛ր, բայց լոբին ջրի մեջ մի՛ թաղիր։", "День 2: фасолина пьёт воду и набухает. Держи бумагу влажной, но не топи фасолину."),
    t("Day 3–4: the skin splits and a little root grows down. Roots always grow down!", "3-4-րդ օր․ կեղևը ճաքում է, և փոքրիկ արմատն աճում է դեպի ներքև։ Արմատները միշտ ներքև են աճում։", "День 3–4: кожура лопается, и маленький корешок растёт вниз. Корни всегда растут вниз!"),
    t("Day 5–7: a green shoot grows up towards the light.", "5-7-րդ օր․ կանաչ ցողունն աճում է դեպի վեր՝ լույսի կողմը։", "День 5–7: зелёный росток тянется вверх, к свету."),
    t("Day 8–10: the first leaves open. Now plant your bean in a pot of soil.", "8-10-րդ օր․ բացվում են առաջին տերևները։ Հիմա լոբին տնկի՛ր հողով ամանի մեջ։", "День 8–10: раскрываются первые листья. Теперь посади фасоль в горшок с землёй."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <Jar water={lerp(0, 14, k)} />
        <Arrow d="M250,30 C235,20 215,30 205,60" c="#0ea5e9" />
        <Drop x={256} y={40} s={8} />
        <Tx x={160} y={20} s={t("kitchen paper inside", "ներսում՝ խոհանոցային թուղթ", "внутри — бумажное полотенце")} lang={lang} />
      </g>
    );
    if (i === 1) return (
      <g>
        <Jar />
        <Bean x={lerp(270, 150, k)} y={lerp(60, 120, k)} />
        <Bean x={180} y={124} />
        <Arrow d="M280,50 C260,60 200,90 165,112" c="#b45309" />
      </g>
    );
    const swell = i === 2 ? k : 1;
    const root = i < 3 ? 0 : i === 3 ? k * 40 : 46;
    const shoot = i < 4 ? 0 : i === 4 ? k * 40 : 52;
    const leaf = i < 5 ? 0 : k;
    return (
      <g>
        <Jar />
        <path d={`M150,128 q-4,${root / 2} 2,${root}`} stroke="#d6b77a" strokeWidth="4" fill="none" strokeLinecap="round" />
        {root > 20 ? <path d={`M150,${128 + root * 0.6} l-10,8 M151,${128 + root * 0.8} l9,7`} stroke="#d6b77a" strokeWidth="2" /> : null}
        <path d={`M150,116 q-6,${-shoot / 2} 2,${-shoot}`} stroke={GREENISH} strokeWidth="4" fill="none" strokeLinecap="round" />
        {leaf ? (
          <g>
            <ellipse cx={152 - 12 * leaf} cy={116 - shoot} rx={12 * leaf} ry={6 * leaf} fill="#22c55e" transform={`rotate(-20 ${152 - 12 * leaf} ${116 - shoot})`} />
            <ellipse cx={152 + 12 * leaf} cy={116 - shoot} rx={12 * leaf} ry={6 * leaf} fill="#22c55e" transform={`rotate(20 ${152 + 12 * leaf} ${116 - shoot})`} />
          </g>
        ) : null}
        <Bean x={150} y={122} swell={swell} />
        <Sun x={270} y={36} p={p} />
        {i === 3 ? <Tx x={250} y={170} s={t("root:|down", "արմատ՝|ներքև", "корень:|вниз")} lang={lang} fill={SOIL} /> : null}
        {i === 4 ? <Tx x={250} y={110} s={t("shoot:|up", "ցողուն՝|վեր", "росток:|вверх")} lang={lang} fill="#15803d" /> : null}
        {i === 5 ? <Pill x={260} y={190} s={t("plant it!", "տնկի՛ր", "сажай!")} lang={lang} w={70} fill="#dcfce7" stroke="#16a34a" color="#15803d" /> : null}
      </g>
    );
  },
};
/* ---------------- grade 2: tying shoelaces ---------------- */

const LACE_A = "#e11d48", LACE_B = "#2563eb";
const Shoe = () => (
  <g>
    <path d="M160,20 C215,20 228,70 226,120 C224,170 210,212 160,212 C110,212 96,170 94,120 C92,70 105,20 160,20 Z" fill="#fde68a" stroke="#b45309" strokeWidth="2.5" />
    <path d="M136,96 C136,80 184,80 184,96 L188,190 C176,200 144,200 132,190 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
    {[0, 1, 2, 3].map((r) => (
      <g key={r}>
        <path d={`M140,${178 - r * 22} L180,${156 - r * 22} M180,${178 - r * 22} L140,${156 - r * 22}`} stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
        <circle cx={140} cy={178 - r * 22} r={4} fill="#78350f" />
        <circle cx={180} cy={178 - r * 22} r={4} fill="#78350f" />
      </g>
    ))}
    <circle cx={140} cy={112} r={4} fill="#78350f" />
    <circle cx={180} cy={112} r={4} fill="#78350f" />
  </g>
);
const lace = (d: string, c: string) => <path d={d} stroke={c} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />;

const shoelaces: Mech = {
  title: t("Tying a bow", "Կոշիկի կապերը կապելը", "Завязываем бантик"),
  hint: t("One lace is red and one is blue, so you can see which one moves.", "Մի կապը կարմիր է, մյուսը՝ կապույտ, որ տեսնես, թե որն է շարժվում։", "Один шнурок красный, другой синий, чтобы было видно, какой двигается."),
  caps: [
    t("Hold one lace in each hand and cross them to make an X.", "Ամեն ձեռքում մեկական կապ բռնի՛ր և խաչի՛ր դրանք՝ X տառի պես։", "Возьми по шнурку в каждую руку и скрести их буквой X."),
    t("Tuck the top lace under the other one and through the hole. Pull both ends tight.", "Վերևի կապը մտցրո՛ւ մյուսի տակով անցքի միջով։ Երկու ծայրերն էլ ամուր քաշի՛ր։", "Просунь верхний шнурок под другой, в дырочку. Затяни оба конца."),
    t("Make a loop with the red lace, like a bunny ear. Hold it with your fingers.", "Կարմիր կապով օղակ սարքի՛ր՝ նապաստակի ականջի պես։ Մատներով պահի՛ր այն։", "Сделай из красного шнурка петлю, как ушко зайчика. Придержи её пальцами."),
    t("Wrap the blue lace once around the bunny ear.", "Կապույտ կապը մեկ անգամ փաթաթի՛ր նապաստակի ականջի շուրջը։", "Оберни синий шнурок один раз вокруг ушка."),
    t("Push the blue lace through the little hole to make a second ear.", "Կապույտ կապը հրի՛ր փոքրիկ անցքի միջով, որ երկրորդ ականջը ստացվի։", "Протолкни синий шнурок в маленькую дырочку, чтобы получилось второе ушко."),
    t("Hold both ears and pull them apart. A bow!", "Բռնի՛ր երկու ականջներն էլ և քաշի՛ր դեպի կողքեր։ Ահա և հանգույցը։", "Возьмись за оба ушка и потяни в стороны. Бантик готов!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const knot = <ellipse cx={160} cy={100} rx={9} ry={6} fill={LACE_A} stroke={LACE_B} strokeWidth="3" />;
    if (i === 0) {
      const e = lerp(0, 1, k);
      return (
        <g>
          <Shoe />
          {lace(`M140,112 C150,100 ${lerp(150, 175, e)},${lerp(80, 70, e)} ${lerp(130, 200, e)},${lerp(60, 50, e)}`, LACE_A)}
          {lace(`M180,112 C170,100 ${lerp(170, 145, e)},${lerp(80, 72, e)} ${lerp(190, 120, e)},${lerp(60, 50, e)}`, LACE_B)}
          <Tx x={160} y={36} s={t("X", "X", "X")} lang={lang} size={14} fill="#7c3aed" />
        </g>
      );
    }
    if (i === 1) return (
      <g>
        <Shoe />
        {lace(`M140,112 Q150,104 158,100 C170,92 ${lerp(190, 220, k)},${lerp(70, 80, k)} ${lerp(205, 236, k)},${lerp(55, 70, k)}`, LACE_A)}
        {lace(`M180,112 Q170,104 162,100 C150,92 ${lerp(130, 100, k)},${lerp(70, 80, k)} ${lerp(115, 84, k)},${lerp(55, 70, k)}`, LACE_B)}
        {knot}
        <Arrow d="M226,40 C238,52 240,62 236,70" c={LACE_A} />
        <Arrow d="M94,40 C82,52 80,62 84,70" c={LACE_B} />
      </g>
    );
    const ear = (side: -1 | 1, c: string, size = 1) => lace(`M160,100 C${160 + side * 20},${100 - 40 * size} ${160 + side * 60 * size},${100 - 34 * size} ${160 + side * 50 * size},${100 - 6 * size} C${160 + side * 40 * size},${100 + 12 * size} ${160 + side * 18},${104} 160,100`, c);
    const tail = (side: -1 | 1, c: string) => lace(`M160,100 C${160 + side * 14},120 ${160 + side * 30},150 ${160 + side * 40},176`, c);
    if (i === 2) return (
      <g>
        <Shoe />{knot}
        {ear(-1, LACE_A, k)}
        {tail(-1, LACE_A)}
        {lace("M160,100 C190,92 220,80 236,70", LACE_B)}
        <Tx x={92} y={40} s={t("bunny ear", "նապաստակի|ականջ", "ушко")} lang={lang} fill={LACE_A} />
      </g>
    );
    if (i === 3) {
      const a = k * Math.PI * 2;
      return (
        <g>
          <Shoe />{knot}
          {ear(-1, LACE_A)}
          {tail(-1, LACE_A)}
          {lace(`M160,100 C${168 + Math.cos(a) * 14},${82 + Math.sin(a) * 14} ${150 + Math.cos(a + 1) * 16},${80 + Math.sin(a + 1) * 10} ${140 + Math.cos(a) * 30},${70 + Math.sin(a) * 18}`, LACE_B)}
          <Arrow d="M118,58 C130,40 160,44 166,66" c={LACE_B} />
        </g>
      );
    }
    if (i === 4) return (
      <g>
        <Shoe />{knot}
        {ear(-1, LACE_A)}
        {tail(-1, LACE_A)}
        {ear(1, LACE_B, k)}
        {tail(1, LACE_B)}
        <circle cx={160} cy={96} r={7} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
      </g>
    );
    const sz = lerp(1, 0.8, k);
    return (
      <g>
        <Shoe />{knot}
        {ear(-1, LACE_A, sz)}{tail(-1, LACE_A)}
        {ear(1, LACE_B, sz)}{tail(1, LACE_B)}
        <Arrow d="M110,60 h-30" c="#7c3aed" /><Arrow d="M210,60 h30" c="#7c3aed" />
        <Mark x={160} y={40} ok r={12} />
      </g>
    );
  },
};

/* ---------------- grade 2: crossing the road ---------------- */

const Road = ({ lang, man }: { lang: "en" | "hy" | "ru"; man?: "green" | "red" }) => (
  <g>
    <rect x={0} y={0} width={320} height={50} fill="#e7e5e4" />
    <rect x={0} y={50} width={320} height={120} fill="#475569" />
    <rect x={0} y={170} width={320} height={50} fill="#e7e5e4" />
    <line x1={0} y1={110} x2={320} y2={110} stroke="#fde047" strokeWidth="3" strokeDasharray="14 10" />
    {Array.from({ length: 6 }, (_, k) => <rect key={k} x={136} y={56 + k * 19} width={48} height={10} fill="#f8fafc" />)}
    {man ? (
      <g>
        <rect x={214} y={176} width={22} height={36} rx={4} fill="#1e293b" />
        <circle cx={225} cy={186} r={6} fill={man === "red" ? RED : "#334155"} />
        <circle cx={225} cy={202} r={6} fill={man === "green" ? "#22c55e" : "#334155"} />
      </g>
    ) : null}
    <Tx x={30} y={30} s={t("pavement", "մայթ", "тротуар")} lang={lang} size={8} fill="#57534e" />
  </g>
);

/** A car seen from above, moving along x (dir 1 = to the right). */
const Car = ({ x, y, dir, color }: { x: number; y: number; dir: 1 | -1; color: string }) => (
  <g transform={`translate(${x},${y}) scale(${dir},1)`}>
    <rect x={-26} y={-13} width={52} height={26} rx={8} fill={color} />
    <rect x={2} y={-10} width={14} height={20} rx={3} fill="#bae6fd" />
    <rect x={-20} y={-10} width={10} height={20} rx={3} fill="#bae6fd" />
    <circle cx={26} cy={-8} r={2.5} fill="#fde047" /><circle cx={26} cy={8} r={2.5} fill="#fde047" />
  </g>
);

/** The child from above: head and shoulders, with a view cone when looking. */
const KidTop = ({ x, y, look }: { x: number; y: number; look?: "left" | "right" }) => (
  <g>
    {look ? <path d={look === "left" ? `M${x},${y} L${x - 120},${y - 70} L${x - 120},${y + 10} Z` : `M${x},${y} L${x + 120},${y - 90} L${x + 120},${y - 10} Z`} fill="#fde047" opacity="0.35" /> : null}
    <ellipse cx={x} cy={y + 4} rx={13} ry={8} fill="#6366f1" />
    <circle cx={x} cy={y} r={7} fill="#78350f" />
  </g>
);

const crossroad: Mech = {
  title: t("Crossing the road", "Ճանապարհն անցնելը", "Переходим дорогу"),
  hint: t("A view from above. In Armenia and Russia cars drive on the right, so the nearest cars come from your left.", "Տեսքը վերևից։ Հայաստանում և Ռուսաստանում մեքենաներն երթևեկում են աջ կողմով, այնպես որ ամենամոտ մեքենաները գալիս են քո ձախից։", "Вид сверху. В Армении и России машины ездят по правой стороне, поэтому ближние машины едут слева от тебя."),
  caps: [
    t("Find a safe place to cross: a zebra crossing or a crossing with lights.", "Գտի՛ր անցնելու ապահով տեղ՝ «զեբր» կամ լուսացույցով անցում։", "Найди безопасное место для перехода: «зебру» или переход со светофором."),
    t("Stop at the edge of the pavement. Don't step onto the road yet.", "Կանգնի՛ր մայթի եզրին։ Դեռ մի՛ իջիր ճանապարհին։", "Остановись у края тротуара. На дорогу пока не выходи."),
    t("Look left: the nearest cars come from there. Wait until they stop or the road is clear.", "Նայի՛ր ձախ․ ամենամոտ մեքենաները գալիս են այնտեղից։ Սպասի՛ր, մինչև կանգնեն կամ ճանապարհն ազատվի։", "Посмотри налево: ближние машины едут оттуда. Подожди, пока они остановятся или дорога освободится."),
    t("Look right. Are the cars on the far side stopping too?", "Նայի՛ր աջ։ Հեռու կողմի մեքենաները նույնպե՞ս կանգնում են։", "Посмотри направо. Машины на дальней стороне тоже останавливаются?"),
    t("Look left again and listen. Only when nothing is coming, or every car has stopped, start to cross.", "Նորից նայի՛ր ձախ և ականջ դի՛ր։ Միայն երբ ոչինչ չի գալիս, կամ բոլոր մեքենաները կանգնել են, սկսի՛ր անցնել։", "Ещё раз посмотри налево и прислушайся. Только когда никто не едет или все машины остановились, начинай переходить."),
    t("Walk straight across, don't run, and keep looking both ways.", "Անցի՛ր ուղիղ, մի՛ վազիր և շարունակի՛ր նայել երկու կողմերը։", "Иди прямо, не беги и продолжай смотреть по сторонам."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <Road lang={lang} man="green" />
        <rect x={132} y={52} width={56} height={116} fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 4" className="sim-pulse" />
        <KidTop x={lerp(60, 160, k)} y={196} />
        <Pill x={70} y={140} s={t("zebra crossing", "«զեբր»", "«зебра»")} lang={lang} w={90} fill="#dcfce7" stroke="#16a34a" color="#15803d" />
      </g>
    );
    if (i === 1) return (
      <g>
        <Road lang={lang} man="red" />
        <KidTop x={160} y={lerp(206, 184, k)} />
        <Pill x={250} y={140} s={t("STOP", "ԿԱՆԳ", "СТОП")} lang={lang} w={60} fill="#fee2e2" stroke={RED} color={RED} size={10} />
      </g>
    );
    if (i === 2) return (
      <g>
        <Road lang={lang} man="green" />
        <Car x={lerp(-30, 100, k)} y={140} dir={1} color="#f97316" />
        <KidTop x={160} y={184} look="left" />
        <Tx x={60} y={205} s={t("look LEFT", "նայի՛ր ՁԱԽ", "смотри НАЛЕВО")} lang={lang} size={10} fill="#a16207" />
      </g>
    );
    if (i === 3) return (
      <g>
        <Road lang={lang} man="green" />
        <Car x={100} y={140} dir={1} color="#f97316" />
        <Car x={lerp(350, 225, k)} y={80} dir={-1} color="#8b5cf6" />
        <KidTop x={160} y={184} look="right" />
        <Tx x={262} y={205} s={t("look RIGHT", "նայի՛ր ԱՋ", "смотри НАПРАВО")} lang={lang} size={10} fill="#a16207" />
      </g>
    );
    if (i === 4) return (
      <g>
        <Road lang={lang} man="green" />
        <Car x={100} y={140} dir={1} color="#f97316" />
        <Car x={225} y={80} dir={-1} color="#8b5cf6" />
        <KidTop x={160} y={184} look="left" />
        {[0, 1, 2].map((r) => <path key={r} d={`M${178 + r * 6},${176} a${8 + r * 5},${8 + r * 5} 0 0 1 0,${16}`} stroke="#0ea5e9" strokeWidth="2" fill="none" opacity={((p * 3 + r) % 3) / 3} />)}
        <Tx x={60} y={205} s={t("left again,|listen", "նորից ձախ,|ականջ դի՛ր", "снова налево,|слушай")} lang={lang} size={9} fill="#a16207" />
      </g>
    );
    return (
      <g>
        <Road lang={lang} man="green" />
        <Car x={100} y={140} dir={1} color="#f97316" />
        <Car x={225} y={80} dir={-1} color="#8b5cf6" />
        <KidTop x={160} y={lerp(184, 30, k)} look={p % 0.5 < 0.25 ? "left" : "right"} />
        <Arrow d="M196,170 V60" c="#16a34a" />
      </g>
    );
  },
};

/* ---------------- grade 2: butter in a jar ---------------- */

const BigJar = ({ children, tilt = 0 }: { children?: React.ReactNode; tilt?: number }) => (
  <g transform={`rotate(${tilt} 160 130)`}>
    <rect x={118} y={62} width={84} height={122} rx={12} fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
    {children}
    <rect x={112} y={52} width={96} height={14} rx={4} fill="#ef4444" />
  </g>
);

const butterjar: Mech = {
  title: t("Making butter in a jar", "Կարագ տարայի մեջ", "Масло в банке"),
  hint: t("Use cream with at least 30% fat, cold from the fridge. A plastic jar with a tight lid is safest.", "Վերցրու առնվազն 30% յուղայնությամբ սերուցք՝ սառնարանից հենց նոր հանած։ Ամուր կափարիչով պլաստիկ տարան ամենաապահովն է։", "Возьми сливки жирностью не меньше 30%, холодные, из холодильника. Безопаснее всего пластиковая банка с плотной крышкой."),
  caps: [
    t("Pour cold cream into the jar until it is half full. Leave room for shaking!", "Սառը սերուցքը լցրու տարայի մեջ մինչև կեսը։ Թափահարելու համար տեղ թող։", "Налей холодные сливки в банку до половины. Оставь место, чтобы трясти!"),
    t("Close the lid tightly and shake, shake, shake. Take turns with a friend.", "Ամուր փակի՛ր կափարիչը և թափահարի՛ր, թափահարի՛ր։ Ընկերոջդ հետ հերթով արեք։", "Плотно закрой крышку и тряси, тряси, тряси. Можно по очереди с другом."),
    t("After about 5 minutes the sloshing stops: you have whipped cream.", "Մոտ 5 րոպե հետո շլշոցը դադարում է․ ստացվել է հարած սերուցք։", "Минут через 5 бульканье прекращается: получились взбитые сливки."),
    t("Keep shaking! Suddenly it sloshes again: a yellow lump of butter swims in a thin liquid called buttermilk.", "Շարունակի՛ր թափահարել։ Հանկարծ նորից շլշոց է լսվում․ դեղին կարագի կտորը լողում է բարակ հեղուկի՝ թանի մեջ։", "Тряси дальше! Вдруг снова булькает: жёлтый комок масла плавает в жидкости, которая называется пахтой."),
    t("Pour off the buttermilk (you can drink it!) and rinse the butter in very cold water.", "Թանը թափի՛ր մի բաժակի մեջ (այն կարելի է խմել) և կարագը լվա՛ սառը ջրով։", "Слей пахту (её можно выпить!) и промой масло в очень холодной воде."),
    t("Squeeze out the water, add a pinch of salt if you like, and spread it on bread.", "Կարագից քամի՛ր ջուրը, ցանկության դեպքում մի պտղունց աղ ավելացրու և քսի՛ր հացին։", "Отожми воду, по желанию добавь щепотку соли и намажь на хлеб."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const shake = i === 1 || i === 3 ? wob(p, 4) * 12 : 0;
    if (i === 0) return (
      <g>
        <BigJar><rect x={121} y={184 - 60 * k} width={78} height={60 * k} fill="#fffbeb" /></BigJar>
        <g transform="rotate(-50 250 50)"><rect x={232} y={20} width={36} height={56} rx={4} fill="#fff" stroke="#3b82f6" strokeWidth="2" /><Tx x={250} y={52} s={t("cream", "սերուցք", "сливки")} lang={lang} size={8} fill="#1d4ed8" /></g>
        {k < 1 ? <path d={`M222,72 Q190,${80 + k * 10} 170,${120}`} stroke="#fffbeb" strokeWidth="6" fill="none" /> : null}
        <Tx x={240} y={150} s={t("half full", "մինչև կեսը", "до половины")} lang={lang} fill="#475569" />
      </g>
    );
    if (i === 1) return (
      <g>
        <BigJar tilt={shake}><path d={`M121,${126 + shake * 0.6} Q160,${116 - shake} 199,${126 - shake * 0.6} V184 H121 Z`} fill="#fffbeb" /></BigJar>
        <Hand x={100} y={130} rot={-90 + shake} flip /><Hand x={220} y={130} rot={90 + shake} />
        <Tx x={160} y={30} s={t("shake!", "թափահարի՛ր", "тряси!")} lang={lang} size={13} fill="#7c3aed" />
      </g>
    );
    if (i === 2) return (
      <g>
        <BigJar><path d="M121,96 q10,-10 20,0 q10,-12 20,0 q10,-10 20,0 q10,-8 18,0 V184 H121 Z" fill="#fff" stroke="#e2e8f0" /></BigJar>
        <Tx x={160} y={30} s={t("whipped cream", "հարած սերուցք", "взбитые сливки")} lang={lang} size={11} />
        <text x={250} y={130} fontSize="22" fontWeight="900" fill="#94a3b8">5′</text>
      </g>
    );
    if (i === 3) return (
      <g>
        <BigJar tilt={shake}>
          <rect x={121} y={140} width={78} height={44} fill="#fefce8" />
          <ellipse cx={160 + shake} cy={146} rx={26} ry={16} fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        </BigJar>
        <Pill x={260} y={70} s={t("butter", "կարագ", "масло")} lang={lang} w={60} fill="#fef9c3" stroke="#ca8a04" />
        <Pill x={260} y={170} s={t("buttermilk", "թան", "пахта")} lang={lang} w={70} fill="#fff" stroke="#94a3b8" />
      </g>
    );
    if (i === 4) return (
      <g>
        <BigJar tilt={lerp(0, 55, k)}>
          <rect x={121} y={150} width={78} height={34 * (1 - k)} fill="#fefce8" />
          <ellipse cx={160} cy={160} rx={26} ry={16} fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        </BigJar>
        <path d="M244,140 h44 l-6,60 h-32 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
        <rect x={252} y={200 - 30 * k} width={28} height={30 * k} fill="#fefce8" />
        <Tx x={266} y={130} s={t("buttermilk", "թան", "пахта")} lang={lang} size={8} />
      </g>
    );
    return (
      <g>
        <ellipse cx={160} cy={150} rx={90} ry={30} fill="#d97706" />
        <ellipse cx={160} cy={144} rx={84} ry={26} fill="#fcd34d" />
        <path d={`M100,140 q${30 * k},-8 ${60 * k},2 q${20 * k},-6 ${40 * k},0`} stroke="#fef08a" strokeWidth="14" strokeLinecap="round" fill="none" />
        <rect x={190} y={70} width={60} height={10} rx={4} fill="#94a3b8" transform="rotate(25 220 75)" />
        <Mark x={160} y={50} ok r={12} />
      </g>
    );
  },
};

/* ---------------- grade 3: finding north with a shadow stick ---------------- */

const shadowstick: Mech = {
  title: t("The shadow stick", "Ստվերի ձող", "Палка и тень"),
  hint: t("On a sunny day, with a stick about as long as your arm. In Armenia and Russia this shows north.", "Արևոտ օրով, մոտավորապես ձեռքիդ երկարությամբ ձողով։ Հայաստանում և Ռուսաստանում այսպես գտնում ենք հյուսիսը։", "В солнечный день, с палкой длиной примерно с твою руку. В Армении и России так находят север."),
  w: 320,
  h: 220,
  caps: [
    t("Push a straight stick into flat, sunny ground so it stands upright.", "Ուղիղ ձողը խրի՛ր հարթ, արևոտ գետնի մեջ, որ ուղղաձիգ կանգնի։", "Воткни прямую палку в ровную солнечную землю, чтобы она стояла вертикально."),
    t("Put a small stone on the tip of the shadow. This first mark is West.", "Ստվերի ծայրին փոքր քար դի՛ր։ Այս առաջին նշանն Արևմուտքն է։", "Положи камешек на кончик тени. Эта первая метка — запад."),
    t("Wait 15–20 minutes. The Sun moves across the sky and the shadow turns.", "Սպասի՛ր 15–20 րոպե։ Արևը շարժվում է երկնքով, և ստվերը պտտվում է։", "Подожди 15–20 минут. Солнце движется по небу, и тень поворачивается."),
    t("Put a second stone on the new tip of the shadow. This is East.", "Երկրորդ քարը դի՛ր ստվերի նոր ծայրին։ Սա Արևելքն է։", "Положи второй камешек на новый кончик тени. Это восток."),
    t("Draw a line from the first stone to the second: it runs from West to East.", "Գիծ քաշի՛ր առաջին քարից դեպի երկրորդը․ այն գնում է Արևմուտքից Արևելք։", "Проведи линию от первого камня ко второму: она идёт с запада на восток."),
    t("Stand with the first stone on your left and the second on your right. You are facing North!", "Կանգնի՛ր այնպես, որ առաջին քարը ձախդ լինի, իսկ երկրորդը՝ աջդ։ Դու նայում ես դեպի Հյուսիս։", "Встань так, чтобы первый камень был слева, а второй справа. Ты смотришь на север!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const base = { x: 160, y: 150 };
    const ang0 = -150, ang1 = -115;
    const ang = i < 2 ? ang0 : i === 2 ? lerp(ang0, ang1, k) : ang1;
    const tip = (a: number) => ({ x: base.x + Math.cos((a * Math.PI) / 180) * 110, y: base.y + Math.sin((a * Math.PI) / 180) * 50 });
    const tp = tip(ang), t0 = tip(ang0), t1 = tip(ang1);
    const stone = (x: number, y: number, label?: string) => (
      <g>
        <ellipse cx={x} cy={y} rx={8} ry={5} fill="#78716c" stroke="#44403c" />
        {label ? <text x={x} y={y - 9} textAnchor="middle" fontSize="11" fontWeight="900" fill="#b45309">{label}</text> : null}
      </g>
    );
    const W = lang === "hy" ? "Արմ" : lang === "ru" ? "З" : "W";
    const E = lang === "hy" ? "Արլ" : lang === "ru" ? "В" : "E";
    return (
      <g>
        <rect width={320} height={220} fill="#bbf7d0" />
        <Sun x={lerp(290, 250, i < 2 ? 0 : i === 2 ? k : 1)} y={28} p={p} />
        {i === 0 ? (
          <line x1={base.x} y1={base.y} x2={base.x} y2={lerp(60, 70, k)} stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
        ) : (
          <g>
            <line x1={base.x} y1={base.y} x2={tp.x} y2={tp.y} stroke="#334155" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
            <line x1={base.x} y1={base.y} x2={base.x} y2={70} stroke={WOOD} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}
        {i >= 1 ? stone(t0.x, t0.y, i >= 1 ? W : undefined) : null}
        {i >= 3 ? stone(t1.x, t1.y, E) : null}
        {i === 2 ? <text x={40} y={200} fontSize="16" fontWeight="900" fill="#475569">{`${Math.round(k * 20)} min`}</text> : null}
        {i >= 4 ? <line x1={t0.x} y1={t0.y} x2={lerp(t0.x, t1.x + (t1.x - t0.x) * 0.6, i === 4 ? k : 1)} y2={lerp(t0.y, t1.y + (t1.y - t0.y) * 0.6, i === 4 ? k : 1)} stroke="#b45309" strokeWidth="3" strokeDasharray="6 4" /> : null}
        {i === 5 ? (
          <g>
            <Kid x={(t0.x + t1.x) / 2 + 10} y={196} arms={[80, 80]} />
            <Arrow d={`M${(t0.x + t1.x) / 2 + 10},150 L${(t0.x + t1.x) / 2 + 26},${lerp(140, 70, k)}`} c="#dc2626" w={3} dash={false} />
            <Pill x={250} y={110} s={t("North", "Հյուսիս", "Север")} lang={lang} w={66} fill="#fee2e2" stroke={RED} color={RED} />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- grade 3: stopping a nosebleed ---------------- */

const Face = ({ x, y, lean, pinch, blood }: { x: number; y: number; lean: number; pinch?: boolean; blood?: number }) => (
  <g transform={`rotate(${lean} ${x} ${y + 40})`}>
    <rect x={x - 20} y={y + 20} width={40} height={60} rx={12} fill="#22c55e" />
    <circle cx={x} cy={y} r={24} fill={SKIN} />
    <path d={`M${x - 24},${y - 4} a24,24 0 0 1 48,0 q-24,-14 -48,0 Z`} fill="#78350f" />
    <path d={`M${x + 22},${y - 2} l8,8 l-8,3`} fill={SKIN} stroke={SKIN_D} />
    <circle cx={x + 10} cy={y - 6} r={2} fill={INK} />
    {blood ? <path d={`M${x + 26},${y + 9} q2,${6 * blood} 0,${12 * blood}`} stroke={RED} strokeWidth="3" fill="none" strokeLinecap="round" /> : null}
    {pinch ? (
      <g>
        <line x1={x + 20} y1={y + 40} x2={x + 31} y2={y + 6} stroke={SKIN_D} strokeWidth="6" strokeLinecap="round" />
        <circle cx={x + 31} cy={y + 6} r={4} fill={SKIN} stroke={SKIN_D} />
      </g>
    ) : null}
  </g>
);

const nosebleed: Mech = {
  title: t("Stopping a nosebleed", "Քթից արյունահոսությունը կանգնեցնելը", "Как остановить кровь из носа"),
  hint: t("Most nosebleeds are harmless and stop in 10 minutes if you do this.", "Քթից արյունահոսությունների մեծ մասն անվտանգ է և կանգնում է 10 րոպեում, եթե այսպես անես։", "Большинство носовых кровотечений неопасны и останавливаются за 10 минут, если сделать так."),
  caps: [
    t("Stay calm and sit down. Tell a grown-up.", "Հանգի՛ստ մնա և նստի՛ր։ Ասա՛ մեծահասակին։", "Не волнуйся и сядь. Скажи взрослому."),
    t("Lean forward, not back! Then the blood runs out, not down your throat.", "Թեքվի՛ր առաջ, ոչ թե հետ։ Այդպես արյունը դուրս է հոսում, ոչ թե կոկորդդ։", "Наклонись вперёд, а не назад! Тогда кровь вытекает наружу, а не в горло."),
    t("Pinch the soft part of your nose, just below the bony bump. Breathe through your mouth.", "Սեղմի՛ր քթիդ փափուկ մասը՝ ոսկրային մասից անմիջապես ներքև։ Շնչի՛ր բերանով։", "Зажми мягкую часть носа, чуть ниже косточки. Дыши ртом."),
    t("Keep pinching for 10 whole minutes. Don't peek!", "Սեղմած պահի՛ր ամբողջ 10 րոպե։ Մի՛ ստուգիր ընթացքում։", "Держи зажатым целых 10 минут. Не подглядывай!"),
    t("Let go slowly. Still bleeding? Pinch for 10 more minutes. After 20 minutes, get help.", "Դանդաղ բա՛ց թող։ Դեռ արյո՞ւն է գալիս։ Սեղմի՛ր ևս 10 րոպե։ 20 րոպեից հետո օգնություն կանչի՛ր։", "Отпусти медленно. Кровь ещё идёт? Зажми ещё на 10 минут. Через 20 минут зови на помощь."),
    t("Rest. Don't blow your nose or pick it for the rest of the day.", "Հանգստացի՛ր։ Այդ օրը մի՛ փչիր և մի՛ քչփորիր քիթդ։", "Отдохни. До конца дня не сморкайся и не ковыряй в носу."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const chair = <path d="M100,200 V150 h70 M100,150 V90" stroke={WOOD} strokeWidth="6" fill="none" strokeLinecap="round" />;
    if (i === 0) return (
      <g>{chair}<Face x={130} y={70} lean={0} blood={0.6 + 0.4 * k} /><Adult x={250} y={205} arms={[30, 120]} /></g>
    );
    if (i === 1) return (
      <g>
        {chair}
        <Face x={130} y={70} lean={lerp(0, 25, k)} blood={1} />
        <g opacity="0.35"><Face x={130} y={70} lean={-25} /></g>
        <Mark x={230} y={70} ok r={12} /><Tx x={230} y={98} s={t("forward", "առաջ", "вперёд")} lang={lang} fill={GREEN} />
        <Mark x={60} y={50} ok={false} r={12} /><Tx x={60} y={78} s={t("not back", "ոչ թե հետ", "не назад")} lang={lang} fill={RED} />
      </g>
    );
    if (i === 2) return (
      <g>{chair}<Face x={130} y={70} lean={25} pinch /><Tx x={250} y={60} s={t("soft part|of the nose", "քթի|փափուկ մասը", "мягкая часть|носа")} lang={lang} /><Arrow d="M236,72 C220,84 200,96 176,96" c="#7c3aed" /></g>
    );
    if (i === 3) {
      const a = k * Math.PI * 2;
      return (
        <g>
          {chair}<Face x={130} y={70} lean={25} pinch />
          <circle cx={255} cy={80} r={34} fill="#fff" stroke="#94a3b8" strokeWidth="4" />
          <path d={`M255,46 A34,34 0 ${a > Math.PI ? 1 : 0} 1 ${255 + Math.sin(a) * 34},${80 - Math.cos(a) * 34} L255,80 Z`} fill="#bbf7d0" />
          <text x={255} y={86} textAnchor="middle" fontSize="16" fontWeight="900" fill={INK}>{Math.round(k * 10)}′</text>
        </g>
      );
    }
    if (i === 4) return (
      <g>{chair}<Face x={130} y={70} lean={lerp(25, 10, k)} /><Mark x={250} y={80} ok r={16} /><Tx x={250} y={120} s={t("stopped?", "կանգնե՞լ է", "остановилась?")} lang={lang} /></g>
    );
    return (
      <g>
        {chair}<Face x={130} y={70} lean={5} />
        <g transform="translate(250,70)"><circle r={22} fill="#fee2e2" stroke={RED} strokeWidth="3" /><line x1={-15} y1={-15} x2={15} y2={15} stroke={RED} strokeWidth="4" /></g>
        <Tx x={250} y={112} s={t("no nose|blowing today", "այսօր քիթդ|մի՛ փչիր", "сегодня|не сморкаться")} lang={lang} size={8.5} fill={RED} />
      </g>
    );
  },
};

/* ---------------- grade 3: a pine cone bird feeder ---------------- */

const Cone = ({ x, y, fat = 0, seeds = 0, s = 1 }: { x: number; y: number; fat?: number; seeds?: number; s?: number }) => {
  const scales = [];
  for (let r = 0; r < 6; r++) for (let c = -2; c <= 2; c++) {
    const w = 26 - Math.abs(r - 2.5) * 4;
    if (Math.abs(c) * 9 > w) continue;
    scales.push({ x: x + c * 9 * s, y: y + r * 11 * s });
  }
  return (
    <g>
      <ellipse cx={x} cy={y + 28 * s} rx={26 * s} ry={36 * s} fill="#92400e" />
      {scales.map((sc, k) => (
        <g key={k}>
          <path d={`M${sc.x - 6 * s},${sc.y} q${6 * s},${10 * s} ${12 * s},0`} fill="#b45309" stroke="#78350f" />
          {fat ? <path d={`M${sc.x - 5 * s},${sc.y + 2 * s} q${5 * s},${6 * s} ${10 * s},0`} fill="#fef9c3" opacity={fat} /> : null}
          {seeds ? <circle cx={sc.x + ((k * 5) % 7) - 3} cy={sc.y + 4 * s} r={1.8 * s} fill={k % 3 ? "#1c1917" : "#fbbf24"} opacity={seeds} /> : null}
        </g>
      ))}
    </g>
  );
};

const Bird = ({ x, y, p, c = "#facc15" }: { x: number; y: number; p: number; c?: string }) => (
  <g transform={`translate(${x},${y + Math.sin(p * 12) * 1.5})`}>
    <ellipse cx={0} cy={0} rx={11} ry={8} fill={c} />
    <circle cx={8} cy={-6} r={6} fill="#1e293b" />
    <circle cx={10} cy={-7} r={1.5} fill="#fff" />
    <path d="M14,-6 l5,1 l-5,2 Z" fill="#334155" />
    <path d="M-10,-2 l-9,-3 l2,6 Z" fill="#475569" />
    <path d={`M-4,-3 q6,${-6 - Math.sin(p * 20) * 3} 10,0`} fill="#3b82f6" />
  </g>
);

const pinecone: Mech = {
  title: t("A pine cone feeder", "Կոնից կերակրատաշտ", "Кормушка из шишки"),
  hint: t("A big, open pine cone, string, soft fat (lard or suet, unsalted) and bird seed.", "Մեծ, բացված սոճու կոն, թել, փափուկ ճարպ (առանց աղի) և թռչնի կեր։", "Большая раскрытая сосновая шишка, верёвочка, мягкий несолёный жир (смалец или нутряной) и корм для птиц."),
  caps: [
    t("Tie a string tightly round the top of the cone, with a loop for hanging.", "Թելն ամուր կապի՛ր կոնի վերին մասին և օղակ թող՝ կախելու համար։", "Крепко привяжи верёвочку к верхушке шишки и оставь петлю, чтобы повесить."),
    t("With a spoon or a blunt knife, push soft fat into the gaps between the scales.", "Գդալով կամ բութ դանակով փափուկ ճարպը լցրու թեփուկների արանքները։", "Ложкой или тупым ножом вмажь мягкий жир в щели между чешуйками."),
    t("Roll the cone in a tray of seeds and press them in.", "Կոնը գլորի՛ր կերով ափսեի մեջ և սեղմի՛ր սերմերը։", "Обваляй шишку в тарелке с кормом и вдави семечки."),
    t("Put it in the fridge for an hour so the fat sets hard.", "Մեկ ժամով դի՛ր սառնարան, որ ճարպը պնդանա։", "Положи на час в холодильник, чтобы жир застыл."),
    t("Hang it on a branch about 2 metres up, near a bush, where cats can't reach.", "Կախի՛ր մոտ 2 մետր բարձրությամբ ճյուղից, թփի մոտ, որտեղ կատուները չեն հասնի։", "Повесь на ветку примерно на высоте 2 метров, рядом с кустом, где не достанут кошки."),
    t("Watch from the window. Who comes to eat?", "Հետևի՛ր պատուհանից։ Ո՞վ է գալիս ուտելու։", "Наблюдай из окна. Кто прилетает поесть?"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <Cone x={160} y={80} />
        <path d={`M160,78 C${lerp(200, 160, k)},${lerp(40, 50, k)} 160,40 160,${lerp(20, 30, k)}`} stroke="#dc2626" strokeWidth="3" fill="none" />
        <ellipse cx={160} cy={22} rx={10} ry={8} fill="none" stroke="#dc2626" strokeWidth="3" />
      </g>
    );
    if (i === 1) return (
      <g>
        <line x1={160} y1={78} x2={160} y2={22} stroke="#dc2626" strokeWidth="3" />
        <Cone x={160} y={80} fat={k} />
        <rect x={210} y={lerp(80, 130, p)} width={50} height={10} rx={4} fill="#94a3b8" transform={`rotate(-30 235 ${lerp(85, 135, p)})`} />
        <rect x={240} y={150} width={50} height={36} rx={6} fill="#fef9c3" stroke="#ca8a04" />
        <Tx x={265} y={204} s={t("soft fat", "փափուկ ճարպ", "мягкий жир")} lang={lang} size={8} />
      </g>
    );
    if (i === 2) return (
      <g>
        <rect x={60} y={150} width={200} height={40} rx={10} fill="#fde68a" />
        {Array.from({ length: 40 }, (_, j) => <circle key={j} cx={70 + ((j * 47) % 180)} cy={160 + ((j * 13) % 24)} r={2} fill={j % 3 ? "#1c1917" : "#fbbf24"} />)}
        <g transform={`rotate(${lerp(0, 90, k)} 160 110)`}><Cone x={160} y={60} fat={1} seeds={k} /></g>
      </g>
    );
    if (i === 3) return (
      <g>
        <rect x={100} y={20} width={120} height={180} rx={10} fill="#e0f2fe" stroke="#64748b" strokeWidth="3" />
        <line x1={100} y1={80} x2={220} y2={80} stroke="#64748b" strokeWidth="2" />
        <Cone x={160} y={100} fat={1} seeds={1} s={0.9} />
        {[0, 1, 2].map((j) => <text key={j} x={120 + j * 40} y={50 + Math.sin(p * 6 + j) * 4} fontSize="14" fill="#38bdf8">*</text>)}
        <text x={260} y={110} fontSize="18" fontWeight="900" fill="#475569">1 h</text>
      </g>
    );
    return (
      <g>
        <rect width={320} height={220} fill="#e0f2fe" />
        <path d="M0,40 C80,30 160,50 320,30" stroke={WOOD} strokeWidth="10" fill="none" />
        <Tree x={40} y={220} s={1.4} fill="#4ade80" />
        <line x1={170} y1={42} x2={170} y2={80} stroke="#dc2626" strokeWidth="2.5" />
        <Cone x={170} y={84} fat={1} seeds={1} s={0.85} />
        <Ground y={200} />
        {i === 4 ? <g><line x1={280} y1={42} x2={280} y2={200} stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" /><Tx x={292} y={124} s={t("2 m", "2 մ", "2 м")} lang={lang} size={10} anchor="start" /></g> : null}
        {i === 5 ? (
          <g>
            <Bird x={lerp(330, 205, k)} y={lerp(30, 100, k)} p={p} />
            <Bird x={135} y={112} p={p + 0.3} c="#fde68a" />
            <path d="M240,170 q10,-12 20,0" stroke="#78716c" strokeWidth="2" fill="none" />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- grade 4: building and putting out a campfire ---------------- */

const Stones = () => (
  <g>{Array.from({ length: 10 }, (_, k) => {
    const a = (k / 10) * Math.PI * 2;
    return <ellipse key={k} cx={160 + Math.cos(a) * 62} cy={150 + Math.sin(a) * 22} rx={13} ry={8} fill="#a8a29e" stroke="#57534e" />;
  })}</g>
);
const Tinder = ({ o = 1 }: { o?: number }) => (
  <g opacity={o}>
    <ellipse cx={160} cy={146} rx={17} ry={10} fill="#fcd34d" stroke="#a16207" strokeWidth="1.5" />
    {Array.from({ length: 9 }, (_, k) => <path key={k} d={`M${149 + k * 2.6},153 q${(k % 3) * 4 - 4},-10 ${(k % 2 ? 6 : -6)},-17`} stroke="#a16207" strokeWidth="2" fill="none" />)}
  </g>
);
const Teepee = ({ n, big }: { n: number; big?: number }) => (
  <g>
    {Array.from({ length: n }, (_, k) => {
      const dx = (k - (n - 1) / 2) * 9;
      return <line key={k} x1={160 + dx * 2.2} y1={154} x2={160 + dx * 0.15} y2={100} stroke={k % 2 ? "#a16207" : "#854d0e"} strokeWidth="3" strokeLinecap="round" />;
    })}
    {big ? [-1, 1].map((s) => <line key={s} x1={160 + s * 50} y1={156} x2={160 + s * 6} y2={lerp(156, 92, big)} stroke="#78350f" strokeWidth="8" strokeLinecap="round" />) : null}
  </g>
);
const Bucket = ({ x, y }: { x: number; y: number }) => (
  <g>
    <path d={`M${x - 16},${y - 26} h32 l-4,26 h-24 Z`} fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
    <path d={`M${x - 16},${y - 26} q16,-16 32,0`} fill="none" stroke="#1d4ed8" strokeWidth="2" />
    <ellipse cx={x} cy={y - 26} rx={16} ry={4} fill="#bae6fd" />
  </g>
);

const campfire: Mech = {
  title: t("A campfire, from start to finish", "Խարույկ՝ սկզբից մինչև վերջ", "Костёр от начала до конца"),
  hint: t("Only where fires are allowed, only with an adult, and always with water ready.", "Միայն այնտեղ, որտեղ թույլատրված է, միայն մեծահասակի հետ և միշտ ջուրը պատրաստ։", "Только там, где разрешено, только со взрослым и всегда с водой наготове."),
  caps: [
    t("Choose a fire pit or bare ground, far from trees, tents and dry grass. Clear a circle and ring it with dry stones.", "Ընտրի՛ր խարույկի տեղ կամ մերկ հող՝ ծառերից, վրաններից և չոր խոտից հեռու։ Մաքրի՛ր շրջանը և շրջապատի՛ր չոր քարերով։", "Выбери кострище или голую землю, подальше от деревьев, палаток и сухой травы. Расчисти круг и обложи его сухими камнями."),
    t("Put a bucket of water and a spade next to the fire before you start.", "Սկսելուց առաջ խարույկի կողքին դի՛ր մի դույլ ջուր և բահ։", "До начала поставь рядом ведро воды и положи лопату."),
    t("Put a loose ball of tinder in the middle: dry grass, birch bark, wood shavings.", "Մեջտեղում դի՛ր փխրուն կրակավառելիքի կծիկ՝ չոր խոտ, կեչու կեղև, տաշեղ։", "Положи в середину рыхлый комок растопки: сухую траву, бересту, стружку."),
    t("Lean pencil-thick twigs (kindling) over it like a little tent. Leave gaps for air!", "Վրան հենի՛ր մատիտի հաստությամբ ճյուղիկներ փոքրիկ վրանի պես։ Օդի համար արանքներ թող։", "Поставь над ним шалашиком прутики толщиной с карандаш. Оставь щели для воздуха!"),
    t("The adult lights the tinder low down, on the side the wind comes from. Blow gently at the bottom.", "Մեծահասակը վառում է կրակավառելիքը ներքևից՝ այն կողմից, որտեղից քամին է փչում։ Ներքևից թեթև փչի՛ր։", "Взрослый поджигает растопку снизу, с той стороны, откуда дует ветер. Тихонько подуй снизу."),
    t("When the twigs burn well, add thicker sticks and then logs, one by one.", "Երբ ճյուղիկները լավ վառվեն, մեկ առ մեկ ավելացրո՛ւ ավելի հաստ փայտեր, հետո՝ կոճղեր։", "Когда прутики хорошо разгорятся, по одной добавляй палки потолще, а потом поленья."),
    t("To put it out: pour water on the fire and stir the ashes with a stick. Pour again.", "Հանգցնելու համար՝ ջուր լցրու կրակի վրա և փայտով խառնի՛ր մոխիրը։ Նորից լցրու։", "Чтобы потушить: залей костёр водой и перемешай золу палкой. Залей ещё раз."),
    t("Hold the back of your hand above the ashes. If you feel any heat, add more water. Cold means out.", "Ձեռքիդ մեջքը պահի՛ր մոխրի վերևում։ Եթե տաքություն ես զգում, էլի ջուր լցրու։ Սառն է՝ ուրեմն հանգած է։", "Подержи тыльную сторону ладони над золой. Если чувствуешь тепло, лей ещё воду. Холодно — значит потушен."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const ground = <rect width={320} height={220} fill="#d9f99d" />;
    const pit = <g><ellipse cx={160} cy={150} rx={62} ry={22} fill="#a8a29e" opacity={i === 0 ? k : 1} /><Stones /></g>;
    if (i === 0) return (
      <g>{ground}<Tree x={40} y={110} s={1.1} /><Tree x={290} y={95} /><ellipse cx={160} cy={150} rx={62 * k} ry={22 * k} fill="#a8a29e" /><g opacity={k}><Stones /></g><Tx x={160} y={30} s={t("3 m from anything that can burn", "3 մ այն ամենից, ինչ կարող է այրվել", "3 м от всего, что может гореть")} lang={lang} /></g>
    );
    if (i === 1) return (
      <g>{ground}{pit}<Bucket x={260} y={lerp(120, 170, k)} /><rect x={36} y={110} width={6} height={60} fill={WOOD} transform="rotate(-20 40 140)" /><path d="M48,168 l14,0 l-3,16 l-12,0 Z" fill="#64748b" transform="rotate(-20 40 140)" /><Adult x={280} y={110} /></g>
    );
    if (i === 2) return (
      <g>{ground}{pit}<Bucket x={260} y={170} /><Tinder o={k} /><Pill x={160} y={60} s={t("tinder", "կրակավառելիք", "растопка")} lang={lang} w={90} /></g>
    );
    if (i === 3) return (
      <g>{ground}{pit}<Bucket x={260} y={170} /><Tinder /><Teepee n={Math.max(1, Math.round(7 * k))} /><Pill x={160} y={60} s={t("kindling", "մանրափայտ", "хворост")} lang={lang} w={90} /></g>
    );
    if (i === 4) return (
      <g>{ground}{pit}<Bucket x={260} y={170} /><Tinder /><Teepee n={7} /><Flame x={160} y={152} s={lerp(4, 26, k)} p={p} /><Adult x={84} y={190} arms={[30, 70]} /><Arrow d="M20,60 h60" c="#0ea5e9" /><Tx x={50} y={50} s={t("wind", "քամի", "ветер")} lang={lang} fill="#0369a1" /></g>
    );
    if (i === 5) return (
      <g>{ground}{pit}<Bucket x={260} y={170} /><Teepee n={7} big={k} /><Flame x={160} y={154} s={40} p={p} /><Flame x={148} y={154} s={26} p={p + 0.3} /><Flame x={172} y={154} s={28} p={p + 0.6} /></g>
    );
    if (i === 6) return (
      <g>{ground}{pit}
        <ellipse cx={160} cy={150} rx={46} ry={14} fill="#44403c" />
        <g opacity={1 - k}><Flame x={160} y={152} s={30} p={p} /></g>
        {[0, 1, 2].map((j) => <path key={j} d={`M${150 + j * 10},${130 - p * 30} q6,-10 0,-20 q-6,-10 0,-20`} stroke="#cbd5e1" strokeWidth="3" fill="none" opacity={0.6} />)}
        <g transform={`rotate(${lerp(0, 60, k)} 230 90)`}><Bucket x={230} y={100} /></g>
        {k > 0.3 ? <path d="M214,80 q-20,20 -40,60" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" /> : null}
      </g>
    );
    return (
      <g>{ground}{pit}
        <ellipse cx={160} cy={150} rx={46} ry={14} fill="#57534e" />
        <Hand x={160} y={lerp(70, 110, k)} rot={180} back s={1.1} />
        {[0, 1, 2].map((j) => <path key={j} d={`M${140 + j * 20},140 v-${8 + j * 2}`} stroke="#60a5fa" strokeWidth="2" strokeDasharray="2 3" />)}
        <Pill x={260} y={60} s={t("cold = out", "սառն է = հանգած", "холодно = потушен")} lang={lang} w={110} fill="#dcfce7" stroke={GREEN} color="#15803d" />
      </g>
    );
  },
};

/* ---------------- grade 4: the reef knot ---------------- */

const reefknot: Mech = {
  title: t("The reef knot: right over left, left over right", "Ծովային հանգույց՝ աջը ձախի վրայով, ձախն աջի վրայով", "Прямой узел: правый на левый, левый на правый"),
  hint: t("Practise with two ropes of different colours, or a red and a blue shoelace.", "Վարժվի՛ր տարբեր գույնի երկու պարանով կամ կարմիր և կապույտ կոշիկի կապերով։", "Тренируйся на двух верёвках разного цвета или на красном и синем шнурке."),
  caps: [
    t("Hold the red end in your right hand and the blue end in your left.", "Կարմիր ծայրը բռնի՛ր աջ ձեռքում, կապույտը՝ ձախում։", "Возьми красный конец в правую руку, а синий — в левую."),
    t("Right over left: lay red over blue, then tuck it under and up.", "Աջը ձախի վրայով․ կարմիրը դի՛ր կապույտի վրա, հետո անցկացրո՛ւ տակով և վեր։", "Правый на левый: положи красный поверх синего, потом проведи под ним и вверх."),
    t("Pull a little. This first twist is a half knot. Now red is on the left.", "Մի քիչ քաշի՛ր։ Այս առաջին ոլորքը կիսահանգույց է։ Հիմա կարմիրը ձախ կողմում է։", "Немного затяни. Этот первый перехлёст — полуузел. Теперь красный слева."),
    t("Left over right: lay red (now on the left) over blue, tuck it under and through.", "Ձախն աջի վրայով․ կարմիրը (հիմա ձախում է) դի՛ր կապույտի վրա, անցկացրո՛ւ տակով և միջով։", "Левый на правый: положи красный (теперь он слева) поверх синего, проведи под ним и сквозь петлю."),
    t("Pull both sides tight. The knot is flat and neat.", "Ամուր քաշի՛ր երկու կողմերը։ Հանգույցը հարթ է և կոկիկ։", "Затяни обе стороны. Узел плоский и аккуратный."),
    t("Check: each colour comes out on the same side as it went in, both ends lying side by side. If not, it's a granny knot: retie it.", "Ստուգի՛ր․ ամեն գույն դուրս է գալիս նույն կողմից, որտեղից մտել է, և ծայրերը կողք կողքի են։ Եթե ոչ, դա սխալ հանգույց է․ նորից կապի՛ր։", "Проверь: каждый цвет выходит с той же стороны, где вошёл, и концы лежат рядом. Если нет — это бабий узел: перевяжи."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const R = "#e11d48", B = "#2563eb";
    const rope = (d: string, c: string, w = 9) => (
      <g>
        <path d={d} stroke="#0f172a" strokeWidth={w + 2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
        <path d={d} stroke={c} strokeWidth={w} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
    if (i === 0) return (
      <g>
        {rope("M20,120 C80,120 110,120 130,110", B)}
        {rope("M300,120 C240,120 210,120 190,110", R)}
        <Hand x={140} y={120} rot={-80} s={0.9} flip /><Hand x={180} y={120} rot={80} s={0.9} />
        <Tx x={70} y={160} s={t("left hand", "ձախ ձեռք", "левая рука")} lang={lang} fill={B} />
        <Tx x={250} y={160} s={t("right hand", "աջ ձեռք", "правая рука")} lang={lang} fill={R} />
      </g>
    );
    if (i === 1 || i === 2) {
      const pull = i === 2 ? k : 0;
      return (
        <g>
          {rope(`M20,${120 + pull * 10} C80,120 120,${120 - 10 * (1 - pull)} 150,112 C170,104 175,128 160,134 C150,138 ${150 - pull * 20},${150 + pull * 10} ${200 + pull * 60},${170 + pull * 10}`, B)}
          {rope(`M300,${120 + pull * 10} C240,120 200,${110 - 10 * (1 - pull)} 170,108 C150,${lerp(100, 104, i === 1 ? k : 1)} 140,${lerp(116, 122, i === 1 ? k : 1)} 158,126 C170,134 ${150 - pull * 30},${80 - pull * 10} ${120 - pull * 60},${60 - pull * 10}`, R)}
          {i === 1 ? <Arrow d="M200,70 C170,60 150,90 152,118" c={R} /> : <Tx x={160} y={200} s={t("half knot", "կիսահանգույց", "полуузел")} lang={lang} size={11} />}
        </g>
      );
    }
    // Steps 4-6: two interlocked U loops. Blue opens to the left, red opens to the right.
    const tight = i === 3 ? 0 : i === 4 ? k : 1;
    const bt = lerp(90, 112, tight), bb = lerp(170, 150, tight);
    const rt = lerp(108, 121, tight), rb = lerp(152, 141, tight);
    const bc = lerp(205, 180, tight);
    const rc = i === 3 ? lerp(275, 115, k) : lerp(115, 140, tight);
    const blue = `M20,${bt} L${bc - 22},${bt} C${bc + 14},${bt} ${bc + 14},${bb} ${bc - 22},${bb} L20,${bb}`;
    const red = `M300,${rt} L${rc + 18},${rt} C${rc - 12},${rt} ${rc - 12},${rb} ${rc + 18},${rb} L300,${rb}`;
    return (
      <g>
        <defs>
          <clipPath id="reef-low"><rect x={0} y={(rt + rb) / 2} width={320} height={120} /></clipPath>
        </defs>
        {rope(blue, B)}
        {rope(red, R)}
        <g clipPath="url(#reef-low)">{rope(`M${bc - 22},${bt} C${bc + 14},${bt} ${bc + 14},${bb} ${bc - 22},${bb}`, B)}</g>
        {i === 3 ? <Arrow d="M285,70 C230,50 170,60 140,100" c={R} /> : null}
        {i === 4 ? <g><Arrow d="M100,60 h-60" c="#7c3aed" /><Arrow d="M220,60 h60" c="#7c3aed" /></g> : null}
        {i === 5 ? (
          <g>
            <Mark x={160} y={50} ok r={13} />
            <Tx x={60} y={195} s={t("both blue ends|on one side", "կապույտ ծայրերը|մի կողմում", "оба синих конца|с одной стороны")} lang={lang} size={8.5} fill={B} />
            <Tx x={260} y={195} s={t("both red ends|on one side", "կարմիր ծայրերը|մի կողմում", "оба красных конца|с одной стороны")} lang={lang} size={8.5} fill={R} />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- grade 4: a needle compass ---------------- */

const Needle = ({ x, y, a, magnet }: { x: number; y: number; a: number; magnet?: boolean }) => (
  <g transform={`translate(${x},${y}) rotate(${a})`}>
    <line x1={-46} y1={0} x2={46} y2={0} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    {magnet ? <path d="M30,0 L46,0" stroke={RED} strokeWidth="3.5" strokeLinecap="round" /> : null}
    <ellipse cx={-42} cy={0} rx={4} ry={1.6} fill="none" stroke="#64748b" strokeWidth="1.2" />
  </g>
);

const needlecompass: Mech = {
  title: t("A compass from a needle", "Կողմնացույց ասեղից", "Компас из иголки"),
  hint: t("A sewing needle, a fridge magnet or any small magnet, a slice of cork or a leaf, a bowl of water.", "Կարի ասեղ, սառնարանի մագնիս կամ ցանկացած փոքր մագնիս, խցանի շերտ կամ տերև, ջրով աման։", "Швейная иголка, магнит с холодильника или любой маленький магнит, кружок пробки или листик, миска с водой."),
  caps: [
    t("Stroke the needle with one end of the magnet, always in the same direction, 30–50 times. Lift the magnet away between strokes.", "Ասեղը շոյի՛ր մագնիսի մի ծայրով՝ միշտ նույն ուղղությամբ, 30–50 անգամ։ Շոյելուց հետո ամեն անգամ մագնիսը վեր բարձրացրու։", "Проведи по иголке одним концом магнита, всегда в одну сторону, 30–50 раз. Между движениями поднимай магнит."),
    t("Now the needle is a tiny magnet itself.", "Հիմա ասեղն ինքն է փոքրիկ մագնիս։", "Теперь иголка сама стала маленьким магнитом."),
    t("Lay the needle on a slice of cork or a flat leaf.", "Ասեղը դի՛ր խցանի շերտի կամ հարթ տերևի վրա։", "Положи иголку на кружок пробки или плоский листик."),
    t("Float it in the middle of a bowl of still water, away from metal and phones.", "Լողացրո՛ւ այն ջրով ամանի մեջտեղում՝ մետաղից և հեռախոսներից հեռու։", "Пусти его плавать в середине миски со спокойной водой, подальше от металла и телефонов."),
    t("Wait. The needle slowly turns until it points north and south.", "Սպասի՛ր։ Ասեղը դանդաղ պտտվում է, մինչև ցույց տա հյուսիսն ու հարավը։", "Подожди. Иголка медленно поворачивается, пока не покажет на север и юг."),
    t("Which end is north? Check with the Sun: at midday it is in the south.", "Ո՞ր ծայրն է հյուսիսը։ Ստուգի՛ր Արևով․ կեսօրին այն հարավում է։", "Какой конец смотрит на север? Проверь по Солнцу: в полдень оно на юге."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) {
      const mx = lerp(110, 210, p);
      return (
        <g>
          <Needle x={160} y={130} a={0} />
          <g transform={`translate(${mx},${108 - Math.sin(p * Math.PI) * 6})`}>
            <rect x={-18} y={-26} width={36} height={22} rx={4} fill={RED} />
            <rect x={-18} y={-4} width={36} height={8} fill="#cbd5e1" />
            <text x={0} y={-10} textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff">N</text>
          </g>
          <Arrow d="M110,170 h100" c="#7c3aed" />
          <text x={160} y={200} textAnchor="middle" fontSize="13" fontWeight="900" fill="#475569">× 30–50</text>
        </g>
      );
    }
    if (i === 1) return (
      <g>
        <Needle x={160} y={110} a={0} magnet />
        {[-1, 1].map((s) => [0, 1, 2].map((r) => <path key={`${s}${r}`} d={`M${160 + s * 46},110 C${160 + s * (60 + r * 14)},${80 - r * 10} ${160 - s * (60 + r * 14)},${80 - r * 10} ${160 - s * 46},110`} stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity={0.4 + 0.6 * k} />))}
        <Tx x={160} y={180} s={t("a tiny magnet", "փոքրիկ մագնիս", "маленький магнит")} lang={lang} size={11} />
      </g>
    );
    const bowl = <g><ellipse cx={160} cy={130} rx={110} ry={60} fill="#e2e8f0" stroke="#64748b" strokeWidth="3" /><ellipse cx={160} cy={130} rx={98} ry={50} fill="#bae6fd" /></g>;
    if (i === 2) return (
      <g>
        <ellipse cx={160} cy={130} rx={30} ry={12} fill="#d6a76c" stroke="#92400e" />
        <Needle x={160} y={lerp(80, 126, k)} a={0} magnet />
      </g>
    );
    const ang = i === 3 ? 50 : i === 4 ? lerp(50, -90, k) : -90;
    return (
      <g>
        {bowl}
        <g transform={`translate(0,${i === 3 ? (1 - k) * -40 : 0})`}>
          <ellipse cx={160} cy={128} rx={30} ry={12} fill="#d6a76c" stroke="#92400e" />
          <Needle x={160} y={126} a={ang} magnet />
        </g>
        {i >= 4 ? (
          <g>
            <Tx x={160} y={30} s={t("N", "Հս", "С")} lang={lang} size={14} fill={RED} w={900} />
            <Tx x={160} y={212} s={t("S", "Հվ", "Ю")} lang={lang} size={14} fill="#334155" w={900} />
          </g>
        ) : null}
        {i === 5 ? <g><Sun x={290} y={200} r={10} p={p} /><Tx x={268} y={170} s={t("Sun at|midday", "Արևը|կեսօրին", "Солнце|в полдень")} lang={lang} size={8} /></g> : null}
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = {
  handwash, callhelp, beanjar, shoelaces, crossroad, butterjar, shadowstick, nosebleed, pinecone, campfire, reefknot, needlecompass,
};
