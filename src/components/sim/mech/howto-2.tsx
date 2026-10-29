"use client";

import { t } from "../labels";
import type { Mech } from "./types";
import type { ReactNode } from "react";
import { Adult, Arrow, Bubbles, Drop, Flame, GREEN, Ground, Hand, INK, K, Kid, Mark, Pill, RED, SKIN, SKIN_D, SOIL, Sun, Tree, Tx, WATER, WOOD, lerp, wob } from "./howto-draw";

/* How-to step players, grades 5–8. */

/* ---------------- grade 5: drinking water from a river ---------------- */

const Pot = ({ x, y, w = 70, h = 46, fill = "#94a3b8", water, lid }: { x: number; y: number; w?: number; h?: number; fill?: string; water?: string; lid?: boolean }) => (
  <g>
    {water ? <rect x={x - w / 2 + 4} y={y - h + 10} width={w - 8} height={h - 14} fill={water} /> : null}
    <path d={`M${x - w / 2},${y - h} v${h - 6} q0,6 6,6 h${w - 12} q6,0 6,-6 v${-(h - 6)}`} fill="none" stroke={fill} strokeWidth="4" />
    <path d={`M${x - w / 2 - 8},${y - h + 8} h8 M${x + w / 2},${y - h + 8} h8`} stroke={fill} strokeWidth="4" strokeLinecap="round" />
    {lid ? <g><rect x={x - w / 2 - 3} y={y - h - 6} width={w + 6} height={6} rx={3} fill={fill} /><circle cx={x} cy={y - h - 9} r={4} fill={fill} /></g> : null}
  </g>
);

const Jar = ({ x, y, mud, settle }: { x: number; y: number; mud: number; settle: number }) => {
  const dots = Array.from({ length: 26 }, (_, k) => {
    const dx = ((k * 37) % 50) - 25;
    const top = y - 90 + ((k * 53) % 70);
    return <circle key={k} cx={x + dx} cy={lerp(top, y - 8 - (k % 4) * 2, settle)} r={1.8 + (k % 3) * 0.6} fill="#92400e" opacity={0.7} />;
  });
  return (
    <g>
      <rect x={x - 32} y={y - 100} width={64} height={100} rx={10} fill="#e0f2fe" stroke="#64748b" strokeWidth="3" />
      <rect x={x - 29} y={y - 92} width={58} height={89} rx={8} fill={`rgba(146,64,14,${mud * (1 - settle * 0.85)})`} />
      {dots}
      <rect x={x - 26} y={y - 12} width={52} height={9} rx={3} fill="#a16207" opacity={settle} />
    </g>
  );
};

const Bottle = ({ x, y, a = 0, glow = 0 }: { x: number; y: number; a?: number; glow?: number }) => (
  <g transform={`translate(${x},${y}) rotate(${a})`}>
    <path d="M-40,-14 h62 q6,0 10,6 l8,4 v8 l-8,4 q-4,6 -10,6 h-62 q-6,0 -6,-6 v-16 q0,-6 6,-6 Z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
    <rect x={40} y={-5} width={8} height={10} rx={2} fill="#2563eb" />
    <rect x={-40} y={-10} width={60} height={20} rx={4} fill={WATER} opacity={0.45 + glow * 0.3} />
  </g>
);

const riverwater: Mech = {
  title: t("Making river water safe to drink", "Ինչպես գետի ջուրը դարձնել խմելու համար անվտանգ", "Как сделать речную воду безопасной для питья"),
  hint: t("Clean-looking water can still carry germs. Only boiling or proper treatment kills them.", "Մաքուր տեսք ունեցող ջուրն էլ կարող է մանրէներ պարունակել։ Դրանք սպանում է միայն եռացնելը կամ հատուկ մշակումը։", "Даже прозрачная вода может нести микробы. Их убивает только кипячение или правильная обработка."),
  caps: [
    t("Take water from a flowing stream, upstream from animals, villages and roads. Never from a still, green pond.", "Ջուր վերցրու հոսող առվից՝ կենդանիներից, գյուղերից և ճանապարհներից վերև։ Երբեք՝ կանգնած, կանաչած լճակից։", "Набирай воду из проточного ручья, выше по течению от животных, деревень и дорог. Никогда из стоячего зелёного пруда."),
    t("Let it stand for half an hour. Sand and mud sink to the bottom.", "Թող կես ժամ կանգնի։ Ավազն ու ցեխը նստում են հատակին։", "Дай ей постоять полчаса. Песок и муть осядут на дно."),
    t("Pour the clearer top part through a clean cloth folded several times. The cloth catches dirt, but not germs!", "Վերևի ավելի մաքուր մասը լցրու մի քանի անգամ ծալված մաքուր կտորի միջով։ Կտորը բռնում է կեղտը, բայց ոչ մանրէները։", "Перелей верхнюю, более чистую часть через сложенную в несколько слоёв чистую ткань. Ткань задержит грязь, но не микробов!"),
    t("Boil it hard, with big bubbles, for 1 minute. High in the mountains, above 2000 m, boil for 3 minutes.", "Եռացրու ուժեղ՝ մեծ պղպջակներով, 1 րոպե։ Բարձր լեռներում՝ 2000 մ-ից բարձր, եռացրու 3 րոպե։", "Кипяти сильно, с крупными пузырями, 1 минуту. Высоко в горах, выше 2000 м, — 3 минуты."),
    t("Let it cool under a lid and pour it into a clean bottle. Now it is safe to drink.", "Թող սառչի կափարիչի տակ և լցրու մաքուր շշի մեջ։ Հիմա այն անվտանգ է խմելու համար։", "Дай остыть под крышкой и перелей в чистую бутылку. Теперь её можно пить."),
    t("No fire? Fill a clear plastic bottle with clear water and lay it in full sun for 6 hours (2 days if it is cloudy).", "Կրակ չկա՞։ Թափանցիկ պլաստիկ շիշը լցրու պարզ ջրով և դիր արևի տակ 6 ժամով (ամպամած օրերին՝ 2 օր)։", "Нет огня? Налей прозрачную воду в прозрачную пластиковую бутылку и положи на яркое солнце на 6 часов (в пасмурную погоду — на 2 дня)."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <rect width={320} height={220} fill="#ecfccb" />
        <path d={`M0,${120 + wob(p) * 2} C80,100 160,150 320,110 L320,170 C160,200 80,160 0,180 Z`} fill={WATER} />
        {[0, 1, 2].map((j) => <path key={j} d={`M${40 + j * 90 + ((p * 60) % 30)},${145 - j * 4} q10,-4 20,0`} stroke="#fff" strokeWidth="2" fill="none" />)}
        <Arrow d="M40,140 h60" c="#0369a1" />
        <Tx x={70} y={130} s={t("flow", "հոսք", "течение")} lang={lang} fill="#0369a1" />
        <Kid x={110} y={112} arms={[40, 150]} />
        <Pot x={140} y={130} w={36} h={26} water={WATER} />
        <g transform="translate(250,82)">
          {[-14, 14].map((x) => [0, 6].map((d) => <line key={`${x}${d}`} x1={x + d - 3} y1={6} x2={x + d - 3} y2={20} stroke="#44403c" strokeWidth="3" strokeLinecap="round" />))}
          {[-16, -6, 4, 14].map((x, j) => <circle key={x} cx={x} cy={j % 2 ? -2 : 2} r={11} fill="#fff" stroke="#d6d3d1" />)}
          <ellipse cx={-28} cy={-4} rx={8} ry={6} fill="#44403c" />
        </g>
        <Tx x={250} y={50} s={t("animals: go upstream", "կենդանիներ․ բարձրացի՛ր հոսանքն ի վեր", "животные: иди выше по течению")} lang={lang} size={8} />
        <g transform="translate(230,200)"><ellipse cx={0} cy={0} rx={50} ry={14} fill="#65a30d" /><Mark x={40} y={-14} ok={false} r={9} /></g>
        <Tx x={230} y={190} s={t("still pond", "կանգնած լճակ", "стоячий пруд")} lang={lang} size={8} fill="#fff" />
        <Mark x={150} y={84} ok r={9} />
      </g>
    );
    if (i === 1) return (
      <g>
        <Jar x={160} y={200} mud={0.55} settle={k} />
        <Tx x={250} y={70} s={t("30 min", "30 րոպե", "30 мин")} lang={lang} size={14} fill="#475569" w={900} />
        <circle cx={250} cy={110} r={22} fill="#fff" stroke="#475569" strokeWidth="3" />
        <path d={`M250,110 L250,94 M250,110 L${250 + Math.sin(k * Math.PI) * 14},${110 - Math.cos(k * Math.PI) * 14}`} stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        <Tx x={80} y={190} s={t("mud sinks", "ցեխը նստում է", "муть оседает")} lang={lang} size={9} fill="#92400e" />
      </g>
    );
    if (i === 2) return (
      <g>
        <g transform={`rotate(${lerp(0, 50, k)} 110 70)`}><Jar x={110} y={110} mud={0.55} settle={1} /></g>
        {k > 0.3 ? <path d="M156,32 C176,40 196,80 200,128" stroke={WATER} strokeWidth="5" fill="none" strokeLinecap="round" opacity={0.8} /> : null}
        <path d="M150,130 q50,26 100,0 l-6,10 q-44,22 -88,0 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        {[0, 1, 2].map((j) => <path key={j} d={`M${170 + j * 30},132 q${j * 2},10 0,${16 + j * 4}`} stroke="#d97706" strokeWidth="1" opacity={0.6} />)}
        {k > 0.4 ? [0, 1, 2].map((j) => <Drop key={j} x={190 + j * 12} y={150 + ((p * 120 + j * 20) % 40)} s={4} />) : null}
        <Pot x={200} y={210} w={90} h={40} water={k > 0.6 ? "#bae6fd" : undefined} />
        <Pill x={260} y={100} s={t("clean cloth", "մաքուր կտոր", "чистая ткань")} lang={lang} w={80} />
      </g>
    );
    if (i === 3) {
      const big = 0.4 + k * 0.6;
      return (
        <g>
          <rect x={90} y={168} width={140} height={14} rx={4} fill="#475569" />
          <Flame x={130} y={168} s={22} p={p} /><Flame x={160} y={168} s={26} p={p + 0.3} /><Flame x={190} y={168} s={22} p={p + 0.6} />
          <Pot x={160} y={150} w={110} h={60} water="#bae6fd" />
          {Array.from({ length: 8 }, (_, j) => <circle key={j} cx={118 + j * 12} cy={140 - ((p * 90 + j * 13) % 40)} r={(2 + (j % 3)) * big} fill="#fff" stroke="#7dd3fc" />)}
          {[0, 1, 2].map((j) => <path key={j} d={`M${135 + j * 25},${80 - p * 20} q6,-10 0,-20 q-6,-10 0,-20`} stroke="#cbd5e1" strokeWidth="3" fill="none" opacity={0.7} />)}
          <Pill x={270} y={60} s={t("1 min", "1 րոպե", "1 мин")} lang={lang} w={70} size={11} fill="#fee2e2" stroke={RED} color={RED} />
          <Pill x={270} y={100} s={t("mountains: 3 min", "լեռներում՝ 3 րոպե", "в горах: 3 мин")} lang={lang} w={96} />
        </g>
      );
    }
    if (i === 4) return (
      <g>
        <Pot x={110} y={170} w={100} h={56} water="#e0f2fe" lid />
        <Tx x={110} y={200} s={t("cool down", "սառչում է", "остывает")} lang={lang} size={9} />
        <g transform="translate(240,170)">
          <rect x={-22} y={-90} width={44} height={90} rx={10} fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2.5" />
          <rect x={-10} y={-104} width={20} height={14} rx={3} fill="#2563eb" />
          <rect x={-19} y={lerp(-4, -80, k)} width={38} height={lerp(0, 76, k)} rx={6} fill="#7dd3fc" />
        </g>
        <Mark x={280} y={70} ok r={13} />
      </g>
    );
    return (
      <g>
        <rect width={320} height={220} fill="#fef9c3" />
        <Sun x={70} y={50} r={22} p={p} />
        {[0, 1, 2, 3].map((j) => <line key={j} x1={95 + j * 10} y1={70 + j * 8} x2={150 + j * 14} y2={140} stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 5" opacity={0.6} />)}
        <path d="M60,170 L160,150 L300,170 L200,200 Z" fill="#b45309" />
        <Bottle x={190} y={160} a={-6} glow={wob(p)} />
        <Pill x={250} y={50} s={t("6 hours in full sun", "6 ժամ արևի տակ", "6 часов на солнце")} lang={lang} w={120} size={9} fill="#fff7ed" stroke="#f59e0b" color="#b45309" />
        <Pill x={250} y={80} s={t("cloudy: 2 days", "ամպամած՝ 2 օր", "пасмурно: 2 дня")} lang={lang} w={100} />
      </g>
    );
  },
};

/* ---------------- grade 5: reading a map with a compass ---------------- */

const MapSheet = ({ a, lang }: { a: number; lang: "en" | "hy" | "ru" }) => (
  <g transform={`rotate(${a} 130 115)`}>
    <rect x={40} y={35} width={180} height={160} rx={4} fill="#fefce8" stroke="#a3a3a3" strokeWidth="2" />
    <ellipse cx={90} cy={80} rx={28} ry={16} fill="#7dd3fc" />
    <path d="M60,180 C100,150 120,130 170,60" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    {[0, 1, 2].map((j) => <ellipse key={j} cx={175} cy={150} rx={30 - j * 9} ry={20 - j * 6} fill="none" stroke="#a16207" strokeWidth="1.2" />)}
    <g transform="translate(170,60)"><rect x={-6} y={-6} width={12} height={12} fill="#475569" /><path d="M-8,-6 l8,-8 l8,8 Z" fill="#475569" /></g>
    {[0, 1, 2, 3].map((j) => <circle key={j} cx={70 + j * 10} cy={130 + (j % 2) * 8} r={6} fill="#22c55e" />)}
    <g transform="translate(205,55)">
      <path d="M0,-14 l6,14 h-12 Z" fill={RED} />
      <Tx x={0} y={-18} s={t("N", "Հս", "С")} lang={lang} size={9} fill={RED} w={900} />
    </g>
  </g>
);

const Compass = ({ x, y, r = 30, needle }: { x: number; y: number; r?: number; needle: number }) => (
  <g>
    <rect x={x - r * 0.8} y={y - r * 1.5} width={r * 1.6} height={r * 3} rx={6} fill="rgba(255,255,255,0.75)" stroke="#64748b" strokeWidth="1.5" />
    <circle cx={x} cy={y} r={r} fill="#fff" stroke="#0f172a" strokeWidth="2" />
    <g transform={`rotate(${needle} ${x} ${y})`}>
      <path d={`M${x},${y - r + 4} l5,${r - 4} h-10 Z`} fill={RED} />
      <path d={`M${x},${y + r - 4} l5,${-(r - 4)} h-10 Z`} fill="#e2e8f0" stroke="#94a3b8" />
    </g>
    <circle cx={x} cy={y} r={2.5} fill="#0f172a" />
  </g>
);

const orientmap: Mech = {
  title: t("Map and compass", "Քարտեզ և կողմնացույց", "Карта и компас"),
  hint: t("On almost every map, the top edge is north.", "Գրեթե ամեն քարտեզի վրա վերևի եզրը հյուսիսն է։", "Почти на любой карте верхний край — это север."),
  caps: [
    t("A map shows the land from above. The top of the map is north.", "Քարտեզը ցույց է տալիս տեղանքը վերևից։ Քարտեզի վերևը հյուսիսն է։", "Карта показывает местность сверху. Верх карты — это север."),
    t("The key explains the signs: blue is water, green is forest, the red dashes are a path, and the brown rings show a hill.", "Պայմանական նշանները բացատրում են նշանները․ կապույտը ջուր է, կանաչը՝ անտառ, կարմիր գծիկները՝ արահետ, շագանակագույն օղակները՝ բլուր։", "Условные знаки объясняют значки: синее — вода, зелёное — лес, красный пунктир — тропа, коричневые кольца — холм."),
    t("The scale tells you the real distance. At 1 : 25 000, 1 cm on the map is 250 m on the ground.", "Մասշտաբը ցույց է տալիս իրական հեռավորությունը։ 1 ։ 25 000 մասշտաբում քարտեզի 1 սմ-ը գետնի վրա 250 մ է։", "Масштаб показывает настоящее расстояние. При масштабе 1 : 25 000 1 см на карте — это 250 м на местности."),
    t("Lay the compass flat on the map and wait for the needle to settle. Its red end points north.", "Կողմնացույցը հարթ դիր քարտեզի վրա և սպասի՛ր, որ սլաքը կանգնի։ Կարմիր ծայրը ցույց է տալիս հյուսիսը։", "Положи компас на карту и подожди, пока стрелка успокоится. Красный конец показывает на север."),
    t("Turn the map, with the compass on it, until the red needle points to the top of the map.", "Պտտի՛ր քարտեզը կողմնացույցի հետ միասին, մինչև կարմիր սլաքը ցույց տա քարտեզի վերևը։", "Поворачивай карту вместе с компасом, пока красная стрелка не покажет на верх карты."),
    t("Now the map is turned like the land: the lake on the map lies in the same direction as the real lake.", "Հիմա քարտեզը դասավորված է տեղանքի պես․ քարտեզի լիճը նույն ուղղությամբ է, ինչ իրական լիճը։", "Теперь карта повёрнута как местность: озеро на карте лежит в той же стороне, что и настоящее озеро."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const mapA = i < 3 ? 0 : i === 3 ? 60 : i === 4 ? lerp(60, 0, k) : 0;
    const needle = i === 3 ? lerp(40, 0, k) + wob(p, 3) * 6 * (1 - k) : 0;
    return (
      <g>
        <rect width={320} height={220} fill={i === 5 ? "#ecfccb" : "#f8fafc"} />
        <MapSheet a={mapA} lang={lang} />
        {i === 1 ? (
          <g>
            <rect x={232} y={40} width={82} height={110} rx={6} fill="#fff" stroke="#cbd5e1" />
            <ellipse cx={246} cy={60} rx={8} ry={5} fill="#7dd3fc" /><Tx x={258} y={63} s={t("water", "ջուր", "вода")} lang={lang} size={8} anchor="start" />
            <circle cx={246} cy={84} r={5} fill="#22c55e" /><Tx x={258} y={87} s={t("forest", "անտառ", "лес")} lang={lang} size={8} anchor="start" />
            <path d="M238,108 h16" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 3" /><Tx x={258} y={111} s={t("path", "արահետ", "тропа")} lang={lang} size={8} anchor="start" />
            <ellipse cx={246} cy={132} rx={8} ry={5} fill="none" stroke="#a16207" /><Tx x={258} y={135} s={t("hill", "բլուր", "холм")} lang={lang} size={8} anchor="start" />
          </g>
        ) : null}
        {i === 2 ? (
          <g>
            <rect x={50} y={202} width={lerp(0, 100, k)} height={8} fill="#334155" />
            {[0, 1, 2, 3, 4].map((j) => <line key={j} x1={50 + j * 25} y1={196} x2={50 + j * 25} y2={214} stroke="#334155" strokeWidth="1.5" />)}
            <Tx x={240} y={110} s={t("1 : 25 000", "1 ։ 25 000", "1 : 25 000")} lang={lang} size={13} w={900} />
            <Tx x={240} y={136} s={t("1 cm = 250 m", "1 սմ = 250 մ", "1 см = 250 м")} lang={lang} size={11} fill="#475569" />
          </g>
        ) : null}
        {i >= 3 ? <Compass x={130} y={115} r={24} needle={i === 3 ? needle : 0} /> : null}
        {i === 4 ? <Arrow d="M260,180 C290,140 290,90 250,50" c="#7c3aed" /> : null}
        {i === 5 ? (
          <g>
            <ellipse cx={30} cy={40} rx={22} ry={10} fill="#7dd3fc" />
            <Arrow d="M88,78 L48,48" c="#0369a1" />
            <g transform="translate(290,40)"><rect x={-6} y={-6} width={12} height={12} fill="#475569" /><path d="M-8,-6 l8,-8 l8,8 Z" fill="#475569" /></g>
            <Arrow d="M172,62 L278,42" c="#475569" />
            <Mark x={290} y={200} ok r={12} />
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- grade 5: lost in the woods ---------------- */

const Whistle = ({ x, y }: { x: number; y: number }) => (
  <g>
    <rect x={x - 16} y={y - 6} width={26} height={12} rx={4} fill="#f97316" />
    <circle cx={x + 10} cy={y + 2} r={8} fill="#f97316" />
    <circle cx={x + 10} cy={y + 2} r={3} fill="#7c2d12" />
  </g>
);

const lost: Mech = {
  title: t("If you get lost: S.T.O.P.", "Եթե մոլորվել ես․ Կ․Մ․Ն․Պ․", "Если ты потерялся: С.Т.О.П."),
  hint: t("Before every hike: tell an adult where you are going, carry a whistle and wear something bright.", "Ամեն արշավից առաջ ասա՛ մեծահասակին, թե ուր ես գնում, վերցրու սուլիչ և հագի՛ր վառ գույնի բան։", "Перед каждым походом скажи взрослому, куда идёшь, возьми свисток и надень что-нибудь яркое."),
  caps: [
    t("S is for Stop. The moment you can't see your group or the path, stop walking. Walking on usually takes you further away.", "Կ՝ կանգնի՛ր։ Հենց որ չես տեսնում խումբդ կամ արահետը, կանգնի՛ր։ Քայլելը սովորաբար ավելի է հեռացնում։", "С — стой. Как только ты не видишь свою группу или тропу, остановись. Если идти дальше, обычно уходишь ещё дальше."),
    t("T is for Think. Breathe slowly and calm down. Fear is normal. People will look for you.", "Մ՝ մտածի՛ր։ Դանդաղ շնչի՛ր և հանգստացի՛ր։ Վախենալը նորմալ է։ Քեզ կփնտրեն։", "Т — тихо подумай. Дыши медленно и успокойся. Бояться нормально. Тебя будут искать."),
    t("O is for Observe. Look and listen: can you hear voices, a road, a river? Is there a clear, open spot close by?", "Ն՝ նայի՛ր։ Նայի՛ր և լսի՛ր․ ձայներ, ճանապարհ, գետ լսվու՞մ են։ Մոտակայքում բաց, լավ երևացող տեղ կա՞։", "О — оглядись. Смотри и слушай: слышны голоса, дорога, река? Есть ли рядом открытое место?"),
    t("P is for Plan, and the best plan is to stay put. \"Hug a tree\": choose one tree near an open spot and stay with it.", "Պ՝ պլանավորի՛ր, և լավագույն պլանը տեղում մնալն է։ «Գրկի՛ր ծառը»․ ընտրի՛ր մի ծառ բաց տեղի մոտ և մնա՛ նրա կողքին։", "П — план, и лучший план — оставаться на месте. «Обними дерево»: выбери одно дерево у открытого места и оставайся рядом с ним."),
    t("Be heard: blow your whistle three times, then wait and listen. Three of anything means \"Help!\". A whistle carries much further than a shout.", "Թող քեզ լսեն․ սուլիչով երեք անգամ սուլի՛ր, հետո սպասի՛ր և լսի՛ր։ Ցանկացած բան երեք անգամ նշանակում է «Օգնեցե՛ք»։ Սուլիչը շատ ավելի հեռու է լսվում, քան գոռալը։", "Пусть тебя услышат: свистни три раза, потом подожди и послушай. Три любых сигнала значат «Помогите!». Свисток слышно гораздо дальше, чем крик."),
    t("Be seen: put something bright where it shows from above. Keep warm and dry. When you hear searchers, shout and whistle back!", "Թող քեզ տեսնեն․ վառ գույնի ինչ-որ բան դիր այնտեղ, որտեղ վերևից երևում է։ Մնա՛ տաք և չոր։ Երբ լսես փնտրողներին, գոռա՛ և սուլի՛ր։", "Пусть тебя увидят: положи что-нибудь яркое там, где видно сверху. Сохраняй тепло и сухость. Услышишь спасателей — кричи и свисти в ответ!"),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const letters = [t("S", "Կ", "С"), t("T", "Մ", "Т"), t("O", "Ն", "О"), t("P", "Պ", "П")];
    const forest = (
      <g>
        <rect width={320} height={220} fill="#dcfce7" />
        <Ground y={180} fill="#bbf7d0" />
        {[20, 60, 250, 295].map((x, j) => <Tree key={x} x={x} y={180 - (j % 2) * 6} s={1.4} fill={j % 2 ? "#16a34a" : "#22c55e"} />)}
      </g>
    );
    const badge = i < 4 ? (
      <g>
        {letters.map((L, j) => (
          <g key={j}>
            <circle cx={115 + j * 30} cy={26} r={12} fill={j === i ? RED : "#fff"} stroke={j <= i ? RED : "#cbd5e1"} strokeWidth="2" />
            <Tx x={115 + j * 30} y={30} s={L} lang={lang} size={11} fill={j === i ? "#fff" : RED} w={900} />
          </g>
        ))}
      </g>
    ) : null;
    if (i === 0) return (
      <g>{forest}{badge}
        <Kid x={lerp(130, 160, Math.min(1, p * 3))} y={180} arms={[15, 15]} />
        <path d="M172,96 h20 l10,10 v20 l-10,10 h-20 l-10,-10 v-20 Z" fill={RED} opacity={k} />
        <text x={182} y={124} textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff" opacity={k}>STOP</text>
      </g>
    );
    if (i === 1) return (
      <g>{forest}{badge}
        <Kid x={160} y={180} arms={[15, 15]} />
        {[0, 1, 2].map((j) => <circle key={j} cx={160} cy={128} r={20 + j * 12 + wob(p, 1) * 4} fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity={0.5 - j * 0.12} />)}
        <Pill x={240} y={80} s={t("in… and out…", "ներշունչ… արտաշունչ…", "вдох… выдох…")} lang={lang} w={100} />
      </g>
    );
    if (i === 2) return (
      <g>{forest}{badge}
        <Kid x={160} y={180} arms={[15, 15]} />
        {[0, 1, 2].map((j) => <path key={j} d={`M${200 + j * 8},${130 - j * 6} q8,10 0,20`} stroke="#94a3b8" strokeWidth="2" fill="none" opacity={0.3 + (Math.sin(p * 8 + j) + 1) * 0.3} />)}
        <Tx x={250} y={90} s={t("voices? a road?|a river?", "ձայնե՞ր, ճանապա՞րհ,|գե՞տ", "голоса? дорога?|река?")} lang={lang} size={9} />
        <rect x={100} y={186} width={120} height={20} rx={10} fill="#fef08a" opacity={0.7} />
        <Tx x={160} y={200} s={t("open spot", "բաց տեղ", "открытое место")} lang={lang} size={8} />
      </g>
    );
    if (i === 3) return (
      <g>{forest}{badge}
        <Tree x={160} y={180} s={2.1} fill="#15803d" />
        <Kid x={lerp(220, 178, k)} y={182} arms={[70, 70]} />
        <Tx x={160} y={208} s={t("stay with your tree", "մնա՛ քո ծառի մոտ", "оставайся у своего дерева")} lang={lang} size={9} />
      </g>
    );
    if (i === 4) {
      const blast = Math.floor(p * 4.5);
      return (
        <g>{forest}
          <Kid x={130} y={180} arms={[15, 150]} />
          <Whistle x={146} y={124} />
          {[0, 1, 2].map((j) => (
            <g key={j} opacity={j < blast ? 1 : 0.15}>
              {[0, 1, 2].map((r) => <path key={r} d={`M${170 + j * 40 + r * 7},${110 - r * 5} q10,${14 + r * 5} 0,${28 + r * 10}`} stroke="#f97316" strokeWidth="2.5" fill="none" />)}
            </g>
          ))}
          <Pill x={210} y={60} s={t("× 3 = HELP", "× 3 = ՕԳՆԵՑԵ՛Ք", "× 3 = ПОМОГИТЕ")} lang={lang} w={110} size={10} fill="#fff7ed" stroke="#f97316" color="#c2410c" />
        </g>
      );
    }
    return (
      <g>{forest}
        <rect x={110} y={182} width={80} height={22} rx={4} fill="#f97316" transform="skewX(-15)" />
        <Kid x={110} y={180} arms={[15, 160]} shirt="#facc15" />
        <Adult x={lerp(330, 270, k)} y={182} shirt="#dc2626" arms={[20, 160]} />
        <Tx x={250} y={70} s={t("Here!", "Այստե՜ղ", "Я здесь!")} lang={lang} size={13} fill={RED} w={900} />
      </g>
    );
  },
};

/* ---------------- grade 6: earthquake ---------------- */

/** A child crouching on hands and knees, facing left; (x, y) is the floor point under the knees. */
const Crouch = ({ x, y, shirt = "#6366f1", hand }: { x: number; y: number; shirt?: string; hand?: boolean }) => (
  <g>
    <path d={`M${x + 22},${y} l-6,-14`} stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
    <path d={`M${x + 4},${y} l4,-14`} stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
    <rect x={x - 6} y={y - 30} width={34} height={18} rx={8} fill={shirt} />
    <line x1={x - 2} y1={y - 22} x2={hand ? x - 6 : x - 10} y2={hand ? y - 46 : y} stroke={SKIN_D} strokeWidth="4" strokeLinecap="round" />
    <circle cx={x - 12} cy={y - 30} r={8} fill={SKIN} />
    <path d={`M${x - 20},${y - 31} a8,8 0 0 1 16,-1 q-8,-3 -16,1 Z`} fill="#78350f" />
    <line x1={x + 6} y1={y - 24} x2={x - 4} y2={y - 38} stroke={SKIN_D} strokeWidth="4" strokeLinecap="round" />
  </g>
);

const Room = ({ shake, p, children }: { shake: number; p: number; children?: ReactNode }) => {
  const dx = wob(p, 7) * 3 * shake;
  const sw = wob(p, 2) * 22 * shake;
  return (
    <g transform={`translate(${dx},0)`}>
      <rect x={-10} y={0} width={340} height={220} fill="#fef3c7" />
      <rect x={-10} y={186} width={340} height={40} fill="#d6b77a" />
      <rect x={220} y={40} width={70} height={60} fill="#bae6fd" stroke="#78716c" strokeWidth="4" />
      <line x1={255} y1={40} x2={255} y2={100} stroke="#78716c" strokeWidth="3" />
      <g transform={`rotate(${wob(p, 3) * 8 * shake} 60 30)`}><rect x={40} y={36} width={40} height={30} fill="#fff" stroke={WOOD} strokeWidth="3" /><path d="M44,62 l10,-12 l8,8 l6,-6 l8,10 Z" fill="#86efac" /></g>
      <g transform={`rotate(${sw} 150 0)`}><line x1={150} y1={0} x2={150} y2={40} stroke="#57534e" strokeWidth="2" /><path d="M136,52 l14,-14 l14,14 Z" fill="#facc15" stroke="#a16207" /></g>
      {children}
    </g>
  );
};

const Table = ({ x = 110 }: { x?: number }) => (
  <g>
    <rect x={x} y={124} width={110} height={10} rx={2} fill={WOOD} />
    <rect x={x + 6} y={134} width={7} height={52} fill="#78350f" />
    <rect x={x + 97} y={134} width={7} height={52} fill="#78350f" />
  </g>
);

const earthquake: Mech = {
  title: t("When the ground shakes: drop, cover, hold on", "Երբ գետինը ցնցվում է․ պառկի՛ր, ծածկվի՛ր, բռնվի՛ր", "Когда трясётся земля: пригнись, укройся, держись"),
  hint: t("Most injuries in earthquakes come from things falling and from people running. Stay where you are and protect your head.", "Երկրաշարժի ժամանակ վնասվածքների մեծ մասն ընկնող առարկաներից և վազող մարդկանցից է։ Մնա՛ տեղում և պաշտպանի՛ր գլուխդ։", "Большинство травм при землетрясении — от падающих предметов и от бегущих людей. Оставайся на месте и защищай голову."),
  caps: [
    t("The floor starts to shake. DROP onto your hands and knees right away, before the shaking knocks you over.", "Հատակը սկսում է ցնցվել։ Անմիջապես ՊԱՌԿԻ՛Ր ձեռքերիդ և ծնկներիդ վրա, մինչև ցնցումը քեզ վայր գցի։", "Пол начинает трястись. Сразу ПРИГНИСЬ, встань на руки и колени, пока толчок не сбил тебя с ног."),
    t("COVER: crawl under a strong table or desk. If there isn't one, crouch by an inside wall and cover your head and neck with your arms.", "ԾԱԾԿՎԻ՛Ր․ սողա՛ ամուր սեղանի կամ գրասեղանի տակ։ Եթե չկա, կծկվի՛ր ներքին պատի մոտ և ձեռքերով ծածկի՛ր գլուխդ ու պարանոցդ։", "УКРОЙСЯ: заползи под прочный стол или парту. Если его нет, присядь у внутренней стены и закрой руками голову и шею."),
    t("HOLD ON to a table leg and move with it if it slides. Stay away from windows, shelves and hanging lamps.", "ԲՌՆՎԻ՛Ր սեղանի ոտքից և շարժվի՛ր նրա հետ, եթե այն սահի։ Հեռու մնա պատուհաններից, դարակներից և կախովի լամպերից։", "ДЕРЖИСЬ за ножку стола и двигайся вместе с ним, если он поедет. Держись подальше от окон, полок и висящих ламп."),
    t("Don't run outside while it shakes. Stay put until it stops, then count slowly to 60: an aftershock may come.", "Ցնցման ժամանակ դուրս մի՛ վազիր։ Մնա՛ տեղում, մինչև դադարի, հետո դանդաղ հաշվի՛ր մինչև 60․ կարող է հետցնցում լինել։", "Не выбегай наружу, пока трясёт. Оставайся на месте, пока не стихнет, потом медленно сосчитай до 60: может быть повторный толчок."),
    t("Then leave calmly by the stairs, never the lift. Put on shoes: there may be broken glass. Smell gas? Tell an adult and get out.", "Հետո հանգիստ դուրս եկի՛ր աստիճաններով, երբեք վերելակով։ Կոշիկ հագի՛ր․ կարող է կոտրված ապակի լինել։ Գազի հոտ ես զգու՞մ։ Ասա՛ մեծահասակին և դուրս եկի՛ր։", "Потом спокойно выходи по лестнице, никогда не на лифте. Надень обувь: может быть битое стекло. Пахнет газом? Скажи взрослому и выходи."),
    t("Go to an open place away from buildings, trees and power lines, take your go-bag and wait there with your family.", "Գնա՛ բաց տարածք՝ շենքերից, ծառերից և էլեկտրալարերից հեռու, վերցրու արտակարգ պայուսակդ և ընտանիքիդ հետ սպասի՛ր այնտեղ։", "Иди на открытое место подальше от зданий, деревьев и проводов, возьми тревожный рюкзак и жди там вместе с семьёй."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const word = (s: ReturnType<typeof t>, c = RED) => <Pill x={160} y={22} s={s} lang={lang} w={150} size={12} fill="#fff" stroke={c} color={c} />;
    if (i === 0) return (
      <Room shake={1} p={p}>
        <Table />
        {k < 0.5 ? <Kid x={70} y={186} arms={[40, 40]} /> : <Crouch x={60} y={186} />}
        {word(t("DROP!", "ՊԱՌԿԻ՛Ր", "ПРИГНИСЬ!"))}
      </Room>
    );
    if (i === 1) return (
      <Room shake={1} p={p}>
        <Table />
        <Crouch x={lerp(60, 150, k)} y={186} hand={k > 0.9} />
        <Table />
        <rect x={110} y={124} width={110} height={10} rx={2} fill={WOOD} />
        {word(t("COVER!", "ԾԱԾԿՎԻ՛Ր", "УКРОЙСЯ!"))}
      </Room>
    );
    if (i === 2) {
      const fall = (p * 2) % 1;
      return (
        <Room shake={1} p={p}>
          <Crouch x={150} y={186} />
          <line x1={142} y1={160} x2={120} y2={160} stroke={SKIN_D} strokeWidth="4" strokeLinecap="round" />
          <Table />
          <g transform={`translate(0,${fall * 120})`}><rect x={145} y={20} width={14} height={18} rx={2} fill="#60a5fa" /><rect x={250} y={60} width={10} height={14} fill="#f472b6" /></g>
          <Arrow d="M232,60 C250,40 280,40 296,60" c={RED} />
          {word(t("HOLD ON!", "ԲՌՆՎԻ՛Ր", "ДЕРЖИСЬ!"))}
        </Room>
      );
    }
    if (i === 3) {
      const n = Math.min(60, Math.floor(p * 70));
      return (
        <Room shake={0} p={p}>
          <Crouch x={150} y={186} />
          <Table />
          <rect x={120} y={186} width={26} height={4} fill="#60a5fa" />
          <Pill x={70} y={100} s={t("still…", "հանգիստ…", "тихо…")} lang={lang} w={70} />
          <text x={70} y={140} textAnchor="middle" fontSize="26" fontWeight="900" fill="#475569">{n}</text>
        </Room>
      );
    }
    if (i === 4) return (
      <g>
        <rect width={320} height={220} fill="#f1f5f9" />
        {Array.from({ length: 6 }, (_, j) => <rect key={j} x={40 + j * 26} y={180 - j * 22} width={140 - j * 26 + 40} height={22} fill="#cbd5e1" stroke="#94a3b8" />)}
        <Kid x={lerp(80, 150, k)} y={lerp(180, 115, k)} arms={[30, 30]} />
        <g transform="translate(250,40)">
          <rect x={0} y={0} width={56} height={120} fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <line x1={28} y1={0} x2={28} y2={120} stroke="#64748b" strokeWidth="2" />
          <Tx x={28} y={-6} s={t("lift", "վերելակ", "лифт")} lang={lang} size={9} />
          <Mark x={28} y={60} ok={false} r={16} />
        </g>
        <Mark x={60} y={60} ok r={16} />
        <Tx x={60} y={92} s={t("stairs", "աստիճաններ", "лестница")} lang={lang} size={10} />
      </g>
    );
    return (
      <g>
        <rect width={320} height={220} fill="#e0f2fe" />
        <Ground y={170} />
        <rect x={10} y={60} width={50} height={110} fill="#cbd5e1" />
        {[0, 1, 2, 3].map((j) => <rect key={j} x={20 + (j % 2) * 20} y={74 + Math.floor(j / 2) * 34} width={12} height={16} fill="#7dd3fc" />)}
        <line x1={280} y1={60} x2={280} y2={170} stroke="#78716c" strokeWidth="4" />
        <path d="M250,66 h60" stroke="#78716c" strokeWidth="3" />
        <path d="M250,70 C200,90 120,80 80,96" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        <Adult x={150} y={172} arms={[20, 40]} shirt="#0f766e" />
        <Kid x={180} y={172} arms={[20, 20]} />
        <rect x={188} y={132} width={18} height={24} rx={4} fill="#dc2626" />
        <Tx x={218} y={150} s={t("go-bag", "պայուսակ", "рюкзак")} lang={lang} size={8} anchor="start" />
        <Mark x={165} y={70} ok r={14} />
      </g>
    );
  },
};

/* ---------------- grade 6: first aid for a burn ---------------- */

const Arm = ({ x, y, burn, wrap }: { x: number; y: number; burn: number; wrap?: number }) => (
  <g>
    <path d={`M${x - 120},${y + 14} L${x - 10},${y + 8} L${x - 10},${y - 10} L${x - 120},${y - 14} Z`} fill={SKIN} stroke={SKIN_D} />
    <Hand x={x + 8} y={y} rot={90} s={1} />
    <ellipse cx={x - 40} cy={y} rx={14} ry={7} fill="#f87171" opacity={burn} />
    {wrap ? <rect x={x - 62} y={y - 15} width={44 * wrap} height={30} rx={4} fill="rgba(224,242,254,0.75)" stroke="#7dd3fc" /> : null}
  </g>
);

const burn: Mech = {
  title: t("Cooling a burn", "Ինչպես սառեցնել այրվածքը", "Как охладить ожог"),
  hint: t("Cool water for 20 minutes is the best medicine for a small burn. It keeps working on the skin even after the pain stops.", "20 րոպե սառը ջուրը փոքր այրվածքի լավագույն դեղն է։ Այն օգնում է մաշկին նույնիսկ ցավն անցնելուց հետո։", "20 минут прохладной воды — лучшее лекарство от небольшого ожога. Она помогает коже, даже когда боль уже прошла."),
  caps: [
    t("Ouch! A hot pan touched your arm. First move away from the heat and tell an adult.", "Վա՜յ։ Տաք թավան դիպավ ձեռքիդ։ Նախ հեռացի՛ր տաքից և ասա՛ մեծահասակին։", "Ай! Горячая сковородка коснулась руки. Сначала отойди от жара и скажи взрослому."),
    t("Hold the burn under cool, gently running tap water. Not ice-cold: just cool.", "Այրված տեղը պահի՛ր ծորակի սառը, թույլ հոսող ջրի տակ։ Ոչ թե սառցե, այլ պարզապես զով։", "Подставь ожог под прохладную, слабо текущую воду из крана. Не ледяную — просто прохладную."),
    t("Keep it there for a full 20 minutes. Use a timer: it feels long, but it really helps.", "Պահի՛ր այնտեղ ամբողջ 20 րոպե։ Ժամաչափ միացրու․ երկար է թվում, բայց իսկապես օգնում է։", "Держи так целых 20 минут. Поставь таймер: кажется долго, но это правда помогает."),
    t("While it cools, take off rings, bracelets or a watch near the burn: the skin may swell.", "Մինչ սառչում է, հանի՛ր այրվածքի մոտ եղած մատանիները, ապարանջանները կամ ժամացույցը․ մաշկը կարող է ուռչել։", "Пока охлаждаешь, сними кольца, браслеты или часы рядом с ожогом: кожа может отечь."),
    t("Cover it loosely with cling film or a clean, smooth cloth. Don't wrap it tight and don't pop blisters.", "Թեթևակի ծածկի՛ր սննդային թաղանթով կամ մաքուր, հարթ կտորով։ Ամուր մի՛ փաթաթիր և մի՛ պայթեցրու բշտիկները։", "Неплотно накрой пищевой плёнкой или чистой гладкой тканью. Не заматывай туго и не прокалывай пузыри."),
    t("Never put ice, butter, oil or toothpaste on a burn. They trap the heat or bring germs.", "Երբեք այրվածքի վրա մի՛ դիր սառույց, կարագ, յուղ կամ ատամի մածուկ։ Դրանք պահում են տաքությունը կամ մանրէներ են բերում։", "Никогда не клади на ожог лёд, масло или зубную пасту. Они удерживают жар или заносят микробов."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <rect width={320} height={220} fill="#fff7ed" />
        <rect x={0} y={150} width={320} height={70} fill="#e7e5e4" />
        <g transform={`translate(${lerp(0, 20, k)},0)`}><ellipse cx={240} cy={140} rx={50} ry={10} fill="#334155" /><rect x={286} y={136} width={40} height={8} rx={3} fill="#1f2937" />
          {[0, 1, 2].map((j) => <path key={j} d={`M${225 + j * 15},${126 - p * 16} q5,-8 0,-16`} stroke="#fca5a5" strokeWidth="2.5" fill="none" />)}
        </g>
        <g transform={`translate(${lerp(30, -10, k)},0)`}><Arm x={190} y={110} burn={k} /></g>
        <Tx x={100} y={60} s={t("Ouch!", "Վա՜յ", "Ай!")} lang={lang} size={18} fill={RED} w={900} />
      </g>
    );
    const tap = (
      <g>
        <rect x={150} y={8} width={70} height={14} rx={6} fill="#94a3b8" />
        <rect x={150} y={18} width={14} height={24} rx={5} fill="#94a3b8" />
        <rect x={152} y={42} width={10} height={58} fill={WATER} opacity={0.55} />
        {[0, 1, 2].map((j) => <Drop key={j} x={157} y={50 + ((p * 140 + j * 18) % 50)} s={3} fill="#e0f2fe" />)}
      </g>
    );
    if (i === 1 || i === 2) return (
      <g>
        <rect width={320} height={220} fill="#f0f9ff" />
        {tap}
        <Arm x={196} y={110} burn={i === 1 ? 1 : lerp(1, 0.35, k)} />
        <rect x={60} y={150} width={200} height={50} rx={10} fill="#e2e8f0" />
        {i === 2 ? (
          <g>
            <circle cx={260} cy={60} r={28} fill="#fff" stroke="#0ea5e9" strokeWidth="3" />
            <path d={`M260,60 L260,36 A24,24 0 ${k > 0.5 ? 1 : 0} 1 ${260 + Math.sin(k * Math.PI * 2) * 24},${60 - Math.cos(k * Math.PI * 2) * 24} Z`} fill="#7dd3fc" />
            <text x={260} y={102} textAnchor="middle" fontSize="13" fontWeight="900" fill="#0369a1">20 min</text>
          </g>
        ) : <Pill x={250} y={60} s={t("cool, not icy", "զով, ոչ սառցե", "прохладная, не ледяная")} lang={lang} w={110} />}
      </g>
    );
    if (i === 3) return (
      <g>
        <rect width={320} height={220} fill="#f0f9ff" />
        {tap}
        <Arm x={196} y={110} burn={0.5} />
        <g transform={`translate(${lerp(0, 50, k)},${lerp(0, 40, k)})`}>
          <rect x={150} y={98} width={10} height={24} rx={3} fill="none" stroke="#f59e0b" strokeWidth="4" />
          <rect x={146} y={104} width={18} height={12} rx={3} fill="#fde68a" stroke="#f59e0b" />
        </g>
        <Arrow d="M170,140 C190,160 210,160 220,150" c="#7c3aed" />
        <Tx x={250} y={60} s={t("off before|it swells", "հանի՛ր մինչև|ուռչելը", "сними, пока|не отекло")} lang={lang} size={10} />
      </g>
    );
    if (i === 4) return (
      <g>
        <rect width={320} height={220} fill="#f8fafc" />
        <Arm x={220} y={110} burn={0.5} wrap={k} />
        <Pill x={160} y={40} s={t("loose cling film", "թուլ թաղանթ", "плёнка, неплотно")} lang={lang} w={120} />
        <Pill x={160} y={180} s={t("don't pop blisters", "բշտիկները մի՛ պայթեցրու", "пузыри не трогать")} lang={lang} w={150} fill="#fee2e2" stroke={RED} color={RED} />
      </g>
    );
    const no = [
      { s: t("ice", "սառույց", "лёд"), c: "#bae6fd" },
      { s: t("butter", "կարագ", "масло"), c: "#fde68a" },
      { s: t("oil", "յուղ", "масло (жидкое)"), c: "#fcd34d" },
      { s: t("toothpaste", "ատամի մածուկ", "зубная паста"), c: "#e0e7ff" },
    ];
    return (
      <g>
        <rect width={320} height={220} fill="#fff1f2" />
        {no.map((n, j) => (
          <g key={j} transform={`translate(${45 + j * 77},${100 + (j % 2) * 10})`} opacity={Math.min(1, k * 4 - j * 0.6 + 0.6)}>
            <rect x={-28} y={-28} width={56} height={56} rx={12} fill={n.c} stroke="#cbd5e1" />
            <Mark x={22} y={-24} ok={false} r={11} />
            <Tx x={0} y={46} s={n.s} lang={lang} size={9} />
          </g>
        ))}
        <Tx x={160} y={36} s={t("never on a burn", "երբեք այրվածքի վրա", "никогда на ожог")} lang={lang} size={13} fill={RED} w={900} />
      </g>
    );
  },
};

/* ---------------- grade 6: a lean-to shelter ---------------- */

const leanto: Mech = {
  title: t("Building a lean-to shelter", "Ինչպես սարքել թեք ապաստարան", "Как построить шалаш-навес"),
  hint: t("Use only fallen sticks and leaves. Practise in daylight near home or a camp, with an adult close by.", "Օգտագործի՛ր միայն ընկած ճյուղեր և տերևներ։ Վարժվի՛ր ցերեկը՝ տան կամ ճամբարի մոտ, մեծահասակի ներկայությամբ։", "Используй только упавшие ветки и листья. Тренируйся днём рядом с домом или лагерем, со взрослым поблизости."),
  caps: [
    t("Choose a flat, dry spot. Not in a dry stream bed, and never under dead branches that could fall.", "Ընտրի՛ր հարթ, չոր տեղ։ Ոչ չորացած առվի հունում և երբեք չոր ճյուղերի տակ, որոնք կարող են ընկնել։", "Выбери ровное сухое место. Не в русле пересохшего ручья и никогда не под сухими ветками, которые могут упасть."),
    t("Rest a long, strong pole between two trees, about as high as your chest. This is the ridgepole.", "Երկար, ամուր ձող դիր երկու ծառի միջև՝ մոտավորապես կրծքիդ բարձրությամբ։ Սա կմախքի հիմնական ձողն է։", "Положи длинную крепкую жердь между двумя деревьями примерно на высоте груди. Это конёк."),
    t("Lean many sticks against it on the side the wind comes from, close together, at a steep angle.", "Նրան հենի՛ր բազմաթիվ ճյուղեր այն կողմից, որտեղից քամին է փչում՝ իրար մոտ և թեք անկյան տակ։", "Прислони к ней много палок с той стороны, откуда дует ветер, плотно друг к другу и круто."),
    t("Cover the sticks with leafy branches and leaves, starting at the bottom, like roof tiles, so rain runs off.", "Ճյուղերը ծածկի՛ր տերևավոր ճյուղերով և տերևներով՝ սկսելով ներքևից, տանիքի կղմինդրների պես, որ անձրևը հոսի։", "Укрой палки ветками с листьями и листвой, начиная снизу, как черепицу на крыше, чтобы стекал дождь."),
    t("Pile a thick bed of dry leaves inside. The cold ground steals more warmth than the air does.", "Ներսում փռի՛ր չոր տերևների հաստ անկողին։ Սառը գետինն ավելի շատ ջերմություն է խլում, քան օդը։", "Насыпь внутри толстую подстилку из сухих листьев. Холодная земля отнимает тепло сильнее, чем воздух."),
    t("Crawl in. The wind and rain hit the roof, not you. A small shelter keeps warm better than a big one.", "Մտի՛ր ներս։ Քամին ու անձրևը խփում են տանիքին, ոչ թե քեզ։ Փոքր ապաստարանն ավելի լավ է ջերմությունը պահում, քան մեծը։", "Залезай внутрь. Ветер и дождь бьют в крышу, а не в тебя. Маленькое укрытие держит тепло лучше большого."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    // Side view: the ridgepole end sits on the tree at (214, 100); the roof slopes down to the left.
    const A = [100, 182], B = [214, 100];
    const at = (f: number, off = 0) => [A[0] + (B[0] - A[0]) * f - 0.584 * off, A[1] + (B[1] - A[1]) * f - 0.812 * off];
    const sticks = i === 2 ? Math.max(1, Math.round(6 * k)) : i > 2 ? 6 : 0;
    const roof = i === 3 ? k : i > 3 ? 1 : 0;
    const strip = (r: number) => {
      const f0 = r / 4, f1 = Math.min(1, (r + 1) / 4 + 0.06);
      const pts = [at(f0), at(f1), at(f1, 13), at(f0, 13)].map((q) => q.join(",")).join(" ");
      return <polygon key={r} points={pts} fill={r % 2 ? "#65a30d" : "#84cc16"} opacity={Math.max(0, Math.min(1, roof * 4 - r))} />;
    };
    return (
      <g>
        <rect width={320} height={220} fill="#ecfeff" />
        <Ground y={182} fill="#bbf7d0" />
        <rect x={218} y={40} width={14} height={142} fill={WOOD} />
        <circle cx={225} cy={42} r={40} fill="#22c55e" />
        {i === 0 ? (
          <g>
            <rect x={40} y={70} width={10} height={112} fill="#a8a29e" />
            <path d="M45,90 l-26,-18 M45,110 l28,-22 M45,80 l14,-24" stroke="#a8a29e" strokeWidth="5" strokeLinecap="round" />
            <Mark x={45} y={60} ok={false} r={11} />
            <Tx x={45} y={44} s={t("dead tree", "չոր ծառ", "сухое дерево")} lang={lang} size={8} />
            <rect x={110} y={177} width={110} height={10} rx={5} fill="#fef08a" opacity={0.4 + k * 0.6} />
            <Mark x={165} y={160} ok r={11} />
            <Tx x={165} y={204} s={t("flat and dry", "հարթ և չոր", "ровно и сухо")} lang={lang} size={9} />
          </g>
        ) : null}
        {i >= 1 ? (
          <g opacity={i === 1 ? k : 1}>
            <circle cx={214} cy={100} r={8} fill="#a16207" stroke="#78350f" strokeWidth="2" />
            <circle cx={214} cy={100} r={3.5} fill="none" stroke="#78350f" />
            {i === 1 ? <g><Arrow d="M280,140 C260,130 240,115 226,104" c="#7c3aed" /><Tx x={278} y={156} s={t("ridgepole|(chest high)", "հիմնական ձող|(կրծքի բարձրությամբ)", "конёк|(на высоте груди)")} lang={lang} size={8} /></g> : null}
          </g>
        ) : null}
        {Array.from({ length: sticks }, (_, j) => <line key={j} x1={210 - j * 0.6} y1={102 + j * 0.8} x2={92 + j * 5} y2={184} stroke={j % 2 ? "#92400e" : "#78350f"} strokeWidth="4" strokeLinecap="round" />)}
        {roof ? [0, 1, 2, 3].map(strip) : null}
        {i === 3 ? <Arrow d="M70,170 C60,140 90,110 130,100" c="#7c3aed" /> : null}
        {i >= 4 ? <path d={`M${lerp(208, 110, i === 4 ? k : 1)},186 L208,186 L208,172 Q160,166 ${lerp(208, 110, i === 4 ? k : 1)},180 Z`} fill="#d97706" /> : null}
        {i === 4 ? <Tx x={160} y={206} s={t("dry leaves", "չոր տերևներ", "сухие листья")} lang={lang} size={9} /> : null}
        {i === 5 ? (
          <g>
            <rect x={130} y={160} width={64} height={13} rx={6} fill="#6366f1" />
            <circle cx={200} cy={164} r={7} fill={SKIN} />
            <Arrow d={`M${10 + p * 8},120 C60,120 80,110 96,100 C120,80 160,60 200,52`} c="#0ea5e9" />
            <Arrow d={`M${10 + p * 8},150 C40,150 60,140 76,128`} c="#0ea5e9" />
            <Tx x={30} y={108} s={t("wind and rain", "քամի և անձրև", "ветер и дождь")} lang={lang} fill="#0369a1" size={9} anchor="start" />
          </g>
        ) : null}
        {i === 2 ? <g><Arrow d="M20,140 h40" c="#0ea5e9" /><Tx x={40} y={130} s={t("wind", "քամի", "ветер")} lang={lang} fill="#0369a1" size={9} /></g> : null}
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { riverwater, orientmap, lost, earthquake, burn, leanto };

void [Bubbles, GREEN, Hand, SKIN, SOIL, WOOD];
