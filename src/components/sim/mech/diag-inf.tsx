"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for informatics: the computer, a home network, a flowchart, the memory pyramid, a neural network, a URL, an HTML tag, the CSS box, the operating system. */

const P = (x: number, y: number, name: Tr, text: Tr) => ({ x, y, name, text });
const Tx = ({ x, y, s, lang, size = 9, fill = "#1e1b4b", anchor = "middle", w = 900 }: { x: number; y: number; s: Tr; lang: ArtLang; size?: number; fill?: string; anchor?: "start" | "middle" | "end"; w?: number }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={fill}>{L(s, lang)}</text>
);

/* ---------------- the computer ---------------- */

const computer: Diagram = {
  title: t("Inside and around a computer", "Համակարգչի ներսում և շուրջը", "Внутри и вокруг компьютера"),
  draw: () => (
    <g>
      {/* monitor */}
      <rect x="10" y="22" width="128" height="86" rx="6" fill="#1e293b" />
      <rect x="16" y="28" width="116" height="72" rx="2" fill="#60a5fa" />
      <path d="M16,84 L46,58 L70,80 L92,62 L132,92 V100 H16 Z" fill="#15803d" opacity="0.8" />
      <circle cx="110" cy="44" r="8" fill="#fde047" />
      <rect x="66" y="108" width="16" height="16" fill="#334155" />
      <rect x="46" y="124" width="56" height="6" rx="3" fill="#334155" />
      {/* keyboard and mouse */}
      <rect x="10" y="150" width="120" height="34" rx="5" fill="#cbd5e1" stroke="#64748b" />
      {Array.from({ length: 30 }, (_, k) => <rect key={k} x={15 + (k % 10) * 11.4} y={155 + Math.floor(k / 10) * 9} width="9" height="7" rx="1.5" fill="#f8fafc" />)}
      <ellipse cx="148" cy="172" rx="9" ry="13" fill="#cbd5e1" stroke="#64748b" />
      <line x1="148" y1="159" x2="148" y2="168" stroke="#64748b" />
      <path d="M148,159 C148,150 156,146 166,148" fill="none" stroke="#64748b" />
      {/* the case, opened */}
      <rect x="172" y="10" width="140" height="202" rx="6" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
      <rect x="180" y="18" width="124" height="150" rx="3" fill="#166534" />
      {Array.from({ length: 7 }, (_, k) => <path key={k} d={`M${186 + k * 16},26 v40 h6`} stroke="#4ade80" strokeWidth="0.7" fill="none" opacity="0.6" />)}
      {/* CPU with its cooler */}
      <rect x="194" y="32" width="44" height="44" rx="3" fill="#94a3b8" stroke="#334155" />
      <circle cx="216" cy="54" r="18" fill="#475569" />
      {[0, 60, 120, 180, 240, 300].map((a) => <path key={a} d={`M216,54 l${14 * Math.cos((a * Math.PI) / 180)},${14 * Math.sin((a * Math.PI) / 180)}`} stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />)}
      <circle cx="216" cy="54" r="4" fill="#1e293b" />
      {/* RAM sticks */}
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <rect x={252 + k * 11} y="28" width="8" height="58" rx="1" fill="#1d4ed8" />
          {[0, 1, 2, 3].map((j) => <rect key={j} x={253.5 + k * 11} y={32 + j * 13} width="5" height="8" fill="#0f172a" />)}
        </g>
      ))}
      {/* SSD */}
      <rect x="192" y="104" width="62" height="16" rx="2" fill="#0f172a" />
      {[0, 1, 2].map((k) => <rect key={k} x={200 + k * 16} y="108" width="11" height="8" fill="#64748b" />)}
      <text x="244" y="115" fontSize="5" fontWeight="900" fill="#e2e8f0">SSD</text>
      {/* expansion slot with a graphics card */}
      <rect x="190" y="136" width="104" height="22" rx="2" fill="#334155" />
      <circle cx="218" cy="147" r="8" fill="#64748b" /><circle cx="262" cy="147" r="8" fill="#64748b" />
      {/* power supply */}
      <rect x="180" y="174" width="124" height="32" rx="3" fill="#475569" />
      <circle cx="210" cy="190" r="11" fill="#334155" stroke="#94a3b8" />
      {[0, 1, 2, 3].map((k) => <line key={k} x1="200" y1={184 + k * 4} x2="220" y2={184 + k * 4} stroke="#94a3b8" strokeWidth="0.8" />)}
      <path d="M232,184 h56 M232,190 h56 M232,196 h56" stroke="#facc15" strokeWidth="1.2" />
    </g>
  ),
  parts: [
    P(216, 54, t("Processor (CPU)", "Պրոցեսոր (CPU)", "Процессор (CPU)"), t("Carries out the program's commands. A 3 GHz processor does about 3 billion steps a second and has billions of transistors, so it gets hot: the fan on top keeps it cool.", "Կատարում է ծրագրի հրամանները։ 3 ԳՀց պրոցեսորը վայրկյանում անում է մոտ 3 միլիարդ քայլ և ունի միլիարդավոր տրանզիստորներ, ուստի տաքանում է․ վրայի օդափոխիչը սառեցնում է այն։", "Выполняет команды программы. Процессор на 3 ГГц делает около 3 миллиардов шагов в секунду и состоит из миллиардов транзисторов, поэтому греется: вентилятор сверху его охлаждает.")),
    P(268, 96, t("RAM", "Օպերատիվ հիշողություն (RAM)", "Оперативная память (RAM)"), t("Holds the programs and files that are open right now, typically 8 to 32 GB. It is hundreds of times faster than a disk but forgets everything when the power goes off: save your work!", "Պահում է հենց հիմա բացված ծրագրերն ու ֆայլերը, սովորաբար 8-ից 32 ԳԲ։ Այն սկավառակից հարյուրավոր անգամ արագ է, բայց հոսանքն անջատվելիս ամեն ինչ մոռանում է․ պահպանի՛ր աշխատանքդ։", "Хранит программы и файлы, открытые прямо сейчас, обычно от 8 до 32 ГБ. Она в сотни раз быстрее диска, но всё забывает при отключении питания: сохраняй работу!")),
    P(198, 112, t("SSD (storage)", "SSD (կրիչ)", "SSD (накопитель)"), t("Keeps files and programs for years, even without power. An SSD stores data in memory chips; an older hard disk (HDD) has a metal platter spinning about 7,200 times a minute.", "Պահում է ֆայլերն ու ծրագրերը տարիներով՝ նույնիսկ առանց հոսանքի։ SSD-ն տվյալները պահում է հիշողության միկրոսխեմաներում, իսկ ավելի հին կոշտ սկավառակը (HDD) ունի մետաղե սկավառակ, որը րոպեում պտտվում է մոտ 7200 անգամ։", "Хранит файлы и программы годами, даже без питания. SSD записывает данные в микросхемы памяти, а у старого жёсткого диска (HDD) крутится металлический диск, около 7200 оборотов в минуту.")),
    P(286, 128, t("Motherboard", "Մայրական սալիկ", "Материнская плата"), t("The big green board that every part plugs into. Thin copper lines on it, called buses, carry data between the processor, the memory and the other parts.", "Մեծ կանաչ սալիկը, որին միանում են բոլոր մասերը։ Նրա վրայի պղնձե բարակ գծերը՝ դողերը, տվյալներ են փոխանցում պրոցեսորի, հիշողության և մյուս մասերի միջև։", "Большая зелёная плата, к которой подключаются все части. Тонкие медные дорожки на ней, шины, переносят данные между процессором, памятью и остальными частями.")),
    P(240, 147, t("Graphics card", "Վիդեոքարտ", "Видеокарта"), t("A second processor just for pictures, with thousands of small cores working at once. The same chips are now used to train neural networks.", "Երկրորդ պրոցեսոր՝ միայն պատկերների համար, հազարավոր փոքր միջուկներով, որոնք աշխատում են միաժամանակ։ Նույն միկրոսխեմաներն այսօր օգտագործվում են նաև նեյրոնային ցանցեր ուսուցանելու համար։", "Второй процессор только для изображений, с тысячами маленьких ядер, работающих одновременно. Такие же чипы сейчас используют для обучения нейронных сетей.")),
    P(260, 190, t("Power supply", "Սնուցման բլոկ", "Блок питания"), t("Turns the 220 volts from the wall socket into the low, steady voltages the parts need: 12, 5 and 3.3 volts.", "Վարդակի 220 վոլտը փոխակերպում է այն ցածր և կայուն լարումների, որոնք պետք են մասերին՝ 12, 5 և 3,3 վոլտ։", "Превращает 220 вольт из розетки в низкие ровные напряжения, нужные деталям: 12, 5 и 3,3 вольта.")),
    P(74, 64, t("Monitor (output)", "Մոնիտոր (արտածում)", "Монитор (вывод)"), t("A Full HD screen has 1920 × 1080, about 2 million pixels. Each pixel is three tiny lights, red, green and blue, and the picture is redrawn about 60 times a second.", "Full HD էկրանն ունի 1920 × 1080, այսինքն՝ մոտ 2 միլիոն պիքսել։ Յուրաքանչյուր պիքսել երեք մանրիկ լույս է՝ կարմիր, կանաչ և կապույտ, իսկ պատկերը վայրկյանում վերագծվում է մոտ 60 անգամ։", "У экрана Full HD 1920 × 1080, около 2 миллионов пикселей. Каждый пиксель — три крошечных огонька: красный, зелёный и синий, а картинка перерисовывается около 60 раз в секунду.")),
    P(70, 196, t("Keyboard and mouse (input)", "Ստեղնաշար և մկնիկ (ներածում)", "Клавиатура и мышь (ввод)"), t("They send information into the computer. The QWERTY letter order comes from typewriters of the 1870s; the first mouse, shown in 1968, was a wooden box with two wheels.", "Դրանք տեղեկություն են ներմուծում համակարգիչ։ QWERTY տառերի կարգը եկել է 1870-ականների գրամեքենաներից, իսկ առաջին մկնիկը, որը ցուցադրվեց 1968 թվականին, երկու անիվով փայտե տուփ էր։", "Они вводят информацию в компьютер. Порядок букв QWERTY пришёл от пишущих машинок 1870-х, а первая мышь, показанная в 1968 году, была деревянной коробочкой с двумя колёсиками.")),
  ],
};

/* ---------------- a home network and the internet ---------------- */

const network: Diagram = {
  title: t("From your room to a website", "Քո սենյակից մինչև կայք", "Из твоей комнаты до сайта"),
  draw: (lang) => (
    <g>
      {/* the home */}
      <path d="M8,92 L72,44 L136,92 V206 H8 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
      <Tx x={72} y={80} s={t("Home network (LAN)", "Տնային ցանց (LAN)", "Домашняя сеть (LAN)")} lang={lang} size={8} fill="#92400e" />
      {/* laptop */}
      <rect x="22" y="146" width="44" height="28" rx="2" fill="#1e293b" />
      <rect x="25" y="149" width="38" height="22" fill="#93c5fd" />
      <path d="M16,174 h56 l-4,6 h-48 Z" fill="#64748b" />
      {/* phone */}
      <rect x="92" y="150" width="18" height="32" rx="3" fill="#1e293b" />
      <rect x="94" y="154" width="14" height="24" fill="#a5b4fc" />
      {/* router with Wi-Fi waves */}
      <rect x="48" y="108" width="48" height="14" rx="3" fill="#334155" />
      <line x1="56" y1="108" x2="52" y2="96" stroke="#334155" strokeWidth="2" />
      <line x1="88" y1="108" x2="92" y2="96" stroke="#334155" strokeWidth="2" />
      {[0, 1, 2].map((k) => <circle key={k} cx="72" cy="112" r={14 + k * 8} fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="6 14" opacity={0.9 - k * 0.2} />)}
      <circle cx="60" cy="115" r="1.6" fill="#4ade80" /><circle cx="66" cy="115" r="1.6" fill="#4ade80" />
      {/* fibre to the provider */}
      <path d="M96,115 C130,115 136,150 166,150" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <rect x="160" y="128" width="40" height="54" rx="3" fill="#cbd5e1" stroke="#475569" />
      {[0, 1, 2, 3].map((k) => <rect key={k} x="166" y={134 + k * 11} width="28" height="7" rx="1" fill="#475569" />)}
      <Tx x={180} y={194} s={t("Provider", "Պրովայդեր", "Провайдер")} lang={lang} size={8} fill="#334155" />
      {/* the internet cloud */}
      <path d="M150,70 c-2,-18 22,-26 32,-14 c6,-18 38,-18 44,0 c14,-8 34,2 28,18 c16,6 8,28 -10,26 h-82 c-20,0 -24,-26 -12,-30 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
      <Tx x={204} y={84} s={t("Internet", "Ինտերնետ", "Интернет")} lang={lang} size={10} fill="#0369a1" />
      <path d="M180,128 V104" stroke="#f97316" strokeWidth="2.5" />
      {/* DNS server */}
      <path d="M262,104 C276,110 280,120 280,132" fill="none" stroke="#0284c7" strokeWidth="2" />
      <rect x="262" y="132" width="40" height="22" rx="3" fill="#ede9fe" stroke="#7c3aed" />
      <text x="282" y="147" textAnchor="middle" fontSize="9" fontWeight="900" fill="#5b21b6">DNS</text>
      {/* web server rack */}
      <path d="M232,104 C236,150 240,160 246,170" fill="none" stroke="#0284c7" strokeWidth="2" />
      <rect x="236" y="166" width="70" height="44" rx="3" fill="#1e293b" />
      {[0, 1, 2].map((k) => (
        <g key={k}>
          <rect x="242" y={171 + k * 13} width="58" height="9" rx="1" fill="#334155" />
          <circle cx="248" cy={175.5 + k * 13} r="1.8" fill="#4ade80" />
          <circle cx="254" cy={175.5 + k * 13} r="1.8" fill="#38bdf8" />
        </g>
      ))}
      <text x="271" y="218" textAnchor="middle" fontSize="7" fontWeight="800" fill="#475569">203.0.113.5</text>
    </g>
  ),
  parts: [
    P(44, 160, t("Your device (client)", "Քո սարքը (կլիենտ)", "Твоё устройство (клиент)"), t("The laptop or phone asks for pages: it is the client. At home the router gives it a local IP address such as 192.168.1.10.", "Նոութբուքը կամ հեռախոսը էջեր է խնդրում․ այն կլիենտն է։ Տանը երթուղիչը նրան տալիս է տեղային IP հասցե, օրինակ՝ 192.168.1.10։", "Ноутбук или телефон запрашивает страницы: это клиент. Дома роутер выдаёт ему местный IP-адрес, например 192.168.1.10.")),
    P(116, 132, t("Wi-Fi", "Wi-Fi", "Wi-Fi"), t("Radio waves at 2.4 or 5 gigahertz carry the data through the air. Walls and floors weaken them, so the signal is best in the same room as the router.", "2,4 կամ 5 գիգահերց հաճախությամբ ռադիոալիքները տվյալները տանում են օդով։ Պատերն ու հատակները թուլացնում են դրանք, ուստի ազդանշանն ամենալավն է երթուղիչի հետ նույն սենյակում։", "Радиоволны на частоте 2,4 или 5 гигагерц переносят данные по воздуху. Стены и перекрытия ослабляют их, поэтому лучше всего сигнал в одной комнате с роутером.")),
    P(72, 132, t("Router", "Երթուղիչ (ռաուտեր)", "Роутер"), t("Connects the home network to the internet. Inside the home every device has its own address; to the outside world the whole family shares one public IP address.", "Տնային ցանցը միացնում է ինտերնետին։ Տան ներսում ամեն սարք ունի իր հասցեն, իսկ արտաքին աշխարհի համար ամբողջ ընտանիքն օգտագործում է մեկ հանրային IP հասցե։", "Соединяет домашнюю сеть с интернетом. Внутри дома у каждого устройства свой адрес, а для внешнего мира вся семья делит один публичный IP-адрес.")),
    P(138, 140, t("Optical fibre", "Օպտիկական մանրաթել", "Оптоволокно"), t("A glass thread about as thin as a hair. Data travels as flashes of light at about 200,000 km a second, so a signal could go round the Earth in a fifth of a second.", "Մազի չափ բարակ ապակե թել։ Տվյալներն անցնում են լույսի բռնկումներով՝ վայրկյանում մոտ 200 000 կմ արագությամբ, ուստի ազդանշանը կարող էր Երկրի շուրջը պտտվել վայրկյանի հինգերորդ մասում։", "Стеклянная нить толщиной примерно с волос. Данные бегут вспышками света со скоростью около 200 000 км в секунду, так что сигнал мог бы облететь Землю за пятую долю секунды.")),
    P(180, 116, t("Internet provider", "Ինտերնետ պրովայդեր", "Интернет-провайдер"), t("The company that connects homes to the rest of the internet. Armenia has no sea coast, so its links to the world run over land, through cables across neighbouring countries.", "Ընկերությունը, որը տները միացնում է ինտերնետի մնացած մասին։ Հայաստանը ծովափ չունի, ուստի նրա կապերն աշխարհի հետ անցնում են ցամաքով՝ հարևան երկրներով ձգվող մալուխներով։", "Компания, которая подключает дома к остальному интернету. У Армении нет выхода к морю, поэтому её связь с миром идёт по суше, по кабелям через соседние страны.")),
    P(204, 50, t("The internet", "Ինտերնետ", "Интернет"), t("A network of networks: thousands of providers joined together. Between continents almost all data travels through cables on the sea floor, not through satellites.", "Ցանցերի ցանց՝ հազարավոր իրար միացած պրովայդերներ։ Մայրցամաքների միջև գրեթե բոլոր տվյալներն անցնում են ծովի հատակով ձգված մալուխներով, ոչ թե արբանյակներով։", "Сеть сетей: тысячи соединённых провайдеров. Между континентами почти все данные идут по кабелям на дне моря, а не через спутники.")),
    P(282, 120, t("DNS server", "DNS սերվեր", "DNS-сервер"), t("The phone book of the internet: it turns a name like example.com into a number like 203.0.113.5. Your computer remembers the answer for a while, so the next visit is faster.", "Ինտերնետի հեռախոսագիրքը․ այն example.com անունը վերածում է 203.0.113.5 թվի։ Քո համակարգիչը որոշ ժամանակ հիշում է պատասխանը, ուստի հաջորդ այցը ավելի արագ է լինում։", "Телефонная книга интернета: превращает имя вроде example.com в число вроде 203.0.113.5. Твой компьютер какое-то время помнит ответ, поэтому следующий визит быстрее.")),
    P(226, 196, t("Web server", "Վեբ սերվեր", "Веб-сервер"), t("A computer in a data centre that stores a website and answers requests day and night. It usually has no screen or keyboard at all.", "Տվյալների կենտրոնում գտնվող համակարգիչ, որը պահում է կայքը և օր ու գիշեր պատասխանում հարցումներին։ Սովորաբար այն ընդհանրապես էկրան կամ ստեղնաշար չունի։", "Компьютер в дата-центре, который хранит сайт и днём и ночью отвечает на запросы. Обычно у него вообще нет ни экрана, ни клавиатуры.")),
  ],
};

/* ---------------- a flowchart ---------------- */

const FC = { stroke: "#334155", strokeWidth: 1.5 };
const arrow = (d: string) => <path d={d} fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#fc-head)" />;

const flowchart: Diagram = {
  title: t("A flowchart: should I take an umbrella?", "Բլոկ-սխեմա․ վերցնե՞լ անձրևանոց", "Блок-схема: брать ли зонт?"),
  h: 240,
  draw: (lang) => (
    <g>
      <defs><marker id="fc-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
      <rect x="120" y="6" width="80" height="22" rx="11" fill="#dcfce7" {...FC} />
      <Tx x={160} y={21} s={t("Start", "Սկիզբ", "Начало")} lang={lang} />
      {arrow("M160,28 V42")}
      <path d="M104,44 H226 L216,66 H94 Z" fill="#e0f2fe" {...FC} />
      <Tx x={160} y={58} s={t("Look outside", "Նայիր դուրս", "Посмотри в окно")} lang={lang} />
      {arrow("M160,66 V78")}
      <path d="M160,80 L218,106 L160,132 L102,106 Z" fill="#fef3c7" {...FC} />
      <Tx x={160} y={109} s={t("Is it raining?", "Անձրև՞ է գալիս", "Идёт дождь?")} lang={lang} />
      {arrow("M102,106 H56 V142")}
      {arrow("M218,106 H264 V142")}
      <Tx x={84} y={100} s={t("yes", "այո", "да")} lang={lang} fill="#15803d" />
      <Tx x={238} y={100} s={t("no", "ոչ", "нет")} lang={lang} fill="#b91c1c" />
      <rect x="8" y="144" width="96" height="26" rx="3" fill="#ede9fe" {...FC} />
      <Tx x={56} y={161} s={t("Take an umbrella", "Վերցրու անձրևանոց", "Возьми зонт")} lang={lang} size={8.5} />
      <rect x="216" y="144" width="96" height="26" rx="3" fill="#ede9fe" {...FC} />
      <Tx x={264} y={161} s={t("Don't take one", "Մի՛ վերցրու", "Не бери")} lang={lang} size={8.5} />
      {arrow("M56,170 V186 H120")}
      {arrow("M264,170 V186 H200")}
      <rect x="120" y="176" width="80" height="22" rx="3" fill="#ede9fe" {...FC} />
      <Tx x={160} y={191} s={t("Leave the house", "Դուրս արի տնից", "Выйди из дома")} lang={lang} size={8.5} />
      {arrow("M160,198 V210")}
      <rect x="120" y="212" width="80" height="22" rx="11" fill="#fee2e2" {...FC} />
      <Tx x={160} y={227} s={t("End", "Վերջ", "Конец")} lang={lang} />
    </g>
  ),
  parts: [
    P(212, 17, t("Oval: start and end", "Օվալ՝ սկիզբ և վերջ", "Овал: начало и конец"), t("Every flowchart has exactly one start; it may have one end or several. Follow the arrows from start to end with your finger.", "Յուրաքանչյուր բլոկ-սխեմա ունի ճիշտ մեկ սկիզբ, իսկ վերջը կարող է լինել մեկ կամ մի քանի։ Մատովդ հետևի՛ր սլաքներին սկզբից մինչև վերջ։", "У каждой блок-схемы ровно одно начало, а концов может быть один или несколько. Проследи пальцем за стрелками от начала до конца.")),
    P(240, 55, t("Parallelogram: input or output", "Զուգահեռագիծ՝ ներածում կամ արտածում", "Параллелограмм: ввод или вывод"), t("Information comes in or goes out: here we look at the weather. In a program it is input() or print().", "Տեղեկությունը մտնում է կամ դուրս գալիս․ այստեղ մենք նայում ենք եղանակին։ Ծրագրում դա input() կամ print() է։", "Информация входит или выходит: здесь мы смотрим на погоду. В программе это input() или print().")),
    P(160, 140, t("Diamond: a question", "Շեղանկյուն՝ հարց", "Ромб: вопрос"), t("The only shape with two ways out, yes and no. In Python it becomes if … else, and the computer follows only one of the two paths.", "Միակ պատկերը, որից դուրս է գալիս երկու ճանապարհ՝ այո և ոչ։ Python-ում այն դառնում է if … else, և համակարգիչը գնում է երկու ճանապարհներից միայն մեկով։", "Единственная фигура с двумя выходами — да и нет. В Python она становится if … else, и компьютер идёт только по одному из двух путей.")),
    P(20, 132, t("Rectangle: an action", "Ուղղանկյուն՝ գործողություն", "Прямоугольник: действие"), t("One clear step. If a step is too big, such as \"get ready for school\", split it into several rectangles.", "Մեկ հստակ քայլ։ Եթե քայլը չափազանց մեծ է, օրինակ՝ «պատրաստվել դպրոցին», բաժանի՛ր այն մի քանի ուղղանկյան։", "Один понятный шаг. Если шаг слишком большой, например «собраться в школу», раздели его на несколько прямоугольников.")),
    P(214, 187, t("Arrows join again", "Սլաքները նորից միանում են", "Стрелки снова сходятся"), t("After the question both paths meet and the algorithm goes on in the same way. An arrow pointing back up would make a loop.", "Հարցից հետո երկու ճանապարհները հանդիպում են, և ալգորիթմը շարունակվում է նույն կերպ։ Վերև վերադարձող սլաքը ցիկլ կստեղծեր։", "После вопроса оба пути встречаются, и алгоритм продолжается одинаково. Стрелка, ведущая обратно вверх, создала бы цикл.")),
  ],
};

/* ---------------- the memory pyramid ---------------- */

const LEVELS: Array<[Tr, string, string]> = [
  [t("Registers", "Ռեգիստրներ", "Регистры"), "#e11d48", "< 1 ns"],
  [t("Cache", "Քեշ", "Кэш"), "#f97316", "≈ 1–10 ns"],
  [t("RAM", "RAM", "ОЗУ"), "#f59e0b", "≈ 100 ns"],
  [t("SSD", "SSD", "SSD"), "#10b981", "≈ 0.1 ms"],
  [t("Hard disk, cloud", "Կոշտ սկավառակ, ամպ", "Жёсткий диск, облако"), "#4f46e5", "≈ 10 ms"],
];

const memory: Diagram = {
  title: t("The memory pyramid", "Հիշողության բուրգը", "Пирамида памяти"),
  draw: (lang) => (
    <g>
      {LEVELS.map(([name, c, time], k) => {
        const y = 14 + k * 38, h = 34, top = 18 + k * 30, bot = 18 + (k + 1) * 30;
        return (
          <g key={k}>
            <path d={`M${130 - top},${y} H${130 + top} L${130 + bot},${y + h} H${130 - bot} Z`} fill={c} opacity="0.88" />
            <Tx x={130} y={y + 15} s={name} lang={lang} fill="#fff" size={k ? 9.5 : 8} />
            <text x="130" y={y + 27} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{lang === "en" ? time : time.replace(".", ",")}</text>
          </g>
        );
      })}
      <line x1="290" y1="196" x2="290" y2="20" stroke="#e11d48" strokeWidth="3" markerEnd="url(#mem-up)" />
      <line x1="306" y1="20" x2="306" y2="196" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#mem-down)" />
      <defs>
        <marker id="mem-up" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#e11d48" /></marker>
        <marker id="mem-down" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#4f46e5" /></marker>
      </defs>
      <Tx x={284} y={110} s={t("faster, dearer", "արագ, թանկ", "быстрее, дороже")} lang={lang} anchor="end" fill="#e11d48" size={8} />
      <Tx x={284} y={124} s={t("bigger, cheaper", "մեծ, էժան", "больше, дешевле")} lang={lang} anchor="end" fill="#4f46e5" size={8} />
    </g>
  ),
  parts: [
    P(176, 31, t("Registers", "Ռեգիստրներ", "Регистры"), t("A few dozen tiny cells inside the processor itself, holding the numbers it is working on this very moment. Reading one takes less than a nanosecond.", "Մի քանի տասնյակ մանրիկ բջիջներ հենց պրոցեսորի ներսում, որոնք պահում են այն թվերը, որոնց հետ նա աշխատում է հենց այս պահին։ Դրանցից կարդալը տևում է նանովայրկյանից պակաս։", "Несколько десятков крошечных ячеек внутри самого процессора с числами, над которыми он работает прямо сейчас. Чтение занимает меньше наносекунды.")),
    P(206, 69, t("Cache", "Քեշ", "Кэш"), t("A few megabytes of very fast memory next to the cores. It keeps copies of the data used most recently, because programs tend to use the same data again and again.", "Մի քանի մեգաբայթ շատ արագ հիշողություն միջուկների կողքին։ Այն պահում է վերջերս ամենաշատ օգտագործված տվյալների պատճենները, որովհետև ծրագրերը հաճախ նույն տվյալները նորից ու նորից են օգտագործում։", "Несколько мегабайт очень быстрой памяти рядом с ядрами. Она хранит копии недавно использованных данных, потому что программы часто обращаются к одним и тем же данным снова и снова.")),
    P(234, 107, t("RAM", "Օպերատիվ հիշողություն", "Оперативная память"), t("Gigabytes for everything that is open. If a register read took one second, fetching from RAM would take about five minutes.", "Գիգաբայթներ բոլոր բացված ծրագրերի համար։ Եթե ռեգիստրից կարդալը տևեր մեկ վայրկյան, RAM-ից բերելը կտևեր մոտ հինգ րոպե։", "Гигабайты для всего, что открыто. Если бы чтение регистра занимало одну секунду, то обращение к ОЗУ заняло бы около пяти минут.")),
    P(262, 145, t("SSD", "SSD", "SSD"), t("Hundreds of gigabytes that survive without power. On the same one-second scale, reading from an SSD would take about four days.", "Հարյուրավոր գիգաբայթներ, որոնք պահպանվում են առանց հոսանքի։ Նույն «մեկ վայրկյան» սանդղակով SSD-ից կարդալը կտևեր մոտ չորս օր։", "Сотни гигабайт, которые сохраняются без питания. В том же масштабе «одной секунды» чтение с SSD заняло бы около четырёх дней.")),
    P(20, 186, t("Hard disk and the cloud", "Կոշտ սկավառակ և ամպ", "Жёсткий диск и облако"), t("Terabytes for photos, videos and backups. A hard disk must wait for its spinning platter, so on our scale one read would take about a year.", "Տերաբայթներ լուսանկարների, տեսանյութերի և պահուստային պատճենների համար։ Կոշտ սկավառակը պետք է սպասի իր պտտվող սկավառակին, ուստի մեր սանդղակով մեկ ընթերցումը կտևեր մոտ մեկ տարի։", "Терабайты для фото, видео и резервных копий. Жёсткому диску приходится ждать, пока повернётся его пластина, поэтому в нашем масштабе одно чтение длилось бы около года.")),
  ],
};

/* ---------------- a neural network ---------------- */

const LAYERS = [[40, 80, 120, 160, 200], [60, 100, 140, 180], [60, 100, 140, 180], [90, 150]];
const LX = [30, 110, 190, 270];

const layers: Diagram = {
  title: t("Layers of a neural network", "Նեյրոնային ցանցի շերտերը", "Слои нейронной сети"),
  draw: (lang) => (
    <g>
      {LAYERS.slice(0, -1).map((ys, l) => ys.map((y) => LAYERS[l + 1].map((y2, j) => (
        <line key={`${l}-${y}-${j}`} x1={LX[l]} y1={y} x2={LX[l + 1]} y2={y2} stroke={(y + y2 + l) % 3 ? "#a5b4fc" : "#fda4af"} strokeWidth={0.5 + ((y * 7 + y2 * 3 + l) % 5) * 0.4} opacity="0.8" />
      ))))}
      {LAYERS.map((ys, l) => ys.map((y, k) => (
        <circle key={`${l}-${k}`} cx={LX[l]} cy={y} r={l === 3 ? 13 : 9} fill={l === 0 ? `hsl(0,0%,${30 + k * 15}%)` : l === 3 ? (k ? "#e2e8f0" : "#fde047") : "#eef2ff"} stroke="#4f46e5" strokeWidth="1.5" />
      )))}
      <text x="292" y="86" fontSize="8" fontWeight="900" fill="#1e1b4b">0.92</text>
      <text x="292" y="146" fontSize="8" fontWeight="900" fill="#64748b">0.08</text>
      <Tx x={270} y={110} s={t("cat", "կատու", "кошка")} lang={lang} size={8} />
      <Tx x={270} y={174} s={t("dog", "շուն", "собака")} lang={lang} size={8} fill="#64748b" />
      <Tx x={30} y={18} s={t("input", "մուտք", "вход")} lang={lang} size={8} fill="#475569" />
      <Tx x={150} y={18} s={t("hidden layers", "թաքնված շերտեր", "скрытые слои")} lang={lang} size={8} fill="#475569" />
      <Tx x={270} y={18} s={t("output", "ելք", "выход")} lang={lang} size={8} fill="#475569" />
    </g>
  ),
  parts: [
    P(30, 214, t("Input layer", "Մուտքային շերտ", "Входной слой"), t("Just the data: here five pixel brightnesses. A real photo of 224 × 224 colour pixels gives about 150,000 input numbers.", "Միայն տվյալները․ այստեղ՝ հինգ պիքսելի պայծառություն։ 224 × 224 գունավոր պիքսելից բաղկացած իրական լուսանկարը տալիս է մոտ 150 000 մուտքային թիվ։", "Просто данные: здесь яркость пяти пикселей. Настоящее цветное фото 224 × 224 пикселя даёт около 150 000 входных чисел.")),
    P(70, 120, t("Weights", "Կշիռներ", "Веса"), t("Every line is one weight, a number the network learns. Thick lines matter more. Large language models have billions of them.", "Յուրաքանչյուր գիծ մեկ կշիռ է՝ թիվ, որը ցանցը սովորում է։ Հաստ գծերն ավելի կարևոր են։ Մեծ լեզվային մոդելներն ունեն միլիարդավոր կշիռներ։", "Каждая линия — один вес, число, которое сеть выучивает. Толстые линии важнее. У больших языковых моделей их миллиарды.")),
    P(150, 200, t("Hidden layers", "Թաքնված շերտեր", "Скрытые слои"), t("Each neuron adds up its weighted inputs and passes the result on. Early layers notice edges and spots, later ones notice eyes, ears and whiskers.", "Յուրաքանչյուր նեյրոն գումարում է իր կշռված մուտքերը և արդյունքը փոխանցում առաջ։ Առաջին շերտերը նկատում են եզրեր և բծեր, հաջորդները՝ աչքեր, ականջներ և բեղեր։", "Каждый нейрон складывает взвешенные входы и передаёт результат дальше. Первые слои замечают края и пятна, следующие — глаза, уши и усы.")),
    P(306, 110, t("Output layer", "Ելքային շերտ", "Выходной слой"), t("One neuron per answer, and the numbers add up to 1: here the network is 92% sure it sees a cat. It can still be wrong!", "Մեկ նեյրոն յուրաքանչյուր պատասխանի համար, և թվերի գումարը 1 է․ այստեղ ցանցը 92 %-ով վստահ է, որ տեսնում է կատու։ Բայց այն դեռ կարող է սխալվել։", "По нейрону на каждый ответ, и числа в сумме дают 1: здесь сеть на 92% уверена, что видит кошку. Но она всё равно может ошибаться!")),
    P(230, 60, t("Learning backwards", "Ուսուցում հետ ուղղությամբ", "Обучение в обратную сторону"), t("If the answer was wrong, the error is sent back from the output to the input (backpropagation), and every weight is nudged a little to make the error smaller.", "Եթե պատասխանը սխալ էր, սխալը ելքից հետ է ուղարկվում դեպի մուտք (հետադարձ տարածում), և յուրաքանչյուր կշիռ մի փոքր փոխվում է, որպեսզի սխալը փոքրանա։", "Если ответ неверный, ошибка передаётся обратно от выхода ко входу (обратное распространение), и каждый вес немного подправляется, чтобы ошибка уменьшилась.")),
  ],
};

/* ---------------- the parts of a URL ---------------- */

const URL_PARTS: Array<[string, string, string]> = [["https://", "#e11d48", "#ffe4e6"], ["school", "#7c3aed", "#ede9fe"], [".example.am", "#4f46e5", "#e0e7ff"], ["/math/grade-5", "#0891b2", "#cffafe"], ["?lang=hy", "#ca8a04", "#fef9c3"], ["#quiz", "#16a34a", "#dcfce7"]];

const url: Diagram = {
  title: t("Reading a web address", "Ինչպես կարդալ վեբ հասցեն", "Как читать веб-адрес"),
  draw: (lang) => {
    let x = 8;
    const cw = 7.6;
    const rows = [URL_PARTS.slice(0, 3), URL_PARTS.slice(3)];
    return (
      <g>
        <rect x="4" y="20" width="312" height="34" rx="17" fill="#f1f5f9" stroke="#cbd5e1" />
        <path d="M22,32 v-3 a5,5 0 0 1 10,0 v3" fill="none" stroke="#16a34a" strokeWidth="2" />
        <rect x="19" y="32" width="16" height="12" rx="2" fill="#16a34a" />
        <text x="44" y="42" fontSize="10" fontFamily="monospace" fill="#334155">school.example.am/math/grade-5…</text>
        {rows.map((row, r) => {
          x = 8;
          return row.map(([s, c, bg]) => {
            const w = s.length * cw + 8;
            const g = (
              <g key={s}>
                <rect x={x} y={80 + r * 64} width={w} height="26" rx="4" fill={bg} stroke={c} strokeWidth="1.5" />
                <text x={x + w / 2} y={97 + r * 64} textAnchor="middle" fontSize="12" fontFamily="monospace" fontWeight="700" fill={c}>{s}</text>
              </g>
            );
            x += w + 4;
            return g;
          });
        })}
        <Tx x={160} y={212} s={t("Tap a number to see what each part means", "Սեղմի՛ր թվին՝ տեսնելու յուրաքանչյուր մասի իմաստը", "Нажми на номер, чтобы узнать смысл каждой части")} lang={lang} size={8} fill="#64748b" w={700} />
      </g>
    );
  },
  parts: [
    P(40, 122, t("Protocol", "Արձանագրություն", "Протокол"), t("The rules for talking to the server. HTTPS means everything is encrypted on the way, and the browser shows a padlock. Plain http:// sends it as readable text.", "Սերվերի հետ խոսելու կանոնները։ HTTPS-ը նշանակում է, որ ճանապարհին ամեն ինչ ծածկագրվում է, և դիտարկիչը ցույց է տալիս կողպեքի պատկեր։ Պարզ http://-ն ուղարկում է կարդացվող տեքստով։", "Правила разговора с сервером. HTTPS значит, что по дороге всё шифруется, и браузер показывает замок. Обычный http:// передаёт всё читаемым текстом.")),
    P(110, 122, t("Subdomain", "Ենթադոմեն", "Поддомен"), t("A part of the site chosen by its owner, such as www, mail or school. One domain can have many subdomains.", "Կայքի մի մաս, որն ընտրում է տերը, օրինակ՝ www, mail կամ school։ Մեկ դոմենը կարող է ունենալ բազմաթիվ ենթադոմեններ։", "Часть сайта, которую выбирает владелец, например www, mail или school. У одного домена может быть много поддоменов.")),
    P(220, 122, t("Domain name", "Դոմենային անուն", "Доменное имя"), t("The name people remember. It is read from right to left: .am is Armenia's country domain, and example is the name registered inside it. DNS turns it into an IP address.", "Անունը, որը մարդիկ հիշում են։ Այն կարդացվում է աջից ձախ․ .am-ը Հայաստանի երկրային դոմենն է, իսկ example-ը դրա ներսում գրանցված անունն է։ DNS-ը այն վերածում է IP հասցեի։", "Имя, которое запоминают люди. Читается справа налево: .am — доменная зона Армении, а example — имя, зарегистрированное внутри неё. DNS превращает его в IP-адрес.")),
    P(64, 186, t("Path", "Ուղի", "Путь"), t("Which page on the server, much like folders and a file name on your own computer.", "Սերվերի որ էջը՝ շատ նման քո համակարգչի թղթապանակներին և ֆայլի անվանը։", "Какая страница на сервере — очень похоже на папки и имя файла на твоём компьютере.")),
    P(170, 186, t("Query", "Հարցում", "Параметры запроса"), t("Extra settings after the ?, as name=value pairs joined by &. Search sites put your search words here.", "Լրացուցիչ կարգավորումներ ?-ից հետո՝ անուն=արժեք զույգերով, որոնք միացված են &-ով։ Որոնման կայքերն այստեղ են դնում քո որոնած բառերը։", "Дополнительные настройки после ?, в виде пар имя=значение, соединённых знаком &. Поисковики кладут сюда слова твоего запроса.")),
    P(250, 186, t("Fragment", "Հատված", "Якорь"), t("The part after # is never sent to the server: the browser uses it to jump to a place on the page.", "#-ից հետո գրված մասը երբեք չի ուղարկվում սերվերին․ դիտարկիչը դրանով անցնում է էջի որոշակի տեղ։", "Часть после # никогда не отправляется на сервер: браузер по ней прыгает к месту на странице.")),
  ],
};

/* ---------------- an HTML element ---------------- */

const TAG: Array<[string, string]> = [["<a", "#4f46e5"], [" href", "#e11d48"], ["=", "#334155"], ['"page.html"', "#16a34a"], [">", "#4f46e5"], ["Next", "#1e1b4b"], ["</a>", "#4f46e5"]];

const tag: Diagram = {
  title: t("Anatomy of an HTML element", "HTML տարրի կառուցվածքը", "Из чего состоит HTML-элемент"),
  draw: (lang) => {
    let x = 14;
    return (
      <g>
        <rect x="6" y="40" width="308" height="40" rx="6" fill="#0f172a" />
        {TAG.map(([s, c]) => {
          const el = <text key={s} x={x} y="66" fontSize="15" fontFamily="monospace" fontWeight="700" fill={c === "#1e1b4b" ? "#f8fafc" : c === "#334155" ? "#cbd5e1" : c === "#4f46e5" ? "#a5b4fc" : c === "#e11d48" ? "#fda4af" : "#86efac"}>{s}</text>;
          x += s.length * 9.05;
          return el;
        })}
        <path d="M14,90 v8 h106 v-8" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M36,30 v-8 h62 v8" fill="none" stroke="#e11d48" strokeWidth="1.5" />
        <path d="M254,90 v8 h56 v-8" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
        {/* what the browser shows */}
        <rect x="60" y="140" width="200" height="66" rx="8" fill="#fff" stroke="#cbd5e1" />
        <rect x="60" y="140" width="200" height="14" rx="8" fill="#e2e8f0" />
        <circle cx="70" cy="147" r="2.5" fill="#f87171" /><circle cx="79" cy="147" r="2.5" fill="#fbbf24" /><circle cx="88" cy="147" r="2.5" fill="#4ade80" />
        <text x="160" y="186" textAnchor="middle" fontSize="16" fontWeight="700" fill="#2563eb" textDecoration="underline">Next</text>
        <Tx x={160} y={128} s={t("the browser shows:", "դիտարկիչը ցույց է տալիս․", "браузер показывает:")} lang={lang} size={9} fill="#64748b" w={700} />
      </g>
    );
  },
  parts: [
    P(66, 108, t("Opening tag", "Բացող պիտակ", "Открывающий тег"), t("Says where the element begins and what kind it is: a is a link, p a paragraph, h1 a main heading, img a picture.", "Ցույց է տալիս, թե որտեղ է սկսվում տարրը և ինչ տեսակի է․ a-ն հղում է, p-ն՝ պարբերություն, h1-ը՝ գլխավոր վերնագիր, img-ը՝ նկար։", "Показывает, где начинается элемент и какой он: a — ссылка, p — абзац, h1 — главный заголовок, img — картинка.")),
    P(66, 16, t("Attribute and value", "Ատրիբուտ և արժեք", "Атрибут и значение"), t("Extra information inside the opening tag, always name=\"value\". For a link, href says where it leads; for a picture, alt describes it for people who cannot see it.", "Լրացուցիչ տեղեկություն բացող պիտակի ներսում՝ միշտ անուն=\"արժեք\" ձևով։ Հղման դեպքում href-ը ցույց է տալիս, թե ուր է տանում, իսկ նկարի դեպքում alt-ը նկարագրում է այն նրանց համար, ովքեր չեն կարող տեսնել։", "Дополнительные сведения внутри открывающего тега, всегда в виде имя=\"значение\". У ссылки href говорит, куда она ведёт, а у картинки alt описывает её для тех, кто не видит.")),
    P(234, 26, t("Content", "Պարունակություն", "Содержимое"), t("What the reader actually sees. It can contain other elements too, so a page is a tree of elements inside elements.", "Այն, ինչ ընթերցողն իրականում տեսնում է։ Այն կարող է պարունակել նաև այլ տարրեր, ուստի էջը տարրերի մեջ տարրերի ծառ է։", "То, что на самом деле видит читатель. Внутри могут быть и другие элементы, поэтому страница — это дерево элементов внутри элементов.")),
    P(282, 108, t("Closing tag", "Փակող պիտակ", "Закрывающий тег"), t("The same name with a slash. A few elements, such as img and br, have no content and no closing tag.", "Նույն անունը՝ թեք գծով։ Որոշ տարրեր, օրինակ՝ img-ը և br-ը, պարունակություն և փակող պիտակ չունեն։", "То же имя с косой чертой. У некоторых элементов, например img и br, нет ни содержимого, ни закрывающего тега.")),
    P(272, 170, t("The browser's job", "Դիտարկիչի գործը", "Работа браузера"), t("The browser reads the tags but does not show them; it builds the page from them. Right-click a page and choose \"View page source\" to see the tags of any website.", "Դիտարկիչը կարդում է պիտակները, բայց ցույց չի տալիս դրանք․ նա դրանցով կառուցում է էջը։ Սեղմիր էջի վրա մկնիկի աջ կոճակը և ընտրիր «Դիտել էջի կոդը»՝ ցանկացած կայքի պիտակները տեսնելու համար։", "Браузер читает теги, но не показывает их, а строит по ним страницу. Щёлкни правой кнопкой по странице и выбери «Просмотр кода страницы», чтобы увидеть теги любого сайта.")),
  ],
};

/* ---------------- the CSS box model ---------------- */

const box: Diagram = {
  title: t("The CSS box model", "CSS-ի տուփի մոդելը", "Блочная модель CSS"),
  draw: (lang) => (
    <g>
      <rect x="20" y="14" width="280" height="192" fill="#fed7aa" stroke="#ea580c" strokeDasharray="5 3" />
      <rect x="52" y="42" width="216" height="136" fill="#1e293b" />
      <rect x="60" y="50" width="200" height="120" fill="#bbf7d0" />
      <rect x="92" y="78" width="136" height="64" fill="#bfdbfe" stroke="#2563eb" />
      <Tx x={36} y={30} s={t("margin", "margin (արտաքին լուսանցք)", "margin (внешний отступ)")} lang={lang} anchor="start" size={9} fill="#9a3412" />
      <Tx x={68} y={64} s={t("padding", "padding (ներքին լուսանցք)", "padding (внутренний отступ)")} lang={lang} anchor="start" size={9} fill="#166534" />
      <Tx x={160} y={106} s={t("content", "պարունակություն", "содержимое")} lang={lang} size={10} fill="#1e3a8a" />
      <text x="160" y="124" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1e3a8a">width × height</text>
      <text x="268" y="40" textAnchor="end" fontSize="8" fontWeight="900" fill="#f8fafc" dy="10">border</text>
    </g>
  ),
  parts: [
    P(206, 98, t("Content", "Պարունակություն", "Содержимое"), t("The text or picture itself. width and height set its size, for example width: 300px.", "Ինքը՝ տեքստը կամ նկարը։ width-ը և height-ը սահմանում են դրա չափը, օրինակ՝ width: 300px։", "Сам текст или картинка. width и height задают размер, например width: 300px.")),
    P(76, 156, t("Padding", "Ներքին լուսանցք (padding)", "Внутренний отступ (padding)"), t("Space between the content and the border, filled with the box's background colour. It keeps text from touching the edge.", "Տարածություն պարունակության և եզրագծի միջև, որը լցված է տուփի ֆոնի գույնով։ Այն թույլ չի տալիս տեքստին կպչել եզրին։", "Пространство между содержимым и рамкой, залитое фоном блока. Оно не даёт тексту касаться края.")),
    P(56, 110, t("Border", "Եզրագիծ (border)", "Рамка (border)"), t("A line round the padding: border: 8px solid black. It can be rounded with border-radius.", "Գիծ ներքին լուսանցքի շուրջը՝ border: 8px solid black։ Այն կարելի է կլորացնել border-radius-ով։", "Линия вокруг внутреннего отступа: border: 8px solid black. Её можно скруглить с помощью border-radius.")),
    P(286, 192, t("Margin", "Արտաքին լուսանցք (margin)", "Внешний отступ (margin)"), t("Empty, see-through space outside the border that pushes the neighbouring boxes away.", "Դատարկ, թափանցիկ տարածություն եզրագծից դուրս, որը հեռացնում է հարևան տուփերը։", "Пустое прозрачное пространство за рамкой, которое отодвигает соседние блоки.")),
    P(30, 194, t("Every element is a box", "Ամեն տարր տուփ է", "Каждый элемент — блок"), t("Headings, paragraphs, pictures and buttons are all rectangles. The real width on screen is content + padding + border on both sides, which surprises many beginners.", "Վերնագրերը, պարբերությունները, նկարները և կոճակները բոլորն ուղղանկյուններ են։ Էկրանի վրա իրական լայնությունը պարունակությունն է՝ գումարած երկու կողմի ներքին լուսանցքն ու եզրագիծը, ինչը շատ սկսնակների զարմացնում է։", "Заголовки, абзацы, картинки и кнопки — всё это прямоугольники. Настоящая ширина на экране — это содержимое плюс отступы и рамка с обеих сторон, и это удивляет многих новичков.")),
  ],
};

/* ---------------- the operating system ---------------- */

const OS_ROWS: Array<[Tr, string, number]> = [
  [t("You", "Դու", "Ты"), "#fde68a", 24],
  [t("Programs: browser, game, editor", "Ծրագրեր՝ դիտարկիչ, խաղ, խմբագիր", "Программы: браузер, игра, редактор"), "#bfdbfe", 64],
  [t("Operating system", "Օպերացիոն համակարգ", "Операционная система"), "#c7d2fe", 104],
  [t("Kernel and drivers", "Միջուկ և դրայվերներ", "Ядро и драйверы"), "#a5b4fc", 144],
  [t("Hardware: CPU, memory, disk, screen", "Սարքավորում՝ պրոցեսոր, հիշողություն, սկավառակ, էկրան", "Оборудование: процессор, память, диск, экран"), "#cbd5e1", 184],
];

const os: Diagram = {
  title: t("Layers of a computer system", "Համակարգչային համակարգի շերտերը", "Слои компьютерной системы"),
  draw: (lang) => (
    <g>
      {OS_ROWS.map(([s, c, y], k) => (
        <g key={k}>
          <rect x={20 + k * 4} y={y - 18} width={280 - k * 8} height="32" rx="6" fill={c} stroke="#475569" />
          <Tx x={160} y={y + 2} s={s} lang={lang} size={9} />
        </g>
      ))}
      {[48, 88, 128, 168].map((y) => <path key={y} d={`M300,${y - 6} v12 M296,${y + 2} l4,4 l4,-4 M310,${y + 6} v-12 M306,${y - 2} l4,-4 l4,4`} stroke="#475569" strokeWidth="1.2" fill="none" />)}
    </g>
  ),
  parts: [
    P(28, 64, t("Programs", "Ծրագրեր", "Программы"), t("Apps never touch the hardware directly. To save a file or draw on the screen they ask the operating system, which keeps one app from wrecking another.", "Հավելվածները երբեք ուղղակիորեն չեն դիպչում սարքավորմանը։ Ֆայլ պահպանելու կամ էկրանին նկարելու համար նրանք խնդրում են օպերացիոն համակարգին, որը թույլ չի տալիս մի հավելվածին փչացնել մյուսը։", "Приложения никогда не трогают оборудование напрямую. Чтобы сохранить файл или нарисовать на экране, они просят операционную систему, а она не даёт одному приложению сломать другое.")),
    P(30, 104, t("Operating system", "Օպերացիոն համակարգ", "Операционная система"), t("Windows, macOS, Linux, Android and iOS. It shares the processor between programs, switching between them many times a second, so they all seem to run at once.", "Windows, macOS, Linux, Android և iOS։ Այն պրոցեսորը բաժանում է ծրագրերի միջև՝ վայրկյանում բազմաթիվ անգամներ անցնելով մեկից մյուսին, ուստի թվում է, թե դրանք բոլորն աշխատում են միաժամանակ։", "Windows, macOS, Linux, Android и iOS. Она делит процессор между программами, переключаясь между ними много раз в секунду, поэтому кажется, что все они работают одновременно.")),
    P(36, 144, t("Kernel and drivers", "Միջուկ և դրայվերներ", "Ядро и драйверы"), t("The kernel is the heart of the system, managing memory and processes. A driver is a small program that knows how to talk to one device, such as a printer.", "Միջուկը համակարգի սիրտն է, որը կառավարում է հիշողությունը և պրոցեսները։ Դրայվերը փոքր ծրագիր է, որը գիտի, թե ինչպես խոսել մեկ սարքի, օրինակ՝ տպիչի հետ։", "Ядро — сердце системы, оно управляет памятью и процессами. Драйвер — небольшая программа, которая умеет общаться с одним устройством, например с принтером.")),
    P(40, 184, t("Hardware", "Սարքավորում", "Оборудование"), t("The physical parts. When you switch the computer on, a small program stored on the motherboard checks them and then loads the operating system from the disk.", "Ֆիզիկական մասերը։ Երբ միացնում ես համակարգիչը, մայրական սալիկում պահվող փոքր ծրագիրը ստուգում է դրանք, հետո սկավառակից բեռնում օպերացիոն համակարգը։", "Физические части. Когда ты включаешь компьютер, маленькая программа на материнской плате проверяет их, а затем загружает операционную систему с диска.")),
    P(300, 24, t("Requests go down, answers come up", "Հարցումներն իջնում են, պատասխանները՝ բարձրանում", "Запросы идут вниз, ответы — вверх"), t("A click travels down through the layers to the hardware, and the result comes back up to the screen, all in a fraction of a second.", "Սեղմումը շերտերով իջնում է մինչև սարքավորում, իսկ արդյունքը բարձրանում է մինչև էկրան, և այս ամենը՝ վայրկյանի մի մասում։", "Щелчок проходит вниз по слоям до оборудования, а результат поднимается обратно на экран — и всё это за доли секунды.")),
  ],
};

/* ---------------- a phishing email ---------------- */

const phish: Diagram = {
  title: t("Spot the phishing email", "Գտի՛ր ֆիշինգային նամակը", "Найди фишинговое письмо"),
  hint: t("Every number marks a warning sign. Tap them all.", "Յուրաքանչյուր թիվ նշում է վտանգի նշան։ Սեղմի՛ր բոլորին։", "Каждая цифра отмечает тревожный признак. Нажми на все."),
  draw: (lang) => (
    <g>
      <rect x="8" y="8" width="304" height="204" rx="8" fill="#fff" stroke="#cbd5e1" />
      <rect x="8" y="8" width="304" height="52" rx="8" fill="#f1f5f9" />
      <circle cx="28" cy="30" r="11" fill="#94a3b8" />
      <text x="28" y="34" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">S</text>
      <Tx x={46} y={26} s={t("Security Team", "Անվտանգության թիմ", "Служба безопасности")} lang={lang} anchor="start" size={9} />
      <text x="46" y="38" fontSize="8" fontFamily="monospace" fill="#b91c1c">support@g00gle-security.xyz</text>
      <Tx x={20} y={54} s={t("URGENT: your acount will be blocked in 1 hour!!!", "ՇՏԱՊ․ ձեր հաշիվը կարգելափակվի 1 ժամից!!!", "СРОЧНО: ваш акаунт будет заблокирован через 1 час!!!")} lang={lang} anchor="start" size={8.5} fill="#b91c1c" />
      <Tx x={20} y={80} s={t("Dear user,", "Հարգելի օգտատեր,", "Уважаемый пользователь,")} lang={lang} anchor="start" size={9} w={700} />
      <Tx x={20} y={96} s={t("To keep your acount, confirm your", "Հաշիվը պահպանելու համար հաստատեկ ձեր", "Чтобы сохранить акаунт, подтвердите свой")} lang={lang} anchor="start" size={9} w={700} />
      <Tx x={20} y={110} s={t("password and card number here:", "գաղտնաբառը և քարտի համարը այստեղ․", "пароль и номер карты здесь:")} lang={lang} anchor="start" size={9} w={700} />
      <rect x="20" y="120" width="150" height="24" rx="5" fill="#2563eb" />
      <text x="95" y="136" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff">www.google.com/secure</text>
      <rect x="120" y="148" width="180" height="16" rx="3" fill="#1e293b" />
      <text x="126" y="159" fontSize="7.5" fontFamily="monospace" fill="#fca5a5">http://g00gle-login.xyz/steal?id=7</text>
      <path d="M150,144 l-6,4 h12 Z" fill="#1e293b" transform="translate(0,0)" />
      <rect x="20" y="174" width="280" height="28" rx="6" fill="#fef3c7" stroke="#f59e0b" />
      <Tx x={160} y={192} s={t("🎁 You have won a free phone in our contest!", "🎁 Դուք շահել եք անվճար հեռախոս մեր մրցույթում։", "🎁 Вы выиграли бесплатный телефон в нашем конкурсе!")} lang={lang} size={8.5} fill="#92400e" />
    </g>
  ),
  parts: [
    P(270, 34, t("A strange sender", "Տարօրինակ ուղարկող", "Странный отправитель"), t("Look at the address, not the name. g00gle with two zeros and the ending .xyz are not Google. Anyone can type any name in the \"From\" field.", "Նայի՛ր հասցեին, ոչ թե անվանը։ Երկու զրոյով g00gle-ը և .xyz վերջավորությունը Google չեն։ «Ումից» դաշտում ցանկացածը կարող է գրել ցանկացած անուն։", "Смотри на адрес, а не на имя. g00gle с двумя нулями и окончание .xyz — это не Google. В поле «От кого» кто угодно может написать любое имя.")),
    P(290, 54, t("It rushes you", "Շտապեցնում է", "Тебя торопят"), t("\"1 hour!\" is meant to make you panic and click before you think. Real services do not threaten you like this.", "«1 ժամ»-ը նպատակ ունի խուճապի մատնել քեզ, որ սեղմես՝ առանց մտածելու։ Իրական ծառայություններն այսպես չեն սպառնում։", "«1 час!» — чтобы ты запаниковал и нажал, не подумав. Настоящие сервисы так не угрожают.")),
    P(176, 80, t("No name, spelling mistakes", "Անուն չկա, ուղղագրական սխալներ", "Нет имени, ошибки"), t("\"Dear user\" instead of your name, and mistakes like \"acount\": the same message was sent to thousands of people at once.", "«Հարգելի օգտատեր»՝ քո անվան փոխարեն, և սխալներ, ինչպես «հաստատեկ» բառում․ նույն նամակն ուղարկվել է միանգամից հազարավոր մարդկանց։", "«Уважаемый пользователь» вместо имени и ошибки вроде «акаунт»: одно и то же письмо разослали тысячам людей сразу.")),
    P(290, 104, t("It asks for a password", "Գաղտնաբառ է խնդրում", "Просят пароль"), t("No bank, school or game will ever ask you to send your password or card number by email or message.", "Ոչ մի բանկ, դպրոց կամ խաղ երբեք չի խնդրի քեզ ուղարկել գաղտնաբառդ կամ քարտի համարը նամակով կամ հաղորդագրությամբ։", "Ни банк, ни школа, ни игра никогда не попросят прислать пароль или номер карты письмом или сообщением.")),
    P(100, 162, t("The link lies", "Հղումը ստում է", "Ссылка обманывает"), t("The button says google.com, but hovering the mouse over it (or holding a finger on it) shows where it really goes: a different site.", "Կոճակին գրված է google.com, բայց մկնիկը վրան պահելիս (կամ մատը սեղմած պահելիս) երևում է, թե իրականում ուր է տանում՝ բոլորովին այլ կայք։", "На кнопке написано google.com, но если навести мышь (или задержать палец), видно, куда она ведёт на самом деле, — на другой сайт.")),
    P(296, 188, t("A prize you never entered for", "Մրցանակ մրցույթից, որին չես մասնակցել", "Приз в конкурсе, где ты не участвовал"), t("If it sounds too good to be true, it is. Delete the message, and if you are unsure, ask an adult or contact the real service yourself.", "Եթե շատ լավ է հնչում, որ ճիշտ լինի, ուրեմն ճիշտ չէ։ Ջնջի՛ր նամակը, իսկ եթե վստահ չես, հարցրու մեծահասակին կամ ինքդ կապվիր իրական ծառայության հետ։", "Если звучит слишком хорошо, чтобы быть правдой, значит, это неправда. Удали письмо, а если сомневаешься, спроси взрослого или сам свяжись с настоящим сервисом.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { computer, network, flowchart, memory, layers, url, tag, box, os, phish };
