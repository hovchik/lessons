"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for church history, grades 5–11. */

const P = (x: number, y: number, name: Tr, text: Tr) => ({ x, y, name, text });

const Tx = ({ x, y, s, lang, size = 9, fill = "#1e1b4b", anchor = "middle", w = 900 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>
    {/* "|" breaks a label into lines */}
    {L(s, lang).split("|").map((line, k) => <tspan key={k} x={x} dy={k ? size * 1.15 : 0}>{line}</tspan>)}
  </text>
);
const Head = ({ x, y, r = 6, fill }: { x: number; y: number; r?: number; fill: string }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={fill} />
    <path d={`M${x - r * 1.5},${y + r * 3} a${r * 1.5},${r * 1.6} 0 0 1 ${r * 3},0 Z`} fill={fill} />
  </g>
);

/* ---------------- grade 5: the Bible as a library ---------------- */

const OT: Array<[number, Tr, string]> = [
  [5, t("Law", "Օրենք", "Закон"), "#b45309"],
  [12, t("History", "Պատմական", "Исторические"), "#0369a1"],
  [5, t("Wisdom", "Իմաստության", "Учительные"), "#7c3aed"],
  [17, t("Prophets", "Մարգարեներ", "Пророки"), "#be123c"],
];
const NT: Array<[number, Tr, string]> = [
  [4, t("Gospels", "Ավետարաններ", "Евангелия"), "#b45309"],
  [1, t("Acts", "Գործք", "Деяния"), "#0369a1"],
  [21, t("Epistles", "Թղթեր", "Послания"), "#047857"],
  [1, t("Rev.", "Հայտն.", "Откр."), "#be123c"],
];

function Shelf({ y, groups, w, lang, title }: { y: number; groups: Array<[number, Tr, string]>; w: number; lang: ArtLang; title: Tr }) {
  let x = 14;
  return (
    <g>
      <Tx x={14} y={y - 6} s={title} lang={lang} size={8.5} fill="#1e293b" anchor="start" />
      <rect x="8" y={y + 52} width="304" height="6" rx="2" fill="#92400e" />
      {groups.map(([n, name, c], g) => {
        const x0 = x;
        const spines = Array.from({ length: n }, (_, k) => {
          const h = 40 + ((k * 7 + g * 3) % 11);
          const r = <rect key={k} x={x + k * w} y={y + 52 - h} width={w - 1} height={h} rx="1" fill={c} opacity={0.75 + ((k % 3) * 0.08)} />;
          return r;
        });
        x += n * w + 4;
        return (
          <g key={g}>
            {spines}
            <Tx x={x0 + (n * w) / 2} y={y + (g % 2 ? 80 : 70)} s={name} lang={lang} size={L(name, lang).length > 9 ? 6 : 6.8} fill={c} />
          </g>
        );
      })}
    </g>
  );
}

const bible: Diagram = {
  title: t("The Bible: a library of books", "Աստվածաշունչ՝ գրքերի գրադարան", "Библия: библиотека книг"),
  h: 226,
  draw: (lang) => (
    <g>
      <Shelf y={20} groups={OT} w={7.2} lang={lang} title={t("Old Testament", "Հին Կտակարան", "Ветхий Завет")} />
      <Shelf y={130} groups={NT} w={10.4} lang={lang} title={t("New Testament", "Նոր Կտակարան", "Новый Завет")} />
    </g>
  ),
  parts: [
    P(32, 30, t("Law", "Օրենք", "Закон"), t("The five books of Moses, from Genesis to Deuteronomy: the creation, Abraham, Joseph, the Exodus and the Ten Commandments. Jews call them the Torah.", "Մովսեսի հինգ գրքերը՝ Ծննդոցից մինչև Երկրորդ Օրենք․ աշխարհի արարումը, Աբրահամը, Հովսեփը, Եգիպտոսից ելքը և Տասը պատվիրանները։ Հրեաներն այս գրքերն անվանում են Թորա։", "Пять книг Моисея, от Бытия до Второзакония: сотворение мира, Авраам, Иосиф, Исход и десять заповедей. Евреи называют их Торой.")),
    P(96, 24, t("History", "Պատմական գրքեր", "Исторические книги"), t("From Joshua leading the people into the Promised Land, through the kings David and Solomon, to the return from captivity in Babylon. Churches count these books differently: Armenian, Orthodox and Catholic Bibles include some that Protestant Bibles leave out.", "Հեսուի՝ ժողովրդին Ավետյաց երկիր առաջնորդելուց, Դավիթ և Սողոմոն թագավորների միջով, մինչև Բաբելոնի գերությունից վերադարձը։ Եկեղեցիներն այս գրքերը տարբեր կերպ են հաշվում․ հայկական, ուղղափառ և կաթոլիկ Աստվածաշնչերը ներառում են որոշ գրքեր, որոնք բողոքականները չեն ներառում։", "От Иисуса Навина, приведшего народ в Землю обетованную, через царей Давида и Соломона до возвращения из вавилонского плена. Церкви считают эти книги по-разному: армянская, православная и католическая Библии включают некоторые книги, которых нет в протестантской.")),
    P(186, 24, t("Wisdom", "Իմաստության գրքեր", "Учительные книги"), t("Job, Psalms, Proverbs, Ecclesiastes and the Song of Songs: prayers, songs and advice for life. Psalms are read at almost every service of the Armenian Church.", "Հոբ, Սաղմոսներ, Առակներ, Ժողովող և Երգ երգոց․ աղոթքներ, երգեր և խորհուրդներ կյանքի համար։ Սաղմոսները կարդացվում են Հայ Եկեղեցու գրեթե բոլոր արարողությունների ժամանակ։", "Иов, Псалтирь, Притчи, Екклесиаст и Песнь песней: молитвы, песни и советы для жизни. Псалмы читают почти на каждой службе Армянской церкви.")),
    P(300, 24, t("Prophets", "Մարգարեական գրքեր", "Пророческие книги"), t("Isaiah, Jeremiah, Ezekiel and Daniel, the major prophets, and twelve minor prophets from Hosea to Malachi. The Old Testament ends with them, looking forward to the Saviour.", "Եսայի, Երեմիա, Եզեկիել և Դանիել՝ մեծ մարգարեները, և տասներկու փոքր մարգարեներ՝ Ովսեից մինչև Մաղաքիա։ Հին Կտակարանն ավարտվում է նրանցով՝ Փրկչի սպասումով։", "Исаия, Иеремия, Иезекииль и Даниил — великие пророки, и двенадцать малых пророков, от Осии до Малахии. Ими заканчивается Ветхий Завет, обращённый к ожиданию Спасителя.")),
    P(36, 140, t("Gospels", "Ավետարաններ", "Евангелия"), t("Four accounts of the life and teaching of Jesus, by Matthew, Mark, Luke and John. The Armenian word «Ավետարան» means \"good news\", like the Greek \"evangelion\".", "Հիսուսի կյանքի և ուսմունքի չորս պատմություն՝ Մատթեոսի, Մարկոսի, Ղուկասի և Հովհաննեսի կողմից։ «Ավետարան» բառը նշանակում է «բարի լուր», ինչպես հունարեն «էվանգելիոնը»։", "Четыре рассказа о жизни и учении Иисуса — от Матфея, Марка, Луки и Иоанна. Армянское слово «Аветаран», как и греческое «евангелие», означает «благая весть».")),
    P(70, 132, t("Acts of the Apostles", "Գործք առաքելոց", "Деяния апостолов"), t("The second book by Luke: how the apostles spread the faith after Pentecost, from Jerusalem all the way to Rome.", "Ղուկասի երկրորդ գիրքը․ ինչպես առաքյալները Պենտեկոստեից հետո տարածեցին հավատը՝ Երուսաղեմից մինչև Հռոմ։", "Вторая книга Луки: как апостолы после Пятидесятницы несли веру от Иерусалима до самого Рима.")),
    P(200, 132, t("Epistles", "Թղթեր", "Послания"), t("Letters to churches and to individual people, most of them by the apostle Paul. Some are older than the Gospels, which makes them the earliest Christian writings we have.", "Նամակներ եկեղեցիներին և առանձին մարդկանց, որոնց մեծ մասը գրել է Պողոս առաքյալը։ Դրանցից ոմանք ավելի հին են, քան Ավետարանները, ուստի մեզ հասած ամենավաղ քրիստոնեական գրվածքներն են։", "Письма церквам и отдельным людям, большинство из них — апостола Павла. Некоторые старше Евангелий, а значит, это самые ранние христианские тексты, дошедшие до нас.")),
    P(300, 132, t("Revelation", "Հայտնություն", "Откровение"), t("The last book of the Bible: the visions of John about the end of time, full of symbols such as seven seals and a new Jerusalem. The Armenian Church accepted it into the canon later than the other books.", "Աստվածաշնչի վերջին գիրքը՝ Հովհաննեսի տեսիլքները ժամանակների վախճանի մասին, լի խորհրդանիշներով, ինչպես յոթ կնիքները և նոր Երուսաղեմը։ Հայ Եկեղեցին այն կանոնի մեջ ընդունեց մյուս գրքերից ավելի ուշ։", "Последняя книга Библии: видения Иоанна о конце времён, полные символов, таких как семь печатей и новый Иерусалим. Армянская церковь приняла её в канон позже остальных книг.")),
  ],
};

/* ---------------- grade 5: the six days ---------------- */

const DAYS: Array<[number, number, Tr, string]> = [
  [56, 50, t("1 · light", "1 · լույս", "1 · свет"), "#fde68a"],
  [132, 50, t("2 · sky, waters", "2 · երկինք, ջրեր", "2 · небо, воды"), "#bae6fd"],
  [208, 50, t("3 · land, plants", "3 · ցամաք, բույսեր", "3 · суша, растения"), "#bbf7d0"],
  [56, 150, t("4 · sun, moon, stars", "4 · արև, լուսին, աստղեր", "4 · солнце, луна, звёзды"), "#fef3c7"],
  [132, 150, t("5 · fish, birds", "5 · ձկներ, թռչուններ", "5 · рыбы, птицы"), "#e0f2fe"],
  [208, 150, t("6 · animals, people", "6 · կենդանիներ, մարդ", "6 · животные, люди"), "#dcfce7"],
];

const sixdays: Diagram = {
  title: t("The six days and the seventh", "Վեց օրը և յոթերորդը", "Шесть дней и седьмой"),
  h: 210,
  draw: (lang) => (
    <g>
      <Tx x={132} y={12} s={t("days 1–3: spaces", "1–3-րդ օրեր․ տարածություններ", "дни 1–3: пространства")} lang={lang} size={7.5} fill="#475569" />
      <Tx x={132} y={112} s={t("days 4–6: those who fill them", "4–6-րդ օրեր․ դրանք լցնողները", "дни 4–6: то, что их наполняет")} lang={lang} size={7.5} fill="#475569" />
      {DAYS.map(([x, y, name, c], k) => (
        <g key={k}>
          <rect x={x - 36} y={y - 32} width="72" height="72" rx="8" fill={c} stroke="#94a3b8" strokeWidth="1" />
          <Tx x={x} y={y + 34} s={name} lang={lang} size={L(name, lang).length > 16 ? 5.4 : 6.2} fill="#334155" />
        </g>
      ))}
      {/* 1: light and darkness */}
      <circle cx="56" cy="44" r="16" fill="#1e293b" /><path d="M56,28 a16,16 0 0 1 0,32 Z" fill="#facc15" />
      {/* 2: sky over water */}
      <path d="M100,52 q8,-6 16,0 t16,0 t16,0 t16,0" fill="none" stroke="#0284c7" strokeWidth="2" />
      <ellipse cx="124" cy="34" rx="12" ry="6" fill="#fff" /><ellipse cx="140" cy="38" rx="10" ry="5" fill="#fff" />
      {/* 3: land and a plant */}
      <path d="M176,62 q32,-20 64,0 Z" fill="#a16207" />
      <path d="M208,50 V30 M208,38 q-8,-6 -10,-12 M208,34 q8,-6 12,-10" stroke="#16a34a" strokeWidth="2.2" fill="none" />
      {/* 4: sun, moon and stars */}
      <circle cx="44" cy="144" r="10" fill="#f59e0b" />
      <path d="M70,134 a9,9 0 1 0 0,16 a7,7 0 1 1 0,-16 Z" fill="#64748b" />
      <circle cx="62" cy="160" r="1.6" fill="#475569" /><circle cx="76" cy="158" r="1.4" fill="#475569" /><circle cx="36" cy="160" r="1.4" fill="#475569" />
      {/* 5: a fish and a bird */}
      <path d="M116,158 q10,-10 20,0 q-10,10 -20,0 Z M136,158 l8,-6 v12 Z" fill="#0284c7" />
      <path d="M118,136 q6,-6 12,0 q6,-6 12,0" fill="none" stroke="#334155" strokeWidth="2" />
      {/* 6: an animal and a person */}
      <path d="M186,160 h22 v-8 a8,6 0 0 0 -8,-6 h-10 a6,6 0 0 0 -4,10 Z M188,160 v6 M204,160 v6" fill="#a16207" stroke="#a16207" strokeWidth="2" />
      <Head x={226} y={138} r={5} fill="#334155" />
      {/* 7: rest */}
      <rect x="252" y="18" width="62" height="172" rx="10" fill="#fff7ed" stroke="#f59e0b" strokeWidth="2" />
      <Tx x={283} y={86} s={t("7", "7", "7")} lang={lang} size={26} fill="#f59e0b" />
      <Tx x={283} y={110} s={t("rest|and|blessing", "հանգիստ|և|օրհնություն", "отдых|и|благословение")} lang={lang} size={7} fill="#b45309" />
      <path d="M94,84 V118 M170,84 V118 M18,84 V118" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 3" />
    </g>
  ),
  parts: [
    P(84, 26, t("Days 1 and 4", "1-ին և 4-րդ օրեր", "Дни 1 и 4"), t("On the first day comes light; on the fourth, the lights that carry it: the Sun, the Moon and the stars. Many readers notice that the account is built in pairs like this, one column above the other.", "Առաջին օրը լույսն է, չորրորդ օրը՝ այն կրող լուսատուները՝ Արևը, Լուսինը և աստղերը։ Շատ ընթերցողներ նկատում են, որ պատմությունը կառուցված է այսպիսի զույգերով՝ մի սյունը մյուսի վերևում։", "В первый день появляется свет, в четвёртый — светила, которые его несут: Солнце, Луна и звёзды. Многие читатели замечают, что рассказ построен такими парами, одна колонка над другой.")),
    P(160, 26, t("Days 2 and 5", "2-րդ և 5-րդ օրեր", "Дни 2 и 5"), t("On the second day the sky is separated from the waters; on the fifth, birds fill the sky and fish fill the waters.", "Երկրորդ օրն երկինքը բաժանվում է ջրերից, հինգերորդ օրը թռչունները լցնում են երկինքը, իսկ ձկները՝ ջրերը։", "Во второй день небо отделяется от вод, в пятый птицы наполняют небо, а рыбы — воды.")),
    P(236, 26, t("Days 3 and 6", "3-րդ և 6-րդ օրեր", "Дни 3 и 6"), t("On the third day dry land and plants appear; on the sixth, the land is filled with animals and, last of all, people, who are given the plants for food.", "Երրորդ օրը հայտնվում են ցամաքը և բույսերը, վեցերորդ օրը ցամաքը լցվում է կենդանիներով և, ամենավերջում, մարդկանցով, որոնց սնունդ են տրվում բույսերը։", "В третий день появляются суша и растения, в шестой суша наполняется животными и, последними, людьми, которым растения даны в пищу.")),
    P(236, 128, t("In God's image", "Աստծո պատկերով", "По образу Божию"), t("Only of human beings does the account say that they were made \"in the image and likeness\" of God. The Church understands this as the gift of reason, freedom and the ability to love, and as responsibility for the rest of creation.", "Միայն մարդու մասին է պատմությունն ասում, որ նա ստեղծվեց Աստծո «պատկերով և նմանությամբ»։ Եկեղեցին դա հասկանում է որպես բանականության, ազատության և սիրելու կարողության պարգև, ինչպես նաև որպես պատասխանատվություն մնացած արարչության համար։", "Только о человеке рассказ говорит, что он создан «по образу и подобию» Бога. Церковь понимает это как дар разума, свободы и способности любить, а также как ответственность за остальное творение.")),
    P(306, 30, t("The seventh day", "Յոթերորդ օրը", "Седьмой день"), t("The work ends with rest and blessing, and the week of seven days comes from this account. For Christians the day of rest moved to Sunday, the day of the Resurrection, which in Armenian is called Կիրակի, \"the Lord's day\".", "Աշխատանքն ավարտվում է հանգստով և օրհնությամբ, և յոթօրյա շաբաթը գալիս է այս պատմությունից։ Քրիստոնյաների համար հանգստի օրը տեղափոխվեց կիրակի՝ Հարության օր, որը հայերեն կոչվում է Կիրակի՝ «Տիրոջ օր»։", "Работа завершается отдыхом и благословением, и неделя из семи дней происходит из этого рассказа. У христиан день отдыха перешёл на воскресенье, день Воскресения, которое по-армянски называется Կիրակի — «день Господень».")),
    P(18, 128, t("A day of 24 hours?", "24 ժամանոց օ՞ր", "День в 24 часа?"), t("The Sun appears only on day 4, so many theologians since ancient times have read the \"days\" not as 24 hours but as stages. The point of the account, the Church teaches, is that the world is God's creation and that it is good, not a timetable.", "Արևը հայտնվում է միայն 4-րդ օրը, ուստի հին ժամանակներից շատ աստվածաբաններ «օրերը» հասկացել են ոչ թե որպես 24 ժամ, այլ որպես փուլեր։ Եկեղեցին ուսուցանում է, որ պատմության իմաստն այն է, որ աշխարհն Աստծո արարչությունն է և այն բարի է, այլ ոչ թե ժամանակացույց։", "Солнце появляется только в 4-й день, поэтому многие богословы с древности понимали «дни» не как 24 часа, а как этапы. Смысл рассказа, учит Церковь, в том, что мир — творение Бога и он хорош, а не в расписании.")),
  ],
};

/* ---------------- grade 5: Abraham's family ---------------- */

const SONS = 12;

const patriarchs: Diagram = {
  title: t("From Abraham to the twelve tribes", "Աբրահամից մինչև տասներկու ցեղերը", "От Авраама до двенадцати колен"),
  h: 214,
  draw: (lang) => (
    <g>
      {[[160, 24, t("Abraham + Sarah", "Աբրահամ + Սառա", "Авраам + Сарра"), "#b45309"], [160, 74, t("Isaac + Rebekah", "Իսահակ + Ռեբեկա", "Исаак + Ревекка"), "#0369a1"]].map(([x, y, s, c], k) => (
        <g key={k}>
          <rect x={(x as number) - 64} y={(y as number) - 13} width="128" height="26" rx="13" fill="#fff" stroke={c as string} strokeWidth="2" />
          <Tx x={x as number} y={(y as number) + 3} s={s as Tr} lang={lang} size={8} fill={c as string} />
        </g>
      ))}
      <path d="M160,37 V61 M160,87 V100 H96 V112 M160,100 H224 V112" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      <rect x="54" y="112" width="84" height="24" rx="12" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
      <Tx x={96} y={127} s={t("Esau", "Եսավ", "Исав")} lang={lang} size={8} fill="#475569" />
      <rect x="168" y="112" width="112" height="24" rx="12" fill="#fff" stroke="#047857" strokeWidth="2" />
      <Tx x={224} y={127} s={t("Jacob = Israel", "Հակոբ = Իսրայել", "Иаков = Израиль")} lang={lang} size={8} fill="#047857" />
      <path d="M224,136 V148 H26 V160 M294,148 V160 M224,148 H294" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      {Array.from({ length: SONS }, (_, k) => {
        const x = 26 + k * 24.4;
        const joseph = k === 10;
        const judah = k === 3;
        return (
          <g key={k}>
            <path d={`M${x},148 V158`} stroke="#94a3b8" strokeWidth="1" />
            <Head x={x} y={166} r={4.5} fill={joseph ? "#e11d48" : judah ? "#7c3aed" : "#94a3b8"} />
            {joseph ? <path d={`M${x - 7},180 h14 M${x - 7},176 h14`} stroke="#f59e0b" strokeWidth="2" /> : null}
          </g>
        );
      })}
      <Tx x={270} y={200} s={t("Joseph", "Հովսեփ", "Иосиф")} lang={lang} size={7.5} fill="#e11d48" />
      <Tx x={99} y={200} s={t("Judah", "Հուդա", "Иуда")} lang={lang} size={7.5} fill="#7c3aed" />
      <Tx x={160} y={212} s={t("twelve sons → twelve tribes", "տասներկու որդի → տասներկու ցեղ", "двенадцать сыновей → двенадцать колен")} lang={lang} size={6.5} fill="#475569" w={700} />
    </g>
  ),
  parts: [
    P(232, 18, t("Abraham and Sarah", "Աբրահամ և Սառա", "Авраам и Сарра"), t("They left the rich city of Ur for an unknown land, trusting God's promise. For this Abraham is honoured as the father of believers by Jews, Christians and Muslims alike.", "Նրանք թողեցին հարուստ Ուր քաղաքը և մեկնեցին անծանոթ երկիր՝ վստահելով Աստծո խոստմանը։ Դրա համար Աբրահամին որպես հավատացյալների հայր մեծարում են և՛ հրեաները, և՛ քրիստոնյաները, և՛ մուսուլմանները։", "Они покинули богатый город Ур ради неизвестной земли, доверившись Божьему обещанию. За это Авраама почитают как отца верующих и иудеи, и христиане, и мусульмане.")),
    P(232, 68, t("Isaac", "Իսահակ", "Исаак"), t("The son born in his parents' old age. His name is linked with the word for laughter: Sarah laughed when she heard she would have a child.", "Ծնողների ծերության տարիներին ծնված որդին։ Նրա անունը կապված է ծիծաղ բառի հետ․ Սառան ծիծաղեց, երբ լսեց, որ երեխա է ունենալու։", "Сын, родившийся в старости родителей. Его имя связано со словом «смех»: Сарра засмеялась, услышав, что у неё будет ребёнок.")),
    P(36, 124, t("Esau and Jacob", "Եսավ և Հակոբ", "Исав и Иаков"), t("Twin brothers who quarrelled: Esau sold his birthright to Jacob for a bowl of lentil stew. Years later the brothers met again and made peace.", "Երկվորյակ եղբայրներ, որոնք վիճեցին․ Եսավն իր անդրանկության իրավունքը վաճառեց Հակոբին մեկ աման ոսպապուրի համար։ Տարիներ անց եղբայրները նորից հանդիպեցին և հաշտվեցին։", "Братья-близнецы, которые поссорились: Исав продал Иакову право первородства за миску чечевичной похлёбки. Через много лет братья снова встретились и помирились.")),
    P(292, 116, t("Israel", "Իսրայել", "Израиль"), t("After a night of wrestling with a mysterious stranger, Jacob was given the name Israel. The whole people that came from his sons was called after him.", "Մի խորհրդավոր անծանոթի հետ գիշերային մենամարտից հետո Հակոբը ստացավ Իսրայել անունը։ Նրա որդիներից սերված ամբողջ ժողովուրդը կոչվեց նրա անունով։", "После ночной борьбы с таинственным незнакомцем Иаков получил имя Израиль. Весь народ, происшедший от его сыновей, назвали по нему.")),
    P(298, 197, t("Joseph", "Հովսեփ", "Иосиф"), t("The second youngest son and his father's favourite, with the many-coloured coat. Sold by his brothers, he rose to rule Egypt and later forgave them.", "Նախավերջին որդին և հոր սիրելին՝ բազմագույն պատմուճանով։ Եղբայրների կողմից վաճառված՝ նա դարձավ Եգիպտոսի կառավարիչ և հետագայում ներեց նրանց։", "Предпоследний сын и любимец отца, в разноцветной одежде. Проданный братьями, он стал правителем Египта, а потом простил их.")),
    P(126, 197, t("Judah", "Հուդա", "Иуда"), t("The fourth son. King David came from his tribe, and the Gospels trace the family of Jesus back through David to Judah and Abraham.", "Չորրորդ որդին։ Դավիթ թագավորը սերում էր նրա ցեղից, և Ավետարանները Հիսուսի տոհմը Դավթի միջով հասցնում են Հուդային և Աբրահամին։", "Четвёртый сын. Из его колена происходил царь Давид, и Евангелия возводят родословие Иисуса через Давида к Иуде и Аврааму.")),
  ],
};

/* ---------------- grade 5 and 11: the two tablets ---------------- */

const LAWS: Tr[] = [
  t("one God", "մեկ Աստված", "один Бог"),
  t("no idols", "կուռքեր մի՛ շինիր", "не делай кумира"),
  t("God's name", "Աստծո անունը", "имя Божие"),
  t("day of rest", "հանգստյան օր", "день отдыха"),
  t("honour parents", "պատվի՛ր ծնողներին", "чти родителей"),
  t("do not kill", "մի՛ սպանիր", "не убивай"),
  t("be faithful", "եղի՛ր հավատարիմ", "будь верен"),
  t("do not steal", "մի՛ գողացիր", "не кради"),
  t("no false witness", "սուտ վկայություն մի՛ տուր", "не лжесвидетельствуй"),
  t("do not covet", "մի՛ ցանկացիր ուրիշինը", "не желай чужого"),
];
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const tablets: Diagram = {
  title: t("Two tablets, ten commandments", "Երկու տախտակ՝ տասը պատվիրան", "Две скрижали — десять заповедей"),
  h: 216,
  draw: (lang) => (
    <g>
      {[[86, 0, 4, "#0369a1"], [234, 4, 10, "#047857"]].map(([cx, from, to, c], k) => (
        <g key={k}>
          <path d={`M${(cx as number) - 66},200 V56 a66,46 0 0 1 132,0 V200 Z`} fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2.5" />
          <Tx x={cx as number} y={38} s={k ? t("people", "մարդիկ", "люди") : t("God", "Աստված", "Бог")} lang={lang} size={9} fill={c as string} />
          {Array.from({ length: (to as number) - (from as number) }, (_, j) => {
            const i = (from as number) + j;
            const y = k ? 62 + j * 23 : 72 + j * 32;
            return (
              <g key={i}>
                <text x={(cx as number) - 54} y={y} fontSize="8" fontWeight="900" fill={c as string}>{ROMAN[i]}</text>
                <Tx x={(cx as number) - 32} y={y} s={LAWS[i]} lang={lang} size={L(LAWS[i], lang).length > 18 ? 5.8 : 6.8} fill="#44403c" anchor="start" w={800} />
              </g>
            );
          })}
        </g>
      ))}
    </g>
  ),
  parts: [
    P(30, 30, t("The first tablet", "Առաջին տախտակը", "Первая скрижаль"), t("Commandments 1–4 are about our relationship with God: to worship him alone, not to make idols, to respect his name and to keep a day holy.", "1–4-րդ պատվիրանները մեր և Աստծո հարաբերության մասին են․ երկրպագել միայն նրան, կուռքեր չշինել, հարգել նրա անունը և սուրբ պահել հանգստյան օրը։", "Заповеди 1–4 — об отношениях с Богом: поклоняться только ему, не делать идолов, чтить его имя и святить день отдыха.")),
    P(290, 30, t("The second tablet", "Երկրորդ տախտակը", "Вторая скрижаль"), t("Commandments 5–10 are about how we treat other people: parents, life, marriage, property, truth and even our wishes. The last one is the only commandment about what happens inside a person, before any act.", "5–10-րդ պատվիրաններն այն մասին են, թե ինչպես ենք վերաբերվում ուրիշներին՝ ծնողներին, կյանքին, ամուսնությանը, ունեցվածքին, ճշմարտությանը և նույնիսկ մեր ցանկություններին։ Վերջինը միակ պատվիրանն է այն մասին, ինչ կատարվում է մարդու ներսում՝ որևէ արարքից առաջ։", "Заповеди 5–10 — о том, как мы относимся к людям: к родителям, жизни, браку, имуществу, правде и даже к своим желаниям. Последняя — единственная заповедь о том, что происходит внутри человека ещё до поступка.")),
    P(160, 118, t("Two in one", "Երկուսը՝ մեկում", "Две в одной"), t("When asked which commandment is the greatest, Jesus answered with two: love God with all your heart, and love your neighbour as yourself (Matthew 22). They sum up the two tablets.", "Երբ Հիսուսին հարցրին, թե որն է ամենամեծ պատվիրանը, նա պատասխանեց երկուսով․ սիրի՛ր Աստծուն քո ամբողջ սրտով և սիրի՛ր ընկերոջդ քո անձի պես (Մատթեոս 22)։ Դրանք ամփոփում են երկու տախտակները։", "Когда Иисуса спросили, какая заповедь наибольшая, он ответил двумя: возлюби Бога всем сердцем и возлюби ближнего, как самого себя (Матфей 22). Они подытоживают обе скрижали.")),
    P(300, 98, t("Short and clear", "Կարճ և պարզ", "Коротко и ясно"), t("In the Hebrew original, \"You shall not kill\" and \"You shall not steal\" are each just two words. Rules that short are easy to remember and hard to argue away.", "Եբրայերեն բնագրում «Մի՛ սպանիր»-ը և «Մի՛ գողացիր»-ը ընդամենը երկուական բառ են։ Այդքան կարճ կանոնները հեշտ է հիշել և դժվար է արդարացումներով շրջանցել։", "В еврейском оригинале «Не убивай» и «Не кради» — всего по два слова. Такие короткие правила легко запомнить и трудно обойти оправданиями.")),
    P(30, 196, t("Where they were kept", "Որտեղ էին պահվում", "Где их хранили"), t("The tablets were placed in the Ark of the Covenant, a gilded chest carried by the people in the desert and later kept in Solomon's Temple in Jerusalem.", "Տախտակները դրվեցին Ուխտի տապանակի մեջ՝ ոսկեզօծ արկղ, որը ժողովուրդը կրում էր անապատում, իսկ հետո պահվում էր Երուսաղեմում՝ Սողոմոնի տաճարում։", "Скрижали положили в Ковчег Завета — позолоченный ларец, который народ носил в пустыне, а позже хранили в Храме Соломона в Иерусалиме.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { bible, sixdays, patriarchs, tablets };
