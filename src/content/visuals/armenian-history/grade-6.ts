import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "armenian-highland-stone-age": [
    "timeline set=stoneage",
    "bars set=hlpeaks",
    closer(
      `**Tools older than our species.** At **Nor Geghi 1**, a site in the Hrazdan gorge, archaeologists found stone tools made about **325,000 years ago**, long before modern humans appeared. Among them were tools made with the clever **Levallois** technique, in which a stone is first shaped and then a ready-made flake is struck off it. Many scholars had thought this skill was brought from Africa; the find, published in 2014, showed that people in the Armenian Highland developed it themselves.

**Fingerprints in glass.** Every obsidian deposit has its own chemical "fingerprint", a slightly different mix of rare elements. By measuring it, scientists can tell which volcano a blade came from. Obsidian from Armenian sources such as **Gutansar** and **Arteni** has been found at sites far away from them, which shows that people traded or carried this precious stone over long distances thousands of years ago.`,
      `**Մեր տեսակից հին գործիքներ։** Հրազդանի կիրճում գտնվող **Նոր Գեղի 1** հուշարձանում հնագետները գտան քարե գործիքներ, որոնք պատրաստվել են մոտ **325 000 տարի առաջ**՝ ժամանակակից մարդու հայտնվելուց շատ առաջ։ Դրանց թվում կային **լևալուայի** հնարամիտ եղանակով պատրաստված գործիքներ. քարը նախ ձևավորում էին, իսկ հետո դրանից պատրաստի բեկոր էին անջատում։ Շատ գիտնականներ կարծում էին, որ այդ հմտությունը բերվել է Աֆրիկայից. 2014 թվականին հրապարակված գտածոն ցույց տվեց, որ Հայկական լեռնաշխարհի մարդիկ այն մշակել են ինքնուրույն։

**Մատնահետքեր՝ ապակու մեջ։** Վանակատի յուրաքանչյուր հանքավայր ունի իր քիմիական «մատնահետքը»՝ հազվագյուտ տարրերի մի փոքր տարբեր խառնուրդ։ Այն չափելով՝ գիտնականները կարող են որոշել, թե որ հրաբխից է վերցված շեղբը։ Հայկական աղբյուրներից, օրինակ՝ **Գութանասարից** և **Արթենիից** վանակատ է գտնվել դրանցից շատ հեռու գտնվող հնավայրերում, ինչը ցույց է տալիս, որ հազարավոր տարիներ առաջ մարդիկ այդ թանկարժեք քարով առևտուր էին անում կամ այն տանում էին մեծ հեռավորություններ։`,
      `**Орудия старше нашего вида.** На стоянке **Нор Гехи 1** в ущелье Раздана археологи нашли каменные орудия, сделанные около **325 000 лет назад**, задолго до появления современного человека. Среди них были орудия, изготовленные хитрой **леваллуазской** техникой: камень сначала обрабатывали, а потом откалывали от него готовый отщеп. Многие учёные думали, что это умение принесли из Африки; находка, опубликованная в 2014 году, показала, что люди Армянского нагорья выработали его сами.

**Отпечатки пальцев в стекле.** У каждого месторождения обсидиана свой химический «отпечаток» — немного иная смесь редких элементов. Измерив его, учёные могут определить, из какого вулкана взято лезвие. Обсидиан из армянских источников, например **Гутансара** и **Артени**, находят на стоянках далеко от них — значит, тысячи лет назад люди торговали этим ценным камнем или переносили его на большие расстояния.`,
    ),
    ask(2, {
      en: ["About how old are the stone tools found at Nor Geghi 1 in the Hrazdan gorge?", ["3,500 years", "325,000 years", "6,000 years", "50 years"], "They were made about 325,000 years ago, with the Levallois technique, before modern humans appeared."],
      hy: ["Մոտավորապես որքա՞ն հին են Հրազդանի կիրճի Նոր Գեղի 1 հուշարձանում գտնված քարե գործիքները։", ["3500 տարի", "325 000 տարի", "6000 տարի", "50 տարի"], "Դրանք պատրաստվել են մոտ 325 000 տարի առաջ՝ լևալուայի եղանակով, ժամանակակից մարդու հայտնվելուց առաջ։"],
      ru: ["Каков примерно возраст каменных орудий со стоянки Нор Гехи 1 в ущелье Раздана?", ["3500 лет", "325 000 лет", "6000 лет", "50 лет"], "Их сделали около 325 000 лет назад леваллуазской техникой, ещё до появления современного человека."],
    }),
  ],
  "bronze-age-hayasa-nairi": [
    "timeline set=bronze",
    closer(
      `**Carts from under the lake.** In the 20th century the level of **Lake Sevan** was lowered by about 19 m to use its water for irrigation and power. On the uncovered shore near the village of **Lchashen**, archaeologists found burial mounds of rich leaders, about 3,500 years old. Inside were **wooden carts and chariots** with solid and spoked wheels, preserved by the wet soil, together with bronze weapons and jewellery. Some of them stand today in the History Museum of Armenia in Yerevan.

**A treaty and a wedding.** One of the clay tablets of the Hittite kings is a **treaty with Hayasa**. In the 14th century BC the Hittite king **Suppiluliuma I** made peace with **Hukkana**, the ruler of Hayasa, and gave him his own sister as a wife. The tablet lists Hukkana's duties: to be a loyal ally, to return fugitives, and to respect the customs of the Hittite court. It is one of the oldest documents about a state in the Armenian Highland.`,
      `**Սայլեր՝ լճի տակից։** 20-րդ դարում **Սևանա լճի** մակարդակն իջեցվեց մոտ 19 մ-ով, որպեսզի նրա ջուրն օգտագործվի ոռոգման և էներգիայի համար։ **Լճաշեն** գյուղի մոտ բացված ափին հնագետները գտան մոտ 3500 տարեկան հարուստ առաջնորդների դամբարաններ։ Դրանց մեջ կային խոնավ հողում պահպանված **փայտե սայլեր և մարտակառքեր**՝ հոծ և ճաղավոր անիվներով, ինչպես նաև բրոնզե զենքեր և զարդեր։ Դրանցից մի քանիսն այսօր ցուցադրվում են Երևանի Հայաստանի պատմության թանգարանում։

**Պայմանագիր և հարսանիք։** Խեթական թագավորների կավե սալիկներից մեկը **պայմանագիր է Հայասայի հետ**։ Մ.թ.ա. 14-րդ դարում խեթական թագավոր **Սուպիլուլիումա I-ը** հաշտություն կնքեց Հայասայի տիրակալ **Հուքքանայի** հետ և նրան կնության տվեց իր քրոջը։ Սալիկում թվարկված են Հուքքանայի պարտավորությունները՝ լինել հավատարիմ դաշնակից, վերադարձնել փախստականներին և հարգել խեթական արքունիքի սովորույթները։ Դա Հայկական լեռնաշխարհում գտնվող պետության մասին ամենահին փաստաթղթերից մեկն է։`,
      `**Повозки из-под озера.** В XX веке уровень **озера Севан** понизили примерно на 19 м, чтобы использовать его воду для орошения и энергии. На обнажившемся берегу у села **Лчашен** археологи нашли курганы богатых вождей возрастом около 3500 лет. Внутри были **деревянные повозки и колесницы** со сплошными колёсами и колёсами со спицами, сохранившиеся во влажной земле, а также бронзовое оружие и украшения. Некоторые из них сегодня стоят в Историческом музее Армении в Ереване.

**Договор и свадьба.** Одна из глиняных табличек хеттских царей — это **договор с Хайасой**. В XIV веке до н. э. хеттский царь **Суппилулиума I** заключил мир с правителем Хайасы **Хукканой** и отдал ему в жёны свою сестру. В табличке перечислены обязанности Хукканы: быть верным союзником, возвращать беглецов и уважать обычаи хеттского двора. Это один из древнейших документов о государстве на Армянском нагорье.`,
    ),
    ask(3, {
      en: ["Why could archaeologists find the Lchashen carts?", ["They were kept in a temple", "They were found in Egypt", "Lake Sevan was lowered and its old shore was uncovered", "A farmer dug them up in Yerevan"], "When the lake fell by about 19 m, burial mounds about 3,500 years old appeared on the uncovered shore."],
      hy: ["Ինչո՞ւ հնագետները կարողացան գտնել Լճաշենի սայլերը։", ["Դրանք պահվում էին տաճարում", "Դրանք գտնվեցին Եգիպտոսում", "Սևանա լիճն իջեցվեց, և բացվեց նրա հին ափը", "Երևանում դրանք փորել-հանել է մի գյուղացի"], "Երբ լիճն իջավ մոտ 19 մ-ով, բացված ափին հայտնվեցին մոտ 3500 տարեկան դամբարաններ։"],
      ru: ["Почему археологи смогли найти лчашенские повозки?", ["Их хранили в храме", "Их нашли в Египте", "Севан понизили, и обнажился его старый берег", "Их выкопал крестьянин в Ереване"], "Когда озеро опустилось примерно на 19 м, на обнажившемся берегу показались курганы возрастом около 3500 лет."],
    }),
  ],
  "kingdom-of-van": [
    "timeline set=urartu",
    closer(
      `**A fortress frozen in time.** In 1939 the archaeologist **Boris Piotrovsky** began digging the hill of **Karmir Blur** in Yerevan, where Teishebaini stood. Around the beginning of the 6th century BC the fortress was stormed and burned, and its roofs collapsed onto everything inside. That disaster preserved a snapshot of daily life: bronze shields and helmets with the names of kings, cloth, beads, burnt grain and even seeds of grapes. Piotrovsky later became director of the Hermitage museum in Leningrad.

**Wine cellars of the kings.** In the storerooms of Teishebaini and Erebuni stood long rows of huge clay jars, **karases**, dug into the floor so that the wine stayed cool. Many have marks on them showing how much they held. Together they held huge amounts of wine, oil and grain, collected as taxes from the villages around. The Kingdom of Van was a state of farmers and builders as much as of warriors.`,
      `**Ժամանակի մեջ սառած ամրոց։** 1939 թվականին հնագետ **Բորիս Պիոտրովսկին** սկսեց պեղել Երևանի **Կարմիր բլուրը**, որտեղ գտնվում էր Թեյշեբաինին։ Մոտ մ.թ.ա. 6-րդ դարի սկզբին ամրոցը գրոհվեց և այրվեց, և նրա տանիքները փլվեցին ներսում եղած ամեն ինչի վրա։ Այդ աղետը պահպանեց առօրյա կյանքի մի ակնթարթ՝ թագավորների անուններով բրոնզե վահաններ և սաղավարտներ, գործվածքներ, ուլունքներ, այրված հացահատիկ և նույնիսկ խաղողի կորիզներ։ Պիոտրովսկին հետագայում դարձավ Լենինգրադի Էրմիտաժ թանգարանի տնօրենը։

**Թագավորների գինու մառանները։** Թեյշեբաինիի և Էրեբունիի պահեստներում երկար շարքերով կանգնած էին հսկայական կավե **կարասներ**՝ թաղված հատակի մեջ, որպեսզի գինին զով մնա։ Դրանցից շատերի վրա կան նշաններ, որոնք ցույց են տալիս, թե որքան էր դրանց տարողությունը։ Միասին դրանցում պահվում էր հսկայական քանակությամբ գինի, յուղ և հացահատիկ, որոնք հավաքվում էին շրջակա գյուղերից որպես հարկ։ Վանի թագավորությունը նույնքան հողագործների և շինարարների պետություն էր, որքան ռազմիկների։`,
      `**Крепость, застывшая во времени.** В 1939 году археолог **Борис Пиотровский** начал раскопки холма **Кармир-Блур** в Ереване, где стоял Тейшебаини. Около начала VI века до н. э. крепость взяли штурмом и сожгли, и её крыши рухнули на всё, что было внутри. Эта катастрофа сохранила «моментальный снимок» повседневной жизни: бронзовые щиты и шлемы с именами царей, ткани, бусы, обгоревшее зерно и даже виноградные косточки. Позже Пиотровский стал директором Эрмитажа в Ленинграде.

**Винные погреба царей.** В кладовых Тейшебаини и Эребуни длинными рядами стояли огромные глиняные **карасы**, вкопанные в пол, чтобы вино оставалось прохладным. На многих есть отметки, показывающие, сколько они вмещали. Вместе в них хранилось огромное количество вина, масла и зерна, собранных как налог с окрестных деревень. Ванское царство было государством земледельцев и строителей не меньше, чем воинов.`,
    ),
    ask(1, {
      en: ["Why were so many everyday things preserved at Karmir Blur?", ["The fortress burned and its roofs collapsed onto everything inside", "They were buried in a royal tomb", "The fortress was under Lake Sevan", "Monks kept them for centuries"], "When Teishebaini was stormed and burned, the falling roofs sealed shields, cloth, grain and seeds."],
      hy: ["Ինչո՞ւ են Կարմիր բլրում պահպանվել այդքան շատ առօրյա իրեր։", ["Ամրոցն այրվեց, և նրա տանիքները փլվեցին ներսում եղած ամեն ինչի վրա", "Դրանք թաղված էին արքայական դամբարանում", "Ամրոցը Սևանա լճի տակ էր", "Վանականները դրանք պահել են դարեր շարունակ"], "Երբ Թեյշեբաինին գրոհվեց և այրվեց, փլվող տանիքները ծածկեցին վահանները, գործվածքները, հացահատիկն ու կորիզները։"],
      ru: ["Почему на Кармир-Блуре сохранилось так много бытовых вещей?", ["Крепость сгорела, и крыши рухнули на всё, что было внутри", "Их похоронили в царской гробнице", "Крепость была под водой Севана", "Монахи хранили их веками"], "Когда Тейшебаини взяли и сожгли, рухнувшие крыши накрыли щиты, ткани, зерно и косточки."],
    }),
  ],
  "yervanduni-kingdom": [
    "timeline set=yervandids",
    closer(
      `**Beer through a straw.** Xenophon gives a lively picture of an Armenian village in winter. The houses were dug into the ground, with an opening like a well and a ladder for people, while the animals came in through a sloping tunnel and lived in the same house. There was wheat, barley, vegetables and beer in big jars, with the grains still floating on top; people drank it through **reeds** without joints, like straws. The village headman welcomed the Greeks with food and drink.

**A cliff in three languages.** The **Behistun inscription** is carved about 100 m up a cliff in western Iran. Darius I had the same text written in three languages: Old Persian, Elamite and Babylonian. In the 1830s and 1840s the British officer Henry Rawlinson climbed the cliff to copy it, and comparing the three versions helped scholars learn to read **cuneiform**. That is how the mention of "Armina" could be read at all.`,
      `**Գարեջուր՝ ծղոտով։** Քսենոփոնը կենդանի պատկեր է տալիս ձմեռային հայկական գյուղի մասին։ Տները փորված էին գետնի մեջ՝ ջրհորի նման բացվածքով և մարդկանց համար սանդուղքով, իսկ կենդանիները ներս էին մտնում թեք անցումով և ապրում նույն տանը։ Կար ցորեն, գարի, բանջարեղեն և մեծ կարասներով գարեջուր, որի վրա դեռ լողում էին հատիկները. մարդիկ այն խմում էին առանց հանգույցների **եղեգներով**՝ ծղոտի պես։ Գյուղապետը հույներին դիմավորեց ուտելիքով և խմիչքով։

**Ժայռ՝ երեք լեզվով։** **Բեհիսթունյան արձանագրությունը** փորագրված է Արևմտյան Իրանում ժայռի վրա մոտ 100 մ բարձրության վրա։ Դարեհ I-ը նույն տեքստը գրել տվեց երեք լեզվով՝ հին պարսկերեն, էլամերեն և բաբելերեն։ 1830-ական և 1840-ական թվականներին բրիտանացի սպա Հենրի Ռոուլինսոնը մագլցեց ժայռը՝ այն արտագրելու համար, և երեք տարբերակների համեմատությունն օգնեց գիտնականներին սովորել կարդալ **սեպագիրը**։ Միայն այդպես հնարավոր դարձավ կարդալ նաև «Արմինա» անունը։`,
      `**Пиво через соломинку.** Ксенофонт даёт живую картину армянской деревни зимой. Дома были вырыты в земле, с отверстием, как у колодца, и лестницей для людей, а животные заходили по наклонному ходу и жили в том же доме. Были пшеница, ячмень, овощи и пиво в больших сосудах, на поверхности которого ещё плавали зёрна; его пили через **тростинки** без коленцев, как через соломинку. Деревенский староста встретил греков едой и питьём.

**Скала на трёх языках.** **Бехистунская надпись** высечена на скале на высоте около 100 м на западе Ирана. Дарий I велел написать один и тот же текст на трёх языках: древнеперсидском, эламском и вавилонском. В 1830–1840-х годах британский офицер Генри Роулинсон взбирался на скалу, чтобы скопировать её, и сравнение трёх версий помогло учёным научиться читать **клинопись**. Только так стало возможно прочитать и название «Армина».`,
    ),
    ask(4, {
      en: ["How did Armenian villagers drink beer, according to Xenophon?", ["From silver cups", "From horns of bulls", "Straight from the river", "Through reeds, like straws"], "The beer stood in big jars with grains floating on top, and people drank it through jointless reeds."],
      hy: ["Ըստ Քսենոփոնի՝ ինչպե՞ս էին հայ գյուղացիները խմում գարեջուրը։", ["Արծաթե գավաթներից", "Ցլի եղջյուրներից", "Ուղիղ գետից", "Եղեգներով՝ ծղոտի պես"], "Գարեջուրը մեծ կարասներում էր, վրան լողացող հատիկներով, և մարդիկ այն խմում էին առանց հանգույցների եղեգներով։"],
      ru: ["Как, по Ксенофонту, армянские крестьяне пили пиво?", ["Из серебряных чаш", "Из бычьих рогов", "Прямо из реки", "Через тростинки, как через соломинку"], "Пиво стояло в больших сосудах с плавающими зёрнами, и его пили через тростинки без коленцев."],
    }),
  ],
  "artashes-i": [
    "timeline set=dynasties",
    closer(
      `**A city of seals.** Since the 1970s archaeologists have excavated **Artashat** on the hills around Khor Virap. They found city walls, a bathhouse, workshops and coins of many countries. One of the richest finds was an archive in which documents had once been sealed with lumps of clay: the documents burned long ago, but **thousands of clay seal impressions** survived, showing gods, rulers, animals and symbols. They tell how busy the trade and offices of the capital were.

**Artashes and Satenik.** Movses Khorenatsi tells a legend about the king's marriage. When the Alans attacked Armenia and their prince was captured, his sister **Satenik** came to the river bank to ask for peace. Artashes fell in love with her at first sight. He rode across the river and caught her with a **lasso of red leather with golden rings**, and brought her to his camp. Satenik became his queen, and the lasso became one of the most famous images of Armenian folk song.`,
      `**Կնիքների քաղաք։** 1970-ական թվականներից հնագետները պեղում են **Արտաշատը** Խոր Վիրապի շրջակա բլուրներում։ Նրանք գտան քաղաքի պարիսպներ, բաղնիք, արհեստանոցներ և բազմաթիվ երկրների դրամներ։ Ամենահարուստ գտածոներից մեկն արխիվն էր, որտեղ փաստաթղթերը ժամանակին կնքվել էին կավի կտորներով. փաստաթղթերը վաղուց այրվել են, բայց պահպանվել են **հազարավոր կավե կնքադրոշմներ**՝ աստվածների, տիրակալների, կենդանիների և խորհրդանիշների պատկերներով։ Դրանք պատմում են, թե որքան աշխույժ էին մայրաքաղաքի առևտուրը և գրասենյակները։

**Արտաշես և Սաթենիկ։** Մովսես Խորենացին ավանդազրույց է պատմում թագավորի ամուսնության մասին։ Երբ ալանները հարձակվեցին Հայաստանի վրա, և նրանց արքայազնը գերի ընկավ, նրա քույրը՝ **Սաթենիկը**, եկավ գետափ՝ հաշտություն խնդրելու։ Արտաշեսն առաջին հայացքից սիրահարվեց նրան։ Նա ձիով անցավ գետը, նրան բռնեց **ոսկեօղ շիկափոկ պարանով** և բերեց իր բանակատեղի։ Սաթենիկը դարձավ նրա թագուհին, իսկ պարանը դարձավ հայկական ժողովրդական երգի ամենահայտնի պատկերներից մեկը։`,
      `**Город печатей.** С 1970-х годов археологи раскапывают **Арташат** на холмах вокруг Хор Вирапа. Они нашли городские стены, баню, мастерские и монеты многих стран. Одной из богатейших находок стал архив, где документы когда-то запечатывали комочками глины: сами документы давно сгорели, но сохранились **тысячи глиняных оттисков печатей** с изображениями богов, правителей, животных и символов. Они рассказывают, как оживлённо шли торговля и дела в столице.

**Арташес и Сатеник.** Мовсес Хоренаци рассказывает легенду о женитьбе царя. Когда аланы напали на Армению и их царевич попал в плен, его сестра **Сатеник** пришла на берег реки просить мира. Арташес влюбился в неё с первого взгляда. Он переправился через реку и поймал её **арканом из красной кожи с золотыми кольцами**, а потом привёз в свой лагерь. Сатеник стала его царицей, а аркан — одним из самых известных образов армянской народной песни.`,
    ),
    ask(3, {
      en: ["In Khorenatsi's legend, how did Artashes win Satenik?", ["He paid her weight in gold", "He won a chariot race", "He caught her with a lasso of red leather with golden rings", "He wrote her a letter in Greek"], "He rode across the river and caught the Alan princess with a red leather lasso set with golden rings."],
      hy: ["Խորենացու ավանդազրույցում ինչպե՞ս Արտաշեսը տիրացավ Սաթենիկին։", ["Վճարեց նրա քաշի չափ ոսկի", "Հաղթեց մարտակառքերի մրցավազքում", "Նրան բռնեց ոսկեօղ շիկափոկ պարանով", "Նրան նամակ գրեց հունարեն"], "Նա ձիով անցավ գետը և ալանների արքայադստերը բռնեց ոսկե օղակներով շիկափոկ պարանով։"],
      ru: ["Как, по легенде Хоренаци, Арташес добился Сатеник?", ["Заплатил золотом по её весу", "Победил в гонке колесниц", "Поймал её арканом из красной кожи с золотыми кольцами", "Написал ей письмо по-гречески"], "Он переправился через реку и поймал аланскую царевну арканом из красной кожи с золотыми кольцами."],
    }),
  ],
  "tigran-ii-empire": [
    "timeline set=tigran",
    closer(
      `**Freedom for seventy valleys.** Tigran spent his youth as a hostage at the Parthian court. When his father's line needed a king, the Parthians let him go home, but not for free: according to the Greek geographer Strabo, Armenia had to give them **"seventy valleys"**, a stretch of land on the border. One of Tigran's first wars as a mighty king was to win that land back, and he went on to take Parthian lands far beyond it.

**Kings as servants.** Plutarch writes that at the height of his power Tigran was surrounded by many kings who served him, and that **four kings** always went with him like attendants: when he rode, they ran beside his horse in simple tunics, and when he sat to give orders, they stood with their hands folded. This is how a "king of kings" showed that his power was above that of all other rulers.`,
      `**Ազատություն՝ յոթանասուն հովտի դիմաց։** Տիգրանն իր պատանեկությունն անցկացրեց պարթևական արքունիքում որպես պատանդ։ Երբ նրան թույլ տվեցին վերադառնալ հայրենիք և գահ բարձրանալ, պարթևներն այդ անվճար չարեցին. ըստ հույն աշխարհագետ Ստրաբոնի՝ Հայաստանը պետք է նրանց տար **«յոթանասուն հովիտ»**՝ սահմանամերձ մի տարածք։ Որպես հզոր թագավոր՝ Տիգրանի առաջին պատերազմներից մեկն այդ հողերը հետ նվաճելն էր, իսկ հետո նա գրավեց պարթևական հողեր դրանցից շատ ավելի հեռու։

**Թագավորները՝ սպասավորներ։** Պլուտարքոսը գրում է, որ իր հզորության գագաթնակետին Տիգրանը շրջապատված էր իրեն ծառայող բազմաթիվ թագավորներով, և **չորս թագավոր** միշտ ուղեկցում էին նրան սպասավորների պես. երբ նա ձի էր հեծնում, նրանք պարզ զգեստներով վազում էին նրա ձիու կողքին, իսկ երբ նստում էր հրամաններ տալու, նրանք կանգնում էին ձեռքերը ծալած։ Այսպես էր «արքայից արքան» ցույց տալիս, որ իր իշխանությունը բոլոր մյուս տիրակալների իշխանությունից վեր է։`,
      `**Свобода за семьдесят долин.** Юность Тигран провёл заложником при парфянском дворе. Когда ему позволили вернуться на родину и занять трон, парфяне сделали это не даром: по словам греческого географа Страбона, Армения должна была отдать им **«семьдесят долин»** — полосу земли на границе. Одной из первых войн Тиграна как могучего царя стало возвращение этой земли, а потом он захватил парфянские владения далеко за её пределами.

**Цари-слуги.** Плутарх пишет, что на вершине могущества Тиграна окружало множество служивших ему царей, а **четыре царя** всегда сопровождали его, как слуги: когда он ехал верхом, они в простых туниках бежали рядом с его конём, а когда он сидел и отдавал приказы, стояли, сложив руки. Так «царь царей» показывал, что его власть выше власти всех других правителей.`,
    ),
    ask(2, {
      en: ["What did Armenia give the Parthians so that young Tigran could return home?", ["Tigranakert", "Seventy valleys on the border", "All of Syria", "A thousand horses"], "According to Strabo, the price was a border land of seventy valleys, which Tigran later won back."],
      hy: ["Ի՞նչ տվեց Հայաստանը պարթևներին, որպեսզի պատանի Տիգրանը կարողանա վերադառնալ հայրենիք։", ["Տիգրանակերտը", "Յոթանասուն հովիտ սահմանին", "Ամբողջ Ասորիքը", "Հազար ձի"], "Ըստ Ստրաբոնի՝ գինը յոթանասուն հովտից բաղկացած սահմանամերձ տարածքն էր, որը Տիգրանը հետագայում ետ նվաճեց։"],
      ru: ["Что Армения отдала парфянам, чтобы юный Тигран смог вернуться домой?", ["Тигранакерт", "Семьдесят долин на границе", "Всю Сирию", "Тысячу коней"], "По Страбону, ценой стала пограничная земля в семьдесят долин, которую Тигран позже вернул."],
    }),
  ],
  "artavazd-and-arshakuni": [
    "timeline set=arshakids",
    closer(
      `**A Greek play in Artashat.** Plutarch tells that the news of the Roman defeat at Carrhae in 53 BC reached Artashat during a royal feast: Artavazd II was celebrating the marriage of his sister to the son of the Parthian king. At that very moment Greek actors were performing a tragedy by **Euripides**, *The Bacchae*. The story, grim as it is, shows how at home Greek theatre was at the Armenian court, where the king himself wrote tragedies in Greek.

**Nine months to Rome.** In AD 66 Trdat I travelled to Rome to receive his crown. He did not go by sea, perhaps for religious reasons, and rode overland for about **nine months**, with his family and about 3,000 horsemen. In the Roman Forum Nero placed the crown on his head before a huge crowd, and the doors of the temple of Janus were closed, a sign that Rome was at peace. Trdat returned with money and builders to rebuild Artashat.`,
      `**Հունական ներկայացում՝ Արտաշատում։** Պլուտարքոսը պատմում է, որ մ.թ.ա. 53 թվականին Խառանի մոտ հռոմեացիների պարտության լուրը հասավ Արտաշատ արքայական խնջույքի ժամանակ. Արտավազդ II-ը տոնում էր իր քրոջ ամուսնությունը պարթևական թագավորի որդու հետ։ Հենց այդ պահին հույն դերասանները ներկայացնում էին **Եվրիպիդեսի** «Բաքոսուհիներ» ողբերգությունը։ Որքան էլ մռայլ է այս պատմությունը, այն ցույց է տալիս, թե որքան սովորական էր հունական թատրոնը հայոց արքունիքում, որտեղ թագավորն ինքը հունարեն ողբերգություններ էր գրում։

**Ինն ամիս՝ մինչև Հռոմ։** Մ.թ. 66 թվականին Տրդատ I-ը մեկնեց Հռոմ՝ թագ ստանալու։ Նա չգնաց ծովով, հավանաբար կրոնական պատճառներով, և մոտ **ինն ամիս** ձիով անցավ ցամաքով՝ իր ընտանիքի և մոտ 3000 հեծյալի հետ։ Հռոմեական ֆորումում Ներոնը հսկայական ամբոխի առջև թագը դրեց նրա գլխին, և Յանուսի տաճարի դռները փակվեցին՝ ի նշան այն բանի, որ Հռոմը խաղաղության մեջ է։ Տրդատը վերադարձավ փողով և վարպետներով՝ Արտաշատը վերակառուցելու համար։`,
      `**Греческая пьеса в Арташате.** Плутарх рассказывает, что весть о разгроме римлян при Каррах в 53 г. до н. э. пришла в Арташат во время царского пира: Артавазд II праздновал свадьбу своей сестры с сыном парфянского царя. Как раз в это время греческие актёры играли трагедию **Еврипида** «Вакханки». Каким бы мрачным ни был этот рассказ, он показывает, насколько привычным был греческий театр при армянском дворе, где царь сам писал трагедии по-гречески.

**Девять месяцев до Рима.** В 66 году н. э. Трдат I отправился в Рим за короной. Он не поехал морем — возможно, по религиозным причинам — и около **девяти месяцев** ехал по суше с семьёй и примерно 3000 всадников. На Римском форуме Нерон перед огромной толпой возложил корону ему на голову, а двери храма Януса закрыли в знак того, что Рим живёт в мире. Трдат вернулся с деньгами и мастерами, чтобы отстроить Арташат.`,
    ),
    ask(1, {
      en: ["How did Trdat I travel to Rome for his crowning in AD 66?", ["Overland on horseback, for about nine months", "By ship across the Mediterranean", "In a Roman chariot in two weeks", "He never went; the crown was sent to him"], "He avoided the sea and rode overland with about 3,000 horsemen; Nero crowned him in the Forum."],
      hy: ["Ինչպե՞ս Տրդատ I-ը մ.թ. 66 թվականին մեկնեց Հռոմ՝ թագադրվելու։", ["Ցամաքով, ձիով, մոտ ինն ամսում", "Նավով՝ Միջերկրական ծովով", "Հռոմեական կառքով՝ երկու շաբաթում", "Նա չգնաց. թագն ուղարկեցին նրան"], "Նա խուսափեց ծովից և մոտ 3000 հեծյալի հետ ցամաքով գնաց. Ներոնը նրան թագադրեց ֆորումում։"],
      ru: ["Как Трдат I добирался в Рим на коронацию в 66 году н. э.?", ["По суше верхом, около девяти месяцев", "На корабле по Средиземному морю", "В римской колеснице за две недели", "Он не ездил: корону прислали ему"], "Он избегал моря и ехал по суше с примерно 3000 всадников; Нерон короновал его на форуме."],
    }),
  ],
  "pagan-beliefs": [
    closer(
      `**Gods with relatives abroad.** Many Armenian gods had "relatives" among the gods of neighbouring peoples, especially the Iranians. **Aramazd** comes from the Iranian Ahura Mazda, **Mihr** from Mithra, **Anahit** from Anahita, and **Vahagn** from Verethragna, the Iranian god of victory. The Greeks, in turn, compared Aramazd with their Zeus and Anahit with Artemis or Aphrodite. But Armenians gave these gods their own stories, like the birth of Vahagn from a burning reed.

**A goddess in London.** In 1872, near the ancient town of **Satala** in Lesser Armenia (today in north-eastern Turkey), villagers found a large **bronze head** of a goddess with a calm, beautiful face. It was taken to the **British Museum** in London, where it is still on display. It is usually called the head of Aphrodite, but many scholars think it comes from a statue of **Anahit**, like the golden statue of the goddess at Yeriza described by ancient writers.`,
      `**Աստվածներ՝ արտասահմանյան ազգականներով։** Հայկական շատ աստվածներ «ազգականներ» ունեին հարևան ժողովուրդների, հատկապես իրանցիների աստվածների մեջ։ **Արամազդը** ծագում է իրանական Ահուրա Մազդայից, **Միհրը**՝ Միթրայից, **Անահիտը**՝ Անահիտայից, իսկ **Վահագնը**՝ իրանական հաղթանակի աստված Վերեթրագնայից։ Հույներն իրենց հերթին Արամազդին համեմատում էին իրենց Զևսի, իսկ Անահիտին՝ Արտեմիսի կամ Աֆրոդիտեի հետ։ Սակայն հայերն այդ աստվածներին տվեցին իրենց սեփական պատմությունները, օրինակ՝ Վահագնի ծնունդը բոցավառ եղեգից։

**Աստվածուհի՝ Լոնդոնում։** 1872 թվականին Փոքր Հայքի հնագույն **Սատաղ** քաղաքի մոտ (այժմ՝ Թուրքիայի հյուսիս-արևելքում) գյուղացիները գտան աստվածուհու մեծ **բրոնզե գլուխ**՝ հանդարտ, գեղեցիկ դեմքով։ Այն տարվեց Լոնդոնի **Բրիտանական թանգարան**, որտեղ մինչ օրս ցուցադրվում է։ Այն սովորաբար անվանում են Աֆրոդիտեի գլուխ, բայց շատ գիտնականներ կարծում են, որ այն **Անահիտի** արձանից է, ինչպես աստվածուհու ոսկե արձանն Երիզայում, որը նկարագրել են հին հեղինակները։`,
      `**Боги с родственниками за границей.** У многих армянских богов были «родственники» среди богов соседних народов, особенно иранцев. **Арамазд** происходит от иранского Ахура-Мазды, **Михр** — от Митры, **Анаит** — от Анахиты, а **Ваагн** — от Веретрагны, иранского бога победы. Греки, в свою очередь, сравнивали Арамазда со своим Зевсом, а Анаит — с Артемидой или Афродитой. Но армяне дали этим богам собственные истории, например рождение Ваагна из горящего тростника.

**Богиня в Лондоне.** В 1872 году у древнего города **Сатала** в Малой Армении (сейчас северо-восток Турции) крестьяне нашли большую **бронзовую голову** богини со спокойным красивым лицом. Её увезли в **Британский музей** в Лондоне, где она выставлена до сих пор. Её обычно называют головой Афродиты, но многие учёные считают, что она от статуи **Анаит** — как золотая статуя богини в Еризе, описанная древними авторами.`,
    ),
    ask(1, {
      en: ["Which Iranian god is the Armenian Aramazd related to?", ["Ahura Mazda", "Zeus", "Mithra", "Verethragna"], "Aramazd comes from Ahura Mazda; Mihr comes from Mithra and Vahagn from Verethragna."],
      hy: ["Իրանական ո՞ր աստծու հետ է կապված հայկական Արամազդը։", ["Ահուրա Մազդա", "Զևս", "Միթրա", "Վերեթրագնա"], "Արամազդը ծագում է Ահուրա Մազդայից, Միհրը՝ Միթրայից, իսկ Վահագնը՝ Վերեթրագնայից։"],
      ru: ["С каким иранским богом связан армянский Арамазд?", ["Ахура-Мазда", "Зевс", "Митра", "Веретрагна"], "Арамазд происходит от Ахура-Мазды, Михр — от Митры, а Ваагн — от Веретрагны."],
    }),
  ],
  "cities-crafts-trade": [
    "timeline set=capitals",
    closer(
      `**Red from a tiny insect.** **Vordan karmir** comes from a small insect that lives on the roots of grasses in the salty soils of the Ararat Plain. In late summer the females come to the surface, where they were collected, dried and ground into a deep red powder. It dyed wool, silk and carpets, and gave the red paint of Armenian manuscripts, which has stayed bright for centuries. Arab writers praised the red dye of Armenia, and the word **crimson** comes, through Arabic *qirmiz*, from an old word meaning "made by a worm". Today the insect is rare and protected.

**"We worked and got nothing."** The floor of the bathhouse at Garni is covered with a **mosaic** of small coloured stones showing sea gods, fish and fantastic sea creatures. Along it runs a Greek inscription: **"We worked without getting anything"**. Scholars still argue whether the craftsmen were complaining that they had not been paid, or proudly saying that they made it as a gift. Either way, it is one of the rare messages left by ordinary workers of ancient Armenia.`,
      `**Կարմիր՝ փոքրիկ միջատից։** **Որդան կարմիրը** ստացվում է մի փոքր միջատից, որն ապրում է Արարատյան դաշտի աղուտ հողերում խոտերի արմատների վրա։ Ամռան վերջին էգերը դուրս են գալիս մակերես, որտեղ նրանց հավաքում, չորացնում և աղում էին մուգ կարմիր փոշու։ Այդ ներկով ներկում էին բուրդ, մետաքս և գորգեր, և դրանից էր ստացվում հայկական ձեռագրերի կարմիր ներկը, որը դարեր շարունակ պայծառ է մնացել։ Արաբ հեղինակները գովաբանում էին Հայաստանի կարմիր ներկը, իսկ անգլերեն **crimson** («մուգ կարմիր») բառն արաբերեն *քիրմիզ* բառի միջոցով ծագում է «որդից ստացված» նշանակող հին բառից։ Այսօր այդ միջատը հազվագյուտ է և պահպանվում է։

**«Աշխատեցինք և ոչինչ չստացանք»։** Գառնիի բաղնիքի հատակը ծածկված է գունավոր փոքրիկ քարերից **խճանկարով**, որտեղ պատկերված են ծովային աստվածներ, ձկներ և ծովային երևակայական էակներ։ Նրա երկայնքով ձգվում է հունարեն արձանագրություն. **«Աշխատեցինք՝ ոչինչ չստանալով»**։ Գիտնականները մինչ օրս վիճում են՝ արդյո՞ք վարպետները բողոքում էին, որ իրենց չեն վճարել, թե՞ հպարտությամբ ասում էին, որ այն ստեղծել են որպես նվեր։ Ինչպես էլ լինի, դա հին Հայաստանի հասարակ աշխատավորների թողած հազվագյուտ ուղերձներից է։`,
      `**Красный цвет от крошечного насекомого.** **Вордан кармир** получают из маленького насекомого, живущего на корнях трав в солончаковых почвах Араратской равнины. В конце лета самки выходят на поверхность, где их собирали, сушили и растирали в тёмно-красный порошок. Им красили шерсть, шёлк и ковры, из него делали красную краску армянских рукописей, которая веками остаётся яркой. Арабские авторы хвалили красную краску Армении, а слово **кармин** восходит через арабское *кирмиз* к древнему слову «сделанный червём». Сегодня это насекомое редкое и охраняется.

**«Работали, ничего не получив».** Пол бани в Гарни покрыт **мозаикой** из маленьких цветных камешков: морские божества, рыбы и фантастические морские существа. Вдоль неё идёт греческая надпись: **«Работали, ничего не получив»**. Учёные до сих пор спорят, жаловались ли мастера, что им не заплатили, или с гордостью говорили, что сделали её в дар. Как бы то ни было, это одно из редких посланий, оставленных простыми работниками древней Армении.`,
    ),
    ask(2, {
      en: ["Where does vordan karmir come from?", ["A red stone from Mount Aragats", "A small insect living on grass roots in the Ararat Plain", "The juice of pomegranates", "Copper ore"], "The insects were collected, dried and ground into a deep red dye for wool, carpets and manuscripts."],
      hy: ["Որտեղի՞ց է ստացվում որդան կարմիրը։", ["Արագածի կարմիր քարից", "Արարատյան դաշտում խոտերի արմատների վրա ապրող փոքրիկ միջատից", "Նռան հյութից", "Պղնձի հանքաքարից"], "Միջատներին հավաքում, չորացնում և աղում էին՝ բրդի, գորգերի և ձեռագրերի համար մուգ կարմիր ներկ ստանալու համար։"],
      ru: ["Из чего получают вордан кармир?", ["Из красного камня с Арагаца", "Из маленького насекомого, живущего на корнях трав Араратской равнины", "Из гранатового сока", "Из медной руды"], "Насекомых собирали, сушили и растирали в тёмно-красную краску для шерсти, ковров и рукописей."],
    }),
  ],
};
