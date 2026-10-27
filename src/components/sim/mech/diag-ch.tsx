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

/* ---------------- grade 6: the four evangelists ---------------- */

const EVANG: Array<[number, number, Tr, string]> = [
  [70, 52, t("Matthew", "Մատթեոս", "Матфей"), "#0369a1"],
  [250, 52, t("Mark", "Մարկոս", "Марк"), "#b45309"],
  [70, 160, t("Luke", "Ղուկաս", "Лука"), "#be123c"],
  [250, 160, t("John", "Հովհաննես", "Иоанн"), "#7c3aed"],
];

const evangelists: Diagram = {
  title: t("Four evangelists and their symbols", "Չորս ավետարանիչները և նրանց խորհրդանիշները", "Четыре евангелиста и их символы"),
  h: 214,
  draw: (lang) => (
    <g>
      {EVANG.map(([x, y], k) => <line key={k} x1={x} y1={y} x2="160" y2="106" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 3" />)}
      {/* the open book */}
      <path d="M124,90 q18,-8 36,0 v40 q-18,-8 -36,0 Z M160,90 q18,-8 36,0 v40 q-18,-8 -36,0 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="1.8" />
      <path d="M152,104 h-20 M152,112 h-20 M188,104 h-20 M188,112 h-20" stroke="#d6b26e" strokeWidth="1.2" />
      <path d="M160,96 v8 M156,99 h8" stroke="#b91c1c" strokeWidth="1.6" />
      {EVANG.map(([x, y, name, c], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r="30" fill="#fff" stroke={c} strokeWidth="2" />
          <Tx x={x} y={y + 44} s={name} lang={lang} size={8.5} fill={c} />
        </g>
      ))}
      {/* a man with wings */}
      <path d="M52,52 q-8,-14 4,-22 q2,12 8,16 Z M88,52 q8,-14 -4,-22 q-2,12 -8,16 Z" fill="#bae6fd" />
      <Head x={70} y={44} r={7} fill="#0369a1" />
      {/* a lion */}
      {Array.from({ length: 12 }, (_, k) => {
        const a = (k / 12) * Math.PI * 2;
        return <circle key={k} cx={250 + 13 * Math.cos(a)} cy={50 + 13 * Math.sin(a)} r="5" fill="#d97706" />;
      })}
      <circle cx="250" cy="50" r="10" fill="#fbbf24" />
      <circle cx="246" cy="48" r="1.4" fill="#78350f" /><circle cx="254" cy="48" r="1.4" fill="#78350f" /><path d="M247,54 q3,3 6,0" stroke="#78350f" strokeWidth="1.2" fill="none" />
      {/* an ox */}
      <path d="M56,150 q-10,-8 -6,-16 q4,8 10,8 M84,150 q10,-8 6,-16 q-4,8 -10,8" fill="none" stroke="#9f1239" strokeWidth="2.4" />
      <path d="M58,148 h24 l-4,22 q-8,6 -16,0 Z" fill="#be123c" />
      <circle cx="65" cy="155" r="1.6" fill="#fff" /><circle cx="75" cy="155" r="1.6" fill="#fff" />
      {/* an eagle */}
      <path d="M226,164 q12,-4 24,-20 q12,16 24,20 q-12,-2 -18,4 l-6,10 l-6,-10 q-6,-6 -18,-4 Z" fill="#7c3aed" />
      <circle cx="250" cy="146" r="4.5" fill="#5b21b6" /><path d="M254,146 l5,2 l-5,1 Z" fill="#f59e0b" />
    </g>
  ),
  parts: [
    P(100, 26, t("Matthew: a man", "Մատթեոս՝ մարդ", "Матфей: человек"), t("His Gospel begins with the family tree of Jesus, from Abraham through David, that is, with his human descent, so his symbol is a man with wings. He wrote mainly for Jewish readers and often quotes the prophets.", "Նրա Ավետարանն սկսվում է Հիսուսի տոհմածառով՝ Աբրահամից Դավթի միջով, այսինքն՝ նրա մարդկային ծագումով, ուստի նրա խորհրդանիշը թևավոր մարդն է։ Նա գրում էր հիմնականում հրեա ընթերցողների համար և հաճախ մեջբերում է մարգարեներին։", "Его Евангелие начинается с родословия Иисуса от Авраама через Давида, то есть с его человеческого происхождения, поэтому его символ — крылатый человек. Он писал прежде всего для читателей-евреев и часто цитирует пророков.")),
    P(280, 26, t("Mark: a lion", "Մարկոս՝ առյուծ", "Марк: лев"), t("His Gospel opens with the voice of John the Baptist \"crying in the wilderness\", loud as a lion's roar. It is the shortest Gospel, only 16 chapters, and probably the oldest.", "Նրա Ավետարանը բացվում է Հովհաննես Մկրտչի «անապատում աղաղակողի» ձայնով, որը բարձր է առյուծի մռնչյունի պես։ Սա ամենակարճ Ավետարանն է՝ ընդամենը 16 գլուխ, և հավանաբար ամենահինը։", "Его Евангелие открывается голосом Иоанна Крестителя, «вопиющего в пустыне», громким, как рык льва. Это самое короткое Евангелие, всего 16 глав, и, вероятно, самое древнее.")),
    P(100, 134, t("Luke: an ox", "Ղուկաս՝ եզ", "Лука: телец"), t("His Gospel begins in the Temple, where the priest Zechariah is offering sacrifice, and the ox was an animal of sacrifice. Luke was a physician and also wrote the Acts; only he tells the parables of the good Samaritan and the prodigal son.", "Նրա Ավետարանն սկսվում է տաճարում, որտեղ Զաքարիա քահանան զոհ է մատուցում, իսկ եզը զոհաբերության կենդանի էր։ Ղուկասը բժիշկ էր և գրել է նաև Գործք առաքելոցը․ միայն նա է պատմում բարի սամարացու և անառակ որդու առակները։", "Его Евангелие начинается в Храме, где священник Захария приносит жертву, а телец был жертвенным животным. Лука был врачом и написал также Деяния; только он рассказывает притчи о добром самарянине и блудном сыне.")),
    P(280, 134, t("John: an eagle", "Հովհաննես՝ արծիվ", "Иоанн: орёл"), t("His Gospel starts high above, like an eagle in flight: \"In the beginning was the Word, and the Word was with God.\" It was written last and differs most from the other three.", "Նրա Ավետարանն սկսվում է բարձրից, ինչպես թռչող արծիվ․ «Սկզբից էր Բանը, և Բանն Աստծո մոտ էր»։ Այն գրվել է վերջինը և ամենից շատ է տարբերվում մյուս երեքից։", "Его Евангелие начинается с высоты, как орёл в полёте: «В начале было Слово, и Слово было у Бога». Оно написано последним и больше всего отличается от трёх других.")),
    P(206, 92, t("Where the symbols come from", "Որտեղից են խորհրդանիշները", "Откуда символы"), t("A man, a lion, an ox and an eagle are the four living creatures in the visions of Ezekiel and of Revelation. Armenian miniature painters put them at the start of each Gospel, so a reader could find the right book at a glance.", "Մարդը, առյուծը, եզը և արծիվը Եզեկիելի և Հայտնության տեսիլքների չորս կենդանի էակներն են։ Հայ մանրանկարիչները դրանք նկարում էին յուրաքանչյուր Ավետարանի սկզբում, որպեսզի ընթերցողը մեկ հայացքով գտնի ճիշտ գիրքը։", "Человек, лев, телец и орёл — четыре живых существа из видений Иезекииля и Откровения. Армянские миниатюристы изображали их в начале каждого Евангелия, чтобы читатель с одного взгляда находил нужную книгу.")),
    P(122, 126, t("Four Gospels, one good news", "Չորս Ավետարան՝ մեկ բարի լուր", "Четыре Евангелия, одна благая весть"), t("Matthew, Mark and Luke often tell the same events in very similar words, so they are called the synoptic Gospels, from a Greek word for \"seeing together\". Four witnesses, each with his own angle, tell one story.", "Մատթեոսը, Մարկոսը և Ղուկասը հաճախ նույն իրադարձությունները պատմում են շատ նման բառերով, ուստի նրանց կոչում են համատես Ավետարաններ։ Չորս վկաներ, յուրաքանչյուրն իր տեսանկյունից, պատմում են մեկ պատմություն։", "Матфей, Марк и Лука часто рассказывают одни и те же события очень похожими словами, поэтому их называют синоптическими Евангелиями, от греческого «видеть вместе». Четыре свидетеля, каждый со своей точки зрения, рассказывают одну историю.")),
  ],
};

/* ---------------- grade 6: the parable of the sower ---------------- */

const SOILS: Array<[number, Tr, string, string]> = [
  [42, t("path", "ճանապարհ", "дорога"), "#d6d3d1", "#78716c"],
  [120, t("rocky ground", "քարքարոտ հող", "каменистая земля"), "#e7e5e4", "#57534e"],
  [198, t("thorns", "փշեր", "терние"), "#d9f99d", "#4d7c0f"],
  [276, t("good soil", "լավ հող", "добрая земля"), "#a16207", "#713f12"],
];

const sower: Diagram = {
  title: t("The parable of the sower", "Սերմնացանի առակը", "Притча о сеятеле"),
  h: 210,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="210" fill="#f0f9ff" />
      <circle cx="292" cy="26" r="13" fill="#facc15" />
      {/* the sower */}
      <Head x={40} y={34} r={7} fill="#b45309" />
      <path d="M52,50 q14,-4 22,-12" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="34" cy="62" rx="8" ry="6" fill="#d6b26e" />
      {SOILS.map(([x], k) => <path key={k} d={`M74,40 Q${(74 + x) / 2},${60 - k * 4} ${x},126`} fill="none" stroke="#a16207" strokeWidth="1" strokeDasharray="1.5 5" />)}
      {SOILS.map(([x, name, c, edge], k) => (
        <g key={k}>
          <rect x={x - 36} y="140" width="72" height="56" rx="6" fill={c} stroke={edge} strokeWidth="1.5" />
          <Tx x={x} y={134} s={name} lang={lang} size={L(name, lang).length > 12 ? 6.4 : 7.5} fill={edge} />
        </g>
      ))}
      {/* path: footprints and birds */}
      <ellipse cx="30" cy="180" rx="3" ry="6" fill="#a8a29e" /><ellipse cx="44" cy="166" rx="3" ry="6" fill="#a8a29e" /><ellipse cx="56" cy="184" rx="3" ry="6" fill="#a8a29e" />
      <path d="M30,152 q4,-4 8,0 q4,-4 8,0 M46,160 q4,-4 8,0 q4,-4 8,0" fill="none" stroke="#1e293b" strokeWidth="1.6" />
      {/* rocky ground: stones and a wilting sprout */}
      <ellipse cx="104" cy="184" rx="10" ry="6" fill="#a8a29e" /><ellipse cx="134" cy="186" rx="12" ry="6" fill="#a8a29e" /><ellipse cx="120" cy="174" rx="8" ry="5" fill="#d6d3d1" />
      <path d="M120,170 q0,-12 8,-14" stroke="#ca8a04" strokeWidth="2" fill="none" />
      {/* thorns choking a sprout */}
      <path d="M182,192 l6,-30 l4,30 M206,192 l-4,-34 l8,34 M190,170 l-6,-4 M206,168 l6,-4 M186,178 l6,-4" stroke="#365314" strokeWidth="1.8" fill="none" />
      <path d="M198,192 v-16" stroke="#84cc16" strokeWidth="2" />
      {/* good soil: tall ears of grain */}
      {[258, 270, 282, 294].map((x, k) => (
        <g key={k}>
          <path d={`M${x},192 V${150 - (k % 2) * 6}`} stroke="#ca8a04" strokeWidth="1.8" />
          <ellipse cx={x} cy={148 - (k % 2) * 6} rx="3" ry="8" fill="#eab308" />
        </g>
      ))}
      <Tx x={276} y={206} s={t("×30 · ×60 · ×100", "×30 · ×60 · ×100", "×30 · ×60 · ×100")} lang={lang} size={6.5} fill="#713f12" />
    </g>
  ),
  parts: [
    P(56, 22, t("The sower", "Սերմնացանը", "Сеятель"), t("In Jesus' time seed was scattered by hand from a bag as the farmer walked, so some of it always fell in the wrong place. Jesus explained that the seed is the word of God, and the different soils are different hearts.", "Հիսուսի ժամանակ սերմը ցանում էին ձեռքով՝ պարկից, քայլելիս, ուստի դրա մի մասը միշտ ընկնում էր ոչ ճիշտ տեղը։ Հիսուսը բացատրեց, որ սերմն Աստծո խոսքն է, իսկ տարբեր հողերը՝ տարբեր սրտեր։", "Во времена Иисуса семена разбрасывали рукой из мешка на ходу, так что часть их всегда падала не туда. Иисус объяснил, что семя — это слово Божие, а разная почва — разные сердца.")),
    P(70, 146, t("The path", "Ճանապարհը", "Дорога"), t("On hard, trodden ground the seed lies on top, and birds eat it at once. So it is with someone who hears the word but does not take it in: it is snatched away straight away.", "Կոշտ, տրորված հողի վրա սերմը մնում է երեսին, և թռչուններն անմիջապես ուտում են այն։ Այդպես է լինում նրա հետ, ով լսում է խոսքը, բայց չի ընդունում այն․ այն անմիջապես հափշտակվում է։", "На твёрдой утоптанной земле семя лежит сверху, и птицы сразу его склёвывают. Так бывает с тем, кто слышит слово, но не принимает его: оно тут же похищается.")),
    P(148, 146, t("Rocky ground", "Քարքարոտ հողը", "Каменистая земля"), t("In thin soil the seed sprouts quickly, but it has no deep root, and the sun scorches it. These are people who welcome the word with joy but give up when things get hard.", "Բարակ հողում սերմն արագ է ծլում, բայց խոր արմատ չունի, և արևն այրում է այն։ Սրանք այն մարդիկ են, ովքեր ուրախությամբ են ընդունում խոսքը, բայց հանձնվում են, երբ դժվար է լինում։", "В тонком слое почвы семя быстро всходит, но у него нет глубокого корня, и солнце его сжигает. Это люди, которые с радостью принимают слово, но сдаются, когда становится трудно.")),
    P(226, 146, t("Among thorns", "Փշերի մեջ", "В тернии"), t("The seed grows, but the thorns grow faster and choke it. Jesus compares them to worries and the love of riches, which crowd out what matters most.", "Սերմն աճում է, բայց փշերն ավելի արագ են աճում և խեղդում այն։ Հիսուսը դրանք համեմատում է հոգսերի և հարստության սիրո հետ, որոնք դուրս են մղում ամենակարևորը։", "Семя растёт, но терние растёт быстрее и заглушает его. Иисус сравнивает его с заботами и любовью к богатству, которые вытесняют самое важное.")),
    P(304, 146, t("Good soil", "Լավ հողը", "Добрая земля"), t("Here the seed brings thirty, sixty or even a hundred times as much as was sown, far more than an ordinary harvest of that time. These are people who hear the word, understand it and live by it.", "Այստեղ սերմը տալիս է ցանվածից երեսուն, վաթսուն կամ նույնիսկ հարյուր անգամ ավելի, շատ ավելի, քան այն ժամանակվա սովորական բերքը։ Սրանք այն մարդիկ են, ովքեր լսում են խոսքը, հասկանում և ապրում դրանով։", "Здесь семя приносит в тридцать, шестьдесят и даже сто раз больше посеянного — гораздо больше обычного урожая того времени. Это люди, которые слышат слово, понимают его и живут по нему.")),
    P(160, 60, t("An explained parable", "Բացատրված առակ", "Объяснённая притча"), t("Most parables are left for the listener to think about, but this is one of the few that Jesus explained to his disciples afterwards (Mark 4), soil by soil.", "Առակների մեծ մասը թողնվում է, որ ունկնդիրը մտածի, բայց սա այն քչերից է, որոնք Հիսուսը հետո բացատրեց իր աշակերտներին (Մարկոս 4)՝ հող առ հող։", "Большинство притч оставлено слушателю для размышления, но эту, одну из немногих, Иисус потом объяснил ученикам (Марк 4), почву за почвой.")),
  ],
};

/* ---------------- grade 6: Holy Week ---------------- */

const WEEK: Array<[Tr, string]> = [
  [t("Palm|Sunday", "Ծաղկա-|զարդ", "Цахка-|зард"), "#16a34a"],
  [t("Mon", "Երկ.", "Пн"), "#94a3b8"],
  [t("Tue", "Երք.", "Вт"), "#94a3b8"],
  [t("Wed", "Չրք.", "Ср"), "#94a3b8"],
  [t("Holy|Thursday", "Ավագ|հինգշաբթի", "Великий|четверг"), "#b45309"],
  [t("Good|Friday", "Ավագ|ուրբաթ", "Великая|пятница"), "#7f1d1d"],
  [t("Holy|Saturday", "Ավագ|շաբաթ", "Великая|суббота"), "#7c3aed"],
  [t("Easter", "Զատիկ", "Пасха"), "#e11d48"],
];

const holyweek: Diagram = {
  title: t("Holy Week, day by day", "Ավագ շաբաթը՝ օր առ օր", "Страстная неделя день за днём"),
  h: 150,
  draw: (lang) => (
    <g>
      {WEEK.map(([name, c], k) => {
        const x = 6 + k * 38.5;
        return (
          <g key={k}>
            <rect x={x} y="20" width="35" height="80" rx="6" fill="#fff" stroke={c} strokeWidth={k % 7 === 0 || k > 3 ? 2 : 1} />
            <Tx x={x + 17.5} y={L(name, lang).includes("|") ? 114 : 118} s={name} lang={lang} size={L(name, lang).length > 12 ? 5.6 : 6.4} fill={c} />
          </g>
        );
      })}
      {/* palm branch */}
      <path d="M24,92 C24,70 28,50 30,34" stroke="#16a34a" strokeWidth="2" fill="none" />
      {[40, 50, 60, 70, 80].map((y) => <path key={y} d={`M${24 + (92 - y) / 8},${y} l-8,-4 M${24 + (92 - y) / 8},${y} l8,-4`} stroke="#22c55e" strokeWidth="1.6" />)}
      {/* bread and cup */}
      <ellipse cx="174" cy="76" rx="12" ry="6" fill="#d6b26e" />
      <path d="M170,40 h14 l-3,14 h-8 Z M177,54 v10 M172,64 h10" stroke="#b45309" strokeWidth="1.8" fill="#fde68a" />
      {/* cross */}
      <path d="M216,36 v52 M206,50 h20" stroke="#7f1d1d" strokeWidth="4" strokeLinecap="round" />
      {/* candle */}
      <rect x="248" y="56" width="12" height="34" rx="2" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.2" />
      <path d="M254,54 q-5,-8 0,-16 q5,8 0,16 Z" fill="#f59e0b" />
      {/* empty tomb at sunrise */}
      <circle cx="304" cy="40" r="8" fill="#facc15" />
      <path d="M278,92 v-22 a14,14 0 0 1 28,0 v22 Z" fill="#d6d3d1" />
      <path d="M286,92 v-14 a6,6 0 0 1 12,0 v14 Z" fill="#1e293b" />
      <circle cx="312" cy="84" r="8" fill="#a8a29e" />
      {/* the barren fig tree */}
      <path d="M62,92 v-30 M62,72 l-9,-10 M62,66 l8,-11" stroke="#78716c" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {[[50, 58], [72, 52], [62, 48]].map(([x, y]) => <path key={x} d={`M${x},${y} q-6,-7 0,-12 q6,5 0,12 Z`} fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />)}
      {/* the lamp of the wise virgins */}
      <path d="M86,78 q11,10 22,0 l-4,-6 h-14 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="1.2" />
      <path d="M108,74 l5,-3" stroke="#b45309" strokeWidth="1.6" />
      <path d="M114,70 q-4,-8 0,-14 q4,6 0,14 Z" fill="#f97316" />
      {/* the jar of costly oil and the thirty silver coins */}
      <path d="M134,46 h10 v4 q8,6 6,22 q-1,8 -11,8 q-10,0 -11,-8 q-2,-16 6,-22 Z" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
      {[0, 1, 2].map((k) => <ellipse key={k} cx={139} cy={93 - k * 3} rx="7" ry="2.2" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />)}
    </g>
  ),
  parts: [
    P(36, 16, t("Palm Sunday", "Ծաղկազարդ", "Цахказард"), t("Jesus rides into Jerusalem on a donkey, a humble animal, not a war horse, and the crowd waves branches. In Armenian churches willow branches are blessed, and the day is a feast of children.", "Հիսուսը Երուսաղեմ է մտնում էշի վրա նստած՝ համեստ կենդանու, այլ ոչ թե մարտական ձիու, և ամբոխը ճյուղեր է թափահարում։ Հայկական եկեղեցիներում ուռենու ճյուղեր են օրհնում, և այդ օրը երեխաների տոն է։", "Иисус въезжает в Иерусалим на осле — смиренном животном, а не боевом коне, и толпа машет ветвями. В армянских церквях освящают ветви вербы, и этот день — праздник детей.")),
    P(122, 16, t("Monday to Wednesday", "Երկուշաբթիից չորեքշաբթի", "С понедельника по среду"), t("Jesus teaches in the Temple and drives out the money-changers. The Armenian Church remembers on these days the barren fig tree, the parable of the ten virgins and the woman who anointed Jesus with costly oil, while Judas agreed to betray him.", "Հիսուսը քարոզում է տաճարում և դուրս է քշում լումայափոխներին։ Այս օրերին Հայ Եկեղեցին հիշատակում է անպտուղ թզենին, տասը կույսերի առակը և այն կնոջը, որը թանկարժեք յուղով օծեց Հիսուսին, մինչդեռ Հուդան համաձայնեց մատնել նրան։", "Иисус учит в Храме и изгоняет менял. Армянская церковь вспоминает в эти дни бесплодную смоковницу, притчу о десяти девах и женщину, помазавшую Иисуса драгоценным миром, тогда как Иуда согласился его предать.")),
    P(198, 16, t("Holy Thursday", "Ավագ հինգշաբթի", "Великий четверг"), t("The Last Supper and the washing of feet, then the prayer in Gethsemane and the arrest at night. Armenian churches serve the rite of Votnlva in the afternoon and a long evening service in growing darkness.", "Վերջին ընթրիքը և ոտնլվան, ապա աղոթքը Գեթսեմանիում և ձերբակալությունը գիշերը։ Հայկական եկեղեցիներում կեսօրից հետո կատարվում է Ոտնլվայի արարողությունը, իսկ երեկոյան՝ երկար արարողություն աճող խավարի մեջ։", "Тайная вечеря и омовение ног, затем молитва в Гефсимании и арест ночью. В армянских церквях днём совершают чин Вотнлва, а вечером — долгую службу в сгущающейся темноте.")),
    P(238, 16, t("Good Friday", "Ավագ ուրբաթ", "Великая пятница"), t("The trial before Pilate, the way to Golgotha and the Crucifixion. In the evening Armenian churches hold the rite of burial, mourning Christ laid in the tomb.", "Դատաստանը Պիղատոսի առջև, ճանապարհը դեպի Գողգոթա և Խաչելությունը։ Երեկոյան հայկական եկեղեցիներում կատարվում է Թաղման կարգը՝ սգալով գերեզման դրված Քրիստոսին։", "Суд у Пилата, путь на Голгофу и Распятие. Вечером в армянских церквях совершают чин погребения, оплакивая положенного во гроб Христа.")),
    P(272, 46, t("Holy Saturday", "Ավագ շաբաթ", "Великая суббота"), t("A quiet day of waiting. In the evening comes the Chragaluyts liturgy of Easter, the first celebration of the Resurrection, with candles carried home.", "Սպասման լուռ օր։ Երեկոյան մատուցվում է Զատկի Ճրագալույցի պատարագը՝ Հարության առաջին տոնակատարությունը, և մարդիկ վառվող մոմեր են տանում տուն։", "Тихий день ожидания. Вечером служат пасхальную литургию Чрагалуйц — первое празднование Воскресения, и люди несут домой горящие свечи.")),
    P(314, 62, t("Easter Sunday", "Զատիկ", "Пасха"), t("The stone is rolled away and the tomb is empty. The greeting \"Christ is risen from the dead!\" replaces ordinary greetings until the Ascension.", "Քարը գլորված է, և գերեզմանը դատարկ է։ «Քրիստոս հարյավ ի մեռելոց» ողջույնը փոխարինում է սովորական ողջույններին մինչև Համբարձում։", "Камень отвален, и гробница пуста. Приветствие «Христос воскрес из мёртвых!» заменяет обычные приветствия до самого Вознесения.")),
  ],
};

/* ---------------- grade 6: from Lent to Pentecost ---------------- */

const fifty: Diagram = {
  title: t("From Great Lent to Pentecost", "Մեծ պահքից մինչև Հոգեգալուստ", "От Великого поста до Пятидесятницы"),
  h: 148,
  draw: (lang) => {
    const X = (d: number) => 106 + d * 3.4;
    return (
      <g transform="translate(0,-26)">
        <rect x={X(-47) < 6 ? 6 : X(-47)} y="62" width={X(0) - (X(-47) < 6 ? 6 : X(-47))} height="16" rx="8" fill="#ede9fe" />
        <rect x={X(0)} y="62" width={X(49) - X(0)} height="16" rx="8" fill="#fef3c7" />
        <line x1="6" y1="70" x2="314" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
        <Tx x={60} y={56} s={t("Great Lent: 40 days + Holy Week", "Մեծ պահք․ 40 օր + Ավագ շաբաթ", "Великий пост: 40 дней + Страстная")} lang={lang} size={6.4} fill="#6d28d9" />
        <Tx x={190} y={56} s={t("50 days of Easter joy", "Զատկի ուրախության 50 օրը", "50 дней пасхальной радости")} lang={lang} size={6.4} fill="#b45309" />
        {[[-7, t("Palm|Sunday", "Ծաղկա-|զարդ", "Цахка-|зард"), "#16a34a"], [0, t("Easter", "Զատիկ", "Пасха"), "#e11d48"], [39, t("Ascension|day 40", "Համբարձում|40-րդ օր", "Вознесение|40-й день"), "#0369a1"], [49, t("Pentecost|day 50", "Հոգեգալուստ|50-րդ օր", "Пятидесятница|50-й день"), "#b91c1c"]].map(([d, s, c], k) => (
          <g key={k}>
            <circle cx={X(d as number)} cy="70" r={k === 1 ? 9 : 6} fill={c as string} stroke="#fff" strokeWidth="2" />
            <Tx x={X(d as number)} y={k === 3 ? 116 : k === 1 ? 108 : 94} s={s as Tr} lang={lang} size={6.4} fill={c as string} />
          </g>
        ))}
        {/* the date window */}
        <rect x="40" y="132" width="180" height="36" rx="8" fill="#fff" stroke="#e11d48" strokeWidth="1.5" />
        <Tx x={130} y={146} s={t("Easter falls between", "Զատիկը լինում է", "Пасха бывает")} lang={lang} size={7} fill="#475569" w={700} />
        <Tx x={130} y={161} s={t("22 March and 25 April", "մարտի 22-ից ապրիլի 25-ը", "с 22 марта по 25 апреля")} lang={lang} size={8.5} fill="#e11d48" />
      </g>
    );
  },
  parts: [
    P(30, 50, t("Great Lent", "Մեծ պահք", "Великий пост"), t("Forty days in memory of Christ's fast in the wilderness, plus Holy Week. Before it comes Barekendan, a day of feasting and fun; then the faithful keep a mostly plant-based fast and pray more.", "Քառասուն օր՝ ի հիշատակ անապատում Քրիստոսի պահքի, գումարած Ավագ շաբաթը։ Դրանից առաջ Բարեկենդանն է՝ խնջույքի և ուրախության օր, իսկ հետո հավատացյալները պահում են հիմնականում բուսական պահք և ավելի շատ են աղոթում։", "Сорок дней в память поста Христа в пустыне плюс Страстная неделя. Перед ним — Барекендан, день пиршества и веселья; затем верующие держат в основном растительный пост и больше молятся.")),
    P(118, 54, t("Easter", "Զատիկ", "Пасха"), t("The centre of the whole Christian year. Everything before it prepares for it, and everything after it is counted from it.", "Ողջ քրիստոնեական տարվա կենտրոնը։ Ամեն ինչ, որ դրանից առաջ է, նախապատրաստում է նրան, և ամեն ինչ, որ հետո է, հաշվվում է նրանից։", "Центр всего христианского года. Всё, что до неё, готовит к ней, а всё, что после, отсчитывается от неё.")),
    P(250, 56, t("The Ascension", "Համբարձում", "Вознесение"), t("Counting Easter Sunday as the first day, the fortieth day is always a Thursday. In Armenian villages it was the day of the Tsaghik vichak fortune-telling game.", "Եթե Զատկի կիրակին հաշվենք առաջին օր, քառասուներորդ օրը միշտ հինգշաբթի է։ Հայկական գյուղերում դա «Ծաղիկ վիճակի» գուշակության խաղի օրն էր։", "Если считать пасхальное воскресенье первым днём, сороковой день всегда приходится на четверг. В армянских сёлах это был день гадания «Цахик вичак».")),
    P(286, 56, t("Pentecost", "Հոգեգալուստ", "Пятидесятница"), t("The fiftieth day, again a Sunday: the descent of the Holy Spirit on the apostles, the birthday of the Church. The name comes from the Greek word for \"fiftieth\".", "Հիսուներորդ օրը, դարձյալ կիրակի․ Սուրբ Հոգու իջնելը առաքյալների վրա, Եկեղեցու ծննդյան օրը։ «Պենտեկոստե» անունը գալիս է հունարեն «հիսուներորդ» բառից։", "Пятидесятый день, снова воскресенье: сошествие Святого Духа на апостолов, день рождения Церкви. Название «Пятидесятница» и греческое «Пентекост» означают «пятидесятый».")),
    P(222, 106, t("Why the date moves", "Ինչու է ամսաթիվը փոխվում", "Почему дата меняется"), t("Since the Council of Nicaea in 325 Easter has been the first Sunday after the first full moon of spring. The Armenian Church follows this rule, but the patriarchate of Jerusalem uses the old Julian calendar, so there Easter is often on a different day.", "325 թվականի Նիկիայի ժողովից ի վեր Զատիկը գարնան առաջին լիալուսնից հետո առաջին կիրակին է։ Հայ Եկեղեցին հետևում է այս կանոնին, բայց Երուսաղեմի պատրիարքությունն օգտագործում է հին՝ Հուլյան օրացույցը, ուստի այնտեղ Զատիկը հաճախ այլ օր է լինում։", "Со времён Никейского собора 325 года Пасха — первое воскресенье после первого весеннего полнолуния. Армянская церковь следует этому правилу, но Иерусалимский патриархат пользуется старым юлианским календарём, поэтому там Пасха часто бывает в другой день.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { bible, sixdays, patriarchs, tablets, evangelists, sower, holyweek, fifty };
