"use client";

import type { ArtLang } from "@/lib/art/spec";
import { L, t } from "../labels";
import { ease, Tag } from "./draw";
import type { Mech } from "./types";

/* Step-by-step informatics: loading a website, packets, the processor's cycle, HTTPS, a stack and a queue. */

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const T = (lang: ArtLang, en: string, hy: string, ru: string) => L(t(en, hy, ru), lang);

/** A small envelope (a message on its way) centred at x, y. */
function Env({ x, y, color = "#f59e0b", label }: { x: number; y: number; color?: string; label?: string }) {
  return (
    <g>
      <rect x={x - 13} y={y - 9} width="26" height="18" rx="2" fill="#fff" stroke={color} strokeWidth="1.8" />
      <path d={`M${x - 13},${y - 9} L${x},${y + 2} L${x + 13},${y - 9}`} fill="none" stroke={color} strokeWidth="1.5" />
      {label ? <text x={x} y={y + 20} textAnchor="middle" fontSize="7.5" fontWeight="900" fill={color}>{label}</text> : null}
    </g>
  );
}

/* ---------------- how a website loads ---------------- */

const BR = { x: 14, y: 56, w: 120, h: 108 };
const DNS = [250, 40] as const;
const SRV = [262, 168] as const;

const website: Mech = {
  title: t("What happens when you open a website", "Ինչ է կատարվում, երբ բացում ես կայքը", "Что происходит, когда ты открываешь сайт"),
  caps: [
    t("You type example.com in the browser's address bar and press Enter. The browser knows the name, but to reach a computer on the internet it needs a number: an IP address.", "Դիտարկիչի հասցեի տողում գրում ես example.com և սեղմում Enter։ Դիտարկիչը գիտի անունը, բայց ինտերնետում համակարգչին հասնելու համար նրան պետք է թիվ՝ IP հասցե։", "Ты набираешь example.com в адресной строке браузера и нажимаешь Enter. Браузер знает имя, но, чтобы добраться до компьютера в интернете, ему нужно число — IP-адрес."),
    t("DNS: the browser asks a DNS server, the internet's phone book, \"Where is example.com?\" The answer comes back: 203.0.113.5.", "DNS․ դիտարկիչը հարցնում է DNS սերվերին՝ ինտերնետի հեռախոսագրքին. «Որտե՞ղ է example.com-ը»։ Պատասխանը գալիս է՝ 203.0.113.5։", "DNS: браузер спрашивает DNS-сервер, телефонную книгу интернета: «Где находится example.com?» Приходит ответ: 203.0.113.5."),
    t("Request: the browser, the client, sends an HTTP request to that address: GET /, which means \"please give me the main page\". With HTTPS it travels encrypted.", "Հարցում․ դիտարկիչը՝ կլիենտը, այդ հասցեին ուղարկում է HTTP հարցում՝ GET /, որը նշանակում է «խնդրում եմ, տուր ինձ գլխավոր էջը»։ HTTPS-ի դեպքում այն գնում է ծածկագրված։", "Запрос: браузер, то есть клиент, отправляет на этот адрес HTTP-запрос GET /, что значит «пожалуйста, дай мне главную страницу». С HTTPS он идёт в зашифрованном виде."),
    t("Response: the server answers with the status code 200 OK and the page's HTML, split into many small packets. If the page did not exist, the code would be 404 Not Found.", "Պատասխան․ սերվերը պատասխանում է 200 OK կարգավիճակի կոդով և էջի HTML-ով՝ բաժանված բազմաթիվ փոքր փաթեթների։ Եթե էջը գոյություն չունենար, կոդը կլիներ 404 Not Found։", "Ответ: сервер отвечает кодом состояния 200 OK и HTML-кодом страницы, разбитым на много маленьких пакетов. Если бы страницы не было, код был бы 404 Not Found."),
    t("The browser reads the HTML, asks for the pictures and styles it mentions with more requests, and draws the page. All of this usually takes less than a second.", "Դիտարկիչը կարդում է HTML-ը, լրացուցիչ հարցումներով խնդրում է դրանում նշված նկարներն ու ոճերը և գծում էջը։ Այս ամենը սովորաբար տևում է վայրկյանից պակաս։", "Браузер читает HTML, дополнительными запросами просит упомянутые в нём картинки и стили и рисует страницу. Обычно всё это занимает меньше секунды."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.4));
    const back = ease(Math.min(1, Math.max(0, p * 1.4 - 0.5) * 2));
    const bx = BR.x + BR.w, by = BR.y + 54;
    return (
      <g>
        {/* browser window */}
        <rect x={BR.x} y={BR.y} width={BR.w} height={BR.h} rx="6" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
        <rect x={BR.x} y={BR.y} width={BR.w} height="24" rx="6" fill="#e2e8f0" />
        <rect x={BR.x + 6} y={BR.y + 6} width={BR.w - 12} height="13" rx="6" fill="#fff" stroke={i === 0 ? "#4f46e5" : "#cbd5e1"} strokeWidth={i === 0 ? 2 : 1} />
        <text x={BR.x + 12} y={BR.y + 16} fontSize="8" fontFamily="monospace" fill="#334155">{i === 0 ? "example.com" + (p % 0.5 < 0.25 ? "|" : "") : "https://example.com"}</text>
        {i === 4 ? (
          <g opacity={k}>
            <rect x={BR.x + 8} y={BR.y + 32} width={BR.w - 16} height="12" rx="2" fill="#4f46e5" />
            <rect x={BR.x + 8} y={BR.y + 50} width="46" height="40" rx="3" fill="#bbf7d0" />
            <path d={`M${BR.x + 10},${BR.y + 86} l14,-18 l10,10 l8,-8 l10,16 Z`} fill="#16a34a" opacity={back} />
            {[0, 1, 2, 3].map((j) => <rect key={j} x={BR.x + 60} y={BR.y + 52 + j * 10} width={44 - (j % 2) * 12} height="5" rx="2" fill="#cbd5e1" />)}
          </g>
        ) : i === 3 ? (
          <g>{[0, 1, 2, 3].map((j) => <rect key={j} x={BR.x + 10} y={BR.y + 34 + j * 14} width={(BR.w - 20) * Math.min(1, back * 4 - j)} height="8" rx="2" fill="#e0e7ff" />)}</g>
        ) : (
          <Tag x={BR.x + BR.w / 2} y={BR.y + 70} color="#94a3b8" plain>{i === 0 ? T(lang, "press Enter", "սեղմիր Enter", "нажми Enter") : T(lang, "loading…", "բեռնվում է…", "загрузка…")}</Tag>
        )}
        <Tag x={BR.x + BR.w / 2} y={BR.y + BR.h + 16} color="#475569" plain>{T(lang, "Your browser (client)", "Քո դիտարկիչը (կլիենտ)", "Твой браузер (клиент)")}</Tag>
        {/* DNS server */}
        <rect x={DNS[0] - 34} y={DNS[1] - 18} width="68" height="36" rx="6" fill={i === 1 ? "#ede9fe" : "#f5f3ff"} stroke="#7c3aed" strokeWidth={i === 1 ? 2 : 1} />
        <text x={DNS[0]} y={DNS[1] - 3} textAnchor="middle" fontSize="11" fontWeight="900" fill="#5b21b6">DNS</text>
        <text x={DNS[0]} y={DNS[1] + 10} textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#5b21b6">example.com → 203.0.113.5</text>
        {/* web server */}
        <rect x={SRV[0] - 40} y={SRV[1] - 30} width="80" height="56" rx="4" fill="#1e293b" stroke={i >= 2 && i <= 3 ? "#f59e0b" : "#1e293b"} strokeWidth="2" />
        {[0, 1, 2].map((j) => <g key={j}><rect x={SRV[0] - 34} y={SRV[1] - 24 + j * 16} width="68" height="11" rx="1" fill="#334155" /><circle cx={SRV[0] - 28} cy={SRV[1] - 18.5 + j * 16} r="2" fill={i >= 2 && (p * 6 + j) % 2 < 1 ? "#4ade80" : "#166534"} /></g>)}
        <text x={SRV[0]} y={SRV[1] + 40} textAnchor="middle" fontSize="8" fontWeight="900" fill="#475569">{T(lang, "server", "սերվեր", "сервер")} 203.0.113.5</text>
        {/* the moving messages */}
        {i === 1 ? (
          <g>
            {back < 0.02 ? <Env x={lerp(bx, DNS[0] - 34, k)} y={lerp(by, DNS[1], k)} color="#7c3aed" label="example.com?" /> : <Env x={lerp(DNS[0] - 34, bx, back)} y={lerp(DNS[1], by, back)} color="#7c3aed" label="203.0.113.5" />}
          </g>
        ) : null}
        {i === 2 ? <Env x={lerp(bx, SRV[0] - 40, k)} y={lerp(by, SRV[1], k)} color="#e11d48" label="GET /" /> : null}
        {i === 3 ? [0, 1, 2, 3].map((j) => {
          const q = Math.min(1, Math.max(0, k * 1.6 - j * 0.2));
          return q > 0 && q < 1 ? <Env key={j} x={lerp(SRV[0] - 40, bx, q)} y={lerp(SRV[1], by, q) + (j % 2) * 8} color="#16a34a" label={j === 0 ? "200 OK" : undefined} /> : null;
        }) : null}
        {i === 4 ? <Tag x={200} y={110} color="#16a34a">{T(lang, "less than a second", "վայրկյանից պակաս", "меньше секунды")}</Tag> : null}
      </g>
    );
  },
};

/* ---------------- packets ---------------- */

const NODES: Array<[number, number]> = [[30, 110], [100, 50], [100, 170], [180, 90], [180, 190], [250, 40], [290, 120]];
const LINKS = [[0, 1], [0, 2], [1, 3], [1, 5], [2, 3], [2, 4], [3, 6], [4, 6], [5, 6], [3, 5]];
const ROUTES = [[0, 1, 5, 6], [0, 2, 4, 6], [0, 1, 3, 6], [0, 2, 3, 6]];
const PCOL = ["#4f46e5", "#e11d48", "#10b981", "#f59e0b"];
const WORD = ["HEL", "LO ", "ARM", "ENIA"];
const ARRIVE = [2, 0, 3, 1];

function along(route: number[], q: number): [number, number] {
  const seg = Math.min(route.length - 2, Math.floor(q * (route.length - 1)));
  const f = q * (route.length - 1) - seg;
  const [a, b] = [NODES[route[seg]], NODES[route[seg + 1]]];
  return [lerp(a[0], b[0], f), lerp(a[1], b[1], f)];
}

function Packet({ x, y, n, c, s }: { x: number; y: number; n: number; c: string; s: string }) {
  return (
    <g>
      <rect x={x - 17} y={y - 10} width="34" height="20" rx="3" fill={c} />
      <rect x={x - 17} y={y - 10} width="10" height="20" rx="3" fill="#0f172a" opacity="0.35" />
      <text x={x - 12} y={y + 3.5} textAnchor="middle" fontSize="8" fontWeight="900" fill="#fff">{n}</text>
      <text x={x + 5} y={y + 3.5} textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700" fill="#fff">{s.trim() || "␣"}</text>
    </g>
  );
}

const packets: Mech = {
  title: t("How data travels in packets", "Ինչպես են տվյալները ճամփորդում փաթեթներով", "Как данные путешествуют пакетами"),
  caps: [
    t("A message, a photo or a page is never sent in one piece. It is cut into small packets, and each gets a label: who sends it, where it goes and its number.", "Հաղորդագրությունը, լուսանկարը կամ էջը երբեք մեկ կտորով չի ուղարկվում։ Այն կտրատվում է փոքր փաթեթների, և յուրաքանչյուրը ստանում է պիտակ՝ ով է ուղարկում, ուր է գնում և դրա համարը։", "Сообщение, фото или страница никогда не отправляются одним куском. Их режут на маленькие пакеты, и у каждого есть ярлык: кто отправил, куда идёт и его номер."),
    t("Routers pass each packet on along whatever path is free at that moment, so packets of the same message can take different routes.", "Երթուղիչները յուրաքանչյուր փաթեթ փոխանցում են այն ճանապարհով, որն այդ պահին ազատ է, ուստի միևնույն հաղորդագրության փաթեթները կարող են գնալ տարբեր ճանապարհներով։", "Маршрутизаторы передают каждый пакет по тому пути, который в этот момент свободен, поэтому пакеты одного сообщения могут идти разными дорогами."),
    t("Because the routes differ, packets can arrive in the wrong order: here 3 came first. The numbers on the labels tell the receiver the right order.", "Քանի որ ճանապարհները տարբեր են, փաթեթները կարող են հասնել սխալ հերթականությամբ․ այստեղ առաջինը հասավ 3-րդը։ Պիտակների համարները ստացողին ասում են ճիշտ հերթականությունը։", "Так как маршруты разные, пакеты могут прийти не по порядку: здесь первым пришёл третий. Номера на ярлыках подсказывают получателю правильный порядок."),
    t("If a packet is lost or damaged on the way, the receiver notices a missing number and asks for that one again. Only the missing piece is sent twice.", "Եթե փաթեթը ճանապարհին կորչում կամ վնասվում է, ստացողը նկատում է բացակայող համարը և նորից խնդրում հենց այն։ Կրկին ուղարկվում է միայն բացակայող կտորը։", "Если пакет потерялся или повредился в пути, получатель замечает пропущенный номер и просит прислать именно его. Повторно отправляется только недостающий кусочек."),
    t("When all the numbers are there, the packets are put back together and the message is whole again. If one route breaks, the others keep working: the internet was designed this way.", "Երբ բոլոր համարները տեղում են, փաթեթները նորից միացվում են, և հաղորդագրությունը կրկին ամբողջական է։ Եթե մի ճանապարհը խափանվում է, մյուսները շարունակում են աշխատել․ ինտերնետը հենց այդպես է նախագծված։", "Когда все номера на месте, пакеты снова собираются, и сообщение становится целым. Если один маршрут сломается, другие продолжат работать: интернет так и задуман."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.3));
    const lost = i === 3 ? 3 : -1;
    return (
      <g>
        {LINKS.map(([a, b], j) => <line key={j} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="#cbd5e1" strokeWidth="3" />)}
        {i >= 1 && i <= 2 ? ROUTES.map((r, j) => <polyline key={j} points={r.map((n) => NODES[n].join(",")).join(" ")} fill="none" stroke={PCOL[j]} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />) : null}
        {NODES.slice(1, -1).map(([x, y], j) => <g key={j}><circle cx={x} cy={y} r="11" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" /><path d={`M${x - 5},${y} h10 M${x},${y - 5} v10`} stroke="#4f46e5" strokeWidth="1.5" /></g>)}
        <rect x={NODES[0][0] - 22} y={NODES[0][1] - 16} width="44" height="32" rx="4" fill="#1e293b" />
        <rect x={NODES[6][0] - 22} y={NODES[6][1] - 16} width="44" height="32" rx="4" fill="#1e293b" />
        <Tag x={NODES[0][0]} y={NODES[0][1] + 30} color="#475569" plain>{T(lang, "sender", "ուղարկող", "отправитель")}</Tag>
        <Tag x={NODES[6][0] - 6} y={NODES[6][1] + 30} color="#475569" plain>{T(lang, "receiver", "ստացող", "получатель")}</Tag>
        {i === 0 ? (
          <g>
            <rect x="60" y="4" width="200" height="22" rx="4" fill="#f1f5f9" stroke="#94a3b8" />
            <text x="160" y="19" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#1e1b4b">HELLO ARMENIA</text>
            {WORD.map((s, j) => <Packet key={j} x={lerp(100 + j * 40, 70 + j * 58, k)} y={lerp(15, 48, k)} n={j + 1} c={PCOL[j]} s={s} />)}
          </g>
        ) : null}
        {i === 1 ? ROUTES.map((r, j) => {
          const [x, y] = along(r, Math.min(0.62, Math.max(0, k * 0.8 - j * 0.04)));
          return <Packet key={j} x={x} y={y} n={j + 1} c={PCOL[j]} s={WORD[j]} />;
        }) : null}
        {i >= 2 ? (
          <g>
            {ARRIVE.map((j, slot) => {
              if (j === lost) return <rect key={j} x={64 + slot * 40} y="200" width="34" height="18" rx="3" fill="none" stroke="#e11d48" strokeDasharray="3 2" />;
              const sorted = i === 4;
              const sx = sorted ? 64 + j * 40 : 64 + slot * 40;
              return <Packet key={j} x={sx + 17} y={209} n={j + 1} c={PCOL[j]} s={WORD[j]} />;
            })}
            {i === 3 ? (() => {
              const [x, y] = along(ROUTES[1], Math.min(1, k));
              return (
                <g>
                  <Tag x={160} y={18} color="#e11d48">{T(lang, "Number 4 is missing: send it again!", "4-րդը բացակայում է․ ուղարկի՛ր նորից։", "Нет четвёртого: пришли его снова!")}</Tag>
                  <Packet x={x} y={y} n={4} c={PCOL[3]} s={WORD[3]} />
                </g>
              );
            })() : null}
            {i === 4 ? <g opacity={k}><rect x="60" y="4" width="200" height="22" rx="4" fill="#dcfce7" stroke="#16a34a" /><text x="160" y="19" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#14532d">HELLO ARMENIA ✓</text></g> : null}
          </g>
        ) : null}
      </g>
    );
  },
};

/* ---------------- the instruction cycle ---------------- */

type Cpu = { pc: number; ir: string; acc: string; mem8: string; phase: string };
const PROGRAM = ["LOAD [6]", "ADD [7]", "STORE [8]", "HALT", "", "", "20", "22"];
const CPU: Cpu[] = [
  { pc: 0, ir: "LOAD [6]", acc: "0", mem8: "0", phase: "fetch" },
  { pc: 0, ir: "LOAD [6]", acc: "0", mem8: "0", phase: "decode" },
  { pc: 1, ir: "LOAD [6]", acc: "20", mem8: "0", phase: "execute" },
  { pc: 2, ir: "ADD [7]", acc: "42", mem8: "0", phase: "execute" },
  { pc: 3, ir: "STORE [8]", acc: "42", mem8: "42", phase: "execute" },
  { pc: 3, ir: "HALT", acc: "42", mem8: "42", phase: "fetch" },
];

const fetchcycle: Mech = {
  title: t("Fetch, decode, execute", "Բերել, վերծանել, կատարել", "Выбрать, декодировать, выполнить"),
  hint: t("A tiny processor runs a program that adds 20 and 22. The program and the numbers sit in the same memory.", "Փոքրիկ պրոցեսորը կատարում է ծրագիր, որը գումարում է 20-ը և 22-ը։ Ծրագիրը և թվերը գտնվում են նույն հիշողության մեջ։", "Крошечный процессор выполняет программу, которая складывает 20 и 22. Программа и числа лежат в одной и той же памяти."),
  caps: [
    t("Fetch: the program counter PC says 0, so the control unit copies the instruction in memory cell 0, LOAD [6], into the instruction register IR.", "Բերում․ ծրագրի հաշվիչ PC-ն ցույց է տալիս 0, ուստի կառավարման սարքը հիշողության 0 բջջի հրահանգը՝ LOAD [6], պատճենում է հրահանգների IR ռեգիստրի մեջ։", "Выборка: счётчик команд PC показывает 0, поэтому устройство управления копирует команду из ячейки памяти 0, LOAD [6], в регистр команд IR."),
    t("Decode: the control unit works out what the code means: \"copy the number from cell 6 into the accumulator\".", "Վերծանում․ կառավարման սարքը պարզում է, թե ինչ է նշանակում կոդը. «պատճենիր 6 բջջի թիվը կուտակիչի մեջ»։", "Декодирование: устройство управления выясняет смысл кода: «скопируй число из ячейки 6 в аккумулятор»."),
    t("Execute: 20 travels along the bus into the accumulator ACC. The PC goes up by one, so the next fetch takes cell 1.", "Կատարում․ 20-ը դողով անցնում է ACC կուտակիչի մեջ։ PC-ն մեկով մեծանում է, ուստի հաջորդ բերումը վերցնում է 1 բջիջը։", "Выполнение: число 20 по шине попадает в аккумулятор ACC. PC увеличивается на единицу, и следующая выборка возьмёт ячейку 1."),
    t("A whole new cycle for ADD [7]: fetch, decode, and the ALU adds 22 to the accumulator: 20 + 22 = 42.", "Նոր ամբողջական ցիկլ ADD [7]-ի համար՝ բերում, վերծանում, և ԹՏՍ-ն 22-ը գումարում է կուտակիչին․ 20 + 22 = 42։", "Новый полный цикл для ADD [7]: выборка, декодирование, и АЛУ прибавляет 22 к аккумулятору: 20 + 22 = 42."),
    t("STORE [8] writes the answer back into memory cell 8, where other programs can read it.", "STORE [8]-ը պատասխանը հետ է գրում հիշողության 8 բջջի մեջ, որտեղից այլ ծրագրեր կարող են կարդալ այն։", "STORE [8] записывает ответ обратно в ячейку памяти 8, откуда его смогут прочитать другие программы."),
    t("HALT stops the program. A real 3 GHz processor repeats this cycle billions of times a second, on several cores at once.", "HALT-ը կանգնեցնում է ծրագիրը։ Իրական 3 ԳՀց պրոցեսորը կրկնում է այս ցիկլը վայրկյանում միլիարդավոր անգամներ՝ միաժամանակ մի քանի միջուկների վրա։", "HALT останавливает программу. Настоящий процессор на 3 ГГц повторяет этот цикл миллиарды раз в секунду, сразу на нескольких ядрах."),
  ],
  draw: (i, p, lang) => {
    const s = CPU[i];
    const k = ease(Math.min(1, p * 1.5));
    const cellY = (n: number) => 22 + n * 22;
    const busFrom = i === 0 ? 0 : i === 2 ? 6 : i === 3 ? 7 : -1;
    const phases = ["fetch", "decode", "execute"];
    const name = (ph: string) => ph === "fetch" ? T(lang, "fetch", "բերել", "выборка") : ph === "decode" ? T(lang, "decode", "վերծանել", "декодирование") : T(lang, "execute", "կատարել", "выполнение");
    return (
      <g>
        {/* the processor */}
        <rect x="8" y="12" width="168" height="196" rx="8" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.5" />
        <Tag x={92} y={28} color="#3730a3" plain>{T(lang, "Processor", "Պրոցեսոր", "Процессор")}</Tag>
        {([["PC", String(s.pc), 46], ["IR", s.ir, 80], ["ACC", s.acc, 114]] as const).map(([r, v, y]) => (
          <g key={r}>
            <text x="20" y={y + 13} fontSize="9" fontWeight="900" fill="#475569">{r}</text>
            <rect x="48" y={y} width="116" height="20" rx="3" fill="#fff" stroke={(r === "ACC" && i >= 2 && i <= 3) || (r === "IR" && i <= 1) ? "#f59e0b" : "#c7d2fe"} strokeWidth="2" />
            <text x="106" y={y + 14} textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#1e1b4b">{v}</text>
          </g>
        ))}
        <rect x="20" y="146" width="66" height="26" rx="4" fill={i === 1 ? "#fde68a" : "#e0e7ff"} />
        <Tag x={53} y={163} color="#3730a3" plain>{T(lang, "control", "կառավարում", "управление")}</Tag>
        <rect x="96" y="146" width="68" height="26" rx="4" fill={i === 3 ? "#fde68a" : "#e0e7ff"} />
        <Tag x={130} y={163} color="#3730a3" plain>{T(lang, "ALU", "ԹՏՍ", "АЛУ")}</Tag>
        {phases.map((ph, j) => <g key={ph}><rect x={14 + j * 54} y="180" width="50" height="20" rx="10" fill={s.phase === ph ? "#4f46e5" : "#fff"} stroke="#4f46e5" /><text x={39 + j * 54} y="193.5" textAnchor="middle" fontSize="7.5" fontWeight="900" fill={s.phase === ph ? "#fff" : "#4f46e5"}>{name(ph)}</text></g>)}
        {/* the bus */}
        <rect x="176" y="100" width="56" height="12" fill="#cbd5e1" />
        <Tag x={204} y={96} color="#64748b" plain>{T(lang, "bus", "դող", "шина")}</Tag>
        {/* memory */}
        <rect x="232" y="8" width="82" height="200" rx="6" fill="#f8fafc" stroke="#64748b" />
        {PROGRAM.concat(["", ""]).slice(0, 9).map((v, n) => {
          const val = n === 8 ? s.mem8 : v;
          const hot = n === busFrom || (n === 8 && i === 4) || (n === s.pc && i === 0);
          return (
            <g key={n}>
              <text x="242" y={cellY(n) + 4} fontSize="8" fontWeight="900" fill="#94a3b8">{n}</text>
              <rect x="252" y={cellY(n) - 9} width="56" height="18" rx="2" fill={hot ? "#fef3c7" : n >= 6 ? "#ecfdf5" : "#fff"} stroke={hot ? "#f59e0b" : "#cbd5e1"} />
              <text x="280" y={cellY(n) + 4} textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill="#1e1b4b">{val}</text>
            </g>
          );
        })}
        {busFrom >= 0 && k < 1 ? <g><rect x={lerp(252, 120, k)} y={lerp(cellY(busFrom) - 9, i === 0 ? 80 : 114, k)} width="56" height="18" rx="2" fill="#fde68a" opacity="0.9" /><text x={lerp(280, 148, k)} y={lerp(cellY(busFrom) + 4, i === 0 ? 93 : 127, k)} textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill="#92400e">{PROGRAM[busFrom]}</text></g> : null}
        {i === 4 && k < 1 ? <g><rect x={lerp(48, 252, k)} y={lerp(114, cellY(8) - 9, k)} width="56" height="18" rx="2" fill="#fde68a" opacity="0.9" /><text x={lerp(76, 280, k)} y={lerp(127, cellY(8) + 4, k)} textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill="#92400e">42</text></g> : null}
      </g>
    );
  },
};

/* ---------------- HTTPS with padlocks ---------------- */

function Lock({ x, y, open, color }: { x: number; y: number; open?: boolean; color: string }) {
  return (
    <g>
      <path d={open ? `M${x - 5},${y - 2} v-6 a5,5 0 0 1 10,0 v-3` : `M${x - 5},${y - 2} v-5 a5,5 0 0 1 10,0 v5`} fill="none" stroke={color} strokeWidth="2.2" />
      <rect x={x - 8} y={y - 2} width="16" height="12" rx="2" fill={color} />
    </g>
  );
}

function Person({ x, y, c, label }: { x: number; y: number; c: string; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y - 22} r="9" fill={c} />
      <path d={`M${x - 14},${y + 6} q14,-30 28,0 Z`} fill={c} />
      <Tag x={x} y={y + 20} color="#334155" plain>{label}</Tag>
    </g>
  );
}

const https: Mech = {
  title: t("How HTTPS keeps a secret", "Ինչպես է HTTPS-ը պահում գաղտնիքը", "Как HTTPS хранит секрет"),
  hint: t("A padlock story: the browser and the bank have never met, and someone is listening on the café Wi-Fi.", "Պատմություն կողպեքով․ դիտարկիչը և բանկը երբեք չեն հանդիպել, իսկ սրճարանի Wi-Fi-ում ինչ-որ մեկը գաղտնալսում է։", "История с замком: браузер и банк никогда не встречались, а в Wi-Fi кафе кто-то подслушивает."),
  caps: [
    t("Without encryption, everything you send can be read by anyone on the same network, including a password.", "Առանց ծածկագրման այն ամենը, ինչ ուղարկում ես, կարող է կարդալ նույն ցանցի ցանկացած մարդ, այդ թվում՝ գաղտնաբառը։", "Без шифрования всё, что ты отправляешь, может прочитать любой в той же сети, включая пароль."),
    t("The bank sends an open padlock that anyone may snap shut: its public key. Only the bank holds the key that opens it, the private key. A certificate proves the padlock really belongs to the bank.", "Բանկն ուղարկում է բաց կողպեք, որը ցանկացածը կարող է փակել․ դա նրա հանրային բանալին է։ Այն բացող բանալին՝ գաղտնի բանալին, միայն բանկի մոտ է։ Վկայականը ապացուցում է, որ կողպեքն իսկապես բանկինն է։", "Банк присылает открытый замок, который любой может защёлкнуть: это его открытый ключ. Ключ, который его открывает, — закрытый ключ, есть только у банка. Сертификат доказывает, что замок действительно банковский."),
    t("The browser makes up a fresh secret key, puts it in a box and snaps the bank's padlock shut. The listener sees the box but cannot open it.", "Դիտարկիչը ստեղծում է նոր գաղտնի բանալի, դնում այն տուփի մեջ և փակում բանկի կողպեքով։ Գաղտնալսողը տեսնում է տուփը, բայց չի կարող բացել։", "Браузер придумывает новый секретный ключ, кладёт его в коробку и защёлкивает банковский замок. Подслушивающий видит коробку, но открыть не может."),
    t("Only the bank can open the box with its private key. Now both sides share the same secret key, and nobody else has it.", "Միայն բանկը կարող է բացել տուփը իր գաղտնի բանալիով։ Այժմ երկու կողմերն ունեն նույն գաղտնի բանալին, և ուրիշ ոչ ոք այն չունի։", "Открыть коробку может только банк своим закрытым ключом. Теперь у обеих сторон один и тот же секретный ключ, и больше ни у кого его нет."),
    t("From now on every message is scrambled with the shared key. The listener sees only nonsense, and the browser shows a padlock next to the address.", "Այսուհետ յուրաքանչյուր հաղորդագրություն խառնվում է ընդհանուր բանալիով։ Գաղտնալսողը տեսնում է միայն անիմաստ նշաններ, իսկ դիտարկիչը հասցեի կողքին ցույց է տալիս կողպեք։", "С этого момента каждое сообщение перемешивается общим ключом. Подслушивающий видит лишь бессмыслицу, а браузер показывает замок рядом с адресом."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.4));
    const toBank = i === 0 || i === 2 || i === 4;
    const x = toBank ? lerp(66, 254, k) : lerp(254, 66, k);
    const y = 92;
    let item;
    if (i === 0) item = <g><rect x={x - 40} y={y - 10} width="80" height="20" rx="4" fill="#fff" stroke="#e11d48" /><text x={x} y={y + 4} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#e11d48">password=ararat</text></g>;
    else if (i === 1) item = <Lock x={x} y={y} open color="#16a34a" />;
    else if (i === 2) item = <g><rect x={x - 14} y={y - 10} width="28" height="22" rx="3" fill="#a16207" /><Lock x={x} y={y - 4} color="#16a34a" /></g>;
    else if (i === 3) item = null;
    else item = <g><rect x={x - 40} y={y - 10} width="80" height="20" rx="4" fill="#fff" stroke="#4f46e5" /><text x={x} y={y + 4} textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#4f46e5">x7#Qa9!kP0$w</text></g>;
    const sees = i === 0 ? "password=ararat" : i === 1 ? T(lang, "a padlock", "կողպեք", "замок") : i === 2 ? T(lang, "a locked box", "փակ տուփ", "закрытая коробка") : i === 3 ? "…" : "x7#Qa9!kP0$w";
    return (
      <g>
        <Person x={40} y={110} c="#4f46e5" label={T(lang, "your browser", "քո դիտարկիչը", "твой браузер")} />
        <rect x="248" y="70" width="60" height="44" fill="#e2e8f0" stroke="#475569" />
        <path d="M244,70 L278,48 L312,70 Z" fill="#94a3b8" />
        {[0, 1, 2].map((j) => <rect key={j} x={256 + j * 17} y="78" width="8" height="30" fill="#cbd5e1" />)}
        <Tag x={278} y={130} color="#334155" plain>{T(lang, "the bank", "բանկը", "банк")}</Tag>
        <line x1="66" y1={y} x2="246" y2={y} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 4" />
        {item}
        {/* the listener */}
        <Person x={160} y={190} c="#64748b" label="" />
        <path d="M146,166 c-6,-10 -2,-24 14,-26" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
        <rect x="178" y="150" width="128" height="34" rx="6" fill={i === 0 ? "#fee2e2" : "#f1f5f9"} stroke={i === 0 ? "#e11d48" : "#cbd5e1"} />
        <Tag x={242} y={163} color="#64748b" plain>{T(lang, "the listener sees:", "գաղտնալսողը տեսնում է․", "подслушивающий видит:")}</Tag>
        <text x="242" y="177" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill={i === 0 ? "#e11d48" : "#475569"}>{sees}</text>
        {i >= 3 ? (
          <g>
            <g transform="translate(40,40)"><circle r="9" fill="#fde047" stroke="#ca8a04" /><path d="M8,0 h16 v6 M18,0 v5" stroke="#ca8a04" strokeWidth="3" fill="none" /></g>
            <g transform="translate(270,30)"><circle r="9" fill="#fde047" stroke="#ca8a04" /><path d="M8,0 h16 v6 M18,0 v5" stroke="#ca8a04" strokeWidth="3" fill="none" /></g>
            <Tag x={160} y={34} color="#a16207">{T(lang, "the same secret key on both sides", "նույն գաղտնի բանալին երկու կողմում", "один и тот же секретный ключ у обоих")}</Tag>
          </g>
        ) : null}
        {i === 1 || i === 3 ? <g transform="translate(296,52)"><circle r="7" fill="#e11d48" /><path d="M6,0 h12 v5" stroke="#e11d48" strokeWidth="2.5" fill="none" /><text x="0" y="-12" textAnchor="middle" fontSize="7" fontWeight="900" fill="#e11d48">{T(lang, "private", "գաղտնի", "закрытый")}</text></g> : null}
        {i === 4 ? <g><rect x="8" y="4" width="150" height="18" rx="9" fill="#f1f5f9" stroke="#cbd5e1" /><Lock x={20} y={11} color="#16a34a" /><text x="32" y="16" fontSize="8" fontFamily="monospace" fill="#334155">https://bank.example</text></g> : null}
      </g>
    );
  },
};

/* ---------------- a stack and a queue ---------------- */

const SQ = [["A"], ["A", "B"], ["A", "B", "C"], ["A", "B"], ["A", "B", "D"]];
const QQ = [["A"], ["A", "B"], ["A", "B", "C"], ["B", "C"], ["B", "C", "D"]];
const BOXC: Record<string, string> = { A: "#4f46e5", B: "#e11d48", C: "#10b981", D: "#f59e0b" };

const stackqueue: Mech = {
  title: t("A stack and a queue", "Ստեկ և հերթ", "Стек и очередь"),
  caps: [
    t("Put A into both. The stack is like a pile of plates; the queue is like a line at the bus stop.", "Դնենք A-ն երկուսի մեջ էլ։ Ստեկը նման է ափսեների կույտի, իսկ հերթը՝ ավտոբուսի կանգառի հերթի։", "Положим A в обе структуры. Стек похож на стопку тарелок, а очередь — на очередь на остановке."),
    t("Add B. On the stack it goes on top (append); in the queue it joins at the back.", "Ավելացնենք B-ն։ Ստեկում այն դրվում է վերևում (append), իսկ հերթում կանգնում է վերջում։", "Добавим B. В стеке он ложится сверху (append), а в очереди встаёт в конец."),
    t("Add C. Both now hold A, B and C, but they will give them back in opposite orders.", "Ավելացնենք C-ն։ Այժմ երկուսն էլ պահում են A, B և C, բայց դրանք կվերադարձնեն հակառակ հերթականությամբ։", "Добавим C. Теперь в обеих A, B и C, но отдавать они их будут в противоположном порядке."),
    t("Take one out. The stack gives C, the last one in (LIFO, pop()). The queue gives A, the first one in (FIFO, popleft()).", "Հանենք մեկը։ Ստեկը տալիս է C-ն՝ վերջինը մտածը (LIFO, pop())։ Հերթը տալիս է A-ն՝ առաջինը մտածը (FIFO, popleft())։", "Достанем один элемент. Стек отдаёт C — последний вошедший (LIFO, pop()). Очередь отдаёт A — первый вошедший (FIFO, popleft())."),
    t("Add D. Undo in an editor and the browser's Back button are stacks; printing jobs and messages waiting for a server are queues.", "Ավելացնենք D-ն։ Խմբագրի «Չեղարկել» գործողությունը և դիտարկիչի «Հետ» կոճակը ստեկներ են, իսկ տպման առաջադրանքները և սերվերին սպասող հաղորդագրությունները՝ հերթեր։", "Добавим D. Отмена действия в редакторе и кнопка «Назад» в браузере — это стеки, а задания на печать и сообщения, ждущие сервер, — очереди."),
  ],
  draw: (i, p, lang) => {
    const k = ease(Math.min(1, p * 1.5));
    const out = i === 3;
    return (
      <g>
        <Tag x={80} y={20} color="#3730a3">{T(lang, "Stack", "Ստեկ", "Стек")}</Tag>
        <Tag x={230} y={20} color="#9f1239">{T(lang, "Queue", "Հերթ", "Очередь")}</Tag>
        <path d="M40,40 V196 H120 V40" fill="none" stroke="#475569" strokeWidth="2.5" />
        {SQ[i].map((s, j) => {
          const fresh = !out && j === SQ[i].length - 1;
          return <g key={s} transform={`translate(0,${fresh ? lerp(-60, 0, k) : 0})`}><rect x="46" y={168 - j * 32} width="68" height="26" rx="4" fill={BOXC[s]} /><text x="80" y={186 - j * 32} textAnchor="middle" fontSize="13" fontWeight="900" fill="#fff">{s}</text></g>;
        })}
        {out ? <g transform={`translate(0,${lerp(0, -40, k)})`} opacity={1 - k * 0.3}><rect x="46" y={104} width="68" height="26" rx="4" fill={BOXC.C} /><text x="80" y={122} textAnchor="middle" fontSize="13" fontWeight="900" fill="#fff">C</text></g> : null}
        <path d="M160,140 H306 M160,176 H306" stroke="#475569" strokeWidth="2.5" />
        <Tag x={170} y={196} color="#64748b" plain>{T(lang, "front", "առաջ", "начало")}</Tag>
        <Tag x={294} y={196} color="#64748b" plain>{T(lang, "back", "վերջ", "конец")}</Tag>
        {QQ[i].map((s, j) => {
          const fresh = !out && j === QQ[i].length - 1;
          const slide = out ? lerp(34, 0, k) : 0;
          return <g key={s} transform={`translate(${fresh ? lerp(50, 0, k) : slide},0)`}><rect x={170 + j * 34} y="145" width="30" height="26" rx="4" fill={BOXC[s]} /><text x={185 + j * 34} y="163" textAnchor="middle" fontSize="13" fontWeight="900" fill="#fff">{s}</text></g>;
        })}
        {out ? <g transform={`translate(${lerp(0, -20, k)},${lerp(0, -50, k)})`}><rect x="170" y="145" width="30" height="26" rx="4" fill={BOXC.A} /><text x="185" y="163" textAnchor="middle" fontSize="13" fontWeight="900" fill="#fff">A</text></g> : null}
        <text x="80" y="214" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700" fill="#3730a3">{out ? "s.pop() → 'C'" : `s.append('${SQ[i][SQ[i].length - 1]}')`}</text>
        <text x="232" y="214" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700" fill="#9f1239">{out ? "q.popleft() → 'A'" : `q.append('${QQ[i][QQ[i].length - 1]}')`}</text>
      </g>
    );
  },
};

export const MECHS: Record<string, Mech> = { website, packets, fetchcycle, https, stackqueue };
