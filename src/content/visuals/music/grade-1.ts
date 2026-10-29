import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade1: VisualMap[number] = {
  "sounds-around-us": [
    "piano mode=sound",
    closer(
      `**The quietest room in the world.** Engineers sometimes build rooms where the walls, the floor and the ceiling are covered with soft foam wedges. The wedges swallow every sound, so there is no echo at all. Such a room is so quiet that people inside it say they can hear their own heart beating and their stomach gurgling. Most people do not like to stay there for long: our ears are used to a world that is always full of little sounds.

**A bird that copies everything.** In the forests of Australia lives the **lyrebird**. It sings its own songs, but it also copies other birds, and even the sounds of people: a camera clicking, a car alarm, a chainsaw. Nobody teaches it; it simply listens and repeats. When a lyrebird sings, you can hear a whole forest, and sometimes a whole town, in one small bird.`,
      `**Աշխարհի ամենալուռ սենյակը։** Ինժեներներն երբեմն սենյակներ են կառուցում, որոնց պատերը, հատակն ու առաստաղը ծածկված են փափուկ սպունգե սեպերով։ Սեպերը կլանում են ամեն ձայն, ուստի այնտեղ արձագանք ընդհանրապես չկա։ Այդպիսի սենյակն այնքան լուռ է, որ ներսում գտնվողներն ասում են, թե լսում են իրենց սրտի զարկը և ստամոքսի կռկռոցը։ Մարդկանց մեծ մասը չի սիրում այնտեղ երկար մնալ․ մեր ականջները սովոր են մի աշխարհի, որը միշտ լի է փոքրիկ ձայներով։

**Թռչուն, որը կրկնում է ամեն ինչ։** Ավստրալիայի անտառներում ապրում է **քնարապոչը**։ Նա երգում է իր երգերը, բայց նաև կրկնօրինակում է այլ թռչունների, և նույնիսկ մարդկանց հետ կապված ձայներ՝ լուսանկարչական ապարատի չխկոցը, մեքենայի ազդանշանը, էլեկտրասղոցը։ Ոչ ոք նրան չի սովորեցնում, նա պարզապես լսում է և կրկնում։ Երբ քնարապոչն երգում է, մի փոքրիկ թռչնի մեջ լսում ես ամբողջ անտառը, իսկ երբեմն՝ ամբողջ քաղաքը։`,
      `**Самая тихая комната в мире.** Инженеры иногда строят комнаты, где стены, пол и потолок покрыты мягкими клиньями из пены. Клинья поглощают любой звук, поэтому эха там нет совсем. В такой комнате так тихо, что люди внутри говорят, будто слышат, как бьётся их сердце и урчит живот. Большинство не любит оставаться там надолго: наши уши привыкли к миру, где всегда звучат маленькие звуки.

**Птица, которая повторяет всё.** В лесах Австралии живёт **лирохвост**. Он поёт свои песни, но ещё и подражает другим птицам и даже звукам людей: щелчку фотоаппарата, автомобильной сигнализации, бензопиле. Никто его не учит, он просто слушает и повторяет. Когда поёт лирохвост, в одной маленькой птице слышен целый лес, а иногда и целый город.`,
    ),
    ask(2, {
      en: ["Which of these is a musical sound, one you can sing?", ["A door banging", "A little bell ringing", "A chair creaking"], "A bell rings with a clear, singing note; a bang and a creak are noises."],
      hy: ["Սրանցից ո՞րն է երաժշտական հնչյուն, որը կարելի է երգել։", ["Դռան շրխկոցը", "Փոքրիկ զանգակի ղողանջը", "Աթոռի ճռռոցը"], "Զանգակը հնչում է պարզ, երգեցիկ ձայնով, իսկ շրխկոցն ու ճռռոցն աղմուկներ են։"],
      ru: ["Какой из этих звуков музыкальный, его можно спеть?", ["Хлопок двери", "Звон колокольчика", "Скрип стула"], "Колокольчик звенит ясным певучим звуком, а хлопок и скрип — это шумы."],
    }),
  ],
  "loud-and-quiet": [
    "piano mode=sound focus=volume",
    closer(
      `**The first piano.** About 300 years ago, in the Italian city of Florence, an instrument maker named **Bartolomeo Cristofori** had an idea. On the keyboard instruments of his time you could not play softly or loudly: every note sounded the same however you pressed the key. Cristofori put little hammers inside, which hit the strings softly or hard, just as your finger presses. He called his invention an instrument "with soft and loud", in Italian *piano e forte*. That is how the **piano** got its name.

**A loud surprise.** The composer **Joseph Haydn** wrote a symphony with a joke inside. The music starts very quietly, like a lullaby. Then, suddenly, the whole orchestra plays one very **loud** chord! People like to tell that Haydn wanted to wake up listeners who had dozed off. Since then this symphony has been called the **"Surprise"**.`,
      `**Առաջին դաշնամուրը։** Մոտ 300 տարի առաջ իտալական Ֆլորենցիա քաղաքում **Բարտոլոմեո Քրիստոֆորի** անունով մի գործիքագործ մի միտք հղացավ։ Իր ժամանակի ստեղնաշարային գործիքներով հնարավոր չէր նվագել մեղմ կամ ուժեղ․ ամեն նոտա հնչում էր նույն կերպ, ինչպես էլ սեղմեիր ստեղնը։ Քրիստոֆորին ներսում փոքրիկ մուրճեր տեղադրեց, որոնք լարերին հարվածում էին մեղմ կամ ուժեղ՝ ճիշտ այնպես, ինչպես մատդ է սեղմում։ Նա իր գյուտն անվանեց «մեղմ և ուժեղ» գործիք, իտալերեն՝ *piano e forte*։ Ահա այսպես **դաշնամուրը** (պիանո) ստացավ իր անունը։

**Ուժեղ անակնկալ։** Կոմպոզիտոր **Յոզեֆ Հայդնը** գրել է մի սիմֆոնիա, որի մեջ կատակ կա։ Երաժշտությունը սկսվում է շատ մեղմ, ինչպես օրորոցային։ Հետո հանկարծ ամբողջ նվագախումբը նվագում է մեկ շատ **ուժեղ** ակորդ։ Սիրում են պատմել, որ Հայդնն ուզում էր արթնացնել նիրհած ունկնդիրներին։ Այդ ժամանակից ի վեր այս սիմֆոնիան կոչվում է **«Անակնկալ»**։`,
      `**Первое фортепиано.** Около 300 лет назад в итальянском городе Флоренции мастер музыкальных инструментов **Бартоломео Кристофори** придумал новое. На клавишных инструментах его времени нельзя было играть тихо или громко: каждая нота звучала одинаково, как ни нажимай клавишу. Кристофори поместил внутрь маленькие молоточки, которые ударяли по струнам тихо или сильно — так, как нажимает палец. Своё изобретение он назвал инструментом «с тихим и громким», по-итальянски *piano e forte*. Так и появилось слово **фортепиано**.

**Громкий сюрприз.** Композитор **Йозеф Гайдн** написал симфонию с шуткой внутри. Музыка начинается очень тихо, как колыбельная. И вдруг весь оркестр играет один очень **громкий** аккорд! Любят рассказывать, что Гайдн хотел разбудить задремавших слушателей. С тех пор эту симфонию называют **«Сюрприз»**.`,
    ),
    ask(1, {
      en: ["What does the sign f (forte) mean?", ["Loud", "Quiet", "Fast"], "Forte is Italian for strong: play or sing loudly. Piano (p) means quietly."],
      hy: ["Ի՞նչ է նշանակում f (ֆորտե) նշանը։", ["Ուժեղ", "Մեղմ", "Արագ"], "Ֆորտեն իտալերեն նշանակում է ուժեղ՝ նվագել կամ երգել ուժեղ։ Պիանոն (p) նշանակում է մեղմ։"],
      ru: ["Что означает знак f (форте)?", ["Громко", "Тихо", "Быстро"], "Форте по-итальянски значит «сильно»: играть или петь громко. Пиано (p) значит тихо."],
    }),
  ],
  "high-and-low": [
    "piano mode=sound focus=pitch",
    closer(
      `**The smallest and the biggest.** In an orchestra the highest voice belongs to a little flute called the **piccolo**, which means "small" in Italian. It is only about half as long as an ordinary flute, and its sound is bright and whistling, like a bird. One of the lowest voices belongs to the **double bass**, a string instrument so tall that the player stands up or sits on a high stool to play it. The rule is simple: small instruments sound high, big ones sound low.

**Sounds we cannot hear.** Some animals make sounds that are too high or too low for our ears. **Bats** squeak so high that people cannot hear them; they listen to the echo of their squeaks to find insects in the dark. **Elephants** can rumble so low that we cannot hear it either, but other elephants far away can feel and hear the call.`,
      `**Ամենափոքրը և ամենամեծը։** Նվագախմբում ամենաբարձր ձայնը պատկանում է **պիկոլո** կոչվող փոքրիկ ֆլեյտային, որն իտալերեն նշանակում է «փոքր»։ Այն սովորական ֆլեյտայից մոտ կրկնակի կարճ է, իսկ նրա ձայնը պայծառ է ու սուլոցի նման, ինչպես թռչնինը։ Ամենացածր ձայներից մեկը պատկանում է **կոնտրաբասին**՝ մի լարային գործիքի, որն այնքան բարձր է, որ նվագողը կանգնած է նվագում կամ նստում է բարձր աթոռակին։ Կանոնը պարզ է․ փոքր գործիքները հնչում են բարձր, մեծերը՝ ցածր։

**Ձայներ, որոնք չենք լսում։** Որոշ կենդանիներ այնպիսի ձայներ են հանում, որոնք մեր ականջների համար չափազանց բարձր կամ չափազանց ցածր են։ **Չղջիկներն** այնքան բարձր են ճչում, որ մարդիկ չեն լսում․ նրանք լսում են իրենց ճիչերի արձագանքը, որպեսզի մթության մեջ միջատներ գտնեն։ **Փղերը** կարող են այնքան ցածր մռնչալ, որ մենք դա նույնպես չենք լսում, բայց հեռվում գտնվող մյուս փղերը զգում և լսում են կանչը։`,
      `**Самый маленький и самый большой.** В оркестре самый высокий голос у маленькой флейты **пикколо** — по-итальянски это значит «маленькая». Она примерно вдвое короче обычной флейты, а звучит ярко и свистяще, как птица. Один из самых низких голосов у **контрабаса** — струнного инструмента такого высокого, что музыкант играет стоя или сидя на высоком табурете. Правило простое: маленькие инструменты звучат высоко, большие — низко.

**Звуки, которых мы не слышим.** Некоторые животные издают звуки слишком высокие или слишком низкие для наших ушей. **Летучие мыши** пищат так высоко, что люди этого не слышат; они слушают эхо своего писка, чтобы находить насекомых в темноте. **Слоны** умеют урчать так низко, что мы этого тоже не слышим, а другие слоны вдалеке чувствуют и слышат этот зов.`,
    ),
    ask(3, {
      en: ["Which sounds higher?", ["A big drum", "Grandad's voice", "A little bell"], "Small things that vibrate quickly, like a little bell, sound high; big ones sound low."],
      hy: ["Ո՞րն է ավելի բարձր հնչում։", ["Մեծ թմբուկը", "Պապիկի ձայնը", "Փոքրիկ զանգակը"], "Արագ թրթռացող փոքր առարկաները, ինչպես փոքրիկ զանգակը, հնչում են բարձր, իսկ մեծերը՝ ցածր։"],
      ru: ["Что звучит выше?", ["Большой барабан", "Голос дедушки", "Маленький колокольчик"], "Маленькие предметы, которые дрожат быстро, как колокольчик, звучат высоко, а большие — низко."],
    }),
  ],
  "long-and-short": [
    "piano mode=rhythm pattern=e,e,h,e,e,h meter=3 tempo=80",
    closer(
      `**A note that lasts for years.** In a church in the German town of **Halberstadt**, an organ is playing a piece by the composer John Cage called "As Slow As Possible". It began in 2001 and is planned to end in the year **2640**! The notes are so long that one chord can sound for several years. When the time comes for a note to change, people travel from far away to hear that moment. It is the longest, slowest concert in the world.

**Long and short beeps.** Long ago, before telephones, people sent messages along wires with a code of long and short beeps called **Morse code**. Each letter was a little rhythm. The most famous message is **SOS**, a call for help: three short, three long, three short. Clap it: ti-ti-ti, taa-taa-taa, ti-ti-ti. Ships used it to call for help at sea.`,
      `**Նոտա, որ տևում է տարիներ։** Գերմանական **Հալբերշտադտ** քաղաքի եկեղեցիներից մեկում երգեհոնը նվագում է կոմպոզիտոր Ջոն Քեյջի «Որքան հնարավոր է դանդաղ» կոչվող ստեղծագործությունը։ Այն սկսվել է 2001 թվականին և պետք է ավարտվի **2640** թվականին։ Նոտաներն այնքան երկար են, որ մեկ ակորդը կարող է հնչել մի քանի տարի։ Երբ գալիս է նոտան փոխելու պահը, մարդիկ հեռվից գալիս են այդ րոպեն լսելու։ Սա աշխարհի ամենաերկար ու ամենադանդաղ համերգն է։

**Երկար և կարճ ազդանշաններ։** Վաղուց, նախքան հեռախոսները, մարդիկ լարերով հաղորդագրություններ էին ուղարկում երկար և կարճ ազդանշանների ծածկագրով, որը կոչվում է **Մորզեի այբուբեն**։ Ամեն տառ մի փոքրիկ ռիթմ էր։ Ամենահայտնի հաղորդագրությունը **SOS**-ն է՝ օգնության կանչը․ երեք կարճ, երեք երկար, երեք կարճ։ Ծափ տուր․ տի-տի-տի, տաա-տաա-տաա, տի-տի-տի։ Նավերն այն օգտագործում էին ծովում օգնություն կանչելու համար։`,
      `**Нота, которая длится годами.** В одной из церквей немецкого города **Хальберштадт** орган играет пьесу композитора Джона Кейджа «Как можно медленнее». Она началась в 2001 году и должна закончиться в **2640** году! Ноты такие длинные, что один аккорд может звучать несколько лет. Когда приходит время сменить ноту, люди приезжают издалека, чтобы услышать этот момент. Это самый длинный и самый медленный концерт в мире.

**Длинные и короткие сигналы.** Давно, ещё до телефонов, люди посылали сообщения по проводам с помощью кода из длинных и коротких сигналов — **азбуки Морзе**. Каждая буква была маленьким ритмом. Самое известное сообщение — **SOS**, призыв о помощи: три коротких, три длинных, три коротких. Прохлопай: ти-ти-ти, таа-таа-таа, ти-ти-ти. Корабли использовали его, чтобы звать на помощь в море.`,
    ),
    ask(2, {
      en: ["What do we call a pattern of long and short sounds?", ["A melody", "A rhythm", "A noise"], "Long and short sounds in a particular order make a rhythm, the \"steps\" of music."],
      hy: ["Ինչպե՞ս ենք կոչում երկար և կարճ հնչյունների հաջորդականությունը։", ["Մեղեդի", "Ռիթմ", "Աղմուկ"], "Որոշակի կարգով հաջորդող երկար և կարճ հնչյունները կազմում են ռիթմ՝ երաժշտության «քայլերը»։"],
      ru: ["Как называется чередование долгих и коротких звуков?", ["Мелодия", "Ритм", "Шум"], "Долгие и короткие звуки в определённом порядке образуют ритм — «шаги» музыки."],
    }),
  ],
  "song-dance-march": [
    "piano mode=meter meter=2 tempo=112",
    closer(
      `**The March King.** The American bandmaster **John Philip Sousa** wrote more than a hundred marches, and people called him "the March King". His most famous march, "The Stars and Stripes Forever", is still played at parades. Sousa also helped design a new instrument for marching bands: a huge tuba that wraps around the player's body, so it can be carried while walking. It was named after him: the **sousaphone**.

**A dance for everyone.** The Armenian dance **kochari** is danced by a whole line or circle of people, standing shoulder to shoulder and holding on to each other. Everyone stamps and steps together to the beat of the dhol and the zurna, and anyone can join in, young or old. In 2017 UNESCO added the kochari to its list of the world's living heritage, because it brings people together at weddings, holidays and celebrations.`,
      `**Քայլերգերի արքան։** Ամերիկացի նվագախմբավար **Ջոն Ֆիլիպ Սուզան** գրել է ավելի քան հարյուր քայլերգ, և մարդիկ նրան անվանում էին «Քայլերգերի արքա»։ Նրա ամենահայտնի քայլերգը՝ «Աստղեր և շերտեր հավերժ», մինչև այսօր հնչում է շքերթներին։ Սուզան օգնել է նաև նոր գործիք ստեղծել քայլող նվագախմբերի համար՝ մի հսկայական տուբա, որը փաթաթվում է նվագողի մարմնին, որպեսզի այն կարելի լինի տանել քայլելիս։ Այն կոչվեց նրա անունով՝ **սուզաֆոն**։

**Պար բոլորի համար։** Հայկական **քոչարի** պարը պարում է մարդկանց մի ամբողջ շարք կամ շրջան՝ ուս ուսի կանգնած և իրար բռնած։ Բոլորը միասին դոփում և քայլում են դհոլի ու զուռնայի զարկի տակ, և ամեն ոք կարող է միանալ՝ մեծ թե փոքր։ 2017 թվականին ՅՈՒՆԵՍԿՕ-ն քոչարին ներառեց աշխարհի կենդանի ժառանգության ցանկում, որովհետև այն մարդկանց միավորում է հարսանիքներին, տոներին և խնջույքներին։`,
      `**Король маршей.** Американский дирижёр военного оркестра **Джон Филип Суза** написал больше ста маршей, и его прозвали «королём маршей». Его самый знаменитый марш, «Звёзды и полосы навсегда», до сих пор играют на парадах. Суза помог придумать и новый инструмент для марширующих оркестров — огромную тубу, которая обвивается вокруг тела музыканта, чтобы её можно было нести на ходу. Её назвали в его честь — **сузафон**.

**Танец для всех.** Армянский танец **кочари** танцует целая цепочка или круг людей, стоящих плечом к плечу и держащихся друг за друга. Все вместе притопывают и шагают в такт дхолу и зурне, и присоединиться может любой — и старый, и малый. В 2017 году ЮНЕСКО внесла кочари в список живого наследия мира, потому что он объединяет людей на свадьбах, праздниках и торжествах.`,
    ),
    ask(3, {
      en: ["Which music helps people walk in step together?", ["A lullaby", "A song", "A march"], "A march has a clear \"left-right\" beat, so everyone can walk in step."],
      hy: ["Ո՞ր երաժշտությունն է օգնում մարդկանց միասին քայլել նույն քայլով։", ["Օրորոցայինը", "Երգը", "Քայլերգը"], "Քայլերգն ունի «ձախ-աջ» պարզ զարկ, ուստի բոլորը կարող են նույն քայլով քայլել։"],
      ru: ["Какая музыка помогает людям шагать в ногу?", ["Колыбельная", "Песня", "Марш"], "У марша чёткий ритм «левой-правой», поэтому все могут шагать в ногу."],
    }),
  ],
  "how-to-sing": [
    "diagram singer",
    closer(
      `**Your instrument is tiny.** When you sing or speak, two small folds inside your throat, the **vocal folds**, shake very fast, hundreds of times every second. In children they are shorter than a fingernail! The air you breathe out makes them vibrate, and your mouth and nose make the sound bigger and richer, like the body of a guitar. That is why breathing calmly and not shouting are so important: you are looking after a very small, very delicate instrument.

**Hearts that beat together.** Scientists in Sweden once measured the heartbeats of young people singing in a choir. They found something surprising: as the singers breathed and sang together, their hearts began to speed up and slow down together too. Singing in a choir is not only beautiful to hear; it can make people feel calm and close to one another.`,
      `**Քո գործիքը փոքրիկ է։** Երբ երգում կամ խոսում ես, կոկորդիդ ներսում երկու փոքր ծալք՝ **ձայնալարերը**, շատ արագ թրթռում են՝ վայրկյանում հարյուրավոր անգամներ։ Երեխաների մոտ դրանք եղունգից էլ կարճ են։ Դուրս շնչած օդը ստիպում է դրանց թրթռալ, իսկ բերանն ու քիթը ձայնը դարձնում են ավելի մեծ և հարուստ, ինչպես կիթառի իրանը։ Ահա թե ինչու է այդքան կարևոր հանգիստ շնչելը և չգոռալը․ դու խնամում ես շատ փոքր, շատ նուրբ գործիք։

**Սրտեր, որոնք միասին են զարկում։** Շվեդիայում գիտնականները մի անգամ չափեցին երգչախմբում երգող երիտասարդների սրտի զարկերը։ Նրանք զարմանալի բան գտան․ երբ երգիչները միասին էին շնչում և երգում, նրանց սրտերը նույնպես սկսեցին միասին արագանալ և դանդաղել։ Երգչախմբում երգելը ոչ միայն գեղեցիկ է լսելու համար․ այն կարող է մարդկանց հանգստություն և միմյանց հանդեպ մտերմություն պարգևել։`,
      `**Твой инструмент крошечный.** Когда ты поёшь или говоришь, две маленькие складки внутри горла — **голосовые складки** — очень быстро дрожат, сотни раз в секунду. У детей они короче ногтя! Выдыхаемый воздух заставляет их колебаться, а рот и нос делают звук больше и богаче, как корпус гитары. Вот почему так важно дышать спокойно и не кричать: ты бережёшь очень маленький и очень нежный инструмент.

**Сердца, которые бьются вместе.** Учёные в Швеции однажды измерили сердцебиение молодых людей, поющих в хоре. Они обнаружили удивительное: когда певцы вместе дышали и пели, их сердца тоже начинали вместе ускоряться и замедляться. Петь в хоре не только красиво: это может дарить людям спокойствие и чувство близости друг к другу.`,
    ),
    ask(1, {
      en: ["How should you breathe in before singing?", ["Calmly through the nose, without lifting the shoulders", "Quickly through the mouth, lifting the shoulders", "You should hold your breath"], "Breathe in calmly through the nose, as if smelling a flower, and keep your shoulders down."],
      hy: ["Ինչպե՞ս պետք է շունչ քաշել երգելուց առաջ։", ["Հանգիստ՝ քթով, առանց ուսերը բարձրացնելու", "Արագ՝ բերանով, ուսերը բարձրացնելով", "Պետք է շունչը պահել"], "Հանգիստ շունչ քաշի՛ր քթով, կարծես ծաղիկ ես հոտոտում, և ուսերդ ցած պահիր։"],
      ru: ["Как нужно вдыхать перед пением?", ["Спокойно носом, не поднимая плеч", "Быстро ртом, поднимая плечи", "Нужно задержать дыхание"], "Вдыхай спокойно носом, будто нюхаешь цветок, и держи плечи опущенными."],
    }),
  ],
  "armenian-childrens-songs": [
    "piano mode=meter meter=6 tempo=64",
    closer(
      `**A lullaby is a lullaby everywhere.** Scientists once played songs from all over the world to thousands of people, who did not know the languages. Most listeners could still tell which songs were **lullabies**. All over the world lullabies are slow, soft and gentle, and they repeat the same little tune again and again, rocking like a cradle. Armenian mothers singing "Oror, oror" are part of a very old family of songs that every people knows.

**Little singers.** In 1992 the conductor **Tigran Hekekyan** founded a children's choir in Yerevan, the **Little Singers of Armenia**. Its young singers learn Armenian folk songs, sacred music and songs by Komitas, and they have sung in many countries of the world. For many listeners abroad, their clear children's voices are the first Armenian music they ever hear.`,
      `**Օրորոցայինն ամենուր օրորոցային է։** Գիտնականները մի անգամ աշխարհի տարբեր ծայրերից երգեր հնչեցրին հազարավոր մարդկանց, ովքեր չգիտեին այդ լեզուները։ Ունկնդիրների մեծ մասը, այնուամենայնիվ, կարողացավ որոշել, թե որ երգերն են **օրորոցային**։ Ամբողջ աշխարհում օրորոցայինները դանդաղ են, մեղմ ու քնքուշ և նորից ու նորից կրկնում են նույն փոքրիկ մեղեդին՝ օրորվելով, ինչպես օրորոցը։ «Օրոր, օրոր» երգող հայ մայրերը շատ հին մի երգերի ընտանիքի մաս են, որը ճանաչում է յուրաքանչյուր ժողովուրդ։

**Փոքրիկ երգիչներ։** 1992 թվականին դիրիժոր **Տիգրան Հեքեքյանը** Երևանում հիմնեց մանկական երգչախումբ՝ **«Հայաստանի փոքրիկ երգիչներ»**։ Նրա փոքրիկ երգիչները սովորում են հայ ժողովրդական երգեր, հոգևոր երաժշտություն և Կոմիտասի երգեր և երգել են աշխարհի բազմաթիվ երկրներում։ Արտասահմանում շատ ունկնդիրների համար նրանց պարզ մանկական ձայները հայկական առաջին երաժշտությունն են, որ նրանք երբևէ լսում են։`,
      `**Колыбельная везде колыбельная.** Однажды учёные включали песни со всего мира тысячам людей, не знавших этих языков. Большинство слушателей всё равно могли сказать, какие песни — **колыбельные**. Во всём мире колыбельные медленные, тихие и нежные и снова и снова повторяют одну маленькую мелодию, покачиваясь, как колыбель. Армянские мамы, поющие «Орор, орор», — часть очень древней семьи песен, которую знает каждый народ.

**Маленькие певцы.** В 1992 году дирижёр **Тигран Экекян** основал в Ереване детский хор **«Маленькие певцы Армении»**. Его юные певцы разучивают армянские народные песни, духовную музыку и песни Комитаса и пели во многих странах мира. Для многих слушателей за рубежом их чистые детские голоса — первая армянская музыка, которую они слышат.`,
    ),
    ask(2, {
      en: ["Who wrote down thousands of Armenian folk songs so they would not be forgotten?", ["Aram Khachaturian", "Komitas", "Sayat-Nova"], "Komitas travelled from village to village and wrote down the songs he heard."],
      hy: ["Ո՞վ գրի առավ հազարավոր հայ ժողովրդական երգեր, որպեսզի դրանք չմոռացվեն։", ["Արամ Խաչատրյանը", "Կոմիտասը", "Սայաթ-Նովան"], "Կոմիտասը գյուղից գյուղ էր գնում և գրի առնում իր լսած երգերը։"],
      ru: ["Кто записал тысячи армянских народных песен, чтобы их не забыли?", ["Арам Хачатурян", "Комитас", "Саят-Нова"], "Комитас ходил из села в село и записывал песни, которые слышал."],
    }),
  ],
  "first-instruments": [
    "diagram instgroups",
    closer(
      `**The oldest flute.** In a cave in Germany, scientists found a little **flute** made from the wing bone of a vulture, with five finger holes carefully cut along it. It is about **40,000 years old**, one of the oldest musical instruments ever found. So people were already making music in the time of mammoths! Scientists made a copy of it, and it can still play several different notes.

**An orchestra of vegetables.** In Vienna, a group of musicians plays instruments made of **vegetables**: carrot flutes, pumpkin drums, leek violins and cucumber trumpets. Before every concert they go to the market to buy fresh vegetables and make new instruments, because old ones dry out and stop sounding. After the concert the vegetables are cooked into a soup for the audience. Almost anything can become an instrument if you listen carefully.`,
      `**Ամենահին ֆլեյտան։** Գերմանիայի մի քարանձավում գիտնականները գտան **ֆլեյտա**՝ պատրաստված անգղի թևի ոսկորից, որի երկայնքով զգուշորեն բացված է հինգ անցք մատների համար։ Այն մոտ **40 000 տարեկան** է՝ երբևէ գտնված ամենահին երաժշտական գործիքներից մեկը։ Ուրեմն մարդիկ երաժշտություն էին ստեղծում դեռ մամոնտների ժամանակ։ Գիտնականները պատրաստեցին դրա պատճենը, և այն մինչև այսօր կարող է մի քանի տարբեր նոտա նվագել։

**Բանջարեղենի նվագախումբ։** Վիեննայում երաժիշտների մի խումբ նվագում է **բանջարեղենից** պատրաստված գործիքներով՝ գազարե ֆլեյտաներ, դդմե թմբուկներ, պրասե ջութակներ և վարունգե շեփորներ։ Ամեն համերգից առաջ նրանք գնում են շուկա՝ թարմ բանջարեղեն գնելու և նոր գործիքներ պատրաստելու, որովհետև հները չորանում են և դադարում հնչել։ Համերգից հետո բանջարեղենից ապուր են եփում ունկնդիրների համար։ Գրեթե ամեն ինչ կարող է գործիք դառնալ, եթե ուշադիր լսես։`,
      `**Самая древняя флейта.** В пещере в Германии учёные нашли маленькую **флейту** из крылевой кости грифа с пятью аккуратно прорезанными отверстиями для пальцев. Ей около **40 000 лет** — это один из древнейших музыкальных инструментов, когда-либо найденных. Значит, люди уже играли музыку во времена мамонтов! Учёные сделали её копию, и на ней до сих пор можно сыграть несколько разных нот.

**Оркестр из овощей.** В Вене группа музыкантов играет на инструментах из **овощей**: морковных флейтах, тыквенных барабанах, скрипках из лука-порея и огуречных трубах. Перед каждым концертом они идут на рынок за свежими овощами и делают новые инструменты, потому что старые высыхают и перестают звучать. После концерта из овощей варят суп для слушателей. Почти что угодно может стать инструментом, если внимательно слушать.`,
    ),
    ask(3, {
      en: ["What is the duduk made of?", ["Metal", "Plastic", "Apricot wood"], "The duduk is made of apricot wood, which gives it its soft, warm sound."],
      hy: ["Ինչի՞ց է պատրաստված դուդուկը։", ["Մետաղից", "Պլաստմասից", "Ծիրանի փայտից"], "Դուդուկը պատրաստված է ծիրանի փայտից, որն էլ նրան տալիս է մեղմ, ջերմ ձայն։"],
      ru: ["Из чего делают дудук?", ["Из металла", "Из пластмассы", "Из абрикосового дерева"], "Дудук делают из абрикосового дерева, которое даёт ему мягкий, тёплый звук."],
    }),
  ],
};
