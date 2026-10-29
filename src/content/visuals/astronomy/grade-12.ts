import type { VisualMap } from "..";
import { ask } from "../ask";

export const grade12: VisualMap[number] = {
  "light-spectra": [
    "quantum mode=spectrum",
    "quantum mode=lines",
    ask(2, {
      en: ["A star's spectral lines are shifted towards red. The star is…", ["coming towards us", "moving away from us", "very cold", "very old"], "This is the Doppler effect: a source moving away stretches the waves."],
      hy: ["Աստղի սպեկտրալ գծերը շեղված են դեպի կարմիր։ Աստղը…", ["մոտենում է մեզ", "հեռանում է մեզանից", "շատ սառն է", "շատ ծեր է"], "Սա Դոպլերի էֆեկտն է․ հեռացող աղբյուրը ձգում է ալիքները։"],
      ru: ["Линии в спектре звезды смещены к красному концу. Звезда…", ["приближается к нам", "удаляется от нас", "очень холодная", "очень старая"], "Это эффект Доплера: удаляющийся источник растягивает волны."],
    }),
  ],
  "the-sun": [
    "diagram sun",
    "mechanism fusion",
    ask(3, {
      en: ["Where does the Sun's energy come from?", ["Burning coal and gas", "Slow shrinking", "Hydrogen fusing into helium in the core", "Radioactive uranium"], "In the core, at about 15 million K, the Sun turns about 600 million tonnes of hydrogen into helium every second."],
      hy: ["Որտեղի՞ց է Արեգակի էներգիան։", ["Ածխի և գազի այրումից", "Դանդաղ սեղմվելուց", "Միջուկում ջրածնի միաձուլումից՝ վերածվելով հելիումի", "Ռադիոակտիվ ուրանից"], "Միջուկում՝ մոտ 15 միլիոն Կ ջերմաստիճանում, Արեգակը յուրաքանչյուր վայրկյան մոտ 600 միլիոն տոննա ջրածին է վերածում հելիումի։"],
      ru: ["Откуда берётся энергия Солнца?", ["От горения угля и газа", "От медленного сжатия", "От синтеза гелия из водорода в ядре", "От радиоактивного урана"], "В ядре при температуре около 15 млн К Солнце каждую секунду превращает в гелий около 600 млн тонн водорода."],
    }),
  ],
  "solar-activity": [
    "diagram sun",
    ask(1, {
      en: ["About how long is the cycle of solar activity?", ["11 years", "1 year", "27 days", "100 years"], "The number of sunspots rises and falls with a period of about 11 years."],
      hy: ["Մոտավորապես որքա՞ն է տևում արեգակնային ակտիվության ցիկլը։", ["11 տարի", "1 տարի", "27 օր", "100 տարի"], "Արևաբծերի թիվն աճում ու նվազում է մոտ 11 տարի պարբերությամբ։"],
      ru: ["Какова примерная длительность цикла солнечной активности?", ["11 лет", "1 год", "27 суток", "100 лет"], "Число солнечных пятен растёт и падает с периодом около 11 лет."],
    }),
  ],
  "star-distances": [
    "diagram parallax",
    "bars set=nearstars",
    ask(4, {
      en: ["A star has a parallax of 0.25″. How far is it?", ["0.25 pc", "25 pc", "2.5 pc", "4 pc"], "d = 1/π = 1/0.25 = 4 pc, about 13 light-years."],
      hy: ["Աստղի պարալաքսը 0,25″ է։ Որքա՞ն հեռու է այն։", ["0,25 պկ", "25 պկ", "2,5 պկ", "4 պկ"], "d = 1/π = 1/0,25 = 4 պկ, մոտ 13 լուսային տարի։"],
      ru: ["Параллакс звезды 0,25″. Как далеко она?", ["0,25 пк", "25 пк", "2,5 пк", "4 пк"], "d = 1/π = 1/0,25 = 4 пк, около 13 световых лет."],
    }),
  ],
  "star-properties": [
    "diagram hr",
    "bars set=starradii",
    ask(2, {
      en: ["Betelgeuse is red but one of the brightest stars. What does this tell us?", ["It is very close", "It is huge", "It is very hot", "It is a white dwarf"], "A cool surface gives little light per square metre, so a very luminous cool star must have an enormous surface."],
      hy: ["Բետելգեյզեն կարմիր է, բայց ամենապայծառ աստղերից է։ Ի՞նչ է սա մեզ ասում։", ["Այն շատ մոտ է", "Այն հսկայական է", "Այն շատ տաք է", "Այն սպիտակ թզուկ է"], "Սառը մակերևույթը մեկ քառակուսի մետրից քիչ լույս է տալիս, ուստի շատ լուսավոր սառը աստղը պետք է վիթխարի մակերևույթ ունենա։"],
      ru: ["Бетельгейзе красная, но одна из самых ярких звёзд. О чём это говорит?", ["Она очень близко", "Она огромна", "Она очень горячая", "Это белый карлик"], "Холодная поверхность даёт мало света с квадратного метра, значит, у очень яркой холодной звезды огромная поверхность."],
    }),
  ],
  "binary-stars": [
    "orbit mode=gravity",
    ask(3, {
      en: ["Why are double stars so important to astronomers?", ["They are the brightest stars", "They are the closest stars", "Their orbits give the masses of stars", "They never change"], "Kepler's third law in Newton's form gives the total mass from the period and the size of the orbit."],
      hy: ["Ինչո՞ւ են կրկնակի աստղերն այդքան կարևոր աստղագետների համար։", ["Դրանք ամենապայծառ աստղերն են", "Դրանք ամենամոտ աստղերն են", "Դրանց ուղեծրերը տալիս են աստղերի զանգվածները", "Դրանք երբեք չեն փոխվում"], "Կեպլերի երրորդ օրենքը Նյուտոնի տեսքով ընդհանուր զանգվածը տալիս է պարբերությունից և ուղեծրի չափից։"],
      ru: ["Почему двойные звёзды так важны для астрономов?", ["Это самые яркие звёзды", "Это самые близкие звёзды", "По их орбитам находят массы звёзд", "Они никогда не меняются"], "Третий закон Кеплера в форме Ньютона даёт суммарную массу по периоду и размеру орбиты."],
    }),
  ],
  "variable-stars": [
    "diagram galaxytypes",
    ask(1, {
      en: ["Two Cepheids have the same period, but one looks 100 times fainter. It is…", ["10 times farther", "100 times farther", "100 times smaller", "10 times younger"], "Same period, same luminosity; brightness falls as 1/d², so 100 times fainter means 10 times farther."],
      hy: ["Երկու ցեֆեիդ ունեն նույն պարբերությունը, բայց մեկը 100 անգամ ավելի աղոտ է երևում։ Այն…", ["10 անգամ ավելի հեռու է", "100 անգամ ավելի հեռու է", "100 անգամ ավելի փոքր է", "10 անգամ ավելի երիտասարդ է"], "Նույն պարբերություն, նույն լուսատվություն․ պայծառությունը նվազում է 1/d²-ի պես, ուստի 100 անգամ աղոտ նշանակում է 10 անգամ հեռու։"],
      ru: ["У двух цефеид одинаковый период, но одна кажется в 100 раз слабее. Она…", ["в 10 раз дальше", "в 100 раз дальше", "в 100 раз меньше", "в 10 раз моложе"], "Одинаковый период — одинаковая светимость; блеск падает как 1/d², значит, в 100 раз слабее — в 10 раз дальше."],
    }),
  ],
  "star-evolution": [
    "diagram stellarlife",
    "mechanism stars",
    "bars set=blackholes",
    ask(2, {
      en: ["What decides whether a star ends as a white dwarf or explodes as a supernova?", ["Its colour at birth", "Its mass", "Its distance from us", "The number of its planets"], "Stars above about 8 solar masses end in supernovae; lighter ones like the Sun become white dwarfs."],
      hy: ["Ի՞նչն է որոշում՝ աստղը կավարտվի որպես սպիտակ թզուկ, թե կպայթի որպես գերնոր։", ["Ծննդյան պահի գույնը", "Նրա զանգվածը", "Նրա հեռավորությունը մեզանից", "Նրա մոլորակների թիվը"], "Մոտ 8 արեգակնային զանգվածից ավելի աստղերն ավարտվում են գերնորով, Արեգակի նման թեթևները դառնում են սպիտակ թզուկներ։"],
      ru: ["Что решает, станет ли звезда белым карликом или взорвётся сверхновой?", ["Её цвет при рождении", "Её масса", "Расстояние до неё", "Число её планет"], "Звёзды тяжелее примерно 8 масс Солнца заканчивают сверхновыми; более лёгкие, как Солнце, становятся белыми карликами."],
    }),
  ],
  "milky-way": [
    "diagram galaxy",
    ask(4, {
      en: ["Where is the Sun in the Milky Way?", ["At the centre", "In the halo, far above the disc", "Outside the Galaxy", "In the disc, about 26 000 light-years from the centre"], "The Sun sits in a small spiral arm, the Orion Arm, about halfway out."],
      hy: ["Որտե՞ղ է Արեգակը Ծիր Կաթինում։", ["Կենտրոնում", "Հալոյում՝ սկավառակից շատ վեր", "Գալակտիկայից դուրս", "Սկավառակում՝ կենտրոնից մոտ 26 000 լուսային տարի հեռու"], "Արեգակը գտնվում է փոքր պարուրաձև թևում՝ Օրիոնի թևում, մոտավորապես կես ճանապարհին։"],
      ru: ["Где Солнце в Млечном Пути?", ["В центре", "В гало, высоко над диском", "Вне Галактики", "В диске, примерно в 26 000 световых лет от центра"], "Солнце находится в небольшом спиральном рукаве Ориона, примерно на полпути от центра."],
    }),
  ],
  galaxies: [
    "diagram galaxytypes",
    "timeline set=byurakan",
    ask(1, {
      en: ["In which kind of galaxy do you expect to find many young blue stars?", ["Spiral", "Giant elliptical", "Any elliptical", "None: all galaxies are old"], "Spiral arms are full of gas and dust, from which new stars keep forming."],
      hy: ["Ո՞ր տեսակի գալակտիկայում եք սպասում գտնել շատ երիտասարդ կապույտ աստղեր։", ["Պարուրաձև", "Հսկա էլիպսաձև", "Ցանկացած էլիպսաձև", "Ոչ մեկում․ բոլոր գալակտիկաները ծեր են"], "Պարուրաձև թևերը լի են գազով և փոշով, որոնցից շարունակում են նոր աստղեր առաջանալ։"],
      ru: ["В какой галактике стоит ожидать много молодых голубых звёзд?", ["В спиральной", "В гигантской эллиптической", "В любой эллиптической", "Ни в какой: все галактики старые"], "Спиральные рукава полны газа и пыли, из которых продолжают рождаться звёзды."],
    }),
  ],
  "active-galaxies": [
    "bars set=blackholes",
    ask(3, {
      en: ["A quasar changes its brightness within a day. Its shining region is at most…", ["a light-year across", "as big as a galaxy", "about one light-day across", "as big as the Earth"], "Light cannot cross the region faster than light, so a change in a day means a size of no more than one light-day, about 170 AU."],
      hy: ["Քվազարը փոխում է պայծառությունը մեկ օրում։ Նրա լուսարձակող տիրույթը առավելագույնը…", ["մեկ լուսային տարի է", "գալակտիկայի չափ է", "մոտ մեկ լուսային օր է", "Երկրի չափ է"], "Լույսը չի կարող տիրույթը հատել լույսից արագ, ուստի մեկ օրում փոփոխությունը նշանակում է առավելագույնը մեկ լուսային օր չափ՝ մոտ 170 ա․մ․։"],
      ru: ["Квазар меняет блеск за сутки. Его светящаяся область не больше…", ["светового года", "галактики", "примерно одних световых суток", "Земли"], "Свет не может пересечь область быстрее света, поэтому изменение за сутки означает размер не больше одних световых суток, около 170 а. е."],
    }),
  ],
  "expanding-universe": [
    "mechanism expansion",
    ask(2, {
      en: ["A galaxy is 300 Mpc away. With H₀ = 70 km/s/Mpc it recedes at…", ["300 km/s", "21 000 km/s", "70 km/s", "4.3 km/s"], "v = H₀d = 70 × 300 = 21 000 km/s."],
      hy: ["Գալակտիկան 300 Մպկ հեռու է։ H₀ = 70 կմ/վ/Մպկ դեպքում այն հեռանում է…", ["300 կմ/վ արագությամբ", "21 000 կմ/վ արագությամբ", "70 կմ/վ արագությամբ", "4,3 կմ/վ արագությամբ"], "v = H₀d = 70 × 300 = 21 000 կմ/վ։"],
      ru: ["Галактика в 300 Мпк. При H₀ = 70 км/с/Мпк она удаляется со скоростью…", ["300 км/с", "21 000 км/с", "70 км/с", "4,3 км/с"], "v = H₀d = 70 × 300 = 21 000 км/с."],
    }),
  ],
  "big-bang": [
    "bars set=cosmos",
    "timeline set=astroideas",
    ask(4, {
      en: ["Why is the cosmic background now microwaves, though it was released at about 3000 K?", ["It was absorbed by dust", "It lost energy to stars", "Microwaves travel faster", "The expansion of space stretched its waves about 1100 times"], "As the waves stretched, the radiation cooled from about 3000 K to 2.7 K."],
      hy: ["Ինչո՞ւ է ռելիկտային ճառագայթումն այժմ միկրոալիքային, թեև արձակվել է մոտ 3000 Կ-ում։", ["Այն կլանվել է փոշու կողմից", "Այն էներգիա է կորցրել աստղերին", "Միկրոալիքներն ավելի արագ են տարածվում", "Տարածության ընդարձակումը նրա ալիքները ձգել է մոտ 1100 անգամ"], "Ալիքների ձգվելու հետ ճառագայթումը սառել է մոտ 3000 Կ-ից մինչև 2,7 Կ։"],
      ru: ["Почему реликтовое излучение сейчас микроволновое, хотя испущено при 3000 К?", ["Его поглотила пыль", "Оно отдало энергию звёздам", "Микроволны быстрее", "Расширение пространства растянуло его волны примерно в 1100 раз"], "По мере растяжения волн излучение остыло примерно с 3000 К до 2,7 К."],
    }),
  ],
  "exoplanets-life": [
    "timeline set=byurakan",
    ask(1, {
      en: ["A planet half the radius of its star would dim it in a transit by…", ["25%", "50%", "5%", "2.5%"], "The dip is (Rₚ/R∗)² = 0.5² = 0.25."],
      hy: ["Իր աստղի կես շառավղով մոլորակը տարանցման ժամանակ կթուլացներ նրա լույսը…", ["25%-ով", "50%-ով", "5%-ով", "2,5%-ով"], "Անկումը (Rₚ/R∗)² = 0,5² = 0,25 է։"],
      ru: ["Планета с радиусом в половину радиуса звезды ослабит её при транзите на…", ["25%", "50%", "5%", "2,5%"], "Падение блеска (Rₚ/R∗)² = 0,5² = 0,25."],
    }),
  ],
  "astronomy-review": [
    "diagram hr",
    ask(3, {
      en: ["Which formula would you use to find the mass of a black hole from a star circling it?", ["d = 1/π", "v = H₀d", "M = a³/T²", "λₘₐₓ = b/T"], "Kepler's third law weighs any central body: Sagittarius A* was weighed by the star S2."],
      hy: ["Ո՞ր բանաձևը կօգտագործեք սև խոռոչի զանգվածը նրա շուրջ պտտվող աստղից գտնելու համար։", ["d = 1/π", "v = H₀d", "M = a³/T²", "λₘₐₓ = b/T"], "Կեպլերի երրորդ օրենքը կշռում է ցանկացած կենտրոնական մարմին․ Աղեղնավոր A*-ը կշռվեց S2 աստղով։"],
      ru: ["Какую формулу использовать, чтобы найти массу чёрной дыры по обращающейся вокруг неё звезде?", ["d = 1/π", "v = H₀d", "M = a³/T²", "λₘₐₓ = b/T"], "Третий закон Кеплера «взвешивает» любое центральное тело: Стрелец A* взвесили по звезде S2."],
    }),
  ],
};
