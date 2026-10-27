import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade8: VisualMap[number] = {
  protozoa: [
    "diagram amoeba",
    closer(
      `**Lentils in the pyramids.** The limestone of the Egyptian pyramids at Giza is full of small coin-shaped fossils. The Greek historian Herodotus, who visited Egypt in the 5th century BC, thought they were lentils left over from the builders' meals. In fact they are the shells of **nummulites**, giant single-celled foraminifera that lived in a warm sea about 50 million years ago. A protozoan the size of a coin is huge: most are a tenth of a millimetre or less.

**Malaria and Armenia.** In 1897 the British doctor **R. Ross** proved that the malaria parasite is carried by mosquitoes, and received the Nobel Prize for it. Malaria still kills hundreds of thousands of people a year, most of them children in Africa. Armenia had malaria for centuries in the Ararat Valley, but after draining marshes, treating patients and controlling mosquitoes, the World Health Organization certified Armenia **malaria-free in 2011**.`,
      `**Ոսպ՝ բուրգերում։** Գիզայի եգիպտական բուրգերի կրաքարը լի է մետաղադրամանման փոքր բրածոներով։ Հույն պատմիչ Հերոդոտոսը, որ Եգիպտոս էր այցելել մ.թ.ա. 5-րդ դարում, կարծում էր, թե դրանք շինարարների ճաշից մնացած ոսպ են։ Իրականում դրանք **նումուլիտների** խեցիներն են՝ հսկա միաբջիջ ծակոտկենավորների, որոնք ապրել են տաք ծովում մոտ 50 միլիոն տարի առաջ։ Մետաղադրամի չափ նախակենդանին հսկա է․ մեծ մասը միլիմետրի տասներորդից փոքր է։

**Մալարիան և Հայաստանը։** 1897 թվականին բրիտանացի բժիշկ **Ռ. Ռոսն** ապացուցեց, որ մալարիայի մակաբույծին տարածում են մոծակները, և դրա համար ստացավ Նոբելյան մրցանակ։ Մալարիան մինչ օրս տարեկան սպանում է հարյուր հազարավոր մարդկանց, որոնց մեծ մասն Աֆրիկայի երեխաներ են։ Արարատյան դաշտում մալարիան դարեր շարունակ կար, բայց ճահիճների չորացումից, հիվանդների բուժումից և մոծակների դեմ պայքարից հետո Առողջապահության համաշխարհային կազմակերպությունը **2011 թվականին Հայաստանը ճանաչեց մալարիայից ազատ**։`,
      `**Чечевица в пирамидах.** Известняк египетских пирамид в Гизе полон маленьких окаменелостей в форме монеток. Греческий историк Геродот, побывавший в Египте в V веке до н. э., решил, что это чечевица, оставшаяся от обедов строителей. На самом деле это раковины **нуммулитов** — гигантских одноклеточных фораминифер, живших в тёплом море около 50 миллионов лет назад. Простейшее размером с монету огромно: большинство меньше десятой доли миллиметра.

**Малярия и Армения.** В 1897 году британский врач **Р. Росс** доказал, что малярийного паразита переносят комары, и получил за это Нобелевскую премию. Малярия до сих пор убивает сотни тысяч человек в год, в основном детей в Африке. В Араратской долине малярия была веками, но после осушения болот, лечения больных и борьбы с комарами Всемирная организация здравоохранения в **2011 году признала Армению свободной от малярии**.`,
    ),
    ask(2, {
      en: ["What does the contractile vacuole of an amoeba do?", ["Digests food", "Pumps out extra water", "Stores hereditary information", "Moves the cell"], "Fresh water keeps seeping into the cell, and the contractile vacuole pumps it out."],
      hy: ["Ի՞նչ է անում ամեոբայի կծկվող վակուոլը։", ["Մարսում է սնունդը", "Դուրս է մղում ավելորդ ջուրը", "Պահում է ժառանգական տեղեկատվությունը", "Շարժում է բջիջը"], "Քաղցրահամ ջուրն անընդհատ ներթափանցում է բջիջ, և կծկվող վակուոլն այն դուրս է մղում։"],
      ru: ["Что делает сократительная вакуоль амёбы?", ["Переваривает пищу", "Выкачивает лишнюю воду", "Хранит наследственную информацию", "Двигает клетку"], "Пресная вода всё время просачивается в клетку, и сократительная вакуоль её откачивает."],
    }),
  ],
  "cnidarians-worms": [
    "diagram hydra",
    closer(
      `**The animal that would not die.** In 1744 the Swiss naturalist **A. Trembley** cut hydras into pieces and watched each piece grow into a whole new animal; he even turned a hydra inside out, and it survived. The hydra got its name from the Greek monster whose heads grew back when cut off. Modern studies have found that hydras in the lab hardly seem to **age** at all: their body is renewed again and again by stem cells.

**Darwin's last book was about worms.** In 1881, a year before he died, Charles Darwin published a whole book on **earthworms**. Over decades he measured how worms bring soil up to the surface in their casts. He showed that they slowly bury stones, fallen leaves and even the floors of Roman villas, and that all the topsoil of a field passes through the bodies of worms again and again.`,
      `**Կենդանի, որը չէր ուզում մեռնել։** 1744 թվականին շվեյցարացի բնագետ **Ա. Տրամբլեն** հիդրաներին կտորների բաժանեց և տեսավ, թե ինչպես է յուրաքանչյուր կտորից ամբողջական նոր կենդանի աճում․ նա նույնիսկ հիդրային շուռ տվեց ներսով դուրս, և այն ողջ մնաց։ Հիդրան իր անունը ստացել է հունական հրեշից, որի կտրված գլուխները նորից էին աճում։ Ժամանակակից հետազոտությունները պարզել են, որ լաբորատորիայում հիդրաները գրեթե չեն **ծերանում**․ նրանց մարմինը նորից ու նորից թարմացվում է ցողունային բջիջներով։

**Դարվինի վերջին գիրքը որդերի մասին էր։** 1881 թվականին՝ մահից մեկ տարի առաջ, Չարլզ Դարվինը մի ամբողջ գիրք հրատարակեց **անձրևորդերի** մասին։ Տասնամյակներ շարունակ նա չափում էր, թե ինչպես են որդերն իրենց արտաթորանքով հողը բարձրացնում մակերես։ Նա ցույց տվեց, որ որդերը դանդաղ թաղում են քարերը, թափված տերևները և նույնիսկ հռոմեական վիլլաների հատակները, և որ դաշտի ամբողջ վերին հողաշերտը նորից ու նորից անցնում է որդերի մարմնով։`,
      `**Животное, которое не хотело умирать.** В 1744 году швейцарский натуралист **А. Трамбле** разрезал гидр на куски и видел, как из каждого куска вырастает целое новое животное; он даже выворачивал гидру наизнанку, и она выживала. Гидра получила имя от греческого чудовища, у которого отрубленные головы отрастали снова. Современные исследования показали, что в лаборатории гидры почти не **стареют**: их тело снова и снова обновляется стволовыми клетками.

**Последняя книга Дарвина была о червях.** В 1881 году, за год до смерти, Чарлз Дарвин издал целую книгу о **дождевых червях**. Десятилетиями он измерял, как черви выносят почву на поверхность в своих выбросах. Он показал, что черви медленно погребают камни, опавшие листья и даже полы римских вилл и что весь верхний слой почвы поля снова и снова проходит через тела червей.`,
    ),
    ask(3, {
      en: ["How does the hydra reproduce asexually?", ["By spores", "By dividing in two", "By budding", "By seeds"], "A small hydra grows from the side of its parent and breaks off."],
      hy: ["Ինչպե՞ս է հիդրան բազմանում անսեռ եղանակով։", ["Սպորներով", "Երկու մասի բաժանվելով", "Բողբոջմամբ", "Սերմերով"], "Ծնողի կողքից աճում է փոքրիկ հիդրա և պոկվում։"],
      ru: ["Как гидра размножается бесполым путём?", ["Спорами", "Делением надвое", "Почкованием", "Семенами"], "Сбоку у родителя вырастает маленькая гидра и отделяется."],
    }),
  ],
  mollusks: [
    "diagram snail",
    closer(
      `**Three hearts and blue blood.** The **octopus** has three hearts: two pump blood through the gills and one through the body. Its blood is **blue**, because oxygen is carried not by iron-based haemoglobin, as in ours, but by **haemocyanin**, which contains copper. About two thirds of an octopus's nerve cells are in its arms, so each arm can taste, feel and even act partly on its own. Octopuses open jars, escape from tanks and recognise individual people.

**The biggest eyes on Earth.** The **colossal squid** of the Antarctic waters has eyes about 27 cm across, the size of a football: the largest eyes of any animal. Scientists think they help it spot the faint glow around a diving sperm whale, its main enemy, in the darkness of the deep sea.`,
      `**Երեք սիրտ և կապույտ արյուն։** **Ութոտնուկն** ունի երեք սիրտ․ երկուսն արյուն են մղում խռիկներով, մեկը՝ մարմնով։ Նրա արյունը **կապույտ** է, որովհետև թթվածինը տեղափոխում է ոչ թե մեզ նման երկաթ պարունակող հեմոգլոբինը, այլ պղինձ պարունակող **հեմոցիանինը**։ Ութոտնուկի նյարդային բջիջների մոտ երկու երրորդը նրա շոշափուկներում է, ուստի յուրաքանչյուր շոշափուկ կարող է համ զգալ, շոշափել և նույնիսկ մասամբ ինքնուրույն գործել։ Ութոտնուկները բացում են բանկաներ, փախչում ակվարիումներից և ճանաչում առանձին մարդկանց։

**Երկրի ամենամեծ աչքերը։** Անտարկտիդայի ջրերի **հսկա կաղամարն** ունի մոտ 27 սմ տրամագծով աչքեր՝ ֆուտբոլի գնդակի չափ․ դրանք կենդանիների մեջ ամենամեծ աչքերն են։ Գիտնականները կարծում են, որ այդ աչքերն օգնում են նրան խոր ծովի խավարում նկատել սուզվող կաշալոտի՝ նրա գլխավոր թշնամու շուրջն առաջացող թույլ լուսարձակումը։`,
      `**Три сердца и голубая кровь.** У **осьминога** три сердца: два гонят кровь через жабры, одно — по телу. Кровь у него **голубая**, потому что кислород переносит не гемоглобин с железом, как у нас, а **гемоцианин**, содержащий медь. Около двух третей нервных клеток осьминога находятся в щупальцах, поэтому каждое щупальце может пробовать на вкус, ощупывать и даже отчасти действовать само. Осьминоги открывают банки, убегают из аквариумов и узнают отдельных людей.

**Самые большие глаза на Земле.** У **колоссального кальмара** из антарктических вод глаза около 27 см в поперечнике, размером с футбольный мяч: самые большие глаза в животном мире. Учёные считают, что они помогают ему заметить в темноте глубин слабое свечение вокруг ныряющего кашалота — его главного врага.`,
    ),
    ask(1, {
      en: ["Which part of a mollusc builds the shell?", ["The mantle", "The foot", "The radula", "The gills"], "The mantle covers the body and lays down the shell, and in bivalves also mother-of-pearl."],
      hy: ["Փափկամարմնի ո՞ր մասն է կառուցում խեցին։", ["Թիկնոցը", "Ոտքը", "Ռադուլան", "Խռիկները"], "Թիկնոցը ծածկում է մարմինը և կառուցում խեցին, իսկ երկփեղկանիների մոտ՝ նաև սադափը։"],
      ru: ["Какая часть моллюска строит раковину?", ["Мантия", "Нога", "Радула", "Жабры"], "Мантия покрывает тело и откладывает раковину, а у двустворчатых ещё и перламутр."],
    }),
  ],
  "arthropods-crustaceans-arachnids": [
    "diagram spider",
    closer(
      `**Why there are no giant insects today.** An external skeleton is strong armour, but it is heavy, and it has to be shed to grow, which leaves the animal soft and helpless for a while. That limits size. The largest living arthropod, the **Japanese spider crab**, spans up to about 3.7 m with its legs, but it lives in water, which supports its weight. About 300 million years ago, when the air held more oxygen, the millipede relative **Arthropleura** crawled through coal forests at up to about 2.6 m long.

**Spider silk.** A spider can make up to seven kinds of silk from different glands: for the frame of the web, the sticky spiral, egg cocoons and safety lines. Dragline silk is, weight for weight, **stronger than steel** and stretchier than nylon. The Darwin's bark spider of Madagascar spins webs across whole rivers, with bridge lines up to about 25 m long.`,
      `**Ինչու այսօր հսկա միջատներ չկան։** Արտաքին կմախքն ամուր զրահ է, բայց ծանր է, և աճելու համար այն պետք է թափել, ինչը կենդանուն որոշ ժամանակով թողնում է փափուկ և անպաշտպան։ Դա սահմանափակում է չափերը։ Ամենամեծ կենդանի հոդվածոտանին՝ **ճապոնական սարդանման խեցգետինը**, ոտքերով զբաղեցնում է մինչև մոտ 3,7 մ, բայց ապրում է ջրում, որը պահում է նրա քաշը։ Մոտ 300 միլիոն տարի առաջ, երբ օդում ավելի շատ թթվածին կար, հազարոտանիների ազգական **Արթրոպլևրան** սողում էր ածխածնային անտառներում՝ մինչև մոտ 2,6 մ երկարությամբ։

**Սարդոստայնի թել։** Սարդը տարբեր գեղձերից կարող է ստեղծել մինչև յոթ տեսակի թել՝ ոստայնի շրջանակի, կպչուն պարույրի, ձվերի բոժոժի և ապահովության թելերի համար։ Հիմնական թելը նույն քաշի դեպքում **պողպատից ամուր է** և նեյլոնից առաձգական։ Մադագասկարի «Դարվինի կեղևի սարդը» ոստայններ է հյուսում ամբողջ գետերի վրայով՝ մինչև մոտ 25 մ երկարությամբ կամրջաթելերով։`,
      `**Почему сегодня нет гигантских насекомых.** Наружный скелет — прочная броня, но тяжёлая, и чтобы расти, его приходится сбрасывать, оставаясь на время мягким и беззащитным. Это ограничивает размеры. Самое крупное из живущих членистоногих, **японский краб-паук**, достигает в размахе ног около 3,7 м, но он живёт в воде, которая поддерживает его вес. Около 300 миллионов лет назад, когда в воздухе было больше кислорода, родственник многоножек **артроплевра** длиной до 2,6 м ползал по каменноугольным лесам.

**Паутина.** Паук может делать из разных желёз до семи видов шёлка: для каркаса сети, клейкой спирали, кокона для яиц и страховочной нити. Нить каркаса при одинаковом весе **прочнее стали** и растяжимее нейлона. Мадагаскарский паук-дарвин натягивает сети через целые реки, с нитями-мостами длиной до 25 м.`,
    ),
    ask(2, {
      en: ["How many pairs of walking legs does a spider have?", ["3", "4", "5", "8"], "Arachnids have 4 pairs, insects 3 and crustaceans such as the crayfish 5."],
      hy: ["Քանի՞ զույգ քայլող ոտք ունի սարդը։", ["3", "4", "5", "8"], "Սարդակերպերն ունեն 4 զույգ, միջատները՝ 3, իսկ խեցգետնանմանները, օրինակ՝ գետային խեցգետինը, 5։"],
      ru: ["Сколько пар ходильных ног у паука?", ["3", "4", "5", "8"], "У паукообразных 4 пары, у насекомых 3, у ракообразных, например речного рака, 5."],
    }),
  ],
  insects: [
    "diagram insect",
    "mechanism butterfly",
    closer(
      `**The dance language of bees.** The Austrian scientist **K. von Frisch** spent decades watching bees in glass hives and decoded their **waggle dance**. A forager that has found flowers runs a figure of eight on the comb, waggling her body in the straight middle part. The angle of that run from the vertical shows the direction of the food relative to the Sun, and the length of the waggle shows the distance. Von Frisch shared the Nobel Prize in 1973 for this discovery.

**A spoonful of a lifetime.** A worker bee lives only about six weeks in summer and in her whole life makes about a twelfth of a teaspoon of honey. A jar of honey is the work of thousands of bees flying to millions of flowers. The **silkworm**, the caterpillar of a moth, spins a cocoon from a single thread that can be more than a kilometre long. China kept the secret of silk for thousands of years, and the Silk Road trade route was named after it.`,
      `**Մեղուների պարի լեզուն։** Ավստրիացի գիտնական **Կ. ֆոն Ֆրիշը** տասնամյակներ շարունակ դիտում էր մեղուներին ապակե փեթակներում և վերծանեց նրանց **պոչաշարժ պարը**։ Ծաղիկներ գտած մեղուն մեղրախորիսխի վրա ութի ձև է գծում՝ ուղիղ միջին մասում թափահարելով մարմինը։ Այդ վազքի անկյունն ուղղաձիգից ցույց է տալիս սննդի ուղղությունն Արեգակի նկատմամբ, իսկ թափահարման տևողությունը՝ հեռավորությունը։ Այս հայտնագործության համար ֆոն Ֆրիշը 1973 թվականին Նոբելյան մրցանակի արժանացավ։

**Մի ամբողջ կյանքի գդալը։** Բանվոր մեղուն ամռանն ապրում է ընդամենը մոտ վեց շաբաթ և իր ողջ կյանքում պատրաստում է թեյի գդալի մոտ մեկ տասներկուերորդ մասով մեղր։ Մեղրի մեկ բանկան հազարավոր մեղուների աշխատանքն է, որոնք թռչում են միլիոնավոր ծաղիկների մոտ։ **Շերամը**՝ թիթեռի թրթուրը, բոժոժ է հյուսում մեկ թելից, որը կարող է մեկ կիլոմետրից երկար լինել։ Չինաստանը հազարավոր տարիներ գաղտնի էր պահում մետաքսի գաղտնիքը, և Մետաքսի ճանապարհն անվանվել է դրա անունով։`,
      `**Язык танца пчёл.** Австрийский учёный **К. фон Фриш** десятилетиями наблюдал за пчёлами в стеклянных ульях и расшифровал их **виляющий танец**. Сборщица, нашедшая цветы, бегает по сотам восьмёркой, виляя телом на прямом среднем участке. Угол этого пробега от вертикали показывает направление на корм относительно Солнца, а длительность виляния — расстояние. За это открытие фон Фриш в 1973 году получил Нобелевскую премию.

**Ложечка за всю жизнь.** Рабочая пчела летом живёт всего около шести недель и за всю жизнь даёт примерно двенадцатую часть чайной ложки мёда. Банка мёда — работа тысяч пчёл, слетавших к миллионам цветков. **Тутовый шелкопряд**, гусеница бабочки, плетёт кокон из одной нити длиной больше километра. Китай тысячи лет хранил секрет шёлка, и в честь него назван Шёлковый путь.`,
    ),
    ask(3, {
      en: ["Which insect develops with incomplete metamorphosis?", ["Butterfly", "Bee", "Locust", "Beetle"], "A young locust (nymph) looks like a small adult; there is no pupa stage."],
      hy: ["Ո՞ր միջատն է զարգանում ոչ լրիվ կերպարանափոխությամբ։", ["Թիթեռը", "Մեղուն", "Մորեխը", "Բզեզը"], "Երիտասարդ մորեխը (թրթուր-նիմֆան) նման է փոքր հասուն միջատի․ հարսնյակի փուլ չկա։"],
      ru: ["Какое насекомое развивается с неполным превращением?", ["Бабочка", "Пчела", "Саранча", "Жук"], "Молодая саранча (нимфа) похожа на маленькую взрослую; стадии куколки нет."],
    }),
  ],
  fishes: [
    "diagram fish",
    closer(
      `**Seeing with the skin.** The **lateral line** is a row of tiny pores along each side of a fish, leading to sense cells that feel the slightest movement of water. A shoal of thousands of fish can turn all at once without bumping into each other because every fish feels its neighbours. The **Mexican blind cavefish** has no working eyes at all, yet it swims through dark caves without hitting the walls, guided only by its lateral line.

**The Sevan trout that went abroad.** In the 1930s Sevan trout (ishkhan) were taken to **Lake Issyk-Kul** in Kyrgyzstan, a large mountain lake. There the fish settled well and grew bigger than at home. So while the ishkhan suffered in Lake Sevan from the falling water level and overfishing, a branch of it lived on far away. Fish farms in Armenia also breed ishkhan to release young fish into the lake.`,
      `**Տեսնել մաշկով։** **Կողագիծը** ձկան յուրաքանչյուր կողքով անցնող փոքրիկ ծակոտիների շարք է, որոնք տանում են դեպի զգայական բջիջներ, որոնք զգում են ջրի ամենաչնչին շարժումը։ Հազարավոր ձկներից կազմված երամը կարող է միանգամից շրջվել առանց իրար բախվելու, որովհետև յուրաքանչյուր ձուկ զգում է իր հարևաններին։ **Մեքսիկական կույր քարանձավային ձուկը** ընդհանրապես գործող աչքեր չունի, բայց լողում է մութ քարանձավներով առանց պատերին դիպչելու՝ առաջնորդվելով միայն կողագծով։

**Սևանի իշխանը, որ մեկնեց արտասահման։** 1930-ականներին Սևանի իշխանին տեղափոխեցին Ղրղզստանի մեծ լեռնային լիճը՝ **Իսիկ-Կուլ**։ Այնտեղ ձուկը լավ հարմարվեց և աճեց ավելի մեծ, քան հայրենիքում։ Այսպիսով, մինչ Սևանում իշխանը տուժում էր ջրի մակարդակի իջեցումից և չափից ավելի որսից, նրա մի ճյուղը շարունակում էր ապրել հեռվում։ Հայաստանում ձկնաբուծական տնտեսությունները նույնպես բուծում են իշխան՝ մանրաձկները լիճ բաց թողնելու համար։`,
      `**Видеть кожей.** **Боковая линия** — ряд крошечных пор вдоль каждого бока рыбы, ведущих к чувствительным клеткам, которые ощущают малейшее движение воды. Стая из тысяч рыб может развернуться разом, не сталкиваясь, потому что каждая рыба чувствует соседей. У **мексиканской слепой пещерной рыбы** вовсе нет работающих глаз, но она плавает по тёмным пещерам, не задевая стен, ориентируясь только боковой линией.

**Севанская форель, уехавшая за границу.** В 1930-х годах севанскую форель (ишхан) перевезли в **озеро Иссык-Куль** в Киргизии, большое горное озеро. Там рыба хорошо прижилась и выросла крупнее, чем дома. Так что, пока в Севане ишхан страдал от падения уровня воды и перелова, одна его ветвь продолжала жить далеко. Рыбные хозяйства в Армении тоже разводят ишхана, чтобы выпускать молодь в озеро.`,
    ),
    ask(3, {
      en: ["How many chambers does a fish's heart have?", ["One", "Three", "Two", "Four"], "One atrium and one ventricle, and blood goes round in a single loop."],
      hy: ["Քանի՞ խցիկ ունի ձկան սիրտը։", ["Մեկ", "Երեք", "Երկու", "Չորս"], "Մեկ նախասիրտ և մեկ փորոք, և արյունը շրջանառում է մեկ շրջանով։"],
      ru: ["Сколько камер в сердце рыбы?", ["Одна", "Три", "Две", "Четыре"], "Одно предсердие и один желудочек, и кровь идёт по одному кругу."],
    }),
  ],
  "amphibians-reptiles": [
    "mechanism frog",
    closer(
      `**The tadpole that never grows up.** The **axolotl**, a salamander from the lakes of Mexico City, keeps its feathery gills and lives in water all its life, breeding while still in its larval form. It can regrow a lost leg, its tail and even parts of its heart and brain. The North American **wood frog** has another trick: in winter it freezes almost solid, its heart stops, and in spring it thaws and hops away. Sugar in its cells works like antifreeze.

**A lizard with no fathers.** In the 1950s the Soviet zoologist **I. Darevsky** studied the rock lizards of Armenia and noticed that some species had only females. They lay eggs that develop without fertilisation, and every daughter is a copy of her mother. This was the first case of such **parthenogenesis** found in vertebrates in nature. One of these all-female species is the **Armenian rock lizard**, and the Red Book viper named after Darevsky honours him too.`,
      `**Շերեփուկ, որն երբեք չի մեծանում։** **Աքսոլոտլը**՝ Մեխիկո քաղաքի լճերի սալամանդրը, ամբողջ կյանքում պահպանում է փետրանման խռիկները և ապրում ջրում՝ բազմանալով դեռ թրթուրային ձևով։ Այն կարող է վերաճեցնել կորցրած ոտքը, պոչը և նույնիսկ սրտի ու ուղեղի մասեր։ Հյուսիսամերիկյան **անտառային գորտն** այլ հնարք ունի․ ձմռանն այն գրեթե ամբողջովին սառչում է, սիրտը կանգնում է, իսկ գարնանը հալվում է և ցատկոտելով հեռանում։ Նրա բջիջների շաքարը գործում է հակասառիչի պես։

**Մողես առանց հայրերի։** 1950-ականներին խորհրդային կենդանաբան **Ի. Դարևսկին** ուսումնասիրում էր Հայաստանի ժայռային մողեսներին և նկատեց, որ որոշ տեսակներ ունեն միայն էգեր։ Նրանք ձվեր են ածում, որոնք զարգանում են առանց բեղմնավորման, և յուրաքանչյուր դուստր իր մոր պատճենն է։ Սա բնության մեջ ողնաշարավորների մոտ հայտնաբերված նման **պարթենոգենեզի** առաջին դեպքն էր։ Միայն էգերից բաղկացած այդ տեսակներից մեկը **հայկական ժայռային մողեսն** է, իսկ Կարմիր գրքում գրանցված իժը նույնպես կրում է Դարևսկու անունը։`,
      `**Головастик, который не взрослеет.** **Аксолотль** — саламандра из озёр Мехико — всю жизнь сохраняет перистые жабры и живёт в воде, размножаясь в личиночной форме. Он может отрастить утраченную лапу, хвост и даже части сердца и мозга. У североамериканской **лесной лягушки** другой трюк: зимой она почти полностью замерзает, сердце останавливается, а весной она оттаивает и упрыгивает. Сахар в её клетках работает как антифриз.

**Ящерица без отцов.** В 1950-х годах советский зоолог **И. Даревский** изучал скальных ящериц Армении и заметил, что у некоторых видов есть только самки. Они откладывают яйца, которые развиваются без оплодотворения, и каждая дочь — копия матери. Это был первый найденный в природе случай такого **партеногенеза** у позвоночных. Один из этих «женских» видов — **армянская скальная ящерица**, а краснокнижная гадюка Даревского тоже названа в его честь.`,
    ),
    ask(2, {
      en: ["Why can reptiles breed far from water, while frogs cannot?", ["They breathe with gills", "Their eggs have a tough shell and fertilisation is internal", "They are warm-blooded", "Their skin stays moist"], "A shelled egg and internal fertilisation freed reptiles from water."],
      hy: ["Ինչո՞ւ սողունները կարող են բազմանալ ջրից հեռու, իսկ գորտերը՝ ոչ։", ["Շնչում են խռիկներով", "Նրանց ձվերն ունեն ամուր կեղև, և բեղմնավորումը ներքին է", "Տաքարյուն են", "Նրանց մաշկը խոնավ է մնում"], "Կեղևով ձուն և ներքին բեղմնավորումը սողուններին ազատեցին ջրից։"],
      ru: ["Почему рептилии размножаются вдали от воды, а лягушки нет?", ["Дышат жабрами", "У их яиц прочная оболочка и оплодотворение внутреннее", "Они теплокровные", "Их кожа остаётся влажной"], "Яйцо с оболочкой и внутреннее оплодотворение освободили рептилий от воды."],
    }),
  ],
  birds: [
    "diagram bird",
    closer(
      `**Birds are living dinosaurs.** In 1861, just two years after Darwin's book, the first **Archaeopteryx** was found in Germany: a creature with feathers and wings, but also teeth and a bony tail. Since 1996 dozens of **feathered dinosaurs** have been dug up in China, many of which could not fly at all. Today biologists agree that birds are the one branch of dinosaurs that survived the asteroid 66 million years ago. A sparrow is a dinosaur's closer relative than a crocodile is.

**The longest journeys.** The **Arctic tern** nests in the Arctic and spends the northern winter off Antarctica, so it sees two summers a year. Tiny trackers have shown that a tern can fly 70,000 to 90,000 km a year, and over its life of about 30 years as far as to the Moon and back three times. The **bar-headed goose** crosses the Himalayas on its migration, flying in air with only a third of the oxygen at sea level.`,
      `**Թռչունները կենդանի դինոզավրեր են։** 1861 թվականին, Դարվինի գրքից ընդամենն երկու տարի անց, Գերմանիայում գտնվեց առաջին **արխեոպտերիքսը**՝ փետուրներով և թևերով արարած, բայց նաև ատամներով և ոսկրային պոչով։ 1996 թվականից Չինաստանում պեղվել են տասնյակ **փետրավոր դինոզավրեր**, որոնցից շատերն ընդհանրապես թռչել չէին կարող։ Այսօր կենսաբանները համաձայն են, որ թռչունները դինոզավրերի այն միակ ճյուղն են, որը փրկվեց 66 միլիոն տարի առաջ ընկած աստերոիդից։ Ճնճղուկը դինոզավրի ավելի մոտ ազգական է, քան կոկորդիլոսը։

**Ամենաերկար ճանապարհորդությունները։** **Արկտիկական ծիծեռնաձկնկուլը** բնադրում է Արկտիկայում, իսկ հյուսիսային ձմեռն անցկացնում է Անտարկտիդայի մոտ, ուստի տարեկան երկու ամառ է տեսնում։ Փոքրիկ սարքերը ցույց են տվել, որ այն տարեկան կարող է թռչել 70 000-ից 90 000 կմ, իսկ իր մոտ 30 տարվա կյանքում՝ երեք անգամ մինչև Լուսին և հետ։ **Լեռնային սագը** չվելիս անցնում է Հիմալայների վրայով՝ թռչելով օդում, որտեղ թթվածինը ծովի մակարդակի համեմատ միայն մեկ երրորդն է։`,
      `**Птицы — живые динозавры.** В 1861 году, всего через два года после книги Дарвина, в Германии нашли первого **археоптерикса**: существо с перьями и крыльями, но и с зубами, и с костным хвостом. С 1996 года в Китае раскопали десятки **оперённых динозавров**, многие из которых вовсе не летали. Сегодня биологи согласны, что птицы — единственная ветвь динозавров, пережившая падение астероида 66 миллионов лет назад. Воробей — более близкий родственник динозавров, чем крокодил.

**Самые долгие путешествия.** **Полярная крачка** гнездится в Арктике, а северную зиму проводит у Антарктиды, так что видит два лета в год. Крошечные датчики показали, что крачка пролетает 70 000–90 000 км в год, а за свою жизнь около 30 лет — как три раза до Луны и обратно. **Горный гусь** на перелёте пересекает Гималаи, летя в воздухе, где кислорода лишь треть от уровня моря.`,
    ),
    ask(1, {
      en: ["What is the keel of a bird?", ["A blade on the breastbone for the flight muscles", "A horny beak", "A bag of air in the body", "The tail feathers"], "Strong muscles that move the wings attach to the keel."],
      hy: ["Ի՞նչ է թռչունի կիլը։", ["Կրծոսկրի թիթեղ՝ թռիչքային մկանների համար", "Եղջերային կտուց", "Օդի պարկ մարմնում", "Պոչի փետուրներ"], "Կիլին ամրանում են թևերը շարժող ուժեղ մկանները։"],
      ru: ["Что такое киль у птицы?", ["Вырост грудины для летательных мышц", "Роговой клюв", "Воздушный мешок в теле", "Перья хвоста"], "К килю крепятся сильные мышцы, двигающие крыльями."],
    }),
  ],
  mammals: [
    "bars set=heartrates",
    closer(
      `**Small and fast, big and slow.** A shrew's heart can beat more than 1,000 times a minute, and it must eat about its own weight in food every day or it starves within hours. Small animals lose heat quickly through their relatively large surface, so their metabolism runs fast. Big animals keep heat easily and live slowly: an elephant's heart beats about 30 times a minute, and elephants can live 60 to 70 years.

**Seeing with sound.** In 1793 the Italian scientist **L. Spallanzani** found that blinded bats could still fly through a room strung with threads, but bats with blocked ears crashed. The secret, explained only in the 1930s, is **echolocation**: bats shout in ultrasound, too high for us to hear, and listen to the echoes. Dolphins and toothed whales do the same under water.`,
      `**Փոքր և արագ, մեծ և դանդաղ։** Գետնափորի սիրտը կարող է րոպեում ավելի քան 1000 անգամ զարկել, և նա ամեն օր պետք է ուտի իր քաշի չափ սնունդ, այլապես մի քանի ժամում կսովամահ լինի։ Փոքր կենդանիներն արագ են կորցնում ջերմությունն իրենց հարաբերականորեն մեծ մակերեսով, ուստի նրանց նյութափոխանակությունն արագ է ընթանում։ Մեծ կենդանիները հեշտությամբ են պահում ջերմությունը և ապրում են դանդաղ․ փղի սիրտը րոպեում զարկում է մոտ 30 անգամ, և փղերը կարող են ապրել 60–70 տարի։

**Տեսնել ձայնով։** 1793 թվականին իտալացի գիտնական **Լ. Սպալանցանին** պարզեց, որ կուրացված չղջիկները կարողանում էին թռչել թելերով ձգված սենյակում, իսկ փակված ականջներով չղջիկները բախվում էին։ Գաղտնիքը, որը բացատրվեց միայն 1930-ականներին, **էխոլոկացիան** է․ չղջիկները գոռում են ուլտրաձայնով, որը մեզ համար չափազանց բարձր է լսելու համար, և լսում են արձագանքները։ Դելֆիններն ու ատամնավոր կետերը նույնն են անում ջրի տակ։`,
      `**Маленькие и быстрые, большие и медленные.** Сердце землеройки может биться больше 1000 раз в минуту, и ей нужно каждый день съедать столько еды, сколько весит она сама, иначе она погибнет от голода за несколько часов. Маленькие животные быстро теряют тепло через относительно большую поверхность, поэтому обмен веществ у них быстрый. Крупные легко сохраняют тепло и живут медленно: сердце слона бьётся около 30 раз в минуту, а живут слоны 60–70 лет.

**Видеть звуком.** В 1793 году итальянский учёный **Л. Спалланцани** выяснил, что ослеплённые летучие мыши летают по комнате с натянутыми нитками, а мыши с закрытыми ушами натыкаются на них. Разгадку, найденную лишь в 1930-х годах, называют **эхолокацией**: летучие мыши кричат в ультразвуке, слишком высоком для нашего слуха, и слушают эхо. Дельфины и зубатые киты делают то же под водой.`,
    ),
    ask(4, {
      en: ["Which feature is found ONLY in mammals?", ["A four-chambered heart", "Warm blood", "A backbone", "Mammary glands that make milk"], "Birds are warm-blooded with four-chambered hearts too; only mammals feed their young with milk."],
      hy: ["Ո՞ր հատկանիշը կա ՄԻԱՅՆ կաթնասունների մոտ։", ["Քառախցիկ սիրտ", "Տաքարյունություն", "Ողնաշար", "Կաթ արտադրող կաթնագեղձեր"], "Թռչուններն էլ են տաքարյուն և քառախցիկ սրտով, բայց միայն կաթնասուններն են ձագերին կերակրում կաթով։"],
      ru: ["Какой признак есть ТОЛЬКО у млекопитающих?", ["Четырёхкамерное сердце", "Теплокровность", "Позвоночник", "Молочные железы"], "Птицы тоже теплокровны и с четырёхкамерным сердцем, но молоком кормят детёнышей только млекопитающие."],
    }),
  ],
  "animal-evolution": [
    "bars set=geotime",
    closer(
      `**A fish with a neck.** In 2004 palaeontologists searching rocks about 375 million years old on Ellesmere Island in the Canadian Arctic found **Tiktaalik**. It had scales, fins and gills like a fish, but also a flat head, a neck and fins with the bones of a wrist inside, so it could prop itself up in shallow water. The team had chosen the place in advance: they looked in rocks of the age when fish were expected to start coming onto land.

**Back from the dead.** The **coelacanth**, a lobe-finned fish, was known only from fossils and was thought to have died out about 66 million years ago. In 1938 a museum curator in South Africa, **M. Courtenay-Latimer**, spotted a strange blue fish in a fisherman's catch: a living coelacanth. Its fleshy fins with bones inside show what the fins of the ancestors of land animals were like.`,
      `**Ձուկ՝ պարանոցով։** 2004 թվականին Կանադական Արկտիկայի Էլսմիր կղզում մոտ 375 միլիոն տարեկան ապարներում որոնումներ կատարող հնէաբանները գտան **Տիկտաալիկին**։ Այն ուներ ձկան պես թեփուկներ, լողակներ և խռիկներ, բայց նաև տափակ գլուխ, պարանոց և լողակներ, որոնց ներսում դաստակի ոսկորներ կային, ուստի այն կարող էր հենվել ծանծաղ ջրում։ Խումբը տեղը նախապես էր ընտրել․ նրանք փնտրում էին այն տարիքի ապարներում, երբ ձկները, ըստ սպասումների, սկսել էին դուրս գալ ցամաք։

**Վերադարձ մեռելներից։** **Լատիմերիան**՝ բլթակալողակ ձուկը, հայտնի էր միայն բրածոներից և համարվում էր, որ ոչնչացել է մոտ 66 միլիոն տարի առաջ։ 1938 թվականին Հարավային Աֆրիկայի թանգարանի աշխատակցուհի **Մ. Քորթնի-Լատիմերը** ձկնորսի որսի մեջ նկատեց տարօրինակ կապույտ ձուկ՝ կենդանի լատիմերիա։ Նրա ներսում ոսկորներով մսոտ լողակները ցույց են տալիս, թե ինչպիսին են եղել ցամաքային կենդանիների նախնիների լողակները։`,
      `**Рыба с шеей.** В 2004 году палеонтологи, искавшие в породах возрастом около 375 миллионов лет на острове Элсмир в Канадской Арктике, нашли **тиктаалика**. У него были чешуя, плавники и жабры, как у рыбы, но ещё плоская голова, шея и плавники с костями запястья внутри, так что он мог опираться на них на мелководье. Место выбрали заранее: искали в породах того возраста, когда рыбы, по расчётам, начали выходить на сушу.

**Возвращение из мёртвых.** **Латимерию** (целаканта), кистепёрую рыбу, знали только по окаменелостям и считали вымершей около 66 миллионов лет назад. В 1938 году сотрудница музея в Южной Африке **М. Куртене-Латимер** заметила в улове рыбака странную синюю рыбу — живого целаканта. Её мясистые плавники с костями внутри показывают, какими были плавники предков наземных животных.`,
    ),
    ask(3, {
      en: ["Which feature of Archaeopteryx is reptile-like?", ["Feathers", "Wings", "Teeth in its jaws", "A beak"], "Feathers and wings are bird features; teeth, a long bony tail and wing claws are reptile features."],
      hy: ["Արխեոպտերիքսի ո՞ր հատկանիշն է նման սողուններին։", ["Փետուրները", "Թևերը", "Ծնոտների ատամները", "Կտուցը"], "Փետուրներն ու թևերը թռչնի հատկանիշներ են, ատամները, երկար ոսկրային պոչը և թևերի ճանկերը՝ սողունի։"],
      ru: ["Какой признак археоптерикса роднит его с рептилиями?", ["Перья", "Крылья", "Зубы в челюстях", "Клюв"], "Перья и крылья — птичьи признаки, а зубы, длинный костный хвост и когти на крыльях — признаки рептилий."],
    }),
  ],
  "fauna-of-armenia": [
    closer(
      `**Wild ancestors of our farm animals.** Two Red Book animals of Armenia are the wild forms of animals that people keep everywhere. The **bezoar goat** is the ancestor of the domestic goat, and the **mouflon** of the Armenian Highlands is the ancestor of the domestic sheep. About 10,000 years ago in the mountains of the Near East, people began to tame these animals. Protecting them keeps alive the wild genes from which all goats and sheep came.

**The leopard returns.** The **Persian leopard** was almost wiped out in the South Caucasus in the 20th century. Since the 2000s camera traps set in the **Khosrov Forest** and in the mountains of Zangezur have filmed leopards again, and corridors between protected areas help them move between Armenia, Iran and Azerbaijan. A leopard needs a large territory, so it survives only where there are enough bezoar goats, mouflons and wild boars to hunt.`,
      `**Մեր ընտանի կենդանիների վայրի նախնիները։** Հայաստանի Կարմիր գրքի երկու կենդանի այն կենդանիների վայրի ձևերն են, որոնց մարդիկ պահում են ամենուր։ **Բեզոարյան այծը** ընտանի այծի նախնին է, իսկ Հայկական լեռնաշխարհի **մուֆլոնը**՝ ընտանի ոչխարի նախնին։ Մոտ 10 000 տարի առաջ Մերձավոր Արևելքի լեռներում մարդիկ սկսեցին ընտելացնել այդ կենդանիներին։ Նրանց պաշտպանելով՝ կենդանի ենք պահում այն վայրի գեները, որոնցից ծագել են բոլոր այծերն ու ոչխարները։

**Ընձառյուծը վերադառնում է։** 20-րդ դարում **առաջավորասիական ընձառյուծը** Հարավային Կովկասում գրեթե ոչնչացվել էր։ 2000-ականներից ի վեր **Խոսրովի անտառում** և Զանգեզուրի լեռներում տեղադրված տեսախցիկ-թակարդները նորից նկարահանում են ընձառյուծներ, իսկ պահպանվող տարածքների միջև միջանցքներն օգնում են նրանց տեղաշարժվել Հայաստանի, Իրանի և Ադրբեջանի միջև։ Ընձառյուծին մեծ տարածք է պետք, ուստի այն գոյատևում է միայն այնտեղ, որտեղ բավականաչափ բեզոարյան այծեր, մուֆլոններ և վարազներ կան որսալու համար։`,
      `**Дикие предки наших домашних животных.** Два краснокнижных животных Армении — дикие формы тех, кого люди держат повсюду. **Безоаровый козёл** — предок домашней козы, а **муфлон** Армянского нагорья — предок домашней овцы. Около 10 000 лет назад в горах Ближнего Востока люди начали приручать этих животных. Охраняя их, мы сохраняем дикие гены, от которых произошли все козы и овцы.

**Леопард возвращается.** В XX веке **переднеазиатский леопард** на Южном Кавказе был почти истреблён. С 2000-х годов фотоловушки в **Хосровском лесу** и в горах Зангезура снова снимают леопардов, а коридоры между охраняемыми территориями помогают им переходить между Арменией, Ираном и Азербайджаном. Леопарду нужна большая территория, поэтому он выживает только там, где достаточно безоаровых козлов, муфлонов и кабанов для охоты.`,
    ),
    ask(2, {
      en: ["Which wild animal of Armenia is the ancestor of the domestic goat?", ["The mouflon", "The bezoar goat", "The red deer", "The brown bear"], "The bezoar goat was tamed in the Near East about 10,000 years ago."],
      hy: ["Հայաստանի ո՞ր վայրի կենդանին է ընտանի այծի նախնին։", ["Մուֆլոնը", "Բեզոարյան այծը", "Ազնիվ եղջերուն", "Գորշ արջը"], "Բեզոարյան այծն ընտելացվել է Մերձավոր Արևելքում մոտ 10 000 տարի առաջ։"],
      ru: ["Какое дикое животное Армении — предок домашней козы?", ["Муфлон", "Безоаровый козёл", "Благородный олень", "Бурый медведь"], "Безоарового козла приручили на Ближнем Востоке около 10 000 лет назад."],
    }),
  ],
};
