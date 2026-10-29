"use client";

import type { ReactNode } from "react";
import { t } from "../labels";
import type { Mech } from "./types";
import { Adult, Arrow, Bubbles, Drop, Flame, GREEN, Ground, Hand, INK, K, Kid, Mark, Pill, RED, SKIN, SKIN_D, Sun, Tree, Tx, WATER, WOOD, lerp, wob } from "./howto-draw";

/* How-to step players, grades 9–12. */

/* ---------------- grade 9: fixing a bike puncture ---------------- */

const Wheel = ({ x, y, r = 70, off = 0 }: { x: number; y: number; r?: number; off?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="none" stroke="#111827" strokeWidth="12" strokeDasharray={off ? `${(1 - off) * 2 * Math.PI * r} 999` : undefined} transform={`rotate(-90 ${x} ${y})`} />
    <circle cx={x} cy={y} r={r - 9} fill="none" stroke="#9ca3af" strokeWidth="5" />
    {Array.from({ length: 16 }, (_, k) => {
      const a = (k / 16) * Math.PI * 2;
      return <line key={k} x1={x} y1={y} x2={x + Math.cos(a) * (r - 11)} y2={y + Math.sin(a) * (r - 11)} stroke="#cbd5e1" strokeWidth="1.2" />;
    })}
    <circle cx={x} cy={y} r={8} fill="#6b7280" />
  </g>
);

const Lever = ({ x, y, a }: { x: number; y: number; a: number }) => (
  <rect x={x - 4} y={y - 30} width={8} height={36} rx={3} fill="#2563eb" transform={`rotate(${a} ${x} ${y})`} />
);

const puncture: Mech = {
  title: t("Patching an inner tube", "Ինչպես կարկատել անվադողի խցիկը", "Как заклеить камеру"),
  hint: t("A puncture repair kit has tyre levers, sandpaper, glue (or self-adhesive patches) and patches. It fits in a pocket.", "Կարկատելու հավաքածուն ունի անվադողի լծակներ, հղկաթուղթ, սոսինձ (կամ ինքնակպչուն կարկատաններ) և կարկատաններ։ Այն տեղավորվում է գրպանում։", "В ремнабор входят монтажки, наждачка, клей (или самоклеящиеся заплатки) и заплатки. Он помещается в карман."),
  caps: [
    t("Let out any air left. Hook two tyre levers under the edge of the tyre and pop one side off the rim.", "Բաց թող մնացած օդը։ Երկու լծակ մտցրու անվադողի եզրի տակ և մի կողմը դուրս հանի՛ր անվահեցից։", "Выпусти остатки воздуха. Подцепи край покрышки двумя монтажками и сними одну её сторону с обода."),
    t("Push the valve up through the rim and pull the inner tube out.", "Փականը հրի՛ր անվահեցի միջով վեր և դուրս քաշի՛ր խցիկը։", "Протолкни ниппель через обод и вытащи камеру."),
    t("Pump in a little air. Listen for a hiss, or dip the tube in water: the bubbles show the hole. Mark it.", "Մի քիչ օդ լցրու։ Ականջ դիր՝ արդյոք ֆշշում է, կամ խցիկն ընկղմի՛ր ջրի մեջ․ պղպջակները ցույց կտան անցքը։ Նշի՛ր այն։", "Накачай немного воздуха. Прислушайся к шипению или опусти камеру в воду: пузырьки покажут дырку. Отметь её."),
    t("Dry the tube, rough the area with sandpaper, spread a thin layer of glue and wait until it is no longer shiny.", "Չորացրո՛ւ խցիկը, տեղը հղկաթղթով կոպտացրու, քսի՛ր սոսնձի բարակ շերտ և սպասի՛ր, մինչև այլևս չփայլի։", "Высуши камеру, зашкурь место, нанеси тонкий слой клея и подожди, пока он перестанет блестеть."),
    t("Press the patch on hard for a minute. Feel inside the tyre for the thorn or glass that caused it, and remove it!", "Կարկատանն ուժեղ սեղմի՛ր մեկ րոպե։ Ձեռքով զննի՛ր անվադողի ներսը և գտի՛ր պատճառը՝ փուշ կամ ապակի, և հանի՛ր այն։", "Плотно прижми заплатку на минуту. Прощупай покрышку изнутри, найди шип или стекло, из-за которого всё случилось, и убери его!"),
    t("Put the tube back, push the tyre onto the rim with your thumbs and pump to the pressure written on the tyre.", "Խցիկը նորից տեղադրի՛ր, անվադողը բթամատներով հրի՛ր անվահեցի վրա և լցրու օդ մինչև անվադողի վրա գրված ճնշումը։", "Вставь камеру обратно, большими пальцами заправь покрышку на обод и накачай до давления, написанного на покрышке."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) return (
      <g>
        <rect width={320} height={220} fill="#f1f5f9" />
        <Wheel x={160} y={110} off={k * 0.3} />
        <Lever x={130} y={46} a={lerp(0, -40, k)} /><Lever x={190} y={46} a={lerp(0, 40, k)} />
        <Pill x={260} y={30} s={t("tyre levers", "լծակներ", "монтажки")} lang={lang} w={80} />
      </g>
    );
    if (i === 1) return (
      <g>
        <rect width={320} height={220} fill="#f1f5f9" />
        <Wheel x={110} y={110} r={60} off={0.3} />
        <ellipse cx={lerp(110, 230, k)} cy={110} rx={56} ry={54} fill="none" stroke="#1f2937" strokeWidth="9" opacity={0.85} />
        <rect x={lerp(106, 226, k)} y={44} width={8} height={14} fill="#9ca3af" />
      </g>
    );
    if (i === 2) return (
      <g>
        <rect width={320} height={220} fill="#f1f5f9" />
        <rect x={60} y={120} width={200} height={70} rx={14} fill="#bae6fd" stroke="#0284c7" strokeWidth="3" />
        <path d={`M80,${150 - k * 10} Q160,${130 - k * 10} 240,${150 - k * 10}`} stroke="#1f2937" strokeWidth="14" fill="none" strokeLinecap="round" />
        {k > 0.5 ? <Bubbles x={170} y={110} w={20} h={50} n={6} p={p} color="#fff" /> : null}
        {k > 0.5 ? <circle cx={170} cy={134} r={14} fill="none" stroke={RED} strokeWidth="2.5" strokeDasharray="4 3" /> : null}
        <Tx x={160} y={60} s={t("bubbles = hole", "պղպջակներ = անցք", "пузырьки = дырка")} lang={lang} size={12} fill="#0369a1" w={900} />
      </g>
    );
    if (i === 3 || i === 4) {
      return (
        <g>
          <rect width={320} height={220} fill="#f8fafc" />
          <path d="M20,120 Q160,100 300,120" stroke="#1f2937" strokeWidth="40" fill="none" strokeLinecap="round" />
          <circle cx={160} cy={110} r={2.5} fill="#fff" />
          {i === 3 ? (
            <g>
              <ellipse cx={160} cy={110} rx={lerp(4, 22, k)} ry={lerp(3, 12, k)} fill="#a3a3a3" opacity={0.7} />
              <rect x={lerp(200, 150, (p * 3) % 1)} y={70} width={30} height={18} rx={3} fill="#fbbf24" transform="rotate(-10 180 80)" />
              <Pill x={250} y={180} s={t("thin glue, wait", "բարակ սոսինձ, սպասի՛ր", "тонкий клей, ждать")} lang={lang} w={130} />
            </g>
          ) : (
            <g>
              <rect x={144} y={lerp(60, 100, k)} width={32} height={22} rx={6} fill="#f97316" stroke="#c2410c" />
              <Hand x={160} y={lerp(40, 82, k)} rot={180} s={0.9} />
              {k > 0.9 ? <Pill x={160} y={190} s={t("check the tyre for thorns", "փշեր փնտրի՛ր անվադողում", "ищи шипы в покрышке")} lang={lang} w={170} fill="#fee2e2" stroke={RED} color={RED} /> : null}
            </g>
          )}
        </g>
      );
    }
    return (
      <g>
        <rect width={320} height={220} fill="#f1f5f9" />
        <Wheel x={130} y={110} />
        <g transform={`translate(240,${190 - wob(p, 2) * 10})`}>
          <rect x={-6} y={-90} width={12} height={90} rx={4} fill="#475569" />
          <rect x={-22} y={-96} width={44} height={10} rx={4} fill="#1f2937" />
          <rect x={-18} y={-4} width={36} height={8} rx={3} fill="#1f2937" />
        </g>
        <path d="M234,110 C210,60 160,40 140,42" stroke="#1f2937" strokeWidth="3" fill="none" />
        <Pill x={130} y={200} s={t("pressure on the tyre side", "ճնշումը գրված է կողքին", "давление указано на боковине")} lang={lang} w={180} />
      </g>
    );
  },
};

/* ---------------- grade 9: checking a story before you share it ---------------- */

const PhoneCard = ({ x = 110, y = 20, children }: { x?: number; y?: number; children?: ReactNode }) => (
  <g transform={`translate(${x},${y})`}>
    <rect x={0} y={0} width={100} height={180} rx={14} fill="#0f172a" />
    <rect x={6} y={14} width={88} height={154} rx={6} fill="#fff" />
    {children}
  </g>
);

const factcheck: Mech = {
  title: t("Check before you share: SIFT", "Ստուգի՛ր, նախքան կիսվելը", "Проверь, прежде чем делиться"),
  hint: t("Fact-checkers don't read a page longer; they leave it and see what others say about it.", "Փաստերը ստուգողներն երկար չեն կարդում էջը․ նրանք դուրս են գալիս դրանից և նայում, թե ինչ են ասում դրա մասին ուրիշները։", "Фактчекеры не вчитываются дольше в страницу, а уходят с неё и смотрят, что о ней пишут другие."),
  caps: [
    t("A post appears: a shocking headline, lots of capitals and \"Share before they delete it!\"", "Գրառում է հայտնվում՝ ցնցող վերնագիր, շատ մեծատառեր և «Կիսվի՛ր, մինչև ջնջեն»։", "Появляется пост: шокирующий заголовок, много заглавных букв и «Распространи, пока не удалили!»"),
    t("Stop. Notice how you feel. Anger, fear or excitement are exactly what fake stories aim for.", "Կանգ առ։ Նկատի՛ր, թե ինչ ես զգում։ Զայրույթը, վախը կամ հուզմունքը հենց այն են, ինչին ձգտում են կեղծ լուրերը։", "Остановись. Заметь, что чувствуешь. Злость, страх или восторг — именно то, на что рассчитаны фейки."),
    t("Investigate the source: who published it? Look closely at the address: \"news-am.info.xyz\" is not a real news site.", "Ուսումնասիրի՛ր աղբյուրը․ ո՞վ է հրապարակել։ Ուշադիր նայի՛ր հասցեին․ «news-am.info.xyz»-ն իրական լրատվական կայք չէ։", "Изучи источник: кто это опубликовал? Внимательно посмотри на адрес: «news-am.info.xyz» — не настоящий новостной сайт."),
    t("Find better coverage: open new tabs and search. Do trusted news sites report the same thing?", "Գտի՛ր ավելի լավ աղբյուրներ․ բացի՛ր նոր ներդիրներ և որոնի՛ր։ Վստահելի լրատվական կայքերը նույնն են հաղորդու՞մ։", "Найди другие источники: открой новые вкладки и поищи. Сообщают ли о том же надёжные новостные сайты?"),
    t("Trace the photo to where it first appeared: a reverse image search shows it's from another country, years ago.", "Գտի՛ր, թե լուսանկարն առաջին անգամ որտեղ է հայտնվել․ հակառակ որոնումը ցույց է տալիս, որ այն այլ երկրից է և տարիներ առաջվա։", "Найди, где фото появилось впервые: обратный поиск по картинке показывает, что оно из другой страны и сделано годы назад."),
    t("Verdict: fake. Don't share it. If a friend sent it, kindly tell them what you found.", "Եզրակացություն՝ կեղծ է։ Մի՛ կիսվիր։ Եթե ընկերդ է ուղարկել, բարեհամբույր պատմի՛ր, թե ինչ գտար։", "Вердикт: фейк. Не распространяй. Если это прислал друг, по-доброму расскажи, что ты выяснил."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const letters = ["S", "I", "F", "T"];
    const head = (
      <g>
        <rect x={12} y={22} width={76} height={40} rx={3} fill="#fee2e2" />
        <Tx x={50} y={36} s={t("SCHOOLS|CLOSED FOREVER!!!", "ԴՊՐՈՑՆԵՐԸ|ՓԱԿՎՈՒՄ ԵՆ!!!", "ШКОЛЫ|ЗАКРЫВАЮТ!!!")} lang={lang} size={7} fill={RED} w={900} />
        <rect x={12} y={68} width={76} height={50} rx={3} fill="#cbd5e1" />
        <path d="M18,112 l18,-24 l14,14 l10,-10 l22,20 Z" fill="#94a3b8" />
        <rect x={12} y={126} width={76} height={18} rx={9} fill={RED} />
        <Tx x={50} y={138} s={t("SHARE NOW!", "ԿԻՍՎԻ՛Ր", "ПОДЕЛИСЬ!")} lang={lang} size={7.5} fill="#fff" w={900} />
      </g>
    );
    const badge = i >= 1 && i <= 4 ? (
      <g>{letters.map((L, j) => (
        <g key={L}>
          <circle cx={240 + (j % 2) * 34} cy={40 + Math.floor(j / 2) * 34} r={14} fill={j === i - 1 ? "#7c3aed" : "#fff"} stroke="#7c3aed" strokeWidth="2" />
          <text x={240 + (j % 2) * 34} y={45 + Math.floor(j / 2) * 34} textAnchor="middle" fontSize="13" fontWeight="900" fill={j === i - 1 ? "#fff" : "#7c3aed"}>{L}</text>
        </g>
      ))}</g>
    ) : null;
    if (i === 0) return (
      <g><rect width={320} height={220} fill="#f5f3ff" /><PhoneCard>{head}</PhoneCard>
        {[0, 1, 2].map((j) => <Tx key={j} x={260} y={70 + j * 30} s={t("!!!", "!!!", "!!!")} lang={lang} size={14 + wob(p + j * 0.2, 2) * 3} fill={RED} w={900} />)}
      </g>
    );
    if (i === 1) return (
      <g><rect width={320} height={220} fill="#f5f3ff" /><PhoneCard x={40}>{head}</PhoneCard>{badge}
        <g transform="translate(200,150)">
          <circle r={26} fill="#fde68a" />
          <circle cx={-8} cy={-6} r={3} fill={INK} /><circle cx={8} cy={-6} r={3} fill={INK} />
          <path d={`M-10,${10 - k * 2} q10,${-8 + k * 4} 20,0`} stroke={INK} strokeWidth="2.5" fill="none" />
        </g>
        <Tx x={200} y={200} s={t("how do I feel?", "ի՞նչ եմ զգում", "что я чувствую?")} lang={lang} size={10} />
      </g>
    );
    if (i === 2) return (
      <g><rect width={320} height={220} fill="#f5f3ff" />{badge}
        <rect x={20} y={90} width={200} height={34} rx={17} fill="#fff" stroke="#94a3b8" strokeWidth="2" />
        <text x={36} y={112} fontSize="12" fontWeight="700" fill="#334155">news-am.info<tspan fill={RED} fontWeight="900">.xyz</tspan></text>
        <ellipse cx={lerp(60, 182, k)} cy={107} rx={22} ry={14} fill="none" stroke={RED} strokeWidth="2.5" />
        <Tx x={120} y={160} s={t("lookalike address|no author, no date", "կեղծ նման հասցե|հեղինակ և ամսաթիվ չկա", "поддельный адрес|нет автора и даты")} lang={lang} size={10} fill={RED} />
      </g>
    );
    if (i === 3) return (
      <g><rect width={320} height={220} fill="#f5f3ff" />{badge}
        {[0, 1, 2].map((j) => (
          <g key={j} transform={`translate(${20 + j * 64},${70 + j * 10})`} opacity={Math.min(1, k * 3 - j)}>
            <rect width={120} height={90} rx={8} fill="#fff" stroke="#cbd5e1" />
            <rect x={8} y={10} width={70} height={8} rx={3} fill="#cbd5e1" />
            <rect x={8} y={26} width={100} height={6} rx={3} fill="#e2e8f0" />
            <rect x={8} y={38} width={90} height={6} rx={3} fill="#e2e8f0" />
            <Tx x={60} y={72} s={t("no such news", "նման լուր չկա", "таких новостей нет")} lang={lang} size={8} fill="#64748b" />
          </g>
        ))}
      </g>
    );
    if (i === 4) return (
      <g><rect width={320} height={220} fill="#f5f3ff" />{badge}
        <rect x={20} y={60} width={90} height={70} rx={4} fill="#cbd5e1" /><path d="M26,124 l22,-30 l18,18 l12,-12 l26,24 Z" fill="#94a3b8" />
        <Arrow d="M116,95 h40" c="#7c3aed" />
        <rect x={164} y={60} width={56} height={70} rx={4} fill="#fff" stroke="#cbd5e1" />
        <Tx x={192} y={88} s={t("2015,|another|country", "2015,|այլ|երկիր", "2015,|другая|страна")} lang={lang} size={8.5} fill="#7c3aed" />
        <circle cx={65} cy={95} r={lerp(10, 50, k)} fill="none" stroke="#7c3aed" strokeWidth="2" opacity={1 - k} />
      </g>
    );
    return (
      <g><rect width={320} height={220} fill="#f5f3ff" /><PhoneCard x={40}>{head}</PhoneCard>
        <g transform={`translate(90,110) rotate(-14) scale(${lerp(2, 1, k)})`} opacity={k}>
          <rect x={-56} y={-20} width={112} height={40} rx={6} fill="none" stroke={RED} strokeWidth="5" />
          <Tx x={0} y={9} s={t("FAKE", "ԿԵՂԾ", "ФЕЙК")} lang={lang} size={24} fill={RED} w={900} />
        </g>
        <Mark x={240} y={80} ok={false} r={20} />
        <Tx x={240} y={128} s={t("don't share", "մի՛ կիսվիր", "не делись")} lang={lang} size={11} fill={RED} />
      </g>
    );
  },
};

/* ---------------- grade 9: baking bread ---------------- */

const Bowl = ({ x, y, dough = 0, rise = 0 }: { x: number; y: number; dough?: number; rise?: number }) => (
  <g>
    {dough ? <ellipse cx={x} cy={y - 28 - rise * 18} rx={42 + rise * 12} ry={18 + rise * 18} fill="#f5deb3" stroke="#d6b77a" opacity={dough} /> : null}
    <path d={`M${x - 70},${y - 40} Q${x - 66},${y + 10} ${x},${y + 10} Q${x + 66},${y + 10} ${x + 70},${y - 40} Z`} fill="#93c5fd" stroke="#2563eb" strokeWidth="2.5" />
  </g>
);

const bread: Mech = {
  title: t("A simple loaf, step by step", "Պարզ հաց՝ քայլ առ քայլ", "Простой хлеб шаг за шагом"),
  hint: t("500 g flour, 300 ml warm water, 7 g dried yeast, 10 g salt. That's all!", "500 գ ալյուր, 300 մլ գոլ ջուր, 7 գ չոր խմորիչ, 10 գ աղ։ Վե՛րջ։", "500 г муки, 300 мл тёплой воды, 7 г сухих дрожжей, 10 г соли. И всё!"),
  caps: [
    t("Mix the flour, yeast and salt in a bowl, then pour in the warm water and stir into a shaggy dough.", "Ամանում խառնի՛ր ալյուրը, խմորիչը և աղը, հետո լցրու գոլ ջուրը և խառնի՛ր մինչև խառնիխուռն խմոր։", "Смешай в миске муку, дрожжи и соль, влей тёплую воду и перемешай в лохматое тесто."),
    t("Knead it on the table for 10 minutes: push, fold, turn. It turns smooth and stretchy as gluten forms.", "Սեղանին 10 րոպե հունցի՛ր՝ հրի՛ր, ծալի՛ր, պտտի՛ր։ Այն դառնում է հարթ և առաձգական, քանի որ սնձան է ձևավորվում։", "Меси на столе 10 минут: толкай, складывай, поворачивай. Тесто становится гладким и тянущимся — образуется клейковина."),
    t("Cover it and leave it somewhere warm for 1–2 hours, until it doubles in size. The yeast is making gas bubbles.", "Ծածկի՛ր և թող տաք տեղում 1–2 ժամ, մինչև ծավալը կրկնապատկվի։ Խմորիչը գազի պղպջակներ է արտադրում։", "Накрой и оставь в тёплом месте на 1–2 часа, пока оно не увеличится вдвое. Дрожжи выделяют пузырьки газа."),
    t("Press the air out gently, shape a ball, put it on a tray and let it rise again for 30 minutes.", "Թեթևակի դուրս հանի՛ր օդը, գնդաձև տուր, դի՛ր թիթեղի վրա և թող նորից 30 րոպե բարձրանա։", "Аккуратно выпусти воздух, сформуй шар, положи на противень и дай подняться ещё 30 минут."),
    t("With an adult, bake it at 220 °C for about 30 minutes, until golden brown.", "Մեծահասակի հետ թխի՛ր 220 °C-ում մոտ 30 րոպե, մինչև ոսկեգույն դառնա։", "Со взрослым выпекай при 220 °C около 30 минут до золотистой корочки."),
    t("Tap the bottom: a hollow sound means it's done. Let it cool for 30 minutes before cutting.", "Թխթխացրու հատակին․ խուլ, դատարկ ձայնը նշանակում է, որ պատրաստ է։ Կտրելուց առաջ թող 30 րոպե սառչի։", "Постучи по донышку: глухой «пустой» звук значит, что хлеб готов. Дай ему остыть 30 минут, прежде чем резать."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const table = <g><rect width={320} height={220} fill="#fff7ed" /><rect y={170} width={320} height={50} fill="#d6b77a" /></g>;
    if (i === 0) return (
      <g>{table}
        <Bowl x={160} y={168} dough={k} />
        {[{ x: 50, s: t("500 g flour", "500 գ ալյուր", "500 г муки"), c: "#fef3c7" }, { x: 120, s: t("7 g yeast", "7 գ խմորիչ", "7 г дрожжей"), c: "#fde68a" }, { x: 200, s: t("10 g salt", "10 գ աղ", "10 г соли"), c: "#fff" }, { x: 270, s: t("300 ml water", "300 մլ ջուր", "300 мл воды"), c: "#bae6fd" }].map((g, j) => (
          <g key={j} opacity={1 - 0.6 * Math.max(0, k * 2 - 1)}>
            <rect x={g.x - 22} y={40} width={44} height={36} rx={8} fill={g.c} stroke="#d6b77a" />
            <Tx x={g.x} y={92} s={g.s} lang={lang} size={8} />
          </g>
        ))}
      </g>
    );
    if (i === 1) {
      const push = Math.sin(p * Math.PI * 6);
      return (
        <g>{table}
          <ellipse cx={160} cy={162} rx={60 + push * 10} ry={20 - push * 4} fill="#f5deb3" stroke="#d6b77a" />
          {[0, 1].map((j) => <path key={j} d={`M${130 + j * 20},${158} q20,${-6 - k * 4} 40,0`} stroke="#e7c992" strokeWidth="2" fill="none" />)}
          <Hand x={150 + push * 10} y={130} rot={180} s={0.9} /><Hand x={180 + push * 10} y={130} rot={180} s={0.9} flip />
          <Tx x={160} y={60} s={t("10 min: push · fold · turn", "10 րոպե՝ հրի՛ր · ծալի՛ր · պտտի՛ր", "10 мин: толкай · складывай · поворачивай")} lang={lang} size={11} />
        </g>
      );
    }
    if (i === 2) return (
      <g>{table}
        <Bowl x={160} y={168} dough={1} rise={k} />
        <path d={`M86,${128 - k * 20} q74,-14 148,0`} stroke="#94a3b8" strokeWidth="2" fill="none" opacity={0.5} />
        {Array.from({ length: 8 }, (_, j) => <circle key={j} cx={130 + (j % 4) * 20} cy={130 - k * 16 + Math.floor(j / 4) * 12} r={2 + k * 2} fill="#fff" stroke="#e7c992" />)}
        <Tx x={160} y={40} s={t("× 2 in 1–2 hours", "× 2 1–2 ժամում", "× 2 за 1–2 часа")} lang={lang} size={12} w={900} />
      </g>
    );
    if (i === 3) return (
      <g>{table}
        <rect x={70} y={160} width={180} height={10} rx={3} fill="#475569" />
        <ellipse cx={160} cy={160 - 18 - k * 8} rx={44 + k * 6} ry={20 + k * 8} fill="#f5deb3" stroke="#d6b77a" />
        <Tx x={160} y={50} s={t("shape · rise 30 min", "ձևավորի՛ր · 30 րոպե", "сформуй · 30 мин")} lang={lang} size={11} />
      </g>
    );
    if (i === 4) return (
      <g>
        <rect width={320} height={220} fill="#fff7ed" />
        <rect x={60} y={30} width={200} height={170} rx={12} fill="#1f2937" />
        <rect x={76} y={50} width={168} height={120} rx={6} fill={`rgb(${120 + k * 100},${60 + k * 30},20)`} />
        <rect x={86} y={140} width={148} height={6} fill="#94a3b8" />
        <ellipse cx={160} cy={128} rx={50} ry={26} fill={`rgb(${245 - k * 60},${222 - k * 90},${179 - k * 110})`} />
        <Tx x={160} y={190} s={t("220 °C · ~30 min", "220 °C · ~30 րոպե", "220 °C · ~30 мин")} lang={lang} size={11} fill="#fde68a" w={900} />
      </g>
    );
    return (
      <g>{table}
        <g transform={`rotate(${lerp(0, 180, k)} 160 130)`}>
          <ellipse cx={160} cy={130} rx={56} ry={30} fill="#b45309" />
          <path d="M120,124 q40,-14 80,0" stroke="#92400e" strokeWidth="3" fill="none" />
        </g>
        {k > 0.9 ? <g><Hand x={150} y={88 + wob(p, 4) * 4} rot={180} s={0.8} /><Tx x={250} y={70} s={t("knock knock:|hollow = done", "թխկ-թխկ․|դատարկ ձայն = պատրաստ է", "тук-тук:|пустой звук = готово")} lang={lang} size={10} fill={GREEN} /></g> : null}
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { puncture, factcheck, bread };

void [Adult, Drop, Flame, Ground, Kid, SKIN, SKIN_D, Sun, Tree, WATER, WOOD];
