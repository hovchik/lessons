"use client";

import { t } from "../labels";
import { DIAGRAMS_B } from "./diag-bio-b";
import type { Diagram } from "./types";

/* Labelled biology pictures: cells, plant organs, animals and human organ systems. */

const P = (x: number, y: number, name: ReturnType<typeof t>, text: ReturnType<typeof t>) => ({ x, y, name, text });

/* ---------------- cells ---------------- */

const plantcell: Diagram = {
  title: t("The plant cell", "Բուսական բջիջը", "Растительная клетка"),
  draw: () => (
    <g>
      <rect x="40" y="20" width="240" height="180" rx="14" fill="#bbf7d0" stroke="#15803d" strokeWidth="7" />
      <rect x="48" y="28" width="224" height="164" rx="10" fill="#ecfccb" stroke="#65a30d" strokeWidth="1.5" />
      <rect x="112" y="52" width="130" height="110" rx="40" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="80" cy="70" r="20" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.5" />
      <circle cx="84" cy="66" r="6" fill="#7c3aed" />
      {[[70, 150], [100, 178], [258, 70], [258, 150], [180, 178], [140, 36]].map(([x, y], k) => (
        <ellipse key={k} cx={x} cy={y} rx="13" ry="7" fill="#22c55e" stroke="#15803d" transform={`rotate(${k * 30} ${x} ${y})`} />
      ))}
      {[[70, 115], [236, 180]].map(([x, y], k) => (
        <ellipse key={k} cx={x} cy={y} rx="10" ry="5" fill="#fb923c" stroke="#c2410c" />
      ))}
    </g>
  ),
  parts: [
    P(44, 110, t("Cell wall", "Բջջապատ", "Клеточная стенка"), t("A firm layer of cellulose outside the membrane. It gives the cell its shape and support; animal cells do not have one.", "Ցելյուլոզից ամուր շերտ թաղանթից դուրս։ Բջջին տալիս է ձև և հենարան․ կենդանական բջիջները այն չունեն։", "Прочный слой из целлюлозы снаружи мембраны. Придаёт клетке форму и опору; у животных клеток её нет.")),
    P(52, 190, t("Cell membrane", "Բջջաթաղանթ", "Клеточная мембрана"), t("A thin film just inside the wall that decides what enters and leaves the cell.", "Բարակ թաղանթ պատից անմիջապես ներս, որը որոշում է, թե ինչ է մտնում բջիջ և դուրս գալիս։", "Тонкая плёнка сразу под стенкой; решает, что входит в клетку и выходит из неё.")),
    P(150, 180, t("Cytoplasm", "Ցիտոպլազմա", "Цитоплазма"), t("The jelly-like inside of the cell where most of its chemical work happens. It slowly flows.", "Բջջի դոնդողանման ներքին միջավայրը, որտեղ կատարվում է քիմիական աշխատանքի մեծ մասը։ Այն դանդաղ հոսում է։", "Желеобразное содержимое клетки, где идёт большая часть химической работы. Оно медленно движется.")),
    P(80, 70, t("Nucleus", "Կորիզ", "Ядро"), t("Holds the DNA and controls the life of the cell. In older plant cells it is pushed to the side by the vacuole.", "Պարունակում է ԴՆԹ-ն և ղեկավարում բջջի կյանքը։ Հասուն բուսական բջիջներում վակուոլը այն մղում է մի կողմ։", "Хранит ДНК и управляет жизнью клетки. В старых растительных клетках вакуоль оттесняет его к краю.")),
    P(177, 107, t("Central vacuole", "Կենտրոնական վակուոլ", "Центральная вакуоль"), t("A large sac of cell sap: water, sugars and salts. Pressing outwards, it keeps the cell firm; when it shrinks, the plant wilts.", "Բջջահյութով մեծ պարկ՝ ջուր, շաքարներ և աղեր։ Ճնշելով դեպի դուրս՝ բջիջը պահում է պինդ, իսկ երբ փոքրանում է, բույսը թառամում է։", "Большой мешок с клеточным соком: вода, сахара и соли. Давит изнутри и держит клетку упругой; когда она сжимается, растение вянет.")),
    P(258, 70, t("Chloroplast", "Քլորոպլաստ", "Хлоропласт"), t("Green bodies with chlorophyll, where photosynthesis turns light, water and carbon dioxide into sugar.", "Քլորոֆիլ պարունակող կանաչ մարմնիկներ, որտեղ ֆոտոսինթեզը լույսը, ջուրը և ածխաթթու գազը վերածում է շաքարի։", "Зелёные тельца с хлорофиллом: здесь фотосинтез превращает свет, воду и углекислый газ в сахар.")),
    P(70, 115, t("Mitochondrion", "Միտոքոնդրիում", "Митохондрия"), t("Releases energy from sugar by respiration. Plant cells need them too, day and night.", "Շնչառությամբ էներգիա է անջատում շաքարից։ Բուսական բջիջներին էլ դրանք պետք են՝ և՛ ցերեկը, և՛ գիշերը։", "Высвобождает энергию из сахара при дыхании. Растительным клеткам они тоже нужны, днём и ночью.")),
  ],
};

const animalcell: Diagram = {
  title: t("The animal cell", "Կենդանական բջիջը", "Животная клетка"),
  draw: () => (
    <g>
      <path d="M60,110 C50,50 120,18 180,26 C250,34 290,80 276,130 C264,180 200,206 140,198 C80,190 66,160 60,110 Z" fill="#fde7f3" stroke="#db2777" strokeWidth="2.5" />
      <circle cx="160" cy="108" r="34" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="166" cy="102" r="10" fill="#7c3aed" />
      <path d="M200,80 q14,-10 28,0 q14,10 28,0 M202,92 q14,-10 28,0 q14,10 28,0 M206,104 q12,-8 24,0 q12,8 24,0" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
      <path d="M98,150 q20,-8 40,0 M102,160 q16,-6 32,0 M106,170 q12,-4 24,0" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
      <g transform="rotate(-20 100 70)"><ellipse cx="100" cy="70" rx="20" ry="10" fill="#fb923c" stroke="#c2410c" /><path d="M84,70 q4,-6 8,0 q4,6 8,0 q4,-6 8,0 q4,6 8,0" fill="none" stroke="#c2410c" /></g>
      <g transform="rotate(25 228 156)"><ellipse cx="228" cy="156" rx="18" ry="9" fill="#fb923c" stroke="#c2410c" /><path d="M214,156 q4,-6 7,0 q4,6 7,0 q4,-6 7,0 q4,6 7,0" fill="none" stroke="#c2410c" /></g>
      <circle cx="200" cy="172" r="9" fill="#a3e635" stroke="#4d7c0f" />
      {[[214, 118], [222, 124], [232, 116], [120, 120], [126, 128], [184, 150], [80, 112]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.5" fill="#1e1b4b" />)}
    </g>
  ),
  parts: [
    P(62, 140, t("Cell membrane", "Բջջաթաղանթ", "Клеточная мембрана"), t("The flexible outer boundary. Without a wall, animal cells can change shape.", "Ճկուն արտաքին սահմանը։ Առանց բջջապատի կենդանական բջիջները կարող են փոխել ձևը։", "Гибкая внешняя граница. Без стенки животные клетки могут менять форму.")),
    P(160, 120, t("Nucleus", "Կորիզ", "Ядро"), t("The control centre, holding DNA in chromosomes, wrapped in a double membrane with pores.", "Ղեկավար կենտրոնը, որը քրոմոսոմներում պարունակում է ԴՆԹ-ն և պատված է ծակոտիներով կրկնակի թաղանթով։", "Центр управления: ДНК в хромосомах, окружённая двойной мембраной с порами.")),
    P(166, 102, t("Nucleolus", "Կորիզակ", "Ядрышко"), t("A dense spot inside the nucleus where ribosomes are assembled.", "Կորիզի ներսում խիտ հատված, որտեղ հավաքվում են ռիբոսոմները։", "Плотный участок в ядре, где собираются рибосомы.")),
    P(100, 70, t("Mitochondrion", "Միտոքոնդրիում", "Митохондрия"), t("The power station: it breaks down glucose with oxygen and stores the energy in ATP. Muscle cells have thousands.", "Էներգակայանը․ թթվածնով քայքայում է գլյուկոզը և էներգիան պահեստավորում ԱԵՖ-ում։ Մկանային բջիջներն ունեն հազարավոր միտոքոնդրիումներ։", "Электростанция: расщепляет глюкозу с кислородом и запасает энергию в АТФ. В мышечных клетках их тысячи.")),
    P(230, 90, t("Endoplasmic reticulum", "Էնդոպլազմային ցանց", "Эндоплазматическая сеть"), t("A network of channels. The rough part is covered with ribosomes and makes proteins; the smooth part makes fats.", "Խողովակների ցանց։ Հատիկավոր մասը պատված է ռիբոսոմներով և սպիտակուցներ է սինթեզում, հարթ մասը՝ ճարպեր։", "Сеть каналов. Шероховатая часть покрыта рибосомами и делает белки, гладкая — жиры.")),
    P(118, 160, t("Golgi apparatus", "Գոլջիի համալիր", "Комплекс Гольджи"), t("Stacks of flat sacs that sort, pack and send out proteins, like a post office.", "Տափակ պարկերի կույտեր, որոնք տեսակավորում, փաթեթավորում և ուղարկում են սպիտակուցները, ինչպես փոստը։", "Стопки плоских мешочков: сортирует, упаковывает и рассылает белки, как почта.")),
    P(200, 172, t("Lysosome", "Լիզոսոմ", "Лизосома"), t("A small bubble of digestive enzymes that breaks down worn-out parts and swallowed particles.", "Մարսողական ֆերմենտների փոքր պղպջակ, որը քայքայում է մաշված մասերը և կլանված մասնիկները։", "Пузырёк с пищеварительными ферментами: расщепляет изношенные части и захваченные частицы.")),
    P(222, 124, t("Ribosomes", "Ռիբոսոմներ", "Рибосомы"), t("Tiny protein factories, free in the cytoplasm or on the rough ER.", "Սպիտակուցների փոքրիկ գործարաններ՝ ազատ ցիտոպլազմայում կամ հատիկավոր ԷՑ-ի վրա։", "Крошечные фабрики белка, свободные в цитоплазме или на шероховатой ЭПС.")),
  ],
};

const bacterium: Diagram = {
  title: t("A bacterial cell", "Բակտերիալ բջիջ", "Бактериальная клетка"),
  draw: () => (
    <g>
      <path d="M262,110 q30,-10 40,-30 M262,112 q32,4 42,24" fill="none" stroke="#475569" strokeWidth="2" />
      <rect x="40" y="60" width="226" height="100" rx="50" fill="#fef3c7" stroke="#a16207" strokeWidth="9" opacity="0.5" />
      <rect x="46" y="66" width="214" height="88" rx="44" fill="#fef9c3" stroke="#ca8a04" strokeWidth="4" />
      <rect x="52" y="72" width="202" height="76" rx="38" fill="#fffbeb" stroke="#eab308" strokeWidth="1.5" />
      <path d="M110,96 C130,80 170,124 190,100 C206,84 214,128 180,128 C150,128 140,104 120,124 C104,134 96,108 110,96 Z" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
      <circle cx="226" cy="126" r="8" fill="none" stroke="#e11d48" strokeWidth="2" />
      {[[80, 90], [90, 130], [150, 140], [214, 92], [236, 104], [70, 112]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="3" fill="#1e1b4b" />)}
    </g>
  ),
  parts: [
    P(42, 110, t("Capsule", "Լորձային պատյան", "Капсула"), t("A slimy outer coat in many bacteria. It protects them from drying out and from white blood cells.", "Շատ բակտերիաների լորձային արտաքին ծածկույթը։ Պաշտպանում է չորանալուց և սպիտակ արյան բջիջներից։", "Слизистый внешний чехол у многих бактерий. Защищает от высыхания и от лейкоцитов.")),
    P(150, 66, t("Cell wall", "Բջջապատ", "Клеточная стенка"), t("A rigid wall, made not of cellulose but of murein. Penicillin works by stopping bacteria from building it.", "Կոշտ պատ՝ ոչ թե ցելյուլոզից, այլ մուրեինից։ Պենիցիլինը գործում է՝ խանգարելով բակտերիաներին այն կառուցել։", "Жёсткая стенка не из целлюлозы, а из муреина. Пенициллин действует, мешая бактериям её строить.")),
    P(56, 120, t("Cell membrane", "Բջջաթաղանթ", "Клеточная мембрана"), t("Controls exchange with the outside. With no mitochondria, respiration happens on this membrane.", "Կարգավորում է փոխանակումը արտաքին միջավայրի հետ։ Միտոքոնդրիումներ չլինելու պատճառով շնչառությունը կատարվում է այս թաղանթի վրա։", "Регулирует обмен с внешней средой. Митохондрий нет, поэтому дыхание идёт на этой мембране.")),
    P(150, 112, t("Nucleoid (DNA)", "Նուկլեոիդ (ԴՆԹ)", "Нуклеоид (ДНК)"), t("One ring-shaped DNA molecule lying free in the cytoplasm: there is no nucleus, which is what prokaryote means.", "Մեկ օղակաձև ԴՆԹ մոլեկուլ՝ ազատ ցիտոպլազմայում․ կորիզ չկա, ինչը և նշանակում է «պրոկարիոտ»։", "Одна кольцевая молекула ДНК свободно лежит в цитоплазме: ядра нет, это и значит «прокариот».")),
    P(226, 126, t("Plasmid", "Պլազմիդ", "Плазмида"), t("A small extra ring of DNA. Plasmids can pass between bacteria and often carry resistance to antibiotics.", "ԴՆԹ-ի փոքր լրացուցիչ օղակ։ Պլազմիդները կարող են անցնել մի բակտերիայից մյուսին և հաճախ կրում են կայունություն հակաբիոտիկների նկատմամբ։", "Маленькое дополнительное кольцо ДНК. Плазмиды передаются между бактериями и часто несут устойчивость к антибиотикам.")),
    P(80, 90, t("Ribosomes", "Ռիբոսոմներ", "Рибосомы"), t("Smaller than ours, which lets some antibiotics stop bacterial ribosomes without harming human ones.", "Մերից փոքր են, ինչը թույլ է տալիս որոշ հակաբիոտիկների կանգնեցնել բակտերիալ ռիբոսոմները՝ առանց մարդկայիններին վնասելու։", "Мельче наших, поэтому некоторые антибиотики останавливают бактериальные рибосомы, не трогая человеческие.")),
    P(296, 92, t("Flagellum", "Մտրակ", "Жгутик"), t("A whip-like tail that spins like a propeller and drives the bacterium through liquid.", "Մտրականման պոչ, որը պտտվում է պտուտակի պես և բակտերիային առաջ մղում հեղուկում։", "Хвост-жгутик вращается, как гребной винт, и толкает бактерию в жидкости.")),
  ],
};

const virus: Diagram = {
  title: t("A virus", "Վիրուս", "Вирус"),
  draw: () => (
    <g>
      {Array.from({ length: 16 }, (_, k) => {
        const a = (k / 16) * Math.PI * 2;
        const x1 = 160 + Math.cos(a) * 70, y1 = 110 + Math.sin(a) * 70, x2 = 160 + Math.cos(a) * 92, y2 = 110 + Math.sin(a) * 92;
        return <g key={k}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#be123c" strokeWidth="3" /><circle cx={x2} cy={y2} r="5" fill="#f43f5e" /></g>;
      })}
      <circle cx="160" cy="110" r="72" fill="#fde68a" stroke="#d97706" strokeWidth="4" />
      <polygon points="160,58 205,84 205,136 160,162 115,136 115,84" fill="#bae6fd" stroke="#0284c7" strokeWidth="3" />
      <path d="M135,100 C150,80 170,130 185,104 C192,92 176,86 168,100 C158,118 140,128 136,112" fill="none" stroke="#7c3aed" strokeWidth="3" />
    </g>
  ),
  parts: [
    P(160, 108, t("Genetic material", "Ժառանգական նյութ", "Генетический материал"), t("DNA or RNA, never both. It carries instructions for making new viruses, but the virus cannot read them itself.", "ԴՆԹ կամ ՌՆԹ, երբեք երկուսը միասին։ Կրում է նոր վիրուսներ ստեղծելու հրահանգներ, բայց վիրուսն ինքը չի կարող դրանք «կարդալ»։", "ДНК или РНК, но никогда обе. Несёт инструкции для сборки новых вирусов, но сам вирус прочитать их не может.")),
    P(195, 136, t("Capsid", "Կապսիդ", "Капсид"), t("A protein shell built from many identical pieces, often in a regular shape like this twenty-sided one.", "Շատ նույնական մասերից կառուցված սպիտակուցային պատյան, հաճախ կանոնավոր ձևի, ինչպես այս քսանանիստը։", "Белковая оболочка из множества одинаковых частей, часто правильной формы, как этот двадцатигранник.")),
    P(110, 50, t("Envelope", "Արտաքին թաղանթ", "Внешняя оболочка"), t("Some viruses, like flu, wrap themselves in a piece of the membrane of the cell they came from.", "Որոշ վիրուսներ, օրինակ՝ գրիպինը, փաթաթվում են այն բջջի թաղանթի մի կտորով, որից դուրս են եկել։", "Некоторые вирусы, например гриппа, одеты в кусочек мембраны клетки, из которой вышли.")),
    P(250, 110, t("Surface proteins", "Մակերեսային սպիտակուցներ", "Поверхностные белки"), t("Spikes that fit receptors on a host cell like a key in a lock. Vaccines teach the immune system to recognise them.", "Ելուստներ, որոնք համապատասխանում են տեր-բջջի ընկալիչներին, ինչպես բանալին՝ կողպեքին։ Պատվաստանյութերը իմունային համակարգին սովորեցնում են ճանաչել դրանք։", "Шипы, подходящие к рецепторам клетки-хозяина, как ключ к замку. Вакцины учат иммунитет их узнавать.")),
  ],
};

const amoeba: Diagram = {
  title: t("The amoeba", "Ամեոբա", "Амёба"),
  draw: () => (
    <g>
      <path d="M70,120 C40,90 70,60 100,74 C110,40 160,30 180,60 C210,40 260,60 250,96 C290,110 280,160 240,160 C230,196 170,200 150,176 C120,200 70,180 84,150 C50,150 50,130 70,120 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
      <ellipse cx="160" cy="118" rx="22" ry="18" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.5" />
      <circle cx="220" cy="130" r="13" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2" />
      <circle cx="110" cy="140" r="11" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="108" cy="138" r="4" fill="#a16207" />
    </g>
  ),
  parts: [
    P(260, 92, t("Pseudopodium", "Կեղծոտիկ", "Ложноножка"), t("A 'false foot': the cytoplasm flows forward and the cell creeps along. Pseudopodia also surround food.", "«Կեղծ ոտք»․ ցիտոպլազման հոսում է առաջ, և բջիջը սողում է։ Կեղծոտիկները նաև շրջապատում են սնունդը։", "«Ложная нога»: цитоплазма перетекает вперёд, и клетка ползёт. Ложноножки также обволакивают пищу.")),
    P(160, 118, t("Nucleus", "Կորիզ", "Ядро"), t("Controls the cell. The amoeba reproduces by splitting its nucleus and then itself in two.", "Ղեկավարում է բջիջը։ Ամեոբան բազմանում է՝ նախ կիսելով կորիզը, ապա ինքն իրեն՝ երկու մասի։", "Управляет клеткой. Амёба размножается, деля сначала ядро, а затем себя надвое.")),
    P(110, 140, t("Food vacuole", "Մարսողական վակուոլ", "Пищеварительная вакуоль"), t("A bubble around swallowed food, where enzymes digest it.", "Կլանված սննդի շուրջ պղպջակ, որտեղ ֆերմենտները մարսում են այն։", "Пузырёк вокруг проглоченной пищи, где её переваривают ферменты.")),
    P(220, 130, t("Contractile vacuole", "Կծկվող վակուոլ", "Сократительная вакуоль"), t("Collects extra water and squirts it out, so the freshwater amoeba does not burst.", "Հավաքում է ավելորդ ջուրը և դուրս մղում, որպեսզի քաղցրահամ ջրի ամեոբան չպայթի։", "Собирает лишнюю воду и выбрасывает её, чтобы пресноводная амёба не лопнула.")),
    P(84, 96, t("Cytoplasm", "Ցիտոպլազմա", "Цитоплазма"), t("Clear at the edge and grainy inside; its flow is what moves the amoeba.", "Եզրին թափանցիկ է, ներսում՝ հատիկավոր․ դրա հոսքն է շարժում ամեոբային։", "Прозрачная по краю и зернистая внутри; её течение и двигает амёбу.")),
  ],
};

/* ---------------- plant organs ---------------- */

const root: Diagram = {
  title: t("Zones of a root", "Արմատի գոտիները", "Зоны корня"),
  w: 320, h: 230,
  draw: () => (
    <g>
      <path d="M144,10 L176,10 L174,180 Q160,214 146,180 Z" fill="#fde68a" stroke="#a16207" strokeWidth="2" />
      <path d="M146,180 Q160,222 174,180 L176,196 Q160,226 144,196 Z" fill="#d6d3d1" stroke="#78716c" />
      {Array.from({ length: 9 }, (_, k) => {
        const y = 66 + k * 8;
        return <g key={k}><line x1="145" y1={y} x2={118 - (k % 3) * 6} y2={y - 6} stroke="#a16207" /><line x1="175" y1={y} x2={202 + (k % 3) * 6} y2={y - 6} stroke="#a16207" /></g>;
      })}
      <line x1="160" y1="10" x2="160" y2="56" stroke="#2563eb" strokeWidth="3" />
      {[10, 56, 140, 168, 184].map((y, k) => <line key={k} x1="90" y1={y} x2="230" y2={y} stroke="#94a3b8" strokeDasharray="3 3" />)}
    </g>
  ),
  parts: [
    P(160, 202, t("Root cap", "Արմատածածկույթ", "Корневой чехлик"), t("A cap of cells that protects the growing tip as it pushes through soil. Its outer cells wear away and are replaced.", "Բջիջներից կազմված գլխարկ, որը պաշտպանում է աճող ծայրը, երբ այն ճեղքում է հողը։ Արտաքին բջիջները մաշվում և փոխարինվում են։", "Колпачок из клеток защищает растущий кончик, пока он пробивается сквозь почву. Наружные клетки стираются и заменяются.")),
    P(160, 176, t("Zone of division", "Բաժանման գոտի", "Зона деления"), t("Small cells divide again and again here, making new cells for the root.", "Այստեղ փոքր բջիջները անընդհատ բաժանվում են՝ արմատի համար նոր բջիջներ ստեղծելով։", "Здесь мелкие клетки делятся снова и снова, давая корню новые клетки.")),
    P(160, 154, t("Zone of elongation", "Աճման գոտի", "Зона растяжения"), t("The new cells stretch lengthwise and push the tip deeper into the soil.", "Նոր բջիջները ձգվում են երկայնքով և ծայրը մղում հողի ավելի խորը։", "Новые клетки вытягиваются в длину и проталкивают кончик глубже в почву.")),
    P(205, 90, t("Root hair zone", "Ներծծման գոտի", "Зона всасывания"), t("Thousands of root hairs, each a single cell, absorb water and dissolved minerals. They greatly increase the surface.", "Հազարավոր արմատամազիկներ, յուրաքանչյուրը մեկ բջիջ, ներծծում են ջուր և լուծված հանքային նյութեր։ Դրանք մեծապես ավելացնում են մակերեսը։", "Тысячи корневых волосков, каждый — одна клетка, всасывают воду и растворённые минеральные вещества. Они сильно увеличивают поверхность.")),
    P(160, 32, t("Zone of conduction", "Անցկացման գոտի", "Зона проведения"), t("Vessels carry the water and minerals up into the stem; side roots grow from here.", "Անոթները ջուրն ու հանքային նյութերը տանում են դեպի ցողուն․ կողային արմատները աճում են այստեղից։", "Сосуды несут воду и минеральные вещества вверх, в стебель; отсюда растут боковые корни.")),
  ],
};

const stem: Diagram = {
  title: t("Inside a tree trunk", "Ծառաբնի ներսը", "Внутри ствола дерева"),
  draw: () => (
    <g>
      <circle cx="160" cy="110" r="96" fill="#78350f" />
      <circle cx="160" cy="110" r="86" fill="#a16207" />
      <circle cx="160" cy="110" r="82" fill="#16a34a" />
      <circle cx="160" cy="110" r="79" fill="#fde68a" />
      {[70, 60, 50, 40, 30, 20].map((r, k) => <circle key={k} cx="160" cy="110" r={r} fill="none" stroke="#d97706" strokeWidth={k % 2 ? 1.5 : 2.5} />)}
      <circle cx="160" cy="110" r="8" fill="#a8a29e" />
    </g>
  ),
  parts: [
    P(160, 18, t("Bark", "Կեղև", "Кора"), t("Dead cork cells on the outside protect the tree from cold, water loss and pests.", "Արտաքին մեռած խցանային բջիջները ծառը պաշտպանում են ցրտից, ջրի կորստից և վնասատուներից։", "Мёртвые клетки пробки снаружи защищают дерево от холода, потери воды и вредителей.")),
    P(250, 110, t("Phloem (bast)", "Լուբ (ֆլոեմ)", "Луб (флоэма)"), t("Living tubes just under the bark carry sugar down from the leaves. Strip a ring of bark and the tree starves.", "Կեղևից անմիջապես ներս կենդանի խողովակները շաքարը տանում են տերևներից ներքև։ Կեղևի օղակը պոկելու դեպքում ծառը սովից մահանում է։", "Живые трубки под корой несут сахар вниз от листьев. Сними кольцо коры — и дерево умрёт от голода.")),
    P(160, 202, t("Cambium", "Կամբիում", "Камбий"), t("A thin layer of dividing cells. It adds new wood on the inside and new phloem on the outside, so the trunk grows thicker.", "Բաժանվող բջիջների բարակ շերտ։ Ներսում ավելացնում է նոր բնափայտ, դրսում՝ նոր լուբ, ուստի բունը հաստանում է։", "Тонкий слой делящихся клеток. Откладывает внутрь новую древесину, наружу — новый луб, и ствол толстеет.")),
    P(200, 110, t("Wood (xylem)", "Բնափայտ (քսիլեմ)", "Древесина (ксилема)"), t("Vessels that carry water up from the roots. Each year adds one ring: wide pale spring wood and narrow dark summer wood.", "Անոթներ, որոնք ջուրը տանում են արմատներից վեր։ Ամեն տարի ավելանում է մեկ օղակ՝ լայն ու բաց գույնի գարնանային և նեղ ու մուգ ամառային բնափայտ։", "Сосуды, несущие воду вверх от корней. Каждый год добавляет кольцо: широкую светлую весеннюю и узкую тёмную летнюю древесину.")),
    P(160, 110, t("Pith", "Միջուկ", "Сердцевина"), t("Soft tissue at the centre that stores nutrients in a young stem.", "Կենտրոնի փափուկ հյուսվածք, որը երիտասարդ ցողունում սննդանյութեր է պահեստավորում։", "Мягкая ткань в центре, запасающая питательные вещества в молодом стебле.")),
  ],
};

const leaf: Diagram = {
  title: t("Inside a leaf", "Տերևի ներսը", "Внутри листа"),
  w: 320, h: 220,
  draw: () => (
    <g>
      <rect x="10" y="20" width="300" height="8" fill="#fef9c3" stroke="#ca8a04" />
      {Array.from({ length: 12 }, (_, k) => <rect key={k} x={12 + k * 25} y="28" width="23" height="16" rx="3" fill="#ecfccb" stroke="#65a30d" />)}
      {Array.from({ length: 15 }, (_, k) => (
        <g key={k}><rect x={12 + k * 20} y="46" width="17" height="52" rx="6" fill="#86efac" stroke="#15803d" />
          {[58, 72, 86].map((y) => <circle key={y} cx={20.5 + k * 20} cy={y} r="3" fill="#16a34a" />)}</g>
      ))}
      {[[30, 120], [70, 130], [110, 116], [210, 124], [250, 132], [290, 118], [40, 152], [90, 156], [230, 156], [280, 154]].map(([x, y], k) => (
        <ellipse key={k} cx={x} cy={y} rx="16" ry="11" fill="#bbf7d0" stroke="#16a34a" />
      ))}
      <circle cx="160" cy="138" r="24" fill="#fef3c7" stroke="#a16207" strokeWidth="2" />
      <circle cx="160" cy="130" r="9" fill="#93c5fd" />
      <circle cx="160" cy="150" r="7" fill="#fdba74" />
      {Array.from({ length: 12 }, (_, k) => k === 6 ? null : <rect key={k} x={12 + k * 25} y="176" width="23" height="14" rx="3" fill="#ecfccb" stroke="#65a30d" />)}
      <path d="M162,176 q8,7 0,14 M186,176 q-8,7 0,14" fill="#22c55e" stroke="#15803d" strokeWidth="5" />
      <rect x="10" y="190" width="300" height="5" fill="#fef9c3" stroke="#ca8a04" />
    </g>
  ),
  parts: [
    P(60, 24, t("Cuticle", "Կուտիկուլա", "Кутикула"), t("A waxy waterproof film that cuts water loss. It is thicker in plants of dry places.", "Մոմանման անջրանցիկ թաղանթ, որը նվազեցնում է ջրի կորուստը։ Չոր վայրերի բույսերում ավելի հաստ է։", "Восковая водонепроницаемая плёнка, уменьшающая потерю воды. У растений засушливых мест толще.")),
    P(110, 36, t("Upper epidermis", "Վերին վերնամաշկ", "Верхняя кожица"), t("A single layer of clear cells that lets light through to the cells below.", "Թափանցիկ բջիջների մեկ շերտ, որը լույսը թողնում է դեպի ներքևի բջիջները։", "Один слой прозрачных клеток, пропускающий свет к клеткам ниже.")),
    P(250, 72, t("Palisade layer", "Սյունաձև հյուսվածք", "Столбчатая ткань"), t("Tall cells packed with chloroplasts, standing upright to catch the most light. Most photosynthesis happens here.", "Քլորոպլաստներով լի բարձր բջիջներ, որոնք կանգնած են ուղղահայաց՝ առավելագույն լույս որսալու համար։ Ֆոտոսինթեզի մեծ մասը կատարվում է այստեղ։", "Высокие клетки, набитые хлоропластами, стоят вертикально, чтобы ловить больше света. Здесь идёт основной фотосинтез.")),
    P(70, 130, t("Spongy layer", "Սպունգանման հյուսվածք", "Губчатая ткань"), t("Loosely packed cells with air spaces between them, where gases spread through the leaf.", "Ազատ դասավորված բջիջներ՝ միջբջջային օդային տարածություններով, որտեղ գազերը տարածվում են տերևով մեկ։", "Рыхло лежащие клетки с воздушными промежутками, по которым газы расходятся по листу.")),
    P(184, 138, t("Vein", "Ջիղ", "Жилка"), t("A bundle with xylem (blue) bringing water and phloem (orange) taking sugar away.", "Փունջ, որում քսիլեմը (կապույտ) ջուր է բերում, իսկ ֆլոեմը (նարնջագույն)՝ տանում շաքարը։", "Пучок: ксилема (синяя) приносит воду, флоэма (оранжевая) уносит сахар.")),
    P(174, 200, t("Stoma", "Հերձանցք", "Устьице"), t("A pore between two guard cells. It opens to let carbon dioxide in and oxygen and water vapour out, and closes in drought.", "Ծակոտի երկու փակող բջիջների միջև։ Բացվում է՝ ածխաթթու գազը ներս և թթվածինն ու ջրային գոլորշին դուրս թողնելու համար, իսկ երաշտի ժամանակ փակվում է։", "Пора между двумя замыкающими клетками. Открывается, впуская углекислый газ и выпуская кислород и пар, и закрывается в засуху.")),
  ],
};

const flower: Diagram = {
  title: t("Parts of a flower", "Ծաղկի մասերը", "Строение цветка"),
  w: 320, h: 230,
  draw: () => (
    <g>
      <line x1="160" y1="230" x2="160" y2="172" stroke="#16a34a" strokeWidth="6" />
      <path d="M160,168 C110,170 90,120 100,80 C120,110 140,140 160,150 Z" fill="#f9a8d4" stroke="#db2777" />
      <path d="M160,168 C210,170 230,120 220,80 C200,110 180,140 160,150 Z" fill="#f9a8d4" stroke="#db2777" />
      <path d="M150,170 C120,182 104,176 96,166 C116,162 134,162 150,164 Z M170,170 C200,182 216,176 224,166 C204,162 186,162 170,164 Z" fill="#4ade80" stroke="#15803d" />
      <ellipse cx="160" cy="166" rx="16" ry="8" fill="#86efac" stroke="#15803d" />
      <ellipse cx="160" cy="150" rx="12" ry="14" fill="#a7f3d0" stroke="#047857" />
      <circle cx="156" cy="150" r="3" fill="#047857" /><circle cx="164" cy="152" r="3" fill="#047857" />
      <line x1="160" y1="136" x2="160" y2="76" stroke="#047857" strokeWidth="3" />
      <ellipse cx="160" cy="72" rx="9" ry="5" fill="#34d399" stroke="#047857" />
      {[[-1, 128], [1, 128], [-1, 110], [1, 110]].map(([s, x], k) => {
        const x2 = 160 + s * (x === 128 ? 32 : 44), y2 = x === 128 ? 92 : 104;
        return <g key={k}><line x1={160 + s * 6} y1="158" x2={x2} y2={y2} stroke="#ca8a04" strokeWidth="2" /><ellipse cx={x2} cy={y2 - 4} rx="5" ry="8" fill="#facc15" stroke="#a16207" /></g>;
      })}
    </g>
  ),
  parts: [
    P(105, 100, t("Petal", "Պսակաթերթ", "Лепесток"), t("Bright petals and their scent attract insects. Wind-pollinated flowers, like grasses, have tiny dull ones.", "Վառ պսակաթերթերը և բույրը գրավում են միջատներին։ Քամով փոշոտվող ծաղիկները, ինչպես հացազգիները, ունեն մանր ու անգույն պսակաթերթեր։", "Яркие лепестки и запах привлекают насекомых. У ветроопыляемых цветков, как у злаков, они мелкие и невзрачные.")),
    P(100, 168, t("Sepal", "Բաժակաթերթ", "Чашелистик"), t("Green leaf-like parts that protect the flower while it is a bud.", "Կանաչ տերևանման մասեր, որոնք պաշտպանում են ծաղիկը, մինչ այն կոկոն է։", "Зелёные листовидные части, защищающие цветок, пока он бутон.")),
    P(204, 88, t("Anther", "Փոշանոթ", "Пыльник"), t("The top of a stamen, where pollen grains form. Stamen = anther + filament: the male part.", "Առէջի վերին մասը, որտեղ ձևավորվում են փոշեհատիկները։ Առէջ = փոշանոթ + առէջաթել՝ արական մասը։", "Верх тычинки, где образуется пыльца. Тычинка = пыльник + тычиночная нить: мужская часть.")),
    P(186, 128, t("Filament", "Առէջաթել", "Тычиночная нить"), t("The stalk that holds the anther up where insects or wind will brush against it.", "Ցողունիկ, որը փոշանոթը պահում է վերևում, որտեղ միջատները կամ քամին կդիպչեն նրան։", "Ножка, держащая пыльник там, где его коснутся насекомые или ветер.")),
    P(160, 66, t("Stigma", "Սպի", "Рыльце"), t("The sticky top of the pistil that catches pollen. Pistil = stigma + style + ovary: the female part.", "Վարսանդի կպչուն գագաթը, որը որսում է ծաղկափոշին։ Վարսանդ = սպի + սյունիկ + սերմնարան՝ իգական մասը։", "Липкая верхушка пестика, ловящая пыльцу. Пестик = рыльце + столбик + завязь: женская часть.")),
    P(160, 104, t("Style", "Սյունիկ", "Столбик"), t("A pollen tube grows down through the style to reach the ovules.", "Փոշեխողովակն աճում է սյունիկի միջով դեպի սերմնաբողբոջները։", "Пыльцевая трубка прорастает вниз по столбику к семязачаткам.")),
    P(160, 150, t("Ovary", "Սերմնարան", "Завязь"), t("Holds the ovules. After fertilisation the ovules become seeds and the ovary becomes the fruit.", "Պարունակում է սերմնաբողբոջները։ Բեղմնավորումից հետո սերմնաբողբոջները դառնում են սերմեր, իսկ սերմնարանը՝ պտուղ։", "Содержит семязачатки. После оплодотворения они становятся семенами, а завязь — плодом.")),
    P(160, 182, t("Receptacle", "Ծաղկահատակ", "Цветоложе"), t("The swollen top of the flower stalk that all the other parts grow from.", "Ծաղկակրի ուռած գագաթը, որից աճում են մնացած բոլոր մասերը։", "Расширенная верхушка цветоножки, из которой растут все остальные части.")),
  ],
};

const seed: Diagram = {
  title: t("Inside a bean seed", "Լոբու սերմի ներսը", "Внутри семени фасоли"),
  draw: () => (
    <g>
      <path d="M60,110 C60,40 160,30 220,50 C280,70 280,170 210,180 C150,190 60,180 60,110 Z" fill="#fef3c7" stroke="#92400e" strokeWidth="5" />
      <path d="M72,110 C72,52 160,44 214,62 C266,80 266,162 208,168 C152,176 72,166 72,110 Z" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
      <path d="M86,112 C86,64 160,56 206,72 C250,88 250,154 204,158 C156,164 86,156 86,112 Z" fill="#fcd34d" stroke="#b45309" strokeDasharray="4 3" />
      <path d="M220,100 C236,104 240,120 232,134 C228,142 214,140 214,132" fill="#86efac" stroke="#15803d" strokeWidth="2" />
      <path d="M216,98 C206,86 196,84 190,90" fill="none" stroke="#15803d" strokeWidth="3" />
      <path d="M190,90 l-8,-6 m8,6 l-9,2" stroke="#16a34a" strokeWidth="3" />
      <ellipse cx="262" cy="112" rx="6" ry="12" fill="#78350f" />
    </g>
  ),
  parts: [
    P(140, 40, t("Seed coat", "Սերմնամաշկ", "Семенная кожура"), t("A tough outer skin that protects the embryo from damage and drying out.", "Ամուր արտաքին թաղանթ, որը սաղմը պաշտպանում է վնասվելուց և չորանալուց։", "Прочная наружная кожура защищает зародыш от повреждений и высыхания.")),
    P(150, 116, t("Cotyledon", "Շաքիլ", "Семядоля"), t("A seed leaf full of stored food. Beans have two (dicots); maize and wheat have one (monocots) and store food in the endosperm.", "Պահեստային սննդով լի սերմնատերև։ Լոբին ունի երկու շաքիլ (երկշաքիլավոր), եգիպտացորենն ու ցորենը՝ մեկ (միաշաքիլավոր) և սնունդը պահում են էնդոսպերմում։", "Зародышевый лист с запасом пищи. У фасоли их две (двудольные), у кукурузы и пшеницы одна (однодольные), а запас — в эндосперме.")),
    P(232, 122, t("Embryonic root", "Սաղմնային արմատիկ", "Зародышевый корешок"), t("The first part to come out when the seed germinates; it grows down into the soil.", "Առաջին մասը, որ դուրս է գալիս սերմի ծլելիս․ աճում է դեպի հող։", "Первым выходит при прорастании семени и растёт вниз, в почву.")),
    P(190, 90, t("Embryonic shoot", "Սաղմնային բողբոջ", "Зародышевая почечка"), t("A tiny bud with the first true leaves, folded and ready to grow up towards the light.", "Փոքրիկ բողբոջ առաջին իսկական տերևներով, ծալված և պատրաստ աճելու դեպի լույսը։", "Крошечная почка с первыми настоящими листьями, сложенными и готовыми расти к свету.")),
    P(262, 112, t("Hilum", "Սերմնասպի", "Рубчик"), t("The scar where the seed was attached to the pod. Water enters through a tiny hole beside it.", "Սպին, որտեղ սերմը կպած էր պատիճին։ Ջուրը ներս է մտնում կողքի փոքրիկ անցքով։", "Рубец, где семя крепилось к бобу. Рядом крошечное отверстие, через которое входит вода.")),
  ],
};

const mushroom: Diagram = {
  title: t("A cap mushroom", "Գլխարկավոր սունկ", "Шляпочный гриб"),
  w: 320, h: 230,
  draw: () => (
    <g>
      <rect x="0" y="176" width="320" height="54" fill="#d6d3d1" />
      {Array.from({ length: 14 }, (_, k) => <path key={k} d={`M160,200 q${-120 + k * 18},10 ${-140 + k * 21},${18 + (k % 3) * 6}`} fill="none" stroke="#f5f5f4" strokeWidth="1.5" />)}
      <path d="M144,178 L148,96 L172,96 L176,178 Q160,186 144,178 Z" fill="#fafaf9" stroke="#a8a29e" strokeWidth="2" />
      <path d="M146,124 Q160,134 174,124 L176,132 Q160,142 144,132 Z" fill="#e7e5e4" stroke="#a8a29e" />
      <path d="M60,96 C60,30 260,30 260,96 Z" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2" />
      {[[110, 60], [150, 46], [196, 56], [230, 80], [86, 82]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="6" fill="#fff" />)}
      <path d="M62,96 L258,96 L230,104 L90,104 Z" fill="#fef3c7" stroke="#d6d3d1" />
      {Array.from({ length: 16 }, (_, k) => <line key={k} x1={70 + k * 12} y1="97" x2={92 + k * 9} y2="104" stroke="#a8a29e" />)}
    </g>
  ),
  parts: [
    P(160, 50, t("Cap", "Գլխարկ", "Шляпка"), t("The top of the fruiting body. The part above ground is only the 'fruit' of a much larger fungus.", "Պտղամարմնի վերին մասը։ Գետնից վեր մասը շատ ավելի մեծ սնկի միայն «պտուղն» է։", "Верх плодового тела. Над землёй — лишь «плод» гораздо большего гриба.")),
    P(110, 100, t("Gills", "Թիթեղներ", "Пластинки"), t("Thin plates under the cap that make millions of spores. Some mushrooms have tubes instead of gills.", "Գլխարկի տակ բարակ թիթեղներ, որոնք միլիոնավոր սպորներ են առաջացնում։ Որոշ սնկեր թիթեղների փոխարեն ունեն խողովակներ։", "Тонкие пластинки под шляпкой образуют миллионы спор. У некоторых грибов вместо пластинок трубочки.")),
    P(160, 128, t("Ring", "Օղակ", "Кольцо"), t("The remains of a veil that covered the gills of the young mushroom.", "Քողի մնացորդներ, որը ծածկում էր երիտասարդ սնկի թիթեղները։", "Остаток покрывала, закрывавшего пластинки молодого гриба.")),
    P(160, 160, t("Stalk", "Ոտիկ", "Ножка"), t("Lifts the cap so that the wind can carry the spores away.", "Բարձրացնում է գլխարկը, որպեսզի քամին կարողանա տանել սպորները։", "Поднимает шляпку, чтобы ветер разносил споры.")),
    P(60, 204, t("Mycelium", "Միցելիում", "Грибница"), t("A web of thin threads (hyphae) spread through the soil: the main body of the fungus. Many trees exchange food with it through their roots.", "Բարակ թելերի (հիֆերի) ցանց, որը տարածված է հողում․ սնկի հիմնական մարմինն է։ Շատ ծառեր արմատների միջոցով սննդանյութեր են փոխանակում դրա հետ։", "Сеть тонких нитей (гиф) в почве — главное тело гриба. Многие деревья обмениваются с ней питанием через корни (микориза).")),
  ],
};

/* ---------------- animals ---------------- */

const insect: Diagram = {
  title: t("The body of an insect", "Միջատի մարմինը", "Тело насекомого"),
  draw: () => (
    <g>
      <ellipse cx="120" cy="80" rx="46" ry="22" fill="#e0f2fe" stroke="#0ea5e9" opacity="0.85" transform="rotate(-20 120 80)" />
      <ellipse cx="190" cy="80" rx="40" ry="18" fill="#e0f2fe" stroke="#0ea5e9" opacity="0.85" transform="rotate(20 190 80)" />
      <circle cx="80" cy="120" r="20" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
      <ellipse cx="70" cy="114" rx="7" ry="10" fill="#1e1b4b" />
      <path d="M68,102 Q50,70 40,60 M78,100 Q72,66 70,52" fill="none" stroke="#92400e" strokeWidth="2.5" />
      <ellipse cx="140" cy="120" rx="34" ry="24" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
      <ellipse cx="225" cy="124" rx="56" ry="28" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
      {[200, 222, 244].map((x) => <path key={x} d={`M${x},98 Q${x + 6},124 ${x},150`} fill="none" stroke="#1e1b4b" strokeWidth="5" />)}
      {[118, 140, 162].map((x, k) => <path key={x} d={`M${x},140 L${x - 14 + k * 14},170 L${x - 24 + k * 24},196`} fill="none" stroke="#92400e" strokeWidth="3" />)}
      <path d="M66,134 l-6,10" stroke="#92400e" strokeWidth="3" />
    </g>
  ),
  parts: [
    P(80, 136, t("Head", "Գլուխ", "Голова"), t("Carries the sense organs and the mouthparts, which differ with diet: biting in beetles, sucking in butterflies, licking in bees.", "Կրում է զգայարանները և բերանային օրգանները, որոնք տարբեր են ըստ սննդի՝ կրծող բզեզների մոտ, ծծող թիթեռների մոտ, լիզող մեղուների մոտ։", "Несёт органы чувств и ротовой аппарат, который зависит от пищи: грызущий у жуков, сосущий у бабочек, лижущий у пчёл.")),
    P(70, 112, t("Compound eye", "Բարդ (ֆասետային) աչք", "Сложный (фасеточный) глаз"), t("Made of thousands of tiny units, each seeing one dot of the picture. Insects are excellent at noticing movement.", "Կազմված է հազարավոր փոքրիկ միավորներից, որոնցից յուրաքանչյուրը տեսնում է պատկերի մեկ կետը։ Միջատները հիանալի նկատում են շարժումը։", "Состоит из тысяч крошечных глазков, каждый видит одну точку картины. Насекомые отлично замечают движение.")),
    P(48, 66, t("Antennae", "Բեղիկներ", "Усики"), t("One pair of feelers for touch and smell. A male moth can smell a female from far away with them.", "Մեկ զույգ շոշափուկներ՝ հպման և հոտառության համար։ Արու ցեցը դրանցով կարող է հեռվից զգալ էգի հոտը։", "Одна пара усиков для осязания и обоняния. Самец бабочки чует ими самку издалека.")),
    P(140, 120, t("Thorax", "Կրծքային հատված", "Грудь"), t("Three segments, each with a pair of legs: six legs in all. Most insects also have two pairs of wings here.", "Երեք հատված, յուրաքանչյուրը մեկ զույգ ոտքով՝ ընդամենը վեց ոտք։ Միջատների մեծ մասն այստեղ ունի նաև երկու զույգ թև։", "Три сегмента, на каждом пара ног: всего шесть ног. У большинства насекомых здесь же две пары крыльев.")),
    P(120, 70, t("Wings", "Թևեր", "Крылья"), t("Outgrowths of the body wall, not changed legs. Flies have only one pair; the second became tiny balancers.", "Մարմնի պատի ելուստներ են, ոչ թե փոփոխված ոտքեր։ Ճանճերն ունեն միայն մեկ զույգ, երկրորդը վերածվել է փոքրիկ հավասարակշռիչների։", "Выросты стенки тела, а не видоизменённые ноги. У мух только одна пара; вторая превратилась в крошечные жужжальца.")),
    P(250, 124, t("Abdomen", "Փոր", "Брюшко"), t("Holds digestion and reproduction. Tiny holes along the sides (spiracles) let air into breathing tubes.", "Պարունակում է մարսողական և սեռական օրգանները։ Կողքերի փոքր անցքերը (շնչանցքերը) օդը տանում են շնչափողեր։", "Здесь пищеварение и размножение. Крошечные отверстия по бокам (дыхальца) впускают воздух в трахеи.")),
    P(140, 190, t("Jointed legs", "Հոդավոր ոտքեր", "Членистые ноги"), t("Insects are arthropods: 'jointed feet'. Their hard outer skeleton must be moulted to grow.", "Միջատները հոդվածոտանիներ են։ Նրանց կոշտ արտաքին կմախքը պետք է թափվի, որպեսզի աճեն։", "Насекомые — членистоногие. Их твёрдый наружный скелет приходится сбрасывать (линька), чтобы расти.")),
  ],
};

const fish: Diagram = {
  title: t("The body of a fish", "Ձկան մարմինը", "Тело рыбы"),
  draw: () => (
    <g>
      <path d="M40,110 C80,50 200,50 250,104 L300,64 L290,110 L300,156 L250,116 C200,170 80,170 40,110 Z" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2.5" />
      <path d="M130,64 C150,30 190,34 200,66 Z" fill="#60a5fa" stroke="#1d4ed8" />
      <path d="M180,152 C186,176 204,178 214,146 Z" fill="#60a5fa" stroke="#1d4ed8" />
      <path d="M130,150 C130,176 150,180 156,152 Z" fill="#60a5fa" stroke="#1d4ed8" />
      <path d="M100,120 C112,142 136,144 130,118 Z" fill="#60a5fa" stroke="#1d4ed8" />
      <path d="M92,84 C104,104 104,124 92,140" fill="none" stroke="#1e3a8a" strokeWidth="3" />
      <circle cx="70" cy="100" r="7" fill="#fff" stroke="#1e3a8a" /><circle cx="70" cy="100" r="3" fill="#1e3a8a" />
      <path d="M100,104 C150,96 200,100 250,108" fill="none" stroke="#1e3a8a" strokeDasharray="3 3" />
      {Array.from({ length: 6 }, (_, k) => <path key={k} d={`M${150 + k * 14},120 q6,-6 12,0`} fill="none" stroke="#1d4ed8" opacity="0.6" />)}
    </g>
  ),
  parts: [
    P(165, 52, t("Dorsal fin", "Մեջքի լողակ", "Спинной плавник"), t("Keeps the fish upright and stops it rolling over.", "Ձուկը պահում է ուղիղ և թույլ չի տալիս շրջվել։", "Держит рыбу вертикально и не даёт ей перевернуться.")),
    P(290, 110, t("Tail fin", "Պոչային լողակ", "Хвостовой плавник"), t("Sweeps from side to side and drives the fish forward.", "Շարժվում է կողքից կողք և ձուկը մղում առաջ։", "Двигаясь из стороны в сторону, толкает рыбу вперёд.")),
    P(118, 128, t("Pectoral fins", "Կրծքային լողակներ", "Грудные плавники"), t("Paired fins for steering, braking and hovering; in land animals the same pair became the front limbs.", "Զույգ լողակներ՝ ղեկավարելու, արգելակելու և տեղում մնալու համար․ ցամաքային կենդանիների մոտ նույն զույգը դարձել է առջևի վերջույթներ։", "Парные плавники для поворотов, торможения и зависания; у наземных животных эта пара стала передними конечностями.")),
    P(143, 162, t("Pelvic fins", "Փորային լողակներ", "Брюшные плавники"), t("The second paired fins, matching the hind limbs of land vertebrates.", "Երկրորդ զույգ լողակները, որոնք համապատասխանում են ցամաքային ողնաշարավորների հետին վերջույթներին։", "Вторая пара плавников, соответствует задним конечностям наземных позвоночных.")),
    P(98, 112, t("Gill cover", "Խռիկային կափարիչ", "Жаберная крышка"), t("Protects the gills. Water enters the mouth, flows over the gills, where oxygen passes into the blood, and leaves here.", "Պաշտպանում է խռիկները։ Ջուրը մտնում է բերան, անցնում խռիկների վրայով, որտեղ թթվածինն անցնում է արյան մեջ, և դուրս է գալիս այստեղից։", "Защищает жабры. Вода входит через рот, омывает жабры, где кислород переходит в кровь, и выходит здесь.")),
    P(220, 104, t("Lateral line", "Կողային գիծ", "Боковая линия"), t("A row of sense organs that feel movements and pressure in the water, even in the dark.", "Զգայական օրգանների շարք, որը զգում է ջրի շարժումները և ճնշումը, նույնիսկ մթության մեջ։", "Ряд органов чувств, ощущающих движение и давление воды даже в темноте.")),
    P(170, 124, t("Scales", "Թեփուկներ", "Чешуя"), t("Overlapping plates covered with slime. Like tree rings, they show yearly growth, so scales tell a fish's age.", "Լորձով պատված իրար վրա դասավորված թիթեղներ։ Ծառի օղակների պես ցույց են տալիս տարեկան աճը, ուստի թեփուկներով կարելի է իմանալ ձկան տարիքը։", "Налегающие пластинки, покрытые слизью. Как годичные кольца, показывают ежегодный рост, по ним узнают возраст рыбы.")),
  ],
};

/* ---------------- human organ systems ---------------- */

const heart: Diagram = {
  title: t("The human heart", "Մարդու սիրտը", "Сердце человека"),
  hint: t("As in a doctor's picture, the heart faces you: its right side is on your left. Tap a part.", "Ինչպես բժշկական նկարում, սիրտը նայում է քեզ․ նրա աջ կողմը քո ձախ կողմում է։ Հպի՛ր մասին։", "Как на рисунке у врача, сердце обращено к тебе: его правая сторона слева от тебя. Нажми на часть."),
  w: 320, h: 230,
  draw: () => (
    <g>
      <path d="M150,40 L150,10 L176,10 L176,30 C200,10 240,10 236,36" fill="none" stroke="#dc2626" strokeWidth="14" strokeLinecap="round" />
      <path d="M120,20 L120,70" stroke="#2563eb" strokeWidth="14" strokeLinecap="round" />
      <path d="M120,150 L120,210" stroke="#2563eb" strokeWidth="14" strokeLinecap="round" />
      <path d="M186,56 C196,36 220,30 250,40" fill="none" stroke="#2563eb" strokeWidth="11" strokeLinecap="round" />
      <path d="M228,84 L282,70 M228,98 L282,104" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
      <path d="M100,70 C96,50 150,44 160,62 C170,44 230,48 228,74 C246,110 220,180 168,214 C120,186 84,130 100,70 Z" fill="#fecaca" stroke="#991b1b" strokeWidth="2" />
      <path d="M160,62 L164,214" stroke="#991b1b" strokeWidth="3" />
      <path d="M102,112 L226,112" stroke="#991b1b" strokeWidth="2" strokeDasharray="5 3" />
      <rect x="104" y="72" width="54" height="38" rx="10" fill="#bfdbfe" opacity="0.8" />
      <rect x="166" y="72" width="58" height="38" rx="10" fill="#fca5a5" opacity="0.8" />
      <path d="M106,116 L158,116 L160,200 C130,180 110,150 106,116 Z" fill="#93c5fd" opacity="0.8" />
      <path d="M168,116 L224,116 C220,160 196,190 166,208 Z" fill="#f87171" opacity="0.8" />
      <path d="M126,108 l6,8 l6,-8 M190,108 l6,8 l6,-8" stroke="#fff" strokeWidth="2" fill="none" />
    </g>
  ),
  parts: [
    P(130, 90, t("Right atrium", "Աջ նախասիրտ", "Правое предсердие"), t("Receives blood low in oxygen from the whole body through the venae cavae.", "Սիներակներով ստանում է թթվածնով աղքատ արյուն ամբողջ մարմնից։", "Принимает бедную кислородом кровь от всего тела по полым венам.")),
    P(132, 150, t("Right ventricle", "Աջ փորոք", "Правый желудочек"), t("Pumps that blood to the lungs: the start of the pulmonary (small) circulation.", "Այդ արյունը մղում է դեպի թոքեր՝ թոքային (փոքր) շրջանառության սկիզբը։", "Нагнетает эту кровь в лёгкие: начало малого круга кровообращения.")),
    P(196, 90, t("Left atrium", "Ձախ նախասիրտ", "Левое предсердие"), t("Receives oxygen-rich blood back from the lungs through the pulmonary veins.", "Թոքային երակներով ստանում է թթվածնով հարուստ արյուն թոքերից։", "Принимает богатую кислородом кровь из лёгких по лёгочным венам.")),
    P(196, 152, t("Left ventricle", "Ձախ փորոք", "Левый желудочек"), t("Pumps blood to the whole body. Its wall is the thickest because it pushes hardest.", "Արյունը մղում է ամբողջ մարմնով։ Նրա պատը ամենահաստն է, քանի որ ամենաուժեղն է մղում։", "Гонит кровь по всему телу. Его стенка самая толстая, потому что давит сильнее всех.")),
    P(214, 22, t("Aorta", "Աորտա", "Аорта"), t("The largest artery, carrying oxygen-rich blood from the left ventricle into the systemic (large) circulation.", "Ամենամեծ զարկերակը, որը ձախ փորոքից թթվածնով հարուստ արյունը տանում է մեծ շրջանառություն։", "Самая крупная артерия: несёт богатую кислородом кровь из левого желудочка в большой круг.")),
    P(244, 40, t("Pulmonary artery", "Թոքային զարկերակ", "Лёгочная артерия"), t("Takes blood from the right ventricle to the lungs. It is an artery that carries oxygen-poor blood: arteries are named by direction, away from the heart.", "Արյունը աջ փորոքից տանում է թոքեր։ Սա զարկերակ է, որը թթվածնով աղքատ արյուն է տանում․ զարկերակներն անվանվում են ըստ ուղղության՝ սրտից դուրս։", "Несёт кровь из правого желудочка в лёгкие. Это артерия с бедной кислородом кровью: артерии названы по направлению — от сердца.")),
    P(120, 196, t("Vena cava", "Սիներակ", "Полая вена"), t("The two largest veins (upper and lower) bring blood from the body back to the right atrium.", "Երկու ամենամեծ երակները (վերին և ստորին) արյունը մարմնից վերադարձնում են աջ նախասիրտ։", "Две крупнейшие вены (верхняя и нижняя) возвращают кровь от тела в правое предсердие.")),
    P(276, 90, t("Pulmonary veins", "Թոքային երակներ", "Лёгочные вены"), t("Bring oxygen-rich blood from the lungs into the left atrium.", "Թոքերից թթվածնով հարուստ արյունը բերում են ձախ նախասիրտ։", "Приносят богатую кислородом кровь из лёгких в левое предсердие.")),
    P(132, 112, t("Valves", "Փականներ", "Клапаны"), t("Flaps between atria and ventricles, and at the exits, that let blood flow only one way. Their closing makes the 'lub-dub' sound.", "Նախասրտերի և փորոքների միջև և ելքերում գտնվող փեղկեր, որոնք արյանը թույլ են տալիս հոսել միայն մեկ ուղղությամբ։ Դրանց փակվելն է առաջացնում սրտի «թուխկ-թուխկ» ձայնը։", "Створки между предсердиями и желудочками и на выходах пропускают кровь только в одну сторону. Их захлопывание даёт звук «тук-тук».")),
  ],
};

const lungs: Diagram = {
  title: t("The breathing system", "Շնչառական համակարգը", "Дыхательная система"),
  w: 320, h: 230,
  draw: () => (
    <g>
      <path d="M140,14 C150,8 172,8 180,14 L176,40 L144,40 Z" fill="#fecdd3" stroke="#be123c" />
      <rect x="150" y="40" width="20" height="60" rx="6" fill="#e2e8f0" stroke="#64748b" />
      {[48, 58, 68, 78, 88].map((y) => <line key={y} x1="150" y1={y} x2="170" y2={y} stroke="#94a3b8" />)}
      <path d="M152,100 L120,124 M168,100 L200,124" stroke="#64748b" strokeWidth="9" strokeLinecap="round" />
      <path d="M140,96 C90,90 70,140 72,190 C100,198 130,196 144,186 Z" fill="#fda4af" stroke="#be123c" strokeWidth="2" />
      <path d="M180,96 C230,90 250,140 248,190 C220,198 190,196 176,186 Z" fill="#fda4af" stroke="#be123c" strokeWidth="2" />
      <path d="M120,124 L100,150 M120,124 L120,160 M200,124 L220,150 M200,124 L200,160" stroke="#9f1239" strokeWidth="3" />
      <path d="M60,206 Q160,176 260,206" fill="none" stroke="#7c2d12" strokeWidth="5" />
      <circle cx="284" cy="150" r="22" fill="#fff" stroke="#be123c" />
      {[[276, 142], [290, 142], [283, 156], [272, 156], [295, 156]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="6" fill="#fecdd3" stroke="#e11d48" />)}
      <line x1="220" y1="150" x2="262" y2="150" stroke="#be123c" strokeDasharray="3 3" />
    </g>
  ),
  parts: [
    P(160, 22, t("Larynx", "Կոկորդ", "Гортань"), t("Holds the vocal cords. When you swallow, the epiglottis closes it so food goes down the oesophagus.", "Պարունակում է ձայնալարերը։ Կուլ տալիս մակկոկորդը փակում է այն, որպեսզի սնունդը գնա կերակրափող։", "Здесь голосовые связки. При глотании надгортанник закрывает её, и пища идёт в пищевод.")),
    P(160, 70, t("Trachea", "Շնչափող", "Трахея"), t("The windpipe, held open by C-shaped rings of cartilage and lined with cilia that sweep dust up and out.", "Շնչուղին, որը բաց է պահվում C-աձև աճառային կիսաօղակներով և պատված է թարթիչներով, որոնք փոշին դուրս են մղում։", "Дыхательное горло: держится открытым благодаря хрящевым полукольцам, выстлано ресничками, выметающими пыль.")),
    P(120, 124, t("Bronchi", "Բրոնխներ", "Бронхи"), t("The trachea splits into two bronchi, which branch again and again like the roots of a tree.", "Շնչափողը բաժանվում է երկու բրոնխի, որոնք ճյուղավորվում են կրկին ու կրկին, ինչպես ծառի արմատները։", "Трахея делится на два бронха, которые ветвятся снова и снова, как корни дерева.")),
    P(228, 170, t("Lungs", "Թոքեր", "Лёгкие"), t("Spongy organs in the chest. The left lung is a little smaller, to make room for the heart.", "Սպունգանման օրգաններ կրծքավանդակում։ Ձախ թոքը մի փոքր փոքր է՝ սրտի համար տեղ թողնելու համար։", "Губчатые органы в грудной клетке. Левое лёгкое чуть меньше, чтобы освободить место сердцу.")),
    P(284, 128, t("Alveoli", "Ալվեոլներ", "Альвеолы"), t("About 300–500 million tiny air sacs with walls one cell thick. Oxygen passes into the blood and carbon dioxide out.", "Մոտ 300–500 միլիոն փոքրիկ օդապարկեր՝ մեկ բջջի հաստությամբ պատերով։ Թթվածինն անցնում է արյան մեջ, իսկ ածխաթթու գազը՝ դուրս։", "Около 300–500 миллионов крошечных пузырьков со стенкой в одну клетку. Кислород переходит в кровь, углекислый газ — наружу.")),
    P(160, 192, t("Diaphragm", "Ստոծանի", "Диафрагма"), t("A dome of muscle under the lungs. When it contracts and flattens, the chest gets bigger and air rushes in.", "Մկանային գմբեթ թոքերի տակ։ Երբ այն կծկվում և տափակում է, կրծքավանդակը մեծանում է, և օդը ներս է հոսում։", "Мышечный купол под лёгкими. Когда он сокращается и уплощается, грудная полость растёт и воздух входит внутрь.")),
  ],
};

const digestive: Diagram = {
  title: t("The digestive system", "Մարսողական համակարգը", "Пищеварительная система"),
  w: 320, h: 240,
  draw: () => (
    <g>
      <ellipse cx="160" cy="18" rx="20" ry="10" fill="#fecdd3" stroke="#be123c" />
      <path d="M160,28 L160,82" stroke="#f472b6" strokeWidth="8" strokeLinecap="round" />
      <path d="M116,80 C90,84 92,120 128,116 L140,92 Z" fill="#7c2d12" opacity="0.85" />
      <path d="M160,82 C200,70 220,100 206,120 C194,136 168,128 164,112" fill="#fbcfe8" stroke="#be185d" strokeWidth="2" />
      <path d="M156,124 C176,130 196,128 214,122" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" />
      <path d="M110,146 L110,206 Q110,214 120,214 L200,214 Q210,214 210,206 L210,146 Q210,138 200,138 L120,138 Q110,138 110,146 Z" fill="none" stroke="#a16207" strokeWidth="12" />
      <path d="M128,150 q16,10 32,0 q16,-10 32,0 M128,166 q16,10 32,0 q16,-10 32,0 M128,182 q16,10 32,0 q16,-10 32,0 M128,198 q16,10 32,0 q16,-10 32,0" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
      <path d="M160,214 L160,236" stroke="#a16207" strokeWidth="9" />
    </g>
  ),
  parts: [
    P(160, 18, t("Mouth", "Բերանի խոռոչ", "Ротовая полость"), t("Teeth chew; saliva wets the food and its enzyme amylase starts breaking down starch.", "Ատամները ծամում են, թուքը թրջում է սնունդը, և նրա ամիլազ ֆերմենտը սկսում է օսլայի քայքայումը։", "Зубы пережёвывают; слюна смачивает пищу, а её фермент амилаза начинает расщеплять крахмал.")),
    P(160, 56, t("Oesophagus", "Կերակրափող", "Пищевод"), t("A muscular tube that squeezes food down in waves (peristalsis), so you can swallow even upside down.", "Մկանային խողովակ, որը սնունդը ալիքաձև սեղմումներով (պերիստալտիկա) մղում է ներքև, ուստի կարող ես կուլ տալ նույնիսկ գլխիվայր։", "Мышечная трубка проталкивает пищу волнами (перистальтика), поэтому глотать можно даже вниз головой.")),
    P(196, 96, t("Stomach", "Ստամոքս", "Желудок"), t("Churns food with acid and pepsin, which begins digesting proteins. Mucus protects its own wall.", "Սնունդը խառնում է թթվի և պեպսինի հետ, որը սկսում է սպիտակուցների մարսումը։ Լորձը պաշտպանում է նրա սեփական պատը։", "Перемешивает пищу с кислотой и пепсином, который начинает переваривать белки. Слизь защищает его стенку.")),
    P(112, 98, t("Liver", "Լյարդ", "Печень"), t("The largest gland. It makes bile, which breaks fat into droplets, and stores glucose as glycogen.", "Ամենամեծ գեղձը։ Արտադրում է լեղի, որը ճարպը տրոհում է կաթիլների, և գլյուկոզը պահեստավորում է գլիկոգենի ձևով։", "Самая крупная железа. Вырабатывает желчь, дробящую жир на капельки, и запасает глюкозу в виде гликогена.")),
    P(214, 124, t("Pancreas", "Ենթաստամոքսային գեղձ", "Поджелудочная железа"), t("Sends enzymes for proteins, fats and starch into the small intestine, and makes the hormone insulin.", "Սպիտակուցների, ճարպերի և օսլայի համար ֆերմենտներ է ուղարկում բարակ աղիք և արտադրում է ինսուլին հորմոնը։", "Посылает в тонкую кишку ферменты для белков, жиров и крахмала и вырабатывает гормон инсулин.")),
    P(160, 176, t("Small intestine", "Բարակ աղիք", "Тонкая кишка"), t("About 5–6 m long. Digestion finishes here, and millions of villi absorb the nutrients into the blood.", "Մոտ 5–6 մ երկարությամբ։ Մարսումն ավարտվում է այստեղ, և միլիոնավոր թավիկներ սննդանյութերը ներծծում են արյան մեջ։", "Длиной около 5–6 м. Здесь завершается переваривание, и миллионы ворсинок всасывают питательные вещества в кровь.")),
    P(214, 176, t("Large intestine", "Հաստ աղիք", "Толстая кишка"), t("Absorbs water. Its bacteria digest fibre and make some vitamins, such as vitamin K.", "Ներծծում է ջուրը։ Նրա բակտերիաները մարսում են բջջանքը և սինթեզում որոշ վիտամիններ, օրինակ՝ K վիտամինը։", "Всасывает воду. Её бактерии расщепляют клетчатку и вырабатывают некоторые витамины, например витамин K.")),
    P(160, 230, t("Rectum", "Ուղիղ աղիք", "Прямая кишка"), t("Stores the undigested remains until they leave the body.", "Պահում է չմարսված մնացորդները, մինչև դրանք դուրս գան մարմնից։", "Хранит непереваренные остатки, пока они не покинут тело.")),
  ],
};

const neuron: Diagram = {
  title: t("A nerve cell", "Նյարդային բջիջ", "Нервная клетка"),
  w: 320, h: 200,
  draw: () => (
    <g>
      {Array.from({ length: 7 }, (_, k) => {
        const a = Math.PI * (0.55 + k * 0.13);
        return <path key={k} d={`M60,100 L${60 + Math.cos(a) * 46},${100 - Math.sin(a) * 46} l${Math.cos(a + 0.5) * 12},${-Math.sin(a + 0.5) * 12}`} fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />;
      })}
      <circle cx="60" cy="100" r="22" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
      <circle cx="60" cy="100" r="8" fill="#7c3aed" />
      <line x1="82" y1="100" x2="268" y2="100" stroke="#7c3aed" strokeWidth="4" />
      {[96, 134, 172, 210].map((x) => <rect key={x} x={x} y="92" width="32" height="16" rx="8" fill="#fef3c7" stroke="#d97706" />)}
      {[-26, -10, 8, 24].map((dy, k) => <g key={k}><line x1="268" y1="100" x2="296" y2={100 + dy} stroke="#7c3aed" strokeWidth="3" /><circle cx="298" cy={100 + dy} r="5" fill="#a78bfa" /></g>)}
      <path d="M120,130 L230,130" stroke="#e11d48" strokeWidth="2" markerEnd="url(#nv-arrow)" />
      <defs><marker id="nv-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#e11d48" /></marker></defs>
    </g>
  ),
  parts: [
    P(36, 60, t("Dendrites", "Դենդրիտներ", "Дендриты"), t("Short branches that receive signals from other cells and carry them towards the cell body.", "Կարճ ճյուղեր, որոնք ազդանշաններ են ստանում այլ բջիջներից և տանում դեպի բջջի մարմինը։", "Короткие отростки принимают сигналы от других клеток и несут их к телу клетки.")),
    P(60, 100, t("Cell body", "Բջջի մարմին", "Тело клетки"), t("Contains the nucleus. Grey matter of the brain and spinal cord is made of cell bodies.", "Պարունակում է կորիզը։ Գլխուղեղի և ողնուղեղի գորշ նյութը կազմված է բջջամարմիններից։", "Содержит ядро. Серое вещество мозга состоит из тел нейронов.")),
    P(126, 100, t("Axon", "Աքսոն", "Аксон"), t("One long fibre that carries the impulse away from the cell body. Some run from the spine to the toes, over a metre.", "Մեկ երկար թել, որը իմպուլսը տանում է բջջի մարմնից դուրս։ Որոշները ողնաշարից մինչև ոտնամատներ են ձգվում՝ մեկ մետրից ավելի։", "Один длинный отросток несёт импульс от тела клетки. Некоторые тянутся от позвоночника до пальцев ног, больше метра.")),
    P(204, 100, t("Myelin sheath", "Միելինային թաղանթ", "Миелиновая оболочка"), t("A fatty insulating wrap. The impulse jumps between its gaps, travelling up to about 100 m per second; white matter is white because of it.", "Ճարպային մեկուսիչ փաթաթան։ Իմպուլսը ցատկում է նրա ընդմիջումների միջև՝ շարժվելով մինչև վայրկյանում մոտ 100 մ արագությամբ․ սպիտակ նյութը սպիտակ է հենց դրա պատճառով։", "Жировая изолирующая обмотка. Импульс перескакивает между её перехватами со скоростью до ~100 м/с; белое вещество белое именно из-за неё.")),
    P(298, 74, t("Nerve endings", "Նյարդային վերջույթներ", "Нервные окончания"), t("Pass the signal to the next cell across a tiny gap, the synapse, using chemical messengers.", "Ազդանշանը փոխանցում են հաջորդ բջջին փոքրիկ ճեղքի՝ սինապսի միջով, քիմիական միջնորդների օգնությամբ։", "Передают сигнал следующей клетке через крошечную щель — синапс — с помощью химических посредников.")),
  ],
};

const ear: Diagram = {
  title: t("The ear", "Ականջը", "Ухо"),
  w: 320, h: 220,
  draw: () => (
    <g>
      <path d="M40,40 C10,60 10,150 40,180 C60,170 66,150 60,130 L60,90 C70,70 64,50 40,40 Z" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
      <path d="M60,100 L140,100 L140,120 L60,120 Z" fill="#ffedd5" stroke="#c2410c" />
      <path d="M140,92 L146,128" stroke="#e11d48" strokeWidth="4" />
      <circle cx="156" cy="104" r="6" fill="#fde68a" stroke="#a16207" /><circle cx="170" cy="98" r="5" fill="#fde68a" stroke="#a16207" /><path d="M176,100 L190,100 L190,112" fill="none" stroke="#a16207" strokeWidth="4" />
      <path d="M200,110 m-14,0 a14,14 0 1,0 28,0 a10,10 0 1,0 -20,0 a6,6 0 1,0 12,0" fill="none" stroke="#7c3aed" strokeWidth="5" transform="translate(28 14)" />
      <path d="M196,92 a14,14 0 1,1 20,-16 M200,90 a20,20 0 1,1 30,-6" fill="none" stroke="#0ea5e9" strokeWidth="4" />
      <path d="M160,130 C164,160 176,180 190,200" stroke="#94a3b8" strokeWidth="6" fill="none" />
      <path d="M248,118 C266,112 284,120 300,114" stroke="#facc15" strokeWidth="4" fill="none" />
    </g>
  ),
  parts: [
    P(30, 110, t("Outer ear", "Ականջախեցի", "Ушная раковина"), t("Collects sound waves and funnels them into the ear canal.", "Հավաքում է ձայնային ալիքները և ուղղում արտաքին լսողական անցուղի։", "Собирает звуковые волны и направляет их в слуховой проход.")),
    P(100, 110, t("Ear canal", "Լսողական անցուղի", "Слуховой проход"), t("About 2.5 cm long; its wax and hairs trap dust.", "Մոտ 2,5 սմ երկարությամբ․ ականջաքիմքը և մազիկները որսում են փոշին։", "Длиной около 2,5 см; сера и волоски задерживают пыль.")),
    P(143, 88, t("Eardrum", "Թմբկաթաղանթ", "Барабанная перепонка"), t("A thin membrane that vibrates when sound waves hit it.", "Բարակ թաղանթ, որը թրթռում է, երբ ձայնային ալիքները հարվածում են նրան։", "Тонкая перепонка колеблется, когда на неё падают звуковые волны.")),
    P(170, 98, t("Ossicles", "Լսողական ոսկրիկներ", "Слуховые косточки"), t("Hammer, anvil and stirrup, the smallest bones in the body. They pass the vibrations on and make them stronger.", "Մուրճիկ, սալիկ և ասպանդակ՝ մարմնի ամենափոքր ոսկորները։ Դրանք փոխանցում և ուժեղացնում են թրթռումները։", "Молоточек, наковальня и стремечко — самые маленькие кости тела. Передают колебания и усиливают их.")),
    P(228, 124, t("Cochlea", "Խխունջ", "Улитка"), t("A fluid-filled spiral. Hair cells inside turn the vibrations into nerve impulses; loud noise can damage them for ever.", "Հեղուկով լի պարույր։ Ներսի մազային բջիջները թրթռումները վերածում են նյարդային իմպուլսների․ ուժեղ աղմուկը կարող է ընդմիշտ վնասել դրանք։", "Спираль с жидкостью. Волосковые клетки внутри превращают колебания в нервные импульсы; громкий шум может повредить их навсегда.")),
    P(222, 70, t("Semicircular canals", "Կիսաբոլոր խողովակներ", "Полукружные каналы"), t("Three loops of fluid at right angles: the organ of balance, not of hearing.", "Հեղուկի երեք օղակ՝ իրար ուղղահայաց․ հավասարակշռության օրգան են, ոչ թե լսողության։", "Три петли с жидкостью под прямыми углами: орган равновесия, а не слуха.")),
    P(184, 190, t("Eustachian tube", "Եվստախյան փող", "Евстахиева труба"), t("Links the middle ear to the throat and evens out the pressure: that is the 'pop' when you swallow in a plane.", "Միջին ականջը կապում է կոկորդի հետ և հավասարեցնում ճնշումը․ դա է ինքնաթիռում կուլ տալիս լսվող «չխկոցը»։", "Соединяет среднее ухо с глоткой и выравнивает давление: это тот «щелчок», когда глотаешь в самолёте.")),
    P(296, 114, t("Auditory nerve", "Լսողական նյարդ", "Слуховой нерв"), t("Carries the impulses to the brain, where they are heard as sound.", "Իմպուլսները տանում է գլխուղեղ, որտեղ դրանք ընկալվում են որպես ձայն։", "Несёт импульсы в мозг, где они воспринимаются как звук.")),
  ],
};

const kidney: Diagram = {
  title: t("The kidney", "Երիկամը", "Почка"),
  draw: () => (
    <g>
      <path d="M150,30 C70,20 60,200 150,196 C190,194 196,150 176,132 C166,120 166,104 176,92 C196,74 190,32 150,30 Z" fill="#b45309" stroke="#78350f" strokeWidth="2.5" />
      <path d="M150,42 C88,36 80,186 150,184 C180,182 184,150 168,136 C156,124 156,100 168,88 C184,72 178,44 150,42 Z" fill="#f59e0b" />
      {[[110, 70], [100, 110], [110, 150], [134, 170], [134, 54]].map(([x, y], k) => <path key={k} d={`M${x - 10},${y - 10} L${x + 14},${y} L${x - 10},${y + 10} Z`} fill="#c2410c" />)}
      <path d="M160,94 C140,104 140,124 160,134 L176,124 L176,104 Z" fill="#fde68a" stroke="#a16207" />
      <path d="M176,118 C200,140 210,180 214,214" fill="none" stroke="#facc15" strokeWidth="6" />
      <path d="M178,98 L280,80" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
      <path d="M178,110 L280,110" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
    </g>
  ),
  parts: [
    P(84, 110, t("Cortex", "Կեղևային շերտ", "Корковое вещество"), t("The outer layer, where about a million nephrons filter the blood in tiny knots of capillaries.", "Արտաքին շերտը, որտեղ մոտ մեկ միլիոն նեֆրոններ զտում են արյունը մազանոթների փոքրիկ կծիկներում։", "Наружный слой, где около миллиона нефронов фильтруют кровь в клубочках капилляров.")),
    P(116, 110, t("Medulla", "Միջուկային շերտ", "Мозговое вещество"), t("Cone-shaped pyramids where the tubules take back water, so the urine becomes concentrated.", "Կոնաձև բուրգեր, որտեղ խողովակիկները ետ են ներծծում ջուրը, ուստի մեզը խտանում է։", "Конусовидные пирамиды, где канальцы возвращают воду, и моча становится концентрированной.")),
    P(156, 114, t("Renal pelvis", "Երիկամային ավազան", "Почечная лоханка"), t("Collects the urine from all the pyramids.", "Հավաքում է մեզը բոլոր բուրգերից։", "Собирает мочу со всех пирамид.")),
    P(212, 196, t("Ureter", "Միզածորան", "Мочеточник"), t("A tube carrying urine down to the bladder.", "Խողովակ, որը մեզը տանում է միզապարկ։", "Трубка, по которой моча стекает в мочевой пузырь.")),
    P(270, 82, t("Renal artery", "Երիկամային զարկերակ", "Почечная артерия"), t("Brings blood to be cleaned. About a fifth of the blood pumped by the heart passes through the kidneys.", "Բերում է մաքրվելիք արյունը։ Սրտի մղած արյան մոտ մեկ հինգերորդն անցնում է երիկամներով։", "Приносит кровь на очистку. Около пятой части крови, перекачиваемой сердцем, проходит через почки.")),
    P(270, 110, t("Renal vein", "Երիկամային երակ", "Почечная вена"), t("Takes the cleaned blood back to the heart.", "Մաքրված արյունը տանում է ետ՝ դեպի սիրտ։", "Уносит очищенную кровь обратно к сердцу.")),
  ],
};

/* ---------------- organelles ---------------- */

const chloroplast: Diagram = {
  title: t("The chloroplast", "Քլորոպլաստը", "Хлоропласт"),
  draw: () => (
    <g>
      <ellipse cx="160" cy="110" rx="140" ry="76" fill="#dcfce7" stroke="#15803d" strokeWidth="4" />
      <ellipse cx="160" cy="110" rx="132" ry="68" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      {[[80, 96], [130, 80], [190, 84], [240, 104], [110, 134], [180, 136]].map(([x, y], k) => (
        <g key={k}>{[0, 1, 2, 3, 4].map((j) => <rect key={j} x={x - 14} y={y - 12 + j * 5} width="28" height="4" rx="2" fill="#22c55e" stroke="#15803d" strokeWidth="0.6" />)}</g>
      ))}
      <path d="M94,96 L116,80 M144,80 L176,84 M204,84 L226,104" stroke="#16a34a" strokeWidth="2" />
      <circle cx="220" cy="148" r="8" fill="none" stroke="#7c3aed" strokeWidth="2" />
      <ellipse cx="70" cy="140" rx="12" ry="8" fill="#f5f5f4" stroke="#a8a29e" />
    </g>
  ),
  parts: [
    P(160, 36, t("Double membrane", "Կրկնակի թաղանթ", "Двойная мембрана"), t("Two membranes, like a mitochondrion's: a hint that both began as bacteria living inside other cells.", "Երկու թաղանթ, ինչպես միտոքոնդրիումինը․ ակնարկ այն մասին, որ երկուսն էլ ծագել են այլ բջիջների ներսում ապրող բակտերիաներից։", "Две мембраны, как у митохондрии: намёк, что обе произошли от бактерий, поселившихся в других клетках.")),
    P(130, 80, t("Granum", "Գրանա", "Грана"), t("A stack of thylakoids, like a pile of coins. The light stage takes place on their membranes: water is split and oxygen released.", "Թիլակոիդների կույտ, ինչպես մետաղադրամների շարան։ Լուսային փուլը կատարվում է նրանց թաղանթների վրա․ ջուրը ճեղքվում է, և անջատվում է թթվածին։", "Стопка тилакоидов, как столбик монет. На их мембранах идёт световая фаза: вода расщепляется, выделяется кислород.")),
    P(240, 104, t("Thylakoid", "Թիլակոիդ", "Тилакоид"), t("A flat disc whose membrane holds chlorophyll and makes ATP from light energy.", "Տափակ սկավառակ, որի թաղանթը պարունակում է քլորոֆիլ և լույսի էներգիայից ԱԵՖ է սինթեզում։", "Плоский диск, мембрана которого содержит хлорофилл и создаёт АТФ из энергии света.")),
    P(160, 160, t("Stroma", "Ստրոմա", "Строма"), t("The fluid around the grana, where the dark stage (Calvin cycle) builds glucose from carbon dioxide.", "Գրանաների շուրջ հեղուկը, որտեղ մթնային փուլը (Կալվինի ցիկլը) ածխաթթու գազից գլյուկոզ է կառուցում։", "Жидкость вокруг гран, где темновая фаза (цикл Кальвина) строит глюкозу из углекислого газа.")),
    P(220, 148, t("Own DNA", "Սեփական ԴՆԹ", "Собственная ДНК"), t("A small ring of DNA and its own ribosomes: chloroplasts make some of their proteins themselves.", "ԴՆԹ-ի փոքր օղակ և սեփական ռիբոսոմներ․ քլորոպլաստներն իրենց սպիտակուցների մի մասը սինթեզում են ինքնուրույն։", "Маленькое кольцо ДНК и свои рибосомы: часть белков хлоропласт делает сам.")),
    P(70, 140, t("Starch grain", "Օսլայի հատիկ", "Крахмальное зерно"), t("Glucose stored as starch. That is why a leaf kept in the light turns blue-black with iodine.", "Օսլայի ձևով պահեստավորված գլյուկոզ։ Ահա թե ինչու լույսի տակ մնացած տերևը յոդից կապտասևում է։", "Глюкоза, запасённая в виде крахмала. Поэтому лист, побывавший на свету, синеет от йода.")),
  ],
};

const mitochondrion: Diagram = {
  title: t("The mitochondrion", "Միտոքոնդրիումը", "Митохондрия"),
  draw: () => (
    <g>
      <ellipse cx="160" cy="110" rx="140" ry="72" fill="#ffedd5" stroke="#c2410c" strokeWidth="4" />
      <path d="M30,110 C30,60 70,46 90,46 L90,140 L110,140 L110,44 L130,42 L130,150 L150,150 L150,40 L170,40 L170,160 L190,160 L190,42 L210,44 L210,150 L230,150 L230,48 L250,54 L250,140 L270,140 C290,140 290,90 270,70 M30,110 C30,160 70,176 100,176 L220,176 C260,176 290,150 290,110" fill="#fed7aa" stroke="#ea580c" strokeWidth="2.5" />
      <circle cx="120" cy="164" r="7" fill="none" stroke="#7c3aed" strokeWidth="2" />
      {[[100, 60], [180, 70], [240, 160], [60, 130]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.5" fill="#1e1b4b" />)}
    </g>
  ),
  parts: [
    P(160, 38, t("Outer membrane", "Արտաքին թաղանթ", "Наружная мембрана"), t("Smooth, and lets small molecules through.", "Հարթ է և թողնում է փոքր մոլեկուլներին անցնել։", "Гладкая, пропускает небольшие молекулы.")),
    P(140, 96, t("Cristae", "Կրիստաներ", "Кристы"), t("Folds of the inner membrane. Folding gives a huge surface for the enzymes that make most of the cell's ATP using oxygen.", "Ներքին թաղանթի ծալքեր։ Ծալքավորումը հսկայական մակերես է տալիս այն ֆերմենտների համար, որոնք թթվածնի օգնությամբ սինթեզում են բջջի ԱԵՖ-ի մեծ մասը։", "Складки внутренней мембраны. Они дают огромную поверхность ферментам, которые с помощью кислорода делают большую часть АТФ клетки.")),
    P(200, 166, t("Matrix", "Մատրիքս", "Матрикс"), t("The inner fluid where the Krebs cycle breaks down the products of glucose and releases carbon dioxide.", "Ներքին հեղուկը, որտեղ Կրեբսի ցիկլը քայքայում է գլյուկոզի արգասիքները և անջատում ածխաթթու գազ։", "Внутренняя жидкость, где цикл Кребса расщепляет продукты распада глюкозы, выделяя углекислый газ.")),
    P(120, 164, t("Own DNA", "Սեփական ԴՆԹ", "Собственная ДНК"), t("Mitochondria have their own DNA, inherited almost only from the mother.", "Միտոքոնդրիումներն ունեն սեփական ԴՆԹ, որը ժառանգվում է գրեթե միայն մորից։", "У митохондрий своя ДНК, наследуемая почти только от матери.")),
    P(180, 70, t("Ribosomes", "Ռիբոսոմներ", "Рибосомы"), t("Small ribosomes, like those of bacteria: more evidence for their bacterial origin.", "Փոքր ռիբոսոմներ, ինչպես բակտերիաներինը․ նրանց բակտերիալ ծագման ևս մեկ ապացույց։", "Мелкие рибосомы, как у бактерий: ещё одно свидетельство их бактериального происхождения.")),
  ],
};

const membrane: Diagram = {
  title: t("The cell membrane", "Բջջաթաղանթը", "Клеточная мембрана"),
  w: 320, h: 200,
  draw: () => (
    <g>
      <rect x="0" y="0" width="320" height="60" fill="#eff6ff" />
      <rect x="0" y="140" width="320" height="60" fill="#fefce8" />
      {Array.from({ length: 22 }, (_, k) => {
        const x = 10 + k * 14;
        if (x > 120 && x < 166) return null;
        return <g key={k}>
          <circle cx={x} cy="70" r="6" fill="#60a5fa" /><path d={`M${x - 2},76 L${x - 2},98 M${x + 2},76 L${x + 2},98`} stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx={x} cy="130" r="6" fill="#60a5fa" /><path d={`M${x - 2},124 L${x - 2},102 M${x + 2},124 L${x + 2},102`} stroke="#f59e0b" strokeWidth="1.5" />
        </g>;
      })}
      <path d="M124,60 L140,60 L140,140 L124,140 Z M150,60 L166,60 L166,140 L150,140 Z" fill="#a78bfa" stroke="#6d28d9" />
      <ellipse cx="236" cy="100" rx="22" ry="28" fill="#f9a8d4" stroke="#be185d" />
      <path d="M236,72 l-8,-14 m8,14 l8,-16 m-8,16 l0,-20" stroke="#16a34a" strokeWidth="3" />
      <circle cx="228" cy="54" r="4" fill="#22c55e" /><circle cx="244" cy="52" r="4" fill="#22c55e" /><circle cx="236" cy="48" r="4" fill="#22c55e" />
      <rect x="70" y="84" width="8" height="18" rx="3" fill="#facc15" stroke="#a16207" />
      {[[145, 30], [145, 50], [145, 92]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="4" fill="#0ea5e9" />)}
    </g>
  ),
  parts: [
    P(40, 70, t("Phospholipid bilayer", "Ֆոսֆոլիպիդային երկշերտ", "Двойной слой фосфолипидов"), t("Two layers of molecules with water-loving heads outside and water-fearing tails inside, so the membrane seals itself.", "Մոլեկուլների երկու շերտ՝ ջրասեր գլխիկները դրսում, ջրավախ պոչերը՝ ներսում, ուստի թաղանթն ինքն իրեն փակում է։", "Два слоя молекул: гидрофильные головки снаружи, гидрофобные хвосты внутри, поэтому мембрана сама себя запечатывает.")),
    P(145, 120, t("Channel protein", "Անցուղային սպիտակուց", "Белок-канал"), t("A tunnel that lets particular ions or water through. Pumps also use ATP to move substances against the gradient.", "Թունել, որը թողնում է որոշակի իոններ կամ ջուր։ Պոմպերը նաև ԱԵՖ են ծախսում՝ նյութերը գրադիենտի դեմ տեղափոխելու համար։", "Тоннель, пропускающий определённые ионы или воду. Насосы тратят АТФ, чтобы перекачивать вещества против градиента.")),
    P(236, 100, t("Receptor protein", "Ընկալիչ սպիտակուց", "Белок-рецептор"), t("Recognises signals such as hormones, like a lock waiting for its key.", "Ճանաչում է ազդանշանները, օրինակ՝ հորմոնները, ինչպես կողպեքը, որ սպասում է իր բանալուն։", "Узнаёт сигналы, например гормоны, как замок, ждущий свой ключ.")),
    P(236, 46, t("Glycocalyx", "Գլիկոկալիքս", "Гликокаликс"), t("Sugar chains on the outside that act as the cell's ID card, which is how immune cells tell 'self' from 'foreign'.", "Արտաքին կողմի շաքարային շղթաներ, որոնք բջջի «անձնագիրն» են․ այդպես իմունային բջիջները տարբերում են «յուրայինը» «օտարից»։", "Цепочки сахаров снаружи — «паспорт» клетки: так иммунные клетки отличают «своё» от «чужого».")),
    P(74, 94, t("Cholesterol", "Խոլեստերին", "Холестерин"), t("Sits between the lipids and keeps the membrane neither too stiff nor too fluid.", "Տեղավորված է լիպիդների միջև և թաղանթը պահում է ոչ շատ կոշտ, ոչ էլ շատ հեղուկ։", "Располагается между липидами и держит мембрану не слишком жёсткой и не слишком жидкой.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = {
  plantcell, animalcell, bacterium, virus, amoeba, root, stem, leaf, flower, seed, mushroom, insect, fish, heart, lungs, digestive, neuron, ear, kidney, chloroplast, mitochondrion, membrane,
  ...DIAGRAMS_B,
};
