import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade4: VisualMap[number] = {
  "orientation-and-maps": [
    "diagram compass",
    "geocalc mode=scale",
    closer(
      `**Why do we say "orientation"?** The word comes from the Latin *oriens*, "rising", which meant the **east**, where the Sun rises. To orient yourself once meant to find the east. Many old European maps were drawn with east, not north, at the top. Churches were also built facing east: in an Armenian church the altar is on the eastern side. The habit of putting north at the top came later, together with the compass.

**Finding the Pole Star.** On a clear night look for seven bright stars that form the shape of a big ladle: they belong to the constellation of the **Great Bear**. Take the two stars at the outer end of the ladle's bowl and draw a line through them upwards. About five times the distance between them you will find a star that is not very bright but stands alone: the **Pole Star**. Below it, on the horizon, is north. The other stars turn round it during the night, but it hardly moves.`,
      `**Որտեղի՞ց է «օրիենտացիա» բառը։** Հայերեն «կողմնորոշվել» նշանակում է «կողմերը որոշել»։ Իսկ ռուսերեն և եվրոպական լեզուներով «օրիենտացիա» բառը գալիս է լատիներեն *oriens* բառից, որ նշանակում է «ծագող» և ցույց էր տալիս **արևելքը**, որտեղ ծագում է Արեգակը։ Կողմնորոշվել նախկինում նշանակում էր գտնել արևելքը։ Եվրոպական շատ հին քարտեզներ գծված էին այնպես, որ վերևում արևելքն էր, այլ ոչ թե հյուսիսը։ Եկեղեցիներն էլ կառուցվում էին դեպի արևելք․ հայկական եկեղեցում խորանն արևելյան կողմում է։ Հյուսիսը վերևում դնելու սովորությունն եկավ ավելի ուշ՝ կողմնացույցի հետ միասին։

**Ինչպես գտնել Բևեռային աստղը։** Պարզ գիշերը փնտրիր յոթ պայծառ աստղ, որոնք մեծ շերեփի ձև ունեն․ նրանք պատկանում են **Մեծ Արջի** համաստեղությանը։ Վերցրու շերեփի գոգի արտաքին ծայրի երկու աստղերը և դրանց միջով գիծ տար դեպի վեր։ Նրանց միջև եղած հեռավորությունից մոտ հինգ անգամ ավելի հեռու կգտնես մի աստղ, որը շատ պայծառ չէ, բայց կանգնած է առանձին․ դա **Բևեռային աստղն** է։ Նրա տակ՝ հորիզոնում, հյուսիսն է։ Մյուս աստղերը գիշերվա ընթացքում պտտվում են նրա շուրջը, իսկ այն գրեթե չի շարժվում։`,
      `**Почему мы говорим «ориентироваться»?** Слово происходит от латинского *oriens* — «восходящий», так называли **восток**, где восходит Солнце. Ориентироваться когда-то значило найти восток. Многие старые европейские карты рисовали так, что вверху был восток, а не север. Церкви тоже строили лицом на восток: в армянской церкви алтарь находится на восточной стороне. Привычка ставить север наверх появилась позже, вместе с компасом.

**Как найти Полярную звезду.** В ясную ночь найди семь ярких звёзд, похожих на большой ковш: это **ковш Большой Медведицы**. Возьми две звезды на внешнем краю ковша и мысленно проведи через них линию вверх. Примерно на пяти таких расстояниях ты найдёшь не очень яркую, но одинокую звезду — **Полярную**. Под ней, у горизонта, север. Остальные звёзды за ночь поворачиваются вокруг неё, а она почти не двигается.`,
    ),
    ask(2, {
      en: ["What did the word \"orient\" first mean?", ["North", "East", "A map"], "Latin oriens, \"rising\", meant the east, where the Sun rises; old maps often had east at the top."],
      hy: ["Ի՞նչ էր սկզբում նշանակում «օրիենտ» բառը։", ["Հյուսիս", "Արևելք", "Քարտեզ"], "Լատիներեն oriens՝ «ծագող», նշանակում էր արևելքը, որտեղ ծագում է Արեգակը․ հին քարտեզներում վերևում հաճախ արևելքն էր։"],
      ru: ["Что сначала означало слово «ориент»?", ["Север", "Восток", "Карту"], "Латинское oriens, «восходящий», означало восток, где восходит Солнце; на старых картах восток часто был наверху."],
    }),
  ],
  "landforms-and-waters-of-armenia": [
    "bars set=armrivers",
    "diagram river",
    closer(
      `**Hot water from under the ground.** In the town of **Jermuk**, high in the mountains of Vayots Dzor, mineral water comes out of the ground already hot, at up to about 60 °C. Rain and snow water sinks deep into the cracks in the rocks, is warmed by the heat of the Earth, picks up minerals on its way and rises back to the surface. In the town's drinking gallery you can try the same water from taps of different temperatures. Bjni and Arzni water comes from underground too, but it is cold.

**Why our rivers are so fast.** A river is fast when it falls steeply. The **Hrazdan** flows out of Sevan at about 1,900 m and, on its way of about 140 km to the Araks, drops more than 1,000 metres: about 7 metres for every kilometre. The great Russian river **Volga** is 25 times longer, but from its source to the sea it drops only about 250 metres, about 7 centimetres for every kilometre. That is why mountain rivers rush and foam, while plain rivers flow slowly and wind in loops.`,
      `**Տաք ջուր գետնի տակից։** Վայոց ձորի լեռներում բարձր գտնվող **Ջերմուկ** քաղաքում հանքային ջուրը գետնից դուրս է գալիս արդեն տաք՝ մինչև մոտ 60 °C։ Անձրևի ու ձյան ջուրը ներծծվում է ժայռերի ճեղքերի խորքը, տաքանում Երկրի ջերմությունից, ճանապարհին հանքանյութեր վերցնում և նորից բարձրանում մակերես։ Քաղաքի խմելու սրահում կարող ես փորձել նույն ջուրը տարբեր ջերմաստիճանի ծորակներից։ Բջնիի և Արզնիի ջուրն էլ է գալիս գետնի տակից, բայց այն սառն է։

**Ինչու են մեր գետերն այդքան արագ։** Գետն արագ է, երբ թեք է իջնում։ **Հրազդանը** Սևանից դուրս է գալիս մոտ 1900 մ բարձրության վրա և մինչև Արաքս մոտ 140 կմ ճանապարհին իջնում է ավելի քան 1000 մետր՝ յուրաքանչյուր կիլոմետրում մոտ 7 մետր։ Ռուսաստանի մեծ գետը՝ **Վոլգան**, 25 անգամ ավելի երկար է, բայց ակունքից մինչև ծով իջնում է ընդամենը մոտ 250 մետր՝ յուրաքանչյուր կիլոմետրում մոտ 7 սանտիմետր։ Ահա թե ինչու են լեռնային գետերը սրընթաց ու փրփրադեզ, իսկ հարթավայրային գետերը հոսում են դանդաղ և պտույտներ գործում։`,
      `**Горячая вода из-под земли.** В городе **Джермук**, высоко в горах Вайоц Дзора, минеральная вода выходит из-под земли уже горячей — до 60 °C. Дождевая и талая вода просачивается глубоко в трещины горных пород, нагревается теплом Земли, по пути набирает минеральные вещества и поднимается обратно к поверхности. В питьевой галерее города можно попробовать одну и ту же воду из кранов разной температуры. Вода Бжни и Арзни тоже поднимается из-под земли, но она холодная.

**Почему наши реки такие быстрые.** Река быстрая, когда круто спускается. **Раздан** вытекает из Севана на высоте около 1900 м и на своём пути длиной около 140 км до Аракса опускается больше чем на 1000 метров — примерно на 7 метров на каждый километр. Великая русская река **Волга** в 25 раз длиннее, но от истока до моря опускается всего примерно на 250 метров — около 7 сантиметров на километр. Поэтому горные реки мчатся и пенятся, а равнинные текут медленно и петляют.`,
    ),
    ask(1, {
      en: ["Why is the Hrazdan much faster than the Volga?", ["It drops much more steeply", "It has more water", "It is longer"], "The Hrazdan drops about 7 metres every kilometre, the Volga only about 7 centimetres."],
      hy: ["Ինչու՞ է Հրազդանը շատ ավելի արագ, քան Վոլգան։", ["Այն շատ ավելի թեք է իջնում", "Այն ավելի շատ ջուր ունի", "Այն ավելի երկար է"], "Հրազդանը յուրաքանչյուր կիլոմետրում իջնում է մոտ 7 մետր, Վոլգան՝ ընդամենը մոտ 7 սանտիմետր։"],
      ru: ["Почему Раздан гораздо быстрее Волги?", ["Он спускается гораздо круче", "В нём больше воды", "Он длиннее"], "Раздан опускается примерно на 7 метров на каждый километр, а Волга — всего на 7 сантиметров."],
    }),
  ],
  "natural-zones": [
    "diagram altzones",
    "climate city=manaus,cairo,yakutsk",
    closer(
      `**What is in a camel's hump?** Not water, as many people think, but **fat**: up to tens of kilograms of it. When there is no food in the desert, the camel lives on this store, and the hump grows soft and leans to one side. Water is kept in the camel's body and blood, and it loses very little of it: it hardly sweats, and its body can warm up by several degrees during the hot day and cool down at night. After a long journey a thirsty camel can drink about 100 litres of water in about ten minutes.

**A crowd against the cold.** In the Antarctic winter, in total darkness, with frosts below −40 °C and fierce winds, the male **emperor penguins** stand on the ice for about two months without eating. Each one holds an egg on his feet, under a warm fold of skin. To survive, thousands of penguins press together into a tight crowd. Those on the outside slowly move inwards and those in the warm middle move out, so everyone gets a turn to warm up.`,
      `**Ի՞նչ կա ուղտի սապատի մեջ։** Ոչ թե ջուր, ինչպես շատերն են կարծում, այլ **ճարպ**՝ մինչև տասնյակ կիլոգրամ։ Երբ անապատում սնունդ չկա, ուղտն ապրում է այդ պաշարով, և սապատը փափկում է ու թեքվում մի կողմ։ Ջուրը պահվում է ուղտի մարմնում և արյան մեջ, և նա դրանից շատ քիչ է կորցնում․ գրեթե չի քրտնում, իսկ նրա մարմինը շոգ օրվա ընթացքում կարող է մի քանի աստիճանով տաքանալ և գիշերը սառչել։ Երկար ճանապարհից հետո ծարավ ուղտը մոտ տասը րոպեում կարող է խմել մոտ 100 լիտր ջուր։

**Ամբոխ ցրտի դեմ։** Անտարկտիդայի ձմռանը՝ կատարյալ խավարում, −40 °C-ից ցածր սառնամանիքների և ուժեղ քամիների ժամանակ, **կայսերական պինգվինների** արուները մոտ երկու ամիս կանգնում են սառույցի վրա՝ առանց ուտելու։ Յուրաքանչյուրը ձուն պահում է իր ոտքերի վրա՝ մաշկի տաք ծալքի տակ։ Գոյատևելու համար հազարավոր պինգվիններ սեղմվում են իրար՝ կազմելով խիտ ամբոխ։ Արտաքին եզրին կանգնածները կամաց-կամաց շարժվում են ներս, իսկ տաք մեջտեղում եղածները՝ դուրս, այնպես որ բոլորին հերթ է հասնում տաքանալու։`,
      `**Что в горбу у верблюда?** Не вода, как многие думают, а **жир** — до десятков килограммов. Когда в пустыне нет еды, верблюд живёт за счёт этого запаса, и горб становится мягким и свешивается набок. Вода хранится в теле и крови верблюда, и теряет он её очень мало: почти не потеет, а его тело за жаркий день может нагреться на несколько градусов и остыть ночью. После долгого перехода жаждущий верблюд может выпить около 100 литров воды примерно за десять минут.

**Толпа против холода.** Антарктической зимой, в полной темноте, в морозы ниже −40 °C и при сильном ветре самцы **императорских пингвинов** около двух месяцев стоят на льду без еды. Каждый держит яйцо на лапах под тёплой складкой кожи. Чтобы выжить, тысячи пингвинов прижимаются друг к другу в плотную толпу. Те, кто снаружи, понемногу продвигаются внутрь, а те, кто в тёплой середине, — наружу, так что каждому выпадает очередь погреться.`,
    ),
    ask(3, {
      en: ["What does a camel store in its hump?", ["Water", "Air", "Fat"], "The hump is a store of fat; water is kept in the camel's body and blood."],
      hy: ["Ի՞նչ է ուղտը պահում իր սապատի մեջ։", ["Ջուր", "Օդ", "Ճարպ"], "Սապատը ճարպի պաշար է, իսկ ջուրը պահվում է ուղտի մարմնում և արյան մեջ։"],
      ru: ["Что верблюд хранит в горбу?", ["Воду", "Воздух", "Жир"], "Горб — это запас жира, а вода хранится в теле и крови верблюда."],
    }),
  ],
  digestion: [
    "diagram digestive",
    closer(
      `**Taste needs saliva.** Your mouth makes about a litre of **saliva** every day. It wets the food so that you can swallow it, and it already starts to digest bread and potatoes: chew a piece of bread for a long time and it begins to taste sweet. Saliva is also needed for taste. Try an experiment: dry the tip of your tongue with a clean paper towel and put a few grains of sugar on it. At first you will taste almost nothing, until new saliva dissolves the sugar.

**Why does a tummy rumble?** The walls of the stomach and the intestines are made of muscle, and they keep squeezing to move food along, even when there is not much in them. When the stomach is empty, it is mostly air and juices that get squeezed, and that makes a loud gurgling noise. The rumbling often starts about two hours after a meal. It is a normal sound, a little like a reminder that it is time to eat.`,
      `**Համի համար թուք է պետք։** Քո բերանն օրական մոտ մեկ լիտր **թուք** է արտադրում։ Այն թրջում է սնունդը, որպեսզի կարողանաս կուլ տալ, և արդեն սկսում է մարսել հացն ու կարտոֆիլը․ երկար ծամիր հացի կտորը, և այն կսկսի քաղցր համ ունենալ։ Թուքը պետք է նաև համը զգալու համար։ Փորձիր․ մաքուր թղթե անձեռոցիկով չորացրու լեզվիդ ծայրը և վրան մի քանի հատիկ շաքար դիր։ Սկզբում գրեթե ոչինչ չես զգա, մինչև որ նոր թուքը լուծի շաքարը։

**Ինչու՞ է փորը մռնչում։** Ստամոքսի և աղիների պատերը կազմված են մկաններից, որոնք անընդհատ սեղմվում են՝ սնունդն առաջ մղելու համար, նույնիսկ երբ դրանց մեջ քիչ բան կա։ Երբ ստամոքսը դատարկ է, սեղմվում են հիմնականում օդը և հյութերը, և դա բարձր կլկլոց է առաջացնում։ Մռնչոցը հաճախ սկսվում է ուտելուց մոտ երկու ժամ անց։ Դա սովորական ձայն է, մի քիչ նման հիշեցման, որ ուտելու ժամանակն է։`,
      `**Для вкуса нужна слюна.** Твой рот выделяет около литра **слюны** в день. Она смачивает еду, чтобы её можно было проглотить, и уже начинает переваривать хлеб и картошку: если долго жевать кусочек хлеба, он станет сладковатым. Слюна нужна и для вкуса. Проведи опыт: промокни кончик языка чистой бумажной салфеткой и положи на него несколько крупинок сахара. Сначала ты почти ничего не почувствуешь, пока новая слюна не растворит сахар.

**Почему урчит в животе?** Стенки желудка и кишечника состоят из мышц, которые всё время сжимаются, продвигая пищу дальше, даже когда в них почти ничего нет. Когда желудок пуст, сжимаются в основном воздух и соки, и получается громкое бурчание. Урчание часто начинается часа через два после еды. Это обычный звук, немного похожий на напоминание, что пора поесть.`,
    ),
    ask(2, {
      en: ["Why does bread start to taste sweet if you chew it for a long time?", ["Teeth add sugar to it", "Saliva starts to digest it into sugar", "Bread always tastes sweet"], "Saliva begins digesting starch in bread and potatoes already in the mouth."],
      hy: ["Ինչու՞ է հացը քաղցր համ ստանում, եթե այն երկար ծամես։", ["Ատամները շաքար են ավելացնում", "Թուքը սկսում է այն մարսել՝ վերածելով շաքարի", "Հացը միշտ քաղցր է"], "Թուքը սկսում է մարսել հացի ու կարտոֆիլի օսլան արդեն բերանում։"],
      ru: ["Почему хлеб становится сладковатым, если его долго жевать?", ["Зубы добавляют сахар", "Слюна начинает переваривать его в сахар", "Хлеб всегда сладкий"], "Слюна начинает переваривать крахмал хлеба и картошки уже во рту."],
    }),
  ],
  "breathing-and-circulation": [
    "diagram lungs",
    "bars set=heartrates",
    closer(
      `**A doctor and a roll of paper.** In 1816 the French doctor **René Laennec** needed to listen to a young patient's heart, but it was considered rude to put his ear to her chest. He remembered children who scratched one end of a long piece of wood and listened at the other end. So he rolled a sheet of paper into a tight tube, put one end on her chest and the other to his ear, and heard the heart more clearly than ever. Soon he made a wooden tube and called it a **stethoscope**. Doctors still use it today.

**What makes you breathe?** Try holding your breath. After a while you feel you simply must breathe. Surprisingly, this is not because the oxygen runs out, but because **carbon dioxide** builds up in the blood. The brain keeps checking how much of it there is, and when it gets too high, it makes you breathe in. That is why you cannot hold your breath until you faint: the brain will not let you.`,
      `**Բժիշկը և թղթի գլանակը։** 1816 թվականին ֆրանսիացի բժիշկ **Ռընե Լաենեկին** անհրաժեշտ էր լսել մի երիտասարդ հիվանդուհու սիրտը, բայց ականջը նրա կրծքին դնելն անքաղաքավարի էր համարվում։ Նա հիշեց երեխաներին, որոնք քերծում էին երկար փայտի մի ծայրը և լսում մյուս ծայրում։ Այդ ժամանակ նա թղթի թերթն ամուր գլանեց խողովակի պես, մի ծայրը դրեց հիվանդուհու կրծքին, մյուսը՝ իր ականջին, և սիրտը լսեց ավելի պարզ, քան երբևէ։ Շուտով նա փայտե խողովակ պատրաստեց և այն անվանեց **ստետոսկոպ**։ Բժիշկներն այն օգտագործում են մինչև այսօր։

**Ի՞նչն է քեզ ստիպում շնչել։** Փորձիր պահել շունչդ։ Որոշ ժամանակ անց զգում ես, որ պարզապես պետք է շնչես։ Զարմանալի է, բայց դա այն պատճառով չէ, որ թթվածինը վերջանում է, այլ որովհետև արյան մեջ կուտակվում է **ածխաթթու գազը**։ Ուղեղն անընդհատ ստուգում է, թե որքան կա դրանից, և երբ այն շատանում է, ստիպում է քեզ ներշնչել։ Ահա թե ինչու չես կարող շունչդ պահել մինչև ուշագնացություն․ ուղեղը թույլ չի տա։`,
      `**Врач и бумажная трубка.** В 1816 году французскому врачу **Рене Лаэннеку** нужно было послушать сердце молодой пациентки, но прикладывать ухо к её груди считалось неприличным. Он вспомнил детей, которые царапали один конец длинного бревна и слушали у другого конца. Тогда он туго свернул лист бумаги в трубку, приставил один конец к её груди, а другой к своему уху — и услышал сердце яснее, чем когда-либо. Вскоре он сделал деревянную трубку и назвал её **стетоскопом**. Врачи пользуются им до сих пор.

**Что заставляет нас дышать?** Попробуй задержать дыхание. Через какое-то время ты чувствуешь, что просто должен вдохнуть. Удивительно, но это не потому, что кончается кислород, а потому, что в крови накапливается **углекислый газ**. Мозг постоянно проверяет, сколько его, и когда его становится слишком много, заставляет тебя вдохнуть. Поэтому нельзя задержать дыхание до обморока: мозг не позволит.`,
    ),
    ask(3, {
      en: ["What makes you need to breathe when you hold your breath?", ["The heart stops", "The lungs get too big", "Carbon dioxide builds up in the blood"], "The brain watches the level of carbon dioxide and makes you breathe in when it gets too high."],
      hy: ["Ի՞նչն է ստիպում շնչել, երբ պահում ես շունչդ։", ["Սիրտը կանգ է առնում", "Թոքերը չափազանց մեծանում են", "Արյան մեջ կուտակվում է ածխաթթու գազը"], "Ուղեղը հետևում է ածխաթթու գազի քանակին և ստիպում է ներշնչել, երբ այն շատանում է։"],
      ru: ["Что заставляет вдохнуть, когда задерживаешь дыхание?", ["Сердце останавливается", "Лёгкие становятся слишком большими", "В крови накапливается углекислый газ"], "Мозг следит за количеством углекислого газа и заставляет вдохнуть, когда его становится слишком много."],
    }),
  ],
  "materials-light-sound-magnets": [
    "magnet",
    "optics mode=shadow",
    closer(
      `**How far away is the storm?** Lightning and thunder happen at the same moment, but they reach you at different times. The light of the flash arrives almost instantly, while sound is much slower: it travels about **1 kilometre in 3 seconds**. So when you see lightning, count the seconds until you hear the thunder and divide by three. If you count 9 seconds, the storm is about 3 km away. If the gap gets shorter, the storm is coming closer, and it is time to go indoors.

**Why seven colours?** Isaac Newton let a beam of sunlight pass through a glass **prism** and saw it spread into a band of colours. He named seven of them: red, orange, yellow, green, blue, indigo and violet. Why seven? Newton liked the idea that the colours matched the seven notes of music. In fact the colours of a rainbow flow into each other smoothly, and some languages name six or even fewer. Count them yourself next time you see a rainbow!`,
      `**Որքա՞ն հեռու է ամպրոպը։** Կայծակն ու որոտը տեղի են ունենում նույն պահին, բայց քեզ են հասնում տարբեր ժամանակ։ Բռնկման լույսը հասնում է գրեթե ակնթարթորեն, իսկ ձայնը շատ ավելի դանդաղ է․ այն անցնում է մոտ **1 կիլոմետր 3 վայրկյանում**։ Ուրեմն, երբ տեսնում ես կայծակը, հաշվիր վայրկյանները մինչև որոտը լսելը և բաժանիր երեքի։ Եթե հաշվես 9 վայրկյան, ամպրոպը մոտ 3 կմ հեռու է։ Եթե միջակայքը կարճանում է, ամպրոպը մոտենում է, և ժամանակն է ներս մտնելու։

**Ինչու՞ յոթ գույն։** Իսահակ Նյուտոնն արևի լույսի փունջն անցկացրեց ապակե **պրիզմայի** միջով և տեսավ, որ այն տարածվում է գույների շերտով։ Նա անվանեց դրանցից յոթը՝ կարմիր, նարնջագույն, դեղին, կանաչ, երկնագույն, կապույտ և մանուշակագույն։ Ինչու՞ յոթ։ Նյուտոնին դուր էր գալիս այն միտքը, որ գույները համապատասխանում են երաժշտության յոթ նոտաներին։ Իրականում ծիածանի գույները սահուն անցնում են մեկը մյուսին, և որոշ լեզուներ անվանում են վեց կամ նույնիսկ ավելի քիչ գույն։ Հաջորդ անգամ, երբ ծիածան տեսնես, ինքդ հաշվիր դրանք։`,
      `**Как далеко гроза?** Молния и гром возникают в один и тот же момент, но доходят до тебя в разное время. Свет вспышки приходит почти мгновенно, а звук гораздо медленнее: он проходит около **1 километра за 3 секунды**. Поэтому, увидев молнию, считай секунды до грома и раздели на три. Если насчитал 9 секунд, гроза примерно в 3 км. Если промежуток становится короче, гроза приближается, и пора идти в дом.

**Почему семь цветов?** Исаак Ньютон пропустил луч солнечного света через стеклянную **призму** и увидел, что он раскладывается в полосу цветов. Он назвал семь из них: красный, оранжевый, жёлтый, зелёный, голубой, синий и фиолетовый. Почему семь? Ньютону нравилась мысль, что цвета соответствуют семи нотам музыки. На самом деле цвета радуги плавно переходят друг в друга, и в некоторых языках называют шесть цветов или даже меньше. Посчитай сам, когда в следующий раз увидишь радугу!`,
    ),
    ask(1, {
      en: ["You see lightning and hear thunder 6 seconds later. How far away is the storm?", ["About 2 km", "About 6 km", "About 18 km"], "Sound travels about 1 km in 3 seconds, so 6 ÷ 3 = 2 km."],
      hy: ["Տեսնում ես կայծակը, իսկ որոտը լսում ես 6 վայրկյան անց։ Որքա՞ն հեռու է ամպրոպը։", ["Մոտ 2 կմ", "Մոտ 6 կմ", "Մոտ 18 կմ"], "Ձայնն անցնում է մոտ 1 կմ 3 վայրկյանում, ուրեմն 6 : 3 = 2 կմ։"],
      ru: ["Ты видишь молнию, а гром слышишь через 6 секунд. Как далеко гроза?", ["Примерно 2 км", "Примерно 6 км", "Примерно 18 км"], "Звук проходит около 1 км за 3 секунды, значит 6 : 3 = 2 км."],
    }),
  ],
};
