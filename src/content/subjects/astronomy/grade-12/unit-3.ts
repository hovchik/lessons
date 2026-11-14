import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Galaxies", "Գալակտիկաներ", "Галактики"),
  summary: t("Our Galaxy, the Milky Way, its structure, rotation and central black hole; other galaxies, their kinds and groups; active galaxies, quasars and dark matter.", "Մեր Գալակտիկան՝ Ծիր Կաթինը, նրա կառուցվածքը, պտույտը և կենտրոնական սև խոռոչը, այլ գալակտիկաներ, դրանց տեսակներն ու խմբերը, ակտիվ գալակտիկաներ, քվազարներ և մութ նյութ։", "Наша Галактика — Млечный Путь, её строение, вращение и центральная чёрная дыра; другие галактики, их типы и скопления; активные галактики, квазары и тёмная материя."),
  lessons: [
    lesson(
      "milky-way",
      ["Our Galaxy, the Milky Way", "Մեր Գալակտիկան՝ Ծիր Կաթինը", "Наша Галактика — Млечный Путь"],
      {
        en: ["Describe the structure of the Milky Way and the place of the Sun in it", "Tell open star clusters from globular ones", "Estimate the mass of the Galaxy and of its central black hole from orbits"],
        hy: ["Նկարագրել Ծիր Կաթինի կառուցվածքը և Արեգակի տեղը նրանում", "Տարբերել ցրված աստղակույտերը գնդաձևերից", "Ուղեծրերով գնահատել Գալակտիկայի և նրա կենտրոնական սև խոռոչի զանգվածները"],
        ru: ["Описывать строение Млечного Пути и место Солнца в нём", "Отличать рассеянные звёздные скопления от шаровых", "Оценивать по орбитам массу Галактики и её центральной чёрной дыры"],
      },
      {
        en: `## A band of light

On a dark summer night, far from city lights, a pale glowing band crosses the sky: the Milky Way. In 1610 Galileo turned his telescope on it and saw that it is made of countless faint stars. We live inside a huge flat system of stars, and the band is that disc seen from within.

## The shape of the Galaxy

- A flat **disc** about $100\\,000$ light-years across and only about $1000$ ly thick, with **spiral arms** where young stars, gas and dust gather.
- A central **bulge** with a bar of old stars.
- A thin, nearly round **halo** with old stars and globular clusters.
- In all, some $100$–$400$ billion stars.

The Sun is in the disc, in a small arm called the Orion Arm, about $26\\,000$ light-years from the centre. The centre lies in the direction of Sagittarius, but dust hides it from ordinary light; it is studied in infrared, radio and X-rays.

## Star clusters

- **Open clusters**, like the Pleiades: tens to thousands of young stars in the disc, loosely held and slowly drifting apart.
- **Globular clusters**: hundreds of thousands of very old stars packed in a ball, in the halo. About $150$ are known. In 1918 Harlow Shapley noticed that they are centred far away in Sagittarius, and concluded that the Sun is not at the centre of the Galaxy.

## A spinning disc and invisible mass

The Sun and its neighbours circle the centre at about $230$ km/s. One turn, a "galactic year", takes about $220$ million years. From the speed $v$ of a star on a circular orbit of radius $R$ we can weigh everything inside that orbit: $M = \\dfrac{v^2 R}{G}$.

Farther out the speeds of stars and gas do not fall, as they would if most mass were in the visible stars. The Galaxy must contain a lot of invisible **dark matter**, several times more than all its stars.

## The black hole at the centre

Stars near the centre race around an invisible point called Sagittarius A*. The star S2 moves on an orbit with $a \\approx 1000$ AU and $T \\approx 16$ years. Reinhard Genzel and Andrea Ghez followed such stars for decades and showed that the centre holds a black hole of about $4$ million solar masses (Nobel Prize, 2020). In 2022 its shadow was imaged.

## Worked examples

**Example 1.** How long is a galactic year? $R = 26\\,000$ ly $\\approx 2{.}5 \\cdot 10^{20}$ m, $v = 230$ km/s.

$T = \\dfrac{2\\pi R}{v} = \\dfrac{6{.}28 \\cdot 2{.}5 \\cdot 10^{20}}{2{.}3 \\cdot 10^5} \\approx 6{.}8 \\cdot 10^{15}$ s $\\approx 2{.}2 \\cdot 10^8$ years. In its $4{.}6$ billion years the Sun has gone round about $20$ times.

**Example 2.** The mass of the Galaxy inside the Sun's orbit?

$M = \\dfrac{v^2 R}{G} = \\dfrac{(2{.}3 \\cdot 10^5)^2 \\cdot 2{.}5 \\cdot 10^{20}}{6{.}67 \\cdot 10^{-11}} \\approx 2 \\cdot 10^{41}$ kg $\\approx 10^{11}\\, M_\\odot$.

**Example 3.** The mass of Sagittarius A* from the star S2?

$M = \\dfrac{a^3}{T^2} = \\dfrac{1000^3}{16^2} = \\dfrac{10^9}{256} \\approx 4 \\cdot 10^6\\, M_\\odot$.

## Exercises

1. What did Galileo see when he looked at the Milky Way through his telescope?
2. Why can we not see the centre of the Galaxy in ordinary light?
3. Name two differences between open and globular clusters.
4. A star circles a central body with $a = 400$ AU and $T = 4$ years. Find the central mass.
5. How did Shapley find that the Sun is not at the centre of the Galaxy?
6. What do the high speeds of stars in the outer parts of the Galaxy tell us?

### Answers

1. That it is made of a huge number of faint stars.
2. Clouds of dust in the disc absorb visible light; infrared, radio waves and X-rays get through.
3. Open clusters are young, loose and lie in the disc; globular clusters are old, rich, dense and lie in the halo.
4. $M = \\dfrac{400^3}{4^2} = \\dfrac{6{.}4 \\cdot 10^7}{16} = 4 \\cdot 10^6\\, M_\\odot$.
5. The globular clusters are centred on a point far away in Sagittarius, which must be the centre of the Galaxy.
6. That the Galaxy contains a lot of unseen mass, dark matter.`,
        hy: `## Լույսի շերտ

Ամառային մութ գիշերը, քաղաքի լույսերից հեռու, երկինքը հատում է աղոտ լուսավոր մի շերտ՝ Ծիր Կաթինը։ 1610 թվականին Գալիլեյը իր աստղադիտակն ուղղեց նրան և տեսավ, որ այն կազմված է անհամար աղոտ աստղերից։ Մենք ապրում ենք աստղերի հսկա տափակ համակարգի ներսում, և շերտն այդ սկավառակն է՝ ներսից դիտված։

## Գալակտիկայի ձևը

- Մոտ $100\\,000$ լուսային տարի տրամագծով և ընդամենը մոտ $1000$ լ․տ․ հաստությամբ տափակ **սկավառակ**՝ **պարուրաձև թևերով**, որտեղ հավաքվում են երիտասարդ աստղեր, գազ և փոշի։
- Կենտրոնական **ուռուցիկություն** (բալջ)՝ ծեր աստղերից կազմված ձողով։
- Նոսր, համարյա կլոր **հալո**՝ ծեր աստղերով և գնդաձև աստղակույտերով։
- Ընդհանուր առմամբ՝ մոտ $100$–$400$ միլիարդ աստղ։

Արեգակը սկավառակում է, Օրիոնի թև կոչվող փոքր թևում, կենտրոնից մոտ $26\\,000$ լուսային տարի հեռավորության վրա։ Կենտրոնը Աղեղնավորի ուղղությամբ է, բայց փոշին այն թաքցնում է սովորական լույսից․ այն ուսումնասիրում են ինֆրակարմիր, ռադիո և ռենտգենյան ճառագայթներով։

## Աստղակույտեր

- **Ցրված աստղակույտեր**, ինչպես Պլեյադները․ տասնյակից մինչև հազարավոր երիտասարդ աստղեր սկավառակում, թույլ կապված և դանդաղ ցրվող։
- **Գնդաձև աստղակույտեր**․ հարյուր հազարավոր շատ ծեր աստղեր՝ խիտ գնդի մեջ, հալոյում։ Հայտնի է մոտ $150$-ը։ 1918 թվականին Հարլոու Շեփլին նկատեց, որ դրանց կենտրոնը շատ հեռու է՝ Աղեղնավորում, և եզրակացրեց, որ Արեգակը Գալակտիկայի կենտրոնում չէ։

## Պտտվող սկավառակ և անտեսանելի զանգված

Արեգակը և նրա հարևանները կենտրոնի շուրջ պտտվում են մոտ $230$ կմ/վ արագությամբ։ Մեկ պտույտը՝ «գալակտիկական տարին», տևում է մոտ $220$ միլիոն տարի։ $R$ շառավղով շրջանային ուղեծրով շարժվող աստղի $v$ արագությունից կարելի է կշռել այն ամենը, ինչ ուղեծրի ներսում է․ $M = \\dfrac{v^2 R}{G}$։

Ավելի հեռու աստղերի և գազի արագությունները չեն նվազում, ինչպես կլիներ, եթե զանգվածի մեծ մասը տեսանելի աստղերում լիներ։ Գալակտիկան պետք է պարունակի շատ անտեսանելի **մութ նյութ**՝ իր բոլոր աստղերից մի քանի անգամ ավելի։

## Սև խոռոչը կենտրոնում

Կենտրոնի մոտ աստղերը սլանում են Աղեղնավոր A* կոչվող անտեսանելի կետի շուրջ։ S2 աստղը շարժվում է $a \\approx 1000$ ա․մ․ և $T \\approx 16$ տարի ուղեծրով։ Ռայնհարդ Գենցելը և Անդրեա Գեզը տասնամյակներ հետևեցին այդպիսի աստղերին և ցույց տվեցին, որ կենտրոնում մոտ $4$ միլիոն արեգակնային զանգվածով սև խոռոչ կա (Նոբելյան մրցանակ, 2020)։ 2022 թվականին լուսանկարվեց նրա ստվերը։

## Լուծված օրինակներ

**Օրինակ 1։** Որքա՞ն է գալակտիկական տարին։ $R = 26\\,000$ լ․տ․ $\\approx 2{,}5 \\cdot 10^{20}$ մ, $v = 230$ կմ/վ։

$T = \\dfrac{2\\pi R}{v} = \\dfrac{6{,}28 \\cdot 2{,}5 \\cdot 10^{20}}{2{,}3 \\cdot 10^5} \\approx 6{,}8 \\cdot 10^{15}$ վ $\\approx 2{,}2 \\cdot 10^8$ տարի։ Իր $4{,}6$ միլիարդ տարվա ընթացքում Արեգակը մոտ $20$ պտույտ է կատարել։

**Օրինակ 2։** Որքա՞ն է Գալակտիկայի զանգվածը Արեգակի ուղեծրի ներսում։

$M = \\dfrac{v^2 R}{G} = \\dfrac{(2{,}3 \\cdot 10^5)^2 \\cdot 2{,}5 \\cdot 10^{20}}{6{,}67 \\cdot 10^{-11}} \\approx 2 \\cdot 10^{41}$ կգ $\\approx 10^{11}\\, M_\\odot$։

**Օրինակ 3։** Որքա՞ն է Աղեղնավոր A*-ի զանգվածը՝ ըստ S2 աստղի։

$M = \\dfrac{a^3}{T^2} = \\dfrac{1000^3}{16^2} = \\dfrac{10^9}{256} \\approx 4 \\cdot 10^6\\, M_\\odot$։

## Վարժություններ

1. Ի՞նչ տեսավ Գալիլեյը, երբ աստղադիտակով նայեց Ծիր Կաթինին։
2. Ինչո՞ւ չենք կարող Գալակտիկայի կենտրոնը տեսնել սովորական լույսով։
3. Նշեք ցրված և գնդաձև աստղակույտերի երկու տարբերություն։
4. Աստղը կենտրոնական մարմնի շուրջ պտտվում է $a = 400$ ա․մ․ և $T = 4$ տարի պարամետրերով։ Գտեք կենտրոնական զանգվածը։
5. Ինչպե՞ս Շեփլին պարզեց, որ Արեգակը Գալակտիկայի կենտրոնում չէ։
6. Ի՞նչ են մեզ ասում Գալակտիկայի արտաքին մասերում աստղերի մեծ արագությունները։

### Պատասխաններ

1. Որ այն կազմված է հսկայական թվով աղոտ աստղերից։
2. Սկավառակի փոշու ամպերը կլանում են տեսանելի լույսը, ինֆրակարմիր, ռադիո և ռենտգենյան ճառագայթներն անցնում են։
3. Ցրվածները երիտասարդ են, նոսր և գտնվում են սկավառակում, գնդաձևերը՝ ծեր, հարուստ, խիտ և գտնվում են հալոյում։
4. $M = \\dfrac{400^3}{4^2} = \\dfrac{6{,}4 \\cdot 10^7}{16} = 4 \\cdot 10^6\\, M_\\odot$։
5. Գնդաձև աստղակույտերի կենտրոնը Աղեղնավորում հեռու մի կետ է, որը պետք է Գալակտիկայի կենտրոնը լինի։
6. Որ Գալակտիկան պարունակում է շատ չտեսնված զանգված՝ մութ նյութ։`,
        ru: `## Полоса света

Тёмной летней ночью, вдали от городских огней, небо пересекает бледная светящаяся полоса — Млечный Путь. В 1610 году Галилей направил на неё телескоп и увидел, что она состоит из бесчисленных слабых звёзд. Мы живём внутри огромной плоской звёздной системы, и полоса — это её диск, видимый изнутри.

## Форма Галактики

- Плоский **диск** поперечником около $100\\,000$ световых лет и толщиной всего около $1000$ св. лет со **спиральными рукавами**, где собираются молодые звёзды, газ и пыль.
- Центральное **утолщение** (балдж) с перемычкой из старых звёзд.
- Разреженное, почти круглое **гало** со старыми звёздами и шаровыми скоплениями.
- Всего около $100$–$400$ миллиардов звёзд.

Солнце находится в диске, в небольшом рукаве Ориона, примерно в $26\\,000$ световых лет от центра. Центр лежит в направлении Стрельца, но пыль скрывает его в обычном свете; его изучают в инфракрасных, радио- и рентгеновских лучах.

## Звёздные скопления

- **Рассеянные скопления**, как Плеяды: от десятков до тысяч молодых звёзд в диске, слабо связанных и медленно расходящихся.
- **Шаровые скопления**: сотни тысяч очень старых звёзд, собранных в плотный шар, в гало. Известно около $150$. В 1918 году Харлоу Шепли заметил, что их центр лежит далеко в Стрельце, и сделал вывод, что Солнце не в центре Галактики.

## Вращающийся диск и невидимая масса

Солнце и его соседи обращаются вокруг центра со скоростью около $230$ км/с. Один оборот — «галактический год» — длится около $220$ миллионов лет. По скорости $v$ звезды на круговой орбите радиуса $R$ можно взвесить всё, что внутри орбиты: $M = \\dfrac{v^2 R}{G}$.

Дальше от центра скорости звёзд и газа не падают, как было бы, если бы основная масса была в видимых звёздах. Значит, в Галактике много невидимой **тёмной материи** — в несколько раз больше, чем всех звёзд.

## Чёрная дыра в центре

Звёзды у центра мчатся вокруг невидимой точки — Стрельца A*. Звезда S2 движется по орбите с $a \\approx 1000$ а. е. и $T \\approx 16$ лет. Райнхард Генцель и Андреа Гез десятилетиями следили за такими звёздами и показали, что в центре находится чёрная дыра массой около $4$ миллионов масс Солнца (Нобелевская премия 2020 года). В 2022 году получено изображение её тени.

## Разобранные примеры

**Пример 1.** Сколько длится галактический год? $R = 26\\,000$ св. лет $\\approx 2{,}5 \\cdot 10^{20}$ м, $v = 230$ км/с.

$T = \\dfrac{2\\pi R}{v} = \\dfrac{6{,}28 \\cdot 2{,}5 \\cdot 10^{20}}{2{,}3 \\cdot 10^5} \\approx 6{,}8 \\cdot 10^{15}$ с $\\approx 2{,}2 \\cdot 10^8$ лет. За свои $4{,}6$ миллиарда лет Солнце сделало около $20$ оборотов.

**Пример 2.** Масса Галактики внутри орбиты Солнца?

$M = \\dfrac{v^2 R}{G} = \\dfrac{(2{,}3 \\cdot 10^5)^2 \\cdot 2{,}5 \\cdot 10^{20}}{6{,}67 \\cdot 10^{-11}} \\approx 2 \\cdot 10^{41}$ кг $\\approx 10^{11}\\, M_\\odot$.

**Пример 3.** Масса Стрельца A* по звезде S2?

$M = \\dfrac{a^3}{T^2} = \\dfrac{1000^3}{16^2} = \\dfrac{10^9}{256} \\approx 4 \\cdot 10^6\\, M_\\odot$.

## Упражнения

1. Что увидел Галилей, взглянув на Млечный Путь в телескоп?
2. Почему центр Галактики нельзя увидеть в обычном свете?
3. Назовите два отличия рассеянных скоплений от шаровых.
4. Звезда обращается вокруг центрального тела с $a = 400$ а. е. и $T = 4$ года. Найдите центральную массу.
5. Как Шепли установил, что Солнце не в центре Галактики?
6. О чём говорят большие скорости звёзд во внешних частях Галактики?

### Ответы

1. Что он состоит из огромного числа слабых звёзд.
2. Облака пыли в диске поглощают видимый свет; инфракрасные, радиоволны и рентген проходят.
3. Рассеянные — молодые, рыхлые, в диске; шаровые — старые, богатые, плотные, в гало.
4. $M = \\dfrac{400^3}{4^2} = \\dfrac{6{,}4 \\cdot 10^7}{16} = 4 \\cdot 10^6\\, M_\\odot$.
5. Шаровые скопления сосредоточены вокруг далёкой точки в Стрельце, которая и должна быть центром Галактики.
6. Что в Галактике много невидимой массы — тёмной материи.`,
      },
      [
        q(t("The Milky Way band in the sky is…", "Երկնքում Ծիր Կաթինի շերտը…", "Полоса Млечного Пути на небе — это…"), [t("the disc of our Galaxy seen from inside", "ներսից դիտված մեր Գալակտիկայի սկավառակն է", "диск нашей Галактики, видимый изнутри"), t("a cloud in the atmosphere", "մթնոլորտի ամպ է", "облако в атмосфере"), t("another galaxy", "մեկ այլ գալակտիկա է", "другая галактика")], 0),
        q(t("The Sun is about … from the centre of the Galaxy.", "Արեգակը Գալակտիկայի կենտրոնից մոտ … հեռավորության վրա է։", "Солнце находится примерно в … от центра Галактики."), [t("26 000 light-years", "26 000 լուսային տարի", "26 000 световых лет"), t("26 light-years", "26 լուսային տարի", "26 световых лет"), t("2.6 million light-years", "2,6 միլիոն լուսային տարի", "2,6 млн световых лет")], 0),
        q(t("Globular clusters are…", "Գնդաձև աստղակույտերը…", "Шаровые скопления…"), [t("old and lie in the halo", "ծեր են և գտնվում են հալոյում", "старые и находятся в гало"), t("young and lie in the arms", "երիտասարդ են և գտնվում են թևերում", "молодые и находятся в рукавах"), t("made of gas only", "միայն գազից են", "состоят только из газа")], 0),
        q(t("A galactic year lasts about…", "Գալակտիկական տարին տևում է մոտ…", "Галактический год длится около…"), [t("220 million years", "220 միլիոն տարի", "220 миллионов лет"), t("220 years", "220 տարի", "220 лет"), t("22 billion years", "22 միլիարդ տարի", "22 миллиардов лет")], 0),
        q(t("The rotation of the outer Galaxy points to…", "Գալակտիկայի արտաքին մասերի պտույտը ցույց է տալիս…", "Вращение внешних частей Галактики указывает на…"), [t("dark matter", "մութ նյութի առկայությունը", "тёмную материю"), t("a second Sun", "երկրորդ Արեգակի առկայությունը", "второе Солнце"), t("an empty halo", "դատարկ հալոն", "пустое гало")], 0),
        q(t("The black hole Sagittarius A* has a mass of about…", "Աղեղնավոր A* սև խոռոչի զանգվածը մոտավորապես…", "Масса чёрной дыры Стрелец A* — около…"), [t("4 million solar masses", "4 միլիոն արեգակնային զանգված է", "4 миллионов масс Солнца"), t("4 solar masses", "4 արեգակնային զանգված է", "4 масс Солнца"), t("4 billion solar masses", "4 միլիարդ արեգակնային զանգված է", "4 миллиардов масс Солнца")], 0),
      ],
    ),
    lesson(
      "galaxies",
      ["The world of galaxies", "Գալակտիկաների աշխարհը", "Мир галактик"],
      {
        en: ["Explain how Hubble proved that galaxies are separate star systems", "Classify galaxies as elliptical, spiral, barred spiral or irregular", "Describe the Local Group, galaxy clusters and the cosmic web"],
        hy: ["Բացատրել, թե ինչպես Հաբլն ապացուցեց, որ գալակտիկաներն առանձին աստղային համակարգեր են", "Դասակարգել գալակտիկաները՝ էլիպսաձև, պարուրաձև, ձողով պարուրաձև կամ անկանոն", "Նկարագրել Տեղային խումբը, գալակտիկաների կույտերը և տիեզերական ցանցը"],
        ru: ["Объяснять, как Хаббл доказал, что галактики — отдельные звёздные системы", "Классифицировать галактики: эллиптические, спиральные, спиральные с перемычкой, неправильные", "Описывать Местную группу, скопления галактик и космическую паутину"],
      },
      {
        en: `## Island universes

For a long time the faint "spiral nebulae" were a puzzle: clouds inside our Galaxy or whole "island universes" far away? In 1920 astronomers argued about it in the Great Debate. In 1924 Edwin Hubble found Cepheids in the Andromeda nebula with the new $2{.}5$-metre telescope at Mount Wilson. Their periods gave a distance far beyond the edge of the Milky Way. Andromeda is a galaxy like ours, and today we know it is about $2{.}5$ million light-years away.

## Kinds of galaxies

In 1926 Hubble sorted galaxies by shape:

- **Elliptical** (E0 to E7, from round to flattened): smooth balls of old reddish stars with little gas; the largest galaxies are giant ellipticals.
- **Spiral** (Sa, Sb, Sc): a bulge and a disc with arms full of young blue stars, gas and dust. Andromeda is one.
- **Barred spiral** (SBa, SBb, SBc): the arms start from the ends of a bar across the centre, like our Milky Way.
- **Irregular**: no clear shape, often rich in gas and young stars, like the Magellanic Clouds.

## Neighbours: the Local Group

The Milky Way, Andromeda and the Triangulum galaxy are the three large members of the **Local Group**, with more than $80$ small companions. The Large and Small Magellanic Clouds are seen with the naked eye in the southern sky. Andromeda is coming towards us at about $110$ km/s; the two galaxies may merge within a few billion years, though the latest measurements give this only about one chance in two within $10$ billion years. Even then stars would almost never collide: they are too far apart.

## Clusters and the cosmic web

Galaxies gather in **clusters**: the Virgo cluster, some $55$ million light-years away, holds more than a thousand. Clusters form **superclusters**, and these line up in long filaments and walls around huge empty **voids**: the cosmic web. There are hundreds of billions of galaxies in the part of the Universe we can see. The James Webb Space Telescope sees galaxies that formed less than $300$ million years after the Big Bang.

## Byurakan's galaxies

From 1965 to 1980 Benjamin Markarian at the Byurakan Observatory carried out the **First Byurakan Survey** with a special telescope that recorded the spectra of all objects in a field at once. He found about $1500$ galaxies with unusually strong ultraviolet light. These **Markarian galaxies** turned out to include many with active nuclei and bursts of star formation, and they are still studied worldwide under the catalogue name "Mrk".

## Worked examples

**Example 1.** Andromeda is seen about $3^\\circ$ long and is $2{.}5$ million light-years away. How big is it?

$3^\\circ \\approx 0{.}052$ rad, so $D \\approx 2{.}5 \\cdot 10^6 \\cdot 0{.}052 \\approx 130\\,000$ ly: a bit larger than our Galaxy.

**Example 2.** The light of Andromeda that we see tonight left it when?

About $2{.}5$ million years ago, when the first humans were appearing on Earth.

**Example 3.** Andromeda approaches at $110$ km/s from $2{.}5$ million light-years ($2{.}4 \\cdot 10^{22}$ m). If the speed stayed the same, when would they meet?

$t = \\dfrac{2{.}4 \\cdot 10^{22}}{1{.}1 \\cdot 10^5} \\approx 2{.}2 \\cdot 10^{17}$ s $\\approx 7$ billion years. In fact gravity speeds it up, so it would happen sooner.

## Exercises

1. Which telescope and which stars did Hubble use in 1924?
2. Give the Hubble type: a) a smooth round ball of red stars; b) a disc with arms starting from a bar.
3. Where are young stars found mostly: in elliptical or in spiral galaxies? Why?
4. The Large Magellanic Cloud is about $160\\,000$ ly away and $10^\\circ$ across in the sky. Estimate its size.
5. What is a void?
6. What did Markarian look for in his survey?

### Answers

1. The $2{.}5$-metre telescope at Mount Wilson; Cepheids in the Andromeda nebula.
2. a) elliptical (E0); b) barred spiral (SB).
3. In spirals: they still have gas and dust from which stars form; ellipticals have almost none left.
4. $10^\\circ \\approx 0{.}17$ rad; $D \\approx 160\\,000 \\cdot 0{.}17 \\approx 28\\,000$ ly.
5. A huge, almost empty region between the filaments of galaxies.
6. Galaxies with unusually strong ultraviolet light.`,
        hy: `## Կղզի-տիեզերքներ

Երկար ժամանակ աղոտ «պարուրաձև միգամածությունները» հանելուկ էին․ ամպե՞ր մեր Գալակտիկայի ներսում, թե՞ հեռավոր ամբողջական «կղզի-տիեզերքներ»։ 1920 թվականին աստղագետները վիճեցին այդ մասին «Մեծ բանավեճում»։ 1924 թվականին Էդվին Հաբլը Մաունթ Վիլսոնի $2{,}5$ մետրանոց նոր աստղադիտակով Անդրոմեդայի միգամածությունում ցեֆեիդներ գտավ։ Նրանց պարբերությունները տվեցին Ծիր Կաթինի եզրից շատ ավելի մեծ հեռավորություն։ Անդրոմեդան մերի նման գալակտիկա է, և այսօր գիտենք, որ այն մոտ $2{,}5$ միլիոն լուսային տարի հեռու է։

## Գալակտիկաների տեսակները

1926 թվականին Հաբլը գալակտիկաները դասակարգեց ըստ ձևի․

- **Էլիպսաձև** (E0-ից E7, կլորից տափակ)․ ծեր կարմրավուն աստղերի հարթ գնդեր՝ քիչ գազով, ամենամեծ գալակտիկաները հսկա էլիպսաձևերն են։
- **Պարուրաձև** (Sa, Sb, Sc)․ ուռուցիկություն և սկավառակ՝ երիտասարդ կապույտ աստղերով, գազով ու փոշով լի թևերով։ Անդրոմեդան այդպիսին է։
- **Ձողով պարուրաձև** (SBa, SBb, SBc)․ թևերը սկսվում են կենտրոնը հատող ձողի ծայրերից, ինչպես մեր Ծիր Կաթինում։
- **Անկանոն**․ հստակ ձև չունեն, հաճախ հարուստ են գազով և երիտասարդ աստղերով, ինչպես Մագելանյան Ամպերը։

## Հարևաններ՝ Տեղային խումբ

Ծիր Կաթինը, Անդրոմեդան և Եռանկյան գալակտիկան **Տեղային խմբի** երեք խոշոր անդամներն են, որոնք ունեն $80$-ից ավելի փոքր ուղեկիցներ։ Մեծ և Փոքր Մագելանյան Ամպերը երևում են անզեն աչքով՝ հարավային երկնքում։ Անդրոմեդան մոտենում է մեզ մոտ $110$ կմ/վ արագությամբ․ երկու գալակտիկաները կարող են միաձուլվել մի քանի միլիարդ տարում, թեև վերջին չափումները դրան տալիս են ընդամենը մոտ երկուսից մեկ հնարավորություն $10$ միլիարդ տարվա ընթացքում։ Նույնիսկ այդ դեպքում աստղերը համարյա երբեք չէին բախվի․ դրանք միմյանցից շատ հեռու են։

## Կույտեր և տիեզերական ցանց

Գալակտիկաները հավաքվում են **կույտերում**․ Կույսի կույտը՝ մոտ $55$ միլիոն լուսային տարի հեռու, պարունակում է հազարից ավելի գալակտիկա։ Կույտերը կազմում են **գերկույտեր**, իսկ դրանք շարվում են երկար թելերով և պատերով՝ հսկա դատարկ **դատարկությունների** (վոյդերի) շուրջ․ սա տիեզերական ցանցն է։ Տիեզերքի մեզ տեսանելի մասում հարյուրավոր միլիարդավոր գալակտիկաներ կան։ Ջեյմս Ուեբ տիեզերական աստղադիտակը տեսնում է գալակտիկաներ, որոնք ձևավորվել են Մեծ պայթյունից $300$ միլիոն տարուց էլ քիչ անց։

## Բյուրականի գալակտիկաները

1965–1980 թվականներին Բենիամին Մարգարյանը Բյուրականի աստղադիտարանում իրականացրեց **Բյուրականի առաջին համայնապատկերային հետազոտությունը**՝ հատուկ աստղադիտակով, որը միանգամից գրանցում էր դաշտի բոլոր օբյեկտների սպեկտրները։ Նա գտավ մոտ $1500$ գալակտիկա՝ անսովոր ուժեղ ուլտրամանուշակագույն լույսով։ Պարզվեց, որ այս **Մարգարյանի գալակտիկաների** մեջ շատերն ունեն ակտիվ միջուկներ և աստղառաջացման պոռթկումներ, և դրանք մինչ օրս ուսումնասիրվում են ամբողջ աշխարհում «Mrk» կատալոգային անունով։

## Լուծված օրինակներ

**Օրինակ 1։** Անդրոմեդան երևում է մոտ $3^\\circ$ երկարությամբ և գտնվում է $2{,}5$ միլիոն լուսային տարի հեռու։ Որքա՞ն մեծ է այն։

$3^\\circ \\approx 0{,}052$ ռադ, ուստի $D \\approx 2{,}5 \\cdot 10^6 \\cdot 0{,}052 \\approx 130\\,000$ լ․տ․՝ մեր Գալակտիկայից մի փոքր մեծ։

**Օրինակ 2։** Անդրոմեդայի այն լույսը, որը տեսնում ենք այս գիշեր, ե՞րբ է դուրս եկել նրանից։

Մոտ $2{,}5$ միլիոն տարի առաջ, երբ Երկրի վրա հայտնվում էին առաջին մարդիկ։

**Օրինակ 3։** Անդրոմեդան մոտենում է $110$ կմ/վ արագությամբ $2{,}5$ միլիոն լուսային տարի ($2{,}4 \\cdot 10^{22}$ մ) հեռավորությունից։ Եթե արագությունը չփոխվեր, ե՞րբ կհանդիպեին դրանք։

$t = \\dfrac{2{,}4 \\cdot 10^{22}}{1{,}1 \\cdot 10^5} \\approx 2{,}2 \\cdot 10^{17}$ վ $\\approx 7$ միլիարդ տարի։ Իրականում ձգողությունը արագացնում է այն, ուստի դա ավելի շուտ կլիներ։

## Վարժություններ

1. Ո՞ր աստղադիտակը և ո՞ր աստղերն օգտագործեց Հաբլը 1924 թվականին։
2. Նշեք Հաբլի տիպը․ ա) կարմիր աստղերի հարթ կլոր գունդ, բ) սկավառակ, որի թևերը սկսվում են ձողից։
3. Որտե՞ղ են հիմնականում հանդիպում երիտասարդ աստղերը՝ էլիպսաձև, թե՞ պարուրաձև գալակտիկաներում։ Ինչո՞ւ։
4. Մեծ Մագելանյան Ամպը մոտ $160\\,000$ լ․տ․ հեռու է և երկնքում ունի $10^\\circ$ չափ։ Գնահատեք նրա չափը։
5. Ի՞նչ է վոյդը։
6. Ի՞նչ էր փնտրում Մարգարյանն իր հետազոտությունում։

### Պատասխաններ

1. Մաունթ Վիլսոնի $2{,}5$ մետրանոց աստղադիտակը, Անդրոմեդայի միգամածության ցեֆեիդները։
2. ա) էլիպսաձև (E0), բ) ձողով պարուրաձև (SB)։
3. Պարուրաձևերում․ դրանք դեռ ունեն գազ և փոշի, որոնցից աստղեր են առաջանում, էլիպսաձևերում դրանք համարյա չեն մնացել։
4. $10^\\circ \\approx 0{,}17$ ռադ, $D \\approx 160\\,000 \\cdot 0{,}17 \\approx 28\\,000$ լ․տ․։
5. Գալակտիկաների թելերի միջև հսկա, համարյա դատարկ տիրույթ։
6. Անսովոր ուժեղ ուլտրամանուշակագույն լույսով գալակտիկաներ։`,
        ru: `## Островные вселенные

Долгое время слабые «спиральные туманности» были загадкой: облака внутри нашей Галактики или далёкие самостоятельные «островные вселенные»? В 1920 году астрономы спорили об этом в «Большом споре». В 1924 году Эдвин Хаббл с новым $2{,}5$-метровым телескопом обсерватории Маунт-Вилсон нашёл цефеиды в туманности Андромеды. Их периоды дали расстояние далеко за краем Млечного Пути. Андромеда — галактика вроде нашей, и сегодня мы знаем, что до неё около $2{,}5$ миллиона световых лет.

## Типы галактик

В 1926 году Хаббл разделил галактики по форме:

- **Эллиптические** (от E0 до E7, от круглых к сплюснутым): гладкие шары старых красноватых звёзд с малым количеством газа; самые большие галактики — гигантские эллиптические.
- **Спиральные** (Sa, Sb, Sc): балдж и диск с рукавами, полными молодых голубых звёзд, газа и пыли. Такова Андромеда.
- **Спиральные с перемычкой** (SBa, SBb, SBc): рукава начинаются на концах перемычки, пересекающей центр, как у нашего Млечного Пути.
- **Неправильные**: без чёткой формы, часто богаты газом и молодыми звёздами, как Магеллановы Облака.

## Соседи: Местная группа

Млечный Путь, Андромеда и галактика Треугольника — три крупных члена **Местной группы**, у которых больше $80$ мелких спутников. Большое и Малое Магеллановы Облака видны невооружённым глазом на южном небе. Андромеда приближается к нам со скоростью около $110$ км/с; две галактики могут слиться через несколько миллиардов лет, хотя по последним измерениям шанс на это в ближайшие $10$ миллиардов лет — лишь примерно один из двух. Но и тогда звёзды почти никогда не столкнутся: они слишком далеко друг от друга.

## Скопления и космическая паутина

Галактики собираются в **скопления**: скопление в Деве, примерно в $55$ миллионах световых лет, насчитывает больше тысячи галактик. Скопления образуют **сверхскопления**, а те выстраиваются в длинные нити и стены вокруг огромных пустых **войдов** — это космическая паутина. В доступной нам части Вселенной сотни миллиардов галактик. Космический телескоп «Джеймс Уэбб» видит галактики, сформировавшиеся менее чем через $300$ миллионов лет после Большого взрыва.

## Бюраканские галактики

В 1965–1980 годах Вениамин Маркарян в Бюраканской обсерватории провёл **Первый Бюраканский обзор** на особом телескопе, который сразу записывал спектры всех объектов в поле. Он нашёл около $1500$ галактик с необычно сильным ультрафиолетовым излучением. Среди этих **галактик Маркаряна** оказалось много галактик с активными ядрами и вспышками звездообразования; их до сих пор изучают по всему миру под каталожным названием «Mrk».

## Разобранные примеры

**Пример 1.** Андромеда видна длиной около $3^\\circ$ и находится в $2{,}5$ миллиона световых лет. Каков её размер?

$3^\\circ \\approx 0{,}052$ рад, значит, $D \\approx 2{,}5 \\cdot 10^6 \\cdot 0{,}052 \\approx 130\\,000$ св. лет — немного больше нашей Галактики.

**Пример 2.** Когда покинул Андромеду свет, который мы видим сегодня ночью?

Около $2{,}5$ миллиона лет назад, когда на Земле появлялись первые люди.

**Пример 3.** Андромеда приближается со скоростью $110$ км/с с расстояния $2{,}5$ млн световых лет ($2{,}4 \\cdot 10^{22}$ м). Если бы скорость не менялась, когда бы они встретились?

$t = \\dfrac{2{,}4 \\cdot 10^{22}}{1{,}1 \\cdot 10^5} \\approx 2{,}2 \\cdot 10^{17}$ с $\\approx 7$ млрд лет. На самом деле тяготение ускоряет сближение, так что это случилось бы раньше.

## Упражнения

1. Какой телескоп и какие звёзды использовал Хаббл в 1924 году?
2. Определите тип по Хабблу: а) гладкий круглый шар красных звёзд; б) диск с рукавами, начинающимися от перемычки.
3. Где в основном встречаются молодые звёзды — в эллиптических или спиральных галактиках? Почему?
4. Большое Магелланово Облако находится примерно в $160\\,000$ св. лет и имеет на небе размер $10^\\circ$. Оцените его размер.
5. Что такое войд?
6. Что искал Маркарян в своём обзоре?

### Ответы

1. $2{,}5$-метровый телескоп Маунт-Вилсон; цефеиды в туманности Андромеды.
2. а) эллиптическая (E0); б) спиральная с перемычкой (SB).
3. В спиральных: в них ещё есть газ и пыль, из которых рождаются звёзды; в эллиптических их почти не осталось.
4. $10^\\circ \\approx 0{,}17$ рад; $D \\approx 160\\,000 \\cdot 0{,}17 \\approx 28\\,000$ св. лет.
5. Огромная почти пустая область между нитями галактик.
6. Галактики с необычно сильным ультрафиолетовым излучением.`,
      },
      [
        q(t("In 1924 Hubble proved Andromeda is a separate galaxy using…", "1924 թվականին Հաբլն ապացուցեց, որ Անդրոմեդան առանձին գալակտիկա է՝ օգտագործելով…", "В 1924 году Хаббл доказал, что Андромеда — отдельная галактика, с помощью…"), [t("Cepheids", "ցեֆեիդները", "цефеид"), t("parallaxes", "պարալաքսները", "параллаксов"), t("radio waves", "ռադիոալիքները", "радиоволн")], 0),
        q(t("Our Milky Way is a…", "Մեր Ծիր Կաթինը…", "Наш Млечный Путь — это…"), [t("barred spiral galaxy", "ձողով պարուրաձև գալակտիկա է", "спиральная галактика с перемычкой"), t("giant elliptical galaxy", "հսկա էլիպսաձև գալակտիկա է", "гигантская эллиптическая галактика"), t("irregular galaxy", "անկանոն գալակտիկա է", "неправильная галактика")], 0),
        q(t("Elliptical galaxies are made mostly of…", "Էլիպսաձև գալակտիկաները կազմված են հիմնականում…", "Эллиптические галактики состоят в основном из…"), [t("old stars, with little gas", "ծեր աստղերից՝ քիչ գազով", "старых звёзд, с малым количеством газа"), t("young blue stars", "երիտասարդ կապույտ աստղերից", "молодых голубых звёзд"), t("dust only", "միայն փոշուց", "одной пыли")], 0),
        q(t("The Magellanic Clouds are…", "Մագելանյան Ամպերը…", "Магеллановы Облака — это…"), [t("small galaxies near the Milky Way", "Ծիր Կաթինի մոտ գտնվող փոքր գալակտիկաներ են", "небольшие галактики рядом с Млечным Путём"), t("gas clouds in our atmosphere", "մեր մթնոլորտի գազային ամպեր են", "газовые облака в нашей атмосфере"), t("star clusters in the halo", "հալոյի աստղակույտեր են", "звёздные скопления в гало")], 0),
        q(t("Light from the Andromeda galaxy takes about … to reach us.", "Անդրոմեդայի գալակտիկայի լույսը մեզ է հասնում մոտ…", "Свет от галактики Андромеды идёт до нас около…"), [t("2.5 million years", "2,5 միլիոն տարում", "2,5 миллиона лет"), t("2.5 thousand years", "2,5 հազար տարում", "2,5 тысячи лет"), t("2.5 billion years", "2,5 միլիարդ տարում", "2,5 миллиарда лет")], 0),
        q(t("Markarian galaxies stand out by their strong…", "Մարգարյանի գալակտիկաները առանձնանում են իրենց ուժեղ…", "Галактики Маркаряна выделяются сильным…"), [t("ultraviolet light", "ուլտրամանուշակագույն լույսով", "ультрафиолетовым излучением"), t("red colour", "կարմիր գույնով", "красным цветом"), t("gravity waves", "գրավիտացիոն ալիքներով", "гравитационными волнами")], 0),
      ],
    ),
    lesson(
      "active-galaxies",
      ["Active galaxies, quasars and dark matter", "Ակտիվ գալակտիկաներ, քվազարներ և մութ նյութ", "Активные галактики, квазары и тёмная материя"],
      {
        en: ["Explain what powers active galactic nuclei and quasars", "Find speeds from redshifts and sizes from changes in brightness", "Describe how gravitational lensing and the motion of galaxies reveal dark matter"],
        hy: ["Բացատրել, թե ինչն է սնուցում գալակտիկաների ակտիվ միջուկները և քվազարները", "Գտնել արագությունները կարմիր շեղումից և չափերը՝ պայծառության փոփոխություններից", "Նկարագրել, թե ինչպես են գրավիտացիոն ոսպնյակը և գալակտիկաների շարժումը բացահայտում մութ նյութը"],
        ru: ["Объяснять, что питает активные ядра галактик и квазары", "Находить скорости по красному смещению и размеры по изменениям блеска", "Описывать, как гравитационное линзирование и движение галактик выдают тёмную материю"],
      },
      {
        en: `## Galaxies with restless hearts

In most galaxies the centre is quiet. But in some a tiny core shines brighter than all the billions of stars around it, changes quickly and throws out jets of matter at nearly the speed of light. These are **active galactic nuclei**.

- **Seyfert galaxies** (Carl Seyfert, 1943): spirals with a very bright, star-like nucleus and broad bright lines in the spectrum, a sign of fast-moving gas.
- **Radio galaxies**: ellipticals with two huge clouds of radio emission fed by jets, like Cygnus A.
- **Quasars**: the most powerful of all.

At the 1958 Solvay conference in Brussels Viktor Ambartsumian put forward the idea that the nuclei of galaxies are active and can throw out huge masses of matter. At first many doubted it; within a few years quasars and radio jets proved him right.

## Quasars

In 1963 Maarten Schmidt looked at the spectrum of the "star" 3C 273 and saw familiar hydrogen lines, shifted towards red by $15{.}8\\%$. The **redshift** is

$$z = \\dfrac{\\lambda - \\lambda_0}{\\lambda_0}, \\qquad v \\approx c z \\text{ for small } z.$$

So 3C 273 is not a star but an object about $2{.}4$ billion light-years away that shines about a hundred times brighter than the whole Milky Way. Yet its brightness changes in days. Light cannot cross an object faster than light, so the shining region is no bigger than a few light-days: about the size of the Solar system.

## The engine: a supermassive black hole

Only one engine fits: gas spiralling into a black hole of millions or billions of solar masses. In the **accretion disc** the gas heats up to millions of kelvin. Falling matter can give off up to about $10\\%$ of its energy $mc^2$, much more than the $0{.}7\\%$ that nuclear fusion releases. In 2019 the Event Horizon Telescope showed the shadow of the black hole M87* of $6{.}5$ billion solar masses, at the root of a jet about $5000$ light-years long.

## Dark matter and gravitational lenses

In 1933 Fritz Zwicky measured the speeds of galaxies in the Coma cluster. They moved so fast that the visible galaxies could not hold them together. He concluded that the cluster contains much more invisible "dark matter". The rotation of galaxies (previous lessons) says the same.

Mass bends light (Einstein, 1915). A massive galaxy or cluster in front of a distant quasar acts as a **gravitational lens**: it gives two or more images, arcs or even a ring. The first lensed quasar was found in 1979. By measuring how light is bent, astronomers map where dark matter is. About $85\\%$ of all matter in the Universe is dark, and what it is made of is still unknown.

## Worked examples

**Example 1.** 3C 273 has $z = 0{.}158$. How fast is it moving away?

$v \\approx cz = 3 \\cdot 10^5 \\cdot 0{.}158 \\approx 47\\,000$ km/s.

**Example 2.** A quasar's brightness changes noticeably in $1$ day. Its maximum size?

$D \\le c \\cdot t = 3 \\cdot 10^8 \\cdot 86\\,400 \\approx 2{.}6 \\cdot 10^{13}$ m $\\approx 170$ AU.

**Example 3.** The Schwarzschild radius of M87* ($6{.}5 \\cdot 10^9\\, M_\\odot$)?

$r_s = 3 \\text{ km} \\cdot 6{.}5 \\cdot 10^9 \\approx 2 \\cdot 10^{10}$ km $\\approx 130$ AU: three times the size of Pluto's orbit.

## Exercises

1. The hydrogen line $656$ nm is seen in a quasar at $760$ nm. Find $z$ and the speed.
2. A quasar varies in $10$ days. How large can its shining region be, in AU?
3. Why can ordinary stars not explain the power of a quasar?
4. What is a gravitational lens?
5. What argument did Zwicky use for dark matter?
6. How much energy can $1$ kg of gas give off when it falls into a black hole (take $10\\%$ of $mc^2$)?

### Answers

1. $z = \\dfrac{104}{656} \\approx 0{.}16$; $v \\approx 48\\,000$ km/s.
2. $10$ light-days $\\approx 2{.}6 \\cdot 10^{14}$ m $\\approx 1700$ AU.
3. Their light would come from a region many light-years across and could not change in days; and fusion gives far less energy per kilogram.
4. A massive body whose gravity bends the light of a more distant source, giving several images, arcs or a ring.
5. The galaxies in the Coma cluster move too fast to be held together by the visible mass.
6. $0{.}1 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 9 \\cdot 10^{15}$ J.`,
        hy: `## Անհանգիստ սրտով գալակտիկաներ

Գալակտիկաների մեծ մասում կենտրոնը հանգիստ է։ Բայց որոշներում փոքրիկ միջուկը փայլում է ավելի պայծառ, քան շուրջը գտնվող միլիարդավոր աստղերը միասին, արագ փոխվում է և համարյա լույսի արագությամբ նյութի շիթեր է արձակում։ Սրանք **գալակտիկաների ակտիվ միջուկներն** են։

- **Սեյֆերտի գալակտիկաներ** (Կառլ Սեյֆերտ, 1943)․ պարուրաձև գալակտիկաներ՝ շատ պայծառ, աստղանման միջուկով և սպեկտրում լայն պայծառ գծերով, որոնք արագ շարժվող գազի նշան են։
- **Ռադիոգալակտիկաներ**․ էլիպսաձև գալակտիկաներ՝ շիթերով սնվող ռադիոճառագայթման երկու հսկա ամպերով, ինչպես Կարապ A-ն։
- **Քվազարներ**՝ բոլորից ամենահզորը։

1958 թվականին Բրյուսելում Սոլվեյի կոնֆերանսում Վիկտոր Համբարձումյանը առաջ քաշեց այն միտքը, որ գալակտիկաների միջուկներն ակտիվ են և կարող են նյութի հսկա զանգվածներ արտանետել։ Սկզբում շատերը կասկածում էին, մի քանի տարի անց քվազարներն ու ռադիոշիթերն ապացուցեցին, որ նա իրավացի էր։

## Քվազարներ

1963 թվականին Մաարթեն Շմիդտը նայեց 3C 273 «աստղի» սպեկտրին և տեսավ ծանոթ ջրածնային գծեր, որոնք կարմիր կողմ էին շեղված $15{,}8\\%$-ով։ **Կարմիր շեղումը**՝

$$z = \\dfrac{\\lambda - \\lambda_0}{\\lambda_0}, \\qquad v \\approx c z \\text{ փոքր } z\\text{-երի դեպքում}$$

Ուրեմն 3C 273-ը աստղ չէ, այլ մոտ $2{,}4$ միլիարդ լուսային տարի հեռու գտնվող օբյեկտ, որը փայլում է ամբողջ Ծիր Կաթինից մոտ հարյուր անգամ ավելի պայծառ։ Սակայն նրա պայծառությունը փոխվում է օրերի ընթացքում։ Լույսը չի կարող օբյեկտը հատել լույսից արագ, ուստի լուսարձակող տիրույթը մի քանի լուսային օրից մեծ չէ՝ մոտավորապես Արեգակնային համակարգի չափ։

## Շարժիչը՝ գերզանգվածեղ սև խոռոչ

Համապատասխանում է միայն մեկ շարժիչ․ միլիոնավոր կամ միլիարդավոր արեգակնային զանգվածով սև խոռոչի մեջ պարուրաձև ընկնող գազը։ **Ակրեցիոն սկավառակում** գազը տաքանում է մինչև միլիոնավոր կելվիններ։ Ընկնող նյութը կարող է արձակել իր $mc^2$ էներգիայի մինչև մոտ $10\\%$-ը՝ շատ ավելի, քան միջուկային միաձուլման $0{,}7\\%$-ը։ 2019 թվականին «Իրադարձությունների հորիզոն» աստղադիտակը ցույց տվեց $6{,}5$ միլիարդ արեգակնային զանգվածով M87* սև խոռոչի ստվերը՝ մոտ $5000$ լուսային տարի երկարությամբ շիթի հիմքում։

## Մութ նյութ և գրավիտացիոն ոսպնյակներ

1933 թվականին Ֆրից Ցվիկին չափեց Վերոնիկայի Վարսերի (Կոմա) կույտի գալակտիկաների արագությունները։ Դրանք այնքան արագ էին շարժվում, որ տեսանելի գալակտիկաները չէին կարող դրանք միասին պահել։ Նա եզրակացրեց, որ կույտը պարունակում է շատ ավելի անտեսանելի «մութ նյութ»։ Գալակտիկաների պտույտը (նախորդ դասեր) նույնն է ասում։

Զանգվածը թեքում է լույսը (Այնշտայն, 1915)։ Հեռավոր քվազարի առջև գտնվող զանգվածեղ գալակտիկան կամ կույտը գործում է որպես **գրավիտացիոն ոսպնյակ**․ տալիս է երկու կամ ավելի պատկեր, աղեղներ կամ նույնիսկ օղակ։ Առաջին ոսպնյակավորված քվազարը հայտնաբերվեց 1979 թվականին։ Չափելով, թե ինչպես է լույսը թեքվում, աստղագետները քարտեզագրում են մութ նյութի տեղը։ Տիեզերքի ողջ նյութի մոտ $85\\%$-ը մութ է, և թե ինչից է այն կազմված, դեռ հայտնի չէ։

## Լուծված օրինակներ

**Օրինակ 1։** 3C 273-ի համար $z = 0{,}158$։ Ինչ արագությամբ է այն հեռանում։

$v \\approx cz = 3 \\cdot 10^5 \\cdot 0{,}158 \\approx 47\\,000$ կմ/վ։

**Օրինակ 2։** Քվազարի պայծառությունը նկատելիորեն փոխվում է $1$ օրում։ Որքա՞ն է նրա առավելագույն չափը։

$D \\le c \\cdot t = 3 \\cdot 10^8 \\cdot 86\\,400 \\approx 2{,}6 \\cdot 10^{13}$ մ $\\approx 170$ ա․մ․։

**Օրինակ 3։** Որքա՞ն է M87*-ի ($6{,}5 \\cdot 10^9\\, M_\\odot$) Շվարցշիլդի շառավիղը։

$r_s = 3 \\text{ կմ} \\cdot 6{,}5 \\cdot 10^9 \\approx 2 \\cdot 10^{10}$ կմ $\\approx 130$ ա․մ․՝ Պլուտոնի ուղեծրից երեք անգամ մեծ։

## Վարժություններ

1. Ջրածնի $656$ նմ գիծը քվազարում երևում է $760$ նմ-ում։ Գտեք $z$-ը և արագությունը։
2. Քվազարը փոխվում է $10$ օրում։ Որքա՞ն մեծ կարող է լինել նրա լուսարձակող տիրույթը աստղագիտական միավորներով։
3. Ինչո՞ւ սովորական աստղերը չեն կարող բացատրել քվազարի հզորությունը։
4. Ի՞նչ է գրավիտացիոն ոսպնյակը։
5. Ի՞նչ փաստարկ օգտագործեց Ցվիկին մութ նյութի օգտին։
6. Որքա՞ն էներգիա կարող է արձակել $1$ կգ գազը սև խոռոչի մեջ ընկնելիս (վերցրեք $mc^2$-ի $10\\%$-ը)։

### Պատասխաններ

1. $z = \\dfrac{104}{656} \\approx 0{,}16$, $v \\approx 48\\,000$ կմ/վ։
2. $10$ լուսային օր $\\approx 2{,}6 \\cdot 10^{14}$ մ $\\approx 1700$ ա․մ․։
3. Նրանց լույսը կգար բազմաթիվ լուսային տարի չափ տիրույթից և չէր կարող փոխվել օրերի ընթացքում, իսկ միաձուլումը մեկ կիլոգրամի հաշվով շատ ավելի քիչ էներգիա է տալիս։
4. Զանգվածեղ մարմին, որի ձգողությունը թեքում է ավելի հեռավոր աղբյուրի լույսը՝ տալով մի քանի պատկեր, աղեղներ կամ օղակ։
5. Կոմայի կույտի գալակտիկաները շարժվում են չափազանց արագ, որպեսզի տեսանելի զանգվածը նրանց միասին պահի։
6. $0{,}1 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 9 \\cdot 10^{15}$ Ջ։`,
        ru: `## Галактики с беспокойным сердцем

У большинства галактик центр спокоен. Но у некоторых крошечное ядро светит ярче всех окружающих миллиардов звёзд вместе, быстро меняется и выбрасывает струи вещества почти со скоростью света. Это **активные ядра галактик**.

- **Сейфертовские галактики** (Карл Сейферт, 1943): спиральные галактики с очень ярким звездообразным ядром и широкими яркими линиями в спектре — признак быстро движущегося газа.
- **Радиогалактики**: эллиптические галактики с двумя огромными облаками радиоизлучения, которые питаются струями, как Лебедь A.
- **Квазары** — самые мощные из всех.

В 1958 году на Сольвеевском конгрессе в Брюсселе Виктор Амбарцумян выдвинул идею, что ядра галактик активны и могут выбрасывать огромные массы вещества. Сначала многие сомневались; через несколько лет квазары и радиоструи доказали его правоту.

## Квазары

В 1963 году Маартен Шмидт изучил спектр «звезды» 3C 273 и увидел знакомые линии водорода, смещённые к красному концу на $15{,}8\\%$. **Красное смещение**

$$z = \\dfrac{\\lambda - \\lambda_0}{\\lambda_0}, \\qquad v \\approx c z \\text{ при малых } z.$$

Значит, 3C 273 — не звезда, а объект примерно в $2{,}4$ миллиарда световых лет, который светит примерно в сто раз ярче всего Млечного Пути. При этом его блеск меняется за дни. Свет не может пересечь объект быстрее света, поэтому светящаяся область не больше нескольких световых суток — размером примерно с Солнечную систему.

## Двигатель — сверхмассивная чёрная дыра

Подходит только один двигатель: газ, по спирали падающий в чёрную дыру массой в миллионы или миллиарды масс Солнца. В **аккреционном диске** газ нагревается до миллионов кельвинов. Падающее вещество может отдать до примерно $10\\%$ своей энергии $mc^2$ — гораздо больше, чем $0{,}7\\%$ при термоядерном синтезе. В 2019 году Телескоп горизонта событий показал тень чёрной дыры M87* массой $6{,}5$ миллиарда масс Солнца у основания струи длиной около $5000$ световых лет.

## Тёмная материя и гравитационные линзы

В 1933 году Фриц Цвикки измерил скорости галактик в скоплении Волосы Вероники. Они двигались так быстро, что видимые галактики не могли бы удержать их вместе. Он заключил, что в скоплении гораздо больше невидимой «тёмной материи». Вращение галактик (прошлые уроки) говорит о том же.

Масса искривляет свет (Эйнштейн, 1915). Массивная галактика или скопление перед далёким квазаром действует как **гравитационная линза**: даёт два или больше изображений, дуги или даже кольцо. Первый линзированный квазар обнаружили в 1979 году. Измеряя, как изгибается свет, астрономы составляют карты тёмной материи. Около $85\\%$ всего вещества во Вселенной — тёмное, и из чего оно состоит, пока неизвестно.

## Разобранные примеры

**Пример 1.** У 3C 273 $z = 0{,}158$. С какой скоростью он удаляется?

$v \\approx cz = 3 \\cdot 10^5 \\cdot 0{,}158 \\approx 47\\,000$ км/с.

**Пример 2.** Блеск квазара заметно меняется за $1$ сутки. Каков его наибольший размер?

$D \\le c \\cdot t = 3 \\cdot 10^8 \\cdot 86\\,400 \\approx 2{,}6 \\cdot 10^{13}$ м $\\approx 170$ а. е.

**Пример 3.** Радиус Шварцшильда M87* ($6{,}5 \\cdot 10^9\\, M_\\odot$)?

$r_s = 3 \\text{ км} \\cdot 6{,}5 \\cdot 10^9 \\approx 2 \\cdot 10^{10}$ км $\\approx 130$ а. е. — втрое больше орбиты Плутона.

## Упражнения

1. Линия водорода $656$ нм видна в спектре квазара на $760$ нм. Найдите $z$ и скорость.
2. Квазар меняется за $10$ суток. Какого размера может быть его светящаяся область в а. е.?
3. Почему обычные звёзды не могут объяснить мощность квазара?
4. Что такое гравитационная линза?
5. Какой довод в пользу тёмной материи привёл Цвикки?
6. Сколько энергии может отдать $1$ кг газа, падая в чёрную дыру (возьмите $10\\%$ от $mc^2$)?

### Ответы

1. $z = \\dfrac{104}{656} \\approx 0{,}16$; $v \\approx 48\\,000$ км/с.
2. $10$ световых суток $\\approx 2{,}6 \\cdot 10^{14}$ м $\\approx 1700$ а. е.
3. Их свет шёл бы из области размером во много световых лет и не мог бы меняться за дни; к тому же синтез даёт гораздо меньше энергии на килограмм.
4. Массивное тело, тяготение которого изгибает свет более далёкого источника, давая несколько изображений, дуги или кольцо.
5. Галактики в скоплении Волосы Вероники движутся слишком быстро, чтобы видимая масса могла их удержать.
6. $0{,}1 \\cdot 1 \\cdot (3 \\cdot 10^8)^2 = 9 \\cdot 10^{15}$ Дж.`,
      },
      [
        q(t("Quasars are powered by…", "Քվազարները սնուցվում են…", "Квазары питаются…"), [t("gas falling into supermassive black holes", "գերզանգվածեղ սև խոռոչների մեջ ընկնող գազով", "газом, падающим в сверхмассивные чёрные дыры"), t("very many ordinary stars", "շատ մեծ թվով սովորական աստղերով", "очень большим числом обычных звёзд"), t("supernovae only", "միայն գերնոր աստղերով", "только сверхновыми")], 0),
        q(t("Who identified the redshift of the quasar 3C 273 in 1963?", "Ո՞վ որոշեց 3C 273 քվազարի կարմիր շեղումը 1963 թվականին։", "Кто определил красное смещение квазара 3C 273 в 1963 году?"), [t("Maarten Schmidt", "Մաարթեն Շմիդտը", "Маартен Шмидт"), t("Edwin Hubble", "Էդվին Հաբլը", "Эдвин Хаббл"), t("Carl Seyfert", "Կառլ Սեյֆերտը", "Карл Сейферт")], 0),
        q(t("If a quasar changes its brightness within days, then its shining region is…", "Եթե քվազարը փոխում է պայծառությունը օրերի ընթացքում, ապա նրա լուսարձակող տիրույթը…", "Если квазар меняет блеск за несколько суток, то его светящаяся область…"), [t("no bigger than a few light-days", "մի քանի լուսային օրից մեծ չէ", "не больше нескольких световых суток"), t("as big as a galaxy", "գալակտիկայի չափ է", "размером с галактику"), t("smaller than the Earth", "Երկրից փոքր է", "меньше Земли")], 0),
        q(t("Who proposed in 1958 that galactic nuclei are active?", "Ո՞վ 1958 թվականին առաջ քաշեց գալակտիկաների միջուկների ակտիվության գաղափարը։", "Кто в 1958 году выдвинул идею об активности ядер галактик?"), [t("Viktor Ambartsumian", "Վիկտոր Համբարձումյանը", "Виктор Амбарцумян"), t("Fritz Zwicky", "Ֆրից Ցվիկին", "Фриц Цвикки"), t("Albert Einstein", "Ալբերտ Այնշտայնը", "Альберт Эйнштейн")], 0),
        q(t("A gravitational lens works because…", "Գրավիտացիոն ոսպնյակն աշխատում է, որովհետև…", "Гравитационная линза работает, потому что…"), [t("mass bends light", "զանգվածը թեքում է լույսը", "масса искривляет свет"), t("dust reflects light", "փոշին անդրադարձնում է լույսը", "пыль отражает свет"), t("gas absorbs light", "գազը կլանում է լույսը", "газ поглощает свет")], 0),
        q(t("Zwicky concluded in 1933 that galaxy clusters contain…", "Ցվիկին 1933 թվականին եզրակացրեց, որ գալակտիկաների կույտերը պարունակում են…", "Цвикки в 1933 году заключил, что скопления галактик содержат…"), [t("a lot of invisible dark matter", "շատ անտեսանելի մութ նյութ", "много невидимой тёмной материи"), t("no gas at all", "ոչ մի գազ", "совсем нет газа"), t("only one black hole", "միայն մեկ սև խոռոչ", "только одну чёрную дыру")], 0),
      ],
    ),
  ],
};
