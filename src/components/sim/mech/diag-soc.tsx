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

/* ---------------- grade 9: who chooses whom ---------------- */

const Box = ({ x, y, w = 84, h = 24, s, lang, c, dash }: { x: number; y: number; w?: number; h?: number; s: Tr; lang: ArtLang; c: string; dash?: boolean }) => {
  const two = L(s, lang).includes("|");
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="5" fill="#fff" stroke={c} strokeWidth="1.8" strokeDasharray={dash ? "4 3" : undefined} />
      <Tx x={x} y={two ? y - 1.5 : y + 2.5} s={s} lang={lang} size={7} fill={c} />
    </g>
  );
};
const Ar = ({ d, c = "#475569", dash }: { d: string; c?: string; dash?: boolean }) => (
  <path d={d} fill="none" stroke={c} strokeWidth="1.4" strokeDasharray={dash ? "3 2" : undefined} markerEnd="url(#soc-ar)" />
);
const ArDef = () => (
  <defs><marker id="soc-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569" /></marker></defs>
);

const VOTERS = t("Voters", "Ընտրողներ", "Избиратели");
const PRES = t("President", "Նախագահ", "Президент");

const govforms: Diagram = {
  title: t("Who chooses whom", "Ով ում է ընտրում", "Кто кого выбирает"),
  h: 230,
  draw: (lang) => (
    <g>
      <ArDef />
      {[t("Presidential|USA", "Նախագահական|ԱՄՆ", "Президентская|США"), t("Parliamentary|Armenia", "Խորհրդարանական|Հայաստան", "Парламентская|Армения"), t("Semi-presidential|France", "Կիսանախագահական|Ֆրանսիա", "Полупрезидентская|Франция")].map((s, k) => (
        <g key={k}>
          <rect x={4 + k * 105} y="4" width="101" height="222" rx="6" fill={["#eef2ff", "#fff7ed", "#ecfdf5"][k]} />
          <Tx x={54.5 + k * 105} y={16} s={s} lang={lang} size={7.5} fill="#1e293b" />
        </g>
      ))}
      {/* USA: two separate elections */}
      <Box x={32} y={80} w={50} s={PRES} lang={lang} c="#4f46e5" />
      <Box x={80} y={80} w={44} s={t("Congress", "Կոնգրես", "Конгресс")} lang={lang} c="#4f46e5" />
      <text x="56" y="70" textAnchor="middle" fontSize="9" fontWeight="900" fill="#4f46e5">⇄</text>
      <Box x={54} y={204} s={VOTERS} lang={lang} c="#334155" />
      <Ar d="M36,192 V94" /><Ar d="M76,192 V94" />
      {/* Armenia: voters → National Assembly → prime minister and president */}
      <Box x={159} y={204} s={VOTERS} lang={lang} c="#334155" />
      <Box x={159} y={150} s={t("National|Assembly", "Ազգային|ժողով", "Национальное|собрание")} lang={lang} c="#c2410c" h={28} />
      <Box x={140} y={96} w={66} s={t("Prime|minister", "Վարչա-|պետ", "Премьер-|министр")} lang={lang} c="#c2410c" h={28} />
      <Box x={170} y={52} w={60} s={PRES} lang={lang} c="#c2410c" dash />
      <Ar d="M159,192 V166" /><Ar d="M146,136 V112" /><Ar d="M192,136 C200,110 200,80 188,66" />
      {/* France: the president is elected directly and appoints the prime minister */}
      <Box x={252} y={52} w={66} s={PRES} lang={lang} c="#047857" />
      <Box x={276} y={104} w={56} s={t("Prime|minister", "Վարչա-|պետ", "Премьер-|министр")} lang={lang} c="#047857" h={28} />
      <Box x={264} y={150} w={70} s={t("Parliament", "Խորհրդարան", "Парламент")} lang={lang} c="#047857" />
      <Box x={264} y={204} s={VOTERS} lang={lang} c="#334155" />
      <Ar d="M228,192 C214,150 214,90 232,64" /><Ar d="M264,192 V162" /><Ar d="M268,64 L276,90" /><Ar d="M286,138 V118" dash />
    </g>
  ),
  parts: [
    P(56, 120, t("Presidential republic (USA)", "Նախագահական հանրապետություն (ԱՄՆ)", "Президентская республика (США)"), t("Voters choose the president and Congress in separate elections. The president heads the government for 4 years (at most two terms) and can veto laws; Congress can overrule a veto with two thirds of the votes, but cannot dismiss the president except by impeachment.", "Ընտրողները նախագահին և Կոնգրեսին ընտրում են առանձին ընտրություններով։ Նախագահը 4 տարով (առավելագույնը երկու ժամկետ) ղեկավարում է կառավարությունը և կարող է վետո դնել օրենքների վրա․ Կոնգրեսը կարող է հաղթահարել վետոն ձայների երկու երրորդով, բայց չի կարող պաշտոնանկ անել նախագահին, բացի իմփիչմենթից։", "Избиратели выбирают президента и Конгресс на отдельных выборах. Президент 4 года (не больше двух сроков) возглавляет правительство и может наложить вето на закон; Конгресс может преодолеть вето двумя третями голосов, но отстранить президента может только через импичмент.")),
    P(184, 96, t("Parliamentary republic (Armenia)", "Խորհրդարանական հանրապետություն (Հայաստան)", "Парламентская республика (Армения)"), t("Voters elect only the National Assembly. It chooses the prime minister, who leads the government, and elects the president for 7 years. Parliament can remove the prime minister by a vote of no confidence, so the government depends on its majority.", "Ընտրողներն ընտրում են միայն Ազգային ժողովը։ Այն ընտրում է կառավարությունը ղեկավարող վարչապետին և 7 տարով ընտրում է նախագահին։ Խորհրդարանը կարող է անվստահություն հայտնել վարչապետին, ուստի կառավարությունը կախված է իր մեծամասնությունից։", "Избиратели выбирают только Национальное собрание. Оно выбирает премьер-министра, который возглавляет правительство, и избирает президента на 7 лет. Парламент может выразить недоверие премьер-министру, поэтому правительство зависит от своего большинства.")),
    P(236, 104, t("Semi-presidential republic (France)", "Կիսանախագահական հանրապետություն (Ֆրանսիա)", "Полупрезидентская республика (Франция)"), t("Voters elect both the president (for 5 years) and parliament. The president appoints the prime minister, but parliament can bring the government down. When the majority is against the president, he must name a prime minister from the other side: the French call this cohabitation.", "Ընտրողներն ընտրում են և՛ նախագահին (5 տարով), և՛ խորհրդարանին։ Նախագահը նշանակում է վարչապետին, բայց խորհրդարանը կարող է հրաժարականի ուղարկել կառավարությանը։ Երբ մեծամասնությունը նախագահի դեմ է, նա պետք է վարչապետ նշանակի մյուս կողմից․ ֆրանսիացիներն սա անվանում են «համակեցություն»։", "Избиратели выбирают и президента (на 5 лет), и парламент. Президент назначает премьер-министра, но парламент может отправить правительство в отставку. Когда большинство против президента, он должен назначить премьера из другого лагеря: французы называют это «сосуществованием».")),
    P(130, 204, t("And monarchies?", "Իսկ միապետությունները՞", "А монархии?"), t("A constitutional monarchy such as the United Kingdom or Japan works like the middle column: voters elect parliament, the government answers to it, and the monarch stays as a symbol instead of an elected president.", "Սահմանադրական միապետությունը, օրինակ՝ Մեծ Բրիտանիան կամ Ճապոնիան, աշխատում է միջին սյունակի պես․ ընտրողներն ընտրում են խորհրդարանը, կառավարությունը պատասխանատու է նրա առջև, իսկ ընտրովի նախագահի փոխարեն միապետն է մնում որպես խորհրդանիշ։", "Конституционная монархия, например Великобритания или Япония, устроена как средняя колонка: избиратели выбирают парламент, правительство отвечает перед ним, а вместо выборного президента символом остаётся монарх.")),
  ],
};

/* ---------------- grade 9: checks and balances in Armenia ---------------- */

const powers: Diagram = {
  title: t("Three branches that check each other", "Երեք ճյուղ, որոնք զսպում են միմյանց", "Три ветви, которые сдерживают друг друга"),
  draw: (lang) => (
    <g>
      <ArDef />
      {[[160, 34, t("Legislative", "Օրենսդիր", "Законодательная"), t("National Assembly", "Ազգային ժողով", "Национальное собрание"), "#4f46e5"], [62, 166, t("Executive", "Գործադիր", "Исполнительная"), t("Government, PM", "Կառավարություն", "Правительство"), "#c2410c"], [258, 166, t("Judicial", "Դատական", "Судебная"), t("Courts", "Դատարաններ", "Суды"), "#047857"]].map(([x, y, a, b, c], k) => (
        <g key={k}>
          <rect x={(x as number) - 52} y={(y as number) - 22} width="104" height="44" rx="8" fill="#fff" stroke={c as string} strokeWidth="2.2" />
          <path d={`M${(x as number) - 10},${(y as number) - 12} l10,-6 l10,6 Z M${(x as number) - 8},${(y as number) - 11} v8 M${(x as number) - 3},${(y as number) - 11} v8 M${(x as number) + 3},${(y as number) - 11} v8 M${(x as number) + 8},${(y as number) - 11} v8`} stroke={c as string} fill={c as string} strokeWidth="1.5" />
          <Tx x={x as number} y={(y as number) + 6} s={a as Tr} lang={lang} size={8.5} fill={c as string} />
          <Tx x={x as number} y={(y as number) + 16} s={b as Tr} lang={lang} size={6.5} fill="#475569" w={700} />
        </g>
      ))}
      <Box x={276} y={22} w={76} s={t("President", "Նախագահ", "Президент")} lang={lang} c="#64748b" dash />
      {/* legislative ⇄ executive */}
      <Ar d="M116,52 L66,142" c="#4f46e5" /><Ar d="M84,142 L132,58" c="#c2410c" />
      <Tx x={70} y={84} s={t("elects the PM,|no confidence", "ընտրում է վարչապետին,|անվստահություն", "избирает премьера,|недоверие")} lang={lang} size={6.5} anchor="end" fill="#4f46e5" w={800} />
      <Tx x={112} y={118} s={t("bills,|budget", "նախագծեր,|բյուջե", "законопроекты,|бюджет")} lang={lang} size={6.5} anchor="start" fill="#c2410c" w={800} />
      {/* legislative ⇄ judicial */}
      <Ar d="M188,58 L236,142" c="#4f46e5" /><Ar d="M254,142 L204,52" c="#047857" />
      <Tx x={206} y={118} s={t("elects|judges", "ընտրում է|դատավորներին", "избирает|судей")} lang={lang} size={6.5} anchor="end" fill="#4f46e5" w={800} />
      <Tx x={316} y={52} s={t("checks laws against|the Constitution", "ստուգում է օրենքների|սահմանադրականությունը", "проверяет законы на|соответствие Конституции")} lang={lang} size={6.3} anchor="end" fill="#047857" w={800} />
      {/* judicial → executive */}
      <Ar d="M206,170 H118" c="#047857" />
      <Tx x={162} y={164} s={t("reviews decisions", "ստուգում է որոշումները", "проверяет решения")} lang={lang} size={6.5} fill="#047857" w={800} />
      <Tx x={160} y={208} s={t("No branch can rule alone.", "Ոչ մի ճյուղ չի կարող միայնակ իշխել։", "Ни одна ветвь не может править одна.")} lang={lang} size={8} fill="#334155" />
    </g>
  ),
  parts: [
    P(206, 26, t("National Assembly", "Ազգային ժողով", "Национальное собрание"), t("At least 101 deputies elected for 5 years by party lists. It passes laws and the budget, elects the prime minister and can remove him by a vote of no confidence.", "Առնվազն 101 պատգամավոր, որոնք ընտրվում են 5 տարով՝ կուսակցական ցուցակներով։ Այն ընդունում է օրենքներ և բյուջե, ընտրում է վարչապետին և կարող է անվստահություն հայտնել նրան։", "Не менее 101 депутата, избранных на 5 лет по партийным спискам. Оно принимает законы и бюджет, избирает премьер-министра и может выразить ему недоверие.")),
    P(14, 150, t("Government", "Կառավարություն", "Правительство"), t("The prime minister and the ministers carry out the laws and run the country day to day. The government drafts the budget, but only parliament can approve it: the money is the people's.", "Վարչապետը և նախարարները կատարում են օրենքները և ամեն օր կառավարում երկիրը։ Կառավարությունը կազմում է բյուջեի նախագիծը, բայց միայն խորհրդարանը կարող է հաստատել այն․ փողը ժողովրդինն է։", "Премьер-министр и министры исполняют законы и каждый день управляют страной. Правительство составляет проект бюджета, но утвердить его может только парламент: деньги принадлежат народу.")),
    P(306, 150, t("Courts", "Դատարաններ", "Суды"), t("Courts of first instance, appeal courts and the Court of Cassation settle disputes. The Constitutional Court, with 9 judges, can declare a law invalid if it breaks the Constitution. Judges cannot be told how to decide.", "Առաջին ատյանի դատարանները, վերաքննիչ դատարանները և Վճռաբեկ դատարանը լուծում են վեճերը։ 9 դատավորից բաղկացած Սահմանադրական դատարանը կարող է օրենքն անվավեր ճանաչել, եթե այն խախտում է Սահմանադրությունը։ Ոչ ոք չի կարող դատավորներին թելադրել, թե ինչպես որոշեն։", "Суды первой инстанции, апелляционные суды и Кассационный суд разрешают споры. Конституционный суд из 9 судей может признать закон недействительным, если он нарушает Конституцию. Никто не может указывать судьям, как решать.")),
    P(228, 22, t("President", "Նախագահ", "Президент"), t("The head of state, elected by parliament for one 7-year term. He or she signs laws and can send a doubtful law to the Constitutional Court before signing it.", "Պետության գլուխը, որին խորհրդարանն ընտրում է մեկ անգամ՝ 7 տարով։ Նա ստորագրում է օրենքները և կարող է կասկածելի օրենքը ստորագրելուց առաջ ուղարկել Սահմանադրական դատարան։", "Глава государства, которого парламент избирает один раз на 7 лет. Он подписывает законы и может до подписания направить сомнительный закон в Конституционный суд.")),
    P(160, 140, t("Montesquieu's idea", "Մոնտեսքյոյի գաղափարը", "Идея Монтескьё"), t("In \"The Spirit of the Laws\" (1748) Montesquieu wrote that power must stop power. Each arrow on the picture is a brake that one branch holds on another.", "«Օրենքների ոգու մասին» գրքում (1748) Մոնտեսքյոն գրել է, որ իշխանությունը պետք է կանգնեցնի իշխանությանը։ Նկարի յուրաքանչյուր սլաք արգելակ է, որը մի ճյուղը պահում է մյուսի վրա։", "В книге «О духе законов» (1748) Монтескьё писал, что власть должна останавливать власть. Каждая стрелка на картинке — тормоз, который одна ветвь держит на другой.")),
  ],
};

/* ---------------- grade 9: rights and responsibility by age ---------------- */

const AGES: Array<[number, Tr, number, number, string]> = [
  [6, t("Age 6|School starts", "6 տարեկան|Սկսվում է դպրոցը", "6 лет|Начинается школа"), 30, 50, "#0891b2"],
  [14, t("Age 14|Criminal liability for|serious crimes; light|work with a parent's OK", "14 տարեկան|Քրեական պատասխանատվ.|ծանր հանցանքների համար,|թեթև աշխատանք ծնողի|համաձայնությամբ", "14 лет|Уголовная ответственность|за тяжкие преступления;|лёгкий труд с согласия|родителя"), 130, 40, "#f59e0b"],
  [16, t("Age 16|Criminal liability in|general; work with|shorter hours; passport", "16 տարեկան|Քրեական պատասխանատվ.|ընդհանուր դեպքում,|աշխատանք, անձնագիր", "16 лет|Уголовная ответственность|в целом; работа|с сокращённым днём; паспорт"), 94, 142, "#e11d48"],
  [18, t("Age 18|Adult: votes, full legal|capacity; men are called|up for military service", "18 տարեկան|Չափահաս․ ընտրում է,|լրիվ գործունակ, տղաները|զորակոչվում են", "18 лет|Совершеннолетие: выборы,|полная дееспособность;|призыв юношей на службу"), 206, 142, "#4f46e5"],
];

const ages: Diagram = {
  title: t("Rights and responsibility grow with age", "Իրավունքներն ու պատասխանատվությունն աճում են տարիքի հետ", "Права и ответственность растут с возрастом"),
  draw: (lang) => {
    const X = (a: number) => 20 + a * 14;
    return (
      <g>
        <rect x={X(0)} y="104" width={X(14) - X(0)} height="12" rx="3" fill="#bae6fd" />
        <rect x={X(14)} y="104" width={X(18) - X(14)} height="12" fill="#fde68a" />
        <rect x={X(18)} y="104" width={X(20) - X(18)} height="12" rx="3" fill="#c7d2fe" />
        <Tx x={X(6) + 7} y={113} s={t("parents answer for harm", "վնասը՝ ծնողների վրա", "за вред отвечают родители")} lang={lang} size={6.5} anchor="start" fill="#075985" w={800} />
        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((a) => <text key={a} x={X(a)} y="126" textAnchor="middle" fontSize="7" fontWeight="800" fill="#64748b">{a}</text>)}
        {AGES.map(([a, s, x, y, c], k) => {
          const up = y < 100;
          const lines = L(s, lang).split("|").length;
          const h = 10 + lines * 8.6;
          return (
            <g key={k}>
              <path d={`M${X(a)},${up ? 104 : 116} L${x + (k ? 55 : 45)},${up ? y + h : y}`} stroke={c} strokeWidth="1.5" />
              <rect x={x} y={y} width={k ? 110 : 90} height={h} rx="5" fill="#fff" stroke={c} strokeWidth="1.5" />
              <Tx x={x + 5} y={y + 11} s={s} lang={lang} size={6.3} anchor="start" fill="#1e293b" w={700} />
              <circle cx={X(a)} cy="110" r="4" fill={c} />
            </g>
          );
        })}
      </g>
    );
  },
  parts: [
    P(120, 50, t("School", "Դպրոց", "Школа"), t("At 6 a child starts school. The right to education comes with a duty: since 2017 secondary education is compulsory in Armenia.", "6 տարեկանում երեխան դպրոց է գնում։ Կրթության իրավունքը գալիս է պարտականության հետ․ 2017 թվականից Հայաստանում միջնակարգ կրթությունը պարտադիր է։", "В 6 лет ребёнок идёт в школу. Право на образование связано с обязанностью: с 2017 года среднее образование в Армении обязательно.")),
    P(12, 110, t("Under 14", "Մինչև 14 տարեկան", "До 14 лет"), t("Parents are liable for harm caused by a child under 14: if a ball breaks a neighbour's window, the family pays.", "Մինչև 14 տարեկան երեխայի պատճառած վնասի համար պատասխանատու են ծնողները․ եթե գնդակը կոտրի հարևանի պատուհանը, վճարում է ընտանիքը։", "За вред, причинённый ребёнком до 14 лет, отвечают родители: если мяч разбил окно соседа, платит семья.")),
    P(240, 40, t("Age 14", "14 տարեկան", "14 лет"), t("Criminal liability begins for some serious crimes, such as murder, theft and robbery. Light work that does not harm health or studies is allowed with a parent's consent.", "Քրեական պատասխանատվությունը սկսվում է որոշ ծանր հանցագործությունների համար, ինչպիսիք են սպանությունը, գողությունը և ավազակությունը։ Առողջությանը և ուսմանը չվնասող թեթև աշխատանքը թույլատրվում է ծնողի համաձայնությամբ։", "Начинается уголовная ответственность за некоторые тяжкие преступления: убийство, кражу, разбой. Лёгкий труд, не вредящий здоровью и учёбе, разрешён с согласия родителя.")),
    P(204, 142, t("Age 16", "16 տարեկան", "16 лет"), t("Criminal liability as a general rule. You can start work, with shorter hours and no dangerous jobs, and you get your first passport.", "Քրեական պատասխանատվություն ընդհանուր դեպքում։ Կարող ես սկսել աշխատել՝ կրճատ ժամերով և առանց վտանգավոր աշխատանքի, և ստանում ես առաջին անձնագիրը։", "Уголовная ответственность в общем случае. Можно начать работать — с сокращённым днём и без опасной работы, — и ты получаешь первый паспорт.")),
    P(312, 142, t("Age 18", "18 տարեկան", "18 лет"), t("Adulthood: you vote in elections and referendums and can sign any contract yourself. Punishments are no longer softened for age.", "Չափահասություն․ քվեարկում ես ընտրություններում և հանրաքվեներում և կարող ես ինքդ կնքել ցանկացած պայմանագիր։ Պատիժներն այլևս չեն մեղմացվում տարիքի պատճառով։", "Совершеннолетие: ты голосуешь на выборах и референдумах и можешь сам заключать любые договоры. Наказания больше не смягчаются из-за возраста.")),
  ],
};

/* ---------------- grade 9: local self-government ---------------- */

const selfgov: Diagram = {
  title: t("Who runs a community", "Ով է կառավարում համայնքը", "Кто управляет общиной"),
  draw: (lang) => (
    <g>
      <ArDef />
      <rect x="6" y="6" width="198" height="208" rx="8" fill="#fff7ed" stroke="#fdba74" strokeDasharray="4 3" />
      <Tx x={105} y={20} s={t("Local self-government", "Տեղական ինքնակառավարում", "Местное самоуправление")} lang={lang} size={8} fill="#c2410c" />
      <rect x="212" y="6" width="102" height="118" rx="8" fill="#eef2ff" stroke="#a5b4fc" strokeDasharray="4 3" />
      <Tx x={263} y={20} s={t("State power", "Պետական իշխանություն", "Государственная власть")} lang={lang} size={7.5} fill="#4338ca" />
      <Box x={58} y={70} w={92} h={28} s={t("Council|of elders", "Ավագանի", "Совет|старейшин")} lang={lang} c="#c2410c" />
      <Box x={156} y={70} w={84} h={28} s={t("Community|head", "Համայնքի|ղեկավար", "Глава|общины")} lang={lang} c="#c2410c" />
      <Ar d="M105,64 H112" c="#c2410c" />
      <Tx x={108} y={98} s={t("budget, decisions", "բյուջե, որոշումներ", "бюджет, решения")} lang={lang} size={6.5} fill="#9a3412" w={800} />
      {[30, 52, 74, 96, 118, 140, 162].map((x, k) => <Head key={k} x={x + 4} y={160} r={5} fill={["#f59e0b", "#0891b2", "#e11d48", "#10b981", "#4f46e5", "#f97316", "#64748b"][k]} />)}
      <Tx x={105} y={196} s={t("Residents", "Բնակիչներ", "Жители")} lang={lang} size={8} fill="#334155" />
      <Ar d="M58,148 V88" c="#334155" /><Ar d="M152,148 V88" c="#334155" />
      <Tx x={105} y={130} s={t("elect", "ընտրում են", "избирают")} lang={lang} size={7} fill="#334155" />
      <Box x={263} y={48} w={88} s={t("Government", "Կառավարություն", "Правительство")} lang={lang} c="#4338ca" />
      <Box x={263} y={100} w={88} s={t("Governor", "Մարզպետ", "Марзпет")} lang={lang} c="#4338ca" />
      <Ar d="M263,60 V88" c="#4338ca" />
      <Tx x={268} y={77} s={t("appoints", "նշանակում է", "назначает")} lang={lang} size={6.5} anchor="start" fill="#4338ca" w={800} />
      <rect x="212" y="134" width="102" height="80" rx="8" fill="#ecfdf5" stroke="#6ee7b7" />
      <Tx x={263} y={148} s={t("Civil society", "Քաղաքացիական|հասարակություն", "Гражданское|общество")} lang={lang} size={7.5} fill="#047857" />
      <Tx x={220} y={176} s={t("NGOs · unions|media · action groups", "ՀԿ-ներ · արհմիություններ|ԶԼՄ · նախաձեռնող խմբեր", "НКО · профсоюзы|СМИ · инициативы")} lang={lang} size={6.3} anchor="start" fill="#065f46" w={700} />
      <Ar d="M214,150 C196,130 186,104 168,88" c="#047857" dash />
    </g>
  ),
  parts: [
    P(20, 56, t("Council of elders", "Ավագանի", "Совет старейшин"), t("The community's representative body. It adopts the budget and local rules and can be watched at work: its meetings are open to residents. Yerevan's council has 65 members and elects the mayor.", "Համայնքի ներկայացուցչական մարմինը։ Այն ընդունում է բյուջեն և տեղական կանոնները, և նրա աշխատանքին կարելի է հետևել․ նիստերը բաց են բնակիչների համար։ Երևանի ավագանին ունի 65 անդամ և ընտրում է քաղաքապետին։", "Представительный орган общины. Он принимает бюджет и местные правила, и за его работой можно следить: заседания открыты для жителей. В Совете старейшин Еревана 65 членов, он избирает мэра.")),
    P(196, 56, t("Community head", "Համայնքի ղեկավար", "Глава общины"), t("The executive: carries out the council's decisions on roads, lighting, rubbish, water, nurseries and parks.", "Գործադիր մարմինը․ կատարում է ավագանու որոշումները ճանապարհների, լուսավորության, աղբահանության, ջրի, մանկապարտեզների և այգիների վերաբերյալ։", "Исполнительный орган: выполняет решения совета о дорогах, освещении, мусоре, воде, детских садах и парках.")),
    P(186, 160, t("Residents", "Բնակիչներ", "Жители"), t("They elect the local bodies and can attend council meetings, make proposals and speak at public hearings. A courtyard is fixed faster when residents ask together.", "Նրանք ընտրում են տեղական մարմինները և կարող են մասնակցել ավագանու նիստերին, առաջարկներ ներկայացնել և հանրային լսումներում ելույթ ունենալ։ Բակն ավելի արագ է բարեկարգվում, երբ բնակիչները միասին են խնդրում։", "Они избирают местные органы, могут приходить на заседания совета, вносить предложения и выступать на публичных слушаниях. Двор приводят в порядок быстрее, когда жители просят вместе.")),
    P(306, 100, t("Governor (marzpet)", "Մարզպետ", "Губернатор (марзпет)"), t("Each of the 10 provinces has a governor appointed by the government. The governor represents state power, not the residents, and is not part of local self-government.", "10 մարզերից յուրաքանչյուրն ունի կառավարության նշանակած մարզպետ։ Մարզպետը ներկայացնում է պետական իշխանությունը, ոչ թե բնակիչներին, և տեղական ինքնակառավարման մաս չէ։", "В каждой из 10 областей есть губернатор, назначенный правительством. Он представляет государственную власть, а не жителей, и не входит в местное самоуправление.")),
    P(300, 160, t("Civil society", "Քաղաքացիական հասարակություն", "Гражданское общество"), t("Groups that act on their own, without the state: they collect signatures, take part in hearings and report problems. Its arrow is dashed because it advises and watches; it does not command.", "Խմբեր, որոնք գործում են ինքնուրույն՝ առանց պետության․ հավաքում են ստորագրություններ, մասնակցում լսումներին և բարձրաձայնում խնդիրները։ Նրա սլաքը կետագծով է, որովհետև այն խորհուրդ է տալիս և հետևում, բայց չի հրամայում։", "Объединения, которые действуют сами, без государства: собирают подписи, участвуют в слушаниях и сообщают о проблемах. Их стрелка пунктирная: гражданское общество советует и следит, но не приказывает.")),
    P(105, 40, t("Bigger communities", "Խոշորացված համայնքներ", "Укрупнённые общины"), t("Before the reform Armenia had more than 900 communities, many with only a few hundred residents. After 2016 most were merged, leaving fewer than a hundred, so that each could afford schools, roads and staff.", "Բարեփոխումից առաջ Հայաստանն ուներ ավելի քան 900 համայնք, որոնցից շատերն ունեին ընդամենը մի քանի հարյուր բնակիչ։ 2016 թվականից հետո դրանց մեծ մասը միավորվեց, և մնաց հարյուրից պակաս, որպեսզի յուրաքանչյուրը կարողանա պահել դպրոցներ, ճանապարհներ և աշխատակազմ։", "До реформы в Армении было более 900 общин, во многих — всего несколько сотен жителей. После 2016 года большинство объединили, и их осталось меньше сотни, чтобы каждая могла содержать школы, дороги и сотрудников.")),
  ],
};

/* ---------------- grade 10: who counts as unemployed ---------------- */

const LABOUR: Array<[Tr, number, string]> = [
  [t("Employed: 54", "Զբաղված՝ 54", "Заняты: 54"), 54, "#4f46e5"],
  [t("Unemployed: 6", "Գործազուրկ՝ 6", "Безработные: 6"), 6, "#e11d48"],
  [t("Inactive: 40", "Ոչ ակտիվ՝ 40", "Неактивные: 40"), 40, "#cbd5e1"],
];

const labour: Diagram = {
  title: t("100 people of working age", "Աշխատունակ տարիքի 100 մարդ", "100 человек трудоспособного возраста"),
  draw: (lang) => {
    const colors = LABOUR.flatMap(([, n, c]) => Array(n).fill(c) as string[]);
    return (
      <g>
        {colors.map((c, k) => <circle key={k} cx={22 + (k % 10) * 12} cy={26 + Math.floor(k / 10) * 12} r="4.6" fill={c} />)}
        <rect x="14" y="18" width="120" height="76" rx="4" fill="none" stroke="#4f46e5" strokeDasharray="3 2" />
        <text x="74" y="13" textAnchor="middle" fontSize="7" fontWeight="900" fill="#4f46e5">{L(t("economically active: 60", "տնտեսապես ակտիվ՝ 60", "экономически активные: 60"), lang)}</text>
        {LABOUR.map(([name, , c], k) => (
          <g key={k}>
            <rect x="166" y={20 + k * 36} width="14" height="14" rx="7" fill={c} />
            <Tx x={186} y={31 + k * 36} s={name} lang={lang} size={8.5} anchor="start" fill="#1e293b" />
          </g>
        ))}
        <Tx x={186} y={42} s={t("have a job", "ունեն աշխատանք", "есть работа")} lang={lang} size={6.5} anchor="start" fill="#64748b" w={700} />
        <Tx x={186} y={78} s={t("no job, looking, ready to start", "չունեն աշխատանք, փնտրում են", "нет работы, ищут, готовы выйти")} lang={lang} size={6.5} anchor="start" fill="#64748b" w={700} />
        <Tx x={186} y={114} s={t("students, homemakers, not looking", "ուսանողներ, տնային տնտեսուհիներ", "студенты, домохозяйки, не ищут")} lang={lang} size={6.5} anchor="start" fill="#64748b" w={700} />
        <rect x="14" y="150" width="292" height="58" rx="8" fill="#fff1f2" stroke="#fda4af" />
        <Tx x={160} y={168} s={t("Unemployment rate", "Գործազրկության մակարդակ", "Уровень безработицы")} lang={lang} size={8.5} fill="#9f1239" />
        <text x="160" y="190" textAnchor="middle" fontSize="12" fontWeight="900" fill="#9f1239">6 / 60 × 100% = 10%</text>
        <Tx x={160} y={202} s={t("not 6 / 100: the inactive are not counted", "ոչ թե 6 / 100․ ոչ ակտիվները չեն հաշվվում", "а не 6 / 100: неактивных не считают")} lang={lang} size={6.5} fill="#be123c" w={700} />
      </g>
    );
  },
  parts: [
    P(146, 27, t("Employed", "Զբաղվածներ", "Занятые"), t("Anyone who worked for pay or profit, including part-time workers and people running their own business or farm.", "Բոլոր նրանք, ովքեր աշխատել են վարձատրության կամ շահույթի համար, այդ թվում՝ ոչ լրիվ դրույքով աշխատողները և սեփական բիզնես կամ տնտեսություն վարողները։", "Все, кто работал за плату или прибыль, включая тех, кто работает неполный день или ведёт своё дело или хозяйство.")),
    P(146, 63, t("Unemployed", "Գործազուրկներ", "Безработные"), t("Only people without a job who are actively looking for one and are ready to start. A graduate sending out CVs counts; someone who has given up looking does not.", "Միայն աշխատանք չունեցողները, ովքեր ակտիվորեն փնտրում են այն և պատրաստ են սկսել։ Ինքնակենսագրություն ուղարկող շրջանավարտը հաշվվում է, իսկ փնտրելը դադարեցրածը՝ ոչ։", "Только люди без работы, которые активно её ищут и готовы начать. Выпускник, рассылающий резюме, считается; тот, кто бросил искать, — нет.")),
    P(146, 99, t("Inactive", "Ոչ ակտիվներ", "Неактивные"), t("Students, people caring for the home or children, and those who are not looking for work. They are outside the labour force, so they do not enter the rate at all.", "Ուսանողները, տան կամ երեխաների մասին հոգ տանողները և նրանք, ովքեր աշխատանք չեն փնտրում։ Նրանք աշխատուժից դուրս են, ուստի ընդհանրապես չեն մտնում մակարդակի հաշվարկի մեջ։", "Студенты, те, кто ведёт дом или ухаживает за детьми, и те, кто не ищет работу. Они вне рабочей силы и вообще не входят в расчёт уровня.")),
    P(130, 18, t("Economically active", "Տնտեսապես ակտիվներ", "Экономически активные"), t("The employed plus the unemployed: everyone who works or wants to work. This is the bottom of the fraction.", "Զբաղվածները գումարած գործազուրկները․ բոլոր նրանք, ովքեր աշխատում են կամ ուզում են աշխատել։ Սա կոտորակի հայտարարն է։", "Занятые плюс безработные: все, кто работает или хочет работать. Это знаменатель дроби.")),
    P(296, 168, t("A puzzle", "Հանելուկ", "Загадка"), t("If 3 unemployed people give up and stop looking, the rate falls to 3 / 57, about 5%, although nobody found a job. That is why economists also watch how many people are active at all.", "Եթե 3 գործազուրկ հուսահատվի և դադարի փնտրել, մակարդակը կնվազի մինչև 3 / 57, մոտ 5%, թեև ոչ ոք աշխատանք չի գտել։ Ահա թե ինչու տնտեսագետները հետևում են նաև, թե ընդհանրապես քանի մարդ է ակտիվ։", "Если 3 безработных отчаются и перестанут искать, уровень упадёт до 3 / 57, около 5%, хотя никто не нашёл работу. Поэтому экономисты следят и за тем, сколько людей вообще активны.")),
  ],
};

/* ---------------- grade 11: the four spheres of society ---------------- */

const SPHERES: Array<[number, number, Tr, Tr, string]> = [
  [8, 8, t("Economic", "Տնտեսական", "Экономическая"), t("production · trade|jobs · money", "արտադրություն · առևտուր|աշխատանք · փող", "производство · торговля|работа · деньги"), "#f59e0b"],
  [172, 8, t("Political", "Քաղաքական", "Политическая"), t("state · parties|elections · power", "պետություն · կուսակցություններ|ընտրություններ · իշխանություն", "государство · партии|выборы · власть"), "#4f46e5"],
  [8, 132, t("Social", "Սոցիալական", "Социальная"), t("groups · families|nations · welfare", "խմբեր · ընտանիք|ազգեր · սոցապահովություն", "группы · семья|нации · соцзащита"), "#10b981"],
  [172, 132, t("Spiritual", "Հոգևոր", "Духовная"), t("education · science|art · religion · morality", "կրթություն · գիտություն|արվեստ · կրոն · բարոյականություն", "образование · наука|искусство · религия · мораль"), "#e11d48"],
];

const spheres: Diagram = {
  title: t("Four spheres, one system", "Չորս ոլորտ՝ մեկ համակարգ", "Четыре сферы — одна система"),
  draw: (lang) => (
    <g>
      {SPHERES.map(([x, y, name, ex, c], k) => (
        <g key={k}>
          <rect x={x} y={y} width="140" height="80" rx="10" fill="#fff" stroke={c} strokeWidth="2" />
          <rect x={x} y={y} width="140" height="22" rx="10" fill={c} />
          <rect x={x} y={y + 12} width="140" height="10" fill={c} />
          <Tx x={x + 70} y={y + 15} s={name} lang={lang} size={9} fill="#fff" />
          <Tx x={x + 70} y={y + 42} s={ex} lang={lang} size={6.8} fill="#334155" w={700} />
        </g>
      ))}
      <path d="M150,48 H170 M150,172 H170 M78,90 V130 M242,90 V130" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="160" cy="110" r="34" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
      <Tx x={160} y={113} s={t("Society", "Հասարակություն", "Общество")} lang={lang} size={lang === "en" ? 8.5 : lang === "hy" ? 5.6 : 7.4} fill="#1e293b" />
    </g>
  ),
  parts: [
    P(20, 20, t("Economic sphere", "Տնտեսական ոլորտ", "Экономическая сфера"), t("The world financial crisis of 2008 reached Armenia in 2009: construction stopped, money sent home by relatives abroad fell, and the economy shrank by about 14%. An economic shock soon became a social one, with lost jobs and new emigration.", "2008 թվականի համաշխարհային ֆինանսական ճգնաժամը Հայաստան հասավ 2009 թվականին․ շինարարությունը կանգ առավ, արտասահմանում աշխատող հարազատների ուղարկած գումարները նվազեցին, և տնտեսությունը կրճատվեց մոտ 14%-ով։ Տնտեսական ցնցումը շուտով դարձավ սոցիալական՝ կորցրած աշխատատեղերով և նոր արտագաղթով։", "Мировой финансовый кризис 2008 года дошёл до Армении в 2009-м: стройки остановились, переводы от родственников из-за границы сократились, и экономика упала примерно на 14%. Экономический шок вскоре стал социальным — с потерянной работой и новой эмиграцией.")),
    P(300, 20, t("Political sphere", "Քաղաքական ոլորտ", "Политическая сфера"), t("A political decision can redraw the economy: when Armenia joined the Eurasian Economic Union in 2015, customs rules, trade partners and the prices of many imported goods changed.", "Քաղաքական որոշումը կարող է վերաձևել տնտեսությունը․ երբ 2015 թվականին Հայաստանը միացավ Եվրասիական տնտեսական միությանը, փոխվեցին մաքսային կանոնները, առևտրային գործընկերները և շատ ներմուծվող ապրանքների գները։", "Политическое решение может перекроить экономику: когда в 2015 году Армения вступила в Евразийский экономический союз, изменились таможенные правила, торговые партнёры и цены многих импортных товаров.")),
    P(20, 200, t("Social sphere", "Սոցիալական ոլորտ", "Социальная сфера"), t("Groups, families and nations. When many people leave to work abroad, families change: grandparents raise children, and money from abroad becomes part of the family budget.", "Խմբեր, ընտանիքներ և ազգեր։ Երբ շատ մարդիկ մեկնում են արտասահման աշխատելու, ընտանիքները փոխվում են․ երեխաներին մեծացնում են պապերն ու տատերը, իսկ արտասահմանից եկող գումարը դառնում է ընտանեկան բյուջեի մաս։", "Группы, семьи и нации. Когда многие уезжают работать за границу, семьи меняются: детей растят бабушки и дедушки, а деньги из-за границы становятся частью семейного бюджета.")),
    P(300, 200, t("Spiritual sphere", "Հոգևոր ոլորտ", "Духовная сфера"), t("Ideas change the other spheres. Computer research in Yerevan from the 1950s and schools like TUMO helped to create an IT industry that now exports services worldwide.", "Գաղափարները փոխում են մյուս ոլորտները։ 1950-ականներից Երևանում կատարվող համակարգչային հետազոտությունները և ԹՈՒՄՈ-ի նման կրթական կենտրոնները օգնեցին ստեղծել ՏՏ ոլորտ, որն այսօր ծառայություններ է արտահանում ամբողջ աշխարհ։", "Идеи меняют другие сферы. Компьютерные исследования в Ереване с 1950-х и такие центры, как TUMO, помогли создать IT-отрасль, которая сегодня экспортирует услуги по всему миру.")),
    P(186, 84, t("Why \"system\"", "Ինչու «համակարգ»", "Почему «система»"), t("Like organs in a body, the spheres depend on each other: a change in one spreads to the rest. That is why a reform rarely affects only the area it was meant for.", "Ինչպես մարմնի օրգանները, ոլորտները կախված են միմյանցից․ մեկում փոփոխությունը տարածվում է մյուսներին։ Ահա թե ինչու բարեփոխումը հազվադեպ է ազդում միայն այն ոլորտի վրա, որի համար նախատեսված էր։", "Как органы в теле, сферы зависят друг от друга: изменение в одной передаётся остальным. Поэтому реформа редко затрагивает только ту область, для которой задумана.")),
  ],
};

/* ---------------- grade 11: social mobility ---------------- */

const mobility: Diagram = {
  title: t("Moving between layers", "Շարժ շերտերի միջև", "Движение между слоями"),
  draw: (lang) => (
    <g>
      <ArDef />
      <path d="M110,14 H210 L250,66 H70 Z" fill="#ede9fe" />
      <path d="M70,70 H250 L300,140 H20 Z" fill="#dbeafe" />
      <path d="M20,144 H300 L260,206 H60 Z" fill="#fef3c7" />
      <Tx x={160} y={30} s={t("Upper class", "Վերին դաս", "Высший класс")} lang={lang} size={8} fill="#5b21b6" />
      <Tx x={160} y={86} s={t("Middle class", "Միջին դաս", "Средний класс")} lang={lang} size={8} fill="#1d4ed8" />
      <Tx x={160} y={200} s={t("Lower class", "Ստորին դաս", "Низший класс")} lang={lang} size={8} fill="#92400e" />
      {/* up through education */}
      <Head x={70} y={168} r={5} fill="#4f46e5" />
      <path d="M82,160 C96,140 96,120 98,104" fill="none" stroke="#4f46e5" strokeWidth="2.2" markerEnd="url(#soc-ar)" />
      <Head x={104} y={96} r={5} fill="#4f46e5" />
      <path d="M96,90 l8,-4 l8,4 l-8,4 Z" fill="#1e1b4b" />
      {/* down */}
      <Head x={236} y={96} r={5} fill="#e11d48" />
      <path d="M236,116 C236,130 240,146 244,160" fill="none" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#soc-ar)" />
      <Head x={246} y={166} r={5} fill="#e11d48" />
      {/* sideways */}
      <Head x={140} y={110} r={5} fill="#10b981" />
      <path d="M152,118 H182" stroke="#10b981" strokeWidth="2.2" markerEnd="url(#soc-ar)" />
      <Head x={194} y={110} r={5} fill="#10b981" />
      {/* parents and child */}
      <Head x={160} y={158} r={4.5} fill="#f59e0b" />
      <path d="M168,160 C200,150 196,60 176,44" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4 3" markerEnd="url(#soc-ar)" />
      <Head x={166} y={40} r={4} fill="#f59e0b" />
    </g>
  ),
  parts: [
    P(118, 130, t("Upwards through education", "Վերև՝ կրթության միջոցով", "Вверх через образование"), t("A village pupil becomes a doctor: vertical mobility upwards. In modern society education is the main channel, which is why free schooling matters so much for fairness.", "Գյուղի աշակերտը դառնում է բժիշկ․ ուղղահայաց շարժունություն դեպի վեր։ Ժամանակակից հասարակությունում կրթությունը գլխավոր ուղին է, ահա թե ինչու է անվճար դպրոցն այդքան կարևոր արդարության համար։", "Сельский школьник становится врачом: вертикальная мобильность вверх. В современном обществе главный канал — образование, поэтому бесплатная школа так важна для справедливости.")),
    P(270, 120, t("Downwards", "Դեպի ներքև", "Вниз"), t("A business goes bankrupt, or an illness ends a career: vertical mobility can also go down. Social security exists to soften such falls.", "Բիզնեսը սնանկանում է, կամ հիվանդությունն ավարտում է կարիերան․ ուղղահայաց շարժունությունը կարող է նաև դեպի ներքև լինել։ Սոցիալական ապահովությունը գոյություն ունի նման անկումները մեղմելու համար։", "Бизнес разоряется или болезнь обрывает карьеру: вертикальная мобильность бывает и вниз. Социальная защита существует, чтобы смягчать такие падения.")),
    P(168, 126, t("Horizontal", "Հորիզոնական", "Горизонтальная"), t("A teacher moves to another school, or a family moves from one city to another: the position changes, the level does not.", "Ուսուցիչը տեղափոխվում է այլ դպրոց, կամ ընտանիքը տեղափոխվում է մի քաղաքից մյուսը․ դիրքը փոխվում է, մակարդակը՝ ոչ։", "Учитель переходит в другую школу или семья переезжает в другой город: положение меняется, уровень — нет.")),
    P(212, 60, t("Intergenerational", "Միջսերնդային", "Межпоколенная"), t("Children end up in a different position from their parents. How often this happens is a measure of how open a society is.", "Երեխաները հայտնվում են ծնողներից տարբեր դիրքում։ Թե որքան հաճախ է դա տեղի ունենում, ցույց է տալիս, թե որքան բաց է հասարակությունը։", "Дети оказываются в другом положении, чем родители. То, насколько часто это происходит, показывает, насколько открыто общество.")),
    P(36, 106, t("A wide middle", "Լայն միջին", "Широкая середина"), t("When the middle class is the largest layer, the picture looks like a diamond, not a pyramid. Sociologists see this as a sign of a stable society.", "Երբ միջին դասն ամենամեծ շերտն է, պատկերը նման է ադամանդի, ոչ թե բուրգի։ Սոցիոլոգներն սա համարում են կայուն հասարակության նշան։", "Когда средний класс — самый большой слой, картинка похожа на ромб, а не на пирамиду. Социологи считают это признаком устойчивого общества.")),
  ],
};

/* ---------------- grade 11: spotting a fake post ---------------- */

const fakenews: Diagram = {
  title: t("Six warning signs in one post", "Վեց նախազգուշական նշան մեկ գրառման մեջ", "Шесть тревожных признаков в одном посте"),
  h: 236,
  draw: (lang) => (
    <g>
      <rect x="40" y="6" width="240" height="224" rx="14" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
      <circle cx="62" cy="28" r="11" fill="#fca5a5" />
      <text x="62" y="31" textAnchor="middle" fontSize="8" fontWeight="900" fill="#7f1d1d">!</text>
      <text x="78" y="26" fontSize="8.5" fontWeight="900" fill="#1e293b">N3ws-Today24.info</text>
      <text x="78" y="37" fontSize="7" fontWeight="700" fill="#94a3b8">12.05.2019</text>
      <Tx x={52} y={58} s={t("SHOCK!!! Cold water after a meal|causes heart attacks.|Doctors are SILENT!", "ՑՆՑՈՒՄ!!! Սառը ջուրը ճաշից հետո|ինֆարկտ է առաջացնում։|Բժիշկները ԼՌՈՒՄ ԵՆ։", "ШОК!!! Холодная вода после еды|вызывает инфаркт.|Врачи МОЛЧАТ!")} lang={lang} size={9.5} anchor="start" fill="#b91c1c" />
      <rect x="52" y="96" width="216" height="64" rx="6" fill="#bfdbfe" />
      <path d="M52,160 L96,118 L128,146 L160,122 L210,160 Z" fill="#64748b" />
      <rect x="196" y="104" width="64" height="14" rx="3" fill="#0f172a" opacity="0.7" />
      <Tx x={228} y={114} s={t("photo: 2011", "լուսանկար՝ 2011", "фото: 2011")} lang={lang} size={6.5} fill="#fff" />
      <Tx x={52} y={176} s={t("\"Experts say\" everyone knows this…", "«Փորձագետներն ասում են», բոլորը գիտեն…", "«Эксперты говорят», все это знают…")} lang={lang} size={7.5} anchor="start" fill="#475569" w={700} />
      <rect x="52" y="186" width="216" height="22" rx="11" fill="#e11d48" />
      <Tx x={160} y={200} s={t("SHARE before they delete it!", "ՏԱՐԱԾԻ՛Ր, մինչև ջնջեն։", "РАСШАРЬ, пока не удалили!")} lang={lang} size={8} fill="#fff" />
      <text x="56" y="222" fontSize="7" fontWeight="800" fill="#64748b">🔥 48K</text>
    </g>
  ),
  parts: [
    P(170, 28, t("Who wrote it?", "Ո՞վ է գրել", "Кто автор?"), t("An unknown site with a number in its name and no author. A reliable outlet has an editorial office, an address and named journalists.", "Անհայտ կայք՝ անվան մեջ թվով և առանց հեղինակի։ Վստահելի լրատվամիջոցն ունի խմբագրություն, հասցե և անուններով լրագրողներ։", "Неизвестный сайт с цифрой в названии и без автора. У надёжного издания есть редакция, адрес и журналисты с именами.")),
    P(128, 37, t("When?", "Ե՞րբ", "Когда?"), t("Published years ago and shared again as if it were new. Old stories are often brought back when they fit a new mood.", "Հրապարակվել է տարիներ առաջ և նորից տարածվում է, կարծես նոր լինի։ Հին պատմությունները հաճախ վերադարձվում են, երբ համապատասխանում են նոր տրամադրությանը։", "Опубликовано много лет назад и снова распространяется как новое. Старые истории часто возвращают, когда они подходят к новому настроению.")),
    P(262, 76, t("Is anyone else reporting it?", "Ուրիշ որևէ մեկը հաղորդո՞ւմ է", "Пишет ли кто-то ещё?"), t("A real discovery about heart attacks would be in every serious newspaper and medical journal. If only one unknown site has it, it is almost certainly false.", "Ինֆարկտի մասին իրական հայտնագործությունը կլիներ յուրաքանչյուր լուրջ թերթում և բժշկական ամսագրում։ Եթե այն ունի միայն մեկ անհայտ կայք, այն գրեթե անկասկած կեղծ է։", "Настоящее открытие об инфарктах было бы в каждой серьёзной газете и медицинском журнале. Если об этом пишет только один неизвестный сайт, это почти наверняка ложь.")),
    P(228, 132, t("The picture", "Նկարը", "Картинка"), t("The photo is from another place and year. A reverse image search (uploading the picture to a search engine) shows where it first appeared.", "Լուսանկարը այլ վայրից և տարուց է։ Նկարի հակադարձ որոնումը (նկարը որոնողական համակարգ վերբեռնելը) ցույց է տալիս, թե որտեղ է այն առաջին անգամ հայտնվել։", "Фото из другого места и года. Обратный поиск по картинке (загрузка изображения в поисковик) показывает, где оно появилось впервые.")),
    P(262, 176, t("Feelings and fake experts", "Զգացմունքներ և կեղծ փորձագետներ", "Эмоции и фальшивые эксперты"), t("Capital letters, exclamation marks and \"experts say\" without a single name are built to make you afraid, not to inform you. Strong fear or anger is a signal to slow down.", "Մեծատառերը, բացականչական նշանները և «փորձագետներն ասում են»՝ առանց մեկ անվան, ստեղծված են քեզ վախեցնելու, ոչ թե տեղեկացնելու համար։ Ուժեղ վախը կամ զայրույթը դանդաղելու ազդանշան է։", "Заглавные буквы, восклицательные знаки и «эксперты говорят» без единого имени созданы, чтобы напугать, а не сообщить. Сильный страх или злость — сигнал притормозить.")),
    P(280, 197, t("Don't share yet", "Մի՛ տարածիր առայժմ", "Пока не делись"), t("Pressure to share \"before it is deleted\" is a trick. 48,000 shares prove only that many people did not check. Share after checking, or not at all.", "«Մինչև ջնջեն» տարածելու ճնշումը հնարք է։ 48 000 տարածումն ապացուցում է միայն, որ շատերը չեն ստուգել։ Տարածի՛ր ստուգելուց հետո, կամ ընդհանրապես մի՛ տարածիր։", "Давление «расшарь, пока не удалили» — это уловка. 48 000 репостов доказывают лишь, что многие не проверили. Делись после проверки или не делись вовсе.")),
  ],
};

/* ---------------- grade 11: one phone, many countries ---------------- */

const CHAIN: Array<[number, number, Tr, Tr, string]> = [
  [62, 40, t("Design, software", "Դիզայն, ծրագրեր", "Дизайн, программы"), t("USA, Europe…", "ԱՄՆ, Եվրոպա…", "США, Европа…"), "#4f46e5"],
  [160, 40, t("Chips", "Միկրոսխեմաներ", "Микросхемы"), t("Taiwan,|South Korea", "Թայվան,|Հարավային Կորեա", "Тайвань,|Южная Корея"), "#0891b2"],
  [258, 40, t("Metals", "Մետաղներ", "Металлы"), t("DR Congo, Chile…", "ԿԴՀ, Չիլի…", "ДР Конго, Чили…"), "#a16207"],
  [258, 130, t("Assembly", "Հավաքում", "Сборка"), t("China, India,|Vietnam", "Չինաստան,|Հնդկաստան, Վիետնամ", "Китай, Индия,|Вьетнам"), "#e11d48"],
  [160, 130, t("Shipping", "Փոխադրում", "Перевозка"), t("containers|by sea and air", "բեռնարկղեր՝|ծովով և օդով", "контейнеры|морем и самолётом"), "#64748b"],
  [62, 130, t("Shops", "Խանութներ", "Магазины"), t("everywhere,|Armenia too", "ամենուր,|նաև Հայաստանում", "везде,|и в Армении"), "#10b981"],
];

const chain: Diagram = {
  title: t("One phone, many countries", "Մեկ հեռախոս՝ շատ երկրներ", "Один телефон — много стран"),
  draw: (lang) => (
    <g>
      <ArDef />
      <path d="M108,40 H112 M206,40 H210 M258,62 V106 M210,130 H206 M112,130 H108" stroke="#475569" strokeWidth="2" markerEnd="url(#soc-ar)" />
      {CHAIN.map(([x, y, name, where, c], k) => (
        <g key={k}>
          <rect x={x - 46} y={y - 22} width="92" height="44" rx="8" fill="#fff" stroke={c} strokeWidth="2" />
          <Tx x={x} y={y - 4} s={name} lang={lang} size={8} fill={c} />
          <Tx x={x} y={y + 9} s={where} lang={lang} size={6.3} fill="#475569" w={700} />
        </g>
      ))}
      <rect x="130" y="172" width="60" height="40" rx="5" fill="#1e293b" />
      <rect x="134" y="176" width="52" height="30" rx="2" fill="#93c5fd" />
      <circle cx="160" cy="209" r="1.6" fill="#64748b" />
      <Tx x={160} y={164} s={t("parts from dozens of countries", "մասեր տասնյակ երկրներից", "детали из десятков стран")} lang={lang} size={7} fill="#334155" w={700} />
    </g>
  ),
  parts: [
    P(16, 18, t("Design", "Դիզայն", "Дизайн"), t("Engineers and programmers create the look and the software. Much of the value of a phone, and of its price, goes to the companies that own the design and the brand.", "Ինժեներներն ու ծրագրավորողները ստեղծում են արտաքին տեսքն ու ծրագրերը։ Հեռախոսի արժեքի և գնի մեծ մասը բաժին է ընկնում այն ընկերություններին, որոնց պատկանում են դիզայնն ու ապրանքանիշը։", "Инженеры и программисты создают внешний вид и программы. Большая часть стоимости телефона и его цены достаётся компаниям, которым принадлежат дизайн и бренд.")),
    P(206, 18, t("Chips", "Միկրոսխեմաներ", "Микросхемы"), t("The most advanced processors are made in only a few factories in the world, many of them in Taiwan. When those factories stop, car and phone makers everywhere wait.", "Ամենաառաջադեմ պրոցեսորները արտադրվում են աշխարհի ընդամենը մի քանի գործարանում, որոնցից շատերը՝ Թայվանում։ Երբ այդ գործարանները կանգ են առնում, ամենուր ավտոմեքենաների և հեռախոսների արտադրողները սպասում են։", "Самые передовые процессоры делают лишь на нескольких заводах в мире, многие из них — на Тайване. Когда эти заводы останавливаются, производители машин и телефонов по всему миру ждут.")),
    P(304, 18, t("Metals", "Մետաղներ", "Металлы"), t("A phone holds dozens of elements. Most of the world's cobalt for batteries comes from the Democratic Republic of the Congo, where children have been found working in some small mines.", "Հեռախոսը պարունակում է տասնյակ տարրեր։ Մարտկոցների համար աշխարհի կոբալտի մեծ մասը գալիս է Կոնգոյի Դեմոկրատական Հանրապետությունից, որտեղ որոշ փոքր հանքերում հայտնաբերվել են աշխատող երեխաներ։", "В телефоне десятки элементов. Большая часть кобальта для аккумуляторов в мире добывается в Демократической Республике Конго, где на некоторых мелких рудниках находили работающих детей.")),
    P(304, 108, t("Assembly", "Հավաքում", "Сборка"), t("Hundreds of parts are put together in huge factories, mostly in Asia, where labour costs less. Assembly adds only a small share of the final price.", "Հարյուրավոր մասեր հավաքվում են հսկայական գործարաններում, հիմնականում Ասիայում, որտեղ աշխատուժն ավելի էժան է։ Հավաքումը վերջնական գնի միայն փոքր մասն է ավելացնում։", "Сотни деталей собирают на огромных заводах, в основном в Азии, где труд дешевле. Сборка добавляет лишь небольшую долю итоговой цены.")),
    P(206, 108, t("Shipping", "Փոխադրում", "Перевозка"), t("Standard containers and cargo planes make moving goods so cheap that crossing an ocean adds very little to the price of a phone.", "Ստանդարտ բեռնարկղերն ու բեռնատար ինքնաթիռները ապրանքների փոխադրումն այնքան էժան են դարձնում, որ օվկիանոսն անցնելը հեռախոսի գնին շատ քիչ է ավելացնում։", "Стандартные контейнеры и грузовые самолёты делают перевозку настолько дешёвой, что пересечение океана почти не сказывается на цене телефона.")),
    P(16, 108, t("Shops", "Խանութներ", "Магазины"), t("The same model is sold in Yerevan, Tokyo and São Paulo. That is economic globalisation: one product, a chain of many countries, and a crisis anywhere in the chain is felt everywhere.", "Նույն մոդելը վաճառվում է Երևանում, Տոկիոյում և Սան Պաուլուում։ Սա տնտեսական գլոբալացումն է․ մեկ ապրանք, շատ երկրների շղթա, և շղթայի ցանկացած օղակում ճգնաժամը զգացվում է ամենուր։", "Одна и та же модель продаётся в Ереване, Токио и Сан-Паулу. Это экономическая глобализация: один товар, цепочка из многих стран, и кризис в любом её звене ощущается везде.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { socialisation, maslow, eduarm, roles, tki, govforms, powers, ages, selfgov, labour, spheres, mobility, fakenews, chain };
