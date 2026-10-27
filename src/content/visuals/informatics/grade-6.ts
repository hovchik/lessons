import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "binary-numbers": [
    "bits",
    closer(
      `**A philosopher counts in twos.** The German scholar **Gottfried Leibniz** worked out binary arithmetic in detail and published it in 1703. He was delighted that every number could be written with only 0 and 1, and he saw a likeness to the ancient Chinese "Book of Changes", whose figures are made of broken and unbroken lines. Leibniz even designed a calculating machine that would move marbles through holes to count in binary. Nobody built it then, and two and a half centuries passed before electronic computers made his idea the language of every machine.

**A secret message on Mars.** On 18 February 2021 the American rover **Perseverance** landed on Mars under a huge orange-and-white parachute. Within hours people on the internet noticed that the pattern was not random: the rings of orange and white pieces were binary code. Each ring spelled a word, "DARE MIGHTY THINGS", the motto of the team that built the rover, and the outer ring gave the coordinates of their laboratory in California.`,
      `**Փիլիսոփան հաշվում է երկուսներով։** Գերմանացի գիտնական **Գոթֆրիդ Լայբնիցը** մանրամասն մշակեց երկուական թվաբանությունը և այն հրատարակեց 1703 թվականին։ Նա հիացած էր, որ ցանկացած թիվ կարելի է գրել միայն 0-ով և 1-ով, և նմանություն տեսավ չինական հին «Փոփոխությունների գրքի» հետ, որի պատկերները կազմված են ընդհատ և անընդհատ գծերից։ Լայբնիցը նույնիսկ նախագծեց հաշվիչ մեքենա, որում գնդիկներն անցքերով կշարժվեին՝ երկուական համակարգով հաշվելու համար։ Այն ժամանակ ոչ ոք այն չկառուցեց, և երկուսուկես դար անցավ, մինչև էլեկտրոնային համակարգիչները նրա գաղափարը դարձրին բոլոր մեքենաների լեզուն։

**Գաղտնի հաղորդագրություն Մարսի վրա։** 2021 թվականի փետրվարի 18-ին ամերիկյան **Perseverance** մարսագնացը վայրէջք կատարեց Մարսի վրա՝ հսկայական նարնջագույն-սպիտակ պարաշյուտով։ Մի քանի ժամում ինտերնետում մարդիկ նկատեցին, որ նախշը պատահական չէ․ նարնջագույն և սպիտակ կտորների օղակներն երկուական կոդ էին։ Յուրաքանչյուր օղակ մի բառ էր կազմում՝ «DARE MIGHTY THINGS» («Համարձակվի՛ր մեծ գործերի»), մարսագնացը կառուցած թիմի նշանաբանը, իսկ արտաքին օղակը ցույց էր տալիս Կալիֆոռնիայում նրանց լաբորատորիայի կոորդինատները։`,
      `**Философ считает двойками.** Немецкий учёный **Готфрид Лейбниц** подробно разработал двоичную арифметику и опубликовал её в 1703 году. Его восхищало, что любое число можно записать только нулями и единицами, и он увидел сходство с древней китайской «Книгой перемен», фигуры которой состоят из сплошных и прерванных линий. Лейбниц даже придумал счётную машину, в которой шарики катились бы через отверстия, считая в двоичной системе. Тогда её никто не построил, и прошло два с половиной века, прежде чем электронные компьютеры сделали его идею языком всех машин.

**Тайное послание на Марсе.** 18 февраля 2021 года американский марсоход **Perseverance** сел на Марс под огромным оранжево-белым парашютом. Уже через несколько часов люди в интернете заметили, что узор не случайный: кольца из оранжевых и белых кусков были двоичным кодом. Каждое кольцо складывалось в слово — «DARE MIGHTY THINGS» («Осмелься на великое»), девиз команды, построившей марсоход, а внешнее кольцо указывало координаты их лаборатории в Калифорнии.`,
    ),
    ask(2, {
      en: ["What is 1010₂ in decimal?", ["5", "10", "12", "1,010"], "8 + 0 + 2 + 0 = 10: add the values of the places that hold a 1."],
      hy: ["Որքա՞ն է 1010₂-ը տասական համակարգում։", ["5", "10", "12", "1010"], "8 + 0 + 2 + 0 = 10. գումարի՛ր այն կարգերի արժեքները, որտեղ 1 է։"],
      ru: ["Чему равно 1010₂ в десятичной системе?", ["5", "10", "12", "1010"], "8 + 0 + 2 + 0 = 10: сложи значения разрядов, где стоит 1."],
    }),
  ],
  "units-and-text-encoding": [
    "bits mode=text",
    "bars set=filesizes",
    closer(
      `**When letters turn into rubbish.** Before Unicode, every language had its own code tables, and the same number could mean different letters in different tables. Open a Russian text with the wrong table and instead of "Привет" you might see something like "Ïðèâåò". Russians call such rubbish **krakozyabry**, and the Japanese call it **mojibake**. Armenian computers of the 1990s had the same trouble with their own tables, so a message in Armenian letters often arrived as a row of strange symbols, and many people simply wrote Armenian in Latin letters. Unicode ended most of this by giving every letter of every script one number.

**Designed on a placemat.** In September 1992 two programmers, **Ken Thompson** and **Rob Pike**, were having dinner in a diner in New Jersey, USA. They needed a way to store Unicode text that would still work with old programs built for English. On a paper placemat they sketched a clever scheme: English letters keep their old one-byte codes, while other letters take two, three or four bytes. That scheme was **UTF-8**, and today it is used on almost every web page in the world.`,
      `**Երբ տառերը վերածվում են անհեթեթության։** Մինչև Unicode-ը յուրաքանչյուր լեզու ուներ իր կոդային աղյուսակները, և միևնույն թիվը տարբեր աղյուսակներում կարող էր տարբեր տառեր նշանակել։ Բացիր ռուսերեն տեքստը սխալ աղյուսակով, և «Привет»-ի փոխարեն կարող ես տեսնել «Ïðèâåò»-ի նման մի բան։ Ռուսներն այսպիսի անհեթեթությունն անվանում են **կրակոզյաբրի**, իսկ ճապոնացիները՝ **մոջիբակե**։ 1990-ականների հայկական համակարգիչները նույն խնդիրն ունեին իրենց աղյուսակների հետ, ուստի հայատառ հաղորդագրությունը հաճախ հասնում էր տարօրինակ նշանների շարքի տեսքով, և շատերը պարզապես հայերեն գրում էին լատինատառ։ Unicode-ը վերջ տվեց դրա մեծ մասին՝ յուրաքանչյուր գրի յուրաքանչյուր տառին մեկ թիվ տալով։

**Նախագծված սեղանի անձեռոցիկի վրա։** 1992 թվականի սեպտեմբերին երկու ծրագրավորող՝ **Քեն Թոմփսոնը** և **Ռոբ Փայքը**, ընթրում էին ԱՄՆ-ի Նյու Ջերսի նահանգի մի ճաշարանում։ Նրանց պետք էր Unicode տեքստը պահելու այնպիսի եղանակ, որը կաշխատեր նաև անգլերենի համար ստեղծված հին ծրագրերի հետ։ Թղթե անձեռոցիկի վրա նրանք ուրվագծեցին մի խելացի սխեմա․ անգլերեն տառերը պահում են իրենց հին մեկբայթանոց կոդերը, իսկ մյուս տառերը զբաղեցնում են երկու, երեք կամ չորս բայթ։ Այդ սխեման **UTF-8**-ն էր, և այսօր այն օգտագործվում է աշխարհի գրեթե բոլոր վեբ էջերում։`,
      `**Когда буквы превращаются в мусор.** До Unicode у каждого языка были свои кодовые таблицы, и одно и то же число в разных таблицах могло означать разные буквы. Открой русский текст не с той таблицей — и вместо «Привет» увидишь что-то вроде «Ïðèâåò». В России такой мусор называют **кракозябрами**, а в Японии — **моджибаке**. У армянских компьютеров 1990-х была та же беда со своими таблицами, поэтому сообщение армянскими буквами часто приходило рядом странных значков, и многие просто писали по-армянски латиницей. Unicode покончил с большей частью этого, дав каждой букве каждой письменности один номер.

**Придумано на салфетке.** В сентябре 1992 года два программиста, **Кен Томпсон** и **Роб Пайк**, ужинали в закусочной в штате Нью-Джерси в США. Им нужен был способ хранить текст Unicode так, чтобы он работал и со старыми программами, сделанными для английского. На бумажной салфетке они набросали хитрую схему: английские буквы сохраняют свои старые однобайтовые коды, а другие буквы занимают два, три или четыре байта. Эта схема и стала **UTF-8**, и сегодня ею пользуется почти каждая веб-страница в мире.`,
    ),
    ask(4, {
      en: ["How many bytes does the word «Բարև» (4 Armenian letters) take in UTF-8?", ["1", "2", "4", "8"], "Each Armenian letter takes 2 bytes in UTF-8: 4 × 2 = 8 bytes."],
      hy: ["Քանի՞ բայթ է զբաղեցնում «Բարև» բառը (4 հայերեն տառ) UTF-8-ում։", ["1", "2", "4", "8"], "UTF-8-ում յուրաքանչյուր հայերեն տառ զբաղեցնում է 2 բայթ․ 4 × 2 = 8 բայթ։"],
      ru: ["Сколько байт занимает слово «Բարև» (4 армянские буквы) в UTF-8?", ["1", "2", "4", "8"], "В UTF-8 каждая армянская буква занимает 2 байта: 4 × 2 = 8 байт."],
    }),
  ],
  "images-and-sound": [
    "bits mode=rgb",
    closer(
      `**The first digital photo.** In 1957 the American engineer **Russell Kirsch** put a photograph of his three-month-old son Walden into one of the first scanners, built for a government computer. The result was a picture just 176 × 176 pixels, about 31,000 of them, each simply black or white. It looks rough, but it was the first time a photo had been turned into numbers inside a computer. Kirsch later regretted one choice: square pixels. He thought pixels of different shapes could have made pictures smoother.

**Why 44,100?** People hear sounds up to about 20,000 vibrations a second. To capture a wave correctly you must measure it more than twice per vibration, so a CD needs more than 40,000 measurements every second. The exact number, 44,100, came from the video recorders that studios used to store digital sound in the 1970s: it fitted neatly into their lines of picture. When the CD appeared in 1982, the number stayed, and it is still used today.`,
      `**Առաջին թվային լուսանկարը։** 1957 թվականին ամերիկացի ինժեներ **Ռասել Կիրշը** իր երեք ամսական որդու՝ Ուոլդենի լուսանկարը դրեց առաջին սկաներներից մեկի մեջ, որը կառուցված էր պետական համակարգչի համար։ Արդյունքն ընդամենը 176 × 176 պիքսելանոց նկար էր՝ մոտ 31 000 պիքսել, որոնցից յուրաքանչյուրը պարզապես սև էր կամ սպիտակ։ Այն կոպիտ տեսք ունի, բայց առաջին անգամ էր, որ լուսանկարը համակարգչի ներսում վերածվում էր թվերի։ Հետագայում Կիրշը զղջում էր մի ընտրության համար՝ քառակուսի պիքսելների։ Նա կարծում էր, որ տարբեր ձևերի պիքսելները կարող էին նկարներն ավելի սահուն դարձնել։

**Ինչու՞ 44 100։** Մարդիկ լսում են վայրկյանում մինչև մոտ 20 000 տատանում ունեցող ձայներ։ Ալիքը ճիշտ որսալու համար այն պետք է չափել ամեն տատանման ընթացքում երկու անգամից ավելի, ուստի CD-ին պետք է վայրկյանում 40 000-ից ավելի չափում։ Ճշգրիտ թիվը՝ 44 100-ը, եկավ այն տեսամագնիտոֆոններից, որոնցով ստուդիաները 1970-ականներին թվային ձայն էին պահում․ այն հարմար տեղավորվում էր պատկերի նրանց տողերում։ Երբ 1982 թվականին CD-ն հայտնվեց, թիվը մնաց, և այն օգտագործվում է մինչ օրս։`,
      `**Первая цифровая фотография.** В 1957 году американский инженер **Рассел Кирш** вставил фотографию своего трёхмесячного сына Уолдена в один из первых сканеров, построенный для государственного компьютера. Получилась картинка всего 176 × 176 пикселей, около 31 000, и каждый был просто чёрным или белым. Она выглядит грубо, но впервые фотография превратилась в числа внутри компьютера. Позже Кирш жалел об одном решении — о квадратных пикселях. Он считал, что пиксели разной формы сделали бы изображения более гладкими.

**Почему 44 100?** Люди слышат звуки примерно до 20 000 колебаний в секунду. Чтобы правильно записать волну, её нужно измерять больше двух раз за колебание, поэтому компакт-диску нужно больше 40 000 измерений в секунду. Точное число, 44 100, пришло от видеомагнитофонов, на которых студии в 1970-х хранили цифровой звук: оно удобно укладывалось в их строки изображения. Когда в 1982 году появился компакт-диск, число осталось, и им пользуются до сих пор.`,
    ),
    ask(1, {
      en: ["Why must a CD measure sound more than 40,000 times a second?", ["We hear up to about 20,000 vibrations a second, and each must be measured more than twice", "Because the disc spins 40,000 times a second", "Because each measurement takes 40,000 bytes", "So that the file becomes as big as possible"], "To capture a wave you need more than two measurements per vibration, and we hear up to about 20,000 vibrations a second."],
      hy: ["Ինչու՞ պետք է CD-ն ձայնը չափի վայրկյանում 40 000-ից ավելի անգամ։", ["Մենք լսում ենք վայրկյանում մինչև մոտ 20 000 տատանում, և յուրաքանչյուրը պետք է չափել երկու անգամից ավելի", "Որովհետև սկավառակը վայրկյանում պտտվում է 40 000 անգամ", "Որովհետև յուրաքանչյուր չափում զբաղեցնում է 40 000 բայթ", "Որպեսզի ֆայլը հնարավորինս մեծ լինի"], "Ալիքը որսալու համար պետք է ամեն տատանման համար երկուսից ավելի չափում, իսկ մենք լսում ենք վայրկյանում մինչև մոտ 20 000 տատանում։"],
      ru: ["Почему компакт-диск должен измерять звук больше 40 000 раз в секунду?", ["Мы слышим до 20 000 колебаний в секунду, и каждое нужно измерить больше двух раз", "Потому что диск вращается 40 000 раз в секунду", "Потому что каждое измерение занимает 40 000 байт", "Чтобы файл получился как можно больше"], "Чтобы записать волну, нужно больше двух измерений на колебание, а мы слышим примерно до 20 000 колебаний в секунду."],
    }),
  ],
  "spreadsheets-intro": [
    "sheet",
    closer(
      `**A blackboard that recalculates itself.** In 1978 **Dan Bricklin**, a student at Harvard Business School, watched a teacher fill a blackboard with a table of figures. Every time one number changed, the teacher had to rub out and recalculate a whole row of others. Bricklin imagined an "electronic blackboard" that would do this by itself. With his friend **Bob Frankston** he wrote **VisiCalc**, the first spreadsheet for personal computers, released in 1979. It was so useful that many offices bought their first computer just to run it.

**The rows that ran out.** In October 2020 England's health service discovered that almost 16,000 positive COVID test results had not been passed on for contact tracing. The cause was a spreadsheet: results were collected in an old Excel file format that can hold only 65,536 rows. When the file filled up, the extra rows were simply cut off, and for days nobody noticed. Spreadsheets are powerful, but you still have to know their limits.`,
      `**Գրատախտակ, որն ինքն է վերահաշվում։** 1978 թվականին Հարվարդի բիզնես դպրոցի ուսանող **Դեն Բրիքլինը** դիտում էր, թե ինչպես է դասախոսը գրատախտակը լցնում թվերի աղյուսակով։ Ամեն անգամ, երբ մեկ թիվ փոխվում էր, դասախոսը ստիպված էր ջնջել և վերահաշվել մյուս թվերի մի ամբողջ շարք։ Բրիքլինը պատկերացրեց «էլեկտրոնային գրատախտակ», որն այդ ամենն ինքը կաներ։ Իր ընկեր **Բոբ Ֆրանկսթոնի** հետ նա գրեց **VisiCalc**-ը՝ անհատական համակարգիչների առաջին աղյուսակային ծրագիրը, որը թողարկվեց 1979 թվականին։ Այն այնքան օգտակար էր, որ շատ գրասենյակներ իրենց առաջին համակարգիչը գնեցին հենց դրա համար։

**Տողերը, որ վերջացան։** 2020 թվականի հոկտեմբերին Անգլիայի առողջապահական ծառայությունը պարզեց, որ COVID-ի գրեթե 16 000 դրական թեստի արդյունք չէր փոխանցվել շփումների հետագծման համար։ Պատճառն աղյուսակն էր․ արդյունքները հավաքվում էին Excel-ի հին ձևաչափի ֆայլում, որը կարող է պահել ընդամենը 65 536 տող։ Երբ ֆայլը լցվեց, ավելորդ տողերը պարզապես կտրվեցին, և օրերով ոչ ոք դա չնկատեց։ Աղյուսակները հզոր են, բայց պետք է իմանալ նրանց սահմանները։`,
      `**Доска, которая пересчитывает сама.** В 1978 году **Дэн Бриклин**, студент Гарвардской школы бизнеса, смотрел, как преподаватель заполняет доску таблицей чисел. Каждый раз, когда менялось одно число, преподавателю приходилось стирать и пересчитывать целый ряд других. Бриклин представил себе «электронную доску», которая делала бы это сама. Вместе с другом **Бобом Фрэнкстоном** он написал **VisiCalc** — первую электронную таблицу для персональных компьютеров, вышедшую в 1979 году. Она была так полезна, что многие офисы покупали свой первый компьютер только ради неё.

**Строки, которые закончились.** В октябре 2020 года служба здравоохранения Англии обнаружила, что почти 16 000 положительных результатов тестов на COVID не были переданы для отслеживания контактов. Виновата была таблица: результаты собирали в файле старого формата Excel, который вмещает только 65 536 строк. Когда файл заполнился, лишние строки просто обрезались, и несколько дней никто этого не замечал. Электронные таблицы — мощный инструмент, но их пределы надо знать.`,
    ),
    ask(3, {
      en: ["Cells B2 = 8 and C2 = 9. What does =AVERAGE(B2:C2) show?", ["17", "9", "8.5", "72"], "(8 + 9) ÷ 2 = 8.5. AVERAGE adds the cells and divides by how many there are."],
      hy: ["B2 = 8, C2 = 9։ Ի՞նչ ցույց կտա =AVERAGE(B2:C2) բանաձևը։", ["17", "9", "8,5", "72"], "(8 + 9) ÷ 2 = 8,5։ AVERAGE-ը գումարում է բջիջները և բաժանում դրանց քանակի վրա։"],
      ru: ["В ячейках B2 = 8 и C2 = 9. Что покажет =AVERAGE(B2:C2)?", ["17", "9", "8,5", "72"], "(8 + 9) ÷ 2 = 8,5. AVERAGE (СРЗНАЧ) складывает ячейки и делит на их количество."],
    }),
  ],
  presentations: [
    closer(
      `**A slide that hid a warning.** In 2003, while the space shuttle **Columbia** was in orbit, engineers studied whether a piece of foam that had hit its wing at launch could be dangerous. Their findings went to managers as PowerPoint slides. On one key slide the most important warning, that the tests were far from the real situation, was buried at the bottom in small type, under a reassuring title. Columbia broke up on its return, and the investigation board later criticised how much important technical information had been squeezed into crowded slides. One idea per slide, stated clearly, can matter a great deal.

**Fewer words, bigger pictures.** When **Steve Jobs** presented the first iPhone in 2007, many of his slides showed a single photo or just a few words, sometimes only one. Everything else he said out loud. Listeners cannot read and listen at the same time, so slides with little text keep their attention on the speaker. That is why "3–5 short points per slide" is good advice and a slide full of sentences is not.`,
      `**Սլայդը, որ թաքցրեց նախազգուշացումը։** 2003 թվականին, երբ **«Կոլումբիա»** տիեզերանավը ուղեծրում էր, ինժեներներն ուսումնասիրում էին՝ արդյո՞ք վտանգավոր կարող է լինել փրփրանյութի կտորը, որը թռիչքի ժամանակ հարվածել էր թևին։ Նրանց եզրակացությունները ղեկավարներին հասան PowerPoint սլայդներով։ Կարևոր սլայդներից մեկում ամենակարևոր նախազգուշացումը, որ փորձարկումները շատ էին տարբերվում իրական իրավիճակից, թաքնված էր ներքևում՝ մանր տառերով, հանգստացնող վերնագրի տակ։ «Կոլումբիան» վերադարձի ժամանակ կործանվեց, և հետաքննող հանձնաժողովը հետագայում քննադատեց, թե որքան կարևոր տեխնիկական տեղեկություն էր խցկված ծանրաբեռնված սլայդների մեջ։ Մեկ սլայդ՝ մեկ գաղափար՝ հստակ ձևակերպված, կարող է շատ կարևոր լինել։

**Ավելի քիչ բառեր, ավելի մեծ նկարներ։** Երբ **Սթիվ Ջոբսը** 2007 թվականին ներկայացնում էր առաջին iPhone-ը, նրա շատ սլայդներում կար մեկ լուսանկար կամ ընդամենը մի քանի բառ, երբեմն՝ միայն մեկը։ Մնացածը նա ասում էր բարձրաձայն։ Ունկնդիրները չեն կարող միաժամանակ կարդալ և լսել, ուստի քիչ տեքստով սլայդները նրանց ուշադրությունը պահում են խոսողի վրա։ Ահա թե ինչու «3–5 կարճ կետ մեկ սլայդում» լավ խորհուրդ է, իսկ նախադասություններով լի սլայդը՝ ոչ։`,
      `**Слайд, который спрятал предупреждение.** В 2003 году, пока шаттл **«Колумбия»** был на орбите, инженеры изучали, может ли быть опасен кусок пены, ударивший в крыло при старте. Их выводы дошли до руководителей в виде слайдов PowerPoint. На одном ключевом слайде самое важное предупреждение — что испытания сильно отличались от реальной ситуации — было спрятано внизу мелким шрифтом под успокаивающим заголовком. «Колумбия» разрушилась при возвращении, и комиссия по расследованию потом критиковала то, сколько важной технической информации было втиснуто в перегруженные слайды. Одна ясно сформулированная мысль на слайд может значить очень много.

**Меньше слов, больше картинок.** Когда **Стив Джобс** в 2007 году представлял первый iPhone, на многих его слайдах была одна фотография или всего несколько слов, иногда только одно. Остальное он говорил вслух. Слушатели не могут одновременно читать и слушать, поэтому слайды с малым количеством текста удерживают внимание на выступающем. Вот почему «3–5 коротких пунктов на слайд» — хороший совет, а слайд, полный предложений, — нет.`,
    ),
    ask(2, {
      en: ["Why are slides with little text usually better?", ["They are quicker to print", "Listeners cannot read and listen at the same time", "Programs do not allow long texts", "Small fonts look more serious"], "If a slide is full of sentences, the audience reads instead of listening. Few words keep attention on the speaker."],
      hy: ["Ինչու՞ են քիչ տեքստով սլայդները սովորաբար ավելի լավը։", ["Դրանք ավելի արագ են տպվում", "Ունկնդիրները չեն կարող միաժամանակ կարդալ և լսել", "Ծրագրերն երկար տեքստեր թույլ չեն տալիս", "Մանր տառերն ավելի լուրջ տեսք ունեն"], "Եթե սլայդը լի է նախադասություններով, ունկնդիրները կարդում են՝ լսելու փոխարեն։ Քիչ բառերը ուշադրությունը պահում են խոսողի վրա։"],
      ru: ["Почему слайды с малым количеством текста обычно лучше?", ["Их быстрее печатать", "Слушатели не могут одновременно читать и слушать", "Программы не разрешают длинные тексты", "Мелкий шрифт выглядит солиднее"], "Если слайд полон предложений, зрители читают вместо того, чтобы слушать. Мало слов — внимание на выступающем."],
    }),
  ],
  "branching-algorithms": [
    "trace set=temp",
    closer(
      `**The music player that froze for a day.** On 31 December 2008 thousands of Microsoft **Zune** music players stopped working at the same moment. The cause was a few lines that worked out the date from the number of days since 1980. In a leap year the last day of the year is day 366, and in that case the loop's conditions were never met: it neither finished nor moved on, so it went round for ever. The next morning, on 1 January, the players started working again by themselves. One forgotten branch was enough.

**Books where you choose.** In 1979 a new kind of children's book appeared in the USA: **Choose Your Own Adventure**. At the end of a page you read, for example, "If you open the door, turn to page 34. If you run away, turn to page 52." Each choice is a branch, and one book could have dozens of different endings. Drawn as a diagram, such a book looks like a giant flowchart with many diamonds.`,
      `**Նվագարկիչը, որ մեկ օրով սառեց։** 2008 թվականի դեկտեմբերի 31-ին Microsoft **Zune** հազարավոր երաժշտական նվագարկիչներ միևնույն պահին դադարեցին աշխատել։ Պատճառը մի քանի տող էր, որոնք ամսաթիվը հաշվում էին 1980 թվականից անցած օրերի քանակով։ Նահանջ տարում տարվա վերջին օրը 366-րդն է, և այդ դեպքում ցիկլի պայմաններն երբեք չէին կատարվում․ այն ո՛չ ավարտվում էր, ո՛չ առաջ գնում, ուստի պտտվում էր անվերջ։ Հաջորդ առավոտ՝ հունվարի 1-ին, նվագարկիչներն ինքնուրույն նորից սկսեցին աշխատել։ Մեկ մոռացված ճյուղը բավական էր։

**Գրքեր, որտեղ դու ես ընտրում։** 1979 թվականին ԱՄՆ-ում հայտնվեց մանկական գրքերի նոր տեսակ՝ **Choose Your Own Adventure** («Ընտրի՛ր քո արկածը»)։ Էջի վերջում կարդում ես, օրինակ․ «Եթե բացում ես դուռը, անցի՛ր 34-րդ էջ։ Եթե փախչում ես, անցի՛ր 52-րդ էջ»։ Յուրաքանչյուր ընտրություն ճյուղավորում է, և մեկ գիրքը կարող էր ունենալ տասնյակ տարբեր ավարտներ։ Սխեմայի տեսքով գծված՝ այդպիսի գիրքը նման է բազմաթիվ շեղանկյուններով հսկա բլոկ-սխեմայի։`,
      `**Плеер, который замёрз на сутки.** 31 декабря 2008 года тысячи музыкальных плееров Microsoft **Zune** в один и тот же момент перестали работать. Причиной было несколько строк, которые вычисляли дату по количеству дней с 1980 года. В високосный год последний день года — 366-й, и в этом случае условия цикла никогда не выполнялись: он не заканчивался и не шёл дальше, а крутился бесконечно. На следующее утро, 1 января, плееры сами снова заработали. Хватило одной забытой ветки.

**Книги, где выбираешь ты.** В 1979 году в США появился новый вид детских книг — **Choose Your Own Adventure** («Выбери своё приключение»). В конце страницы читаешь, например: «Если открываешь дверь, переходи на страницу 34. Если убегаешь — на страницу 52». Каждый выбор — это ветвление, и у одной книги могли быть десятки разных концовок. Если нарисовать такую книгу схемой, она похожа на огромную блок-схему с множеством ромбов.`,
    ),
    ask(3, {
      en: ["In the program above, t = 18. Which branch runs?", ["Frost", "Cool", "Warm", "Hot"], "18 < 0 is false, 18 < 15 is false, 18 < 25 is true, so the program prints Warm and skips the rest."],
      hy: ["Վերևի ծրագրում t = 18։ Ո՞ր ճյուղն է կատարվում։", ["Սառնամանիք", "Զով", "Տաք", "Շոգ"], "18 < 0-ը կեղծ է, 18 < 15-ը կեղծ է, 18 < 25-ը ճիշտ է, ուստի ծրագիրը տպում է «Տաք» և բաց թողնում մնացածը։"],
      ru: ["В программе выше t = 18. Какая ветка выполнится?", ["Мороз", "Прохладно", "Тепло", "Жарко"], "18 < 0 ложно, 18 < 15 ложно, 18 < 25 истинно, поэтому программа печатает «Тепло» и пропускает остальное."],
    }),
  ],
  "scratch-variables-conditions": [
    "turtle",
    closer(
      `**The game that broke from too many coins.** In 1972 the company Atari put a test machine of its new game **Pong** in a bar in California. It was very simple: two bats, a ball, and a score for each player kept in two variables. A few days later the owner called to say the machine had stopped working. The story goes that the engineer who came to fix it found the coin box so stuffed with coins that it had jammed the game. Pong became one of the first big hits of video games.

**Four ghosts, four rules.** In **Pac-Man** (1980) the four ghosts look alike, but each follows its own conditions. The red one heads straight for Pac-Man. The pink one aims at a spot a few squares in front of him, to cut him off. The blue one's target depends on both Pac-Man and the red ghost. The orange one chases Pac-Man when far away but wanders off when it gets close. A handful of simple "if … then" rules makes the ghosts seem clever.`,
      `**Խաղը, որ փչացավ մետաղադրամների առատությունից։** 1972 թվականին Atari ընկերությունն իր նոր **Pong** խաղի փորձնական ավտոմատը դրեց Կալիֆոռնիայի մի բարում։ Այն շատ պարզ էր․ երկու ռակետ, գնդակ և յուրաքանչյուր խաղացողի միավորները՝ պահված երկու փոփոխականում։ Մի քանի օր անց տերը զանգեց և ասաց, որ ավտոմատը դադարել է աշխատել։ Պատմում են, որ այն նորոգելու եկած ինժեները գտավ մետաղադրամների արկղն այնքան լցված, որ այն խցանել էր խաղը։ Pong-ը դարձավ տեսախաղերի առաջին մեծ հաջողություններից մեկը։

**Չորս ուրվական, չորս կանոն։** **Pac-Man** խաղում (1980) չորս ուրվականները նման են իրար, բայց յուրաքանչյուրը հետևում է իր պայմաններին։ Կարմիրն ուղիղ շարժվում է դեպի Pac-Man-ը։ Վարդագույնը նշան է բռնում նրանից մի քանի վանդակ առաջ գտնվող կետը, որպեսզի կտրի նրա ճանապարհը։ Կապույտի նպատակը կախված է և՛ Pac-Man-ից, և՛ կարմիր ուրվականից։ Նարնջագույնը հետապնդում է Pac-Man-ին, երբ հեռու է, բայց մոտենալիս մի կողմ է գնում։ Մի քանի պարզ «եթե … ապա» կանոններ ուրվականներին խելացի տեսք են տալիս։`,
      `**Игра, которая сломалась от монет.** В 1972 году компания Atari поставила пробный автомат своей новой игры **Pong** в баре в Калифорнии. Игра была очень простой: две ракетки, мяч и очки каждого игрока в двух переменных. Через несколько дней владелец позвонил и сказал, что автомат перестал работать. Рассказывают, что пришедший инженер обнаружил ящик для монет таким переполненным, что он заклинил игру. Pong стал одним из первых больших хитов видеоигр.

**Четыре привидения, четыре правила.** В **Pac-Man** (1980) четыре привидения похожи друг на друга, но каждое подчиняется своим условиям. Красное движется прямо к Pac-Man. Розовое целится в точку на несколько клеток впереди него, чтобы отрезать путь. Цель голубого зависит и от Pac-Man, и от красного привидения. Оранжевое гонится за Pac-Man, пока далеко, но, приблизившись, уходит в сторону. Горстка простых правил «если … то» делает привидения похожими на умных.`,
    ),
    ask(1, {
      en: ["A sprite is at x = 100. The script runs \"change x by −10\" three times. Where is it now?", ["x = 70", "x = 130", "x = 97", "x = 100"], "Each \"change x by −10\" moves it 10 to the left: 100 − 10 − 10 − 10 = 70."],
      hy: ["Սփրայթը գտնվում է x = 100 կետում։ Սկրիպտն երեք անգամ կատարում է «x-ը փոխել −10-ով»։ Որտե՞ղ է այն հիմա։", ["x = 70", "x = 130", "x = 97", "x = 100"], "Ամեն «x-ը փոխել −10-ով» այն տեղաշարժում է 10-ով ձախ․ 100 − 10 − 10 − 10 = 70։"],
      ru: ["Спрайт стоит в точке x = 100. Скрипт три раза выполняет «изменить x на −10». Где он теперь?", ["x = 70", "x = 130", "x = 97", "x = 100"], "Каждое «изменить x на −10» сдвигает его на 10 влево: 100 − 10 − 10 − 10 = 70."],
    }),
  ],
};
