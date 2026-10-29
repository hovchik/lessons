"use client";

import { t } from "../labels";
import type { Mech } from "./types";
import { Adult, Arrow, Bubbles, Drop, Flame, Ground, Hand, INK, K, Kid, Mark, Pill, RED, SKIN, SKIN_D, SOIL, Sun, Tree, Tx, WATER, WOOD, lerp, wob } from "./howto-draw";

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
      { e: t("WHERE?", "ՈՐՏԵ՞Ղ", "ГДЕ?"), s: t("Yerevan,|12 Abovyan St,|flat 5", "Երևան,|Աբովյան 12,|բն. 5", "Ереван,|ул. Абовяна, 12,|кв. 5") },
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
export const MECHS: Record<string, Mech> = { handwash, callhelp, beanjar };
// Keep unused helpers referenced until later grades use them.
void [Adult, Tree, RED];
