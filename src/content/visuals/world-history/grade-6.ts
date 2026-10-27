import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade6: VisualMap[number] = {
  "prehistory-and-civilization": [
    "timeline set=civs",
    closer(
      `**Found by a dog.** On 12 September 1940 four teenagers in south-western France followed their dog, Robot, to a hole under a fallen tree and climbed down into the cave of **Lascaux**. By the light of a lamp they saw walls covered with horses, bulls and deer painted about 17,000 years ago. After the war so many visitors came that their breath began to damage the paintings, and in 1963 the cave was closed. Today people visit exact copies built nearby.

**A temple before farms.** At **Göbekli Tepe** in south-eastern Turkey, archaeologists found rings of huge T-shaped stone pillars carved with foxes, boars, snakes and birds, raised about 11,600 years ago. That is earlier than pottery, metal or writing, and probably earlier than farming in the area. Hunter-gatherers must have gathered in large numbers to build it, and some scholars think such gatherings helped push people towards a settled life.`,
      `**Գտել է շունը։** 1940 թվականի սեպտեմբերի 12-ին Ֆրանսիայի հարավ-արևմուտքում չորս դեռահաս իրենց շան՝ Ռոբոտի հետևից գնացին դեպի ընկած ծառի տակ գտնվող մի անցք և իջան **Լասկո** քարանձավ։ Լամպի լույսով նրանք տեսան պատեր՝ ծածկված մոտ 17 000 տարի առաջ նկարված ձիերով, ցուլերով և եղջերուներով։ Պատերազմից հետո այնքան այցելուներ եկան, որ նրանց շնչառությունը սկսեց վնասել նկարները, և 1963 թվականին քարանձավը փակվեց։ Այսօր մարդիկ այցելում են մոտակայքում կառուցված ճշգրիտ պատճեններ։

**Տաճար՝ ագարակներից առաջ։** Թուրքիայի հարավ-արևելքում գտնվող **Գյոբեկլի Թեփեում** հնագետները գտան T-աձև հսկայական քարե սյուների շրջաններ՝ աղվեսների, վարազների, օձերի և թռչունների քանդակներով, որոնք կանգնեցվել են մոտ 11 600 տարի առաջ։ Դա ավելի վաղ է, քան խեցեղենը, մետաղը կամ գիրը, և հավանաբար ավելի վաղ, քան այդ տարածքում երկրագործությունը։ Այն կառուցելու համար որսորդ-հավաքիչները պետք է մեծ թվով հավաքված լինեին, և որոշ գիտնականներ կարծում են, որ այդպիսի հավաքներն օգնեցին մարդկանց անցնել նստակյաց կյանքի։`,
      `**Нашла собака.** 12 сентября 1940 года четверо подростков на юго-западе Франции пошли за своей собакой Робо к яме под упавшим деревом и спустились в пещеру **Ласко**. При свете лампы они увидели стены, покрытые лошадьми, быками и оленями, нарисованными около 17 000 лет назад. После войны посетителей стало так много, что их дыхание начало разрушать рисунки, и в 1963 году пещеру закрыли. Сегодня люди посещают точные копии, построенные неподалёку.

**Храм раньше полей.** В **Гёбекли-Тепе** на юго-востоке Турции археологи нашли круги огромных Т-образных каменных столбов с резными лисами, кабанами, змеями и птицами, поставленных около 11 600 лет назад. Это раньше керамики, металла и письменности и, вероятно, раньше земледелия в этих местах. Чтобы построить его, охотники-собиратели должны были собираться в большом числе, и некоторые учёные думают, что такие собрания подтолкнули людей к оседлой жизни.`,
    ),
    ask(3, {
      en: ["Who discovered the cave paintings of Lascaux in 1940?", ["Archaeologists from Paris", "A farmer ploughing his field", "Four teenagers following their dog", "Soldiers digging a trench"], "The teenagers followed their dog Robot into a hole under a fallen tree."],
      hy: ["Ո՞վ հայտնաբերեց Լասկոյի քարանձավային նկարները 1940 թվականին։", ["Փարիզցի հնագետները", "Դաշտը հերկող մի գյուղացի", "Իրենց շան հետևից գնացող չորս դեռահաս", "Խրամատ փորող զինվորները"], "Դեռահասներն իրենց Ռոբոտ շան հետևից մտան ընկած ծառի տակ գտնվող անցքը։"],
      ru: ["Кто открыл наскальные рисунки Ласко в 1940 году?", ["Археологи из Парижа", "Крестьянин, пахавший поле", "Четверо подростков, шедших за своей собакой", "Солдаты, рывшие окоп"], "Подростки пошли за своей собакой Робо в яму под упавшим деревом."],
    }),
  ],
  mesopotamia: [
    "timeline set=meso",
    closer(
      `**A flood on a clay tablet.** In 1872 **George Smith**, a young assistant at the British Museum, was sorting tablets from **Ashurbanipal's library** at Nineveh when he read a story of a great flood: a man warned by a god builds a boat, saves animals and sends out birds to find dry land. It was part of the **Epic of Gilgamesh**, and it was strikingly close to the story of Noah. It is said that Smith was so excited that he began to take off his clothes in the reading room.

**The oldest complaint.** Around 1750 BC a man named **Nanni** sent an angry clay letter to a copper merchant called **Ea-nasir** in the city of Ur. He complained that the copper was of poor quality, that his messenger had been treated rudely and that he wanted his money back. The tablet is now in the British Museum and is often called the oldest known written **customer complaint**: some things have not changed in almost 4,000 years.`,
      `**Ջրհեղեղ՝ կավե սալիկի վրա։** 1872 թվականին Բրիտանական թանգարանի երիտասարդ աշխատակից **Ջորջ Սմիթը** դասավորում էր Նինվեի **Աշշուրբանիպալի գրադարանի** սալիկները, երբ կարդաց մեծ ջրհեղեղի պատմություն. աստծու կողմից զգուշացված մի մարդ նավ է կառուցում, փրկում կենդանիներին և թռչուններ է ուղարկում ցամաք գտնելու։ Դա **«Գիլգամեշ» էպոսի** մի մասն էր, և այն զարմանալիորեն նման էր Նոյի պատմությանը։ Ասում են, որ Սմիթն այնքան հուզվեց, որ ընթերցասրահում սկսեց հանել հագուստը։

**Ամենահին բողոքը։** Մոտ մ.թ.ա. 1750 թվականին **Նաննի** անունով մի մարդ զայրացած կավե նամակ ուղարկեց Ուր քաղաքում ապրող **Էա-Նասիր** անունով պղնձի վաճառականին։ Նա բողոքում էր, որ պղինձը վատ որակի է, որ իր սուրհանդակի հետ կոպիտ են վարվել, և պահանջում էր իր փողն ետ։ Սալիկն այժմ Բրիտանական թանգարանում է, և այն հաճախ անվանում են հայտնի ամենահին գրավոր **գնորդի բողոքը**. որոշ բաներ չեն փոխվել գրեթե 4000 տարում։`,
      `**Потоп на глиняной табличке.** В 1872 году **Джордж Смит**, молодой сотрудник Британского музея, разбирал таблички из **библиотеки Ашшурбанипала** в Ниневии и прочёл историю о великом потопе: человек, предупреждённый богом, строит корабль, спасает животных и выпускает птиц, чтобы найти сушу. Это была часть **«Эпоса о Гильгамеше»**, поразительно похожая на историю Ноя. Говорят, Смит так разволновался, что начал снимать одежду прямо в читальном зале.

**Самая старая жалоба.** Около 1750 г. до н. э. человек по имени **Нанни** отправил сердитое глиняное письмо торговцу медью **Эа-насиру** в город Ур. Он жаловался, что медь плохого качества, что с его посыльным обошлись грубо, и требовал вернуть деньги. Табличка сейчас в Британском музее, и её часто называют самой старой известной письменной **жалобой покупателя**: кое-что не изменилось почти за 4000 лет.`,
    ),
    ask(1, {
      en: ["What is written on Nanni's clay tablet to Ea-nasir?", ["A complaint about bad copper", "A law of Hammurabi", "A map of Babylon", "A hymn to Gilgamesh"], "It is often called the oldest known written customer complaint, about 1750 BC."],
      hy: ["Ի՞նչ է գրված Նաննիի՝ Էա-Նասիրին ուղղված կավե սալիկի վրա։", ["Բողոք վատ պղնձի մասին", "Համմուրապիի օրենքներից մեկը", "Բաբելոնի քարտեզը", "Օրհներգ Գիլգամեշին"], "Այն հաճախ անվանում են հայտնի ամենահին գրավոր գնորդի բողոքը՝ մոտ մ.թ.ա. 1750 թվական։"],
      ru: ["Что написано на глиняной табличке Нанни к Эа-насиру?", ["Жалоба на плохую медь", "Закон Хаммурапи", "Карта Вавилона", "Гимн Гильгамешу"], "Её часто называют самой старой известной письменной жалобой покупателя, около 1750 г. до н. э."],
    }),
  ],
  "ancient-egypt": [
    "timeline set=egypt",
    closer(
      `**"I've got it!"** **Jean-François Champollion** had studied many languages, including **Coptic**, the late form of Egyptian used in church. Comparing the names of **Ptolemy** and **Cleopatra**, written inside oval frames called cartouches, he worked out that hieroglyphs stood for sounds as well as ideas. On 14 September 1822, the story goes, he ran to his brother's office, shouted "I've got it!" and fainted. Two thousand years of Egyptian writing could be read again.

**Who built the pyramids?** Near the pyramids of Giza archaeologists found a town of workers with bakeries, breweries and storerooms, and cemeteries where workers were buried with bread and beer for the afterlife. Work gangs wrote their names on the stones, such as "Friends of Khufu". In 2013 papyri found on the Red Sea coast turned out to be the logbook of an official named **Merer**, who shipped limestone for Khufu's pyramid. The builders were organised, fed and honoured workers, not crowds of slaves.`,
      `**«Գտա՛»։** **Ժան-Ֆրանսուա Շամպոլիոնը** սովորել էր բազմաթիվ լեզուներ, այդ թվում՝ **ղպտերենը**՝ եգիպտերենի ուշ ձևը, որն օգտագործվում էր եկեղեցում։ Համեմատելով **Պտղոմեոսի** և **Կլեոպատրայի** անունները, որոնք գրված էին քարտուշ կոչվող օվալաձև շրջանակներում, նա պարզեց, որ հիերոգլիֆները նշանակում են ոչ միայն գաղափարներ, այլև հնչյուններ։ Ըստ պատմության՝ 1822 թվականի սեպտեմբերի 14-ին նա վազեց իր եղբոր մոտ, բացականչեց՝ «Գտա՛», և ուշաթափվեց։ Եգիպտական գրի երկու հազար տարին կրկին կարելի էր կարդալ։

**Ո՞վ է կառուցել բուրգերը։** Գիզայի բուրգերի մոտ հնագետները գտան բանվորների ավան՝ հացատներով, գարեջրատներով և պահեստներով, ինչպես նաև գերեզմանոցներ, որտեղ բանվորներին թաղել էին հացով և գարեջրով՝ հանդերձյալ կյանքի համար։ Աշխատանքային խմբերը քարերի վրա գրում էին իրենց անունները, օրինակ՝ «Քեոփսի ընկերները»։ 2013 թվականին Կարմիր ծովի ափին գտնված պապիրուսները պարզվեց, որ **Մերեր** անունով պաշտոնյայի օրագիրն են, որը քարը նավերով տեղափոխում էր Քեոփսի բուրգի համար։ Կառուցողները կազմակերպված, կերակրված և հարգված աշխատողներ էին, այլ ոչ թե ստրուկների ամբոխ։`,
      `**«Я нашёл!»** **Жан-Франсуа Шампольон** изучил много языков, в том числе **коптский** — позднюю форму египетского, которая использовалась в церкви. Сравнивая имена **Птолемея** и **Клеопатры**, записанные в овальных рамках — картушах, он понял, что иероглифы обозначают не только понятия, но и звуки. По преданию, 14 сентября 1822 года он вбежал в кабинет брата, крикнул «Я нашёл!» и потерял сознание. Две тысячи лет египетского письма снова можно было прочесть.

**Кто строил пирамиды?** Рядом с пирамидами Гизы археологи нашли посёлок рабочих с пекарнями, пивоварнями и складами, а также кладбища, где рабочих хоронили с хлебом и пивом для загробной жизни. Бригады писали на камнях свои названия, например «Друзья Хуфу». В 2013 году папирусы, найденные на берегу Красного моря, оказались журналом чиновника по имени **Мерер**, который возил известняк для пирамиды Хеопса. Строители были организованными, сытыми и уважаемыми работниками, а не толпами рабов.`,
    ),
    ask(4, {
      en: ["What do the workers' town and tombs near Giza show about the pyramid builders?", ["They were prisoners of war", "They came from Greece", "They worked only at night", "They were organised, fed and honoured workers, not slaves"], "Bakeries, workers' cemeteries, gang names and Merer's logbook all point to organised labour."],
      hy: ["Ի՞նչ են ցույց տալիս Գիզայի մոտ գտնված բանվորական ավանը և դամբարանները բուրգերի կառուցողների մասին։", ["Նրանք ռազմագերիներ էին", "Նրանք եկել էին Հունաստանից", "Նրանք աշխատում էին միայն գիշերը", "Նրանք կազմակերպված, կերակրված և հարգված աշխատողներ էին, ոչ թե ստրուկներ"], "Հացատները, բանվորների գերեզմանոցները, խմբերի անունները և Մերերի օրագիրը վկայում են կազմակերպված աշխատանքի մասին։"],
      ru: ["Что показывают посёлок рабочих и гробницы у Гизы о строителях пирамид?", ["Они были военнопленными", "Они пришли из Греции", "Они работали только ночью", "Это были организованные, сытые и уважаемые работники, а не рабы"], "Пекарни, кладбища рабочих, названия бригад и журнал Мерера говорят об организованном труде."],
    }),
  ],
  "ancient-india-china": [
    "timeline set=indchina",
    closer(
      `**An army found by a well.** In 1974 farmers digging a well near the city of Xi'an struck pieces of a clay figure. They had found the **Terracotta Army** of the first emperor, Qin Shi Huang: archaeologists estimate there are about 8,000 soldiers, with horses and chariots, and no two faces seem the same. When they were made, the figures were painted in bright colours, but most of the paint flaked off within minutes of meeting the air.

**How zero got its name.** Indian mathematicians treated **zero** as a real number. In 628 **Brahmagupta** wrote rules for it, for example that a number minus itself gives zero. Through Arab scholars these ideas reached Europe. The Arabic word *sifr*, "empty", became the Latin *zephirum*, which gave us the word **zero**, and also the word **cipher**.`,
      `**Ջրհորի մոտ գտնված բանակ։** 1974 թվականին Սիան քաղաքի մոտ ջրհոր փորող գյուղացիները կավե արձանի կտորների հանդիպեցին։ Նրանք գտել էին առաջին կայսր Ցին Շի Հուանդիի **Կավե բանակը**. հնագետների գնահատմամբ՝ այնտեղ մոտ 8000 զինվոր կա՝ ձիերով և մարտակառքերով, և երկու դեմք կարծես նույնը չէ։ Պատրաստվելիս արձանները ներկված էին վառ գույներով, բայց ներկի մեծ մասը թափվեց օդի հետ շփվելուց րոպեներ անց։

**Ինչպես զրոն ստացավ իր անունը։** Հնդիկ մաթեմատիկոսները **զրոն** դիտում էին որպես իսկական թիվ։ 628 թվականին **Բրահմագուպտան** կանոններ գրեց դրա համար, օրինակ՝ որ թվից հանելով նույն թիվը՝ ստացվում է զրո։ Արաբ գիտնականների միջոցով այդ գաղափարները հասան Եվրոպա։ Արաբերեն *սիֆր*՝ «դատարկ», բառը դարձավ լատիներեն *զեֆիրում*, որից առաջացավ **զրո** բառն եվրոպական լեզուներում, ինչպես նաև անգլերեն *cipher*՝ «ծածկագիր» բառը։`,
      `**Армия, найденная у колодца.** В 1974 году крестьяне, копавшие колодец у города Сиань, наткнулись на обломки глиняной фигуры. Они нашли **Терракотовую армию** первого императора Цинь Шихуанди: по оценкам археологов, там около 8000 воинов с конями и колесницами, и, кажется, ни одно лицо не повторяется. Когда фигуры сделали, их раскрасили яркими красками, но большая часть краски осыпалась через несколько минут после встречи с воздухом.

**Как ноль получил своё имя.** Индийские математики считали **ноль** настоящим числом. В 628 году **Брахмагупта** написал для него правила, например что число минус оно само даёт ноль. Через арабских учёных эти идеи попали в Европу. Арабское слово *сифр* — «пустой» — стало латинским *зефирум*, от которого произошло слово **ноль** в западных языках (англ. *zero*), а также слово **шифр**.`,
    ),
    ask(2, {
      en: ["How was the Terracotta Army discovered?", ["By a team searching for gold", "By farmers digging a well", "From an old map in Beijing", "By a flood that washed away the soil"], "In 1974 farmers near Xi'an struck pieces of a clay figure while digging a well."],
      hy: ["Ինչպե՞ս հայտնաբերվեց Կավե բանակը։", ["Ոսկի որոնող խումբը գտավ", "Ջրհոր փորող գյուղացիները գտան", "Պեկինում պահված հին քարտեզով", "Հողը լվացող ջրհեղեղի շնորհիվ"], "1974 թվականին Սիանի մոտ գյուղացիները ջրհոր փորելիս կավե արձանի կտորների հանդիպեցին։"],
      ru: ["Как была обнаружена Терракотовая армия?", ["Её нашли искатели золота", "Её нашли крестьяне, копавшие колодец", "По старой карте из Пекина", "Её открыло наводнение, смывшее почву"], "В 1974 году крестьяне у Сианя, копая колодец, наткнулись на обломки глиняной фигуры."],
    }),
  ],
  "ancient-greece": [
    "timeline set=greece",
    closer(
      `**The real marathon run.** Herodotus tells that before the battle of Marathon a runner named **Pheidippides** ran from Athens to **Sparta**, about 240 km, in two days to ask for help. The story of a messenger who ran from Marathon to Athens, announced the victory and died appeared only centuries later. It inspired the marathon race of the first modern Olympics in 1896, and the distance of **42.195 km** was fixed in 1921, based on the course of the 1908 London Games.

**Voting with broken pots.** Once a year the Athenians could vote to send a powerful citizen into exile for ten years. Each voter scratched a name on a piece of broken pottery, an *ostrakon*, which gives us the word **ostracism**. Archaeologists have found thousands of them. In one well were about 190 shards with the name of the general **Themistocles**, written by only a few hands, as if someone had prepared them in advance for voters.`,
      `**Իսկական մարաթոնյան վազքը։** Հերոդոտոսը պատմում է, որ Մարաթոնի ճակատամարտից առաջ **Փիդիպիդես** անունով մի սուրհանդակ երկու օրում վազեց Աթենքից **Սպարտա**՝ մոտ 240 կմ, օգնություն խնդրելու։ Մարաթոնից Աթենք վազած, հաղթանակի լուրը հայտնած և մահացած սուրհանդակի պատմությունը հայտնվեց միայն դարեր անց։ Այն ոգեշնչեց 1896 թվականի առաջին ժամանակակից Օլիմպիական խաղերի մարաթոնյան վազքը, իսկ **42,195 կմ** հեռավորությունն ամրագրվեց 1921 թվականին՝ 1908 թվականի Լոնդոնի խաղերի երթուղու հիման վրա։

**Քվեարկություն՝ կոտրված ամաններով։** Տարին մեկ անգամ աթենացիները կարող էին քվեարկել՝ որևէ ազդեցիկ քաղաքացու տասը տարով աքսորելու համար։ Յուրաքանչյուր քվեարկող անունը փորագրում էր կոտրված կավանոթի բեկորի՝ *օստրակոնի* վրա, որից էլ առաջացել է **օստրակիզմ** բառը։ Հնագետները դրանցից հազարավորներ են գտել։ Մի ջրհորում կար զորավար **Թեմիստոկլեսի** անունով մոտ 190 բեկոր, որոնք գրված էին ընդամենը մի քանի ձեռքով, կարծես ինչ-որ մեկը դրանք նախապես պատրաստել էր քվեարկողների համար։`,
      `**Настоящий марафонский бег.** Геродот рассказывает, что перед Марафонской битвой гонец по имени **Фидиппид** за два дня пробежал из Афин в **Спарту**, около 240 км, чтобы просить о помощи. История о вестнике, который прибежал из Марафона в Афины, объявил о победе и умер, появилась лишь спустя века. Она вдохновила марафонский забег на первых современных Олимпийских играх 1896 года, а дистанцию **42,195 км** закрепили в 1921 году по трассе Лондонских игр 1908 года.

**Голосование черепками.** Раз в год афиняне могли проголосовать, чтобы изгнать влиятельного гражданина на десять лет. Каждый голосующий нацарапывал имя на черепке разбитой посуды — *остраконе*, отсюда слово **остракизм**. Археологи нашли тысячи таких черепков. В одном колодце оказалось около 190 черепков с именем полководца **Фемистокла**, написанных всего несколькими руками, как будто кто-то заранее приготовил их для голосующих.`,
    ),
    ask(4, {
      en: ["Where does the word \"ostracism\" come from?", ["From the name of a Spartan king", "From a Persian word for exile", "From the island of Ostra", "From the pottery shards Athenians wrote names on"], "Voters scratched a name on an ostrakon, a piece of broken pottery."],
      hy: ["Որտեղի՞ց է ծագում «օստրակիզմ» բառը։", ["Սպարտացի թագավորի անունից", "Աքսոր նշանակող պարսկական բառից", "Օստրա կղզու անունից", "Կավանոթի բեկորներից, որոնց վրա աթենացիներն անուններ էին գրում"], "Քվեարկողներն անունը փորագրում էին օստրակոնի՝ կոտրված կավանոթի բեկորի վրա։"],
      ru: ["Откуда происходит слово «остракизм»?", ["От имени спартанского царя", "От персидского слова «изгнание»", "От названия острова Остра", "От черепков, на которых афиняне писали имена"], "Голосующие нацарапывали имя на остраконе — черепке разбитой посуды."],
    }),
  ],
  "ancient-rome": [
    "timeline set=rome",
    closer(
      `**An eyewitness to Vesuvius.** In AD 79 the volcano **Vesuvius** buried the towns of **Pompeii** and Herculaneum under ash and hot gas. The young **Pliny the Younger** watched from across the bay, and years later described it in letters to the historian Tacitus: a cloud shaped like a pine tree, falling stones, darkness at midday, and the death of his uncle, Pliny the Elder, who had sailed in to help. In 1863 the archaeologist Giuseppe Fiorelli poured plaster into the hollows left by bodies in the ash, giving us the famous casts of Pompeii's last moments.

**A dome that still holds.** The **Pantheon** in Rome, finished around AD 125 under Emperor Hadrian, has a concrete dome 43 m across, exactly as wide as the building is high, with a round opening, the oculus, about 9 m wide at the top. Almost 1,900 years later it is still the largest dome in the world made of concrete without steel reinforcement. Roman builders made it lighter towards the top by mixing light volcanic stone into the concrete.`,
      `**Վեզուվի ականատեսը։** Մ.թ. 79 թվականին **Վեզուվ** հրաբուխը **Պոմպեյ** և Հերկուլանում քաղաքները թաղեց մոխրի և տաք գազերի տակ։ Երիտասարդ **Պլինիոս Կրտսերը** դիտում էր ծոցի հակառակ ափից և տարիներ անց պատմիչ Տակիտոսին ուղղված նամակներում նկարագրեց այն. սոճու տեսքով ամպ, թափվող քարեր, խավար կեսօրին և իր հորեղբոր՝ Պլինիոս Ավագի մահը, որը նավով եկել էր օգնելու։ 1863 թվականին հնագետ Ջուզեպպե Ֆիորելլին գիպս լցրեց մոխրի մեջ մարմինների թողած խոռոչների մեջ, և այդպես ստացվեցին Պոմպեյի վերջին պահերի հայտնի ձուլվածքները։

**Գմբեթ, որը դեռ կանգուն է։** Հռոմի **Պանթեոնը**, որն ավարտվել է մոտ մ.թ. 125 թվականին Ադրիանոս կայսեր օրոք, ունի 43 մ տրամագծով բետոնե գմբեթ՝ ճիշտ այնքան լայն, որքան շենքի բարձրությունն է, իսկ գագաթին կա մոտ 9 մ լայնությամբ կլոր բացվածք՝ օկուլուս։ Գրեթե 1900 տարի անց այն դեռ աշխարհի ամենամեծ գմբեթն է, որը պատրաստված է առանց պողպատե ամրանի բետոնից։ Հռոմեացի շինարարներն այն դեպի վեր ավելի թեթև էին դարձնում՝ բետոնին խառնելով թեթև հրաբխային քար։`,
      `**Очевидец Везувия.** В 79 году н. э. вулкан **Везувий** погрёб города **Помпеи** и Геркуланум под пеплом и раскалёнными газами. Юный **Плиний Младший** наблюдал за этим с другого берега залива и годы спустя описал это в письмах историку Тациту: облако в форме сосны, падающие камни, темнота среди дня и гибель его дяди, Плиния Старшего, который поплыл на помощь. В 1863 году археолог Джузеппе Фиорелли залил гипс в пустоты, оставленные телами в пепле, и так появились знаменитые слепки последних мгновений Помпей.

**Купол, который держится до сих пор.** **Пантеон** в Риме, законченный около 125 года н. э. при императоре Адриане, имеет бетонный купол диаметром 43 м — ровно такой же, как высота здания, — с круглым отверстием наверху, окулусом, шириной около 9 м. Почти 1900 лет спустя это всё ещё самый большой в мире купол из бетона без стальной арматуры. Римские строители облегчали его кверху, подмешивая в бетон лёгкий вулканический камень.`,
    ),
    ask(1, {
      en: ["Who left an eyewitness account of the eruption of Vesuvius in AD 79?", ["Pliny the Younger", "Julius Caesar", "Hannibal", "Emperor Hadrian"], "He watched from across the bay and later described it in letters to Tacitus."],
      hy: ["Ո՞վ թողեց մ.թ. 79 թվականի Վեզուվի ժայթքման ականատեսի նկարագրությունը։", ["Պլինիոս Կրտսերը", "Հուլիոս Կեսարը", "Հաննիբալը", "Ադրիանոս կայսրը"], "Նա դիտում էր ծոցի հակառակ ափից և հետագայում այն նկարագրեց Տակիտոսին ուղղված նամակներում։"],
      ru: ["Кто оставил рассказ очевидца об извержении Везувия в 79 году н. э.?", ["Плиний Младший", "Юлий Цезарь", "Ганнибал", "Император Адриан"], "Он наблюдал с другого берега залива и позже описал всё в письмах Тациту."],
    }),
  ],
  "legacy-of-antiquity": [
    "timeline set=thinkers",
    closer(
      `**A computer from a shipwreck.** In 1901 sponge divers near the Greek island of **Antikythera** brought up from an ancient wreck a lump of corroded bronze. Inside were dozens of tiny **gear wheels**. Studied with X-rays in the 2000s, the **Antikythera mechanism**, made around the 2nd century BC, turned out to be a hand-cranked calculator that showed the positions of the Sun and Moon, predicted **eclipses** and even tracked the four-year cycle of the Olympic Games. Nothing as complex is known for more than a thousand years after it.

**Archimedes under a prayer book.** In the 13th century a monk needed parchment, so he scraped the text off an old book of Archimedes and wrote prayers over it. This kind of reused manuscript is called a **palimpsest**. After it was sold at auction in 1998, scientists used special light and X-rays to read the faded writing underneath and found works of Archimedes known nowhere else, including **"The Method"**, which shows how he discovered his results.`,
      `**Համակարգիչ՝ խորտակված նավից։** 1901 թվականին հունական **Անտիկիթերա** կղզու մոտ սպունգ որսացող սուզորդները հին խորտակված նավից հանեցին ժանգոտած բրոնզի մի կտոր։ Ներսում տասնյակ փոքրիկ **ատամնանիվներ** էին։ 2000-ական թվականներին ռենտգենյան ճառագայթներով ուսումնասիրված **Անտիկիթերայի մեխանիզմը**, որը պատրաստվել էր մոտ մ.թ.ա. 2-րդ դարում, պարզվեց, որ բռնակով պտտվող հաշվիչ է, որը ցույց էր տալիս Արեգակի և Լուսնի դիրքերը, կանխատեսում **խավարումները** և նույնիսկ հետևում Օլիմպիական խաղերի չորսամյա շրջանին։ Դրանից հետո ավելի քան հազար տարի նման բարդության ոչինչ հայտնի չէ։

**Արքիմեդեսը՝ աղոթագրքի տակ։** 13-րդ դարում մի վանականի մագաղաթ էր պետք, և նա քերեց Արքիմեդեսի հին գրքի տեքստը և դրա վրա աղոթքներ գրեց։ Այսպիսի կրկին օգտագործված ձեռագիրը կոչվում է **պալիմպսեստ**։ 1998 թվականին աճուրդում վաճառվելուց հետո գիտնականները հատուկ լույսի և ռենտգենյան ճառագայթների օգնությամբ կարդացին տակի խամրած գրությունը և գտան Արքիմեդեսի աշխատություններ, որոնք ուրիշ ոչ մի տեղ հայտնի չեն, այդ թվում՝ **«Մեթոդը»**, որը ցույց է տալիս, թե ինչպես էր նա հանգում իր արդյունքներին։`,
      `**Компьютер с затонувшего корабля.** В 1901 году ловцы губок у греческого острова **Антикитера** подняли с древнего затонувшего судна комок проржавевшей бронзы. Внутри оказались десятки крошечных **зубчатых колёс**. Изученный рентгеном в 2000-х годах **Антикитерский механизм**, изготовленный около II века до н. э., оказался ручным вычислителем, который показывал положение Солнца и Луны, предсказывал **затмения** и даже отслеживал четырёхлетний цикл Олимпийских игр. Ничего столь же сложного не известно ещё более тысячи лет после него.

**Архимед под молитвенником.** В XIII веке монаху понадобился пергамент, и он соскоблил текст старой книги Архимеда и написал поверх молитвы. Такую повторно использованную рукопись называют **палимпсестом**. После её продажи на аукционе в 1998 году учёные с помощью особого света и рентгена прочли выцветший текст под молитвами и нашли сочинения Архимеда, неизвестные больше нигде, в том числе **«Метод»**, который показывает, как он приходил к своим открытиям.`,
    ),
    ask(3, {
      en: ["What could the Antikythera mechanism do?", ["Pump water out of ships", "Print books", "Predict eclipses and show the positions of the Sun and Moon", "Measure the depth of the sea"], "Its bronze gears worked as a hand-cranked astronomical calculator, made around the 2nd century BC."],
      hy: ["Ի՞նչ կարող էր անել Անտիկիթերայի մեխանիզմը։", ["Ջուր դուրս մղել նավերից", "Գրքեր տպել", "Կանխատեսել խավարումները և ցույց տալ Արեգակի ու Լուսնի դիրքերը", "Չափել ծովի խորությունը"], "Նրա բրոնզե ատամնանիվներն աշխատում էին որպես բռնակով պտտվող աստղագիտական հաշվիչ՝ պատրաստված մոտ մ.թ.ա. 2-րդ դարում։"],
      ru: ["Что умел Антикитерский механизм?", ["Откачивать воду из кораблей", "Печатать книги", "Предсказывать затмения и показывать положение Солнца и Луны", "Измерять глубину моря"], "Его бронзовые шестерни работали как ручной астрономический вычислитель, сделанный около II века до н. э."],
    }),
  ],
};
