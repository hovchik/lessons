import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade7: VisualMap[number] = {
  byzantium: [
    "timeline set=byz",
    closer(
      `**Fire that burned on water.** Around 672 an engineer named **Kallinikos**, a refugee from Syria, brought the Byzantines a terrible new weapon. Sprayed through bronze tubes from the bows of ships, the liquid caught fire and kept burning even on the sea. This **Greek fire** helped save Constantinople during the great Arab sieges. Its recipe was kept so secret, known only to a few families, that it was eventually lost, and scientists still argue about what it contained.

**Cyril did not invent Cyrillic.** In 863 the brothers **Cyril** and **Methodius** went to the Slavs of Moravia to preach in their own language. For this Cyril created a new alphabet, but it was the **Glagolitic** script, with unusual looped letters. The alphabet we now call **Cyrillic**, closer to Greek letters, was made a little later by their pupils in Bulgaria and named in honour of their teacher.`,
      `**Ջրի վրա այրվող կրակ։** Մոտ 672 թվականին Սիրիայից փախած **Կալլինիկոս** անունով մի ինժեներ բյուզանդացիներին բերեց սարսափելի նոր զենք։ Նավերի քթից բրոնզե խողովակներով ցայտեցվող հեղուկը բռնկվում էր և շարունակում այրվել նույնիսկ ծովի վրա։ Այս **հունական կրակն** օգնեց փրկել Կոստանդնուպոլիսն արաբների մեծ պաշարումների ժամանակ։ Նրա բաղադրատոմսն այնքան գաղտնի էր պահվում, որ հայտնի էր միայն մի քանի ընտանիքների, որ ի վերջո կորավ, և գիտնականները մինչ օրս վիճում են, թե ինչ էր դրա մեջ։

**Կյուրեղը չի ստեղծել կյուրեղագիրը։** 863 թվականին **Կյուրեղ** և **Մեթոդիոս** եղբայրները մեկնեցին Մորավիայի սլավոնների մոտ՝ քարոզելու նրանց մայրենի լեզվով։ Դրա համար Կյուրեղը ստեղծեց նոր այբուբեն, բայց դա **գլագոլիցան** էր՝ անսովոր օղակաձև տառերով։ Այն այբուբենը, որն այժմ կոչում ենք **կյուրեղագիր**, որն ավելի մոտ է հունական տառերին, մի փոքր ուշ ստեղծեցին նրանց աշակերտները Բուլղարիայում և անվանեցին իրենց ուսուցչի պատվին։`,
      `**Огонь, горевший на воде.** Около 672 года инженер по имени **Каллиник**, беженец из Сирии, принёс византийцам страшное новое оружие. Жидкость, которую выбрасывали через бронзовые трубы с носа кораблей, вспыхивала и продолжала гореть даже на море. Этот **греческий огонь** помог спасти Константинополь во время больших арабских осад. Его рецепт хранили в такой тайне, известной лишь нескольким семьям, что в конце концов он был утрачен, и учёные до сих пор спорят, что в него входило.

**Кирилл не изобретал кириллицу.** В 863 году братья **Кирилл** и **Мефодий** отправились к славянам Моравии, чтобы проповедовать на их родном языке. Для этого Кирилл создал новую азбуку, но это была **глаголица** с необычными петлистыми буквами. Азбуку, которую мы сейчас называем **кириллицей** и которая ближе к греческим буквам, чуть позже создали их ученики в Болгарии и назвали в честь своего учителя.`,
    ),
    ask(3, {
      en: ["Which alphabet did Cyril himself create for the Slavs?", ["Cyrillic", "Latin", "Glagolitic", "Greek"], "Cyril made the Glagolitic script; Cyrillic was created later by his pupils in Bulgaria and named after him."],
      hy: ["Ո՞ր այբուբենն է Կյուրեղն ինքը ստեղծել սլավոնների համար։", ["Կյուրեղագիրը", "Լատինականը", "Գլագոլիցան", "Հունականը"], "Կյուրեղը ստեղծեց գլագոլիցան, իսկ կյուրեղագիրը հետագայում ստեղծեցին նրա աշակերտները Բուլղարիայում և անվանեցին նրա պատվին։"],
      ru: ["Какую азбуку создал для славян сам Кирилл?", ["Кириллицу", "Латиницу", "Глаголицу", "Греческую"], "Кирилл создал глаголицу; кириллицу позже создали его ученики в Болгарии и назвали в его честь."],
    }),
  ],
  "franks-and-feudalism": [
    "timeline set=franks",
    closer(
      `**An emperor learning to write.** Charlemagne's biographer **Einhard** tells that the emperor could read and loved to hear books aloud, but writing came hard to him. He kept writing tablets under his pillow to practise in spare moments, but, Einhard says, he had started too late. Yet scholars at his court created a clear, rounded handwriting, the **Carolingian minuscule**. Centuries later printers copied it, and our small letters today descend from it.

**An elephant for the emperor.** The caliph **Harun al-Rashid** of Baghdad, the ruler of the "Thousand and One Nights", exchanged envoys with Charlemagne. Among his gifts was a living **elephant** named **Abul-Abbas**, which reached Charlemagne's capital, Aachen, in 802 after a journey through Africa and across the sea. The Frankish chronicles even recorded the year the elephant died, 810.`,
      `**Գրել սովորող կայսրը։** Կարլոս Մեծի կենսագիր **Էյնհարդը** պատմում է, որ կայսրը կարդալ գիտեր և սիրում էր գրքեր լսել բարձրաձայն, բայց գրելը նրան դժվար էր տրվում։ Նա գրատախտակներ էր պահում բարձի տակ՝ ազատ րոպեներին վարժվելու համար, բայց, ըստ Էյնհարդի, շատ ուշ էր սկսել։ Սակայն նրա արքունիքի գիտնականները ստեղծեցին պարզ, կլորավուն գիր՝ **կարոլինգյան մանրատառը**։ Դարեր անց տպագրիչները կրկնօրինակեցին այն, և այսօրվա լատինական փոքրատառերը սերում են դրանից։

**Փիղ՝ կայսեր համար։** Բաղդադի խալիֆա **Հարուն ալ-Ռաշիդը**՝ «Հազար ու մի գիշերի» տիրակալը, դեսպաններ էր փոխանակում Կարլոս Մեծի հետ։ Նրա նվերների թվում էր կենդանի **փիղ**՝ **Աբուլ-Աբբաս** անունով, որն Աֆրիկայով և ծովով ճամփորդելուց հետո 802 թվականին հասավ Կարլոսի մայրաքաղաք Աախեն։ Ֆրանկական տարեգրությունները նույնիսկ գրանցել են փղի մահվան տարին՝ 810։`,
      `**Император учится писать.** Биограф Карла Великого **Эйнхард** рассказывает, что император умел читать и любил слушать чтение вслух, но письмо давалось ему с трудом. Он держал под подушкой дощечки для письма, чтобы упражняться в свободную минуту, но, по словам Эйнхарда, начал слишком поздно. Зато учёные при его дворе создали ясный округлый почерк — **каролингский минускул**. Века спустя печатники скопировали его, и от него происходят наши сегодняшние строчные латинские буквы.

**Слон для императора.** Багдадский халиф **Харун ар-Рашид**, правитель из «Тысячи и одной ночи», обменивался посольствами с Карлом Великим. Среди его подарков был живой **слон** по имени **Абуль-Аббас**, который после пути через Африку и море в 802 году прибыл в столицу Карла — Ахен. Франкские хроники записали даже год смерти слона — 810-й.`,
    ),
    ask(2, {
      en: ["What gift did Harun al-Rashid send to Charlemagne?", ["A printing press", "An elephant named Abul-Abbas", "A golden crown", "A fleet of ships"], "The elephant reached Aachen in 802, and the chronicles recorded its death in 810."],
      hy: ["Ի՞նչ նվեր ուղարկեց Հարուն ալ-Ռաշիդը Կարլոս Մեծին։", ["Տպագրական մեքենա", "Աբուլ-Աբբաս անունով փիղ", "Ոսկե թագ", "Նավատորմ"], "Փիղը 802 թվականին հասավ Աախեն, իսկ տարեգրությունները գրանցեցին նրա մահը 810 թվականին։"],
      ru: ["Какой подарок Харун ар-Рашид прислал Карлу Великому?", ["Печатный станок", "Слона по имени Абуль-Аббас", "Золотую корону", "Флот кораблей"], "Слон прибыл в Ахен в 802 году, а хроники записали его смерть в 810 году."],
    }),
  ],
  "islam-and-caliphate": [
    "timeline set=caliph",
    closer(
      `**Algebra and broken bones.** The title of al-Khwarizmi's book used the word **al-jabr**, which means "restoring" or "putting broken parts back together": in his method you move a subtracted term to the other side of an equation and "restore" it. The same word was used for setting broken bones. In medieval Spain a bone-setter was called an *algebrista*, and the word appears with this meaning even in "Don Quixote".

**Paper reaches Baghdad.** A famous story says that after a battle at **Talas** in Central Asia in 751, Chinese prisoners taught the Arabs to make paper in Samarkand. Whatever the truth, by the end of the 8th century there were paper mills in **Baghdad**. Paper was much cheaper than parchment, so books became easier to copy, and Baghdad had a whole street of booksellers and copyists. Paper later travelled on to Spain and the rest of Europe.`,
      `**Հանրահաշիվ և կոտրված ոսկորներ։** Ալ-Խորեզմիի գրքի վերնագրում օգտագործված էր **ալ-ջաբր** բառը, որը նշանակում է «վերականգնում» կամ «կոտրված մասերը նորից միացնել». նրա եղանակով հանվող անդամը տեղափոխում ես հավասարման մյուս կողմը և «վերականգնում» այն։ Նույն բառն օգտագործվում էր կոտրված ոսկորները տեղը դնելու համար։ Միջնադարյան Իսպանիայում ոսկորներ տեղը դնողին անվանում էին *ալխեբրիստա*, և այդ իմաստով բառը հանդիպում է նույնիսկ «Դոն Կիխոտում»։

**Թուղթը հասնում է Բաղդադ։** Մի հայտնի պատմություն ասում է, որ 751 թվականին Միջին Ասիայում՝ **Թալասի** ճակատամարտից հետո, չինացի գերիներն արաբներին Սամարղանդում սովորեցրին թուղթ պատրաստել։ Ինչպես էլ լինի, 8-րդ դարի վերջին **Բաղդադում** արդեն թղթի արհեստանոցներ կային։ Թուղթը մագաղաթից շատ ավելի էժան էր, ուստի գրքերն ավելի հեշտ էին արտագրվում, և Բաղդադում գրավաճառների ու գրիչների մի ամբողջ փողոց կար։ Հետագայում թուղթն անցավ Իսպանիա և Եվրոպայի մնացած մասը։`,
      `**Алгебра и сломанные кости.** В названии книги аль-Хорезми стояло слово **аль-джабр**, что значит «восстановление», «соединение сломанных частей»: по его способу вычитаемый член переносят в другую часть уравнения и «восстанавливают». Тем же словом называли вправление сломанных костей. В средневековой Испании костоправа называли *альхебриста*, и в этом значении слово встречается даже в «Дон Кихоте».

**Бумага приходит в Багдад.** Знаменитая история гласит, что после битвы при **Таласе** в Средней Азии в 751 году китайские пленные научили арабов делать бумагу в Самарканде. Как бы то ни было, к концу VIII века в **Багдаде** уже были бумажные мастерские. Бумага была гораздо дешевле пергамента, поэтому книги стало легче переписывать, и в Багдаде была целая улица книготорговцев и переписчиков. Позже бумага пришла в Испанию и остальную Европу.`,
    ),
    ask(4, {
      en: ["What did the word \"al-jabr\" originally mean?", ["A number", "A star", "A desert", "Restoring, putting broken parts back together"], "It was also used for setting broken bones; a Spanish bone-setter was an algebrista."],
      hy: ["Ի՞նչ էր սկզբում նշանակում «ալ-ջաբր» բառը։", ["Թիվ", "Աստղ", "Անապատ", "Վերականգնում, կոտրված մասերը նորից միացնել"], "Այն օգտագործվում էր նաև կոտրված ոսկորները տեղը դնելու իմաստով. իսպանացի ոսկրաբույժը կոչվում էր ալխեբրիստա։"],
      ru: ["Что изначально означало слово «аль-джабр»?", ["Число", "Звезду", "Пустыню", "Восстановление, соединение сломанных частей"], "Так называли и вправление костей; испанского костоправа звали альхебриста."],
    }),
  ],
  crusades: [
    "timeline set=crusades",
    closer(
      `**An emperor lost in a Cilician river.** In 1190 the German emperor **Frederick Barbarossa** led a huge army on the Third Crusade. On 10 June, while crossing the river **Saleph** (today's Göksu) in Cilicia, he drowned. Without him most of his army turned back. German legend later said that Barbarossa did not die at all but sleeps inside the Kyffhäuser mountain, his red beard growing through a stone table, waiting to return when his country needs him.

**The first Crusader state was Armenian Edessa.** In 1098 the knight **Baldwin of Boulogne** left the main army and rode to **Edessa**, a city with many Armenians, ruled by the Armenian prince **Thoros**. Thoros adopted Baldwin as his son to win his help against the Turks, but within weeks Thoros was killed in a revolt, and Baldwin became count. So the **County of Edessa** became the first Crusader state, and Baldwin married an Armenian noblewoman.`,
      `**Կիլիկյան գետում կորած կայսրը։** 1190 թվականին գերմանական կայսր **Ֆրիդրիխ Բարբարոսան** հսկայական բանակ առաջնորդեց Երրորդ խաչակրաց արշավանքի։ Հունիսի 10-ին Կիլիկիայում՝ **Սալեֆ** (այսօրվա Գյոքսու) գետն անցնելիս, նա խեղդվեց։ Առանց նրա բանակի մեծ մասն ետ դարձավ։ Գերմանական ավանդությունը հետագայում ասում էր, որ Բարբարոսան ամենևին չի մահացել, այլ քնած է Կիֆհոյզեր լեռան ներսում, և նրա կարմիր մորուքն աճում է քարե սեղանի միջով, մինչ նա սպասում է վերադառնալու, երբ երկիրն իր կարիքը կունենա։

**Առաջին խաչակիր պետությունը հայկական Եդեսիան էր։** 1098 թվականին ասպետ **Բոդուեն Բուլոնցին** բաժանվեց հիմնական բանակից և գնաց **Եդեսիա**՝ բազմաթիվ հայերով բնակեցված քաղաք, որը կառավարում էր հայ իշխան **Թորոսը**։ Թորոսը որդեգրեց Բոդուենին՝ թուրքերի դեմ նրա օգնությունը ստանալու համար, բայց մի քանի շաբաթ անց Թորոսը սպանվեց ապստամբության ժամանակ, և Բոդուենը դարձավ կոմս։ Այդպես **Եդեսիայի կոմսությունը** դարձավ առաջին խաչակիր պետությունը, և Բոդուենն ամուսնացավ մի հայ ազնվականուհու հետ։`,
      `**Император, погибший в киликийской реке.** В 1190 году германский император **Фридрих Барбаросса** повёл огромное войско в Третий крестовый поход. 10 июня, переправляясь через реку **Салеф** (сегодня Гёксу) в Киликии, он утонул. Без него бо́льшая часть войска повернула назад. Немецкая легенда позже рассказывала, что Барбаросса вовсе не умер, а спит в горе Кифхойзер, его рыжая борода прорастает сквозь каменный стол, и он ждёт, чтобы вернуться, когда понадобится своей стране.

**Первым государством крестоносцев была армянская Эдесса.** В 1098 году рыцарь **Балдуин Булонский** отделился от главного войска и поехал в **Эдессу** — город, где жило много армян и которым правил армянский князь **Торос**. Торос усыновил Балдуина, чтобы получить его помощь против турок, но через несколько недель Торос был убит во время мятежа, и Балдуин стал графом. Так **графство Эдесса** стало первым государством крестоносцев, а Балдуин женился на армянской знатной даме.`,
    ),
    ask(1, {
      en: ["Where did Emperor Frederick Barbarossa drown in 1190?", ["In a river in Cilicia", "In the Danube", "In the sea off Acre", "In the river Jordan"], "He drowned crossing the Saleph (Göksu) in Cilicia, and most of his army turned back."],
      hy: ["Որտե՞ղ խեղդվեց Ֆրիդրիխ Բարբարոսա կայսրը 1190 թվականին։", ["Կիլիկիայի մի գետում", "Դանուբում", "Աքքայի մոտ ծովում", "Հորդանան գետում"], "Նա խեղդվեց Կիլիկիայում Սալեֆ (Գյոքսու) գետն անցնելիս, և նրա բանակի մեծ մասն ետ դարձավ։"],
      ru: ["Где утонул император Фридрих Барбаросса в 1190 году?", ["В реке в Киликии", "В Дунае", "В море у Акры", "В реке Иордан"], "Он утонул, переправляясь через Салеф (Гёксу) в Киликии, и бо́льшая часть войска повернула назад."],
    }),
  ],
  "towns-and-universities": [
    "timeline set=towns",
    closer(
      `**What is left of Magna Carta.** Four original copies of the charter of 1215 survive, two in the British Library and one each in the cathedrals of Lincoln and Salisbury. Of its 63 clauses, most dealt with problems of the time, such as fish weirs in rivers and debts to moneylenders, and only **three** are still law in England today. One of them is the most famous: no free man may be imprisoned or punished except by the **lawful judgement** of his equals or by the law of the land.

**A university born from a quarrel.** In 1209 a woman was killed in **Oxford**, and the townspeople, angry with the students, hanged two scholars. Many teachers and students fled the town. Some of them settled in the small market town of **Cambridge** and began teaching there. So the rivalry of Oxford and Cambridge, today famous for their yearly boat race, began with a conflict between "town and gown".`,
      `**Ինչ է մնացել Մեծ խարտիայից։** 1215 թվականի խարտիայի չորս բնօրինակ օրինակ է պահպանվել՝ երկուսը Բրիտանական գրադարանում, մեկական՝ Լինքոլնի և Սոլսբերիի մայր տաճարներում։ Նրա 63 կետերից շատերը վերաբերում էին այն ժամանակվա խնդիրներին, օրինակ՝ գետերում ձկնորսական պատնեշներին և վաշխառուներին ունեցած պարտքերին, և միայն **երեքն** են այսօր էլ օրենք Անգլիայում։ Դրանցից մեկն ամենահայտնին է. ոչ մի ազատ մարդ չի կարող բանտարկվել կամ պատժվել այլ կերպ, քան իրեն հավասարների **օրինական դատավճռով** կամ երկրի օրենքով։

**Վեճից ծնված համալսարան։** 1209 թվականին **Օքսֆորդում** մի կին սպանվեց, և ուսանողների վրա զայրացած քաղաքացիները կախաղան հանեցին երկու ուսանողի։ Շատ դասախոսներ և ուսանողներ փախան քաղաքից։ Նրանցից ոմանք հաստատվեցին **Քեմբրիջ** փոքր առևտրական քաղաքում և սկսեցին այնտեղ դասավանդել։ Այսպես Օքսֆորդի և Քեմբրիջի մրցակցությունը, որն այսօր հայտնի է նրանց ամենամյա թիավարական մրցավազքով, սկսվեց «քաղաքի և թիկնոցի»՝ քաղաքացիների և ուսանողների բախումից։`,
      `**Что осталось от Великой хартии.** Сохранились четыре подлинных экземпляра хартии 1215 года: два в Британской библиотеке и по одному в соборах Линкольна и Солсбери. Из её 63 статей большинство касались проблем того времени, например рыболовных запруд на реках и долгов ростовщикам, и только **три** до сих пор остаются законом в Англии. Одна из них самая знаменитая: ни один свободный человек не может быть заключён в тюрьму или наказан иначе как по **законному приговору** равных ему или по закону страны.

**Университет, рождённый из ссоры.** В 1209 году в **Оксфорде** убили женщину, и горожане, злые на студентов, повесили двух школяров. Многие преподаватели и студенты бежали из города. Часть из них осела в маленьком торговом городке **Кембридж** и начала преподавать там. Так соперничество Оксфорда и Кембриджа, сегодня известное их ежегодной лодочной гонкой, началось со столкновения «города и мантии» — горожан и студентов.`,
    ),
    ask(3, {
      en: ["How did the University of Cambridge begin?", ["The king founded it after Magna Carta", "Monks moved there from Paris", "Scholars fled Oxford after a conflict with the townspeople", "It grew out of a Hanseatic trading school"], "In 1209 townspeople hanged two Oxford scholars, and some of those who fled began teaching in Cambridge."],
      hy: ["Ինչպե՞ս սկսվեց Քեմբրիջի համալսարանը։", ["Թագավորը հիմնեց այն Մեծ խարտիայից հետո", "Վանականները Փարիզից տեղափոխվեցին այնտեղ", "Ուսանողներն ու դասախոսները փախան Օքսֆորդից՝ քաղաքացիների հետ բախումից հետո", "Այն առաջացավ հանզեական առևտրական դպրոցից"], "1209 թվականին քաղաքացիները կախաղան հանեցին Օքսֆորդի երկու ուսանողի, և փախածներից ոմանք սկսեցին դասավանդել Քեմբրիջում։"],
      ru: ["Как возник Кембриджский университет?", ["Его основал король после Великой хартии", "Туда переселились монахи из Парижа", "Учёные бежали из Оксфорда после столкновения с горожанами", "Он вырос из ганзейской торговой школы"], "В 1209 году горожане повесили двух оксфордских школяров, и часть бежавших начала преподавать в Кембридже."],
    }),
  ],
  "mongols-and-black-death": [
    "timeline set=mongols",
    closer(
      `**The Mongol post.** To hold together an empire from China to Europe, the Mongols built the **yam**, a network of relay stations a day's ride or less apart, with fresh horses, food and lodging. Messengers changed horses at each station and could carry orders across huge distances in a few days. Officials carried a **paiza**, a metal tablet that worked like a passport: whoever showed it had to be given horses and help. Marco Polo described the system with amazement.

**Forty days.** When plague kept returning after the Black Death, the city of **Ragusa** (Dubrovnik) on the Adriatic decided in 1377 that ships and travellers from infected places must wait 30 days in isolation before entering. Other ports, including Venice, later made it 40 days, in Italian *quaranta giorni*. From that comes the word **quarantine**, which the whole world used again during the COVID-19 pandemic.`,
      `**Մոնղոլական փոստը։** Չինաստանից մինչև Եվրոպա ձգվող կայսրությունը միասին պահելու համար մոնղոլները կառուցեցին **յամը**՝ միմյանցից մեկ օրվա ճանապարհից ոչ ավելի հեռավորությամբ փոստային կայանների ցանց՝ թարմ ձիերով, սննդով և օթևանով։ Սուրհանդակները յուրաքանչյուր կայանում ձի էին փոխում և մի քանի օրում հրամաններ էին հասցնում հսկայական հեռավորություններ։ Պաշտոնյաները կրում էին **փայցզա**՝ մետաղե տախտակ, որը ծառայում էր որպես անձնագիր. ով այն ցույց էր տալիս, նրան պետք է ձի և օգնություն տային։ Մարկո Պոլոն զարմանքով նկարագրել է այդ համակարգը։

**Քառասուն օր։** Երբ Սև մահից հետո ժանտախտը շարունակում էր վերադառնալ, Ադրիատիկ ծովի ափին գտնվող **Ռագուզա** (Դուբրովնիկ) քաղաքը 1377 թվականին որոշեց, որ վարակված վայրերից եկող նավերն ու ճանապարհորդները քաղաք մտնելուց առաջ պետք է 30 օր սպասեն մեկուսացման մեջ։ Այլ նավահանգիստներ, այդ թվում՝ Վենետիկը, հետագայում այն դարձրին 40 օր, իտալերեն՝ *quaranta giorni*։ Դրանից է առաջացել **կարանտին** բառը, որն ամբողջ աշխարհը նորից գործածեց COVID-19-ի համավարակի ժամանակ։`,
      `**Монгольская почта.** Чтобы удерживать империю от Китая до Европы, монголы создали **ям** — сеть станций не дальше дня пути друг от друга, со свежими лошадьми, едой и ночлегом. Гонцы меняли лошадей на каждой станции и за несколько дней доставляли приказы на огромные расстояния. Чиновники носили **пайцзу** — металлическую пластину, служившую паспортом: тому, кто её показывал, обязаны были дать лошадей и помощь. Марко Поло описывал эту систему с изумлением. От монгольского «ям» происходит и русское слово «ямщик».

**Сорок дней.** Когда после Чёрной смерти чума продолжала возвращаться, город **Рагуза** (Дубровник) на Адриатике в 1377 году решил, что корабли и путники из заражённых мест должны 30 дней провести в изоляции, прежде чем войти в город. Другие порты, в том числе Венеция, позже сделали этот срок 40 дней, по-итальянски *quaranta giorni*. Отсюда слово **карантин**, которое весь мир снова услышал во время пандемии COVID-19.`,
    ),
    ask(2, {
      en: ["Where does the word \"quarantine\" come from?", ["A Latin word for illness", "The Italian for \"forty days\"", "The name of a famous doctor", "A Mongol word for a relay station"], "Ports such as Venice made ships from infected places wait quaranta giorni, forty days."],
      hy: ["Որտեղի՞ց է ծագում «կարանտին» բառը։", ["Հիվանդություն նշանակող լատիներեն բառից", "Իտալերեն «քառասուն օր» արտահայտությունից", "Հայտնի բժշկի անունից", "Փոստային կայան նշանակող մոնղոլական բառից"], "Վենետիկի նման նավահանգիստները վարակված վայրերից եկող նավերին ստիպում էին սպասել quaranta giorni՝ քառասուն օր։"],
      ru: ["Откуда происходит слово «карантин»?", ["От латинского слова «болезнь»", "От итальянского «сорок дней»", "От имени знаменитого врача", "От монгольского названия почтовой станции"], "Порты вроде Венеции заставляли корабли из заражённых мест ждать quaranta giorni — сорок дней."],
    }),
  ],
  "end-of-middle-ages": [
    "timeline set=endmid",
    closer(
      `**Burned, then cleared, then a saint.** In 1431 an English-controlled church court condemned **Joan of Arc** as a heretic, and she was burned in Rouen at the age of about 19. Twenty-five years later, in 1456, a new trial ordered by the Pope examined the case again, questioned witnesses who had known her and declared her **innocent**. In 1920 the Catholic Church made her a saint, and today she is one of the national symbols of France.

**The inventor who lost his workshop.** **Johannes Gutenberg** printed about 180 copies of his great Bible, and around 49 survive today, some on paper and some on parchment. But printing was expensive. Gutenberg had borrowed large sums from the businessman **Johann Fust**, who took him to court in 1455 and won much of his equipment. Fust and Gutenberg's former assistant went on printing with great success, while the inventor lived his last years with the help of a small pension.`,
      `**Այրված, արդարացված, ապա սուրբ։** 1431 թվականին անգլիացիների վերահսկողության տակ գտնվող եկեղեցական դատարանը **Ժաննա դ'Արկին** դատապարտեց որպես հերետիկոսի, և նրան այրեցին Ռուանում մոտ 19 տարեկանում։ Քսանհինգ տարի անց՝ 1456 թվականին, Հռոմի պապի հրամանով նոր դատավարությունը կրկին քննեց գործը, հարցաքննեց նրան ճանաչած վկաներին և նրան **անմեղ** ճանաչեց։ 1920 թվականին կաթոլիկ եկեղեցին նրան սրբադասեց, և այսօր նա Ֆրանսիայի ազգային խորհրդանիշներից է։

**Արհեստանոցը կորցրած գյուտարարը։** **Յոհաննես Գուտենբերգը** տպեց իր մեծ Աստվածաշնչի մոտ 180 օրինակ, որոնցից այսօր պահպանվել է մոտ 49-ը՝ մի մասը թղթի, մի մասը մագաղաթի վրա։ Բայց տպագրությունը թանկ էր։ Գուտենբերգը մեծ գումարներ էր պարտք վերցրել գործարար **Յոհան Ֆուստից**, որը 1455 թվականին նրան դատի տվեց և ստացավ նրա սարքավորումների մեծ մասը։ Ֆուստը և Գուտենբերգի նախկին օգնականը մեծ հաջողությամբ շարունակեցին տպագրել, իսկ գյուտարարն իր վերջին տարիներն ապրեց փոքր թոշակի օգնությամբ։`,
      `**Сожжена, оправдана, затем святая.** В 1431 году церковный суд, находившийся под контролем англичан, осудил **Жанну д'Арк** как еретичку, и её сожгли в Руане примерно в 19 лет. Двадцать пять лет спустя, в 1456 году, новый процесс, назначенный папой, снова рассмотрел дело, допросил знавших её свидетелей и признал её **невиновной**. В 1920 году католическая церковь причислила её к святым, и сегодня она один из национальных символов Франции.

**Изобретатель, потерявший мастерскую.** **Иоганн Гутенберг** напечатал около 180 экземпляров своей великой Библии, и около 49 сохранились до наших дней, одни на бумаге, другие на пергаменте. Но печать стоила дорого. Гутенберг занял крупные суммы у делового человека **Иоганна Фуста**, который в 1455 году подал на него в суд и получил бо́льшую часть его оборудования. Фуст и бывший помощник Гутенберга с большим успехом продолжили печатать, а изобретатель прожил последние годы на небольшую пенсию.`,
    ),
    ask(4, {
      en: ["What happened to Joan of Arc's case in 1456?", ["She was burned again in effigy", "The English king pardoned her", "Her trial was kept secret", "A new trial declared her innocent"], "Twenty-five years after her death a retrial ordered by the Pope cleared her; she was made a saint in 1920."],
      hy: ["Ի՞նչ եղավ Ժաննա դ'Արկի գործի հետ 1456 թվականին։", ["Նրա պատկերը նորից այրեցին", "Անգլիայի թագավորը ներեց նրան", "Նրա դատավարությունը գաղտնի պահվեց", "Նոր դատավարությունը նրան անմեղ ճանաչեց"], "Նրա մահից քսանհինգ տարի անց պապի հրամանով նոր դատավարությունն արդարացրեց նրան, իսկ 1920 թվականին նա սրբադասվեց։"],
      ru: ["Что произошло с делом Жанны д'Арк в 1456 году?", ["Её снова сожгли в виде чучела", "Английский король помиловал её", "Её процесс засекретили", "Новый процесс признал её невиновной"], "Через двадцать пять лет после смерти пересмотр дела по воле папы оправдал её; в 1920 году она стала святой."],
    }),
  ],
};
