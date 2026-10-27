import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade10: VisualMap[number] = {
  ethnogenesis: [
    "timeline set=ethno",
    closer(
      `**Not a Persian dialect.** For a long time European scholars thought Armenian was one of the Iranian languages, because it is full of Persian words left by centuries of Parthian and Persian influence. In 1875 the German linguist **Heinrich Hübschmann** showed that those words were borrowed, while the core of the language, its numbers, family words and basic verbs, followed sound laws of its own. Since then Armenian has been treated as a **separate branch** of the Indo-European family.

**What DNA adds.** In 2016 a team of geneticists published a study of the DNA of Armenians. It suggested that the Armenian gene pool formed through the **mixing** of several ancient populations around 3000–2000 BC, and that from about 1200 BC it shows signs of staying largely **isolated**, with little new mixing. Genes cannot tell us what language people spoke, so the study does not end the debate between the theories, but it adds a new kind of evidence to it.`,
      `**Ոչ պարսկերենի բարբառ։** Երկար ժամանակ եվրոպացի գիտնականները կարծում էին, որ հայերենն իրանական լեզուներից մեկն է, որովհետև այն լի է պարթևական և պարսկական ազդեցության դարերից մնացած պարսկական բառերով։ 1875 թվականին գերմանացի լեզվաբան **Հայնրիխ Հյուբշմանը** ցույց տվեց, որ այդ բառերը փոխառություններ են, իսկ լեզվի միջուկը՝ թվականները, ազգակցական բառերը և հիմնական բայերը, ենթարկվում է իր սեփական հնչյունական օրենքներին։ Այդ ժամանակից ի վեր հայերենը համարվում է հնդեվրոպական ընտանիքի **առանձին ճյուղ**։

**Ինչ է ավելացնում ԴՆԹ-ն։** 2016 թվականին գենետիկոսների մի խումբ հրապարակեց հայերի ԴՆԹ-ի ուսումնասիրություն։ Ըստ դրա՝ հայերի գենոֆոնդը ձևավորվել է մի քանի հին բնակչությունների **խառնման** արդյունքում մոտավորապես մ.թ.ա. 3000–2000 թվականներին, իսկ մոտ մ.թ.ա. 1200 թվականից այն մեծ մասամբ **մեկուսացված** մնալու նշաններ է ցույց տալիս՝ քիչ նոր խառնումներով։ Գեները չեն կարող ասել, թե մարդիկ ինչ լեզվով էին խոսում, ուստի ուսումնասիրությունը չի ավարտում տեսությունների միջև բանավեճը, բայց նրան նոր տեսակի փաստարկ է ավելացնում։`,
      `**Не диалект персидского.** Долгое время европейские учёные считали армянский одним из иранских языков, потому что в нём множество персидских слов, оставшихся от веков парфянского и персидского влияния. В 1875 году немецкий лингвист **Генрих Хюбшман** показал, что эти слова заимствованы, а ядро языка — числительные, слова родства и основные глаголы — подчиняется собственным звуковым законам. С тех пор армянский считают **отдельной ветвью** индоевропейской семьи.

**Что добавляет ДНК.** В 2016 году группа генетиков опубликовала исследование ДНК армян. Согласно ему, армянский генофонд сложился в результате **смешения** нескольких древних популяций примерно в 3000–2000 гг. до н. э., а примерно с 1200 г. до н. э. он показывает признаки того, что оставался в основном **изолированным**, почти без новых смешений. Гены не могут сказать, на каком языке говорили люди, поэтому исследование не заканчивает спор теорий, но добавляет в него доказательства нового рода.`,
    ),
    ask(2, {
      en: ["What did Heinrich Hübschmann show in 1875?", ["Armenian is a dialect of Persian", "Armenian is a separate branch of the Indo-European family", "Armenian comes from Greek", "Armenian is related to Arabic"], "He showed that the Persian words in Armenian were borrowed and that its core had sound laws of its own."],
      hy: ["Ի՞նչ ցույց տվեց Հայնրիխ Հյուբշմանը 1875 թվականին։", ["Հայերենը պարսկերենի բարբառ է", "Հայերենը հնդեվրոպական ընտանիքի առանձին ճյուղ է", "Հայերենը ծագել է հունարենից", "Հայերենն ազգակից է արաբերենին"], "Նա ցույց տվեց, որ հայերենի պարսկական բառերը փոխառություններ են, իսկ լեզվի միջուկն ունի իր սեփական հնչյունական օրենքները։"],
      ru: ["Что показал Генрих Хюбшман в 1875 году?", ["Армянский — диалект персидского", "Армянский — отдельная ветвь индоевропейской семьи", "Армянский произошёл от греческого", "Армянский родствен арабскому"], "Он показал, что персидские слова в армянском заимствованы, а ядро языка подчиняется собственным звуковым законам."],
    }),
  ],
  "institutions-of-statehood": [
    "timeline set=statehood",
    closer(
      `**The kings' bones.** Pavstos Buzand tells that during a Persian invasion in the 360s the soldiers of **Shapur II** opened the tombs of the Arshakid kings in the fortress of Ani in Daranaghi. They wanted to carry the bones to Persia, believing that the **glory and good fortune** of the Armenian kings would go with them. The Armenian army won the bones back and buried them again at **Aghtsk**, on the slopes of Aragats, where the ruins of the royal tomb still stand.

**Crowners who became kings.** The office of **tagadir aspet**, the "crowner", belonged to the **Bagratids**: it was their hereditary right to place the crown on the head of the Arshakid king. Centuries later, in 885, a Bagratid, **Ashot I**, was crowned king himself. Most historians also consider the **Bagrationi**, who ruled Georgia until the beginning of the 19th century, to be a branch of the same family.`,
      `**Թագավորների ոսկորները։** Փավստոս Բուզանդը պատմում է, որ 360-ական թվականների պարսկական արշավանքի ժամանակ **Շապուհ II-ի** զինվորները բացեցին Դարանաղյաց Անի ամրոցում գտնվող Արշակունի թագավորների դամբարանները։ Նրանք ուզում էին ոսկորները տանել Պարսկաստան՝ հավատալով, որ դրանց հետ կգնա նաև հայոց թագավորների **փառքն ու բախտը**։ Հայոց զորքն ետ խլեց ոսկորները և նորից թաղեց **Աղցքում**՝ Արագածի լանջին, որտեղ մինչ օրս կանգուն են արքայական դամբարանի ավերակները։

**Թագադիրներ, որոնք դարձան թագավորներ։** **Թագադիր ասպետի** պաշտոնը պատկանում էր **Բագրատունիներին**. նրանց ժառանգական իրավունքն էր թագը դնել Արշակունի թագավորի գլխին։ Դարեր անց՝ 885 թվականին, Բագրատունիներից մեկը՝ **Աշոտ I-ը**, ինքը թագադրվեց թագավոր։ Պատմաբանների մեծ մասը նույն տոհմի ճյուղ է համարում նաև **Բագրատիոնիներին**, որոնք Վրաստանում իշխեցին մինչև 19-րդ դարի սկիզբը։`,
      `**Кости царей.** Фавстос Бузанд рассказывает, что во время персидского нашествия в 360-х годах воины **Шапура II** вскрыли гробницы царей Аршакидов в крепости Ани в Даранаги. Они хотели увезти кости в Персию, веря, что вместе с ними уйдут **слава и удача** армянских царей. Армянское войско отбило кости и снова похоронило их в **Агцке** на склоне Арагаца, где до сих пор стоят руины царской усыпальницы.

**Венценосцы, ставшие царями.** Должность **тагадир аспета** — «венценалагателя» — принадлежала **Багратидам**: их наследственным правом было возлагать корону на голову царя из Аршакидов. Спустя века, в 885 году, один из Багратидов, **Ашот I**, сам был коронован царём. Большинство историков считают ветвью того же рода и **Багратиони**, правивших в Грузии до начала XIX века.`,
    ),
    ask(4, {
      en: ["Why did Persian soldiers try to carry away the bones of the Arshakid kings?", ["To sell the gold in the tombs", "To put them in a museum", "To bury them in Rome", "They believed the kings' glory and good fortune would go with them"], "Pavstos Buzand says so; the Armenian army won the bones back and reburied them at Aghtsk."],
      hy: ["Ինչո՞ւ էին պարսիկ զինվորներն ուզում տանել Արշակունի թագավորների ոսկորները։", ["Դամբարանների ոսկին վաճառելու համար", "Թանգարանում դնելու համար", "Հռոմում թաղելու համար", "Հավատում էին, որ դրանց հետ կգնա թագավորների փառքն ու բախտը"], "Այդպես է պատմում Փավստոս Բուզանդը. հայոց զորքն ետ խլեց ոսկորները և նորից թաղեց Աղցքում։"],
      ru: ["Зачем персидские воины хотели увезти кости царей Аршакидов?", ["Чтобы продать золото гробниц", "Чтобы выставить их в музее", "Чтобы похоронить их в Риме", "Они верили, что вместе с ними уйдут слава и удача царей"], "Так рассказывает Фавстос Бузанд; армянское войско отбило кости и перезахоронило их в Агцке."],
    }),
  ],
  "nakharar-system": [
    "timeline set=nakhar",
    closer(
      `**A family from the far east.** Movses Khorenatsi tells that the ancestor of the **Mamikonians**, a nobleman named **Mamgun**, fled from the land of the **Chenk**, far to the east, and was received by the Armenian king, who gave him lands in Taron. Some historians link the Chenk with China, others with Central Asia. Whatever the truth, the legend shows how much a nakharar family valued an ancient and distant origin.

**A land of princes.** Families and lands were tied together: Rshtunik was the land of the Rshtunis, and Syunik that of the Syunis. The great southern province of the **Artsrunis**, **Vaspurakan**, has a name usually explained as "the land of princes", from an Iranian word for a prince. In 908 **Gagik Artsruni** was crowned king, and Vaspurakan became a kingdom of its own, next to the kingdom of the Bagratids.`,
      `**Տոհմ՝ հեռավոր արևելքից։** Մովսես Խորենացին պատմում է, որ **Մամիկոնյանների** նախնին՝ **Մամգուն** անունով մի ազնվական, փախել էր հեռավոր արևելքում գտնվող **Ճենաց երկրից**, և նրան ընդունեց հայոց թագավորը, որը նրան հողեր տվեց Տարոնում։ Որոշ պատմաբաններ Ճենքը կապում են Չինաստանի, մյուսները՝ Միջին Ասիայի հետ։ Ինչպես էլ լինի, ավանդությունը ցույց է տալիս, թե որքան էր նախարարական տոհմը գնահատում իր հին և հեռավոր ծագումը։

**Իշխանների երկիր։** Տոհմերն ու հողերը կապված էին միմյանց. Ռշտունիքը Ռշտունիների երկիրն էր, Սյունիքը՝ Սյունիների։ **Արծրունիների** մեծ հարավային նահանգի՝ **Վասպուրականի** անունը սովորաբար բացատրում են որպես «իշխանների երկիր»՝ իշխան նշանակող իրանական բառից։ 908 թվականին **Գագիկ Արծրունին** թագադրվեց թագավոր, և Վասպուրականը դարձավ առանձին թագավորություն՝ Բագրատունիների թագավորության կողքին։`,
      `**Род с далёкого востока.** Мовсес Хоренаци рассказывает, что предок **Мамиконянов**, знатный человек по имени **Мамгун**, бежал из далёкой восточной **страны Чен**, и его принял армянский царь, давший ему земли в Тароне. Одни историки связывают страну Чен с Китаем, другие — со Средней Азией. Как бы то ни было, легенда показывает, как высоко нахарарский род ценил древнее и далёкое происхождение.

**Страна князей.** Роды и земли были связаны: Рштуник был землёй Рштуни, Сюник — землёй Сюни. Название большой южной области **Арцрунидов** — **Васпуракан** — обычно объясняют как «страна князей», от иранского слова, означающего князя. В 908 году **Гагик Арцруни** был коронован царём, и Васпуракан стал отдельным царством рядом с царством Багратидов.`,
    ),
    ask(1, {
      en: ["According to Movses Khorenatsi, where did the ancestor of the Mamikonians come from?", ["From the land of the Chenk, far to the east", "From Rome", "From Egypt", "From the Balkans"], "The legend says that Mamgun fled from the land of the Chenk and received lands in Taron."],
      hy: ["Ըստ Մովսես Խորենացու՝ որտեղի՞ց էր եկել Մամիկոնյանների նախնին։", ["Հեռավոր արևելքում գտնվող Ճենաց երկրից", "Հռոմից", "Եգիպտոսից", "Բալկաններից"], "Ավանդության համաձայն՝ Մամգունը փախել էր Ճենաց երկրից և հողեր ստացել Տարոնում։"],
      ru: ["Откуда, по Мовсесу Хоренаци, пришёл предок Мамиконянов?", ["Из далёкой восточной страны Чен", "Из Рима", "Из Египта", "С Балкан"], "По легенде, Мамгун бежал из страны Чен и получил земли в Тароне."],
    }),
  ],
  "between-empires": [
    "timeline set=rivals",
    closer(
      `**Armenians on the Byzantine throne.** Many Armenians served Byzantium as soldiers, generals and officials, and some rose to the very top. **Basil I**, from a peasant family of Armenian origin settled in Thrace, became emperor in 867 and founded the **Macedonian dynasty**, which ruled until 1056, a time often called the golden age of Byzantium. **John I Tzimiskes** (969–976), another emperor of Armenian descent, led campaigns deep into Syria.

**A border city with three names.** After the partition of 387 the Armenian city of **Karin** stood on the border, and in the early 5th century the Byzantines fortified it and named it **Theodosiopolis** after Emperor Theodosius II. In 1049 the Seljuks destroyed the rich trading town of **Artsn** nearby, and many of its people moved to Karin. The city became known as **Arzan ar-Rum**, "Artsn of the Romans", and from that comes its present name, **Erzurum**.`,
      `**Հայեր՝ բյուզանդական գահին։** Շատ հայեր Բյուզանդիային ծառայում էին որպես զինվորներ, զորավարներ և պաշտոնյաներ, իսկ ոմանք հասան ամենաբարձր աստիճանին։ Թրակիայում բնակված հայկական ծագումով գյուղացիական ընտանիքից սերված **Բարսեղ I-ը** 867 թվականին դարձավ կայսր և հիմնեց **Մակեդոնական հարստությունը**, որն իշխեց մինչև 1056 թվականը. այդ ժամանակը հաճախ անվանում են Բյուզանդիայի ոսկեդար։ Հայկական ծագումով մեկ այլ կայսր՝ **Հովհաննես Չմշկիկը** (969–976), արշավներ կատարեց մինչև Սիրիայի խորքերը։

**Երեք անունով սահմանային քաղաք։** 387 թվականի բաժանումից հետո հայկական **Կարին** քաղաքը հայտնվեց սահմանին, և 5-րդ դարի սկզբին բյուզանդացիներն այն ամրացրին ու Թեոդոսիոս II կայսեր անունով կոչեցին **Թեոդոսուպոլիս**։ 1049 թվականին սելջուկներն ավերեցին մոտակա հարուստ առևտրական **Արծն** քաղաքը, և նրա բնակիչներից շատերը տեղափոխվեցին Կարին։ Քաղաքը սկսեց կոչվել **Արզն էլ-Ռում**՝ «Հռոմեացիների Արծն», և դրանից է ծագում նրա այսօրվա անունը՝ **Էրզրում**։`,
      `**Армяне на византийском троне.** Многие армяне служили Византии солдатами, полководцами и чиновниками, а некоторые поднялись на самый верх. **Василий I**, выходец из крестьянской семьи армянского происхождения, поселившейся во Фракии, в 867 году стал императором и основал **Македонскую династию**, правившую до 1056 года; это время часто называют золотым веком Византии. **Иоанн I Цимисхий** (969–976), ещё один император армянского происхождения, водил походы вглубь Сирии.

**Пограничный город с тремя именами.** После раздела 387 года армянский город **Карин** оказался на границе, и в начале V века византийцы укрепили его и назвали **Феодосиополем** в честь императора Феодосия II. В 1049 году сельджуки разрушили соседний богатый торговый город **Арцн**, и многие его жители переселились в Карин. Город стали называть **Арзан ар-Рум** — «Арцн ромеев», и отсюда его нынешнее название — **Эрзурум**.`,
    ),
    ask(3, {
      en: ["Which Byzantine emperor of Armenian origin founded the Macedonian dynasty?", ["Justinian", "Constantine the Great", "Basil I", "Theodosius II"], "Basil I became emperor in 867; his dynasty ruled until 1056."],
      hy: ["Հայկական ծագումով ո՞ր բյուզանդական կայսրը հիմնեց Մակեդոնական հարստությունը։", ["Հուստինիանոսը", "Կոստանդին Մեծը", "Բարսեղ I-ը", "Թեոդոսիոս II-ը"], "Բարսեղ I-ը կայսր դարձավ 867 թվականին. նրա հարստությունն իշխեց մինչև 1056 թվականը։"],
      ru: ["Какой византийский император армянского происхождения основал Македонскую династию?", ["Юстиниан", "Константин Великий", "Василий I", "Феодосий II"], "Василий I стал императором в 867 году; его династия правила до 1056 года."],
    }),
  ],
  "church-and-identity": [
    "timeline set=church",
    closer(
      `**A calendar of its own.** The Armenian Church counts years from **552**, so year 1 of the Armenian era began in 552. Scribes dated manuscripts in this era and wrote the year with letters, because Armenian letters also served as numbers. To turn an Armenian year into ours, add **551**. For example, a manuscript dated **ՈԾ** is from the year Ո (600) + Ծ (50) = 650 of the Armenian era, that is, 650 + 551 = **1201**.

**A quarter in Jerusalem.** Armenian pilgrims and monks have lived in **Jerusalem** since the first centuries of Christianity. Today the **Armenian Quarter** is one of the four quarters of the Old City and takes up about a sixth of it, around the **Cathedral of St James**, the seat of the Armenian Patriarch of Jerusalem. The Armenian Church is also one of the main guardians of the **Church of the Holy Sepulchre**, sharing it with the Greek Orthodox and Catholic Churches.`,
      `**Սեփական տոմար։** Հայ եկեղեցին տարիները հաշվում է **552** թվականից, ուստի հայոց թվականի 1-ին տարին սկսվել է 552-ին։ Գրիչները ձեռագրերը թվագրում էին այս թվականով և տարին գրում էին տառերով, որովհետև հայերեն տառերը նաև թվեր էին նշանակում։ Հայկական տարին մեր թվականի վերածելու համար պետք է ավելացնել **551**։ Օրինակ՝ **ՈԾ** թվականով ձեռագիրը հայոց թվականի Ո (600) + Ծ (50) = 650 թվականից է, այսինքն՝ 650 + 551 = **1201** թվականից։

**Թաղամաս՝ Երուսաղեմում։** Հայ ուխտավորներն ու վանականներն **Երուսաղեմում** ապրում են քրիստոնեության առաջին դարերից։ Այսօր **Հայկական թաղամասը** Հին քաղաքի չորս թաղամասերից մեկն է և զբաղեցնում է նրա մոտ վեցերորդ մասը՝ Երուսաղեմի հայոց պատրիարքի աթոռանիստ **Սուրբ Հակոբյանց տաճարի** շուրջը։ Հայ եկեղեցին նաև **Սուրբ Հարության տաճարի** գլխավոր պահապաններից է, որը կիսում է հույն ուղղափառ և կաթոլիկ եկեղեցիների հետ։`,
      `**Свой календарь.** Армянская церковь ведёт счёт лет от **552** года, так что 1-й год армянского летосчисления начался в 552 году. Писцы датировали рукописи по этой эре и записывали год буквами, потому что армянские буквы служили и цифрами. Чтобы перевести армянский год в наш, нужно прибавить **551**. Например, рукопись с датой **ՈԾ** относится к году Ո (600) + Ծ (50) = 650 армянской эры, то есть к 650 + 551 = **1201** году.

**Квартал в Иерусалиме.** Армянские паломники и монахи живут в **Иерусалиме** с первых веков христианства. Сегодня **Армянский квартал** — один из четырёх кварталов Старого города, он занимает около шестой его части вокруг **собора Святого Иакова**, резиденции армянского патриарха Иерусалима. Армянская церковь также один из главных хранителей **храма Гроба Господня**, который она делит с греческой православной и католической церквями.`,
    ),
    ask(3, {
      en: ["A manuscript is dated ՈԾ (650) in the Armenian era. Which year is that in our calendar?", ["650", "552", "1201", "2026"], "Armenian years start in 552, so add 551: 650 + 551 = 1201."],
      hy: ["Ձեռագիրը թվագրված է հայոց ՈԾ (650) թվականով։ Ո՞ր տարին է դա մեր թվականով։", ["650", "552", "1201", "2026"], "Հայոց թվականը սկսվում է 552-ից, ուստի ավելացնում ենք 551. 650 + 551 = 1201։"],
      ru: ["Рукопись датирована ՈԾ (650) годом армянской эры. Какой это год по нашему календарю?", ["650", "552", "1201", "2026"], "Армянское летосчисление начинается с 552 года, поэтому прибавляем 551: 650 + 551 = 1201."],
    }),
  ],
  "economy-and-social-movements": [
    "timeline set=movements",
    closer(
      `**Paulicians in Bulgaria.** Byzantine emperors moved many **Paulicians** from Armenia and Asia Minor to Thrace, around the city of Philippopolis (today's **Plovdiv**), to guard the empire's border. Their descendants kept their name for centuries, and in the 17th century many of them became Catholics. The town of **Pavlikeni** in northern Bulgaria is named after them, and in some Bulgarian villages Catholics are still called *pavlikyani*.

**An inn on the Silk Road.** In 1332 Prince **Chesar Orbelian** built a caravanserai on the high **Selim** (Vardenyats) pass, on a trade road that linked the Ararat valley with Lake Sevan. Under its stone roof travellers slept on raised platforms along the walls while their horses and camels stood in the middle. An inscription at the entrance is written in **Armenian** and **Arabic**. It is the best-preserved medieval caravanserai in Armenia.`,
      `**Պավլիկյանները Բուլղարիայում։** Բյուզանդական կայսրերը շատ **պավլիկյանների** Հայաստանից և Փոքր Ասիայից տեղափոխեցին Թրակիա՝ Ֆիլիպոպոլիս քաղաքի (այսօրվա **Պլովդիվ**) շրջակայք, որպեսզի պահպանեն կայսրության սահմանը։ Նրանց ժառանգները դարեր շարունակ պահպանեցին իրենց անունը, իսկ 17-րդ դարում նրանցից շատերը դարձան կաթոլիկներ։ Հյուսիսային Բուլղարիայի **Պավլիկենի** քաղաքը կոչվել է նրանց անունով, և բուլղարական որոշ գյուղերում կաթոլիկներին մինչ օրս անվանում են *պավլիկյանի*։

**Իջևանատուն՝ Մետաքսի ճանապարհին։** 1332 թվականին **Չեսար Օրբելյան** իշխանը բարձրադիր **Սելիմի** (Վարդենյաց) լեռնանցքում քարավանատուն կառուցեց Արարատյան դաշտը Սևանա լճի հետ կապող առևտրական ճանապարհին։ Նրա քարե կամարների տակ ճանապարհորդները քնում էին պատերի երկայնքով բարձրացված հարթակներին, իսկ նրանց ձիերն ու ուղտերը կանգնում էին մեջտեղում։ Մուտքի արձանագրությունը գրված է **հայերեն** և **արաբերեն**։ Դա Հայաստանի լավագույնս պահպանված միջնադարյան քարավանատունն է։`,
      `**Павликиане в Болгарии.** Византийские императоры переселили многих **павликиан** из Армении и Малой Азии во Фракию, в окрестности Филиппополя (нынешнего **Пловдива**), чтобы они охраняли границу империи. Их потомки веками сохраняли своё имя, а в XVII веке многие из них стали католиками. Город **Павликени** на севере Болгарии назван в их честь, а в некоторых болгарских сёлах католиков до сих пор называют *павликяне*.

**Постоялый двор на Шёлковом пути.** В 1332 году князь **Чесар Орбелян** построил караван-сарай на высоком перевале **Селим** (Варденяц), на торговой дороге, связывавшей Араратскую долину с озером Севан. Под его каменными сводами путники спали на возвышениях вдоль стен, а их лошади и верблюды стояли посередине. Надпись у входа сделана на **армянском** и **арабском** языках. Это лучше всего сохранившийся средневековый караван-сарай Армении.`,
    ),
    ask(2, {
      en: ["Which Bulgarian town is named after the Paulicians?", ["Plovdiv", "Pavlikeni", "Sofia", "Varna"], "Byzantine emperors resettled Paulicians in Thrace; the town of Pavlikeni carries their name."],
      hy: ["Բուլղարիայի ո՞ր քաղաքն է կոչվել պավլիկյանների անունով։", ["Պլովդիվը", "Պավլիկենին", "Սոֆիան", "Վառնան"], "Բյուզանդական կայսրերը պավլիկյաններին վերաբնակեցրին Թրակիայում. Պավլիկենի քաղաքը կրում է նրանց անունը։"],
      ru: ["Какой болгарский город назван в честь павликиан?", ["Пловдив", "Павликени", "София", "Варна"], "Византийские императоры переселили павликиан во Фракию; город Павликени носит их имя."],
    }),
  ],
  "working-with-sources": [
    "timeline set=historians",
    closer(
      `**One story, many languages.** The *History* of **Agathangelos**, which tells how Gregory the Illuminator converted King Trdat, survives not only in Armenian but also in **Greek**, **Arabic** and **Georgian** versions, and they differ in many details. By comparing them, scholars can see how the story changed as it travelled from one church to another. Even the author's name is a puzzle: in Greek *Agathangelos* means "bringer of good news", and many scholars think it is a pen name.

**A historian taken prisoner.** In 1236 the Mongols captured the young monk **Kirakos Gandzaketsi** together with his teacher **Vanakan**. For some time Kirakos had to serve them as a **secretary**, writing and reading letters, before he managed to escape. In his *History* he described the Mongols from what he had seen himself and even wrote down a short list of **Mongolian words** with their Armenian meanings, which linguists still study today.`,
      `**Մեկ պատմություն, շատ լեզուներ։** **Ագաթանգեղոսի** «Պատմությունը», որը պատմում է, թե ինչպես Գրիգոր Լուսավորիչը դարձի բերեց Տրդատ թագավորին, պահպանվել է ոչ միայն հայերեն, այլև **հունարեն**, **արաբերեն** և **վրացերեն** տարբերակներով, որոնք շատ մանրամասներով տարբերվում են։ Համեմատելով դրանք՝ գիտնականները տեսնում են, թե ինչպես էր պատմությունը փոխվում՝ մի եկեղեցուց մյուսն անցնելով։ Նույնիսկ հեղինակի անունն է հանելուկ. հունարեն *Ագաթանգեղոս* նշանակում է «բարի լուր բերող», և շատ գիտնականներ կարծում են, որ դա գրական կեղծանուն է։

**Գերի ընկած պատմիչ։** 1236 թվականին մոնղոլները գերեցին երիտասարդ վանական **Կիրակոս Գանձակեցուն** իր ուսուցչի՝ **Վանականի** հետ։ Որոշ ժամանակ Կիրակոսը ստիպված էր ծառայել նրանց որպես **քարտուղար**՝ գրելով և կարդալով նամակներ, մինչև որ կարողացավ փախչել։ Իր «Պատմության» մեջ նա նկարագրեց մոնղոլներին իր տեսածի հիման վրա և նույնիսկ գրի առավ **մոնղոլերեն բառերի** մի կարճ ցանկ՝ դրանց հայերեն իմաստներով, որը լեզվաբանները մինչ օրս ուսումնասիրում են։`,
      `**Одна история, много языков.** «История» **Агатангелоса**, рассказывающая, как Григорий Просветитель обратил царя Трдата, сохранилась не только на армянском, но и в **греческой**, **арабской** и **грузинской** версиях, которые во многих деталях расходятся. Сравнивая их, учёные видят, как история менялась, переходя из одной церкви в другую. Загадка даже имя автора: по-гречески *Агатангелос* значит «несущий добрую весть», и многие учёные считают его псевдонимом.

**Историк в плену.** В 1236 году монголы взяли в плен молодого монаха **Киракоса Гандзакеци** вместе с его учителем **Ванаканом**. Некоторое время Киракосу пришлось служить у них **секретарём**, писать и читать письма, пока ему не удалось бежать. В своей «Истории» он описал монголов по собственным наблюдениям и даже записал короткий список **монгольских слов** с их армянскими значениями, который лингвисты изучают до сих пор.`,
    ),
    ask(1, {
      en: ["Why is Kirakos Gandzaketsi a valuable source on the Mongols?", ["He was their prisoner and secretary and saw them himself", "He was a Mongol khan", "He lived 500 years later", "He only copied Greek books"], "Captured in 1236, he described the Mongols from his own experience and even listed Mongolian words."],
      hy: ["Ինչո՞ւ է Կիրակոս Գանձակեցին արժեքավոր աղբյուր մոնղոլների մասին։", ["Նա նրանց գերին ու քարտուղարն էր և ինքն էր տեսել նրանց", "Նա մոնղոլ խան էր", "Նա ապրել է 500 տարի անց", "Նա միայն արտագրում էր հունական գրքեր"], "1236 թվականին գերի ընկնելով՝ նա մոնղոլներին նկարագրեց իր փորձով և նույնիսկ գրի առավ մոնղոլերեն բառեր։"],
      ru: ["Почему Киракос Гандзакеци — ценный источник о монголах?", ["Он был их пленником и секретарём и видел их сам", "Он был монгольским ханом", "Он жил на 500 лет позже", "Он только переписывал греческие книги"], "Попав в плен в 1236 году, он описал монголов по собственному опыту и даже записал монгольские слова."],
    }),
  ],
};
