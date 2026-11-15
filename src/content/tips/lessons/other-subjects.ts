import { tricksFor, type TipSeed } from "../types";

/** Tricks inside single lessons: biology, geography, informatics, astronomy, music, science. */
const bio9 = tricksFor("biology", 9);
const bio10 = tricksFor("biology", 10);
const bio11 = tricksFor("biology", 11);
const geo6 = tricksFor("geography", 6);
const inf6 = tricksFor("informatics", 6);
const ast11 = tricksFor("astronomy", 11);
const ast12 = tricksFor("astronomy", 12);
const mus2 = tricksFor("music", 2);
const mus5 = tricksFor("music", 5);
const sci4 = tricksFor("science", 4);

export const otherSubjectTricks: TipSeed[] = [
  // ---------- Biology ----------
  bio9("heart-circulation", "arteries-away", "memory", ["Arteries carry blood away from the heart", "Զարկերակները արյունը տանում են սրտից", "Артерии несут кровь от сердца"], {
    en: `**A**rteries carry blood **A**way from the heart; **v**eins bring it back and have **v**alves to stop it flowing backwards.

Do not use colour as the rule. In the body most arteries carry bright oxygen-rich blood, but the **pulmonary artery** carries dark, oxygen-poor blood from the heart to the lungs, and the **pulmonary veins** bring oxygen-rich blood back. The name follows the direction, not the oxygen.

A quick check on yourself: the pulse you feel on your wrist or neck is in an **artery**, the push of blood just leaving the heart.`,
    hy: `Հիշիր ուղղությամբ․ **զարկերակները** արյունը տանում են **սրտից**, **երակները** բերում են **դեպի սիրտ** և ունեն փականներ, որ արյունը ետ չհոսի։ «Զարկ»-ը հուշում է․ զարկերակում զգում ես սրտի զարկը։

Գույնը կանոն մի դարձրու։ Մարմնում զարկերակների մեծ մասը տանում է թթվածնով հարուստ վառ արյուն, բայց **թոքային զարկերակը** սրտից թոքեր է տանում թթվածնով աղքատ մուգ արյուն, իսկ **թոքային երակները** վերադարձնում են թթվածնով հարուստ արյուն։ Անունը կախված է ուղղությունից, ոչ թե թթվածնից։

Արագ ստուգում քեզ վրա․ դաստակին կամ վզին զգացվող անոթազարկը **զարկերակում** է՝ նոր սրտից դուրս եկած արյան հրումը։`,
    ru: `Запоминай по направлению: **артерии** несут кровь **от сердца**, **вены** — **к сердцу**, и у вен есть клапаны, чтобы кровь не текла назад.

Не делай правилом цвет. В теле большинство артерий несут яркую, богатую кислородом кровь, но **лёгочная артерия** несёт тёмную, бедную кислородом кровь от сердца к лёгким, а **лёгочные вены** возвращают богатую кислородом. Название зависит от направления, а не от кислорода.

Проверка на себе: пульс, который ты чувствуешь на запястье или шее, — это **артерия**, толчок крови, только что вышедшей из сердца.`,
  }),
  bio10("nucleic-acids-atp", "straight-and-curved-bases", "memory", ["DNA pairs: straight letters with straight, curved with curved", "ԴՆԹ զույգեր․ ուղիղ տառը ուղիղի հետ, կորը՝ կորի", "Пары ДНК: прямые буквы с прямыми, круглые с круглыми"], {
    en: `Look at the shapes of the letters:

- **A** and **T** are made of **straight** lines, so they pair together.
- **G** and **C** are **curved**, so they pair together.

In RNA there is no T; **U** takes its place and pairs with A. And the curved pair is the stronger one: G–C is held by **three** hydrogen bonds, A–T by **two**, so DNA rich in G and C is harder to pull apart.

If one strand reads **ATGC**, the partner reads **TACG**.`,
    hy: `Նայիր լատինական տառերի ձևին․

- **A**-ն (ադենին) և **T**-ն (թիմին) կազմված են **ուղիղ** գծերից, ուրեմն զույգ են։
- **G**-ն (գուանին) և **C**-ն (ցիտոզին) **կոր** են, ուրեմն զույգ են։

ՌՆԹ-ում T չկա, նրա տեղը **U**-ն է (ուրացիլ), և այն զույգվում է A-ի հետ։ Իսկ կոր զույգն ավելի ամուր է․ G–C-ն պահվում է **երեք** ջրածնային կապով, A–T-ն՝ **երկու**, դրա համար G-ով և C-ով հարուստ ԴՆԹ-ն ավելի դժվար է բաժանվում։

Եթե մի շղթան **ATGC** է, զույգ շղթան **TACG** է։`,
    ru: `Посмотри на форму латинских букв:

- **A** (аденин) и **T** (тимин) состоят из **прямых** линий, значит, они пара.
- **G** (гуанин) и **C** (цитозин) **круглые**, значит, они пара.

В РНК тимина нет, его место занимает **U** (урацил), он связывается с A. А «круглая» пара прочнее: G–C держится **тремя** водородными связями, A–T — **двумя**, поэтому ДНК, богатую G и C, труднее разделить.

Если одна цепь читается **ATGC**, то парная — **TACG**.`,
  }),
  bio10("mitosis-cell-cycle", "pmat-cues", "memory", ["Mitosis in order: P-M-A-T, with a cue in each name", "Միտոզի կարգը․ Պ-Մ-Ա-Տ", "Порядок митоза: П-М-А-Т"], {
    en: `The four phases go **P-M-A-T**, and each name carries a hint about what happens:

| phase | cue | what happens |
|---|---|---|
| **P**rophase | *pro*, "before" | chromosomes thicken and become visible |
| **M**etaphase | **M**iddle | chromosomes line up on the equator |
| **A**naphase | **A**way, **a**part | sister chromatids are pulled to opposite poles |
| **T**elophase | **T**wo | two new nuclei form, the cell splits in two |

Interphase, when DNA is copied, comes **before** all of them and is not part of mitosis itself.`,
    hy: `Չորս փուլերը գնում են **Պ-Մ-Ա-Տ** կարգով, և ամեն անվան մեջ հուշում կա․

| փուլ | հուշում | ինչ է կատարվում |
|---|---|---|
| **Պ**րոֆազ | *պրո*՝ «նախ» | քրոմոսոմները հաստանում են և երևում |
| **Մ**ետաֆազ | **մ**եջտեղ | քրոմոսոմները շարվում են հասարակածի վրա |
| **Ա**նաֆազ | **ա**ռանձին | քույր քրոմատիդները քաշվում են հակադիր բևեռներ |
| **Տ**ելոֆազ | *տելոս*՝ «վերջ» | ձևավորվում են երկու նոր կորիզ, բջիջը բաժանվում է երկուսի |

Ինտերֆազը, երբ ԴՆԹ-ն կրկնապատկվում է, գալիս է բոլորից **առաջ** և միտոզի մաս չէ։`,
    ru: `Четыре фазы идут в порядке **П-М-А-Т**, и в каждом названии есть подсказка:

| фаза | подсказка | что происходит |
|---|---|---|
| **П**рофаза | *про*, «до, перед» | хромосомы утолщаются и становятся видны |
| **М**етафаза | **м**ежду, посередине | хромосомы выстраиваются на экваторе |
| **А**нафаза | *ана*, «врозь» | сестринские хроматиды расходятся к полюсам |
| **Т**елофаза | *телос*, «конец» | образуются два ядра, клетка делится надвое |

Интерфаза, когда копируется ДНК, идёт **до** всех них и в сам митоз не входит.`,
  }),
  bio11("dihybrid-cross", "nine-three-three-one", "mentalMath", ["9 : 3 : 3 : 1 is just (3 : 1) twice", "9 ․ 3 ․ 3 ․ 1-ը պարզապես երկու անգամ (3 ․ 1) է", "9 : 3 : 3 : 1 — это просто (3 : 1) дважды"], {
    en: `You do not need to fill the 16-square Punnett grid to get the answer. Each gene on its own gives **3 : 1**, and independent genes multiply:

$$(3 + 1)(3 + 1) = 9 + 3 + 3 + 1$$

- **9** dominant in both traits, **3** + **3** dominant in one, **1** recessive in both.
- Number of gamete types from a parent heterozygous for $n$ genes: $2^n$. For AaBb that is 4, so $4 \\cdot 4 = 16$ squares.
- Probability of a single box: aabb is $\\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$.

Three genes? $(3 + 1)^3$ gives 27 : 9 : 9 : 9 : 3 : 3 : 3 : 1 out of 64.`,
    hy: `Պատասխանն ստանալու համար 16 վանդակով Պեննետի ցանցը լրացնել պետք չէ։ Ամեն գեն առանձին տալիս է $3 : 1$, իսկ անկախ գեները բազմապատկվում են․

$$(3 + 1)(3 + 1) = 9 + 3 + 3 + 1$$

- **9**-ը՝ երկու հատկանիշով էլ դոմինանտ, **3** + **3**-ը՝ մեկով դոմինանտ, **1**-ը՝ երկուսով էլ ռեցեսիվ։
- $n$ գենով հետերոզիգոտ ծնողի գամետների տեսակների թիվը $2^n$ է։ AaBb-ի համար 4, ուրեմն $4 \\cdot 4 = 16$ վանդակ։
- Մեկ վանդակի հավանականությունը․ aabb-ն $\\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$ է։

Երեք գե՞ն։ $(3 + 1)^3$-ը տալիս է $27 : 9 : 9 : 9 : 3 : 3 : 3 : 1$՝ 64-ից։`,
    ru: `Чтобы получить ответ, не нужно заполнять решётку Пеннета из 16 клеток. Каждый ген отдельно даёт **3 : 1**, а независимые гены перемножаются:

$$(3 + 1)(3 + 1) = 9 + 3 + 3 + 1$$

- **9** — доминантные по обоим признакам, **3** + **3** — по одному, **1** — рецессивные по обоим.
- Число типов гамет у родителя, гетерозиготного по $n$ генам, равно $2^n$. У AaBb их 4, значит, $4 \\cdot 4 = 16$ клеток.
- Вероятность одной клетки: aabb — это $\\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$.

Три гена? $(3 + 1)^3$ даёт 27 : 9 : 9 : 9 : 3 : 3 : 3 : 1 из 64.`,
  }),

  // ---------- Geography ----------
  geo6("globe-coordinates", "longitude-is-long", "memory", ["Longitude lines are the long ones", "Երկայնության գծերը երկար են", "Долгота — по длинным линиям"], {
    en: `The words themselves tell you which is which:

- **Longitude** is measured from the **long** lines, the meridians, which all run the whole way from pole to pole and are equally long.
- **Latitude** is measured from the parallels, which lie **flat** across the globe like the rungs of a **ladder** ("lat" sounds like "ladder"). They get shorter towards the poles.

So latitude says how far **up or down** (north or south) you are, longitude how far **left or right** (east or west). Yerevan is about 40° N, 44.5° E.`,
    hy: `Բառերն իրենք են հուշում․

- **Երկայնությունը** չափում են **երկար** գծերով՝ միջօրեականներով, որոնք բոլորը գնում են բևեռից բևեռ և հավասար երկարություն ունեն։
- **Լայնությունը** չափում են զուգահեռականներով, որոնք գնդի վրա պառկած են **լայնքով**, ինչպես սանդուղքի աստիճանները։ Դեպի բևեռներ դրանք կարճանում են։

Ուրեմն լայնությունն ասում է, թե որքան **վեր կամ վար** (հյուսիս կամ հարավ) ես, երկայնությունը՝ որքան **աջ կամ ձախ** (արևելք կամ արևմուտք)։ Երևանը մոտ 40° հս․ լ․ և 44,5° արլ․ երկ․ է։`,
    ru: `Слова сами подсказывают:

- **Долготу** отсчитывают по **длинным** линиям — меридианам: все они идут от полюса до полюса и одинаково длинные.
- **Широту** отсчитывают по параллелям, которые лежат на глобусе **поперёк**, вширь, как перекладины лестницы. К полюсам они становятся короче.

Значит, широта говорит, насколько ты **выше или ниже** (север или юг), долгота — насколько **левее или правее** (запад или восток). Ереван находится примерно на 40° с. ш. и 44,5° в. д.`,
  }),
  geo6("globe-coordinates", "fifteen-degrees-an-hour", "mentalMath", ["15° of longitude = 1 hour of time", "15° երկայնություն = 1 ժամ", "15° долготы = 1 час времени"], {
    en: `The Earth turns $360°$ in 24 hours, so it turns $360 : 24 = 15°$ every hour, or $1°$ every 4 minutes.

- Two places $30°$ apart in longitude: the Sun reaches its highest point 2 hours apart.
- Going **east**, the Sun rises earlier, so local time is **later**. Tokyo is about $95°$ east of Yerevan: roughly $95 : 15 \\approx 6$ hours, and Japan's clocks are indeed 5 hours ahead (time zones are rounded to whole hours and follow borders).

This is why the world has 24 time zones, each about 15° wide.`,
    hy: `Երկիրը 24 ժամում պտտվում է $360°$-ով, ուրեմն ամեն ժամ՝ $360 : 24 = 15°$-ով, կամ $1°$՝ ամեն 4 րոպեում։

- Երկայնությամբ $30°$ հեռու երկու վայրում Արևը ամենաբարձր կետին հասնում է 2 ժամ տարբերությամբ։
- Դեպի **արևելք** Արևն ավելի շուտ է ծագում, ուրեմն տեղական ժամանակը **ավելի ուշ** է։ Տոկիոն Երևանից մոտ $95°$ արևելք է․ մոտավորապես $95 : 15 \\approx 6$ ժամ, և Ճապոնիայի ժամացույցները իսկապես 5 ժամով առաջ են (ժամային գոտիները կլորացվում են ամբողջ ժամերի և հետևում են սահմաններին)։

Դրա համար աշխարհն ունի 24 ժամային գոտի՝ յուրաքանչյուրը մոտ 15° լայնությամբ։`,
    ru: `Земля поворачивается на $360°$ за 24 часа, то есть на $360 : 24 = 15°$ в час, или на $1°$ за 4 минуты.

- В двух местах, разнесённых по долготе на $30°$, Солнце достигает высшей точки с разницей 2 часа.
- К **востоку** Солнце восходит раньше, значит, местное время **позже**. Токио примерно на $95°$ восточнее Еревана: около $95 : 15 \\approx 6$ часов, и часы в Японии действительно на 5 часов впереди (часовые пояса округлены до целых часов и следуют границам).

Поэтому на Земле 24 часовых пояса, каждый шириной около 15°.`,
  }),

  // ---------- Informatics ----------
  inf6("binary-numbers", "count-binary-on-fingers", "memory", ["Count to 31 on one hand in binary", "Մեկ ձեռքով հաշվիր մինչև 31 երկուականով", "Считай до 31 на одной руке в двоичной системе"], {
    en: `Give each finger of one hand a value, doubling as you go: thumb **1**, index **2**, middle **4**, ring **8**, little finger **16**. A raised finger is a 1, a folded one is a 0.

- Thumb and middle finger up: $1 + 4 = 5$, which is 00101 in binary.
- All five up: $1 + 2 + 4 + 8 + 16 = 31$, or 11111.

One hand counts from 0 to 31, two hands from 0 to 1023. Practise counting up by one: you will see that the thumb flips every time, the index finger every second time, and so on. That is exactly how a binary counter in a computer works.`,
    hy: `Մի ձեռքի ամեն մատին տուր արժեք՝ կրկնապատկելով․ բութը **1**, ցուցամատը **2**, միջնամատը **4**, մատնեմատը **8**, ճկույթը **16**։ Բարձրացված մատը 1 է, ծալվածը՝ 0։

- Բութը և միջնամատը վեր․ $1 + 4 = 5$, երկուական համակարգում՝ 00101։
- Հինգն էլ վեր․ $1 + 2 + 4 + 8 + 16 = 31$, այսինքն 11111։

Մեկ ձեռքով կարելի է հաշվել 0-ից 31, երկուսով՝ 0-ից 1023։ Վարժվիր մեկ-մեկ ավելացնելով․ կտեսնես, որ բութը փոխվում է ամեն անգամ, ցուցամատը՝ ամեն երկրորդ անգամ և այդպես շարունակ։ Հենց այդպես է աշխատում համակարգչի երկուական հաշվիչը։`,
    ru: `Дай каждому пальцу одной руки значение, удваивая: большой **1**, указательный **2**, средний **4**, безымянный **8**, мизинец **16**. Поднятый палец — 1, загнутый — 0.

- Подняты большой и средний: $1 + 4 = 5$, в двоичной записи 00101.
- Подняты все пять: $1 + 2 + 4 + 8 + 16 = 31$, то есть 11111.

На одной руке можно считать от 0 до 31, на двух — от 0 до 1023. Потренируйся прибавлять по одному: увидишь, что большой палец меняется каждый раз, указательный — через раз и так далее. Именно так работает двоичный счётчик в компьютере.`,
  }),
  inf6("units-and-text-encoding", "megabits-divide-by-eight", "mentalMath", ["Internet speed in Mbit/s? Divide by 8 for MB/s", "Ինտերնետի արագությունը Մբիթ/վ-ո՞վ է․ բաժանիր 8-ի", "Скорость в Мбит/с? Раздели на 8, получишь МБ/с"], {
    en: `Internet providers give speed in **megabits** per second (Mbit/s), but file sizes are in **megabytes** (MB). One byte is 8 bits, so divide by 8:

$$100\\ \\text{Mbit/s} = 100 : 8 = 12.5\\ \\text{MB/s}$$

How long does a 1 GB film take at 100 Mbit/s? $1\\,000\\ \\text{MB} : 12.5 = 80$ seconds, a little over a minute (in practice a bit longer). Watch the letters: a small **b** is a bit, a capital **B** is a byte.`,
    hy: `Ինտերնետ մատակարարները արագությունը տալիս են **մեգաբիթ**/վայրկյանով (Մբիթ/վ), իսկ ֆայլերի չափը **մեգաբայթ**-երով է (ՄԲ)։ Մեկ բայթը 8 բիթ է, ուրեմն բաժանիր 8-ի․

$$100\\ \\text{Mbit/s} = 100 : 8 = 12{,}5\\ \\text{MB/s}$$

Որքա՞ն կտևի 1 ԳԲ ֆիլմը 100 Մբիթ/վ արագությամբ։ $1\\,000 : 12{,}5 = 80$ վայրկյան, մի քիչ ավելի, քան մեկ րոպե (իրականում մի քիչ ավելի երկար)։ Ուշադիր եղիր տառերին․ փոքրատառ **b**-ն բիթ է, մեծատառ **B**-ն՝ բայթ։`,
    ru: `Провайдеры указывают скорость в **мегабитах** в секунду (Мбит/с), а размер файлов — в **мегабайтах** (МБ). В байте 8 бит, поэтому дели на 8:

$$100\\ \\text{Мбит/с} = 100 : 8 = 12{,}5\\ \\text{МБ/с}$$

Сколько скачивается фильм на 1 ГБ при 100 Мбит/с? $1\\,000\\ \\text{МБ} : 12{,}5 = 80$ секунд, чуть больше минуты (на практике немного дольше). Следи за буквами: маленькая **b** — бит, большая **B** — байт.`,
  }),

  // ---------- Astronomy ----------
  ast11("heliocentric-system", "planet-order-phrase", "memory", ["The planets in order: a sentence to remember", "Մոլորակների կարգը", "Порядок планет: фраза-запоминалка"], {
    en: `From the Sun outwards: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Take the first letters and make a sentence:

**M**y **V**ery **E**ducated **M**other **J**ust **S**erved **U**s **N**oodles.

Two more hooks: the four **small rocky** planets come first, then the four **giants**, with the asteroid belt between Mars and Jupiter. And the two biggest, Jupiter and Saturn, stand next to each other in the middle of the list, like the two heaviest weights on a scale.`,
    hy: `Արևից դեպի դուրս․ Մերկուրի, Վեներա, Երկիր, Մարս, Յուպիտեր, Սատուրն, Ուրան, Նեպտուն։ Հիշելու համար բաժանիր երկու քառյակի․

- **չորս փոքր քարքարոտ**՝ Մերկուրի, Վեներա, Երկիր, Մարս (Երկիրը երրորդն է, Մարսը՝ «կարմիր հարևանը» նրանից հետո),
- **աստերոիդների գոտի**,
- **չորս հսկա**՝ Յուպիտեր, Սատուրն, Ուրան, Նեպտուն (ամենամեծ երկուսը իրար կողքի են, հետո երկու սառցե հսկաները)։

Կարող ես նաև կազմել քո նախադասությունը, որի բառերը սկսվում են Մ, Վ, Ե, Մ, Յ, Ս, Ու, Ն տառերով։ Անգլախոսներն ասում են «**M**y **V**ery **E**ducated **M**other **J**ust **S**erved **U**s **N**oodles»։`,
    ru: `От Солнца наружу: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун. Возьми первые буквы и запомни фразу:

«**М**ы **В**сё **З**наем: **М**ама **Ю**ли **С**ела **У**тром **Н**а пилюли». Последнее слово когда-то было для Плутона, который с 2006 года не считается планетой.

Ещё две опоры: сначала идут четыре **маленькие каменные** планеты, потом пояс астероидов, потом четыре **гиганта**. А два самых больших, Юпитер и Сатурн, стоят рядом в середине списка.`,
  }),
  ast11("moon-eclipses", "growing-or-old-moon", "memory", ["Waxing or waning? D-O-C", "Աճո՞ղ, թե՞ նվազող լուսին", "Растущая или старая Луна? Р и С"], {
    en: `In the northern hemisphere, where Armenia is, the Moon's shape tells you its phase by a letter:

- Lit on the **right**, like a **D**: **waxing**, growing towards full.
- Full Moon: **O**.
- Lit on the **left**, like a **C**: **waning**, shrinking.

Remember **D-O-C**, the order of a month. (In Russian the same rule is said with letters: if you can add a stick to make a **Р**, the Moon is *растущая*, growing; if it looks like a **С**, it is *стареющая*, getting old.) In the southern hemisphere it is the other way round.`,
    hy: `Հյուսիսային կիսագնդում, որտեղ Հայաստանն է, Լուսնի ձևը տառով է ասում փուլը․

- Լուսավորված է **աջից**, ինչպես լատինական **D**-ն․ **աճող** է, գնում է դեպի լիալուսին։
- Լիալուսին․ **O**։
- Լուսավորված է **ձախից**, ինչպես **C**-ն․ **նվազող** է։

Հիշիր **D-O-C**՝ ամսվա կարգը։ (Ռուսերենում նույնն ասում են այսպես․ եթե փայտիկ ավելացնելով ստացվում է **Р**, լուսինը *растущая* է՝ աճող, եթե նման է **С**-ի, *стареющая* է՝ ծերացող։) Հարավային կիսագնդում ամեն ինչ հակառակն է։`,
    ru: `В северном полушарии, где мы живём, форма Луны подсказывает фазу буквой:

- Если к серпу можно приставить палочку и получится **Р**, Луна **растущая**.
- Если серп похож на **С**, Луна **стареющая**, убывает.

Англичане говорят **D-O-C**: освещена справа, как D, — растёт, полная — O, освещена слева, как C, — убывает. Это порядок одного месяца. В южном полушарии всё наоборот.`,
  }),
  ast12("star-properties", "obafgkm", "memory", ["Star classes O B A F G K M: a phrase", "Աստղերի դասեր O B A F G K M", "Классы звёзд O B A F G K M: фраза"], {
    en: `Spectral classes go from the **hottest** (blue, O) to the **coolest** (red, M): **O B A F G K M**. The classic sentence is

**O**h **B**e **A** **F**ine **G**irl/**G**uy, **K**iss **M**e.

Our Sun is a **G** star, about 5 800 K, yellowish. To remember the direction: O looks like a round, blazing hot ball, and red M comes last, like a cooling coal.`,
    hy: `Սպեկտրալ դասերը գնում են **ամենատաքից** (կապույտ, O) դեպի **ամենասառը** (կարմիր, M)․ **O B A F G K M**։ Անգլախոսների դասական նախադասությունն է՝ «**O**h **B**e **A** **F**ine **G**irl, **K**iss **M**e», ռուսների՝ «**О**дин **Б**ритый **А**нгличанин **Ф**иники **Ж**евал, **К**ак **М**орковь»։

Մեր Արևը **G** աստղ է՝ մոտ 5 800 Կ, դեղնավուն։ Ուղղությունը հիշելու համար․ O-ն կլոր, շիկացած տաք գունդ է հիշեցնում, իսկ կարմիր M-ը վերջում է, ինչպես սառչող ածուխը։`,
    ru: `Спектральные классы идут от **самых горячих** (голубые, O) к **самым холодным** (красные, M): **O B A F G K M**. Классическая фраза:

«**О**дин **Б**ритый **А**нгличанин **Ф**иники **Ж**евал, **К**ак **М**орковь» (Ж читается как G).

Наше Солнце — звезда класса **G**, около 5 800 К, желтоватая. Чтобы помнить направление: O похожа на круглый раскалённый шар, а красная M в конце, как остывающий уголь.`,
  }),

  // ---------- Music ----------
  mus2("staff-and-clef", "treble-lines-and-spaces", "memory", ["Treble clef: the notes on the lines and in the spaces", "Սոլի բանալի․ նոտաները գծերի վրա և միջակայքերում", "Скрипичный ключ: ноты на линейках и между ними"], {
    en: `In the treble clef, read from the bottom up:

- **On the lines:** E, G, B, D, F (mi, sol, si, re, fa). English pupils say "**E**very **G**ood **B**oy **D**eserves **F**ruit".
- **In the spaces:** F, A, C, E (fa, la, do, mi), which spells the word **FACE**.

Notice the jump: from one line to the next you skip exactly one note, because the note in between sits in the space. So if you know that the bottom line is E (mi), you can climb: mi-*fa*-sol-*la*-si…, with every other note on a line.`,
    hy: `Սոլի բանալիում կարդա ներքևից վերև․

- **Գծերի վրա**․ մի, սոլ, սի, ռե, ֆա (E, G, B, D, F)։
- **Միջակայքերում**․ ֆա, լյա, դո, մի (F, A, C, E)։ Լատինական տառերով սա կազմում է անգլերեն **FACE**՝ «դեմք» բառը։

Նկատիր քայլը․ մի գծից հաջորդին անցնելիս բաց ես թողնում ճիշտ մեկ նոտա, որովհետև արանքի նոտան միջակայքում է։ Ուրեմն եթե գիտես, որ ներքևի գիծը մի է, կարող ես բարձրանալ․ մի-*ֆա*-սոլ-*լյա*-սի…, և ամեն երկրորդ նոտան գծի վրա է։ Հիշելու համար ասա շարքը որպես մեկ բառ՝ «մի-սոլ-սի-ռե-ֆա»։`,
    ru: `В скрипичном ключе читай снизу вверх:

- **На линейках:** ми, соль, си, ре, фа (E, G, B, D, F). Проговаривай как одну считалку: «ми-соль-си-ре-фа».
- **Между линейками:** фа, ля, до, ми (F, A, C, E), латинскими буквами это английское слово **FACE**, «лицо».

Заметь шаг: от одной линейки к следующей пропускается ровно одна нота, потому что промежуточная сидит между линейками. Если знаешь, что нижняя линейка — ми, можно подниматься: ми-*фа*-соль-*ля*-си…, где каждая вторая нота стоит на линейке.`,
  }),
  mus5("scales-and-keys", "order-of-sharps-flats", "memory", ["Sharps and flats always come in one order", "Դիեզները և բեմոլները միշտ նույն կարգով են", "Диезы и бемоли всегда идут в одном порядке"], {
    en: `Key signatures add sharps in a fixed order, each a fifth above the one before:

**F C G D A E B** (fa, do, sol, re, la, mi, si): "**F**ather **C**harles **G**oes **D**own **A**nd **E**nds **B**attle".

Flats come in the **same row backwards**: **B E A D G C F** (si, mi, la, re, sol, do, fa): "**B**attle **E**nds **A**nd **D**own **G**oes **C**harles' **F**ather".

Two quick uses: a key with 3 sharps has F♯, C♯, G♯, nothing else; and in a major key with sharps, the tonic is one semitone above the **last** sharp (last sharp G♯ → A major).`,
    hy: `Բանալու նշաններում դիեզները ավելանում են հաստատուն կարգով, ամեն մեկը նախորդից կվինտա բարձր․

**ֆա, դո, սոլ, ռե, լյա, մի, սի** (F C G D A E B)։

Բեմոլները գալիս են **նույն շարքով, բայց հակառակից**․ **սի, մի, լյա, ռե, սոլ, դո, ֆա**։ Ուրեմն բավական է հիշել մեկ շարք՝ «ֆա-դո-սոլ-ռե-լյա-մի-սի»։

Երկու արագ կիրառություն․ 3 դիեզով տոնայնությունն ունի ֆա♯, դո♯, սոլ♯ և ուրիշ ոչինչ, իսկ դիեզներով մաժոր տոնայնության տոնիկան **վերջին** դիեզից կես տոն բարձր է (վերջինը սոլ♯ → լյա մաժոր)։`,
    ru: `В ключевых знаках диезы добавляются в постоянном порядке, каждый на квинту выше предыдущего:

**фа, до, соль, ре, ля, ми, си** (F C G D A E B).

Бемоли идут **тем же рядом задом наперёд**: **си, ми, ля, ре, соль, до, фа**. Значит, хватит одного ряда: «фа-до-соль-ре-ля-ми-си».

Два быстрых применения: в тональности с 3 диезами есть фа♯, до♯, соль♯ и больше ничего; а в мажорной тональности с диезами тоника на полтона выше **последнего** диеза (последний соль♯ → ля мажор).`,
  }),

  // ---------- Science ----------
  sci4("orientation-and-maps", "watch-compass", "problemSolving", ["Find south with a watch and the Sun", "Գտիր հարավը ժամացույցով և Արևով", "Найди юг по часам и Солнцу"], {
    en: `On a sunny day an ordinary watch with hands can work as a rough compass (in the northern hemisphere):

1. Hold the watch flat and turn it so the **hour hand points at the Sun**.
2. Find the point **halfway** between the hour hand and the **1** on the dial (in Armenia clocks run about an hour ahead of the Sun, so use 1 instead of 12).
3. That direction is **south**; the opposite way is north.

At 3 p.m. the hour hand is on 3, so south is towards the 2. Remember the directions clockwise as **N-E-S-W**: "**N**ever **E**at **S**oggy **W**affles".`,
    hy: `Արևոտ օրը սլաքներով սովորական ժամացույցը կարող է ծառայել որպես մոտավոր կողմնացույց (հյուսիսային կիսագնդում)․

1. Ժամացույցը պահիր հորիզոնական և պտտիր այնպես, որ **ժամի սլաքը ուղղված լինի դեպի Արևը**։
2. Գտիր ժամի սլաքի և թվացույցի **1**-ի **ուղիղ մեջտեղը** (Հայաստանում ժամացույցները Արևից մոտ մեկ ժամ առաջ են, դրա համար 12-ի փոխարեն վերցրու 1-ը)։
3. Այդ ուղղությունը **հարավն** է, հակառակը՝ հյուսիսը։

Ժամը 15-ին ժամի սլաքը 3-ի վրա է, ուրեմն հարավը 2-ի կողմն է։ Կողմերը ժամասլաքի ուղղությամբ հիշիր այսպես․ **Հ**յուսիս, **Ա**րևելք, **Հ**արավ, **Ա**րևմուտք՝ «Հ-Ա-Հ-Ա»։`,
    ru: `В солнечный день обычные часы со стрелками могут служить приблизительным компасом (в северном полушарии):

1. Держи часы горизонтально и поверни так, чтобы **часовая стрелка смотрела на Солнце**.
2. Найди направление **ровно посередине** между часовой стрелкой и цифрой **1** (в Армении часы идут примерно на час впереди Солнца, поэтому вместо 12 бери 1; там, где часы совпадают с Солнцем, бери 12).
3. Это направление — **юг**, противоположное — север.

В 15:00 часовая стрелка на 3, значит, юг в сторону двойки. Стороны света по часовой стрелке: **С-В-Ю-З**, север, восток, юг, запад.`,
  }),
];
