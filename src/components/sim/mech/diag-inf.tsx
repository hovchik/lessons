"use client";

import type { ArtLang, Tr } from "@/lib/art/spec";
import { L, t } from "../labels";
import type { Diagram } from "./types";

/* Labelled pictures for informatics: the computer, a home network, a flowchart, the memory pyramid, a neural network, a URL, an HTML tag, the CSS box, the operating system, a phishing email, two related tables, a class with its objects, the DOM, an HTTP exchange, git history, a Kanban board, an app's architecture. */

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

/* ---------------- two related tables ---------------- */

const DB_ST: Array<[number, Tr, Tr]> = [
  [1, t("Ani", "Անի", "Ани"), t("9A", "9Ա", "9А")],
  [2, t("Aram", "Արամ", "Арам"), t("9B", "9Բ", "9Б")],
  [3, t("Mariam", "Մարիամ", "Мариам"), t("9A", "9Ա", "9А")],
];
const DB_MK: Array<[number, Tr, number]> = [
  [1, t("Informatics", "Ինֆորմատիկա", "Информатика"), 10],
  [1, t("Chemistry", "Քիմիա", "Химия"), 8],
  [2, t("Informatics", "Ինֆորմատիկա", "Информатика"), 9],
];
const DB_LINK = ["#4f46e5", "#4f46e5", "#e11d48"];

const db: Diagram = {
  title: t("Two tables linked by a key", "Բանալիով կապված երկու աղյուսակ", "Две таблицы, связанные ключом"),
  draw: (lang) => {
    const cell = (x: number, y: number, w: number, s: string, opts: { head?: boolean; fill?: string; color?: string; anchor?: "start" | "middle" } = {}) => (
      <g>
        <rect x={x} y={y} width={w} height="20" fill={opts.fill ?? (opts.head ? "#f1f5f9" : "#fff")} stroke="#94a3b8" strokeWidth="0.8" />
        <text x={opts.anchor === "start" ? x + 4 : x + w / 2} y={y + 13.5} textAnchor={opts.anchor ?? "middle"} fontSize={opts.head ? 7 : s.length > 10 ? 6.5 : 7.5} fontWeight={opts.head ? 900 : 700} fill={opts.color ?? (opts.head ? "#475569" : "#1e1b4b")}>{s}</text>
      </g>
    );
    return (
      <g>
        <Tx x={76} y={30} s={t("Students", "Աշակերտներ", "Ученики")} lang={lang} size={10} />
        <Tx x={244} y={30} s={t("Marks", "Գնահատականներ", "Оценки")} lang={lang} size={10} />
        {/* Students: id, name, class */}
        {cell(8, 38, 28, "🔑 id", { head: true, fill: "#fef3c7" })}
        {cell(36, 38, 62, L(t("name", "անուն", "имя"), lang), { head: true })}
        {cell(98, 38, 46, L(t("class", "դասարան", "класс"), lang), { head: true })}
        {DB_ST.map(([id, name, cls], k) => (
          <g key={k}>
            {cell(8, 58 + k * 20, 28, String(id), { fill: "#fffbeb", color: "#b45309" })}
            {cell(36, 58 + k * 20, 62, L(name, lang), { anchor: "start" })}
            {cell(98, 58 + k * 20, 46, L(cls, lang))}
          </g>
        ))}
        {/* Marks: student_id, subject, mark */}
        {cell(176, 38, 44, "student_id", { head: true, fill: "#e0e7ff" })}
        {cell(220, 38, 62, L(t("subject", "առարկա", "предмет"), lang), { head: true })}
        {cell(282, 38, 30, L(t("mark", "գնահ.", "оценка"), lang), { head: true })}
        {DB_MK.map(([sid, subj, mark], k) => (
          <g key={k}>
            {cell(176, 58 + k * 20, 44, String(sid), { fill: "#eef2ff", color: DB_LINK[k] })}
            {cell(220, 58 + k * 20, 62, L(subj, lang), { anchor: "start" })}
            {cell(282, 58 + k * 20, 30, String(mark))}
          </g>
        ))}
        {/* the foreign key points at the primary key */}
        {DB_MK.map(([sid], k) => {
          const y1 = 68 + k * 20, y2 = 68 + (sid - 1) * 20;
          return <path key={k} d={`M176,${y1} C160,${y1} 160,${y2} 146,${y2}`} fill="none" stroke={DB_LINK[k]} strokeWidth="1.6" markerEnd="url(#db-head)" />;
        })}
        <defs><marker id="db-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
        {/* kinds of relationship */}
        {[
          [t("one to one", "մեկը մեկին", "один к одному"), "1", "1"],
          [t("one to many", "մեկը շատերին", "один ко многим"), "1", "∞"],
          [t("many to many", "շատը շատերին", "многие ко многим"), "∞", "∞"],
        ].map(([s, a, b], k) => {
          const x = 14 + k * 102;
          return (
            <g key={k}>
              <rect x={x} y={160} width="26" height="18" rx="3" fill="#e0e7ff" stroke="#6366f1" />
              <rect x={x + 64} y={160} width="26" height="18" rx="3" fill="#dcfce7" stroke="#16a34a" />
              <line x1={x + 26} y1="169" x2={x + 64} y2="169" stroke="#475569" strokeWidth="1.4" />
              <text x={x + 32} y="165" fontSize="8" fontWeight="900" fill="#475569">{a as string}</text>
              <text x={x + 52} y="165" fontSize="8" fontWeight="900" fill="#475569">{b as string}</text>
              <Tx x={x + 45} y={194} s={s as Tr} lang={lang} size={8} fill="#334155" />
            </g>
          );
        })}
      </g>
    );
  },
  parts: [
    P(70, 130, t("Record and field", "Գրառում և դաշտ", "Запись и поле"), t("Each row is one record, here one pupil. Each column is a field with a fixed type: id is a number, name is text. Every record has the same fields, which is what makes a table easy to search.", "Յուրաքանչյուր տող մեկ գրառում է, այստեղ՝ մեկ աշակերտ։ Յուրաքանչյուր սյուն որոշակի տիպի դաշտ է․ id-ն թիվ է, անունը՝ տեքստ։ Բոլոր գրառումներն ունեն նույն դաշտերը, և հենց դա է աղյուսակը հեշտ որոնելի դարձնում։", "Каждая строка — одна запись, здесь один ученик. Каждый столбец — поле определённого типа: id — число, имя — текст. У всех записей одинаковые поля, поэтому по таблице легко искать.")),
    P(22, 130, t("Primary key", "Առաջնային բանալի", "Первичный ключ"), t("id identifies a pupil uniquely. There may be two girls called Ani, but never two records with id 1, and the database itself refuses a duplicate.", "id-ն միանշանակ նույնականացնում է աշակերտին։ Կարող են լինել Անի անունով երկու աղջիկ, բայց երբեք երկու գրառում՝ 1 id-ով, և տվյալների բազան ինքն է մերժում կրկնօրինակը։", "id однозначно определяет ученика. Девочек по имени Ани может быть две, но записей с id 1 никогда, и база данных сама откажется добавить дубликат.")),
    P(198, 130, t("Foreign key", "Արտաքին բանալի", "Внешний ключ"), t("student_id stores only the number of a pupil from the other table. The arrows show the link: both blue marks belong to Ani, the red one to Aram. Mariam has no marks yet.", "student_id-ն պահում է միայն մյուս աղյուսակի աշակերտի համարը։ Սլաքները ցույց են տալիս կապը․ երկու կապույտ գնահատականները Անինն են, կարմիրը՝ Արամինը։ Մարիամը դեռ գնահատական չունի։", "student_id хранит только номер ученика из другой таблицы. Стрелки показывают связь: обе синие оценки принадлежат Ани, красная — Араму. У Мариам оценок пока нет.")),
    P(258, 130, t("Why two tables?", "Ինչո՞ւ երկու աղյուսակ", "Зачем две таблицы?"), t("If the name were written on every mark row, a pupil with 200 marks would have it 200 times, and one typo would make two different people. With a key, the name lives in one place.", "Եթե անունը գրվեր գնահատականների ամեն տողում, 200 գնահատական ունեցող աշակերտի անունը կլիներ 200 անգամ, և մեկ վրիպակից կստացվեր երկու տարբեր մարդ։ Բանալու շնորհիվ անունը պահվում է մեկ տեղում։", "Если бы имя писали в каждой строке с оценкой, у ученика с 200 оценками оно повторилось бы 200 раз, и одна опечатка превратила бы его в двух разных людей. С ключом имя хранится в одном месте.")),
    P(262, 150, t("Many to many", "Շատը շատերին", "Многие ко многим"), t("A pupil can join several clubs and a club has many pupils. Neither table can hold that alone, so a third, linking table stores pairs: (pupil, club).", "Աշակերտը կարող է հաճախել մի քանի խմբակ, իսկ խմբակն ունի շատ աշակերտներ։ Դա չի կարող պահել աղյուսակներից ոչ մեկն առանձին, ուստի երրորդ՝ կապող աղյուսակը պահում է զույգեր՝ (աշակերտ, խմբակ)։", "Ученик может ходить в несколько кружков, а в кружке много учеников. Ни одна из таблиц не может хранить это сама, поэтому третья, связующая таблица хранит пары: (ученик, кружок).")),
  ],
};

/* ---------------- a class, its objects and its children ---------------- */

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const OOP_OBJ: Array<[Tr, Tr, string, string]> = [
  [t("anya", "ani", "anya"), t("Anya", "Անի", "Аня"), "[9, 10]", "9.5"],
  [t("aram", "aram", "aram"), t("Aram", "Արամ", "Арам"), "[8]", "8.0"],
];
const OOP_KIDS: Array<[string, Tr, string, string]> = [
  ["Dog", t("Woof", "Հաֆ", "Гав"), "#dcfce7", "#16a34a"],
  ["Cat", t("Miaow", "Մյաու", "Мяу"), "#fce7f3", "#db2777"],
];

const oop: Diagram = {
  title: t("A class, its objects and its children", "Դաս, նրա օբյեկտները և ժառանգները", "Класс, его объекты и наследники"),
  draw: (lang) => (
    <g fontFamily={MONO}>
      <defs><marker id="oop-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
      {/* the class: a blueprint */}
      <rect x="10" y="14" width="118" height="112" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="5 3" />
      <rect x="10" y="14" width="118" height="20" rx="6" fill="#2563eb" />
      <text x="69" y="28" textAnchor="middle" fontSize="9" fontWeight="900" fill="#fff">class Student</text>
      {["name", "grade", "scores"].map((f, k) => <text key={f} x="18" y={48 + k * 12} fontSize="8" fontWeight="700" fill="#1e3a8a">self.{f}</text>)}
      <line x1="10" y1="82" x2="128" y2="82" stroke="#93c5fd" />
      {["__init__()", "add_score(s)", "average()"].map((m, k) => <text key={m} x="18" y={96 + k * 12} fontSize="8" fontWeight="700" fill="#7c3aed">{m}</text>)}
      {/* two objects built from it */}
      {OOP_OBJ.map(([v, name, sc, avg], k) => {
        const y = 14 + k * 58;
        return (
          <g key={k}>
            <path d={`M128,${50 + k * 30} C150,${50 + k * 30} 150,${y + 24} 172,${y + 24}`} fill="none" stroke="#475569" strokeWidth="1.3" markerEnd="url(#oop-head)" />
            <rect x="174" y={y} width="138" height="50" rx="6" fill="#fff" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="182" y={y + 13} fontSize="8.5" fontWeight="900" fill="#b45309">{L(v, lang)}: Student</text>
            <text x="182" y={y + 26} fontSize="7.5" fontWeight="700" fill="#334155">name = &quot;{L(name, lang)}&quot;, grade = 10</text>
            <text x="182" y={y + 38} fontSize="7.5" fontWeight="700" fill="#334155">scores = {sc}</text>
            <text x="304" y={y + 38} textAnchor="end" fontSize="7.5" fontWeight="900" fill="#7c3aed">→ {avg}</text>
          </g>
        );
      })}
      {/* inheritance */}
      <rect x="20" y="146" width="96" height="30" rx="6" fill="#f1f5f9" stroke="#475569" />
      <text x="68" y="159" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#1e1b4b">Animal</text>
      <text x="68" y="170" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#475569">sound() → &quot;...&quot;</text>
      {OOP_KIDS.map(([c, snd, bg, fg], k) => {
        const x = 136 + k * 92;
        return (
          <g key={c}>
            <path d={`M${x + 43},186 C${x + 43},166 140,161 118,161`} fill="none" stroke={fg} strokeWidth="1.3" markerEnd="url(#oop-head)" />
            <rect x={x} y="186" width="86" height="30" rx="6" fill={bg} stroke={fg} />
            <text x={x + 43} y="199" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#1e1b4b">{c}(Animal)</text>
            <text x={x + 43} y="210" textAnchor="middle" fontSize="7" fontWeight="700" fill={fg}>sound() → &quot;{L(snd, lang)}&quot;</text>
          </g>
        );
      })}
    </g>
  ),
  parts: [
    P(118, 20, t("Class: the blueprint", "Դաս՝ նախագիծը", "Класс: чертёж"), t("A class describes what every object of its kind will have: properties (name, grade, scores) and methods (add_score, average). By itself it holds no pupil's data, just as a blueprint is not a house.", "Դասը նկարագրում է, թե ինչ կունենա իր տեսակի յուրաքանչյուր օբյեկտ․ հատկություններ (name, grade, scores) և մեթոդներ (add_score, average)։ Ինքնին այն ոչ մի աշակերտի տվյալ չի պահում, ինչպես որ նախագիծը տուն չէ։", "Класс описывает, что будет у каждого объекта этого вида: свойства (name, grade, scores) и методы (add_score, average). Сам по себе он не хранит данных ни одного ученика, как чертёж — это ещё не дом.")),
    P(302, 20, t("Objects: the houses", "Օբյեկտներ՝ տները", "Объекты: дома"), t("Each call Student(...) builds a new object with its own copy of the properties. Changing Aram's scores does not touch Anya's: the two objects share only the class's methods.", "Student(...) յուրաքանչյուր կանչը կառուցում է նոր օբյեկտ՝ հատկությունների իր սեփական պատճենով։ Արամի գնահատականները փոխելը չի դիպչում Անիի գնահատականներին․ երկու օբյեկտներին ընդհանուր են միայն դասի մեթոդները։", "Каждый вызов Student(...) строит новый объект со своей копией свойств. Если изменить оценки Арама, оценки Ани не изменятся: у двух объектов общие только методы класса.")),
    P(118, 100, t("Methods and self", "Մեթոդներ և self", "Методы и self"), t("A method is a function that lives inside the class. When you write anya.average(), Python passes the object itself as self, so the same code adds up Anya's scores for her and Aram's for him.", "Մեթոդը դասի ներսում ապրող ֆունկցիա է։ Երբ գրում ես ani.average(), Python-ն օբյեկտն ինքը փոխանցում է որպես self, ուստի նույն կոդը գումարում է Անիի համար՝ Անիի գնահատականները, իսկ Արամի համար՝ Արամինը։", "Метод — это функция, живущая внутри класса. Когда ты пишешь anya.average(), Python передаёт сам объект как self, поэтому один и тот же код складывает оценки Ани для неё и оценки Арама для него.")),
    P(28, 150, t("Inheritance", "Ժառանգում", "Наследование"), t("Dog(Animal) means: a Dog is an Animal. It gets the name and everything else from Animal for free and only writes what is different.", "Dog(Animal) նշանակում է՝ շունը կենդանի է։ Այն Animal դասից անվճար ստանում է անունը և մնացած ամեն ինչ և գրում է միայն տարբերվողը։", "Dog(Animal) значит: собака — это животное. Она бесплатно получает от Animal имя и всё остальное и пишет только то, что отличается.")),
    P(306, 172, t("Polymorphism", "Պոլիմորֆիզմ", "Полиморфизм"), t("The same call, a.sound(), gives a different answer for each class. A loop over a list of animals does not need to know which animal is which.", "Նույն կանչը՝ a.sound(), տարբեր պատասխան է տալիս յուրաքանչյուր դասի համար։ Կենդանիների ցուցակով անցնող ցիկլին պետք չէ իմանալ, թե որ կենդանին որն է։", "Один и тот же вызов a.sound() даёт разный ответ для каждого класса. Циклу по списку животных не нужно знать, какое животное какое.")),
  ],
};

/* ---------------- the DOM and an event ---------------- */

const DOM_CODE = ['<h1>{T}</h1>', '<button id="btn">+1</button>', '<p id="out">0</p>', "<script>", "let n = 0;", 'btn.addEventListener("click", () => {', "  n++;", "  out.textContent = n;", "});", "</script>"];
const DOM_NODES: Array<[string, number, number, string]> = [
  ["document", 236, 26, "#e0e7ff"], ["html", 236, 54, "#e0e7ff"], ["head", 196, 84, "#f1f5f9"], ["body", 278, 84, "#f1f5f9"],
  ["h1", 222, 116, "#fef3c7"], ["button", 262, 116, "#dcfce7"], ["p", 304, 116, "#fce7f3"],
];
const DOM_EDGES = [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [3, 6]];

const dom: Diagram = {
  title: t("The page as a tree, and a click", "Էջը՝ որպես ծառ, և սեղմում", "Страница как дерево и щелчок"),
  draw: (lang) => {
    const title = L(t("Counter", "Հաշվիչ", "Счётчик"), lang);
    return (
      <g>
        <rect x="4" y="14" width="160" height="132" rx="6" fill="#0f172a" />
        {DOM_CODE.map((ln, k) => (
          <text key={k} x="9" y={28 + k * 12} fontSize="6" fontWeight="700" fontFamily={MONO} fill={k < 3 ? "#93c5fd" : k === 5 ? "#fbbf24" : k === 7 ? "#86efac" : "#e2e8f0"} xmlSpace="preserve">{ln.replace("{T}", title)}</text>
        ))}
        {DOM_EDGES.map(([a, b]) => <line key={b} x1={DOM_NODES[a][1]} y1={DOM_NODES[a][2] + 7} x2={DOM_NODES[b][1]} y2={DOM_NODES[b][2] - 7} stroke="#94a3b8" strokeWidth="1.2" />)}
        {DOM_NODES.map(([n, x, y, c]) => (
          <g key={n}>
            <rect x={x - (n.length > 4 ? 22 : 15)} y={y - 7} width={n.length > 4 ? 44 : 30} height="14" rx="4" fill={c} stroke="#64748b" strokeWidth="0.8" />
            <text x={x} y={y + 3} textAnchor="middle" fontSize="7" fontWeight="800" fontFamily={MONO} fill="#1e1b4b">{n}</text>
          </g>
        ))}
        {/* what the visitor sees */}
        <rect x="166" y="140" width="146" height="74" rx="6" fill="#fff" stroke="#64748b" />
        <rect x="166" y="140" width="146" height="12" rx="6" fill="#e2e8f0" />
        {["#f87171", "#fbbf24", "#4ade80"].map((c, k) => <circle key={c} cx={174 + k * 7} cy="146" r="2.2" fill={c} />)}
        <text x="176" y="168" fontSize="10" fontWeight="900" fill="#1e1b4b">{title}</text>
        <rect x="176" y="176" width="30" height="16" rx="4" fill="#16a34a" />
        <text x="191" y="187" textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">+1</text>
        <path d="M200,186 l0,12 l3,-3 l3,6 l2,-1 l-3,-6 l4,0 Z" fill="#1e1b4b" stroke="#fff" strokeWidth="0.6" />
        <text x="178" y="207" fontSize="9" fontWeight="900" fill="#db2777">3</text>
        <path d="M212,184 C240,184 250,170 290,124" fill="none" stroke="#f59e0b" strokeWidth="1.3" strokeDasharray="3 2" />
        <Tx x={262} y={204} s={t("click → n++ → new text", "սեղմում → n++ → նոր տեքստ", "щелчок → n++ → новый текст")} lang={lang} size={6.5} fill="#b45309" />
      </g>
    );
  },
  parts: [
    P(296, 26, t("The DOM tree", "DOM ծառը", "Дерево DOM"), t("The browser reads the HTML and builds a tree of objects: document at the top, then html, head, body and every element inside. JavaScript never edits the HTML text; it changes this tree, and the browser redraws the page.", "Դիտարկիչը կարդում է HTML-ը և կառուցում օբյեկտների ծառ․ վերևում document-ն է, հետո html, head, body և դրանց ներսի յուրաքանչյուր տարր։ JavaScript-ը երբեք չի խմբագրում HTML տեքստը․ այն փոխում է այս ծառը, և դիտարկիչը վերագծում է էջը։", "Браузер читает HTML и строит дерево объектов: наверху document, затем html, head, body и каждый элемент внутри. JavaScript никогда не правит текст HTML: он меняет это дерево, а браузер перерисовывает страницу.")),
    P(174, 34, t("Elements with an id", "id ունեցող տարրեր", "Элементы с id"), t("id=\"btn\" gives the button a name the script can use. The usual way to find it is document.getElementById(\"btn\"); browsers also let you write just btn, as in this short example.", "id=\"btn\"-ը կոճակին տալիս է անուն, որը սկրիպտը կարող է օգտագործել։ Այն գտնելու սովորական եղանակը document.getElementById(\"btn\") է, իսկ դիտարկիչները թույլ են տալիս գրել նաև պարզապես btn, ինչպես այս կարճ օրինակում։", "id=\"btn\" даёт кнопке имя, которым может пользоваться скрипт. Обычно её находят так: document.getElementById(\"btn\"); браузеры позволяют написать и просто btn, как в этом коротком примере.")),
    P(174, 104, t("An event listener", "Իրադարձության մշակիչ", "Обработчик события"), t("addEventListener says: when this button is clicked, run this function. The program does not wait in a loop; the browser calls the function each time the event happens.", "addEventListener-ն ասում է․ երբ այս կոճակը սեղմվի, կատարի՛ր այս ֆունկցիան։ Ծրագիրը ցիկլում չի սպասում․ դիտարկիչն ինքն է կանչում ֆունկցիան ամեն անգամ, երբ իրադարձությունը տեղի է ունենում։", "addEventListener говорит: когда нажмут эту кнопку, выполни эту функцию. Программа не ждёт в цикле: браузер сам вызывает функцию каждый раз, когда происходит событие.")),
    P(302, 102, t("Changing the page", "Էջի փոփոխումը", "Изменение страницы"), t("out.textContent = n puts the new number into the p element. Only that node changes, so the page updates instantly without loading again.", "out.textContent = n հրամանը նոր թիվը դնում է p տարրի մեջ։ Փոխվում է միայն այդ հանգույցը, ուստի էջը թարմանում է ակնթարթորեն՝ առանց նորից բեռնվելու։", "out.textContent = n кладёт новое число в элемент p. Меняется только этот узел, поэтому страница обновляется мгновенно, без повторной загрузки.")),
    P(300, 160, t("Try it: F12", "Փորձի՛ր․ F12", "Попробуй: F12"), t("Press F12 on any website and open the Console tab. Type document.title = \"Hi\" and press Enter: the tab's title changes at once. Reload the page and it is back, because you changed only your copy of the tree.", "Ցանկացած կայքում սեղմի՛ր F12 և բացի՛ր Console ներդիրը։ Գրի՛ր document.title = \"Hi\" և սեղմի՛ր Enter․ ներդիրի վերնագիրն անմիջապես կփոխվի։ Վերաբեռնի՛ր էջը, և ամեն ինչ կվերադառնա, որովհետև փոխել էիր միայն ծառի քո պատճենը։", "Нажми F12 на любом сайте и открой вкладку Console. Набери document.title = \"Hi\" и нажми Enter: заголовок вкладки сразу изменится. Перезагрузи страницу, и всё вернётся, потому что ты менял только свою копию дерева.")),
  ],
};

/* ---------------- an HTTP request and response ---------------- */

const HTTP_REQ = ["GET /weather?city=Yerevan HTTP/1.1", "Host: api.example.com", "Accept: application/json"];
const HTTP_RES = ["HTTP/1.1 200 OK", "Content-Type: application/json", "", "{", '  "city": "Yerevan",', '  "temp": 24,', '  "sky": "sunny"', "}"];

const http: Diagram = {
  title: t("A request and a response", "Հարցում և պատասխան", "Запрос и ответ"),
  draw: (lang) => (
    <g>
      <defs><marker id="http-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
      {/* client: a laptop */}
      <rect x="10" y="92" width="40" height="28" rx="3" fill="#1e293b" />
      <rect x="13" y="95" width="34" height="22" fill="#60a5fa" />
      <path d="M4,122 h52 l-4,5 h-44 Z" fill="#94a3b8" />
      <Tx x={30} y={140} s={t("client", "հաճախորդ", "клиент")} lang={lang} size={8} />
      {/* server: a rack */}
      <rect x="276" y="84" width="38" height="44" rx="3" fill="#334155" />
      {[0, 1, 2].map((k) => <g key={k}><rect x="280" y={88 + k * 13} width="30" height="10" rx="2" fill="#475569" /><circle cx="305" cy={93 + k * 13} r="1.6" fill="#4ade80" /></g>)}
      <Tx x={295} y={140} s={t("server", "սերվեր", "сервер")} lang={lang} size={8} />
      {/* request */}
      <rect x="62" y="22" width="206" height="46" rx="5" fill="#eef2ff" stroke="#6366f1" />
      {HTTP_REQ.map((ln, k) => <text key={k} x="68" y={35 + k * 12} fontSize="7" fontWeight={k ? 700 : 900} fontFamily={MONO} fill={k ? "#475569" : "#3730a3"}>{ln}</text>)}
      <path d="M30,90 V24 Q30,14 40,14 H285 Q295,14 295,24 V80" fill="none" stroke="#6366f1" strokeWidth="1.3" markerEnd="url(#http-head)" />
      <Tx x={176} y={11} s={t("request", "հարցում", "запрос")} lang={lang} size={7.5} fill="#4338ca" />
      {/* response */}
      <rect x="62" y="80" width="206" height="106" rx="5" fill="#f0fdf4" stroke="#16a34a" />
      {HTTP_RES.map((ln, k) => <text key={k} x="68" y={93 + k * 12} fontSize="7" fontWeight={k ? 700 : 900} fontFamily={MONO} fill={k === 0 ? "#15803d" : k === 1 ? "#475569" : "#1e1b4b"} xmlSpace="preserve">{ln}</text>)}
      <path d="M295,146 V194 Q295,204 285,204 H40 Q30,204 30,194 V150" fill="none" stroke="#16a34a" strokeWidth="1.3" markerEnd="url(#http-head)" />
      <Tx x={166} y={214} s={t("response", "պատասխան", "ответ")} lang={lang} size={7.5} fill="#15803d" />
    </g>
  ),
  parts: [
    P(258, 30, t("Method and path", "Մեթոդ և ուղի", "Метод и путь"), t("GET means \"give me\". The path /weather names the resource, and everything after ? is parameters: here, which city. POST, PUT and DELETE send, change and delete data.", "GET նշանակում է «տո՛ւր ինձ»։ /weather ուղին անվանում է ռեսուրսը, իսկ ? նշանից հետո եկողը պարամետրերն են․ այստեղ՝ որ քաղաքը։ POST, PUT և DELETE մեթոդներն ուղարկում, փոխում և ջնջում են տվյալներ։", "GET значит «дай мне». Путь /weather называет ресурс, а всё после ? — параметры: здесь, какой город. POST, PUT и DELETE отправляют, меняют и удаляют данные.")),
    P(258, 56, t("Headers", "Վերնագրեր", "Заголовки"), t("Extra lines of information. Host says which site on the server we want; Accept says we would like JSON back. Many APIs also expect a key in a header, which is why a key must never be published.", "Տեղեկատվության լրացուցիչ տողեր։ Host-ն ասում է, թե սերվերի որ կայքն ենք ուզում, Accept-ը՝ որ պատասխանում JSON ենք ուզում։ Շատ API-ներ վերնագրում նաև բանալի են սպասում, ուստի բանալին երբեք չպետք է հրապարակել։", "Дополнительные строки сведений. Host говорит, какой сайт на сервере нам нужен; Accept — что мы хотим получить JSON. Многие API ждут в заголовке ещё и ключ, поэтому ключ нельзя публиковать.")),
    P(258, 90, t("Status code", "Կարգավիճակի կոդ", "Код состояния"), t("200 means all is well. The first digit tells the story: 2 success, 3 moved elsewhere, 4 your mistake (404 not found, 403 forbidden), 5 the server's mistake.", "200-ը նշանակում է՝ ամեն ինչ լավ է։ Առաջին թվանշանը պատմում է ամբողջը․ 2՝ հաջողություն, 3՝ տեղափոխվել է, 4՝ քո սխալը (404՝ չի գտնվել, 403՝ արգելված է), 5՝ սերվերի սխալը։", "200 значит, что всё хорошо. Первая цифра говорит главное: 2 — успех, 3 — переехало, 4 — твоя ошибка (404 не найдено, 403 запрещено), 5 — ошибка сервера.")),
    P(240, 150, t("JSON data", "JSON տվյալներ", "Данные JSON"), t("The body is not a page for a person but data for a program: keys in quotes, values after colons. In Python, json.loads turns this text into a dictionary, so data[\"temp\"] gives 24.", "Մարմինը ոչ թե էջ է մարդու համար, այլ տվյալներ՝ ծրագրի համար․ բանալիները չակերտներում են, արժեքները՝ երկու կետից հետո։ Python-ում json.loads-ը այս տեքստը վերածում է բառարանի, ուստի data[\"temp\"]-ը տալիս է 24։", "Тело — не страница для человека, а данные для программы: ключи в кавычках, значения после двоеточий. В Python json.loads превращает этот текст в словарь, так что data[\"temp\"] даёт 24.")),
    P(30, 84, t("Client and server", "Հաճախորդ և սերվեր", "Клиент и сервер"), t("The client always starts the conversation, and the server only answers. Each request stands alone: the server does not remember you unless you send something, such as a cookie or a key, every time.", "Զրույցը միշտ սկսում է հաճախորդը, իսկ սերվերը միայն պատասխանում է։ Յուրաքանչյուր հարցում ինքնուրույն է․ սերվերը քեզ չի հիշում, եթե ամեն անգամ ինչ-որ բան, օրինակ՝ cookie կամ բանալի, չուղարկես։", "Разговор всегда начинает клиент, а сервер только отвечает. Каждый запрос сам по себе: сервер тебя не помнит, если ты каждый раз не присылаешь что-нибудь, например cookie или ключ.")),
  ],
};

/* ---------------- git history with a branch ---------------- */

const GIT_MAIN: Array<[number, string, Tr]> = [
  [34, "a1f3", t("first version", "առաջին տարբերակ", "первая версия")],
  [92, "7c2e", t("add menu", "մենյու", "меню")],
  [150, "e91b", t("fix typo", "վրիպակ", "опечатка")],
  [236, "4d07", t("merge", "միավորում", "слияние")],
];
const GIT_FEAT: Array<[number, string, Tr]> = [
  [150, "b3a9", t("dark theme", "մուգ թեմա", "тёмная тема")],
  [200, "0f6c", t("tests", "թեստեր", "тесты")],
];

const git: Diagram = {
  title: t("A project's history in git", "Նախագծի պատմությունը git-ում", "История проекта в git"),
  draw: (lang) => (
    <g>
      <defs><marker id="git-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
      {/* the remote */}
      <path d="M254,40 a12,12 0 0 1 4,-23 a16,16 0 0 1 30,-2 a11,11 0 0 1 16,13 a10,10 0 0 1 -4,12 Z" fill="#f1f5f9" stroke="#64748b" />
      <text x="278" y="34" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#1e1b4b">GitHub</text>
      <path d="M262,78 C262,64 264,56 268,46" fill="none" stroke="#475569" strokeWidth="1.2" markerEnd="url(#git-head)" />
      <text x="232" y="56" fontSize="6.5" fontWeight="800" fontFamily={MONO} fill="#475569">git push</text>
      {/* main */}
      <line x1="34" y1="90" x2="262" y2="90" stroke="#4f46e5" strokeWidth="3" />
      <text x="10" y="80" fontSize="7" fontWeight="900" fontFamily={MONO} fill="#4f46e5">main</text>
      {/* the branch */}
      <path d="M92,90 C112,90 120,140 150,140 H200 C222,140 222,90 236,90" fill="none" stroke="#f59e0b" strokeWidth="3" />
      <text x="136" y="143" textAnchor="end" fontSize="7" fontWeight="900" fontFamily={MONO} fill="#b45309">new-feature</text>
      {GIT_MAIN.map(([x, h, m], k) => (
        <g key={h}>
          <circle cx={x} cy="90" r={k === 3 ? 8 : 7} fill="#fff" stroke="#4f46e5" strokeWidth="2.5" />
          <text x={x} y="72" textAnchor="middle" fontSize="6.5" fontWeight="800" fontFamily={MONO} fill="#64748b">{h}</text>
          <Tx x={k === 3 ? x + 10 : x} y={110} s={m} lang={lang} size={6.5} fill="#3730a3" anchor={k === 3 ? "start" : "middle"} />
        </g>
      ))}
      {GIT_FEAT.map(([x, h, m]) => (
        <g key={h}>
          <circle cx={x} cy="140" r="7" fill="#fff" stroke="#f59e0b" strokeWidth="2.5" />
          <text x={x} y="128" textAnchor="middle" fontSize="6.5" fontWeight="800" fontFamily={MONO} fill="#64748b">{h}</text>
          <Tx x={x} y={160} s={m} lang={lang} size={6.5} fill="#b45309" />
        </g>
      ))}
      <rect x="248" y="84" width="30" height="12" rx="3" fill="#4f46e5" />
      <text x="263" y="93" textAnchor="middle" fontSize="6.5" fontWeight="900" fontFamily={MONO} fill="#fff">HEAD</text>
      {/* the three places a change passes through */}
      {[
        [t("working folder", "աշխատանքային թղթապանակ", "рабочая папка"), "#fef3c7"],
        [t("staging area", "նախապատրաստման տարածք", "индекс"), "#e0e7ff"],
        [t("history", "պատմություն", "история"), "#dcfce7"],
      ].map(([s, c], k) => (
        <g key={k}>
          <rect x={10 + k * 104} y="180" width="88" height="22" rx="5" fill={c as string} stroke="#94a3b8" />
          <Tx x={54 + k * 104} y={194} s={s as Tr} lang={lang} size={6.5} fill="#1e1b4b" w={800} />
        </g>
      ))}
      {["git add", "git commit"].map((c, k) => (
        <g key={c}>
          <path d={`M${98 + k * 104},191 h6`} stroke="#475569" strokeWidth="1.2" markerEnd="url(#git-head)" />
          <text x={104 + k * 104} y="214" textAnchor="middle" fontSize="6.5" fontWeight="800" fontFamily={MONO} fill="#475569">{c}</text>
        </g>
      ))}
    </g>
  ),
  parts: [
    P(60, 76, t("A commit", "Commit՝ պահպանված քայլ", "Коммит"), t("A commit is a saved snapshot of the whole project with a message and an author. Its name is a long code computed from the contents, shortened here to four characters; change one letter and the code is completely different.", "Commit-ը ամբողջ նախագծի պահպանված պատկերն է՝ հաղորդագրությամբ և հեղինակով։ Նրա անունը բովանդակությունից հաշվված երկար կոդ է, որն այստեղ կրճատված է չորս նիշի․ փոխի՛ր մեկ տառ, և կոդն ամբողջովին այլ կլինի։", "Коммит — сохранённый снимок всего проекта с сообщением и автором. Его имя — длинный код, вычисленный по содержимому, здесь сокращённый до четырёх знаков; измени одну букву, и код станет совсем другим.")),
    P(175, 126, t("A branch", "Ճյուղ", "Ветка")
, t("new-feature is a separate line of work. You can try a dark theme there while main keeps working; if the idea fails, the branch is simply deleted.", "new-feature-ը աշխատանքի առանձին գիծ է։ Այնտեղ կարելի է փորձել մուգ թեման, մինչդեռ main-ը շարունակում է աշխատել․ եթե գաղափարը չստացվի, ճյուղը պարզապես ջնջվում է։", "new-feature — отдельная линия работы. Там можно пробовать тёмную тему, пока main продолжает работать; если идея не удалась, ветку просто удаляют.")),
    P(216, 66, t("A merge", "Միավորում", "Слияние"), t("git merge joins the branch back into main. If two people changed the same line, git stops and asks a human to choose: that is a merge conflict.", "git merge հրամանը ճյուղը հետ է միացնում main-ին։ Եթե երկու մարդ փոխել են նույն տողը, git-ը կանգ է առնում և խնդրում մարդուն ընտրել․ սա միավորման կոնֆլիկտ է։", "git merge соединяет ветку обратно с main. Если два человека изменили одну и ту же строку, git останавливается и просит человека выбрать: это конфликт слияния.")),
    P(300, 46, t("The remote copy", "Հեռավոր պատճենը", "Удалённая копия"), t("git push sends your commits to a shared copy, for example on GitHub, and git pull brings in your teammates' work. Every developer keeps the full history on their own computer too.", "git push-ը քո պահպանված քայլերն ուղարկում է ընդհանուր պատճենին, օրինակ՝ GitHub-ում, իսկ git pull-ը բերում է թիմակիցներիդ աշխատանքը։ Յուրաքանչյուր ծրագրավորող ամբողջ պատմությունը պահում է նաև իր համակարգչում։", "git push отправляет твои коммиты в общую копию, например на GitHub, а git pull приносит работу товарищей по команде. Каждый разработчик хранит полную историю и у себя на компьютере.")),
    P(158, 212, t("Add, then commit", "Նախ add, հետո commit", "Сначала add, потом commit"), t("git add picks which changes go into the next snapshot, and git commit saves them. So you can fix a typo and start a new feature, yet record them as two clear steps.", "git add-ը ընտրում է, թե որ փոփոխությունները մտնեն հաջորդ պատկերի մեջ, իսկ git commit-ը պահպանում է դրանք։ Այսպես կարելի է ուղղել վրիպակը և սկսել նոր հնարավորություն, բայց դրանք գրանցել որպես երկու հստակ քայլ։", "git add выбирает, какие изменения попадут в следующий снимок, а git commit сохраняет их. Так можно исправить опечатку и начать новую функцию, но записать это двумя понятными шагами.")),
  ],
};

/* ---------------- a Kanban board ---------------- */

const KANBAN: Array<[Tr, string, Array<[Tr, boolean]>]> = [
  [t("To do", "Անելիք", "Сделать"), "#f1f5f9", [[t("reminders", "հիշեցումներ", "напоминания"), false], [t("filter by subject", "զտիչ՝ ըստ առարկայի", "фильтр по предмету"), false], [t("delete a task", "առաջադրանքի ջնջում", "удаление задания"), true]]],
  [t("In progress", "Ընթացքում", "В работе"), "#fef3c7", [[t("add a task", "առաջադրանքի ավելացում", "добавление задания"), true]]],
  [t("Done", "Արված", "Готово"), "#dcfce7", [[t("list of tasks", "առաջադրանքների ցուցակ", "список заданий"), true], [t("database tables", "տվյալների աղյուսակներ", "таблицы базы"), true]]],
];

const kanban: Diagram = {
  title: t("A Kanban board for a project", "Նախագծի Kanban տախտակ", "Доска Kanban для проекта"),
  draw: (lang) => (
    <g>
      {KANBAN.map(([name, bg, cards], k) => {
        const x = 8 + k * 104;
        return (
          <g key={k}>
            <rect x={x} y="14" width="96" height="176" rx="6" fill={bg} stroke="#cbd5e1" />
            <Tx x={x + 48} y={30} s={name} lang={lang} size={8.5} />
            <text x={x + 88} y="30" textAnchor="end" fontSize="7" fontWeight="800" fill="#64748b">{cards.length}</text>
            {cards.map(([c, mvp], j) => (
              <g key={j}>
                <rect x={x + 6} y={40 + j * 38} width="84" height="32" rx="4" fill="#fff" stroke={mvp ? "#4f46e5" : "#cbd5e1"} strokeWidth={mvp ? 1.3 : 0.8} />
                <rect x={x + 6} y={40 + j * 38} width="4" height="32" rx="2" fill={mvp ? "#4f46e5" : "#94a3b8"} />
                <Tx x={x + 14} y={54 + j * 38} s={c} lang={lang} size={6.5} anchor="start" w={800} />
                {mvp ? <text x={x + 14} y={66 + j * 38} fontSize="6" fontWeight="900" fill="#4f46e5">MVP</text> : null}
              </g>
            ))}
          </g>
        );
      })}
      <Tx x={160} y={208} s={t("Cards move from left to right, one at a time.", "Քարտերը տեղափոխվում են ձախից աջ՝ մեկ առ մեկ։", "Карточки движутся слева направо, по одной.")} lang={lang} size={7.5} fill="#334155" w={700} />
    </g>
  ),
  parts: [
    P(56, 146, t("Small cards", "Փոքր քարտեր", "Маленькие карточки"), t("Each card is one step of no more than a few hours. \"Make the app\" is not a card; \"add a delete button\" is. Small steps are easy to estimate and give a feeling of progress every day.", "Յուրաքանչյուր քարտ մեկ քայլ է՝ ոչ ավելի, քան մի քանի ժամ։ «Պատրաստել հավելվածը» քարտ չէ, իսկ «ավելացնել ջնջելու կոճակ»-ը՝ քարտ է։ Փոքր քայլերը հեշտ է գնահատել, և ամեն օր առաջընթացի զգացում են տալիս։", "Каждая карточка — один шаг не больше чем на несколько часов. «Сделать приложение» — не карточка, а «добавить кнопку удаления» — карточка. Маленькие шаги легко оценить, и они каждый день дают ощущение движения.")),
    P(110, 30, t("Work in progress", "Ընթացիկ աշխատանք", "Работа в процессе"), t("Keep only one or two cards in the middle column. Starting five things at once means finishing none of them; Kanban teams set a limit on this column on purpose.", "Միջին սյունակում պահի՛ր միայն մեկ կամ երկու քարտ։ Միանգամից հինգ բան սկսելը նշանակում է դրանցից ոչ մեկը չավարտել․ Kanban թիմերը դիտմամբ սահմանափակում են այս սյունակը։", "Держи в средней колонке только одну-две карточки. Начать пять дел сразу — значит не закончить ни одного; команды Kanban нарочно ограничивают эту колонку.")),
    P(306, 54, t("MVP first", "Նախ MVP", "Сначала MVP")
, t("Cards marked MVP make the smallest version that is already useful. Do them first: if time runs out, you still have a working program, and the rest can wait.", "MVP նշված քարտերը կազմում են ամենափոքր տարբերակը, որն արդեն օգտակար է։ Դրանք արա՛ առաջինը․ եթե ժամանակը չբավականացնի, միևնույն է կունենաս աշխատող ծրագիր, իսկ մնացածը կարող է սպասել։", "Карточки с пометкой MVP составляют самую маленькую версию, которая уже полезна. Делай их первыми: если не хватит времени, у тебя всё равно будет работающая программа, а остальное подождёт.")),
    P(306, 130, t("What \"done\" means", "Ի՞նչ է նշանակում «արված»", "Что значит «готово»"), t("A card goes to Done only when the feature works, is tested and is saved in git, not when the code has merely been written.", "Քարտը Արված սյունակ է անցնում միայն այն ժամանակ, երբ հնարավորությունն աշխատում է, թեստավորված է և պահված է git-ում, և ոչ թե երբ կոդը պարզապես գրված է։", "Карточка попадает в Готово, только когда функция работает, проверена и сохранена в git, а не когда код просто написан.")),
    P(12, 200, t("Where it came from", "Որտեղից է եկել", "Откуда это"), t("Kanban means \"signboard\" in Japanese. The method grew out of Toyota's car factories, where cards showed which parts were needed next, and was later adopted by software teams.", "Kanban ճապոներեն նշանակում է «ցուցանակ»։ Եղանակը ծագել է Toyota ընկերության ավտոմոբիլային գործարաններում, որտեղ քարտերը ցույց էին տալիս, թե որ մասերն են հաջորդը պետք, և հետագայում ընդունվել է ծրագրավորողների թիմերի կողմից։", "Kanban по-японски значит «вывеска». Метод вырос на автомобильных заводах Toyota, где карточки показывали, какие детали нужны дальше, а потом его переняли команды программистов.")),
  ],
};

/* ---------------- the parts of an app ---------------- */

const ARCH_ROWS: Tr[] = [t("Maths: p. 45", "Մաթեմ․ էջ 45", "Математика: с. 45"), t("History essay", "Շարադրություն", "Сочинение"), t("Physics test", "Ֆիզիկայի թեստ", "Физика: тест")];

const arch: Diagram = {
  title: t("Frontend, backend, database", "Ֆրոնտենդ, բեքենդ, տվյալների բազա", "Фронтенд, бэкенд, база данных"),
  draw: (lang) => (
    <g>
      <defs><marker id="ar-head" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#475569" /></marker></defs>
      {/* the phone wireframe */}
      <rect x="8" y="12" width="96" height="176" rx="12" fill="#fff" stroke="#334155" strokeWidth="2" />
      <rect x="14" y="26" width="84" height="18" rx="3" fill="#e0e7ff" />
      <Tx x={56} y={38} s={t("Homework", "Տնայիններ", "Домашка")} lang={lang} size={8} fill="#3730a3" />
      {ARCH_ROWS.map((r, k) => (
        <g key={k}>
          <rect x="14" y={52 + k * 26} width="84" height="20" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeDasharray="3 2" />
          <rect x="18" y={57 + k * 26} width="10" height="10" rx="2" fill={k === 2 ? "#16a34a" : "#fff"} stroke="#64748b" />
          {k === 2 ? <path d={`M20,${62 + k * 26} l3,3 l5,-6`} stroke="#fff" strokeWidth="1.6" fill="none" /> : null}
          <Tx x={32} y={65 + k * 26} s={r} lang={lang} size={6} anchor="start" w={700} fill="#334155" />
        </g>
      ))}
      <circle cx="84" cy="164" r="11" fill="#4f46e5" />
      <path d="M84,158 v12 M78,164 h12" stroke="#fff" strokeWidth="2" />
      {/* API calls */}
      {[["GET /tasks", 70, "#4f46e5"], ["POST /tasks", 100, "#16a34a"], ["DELETE /tasks/5", 130, "#e11d48"]].map(([c, y, col]) => (
        <g key={c as string}>
          <path d={`M106,${y} H160`} stroke={col as string} strokeWidth="1.4" markerEnd="url(#ar-head)" />
          <text x="108" y={(y as number) - 3} fontSize="5.5" fontWeight="800" fontFamily={MONO} fill={col as string}>{c}</text>
        </g>
      ))}
      <path d="M160,150 H106" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#ar-head)" />
      <text x="110" y="160" fontSize="5.5" fontWeight="800" fontFamily={MONO} fill="#475569">JSON</text>
      {/* the backend */}
      <rect x="162" y="56" width="70" height="104" rx="6" fill="#1e293b" />
      {[0, 1, 2, 3].map((k) => <g key={k}><rect x="168" y={64 + k * 22} width="58" height="16" rx="2" fill="#334155" /><circle cx="220" cy={72 + k * 22} r="1.8" fill="#4ade80" /></g>)}
      <text x="197" y="74" textAnchor="middle" fontSize="7" fontWeight="900" fill="#e2e8f0">Python</text>
      <text x="197" y="96" textAnchor="middle" fontSize="7" fontWeight="900" fill="#e2e8f0">Flask</text>
      <path d="M234,108 H256" stroke="#475569" strokeWidth="1.4" markerEnd="url(#ar-head)" />
      <text x="236" y="104" fontSize="5.5" fontWeight="800" fontFamily={MONO} fill="#475569">SQL</text>
      {/* the database */}
      <path d="M258,60 v96 a28,8 0 0 0 56,0 v-96" fill="#fef3c7" stroke="#b45309" />
      <ellipse cx="286" cy="60" rx="28" ry="8" fill="#fde68a" stroke="#b45309" />
      {["users", "subjects", "tasks", "done"].map((n, k) => <text key={n} x="286" y={86 + k * 18} textAnchor="middle" fontSize="7" fontWeight="800" fontFamily={MONO} fill="#78350f">{n}</text>)}
      {[[t("frontend", "ֆրոնտենդ", "фронтенд"), 56], [t("backend", "բեքենդ", "бэкенд"), 197], [t("database", "տվյալների բազա", "база данных"), 282]].map(([s, x]) => (
        <Tx key={x as number} x={x as number} y={206} s={s as Tr} lang={lang} size={8} fill="#334155" />
      ))}
    </g>
  ),
  parts: [
    P(98, 22, t("A wireframe", "Սխեմատիկ էսքիզ", "Каркас (wireframe)"), t("A sketch with no colours or pictures, only where things go: the heading, the list, the + button. It takes minutes on paper and shows layout problems before any code is written.", "Էսքիզ առանց գույների և նկարների, միայն թե որտեղ ինչ է դրված․ վերնագիրը, ցուցակը, + կոճակը։ Թղթի վրա այն րոպեներ է տևում և ցույց է տալիս դասավորության խնդիրները դեռ մինչև որևէ կոդ գրելը։", "Набросок без цветов и картинок, только что где расположено: заголовок, список, кнопка +. На бумаге это минуты, и он показывает проблемы раскладки ещё до того, как написан код.")),
    P(30, 136, t("Feedback", "Հետադարձ կապ", "Обратная связь"), t("The ticked box shows at once that the task is done. A good interface always answers the user's action, even with something as small as a tick or a colour change.", "Նշված վանդակն անմիջապես ցույց է տալիս, որ առաջադրանքն արված է։ Լավ միջերեսը միշտ պատասխանում է օգտատիրոջ գործողությանը, թեկուզ այնպիսի փոքր բանով, ինչպիսին նշիչն է կամ գույնի փոփոխությունը։", "Отмеченный квадратик сразу показывает, что задание сделано. Хороший интерфейс всегда отвечает на действие пользователя, пусть даже галочкой или сменой цвета.")),
    P(150, 84, t("The API", "API-ն", "API")
, t("The frontend and backend talk only through a few agreed requests: GET to read the list, POST to add, DELETE to remove. Each side can then be rewritten without breaking the other.", "Ֆրոնտենդը և բեքենդը խոսում են միայն մի քանի համաձայնեցված հարցումներով․ GET՝ ցուցակը կարդալու, POST՝ ավելացնելու, DELETE՝ հեռացնելու համար։ Այդ դեպքում կողմերից յուրաքանչյուրը կարելի է վերաշարադրել՝ առանց մյուսը փչացնելու։", "Фронтенд и бэкенд общаются только несколькими договорёнными запросами: GET — прочитать список, POST — добавить, DELETE — удалить. Тогда каждую сторону можно переписать, не сломав другую.")),
    P(226, 146, t("The backend", "Բեքենդը", "Бэкенд"), t("The program on the server checks each request (is this user allowed to delete?), talks to the database in SQL and sends back JSON. Never trust the frontend alone: anyone can send a request by hand.", "Սերվերի ծրագիրը ստուգում է յուրաքանչյուր հարցում (թույլատրվա՞ծ է արդյոք այս օգտատիրոջը ջնջել), տվյալների բազայի հետ խոսում է SQL-ով և հետ է ուղարկում JSON։ Երբեք մի՛ վստահիր միայն ֆրոնտենդին․ ցանկացածը կարող է հարցում ուղարկել ձեռքով։", "Программа на сервере проверяет каждый запрос (можно ли этому пользователю удалять?), общается с базой на SQL и отправляет обратно JSON. Никогда не доверяй только фронтенду: кто угодно может отправить запрос вручную.")),
    P(304, 166, t("The database", "Տվյալների բազան", "База данных"), t("Four tables: tasks points to subjects and users through foreign keys, and done links users with tasks, many to many, so each pupil ticks off their own homework.", "Չորս աղյուսակ․ tasks-ը արտաքին բանալիներով հղում է subjects-ին և users-ին, իսկ done-ը կապում է օգտատերերին առաջադրանքների հետ՝ շատը շատերին, որպեսզի յուրաքանչյուր աշակերտ նշի իր տնայինները։", "Четыре таблицы: tasks ссылается на subjects и users через внешние ключи, а done связывает пользователей с заданиями по схеме «многие ко многим», чтобы каждый ученик отмечал свою домашку.")),
  ],
};

export const DIAGRAMS: Record<string, Diagram> = { computer, network, flowchart, memory, layers, url, tag, box, os, phish, db, oop, dom, http, git, kanban, arch };
