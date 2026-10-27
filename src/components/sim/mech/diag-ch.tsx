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
    P(206, 92, t("Where the symbols come from", "Որտեղից են խորհրդանիշները", "Откуда символы"), t("A man, a lion, an ox and an eagle are the four living creatures in the visions of Ezekiel and of Revelation. Armenian miniature painters put them at the start of each Gospel, so a reader could find the right book at a glance.", "Մարդը, առյուծը, եզը և արծիվն Եզեկիելի և Հայտնության տեսիլքների չորս կենդանի էակներն են։ Հայ մանրանկարիչները դրանք նկարում էին յուրաքանչյուր Ավետարանի սկզբում, որպեսզի ընթերցողը մեկ հայացքով գտնի ճիշտ գիրքը։", "Человек, лев, телец и орёл — четыре живых существа из видений Иезекииля и Откровения. Армянские миниатюристы изображали их в начале каждого Евангелия, чтобы читатель с одного взгляда находил нужную книгу.")),
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
    P(36, 16, t("Palm Sunday", "Ծաղկազարդ", "Цахказард"), t("Jesus rides into Jerusalem on a donkey, a humble animal, not a war horse, and the crowd waves branches. In Armenian churches willow branches are blessed, and the day is a feast of children.", "Հիսուսն Երուսաղեմ է մտնում էշի վրա նստած՝ համեստ կենդանու, այլ ոչ թե մարտական ձիու, և ամբոխը ճյուղեր է թափահարում։ Հայկական եկեղեցիներում ուռենու ճյուղեր են օրհնում, և այդ օրն երեխաների տոն է։", "Иисус въезжает в Иерусалим на осле — смиренном животном, а не боевом коне, и толпа машет ветвями. В армянских церквях освящают ветви вербы, и этот день — праздник детей.")),
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
    P(286, 56, t("Pentecost", "Հոգեգալուստ", "Пятидесятница"), t("The fiftieth day, again a Sunday: the descent of the Holy Spirit on the apostles, the birthday of the Church. The name comes from the Greek word for \"fiftieth\".", "Հիսուներորդ օրը, դարձյալ կիրակի․ Սուրբ Հոգու իջնելն առաքյալների վրա, Եկեղեցու ծննդյան օրը։ «Պենտեկոստե» անունը գալիս է հունարեն «հիսուներորդ» բառից։", "Пятидесятый день, снова воскресенье: сошествие Святого Духа на апостолов, день рождения Церкви. Название «Пятидесятница» и греческое «Пентекост» означают «пятидесятый».")),
    P(222, 106, t("Why the date moves", "Ինչու է ամսաթիվը փոխվում", "Почему дата меняется"), t("Since the Council of Nicaea in 325 Easter has been the first Sunday after the first full moon of spring. The Armenian Church follows this rule, but the patriarchate of Jerusalem uses the old Julian calendar, so there Easter is often on a different day.", "325 թվականի Նիկիայի ժողովից ի վեր Զատիկը գարնան առաջին լիալուսնից հետո առաջին կիրակին է։ Հայ Եկեղեցին հետևում է այս կանոնին, բայց Երուսաղեմի պատրիարքությունն օգտագործում է հին՝ Հուլյան օրացույցը, ուստի այնտեղ Զատիկը հաճախ այլ օր է լինում։", "Со времён Никейского собора 325 года Пасха — первое воскресенье после первого весеннего полнолуния. Армянская церковь следует этому правилу, но Иерусалимский патриархат пользуется старым юлианским календарём, поэтому там Пасха часто бывает в другой день.")),
  ],
};

/* ---------------- grade 7: where the apostles preached ---------------- */

// a simple map: x from longitude, y from latitude
const MX = (lon: number) => 12 + (lon - 35) * 27;
const MY = (lat: number) => 10 + (41.5 - lat) * 34;
const PLACES: Array<[number, number, Tr, string, number, number, "start" | "middle" | "end"]> = [
  [35.49, 38.72, t("Caesarea", "Կեսարիա", "Кесария"), "#0369a1", 0, 12, "middle"],
  [38.79, 37.16, t("Edessa (Urha)", "Եդեսիա (Ուռհա)", "Эдесса (Урха)"), "#b45309", 0, 12, "middle"],
  [38.5, 37.53, t("Samosata", "Սամոսատ", "Самосата"), "#64748b", -6, -4, "end"],
  [44.29, 40.16, t("Vagharshapat", "Վաղարշապատ", "Вагаршапат"), "#be123c", -7, -3, "end"],
  [44.54, 39.09, t("St Thaddeus", "Ս. Թադեոս", "Св. Фаддей"), "#7c3aed", 7, 3, "start"],
  [44.02, 38.05, t("Albak:|St Bartholomew", "Աղբակ՝|Ս. Բարդուղիմեոս", "Албак:|св. Варфоломей"), "#7c3aed", -4, 13, "middle"],
];

const apostles: Diagram = {
  title: t("Where the apostles preached", "Որտեղ քարոզեցին առաքյալները", "Где проповедовали апостолы"),
  h: 180,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="180" fill="#fefce8" />
      {/* the Euphrates, Lake Van, Lake Sevan, Lake Urmia */}
      <path d="M186,62 C160,74 126,84 116,100 S106,138 92,178" fill="none" stroke="#60a5fa" strokeWidth="2.2" />
      <Tx x={150} y={78} s={t("Euphrates", "Եփրատ", "Евфрат")} lang={lang} size={6.2} fill="#2563eb" w={700} />
      <ellipse cx={MX(42.95)} cy={MY(38.65)} rx="22" ry="9" transform={`rotate(-22 ${MX(42.95)} ${MY(38.65)})`} fill="#93c5fd" />
      <Tx x={MX(42.95)} y={MY(38.65) + 2} s={t("Van", "Վան", "Ван")} lang={lang} size={6.4} fill="#1e3a8a" />
      <ellipse cx={MX(45.3)} cy={MY(40.35)} rx="9" ry="6" fill="#93c5fd" />
      <Tx x={MX(45.3)} y={MY(40.35) - 9} s={t("Sevan", "Սևան", "Севан")} lang={lang} size={5.8} fill="#1e3a8a" />
      <ellipse cx={MX(45.45)} cy={MY(37.7)} rx="7" ry="19" fill="#93c5fd" />
      <Tx x={MX(45.45)} y={MY(37.7) + 30} s={t("Urmia", "Ուրմիա", "Урмия")} lang={lang} size={5.8} fill="#1e3a8a" />
      {/* Mount Ararat */}
      <path d={`M${MX(44.3) - 12},${MY(39.7) + 6} l9,-14 l4,5 l5,-7 l9,16 Z`} fill="#a8a29e" />
      <path d={`M${MX(44.3) - 3},${MY(39.7) - 8} l4,5 l5,-7 l2,4 l-4,1 l-3,-1 l-2,2 Z`} fill="#fff" />
      <Tx x={MX(44.3) - 22} y={MY(39.7) + 2} s={t("Ararat", "Արարատ", "Арарат")} lang={lang} size={5.8} fill="#57534e" anchor="end" />
      {PLACES.map(([lon, lat, name, c, dx, dy, anchor], k) => (
        <g key={k}>
          <circle cx={MX(lon)} cy={MY(lat)} r={k === 3 ? 4.5 : 3.5} fill={c} stroke="#fff" strokeWidth="1.2" />
          <Tx x={MX(lon) + dx} y={MY(lat) + dy} s={name} lang={lang} size={6.4} fill={c} anchor={anchor} />
        </g>
      ))}
      {/* the apostles' roads */}
      <path d={`M${MX(38.79) + 5},${MY(37.16) - 3} Q200,110 ${MX(44.54) - 4},${MY(39.09) + 2}`} fill="none" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="3 3" />
      <path d={`M${MX(38.79) + 5},${MY(37.16) + 1} Q190,160 ${MX(44.02) - 4},${MY(38.05) + 2}`} fill="none" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="3 3" />
      <path d={`M${MX(35.49) + 5},${MY(38.72) - 2} Q150,40 ${MX(44.29) - 5},${MY(40.16)}`} fill="none" stroke="#0369a1" strokeWidth="1.1" strokeDasharray="1.5 3" />
      <Tx x={120} y={44} s={t("Gregory's road", "Գրիգորի ճանապարհը", "Путь Григория")} lang={lang} size={5.8} fill="#0369a1" w={700} />
    </g>
  ),
  parts: [
    P(MX(38.79) - 8, MY(37.16) - 8, t("Edessa", "Եդեսիա", "Эдесса"), t("A Syriac-speaking city, today Şanlıurfa in Turkey. According to tradition, Thaddeus preached here first, at the court of King Abgar, before going on to Armenia.", "Ասորերեն խոսող քաղաք, այսօր՝ Շանլըուրֆա Թուրքիայում։ Ըստ ավանդության՝ Թադեոսն առաջինը քարոզել է այստեղ՝ Աբգար թագավորի արքունիքում, ապա մեկնել Հայաստան։", "Сироязычный город, сегодня Шанлыурфа в Турции. По преданию, Фаддей сначала проповедовал здесь, при дворе царя Абгара, а затем отправился в Армению.")),
    P(MX(44.54) - 10, MY(39.09) + 6, t("Saint Thaddeus monastery", "Սուրբ Թադեոս վանք", "Монастырь Святого Фаддея"), t("Built, according to tradition, over the apostle's grave, near Maku in today's Iran. Its black-and-white stone church draws thousands of pilgrims every July and is on the UNESCO list.", "Ըստ ավանդության՝ կառուցված առաքյալի գերեզմանի վրա, այսօրվա Իրանի Մակու քաղաքի մոտ։ Նրա սև ու սպիտակ քարից եկեղեցին ամեն հուլիս հազարավոր ուխտավորներ է հավաքում և ընդգրկված է ՅՈւՆԵՍԿՕ-ի ցանկում։", "Построен, по преданию, над могилой апостола, около Маку в сегодняшнем Иране. Его церковь из чёрного и белого камня каждый июль собирает тысячи паломников и внесена в список ЮНЕСКО.")),
    P(MX(44.02) + 9, MY(38.05) - 2, t("Albak", "Աղբակ", "Албак"), t("In Vaspurakan, south-east of Lake Van, today near Başkale in Turkey. Tradition says Bartholomew was martyred here; the monastery over his grave is now in ruins.", "Վասպուրականում, Վանա լճից հարավ-արևելք, այսօր՝ Թուրքիայի Բաշքալե քաղաքի մոտ։ Ավանդությունն ասում է, որ Բարդուղիմեոսն այստեղ է նահատակվել․ նրա գերեզմանի վրայի վանքն այժմ ավերակ է։", "В Васпуракане, к юго-востоку от озера Ван, сегодня около Башкале в Турции. Предание говорит, что Варфоломей был замучен здесь; монастырь над его могилой сейчас в руинах.")),
    P(MX(44.29) + 9, MY(40.16) + 4, t("Vagharshapat", "Վաղարշապատ", "Вагаршапат"), t("The royal capital, where the Hripsimeyan virgins were martyred and where Etchmiadzin Cathedral was built after 301.", "Թագավորական մայրաքաղաքը, որտեղ նահատակվեցին Հռիփսիմյան կույսերը, և որտեղ 301 թվականից հետո կառուցվեց Էջմիածնի Մայր տաճարը։", "Царская столица, где приняли мученичество девы-рипсимиянки и где после 301 года был построен Эчмиадзинский собор.")),
    P(MX(35.49) + 4, MY(38.72) - 8, t("Caesarea", "Կեսարիա", "Кесария"), t("A Greek-speaking city in Cappadocia (today Kayseri). Gregory grew up here as a Christian and returned here to be consecrated bishop; for decades the Armenian catholicoi were consecrated in Caesarea.", "Հունախոս քաղաք Կապադովկիայում (այսօր՝ Կայսերի)։ Գրիգորն այստեղ մեծացավ որպես քրիստոնյա և վերադարձավ այստեղ՝ եպիսկոպոս ձեռնադրվելու․ տասնամյակներ շարունակ հայոց կաթողիկոսները ձեռնադրվում էին Կեսարիայում։", "Грекоязычный город в Каппадокии (сегодня Кайсери). Григорий вырос здесь христианином и вернулся сюда, чтобы стать епископом; десятилетиями армянских католикосов рукополагали в Кесарии.")),
  ],
};

/* ---------------- grade 7: the family of Gregory ---------------- */

const GEN: Array<[number, number, Tr, boolean]> = [
  [28, 50, t("Gregory|the Illuminator", "Գրիգոր|Լուսավորիչ", "Григорий|Просветитель"), true],
  [80, 50, t("Vrtanes", "Վրթանես", "Вртанес"), true],
  [80, 116, t("Aristakes", "Արիստակես", "Аристакес"), true],
  [132, 50, t("Husik", "Հուսիկ", "Усик"), true],
  [184, 50, t("Athenogenes", "Աթանագինես", "Атанагинес"), false],
  [236, 50, t("Nerses|the Great", "Ներսես|Մեծ", "Нерсес|Великий"), true],
  [286, 50, t("Sahak|Partev", "Սահակ|Պարթև", "Саак|Партев"), true],
];

const gregorids: Diagram = {
  title: t("A century of catholicoi from one family", "Մեկ ընտանիքից կաթողիկոսների մեկ դար", "Век католикосов из одной семьи"),
  h: 160,
  draw: (lang) => (
    <g>
      <path d="M28,50 H286 M28,50 Q28,116 64,116" fill="none" stroke="#cbd5e1" strokeWidth="2" />
      {GEN.map(([x, y, name, cath], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r={k === 0 ? 17 : 14} fill={cath ? "#fef3c7" : "#f1f5f9"} stroke={cath ? "#b45309" : "#94a3b8"} strokeWidth={k === 0 ? 2.4 : 1.6} />
          {cath ? <path d={`M${x},${y - 7} v13 M${x - 5},${y - 2} h10`} stroke="#b45309" strokeWidth="2" strokeLinecap="round" /> : <Head x={x} y={y - 4} r={3.5} fill="#94a3b8" />}
          <Tx x={x} y={y + (k === 0 ? 27 : 24)} s={name} lang={lang} size={6.2} fill={cath ? "#78350f" : "#64748b"} />
        </g>
      ))}
      <rect x="150" y="104" width="160" height="40" rx="8" fill="#fff" stroke="#e2e8f0" />
      <path d="M162,116 v9 M157,120 h10" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
      <Tx x={174} y={123} s={t("catholicos", "կաթողիկոս", "католикос")} lang={lang} size={6.4} fill="#78350f" anchor="start" w={700} />
      <Tx x={162} y={138} s={t("each one is the son of the one before", "յուրաքանչյուրը նախորդի որդին է", "каждый — сын предыдущего")} lang={lang} size={6} fill="#475569" anchor="start" w={600} />
    </g>
  ),
  parts: [
    P(42, 32, t("Gregory the Illuminator", "Գրիգոր Լուսավորիչ", "Григорий Просветитель"), t("The first catholicos, consecrated in Caesarea. Late in life, tradition says, he withdrew to live as a hermit in a cave at Mount Sepuh and left the see to his son.", "Առաջին կաթողիկոսը՝ ձեռնադրված Կեսարիայում։ Ըստ ավանդության՝ կյանքի վերջում նա քաշվեց Սեպուհ լեռան մի քարայր՝ ճգնելու, և աթոռը թողեց որդուն։", "Первый католикос, рукоположенный в Кесарии. По преданию, в конце жизни он удалился отшельником в пещеру на горе Сепух и оставил престол сыну.")),
    P(94, 100, t("Aristakes", "Արիստակես", "Аристакес"), t("Gregory's younger son, a hermit before he became catholicos. He represented the Armenian Church at the Council of Nicaea in 325 and brought back its Creed.", "Գրիգորի կրտսեր որդին, որը մինչ կաթողիկոս դառնալը ճգնավոր էր։ Նա 325 թվականին Նիկիայի ժողովում ներկայացնում էր Հայ Եկեղեցին և բերեց նրա Հավատո հանգանակը։", "Младший сын Григория, до того как стать католикосом, был отшельником. Он представлял Армянскую церковь на Никейском соборе 325 года и привёз оттуда Символ веры.")),
    P(146, 34, t("Husik", "Հուսիկ", "Усик"), t("Vrtanes' son. He refused to let King Tiran into church on a feast day because of the king's injustice, and was beaten to death; the Church remembers him as a martyr.", "Վրթանեսի որդին։ Նա տոնի օրը թույլ չտվեց Տիրան թագավորին մտնել եկեղեցի՝ թագավորի անարդարությունների պատճառով, և ծեծելով սպանվեց․ Եկեղեցին նրան հիշատակում է որպես նահատակ։", "Сын Вртанеса. В праздник он не пустил царя Тирана в церковь из-за его несправедливости и был забит насмерть; Церковь чтит его как мученика.")),
    P(198, 34, t("Athenogenes", "Աթանագինես", "Атанагинес"), t("Husik's son never became catholicos and died young, but the line passed through him to his son Nerses.", "Հուսիկի որդին երբեք կաթողիկոս չդարձավ և մահացավ երիտասարդ տարիքում, բայց գիծը նրա միջոցով անցավ նրա որդի Ներսեսին։", "Сын Усика так и не стал католикосом и умер молодым, но линия перешла через него к его сыну Нерсесу.")),
    P(250, 34, t("Nerses the Great", "Ներսես Մեծ", "Нерсес Великий"), t("Educated in Caesarea, he was an officer at the royal court before he was made catholicos. His Council of Ashtishat filled the country with shelters, hospitals and schools.", "Կրթություն ստացել էր Կեսարիայում և մինչ կաթողիկոս դառնալը սպա էր արքունիքում։ Նրա հրավիրած Աշտիշատի ժողովից հետո երկիրը լցվեց աղքատանոցներով, հիվանդանոցներով և դպրոցներով։", "Учился в Кесарии и до того как стать католикосом служил офицером при царском дворе. После созванного им Аштишатского собора страна наполнилась приютами, больницами и школами.")),
    P(300, 34, t("Sahak Partev", "Սահակ Պարթև", "Саак Партев"), t("The last catholicos of Gregory's line. With Mesrop Mashtots he led the creation of the alphabet and the translation of the Bible.", "Գրիգորի տոհմի վերջին կաթողիկոսը։ Մեսրոպ Մաշտոցի հետ նա ղեկավարեց այբուբենի ստեղծումը և Աստվածաշնչի թարգմանությունը։", "Последний католикос из рода Григория. Вместе с Месропом Маштоцем он руководил созданием алфавита и переводом Библии.")),
  ],
};

/* ---------------- grade 7: three types of church ---------------- */

const churchtypes: Diagram = {
  title: t("Three types of early Armenian church (plans, east at the top)", "Վաղ հայկական եկեղեցու երեք տեսակ (հատակագծեր, արևելքը վերևում)", "Три типа ранних армянских церквей (планы, восток вверху)"),
  h: 160,
  draw: (lang) => (
    <g>
      {/* basilica */}
      <path d="M30,40 h40 v-4 a20,14 0 0 0 -40,0 Z" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
      <rect x="22" y="40" width="56" height="78" fill="#fff7ed" stroke="#b45309" strokeWidth="2" />
      {[52, 66, 80, 94, 108].map((y) => <g key={y}><rect x="38" y={y - 2.5} width="5" height="5" fill="#b45309" /><rect x="57" y={y - 2.5} width="5" height="5" fill="#b45309" /></g>)}
      {/* cross-in-square, the Hripsime type */}
      <rect x="122" y="36" width="76" height="82" fill="#ecfeff" stroke="#0e7490" strokeWidth="2" />
      <path d="M142,57 a18,18 0 0 1 36,0 M178,97 a18,18 0 0 1 -36,0 M143,58 a18,18 0 0 0 0,38 M177,58 a18,18 0 0 1 0,38" fill="#cffafe" stroke="#0e7490" strokeWidth="1.5" />
      <circle cx="160" cy="77" r="16" fill="none" stroke="#0e7490" strokeWidth="1.5" strokeDasharray="3 2" />
      {[[143, 58], [177, 58], [143, 96], [177, 96]].map(([x, y]) => <circle key={x * y} cx={x} cy={y} r="4" fill="#fff" stroke="#0e7490" strokeWidth="1.3" />)}
      {/* round, Zvartnots */}
      <circle cx="262" cy="77" r="42" fill="#f5f3ff" stroke="#6d28d9" strokeWidth="2" />
      <path d="M250,65 a12,12 0 0 1 24,0 Z" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="1.5" />
      <path d="M274,65 a12,12 0 0 1 0,24 M274,89 a12,12 0 0 1 -24,0 M250,89 a12,12 0 0 1 0,-24" fill="none" stroke="#6d28d9" strokeWidth="1" strokeDasharray="1 2.5" />
      {[[274, 77, -60], [262, 89, 30], [250, 77, 120]].flatMap(([cx, cy, a0]) =>
        [0, 1, 2, 3, 4].map((k) => {
          const a = ((a0 + k * 30) * Math.PI) / 180;
          return <circle key={`${cx}-${k}`} cx={cx + 12 * Math.cos(a)} cy={cy + 12 * Math.sin(a)} r="2" fill="#6d28d9" />;
        }),
      )}
      <circle cx="262" cy="77" r="9" fill="none" stroke="#6d28d9" strokeWidth="1.3" strokeDasharray="3 2" />
      {/* east arrow and names */}
      <path d="M160,16 v-8 M156,12 l4,-5 l4,5" stroke="#475569" strokeWidth="1.4" fill="none" />
      <Tx x={168} y={14} s={t("east", "արևելք", "восток")} lang={lang} size={6} fill="#475569" anchor="start" w={700} />
      <Tx x={50} y={134} s={t("Basilica", "Բազիլիկ", "Базилика")} lang={lang} size={7.4} fill="#b45309" />
      <Tx x={50} y={145} s={t("Kasakh, Yereruyk", "Քասաղ, Երերույք", "Касах, Ереруйк")} lang={lang} size={5.8} fill="#78350f" w={600} />
      <Tx x={160} y={134} s={t("Domed cross", "Գմբեթավոր խաչաձև", "Крестово-купольный")} lang={lang} size={7.4} fill="#0e7490" />
      <Tx x={160} y={145} s={t("St Hripsime, 618", "Ս. Հռիփսիմե, 618", "Св. Рипсиме, 618")} lang={lang} size={5.8} fill="#155e75" w={600} />
      <Tx x={262} y={134} s={t("Round", "Կլոր", "Круглый")} lang={lang} size={7.4} fill="#6d28d9" />
      <Tx x={262} y={145} s={t("Zvartnots, 641–652", "Զվարթնոց, 641–652", "Звартноц, 641–652")} lang={lang} size={5.8} fill="#4c1d95" w={600} />
    </g>
  ),
  parts: [
    P(76, 24, t("The altar faces east", "Խորանը դեպի արևելք է", "Алтарь обращён на восток"), t("The rounded apse with the altar is always at the east end, towards the sunrise, a sign of Christ as the light of the world. The faithful face it during the liturgy.", "Կլոր խորանն՝ սեղանով, միշտ արևելյան կողմում է՝ դեպի արևածագը, որպես Քրիստոսի՝ աշխարհի լույսի նշան։ Պատարագի ժամանակ հավատացյալները դեմքով դեպի այն են կանգնում։", "Полукруглая апсида с престолом всегда на востоке, к восходу солнца, — знак Христа, света миру. Во время литургии верующие стоят лицом к ней.")),
    P(18, 80, t("Basilica", "Բազիլիկ", "Базилика"), t("A long hall, often divided by two rows of pillars into three aisles. It came from Roman public halls and was the first shape of Armenian churches in the 4th and 5th centuries.", "Երկար դահլիճ, հաճախ երկու շարք սյուներով բաժանված երեք նավի։ Այն ծագել է հռոմեական հասարակական դահլիճներից և IV–V դարերում հայկական եկեղեցիների առաջին ձևն էր։", "Длинный зал, часто разделённый двумя рядами столбов на три нефа. Он произошёл от римских общественных залов и был первой формой армянских церквей в IV–V веках.")),
    P(182, 77, t("Dome on squinches", "Գմբեթ՝ տրոմպների վրա", "Купол на тромпах"), t("How do you set a round dome on a square room? Armenian builders bridged the corners with small arches called squinches, here with round niches between the four arms of the cross.", "Ինչպե՞ս կլոր գմբեթը դնել քառակուսի սենյակի վրա։ Հայ շինարարներն անկյունները ծածկում էին տրոմպ կոչվող փոքր կամարներով, այստեղ՝ խաչի չորս թևերի միջև եղած կլոր խորշերով։", "Как поставить круглый купол на квадратное помещение? Армянские зодчие перекрывали углы небольшими арками — тромпами, здесь с круглыми нишами между четырьмя рукавами креста.")),
    P(304, 50, t("Round church", "Կլոր եկեղեցի", "Круглая церковь"), t("Zvartnots was round outside, with a four-lobed core inside, three lobes open with columns and the east one closed for the altar. It rose in three tiers and was one of the tallest buildings of its time.", "Զվարթնոցը դրսից կլոր էր, իսկ ներսում ուներ քառաթերթ միջուկ․ երեք թերթը բաց էին՝ սյունաշարերով, իսկ արևելյանը փակ էր՝ խորանի համար։ Այն բարձրանում էր երեք հարկով և իր ժամանակի ամենաբարձր շենքերից էր։", "Звартноц был круглым снаружи, а внутри имел четырёхлепестковое ядро: три лепестка открыты колоннадами, а восточный закрыт для алтаря. Он поднимался тремя ярусами и был одним из самых высоких зданий своего времени.")),
  ],
};

/* ---------------- grade 8: a medieval monastery ---------------- */

const Kh = ({ x, y }: { x: number; y: number }) => (
  <g>
    <rect x={x - 4} y={y} width="8" height="14" rx="1" fill="#d6d3d1" stroke="#78716c" strokeWidth="0.8" />
    <path d={`M${x},${y + 2} v9 M${x - 2.5},${y + 5} h5`} stroke="#57534e" strokeWidth="1" />
  </g>
);

const monastery: Diagram = {
  title: t("A medieval Armenian monastery", "Միջնադարյան հայկական վանք", "Средневековый армянский монастырь"),
  h: 190,
  draw: (lang) => (
    <g>
      <rect x="0" y="0" width="320" height="190" fill="#f0f9ff" />
      <path d="M0,96 L50,52 L92,80 L150,30 L214,78 L262,46 L320,90 V190 H0 Z" fill="#d9f99d" opacity="0.7" />
      {/* the wall */}
      <rect x="8" y="58" width="304" height="124" rx="16" fill="#fefce8" stroke="#a8a29e" strokeWidth="3" strokeDasharray="10 3" />
      {/* refectory */}
      <rect x="20" y="124" width="38" height="26" fill="#fde68a" stroke="#92400e" strokeWidth="1.2" />
      <path d="M18,124 l21,-10 l21,10 Z" fill="#b45309" />
      {/* gavit with its light opening */}
      <rect x="64" y="108" width="56" height="42" fill="#fef3c7" stroke="#92400e" strokeWidth="1.2" />
      <rect x="62" y="104" width="60" height="5" fill="#b45309" />
      <rect x="86" y="96" width="12" height="8" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
      <path d="M86,96 l6,-5 l6,5 Z" fill="#b45309" />
      {/* main church */}
      <rect x="120" y="94" width="60" height="56" fill="#fed7aa" stroke="#9a3412" strokeWidth="1.4" />
      <path d="M118,94 l32,-10 l32,10 Z" fill="#c2410c" />
      <rect x="140" y="66" width="20" height="20" fill="#fed7aa" stroke="#9a3412" strokeWidth="1.2" />
      <path d="M137,66 l13,-16 l13,16 Z" fill="#c2410c" />
      <path d="M150,50 v-9 M146.5,44 h7" stroke="#9a3412" strokeWidth="1.4" />
      <path d="M144,150 v-14 a6,6 0 0 1 12,0 v14 Z" fill="#7c2d12" />
      {/* bell tower */}
      <rect x="196" y="112" width="22" height="38" fill="#fed7aa" stroke="#9a3412" strokeWidth="1.2" />
      <rect x="199" y="90" width="16" height="22" fill="#fed7aa" stroke="#9a3412" strokeWidth="1.2" />
      <path d="M203,110 v-10 a4,4 0 0 1 8,0 v10 Z" fill="#7c2d12" />
      <circle cx="207" cy="104" r="2.6" fill="#facc15" />
      <path d="M197,90 l10,-12 l10,12 Z" fill="#c2410c" />
      {/* library and scriptorium */}
      <rect x="232" y="116" width="44" height="34" fill="#e0e7ff" stroke="#3730a3" strokeWidth="1.2" />
      <path d="M230,116 l24,-11 l24,11 Z" fill="#4338ca" />
      {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={238 + k * 7} y="124" width="5" height="11" fill={["#be123c", "#0369a1", "#047857", "#b45309", "#7c3aed"][k]} />)}
      <rect x="236" y="137" width="36" height="3" fill="#3730a3" />
      {/* khachkars */}
      <Kh x={128} y={154} />
      <Kh x={106} y={154} />
      <Kh x={286} y={154} />
      {[
        [39, t("refectory", "սեղանատուն", "трапезная")],
        [92, t("gavit", "գավիթ", "гавит")],
        [150, t("church", "եկեղեցի", "церковь")],
        [207, t("bell tower", "զանգակատուն", "колокольня")],
        [254, t("library", "մատենադարան", "библиотека")],
      ].map(([x, s]) => <Tx key={x as number} x={x as number} y={x === 207 ? 162 : 178} s={s as Tr} lang={lang} size={6.4} fill="#57534e" w={700} />)}
    </g>
  ),
  parts: [
    P(162, 60, t("The main church", "Գլխավոր եկեղեցին", "Главная церковь"), t("The heart of the monastery, where the brotherhood gathered for the services that marked the hours of the day and night, starting long before sunrise.", "Վանքի սիրտը, որտեղ միաբանությունը հավաքվում էր օրվա և գիշերվա ժամերը նշող արարողությունների համար, որոնք սկսվում էին արևածագից շատ առաջ։", "Сердце монастыря, где братия собиралась на службы, отмечавшие часы дня и ночи и начинавшиеся задолго до рассвета.")),
    P(76, 98, t("The gavit", "Գավիթը", "Гавит"), t("A big hall in front of the church, lit from an opening in the roof. It served as a narthex, a meeting room, a classroom and sometimes a burial place for princes.", "Եկեղեցու առջևի մեծ դահլիճ, որը լուսավորվում էր տանիքի երդիկից։ Այն ծառայում էր որպես նախասրահ, ժողովների սենյակ, դասարան և երբեմն իշխանների դամբարան։", "Большой зал перед церковью, освещённый через отверстие в крыше. Он служил притвором, залом собраний, классом, а иногда и усыпальницей князей.")),
    P(222, 84, t("The bell tower", "Զանգակատունը", "Колокольня"), t("From the 13th century monasteries built separate bell towers, often with small chapels inside. Before bells, monks struck a wooden board to call the brothers.", "XIII դարից վանքերում կառուցում էին առանձին զանգակատներ, հաճախ ներսում փոքր մատուռներով։ Մինչ զանգերը վանականները հարվածում էին փայտե տախտակին՝ եղբայրներին կանչելու համար։", "С XIII века в монастырях строили отдельные колокольни, часто с маленькими часовнями внутри. До колоколов монахи били в деревянную доску, созывая братию.")),
    P(282, 110, t("Library and scriptorium", "Մատենադարան և գրչատուն", "Библиотека и скрипторий"), t("Scribes copied, bound and stored books here. At Haghpat the 13th-century library still has the wall niches where manuscripts were kept.", "Այստեղ գրիչներն ընդօրինակում, կազմում և պահում էին գրքերը։ Հաղպատի XIII դարի մատենադարանում մինչ օրս պահպանվել են պատերի խորշերը, որտեղ պահվում էին ձեռագրերը։", "Здесь писцы переписывали, переплетали и хранили книги. В библиотеке Ахпата XIII века до сих пор сохранились ниши в стенах, где хранили рукописи.")),
    P(28, 116, t("The refectory", "Սեղանատունը", "Трапезная"), t("The monks ate together in silence while one of them read aloud from the lives of the saints. On fast days the meal was bread, vegetables and beans.", "Վանականները միասին ճաշում էին լռության մեջ, մինչ նրանցից մեկը բարձրաձայն կարդում էր սրբերի վարքերից։ Պահքի օրերին ճաշը հաց, բանջարեղեն և լոբի էր։", "Монахи ели вместе в тишине, а один из них читал вслух жития святых. В постные дни трапеза состояла из хлеба, овощей и бобов.")),
    P(140, 150, t("Khachkars", "Խաչքարեր", "Хачкары"), t("Carved cross-stones set up in memory of the dead, of a victory or of the building of a church. Each one is different, with a cross that blossoms like a tree of life.", "Փորագրված խաչքարեր, որ կանգնեցվում էին ի հիշատակ մահացածների, հաղթանակի կամ եկեղեցու շինության։ Յուրաքանչյուրը տարբեր է, իսկ խաչը ծաղկում է կենաց ծառի պես։", "Резные камни-кресты, которые ставили в память об умерших, о победе или о постройке церкви. Каждый неповторим, а крест расцветает, как древо жизни.")),
    P(300, 66, t("The wall", "Պարիսպը", "Стена"), t("Many monasteries stood in remote places and were surrounded by walls, because they kept food, books and treasures and sheltered villagers during raids.", "Շատ վանքեր կանգնած էին հեռավոր վայրերում և շրջապատված էին պարիսպներով, որովհետև դրանցում պահվում էին պաշար, գրքեր և գանձեր, և հարձակումների ժամանակ ապաստան էին տալիս գյուղացիներին։", "Многие монастыри стояли в глухих местах и были окружены стенами, потому что там хранили припасы, книги и сокровища, а во время набегов укрывали крестьян.")),
  ],
};

/* ---------------- grade 8: the four hierarchical sees ---------------- */

const SEES: Array<[number, number, Tr, Tr, string]> = [
  [8, 22, t("Mother See of|Holy Etchmiadzin", "Մայր Աթոռ|Սուրբ Էջմիածին", "Первопрестольный|Святой Эчмиадзин"), t("Catholicos of All Armenians", "Ամենայն հայոց կաթողիկոս", "Католикос всех армян"), "#b45309"],
  [164, 22, t("Catholicosate of the|Great House of Cilicia", "Մեծի Տանն Կիլիկիո|կաթողիկոսություն", "Католикосат Великого|Дома Киликийского"), t("Catholicos, in Antelias", "Կաթողիկոս, Անթիլիասում", "Католикос, в Антилиасе"), "#be123c"],
  [8, 100, t("Patriarchate of|Jerusalem", "Երուսաղեմի|պատրիարքություն", "Иерусалимский|патриархат"), t("Patriarch, St James Cathedral", "Պատրիարք, Ս. Հակոբ վանք", "Патриарх, собор Св. Иакова"), "#0369a1"],
  [164, 100, t("Patriarchate of|Constantinople", "Կոստանդնուպոլսի|պատրիարքություն", "Константинопольский|патриархат"), t("Patriarch, in Istanbul", "Պատրիարք, Ստամբուլում", "Патриарх, в Стамбуле"), "#047857"],
];

const sees: Diagram = {
  title: t("One Church, four hierarchical sees", "Մեկ Եկեղեցի, չորս նվիրապետական աթոռ", "Одна Церковь, четыре иерархических престола"),
  h: 188,
  draw: (lang) => (
    <g>
      {SEES.map(([x, y, name, head, c], k) => (
        <g key={k}>
          <rect x={x} y={y} width="148" height="66" rx="10" fill="#fff" stroke={c} strokeWidth={k === 0 ? 2.6 : 1.6} />
          <rect x={x + 10} y={y + 26} width="20" height="20" fill={c} opacity="0.2" />
          <path d={`M${x + 8},${y + 26} l12,-14 l12,14 Z`} fill={c} />
          <path d={`M${x + 20},${y + 12} v-7 M${x + 17},${y + 8} h6`} stroke={c} strokeWidth="1.4" />
          <Tx x={x + 38} y={y + 20} s={name} lang={lang} size={7} fill={c} anchor="start" />
          <Tx x={x + 38} y={y + 52} s={head} lang={lang} size={5.8} fill="#475569" anchor="start" w={600} />
        </g>
      ))}
      <circle cx="160" cy="94" r="15" fill="#fef3c7" stroke="#b45309" strokeWidth="1.6" />
      <path d="M160,86 v16 M154,92 h12" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
      <Tx x={160} y={182} s={t("one faith, one liturgy, many countries", "մեկ հավատ, մեկ պատարագ, շատ երկրներ", "одна вера, одна литургия, много стран")} lang={lang} size={6.6} fill="#475569" w={700} />
    </g>
  ),
  parts: [
    P(150, 30, t("Etchmiadzin", "Էջմիածին", "Эчмиадзин"), t("Since 1441 the seat of the Catholicos of All Armenians. It has the primacy of honour: the other sees recognise it as the first, and the holy myron for the whole Church is blessed here.", "1441 թվականից Ամենայն հայոց կաթողիկոսի աթոռանիստը։ Այն ունի պատվո առաջնություն․ մյուս աթոռներն այն ճանաչում են որպես առաջինը, և ամբողջ Եկեղեցու համար սուրբ մյուռոնն օրհնվում է այստեղ։", "С 1441 года резиденция Католикоса всех армян. Ему принадлежит первенство чести: другие престолы признают его первым, и святое миро для всей Церкви освящается здесь.")),
    P(306, 30, t("Antelias", "Անթիլիաս", "Антилиас"), t("Heir of the see of Sis. Since 1930 it has stood near Beirut in Lebanon and cares for dioceses in the Middle East and parts of the diaspora.", "Սսի աթոռի ժառանգորդը։ 1930 թվականից այն գտնվում է Լիբանանում՝ Բեյրութի մոտ, և հոգ է տանում Մերձավոր Արևելքի և սփյուռքի որոշ թեմերի մասին։", "Наследник престола Сиса. С 1930 года находится около Бейрута в Ливане и окормляет епархии Ближнего Востока и части диаспоры.")),
    P(150, 108, t("Jerusalem", "Երուսաղեմ", "Иерусалим"), t("The Armenian brotherhood of St James guards Armenian rights in the holy places, including shares in the Church of the Holy Sepulchre and the Church of the Nativity in Bethlehem.", "Սրբոց Հակոբյանց միաբանությունը պահպանում է հայերի իրավունքները սրբավայրերում, այդ թվում՝ Սուրբ Հարության տաճարում և Բեթղեհեմի Սուրբ Ծննդյան տաճարում։", "Армянское братство Святого Иакова охраняет права армян в святых местах, в том числе в храме Гроба Господня и в храме Рождества в Вифлееме.")),
    P(306, 108, t("Constantinople", "Կոստանդնուպոլիս", "Константинополь"), t("Founded in 1461, soon after the Ottoman conquest. For centuries the patriarch was also the head of the whole Armenian community of the empire before the sultan.", "Հիմնվել է 1461 թվականին՝ օսմանյան նվաճումից կարճ ժամանակ անց։ Դարեր շարունակ պատրիարքը սուլթանի առջև նաև կայսրության ողջ հայ համայնքի գլուխն էր։", "Основан в 1461 году, вскоре после османского завоевания. Веками патриарх был ещё и главой всей армянской общины империи перед султаном.")),
    P(176, 82, t("One Church", "Մեկ Եկեղեցի", "Одна Церковь"), t("The sees are not separate churches: they share one faith, one liturgy and one tradition, and their heads meet together on important occasions.", "Աթոռներն առանձին եկեղեցիներ չեն․ նրանք ունեն մեկ հավատ, մեկ պատարագ և մեկ ավանդություն, և նրանց գլուխները կարևոր առիթներով հանդիպում են միասին։", "Престолы — не отдельные церкви: у них одна вера, одна литургия и одна традиция, а их главы собираются вместе в важных случаях.")),
  ],
};

/* ---------------- grade 9: the Holy Trinity ---------------- */

const trinity: Diagram = {
  title: t("The Holy Trinity: one God in three persons", "Սուրբ Երրորդություն՝ մեկ Աստված երեք անձով", "Святая Троица: один Бог в трёх лицах"),
  h: 186,
  draw: (lang) => {
    const C: Array<[number, number, Tr, string]> = [
      [160, 28, t("Father", "Հայր", "Отец"), "#b45309"],
      [56, 152, t("Son", "Որդի", "Сын"), "#be123c"],
      [264, 152, t("Holy|Spirit", "Սուրբ|Հոգի", "Святой|Дух"), "#0369a1"],
    ];
    const IS = t("is", "է", "есть");
    const NOT = t("is not", "չէ", "не есть");
    return (
      <g>
        <path d="M160,28 L56,152 L264,152 Z" fill="none" stroke="#cbd5e1" strokeWidth="3" />
        {C.map(([x, y], k) => <line key={k} x1={x} y1={y} x2="160" y2="110" stroke="#fcd34d" strokeWidth="3" />)}
        {[[96, 84, -50], [224, 84, 50], [160, 166, 0]].map(([x, y, r], k) => (
          <g key={k} transform={`rotate(${r} ${x} ${y})`}><Tx x={x} y={y} s={NOT} lang={lang} size={7} fill="#64748b" /></g>
        ))}
        {[[166, 74, "start"], [104, 124, "middle"], [216, 124, "middle"]].map(([x, y, a], k) => (
          <Tx key={k} x={x as number} y={y as number} s={IS} lang={lang} size={7} fill="#b45309" anchor={a as "start" | "middle"} />
        ))}
        {C.map(([x, y, name, c], k) => (
          <g key={k}>
            <circle cx={x} cy={y} r="22" fill="#fff" stroke={c} strokeWidth="2.4" />
            <Tx x={x} y={y + (L(name, lang).includes("|") ? -1 : 3)} s={name} lang={lang} size={7.4} fill={c} />
          </g>
        ))}
        <circle cx="160" cy="110" r="24" fill="#fef3c7" stroke="#b45309" strokeWidth="2.4" />
        <Tx x={160} y={114} s={t("God", "Աստված", "Бог")} lang={lang} size={9} fill="#78350f" />
      </g>
    );
  },
  parts: [
    P(178, 14, t("The Father", "Հայրը", "Отец"), t("The Creator, the source of all things. The Creed begins: \"We believe in one God, the Father Almighty, maker of heaven and earth.\"", "Արարիչը՝ ամեն ինչի սկիզբը։ Հավատո հանգանակը սկսվում է․ «Հավատամք ի մի Աստված, ի Հայրն ամենակալ, յԱրարիչն երկնի և երկրի»։", "Творец, источник всего. Символ веры начинается словами: «Веруем во единого Бога, Отца Вседержителя, Творца неба и земли».")),
    P(34, 134, t("The Son", "Որդին", "Сын"), t("Jesus Christ, who became man, was crucified and rose again. In Gregory's vision at Etchmiadzin it was the Only Begotten Son who came down.", "Հիսուս Քրիստոսը, որը մարդացավ, խաչվեց և հարություն առավ։ Գրիգորի տեսիլքում Էջմիածնում հենց Միածին Որդին իջավ։", "Иисус Христос, который стал человеком, был распят и воскрес. В видении Григория в Эчмиадзине сошёл именно Единородный Сын.")),
    P(286, 134, t("The Holy Spirit", "Սուրբ Հոգին", "Святой Дух"), t("The Giver of life, who spoke through the prophets and came down on the apostles at Pentecost. The Council of Constantinople in 381 confirmed his divinity.", "Կենդանարարը, որը խոսեց մարգարեների միջոցով և Հոգեգալստին իջավ առաքյալների վրա։ 381 թվականի Կոստանդնուպոլսի ժողովը հաստատեց նրա աստվածությունը։", "Животворящий, говоривший через пророков и сошедший на апостолов в Пятидесятницу. Константинопольский собор 381 года подтвердил его божество.")),
    P(182, 98, t("One God", "Մեկ Աստված", "Один Бог"), t("Each person is fully God, and yet there are not three gods but one, sharing one essence. That is why the spokes say \"is\".", "Յուրաքանչյուր անձ լիովին Աստված է, և այնուամենայնիվ երեք աստված չկա, այլ մեկ՝ մեկ էությամբ։ Ահա թե ինչու ճառագայթների վրա գրված է «է»։", "Каждое лицо — полностью Бог, и всё же богов не три, а один, единой сущности. Поэтому на лучах написано «есть».")),
    P(118, 160, t("Three persons", "Երեք անձ", "Три лица"), t("The Father is not the Son, and the Son is not the Spirit: the persons are distinct. This picture, the \"Shield of the Trinity\", appears in European manuscripts from about 1200.", "Հայրը Որդին չէ, և Որդին Հոգին չէ․ անձերը տարբեր են։ Այս պատկերը՝ «Երրորդության վահանը», հանդիպում է եվրոպական ձեռագրերում մոտ 1200 թվականից։", "Отец не есть Сын, и Сын не есть Дух: лица различны. Эта схема, «Щит Троицы», встречается в европейских рукописях примерно с 1200 года.")),
  ],
};

/* ---------------- grade 9: the seven sacraments ---------------- */

const SACR: Array<[Tr, string]> = [
  [t("Baptism", "Մկրտություն", "Крещение"), "#0369a1"],
  [t("Chrismation", "Դրոշմ", "Миропомазание"), "#b45309"],
  [t("Penance", "Ապաշխարություն", "Покаяние"), "#7c3aed"],
  [t("Communion", "Հաղորդություն", "Причастие"), "#be123c"],
  [t("Marriage", "Պսակ", "Брак"), "#db2777"],
  [t("Ordination", "Ձեռնադրություն", "Рукоположение"), "#047857"],
  [t("Anointing|of the sick", "Կարգ|հիվանդաց", "Елеосвящение"), "#a16207"],
];

function SacrIcon({ k, x, y, c }: { k: number; x: number; y: number; c: string }) {
  switch (k) {
    case 0: return <g><path d={`M${x - 10},${y} h20 a10,9 0 0 1 -20,0 Z`} fill="#bae6fd" stroke={c} strokeWidth="1.4" /><path d={`M${x - 6},${y - 4} q3,-4 6,0 t6,0`} stroke={c} strokeWidth="1.2" fill="none" /></g>;
    case 1: return <g><path d={`M${x - 3},${y - 10} h6 v4 q6,3 6,10 q0,8 -9,8 q-9,0 -9,-8 q0,-7 6,-10 Z`} fill="#fde68a" stroke={c} strokeWidth="1.3" /><path d={`M${x},${y - 1} q-3,4 0,6 q3,-2 0,-6 Z`} fill={c} /></g>;
    case 2: return <g><circle cx={x - 5} cy={y} r="5" fill="none" stroke={c} strokeWidth="2" /><path d={`M${x},${y} h11 M${x + 7},${y} v4 M${x + 10},${y} v3`} stroke={c} strokeWidth="2" /></g>;
    case 3: return <g><path d={`M${x - 7},${y - 10} h14 q0,10 -7,11 q-7,-1 -7,-11 Z M${x},${y + 1} v6 M${x - 5},${y + 8} h10`} fill="#fecdd3" stroke={c} strokeWidth="1.4" /></g>;
    case 4: return <g><circle cx={x - 4} cy={y} r="6" fill="none" stroke="#eab308" strokeWidth="2.2" /><circle cx={x + 4} cy={y} r="6" fill="none" stroke="#eab308" strokeWidth="2.2" /></g>;
    case 5: return <g><path d={`M${x - 5},${y - 10} v20 M${x + 5},${y - 10} v20 M${x - 5},${y - 10} q5,-3 10,0`} stroke={c} strokeWidth="2.6" fill="none" /><path d={`M${x - 5},${y + 4} m-2,0 h4 M${x + 5},${y + 4} m-2,0 h4`} stroke="#fff" strokeWidth="1" /></g>;
    default: return <g><path d={`M${x - 10},${y + 2} q10,8 20,0 l-3,-5 h-14 Z`} fill="#fde68a" stroke={c} strokeWidth="1.3" /><path d={`M${x + 8},${y - 5} q-3,-6 0,-10 q3,4 0,10 Z`} fill="#f97316" /></g>;
  }
}

const SPOS = SACR.map((_, k) => {
  const a = -Math.PI / 2 + (k * 2 * Math.PI) / 7;
  return [160 + 86 * Math.cos(a), 94 + 66 * Math.sin(a)];
});

const sacraments: Diagram = {
  title: t("The seven sacraments", "Յոթ խորհուրդները", "Семь таинств"),
  h: 200,
  draw: (lang) => (
    <g>
      <ellipse cx="160" cy="94" rx="86" ry="66" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
      <Tx x={160} y={89} s={t("visible sign,", "տեսանելի նշան,", "видимый знак,")} lang={lang} size={6.8} fill="#475569" />
      <Tx x={160} y={101} s={t("invisible grace", "անտեսանելի շնորհ", "невидимая благодать")} lang={lang} size={6.8} fill="#b45309" />
      {SACR.map(([name, c], k) => {
        const [x, y] = SPOS[k];
        return (
          <g key={k}>
            <circle cx={x} cy={y} r="17" fill="#fff" stroke={c} strokeWidth="1.8" />
            <SacrIcon k={k} x={x} y={y} c={c} />
            <Tx x={x} y={y + 27} s={name} lang={lang} size={6.4} fill={c} />
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(SPOS[0][0] + 13, SPOS[0][1] - 13, t("Baptism", "Մկրտություն", "Крещение"), t("Water. The child is dipped three times in the font, in the name of the Father, the Son and the Holy Spirit, and is born into new life.", "Ջուր։ Երեխային երեք անգամ ընկղմում են ավազանում՝ Հոր, Որդու և Սուրբ Հոգու անունով, և նա ծնվում է նոր կյանքի։", "Вода. Ребёнка трижды погружают в купель во имя Отца, и Сына, и Святого Духа, и он рождается к новой жизни.")),
    P(SPOS[1][0] + 13, SPOS[1][1] - 13, t("Chrismation", "Դրոշմ", "Миропомазание"), t("Holy myron. Straight after baptism the priest anoints nine places on the body, from the forehead to the feet, as a seal of the Holy Spirit.", "Սուրբ մյուռոն։ Մկրտությունից անմիջապես հետո քահանան օծում է մարմնի ինը տեղ՝ ճակատից մինչև ոտքերը, որպես Սուրբ Հոգու կնիք։", "Святое миро. Сразу после крещения священник помазывает девять мест на теле, ото лба до ног, как печать Святого Духа.")),
    P(SPOS[2][0] + 13, SPOS[2][1] - 13, t("Penance", "Ապաշխարություն", "Покаяние"), t("Words. The believer confesses sins before the priest, and the priest pronounces forgiveness in the name of God.", "Խոսք։ Հավատացյալը քահանայի առջև խոստովանում է մեղքերը, և քահանան Աստծո անունով արձակում է նրանց։", "Слово. Верующий исповедует грехи перед священником, и священник от имени Бога разрешает их.")),
    P(SPOS[3][0] - 13, SPOS[3][1] - 13, t("Communion", "Հաղորդություն", "Причастие"), t("Bread and wine. At the liturgy they become the Body and Blood of Christ, as at the Last Supper.", "Հաց և գինի։ Պատարագի ժամանակ դրանք դառնում են Քրիստոսի Մարմինն ու Արյունը, ինչպես Վերջին ընթրիքին։", "Хлеб и вино. На литургии они становятся Телом и Кровью Христа, как на Тайной вечере.")),
    P(SPOS[4][0] + 13, SPOS[4][1] - 13, t("Marriage", "Պսակ", "Брак"), t("The Armenian word psak means \"crown\": bride and groom are crowned, and a red-and-white thread, the narot, is tied on them.", "«Պսակ» բառը նշանակում է «թագ»․ հարսին ու փեսային պսակում են, և նրանց վրա կապում են կարմիր ու սպիտակ թել՝ նարոտ։", "Армянское слово «псак» значит «венец»: жениха и невесту венчают и повязывают им красно-белую нить — нарот.")),
    P(SPOS[5][0] + 13, SPOS[5][1] - 13, t("Ordination", "Ձեռնադրություն", "Рукоположение"), t("The laying on of hands. A bishop lays his hands on the candidate and prays, so that he may serve as deacon, priest or bishop.", "Ձեռք դնել։ Եպիսկոպոսը ձեռքերը դնում է թեկնածուի վրա և աղոթում, որպեսզի նա ծառայի որպես սարկավագ, քահանա կամ եպիսկոպոս։", "Возложение рук. Епископ возлагает руки на кандидата и молится, чтобы тот служил диаконом, священником или епископом.")),
    P(SPOS[6][0] + 13, SPOS[6][1] - 13, t("Anointing of the sick", "Կարգ հիվանդաց", "Елеосвящение"), t("Oil and prayer. The priest prays for the healing of soul and body of someone who is ill.", "Յուղ և աղոթք։ Քահանան աղոթում է հիվանդի հոգու և մարմնի բժշկության համար։", "Елей и молитва. Священник молится об исцелении души и тела больного.")),
  ],
};

/* ---------------- grade 9: inside a church ---------------- */

const churchplan: Diagram = {
  title: t("Inside an Armenian church (plan, east at the top)", "Հայկական եկեղեցու ներսը (հատակագիծ, արևելքը վերևում)", "Внутри армянской церкви (план, восток вверху)"),
  h: 200,
  draw: (lang) => (
    <g>
      {/* sacristies */}
      <rect x="92" y="30" width="32" height="44" fill="#f1f5f9" stroke="#475569" strokeWidth="1.4" />
      <rect x="196" y="30" width="32" height="44" fill="#f1f5f9" stroke="#475569" strokeWidth="1.4" />
      {/* apse with the holy table */}
      <path d="M124,74 V44 a36,30 0 0 1 72,0 V74 Z" fill="#fef3c7" stroke="#92400e" strokeWidth="1.8" />
      <rect x="152" y="38" width="16" height="12" fill="#fff" stroke="#92400e" strokeWidth="1.2" />
      <path d="M160,40 v8 M157,43 h6" stroke="#b45309" strokeWidth="1.2" />
      {/* bema and steps */}
      <rect x="112" y="74" width="96" height="16" fill="#fde68a" stroke="#92400e" strokeWidth="1.4" />
      <path d="M130,90 h60 M134,94 h52" stroke="#a16207" strokeWidth="1" />
      {/* curtain */}
      <path d="M112,92 q6,-4 12,0 t12,0 t12,0 t12,0 t12,0 t12,0 t12,0 t12,0" stroke="#dc2626" strokeWidth="2" fill="none" />
      {/* nave with dome and pillars */}
      <rect x="92" y="96" width="136" height="60" fill="#fff" stroke="#475569" strokeWidth="1.8" />
      <circle cx="160" cy="126" r="24" fill="none" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
      {[[132, 104], [188, 104], [132, 148], [188, 148]].map(([x, y]) => <rect key={x + y} x={x - 4} y={y - 4} width="8" height="8" fill="#94a3b8" />)}
      {/* candle stand */}
      <rect x="104" y="138" width="16" height="10" fill="#fde68a" stroke="#a16207" strokeWidth="1" />
      {[107, 112, 117].map((x) => <g key={x}><path d={`M${x},138 v-5`} stroke="#fff7ed" strokeWidth="1.6" /><path d={`M${x},132 q-1.5,-3 0,-5 q1.5,2 0,5 Z`} fill="#f97316" /></g>)}
      {/* gavit and door */}
      <rect x="104" y="158" width="112" height="30" fill="#f8fafc" stroke="#475569" strokeWidth="1.4" />
      <rect x="152" y="154" width="16" height="6" fill="#fff" />
      <rect x="152" y="186" width="16" height="6" fill="#fff" />
      {/* labels */}
      <Tx x={160} y={64} s={t("altar", "խորան", "алтарь")} lang={lang} size={6.6} fill="#92400e" />
      <Tx x={160} y={85} s={t("bema", "բեմ", "бема")} lang={lang} size={6.2} fill="#92400e" />
      <Tx x={108} y={54} s={t("sacristy", "ավանդա-|տուն", "ризница")} lang={lang} size={5.2} fill="#475569" />
      <Tx x={212} y={54} s={t("sacristy", "ավանդա-|տուն", "ризница")} lang={lang} size={5.2} fill="#475569" />
      <Tx x={160} y={129} s={t("nave", "նավ", "неф")} lang={lang} size={7} fill="#334155" />
      <Tx x={160} y={176} s={t("gavit", "գավիթ", "гавит")} lang={lang} size={6.6} fill="#334155" />
      <path d="M268,40 v-14 M264,30 l4,-5 l4,5" stroke="#475569" strokeWidth="1.4" fill="none" />
      <Tx x={268} y={50} s={t("east", "արևելք", "восток")} lang={lang} size={6} fill="#475569" />
    </g>
  ),
  parts: [
    P(186, 36, t("Altar", "Խորան", "Алтарь"), t("The raised eastern part with the holy table, where the bread and wine are consecrated. Only clergy and servers go up into it.", "Արևելյան բարձրացված մասը՝ սուրբ սեղանով, որտեղ օրհնվում են հացն ու գինին։ Դրա վրա բարձրանում են միայն հոգևորականներն ու սպասավորները։", "Возвышенная восточная часть со святым престолом, где освящают хлеб и вино. На неё поднимаются только духовенство и прислужники.")),
    P(218, 82, t("Bema", "Բեմ", "Бема"), t("The platform in front of the altar, with steps leading up to it, from which the Gospel is read and the sermon is preached.", "Խորանի առջևի հարթակը, դեպի որը տանում են աստիճաններ, որտեղից կարդում են Ավետարանը և քարոզ են խոսում։", "Помост перед алтарём со ступенями, откуда читают Евангелие и произносят проповедь.")),
    P(232, 94, t("The curtain", "Վարագույրը", "Завеса"), t("It is drawn closed at certain moments of the liturgy, and for the whole of Great Lent, as a sign of repentance, like the closing of paradise to Adam.", "Այն փակվում է պատարագի որոշ պահերին և ամբողջ Մեծ պահքի ընթացքում՝ որպես ապաշխարության նշան, ինչպես Ադամի համար դրախտի փակվելը։", "Её задёргивают в определённые моменты литургии и на весь Великий пост — как знак покаяния, словно закрытие рая для Адама.")),
    P(88, 30, t("Sacristies", "Ավանդատներ", "Ризницы"), t("Two rooms beside the altar where vestments, books and the sacred vessels are kept, and where the clergy prepare for the service.", "Խորանի կողքի երկու սենյակները, որտեղ պահվում են զգեստները, գրքերը և սուրբ անոթները, և որտեղ հոգևորականները պատրաստվում են արարողությանը։", "Две комнаты по бокам алтаря, где хранят облачения, книги и священные сосуды и где духовенство готовится к службе.")),
    P(232, 126, t("Nave and dome", "Նավ և գմբեթ", "Неф и купол"), t("Where the people stand. Armenian churches traditionally have no pews; above, the dome stands for heaven.", "Այստեղ կանգնում է ժողովուրդը։ Հայկական եկեղեցիներում ավանդաբար նստարաններ չկան․ վերևում գմբեթը խորհրդանշում է երկինքը։", "Здесь стоит народ. В армянских церквях по традиции нет скамей; купол наверху означает небо.")),
    P(98, 132, t("Candles", "Մոմեր", "Свечи"), t("On entering, people light a thin candle and set it in a tray of sand, with a prayer for themselves or for someone they love.", "Ներս մտնելիս մարդիկ վառում են բարակ մոմ և դնում ավազով սկուտեղի մեջ՝ աղոթելով իրենց կամ սիրելիի համար։", "Войдя, люди зажигают тонкую свечу и ставят её в поднос с песком, молясь о себе или о близких.")),
    P(222, 166, t("Gavit", "Գավիթ", "Гавит"), t("The porch or hall at the western entrance. In large monasteries it was a separate building where meetings were held and princes were buried.", "Արևմտյան մուտքի նախասրահը կամ դահլիճը։ Մեծ վանքերում այն առանձին շենք էր, որտեղ ժողովներ էին անցկացվում և իշխաններ էին թաղվում։", "Притвор или зал у западного входа. В больших монастырях это было отдельное здание, где проходили собрания и хоронили князей.")),
  ],
};

/* ---------------- grade 9: the church year ---------------- */

const DOY = (d: number) => -Math.PI / 2 + (2 * Math.PI * d) / 365;
const WP = (d: number, r: number) => [160 + r * Math.cos(DOY(d)), 108 + r * Math.sin(DOY(d))];
const WArc = (d1: number, d2: number, r: number) => {
  const [x1, y1] = WP(d1, r);
  const [x2, y2] = WP(d2, r);
  return `M${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2}`;
};
const MONTHS: Tr[] = [
  t("Jan", "հնվ", "янв"), t("Feb", "փտր", "фев"), t("Mar", "մրտ", "мар"), t("Apr", "ապր", "апр"), t("May", "մյս", "май"), t("Jun", "հնս", "июн"),
  t("Jul", "հլս", "июл"), t("Aug", "օգս", "авг"), t("Sep", "սպտ", "сен"), t("Oct", "հկտ", "окт"), t("Nov", "նյմ", "ноя"), t("Dec", "դկտ", "дек"),
];
const FEASTS: Array<[number, number, Tr, string, number]> = [
  [6, 6, t("Christmas|6 January", "Սուրբ Ծնունդ|հունվարի 6", "Рождество|6 января"), "#b45309", 1],
  [45, 45, t("Trndez|14 February", "Տյառնընդառաջ|փետրվարի 14", "Трндез|14 февраля"), "#ea580c", 1],
  [81, 115, t("Easter", "Զատիկ", "Пасха"), "#e11d48", 1],
  [179, 213, t("Vardavar", "Վարդավառ", "Вардавар"), "#0284c7", 1],
  [227, 227, t("Dormition", "Վերափոխում", "Успение"), "#7c3aed", 1],
  [257, 257, t("Khachverats", "Խաչվերաց", "Хачверац"), "#047857", 1],
];

const calendar: Diagram = {
  title: t("The church year: the great feasts", "Եկեղեցական տարին՝ տաղավար տոները", "Церковный год: великие праздники"),
  h: 216,
  draw: (lang) => (
    <g>
      <circle cx="160" cy="108" r="78" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="10" />
      {MONTHS.map((m, k) => {
        const d = k * 30.4;
        const [x1, y1] = WP(d, 73);
        const [x2, y2] = WP(d, 83);
        const [tx, ty] = WP(d + 15.2, 62);
        return (
          <g key={k}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="1.6" />
            <Tx x={tx} y={ty + 2.5} s={m} lang={lang} size={6} fill="#94a3b8" w={700} />
          </g>
        );
      })}
      {FEASTS.map(([d1, d2, name, c], k) => {
        const mid = (d1 + d2) / 2;
        const [lx, ly] = WP(mid, 100);
        const right = Math.cos(DOY(mid)) > 0.25;
        const left = Math.cos(DOY(mid)) < -0.25;
        return (
          <g key={k}>
            {d1 === d2 ? <circle cx={WP(d1, 78)[0]} cy={WP(d1, 78)[1]} r="6" fill={c} stroke="#fff" strokeWidth="1.6" /> : <path d={WArc(d1, d2, 78)} stroke={c} strokeWidth="10" fill="none" strokeLinecap="round" />}
            <Tx x={lx} y={ly + (ly < 108 ? -2 : 6)} s={name} lang={lang} size={6.6} fill={c} anchor={right ? "start" : left ? "end" : "middle"} />
          </g>
        );
      })}
      <Tx x={160} y={104} s={t("movable feasts", "շարժական տոներ", "переходящие")} lang={lang} size={6.4} fill="#e11d48" />
      <Tx x={160} y={116} s={t("follow Easter", "կախված են Զատկից", "зависят от Пасхи")} lang={lang} size={6.4} fill="#475569" w={600} />
    </g>
  ),
  parts: [
    P(WP(6, 78)[0] + 10, WP(6, 78)[1] + 4, t("Christmas and Theophany", "Սուրբ Ծնունդ և Աստվածհայտնություն", "Рождество и Богоявление"), t("6 January: the birth and the baptism of Christ celebrated together, as all Christians did in the first centuries. After the liturgy comes the blessing of water.", "Հունվարի 6՝ Քրիստոսի ծնունդն ու մկրտությունը միասին, ինչպես բոլոր քրիստոնյաները նշում էին առաջին դարերում։ Պատարագից հետո կատարվում է ջրօրհնեք։", "6 января: рождение и крещение Христа празднуют вместе, как все христиане в первые века. После литургии совершают водосвятие.")),
    P(WP(45, 78)[0] + 10, WP(45, 78)[1] + 4, t("Trndez", "Տյառնընդառաջ", "Трндез"), t("The Presentation of the infant Jesus in the Temple, forty days after his birth. On the eve a bonfire is lit and young couples jump over it.", "Մանուկ Հիսուսի ընծայումը տաճարին՝ ծնվելուց քառասուն օր անց։ Նախօրեին խարույկ են վառում, և երիտասարդ զույգերը ցատկում են նրա վրայով։", "Сретение младенца Иисуса в Храме, через сорок дней после рождения. Накануне разжигают костёр, и молодые пары прыгают через него.")),
    P(WP(98, 78)[0] + 10, WP(98, 78)[1] + 6, t("Easter", "Զատիկ", "Пасха"), t("The greatest feast, on a Sunday between 22 March and 25 April. Great Lent before it and the feasts after it move with it.", "Ամենամեծ տոնը՝ կիրակի օրը մարտի 22-ից ապրիլի 25-ն ընկած ժամանակահատվածում։ Նրան նախորդող Մեծ պահքը և հաջորդող տոները շարժվում են նրա հետ։", "Величайший праздник, в воскресенье между 22 марта и 25 апреля. Великий пост перед ним и праздники после него движутся вместе с ним.")),
    P(WP(196, 78)[0] - 12, WP(196, 78)[1] + 4, t("Vardavar", "Վարդավառ", "Вардавар"), t("The Transfiguration, 98 days after Easter, so always between late June and early August. The best-loved summer custom is splashing water.", "Պայծառակերպությունը՝ Զատկից 98 օր անց, ուստի միշտ հունիսի վերջից օգոստոսի սկիզբն ընկած ժամանակահատվածում։ Ամենասիրված ամառային սովորույթը ջուր լցնելն է։", "Преображение, через 98 дней после Пасхи, поэтому всегда между концом июня и началом августа. Самый любимый летний обычай — обливаться водой.")),
    P(WP(227, 78)[0] - 12, WP(227, 78)[1] - 2, t("Dormition", "Վերափոխում", "Успение"), t("The falling asleep of the Mother of God, on the Sunday nearest 15 August. The first grapes of the year are blessed.", "Աստվածածնի Վերափոխումը՝ օգոստոսի 15-ին ամենամոտ կիրակի օրը։ Օրհնում են տարվա առաջին խաղողը։", "Успение Богородицы, в воскресенье, ближайшее к 15 августа. Освящают первый виноград года.")),
    P(WP(257, 78)[0] - 12, WP(257, 78)[1] - 4, t("Khachverats", "Խաչվերաց", "Хачверац"), t("The Exaltation of the Cross, on the Sunday nearest 14 September: the return of the Holy Cross to Jerusalem.", "Խաչվերացը՝ սեպտեմբերի 14-ին ամենամոտ կիրակի օրը․ Սուրբ Խաչի վերադարձն Երուսաղեմ։", "Воздвижение Креста, в воскресенье, ближайшее к 14 сентября: возвращение Святого Креста в Иерусалим.")),
  ],
};

/* ---------------- grade 9: how a khachkar is built ---------------- */

const khachkar: Diagram = {
  title: t("Reading a khachkar", "Ինչպես կարդալ խաչքարը", "Как читать хачкар"),
  h: 204,
  draw: (lang) => (
    <g>
      <path d="M112,196 V24 q0,-12 12,-12 h72 q12,0 12,12 V196 Z" fill="#e7e5e4" stroke="#78716c" strokeWidth="2" />
      {/* the ornamental border */}
      <path d="M120,188 V28 q0,-8 8,-8 h64 q8,0 8,8 V188 Z" fill="none" stroke="#a8a29e" strokeWidth="6" strokeDasharray="4 3" />
      <rect x="126" y="26" width="68" height="132" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="1" />
      {/* the cross with flared, budding ends */}
      <path d="M160,38 V112 M136,62 H184" stroke="#57534e" strokeWidth="7" strokeLinecap="round" />
      {[[160, 34], [132, 62], [188, 62]].map(([x, y]) => <g key={x + y}><circle cx={x - 3.5} cy={y} r="3" fill="#57534e" /><circle cx={x + 3.5} cy={y} r="3" fill="#57534e" /><circle cx={x} cy={y - 3.5} r="3" fill="#57534e" /></g>)}
      {/* tree of life: leaves growing from the foot */}
      <path d="M160,112 C150,116 140,112 134,104 M160,112 C170,116 180,112 186,104" stroke="#15803d" strokeWidth="2" fill="none" />
      {[[136, 100, -30], [184, 100, 30], [146, 112, -60], [174, 112, 60]].map(([x, y, r], k) => <ellipse key={k} cx={x} cy={y} rx="6" ry="3" transform={`rotate(${r} ${x} ${y})`} fill="#86efac" stroke="#15803d" strokeWidth="0.8" />)}
      {/* eternity sign */}
      <circle cx="160" cy="136" r="15" fill="#fff" stroke="#57534e" strokeWidth="1.4" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((k) => {
        const a = (k * Math.PI) / 4;
        const x1 = 160 + 3 * Math.cos(a);
        const y1 = 136 + 3 * Math.sin(a);
        const x2 = 160 + 14 * Math.cos(a + 0.9);
        const y2 = 136 + 14 * Math.sin(a + 0.9);
        return <path key={k} d={`M${x1},${y1} Q${160 + 12 * Math.cos(a)},${136 + 12 * Math.sin(a)} ${x2},${y2}`} stroke="#b45309" strokeWidth="1.6" fill="none" />;
      })}
      {/* inscription */}
      {[166, 172, 178].map((y) => <path key={y} d={`M130,${y} h${y === 178 ? 40 : 60}`} stroke="#78716c" strokeWidth="1.6" strokeDasharray="3 1.5" />)}
      {/* labels */}
      <Tx x={104} y={64} s={t("cross", "խաչ", "крест")} lang={lang} size={7} fill="#57534e" anchor="end" />
      <Tx x={104} y={108} s={t("tree of life", "կենաց ծառ", "древо жизни")} lang={lang} size={7} fill="#15803d" anchor="end" />
      <Tx x={216} y={139} s={t("eternity sign", "հավերժության նշան", "знак вечности")} lang={lang} size={7} fill="#b45309" anchor="start" />
      <Tx x={216} y={40} s={t("ornament", "զարդանախշ", "орнамент")} lang={lang} size={7} fill="#78716c" anchor="start" />
      <Tx x={216} y={176} s={t("inscription", "արձանագրություն", "надпись")} lang={lang} size={7} fill="#78716c" anchor="start" />
      <path d="M106,62 h24 M106,106 h28 M214,136 h-38 M214,38 h-18 M214,174 h-20" stroke="#cbd5e1" strokeWidth="1" />
    </g>
  ),
  parts: [
    P(196, 52, t("The cross", "Խաչը", "Крест"), t("Always in the centre, often with ends that open into buds or trefoils, as if the cross itself were flowering. It is a cross of life, not of death.", "Միշտ կենտրոնում է, հաճախ բողբոջների կամ եռաթերթերի վերածվող ծայրերով, կարծես խաչն ինքն է ծաղկում։ Դա կյանքի խաչ է, ոչ թե մահվան։", "Всегда в центре, часто с концами, раскрывающимися бутонами или трилистниками, словно сам крест цветёт. Это крест жизни, а не смерти.")),
    P(126, 120, t("Tree of life", "Կենաց ծառ", "Древо жизни"), t("Leaves and shoots grow from the foot of the cross: the Church teaches that through the cross Christ gives life, like the tree of life in paradise.", "Տերևներ և ընձյուղներ են աճում խաչի ստորոտից․ Եկեղեցին ուսուցանում է, որ խաչի միջոցով Քրիստոսը կյանք է տալիս, ինչպես դրախտի կենաց ծառը։", "Из подножия креста растут листья и побеги: Церковь учит, что через крест Христос дарует жизнь, как древо жизни в раю.")),
    P(178, 152, t("Eternity sign", "Հավերժության նշան", "Знак вечности"), t("A rosette of curved rays turning around a centre, an ancient Armenian sign of the sun, of endless movement and of eternity.", "Կենտրոնի շուրջ պտտվող կոր ճառագայթներով վարդյակ՝ արևի, անվերջ շարժման և հավերժության հին հայկական նշան։", "Розетка из изогнутых лучей, вращающихся вокруг центра, — древний армянский знак солнца, вечного движения и вечности.")),
    P(204, 24, t("Ornament", "Զարդանախշ", "Орнамент"), t("Bands of interlace and plant patterns fill the frame. On the finest khachkars, such as master Poghos's at Goshavank, the stone looks like lace.", "Հյուսկեն և բուսական նախշերի գոտիները լցնում են շրջանակը։ Լավագույն խաչքարերի վրա, ինչպես Պողոս վարպետինը Գոշավանքում, քարը ժանյակի տեսք ունի։", "Пояса плетёнки и растительных узоров заполняют рамку. На лучших хачкарах, как у мастера Погоса в Гошаванке, камень похож на кружево.")),
    P(204, 188, t("Inscription", "Արձանագրություն", "Надпись"), t("Usually at the bottom or on the edge: who set up the khachkar, in whose memory and in what year, often ending with a request to remember them in prayer.", "Սովորաբար ներքևում կամ եզրին․ ով է կանգնեցրել խաչքարը, ում հիշատակին և որ թվականին, հաճախ աղոթքում իրենց հիշելու խնդրանքով։", "Обычно внизу или по краю: кто поставил хачкар, в чью память и в каком году, часто с просьбой помянуть их в молитве.")),
  ],
};

/* ---------------- grade 10: the sermon of the iron ladle ---------------- */

const Ladle = ({ x, y, a, paper }: { x: number; y: number; a: number; paper?: boolean }) => (
  <g transform={`rotate(${a} ${x} ${y})`}>
    <rect x={x - 2} y={y - 70} width="4" height="62" rx="2" fill={paper ? "#f8fafc" : "#475569"} stroke={paper ? "#94a3b8" : "#1e293b"} strokeWidth="1" />
    <path d={paper ? `M${x - 9},${y - 8} q9,14 18,0 l-3,6 l-4,-3 l-3,5 l-3,-4 l-3,4 Z` : `M${x - 9},${y - 8} q9,16 18,0 Z`} fill={paper ? "#fff" : "#64748b"} stroke={paper ? "#94a3b8" : "#1e293b"} strokeWidth="1" />
  </g>
);

const ladle: Diagram = {
  title: t("Khrimian's sermon of the iron ladle (1878)", "Խրիմյանի «երկաթե շերեփի» քարոզը (1878)", "Проповедь Хримяна о железном половнике (1878)"),
  h: 190,
  draw: (lang) => (
    <g>
      {/* steam and cauldron */}
      {[130, 160, 190].map((x) => <path key={x} d={`M${x},58 q-6,-8 0,-16 q6,-8 0,-16`} stroke="#cbd5e1" strokeWidth="2" fill="none" />)}
      <path d="M94,92 h132 l-10,54 q-56,22 -112,0 Z" fill="#334155" />
      <ellipse cx="160" cy="92" rx="66" ry="12" fill="#fde68a" stroke="#1e293b" strokeWidth="2" />
      <path d="M118,166 l-8,14 M202,166 l8,14 M160,170 v12" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <path d="M130,182 q-6,-8 0,-12 q4,6 8,0 q4,6 0,12 Z M184,182 q-6,-8 0,-12 q4,6 8,0 q4,6 0,12 Z" fill="#f97316" />
      <Tx x={178} y={97} s={t("harissa", "հարիսա", "ариса")} lang={lang} size={6.6} fill="#92400e" />
      {/* iron ladles on the left, paper ladle on the right */}
      <Ladle x={114} y={96} a={-28} />
      <Ladle x={130} y={96} a={-14} />
      <Ladle x={146} y={96} a={-4} />
      <Ladle x={206} y={96} a={24} paper />
      <Tx x={46} y={14} s={t("iron ladles", "երկաթե շերեփներ", "железные половники")} lang={lang} size={7.4} fill="#334155" />
      <Tx x={46} y={25} s={t("Serbia, Montenegro,|Romania, Bulgaria", "Սերբիա, Չեռնոգորիա,|Ռումինիա, Բուլղարիա", "Сербия, Черногория,|Румыния, Болгария")} lang={lang} size={6} fill="#475569" w={600} />
      <Tx x={276} y={14} s={t("paper ladle", "թղթե շերեփ", "бумажный половник")} lang={lang} size={7.4} fill="#94a3b8" />
      <Tx x={276} y={25} s={t("the Armenians:|Article 61", "հայերը՝|61-րդ հոդված", "армяне:|статья 61")} lang={lang} size={6} fill="#475569" w={600} />
    </g>
  ),
  parts: [
    P(226, 104, t("The cauldron", "Կաթսան", "Котёл"), t("The Congress of Berlin of 1878, where the great powers shared out the results of the Russo-Turkish War, like harissa served from one big pot.", "1878 թվականի Բեռլինի վեհաժողովը, որտեղ մեծ տերությունները բաժանում էին ռուս-թուրքական պատերազմի արդյունքները, ինչպես մեկ մեծ կաթսայից բաժանվող հարիսան։", "Берлинский конгресс 1878 года, где великие державы делили итоги Русско-турецкой войны, как арису из одного большого котла.")),
    P(96, 58, t("Iron ladles", "Երկաթե շերեփներ", "Железные половники"), t("The Balkan peoples came with armies and with the backing of force. Serbia, Montenegro and Romania won independence, and Bulgaria a principality of its own.", "Բալկանյան ժողովուրդները եկել էին բանակներով և ուժի աջակցությամբ։ Սերբիան, Չեռնոգորիան և Ռումինիան անկախություն ստացան, իսկ Բուլղարիան՝ սեփական իշխանություն։", "Балканские народы пришли с армиями и опорой на силу. Сербия, Черногория и Румыния получили независимость, а Болгария — собственное княжество.")),
    P(232, 62, t("The paper ladle", "Թղթե շերեփը", "Бумажный половник"), t("Khrimian had only a petition. When he dipped his paper ladle into the pot, it got soaked and tore, and he came home empty-handed.", "Խրիմյանն ուներ միայն խնդրագիր։ Երբ նա իր թղթե շերեփը մտցրեց կաթսան, այն թրջվեց ու պատռվեց, և նա վերադարձավ դատարկաձեռն։", "У Хримяна была только петиция. Когда он опустил свой бумажный половник в котёл, тот размок и порвался, и он вернулся с пустыми руками.")),
    P(276, 52, t("Article 61", "61-րդ հոդված", "Статья 61"), t("The treaty only promised reforms in the Armenian provinces, to be watched over by the powers together. In practice no one made the sultan carry them out.", "Պայմանագիրը միայն խոստանում էր բարենորոգումներ հայկական նահանգներում, որոնց պետք է միասին հետևեին տերությունները։ Գործնականում ոչ ոք սուլթանին չստիպեց կատարել դրանք։", "Договор лишь обещал реформы в армянских провинциях под общим надзором держав. На деле никто не заставил султана их провести.")),
    P(186, 30, t("Hayrik's lesson", "Հայրիկի դասը", "Урок Айрика"), t("Back in Constantinople he told the people from the pulpit that promises on paper are not enough, and that a people must rely above all on its own strength and unity.", "Վերադառնալով Կոստանդնուպոլիս՝ նա ամբիոնից ասաց ժողովրդին, որ թղթի վրա խոստումները բավական չեն, և որ ժողովուրդը պետք է հույսը դնի առաջին հերթին իր ուժի և միասնության վրա։", "Вернувшись в Константинополь, он сказал с амвона народу, что бумажных обещаний мало и что народ должен полагаться прежде всего на свои силы и единство.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { bible, sixdays, patriarchs, tablets, evangelists, sower, holyweek, fifty, apostles, gregorids, churchtypes, monastery, sees, trinity, sacraments, churchplan, calendar, khachkar, ladle };
