import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade3: VisualMap[number] = {
  "pop-up-card": [
    "mechanism popup",
    closer(
      `**Paper wheels from 700 years ago.** Moving paper in books is much older than birthday cards. Around the year 1300 the scholar **Ramon Llull**, from the island of Mallorca, put turning paper discs into his books: you spun them to combine different ideas. Later, astronomers used such discs to work out where the Moon and the planets would be.

**A body in layers.** In 1543 the doctor **Andreas Vesalius** published a book about the human body with special sheets for readers to cut out. The organs were printed separately, and you glued them on top of one another onto a drawing of a body. Lifting the layers one by one, a student could look deeper and deeper inside, from the skin down to the heart.`,
      `**Թղթե անիվներ 700 տարի առաջվանից։** Գրքերում շարժվող թուղթը շատ ավելի հին է, քան ծննդյան բացիկները։ Մոտ 1300 թվականին Մայորկա կղզուց գիտնական **Ռամոն Լյուլը** իր գրքերում պտտվող թղթե սկավառակներ տեղադրեց․ դրանք պտտելով՝ տարբեր մտքեր էին զուգակցում։ Ավելի ուշ աստղագետներն այդպիսի սկավառակներով հաշվում էին, թե որտեղ կլինեն Լուսինն ու մոլորակները։

**Մարմինը՝ շերտերով։** 1543 թվականին բժիշկ **Անդրեաս Վեզալիուսը** մարդու մարմնի մասին գիրք հրատարակեց՝ ընթերցողների համար կտրելու հատուկ թերթերով։ Օրգանները տպված էին առանձին, և դրանք սոսնձում էին մեկը մյուսի վրա՝ մարմնի նկարի վրա։ Շերտերը մեկ առ մեկ բարձրացնելով՝ ուսանողը կարող էր նայել ավելի ու ավելի խորը՝ մաշկից մինչև սիրտ։`,
      `**Бумажные колёса 700 лет назад.** Движущаяся бумага в книгах гораздо старше открыток ко дню рождения. Около 1300 года учёный **Раймунд Луллий** с острова Мальорка вставлял в свои книги вращающиеся бумажные диски: поворачивая их, сочетали разные идеи. Позже астрономы с помощью таких дисков рассчитывали, где окажутся Луна и планеты.

**Тело по слоям.** В 1543 году врач **Андреас Везалий** выпустил книгу о человеческом теле со специальными листами, которые читатели вырезали сами. Органы были напечатаны отдельно, и их наклеивали друг на друга на рисунок тела. Поднимая слои один за другим, студент мог заглядывать всё глубже — от кожи до самого сердца.`,
    ),
    ask(2, {
      en: ["What did Ramon Llull put into his books around 1300?", ["Photographs", "Turning paper discs", "Pressed flowers"], "He spun paper discs to combine ideas, and astronomers later used such discs too."],
      hy: ["Ի՞նչ էր Ռամոն Լյուլը տեղադրում իր գրքերում մոտ 1300 թվականին։", ["Լուսանկարներ", "Պտտվող թղթե սկավառակներ", "Սեղմած ծաղիկներ"], "Նա թղթե սկավառակներ էր պտտում՝ մտքերը զուգակցելու համար, իսկ հետո այդպիսի սկավառակներ օգտագործեցին նաև աստղագետները։"],
      ru: ["Что Раймунд Луллий вставлял в свои книги около 1300 года?", ["Фотографии", "Вращающиеся бумажные диски", "Засушенные цветы"], "Он вращал бумажные диски, чтобы сочетать идеи, а позже такими дисками пользовались и астрономы."],
    }),
  ],
  "weaving-and-carpets": [
    "diagram carpet",
    closer(
      `**Red from an insect.** The famous Armenian red came from **vordan karmir**, "worm red". It is a tiny insect that lives underground on the roots of grasses on the Ararat Plain. In early autumn the females climb to the surface for a short time, and people collected them by hand. It took many thousands of insects to make a little dye. More than a thousand years ago Arab writers already praised the red dye from the Armenian city of Artashat.

**A carpet that speaks.** A carpet woven in 1700 has an Armenian inscription woven into it. The weaver, a woman called **Gohar**, wrote: "I, Gohar, full of sins, wove this with my newly taught hands. Whoever reads this, say a word of mercy to God for me." Her carpet is one of the oldest dated Armenian carpets, and people still read her words more than 300 years later.`,
      `**Կարմիրը՝ միջատից։** Հայտնի հայկական կարմիրը ստանում էին **որդան կարմիրից**։ Դա մանրիկ միջատ է, որն ապրում է գետնի տակ՝ Արարատյան դաշտի խոտերի արմատներին։ Վաղ աշնանն էգերը կարճ ժամանակով դուրս են գալիս գետնի երես, և մարդիկ դրանք ձեռքով հավաքում էին։ Մի քիչ ներկ ստանալու համար հազարավոր միջատներ էին պետք։ Ավելի քան հազար տարի առաջ արաբ հեղինակներն արդեն գովաբանում էին հայկական Արտաշատ քաղաքի կարմիր ներկը։

**Գորգ, որը խոսում է։** 1700 թվականին գործված մի գորգի վրա հայերեն արձանագրություն կա՝ գործված հենց գորգի մեջ։ Ջուլհակը՝ **Գոհար** անունով մի կին, գրել է․ «Ես՝ մեղքերով լի Գոհարս, գործեցի նոր վարժված ձեռքերովս։ Ով կարդա, մի խոսքով Աստծուց ողորմություն խնդրի ինձ համար»։ Նրա գորգը թվագրված ամենահին հայկական գորգերից մեկն է, և մարդիկ նրա խոսքերը կարդում են ավելի քան 300 տարի անց։`,
      `**Красный из насекомого.** Знаменитый армянский красный получали из **вордан кармира** — «червячного красного». Это крошечное насекомое, которое живёт под землёй на корнях трав Араратской равнины. Ранней осенью самки ненадолго выбираются на поверхность, и люди собирали их вручную. Чтобы получить немного краски, нужны были многие тысячи насекомых. Больше тысячи лет назад арабские авторы уже хвалили красную краску из армянского города Арташат.

**Ковёр, который говорит.** На ковре, вытканном в 1700 году, вплетена армянская надпись. Ткачиха по имени **Гоар** написала: «Я, Гоар, полная грехов, соткала это своими недавно обученными руками. Кто прочтёт, скажите за меня слово милости Богу». Её ковёр — один из самых старых датированных армянских ковров, и люди читают её слова больше 300 лет спустя.`,
    ),
    ask(3, {
      en: ["Where did the famous Armenian red dye come from?", ["A red stone", "Pomegranate juice", "A tiny insect"], "Vordan karmir lives on the roots of grasses on the Ararat Plain and was collected by hand."],
      hy: ["Որտեղի՞ց էին ստանում հայտնի հայկական կարմիր ներկը։", ["Կարմիր քարից", "Նռան հյութից", "Մանրիկ միջատից"], "Որդան կարմիրն ապրում է Արարատյան դաշտի խոտերի արմատներին, և այն ձեռքով էին հավաքում։"],
      ru: ["Откуда получали знаменитую армянскую красную краску?", ["Из красного камня", "Из гранатового сока", "Из крошечного насекомого"], "Вордан кармир живёт на корнях трав Араратской равнины, его собирали вручную."],
    }),
  ],
  mosaic: [
    "mechanism mosaic",
    closer(
      `**A battle in a million stones.** In 1831, in the ruins of the Roman town of **Pompeii**, archaeologists uncovered a floor mosaic more than 5 metres long. It shows **Alexander the Great** fighting the Persian king **Darius**: horses, spears, frightened faces. It is made of more than a million tiny stones, some only a few millimetres across, and it is about 2,100 years old.

**Mosaics from broken plates.** The Spanish architect **Antoni Gaudí** liked to cover buildings with **trencadís**, a mosaic made of broken tiles, plates and bottles. In Park Güell in Barcelona a long wavy bench is covered with thousands of colourful bits of broken pottery. Many of them were thrown away by factories, so his mosaics were also a way of recycling.`,
      `**Ճակատամարտ՝ միլիոն քարից։** 1831 թվականին հռոմեական **Պոմպեյ** քաղաքի ավերակներում հնագետները բացեցին ավելի քան 5 մետր երկարությամբ հատակի խճանկար։ Այն պատկերում է **Ալեքսանդր Մակեդոնացու** ճակատամարտը պարսից **Դարեհ** արքայի դեմ՝ ձիեր, նիզակներ, վախեցած դեմքեր։ Այն պատրաստված է ավելի քան մեկ միլիոն մանր քարից, որոնցից ոմանք ընդամենը մի քանի միլիմետր են, և մոտ 2100 տարեկան է։

**Խճանկարներ կոտրված ափսեներից։** Իսպանացի ճարտարապետ **Անտոնի Գաուդին** սիրում էր շենքերը պատել **տրենկադիսով**՝ կոտրված սալիկներից, ափսեներից և շշերից պատրաստված խճանկարով։ Բարսելոնի Գուել այգում երկար ալիքաձև նստարանը պատված է կոտրված խեցեղենի հազարավոր գունավոր կտորներով։ Դրանցից շատերը գործարաններն էին դեն նետել, ուստի նրա խճանկարները նաև վերամշակման միջոց էին։`,
      `**Битва из миллиона камешков.** В 1831 году в руинах римского города **Помпеи** археологи открыли напольную мозаику длиной больше 5 метров. На ней **Александр Македонский** сражается с персидским царём **Дарием**: кони, копья, испуганные лица. Она сложена больше чем из миллиона крошечных камешков, некоторые всего в несколько миллиметров, и ей около 2100 лет.

**Мозаика из разбитых тарелок.** Испанский архитектор **Антонио Гауди** любил покрывать здания **тренкадисом** — мозаикой из разбитой плитки, тарелок и бутылок. В парке Гуэль в Барселоне длинная волнистая скамья покрыта тысячами разноцветных осколков керамики. Многие из них выбросили фабрики, так что его мозаики были ещё и способом переработки.`,
    ),
    ask(1, {
      en: ["What did Gaudí make his trencadís mosaics from?", ["Broken tiles, plates and bottles", "Gold coins", "Coloured sweets"], "Much of the broken pottery had been thrown away by factories, so the mosaics were also recycling."],
      hy: ["Ինչի՞ց էր Գաուդին պատրաստում իր տրենկադիս խճանկարները։", ["Կոտրված սալիկներից, ափսեներից և շշերից", "Ոսկե դրամներից", "Գունավոր կոնֆետներից"], "Կոտրված խեցեղենի մեծ մասը գործարանները դեն էին նետել, ուստի խճանկարները նաև վերամշակում էին։"],
      ru: ["Из чего Гауди делал мозаику тренкадис?", ["Из разбитой плитки, тарелок и бутылок", "Из золотых монет", "Из цветных конфет"], "Многие осколки керамики выбросили фабрики, так что мозаика была ещё и переработкой."],
    }),
  ],
  "wheels-and-axles": [
    "mechanism wheel",
    closer(
      `**The oldest wheel with its axle.** In 2002, in the marshes near Ljubljana in Slovenia, archaeologists found a wooden wheel about **5,000** years old, together with its axle: the oldest pair found so far. The wheel was firmly fixed to the axle, and the whole axle turned with it. The wet mud kept out the air, so the wood did not rot.

**Wheels only for toys.** In ancient Mexico, archaeologists have found little clay animals standing on wheels: children's toys, or perhaps objects for ceremonies. Yet the peoples who made them never used wheels for carts. They had no horses, oxen or other large animals to pull them, and many of their paths ran over steep mountains and through thick forest, where people carried loads on their backs.`,
      `**Ամենահին անիվը՝ իր առանցքով։** 2002 թվականին Սլովենիայում՝ Լյուբլյանայի մոտ գտնվող ճահիճներում, հնագետները գտան մոտ **5000** տարեկան փայտե անիվ՝ իր առանցքի հետ միասին․ մինչև այժմ գտնված ամենահին զույգը։ Անիվն ամուր ամրացված էր առանցքին, և ամբողջ առանցքը պտտվում էր նրա հետ։ Թաց ցեխն օդ չէր թողնում, ուստի փայտը չէր փտել։

**Անիվներ միայն խաղալիքների համար։** Հին Մեքսիկայում հնագետները գտել են անիվների վրա կանգնած կավե փոքրիկ կենդանիներ՝ մանկական խաղալիքներ կամ գուցե արարողությունների առարկաներ։ Սակայն դրանք պատրաստած ժողովուրդներն երբեք անիվներ չէին օգտագործում սայլերի համար։ Նրանք չունեին ձիեր, եզներ կամ այլ մեծ կենդանիներ՝ դրանք քաշելու համար, իսկ նրանց ճանապարհներից շատերն անցնում էին զառիթափ լեռներով և խիտ անտառներով, որտեղ մարդիկ բեռները մեջքով էին տանում։`,
      `**Самое древнее колесо с осью.** В 2002 году на болотах под Любляной в Словении археологи нашли деревянное колесо возрастом около **5000** лет вместе с осью — самую древнюю такую пару из найденных. Колесо было прочно закреплено на оси, и вся ось вращалась вместе с ним. Мокрая грязь не пропускала воздух, поэтому дерево не сгнило.

**Колёса только для игрушек.** В Древней Мексике археологи нашли маленьких глиняных зверей на колёсиках — детские игрушки или, может быть, предметы для обрядов. Но народы, которые их делали, никогда не использовали колёса для телег. У них не было лошадей, волов или других больших животных, чтобы их тянуть, а многие их дороги шли по крутым горам и через густые леса, где грузы носили на спине.`,
    ),
    ask(2, {
      en: ["Why did the peoples of ancient Mexico not use wheels for carts?", ["They had no wood", "They had no large animals to pull carts", "Wheels were forbidden"], "Without horses or oxen, and with steep mountain paths, people carried loads on their backs."],
      hy: ["Ինչո՞ւ Հին Մեքսիկայի ժողովուրդներն անիվներ չէին օգտագործում սայլերի համար։", ["Փայտ չունեին", "Չունեին սայլ քաշող մեծ կենդանիներ", "Անիվներն արգելված էին"], "Առանց ձիերի ու եզների և զառիթափ լեռնային ճանապարհներով մարդիկ բեռները մեջքով էին տանում։"],
      ru: ["Почему народы Древней Мексики не использовали колёса для телег?", ["У них не было дерева", "У них не было больших животных, чтобы тянуть телеги", "Колёса были запрещены"], "Без лошадей и волов, да ещё по крутым горным тропам, грузы носили на спине."],
    }),
  ],
  "embroidery-stitches": [
    "mechanism backstitch",
    closer(
      `**A "tapestry" that is really embroidery.** The famous **Bayeux Tapestry** in France is not woven at all: it is embroidered in coloured wool on long strips of linen. It is about **70 metres** long and only half a metre high, and it was made about 950 years ago. Like a giant comic strip, it tells the story of the battle of 1066, when the Normans conquered England, and it even shows a comet in the sky.

**Samplers for practice.** Two or three hundred years ago, girls in many countries learned to embroider by making a **sampler**: a piece of cloth on which they stitched the alphabet, numbers, little pictures and their own name and age. A sampler was a record of every stitch they knew, and many families still keep the ones made by their great-great-grandmothers.`,
      `**«Գոբելեն», որն իրականում ասեղնագործություն է։** Ֆրանսիայի հայտնի **Բայոյի գոբելենը** բոլորովին գործված չէ․ այն ասեղնագործված է գունավոր բրդով՝ վուշե կտորի երկար շերտերի վրա։ Այն մոտ **70 մետր** երկարություն ունի և ընդամենը կես մետր բարձրություն, պատրաստվել է մոտ 950 տարի առաջ։ Հսկա կոմիքսի պես այն պատմում է 1066 թվականի ճակատամարտի մասին, երբ նորմանները նվաճեցին Անգլիան, և նույնիսկ գիսավոր աստղ է պատկերում երկնքում։

**Նմուշներ՝ վարժվելու համար։** Երկու-երեք հարյուր տարի առաջ շատ երկրներում աղջիկներն ասեղնագործություն էին սովորում՝ **նմուշ** պատրաստելով․ կտորի մի կտոր, որի վրա ասեղնագործում էին այբուբենը, թվերը, փոքրիկ նկարներ, իրենց անունն ու տարիքը։ Նմուշը ցույց էր տալիս բոլոր այն կարերը, որոնք նրանք գիտեին, և շատ ընտանիքներ մինչև հիմա պահում են իրենց տատերի տատերի պատրաստած նմուշները։`,
      `**«Гобелен», который на самом деле вышивка.** Знаменитый **гобелен из Байё** во Франции вовсе не соткан: он вышит цветной шерстью на длинных полосах льняного полотна. Его длина около **70 метров**, а высота всего полметра, и сделан он примерно 950 лет назад. Как огромный комикс, он рассказывает о битве 1066 года, когда норманны завоевали Англию, и даже показывает комету в небе.

**Образцы для тренировки.** Двести-триста лет назад девочки во многих странах учились вышивать, делая **образец** — кусок ткани, на котором вышивали алфавит, цифры, маленькие картинки, своё имя и возраст. Образец показывал все стежки, которые они знали, и многие семьи до сих пор хранят образцы, вышитые их прапрабабушками.`,
    ),
    ask(3, {
      en: ["What is the Bayeux Tapestry really?", ["A painting", "A woven carpet", "An embroidery on linen"], "It is embroidered in coloured wool on strips of linen, about 70 metres long."],
      hy: ["Իրականում ի՞նչ է Բայոյի գոբելենը։", ["Կտավ", "Գործված գորգ", "Ասեղնագործություն վուշե կտորի վրա"], "Այն ասեղնագործված է գունավոր բրդով վուշե կտորի շերտերի վրա և մոտ 70 մետր երկարություն ունի։"],
      ru: ["Чем на самом деле является гобелен из Байё?", ["Картиной", "Тканым ковром", "Вышивкой на льняном полотне"], "Он вышит цветной шерстью на полосах льняного полотна длиной около 70 метров."],
    }),
  ],
  "recycled-crafts": [
    "diagram bins",
    closer(
      `**An orchestra from a rubbish dump.** Next to the town of **Cateura** in Paraguay there is a huge rubbish dump, and many families there live by collecting and selling waste. A music teacher wanted to teach the children, but a real violin cost more than a house. So a local recycler, **Nicolás Gómez**, began making instruments from rubbish: violins from oil tins, cellos from old barrels, keys made from forks and coins. The children's "Recycled Orchestra" has since played concerts all over the world.

**Bottles you can wear.** Clean plastic bottles can be chopped into flakes, melted and pulled into thin threads. Since the 1990s soft, warm **fleece** jackets have been made from such threads. The next time you sort a plastic bottle into the right bin, it might come back to you as a scarf or a jumper.`,
      `**Նվագախումբ՝ աղբավայրից։** Պարագվայի **Կատեուրա** քաղաքի մոտ հսկայական աղբավայր կա, և այնտեղ շատ ընտանիքներ ապրում են թափոններ հավաքելով ու վաճառելով։ Երաժշտության մի ուսուցիչ ուզում էր երեխաներին սովորեցնել, բայց իսկական ջութակն ավելի թանկ արժեր, քան տունը։ Այդ ժամանակ տեղացի մի վերամշակող՝ **Նիկոլաս Գոմեսը**, սկսեց գործիքներ պատրաստել աղբից․ ջութակներ՝ յուղի թիթեղյա տարաներից, թավջութակներ՝ հին տակառներից, ստեղներ՝ պատառաքաղներից և մետաղադրամներից։ Երեխաների «Վերամշակված նվագախումբը» այդ ժամանակից համերգներ է տվել ամբողջ աշխարհում։

**Շշեր, որ կարելի է հագնել։** Մաքուր պլաստիկ շշերը կարելի է մանրացնել փաթիլների, հալեցնել և ձգել բարակ թելերի։ 1990-ական թվականներից այդպիսի թելերից պատրաստում են փափուկ, տաք **ֆլիսե** բաճկոններ։ Հաջորդ անգամ, երբ պլաստիկ շիշը գցես ճիշտ աղբամանի մեջ, այն կարող է քեզ վերադառնալ որպես շարֆ կամ սվիտեր։`,
      `**Оркестр со свалки.** Рядом с городом **Катеура** в Парагвае есть огромная свалка, и многие семьи там живут тем, что собирают и продают отходы. Учитель музыки хотел учить детей, но настоящая скрипка стоила дороже дома. Тогда местный сборщик вторсырья **Николас Гомес** начал делать инструменты из мусора: скрипки из жестянок из-под масла, виолончели из старых бочек, клавиши из вилок и монет. С тех пор детский «Оркестр из переработанного» дал концерты по всему миру.

**Бутылки, которые можно надеть.** Чистые пластиковые бутылки можно измельчить в хлопья, расплавить и вытянуть в тонкие нити. С 1990-х годов из таких нитей делают мягкие тёплые **флисовые** куртки. В следующий раз, когда ты бросишь пластиковую бутылку в нужный бак, она может вернуться к тебе шарфом или свитером.`,
    ),
    ask(1, {
      en: ["What were the instruments of the Cateura orchestra made from?", ["Rubbish from the dump", "Gold and silver", "Ice"], "A local recycler made violins from oil tins, cellos from barrels and keys from forks and coins."],
      hy: ["Ինչի՞ց էին պատրաստված Կատեուրայի նվագախմբի գործիքները։", ["Աղբավայրի աղբից", "Ոսկուց և արծաթից", "Սառույցից"], "Տեղացի վերամշակողը ջութակներ պատրաստեց յուղի տարաներից, թավջութակներ՝ տակառներից, ստեղներ՝ պատառաքաղներից և մետաղադրամներից։"],
      ru: ["Из чего были сделаны инструменты оркестра Катеуры?", ["Из мусора со свалки", "Из золота и серебра", "Изо льда"], "Местный сборщик вторсырья делал скрипки из жестянок, виолончели из бочек, клавиши из вилок и монет."],
    }),
  ],
  "growing-plants": [
    "mechanism bean",
    closer(
      `**Lettuce grown in space.** In 2015 astronauts on the International Space Station ate a salad they had grown themselves. The red lettuce grew in a small box under **pink-purple light**: a mix of red and blue lamps, the two colours plants use most. Without gravity the roots could not tell which way was down, so the seeds were planted in little pillows that held water and food around them.

**Every banana is a twin.** The bananas in our shops have no proper seeds, only tiny black specks. So new banana plants are grown from **cuttings** and shoots of a parent plant, just like a busy Lizzie in a glass of water. This means almost all the bananas in the world's shops are copies of the same plant, like millions of identical twins.`,
      `**Տիեզերքում աճեցված հազար։** 2015 թվականին Միջազգային տիեզերական կայանի տիեզերագնացները կերան իրենց իսկ աճեցրած աղցանը։ Կարմիր հազարն աճեց փոքր արկղում՝ **վարդագույն-մանուշակագույն լույսի** տակ․ կարմիր և կապույտ լամպերի խառնուրդ, այն երկու գույնը, որոնք բույսերն ամենաշատն են օգտագործում։ Առանց ձգողության արմատները չէին կարող հասկանալ, թե որ կողմն է ներքևը, ուստի սերմերը տնկել էին փոքրիկ բարձիկների մեջ, որոնք ջուր և սնունդ էին պահում դրանց շուրջը։

**Ամեն բանան երկվորյակ է։** Մեր խանութների բանաններն իսկական սերմեր չունեն, միայն մանրիկ սև կետիկներ։ Ուստի բանանի նոր բույսերն աճեցնում են մայր բույսի **կտրոններից** և շիվերից, ինչպես բալզամինը ջրով բաժակում։ Դա նշանակում է, որ աշխարհի խանութների գրեթե բոլոր բանանները նույն բույսի պատճեններն են, ինչպես միլիոնավոր միանման երկվորյակներ։`,
      `**Салат, выращенный в космосе.** В 2015 году космонавты на Международной космической станции съели салат, который вырастили сами. Красный латук рос в маленьком ящике под **розово-фиолетовым светом** — смесью красных и синих ламп, двух цветов, которые растения используют больше всего. Без тяжести корни не могли понять, где низ, поэтому семена посадили в маленькие подушечки, которые держали вокруг них воду и питание.

**Каждый банан — близнец.** У бананов в наших магазинах нет настоящих семян, только крошечные чёрные точки. Поэтому новые банановые растения выращивают из **черенков** и отростков материнского растения, как бальзамин в стакане воды. Это значит, что почти все бананы в магазинах мира — копии одного и того же растения, как миллионы одинаковых близнецов.`,
    ),
    ask(3, {
      en: ["What light did the lettuce on the space station grow under?", ["Candlelight", "Sunlight through a window", "Pink-purple light from red and blue lamps"], "Red and blue are the colours plants use most, so the lamps mixed them into a pink-purple glow."],
      hy: ["Ինչպիսի՞ լույսի տակ էր աճում տիեզերական կայանի հազարը։", ["Մոմի լույսի", "Պատուհանից եկող արևի լույսի", "Կարմիր և կապույտ լամպերի վարդագույն-մանուշակագույն լույսի"], "Կարմիրն ու կապույտն այն գույներն են, որոնք բույսերն ամենաշատն են օգտագործում, ուստի լամպերը դրանք խառնում էին վարդագույն-մանուշակագույն լույսի։"],
      ru: ["Под каким светом рос салат на космической станции?", ["При свечах", "Под солнцем из окна", "Под розово-фиолетовым светом красных и синих ламп"], "Красный и синий — цвета, которые растения используют больше всего, поэтому лампы смешивали их в розово-фиолетовый свет."],
    }),
  ],
  "setting-the-table": [
    "diagram table",
    closer(
      `**The scandal of the golden fork.** About a thousand years ago a Byzantine princess, **Maria**, came from Constantinople to Venice to marry the son of the city's ruler. At the wedding feast she did not eat with her fingers like everyone else: she used a small **golden fork**. The churchmen of Venice were shocked and called it showing off. It took hundreds of years before forks were used everywhere in Europe.

**Bring your own napkin.** In ancient Rome guests at a feast brought their own napkin. They wiped their fingers on it during the meal, and at the end they wrapped up tasty leftovers in it to take home. Taking food home after a party is a very old custom!`,
      `**Ոսկե պատառաքաղի աղմուկը։** Մոտ հազար տարի առաջ բյուզանդական արքայադուստր **Մարիան** Կոստանդնուպոլսից Վենետիկ եկավ՝ ամուսնանալու քաղաքի կառավարչի որդու հետ։ Հարսանեկան խնջույքին նա մյուսների պես մատներով չէր ուտում․ նա օգտագործում էր փոքրիկ **ոսկե պատառաքաղ**։ Վենետիկի հոգևորականները ցնցված էին և դա պչրանք անվանեցին։ Հարյուրավոր տարիներ անցան, մինչև պատառաքաղները սկսեցին օգտագործել ամբողջ Եվրոպայում։

**Անձեռոցիկդ բեր քեզ հետ։** Հին Հռոմում խնջույքի հյուրերն իրենց անձեռոցիկն էին բերում։ Ճաշի ժամանակ դրանով սրբում էին մատները, իսկ վերջում դրա մեջ փաթաթում էին համեղ մնացորդները՝ տուն տանելու համար։ Խնջույքից հետո ուտելիք տուն տանելը շատ հին սովորություն է։`,
      `**Скандал с золотой вилкой.** Около тысячи лет назад византийская царевна **Мария** приехала из Константинополя в Венецию, чтобы выйти замуж за сына правителя города. На свадебном пиру она ела не пальцами, как все, а маленькой **золотой вилкой**. Венецианские священники были потрясены и назвали это щегольством. Прошли сотни лет, прежде чем вилками стали пользоваться по всей Европе.

**Приходи со своей салфеткой.** В Древнем Риме гости приходили на пир со своей салфеткой. Во время еды они вытирали ею пальцы, а в конце заворачивали в неё вкусные остатки, чтобы унести домой. Уносить еду домой после праздника — очень древний обычай!`,
    ),
    ask(2, {
      en: ["Where did the princess who brought a fork to Venice come from?", ["From America", "From Constantinople", "From China"], "The Byzantine princess Maria ate with a small golden fork at her wedding feast in Venice."],
      hy: ["Որտեղի՞ց էր եկել արքայադուստրը, որ պատառաքաղը բերեց Վենետիկ։", ["Ամերիկայից", "Կոստանդնուպոլսից", "Չինաստանից"], "Բյուզանդական արքայադուստր Մարիան Վենետիկում իր հարսանեկան խնջույքին ուտում էր փոքրիկ ոսկե պատառաքաղով։"],
      ru: ["Откуда приехала царевна, которая привезла вилку в Венецию?", ["Из Америки", "Из Константинополя", "Из Китая"], "Византийская царевна Мария ела маленькой золотой вилкой на своём свадебном пиру в Венеции."],
    }),
  ],
};
