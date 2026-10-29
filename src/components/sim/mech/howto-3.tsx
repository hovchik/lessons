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

/* ---------------- grade 10: how water is cleaned ---------------- */

const Tank = ({ x, y, w = 80, h = 90, water = "#bae6fd", label, lang }: { x: number; y: number; w?: number; h?: number; water?: string; label?: ReturnType<typeof t>; lang: "en" | "hy" | "ru" }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={6} fill={water} stroke="#475569" strokeWidth="2.5" />
    {label ? <Tx x={x + w / 2} y={y + h + 16} s={label} lang={lang} size={8.5} /> : null}
  </g>
);

const purify: Mech = {
  title: t("From river to tap: the water plant", "Գետից ծորակ․ ջրամաքրման կայան", "От реки до крана: водоочистная станция"),
  hint: t("Every barrier removes something different. Together they make water safe, even if one of them misses a little.", "Ամեն արգելք հեռացնում է այլ բան։ Միասին նրանք ջուրն անվտանգ են դարձնում, նույնիսկ եթե դրանցից մեկը մի քիչ բաց է թողնում։", "Каждый барьер убирает своё. Вместе они делают воду безопасной, даже если один что-то пропустит."),
  caps: [
    t("Size matters: sand grains are about 1 mm, protozoa about 0.01 mm, bacteria 0.001 mm, and viruses are 30 times smaller still.", "Չափը կարևոր է․ ավազահատիկը մոտ 1 մմ է, նախակենդանիները՝ մոտ 0,01 մմ, բակտերիաները՝ 0,001 մմ, իսկ վիրուսները դրանից էլ 30 անգամ փոքր են։", "Размер важен: песчинка около 1 мм, простейшие около 0,01 мм, бактерии 0,001 мм, а вирусы ещё в 30 раз меньше."),
    t("Coagulation: a chemical such as alum is stirred in. Tiny dirt particles stick together into bigger clumps called flocs.", "Մակարդում․ ջրին խառնում են քիմիական նյութ, օրինակ՝ շիբ։ Կեղտի մանր մասնիկները կպչում են իրար և դառնում ավելի մեծ փաթիլներ։", "Коагуляция: в воду добавляют реагент, например квасцы. Мелкие частицы грязи слипаются в крупные хлопья."),
    t("Settling: the water moves slowly through a big tank, and the heavy flocs sink to the bottom.", "Նստեցում․ ջուրը դանդաղ անցնում է մեծ ավազանով, և ծանր փաթիլները նստում են հատակին։", "Отстаивание: вода медленно идёт через большой бак, и тяжёлые хлопья оседают на дно."),
    t("Filtering: the water trickles down through layers of sand and gravel, which catch the smaller bits and many germs.", "Զտում․ ջուրը կաթիլ-կաթիլ իջնում է ավազի և մանրախճի շերտերով, որոնք բռնում են մանր մասնիկներն ու շատ մանրէներ։", "Фильтрация: вода просачивается через слои песка и гравия, которые задерживают мелкие частицы и многих микробов."),
    t("Disinfection: a small dose of chlorine (or UV light) kills the germs that got through, including viruses.", "Վարակազերծում․ քլորի փոքր չափաբաժինը (կամ ՈՒՄ լույսը) սպանում է անցած մանրէներին, այդ թվում՝ վիրուսներին։", "Обеззараживание: небольшая доза хлора (или УФ-свет) убивает прорвавшихся микробов, включая вирусы."),
    t("A little chlorine stays in the pipes all the way to your tap, so the water stays safe on its journey.", "Քլորի մի փոքր մասը մնում է խողովակներում մինչև քո ծորակը, որպեսզի ջուրն անվտանգ մնա ամբողջ ճանապարհին։", "Немного хлора остаётся в трубах до самого крана, чтобы вода оставалась безопасной всю дорогу."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    if (i === 0) {
      const items = [
        { r: 40, c: "#d6b77a", s: t("sand grain|1 mm", "ավազահատիկ|1 մմ", "песчинка|1 мм") },
        { r: 20, c: "#86efac", s: t("protozoa|0.01 mm", "նախակենդանի|0,01 մմ", "простейшее|0,01 мм") },
        { r: 9, c: "#fca5a5", s: t("bacteria|0.001 mm", "բակտերիա|0,001 մմ", "бактерия|0,001 мм") },
        { r: 3, c: "#c4b5fd", s: t("virus|0.00003 mm", "վիրուս|0,00003 մմ", "вирус|0,00003 мм") },
      ];
      return (
        <g>
          <rect width={320} height={220} fill="#f8fafc" />
          {items.map((it, j) => (
            <g key={j} opacity={Math.min(1, k * 4 - j + 1)}>
              <circle cx={50 + j * 74} cy={100} r={it.r} fill={it.c} stroke="#475569" />
              <Tx x={50 + j * 74} y={168} s={it.s} lang={lang} size={8.5} />
            </g>
          ))}
          <Tx x={160} y={30} s={t("not to scale: real sizes differ much more!", "իրական չափերն էլ ավելի տարբեր են", "не в масштабе: на самом деле разница ещё больше!")} lang={lang} size={9} fill="#64748b" />
        </g>
      );
    }
    const dots = (n: number, x0: number, y0: number, w: number, h: number, clump: number, sink: number) =>
      Array.from({ length: n }, (_, j) => {
        const gx = x0 + ((j * 37) % w), gy = y0 + ((j * 53) % h);
        const cx = lerp(gx, x0 + w / 2 + ((j % 4) - 1.5) * 14, clump), cy = lerp(gy, y0 + h - 6, sink);
        return <circle key={j} cx={cx} cy={cy} r={lerp(1.6, 3.2, clump)} fill="#92400e" opacity={0.75} />;
      });
    if (i === 1) return (
      <g>
        <rect width={320} height={220} fill="#f8fafc" />
        <Tank x={90} y={50} w={140} h={120} water="#d6c7a1" lang={lang} />
        {dots(36, 96, 58, 128, 104, k, 0)}
        <path d={`M160,40 v${60} M${160 + Math.cos(p * 12) * 30},100 L${160 - Math.cos(p * 12) * 30},100`} stroke="#475569" strokeWidth="4" />
        <Pill x={60} y={36} s={t("+ alum", "+ շիբ", "+ квасцы")} lang={lang} w={60} />
        <Tx x={160} y={196} s={t("small specks → big flocs", "մանր մասնիկներ → մեծ փաթիլներ", "мелкие частицы → крупные хлопья")} lang={lang} size={9.5} />
      </g>
    );
    if (i === 2) return (
      <g>
        <rect width={320} height={220} fill="#f8fafc" />
        <Tank x={40} y={60} w={240} h={100} water={`rgb(${214 - k * 28},${199 + k * 20},${161 + k * 80})`} lang={lang} />
        {dots(36, 46, 66, 228, 84, 1, k)}
        <Arrow d="M20,80 h30" c="#0369a1" /><Arrow d="M270,80 h40" c="#0369a1" />
        <Tx x={160} y={190} s={t("flocs sink, clearer water flows on", "փաթիլները նստում են, պարզ ջուրը շարունակում է", "хлопья оседают, вода светлеет")} lang={lang} size={9.5} />
      </g>
    );
    if (i === 3) {
      const layers = [{ c: "#fde68a", s: t("fine sand", "մանր ավազ", "мелкий песок") }, { c: "#d6b77a", s: t("coarse sand", "խոշոր ավազ", "крупный песок") }, { c: "#a8a29e", s: t("gravel", "մանրախիճ", "гравий") }];
      return (
        <g>
          <rect width={320} height={220} fill="#f8fafc" />
          <rect x={90} y={30} width={140} height={30} fill="#bae6fd" stroke="#475569" />
          {layers.map((L, j) => (
            <g key={j}>
              <rect x={90} y={60 + j * 38} width={140} height={38} fill={L.c} stroke="#475569" />
              {Array.from({ length: 18 }, (_, n) => <circle key={n} cx={96 + ((n * 29) % 128)} cy={66 + j * 38 + ((n * 13) % 28)} r={1 + j} fill="#78716c" opacity={0.5} />)}
              <Tx x={240} y={83 + j * 38} s={L.s} lang={lang} size={9} anchor="start" />
            </g>
          ))}
          {[0, 1, 2].map((j) => <Drop key={j} x={130 + j * 30} y={180 + ((p * 60 + j * 14) % 30)} s={4} />)}
        </g>
      );
    }
    if (i === 4) return (
      <g>
        <rect width={320} height={220} fill="#f8fafc" />
        <Tank x={60} y={60} w={200} h={110} water="#e0f2fe" lang={lang} />
        {Array.from({ length: 10 }, (_, j) => {
          const dead = k > j / 10;
          return <g key={j} transform={`translate(${80 + (j % 5) * 38},${84 + Math.floor(j / 5) * 44})`}>
            <ellipse rx={8} ry={4} fill={dead ? "#cbd5e1" : "#f87171"} />
            {dead ? <path d="M-4,-4 l8,8 M4,-4 l-8,8" stroke="#475569" strokeWidth="1.5" /> : null}
          </g>;
        })}
        <g transform="translate(160,30)"><rect x={-20} y={-14} width={40} height={24} rx={4} fill="#22c55e" /><Tx x={0} y={2} s={t("Cl₂", "Cl₂", "Cl₂")} lang={lang} size={11} fill="#fff" w={900} /></g>
        {[0, 1, 2].map((j) => <circle key={j} cx={150 + j * 10} cy={50 + ((p * 60 + j * 10) % 20)} r={2} fill="#22c55e" />)}
      </g>
    );
    return (
      <g>
        <rect width={320} height={220} fill="#f8fafc" />
        <path d="M20,60 h120 v80 h140" stroke="#64748b" strokeWidth="14" fill="none" />
        {Array.from({ length: 8 }, (_, j) => <circle key={j} cx={lerp(20, 280, ((p + j / 8) % 1))} cy={((p + j / 8) % 1) < 0.46 ? 60 : 140} r={2} fill="#22c55e" />)}
        <rect x={276} y={110} width={30} height={14} rx={4} fill="#94a3b8" /><rect x={290} y={124} width={8} height={20} fill="#94a3b8" />
        {[0, 1].map((j) => <Drop key={j} x={294} y={156 + ((p * 50 + j * 15) % 30)} s={5} />)}
        <Mark x={250} y={60} ok r={13} />
        <Tx x={80} y={40} s={t("a little chlorine all the way", "քիչ քլոր ողջ ճանապարհին", "немного хлора на всём пути")} lang={lang} size={9} />
      </g>
    );
  },
};

/* ---------------- grade 10: giving a speech ---------------- */

const speech: Mech = {
  title: t("From idea to applause", "Գաղափարից մինչև ծափահարություններ", "От идеи до аплодисментов"),
  hint: t("Nervousness is normal: even famous speakers feel it. It is energy you can use.", "Հուզվելը նորմալ է․ նույնիսկ հայտնի հռետորներն են այն զգում։ Դա էներգիա է, որը կարող ես օգտագործել։", "Волнение — это нормально: его чувствуют даже известные ораторы. Это энергия, которую можно использовать."),
  caps: [
    t("Write your main message in one sentence. If you can't, the audience won't get it either.", "Գրի՛ր հիմնական միտքդ մեկ նախադասությամբ։ Եթե չես կարողանում, լսարանն էլ չի հասկանա։", "Запиши главную мысль одним предложением. Если не получается, слушатели её тоже не поймут."),
    t("Build it in three parts: a hook that grabs attention, three points, and an ending that returns to the hook.", "Կառուցի՛ր երեք մասից․ ուշադրություն գրավող սկիզբ, երեք կետ և ավարտ, որը վերադառնում է սկզբին։", "Построй из трёх частей: цепляющее начало, три пункта и концовка, которая возвращается к началу."),
    t("Practise out loud at least three times, with a timer. Use short notes with key words, not a full text.", "Առնվազն երեք անգամ բարձրաձայն վարժվի՛ր՝ ժամաչափով։ Օգտագործի՛ր կարճ նշումներ բանալի բառերով, ոչ թե ամբողջական տեքստ։", "Прорепетируй вслух хотя бы три раза с таймером. Пользуйся короткими заметками с ключевыми словами, а не полным текстом."),
    t("Before you start: breathe in for 4, hold for 4, out for 4. Stand tall, feet apart, and smile.", "Սկսելուց առաջ․ ներշնչի՛ր 4 վայրկյան, պահի՛ր 4, արտաշնչի՛ր 4։ Կանգնի՛ր ուղիղ, ոտքերը մի քիչ բաց, և ժպտա՛։", "Перед началом: вдох на 4, задержка на 4, выдох на 4. Встань прямо, ноги чуть врозь, улыбнись."),
    t("While you speak, look at a few friendly faces in different parts of the room. Slow down and pause after key points.", "Խոսելիս նայի՛ր սենյակի տարբեր մասերում նստած մի քանի բարյացակամ դեմքի։ Դանդաղի՛ր և կարևոր մտքերից հետո դադար տուր։", "Во время речи смотри на несколько доброжелательных лиц в разных частях зала. Говори медленнее и делай паузы после главного."),
    t("End clearly with \"Thank you\", then wait for the applause. Answer questions calmly; it's fine to say \"I'll find out\".", "Ավարտի՛ր հստակ՝ «Շնորհակալություն», և սպասի՛ր ծափահարություններին։ Հանգիստ պատասխանի՛ր հարցերին․ կարելի է ասել՝ «Կճշտեմ»։", "Чётко закончи словами «Спасибо» и подожди аплодисментов. Спокойно отвечай на вопросы; можно сказать «Я уточню»."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const stage = <g><rect width={320} height={220} fill="#fdf4ff" /><rect y={176} width={320} height={44} fill="#e9d5ff" /></g>;
    if (i === 0) return (
      <g>{stage}
        <rect x={60} y={50} width={200} height={110} rx={8} fill="#fff" stroke="#c084fc" strokeWidth="2" />
        {[0, 1, 2, 3].map((j) => <line key={j} x1={74} y1={80 + j * 20} x2={246} y2={80 + j * 20} stroke="#e9d5ff" />)}
        <path d={`M76,96 h${lerp(0, 160, k)}`} stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" />
        <Tx x={160} y={40} s={t("one sentence", "մեկ նախադասություն", "одно предложение")} lang={lang} size={11} fill="#7c3aed" w={900} />
      </g>
    );
    if (i === 1) {
      const parts = [{ s: t("hook", "սկիզբ", "крючок"), c: "#f472b6" }, { s: t("1", "1", "1"), c: "#a78bfa" }, { s: t("2", "2", "2"), c: "#a78bfa" }, { s: t("3", "3", "3"), c: "#a78bfa" }, { s: t("ending", "ավարտ", "концовка"), c: "#f472b6" }];
      return (
        <g>{stage}
          {parts.map((P, j) => (
            <g key={j} opacity={Math.min(1, k * 5 - j + 0.5)}>
              <rect x={20 + j * 58} y={86} width={50} height={40} rx={10} fill={P.c} />
              <Tx x={45 + j * 58} y={110} s={P.s} lang={lang} size={10} fill="#fff" w={900} />
            </g>
          ))}
          <Arrow d="M270,140 C220,190 100,190 50,140" c="#db2777" />
        </g>
      );
    }
    if (i === 2) return (
      <g>{stage}
        <Kid x={120} y={180} s={1.6} arms={[20, 120]} />
        <rect x={140} y={92} width={34} height={24} rx={3} fill="#fff" stroke="#a78bfa" />
        <circle cx={250} cy={80} r={30} fill="#fff" stroke="#7c3aed" strokeWidth="3" />
        <path d={`M250,80 L250,54 A26,26 0 ${p > 0.5 ? 1 : 0} 1 ${250 + Math.sin(p * Math.PI * 2) * 26},${80 - Math.cos(p * Math.PI * 2) * 26} Z`} fill="#ddd6fe" />
        <Tx x={250} y={130} s={t("× 3 out loud", "× 3 բարձրաձայն", "× 3 вслух")} lang={lang} size={11} w={900} />
      </g>
    );
    if (i === 3) {
      const ph = Math.floor(p * 3);
      const r = ph === 0 ? lerp(18, 34, (p * 3) % 1) : ph === 1 ? 34 : lerp(34, 18, (p * 3) % 1);
      return (
        <g>{stage}
          <Kid x={100} y={180} s={1.7} arms={[25, 25]} />
          <circle cx={230} cy={90} r={r} fill="#c4b5fd" opacity={0.6} />
          <Tx x={230} y={96} s={[t("in 4", "ներս 4", "вдох 4"), t("hold 4", "պահի՛ր 4", "держи 4"), t("out 4", "դուրս 4", "выдох 4")][ph]} lang={lang} size={12} w={900} />
        </g>
      );
    }
    if (i === 4) {
      const look = Math.floor(p * 3);
      return (
        <g>{stage}
          <Kid x={160} y={120} s={1.3} arms={[20, 60]} />
          {[50, 160, 270].map((x, j) => (
            <g key={x}>
              <circle cx={x} cy={196} r={14} fill={SKIN} stroke={j === look ? "#7c3aed" : "none"} strokeWidth="3" />
              <path d={`M${x - 5},${200} q5,4 10,0`} stroke={INK} strokeWidth="1.5" fill="none" />
            </g>
          ))}
          <path d={`M160,70 L${[50, 160, 270][look]},180`} stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 4" />
          <Pill x={260} y={40} s={t("pause…", "դադար…", "пауза…")} lang={lang} w={70} />
        </g>
      );
    }
    return (
      <g>{stage}
        <Kid x={160} y={130} s={1.3} arms={[40, 40]} />
        {Array.from({ length: 7 }, (_, j) => (
          <g key={j}>
            <circle cx={30 + j * 44} cy={200} r={13} fill={SKIN} />
            <path d={`M${22 + j * 44},${180 - Math.abs(Math.sin(p * 12 + j)) * 6} l8,-6 M${38 + j * 44},${180 - Math.abs(Math.sin(p * 12 + j)) * 6} l-8,-6`} stroke={SKIN_D} strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
        <Tx x={160} y={40} s={t("Thank you!", "Շնորհակալություն", "Спасибо!")} lang={lang} size={16} fill="#7c3aed" w={900} />
      </g>
    );
  },
};

/* ---------------- grade 10: a monthly budget ---------------- */

const Coin = ({ x, y, r = 10 }: { x: number; y: number; r?: number }) => (
  <g><circle cx={x} cy={y} r={r} fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" /><text x={x} y={y + r * 0.35} textAnchor="middle" fontSize={r} fontWeight="900" fill="#92400e">֏</text></g>
);

const budget: Mech = {
  title: t("Planning your money", "Ինչպես պլանավորել գումարդ", "Как планировать деньги"),
  hint: t("A budget is not about saying no to everything; it's about deciding in advance what matters most to you.", "Բյուջեն ամեն ինչին «ոչ» ասելը չէ․ դա նախապես որոշելն է, թե ինչն է քեզ համար ամենակարևորը։", "Бюджет — это не «нет» всему подряд, а заранее решить, что для тебя важнее всего."),
  caps: [
    t("Write down all the money you get in a month: pocket money, gifts, a summer job. Here it's 20,000 dram.", "Գրի՛ր այն ամբողջ գումարը, որ ստանում ես ամսական․ գրպանի փող, նվերներ, ամառային աշխատանք։ Այստեղ դա 20 000 դրամ է։", "Запиши все деньги, которые получаешь за месяц: карманные, подарки, летнюю подработку. Здесь это 20 000 драмов."),
    t("Split it with the 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings.", "Բաժանի՛ր 50/30/20 կանոնով․ 50%-ը՝ անհրաժեշտ բաների, 30%-ը՝ ցանկությունների, 20%-ը՝ խնայողության համար։", "Раздели по правилу 50/30/20: 50% на нужное, 30% на желания, 20% на сбережения."),
    t("Pay yourself first: move the 20% into savings on the day you get the money, before you spend anything.", "Նախ վճարի՛ր ինքդ քեզ․ 20%-ը խնայողության մեջ դիր գումարը ստանալու օրը, նախքան որևէ բան ծախսելը։", "Сначала заплати себе: отложи 20% в день получения денег, прежде чем что-то тратить."),
    t("Track every spend for a week: snacks, transport, games. Small amounts add up surprisingly fast.", "Մեկ շաբաթ գրանցի՛ր ամեն ծախս՝ նախուտեստ, տրանսպորտ, խաղեր։ Փոքր գումարները զարմանալիորեն արագ են կուտակվում։", "Неделю записывай каждую трату: перекусы, проезд, игры. Мелочи складываются удивительно быстро."),
    t("Set a goal: headphones for 32,000 dram. Saving 4,000 a month, you'll have them in 8 months.", "Նպատակ դրի՛ր․ 32 000 դրամանոց ականջակալներ։ Ամսական 4000 խնայելով՝ դրանք կունենաս 8 ամսում։", "Поставь цель: наушники за 32 000 драмов. Откладывая 4000 в месяц, купишь их через 8 месяцев."),
    t("At the end of the month, compare plan and reality, and adjust. Every month you get better at it.", "Ամսվա վերջում համեմատի՛ր պլանն ու իրականությունը և ճշգրտի՛ր։ Ամեն ամիս ավելի լավ կստացվի։", "В конце месяца сравни план с реальностью и поправь. С каждым месяцем получается лучше."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const bg = <rect width={320} height={220} fill="#f0fdf4" />;
    const pie = (on: number) => {
      const segs = [{ f: 0.5, c: "#60a5fa", s: t("needs 50%", "անհրաժեշտ 50%", "нужное 50%") }, { f: 0.3, c: "#f472b6", s: t("wants 30%", "ցանկություններ 30%", "желания 30%") }, { f: 0.2, c: "#22c55e", s: t("savings 20%", "խնայողություն 20%", "сбережения 20%") }];
      let a0 = -Math.PI / 2;
      return segs.map((sg, j) => {
        const a1 = a0 + sg.f * 2 * Math.PI * on;
        const large = sg.f * on > 0.5 ? 1 : 0;
        const d = `M110,110 L${110 + Math.cos(a0) * 70},${110 + Math.sin(a0) * 70} A70,70 0 ${large} 1 ${110 + Math.cos(a1) * 70},${110 + Math.sin(a1) * 70} Z`;
        a0 = a1;
        return <g key={j}><path d={d} fill={sg.c} /><rect x={210} y={70 + j * 30} width={14} height={14} rx={3} fill={sg.c} /><Tx x={230} y={81 + j * 30} s={sg.s} lang={lang} size={9} anchor="start" /></g>;
      });
    };
    if (i === 0) return (
      <g>{bg}
        {Array.from({ length: 8 }, (_, j) => <Coin key={j} x={40 + (j % 4) * 28} y={lerp(-20, 80 + Math.floor(j / 4) * 26, Math.min(1, k * 2 - j * 0.1))} r={12} />)}
        <text x={232} y={110} textAnchor="middle" fontSize="26" fontWeight="900" fill="#15803d">20 000 ֏</text>
        <Tx x={232} y={134} s={t("a month", "ամսական", "в месяц")} lang={lang} size={10} />
      </g>
    );
    if (i === 1) return <g>{bg}{pie(k)}</g>;
    if (i === 2) return (
      <g>{bg}
        <rect x={40} y={60} width={110} height={100} rx={10} fill="#fff" stroke="#94a3b8" />
        <Tx x={95} y={50} s={t("wallet", "դրամապանակ", "кошелёк")} lang={lang} size={9} />
        <g transform="translate(230,110)"><ellipse rx={44} ry={36} fill="#f9a8d4" /><circle cx={34} cy={-6} r={10} fill="#f9a8d4" /><rect x={-8} y={-38} width={16} height={4} fill="#831843" /><Tx x={0} y={50} s={t("savings first", "նախ՝ խնայողություն", "сначала копилка")} lang={lang} size={9} /></g>
        <Coin x={lerp(95, 230, k)} y={lerp(110, 70, k)} r={14} />
        <text x={lerp(95, 230, k)} y={lerp(140, 100, k)} textAnchor="middle" fontSize="11" fontWeight="900" fill="#15803d">4000</text>
      </g>
    );
    if (i === 3) {
      const rows = [t("snack 500", "նախուտեստ 500", "перекус 500"), t("bus 200", "ավտոբուս 200", "автобус 200"), t("snack 500", "նախուտեստ 500", "перекус 500"), t("game 1500", "խաղ 1500", "игра 1500"), t("snack 500", "նախուտեստ 500", "перекус 500")];
      const shown = Math.min(rows.length, Math.floor(k * rows.length) + 1);
      return (
        <g>{bg}
          <rect x={40} y={30} width={150} height={170} rx={6} fill="#fff" stroke="#cbd5e1" />
          {rows.slice(0, shown).map((r, j) => <Tx key={j} x={56} y={60 + j * 24} s={r} lang={lang} size={10} anchor="start" />)}
          <text x={250} y={110} textAnchor="middle" fontSize="22" fontWeight="900" fill={RED}>{[500, 700, 1200, 2700, 3200][shown - 1]} ֏</text>
          <Tx x={250} y={132} s={t("in 5 days", "5 օրում", "за 5 дней")} lang={lang} size={9} />
        </g>
      );
    }
    if (i === 4) {
      const m = Math.min(8, Math.floor(k * 8) + 1);
      return (
        <g>{bg}
          <rect x={40} y={150} width={240} height={20} rx={10} fill="#dcfce7" stroke="#86efac" />
          <rect x={40} y={150} width={240 * (m / 8)} height={20} rx={10} fill="#22c55e" />
          <g transform="translate(160,80)"><path d="M-30,10 a30,30 0 0 1 60,0" stroke="#1f2937" strokeWidth="6" fill="none" /><rect x={-38} y={6} width={14} height={24} rx={5} fill="#1f2937" /><rect x={24} y={6} width={14} height={24} rx={5} fill="#1f2937" /></g>
          <Tx x={160} y={196} s={t(`month ${m} of 8`, `${m === 1 ? "1-ին" : `${m}-րդ`} ամիս՝ 8-ից`, `месяц ${m} из 8`)} lang={lang} size={11} />
          {m === 8 ? <Mark x={260} y={70} ok r={14} /> : null}
        </g>
      );
    }
    return (
      <g>{bg}
        <g opacity={0.35}>{pie(1)}</g>
        <path d="M60,190 h200" stroke="#94a3b8" />
        <Arrow d={`M${lerp(80, 240, k)},200 h0.1`} c="#7c3aed" />
        <Tx x={160} y={30} s={t("plan → check → adjust", "պլան → ստուգում → ճշգրտում", "план → проверка → поправка")} lang={lang} size={12} fill="#7c3aed" w={900} />
      </g>
    );
  },
};

/* ---------------- grade 11: spotting phishing ---------------- */

const Mail = ({ lang, from, hi }: { lang: "en" | "hy" | "ru"; from?: number; hi?: number }) => (
  <g>
    <rect x={20} y={20} width={280} height={170} rx={10} fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
    <rect x={20} y={20} width={280} height={34} rx={10} fill="#f1f5f9" />
    <text x={34} y={42} fontSize="10" fontWeight="700" fill="#334155">support@<tspan fill={from ? RED : "#334155"} fontWeight={from ? 900 : 700}>bank-arm.co</tspan></text>
    <Tx x={34} y={76} s={t("URGENT: your account will be", "ՇՏԱՊ․ ձեր հաշիվը կարգելափակվի", "СРОЧНО: ваш счёт будет")} lang={lang} size={10} anchor="start" w={900} fill={hi === 1 ? RED : INK} />
    <Tx x={34} y={90} s={t("blocked in 1 hour!", "1 ժամից", "заблокирован через 1 час!")} lang={lang} size={10} anchor="start" w={900} fill={hi === 1 ? RED : INK} />
    <Tx x={34} y={112} s={t("Confirm your card number and PIN:", "Հաստատեք քարտի համարը և PIN-ը․", "Подтвердите номер карты и PIN:")} lang={lang} size={9} anchor="start" fill={hi === 1 ? RED : INK} />
    <rect x={34} y={124} width={130} height={26} rx={13} fill="#2563eb" />
    <Tx x={99} y={141} s={t("Confirm now", "Հաստատել", "Подтвердить")} lang={lang} size={10} fill="#fff" w={900} />
  </g>
);

const phishing: Mech = {
  title: t("Is this message real?", "Այս հաղորդագրությունն իրակա՞ն է", "Это сообщение настоящее?"),
  hint: t("A real bank will never ask for your PIN, password or a code from an SMS. Never.", "Իսկական բանկը երբեք չի խնդրի PIN, գաղտնաբառ կամ SMS-ով եկած կոդ։ Երբեք։", "Настоящий банк никогда не попросит PIN, пароль или код из СМС. Никогда."),
  caps: [
    t("A message arrives. It looks like it's from a bank, an online shop or your school.", "Հաղորդագրություն է գալիս։ Թվում է, թե բանկից է, առցանց խանութից կամ դպրոցից։", "Приходит сообщение. Похоже, что от банка, интернет-магазина или школы."),
    t("Check the sender. Look letter by letter: \"bank-arm.co\" is not the bank's real address.", "Ստուգի՛ր ուղարկողին։ Նայի՛ր տառ առ տառ․ «bank-arm.co»-ն բանկի իրական հասցեն չէ։", "Проверь отправителя. Смотри буква за буквой: «bank-arm.co» — не настоящий адрес банка."),
    t("Look for pressure: \"urgent\", \"blocked\", \"you've won\", or a request for your PIN or password. These are classic tricks.", "Փնտրի՛ր ճնշում․ «շտապ», «արգելափակված», «դուք շահել եք» կամ PIN-ի, գաղտնաբառի պահանջ։ Սրանք դասական հնարքներ են։", "Ищи давление: «срочно», «заблокирован», «вы выиграли» или просьбу назвать PIN или пароль. Это классические уловки."),
    t("Hold your finger on the link (or hover the mouse) without clicking. The real address it leads to is different!", "Մատդ պահի՛ր հղման վրա (կամ մկնիկը տար վրան)՝ առանց սեղմելու։ Իրական հասցեն, ուր տանում է, այլ է։", "Подержи палец на ссылке (или наведи мышь), не нажимая. Настоящий адрес, куда она ведёт, другой!"),
    t("Don't click and don't reply. Open the official app or type the website yourself, or call the number on your card.", "Մի՛ սեղմիր և մի՛ պատասխանիր։ Բացի՛ր պաշտոնական հավելվածը կամ ինքդ գրի՛ր կայքի հասցեն, կամ զանգի՛ր քարտիդ վրա նշված համարով։", "Не нажимай и не отвечай. Открой официальное приложение или сам набери адрес сайта, либо позвони по номеру на карте."),
    t("Report it and delete it. Turn on two-step login, so a stolen password alone isn't enough.", "Հաղորդի՛ր և ջնջի՛ր։ Միացրո՛ւ երկքայլ մուտքը, որպեսզի միայն գողացված գաղտնաբառը բավարար չլինի։", "Пожалуйся и удали. Включи двухэтапный вход, чтобы одного украденного пароля было мало."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const bg = <rect width={320} height={220} fill="#eff6ff" />;
    if (i === 0) return <g>{bg}<g transform={`translate(0,${lerp(40, 0, k)})`} opacity={k}><Mail lang={lang} /></g></g>;
    if (i === 1) return <g>{bg}<Mail lang={lang} from={1} /><ellipse cx={120} cy={38} rx={46 * k + 1} ry={14} fill="none" stroke={RED} strokeWidth="2.5" /><Mark x={200} y={38} ok={false} r={10} /></g>;
    if (i === 2) return <g>{bg}<Mail lang={lang} hi={1} /><Tx x={250} y={100} s={t("pressure!", "ճնշում", "давление!")} lang={lang} size={12} fill={RED} w={900} /></g>;
    if (i === 3) return (
      <g>{bg}<Mail lang={lang} />
        <Hand x={100} y={lerp(200, 150, k)} rot={180} s={0.8} />
        {k > 0.8 ? <g><rect x={120} y={156} width={176} height={24} rx={6} fill="#0f172a" /><text x={128} y={172} fontSize="9.5" fill="#fff">https://bnk-login.<tspan fill="#f87171" fontWeight="900">top</tspan>/verify</text></g> : null}
      </g>
    );
    if (i === 4) return (
      <g>{bg}
        <g opacity={0.35}><Mail lang={lang} /></g>
        <Mark x={99} y={137} ok={false} r={16} />
        <g transform="translate(240,110)"><rect x={-34} y={-60} width={68} height={120} rx={12} fill="#0f172a" /><rect x={-28} y={-48} width={56} height={92} rx={4} fill="#dcfce7" /><Tx x={0} y={0} s={t("official|app", "պաշտոնական|հավելված", "официальное|приложение")} lang={lang} size={7} fill="#15803d" /></g>
      </g>
    );
    return (
      <g>{bg}
        <g transform={`translate(80,110) rotate(${lerp(0, -10, k)})`} opacity={1 - k * 0.7}><rect x={-50} y={-40} width={100} height={80} rx={8} fill="#fff" stroke="#cbd5e1" /><path d="M-50,-40 L0,0 L50,-40" stroke="#cbd5e1" fill="none" /></g>
        <g transform="translate(80,170)"><rect x={-14} y={-16} width={28} height={30} rx={3} fill="#94a3b8" /><rect x={-18} y={-20} width={36} height={6} rx={2} fill="#64748b" /></g>
        <g transform="translate(230,110)">
          <rect x={-40} y={-70} width={80} height={140} rx={12} fill="#0f172a" /><rect x={-34} y={-58} width={68} height={112} rx={4} fill="#fff" />
          <Tx x={0} y={-30} s={t("Login code", "Մուտքի կոդ", "Код входа")} lang={lang} size={9} />
          <text x={0} y={0} textAnchor="middle" fontSize="18" fontWeight="900" fill="#2563eb">482 913</text>
          <Tx x={0} y={30} s={t("2-step login", "երկքայլ մուտք", "двухэтапный вход")} lang={lang} size={8} fill={GREEN} />
        </g>
      </g>
    );
  },
};

/* ---------------- grade 11: CV and job interview ---------------- */

const interview: Mech = {
  title: t("From CV to handshake", "Ինքնակենսագրականից մինչև ձեռքսեղմում", "От резюме до рукопожатия"),
  hint: t("First jobs, internships, volunteering and summer camps all use the same steps.", "Առաջին աշխատանքը, պրակտիկան, կամավորությունը և ամառային ճամբարներն օգտագործում են նույն քայլերը։", "Первая работа, стажировка, волонтёрство и летние лагеря — везде одни и те же шаги."),
  caps: [
    t("Research the place: what do they do, who are their customers, what is the job really about?", "Ուսումնասիրի՛ր տեղը․ ինչո՞վ են զբաղվում, ովքե՞ր են նրանց հաճախորդները, ինչի՞ մասին է իրականում աշխատանքը։", "Изучи место: чем они занимаются, кто их клиенты, в чём на самом деле суть работы?"),
    t("Write a one-page CV: contacts, education, projects and experience (clubs and volunteering count!), skills and languages.", "Գրի՛ր մեկ էջանոց ինքնակենսագրական․ կոնտակտներ, կրթություն, նախագծեր և փորձ (խմբակներն ու կամավորությունը նույնպես հաշվվում են), հմտություններ և լեզուներ։", "Составь резюме на одну страницу: контакты, образование, проекты и опыт (кружки и волонтёрство тоже считаются!), навыки и языки."),
    t("Prepare three short stories with STAR: Situation, Task, Action, Result.", "Պատրաստի՛ր երեք կարճ պատմություն STAR եղանակով․ իրավիճակ, խնդիր, գործողություն, արդյունք։", "Подготовь три короткие истории по схеме STAR: ситуация, задача, действие, результат."),
    t("On the day: arrive 10 minutes early, dressed neatly, phone on silent. Smile and give a firm handshake.", "Այդ օրը․ եկի՛ր 10 րոպե շուտ, կոկիկ հագնված, հեռախոսն անձայն։ Ժպտա՛ և ամուր սեղմի՛ր ձեռքը։", "В тот день: приди на 10 минут раньше, опрятно одетым, телефон на беззвучном. Улыбнись и крепко пожми руку."),
    t("Answer with your STAR stories, and at the end ask one or two questions of your own about the job.", "Պատասխանի՛ր STAR պատմություններով, իսկ վերջում աշխատանքի մասին տուր մեկ-երկու սեփական հարց։", "Отвечай историями по STAR, а в конце задай один-два своих вопроса о работе."),
    t("Within a day, send a short thank-you message. Whatever the result, each interview makes the next one easier.", "Մեկ օրվա ընթացքում ուղարկի՛ր կարճ շնորհակալական հաղորդագրություն։ Ինչ էլ լինի արդյունքը, ամեն հարցազրույց հաջորդը հեշտացնում է։", "В течение дня отправь короткое письмо с благодарностью. Каким бы ни был результат, каждое собеседование облегчает следующее."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const bg = <rect width={320} height={220} fill="#f8fafc" />;
    if (i === 0) return (
      <g>{bg}
        <rect x={40} y={40} width={150} height={110} rx={8} fill="#fff" stroke="#cbd5e1" />
        <rect x={52} y={54} width={60} height={8} rx={3} fill="#94a3b8" /><rect x={52} y={70} width={120} height={6} rx={3} fill="#e2e8f0" /><rect x={52} y={82} width={110} height={6} rx={3} fill="#e2e8f0" />
        <g transform={`translate(${lerp(160, 120, k)},${lerp(140, 100, k)})`}><circle r={20} fill="none" stroke="#2563eb" strokeWidth="5" /><line x1={14} y1={14} x2={32} y2={32} stroke="#2563eb" strokeWidth="6" strokeLinecap="round" /></g>
        <Tx x={250} y={80} s={t("what do they do?|who are their clients?", "ինչո՞վ են զբաղվում|ովքե՞ր են հաճախորդները", "чем занимаются?|кто клиенты?")} lang={lang} size={9} />
      </g>
    );
    if (i === 1) {
      const rows = [t("Contacts", "Կոնտակտներ", "Контакты"), t("Education", "Կրթություն", "Образование"), t("Projects & experience", "Նախագծեր և փորձ", "Проекты и опыт"), t("Skills & languages", "Հմտություններ և լեզուներ", "Навыки и языки")];
      return (
        <g>{bg}
          <rect x={90} y={14} width={140} height={196} rx={6} fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx={116} cy={42} r={14} fill="#cbd5e1" />
          {rows.map((r, j) => (
            <g key={j} opacity={Math.min(1, k * 4 - j + 0.5)}>
              <Tx x={104} y={78 + j * 34} s={r} lang={lang} size={8.5} anchor="start" fill="#2563eb" />
              <rect x={104} y={84 + j * 34} width={110} height={4} rx={2} fill="#e2e8f0" /><rect x={104} y={92 + j * 34} width={90} height={4} rx={2} fill="#e2e8f0" />
            </g>
          ))}
          <Pill x={280} y={110} s={t("1 page", "1 էջ", "1 страница")} lang={lang} w={60} />
        </g>
      );
    }
    if (i === 2) {
      const star = [{ l: "S", s: t("Situation", "Իրավիճակ", "Ситуация") }, { l: "T", s: t("Task", "Խնդիր", "Задача") }, { l: "A", s: t("Action", "Գործողություն", "Действие") }, { l: "R", s: t("Result", "Արդյունք", "Результат") }];
      return (
        <g>{bg}
          {star.map((S, j) => (
            <g key={j} opacity={Math.min(1, k * 4 - j + 0.5)}>
              <circle cx={50 + j * 74} cy={100} r={26} fill="#fbbf24" />
              <text x={50 + j * 74} y={108} textAnchor="middle" fontSize="22" fontWeight="900" fill="#78350f">{S.l}</text>
              <Tx x={50 + j * 74} y={146} s={S.s} lang={lang} size={9} />
            </g>
          ))}
          <path d="M20,40 l10,-20 l10,20 l22,2 l-16,14 l6,22 l-22,-12 l-22,12 l6,-22 l-16,-14 Z" fill="#fde68a" transform="translate(120,0) scale(0.8)" />
        </g>
      );
    }
    if (i === 3) return (
      <g>{bg}
        <rect x={0} y={170} width={320} height={50} fill="#e2e8f0" />
        <Adult x={230} y={174} shirt="#334155" arms={[70, 20]} />
        <Kid x={lerp(20, 168, k)} y={174} s={1.25} shirt="#0ea5e9" arms={[20, 70]} />
        <g transform="translate(270,40)"><circle r={20} fill="#fff" stroke="#475569" strokeWidth="2" /><line x1={0} y1={0} x2={0} y2={-14} stroke="#475569" strokeWidth="2" /><line x1={0} y1={0} x2={10} y2={4} stroke="#475569" strokeWidth="2" /></g>
        <Tx x={270} y={78} s={t("10 min early", "10 րոպե շուտ", "на 10 мин раньше")} lang={lang} size={8.5} />
      </g>
    );
    if (i === 4) return (
      <g>{bg}
        <rect x={100} y={130} width={120} height={10} rx={3} fill={WOOD} />
        <Kid x={60} y={186} s={1.3} shirt="#0ea5e9" arms={[30, 60]} />
        <Adult x={260} y={186} shirt="#334155" arms={[60, 30]} />
        <g opacity={p < 0.5 ? 1 : 0.2}><rect x={20} y={20} width={130} height={40} rx={10} fill="#fff" stroke="#fbbf24" strokeWidth="2" /><Tx x={85} y={44} s={t("S · T · A · R", "S · T · A · R", "S · T · A · R")} lang={lang} size={12} w={900} fill="#b45309" /></g>
        <g opacity={p >= 0.5 ? 1 : 0.2}><rect x={170} y={20} width={130} height={40} rx={10} fill="#fff" stroke="#2563eb" strokeWidth="2" /><Tx x={235} y={44} s={t("My question:…", "Իմ հարցը․…", "Мой вопрос:…")} lang={lang} size={10} fill="#2563eb" /></g>
      </g>
    );
    return (
      <g>{bg}
        <g transform="translate(160,110)">
          <rect x={-80} y={-50} width={160} height={100} rx={10} fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M-80,-50 L0,10 L80,-50" stroke="#cbd5e1" strokeWidth="2" fill="none" />
          <Tx x={0} y={36} s={t("Thank you for your time!", "Շնորհակալություն ժամանակի համար", "Спасибо за уделённое время!")} lang={lang} size={9} fill="#2563eb" />
        </g>
        <Arrow d={`M${lerp(100, 260, k)},190 h0.1`} c="#2563eb" />
        <Mark x={270} y={50} ok r={14} />
      </g>
    );
  },
};

/* ---------------- grade 11: dressing for the cold ---------------- */

const layers: Mech = {
  title: t("Stay warm: layers and hypothermia", "Մնալ տաք․ շերտեր և գերսառեցում", "Как не замёрзнуть: слои и переохлаждение"),
  hint: t("Several thin layers trap more warm air than one thick coat, and you can take one off before you sweat.", "Մի քանի բարակ շերտը ավելի շատ տաք օդ է պահում, քան մեկ հաստ վերարկուն, և կարող ես մեկը հանել, նախքան քրտնելը։", "Несколько тонких слоёв удерживают больше тёплого воздуха, чем одна толстая куртка, и один можно снять, пока не вспотел."),
  caps: [
    t("Base layer, next to the skin: wool or synthetic, which move sweat away. Not cotton: wet cotton stays cold.", "Հիմնական շերտ՝ մաշկին մոտ․ բուրդ կամ սինթետիկա, որոնք քրտինքը հեռացնում են։ Ոչ բամբակ․ թաց բամբակը մնում է սառը։", "Базовый слой, к телу: шерсть или синтетика, которые отводят пот. Не хлопок: мокрый хлопок остаётся холодным."),
    t("Middle layer: a fleece or wool jumper that traps warm air.", "Միջին շերտ՝ ֆլիս կամ բրդյա սվիտեր, որը պահում է տաք օդը։", "Средний слой: флиска или шерстяной свитер, удерживающие тёплый воздух."),
    t("Outer layer: a jacket that stops wind and rain. Add a hat, gloves and warm socks: you lose a lot of heat from your head and hands.", "Արտաքին շերտ՝ քամուց և անձրևից պաշտպանող բաճկոն։ Ավելացրո՛ւ գլխարկ, ձեռնոցներ և տաք գուլպաներ․ գլխից և ձեռքերից շատ ջերմություն ես կորցնում։", "Внешний слой: куртка от ветра и дождя. Добавь шапку, перчатки и тёплые носки: через голову и руки уходит много тепла."),
    t("Watch for hypothermia: shivering, then the \"umbles\": stumbling, mumbling, fumbling and grumbling.", "Հետևի՛ր գերսառեցման նշաններին․ դող, հետո՝ սայթաքում, անհասկանալի խոսք, անճարակ ձեռքեր և դյուրագրգռություն։", "Следи за признаками переохлаждения: дрожь, потом спотыкание, невнятная речь, неловкие руки и раздражительность."),
    t("Help: get them out of the wind, swap wet clothes for dry, wrap them up, put something under them, and give a warm sweet drink if they are fully awake.", "Օգնի՛ր․ հեռացրու քամուց, թաց հագուստը փոխի՛ր չորով, փաթաթի՛ր, տակը ինչ-որ բան դիր և տաք քաղցր ըմպելիք տուր, եթե լիովին արթուն է։", "Помоги: укрой от ветра, смени мокрую одежду на сухую, укутай, подложи что-нибудь снизу и дай тёплое сладкое питьё, если человек в полном сознании."),
    t("Call 112 if they are confused, very sleepy or stop shivering while still cold. Handle them gently.", "Զանգի՛ր 112, եթե շփոթված է, շատ քնկոտ կամ դադարում է դողալ, բայց դեռ սառն է։ Զգույշ վարվի՛ր նրա հետ։", "Звони 112, если человек растерян, очень сонный или перестал дрожать, оставаясь холодным. Обращайся с ним бережно."),
  ],
  draw: (i, p, lang) => {
    const k = K(p);
    const snow = Array.from({ length: 16 }, (_, j) => <circle key={j} cx={(j * 41 + p * 20) % 320} cy={(j * 29 + p * 120) % 220} r={2} fill="#fff" opacity={0.8} />);
    const bg = <g><rect width={320} height={220} fill="#e0f2fe" />{snow}<rect y={190} width={320} height={30} fill="#f8fafc" /></g>;
    const L = [
      { c: "#94a3b8", s: t("base: wool", "հիմնական․|բուրդ", "база:|шерсть") },
      { c: "#f97316", s: t("middle: fleece", "միջին․|ֆլիս", "средний:|флис") },
      { c: "#2563eb", s: t("outer: windproof", "արտաքին․|քամակայուն", "внешний:|ветрозащита") },
    ];
    if (i <= 2) return (
      <g>{bg}
        {L.slice(0, i + 1).map((l, j) => {
          const grow = j === i ? k : 1;
          return <rect key={j} x={130 - j * 6 * grow} y={70 - j * 4 * grow} width={60 + j * 12 * grow} height={80 + j * 6 * grow} rx={14} fill={l.c} opacity={j === i ? 0.5 + 0.5 * k : 1} />;
        }).reverse()}
        <circle cx={160} cy={52} r={16} fill={SKIN} />
        {i === 2 ? <g opacity={k}><path d="M144,48 a16,16 0 0 1 32,0 Z" fill="#dc2626" /><circle cx={160} cy={30} r={5} fill="#fff" /><rect x={108} y={140} width={16} height={18} rx={6} fill="#dc2626" /><rect x={196} y={140} width={16} height={18} rx={6} fill="#dc2626" /></g> : null}
        <rect x={140} y={150} width={16} height={40} fill="#1e3a8a" /><rect x={164} y={150} width={16} height={40} fill="#1e3a8a" />
        {L.slice(0, i + 1).map((l, j) => <g key={j}><rect x={226} y={60 + j * 30} width={12} height={12} rx={3} fill={l.c} /><Tx x={242} y={70 + j * 30} s={l.s} lang={lang} size={8.5} anchor="start" /></g>)}
        {i === 0 ? <g><Pill x={60} y={60} s={t("cotton", "բամբակ", "хлопок")} lang={lang} w={60} /><Mark x={92} y={50} ok={false} r={8} /></g> : null}
      </g>
    );
    if (i === 3) {
      const sh = wob(p, 10) * 3;
      return (
        <g>{bg}
          <g transform={`translate(${sh},0)`}><Kid x={120} y={190} s={1.6} shirt="#64748b" arms={[10, 10]} /></g>
          {[t("stumbles", "սայթաքում է", "спотыкается"), t("mumbles", "խոսքը խառն է", "бормочет"), t("fumbles", "ձեռքերը չեն լսում", "руки не слушаются"), t("grumbles", "դյուրագրգիռ է", "ворчит")].map((s, j) => (
            <g key={j} opacity={Math.min(1, k * 4 - j + 0.5)}><Pill x={250} y={50 + j * 32} s={s} lang={lang} w={110} fill="#e0f2fe" stroke="#0284c7" color="#0369a1" /></g>
          ))}
          <Tx x={120} y={30} s={t("35 °C or below", "35 °C և ցածր", "35 °C и ниже")} lang={lang} size={11} fill={RED} w={900} />
        </g>
      );
    }
    if (i === 4) return (
      <g>
        <rect width={320} height={220} fill="#fef3c7" />
        <path d="M40,190 L160,90 L280,190 Z" fill="#f97316" opacity={0.85} />
        <rect x={100} y={176} width={130} height={10} rx={4} fill="#a16207" />
        <rect x={110} y={160} width={lerp(0, 110, k)} height={16} rx={8} fill="#2563eb" />
        <circle cx={226} cy={166} r={9} fill={SKIN} />
        <g transform="translate(70,150)"><rect x={-10} y={-18} width={20} height={24} rx={4} fill="#fff" stroke="#94a3b8" />{[0, 1].map((j) => <path key={j} d={`M${-4 + j * 8},-22 q4,-6 0,-12`} stroke="#94a3b8" strokeWidth="1.5" fill="none" />)}</g>
        <Tx x={160} y={30} s={t("dry · wrapped · off the ground", "չոր · փաթաթված · գետնից բարձր", "сухо · укутан · не на земле")} lang={lang} size={10} />
      </g>
    );
    return (
      <g>{bg}
        <Kid x={110} y={190} s={1.6} shirt="#64748b" arms={[10, 10]} face={false} />
        <Tx x={110} y={60} s={t("Zzz…", "Zzz…", "Zzz…")} lang={lang} size={14} fill="#64748b" w={900} />
        <g transform="translate(240,100)"><rect x={-30} y={-50} width={60} height={100} rx={10} fill="#0f172a" /><rect x={-24} y={-40} width={48} height={70} rx={4} fill="#fee2e2" /><text x={0} y={2} textAnchor="middle" fontSize="16" fontWeight="900" fill={RED}>112</text></g>
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { puncture, factcheck, bread, purify, speech, budget, phishing, interview, layers };

void [Adult, Drop, Flame, Ground, Kid, SKIN, SKIN_D, Sun, Tree, WATER, WOOD];
