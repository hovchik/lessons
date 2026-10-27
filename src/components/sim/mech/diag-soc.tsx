"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for social studies, grades 8–12. */

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

/* ---------------- grade 8: agents of socialisation ---------------- */

const AGENTS: Array<[number, number, Tr, string]> = [
  [160, 34, t("Family", "Ընտանիք", "Семья"), "#f59e0b"],
  [266, 82, t("School", "Դպրոց", "Школа"), "#4f46e5"],
  [238, 178, t("Peers", "Հասակակիցներ", "Сверстники"), "#10b981"],
  [82, 178, t("Media and|the internet", "ԶԼՄ և|համացանց", "СМИ и|интернет"), "#e11d48"],
  [54, 82, t("Religion, culture,|the state", "Կրոն, մշակույթ,|պետություն", "Религия, культура,|государство"), "#0891b2"],
];

const socialisation: Diagram = {
  title: t("Who shapes a personality", "Ովքեր են ձևավորում անձը", "Кто формирует личность"),
  draw: (lang) => (
    <g>
      {AGENTS.map(([x, y, , c], k) => <line key={k} x1={x} y1={y} x2="160" y2="116" stroke={c} strokeWidth="2" strokeDasharray="5 4" opacity="0.6" />)}
      <circle cx="160" cy="116" r="30" fill="#eef2ff" stroke="#4f46e5" strokeWidth="2" />
      <Head x={160} y={104} r={7} fill="#4f46e5" />
      <Tx x={160} y={160} s={t("Personality", "Անձ", "Личность")} lang={lang} size={9} fill="#3730a3" />
      {AGENTS.map(([x, y, name, c], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r="22" fill="#fff" stroke={c} strokeWidth="2" />
          {k === 0 ? (<g><Head x={x - 8} y={y - 6} r={4.5} fill={c} /><Head x={x + 7} y={y - 6} r={4.5} fill={c} /><Head x={x} y={y + 1} r={3} fill={c} /></g>) : null}
          {k === 1 ? (<g><path d={`M${x - 13},${y - 2} L${x},${y - 12} L${x + 13},${y - 2} Z`} fill={c} /><rect x={x - 11} y={y - 2} width="22" height="14" fill={c} /><rect x={x - 3} y={y + 4} width="6" height="8" fill="#fff" /></g>) : null}
          {k === 2 ? (<g><Head x={x - 7} y={y - 8} r={5} fill={c} /><Head x={x + 7} y={y - 8} r={5} fill={c} /></g>) : null}
          {k === 3 ? (<g><rect x={x - 7} y={y - 13} width="14" height="25" rx="2.5" fill={c} /><rect x={x - 5} y={y - 10} width="10" height="17" fill="#fff" /><path d={`M${x - 3},${y - 6} l6,3 l-6,3 Z`} fill={c} /></g>) : null}
          {k === 4 ? (<g><path d={`M${x - 12},${y - 6} L${x},${y - 13} L${x + 12},${y - 6} Z`} fill={c} />{[-8, -3, 2, 7].map((d) => <rect key={d} x={x + d} y={y - 5} width="3" height="14" fill={c} />)}<rect x={x - 12} y={y + 9} width="24" height="3" fill={c} /></g>) : null}
          <Tx x={x} y={k === 0 ? y - 26 : y + 31} s={name} lang={lang} size={7.5} fill="#1e293b" />
        </g>
      ))}
    </g>
  ),
  parts: [
    P(186, 30, t("Family", "Ընտանիք", "Семья"), t("The first and closest agent. Children usually say their first words at about one year old, and the language, habits and values they learn at home stay with them for life.", "Առաջին և ամենամոտ գործոնը։ Երեխաները սովորաբար իրենց առաջին բառերն ասում են մոտ մեկ տարեկանում, իսկ տանը սովորած լեզուն, սովորություններն ու արժեքները մնում են նրանց հետ ամբողջ կյանքում։", "Первый и самый близкий фактор. Обычно дети говорят первые слова примерно в год, а язык, привычки и ценности, усвоенные дома, остаются с ними на всю жизнь.")),
    P(292, 70, t("School", "Դպրոց", "Школа"), t("Twelve years of lessons, but also a timetable, rules, deadlines and working with people you did not choose. School is often the first place where a child is judged by the same rules as everyone else.", "Տասներկու տարվա դասեր, բայց նաև դասացուցակ, կանոններ, ժամկետներ և աշխատանք այն մարդկանց հետ, որոնց դու չես ընտրել։ Դպրոցը հաճախ առաջին վայրն է, որտեղ երեխային գնահատում են նույն կանոններով, ինչ բոլորին։", "Двенадцать лет уроков, а ещё расписание, правила, сроки и работа с людьми, которых ты не выбирал. Школа часто первое место, где ребёнка оценивают по тем же правилам, что и всех.")),
    P(264, 170, t("Peers", "Հասակակիցներ", "Сверстники"), t("In adolescence friends' opinions start to matter as much as parents'. With peers you learn to agree, argue, keep friendships and say no to group pressure.", "Պատանեկության տարիներին ընկերների կարծիքը սկսում է նույնքան կարևոր լինել, որքան ծնողներինը։ Հասակակիցների հետ սովորում ես համաձայնվել, վիճել, պահպանել ընկերությունը և «ոչ» ասել խմբի ճնշմանը։", "В подростковом возрасте мнение друзей начинает значить столько же, сколько мнение родителей. Со сверстниками учишься договариваться, спорить, сохранять дружбу и говорить «нет» давлению группы.")),
    P(56, 170, t("Media and the internet", "ԶԼՄ և համացանց", "СМИ и интернет"), t("They give information and role models, not always good ones. What you see in a feed is chosen by algorithms and advertisers, so it shows a selected world, not the whole one.", "Դրանք տեղեկատվություն և օրինակներ են տալիս, ոչ միշտ լավ։ Այն, ինչ տեսնում ես լրահոսում, ընտրում են ալգորիթմներն ու գովազդատուները, ուստի այն ցույց է տալիս ընտրված, այլ ոչ թե ամբողջ աշխարհը։", "Они дают информацию и примеры для подражания, не всегда хорошие. То, что ты видишь в ленте, отбирают алгоритмы и рекламодатели, поэтому она показывает отобранный, а не весь мир.")),
    P(28, 70, t("Religion, culture, the state", "Կրոն, մշակույթ, պետություն", "Религия, культура, государство"), t("Traditions, holidays and laws: Vardavar, a passport at 16, the rules of the road. They pass on what a whole people has learned over centuries.", "Ավանդույթներ, տոներ և օրենքներ՝ Վարդավառ, անձնագիր 16 տարեկանում, ճանապարհային երթևեկության կանոններ։ Դրանք փոխանցում են այն, ինչ ամբողջ ժողովուրդը սովորել է դարերի ընթացքում։", "Традиции, праздники и законы: Вардавар, паспорт в 16 лет, правила дорожного движения. Они передают то, чему целый народ научился за века.")),
    P(186, 128, t("Socialisation never ends", "Սոցիալականացումը չի ավարտվում", "Социализация не кончается"), t("A new job, moving to another country, becoming a parent or a grandparent: each time a person learns new rules and roles. Sociologists call this adult or secondary socialisation.", "Նոր աշխատանք, տեղափոխություն այլ երկիր, ծնող կամ պապ ու տատ դառնալ․ ամեն անգամ մարդը սովորում է նոր կանոններ և դերեր։ Սոցիոլոգներն սա անվանում են մեծահասակների կամ երկրորդային սոցիալականացում։", "Новая работа, переезд в другую страну, рождение ребёнка или внуков: каждый раз человек усваивает новые правила и роли. Социологи называют это вторичной социализацией, или социализацией взрослых.")),
  ],
};

/* ---------------- grade 8: Maslow's pyramid ---------------- */

const MASLOW: Array<[Tr, string]> = [
  [t("Physiological", "Ֆիզիոլոգիական", "Физиологические"), "#f59e0b"],
  [t("Safety", "Անվտանգություն", "Безопасность"), "#10b981"],
  [t("Belonging, love", "Պատկանելություն, սեր", "Принадлежность, любовь"), "#0891b2"],
  [t("Esteem", "Հարգանք, ճանաչում", "Уважение, признание"), "#4f46e5"],
  [t("Self-actualisation", "Ինքնիրացում", "Самореализация"), "#e11d48"],
];

const maslow: Diagram = {
  title: t("Maslow's pyramid of needs", "Մասլոուի պահանջմունքների բուրգը", "Пирамида потребностей Маслоу"),
  draw: (lang) => {
    const half = (y: number) => (86 * (y - 16)) / 184;
    return (
      <g>
        {MASLOW.map(([name, c], k) => {
          const y0 = 200 - k * 36.8, y1 = y0 - 36.8;
          return (
            <g key={k}>
              <path d={`M${100 - half(y0)},${y0} L${100 + half(y0)},${y0} L${100 + half(y1)},${y1} L${100 - half(y1)},${y1} Z`} fill={c} opacity="0.85" stroke="#fff" strokeWidth="2" />
              <line x1={100 + half(y0 - 18.4) + 4} y1={y0 - 18.4} x2="196" y2={y0 - 18.4} stroke={c} strokeWidth="1" strokeDasharray="2 2" />
              <text x="200" y={y0 - 15.5} fontSize="8" fontWeight="900" fill={c}>{k + 1}</text>
              <Tx x={210} y={y0 - 15.5} s={name} lang={lang} size={7.5} anchor="start" fill="#1e293b" />
            </g>
          );
        })}
        <path d="M6,198 V30" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#soc-up)" />
        <defs><marker id="soc-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b" /></marker></defs>
        <Tx x={14} y={214} s={t("Usually met from the bottom up", "Սովորաբար բավարարվում են ներքևից վերև", "Обычно удовлетворяются снизу вверх")} lang={lang} size={7} anchor="start" fill="#475569" w={700} />
      </g>
    );
  },
  parts: [
    P(100, 182, t("Physiological", "Ֆիզիոլոգիական", "Физиологические"), t("Food, water, sleep, warmth. Sleep doctors advise teenagers to sleep 8 to 10 hours a night; a hungry or exhausted pupil finds it hard to think about anything else.", "Սնունդ, ջուր, քուն, ջերմություն։ Քնի բժիշկները դեռահասներին խորհուրդ են տալիս քնել գիշերը 8-ից 10 ժամ․ քաղցած կամ ուժասպառ աշակերտի համար դժվար է մտածել որևէ այլ բանի մասին։", "Еда, вода, сон, тепло. Врачи по сну советуют подросткам спать 8–10 часов в сутки; голодному или измотанному ученику трудно думать о чём-то другом.")),
    P(100, 145, t("Safety", "Անվտանգություն", "Безопасность"), t("Feeling safe at home, at school and in the street, plus health and a steady income. A child who is afraid, for example of bullies, learns worse: safety comes before marks.", "Անվտանգ զգալ տանը, դպրոցում և փողոցում, ինչպես նաև առողջություն և կայուն եկամուտ։ Վախեցած երեխան, օրինակ՝ բուլինգից, ավելի վատ է սովորում․ անվտանգությունը գնահատականներից առաջ է։", "Чувство безопасности дома, в школе и на улице, а также здоровье и стабильный доход. Ребёнок, который боится, например обидчиков, учится хуже: безопасность важнее оценок.")),
    P(100, 108, t("Belonging and love", "Պատկանելություն և սեր", "Принадлежность и любовь"), t("Family, friends, a team, a class. Wanting to belong is so strong that it explains why group pressure works: people often agree with a group just so as not to be left out.", "Ընտանիք, ընկերներ, թիմ, դասարան։ Պատկանելու ցանկությունն այնքան ուժեղ է, որ բացատրում է, թե ինչու է խմբի ճնշումն աշխատում․ մարդիկ հաճախ համաձայնում են խմբի հետ, միայն թե դուրս չմնան։", "Семья, друзья, команда, класс. Желание принадлежать так сильно, что объясняет, почему работает давление группы: люди часто соглашаются с группой, лишь бы не остаться в стороне.")),
    P(100, 72, t("Esteem", "Հարգանք", "Уважение"), t("Respect from others and self-respect: being recognised for what you do. Maslow called the four lower levels deficiency needs: we feel them most when they are missing.", "Ուրիշների հարգանքը և ինքնահարգանքը՝ ճանաչում քո արածի համար։ Ստորին չորս մակարդակները Մասլոուն անվանել է պակասի պահանջմունքներ․ մենք դրանք ամենաշատն զգում ենք, երբ դրանք բացակայում են։", "Уважение других и самоуважение: признание того, что ты делаешь. Четыре нижних уровня Маслоу назвал потребностями дефицита: мы сильнее всего чувствуем их, когда их не хватает.")),
    P(100, 40, t("Self-actualisation", "Ինքնիրացում", "Самореализация"), t("\"What a man can be, he must be,\" wrote Maslow in 1943: a musician must make music, an artist must paint. This need does not disappear when it is met; it grows.", "«Ինչ մարդը կարող է լինել, նա պետք է լինի»,- գրել է Մասլոուն 1943 թվականին․ երաժիշտը պետք է երաժշտություն ստեղծի, նկարիչը՝ նկարի։ Այս պահանջմունքը բավարարվելիս չի անհետանում, այլ մեծանում է։", "«Кем человек может быть, тем он должен быть», — писал Маслоу в 1943 году: музыкант должен сочинять музыку, художник — писать картины. Эта потребность не исчезает, когда удовлетворена, а растёт.")),
  ],
};

/* ---------------- grade 8: Armenia's education path ---------------- */

const EDU: Array<[Tr, number, number, string]> = [
  [t("Pre-school", "Նախադպրոցական", "Дошкольное"), 2, 6, "#f59e0b"],
  [t("Primary 1–4", "Տարրական 1–4", "Начальная 1–4"), 6, 10, "#10b981"],
  [t("Basic 5–9", "Հիմնական 5–9", "Основная 5–9"), 10, 15, "#0891b2"],
  [t("High 10–12", "Ավագ 10–12", "Старшая 10–12"), 15, 18, "#4f46e5"],
  [t("College", "Քոլեջ", "Колледж"), 15, 19, "#7c3aed"],
  [t("Bachelor's", "Բակալավր", "Бакалавриат"), 18, 22, "#e11d48"],
  [t("Master's", "Մագիստրատուրա", "Магистратура"), 22, 24, "#be123c"],
  [t("Postgraduate", "Ասպիրանտուրա", "Аспирантура"), 24, 27, "#9f1239"],
];

const eduarm: Diagram = {
  title: t("Armenia's education path, by age", "Կրթության ուղին Հայաստանում՝ ըստ տարիքի", "Путь образования в Армении по возрасту"),
  draw: (lang) => {
    const X = (age: number) => 104 + (age - 2) * 8.2;
    return (
      <g>
        {/* compulsory: 12 years, from 6 to 18 */}
        <rect x={X(6)} y="8" width={X(18) - X(6)} height="116" fill="#fef3c7" />
        <Tx x={(X(6) + X(18)) / 2} y={18} s={t("Compulsory since 2017", "Պարտադիր 2017 թվականից", "Обязательно с 2017 года")} lang={lang} size={7} fill="#92400e" />
        {EDU.map(([name, a, b, c], k) => (
          <g key={k}>
            <Tx x={98} y={36 + k * 20} s={name} lang={lang} size={7.5} anchor="end" fill="#1e293b" />
            <rect x={X(a)} y={27 + k * 20} width={X(b) - X(a)} height="13" rx="3" fill={c} opacity={k === 4 ? 0.7 : 0.9} />
          </g>
        ))}
        <line x1={X(2)} y1="190" x2={X(27)} y2="190" stroke="#64748b" />
        {[2, 6, 10, 15, 18, 22, 24, 27].map((a) => (
          <g key={a}>
            <line x1={X(a)} y1="190" x2={X(a)} y2="194" stroke="#64748b" />
            <text x={X(a)} y="203" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#475569">{a}</text>
          </g>
        ))}
        <Tx x={X(27)} y={214} s={t("age, years", "տարիք, տարի", "возраст, лет")} lang={lang} size={7} anchor="end" fill="#64748b" w={700} />
      </g>
    );
  },
  parts: [
    P(124, 33, t("Pre-school", "Նախադպրոցական", "Дошкольное"), t("Kindergarten up to age 6. Children learn through play: speaking, counting, drawing and getting along in a group.", "Մանկապարտեզ մինչև 6 տարեկանը։ Երեխաները սովորում են խաղի միջոցով՝ խոսել, հաշվել, նկարել և յոլա գնալ խմբում։", "Детский сад до 6 лет. Дети учатся через игру: говорить, считать, рисовать и ладить в группе.")),
    P(153, 53, t("Primary school", "Տարրական դպրոց", "Начальная школа"), t("Grades 1 to 4, starting at 6. Reading, writing and arithmetic, the base for everything that follows.", "1-ից 4-րդ դասարաններ՝ 6 տարեկանից։ Կարդալ, գրել, թվաբանություն՝ հիմքը այն ամենի, ինչ հաջորդում է։", "Классы с 1 по 4, с 6 лет. Чтение, письмо и арифметика — основа всего, что дальше.")),
    P(190, 73, t("Basic school", "Հիմնական դպրոց", "Основная школа"), t("Grades 5 to 9. After grade 9 a pupil can go on to high school or to a college that teaches a profession.", "5-ից 9-րդ դասարաններ։ 9-րդ դասարանից հետո աշակերտը կարող է շարունակել ավագ դպրոցում կամ քոլեջում, որը մասնագիտություն է տալիս։", "Классы с 5 по 9. После 9 класса можно пойти в старшую школу или в колледж, который даёт профессию.")),
    P(223, 93, t("High school", "Ավագ դպրոց", "Старшая школа"), t("Grades 10 to 12, with streams such as science and maths or humanities. It ends with final exams that also count for university entry.", "10-ից 12-րդ դասարաններ՝ հոսքերով, օրինակ՝ բնագիտամաթեմատիկական կամ հումանիտար։ Այն ավարտվում է ավարտական քննություններով, որոնք հաշվվում են նաև բուհ ընդունվելիս։", "Классы с 10 по 12, с профилями, например естественно-математическим или гуманитарным. Она заканчивается выпускными экзаменами, которые засчитываются и при поступлении в вуз.")),
    P(229, 113, t("College", "Քոլեջ", "Колледж"), t("Vocational education after grade 9 or 12: nurse, programmer, cook, electrician. Since 2017 college counts as completing compulsory secondary education too.", "Մասնագիտական կրթություն 9-րդ կամ 12-րդ դասարանից հետո՝ բուժքույր, ծրագրավորող, խոհարար, էլեկտրիկ։ 2017 թվականից քոլեջը նույնպես համարվում է պարտադիր միջնակարգ կրթության ավարտ։", "Профессиональное образование после 9 или 12 класса: медсестра, программист, повар, электрик. С 2017 года колледж тоже считается получением обязательного среднего образования.")),
    P(252, 133, t("University", "Համալսարան", "Университет"), t("A bachelor's degree usually takes 4 years, a master's 1 to 2 more. Postgraduate study leads to a research degree: a candidate of sciences in Armenia.", "Բակալավրի կոչումը սովորաբար տևում է 4 տարի, մագիստրոսինը՝ ևս 1-2 տարի։ Ասպիրանտուրան տանում է գիտական աստիճանի՝ Հայաստանում գիտությունների թեկնածուի։", "Бакалавриат обычно длится 4 года, магистратура — ещё 1–2. Аспирантура ведёт к учёной степени: в Армении это кандидат наук.")),
  ],
};

/* ---------------- grade 8: one person, many statuses ---------------- */

const ROLES: Array<[number, number, Tr, Tr, string]> = [
  [14, 22, t("Pupil", "Աշակերտ", "Ученик"), t("does homework", "անում է տնայինը", "делает уроки"), "#4f46e5"],
  [226, 22, t("Team captain", "Թիմի ավագ", "Капитан команды"), t("leads the team", "առաջնորդում է թիմը", "ведёт команду"), "#10b981"],
  [14, 168, t("Son", "Որդի", "Сын"), t("helps his parents", "օգնում է ծնողներին", "помогает родителям"), "#f59e0b"],
  [226, 168, t("Older brother", "Ավագ եղբայր", "Старший брат"), t("looks after his sister", "հոգ է տանում քրոջ մասին", "присматривает за сестрой"), "#0891b2"],
  [120, 184, t("Citizen", "Քաղաքացի", "Гражданин"), t("obeys the laws", "պահում է օրենքները", "соблюдает законы"), "#64748b"],
];

const roles: Diagram = {
  title: t("One person, many statuses", "Մեկ մարդ՝ շատ կարգավիճակներ", "Один человек, много статусов"),
  draw: (lang) => (
    <g>
      {ROLES.map(([x, y, , , c], k) => <line key={k} x1={x + 40} y1={y + 14} x2="160" y2="110" stroke={c} strokeWidth="1.5" opacity="0.5" />)}
      <circle cx="160" cy="110" r="26" fill="#f8fafc" stroke="#94a3b8" />
      <Head x={160} y={98} r={8} fill="#334155" />
      {ROLES.map(([x, y, name, role, c], k) => (
        <g key={k}>
          <rect x={x} y={y} width="80" height="30" rx="7" fill="#fff" stroke={c} strokeWidth="1.8" />
          <Tx x={x + 40} y={y + 13} s={name} lang={lang} size={8} fill={c} />
          <Tx x={x + 40} y={y + 24} s={role} lang={lang} size={6} fill="#475569" w={700} />
        </g>
      ))}
      {/* the match and the exam fall on the same day */}
      <path d="M96,37 L120,30 L114,40 L138,33 L132,43 L224,37" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinejoin="round" />
      <Tx x={160} y={58} s={t("Role conflict", "Դերային կոնֆլիկտ", "Ролевой конфликт")} lang={lang} size={8} fill="#e11d48" />
      <Tx x={160} y={68} s={t("exam and final on one day", "քննությունն ու եզրափակիչը՝ նույն օրը", "экзамен и финал в один день")} lang={lang} size={6} fill="#be123c" w={700} />
    </g>
  ),
  parts: [
    P(186, 96, t("Status and role", "Կարգավիճակ և դեր", "Статус и роль"), t("A status is a position; a role is the behaviour expected from it. The same boy has five statuses on this picture, and each comes with its own expectations.", "Կարգավիճակը դիրք է, իսկ դերը՝ դրանից սպասվող վարքը։ Այս նկարում նույն տղան ունի հինգ կարգավիճակ, և յուրաքանչյուրն ունի իր սպասելիքները։", "Статус — это положение, а роль — ожидаемое от него поведение. У одного и того же мальчика на картинке пять статусов, и у каждого свои ожидания.")),
    P(94, 182, t("Ascribed status", "Վերագրված կարգավիճակ", "Предписанный статус"), t("Some statuses come with birth: son, brother, a nationality, an age. In 1936 the American anthropologist Ralph Linton called them ascribed.", "Որոշ կարգավիճակներ տրվում են ծնվելիս՝ որդի, եղբայր, ազգություն, տարիք։ 1936 թվականին ամերիկացի մարդաբան Ռալֆ Լինտոնն անվանեց դրանք վերագրված։", "Некоторые статусы даются с рождением: сын, брат, национальность, возраст. В 1936 году американский антрополог Ральф Линтон назвал их предписанными.")),
    P(306, 22, t("Achieved status", "Ձեռքբերովի կարգավիճակ", "Достигаемый статус"), t("Others are earned by your own effort: team captain, prize-winner, doctor. A person cannot choose their parents, but can choose what to become.", "Մյուսները վաստակվում են սեփական ջանքերով՝ թիմի ավագ, մրցանակակիր, բժիշկ։ Մարդը չի կարող ընտրել իր ծնողներին, բայց կարող է ընտրել, թե ինչ դառնա։", "Другие зарабатываются собственными усилиями: капитан команды, призёр, врач. Человек не выбирает родителей, но может выбрать, кем стать.")),
    P(176, 34, t("Role conflict", "Դերային կոնֆլիկտ", "Ролевой конфликт"), t("The exam needs the pupil, the final needs the captain. Talking to the teacher and the coach in advance is usually better than letting both down at the last minute.", "Քննությանը պետք է աշակերտը, եզրափակիչին՝ թիմի ավագը։ Ուսուցչի և մարզչի հետ նախապես խոսելը սովորաբար ավելի լավ է, քան վերջին պահին երկուսին էլ հիասթափեցնելը։", "Экзамену нужен ученик, финалу — капитан. Обычно лучше заранее поговорить с учителем и тренером, чем в последний момент подвести обоих.")),
    P(208, 184, t("Citizen", "Քաղաքացի", "Гражданин"), t("A status everyone in the country shares. Its role grows with age: at 16 you get a passport, at 18 you can vote.", "Կարգավիճակ, որը կիսում են երկրի բոլոր բնակիչները։ Նրա դերը տարիքի հետ մեծանում է․ 16 տարեկանում ստանում ես անձնագիր, 18-ում կարող ես քվեարկել։", "Статус, общий для всех в стране. Его роль растёт с возрастом: в 16 лет получаешь паспорт, в 18 можешь голосовать.")),
  ],
};

/* ---------------- grade 8: the Thomas–Kilmann styles ---------------- */

const TKI: Array<[number, number, Tr, Tr, string]> = [
  [74, 40, t("Competing", "Մրցակցություն", "Соперничество"), t("I win, you lose", "ես հաղթում եմ", "я выигрываю"), "#e11d48"],
  [246, 40, t("Collaborating", "Համագործակցություն", "Сотрудничество"), t("both win", "երկուսն էլ հաղթում են", "выигрывают оба"), "#10b981"],
  [160, 100, t("Compromising", "Փոխզիջում", "Компромисс"), t("half each", "կիսով չափ", "по половине"), "#f59e0b"],
  [74, 160, t("Avoiding", "Խուսափում", "Избегание"), t("the problem stays", "խնդիրը մնում է", "проблема остаётся"), "#64748b"],
  [246, 160, t("Accommodating", "Զիջում", "Приспособление"), t("you win", "դու հաղթում ես", "ты выигрываешь"), "#0891b2"],
];

const tki: Diagram = {
  title: t("Five ways to handle a conflict", "Կոնֆլիկտում վարվելու հինգ ձև", "Пять способов вести себя в конфликте"),
  draw: (lang) => (
    <g>
      <defs><marker id="tki-h" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569" /></marker></defs>
      <rect x="22" y="12" width="290" height="180" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
      <line x1="22" y1="192" x2="312" y2="192" stroke="#475569" strokeWidth="1.5" markerEnd="url(#tki-h)" />
      <line x1="22" y1="192" x2="22" y2="12" stroke="#475569" strokeWidth="1.5" markerEnd="url(#tki-h)" />
      <Tx x={312} y={206} s={t("Caring about the other →", "Հոգ ուրիշի շահի մասին →", "Забота об интересах другого →")} lang={lang} size={7.5} anchor="end" fill="#334155" />
      <g transform="translate(13,192) rotate(-90)"><Tx x={0} y={0} s={t("Caring about my goal →", "Հոգ իմ շահի մասին →", "Забота о своих интересах →")} lang={lang} size={7.5} anchor="start" fill="#334155" /></g>
      {TKI.map(([x, y, name, res, c], k) => (
        <g key={k}>
          <rect x={x - 54} y={y - 18} width="108" height="34" rx="8" fill="#fff" stroke={c} strokeWidth="2" />
          <Tx x={x} y={y - 3} s={name} lang={lang} size={L(name, lang).length > 14 ? 7 : 8.5} fill={c} />
          <Tx x={x} y={y + 9} s={res} lang={lang} size={6.5} fill="#475569" w={700} />
        </g>
      ))}
    </g>
  ),
  parts: [
    P(128, 24, t("Competing", "Մրցակցություն", "Соперничество"), t("\"I'm older, the computer is mine tonight.\" Useful in an emergency or when you must stand up for what is right, but used all the time it ruins relationships.", "«Ես ավագն եմ, այսօր համակարգիչն իմն է»։ Օգտակար է արտակարգ իրավիճակում կամ երբ պետք է պաշտպանել ճիշտը, բայց միշտ կիրառվելիս քանդում է հարաբերությունները։", "«Я старше, сегодня компьютер мой». Полезно в чрезвычайной ситуации или когда нужно отстоять правду, но если так поступать всегда, отношения портятся.")),
    P(300, 24, t("Collaborating", "Համագործակցություն", "Сотрудничество"), t("You ask why. Your sister needs the computer for a project due tomorrow, you want to play: she works first, you play after. It takes the most time and trust, and both get what really matters.", "Հարցնում ես՝ ինչու։ Քրոջդ համակարգիչը պետք է վաղվա նախագծի համար, իսկ դու ուզում ես խաղալ․ նա աշխատում է առաջինը, դու խաղում ես հետո։ Սա ամենաշատ ժամանակն ու վստահությունն է պահանջում, և երկուսն էլ ստանում են իսկապես կարևորը։", "Ты спрашиваешь «зачем?». Сестре компьютер нужен для проекта к завтрашнему дню, а ты хочешь поиграть: сначала работает она, потом играешь ты. Это требует больше всего времени и доверия, зато оба получают то, что действительно важно.")),
    P(214, 84, t("Compromising", "Փոխզիջում", "Компромисс"), t("An hour each. Quick and looks fair, but each gets only half of what they wanted, and nobody asked why.", "Յուրաքանչյուրին՝ մեկ ժամ։ Արագ է և արդար տեսք ունի, բայց յուրաքանչյուրը ստանում է ուզածի միայն կեսը, և ոչ ոք չհարցրեց՝ ինչու։", "По часу каждому. Быстро и выглядит справедливо, но каждый получает лишь половину желаемого, и никто не спросил «зачем?».")),
    P(128, 144, t("Avoiding", "Խուսափում", "Избегание"), t("Both sulk and say nothing. Wise for a short while, to calm down, or when the matter is trivial; otherwise the problem only grows.", "Երկուսն էլ նեղացած լռում են։ Իմաստուն է կարճ ժամանակով՝ հանգստանալու համար, կամ երբ հարցը չնչին է․ այլապես խնդիրը միայն մեծանում է։", "Оба дуются и молчат. Разумно ненадолго, чтобы остыть, или когда вопрос пустяковый; иначе проблема только растёт.")),
    P(300, 144, t("Accommodating", "Զիջում", "Приспособление"), t("\"Fine, take it.\" Good when the matter means much more to the other person, or when you were wrong. If you always give in, your own needs are never met.", "«Լավ, վերցրու»։ Լավ է, երբ հարցը շատ ավելի կարևոր է մյուսի համար, կամ երբ դու սխալ էիր։ Եթե միշտ զիջես, քո սեփական կարիքները երբեք չեն բավարարվի։", "«Ладно, бери». Хорошо, когда вопрос гораздо важнее для другого или когда ты был неправ. Если уступать всегда, твои собственные потребности никогда не будут учтены.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { socialisation, maslow, eduarm, roles, tki };
