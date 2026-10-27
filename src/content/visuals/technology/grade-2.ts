import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade2: VisualMap[number] = {
  "kinds-of-paper": [
    "mechanism papermaking",
    closer(
      `**Paper cannot be recycled for ever.** Each time paper is mashed into pulp again, its tiny fibres break and get a little shorter. After about **5 to 7** rounds they are too short to hold together in a sheet. The last, shortest fibres still have a use: they are pressed into egg boxes and soft packing trays.

**Card that began inside a hat.** In 1856 two Englishmen invented **pleated paper** to line the inside of tall hats, so that the hat sat comfortably and air could get to the head. A few years later people noticed that a wavy sheet glued between two flat ones was surprisingly strong and light. That is **corrugated card**, and today most of the boxes that bring things to shops are made of it.`,
      `**Թուղթը չի կարելի անվերջ վերամշակել։** Ամեն անգամ, երբ թուղթը նորից տրորում են զանգվածի, նրա մանր թելիկները կոտրվում են և մի փոքր կարճանում։ Մոտ **5–7** անգամից հետո դրանք այնքան կարճ են դառնում, որ թերթի մեջ իրար չեն պահում։ Վերջին, ամենակարճ թելիկներն էլ պիտանի են․ դրանցից սեղմելով պատրաստում են ձվի տուփեր և փափուկ փաթեթավորման սկուտեղներ։

**Ստվարաթուղթ, որը սկսվել է գլխարկի ներսից։** 1856 թվականին երկու անգլիացի հնարեցին **ծալքավոր թուղթ**՝ բարձր գլխարկների ներսը պատելու համար, որպեսզի գլխարկը հարմար նստի, և օդը հասնի գլխին։ Մի քանի տարի անց մարդիկ նկատեցին, որ երկու հարթ թերթի միջև սոսնձված ալիքաձև թերթը զարմանալիորեն ամուր է և թեթև։ Դա **ծալքավոր ստվարաթուղթն** է, և այսօր խանութներ ապրանք բերող տուփերի մեծ մասը պատրաստված է դրանից։`,
      `**Бумагу нельзя перерабатывать бесконечно.** Каждый раз, когда бумагу снова превращают в массу, её крошечные волокна ломаются и становятся чуть короче. Примерно через **5–7** раз они уже слишком короткие, чтобы держаться вместе в листе. Последние, самые короткие волокна тоже пригодятся: из них прессуют коробки для яиц и мягкие упаковочные лотки.

**Картон, который начался внутри шляпы.** В 1856 году два англичанина придумали **гофрированную бумагу**, чтобы выстилать изнутри высокие шляпы: так шляпа удобно сидела и к голове проходил воздух. Через несколько лет заметили, что волнистый лист, приклеенный между двумя плоскими, удивительно прочный и лёгкий. Это **гофрированный картон**, и сегодня из него сделано большинство коробок, в которых привозят товары в магазины.`,
    ),
    ask(2, {
      en: ["About how many times can paper be recycled?", ["About 100 times", "About 5 to 7 times", "Only once"], "Each round breaks the fibres a little shorter, until they no longer hold together in a sheet."],
      hy: ["Մոտավորապես քանի՞ անգամ կարելի է թուղթը վերամշակել։", ["Մոտ 100 անգամ", "Մոտ 5–7 անգամ", "Միայն մեկ անգամ"], "Ամեն անգամ թելիկները մի փոքր կարճանում են, մինչև այլևս թերթի մեջ իրար չեն պահում։"],
      ru: ["Примерно сколько раз можно перерабатывать бумагу?", ["Около 100 раз", "Около 5–7 раз", "Только один раз"], "Каждый раз волокна становятся чуть короче, пока уже не держатся вместе в листе."],
    }),
  ],
  "marking-and-templates": [
    "mechanism symmetry",
    closer(
      `**A ship built with two different rulers.** In 1628 the Swedish warship **Vasa** sailed out of Stockholm on her very first voyage, leaned over in a gust of wind and sank after only about 1,300 metres. Over 300 years later she was lifted from the sea bed. Among the builders' tools, archaeologists found rulers of two kinds: some marked in Swedish feet and some in Amsterdam feet, which are shorter. The ship turned out to be thicker on one side than the other. Measure twice, cut once, and with the same ruler!

**Why the zero is not at the edge.** Look at your ruler: on many rulers the zero is a little way in from the end. The ends get knocked and worn down, so a ruler that started right at the edge would soon measure wrongly. That is why you always put the **zero mark**, not the edge of the ruler, at the start of the line.`,
      `**Նավ, որը կառուցել են երկու տարբեր քանոնով։** 1628 թվականին շվեդական **«Վազա»** ռազմանավը Ստոկհոլմից դուրս եկավ իր առաջին իսկ նավարկությանը, քամու պոռթկումից թեքվեց և խորտակվեց ընդամենը մոտ 1300 մետր անցնելուց հետո։ Ավելի քան 300 տարի անց այն բարձրացրին ծովի հատակից։ Կառուցողների գործիքների մեջ հնագետներն երկու տեսակի քանոններ գտան․ մի մասը նշված էր շվեդական ոտնաչափերով, մյուսը՝ ամստերդամյան, որոնք ավելի կարճ են։ Պարզվեց, որ նավը մի կողմից ավելի հաստ է, քան մյուս կողմից։ Յոթ անգամ չափի՛ր, մեկ անգամ կտրի՛ր, և նույն քանոնով։

**Ինչու զրոն եզրին չէ։** Նայի՛ր քո քանոնին․ շատ քանոնների վրա զրոն ծայրից մի փոքր ներս է։ Ծայրերը հարվածներից մաշվում են, ուստի եզրից սկսվող քանոնը շուտով սխալ կչափեր։ Ահա թե ինչու գծի սկզբին միշտ դնում են **զրոյի նշանը**, ոչ թե քանոնի եզրը։`,
      `**Корабль, построенный двумя разными линейками.** В 1628 году шведский военный корабль **«Ваза»** вышел из Стокгольма в своё самое первое плавание, накренился от порыва ветра и затонул, пройдя всего около 1300 метров. Больше чем через 300 лет его подняли со дна моря. Среди инструментов строителей археологи нашли линейки двух видов: одни размечены в шведских футах, другие — в амстердамских, которые короче. Оказалось, что корабль с одной стороны толще, чем с другой. Семь раз отмерь, один раз отрежь — и одной линейкой!

**Почему ноль не на краю.** Посмотри на свою линейку: у многих линеек ноль стоит чуть дальше от края. Края стираются от ударов, и линейка, начинающаяся прямо с края, скоро стала бы мерить неправильно. Поэтому к началу линии всегда прикладывают **отметку нуля**, а не край линейки.`,
    ),
    ask(3, {
      en: ["What did archaeologists find among the tools of the Vasa's builders?", ["A broken saw", "A map of Stockholm", "Rulers of two different lengths"], "Some rulers were marked in Swedish feet and some in shorter Amsterdam feet, and the ship came out thicker on one side."],
      hy: ["Ի՞նչ գտան հնագետները «Վազայի» կառուցողների գործիքների մեջ։", ["Կոտրված սղոց", "Ստոկհոլմի քարտեզ", "Երկու տարբեր երկարության քանոններ"], "Որոշ քանոններ նշված էին շվեդական ոտնաչափերով, մյուսները՝ ավելի կարճ ամստերդամյան, և նավը մի կողմից ավելի հաստ ստացվեց։"],
      ru: ["Что нашли археологи среди инструментов строителей «Вазы»?", ["Сломанную пилу", "Карту Стокгольма", "Линейки двух разных длин"], "Одни линейки были размечены в шведских футах, другие — в более коротких амстердамских, и корабль получился толще с одной стороны."],
    }),
  ],
  "origami-animals": [
    "mechanism fox",
    closer(
      `**The man who invented the folding symbols.** **Akira Yoshizawa** worked in a factory in Japan as a young man and folded paper in every spare moment. He created more than **50,000** models: animals, flowers, faces. In the 1950s he invented a simple way to draw the steps, with dashed lines for folds and arrows for directions. Today origami books in every country use his symbols, so you can fold from a book in a language you cannot read.

**Origami helps engineers.** The American **Robert Lang** worked for NASA as a scientist and became an origami artist. He uses computers to design models with hundreds of folds. He has helped engineers work out how to fold a huge lens for a space telescope so that it fits inside a rocket, and his methods have been used to plan how airbags fold up inside cars.`,
      `**Մարդը, որ հնարեց ծալման նշանները։** **Ակիրա Յոշիձավան** երիտասարդ տարիքում աշխատում էր Ճապոնիայի մի գործարանում և ամեն ազատ րոպե թուղթ էր ծալում։ Նա ստեղծեց ավելի քան **50 000** մոդել՝ կենդանիներ, ծաղիկներ, դեմքեր։ 1950-ական թվականներին նա հնարեց քայլերը նկարելու մի պարզ եղանակ՝ ծալքերի համար կետագծեր, ուղղությունների համար՝ սլաքներ։ Այսօր բոլոր երկրների օրիգամիի գրքերն օգտագործում են նրա նշանները, ուստի կարող ես ծալել նույնիսկ քեզ անծանոթ լեզվով գրքից։

**Օրիգամին օգնում է ինժեներներին։** Ամերիկացի **Ռոբերտ Լանգը** աշխատում էր ՆԱՍԱ-ում որպես գիտնական և դարձավ օրիգամիի վարպետ։ Նա համակարգչով մոդելներ է նախագծում՝ հարյուրավոր ծալքերով։ Նա օգնել է ինժեներներին պարզել, թե ինչպես ծալել տիեզերական աստղադիտակի հսկայական ոսպնյակը, որ այն տեղավորվի հրթիռի մեջ, իսկ նրա մեթոդներն օգտագործվել են՝ պլանավորելու, թե ինչպես են ծալվում ավտոմեքենաների անվտանգության բարձիկները։`,
      `**Человек, который придумал знаки оригами.** **Акира Ёсидзава** в молодости работал на заводе в Японии и складывал бумагу в каждую свободную минуту. Он создал больше **50 000** моделей: животных, цветы, лица. В 1950-х годах он придумал простой способ рисовать шаги — пунктир для сгибов и стрелки для направлений. Сегодня книги по оригами во всех странах используют его знаки, поэтому можно складывать даже по книге на незнакомом языке.

**Оригами помогает инженерам.** Американец **Роберт Лэнг** работал учёным в НАСА и стал мастером оригами. Он придумывает модели с сотнями сгибов на компьютере. Он помогал инженерам понять, как сложить огромную линзу космического телескопа, чтобы она поместилась в ракету, а его методы использовали, чтобы рассчитать, как складываются подушки безопасности в автомобилях.`,
    ),
    ask(2, {
      en: ["Who invented the dashed lines and arrows used in origami diagrams?", ["Robert Lang", "Akira Yoshizawa", "Koryo Miura"], "In the 1950s Yoshizawa invented the symbols that origami books all over the world still use."],
      hy: ["Ո՞վ է հնարել օրիգամիի գծագրերում օգտագործվող կետագծերն ու սլաքները։", ["Ռոբերտ Լանգը", "Ակիրա Յոշիձավան", "Կորյո Միուրան"], "1950-ական թվականներին Յոշիձավան հնարեց այն նշանները, որոնք մինչև հիմա օգտագործում են ամբողջ աշխարհի օրիգամիի գրքերը։"],
      ru: ["Кто придумал пунктир и стрелки в схемах оригами?", ["Роберт Лэнг", "Акира Ёсидзава", "Корё Миура"], "В 1950-х годах Ёсидзава придумал знаки, которыми до сих пор пользуются книги по оригами во всём мире."],
    }),
  ],
  "cardboard-house": [
    "diagram housenet",
    closer(
      `**Eleven ways to unfold a cube.** The cross-shaped net is not the only one! If you cut a cardboard cube along different edges and lay it flat, you can get **11** different nets, and every one of them folds back into the same cube. Try drawing a few on squared paper: a row of four squares with one above and one below, a staircase, a zigzag. Shapes that are only turned or flipped do not count as new.

**Real houses made of paper.** In 1995 a strong earthquake destroyed many homes in the Japanese city of **Kobe**. The architect **Shigeru Ban** built small houses for families who had lost theirs, with walls made of **cardboard tubes** and foundations of beer crates filled with sandbags. He also built a church of paper tubes there. In 2014 he received the most famous prize in architecture.`,
      `**Խորանարդը բացելու տասնմեկ եղանակ։** Խաչաձև փռվածքը միակը չէ։ Եթե ստվարաթղթե խորանարդը կտրես տարբեր կողերով և փռես հարթության վրա, կարող ես ստանալ **11** տարբեր փռվածք, և դրանցից յուրաքանչյուրը ծալվում է նույն խորանարդը։ Փորձի՛ր մի քանիսը նկարել վանդակավոր թղթի վրա՝ չորս քառակուսու շարք՝ մեկը վերևում և մեկը ներքևում, աստիճան, զիգզագ։ Միայն պտտված կամ շրջված ձևերը նորի տեղ չեն անցնում։

**Թղթից իսկական տներ։** 1995 թվականին ուժեղ երկրաշարժն ավերեց ճապոնական **Կոբե** քաղաքի շատ տներ։ Ճարտարապետ **Սիգերու Բանը** տուն կորցրած ընտանիքների համար փոքրիկ տներ կառուցեց՝ **ստվարաթղթե խողովակներից** պատերով, իսկ ավազի պարկերով լցված գարեջրի արկղերից հիմքով։ Այնտեղ նա նաև թղթե խողովակներից եկեղեցի կառուցեց։ 2014 թվականին նա ստացավ ճարտարապետության ամենահայտնի մրցանակը։`,
      `**Одиннадцать способов развернуть куб.** Развёртка-крест не единственная! Если разрезать картонный куб по разным рёбрам и разложить на плоскости, можно получить **11** разных развёрток, и каждая складывается обратно в тот же куб. Попробуй нарисовать несколько на клетчатой бумаге: ряд из четырёх квадратов с одним сверху и одним снизу, лесенку, зигзаг. Фигуры, которые только повёрнуты или перевёрнуты, новыми не считаются.

**Настоящие дома из бумаги.** В 1995 году сильное землетрясение разрушило много домов в японском городе **Кобе**. Архитектор **Сигэру Бан** построил маленькие домики для семей, потерявших жильё, со стенами из **картонных труб** и фундаментом из пивных ящиков, наполненных мешками с песком. Там же он построил церковь из бумажных труб. В 2014 году он получил самую известную премию в архитектуре.`,
    ),
    ask(3, {
      en: ["How many different nets does a cube have?", ["6", "24", "11"], "Cutting a cube along different edges gives exactly 11 different flat nets."],
      hy: ["Քանի՞ տարբեր փռվածք ունի խորանարդը։", ["6", "24", "11"], "Խորանարդը տարբեր կողերով կտրելով՝ ստացվում է ճիշտ 11 տարբեր հարթ փռվածք։"],
      ru: ["Сколько разных развёрток у куба?", ["6", "24", "11"], "Разрезая куб по разным рёбрам, получают ровно 11 разных плоских развёрток."],
    }),
  ],
  "fabric-and-threads": [
    "diagram weave",
    closer(
      `**Needles from the Ice Age.** The sewing needle is one of the oldest tools people have. Tens of thousands of years ago, people were already carving fine needles with an eye out of bone. With them they sewed close-fitting clothes from animal skins, and warm sewn clothes helped people survive the cold of the Ice Age.

**The secret in a walking stick.** For a very long time only **China** knew how silk was made, and the secret was strictly guarded. According to the Byzantine historian **Procopius**, around the year 550 two monks hid silkworm eggs inside their **hollow walking sticks** and carried them all the way to Emperor **Justinian** in Constantinople. After that, silk began to be made in Europe too.`,
      `**Ասեղներ սառցադաշտային դարաշրջանից։** Կարի ասեղը մարդկանց ամենահին գործիքներից մեկն է։ Տասնյակ հազարավոր տարիներ առաջ մարդիկ արդեն ոսկորից բարակ ասեղներ էին փորագրում՝ ասեղնանցքով։ Դրանցով նրանք կենդանիների մորթուց հագուստ էին կարում, որ ամուր նստեր մարմնին, և տաք, կարված հագուստը մարդկանց օգնեց գոյատևել սառցադաշտային դարաշրջանի ցրտին։

**Գաղտնիքը՝ ձեռնափայտի մեջ։** Շատ երկար ժամանակ միայն **Չինաստանը** գիտեր, թե ինչպես է պատրաստվում մետաքսը, և գաղտնիքը խստորեն պահպանվում էր։ Բյուզանդական պատմիչ **Պրոկոպիոսի** վկայությամբ՝ մոտ 550 թվականին երկու վանական շերամի ձվիկները թաքցրին իրենց **սնամեջ ձեռնափայտերի** մեջ և տարան մինչև Կոստանդնուպոլիս՝ **Հուստինիանոս** կայսրին։ Դրանից հետո մետաքս սկսեցին պատրաստել նաև Եվրոպայում։`,
      `**Иглы ледникового периода.** Швейная игла — один из самых древних инструментов человека. Десятки тысяч лет назад люди уже вырезали из кости тонкие иглы с ушком. Ими шили из шкур животных одежду, плотно облегающую тело, и тёплая сшитая одежда помогла людям выжить в холод ледникового периода.

**Секрет в посохе.** Очень долго только **Китай** знал, как делают шёлк, и этот секрет строго охраняли. По словам византийского историка **Прокопия**, около 550 года два монаха спрятали яички шелкопряда в **полых посохах** и донесли их до самого Константинополя, к императору **Юстиниану**. После этого шёлк стали делать и в Европе.`,
    ),
    ask(1, {
      en: ["Where did the monks hide the silkworm eggs?", ["In hollow walking sticks", "In loaves of bread", "In their shoes"], "According to Procopius, the eggs were carried to Constantinople inside hollow walking sticks around 550."],
      hy: ["Որտե՞ղ էին վանականները թաքցրել շերամի ձվիկները։", ["Սնամեջ ձեռնափայտերի մեջ", "Հացի մեջ", "Կոշիկների մեջ"], "Պրոկոպիոսի վկայությամբ՝ ձվիկները մոտ 550 թվականին Կոստանդնուպոլիս տարան սնամեջ ձեռնափայտերի մեջ։"],
      ru: ["Где монахи спрятали яички шелкопряда?", ["В полых посохах", "В хлебе", "В обуви"], "По словам Прокопия, около 550 года яички донесли до Константинополя внутри полых посохов."],
    }),
  ],
  "running-stitch": [
    "mechanism running",
    closer(
      `**Patterns that keep you warm.** In Japan farmers and fishermen used to sew layers of old cloth together with rows of running stitch. This is called **sashiko**, "little stabs". The stitching made work clothes thick, warm and strong, and holes could be patched for years. White thread on indigo-blue cloth made beautiful patterns of waves, diamonds and stars, and today people sew sashiko just for its beauty.

**Stitches that heal.** Doctors in ancient Egypt already sewed up wounds more than 3,500 years ago: an old papyrus describes how. Surgeons still close wounds with a needle and thread today. Some modern threads even **dissolve by themselves** inside the body once the wound has healed, so they never need to be taken out.`,
      `**Նախշեր, որ տաքացնում են։** Ճապոնիայում հողագործներն ու ձկնորսներն առաջ ասեղով կարի շարքերով միասին էին կարում հին կտորի մի քանի շերտ։ Դա կոչվում է **սաշիկո**՝ «փոքրիկ ծակոցներ»։ Կարն աշխատանքային հագուստը դարձնում էր հաստ, տաք և ամուր, և անցքերը կարելի էր տարիներ շարունակ կարկատել։ Լեղակագույն կտորի վրա սպիտակ թելը գեղեցիկ նախշեր էր կազմում՝ ալիքներ, շեղանկյուններ և աստղեր, և այսօր մարդիկ սաշիկո են կարում պարզապես գեղեցկության համար։

**Կարեր, որ բուժում են։** Հին Եգիպտոսի բժիշկներն արդեն ավելի քան 3500 տարի առաջ վերքեր էին կարում․ մի հին պապիրուս նկարագրում է, թե ինչպես։ Վիրաբույժներն այսօր էլ վերքերը փակում են ասեղով և թելով։ Որոշ ժամանակակից թելեր նույնիսկ **ինքնիրեն լուծվում են** մարմնի ներսում, երբ վերքն արդեն լավացել է, ուստի դրանք հանելու կարիք չկա։`,
      `**Узоры, которые греют.** В Японии крестьяне и рыбаки сшивали вместе несколько слоёв старой ткани рядами шва «вперёд иголку». Это называется **сасико** — «маленькие уколы». Строчки делали рабочую одежду толстой, тёплой и прочной, а дырки можно было годами латать. Белая нитка на ткани цвета индиго складывалась в красивые узоры — волны, ромбы и звёзды, и сегодня сасико вышивают просто ради красоты.

**Швы, которые лечат.** Врачи Древнего Египта зашивали раны уже больше 3500 лет назад: старый папирус описывает, как это делать. Хирурги и сегодня закрывают раны иглой и ниткой. Некоторые современные нитки даже **рассасываются сами** внутри тела, когда рана заживёт, так что их не нужно снимать.`,
    ),
    ask(2, {
      en: ["What is Japanese sashiko?", ["A kind of glue", "Rows of running stitch that join layers of cloth", "A wooden button"], "Farmers and fishermen stitched old cloth together in layers to make warm, strong work clothes."],
      hy: ["Ի՞նչ է ճապոնական սաշիկոն։", ["Սոսնձի տեսակ", "Առաջ ասեղով կարի շարքեր, որոնք միացնում են կտորի շերտերը", "Փայտե կոճակ"], "Հողագործներն ու ձկնորսները հին կտորը շերտերով կարում էին իրար՝ տաք և ամուր աշխատանքային հագուստ ստանալու համար։"],
      ru: ["Что такое японское сасико?", ["Вид клея", "Ряды шва «вперёд иголку», соединяющие слои ткани", "Деревянная пуговица"], "Крестьяне и рыбаки сшивали старую ткань слоями, чтобы получить тёплую и прочную рабочую одежду."],
    }),
  ],
  "sewing-a-button": [
    "mechanism button",
    closer(
      `**Buttons were jewels first.** The oldest button we know of is about **5,000** years old. It was carved from a shell in the Indus Valley, in what is now Pakistan. It had holes, but it was sewn on as a decoration, not to fasten anything. **Buttonholes** appeared in Europe only about 700 years ago. After that, buttons became fasteners, and rich people showed off by wearing dozens of them, made of silver, ivory and precious stones.

**Why do buttons change sides?** On men's shirts the buttons are on the right, and on women's blouses they are on the left. Nobody knows for sure why. One popular explanation is that long ago rich ladies were dressed by servants, and for a servant facing the lady, buttons on her left were easier to do up.`,
      `**Կոճակները սկզբում զարդեր էին։** Մեզ հայտնի ամենահին կոճակը մոտ **5000** տարեկան է։ Այն փորագրված է խեցուց Ինդոսի հովտում՝ այժմյան Պակիստանի տարածքում։ Այն անցքեր ուներ, բայց կարում էին որպես զարդ, ոչ թե ինչ-որ բան կոճկելու համար։ **Կոճակի անցքերը** Եվրոպայում հայտնվեցին ընդամենը մոտ 700 տարի առաջ։ Դրանից հետո կոճակները դարձան ամրակներ, իսկ հարուստ մարդիկ ցուցադրում էին իրենց հարստությունը՝ կրելով տասնյակ կոճակներ արծաթից, փղոսկրից և թանկարժեք քարերից։

**Ինչու են կոճակները փոխում կողմը։** Տղամարդու վերնաշապիկի կոճակներն աջ կողմում են, իսկ կանացի բլուզի կոճակները՝ ձախ։ Ոչ ոք հաստատ չգիտի, թե ինչու։ Տարածված բացատրություններից մեկն այն է, որ վաղուց հարուստ տիկնանց հագցնում էին սպասուհիները, և դեմ առ դեմ կանգնած սպասուհու համար տիկնոջ ձախ կողմի կոճակներն ավելի հեշտ էր կոճկել։`,
      `**Сначала пуговицы были украшениями.** Самой древней известной пуговице около **5000** лет. Её вырезали из раковины в долине Инда, на территории нынешнего Пакистана. В ней были дырочки, но её пришивали как украшение, а не чтобы что-то застёгивать. **Петли для пуговиц** появились в Европе всего около 700 лет назад. После этого пуговицы стали застёжками, а богатые люди хвастались, нося их десятками — из серебра, слоновой кости и драгоценных камней.

**Почему пуговицы меняют сторону?** На мужских рубашках пуговицы справа, а на женских блузках — слева. Точно никто не знает почему. Одно из популярных объяснений: давным-давно богатых дам одевали служанки, и служанке, стоящей лицом к даме, было удобнее застёгивать пуговицы на левой стороне.`,
    ),
    ask(3, {
      en: ["When did buttonholes appear in Europe?", ["5,000 years ago", "100 years ago", "About 700 years ago"], "Before buttonholes, buttons were mostly decorations; after them, buttons became fasteners."],
      hy: ["Ե՞րբ հայտնվեցին կոճակի անցքերն Եվրոպայում։", ["5000 տարի առաջ", "100 տարի առաջ", "Մոտ 700 տարի առաջ"], "Մինչև կոճակի անցքերը կոճակները հիմնականում զարդեր էին, իսկ դրանցից հետո դարձան ամրակներ։"],
      ru: ["Когда в Европе появились петли для пуговиц?", ["5000 лет назад", "100 лет назад", "Около 700 лет назад"], "До петель пуговицы были в основном украшениями, а после них стали застёжками."],
    }),
  ],
  "salt-dough-and-snack": [
    "diagram sandwich",
    closer(
      `**Why salt dough does not go mouldy.** Mould and bacteria need water to live. Salt pulls water out of their tiny cells, so in very salty dough they cannot grow, and your figures last for years. People used the same trick long before fridges were invented: they salted fish, meat and cheese to keep them through the winter.

**Dough figures from Ecuador.** In the village of **Calderón** near Quito, the capital of Ecuador, families have been making little figures from flour-and-water dough for generations. At first they were made for the Day of the Dead and placed on graves. Today the brightly painted dolls, animals and fruit are sold as decorations all over the world.`,
      `**Ինչու աղի խմորը չի բորբոսնում։** Բորբոսին և մանրէներին ապրելու համար ջուր է պետք։ Աղը ջուրը դուրս է քաշում նրանց մանր բջիջներից, ուստի շատ աղի խմորում նրանք չեն կարող աճել, և քո արձանիկները տարիներ շարունակ պահպանվում են։ Մարդիկ նույն հնարքն օգտագործել են սառնարանների հայտնագործումից շատ առաջ․ աղ էին անում ձուկը, միսը և պանիրը, որ ձմռանը պահեն։

**Խմորե արձանիկներ Էկվադորից։** Էկվադորի մայրաքաղաք Կիտոյի մոտ գտնվող **Կալդերոն** գյուղում ընտանիքները սերնդեսերունդ ալյուրի ու ջրի խմորից փոքրիկ արձանիկներ են պատրաստում։ Սկզբում դրանք պատրաստում էին մեռելների հիշատակի օրվա համար և դնում գերեզմաններին։ Այսօր վառ ներկված տիկնիկները, կենդանիներն ու մրգերը որպես զարդ վաճառվում են ամբողջ աշխարհում։`,
      `**Почему солёное тесто не плесневеет.** Плесени и бактериям для жизни нужна вода. Соль вытягивает воду из их крошечных клеток, поэтому в очень солёном тесте они не могут расти, и твои фигурки хранятся годами. Люди пользовались тем же приёмом задолго до изобретения холодильников: солили рыбу, мясо и сыр, чтобы сохранить их на зиму.

**Фигурки из теста из Эквадора.** В деревне **Кальдерон** недалеко от Кито, столицы Эквадора, семьи из поколения в поколение лепят фигурки из теста из муки и воды. Сначала их делали ко Дню поминовения усопших и клали на могилы. Сегодня ярко раскрашенных кукол, зверей и фрукты продают как украшения по всему миру.`,
    ),
    ask(1, {
      en: ["Why does salt dough not go mouldy?", ["Salt pulls water out of mould and bacteria", "It is kept in the fridge", "The paint kills the mould"], "Mould and bacteria need water, and salt draws it out of their cells, the same reason salted fish keeps."],
      hy: ["Ինչո՞ւ աղի խմորը չի բորբոսնում։", ["Աղը ջուրը դուրս է քաշում բորբոսից և մանրէներից", "Այն պահում են սառնարանում", "Ներկը ոչնչացնում է բորբոսը"], "Բորբոսին և մանրէներին ջուր է պետք, իսկ աղն այն դուրս է քաշում նրանց բջիջներից․ նույն պատճառով է պահպանվում աղ արած ձուկը։"],
      ru: ["Почему солёное тесто не плесневеет?", ["Соль вытягивает воду из плесени и бактерий", "Его хранят в холодильнике", "Краска убивает плесень"], "Плесени и бактериям нужна вода, а соль вытягивает её из их клеток — по той же причине хранится солёная рыба."],
    }),
  ],
};
