import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade4: VisualMap[number] = {
  komitas: [
    "timeline set=komitas",
    closer(
      `**A song hunter without a recorder.** In Komitas's day there were almost no sound recorders, so he collected songs with his ears and a pencil. He went from village to village, sat with ploughmen in the fields and with women at the spinning wheel, and asked them to sing again and again until he had written every turn of the tune. He wrote down about **three thousand** songs. He did not only copy them: he compared different versions of the same song to find its oldest, purest form.

**The last journey abroad.** In 1914 musicians from many countries gathered in Paris for a congress of the International Music Society. Komitas came to speak about Armenian music: its old modes, its khaz and its village songs. He sang examples himself, and listeners were amazed at how different this music was from the European music they knew. It was his last trip abroad: a year later his life was broken by the events of 1915.`,
      `**Երգորս՝ առանց ձայնագրիչի։** Կոմիտասի ժամանակ ձայնագրող սարքեր գրեթե չկային, ուստի նա երգերը հավաքում էր ականջով և մատիտով։ Նա գյուղից գյուղ էր գնում, նստում էր դաշտում՝ հողագործների, իսկ ճախարակի մոտ՝ կանանց կողքին, և խնդրում էր նորից ու նորից երգել, մինչև գրի առներ մեղեդու ամեն շրջադարձ։ Նա գրի է առել մոտ **երեք հազար** երգ։ Նա դրանք պարզապես չէր արտագրում․ համեմատում էր նույն երգի տարբեր տարբերակները՝ գտնելու դրա ամենահին, ամենամաքուր ձևը։

**Վերջին ուղևորությունն արտասահման։** 1914 թվականին բազմաթիվ երկրների երաժիշտներ Փարիզում հավաքվեցին Միջազգային երաժշտական ընկերության համաժողովին։ Կոմիտասն եկավ խոսելու հայկական երաժշտության մասին՝ նրա հին լադերի, խազերի և գյուղական երգերի։ Նա ինքն էր երգում օրինակները, և ունկնդիրները զարմացած էին, թե որքան տարբեր է այս երաժշտությունն իրենց ծանոթ եվրոպական երաժշտությունից։ Դա նրա վերջին ուղևորությունն էր արտասահման․ մեկ տարի անց նրա կյանքը կոտրվեց 1915 թվականի իրադարձություններից։`,
      `**Собиратель песен без магнитофона.** Во времена Комитаса звукозаписывающих аппаратов почти не было, и он собирал песни ушами и карандашом. Он ходил из деревни в деревню, сидел с пахарями в поле и с женщинами у прялки и просил петь снова и снова, пока не запишет каждый поворот мелодии. Он записал около **трёх тысяч** песен. Он не просто переписывал их: он сравнивал разные варианты одной песни, чтобы найти её самую древнюю, самую чистую форму.

**Последняя поездка за границу.** В 1914 году музыканты из многих стран собрались в Париже на конгресс Международного музыкального общества. Комитас приехал рассказать об армянской музыке: о её древних ладах, хазах и деревенских песнях. Он сам пел примеры, и слушатели поражались, насколько эта музыка непохожа на знакомую им европейскую. Это была его последняя поездка за границу: через год его жизнь сломали события 1915 года.`,
    ),
    ask(3, {
      en: ["Where did Komitas study music after Etchmiadzin?", ["Paris", "Moscow", "Berlin"], "From 1896 to 1899 he studied in Berlin, where he learnt about European music."],
      hy: ["Էջմիածնից հետո որտե՞ղ է Կոմիտասն երաժշտություն սովորել։", ["Փարիզում", "Մոսկվայում", "Բեռլինում"], "1896–1899 թվականներին նա սովորել է Բեռլինում, որտեղ ծանոթացել է եվրոպական երաժշտությանը։"],
      ru: ["Где Комитас учился музыке после Эчмиадзина?", ["В Париже", "В Москве", "В Берлине"], "С 1896 по 1899 год он учился в Берлине и познакомился там с европейской музыкой."],
    }),
  ],
  "sayat-nova-and-ashughs": [
    "timeline set=ashugh",
    closer(
      `**Lose the contest, lose your instrument.** Ashughs often met in song contests in front of a crowd. One would sing a riddle or a question in verse, and the other had to answer at once, in verse, to the same tune. The contest could go on for hours. According to an old custom, the ashugh who could not answer handed his **instrument** to the winner, and that was the greatest shame for a singer.

**Bad days pass like winter.** The ashugh **Jivani**, born in Javakhk in 1846, lived through hard times: poverty, war and the loss of his children. Yet his best-known song, **"Dzakhord orer"** ("Unlucky days"), is about hope. Bad days, it says, come and go like the days of winter: they do not stay for ever. Armenians still sing it when life is hard, more than a hundred years after Jivani wrote it.`,
      `**Պարտվեցիր մրցույթում՝ կորցրիր գործիքդ։** Աշուղները հաճախ հանդիպում էին երգի մրցույթներում՝ ամբոխի առջև։ Մեկը չափածո հանելուկ կամ հարց էր երգում, իսկ մյուսը պետք է անմիջապես պատասխաներ, չափածո, նույն եղանակով։ Մրցույթը կարող էր ժամերով շարունակվել։ Հին սովորության համաձայն՝ պատասխանել չկարողացող աշուղն իր **գործիքը** հանձնում էր հաղթողին, և դա երգչի համար ամենամեծ ամոթն էր։

**Վատ օրերն անցնում են ձմռան պես։** **Ջիվանի** աշուղը, որը ծնվել էր Ջավախքում 1846 թվականին, դժվար ժամանակներ ապրեց՝ աղքատություն, պատերազմ և երեխաների կորուստ։ Բայց նրա ամենահայտնի երգը՝ **«Ձախորդ օրեր»**-ը, հույսի մասին է։ Վատ օրերը, ասում է երգը, գալիս ու գնում են ձմռան օրերի պես․ նրանք հավիտյան չեն մնում։ Հայերն այն երգում են այսօր էլ, երբ կյանքը դժվար է՝ Ջիվանու գրելուց ավելի քան հարյուր տարի անց։`,
      `**Проиграл состязание — отдай инструмент.** Ашуги часто встречались на песенных состязаниях перед толпой. Один пел стихотворную загадку или вопрос, а другой должен был сразу ответить, тоже в стихах и на тот же напев. Состязание могло длиться часами. По старому обычаю ашуг, который не мог ответить, отдавал свой **инструмент** победителю, и для певца это был самый большой позор.

**Плохие дни проходят, как зима.** Ашуг **Дживани**, родившийся в Джавахке в 1846 году, пережил тяжёлые времена: бедность, войну и смерть своих детей. Но самая известная его песня, **«Дзахорд орер»** («Злосчастные дни»), — о надежде. Плохие дни, говорится в ней, приходят и уходят, как зимние дни: они не остаются навсегда. Армяне поют её до сих пор, когда жизнь трудна, больше ста лет спустя.`,
    ),
    ask(1, {
      en: ["What three roles does an ashugh combine?", ["Poet, composer and performer", "Priest, teacher and painter", "Actor, dancer and conductor"], "An ashugh writes the words, makes up the tune and sings it to his own instrument."],
      hy: ["Ի՞նչ երեք դեր է միավորում աշուղը։", ["Բանաստեղծ, երգահան և կատարող", "Քահանա, ուսուցիչ և նկարիչ", "Դերասան, պարող և դիրիժոր"], "Աշուղը գրում է խոսքերը, հորինում մեղեդին և երգում այն՝ ինքն իրեն նվագակցելով։"],
      ru: ["Какие три роли совмещает ашуг?", ["Поэт, композитор и исполнитель", "Священник, учитель и художник", "Актёр, танцор и дирижёр"], "Ашуг пишет слова, сочиняет мелодию и поёт её под свой инструмент."],
    }),
  ],
  "folk-song-genres": [
    "diagram folkwheel",
    closer(
      `**Songs that pull ropes.** Sailors on old sailing ships sang **shanties** while they worked. A leader, the shantyman, sang a line, and on the chorus everyone pulled the rope **together**, all on the same beat. A good shanty could make heavy work lighter and faster. In 2021 a young postman from Scotland, Nathan Evans, posted himself singing an old whaling shanty, "The Wellerman", on the internet, and millions of people around the world joined in, adding their own voices.

**Songs of the pandukhts.** In the 19th century thousands of men from villages around **Van**, **Mush** and **Sasun** went far away to Constantinople and other cities to work as porters, water carriers and builders. They sent money home and sometimes did not see their families for years. Their wives and mothers at home, and the men themselves, made up songs of longing. That is why so many Armenian pandukht songs speak of a crane, a wind or a letter that could carry news across the mountains.`,
      `**Պարան քաշող երգեր։** Հին առագաստանավերի նավաստիներն աշխատելիս **շենթիներ** էին երգում։ Առաջնորդը՝ շենթիմենը, երգում էր մի տող, իսկ կրկներգի ժամանակ բոլորը **միասին** էին քաշում պարանը՝ նույն զարկին։ Լավ շենթին կարող էր ծանր աշխատանքը դարձնել ավելի թեթև և արագ։ 2021 թվականին Շոտլանդիայից մի երիտասարդ փոստատար՝ Նաթան Էվանսը, համացանցում տեղադրեց, թե ինչպես է երգում կետորսների հին «Ուելերմեն» երգը, և աշխարհով մեկ միլիոնավոր մարդիկ միացան՝ ավելացնելով իրենց ձայները։

**Պանդուխտների երգերը։** 19-րդ դարում **Վանի**, **Մուշի** և **Սասունի** շրջակա գյուղերից հազարավոր տղամարդիկ գնում էին հեռու՝ Կոստանդնուպոլիս և այլ քաղաքներ, աշխատելու որպես բեռնակիրներ, ջրկիրներ և շինարարներ։ Նրանք փող էին ուղարկում տուն և երբեմն տարիներով չէին տեսնում իրենց ընտանիքները։ Տանը մնացած կանայք ու մայրերը, և իրենք՝ տղամարդիկ, կարոտի երգեր էին հորինում։ Ահա թե ինչու են հայկական պանդխտի երգերից այդքանը խոսում կռունկի, քամու կամ նամակի մասին, որը կարող էր լուր տանել լեռների վրայով։`,
      `**Песни, которые тянут канат.** Моряки на старых парусниках пели за работой **шанти**. Запевала, шантимен, пел строку, а на припеве все **вместе** тянули канат — на одну и ту же долю. Хорошая шанти делала тяжёлую работу легче и быстрее. В 2021 году молодой почтальон из Шотландии Натан Эванс выложил в интернет, как он поёт старую китобойную песню «Веллермен», и миллионы людей по всему миру подхватили её, добавляя свои голоса.

**Песни пандухтов.** В XIX веке тысячи мужчин из деревень вокруг **Вана**, **Муша** и **Сасуна** уходили далеко — в Константинополь и другие города — работать носильщиками, водоносами и строителями. Они отправляли деньги домой и порой годами не видели свои семьи. Оставшиеся дома жёны и матери, да и сами мужчины, слагали песни тоски. Вот почему так много армянских песен пандухтов говорит о журавле, ветре или письме, которые могут донести весть через горы.`,
    ),
    ask(2, {
      en: ["Which genre is \"Krunk\" (\"The Crane\")?", ["A lullaby", "A wanderer's (pandukht) song", "A dance song"], "In \"Krunk\" a wanderer far from home asks a crane for news of his homeland."],
      hy: ["Ո՞ր ժանրին է պատկանում «Կռունկ» երգը։", ["Օրորոցային", "Պանդխտի երգ", "Պարերգ"], "«Կռունկում» տնից հեռու պանդուխտը կռունկից լուր է խնդրում հայրենիքից։"],
      ru: ["К какому жанру относится «Крунк» («Журавль»)?", ["Колыбельная", "Песня странника (пандухта)", "Плясовая"], "В «Крунке» странник вдали от дома просит журавля принести весть с родины."],
    }),
  ],
  "church-music": [
    "diagram manuscript",
    closer(
      `**Eight voices in turn.** The sharakans are not all sung in one mode. The Armenian Church uses **eight** modes, called "voices" (dzayn), and the hymns of the church year move through them one after another, like the colours of a wheel. A church singer must know all eight and feel at once which one a hymn belongs to. Many other ancient churches, such as the Greek and Russian ones, also have a system of eight voices.

**A hymn for brave girls.** One of the oldest sharakans whose author we know was written in the **7th century** by Catholicos **Komitas Aghtsetsi**. It is called **"Andzink nviryalk"** ("Souls devoted") and honours **Hripsime** and her companions, the young women who were martyred in the time of Gregory the Illuminator. It is still sung today, almost fourteen hundred years later, and the composer Komitas took his name from its author.`,
      `**Ութ ձայն՝ հերթով։** Շարականները բոլորը մեկ լադով չեն երգվում։ Հայ եկեղեցին օգտագործում է **ութ** լադ, որոնք կոչվում են «ձայներ», և եկեղեցական տարվա շարականները հերթով անցնում են դրանց միջով, ինչպես անիվի գույները։ Եկեղեցական երգիչը պետք է իմանա բոլոր ութը և անմիջապես զգա, թե որին է պատկանում շարականը։ Շատ այլ հին եկեղեցիներ, օրինակ՝ հունականը և ռուսականը, նույնպես ունեն ութ ձայնի համակարգ։

**Շարական քաջ աղջիկների համար։** Ամենահին շարականներից մեկը, որի հեղինակին մենք գիտենք, գրել է **7-րդ դարում** **Կոմիտաս Աղցեցի** կաթողիկոսը։ Այն կոչվում է **«Անձինք նվիրյալք»** և նվիրված է **Հռիփսիմեին** և նրա ընկերուհիներին՝ Գրիգոր Լուսավորչի ժամանակ նահատակված երիտասարդ կանանց։ Այն այսօր էլ երգվում է՝ գրեթե հազար չորս հարյուր տարի անց, իսկ կոմպոզիտոր Կոմիտասն իր անունը վերցրել է դրա հեղինակից։`,
      `**Восемь гласов по очереди.** Шараканы поют не в одном ладу. Армянская Церковь использует **восемь** ладов, называемых «гласами» (дзайн), и гимны церковного года по очереди проходят через них, как цвета на колесе. Церковный певец должен знать все восемь и сразу чувствовать, к какому гласу относится гимн. Во многих других древних церквях, например в греческой и русской, тоже есть система восьми гласов.

**Гимн для смелых девушек.** Один из древнейших шараканов, автор которого нам известен, написал в **VII веке** католикос **Комитас Ахцеци**. Он называется **«Андзинк нвирялк»** («Души, посвящённые Богу») и прославляет **Рипсиме** и её подруг — молодых женщин, принявших мученическую смерть во времена Григория Просветителя. Его поют и сегодня, почти через тысячу четыреста лет, а композитор Комитас взял своё имя от его автора.`,
    ),
    ask(3, {
      en: ["What were khaz?", ["Old church bells", "Kinds of sharakan", "Signs above the words showing how the melody moved"], "Khaz were written above the text to show how the tune went; their meaning has partly been forgotten."],
      hy: ["Ի՞նչ էին խազերը։", ["Հին եկեղեցական զանգեր", "Շարականների տեսակներ", "Բառերի վերևի նշաններ, որոնք ցույց էին տալիս մեղեդու շարժումը"], "Խազերը գրվում էին տեքստի վերևում՝ ցույց տալու, թե ինչպես է ընթանում մեղեդին․ դրանց իմաստը մասամբ մոռացվել է։"],
      ru: ["Что такое хазы?", ["Старинные церковные колокола", "Виды шараканов", "Знаки над словами, показывающие движение мелодии"], "Хазы писали над текстом, чтобы показать ход мелодии; их смысл отчасти забыт."],
    }),
  ],
  opera: [
    "timeline set=operas",
    closer(
      `**The first operas.** At the end of the 16th century a group of friends in Florence wanted to bring back the drama of ancient Greece, which they believed had been sung, not spoken. In 1598 the composer **Jacopo Peri** staged "Dafne", a story told entirely in song. Its music is lost. His next opera, **"Euridice"** (1600), survives, so it is the oldest opera we can still hear. Within a few years Monteverdi's "Orfeo" showed how powerful the new art could be.

**How one voice beats an orchestra.** An opera singer has no microphone, yet one voice can be heard clearly over eighty instruments. The secret is a trained "ring" in the voice. Scientists found that opera singers learn to make their sound unusually strong around a high pitch where the orchestra is quiet, about **3,000 vibrations a second**. The ear picks out that bright ring easily, so the voice floats over the orchestra instead of being drowned.`,
      `**Առաջին օպերաները։** 16-րդ դարի վերջին Ֆլորենցիայում մի խումբ ընկերներ ցանկանում էին վերակենդանացնել Հին Հունաստանի դրաման, որը, նրանց կարծիքով, ոչ թե արտասանվում, այլ երգվում էր։ 1598 թվականին կոմպոզիտոր **Յակոպո Պերին** բեմադրեց «Դաֆնե»-ն՝ ամբողջությամբ երգով պատմված պատմություն։ Նրա երաժշտությունը կորել է։ Նրա հաջորդ օպերան՝ **«Էվրիդիկե»**-ն (1600), պահպանվել է, ուստի այն ամենահին օպերան է, որը մենք դեռ կարող ենք լսել։ Մի քանի տարի անց Մոնտևերդիի «Օրփեոսը» ցույց տվեց, թե որքան հզոր կարող է լինել նոր արվեստը։

**Ինչպես է մեկ ձայնը հաղթում նվագախմբին։** Օպերային երգիչը խոսափող չունի, բայց մեկ ձայնը պարզ լսվում է ութսուն գործիքի վրայից։ Գաղտնիքը ձայնի մեջ մարզված «զնգոցն» է։ Գիտնականները պարզել են, որ օպերային երգիչները սովորում են իրենց ձայնն անսովոր ուժեղ դարձնել այն բարձր հնչյունի մոտ, որտեղ նվագախումբը թույլ է հնչում՝ մոտ **վայրկյանում 3000 թրթիռ**։ Ականջը հեշտությամբ որսում է այդ պայծառ զնգոցը, ուստի ձայնը լողում է նվագախմբի վրայով՝ փոխանակ խեղդվելու։`,
      `**Первые оперы.** В конце XVI века группа друзей во Флоренции хотела возродить драму Древней Греции, которую, как они считали, не произносили, а пели. В 1598 году композитор **Якопо Пери** поставил «Дафну» — историю, целиком рассказанную пением. Её музыка утеряна. Его следующая опера, **«Эвридика»** (1600), сохранилась, поэтому это самая старая опера, которую мы можем услышать. Через несколько лет «Орфей» Монтеверди показал, каким сильным может быть новое искусство.

**Как один голос побеждает оркестр.** У оперного певца нет микрофона, но один голос ясно слышен поверх восьмидесяти инструментов. Секрет — в натренированном «звоне» голоса. Учёные выяснили, что оперные певцы учатся делать свой звук особенно сильным в высокой области, где оркестр звучит тихо, — около **3000 колебаний в секунду**. Ухо легко выделяет этот яркий звон, поэтому голос парит над оркестром, а не тонет в нём.`,
    ),
    ask(1, {
      en: ["What is an aria?", ["A song for one singer", "The orchestra's introduction", "The text of the opera"], "An aria is a solo song in which a character tells of their feelings; the overture is the introduction and the libretto is the text."],
      hy: ["Ի՞նչ է արիան։", ["Երգ մեկ երգչի համար", "Նվագախմբի նախերգանքը", "Օպերայի տեքստը"], "Արիան մեներգ է, որում հերոսը պատմում է իր զգացմունքների մասին․ նախերգանքը ներածությունն է, իսկ լիբրետոն՝ տեքստը։"],
      ru: ["Что такое ария?", ["Песня для одного певца", "Вступление оркестра", "Текст оперы"], "Ария — сольная песня, в которой герой рассказывает о своих чувствах; увертюра — вступление, либретто — текст."],
    }),
  ],
  ballet: [
    "diagram positions",
    closer(
      `**The first steps on tiptoe.** Ballet dancers did not always stand on their toes. In 1832 in Paris the ballerina **Marie Taglioni** danced the whole of "La Sylphide", a ballet about a forest spirit, rising onto the tips of her toes in soft satin shoes darned at the ends. She seemed to float above the ground, weightless, like a real spirit. The audience was enchanted, and soon every ballerina wanted to dance on pointe. Hard pointe shoes came later.

**A secret instrument.** In 1891 Tchaikovsky saw a new instrument in Paris: the **celesta**, a little keyboard whose hammers strike metal plates and make a sound like tiny bells. He bought one for his ballet **"The Nutcracker"** and asked his publisher to keep it secret, so that no other Russian composer would use it first. In the ballet the celesta plays the "Dance of the Sugar Plum Fairy", and its sparkling sound became one of the most famous in all of music.`,
      `**Առաջին քայլերը մատների ծայրերին։** Բալետի պարողները միշտ չէ, որ կանգնել են մատների ծայրերին։ 1832 թվականին Փարիզում բալետի պարուհի **Մարի Տալյոնին** ամբողջությամբ պարեց «Սիլֆիդ» բալետը՝ անտառի ոգու մասին, բարձրանալով մատների ծայրերին փափուկ, ծայրերը կարկատված ատլասե կոշիկներով։ Թվում էր, թե նա սավառնում է գետնից վեր՝ անկշիռ, ինչպես իսկական ոգի։ Հանդիսատեսը հիացած էր, և շուտով յուրաքանչյուր պարուհի ցանկանում էր պուանտներով պարել։ Կոշտ պուանտներն ավելի ուշ հայտնվեցին։

**Գաղտնի գործիք։** 1891 թվականին Չայկովսկին Փարիզում տեսավ մի նոր գործիք՝ **չելեստան**, փոքրիկ ստեղնաշարային գործիք, որի մուրճիկները հարվածում են մետաղե թիթեղներին և հնչյուն տալիս փոքրիկ զանգակների պես։ Նա մեկը գնեց իր **«Շչելկունչիկ»** բալետի համար և խնդրեց իր հրատարակչին գաղտնի պահել, որպեսզի ոչ մի այլ ռուս կոմպոզիտոր առաջինը չօգտագործի այն։ Բալետում չելեստան նվագում է «Շաքարե սալորի փերու պարը», և նրա փայլատակող հնչյունը դարձավ ամբողջ երաժշտության ամենահայտնիներից մեկը։`,
      `**Первые шаги на кончиках пальцев.** Балерины не всегда вставали на пальцы. В 1832 году в Париже балерина **Мария Тальони** станцевала целиком «Сильфиду», балет о лесном духе, поднимаясь на кончики пальцев в мягких атласных туфлях с заштопанными носками. Казалось, она парит над землёй, невесомая, как настоящий дух. Публика была очарована, и вскоре каждая балерина хотела танцевать на пуантах. Жёсткие пуанты появились позже.

**Секретный инструмент.** В 1891 году Чайковский увидел в Париже новый инструмент — **челесту**, маленькую клавишную, молоточки которой ударяют по металлическим пластинкам и звучат, как крошечные колокольчики. Он купил её для балета **«Щелкунчик»** и попросил издателя держать это в секрете, чтобы ни один другой русский композитор не использовал её первым. В балете челеста играет «Танец феи Драже», и её искрящийся звук стал одним из самых знаменитых во всей музыке.`,
    ),
    ask(2, {
      en: ["How is a story told in a ballet?", ["By singing", "By dancing and music", "By speaking"], "A ballet tells its story through dance and music, without words."],
      hy: ["Ինչպե՞ս է պատմությունը պատմվում բալետում։", ["Երգով", "Պարով և երաժշտությամբ", "Խոսքով"], "Բալետը պատմությունը պատմում է պարով և երաժշտությամբ՝ առանց բառերի։"],
      ru: ["Как рассказывается история в балете?", ["Пением", "Танцем и музыкой", "Словами"], "Балет рассказывает историю танцем и музыкой, без слов."],
    }),
  ],
  "aram-khachaturian": [
    "timeline set=khach",
    closer(
      `**A beginner at nineteen.** Most great composers start lessons as small children. Aram Khachaturian grew up loving music but had almost no lessons and could hardly read notes. In 1922, at the age of nineteen, he arrived in Moscow and joined the Gnessin music school as a beginner on the **cello**, among pupils much younger than himself. He worked so hard that within a few years his teachers saw that he was not only a cellist but a remarkable composer.

**Music in outer space.** In 1968 the film director Stanley Kubrick made "2001: A Space Odyssey", a film about a spaceship travelling to Jupiter. For the long, lonely scenes inside the ship he chose the slow, sad **Adagio** from Khachaturian's ballet **"Gayane"**. The quiet music makes space feel endless and empty. Many people who have never seen the ballet know this melody from the film.`,
      `**Սկսնակ՝ տասնինը տարեկանում։** Մեծ կոմպոզիտորների մեծ մասը դասեր սկսում է փոքր տարիքից։ Արամ Խաչատրյանը մեծացել էր երաժշտությունը սիրելով, բայց գրեթե դասեր չէր առել և հազիվ էր նոտաներ կարդում։ 1922 թվականին, տասնինը տարեկանում, նա ժամանեց Մոսկվա և ընդունվեց Գնեսինների երաժշտական ուսումնարան որպես սկսնակ **թավջութակահար**՝ իրենից շատ ավելի փոքր աշակերտների շարքում։ Նա այնքան ջանասիրաբար էր աշխատում, որ մի քանի տարի անց ուսուցիչները տեսան, որ նա ոչ միայն թավջութակահար է, այլև ականավոր կոմպոզիտոր։

**Երաժշտություն տիեզերքում։** 1968 թվականին կինոռեժիսոր Սթենլի Կուբրիկը նկարահանեց «2001. Տիեզերական ոդիսական» ֆիլմը՝ Յուպիտեր մեկնող տիեզերանավի մասին։ Նավի ներսում երկար, միայնակ տեսարանների համար նա ընտրեց Խաչատրյանի **«Գայանե»** բալետի դանդաղ, տխուր **Ադաժիոն**։ Հանգիստ երաժշտությունը տիեզերքը դարձնում է անվերջ և դատարկ։ Շատերը, ովքեր երբեք չեն տեսել բալետը, այս մեղեդին գիտեն ֆիլմից։`,
      `**Новичок в девятнадцать лет.** Большинство великих композиторов начинают заниматься в раннем детстве. Арам Хачатурян рос, любя музыку, но почти не учился и с трудом читал ноты. В 1922 году, в девятнадцать лет, он приехал в Москву и поступил в музыкальное училище Гнесиных начинающим **виолончелистом**, среди учеников гораздо младше себя. Он трудился так упорно, что через несколько лет учителя увидели в нём не только виолончелиста, но и замечательного композитора.

**Музыка в космосе.** В 1968 году режиссёр Стэнли Кубрик снял фильм «2001 год: Космическая одиссея» о космическом корабле, летящем к Юпитеру. Для долгих одиноких сцен внутри корабля он выбрал медленное, печальное **Адажио** из балета Хачатуряна **«Гаяне»**. Тихая музыка делает космос бесконечным и пустым. Многие, кто никогда не видел балета, знают эту мелодию по фильму.`,
    ),
    ask(3, {
      en: ["In which city was Aram Khachaturian born?", ["Yerevan", "Moscow", "Tiflis"], "He was born in Tiflis (Tbilisi) in 1903 into a bookbinder's family."],
      hy: ["Ո՞ր քաղաքում է ծնվել Արամ Խաչատրյանը։", ["Երևանում", "Մոսկվայում", "Թիֆլիսում"], "Նա ծնվել է Թիֆլիսում (Թբիլիսի) 1903 թվականին՝ կազմարարի ընտանիքում։"],
      ru: ["В каком городе родился Арам Хачатурян?", ["В Ереване", "В Москве", "В Тифлисе"], "Он родился в Тифлисе (Тбилиси) в 1903 году в семье переплётчика."],
    }),
  ],
  "at-the-concert": [
    "diagram hall",
    closer(
      `**When clapping in the middle was fine.** Today we wait for the end of a whole piece before clapping. In Mozart's time audiences were noisier. In 1778 Mozart wrote to his father from Paris about the first performance of his new symphony. He had put a bold, exciting passage in the middle of the first movement, guessing that people would like it, and indeed the audience **burst into applause** right there. Mozart was delighted. Silent listening became the custom only later, in the 19th century.

**A piece made of silence.** In 1952 the pianist David Tudor walked onto a stage in the United States, sat at the piano, opened the lid and... played nothing. He closed and opened the lid to show the three movements of John Cage's piece **"4′33″"**, which lasts four minutes and thirty-three seconds. The "music" was everything the audience heard: wind outside, rain on the roof, people whispering. Cage wanted listeners to notice that there is no such thing as real silence.`,
      `**Երբ մեջտեղում ծափահարելը նորմալ էր։** Այսօր մենք սպասում ենք ամբողջ ստեղծագործության ավարտին, հետո նոր ծափահարում։ Մոցարտի ժամանակ հանդիսատեսն ավելի աղմկոտ էր։ 1778 թվականին Մոցարտը Փարիզից հորը գրեց իր նոր սիմֆոնիայի առաջին կատարման մասին։ Առաջին մասի մեջտեղում նա համարձակ, հուզիչ հատված էր դրել՝ ենթադրելով, որ դա դուր կգա մարդկանց, և իսկապես հանդիսատեսը հենց այդտեղ **ծափահարություններով պայթեց**։ Մոցարտը հիացած էր։ Լուռ ունկնդրելը սովորություն դարձավ միայն ավելի ուշ՝ 19-րդ դարում։

**Լռությունից կազմված ստեղծագործություն։** 1952 թվականին դաշնակահար Դեյվիդ Թյուդորն ԱՄՆ-ում բարձրացավ բեմ, նստեց դաշնամուրի մոտ, բացեց կափարիչը և․․․ ոչինչ չնվագեց։ Նա փակում և բացում էր կափարիչը՝ ցույց տալու Ջոն Քեյջի **«4′33″»** ստեղծագործության երեք մասերը, որը տևում է չորս րոպե երեսուներեք վայրկյան։ «Երաժշտությունն» այն ամենն էր, ինչ լսում էր հանդիսատեսը՝ դրսի քամին, անձրևը տանիքին, մարդկանց շշուկը։ Քեյջը ցանկանում էր, որ ունկնդիրները նկատեն, որ իսկական լռություն գոյություն չունի։`,
      `**Когда хлопать посередине было нормально.** Сегодня мы ждём конца всего произведения, прежде чем хлопать. Во времена Моцарта публика была шумнее. В 1778 году Моцарт писал отцу из Парижа о первом исполнении своей новой симфонии. Посреди первой части он поместил смелый, захватывающий эпизод, догадываясь, что он понравится, и действительно, публика **разразилась аплодисментами** прямо в этом месте. Моцарт был в восторге. Слушать молча стало обычаем лишь позже, в XIX веке.

**Пьеса из тишины.** В 1952 году пианист Дэвид Тюдор вышел на сцену в США, сел за рояль, открыл крышку и... ничего не сыграл. Он закрывал и открывал крышку, показывая три части пьесы Джона Кейджа **«4′33″»**, которая длится четыре минуты тридцать три секунды. «Музыкой» было всё, что слышали зрители: ветер снаружи, дождь по крыше, шёпот людей. Кейдж хотел, чтобы слушатели заметили: настоящей тишины не бывает.`,
    ),
    ask(1, {
      en: ["When should you clap at a concert?", ["At the end of the whole piece", "Between the movements", "Whenever you like a passage"], "Wait until the whole piece is over and the conductor lowers their hands."],
      hy: ["Համերգի ժամանակ ե՞րբ պետք է ծափահարել։", ["Ամբողջ ստեղծագործության վերջում", "Մասերի միջև", "Երբ որևէ հատված դուր է գալիս"], "Սպասի՛ր, մինչև ամբողջ ստեղծագործությունն ավարտվի, և դիրիժորն իջեցնի ձեռքերը։"],
      ru: ["Когда нужно хлопать на концерте?", ["В конце всего произведения", "Между частями", "Когда понравился отрывок"], "Дождись, когда закончится всё произведение и дирижёр опустит руки."],
    }),
  ],
};
