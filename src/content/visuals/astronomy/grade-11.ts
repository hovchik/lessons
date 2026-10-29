import type { VisualMap } from "..";
import { ask } from "../ask";

export const grade11: VisualMap[number] = {
  "what-is-astronomy": [
    "timeline set=astroideas",
    ask(2, {
      en: ["Which of these is a natural science that studies celestial bodies?", ["Astrology", "Astronomy", "Cosmetology", "Geology"], "Astrology is not a science: the positions of planets do not shape a person's character or fate."],
      hy: ["Սրանցից ո՞րն է երկնային մարմիններն ուսումնասիրող բնական գիտություն։", ["Աստղագուշակություն", "Աստղագիտություն", "Կոսմետոլոգիա", "Երկրաբանություն"], "Աստղագուշակությունը գիտություն չէ․ մոլորակների դիրքերը չեն ձևավորում մարդու բնավորությունը կամ ճակատագիրը։"],
      ru: ["Что из этого — естественная наука о небесных телах?", ["Астрология", "Астрономия", "Косметология", "Геология"], "Астрология не наука: положение планет не определяет характер и судьбу человека."],
    }),
  ],
  telescopes: [
    "diagram telescope",
    "optics mode=lens",
    ask(3, {
      en: ["Why do astronomers build telescopes with ever larger mirrors?", ["To make the telescope lighter", "To see colours better", "To collect more light and see finer detail", "To make the sky darker"], "Light collected grows with the area of the mirror, and finer detail can be seen with a wider aperture."],
      hy: ["Ինչո՞ւ են աստղագետները կառուցում ավելի ու ավելի մեծ հայելիներով աստղադիտակներ։", ["Աստղադիտակն ավելի թեթև դարձնելու համար", "Գույներն ավելի լավ տեսնելու համար", "Ավելի շատ լույս հավաքելու և ավելի մանր մանրամասներ տեսնելու համար", "Երկինքն ավելի մութ դարձնելու համար"], "Հավաքված լույսը աճում է հայելու մակերեսի հետ, իսկ ավելի լայն բացվածքով երևում են ավելի մանր մանրամասներ։"],
      ru: ["Зачем астрономы строят телескопы со всё большими зеркалами?", ["Чтобы телескоп был легче", "Чтобы лучше видеть цвета", "Чтобы собирать больше света и видеть мельче детали", "Чтобы небо стало темнее"], "Собранный свет растёт с площадью зеркала, а с большей апертурой видны более мелкие детали."],
    }),
  ],
  "cosmic-distances": [
    "diagram solarsystem",
    "bars set=nearstars",
    ask(1, {
      en: ["Light from the Sun reaches the Earth in about…", ["8 minutes", "8 seconds", "8 hours", "8 days"], "150 million km ÷ 300 000 km/s ≈ 500 s, a little over 8 minutes."],
      hy: ["Արեգակի լույսը Երկիր է հասնում մոտ…", ["8 րոպեում", "8 վայրկյանում", "8 ժամում", "8 օրում"], "150 միլիոն կմ ÷ 300 000 կմ/վ ≈ 500 վ, 8 րոպեից մի փոքր ավելի։"],
      ru: ["Свет от Солнца доходит до Земли примерно за…", ["8 минут", "8 секунд", "8 часов", "8 суток"], "150 млн км ÷ 300 000 км/с ≈ 500 с — чуть больше 8 минут."],
    }),
  ],
  constellations: [
    "diagram celestialsphere",
    ask(4, {
      en: ["What is a constellation today?", ["A group of stars at the same distance", "A cluster of stars bound by gravity", "Any bright star", "An area of the sky with fixed borders"], "Since 1922 the sky is divided into 88 constellations with exact borders; their stars are usually at very different distances."],
      hy: ["Ի՞նչ է համաստեղությունն այսօր։", ["Նույն հեռավորության վրա գտնվող աստղերի խումբ", "Ձգողությամբ կապված աստղակույտ", "Ցանկացած պայծառ աստղ", "Երկնքի որոշակի սահմաններով տեղամաս"], "1922 թվականից երկինքը բաժանված է 88 համաստեղության՝ ճշգրիտ սահմաններով, դրանց աստղերը սովորաբար շատ տարբեր հեռավորությունների վրա են։"],
      ru: ["Что такое созвездие сегодня?", ["Группа звёзд на одном расстоянии", "Скопление звёзд, связанных тяготением", "Любая яркая звезда", "Участок неба с точными границами"], "С 1922 года небо разделено на 88 созвездий с точными границами; их звёзды обычно на очень разных расстояниях."],
    }),
  ],
  "celestial-sphere": [
    "diagram celestialsphere",
    "diagram globegrid",
    ask(2, {
      en: ["How high above the horizon is the celestial pole in Yerevan (latitude 40°)?", ["90°", "40°", "50°", "23.4°"], "The altitude of the celestial pole equals the latitude of the place."],
      hy: ["Որքա՞ն բարձր է աշխարհի բևեռը հորիզոնից Երևանում (լայնությունը՝ 40°)։", ["90°", "40°", "50°", "23,4°"], "Աշխարհի բևեռի բարձրությունը հավասար է տեղի աշխարհագրական լայնությանը։"],
      ru: ["На какой высоте над горизонтом полюс мира в Ереване (широта 40°)?", ["90°", "40°", "50°", "23,4°"], "Высота полюса мира равна географической широте места."],
    }),
  ],
  "sun-ecliptic": [
    "mechanism seasons",
    "diagram celestialsphere",
    ask(3, {
      en: ["Why is it warmer in summer?", ["The Earth is closer to the Sun", "The Sun shines more strongly in summer", "The Sun is higher and the day is longer", "The air is thinner"], "The Earth is actually closest to the Sun in early January. Seasons come from the tilt of the axis."],
      hy: ["Ինչո՞ւ է ամռանը ավելի տաք։", ["Երկիրն ավելի մոտ է Արեգակին", "Ամռանը Արեգակն ավելի ուժեղ է փայլում", "Արեգակն ավելի բարձր է, և օրն ավելի երկար է", "Օդն ավելի նոսր է"], "Իրականում Երկիրն Արեգակին ամենամոտ է հունվարի սկզբին։ Տարվա եղանակները առանցքի թեքությունից են։"],
      ru: ["Почему летом теплее?", ["Земля ближе к Солнцу", "Летом Солнце светит сильнее", "Солнце выше, а день длиннее", "Воздух разреженнее"], "На самом деле ближе всего к Солнцу Земля в начале января. Времена года — от наклона оси."],
    }),
  ],
  "moon-eclipses": [
    "mechanism moonphases",
    "mechanism eclipse",
    ask(1, {
      en: ["Why is there no eclipse at every new moon?", ["The Moon's orbit is tilted about 5° to the ecliptic", "The Moon is too small", "The Sun is too bright", "The Moon moves too fast"], "Usually the Moon passes above or below the Sun; eclipses happen only near the nodes of its orbit."],
      hy: ["Ինչո՞ւ ամեն նորալուսնի խավարում չի լինում։", ["Լուսնի ուղեծիրը խավարածրի նկատմամբ թեքված է մոտ 5°-ով", "Լուսինը չափազանց փոքր է", "Արեգակը չափազանց պայծառ է", "Լուսինը չափազանց արագ է շարժվում"], "Սովորաբար Լուսինն անցնում է Արեգակից վեր կամ վար, խավարումները լինում են միայն ուղեծրի հանգույցների մոտ։"],
      ru: ["Почему затмение бывает не в каждое новолуние?", ["Орбита Луны наклонена к эклиптике примерно на 5°", "Луна слишком мала", "Солнце слишком яркое", "Луна движется слишком быстро"], "Обычно Луна проходит выше или ниже Солнца; затмения бывают только у узлов её орбиты."],
    }),
  ],
  "time-calendar": [
    ask(2, {
      en: ["Why do we add a leap day almost every four years?", ["The Earth slows down", "A year is about 365¼ days", "The Moon's month is 29.5 days", "To match the seasons in the southern hemisphere"], "Without leap days the calendar would slip about a day behind the Sun every four years."],
      hy: ["Ինչո՞ւ ենք գրեթե չորս տարին մեկ ավելացնում նահանջ օր։", ["Երկիրը դանդաղում է", "Տարին մոտ 365¼ օր է", "Լուսնային ամիսը 29,5 օր է", "Հարավային կիսագնդի եղանակներին համապատասխանելու համար"], "Առանց նահանջ օրերի օրացույցը յուրաքանչյուր չորս տարում մոտ մեկ օրով հետ կմնար Արեգակից։"],
      ru: ["Зачем почти каждые четыре года добавляют високосный день?", ["Земля замедляется", "Год длится около 365¼ суток", "Лунный месяц — 29,5 суток", "Чтобы совпадать с сезонами южного полушария"], "Без високосных дней календарь каждые четыре года отставал бы от Солнца примерно на сутки."],
    }),
  ],
  "heliocentric-system": [
    "diagram solarsystem",
    ask(4, {
      en: ["Which observation by Galileo could not be explained if Venus circled the Earth?", ["Spots on the Sun", "Mountains on the Moon", "Stars in the Milky Way", "The full set of phases of Venus"], "Venus shows all phases, like the Moon, only if it goes round the Sun."],
      hy: ["Գալիլեյի ո՞ր դիտարկումը չէր կարող բացատրվել, եթե Վեներան պտտվեր Երկրի շուրջ։", ["Արեգակի բծերը", "Լուսնի լեռները", "Ծիր Կաթինի աստղերը", "Վեներայի փուլերի ամբողջ շարքը"], "Վեներան Լուսնի պես բոլոր փուլերը ցույց է տալիս միայն այն դեպքում, եթե պտտվում է Արեգակի շուրջ։"],
      ru: ["Какое наблюдение Галилея нельзя объяснить, если Венера обращается вокруг Земли?", ["Пятна на Солнце", "Горы на Луне", "Звёзды Млечного Пути", "Полная смена фаз Венеры"], "Все фазы, как у Луны, Венера показывает, только если обращается вокруг Солнца."],
    }),
  ],
  "kepler-newton": [
    "orbit mode=kepler",
    "orbit mode=gravity",
    ask(3, {
      en: ["An asteroid has a = 4 AU. Its period is…", ["4 years", "16 years", "8 years", "2 years"], "T² = a³ = 64, so T = 8 years."],
      hy: ["Աստերոիդի համար a = 4 ա․մ․։ Նրա պարբերությունը…", ["4 տարի է", "16 տարի է", "8 տարի է", "2 տարի է"], "T² = a³ = 64, ուստի T = 8 տարի։"],
      ru: ["У астероида a = 4 а. е. Его период…", ["4 года", "16 лет", "8 лет", "2 года"], "T² = a³ = 64, значит, T = 8 лет."],
    }),
  ],
  "distances-sizes": [
    "diagram parallax",
    ask(1, {
      en: ["The Moon is seen at about 0.5° and is 384 000 km away. Its diameter is about…", ["3400 km", "34 000 km", "340 km", "1700 km"], "0.5° ≈ 0.0087 rad; 384 000 × 0.0087 ≈ 3350 km."],
      hy: ["Լուսինը երևում է մոտ 0,5° անկյան տակ և 384 000 կմ հեռու է։ Նրա տրամագիծը մոտ…", ["3400 կմ է", "34 000 կմ է", "340 կմ է", "1700 կմ է"], "0,5° ≈ 0,0087 ռադ, 384 000 × 0,0087 ≈ 3350 կմ։"],
      ru: ["Луна видна под углом около 0,5° и находится в 384 000 км. Её диаметр около…", ["3400 км", "34 000 км", "340 км", "1700 км"], "0,5° ≈ 0,0087 рад; 384 000 × 0,0087 ≈ 3350 км."],
    }),
  ],
  spaceflight: [
    "timeline set=spaceage",
    "mechanism gps",
    ask(2, {
      en: ["What speed does a satellite need for a low circular orbit around the Earth?", ["About 1 km/s", "About 7.9 km/s", "About 11.2 km/s", "About 300 km/s"], "7.9 km/s is the first cosmic speed; 11.2 km/s is needed to leave the Earth."],
      hy: ["Ի՞նչ արագություն է պետք արբանյակին Երկրի շուրջ ցածր շրջանային ուղեծրի համար։", ["Մոտ 1 կմ/վ", "Մոտ 7,9 կմ/վ", "Մոտ 11,2 կմ/վ", "Մոտ 300 կմ/վ"], "7,9 կմ/վ-ն առաջին տիեզերական արագությունն է, 11,2 կմ/վ է պետք Երկրից հեռանալու համար։"],
      ru: ["Какая скорость нужна спутнику для низкой круговой орбиты вокруг Земли?", ["Около 1 км/с", "Около 7,9 км/с", "Около 11,2 км/с", "Около 300 км/с"], "7,9 км/с — первая космическая скорость; 11,2 км/с нужно, чтобы покинуть Землю."],
    }),
  ],
  "earth-moon": [
    "mechanism moonphases",
    ask(3, {
      en: ["Why do we always see the same side of the Moon?", ["The Moon does not rotate", "The other side is always dark", "It turns once on its axis in the same time as it circles the Earth", "The Earth's shadow hides it"], "The Earth's tides slowed the Moon's spin until it matched its orbit."],
      hy: ["Ինչո՞ւ ենք միշտ տեսնում Լուսնի նույն կողմը։", ["Լուսինը չի պտտվում իր առանցքի շուրջ", "Մյուս կողմը միշտ մութ է", "Այն իր առանցքի շուրջ պտտվում է այնքան ժամանակում, որքանում Երկրի շուրջ է պտտվում", "Երկրի ստվերը թաքցնում է այն"], "Երկրի մակընթացությունները դանդաղեցրին Լուսնի պտույտը, մինչև այն համընկավ ուղեծրի հետ։"],
      ru: ["Почему мы всегда видим одну сторону Луны?", ["Луна не вращается", "Другая сторона всегда тёмная", "Она делает оборот вокруг оси за то же время, что и вокруг Земли", "Её скрывает тень Земли"], "Земные приливы замедлили вращение Луны, пока оно не совпало с обращением."],
    }),
  ],
  "terrestrial-planets": [
    "bars set=planets",
    ask(2, {
      en: ["Why is Venus hotter than Mercury, although it is farther from the Sun?", ["It has volcanoes", "Its thick CO₂ atmosphere traps heat", "It spins faster", "It has no clouds"], "A runaway greenhouse effect keeps Venus at about 460 °C day and night."],
      hy: ["Ինչո՞ւ է Վեներան Մերկուրիից ավելի տաք, թեև Արեգակից ավելի հեռու է։", ["Այնտեղ հրաբուխներ կան", "Նրա խիտ CO₂ մթնոլորտը պահում է ջերմությունը", "Այն ավելի արագ է պտտվում", "Այն ամպեր չունի"], "Անզուսպ ջերմոցային էֆեկտը Վեներայի վրա ցերեկ ու գիշեր պահում է մոտ 460 °C։"],
      ru: ["Почему Венера горячее Меркурия, хотя дальше от Солнца?", ["На ней вулканы", "Её плотная атмосфера из CO₂ удерживает тепло", "Она быстрее вращается", "У неё нет облаков"], "Неуправляемый парниковый эффект держит на Венере около 460 °C днём и ночью."],
    }),
  ],
  "giant-planets": [
    "bars set=planets",
    "diagram solarsystem",
    ask(1, {
      en: ["What are Jupiter and Saturn made of mainly?", ["Hydrogen and helium", "Rock and iron", "Water ice", "Carbon dioxide"], "They are gas giants with the same make-up as the Sun; Uranus and Neptune have more ices."],
      hy: ["Հիմնականում ինչի՞ց են կազմված Յուպիտերը և Սատուրնը։", ["Ջրածնից և հելիումից", "Քարից և երկաթից", "Ջրային սառույցից", "Ածխաթթու գազից"], "Դրանք գազային հսկաներ են՝ Արեգակի նման կազմով, Ուրանն ու Նեպտունն ավելի շատ սառույցներ ունեն։"],
      ru: ["Из чего в основном состоят Юпитер и Сатурн?", ["Из водорода и гелия", "Из камня и железа", "Из водяного льда", "Из углекислого газа"], "Это газовые гиганты с составом как у Солнца; у Урана и Нептуна больше льдов."],
    }),
  ],
  "small-bodies": [
    "diagram solarsystem",
    ask(4, {
      en: ["Why does a comet's tail point away from the Sun?", ["It shows the direction of motion", "Jupiter pulls it", "The Moon's gravity pulls it", "Sunlight and the solar wind push the gas and dust outwards"], "The tail can even go ahead of the comet when it moves away from the Sun."],
      hy: ["Ինչո՞ւ է գիսաստղի պոչն ուղղված Արեգակից դեպի դուրս։", ["Այն ցույց է տալիս շարժման ուղղությունը", "Յուպիտերն է այն ձգում", "Լուսնի ձգողությունն է այն ձգում", "Արեգակի լույսը և արեգակնային քամին գազն ու փոշին հրում են դեպի դուրս"], "Պոչը կարող է նույնիսկ գիսաստղից առաջ լինել, երբ այն հեռանում է Արեգակից։"],
      ru: ["Почему хвост кометы направлен от Солнца?", ["Он показывает направление движения", "Его тянет Юпитер", "Его тянет Луна", "Солнечный свет и солнечный ветер выталкивают газ и пыль наружу"], "Когда комета удаляется от Солнца, хвост может даже идти впереди неё."],
    }),
  ],
};
