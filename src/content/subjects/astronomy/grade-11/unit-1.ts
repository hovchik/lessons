import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Introduction to astronomy", "Ներածություն աստղագիտության մեջ", "Введение в астрономию"),
  summary: t("What astronomy studies and how it grew, telescopes across the spectrum, the scale of the Universe and units of distance.", "Ինչ է ուսումնասիրում աստղագիտությունը և ինչպես է այն զարգացել, աստղադիտակներ ամբողջ սպեկտրում, Տիեզերքի մասշտաբները և հեռավորության միավորները։", "Что изучает астрономия и как она развивалась, телескопы во всём спектре, масштабы Вселенной и единицы расстояний."),
  lessons: [
    lesson(
      "what-is-astronomy",
      ["What astronomy studies", "Ինչ է ուսումնասիրում աստղագիտությունը", "Что изучает астрономия"],
      {
        en: ["Name the main branches of astronomy and what each studies", "Outline the history of astronomy from ancient sky-watchers to space telescopes, including Armenian contributions", "Explain why astronomers observe rather than experiment, and why looking far away means looking into the past"],
        hy: ["Նշել աստղագիտության հիմնական բաժինները և այն, թե ինչ է ուսումնասիրում դրանցից յուրաքանչյուրը", "Ներկայացնել աստղագիտության պատմությունը հնագույն դիտորդներից մինչև տիեզերական աստղադիտակներ, այդ թվում հայ գիտնականների ներդրումը", "Բացատրել, թե ինչու են աստղագետները դիտում, ոչ թե փորձ դնում, և ինչու հեռուն նայելը նշանակում է նայել անցյալին"],
        ru: ["Называть основные разделы астрономии и то, что изучает каждый из них", "Описывать историю астрономии от древних наблюдателей неба до космических телескопов, включая вклад армянских учёных", "Объяснять, почему астрономы наблюдают, а не ставят опыты, и почему взгляд вдаль — это взгляд в прошлое"],
      },
      {
        en: `## The science of the sky

**Astronomy** is the science of celestial bodies and of the Universe as a whole: where they are, how they move, what they are made of, how they were born and how they change. It is the oldest natural science: people tracked the Sun, the Moon and the stars to count days, plan harvests and find their way long before they wrote books.

| Branch | What it studies |
|---|---|
| **Astrometry** | positions of stars and planets, distances, the measurement of time |
| **Celestial mechanics** | the motion of bodies under gravity: planets, moons, spacecraft |
| **Astrophysics** | the physical nature of stars, planets and galaxies: temperature, composition, energy |
| **Planetary science** | the planets, moons and small bodies of the Solar system |
| **Cosmology** | the structure, origin and evolution of the whole Universe |

## A short history

> - **Ancient times.** Babylonian priests recorded eclipses for centuries; the Egyptians had a calendar of 365 days.
> - **Ancient Greece.** Aristarchus (3rd century BC) suggested that the Earth goes round the Sun; Hipparchus made the first star catalogue; Ptolemy's *Almagest* (2nd century AD) described an Earth-centred world that was used for 1400 years.
> - **Armenia.** In the 7th century **Anania Shirakatsi** taught that the Earth is round, explained eclipses by the shadows of the Earth and the Moon, and wrote that the Milky Way is a mass of densely packed faint stars.
> - **The scientific revolution.** Copernicus put the Sun in the centre (1543), Galileo turned a telescope to the sky (1609), Kepler found the laws of planetary motion (1609–1619), and Newton explained them with gravitation (1687).
> - **The 20th century.** Hubble discovered that galaxies are moving apart (1929); **Viktor Ambartsumian** founded the **Byurakan Observatory** (1946); the first artificial satellite flew in 1957 and Yuri Gagarin in 1961; people walked on the Moon in 1969.
> - **Today.** Space telescopes (Hubble since 1990, James Webb since 2021), robots on Mars and gravitational-wave detectors keep making discoveries.

## Observation instead of experiment

A chemist can heat a substance; an astronomer cannot heat a star or move a planet. Almost everything we know comes from what reaches us from space:

> - **electromagnetic radiation**: radio waves, infrared, visible light, ultraviolet, X-rays and gamma rays;
> - **particles**: cosmic rays and neutrinos;
> - **gravitational waves**, first detected in 2015;
> - **space probes** that fly to planets, comets and asteroids, and samples brought back from them.

Light travels at $c = 3 \\cdot 10^5$ km/s, fast but not infinitely fast. Light from the Sun takes about $8$ minutes to reach us, so we see the Sun as it was $8$ minutes ago. The farther we look, the older the light: **looking far away means looking into the past**.

## Worked examples

**Example 1.** How long does sunlight take to reach the Earth ($1{.}5 \\cdot 10^8$ km)?

$t = \\dfrac{s}{c} = \\dfrac{1{.}5 \\cdot 10^8}{3 \\cdot 10^5} = 500$ s $\\approx 8{.}3$ min.

**Example 2.** How long does light take from the Moon ($384\\,000$ km)?

$t = \\dfrac{3{.}84 \\cdot 10^5}{3 \\cdot 10^5} \\approx 1{.}3$ s. A radio command to a lunar rover arrives about $1{.}3$ s later, and its reply after $2{.}6$ s in total.

**Example 3.** The Andromeda galaxy is $2{.}5$ million light-years away. What do we see?

A light-year is the distance light travels in a year, so its light left $2{.}5$ million years ago: we see Andromeda as it was then, long before the first humans.

## Exercises

1. Which branch of astronomy studies the motion of planets and spacecraft under gravity? Which studies the whole Universe?
2. Mars comes as close as $56$ million km to the Earth. How long does light take from Mars then?
3. The probe Voyager 1 is about $24$ billion km away. How long does a radio signal take to reach it?
4. Why do astronomers mostly observe instead of experimenting? Name three kinds of information that reach us from space.
5. Put in order of time: Galileo's telescope, Sputnik, Copernicus's book, Newton's law of gravitation, the founding of Byurakan Observatory.
6. A star is $100$ light-years away. If it exploded $50$ years ago, can we see the explosion now?

### Answers

1. Celestial mechanics; cosmology.
2. $t = 5{.}6 \\cdot 10^7 / 3 \\cdot 10^5 \\approx 187$ s, about $3$ minutes.
3. $t = 2{.}4 \\cdot 10^{10} / 3 \\cdot 10^5 = 8 \\cdot 10^4$ s, about $22$ hours.
4. Stars and planets cannot be moved or heated in a laboratory. Radiation (light, radio, X-rays), particles (cosmic rays, neutrinos), gravitational waves; also data from space probes.
5. Copernicus (1543), Galileo (1609), Newton (1687), Byurakan (1946), Sputnik (1957).
6. No: its light needs $100$ years, so we will see it in $50$ years.`,
        hy: `## Երկնքի գիտությունը

**Աստղագիտությունը** գիտություն է երկնային մարմինների և ամբողջ Տիեզերքի մասին․ որտեղ են դրանք, ինչպես են շարժվում, ինչից են կազմված, ինչպես են առաջացել և ինչպես են փոխվում։ Այն ամենահին բնական գիտությունն է․ մարդիկ հետևում էին Արեգակին, Լուսնին և աստղերին՝ օրերը հաշվելու, բերքահավաքը ծրագրելու և ճանապարհը գտնելու համար, դեռ գրքեր գրելուց շատ առաջ։

| Բաժին | Ինչ է ուսումնասիրում |
|---|---|
| **Աստղաչափություն** | աստղերի և մոլորակների դիրքերը, հեռավորությունները, ժամանակի չափումը |
| **Երկնային մեխանիկա** | մարմինների շարժումը ձգողության ազդեցությամբ․ մոլորակներ, արբանյակներ, տիեզերական սարքեր |
| **Աստղաֆիզիկա** | աստղերի, մոլորակների և գալակտիկաների ֆիզիկական բնույթը․ ջերմաստիճան, բաղադրություն, էներգիա |
| **Մոլորակագիտություն** | Արեգակնային համակարգի մոլորակները, արբանյակները և փոքր մարմինները |
| **Կոսմոլոգիա** | ամբողջ Տիեզերքի կառուցվածքը, ծագումը և զարգացումը |

## Համառոտ պատմություն

> - **Հին ժամանակներ։** Բաբելոնի քրմերը դարեր շարունակ գրանցում էին խավարումները, եգիպտացիներն ունեին 365 օրանոց օրացույց։
> - **Հին Հունաստան։** Արիստարքոսը (մ․թ․ա․ III դար) ենթադրեց, որ Երկիրը պտտվում է Արեգակի շուրջ, Հիպարքոսը կազմեց աստղերի առաջին ցուցակը, Պտղոմեոսի «Ալմագեստը» (մ․թ․ II դար) նկարագրում էր երկրակենտրոն աշխարհ, որն օգտագործվեց 1400 տարի։
> - **Հայաստան։** VII դարում **Անանիա Շիրակացին** ուսուցանում էր, որ Երկիրը գնդաձև է, խավարումները բացատրում էր Երկրի և Լուսնի ստվերներով և գրում, որ Ծիր Կաթինը խիտ դասավորված, աղոտ լուսավորված աստղերի կուտակում է։
> - **Գիտական հեղափոխություն։** Կոպեռնիկոսը Արեգակը դրեց կենտրոնում (1543), Գալիլեյն աստղադիտակն ուղղեց երկինք (1609), Կեպլերը գտավ մոլորակների շարժման օրենքները (1609–1619), իսկ Նյուտոնը դրանք բացատրեց ձգողությամբ (1687)։
> - **XX դար։** Հաբլը հայտնաբերեց, որ գալակտիկաները հեռանում են միմյանցից (1929), **Վիկտոր Համբարձումյանը** հիմնեց **Բյուրականի աստղադիտարանը** (1946), առաջին արհեստական արբանյակը թռավ 1957 թվականին, Յուրի Գագարինը՝ 1961-ին, մարդիկ քայլեցին Լուսնի վրա 1969-ին։
> - **Այսօր։** Տիեզերական աստղադիտակները (Հաբլը՝ 1990-ից, Ջեյմս Ուեբը՝ 2021-ից), Մարսի ռոբոտները և գրավիտացիոն ալիքների դետեկտորները շարունակում են հայտնագործություններ անել։

## Դիտում՝ փորձի փոխարեն

Քիմիկոսը կարող է տաքացնել նյութը, իսկ աստղագետը չի կարող տաքացնել աստղը կամ տեղաշարժել մոլորակը։ Մեր գիտելիքների համարյա ամբողջը գալիս է այն ամենից, ինչը տիեզերքից հասնում է մեզ․

> - **էլեկտրամագնիսական ճառագայթում**․ ռադիոալիքներ, ինֆրակարմիր, տեսանելի լույս, ուլտրամանուշակագույն, ռենտգենյան և գամմա ճառագայթներ,
> - **մասնիկներ**․ տիեզերական ճառագայթներ և նեյտրինոներ,
> - **գրավիտացիոն ալիքներ**, առաջին անգամ գրանցված 2015 թվականին,
> - **տիեզերական զոնդեր**, որոնք թռչում են դեպի մոլորակներ, գիսաստղեր և աստերոիդներ, և դրանցից Երկիր բերված նմուշներ։

Լույսը տարածվում է $c = 3 \\cdot 10^5$ կմ/վ արագությամբ՝ արագ, բայց ոչ անվերջ արագ։ Արեգակի լույսը մեզ է հասնում մոտ $8$ րոպեում, ուստի Արեգակը տեսնում ենք այնպիսին, ինչպիսին այն էր $8$ րոպե առաջ։ Որքան հեռու ենք նայում, այնքան հին է լույսը․ **հեռուն նայելը նշանակում է նայել անցյալին**։

## Լուծված օրինակներ

**Օրինակ 1։** Որքա՞ն ժամանակում է Արեգակի լույսը հասնում Երկիր ($1{,}5 \\cdot 10^8$ կմ)։

$t = \\dfrac{s}{c} = \\dfrac{1{,}5 \\cdot 10^8}{3 \\cdot 10^5} = 500$ վ $\\approx 8{,}3$ րոպե։

**Օրինակ 2։** Որքա՞ն ժամանակում է լույսը հասնում Լուսնից ($384\\,000$ կմ)։

$t = \\dfrac{3{,}84 \\cdot 10^5}{3 \\cdot 10^5} \\approx 1{,}3$ վ։ Լուսնագնացին ուղարկված ռադիոհրամանը հասնում է մոտ $1{,}3$ վ հետո, իսկ նրա պատասխանը՝ ընդհանուր առմամբ $2{,}6$ վ հետո։

**Օրինակ 3։** Անդրոմեդայի գալակտիկան գտնվում է $2{,}5$ միլիոն լուսային տարի հեռավորության վրա։ Ի՞նչ ենք տեսնում։

Լուսային տարին այն հեռավորությունն է, որը լույսն անցնում է մեկ տարում, ուստի նրա լույսը դուրս է եկել $2{,}5$ միլիոն տարի առաջ․ մենք Անդրոմեդան տեսնում ենք այնպիսին, ինչպիսին այն էր այն ժամանակ՝ առաջին մարդկանցից շատ առաջ։

## Վարժություններ

1. Աստղագիտության ո՞ր բաժինն է ուսումնասիրում մոլորակների և տիեզերական սարքերի շարժումը ձգողության ազդեցությամբ։ Ո՞րն է ուսումնասիրում ամբողջ Տիեզերքը։
2. Մարսը մոտենում է Երկրին մինչև $56$ միլիոն կմ։ Որքա՞ն ժամանակում է լույսն այդ դեպքում հասնում Մարսից։
3. «Վոյաջեր 1» զոնդը գտնվում է մոտ $24$ միլիարդ կմ հեռավորության վրա։ Որքա՞ն ժամանակում է ռադիոազդանշանը հասնում նրան։
4. Ինչո՞ւ են աստղագետները հիմնականում դիտում, ոչ թե փորձ դնում։ Նշեք տիեզերքից մեզ հասնող երեք տեսակի տեղեկություն։
5. Դասավորեք ըստ ժամանակի․ Գալիլեյի աստղադիտակը, առաջին արբանյակը, Կոպեռնիկոսի գիրքը, Նյուտոնի ձգողության օրենքը, Բյուրականի աստղադիտարանի հիմնադրումը։
6. Աստղը գտնվում է $100$ լուսային տարի հեռավորության վրա։ Եթե այն պայթել է $50$ տարի առաջ, կարո՞ղ ենք այժմ տեսնել պայթյունը։

### Պատասխաններ

1. Երկնային մեխանիկան, կոսմոլոգիան։
2. $t = 5{,}6 \\cdot 10^7 / 3 \\cdot 10^5 \\approx 187$ վ, մոտ $3$ րոպե։
3. $t = 2{,}4 \\cdot 10^{10} / 3 \\cdot 10^5 = 8 \\cdot 10^4$ վ, մոտ $22$ ժամ։
4. Աստղերն ու մոլորակները հնարավոր չէ տեղաշարժել կամ տաքացնել լաբորատորիայում։ Ճառագայթում (լույս, ռադիոալիքներ, ռենտգենյան ճառագայթներ), մասնիկներ (տիեզերական ճառագայթներ, նեյտրինոներ), գրավիտացիոն ալիքներ, նաև տիեզերական զոնդերի տվյալներ։
5. Կոպեռնիկոս (1543), Գալիլեյ (1609), Նյուտոն (1687), Բյուրական (1946), առաջին արբանյակ (1957)։
6. Ոչ․ նրա լույսին պետք է $100$ տարի, ուստի պայթյունը կտեսնենք $50$ տարի հետո։`,
        ru: `## Наука о небе

**Астрономия** — наука о небесных телах и о Вселенной в целом: где они находятся, как движутся, из чего состоят, как возникли и как меняются. Это древнейшая естественная наука: люди следили за Солнцем, Луной и звёздами, чтобы считать дни, планировать урожай и находить дорогу, задолго до того, как начали писать книги.

| Раздел | Что изучает |
|---|---|
| **Астрометрия** | положения звёзд и планет, расстояния, измерение времени |
| **Небесная механика** | движение тел под действием тяготения: планет, спутников, космических аппаратов |
| **Астрофизика** | физическую природу звёзд, планет и галактик: температуру, состав, энергию |
| **Планетология** | планеты, спутники и малые тела Солнечной системы |
| **Космология** | строение, происхождение и эволюцию всей Вселенной |

## Краткая история

> - **Древность.** Вавилонские жрецы веками записывали затмения; у египтян был календарь из 365 дней.
> - **Древняя Греция.** Аристарх (III век до н. э.) предположил, что Земля обращается вокруг Солнца; Гиппарх составил первый звёздный каталог; «Альмагест» Птолемея (II век н. э.) описывал геоцентрический мир, которым пользовались 1400 лет.
> - **Армения.** В VII веке **Анания Ширакаци** учил, что Земля шарообразна, объяснял затмения тенями Земли и Луны и писал, что Млечный Путь — это скопление густо расположенных слабо светящихся звёзд.
> - **Научная революция.** Коперник поместил в центр Солнце (1543), Галилей направил телескоп на небо (1609), Кеплер открыл законы движения планет (1609–1619), а Ньютон объяснил их тяготением (1687).
> - **XX век.** Хаббл открыл, что галактики удаляются друг от друга (1929); **Виктор Амбарцумян** основал **Бюраканскую обсерваторию** (1946); первый искусственный спутник полетел в 1957 году, Юрий Гагарин — в 1961-м; в 1969 году люди прошли по Луне.
> - **Сегодня.** Космические телескопы («Хаббл» с 1990 года, «Джеймс Уэбб» с 2021-го), роботы на Марсе и детекторы гравитационных волн продолжают делать открытия.

## Наблюдение вместо опыта

Химик может нагреть вещество, а астроном не может нагреть звезду или сдвинуть планету. Почти всё, что мы знаем, приходит к нам из космоса:

> - **электромагнитное излучение**: радиоволны, инфракрасное, видимый свет, ультрафиолет, рентгеновские и гамма-лучи;
> - **частицы**: космические лучи и нейтрино;
> - **гравитационные волны**, впервые зарегистрированные в 2015 году;
> - **космические зонды**, летящие к планетам, кометам и астероидам, и доставленные с них образцы.

Свет распространяется со скоростью $c = 3 \\cdot 10^5$ км/с — быстро, но не бесконечно быстро. Свет Солнца идёт до нас около $8$ минут, поэтому мы видим Солнце таким, каким оно было $8$ минут назад. Чем дальше мы смотрим, тем старше свет: **взгляд вдаль — это взгляд в прошлое**.

## Разобранные примеры

**Пример 1.** За какое время солнечный свет доходит до Земли ($1{,}5 \\cdot 10^8$ км)?

$t = \\dfrac{s}{c} = \\dfrac{1{,}5 \\cdot 10^8}{3 \\cdot 10^5} = 500$ с $\\approx 8{,}3$ мин.

**Пример 2.** За какое время идёт свет от Луны ($384\\,000$ км)?

$t = \\dfrac{3{,}84 \\cdot 10^5}{3 \\cdot 10^5} \\approx 1{,}3$ с. Радиокоманда луноходу приходит примерно через $1{,}3$ с, а его ответ — через $2{,}6$ с в сумме.

**Пример 3.** Галактика Андромеды находится в $2{,}5$ млн световых лет. Что мы видим?

Световой год — расстояние, которое свет проходит за год, значит, её свет вышел $2{,}5$ млн лет назад: мы видим Андромеду такой, какой она была тогда, задолго до первых людей.

## Упражнения

1. Какой раздел астрономии изучает движение планет и космических аппаратов под действием тяготения? Какой изучает всю Вселенную?
2. Марс подходит к Земле на $56$ млн км. Сколько времени идёт свет от Марса в этом случае?
3. Зонд «Вояджер-1» находится примерно в $24$ млрд км. Сколько времени идёт до него радиосигнал?
4. Почему астрономы в основном наблюдают, а не ставят опыты? Назовите три вида информации, приходящей к нам из космоса.
5. Расположите по времени: телескоп Галилея, первый спутник, книга Коперника, закон тяготения Ньютона, основание Бюраканской обсерватории.
6. Звезда находится в $100$ световых годах. Если она взорвалась $50$ лет назад, можем ли мы сейчас увидеть взрыв?

### Ответы

1. Небесная механика; космология.
2. $t = 5{,}6 \\cdot 10^7 / 3 \\cdot 10^5 \\approx 187$ с, около $3$ минут.
3. $t = 2{,}4 \\cdot 10^{10} / 3 \\cdot 10^5 = 8 \\cdot 10^4$ с, около $22$ часов.
4. Звёзды и планеты нельзя сдвинуть или нагреть в лаборатории. Излучение (свет, радиоволны, рентген), частицы (космические лучи, нейтрино), гравитационные волны; также данные космических зондов.
5. Коперник (1543), Галилей (1609), Ньютон (1687), Бюракан (1946), первый спутник (1957).
6. Нет: его свету нужно $100$ лет, поэтому взрыв мы увидим через $50$ лет.`,
      },
      [
        q(t("Which branch of astronomy studies the physical nature of stars?", "Աստղագիտության ո՞ր բաժինն է ուսումնասիրում աստղերի ֆիզիկական բնույթը։", "Какой раздел астрономии изучает физическую природу звёзд?"), [t("Astrophysics", "Աստղաֆիզիկան", "Астрофизика"), t("Astrometry", "Աստղաչափությունը", "Астрометрия"), t("Celestial mechanics", "Երկնային մեխանիկան", "Небесная механика")], 0),
        q(t("Who founded the Byurakan Observatory in 1946?", "Ո՞վ հիմնեց Բյուրականի աստղադիտարանը 1946 թվականին։", "Кто основал Бюраканскую обсерваторию в 1946 году?"), [t("Viktor Ambartsumian", "Վիկտոր Համբարձումյանը", "Виктор Амбарцумян"), t("Anania Shirakatsi", "Անանիա Շիրակացին", "Анания Ширакаци"), t("Edwin Hubble", "Էդվին Հաբլը", "Эдвин Хаббл")], 0),
        q(t("Anania Shirakatsi wrote that the Milky Way is…", "Անանիա Շիրակացին գրել է, որ Ծիր Կաթինը…", "Анания Ширакаци писал, что Млечный Путь — это…"), [t("a mass of densely packed faint stars", "խիտ դասավորված աղոտ աստղերի կուտակում է", "скопление густо расположенных слабых звёзд"), t("a river of milk", "կաթի գետ է", "молочная река"), t("a cloud in the air", "ամպ է օդում", "облако в воздухе")], 0),
        q(t("Sunlight reaches the Earth in about…", "Արեգակի լույսը Երկիր է հասնում մոտ…", "Солнечный свет доходит до Земли примерно за…"), [t("8 minutes", "8 րոպեում", "8 минут"), t("1 second", "1 վայրկյանում", "1 секунду"), t("1 day", "1 օրում", "1 сутки")], 0),
        q(t("Why do we see distant galaxies as they were long ago?", "Ինչո՞ւ ենք հեռավոր գալակտիկաները տեսնում այնպիսին, ինչպիսին դրանք էին վաղուց։", "Почему далёкие галактики мы видим такими, какими они были давно?"), [t("Their light needs a long time to reach us", "Նրանց լույսին երկար ժամանակ է պետք մեզ հասնելու համար", "Их свету нужно много времени, чтобы дойти до нас"), t("They move very slowly", "Նրանք շատ դանդաղ են շարժվում", "Они очень медленно движутся"), t("Telescopes show old photographs", "Աստղադիտակները հին լուսանկարներ են ցույց տալիս", "Телескопы показывают старые фотографии")], 0),
        q(t("Which of these does NOT bring us information from space?", "Սրանցից ո՞րը մեզ տեղեկություն ՉԻ բերում տիեզերքից։", "Что из этого НЕ приносит нам информацию из космоса?"), [t("Experiments that heat a star in a laboratory", "Լաբորատորիայում աստղը տաքացնող փորձերը", "Опыты, нагревающие звезду в лаборатории"), t("Gravitational waves", "Գրավիտացիոն ալիքները", "Гравитационные волны"), t("Neutrinos", "Նեյտրինոները", "Нейтрино")], 0),
      ],
    ),
    lesson(
      "telescopes",
      ["Telescopes and observatories", "Աստղադիտակներ և աստղադիտարաններ", "Телескопы и обсерватории"],
      {
        en: ["Explain the two main jobs of a telescope: gathering light and resolving detail", "Compare refractors and reflectors and compute light grasp, magnification and resolution", "Explain why some telescopes work on mountains and others in space, and name major observatories including Byurakan"],
        hy: ["Բացատրել աստղադիտակի երկու հիմնական խնդիրները՝ լույս հավաքել և մանրամասներ տարբերել", "Համեմատել ռեֆրակտորներն ու ռեֆլեկտորները, հաշվել լուսաուժը, խոշորացումը և լուծունակությունը", "Բացատրել, թե ինչու են որոշ աստղադիտակներ աշխատում լեռներում, իսկ մյուսները՝ տիեզերքում, և նշել խոշոր աստղադիտարաններ, այդ թվում Բյուրականը"],
        ru: ["Объяснять две главные задачи телескопа: собирать свет и различать детали", "Сравнивать рефракторы и рефлекторы, вычислять светосилу, увеличение и разрешающую способность", "Объяснять, почему одни телескопы работают в горах, а другие в космосе, и называть крупные обсерватории, включая Бюракан"],
      },
      {
        en: `## What a telescope does

A telescope has two main jobs, and magnifying is not the first of them.

> 1. **Gather light.** At night the pupil of the eye is about $6$ mm wide. A telescope with an objective of diameter $D$ collects more light in proportion to its area, that is to $D^2$, so it shows much fainter objects.
> 2. **Resolve detail.** Because light is a wave, even a perfect telescope blurs a point into a tiny disc. The smallest angle it can separate is about $$\\theta'' \\approx \\dfrac{140}{D},$$ with $\\theta$ in arcseconds and $D$ in millimetres (for visible light). The bigger the objective, the finer the detail.

The **magnification** is the ratio of the focal lengths of the objective and the eyepiece: $\\Gamma = \\dfrac{F}{f}$. Changing the eyepiece changes the magnification, but too much of it only magnifies the blur.

## Refractors and reflectors

| | Refractor | Reflector |
|---|---|---|
| Objective | a lens | a concave mirror |
| First built by | Galileo, 1609 | Newton, 1668 |
| Strengths | sharp, sealed tube | no colour fringes, a mirror can be supported from behind, so it can be huge |
| Largest | about 1 m (Yerkes, USA) | 10.4 m (Canary Islands); the 39 m Extremely Large Telescope is being built in Chile |

All large modern telescopes are reflectors. Their mirrors are often made of segments, and computers bend them hundreds of times a second to undo the twinkling caused by the air (**adaptive optics**). Instead of the eye, they use digital cameras and **spectrographs**, which split light into a spectrum.

## Mountains and space

Air blurs images, glows at night and absorbs most kinds of radiation. Only visible light and radio waves pass through it well. So:

> - optical observatories are built high, in dry places with dark skies: the **Byurakan Observatory** stands at $1400$ m on Mount Aragats, with a $2{.}6$ m reflector and a $1$ m Schmidt camera; Russia's $6$ m BTA works in the North Caucasus;
> - **radio telescopes** can work on the ground, even in daytime and through clouds; the largest single dish, FAST in China, is $500$ m across;
> - infrared, ultraviolet, X-ray and gamma-ray telescopes must fly **in space**: the **Hubble** telescope ($2{.}4$ m mirror, 1990) and the **James Webb** telescope ($6{.}5$ m, infrared, 2021), which works $1{.}5$ million km from the Earth.

Armenian astronomers took part in early space astronomy: the **Orion-1** (1971) and **Orion-2** (1973) observatories, built under **Grigor Gurzadyan** at the Garni laboratory, flew on Soviet spacecraft and recorded the ultraviolet spectra of thousands of stars.

## Worked examples

**Example 1.** How many times more light does the $2{.}6$ m Byurakan telescope collect than the eye?

$\\left(\\dfrac{2600}{6}\\right)^2 \\approx 433^2 \\approx 1{.}9 \\cdot 10^5$ times.

**Example 2.** The theoretical resolution of the same telescope?

$\\theta'' \\approx \\dfrac{140}{2600} \\approx 0{.}05''$. In practice the air limits it to about $1''$, which is why the sharpest images come from space or from adaptive optics.

**Example 3.** A telescope has $F = 1200$ mm. What does an eyepiece of $f = 20$ mm give?

$\\Gamma = \\dfrac{1200}{20} = 60$ times.

**Example 4.** How much bigger is the light-collecting area of Webb than of Hubble?

$\\left(\\dfrac{6{.}5}{2{.}4}\\right)^2 \\approx 7{.}3$ times.

## Exercises

1. What are the two main jobs of a telescope? Why is magnification less important?
2. How many times more light does a $20$ cm amateur telescope collect than the eye?
3. A telescope has $F = 900$ mm. Find the magnification with eyepieces of $25$ mm and $9$ mm.
4. Give two reasons why all the largest telescopes are reflectors.
5. Why do X-ray telescopes work in space, while radio telescopes can stay on the ground?
6. Find the theoretical resolution of the $6$ m BTA telescope.

### Answers

1. To gather light and to resolve detail. Magnifying a blurred image does not show new detail.
2. $(200/6)^2 \\approx 1100$ times.
3. $900/25 = 36$ times; $900/9 = 100$ times.
4. Mirrors have no colour fringes, and they can be supported from behind, so they can be made very large (also from segments).
5. The atmosphere absorbs X-rays but lets radio waves through.
6. $\\theta'' \\approx 140/6000 \\approx 0{.}02''$.`,
        hy: `## Ինչ է անում աստղադիտակը

Աստղադիտակն ունի երկու հիմնական խնդիր, և խոշորացնելը դրանցից առաջինը չէ։

> 1. **Լույս հավաքել։** Գիշերը աչքի բիբի տրամագիծը մոտ $6$ մմ է։ $D$ տրամագծով օբյեկտիվով աստղադիտակը լույս է հավաքում իր մակերեսին, այսինքն՝ $D^2$-ին համեմատական, ուստի ցույց է տալիս շատ ավելի աղոտ մարմիններ։
> 2. **Մանրամասներ տարբերել։** Քանի որ լույսն ալիք է, նույնիսկ կատարյալ աստղադիտակը կետը վերածում է փոքրիկ սկավառակի։ Ամենափոքր անկյունը, որը նա կարող է տարբերել, մոտավորապես $$\\theta'' \\approx \\dfrac{140}{D}$$ է, որտեղ $\\theta$-ն աղեղային վայրկյաններով է, իսկ $D$-ն՝ միլիմետրերով (տեսանելի լույսի համար)։ Որքան մեծ է օբյեկտիվը, այնքան նուրբ են մանրամասները։

**Խոշորացումը** օբյեկտիվի և ակնադիտակի կիզակետային հեռավորությունների հարաբերությունն է՝ $\\Gamma = \\dfrac{F}{f}$։ Ակնադիտակը փոխելով՝ փոխվում է խոշորացումը, բայց չափազանց մեծ խոշորացումը միայն մեծացնում է աղոտությունը։

## Ռեֆրակտորներ և ռեֆլեկտորներ

| | Ռեֆրակտոր | Ռեֆլեկտոր |
|---|---|---|
| Օբյեկտիվ | ոսպնյակ | գոգավոր հայելի |
| Առաջինը կառուցել է | Գալիլեյը, 1609 | Նյուտոնը, 1668 |
| Առավելություններ | հստակ պատկեր, փակ խողովակ | գունավոր եզրեր չկան, հայելին կարելի է հենել հետևից, ուստի այն կարող է հսկայական լինել |
| Ամենամեծը | մոտ 1 մ (Յերքս, ԱՄՆ) | 10,4 մ (Կանարյան կղզիներ), 39 մ-անոց Ծայրահեղ մեծ աստղադիտակը կառուցվում է Չիլիում |

Բոլոր խոշոր ժամանակակից աստղադիտակները ռեֆլեկտորներ են։ Նրանց հայելիները հաճախ կազմված են հատվածներից, և համակարգիչները դրանք վայրկյանում հարյուրավոր անգամներ ծռում են՝ վերացնելու օդի պատճառած առկայծումը (**ադապտիվ օպտիկա**)։ Աչքի փոխարեն օգտագործվում են թվային տեսախցիկներ և **սպեկտրագրեր**, որոնք լույսը տարրալուծում են սպեկտրի։

## Լեռներ և տիեզերք

Օդը աղավաղում է պատկերները, գիշերը լուսարձակում է և կլանում ճառագայթման տեսակների մեծ մասը։ Լավ անցնում են միայն տեսանելի լույսը և ռադիոալիքները։ Ուստի․

> - օպտիկական աստղադիտարանները կառուցում են բարձր, չոր, մութ երկնքով վայրերում․ **Բյուրականի աստղադիտարանը** գտնվում է Արագածի լանջին՝ $1400$ մ բարձրության վրա, $2{,}6$ մ ռեֆլեկտորով և $1$ մ Շմիդտի խցիկով, Ռուսաստանի $6$ մ-անոց ԲՏԱ-ն աշխատում է Հյուսիսային Կովկասում,
> - **ռադիոաստղադիտակները** կարող են աշխատել Երկրի վրա՝ նույնիսկ ցերեկը և ամպերի միջով, ամենամեծ միասնական ափսեն՝ չինական FAST-ը, ունի $500$ մ տրամագիծ,
> - ինֆրակարմիր, ուլտրամանուշակագույն, ռենտգենյան և գամմա աստղադիտակները պետք է թռչեն **տիեզերքում**․ **Հաբլ** աստղադիտակը ($2{,}4$ մ հայելի, 1990) և **Ջեյմս Ուեբ** աստղադիտակը ($6{,}5$ մ, ինֆրակարմիր, 2021), որն աշխատում է Երկրից $1{,}5$ միլիոն կմ հեռավորության վրա։

Հայ աստղագետները մասնակցել են տիեզերական աստղագիտության առաջին քայլերին․ **Գրիգոր Գուրզադյանի** ղեկավարությամբ Գառնիի լաբորատորիայում ստեղծված **«Օրիոն-1»** (1971) և **«Օրիոն-2»** (1973) աստղադիտարանները թռել են խորհրդային տիեզերանավերով և գրանցել հազարավոր աստղերի ուլտրամանուշակագույն սպեկտրներ։

## Լուծված օրինակներ

**Օրինակ 1։** Բյուրականի $2{,}6$ մ աստղադիտակը քանի՞ անգամ ավելի շատ լույս է հավաքում, քան աչքը։

$\\left(\\dfrac{2600}{6}\\right)^2 \\approx 433^2 \\approx 1{,}9 \\cdot 10^5$ անգամ։

**Օրինակ 2։** Որքա՞ն է նույն աստղադիտակի տեսական լուծունակությունը։

$\\theta'' \\approx \\dfrac{140}{2600} \\approx 0{,}05''$։ Գործնականում օդը այն սահմանափակում է մոտ $1''$-ով, ահա թե ինչու ամենահստակ պատկերները ստացվում են տիեզերքից կամ ադապտիվ օպտիկայով։

**Օրինակ 3։** Աստղադիտակի համար $F = 1200$ մմ։ Ի՞նչ խոշորացում է տալիս $f = 20$ մմ ակնադիտակը։

$\\Gamma = \\dfrac{1200}{20} = 60$ անգամ։

**Օրինակ 4։** Ուեբի լույս հավաքող մակերեսը քանի՞ անգամ է մեծ Հաբլինից։

$\\left(\\dfrac{6{,}5}{2{,}4}\\right)^2 \\approx 7{,}3$ անգամ։

## Վարժություններ

1. Որո՞նք են աստղադիտակի երկու հիմնական խնդիրները։ Ինչո՞ւ է խոշորացումը պակաս կարևոր։
2. $20$ սմ սիրողական աստղադիտակը քանի՞ անգամ ավելի շատ լույս է հավաքում, քան աչքը։
3. Աստղադիտակի համար $F = 900$ մմ։ Գտեք խոշորացումը $25$ մմ և $9$ մմ ակնադիտակներով։
4. Նշեք երկու պատճառ, թե ինչու են բոլոր ամենամեծ աստղադիտակները ռեֆլեկտորներ։
5. Ինչո՞ւ են ռենտգենյան աստղադիտակներն աշխատում տիեզերքում, իսկ ռադիոաստղադիտակները կարող են մնալ Երկրի վրա։
6. Գտեք $6$ մ-անոց ԲՏԱ աստղադիտակի տեսական լուծունակությունը։

### Պատասխաններ

1. Լույս հավաքել և մանրամասներ տարբերել։ Աղոտ պատկերը խոշորացնելը նոր մանրամասներ ցույց չի տալիս։
2. $(200/6)^2 \\approx 1100$ անգամ։
3. $900/25 = 36$ անգամ, $900/9 = 100$ անգամ։
4. Հայելիները գունավոր եզրեր չեն տալիս, և դրանք կարելի է հենել հետևից, ուստի կարող են շատ մեծ լինել (նաև հատվածներից)։
5. Մթնոլորտը կլանում է ռենտգենյան ճառագայթները, բայց թողնում է ռադիոալիքները։
6. $\\theta'' \\approx 140/6000 \\approx 0{,}02''$։`,
        ru: `## Что делает телескоп

У телескопа две главные задачи, и увеличение — не первая из них.

> 1. **Собирать свет.** Ночью зрачок глаза имеет диаметр около $6$ мм. Телескоп с объективом диаметра $D$ собирает свет пропорционально площади, то есть $D^2$, поэтому показывает гораздо более слабые объекты.
> 2. **Различать детали.** Свет — волна, поэтому даже идеальный телескоп размывает точку в крошечный кружок. Наименьший угол, который он различает, примерно равен $$\\theta'' \\approx \\dfrac{140}{D},$$ где $\\theta$ в угловых секундах, а $D$ в миллиметрах (для видимого света). Чем больше объектив, тем тоньше детали.

**Увеличение** — отношение фокусных расстояний объектива и окуляра: $\\Gamma = \\dfrac{F}{f}$. Меняя окуляр, меняют увеличение, но слишком большое увеличение лишь увеличивает размытие.

## Рефракторы и рефлекторы

| | Рефрактор | Рефлектор |
|---|---|---|
| Объектив | линза | вогнутое зеркало |
| Первым построил | Галилей, 1609 | Ньютон, 1668 |
| Достоинства | чёткое изображение, закрытая труба | нет цветных каёмок, зеркало можно поддерживать сзади, поэтому оно может быть огромным |
| Крупнейший | около 1 м (Йеркс, США) | 10,4 м (Канарские острова); 39-метровый Чрезвычайно большой телескоп строится в Чили |

Все крупные современные телескопы — рефлекторы. Их зеркала часто составлены из сегментов, а компьютеры сотни раз в секунду изгибают их, убирая дрожание изображения из-за воздуха (**адаптивная оптика**). Вместо глаза используют цифровые камеры и **спектрографы**, разлагающие свет в спектр.

## Горы и космос

Воздух размывает изображения, светится ночью и поглощает большую часть видов излучения. Хорошо проходят лишь видимый свет и радиоволны. Поэтому:

> - оптические обсерватории строят высоко, в сухих местах с тёмным небом: **Бюраканская обсерватория** стоит на склоне Арагаца на высоте $1400$ м, у неё $2{,}6$-метровый рефлектор и $1$-метровая камера Шмидта; российский $6$-метровый БТА работает на Северном Кавказе;
> - **радиотелескопы** работают на Земле, даже днём и сквозь облака; крупнейшая одиночная антенна, китайский FAST, имеет диаметр $500$ м;
> - инфракрасные, ультрафиолетовые, рентгеновские и гамма-телескопы должны летать **в космосе**: телескоп **«Хаббл»** (зеркало $2{,}4$ м, 1990) и телескоп **«Джеймс Уэбб»** ($6{,}5$ м, инфракрасный, 2021), работающий в $1{,}5$ млн км от Земли.

Армянские астрономы участвовали в первых шагах космической астрономии: обсерватории **«Орион-1»** (1971) и **«Орион-2»** (1973), созданные под руководством **Григора Гурзадяна** в Гарнийской лаборатории, летали на советских космических кораблях и записали ультрафиолетовые спектры тысяч звёзд.

## Разобранные примеры

**Пример 1.** Во сколько раз больше света собирает $2{,}6$-метровый телескоп Бюракана, чем глаз?

$\\left(\\dfrac{2600}{6}\\right)^2 \\approx 433^2 \\approx 1{,}9 \\cdot 10^5$ раз.

**Пример 2.** Теоретическое разрешение того же телескопа?

$\\theta'' \\approx \\dfrac{140}{2600} \\approx 0{,}05''$. На практике воздух ограничивает его примерно $1''$, поэтому самые чёткие изображения получают из космоса или с адаптивной оптикой.

**Пример 3.** У телескопа $F = 1200$ мм. Какое увеличение даёт окуляр $f = 20$ мм?

$\\Gamma = \\dfrac{1200}{20} = 60$ раз.

**Пример 4.** Во сколько раз собирающая площадь «Уэбба» больше, чем у «Хаббла»?

$\\left(\\dfrac{6{,}5}{2{,}4}\\right)^2 \\approx 7{,}3$ раза.

## Упражнения

1. Каковы две главные задачи телескопа? Почему увеличение менее важно?
2. Во сколько раз больше света собирает $20$-сантиметровый любительский телескоп, чем глаз?
3. У телескопа $F = 900$ мм. Найдите увеличение с окулярами $25$ мм и $9$ мм.
4. Назовите две причины, почему все крупнейшие телескопы — рефлекторы.
5. Почему рентгеновские телескопы работают в космосе, а радиотелескопы могут оставаться на Земле?
6. Найдите теоретическое разрешение $6$-метрового телескопа БТА.

### Ответы

1. Собирать свет и различать детали. Увеличение размытого изображения не показывает новых деталей.
2. $(200/6)^2 \\approx 1100$ раз.
3. $900/25 = 36$ раз; $900/9 = 100$ раз.
4. Зеркала не дают цветных каёмок, и их можно поддерживать сзади, поэтому они могут быть очень большими (в том числе из сегментов).
5. Атмосфера поглощает рентгеновские лучи, но пропускает радиоволны.
6. $\\theta'' \\approx 140/6000 \\approx 0{,}02''$.`,
      },
      [
        q(t("The most important job of a large telescope is to…", "Խոշոր աստղադիտակի ամենակարևոր խնդիրն է…", "Самая важная задача большого телескопа —…"), [t("gather light", "լույս հավաքել", "собирать свет"), t("magnify as much as possible", "հնարավորինս շատ խոշորացնել", "увеличивать как можно сильнее"), t("change the colour of stars", "փոխել աստղերի գույնը", "менять цвет звёзд")], 0),
        q(t("If the diameter of the objective doubles, the light collected grows…", "Եթե օբյեկտիվի տրամագիծը կրկնապատկվի, հավաքված լույսը կմեծանա…", "Если диаметр объектива удвоить, собранный свет вырастет…"), [t("4 times", "4 անգամ", "в 4 раза"), t("2 times", "2 անգամ", "в 2 раза"), t("8 times", "8 անգամ", "в 8 раз")], 0),
        q(t("A telescope with F = 1000 mm and an eyepiece of 10 mm magnifies…", "F = 1000 մմ աստղադիտակը 10 մմ ակնադիտակով խոշորացնում է…", "Телескоп с F = 1000 мм и окуляром 10 мм увеличивает…"), [t("100 times", "100 անգամ", "в 100 раз"), t("10 times", "10 անգամ", "в 10 раз"), t("1000 times", "1000 անգամ", "в 1000 раз")], 0),
        q(t("The objective of a reflector is…", "Ռեֆլեկտորի օբյեկտիվը…", "Объектив рефлектора — это…"), [t("a concave mirror", "գոգավոր հայելի է", "вогнутое зеркало"), t("a lens", "ոսպնյակ է", "линза"), t("a prism", "պրիզմա է", "призма")], 0),
        q(t("Which telescopes must work in space?", "Ո՞ր աստղադիտակները պետք է աշխատեն տիեզերքում։", "Какие телескопы должны работать в космосе?"), [t("X-ray telescopes", "Ռենտգենյան աստղադիտակները", "Рентгеновские"), t("Radio telescopes", "Ռադիոաստղադիտակները", "Радиотелескопы"), t("Amateur refractors", "Սիրողական ռեֆրակտորները", "Любительские рефракторы")], 0),
        q(t("The Byurakan Observatory stands on the slope of…", "Բյուրականի աստղադիտարանը գտնվում է … լանջին։", "Бюраканская обсерватория стоит на склоне…"), [t("Mount Aragats", "Արագածի", "Арагаца"), t("Mount Ararat", "Արարատի", "Арарата"), t("Mount Elbrus", "Էլբրուսի", "Эльбруса")], 0),
      ],
    ),
    lesson(
      "cosmic-distances",
      ["The scale of the Universe", "Տիեզերքի մասշտաբները", "Масштабы Вселенной"],
      {
        en: ["Use the units of distance in astronomy: the astronomical unit, the light-year and the parsec", "Convert between kilometres, astronomical units and light-years using powers of ten", "Describe the ladder of scales from the Earth to the observable Universe with a scale model"],
        hy: ["Օգտագործել աստղագիտության հեռավորության միավորները՝ աստղագիտական միավոր, լուսային տարի և պարսեկ", "Տասի աստիճաններով փոխարկել կիլոմետրերը, աստղագիտական միավորները և լուսային տարիները", "Մասշտաբային մոդելով նկարագրել մասշտաբների սանդուղքը՝ Երկրից մինչև դիտելի Տիեզերք"],
        ru: ["Использовать единицы расстояний в астрономии: астрономическую единицу, световой год и парсек", "Переводить километры, астрономические единицы и световые годы с помощью степеней десяти", "Описывать лестницу масштабов от Земли до наблюдаемой Вселенной с помощью масштабной модели"],
      },
      {
        en: `## Units of distance

Kilometres are fine on the Earth, but in space the numbers become too large. Astronomers use three bigger units.

| Unit | Definition | Value |
|---|---|---|
| **Astronomical unit**, AU | the mean distance from the Earth to the Sun | $1{.}496 \\cdot 10^8$ km |
| **Light-year**, ly | the distance light travels in one year | $9{.}46 \\cdot 10^{12}$ km $\\approx 63\\,200$ AU |
| **Parsec**, pc | the distance from which 1 AU is seen at an angle of $1''$ (see the lesson on star distances) | $3{.}26$ ly $\\approx 206\\,000$ AU |

Inside the Solar system we use AU; for stars, light-years and parsecs; for galaxies, millions of them (Mly, Mpc).

## The ladder of scales

| Object | Size or distance |
|---|---|
| Diameter of the Earth | $12\\,742$ km |
| Earth to Moon | $384\\,400$ km $\\approx 1{.}3$ light-seconds |
| Earth to Sun | $1$ AU $\\approx 8{.}3$ light-minutes |
| Sun to Neptune | $30$ AU $\\approx 4$ light-hours |
| Nearest star, Proxima Centauri | $4{.}24$ ly $= 1{.}30$ pc |
| Diameter of our Galaxy | about $100\\,000$ ly |
| Andromeda galaxy | $2{.}5$ million ly |
| Edge of the observable Universe | about $46$ billion ly |

Each step is a huge jump. Space is mostly **empty**: stars are separated by distances tens of millions of times larger than their own sizes.

## A scale model

Shrink the Sun to a football $22$ cm across. The scale is then about $1 : 6{.}3 \\cdot 10^9$:

> - the Earth is a grain of $2$ mm, $24$ m from the ball;
> - Jupiter is a marble of $2$ cm, $123$ m away;
> - Neptune is a bead of $8$ mm, $710$ m away;
> - Proxima Centauri is another small ball about $6300$ km away, farther than from Yerevan to Beijing.

## Worked examples

**Example 1.** One light-year in kilometres. A year has $3{.}16 \\cdot 10^7$ s:

$1$ ly $= 3 \\cdot 10^5 \\cdot 3{.}16 \\cdot 10^7 \\approx 9{.}5 \\cdot 10^{12}$ km.

**Example 2.** One light-year in AU:

$\\dfrac{9{.}46 \\cdot 10^{12}}{1{.}496 \\cdot 10^8} \\approx 63\\,200$ AU.

**Example 3.** Voyager 1 flies at about $17$ km/s. How long would it take to reach Proxima Centauri ($4{.}0 \\cdot 10^{13}$ km)?

$t = \\dfrac{4{.}0 \\cdot 10^{13}}{17} \\approx 2{.}4 \\cdot 10^{12}$ s $\\approx 75\\,000$ years.

## Exercises

1. Neptune is $30$ AU from the Sun. Express this in kilometres and in light-hours ($1$ light-hour $\\approx 1{.}08 \\cdot 10^9$ km).
2. How many kilometres are there in one light-minute?
3. Sirius is $8{.}6$ ly away. How many AU is that?
4. In the football model, how far from the ball would Mars be ($1{.}52$ AU)?
5. Put in order of distance from the Earth: the centre of our Galaxy ($26\\,000$ ly), the Moon, Andromeda, Proxima Centauri, Neptune.
6. How many years would a car at $100$ km/h need to drive $1$ AU?

### Answers

1. $30 \\cdot 1{.}5 \\cdot 10^8 = 4{.}5 \\cdot 10^9$ km $\\approx 4{.}2$ light-hours.
2. $3 \\cdot 10^5 \\cdot 60 = 1{.}8 \\cdot 10^7$ km.
3. $8{.}6 \\cdot 63\\,200 \\approx 5{.}4 \\cdot 10^5$ AU.
4. $1{.}52 \\cdot 24 \\approx 36$ m.
5. Moon, Neptune, Proxima Centauri, centre of the Galaxy, Andromeda.
6. $1{.}5 \\cdot 10^8 / 100 = 1{.}5 \\cdot 10^6$ h $\\approx 171$ years.`,
        hy: `## Հեռավորության միավորներ

Կիլոմետրերը հարմար են Երկրի վրա, բայց տիեզերքում թվերը չափազանց մեծ են դառնում։ Աստղագետներն օգտագործում են երեք ավելի մեծ միավոր։

| Միավոր | Սահմանում | Արժեք |
|---|---|---|
| **Աստղագիտական միավոր**, ա․մ․ | Երկրից Արեգակ միջին հեռավորությունը | $1{,}496 \\cdot 10^8$ կմ |
| **Լուսային տարի**, լ․տ․ | հեռավորությունը, որը լույսն անցնում է մեկ տարում | $9{,}46 \\cdot 10^{12}$ կմ $\\approx 63\\,200$ ա․մ․ |
| **Պարսեկ**, պկ | հեռավորությունը, որից 1 ա․մ․-ը երևում է $1''$ անկյան տակ (տե՛ս աստղերի հեռավորությունների դասը) | $3{,}26$ լ․տ․ $\\approx 206\\,000$ ա․մ․ |

Արեգակնային համակարգի ներսում օգտագործում ենք ա․մ․, աստղերի համար՝ լուսային տարիներ և պարսեկներ, գալակտիկաների համար՝ դրանց միլիոնները (Մլ․տ․, Մպկ)։

## Մասշտաբների սանդուղքը

| Մարմին | Չափ կամ հեռավորություն |
|---|---|
| Երկրի տրամագիծը | $12\\,742$ կմ |
| Երկրից Լուսին | $384\\,400$ կմ $\\approx 1{,}3$ լուսային վայրկյան |
| Երկրից Արեգակ | $1$ ա․մ․ $\\approx 8{,}3$ լուսային րոպե |
| Արեգակից Նեպտուն | $30$ ա․մ․ $\\approx 4$ լուսային ժամ |
| Մոտակա աստղը՝ Պրոքսիմա Կենտավրոսը | $4{,}24$ լ․տ․ $= 1{,}30$ պկ |
| Մեր Գալակտիկայի տրամագիծը | մոտ $100\\,000$ լ․տ․ |
| Անդրոմեդայի գալակտիկան | $2{,}5$ միլիոն լ․տ․ |
| Դիտելի Տիեզերքի եզրը | մոտ $46$ միլիարդ լ․տ․ |

Յուրաքանչյուր քայլ հսկայական թռիչք է։ Տիեզերքը հիմնականում **դատարկ** է․ աստղերը միմյանցից բաժանված են իրենց չափերից տասնյակ միլիոնավոր անգամ մեծ հեռավորություններով։

## Մասշտաբային մոդել

Արեգակը փոքրացնենք մինչև $22$ սմ տրամագծով ֆուտբոլի գնդակ։ Մասշտաբը կլինի մոտ $1 : 6{,}3 \\cdot 10^9$․

> - Երկիրը $2$ մմ-անոց հատիկ է գնդակից $24$ մ հեռավորության վրա,
> - Յուպիտերը $2$ սմ-անոց ապակե գնդիկ է $123$ մ հեռավորության վրա,
> - Նեպտունը $8$ մմ-անոց ուլունք է $710$ մ հեռավորության վրա,
> - Պրոքսիմա Կենտավրոսը մեկ այլ փոքր գնդակ է մոտ $6300$ կմ հեռավորության վրա՝ ավելի հեռու, քան Երևանից Պեկին։

## Լուծված օրինակներ

**Օրինակ 1։** Մեկ լուսային տարին կիլոմետրերով։ Տարին ունի $3{,}16 \\cdot 10^7$ վ․

$1$ լ․տ․ $= 3 \\cdot 10^5 \\cdot 3{,}16 \\cdot 10^7 \\approx 9{,}5 \\cdot 10^{12}$ կմ։

**Օրինակ 2։** Մեկ լուսային տարին ա․մ․-ով․

$\\dfrac{9{,}46 \\cdot 10^{12}}{1{,}496 \\cdot 10^8} \\approx 63\\,200$ ա․մ․։

**Օրինակ 3։** «Վոյաջեր 1»-ը թռչում է մոտ $17$ կմ/վ արագությամբ։ Որքա՞ն ժամանակում այն կհասներ Պրոքսիմա Կենտավրոսին ($4{,}0 \\cdot 10^{13}$ կմ)։

$t = \\dfrac{4{,}0 \\cdot 10^{13}}{17} \\approx 2{,}4 \\cdot 10^{12}$ վ $\\approx 75\\,000$ տարի։

## Վարժություններ

1. Նեպտունը Արեգակից $30$ ա․մ․ հեռավորության վրա է։ Արտահայտեք այն կիլոմետրերով և լուսային ժամերով ($1$ լուսային ժամ $\\approx 1{,}08 \\cdot 10^9$ կմ)։
2. Քանի՞ կիլոմետր կա մեկ լուսային րոպեում։
3. Սիրիուսը $8{,}6$ լ․տ․ հեռավորության վրա է։ Դա քանի՞ ա․մ․ է։
4. Ֆուտբոլի գնդակի մոդելում գնդակից ի՞նչ հեռավորության վրա կլիներ Մարսը ($1{,}52$ ա․մ․)։
5. Դասավորեք ըստ Երկրից հեռավորության․ մեր Գալակտիկայի կենտրոնը ($26\\,000$ լ․տ․), Լուսինը, Անդրոմեդան, Պրոքսիմա Կենտավրոսը, Նեպտունը։
6. $100$ կմ/ժ արագությամբ մեքենան քանի՞ տարում կանցներ $1$ ա․մ․։

### Պատասխաններ

1. $30 \\cdot 1{,}5 \\cdot 10^8 = 4{,}5 \\cdot 10^9$ կմ $\\approx 4{,}2$ լուսային ժամ։
2. $3 \\cdot 10^5 \\cdot 60 = 1{,}8 \\cdot 10^7$ կմ։
3. $8{,}6 \\cdot 63\\,200 \\approx 5{,}4 \\cdot 10^5$ ա․մ․։
4. $1{,}52 \\cdot 24 \\approx 36$ մ։
5. Լուսին, Նեպտուն, Պրոքսիմա Կենտավրոս, Գալակտիկայի կենտրոն, Անդրոմեդա։
6. $1{,}5 \\cdot 10^8 / 100 = 1{,}5 \\cdot 10^6$ ժ $\\approx 171$ տարի։`,
        ru: `## Единицы расстояний

Километры удобны на Земле, но в космосе числа становятся слишком большими. Астрономы пользуются тремя более крупными единицами.

| Единица | Определение | Значение |
|---|---|---|
| **Астрономическая единица**, а. е. | среднее расстояние от Земли до Солнца | $1{,}496 \\cdot 10^8$ км |
| **Световой год**, св. год | расстояние, которое свет проходит за год | $9{,}46 \\cdot 10^{12}$ км $\\approx 63\\,200$ а. е. |
| **Парсек**, пк | расстояние, с которого 1 а. е. видна под углом $1''$ (см. урок о расстояниях до звёзд) | $3{,}26$ св. года $\\approx 206\\,000$ а. е. |

Внутри Солнечной системы используют а. е., для звёзд — световые годы и парсеки, для галактик — их миллионы (млн св. лет, Мпк).

## Лестница масштабов

| Объект | Размер или расстояние |
|---|---|
| Диаметр Земли | $12\\,742$ км |
| От Земли до Луны | $384\\,400$ км $\\approx 1{,}3$ световой секунды |
| От Земли до Солнца | $1$ а. е. $\\approx 8{,}3$ световой минуты |
| От Солнца до Нептуна | $30$ а. е. $\\approx 4$ световых часа |
| Ближайшая звезда, Проксима Центавра | $4{,}24$ св. года $= 1{,}30$ пк |
| Диаметр нашей Галактики | около $100\\,000$ св. лет |
| Галактика Андромеды | $2{,}5$ млн св. лет |
| Край наблюдаемой Вселенной | около $46$ млрд св. лет |

Каждая ступень — огромный скачок. Космос в основном **пуст**: звёзды разделены расстояниями, в десятки миллионов раз превышающими их собственные размеры.

## Масштабная модель

Уменьшим Солнце до футбольного мяча диаметром $22$ см. Масштаб тогда примерно $1 : 6{,}3 \\cdot 10^9$:

> - Земля — крупинка $2$ мм в $24$ м от мяча;
> - Юпитер — стеклянный шарик $2$ см в $123$ м;
> - Нептун — бусинка $8$ мм в $710$ м;
> - Проксима Центавра — ещё один маленький мяч примерно в $6300$ км, дальше, чем от Еревана до Пекина.

## Разобранные примеры

**Пример 1.** Световой год в километрах. В году $3{,}16 \\cdot 10^7$ с:

$1$ св. год $= 3 \\cdot 10^5 \\cdot 3{,}16 \\cdot 10^7 \\approx 9{,}5 \\cdot 10^{12}$ км.

**Пример 2.** Световой год в а. е.:

$\\dfrac{9{,}46 \\cdot 10^{12}}{1{,}496 \\cdot 10^8} \\approx 63\\,200$ а. е.

**Пример 3.** «Вояджер-1» летит со скоростью около $17$ км/с. Сколько времени он летел бы до Проксимы Центавра ($4{,}0 \\cdot 10^{13}$ км)?

$t = \\dfrac{4{,}0 \\cdot 10^{13}}{17} \\approx 2{,}4 \\cdot 10^{12}$ с $\\approx 75\\,000$ лет.

## Упражнения

1. Нептун находится в $30$ а. е. от Солнца. Выразите это в километрах и в световых часах ($1$ световой час $\\approx 1{,}08 \\cdot 10^9$ км).
2. Сколько километров в одной световой минуте?
3. Сириус находится в $8{,}6$ св. года. Сколько это а. е.?
4. На каком расстоянии от мяча в футбольной модели был бы Марс ($1{,}52$ а. е.)?
5. Расположите по расстоянию от Земли: центр нашей Галактики ($26\\,000$ св. лет), Луна, Андромеда, Проксима Центавра, Нептун.
6. Сколько лет ехал бы автомобиль со скоростью $100$ км/ч, чтобы проехать $1$ а. е.?

### Ответы

1. $30 \\cdot 1{,}5 \\cdot 10^8 = 4{,}5 \\cdot 10^9$ км $\\approx 4{,}2$ световых часа.
2. $3 \\cdot 10^5 \\cdot 60 = 1{,}8 \\cdot 10^7$ км.
3. $8{,}6 \\cdot 63\\,200 \\approx 5{,}4 \\cdot 10^5$ а. е.
4. $1{,}52 \\cdot 24 \\approx 36$ м.
5. Луна, Нептун, Проксима Центавра, центр Галактики, Андромеда.
6. $1{,}5 \\cdot 10^8 / 100 = 1{,}5 \\cdot 10^6$ ч $\\approx 171$ год.`,
      },
      [
        q(t("One astronomical unit is…", "Մեկ աստղագիտական միավորը…", "Одна астрономическая единица — это…"), [t("the mean distance from the Earth to the Sun", "Երկրից Արեգակ միջին հեռավորությունն է", "среднее расстояние от Земли до Солнца"), t("the distance light travels in a year", "լույսի մեկ տարում անցած ճանապարհն է", "путь света за год"), t("the diameter of the Earth", "Երկրի տրամագիծն է", "диаметр Земли")], 0),
        q(t("A light-year is a unit of…", "Լուսային տարին … միավոր է։", "Световой год — единица…"), [t("distance", "հեռավորության", "расстояния"), t("time", "ժամանակի", "времени"), t("speed", "արագության", "скорости")], 0),
        q(t("About how many AU are there in one light-year?", "Մոտավորապես քանի՞ ա․մ․ կա մեկ լուսային տարում։", "Примерно сколько а. е. в одном световом году?"), [t("63 000", "63 000", "63 000"), t("1000", "1000", "1000"), t("365", "365", "365")], 0),
        q(t("The nearest star after the Sun is…", "Արեգակից հետո ամենամոտ աստղն է…", "Ближайшая к нам звезда после Солнца —…"), [t("Proxima Centauri", "Պրոքսիմա Կենտավրոսը", "Проксима Центавра"), t("Sirius", "Սիրիուսը", "Сириус"), t("the Pole Star", "Բևեռային աստղը", "Полярная звезда")], 0),
        q(t("One parsec is about…", "Մեկ պարսեկը մոտավորապես…", "Один парсек — это примерно…"), [t("3.26 light-years", "3,26 լուսային տարի է", "3,26 светового года"), t("1 light-year", "1 լուսային տարի է", "1 световой год"), t("1 AU", "1 ա․մ․ է", "1 а. е.")], 0),
        q(t("In a model where the Sun is a football, the Earth is…", "Մոդելում, որտեղ Արեգակը ֆուտբոլի գնդակ է, Երկիրը…", "В модели, где Солнце — футбольный мяч, Земля —…"), [t("a 2 mm grain 24 m away", "24 մ հեռու 2 մմ-անոց հատիկ է", "крупинка 2 мм в 24 м"), t("a tennis ball 1 m away", "1 մ հեռու թենիսի գնդակ է", "теннисный мяч в 1 м"), t("a pea 2 km away", "2 կմ հեռու ոլոռ է", "горошина в 2 км")], 0),
      ],
    ),
  ],
};
