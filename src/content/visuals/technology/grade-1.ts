import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade1: VisualMap[number] = {
  "materials-around-us": [
    "diagram materials",
    closer(
      `**Wasps made paper first.** In 1719 the French scientist **René de Réaumur** watched wasps building their nests. They chewed tiny bits of old wood and spread the paste into thin grey sheets. Réaumur wrote that people could make paper from wood too. In his time paper was made from old linen rags, and there were never enough. It took more than a hundred years, but in the 1840s people learned to make paper from wood. Today almost all paper is made that way.

**Glass from sand: a legend.** About 2,000 years ago the Roman writer **Pliny** told this story. Sailors carrying lumps of soda landed on a sandy beach. They had no stones, so they rested their cooking pots on the lumps of soda. The fire was so hot that the sand and the soda melted together, and in the morning the sailors found something shiny and clear: glass! Scientists think glass was really first made even earlier, about 4,500 years ago. But the recipe in the story is right: sand, soda and a very hot fire.`,
      `**Թուղթն առաջինը պատրաստել են կրետները։** 1719 թվականին ֆրանսիացի գիտնական **Ռենե դը Ռեոմյուրը** հետևում էր, թե ինչպես են կրետները բույն շինում։ Նրանք ծամում էին հին փայտի մանր կտորներ և զանգվածը փռում բարակ մոխրագույն թերթերով։ Ռեոմյուրը գրեց, որ մարդիկ նույնպես կարող են թուղթ պատրաստել փայտից։ Նրա ժամանակ թուղթը պատրաստում էին վուշե հին լաթերից, և դրանք միշտ չէին բավականացնում։ Անցավ ավելի քան հարյուր տարի, բայց 1840-ական թվականներին մարդիկ սովորեցին թուղթ պատրաստել փայտից։ Այսօր գրեթե ամբողջ թուղթն այդպես են պատրաստում։

**Ապակի ավազից․ լեգենդ։** Մոտ 2000 տարի առաջ հռոմեացի գրող **Պլինիոսը** պատմել է այսպիսի մի պատմություն։ Սոդայի կտորներ տեղափոխող նավաստիներն իջան ավազոտ ափ։ Քարեր չկային, և նրանք կաթսաները դրեցին սոդայի կտորների վրա։ Կրակն այնքան ուժեղ էր, որ ավազն ու սոդան միասին հալվեցին, և առավոտյան նավաստիները գտան փայլուն ու թափանցիկ մի բան՝ ապակի։ Գիտնականները կարծում են, որ իրականում ապակին առաջին անգամ պատրաստել են ավելի վաղ՝ մոտ 4500 տարի առաջ։ Բայց պատմության բաղադրատոմսը ճիշտ է՝ ավազ, սոդա և շատ տաք կրակ։`,
      `**Бумагу первыми сделали осы.** В 1719 году французский учёный **Рене де Реомюр** наблюдал, как осы строят гнёзда. Они жевали крошечные кусочки старого дерева и размазывали кашицу тонкими серыми листами. Реомюр написал, что люди тоже могли бы делать бумагу из дерева. В его время бумагу делали из старых льняных тряпок, и их всегда не хватало. Прошло больше ста лет, но в 1840-х годах люди научились делать бумагу из дерева. Сегодня так делают почти всю бумагу.

**Стекло из песка: легенда.** Около 2000 лет назад римский писатель **Плиний** рассказал такую историю. Моряки, которые везли куски соды, высадились на песчаный берег. Камней не было, и они поставили котлы на куски соды. Огонь был таким жарким, что песок и сода сплавились вместе, и утром моряки нашли что-то блестящее и прозрачное — стекло! Учёные думают, что на самом деле стекло впервые сделали ещё раньше, около 4500 лет назад. Но рецепт в истории верный: песок, сода и очень жаркий огонь.`,
    ),
    ask(2, {
      en: ["What did the wasps use to make paper for their nests?", ["Green leaves", "Chewed bits of old wood", "Sand"], "Wasps chew old wood into a paste and spread it in thin sheets, which gave Réaumur the idea of paper from wood."],
      hy: ["Ինչի՞ց էին կրետները թուղթ պատրաստում իրենց բների համար։", ["Կանաչ տերևներից", "Հին փայտի ծամած կտորներից", "Ավազից"], "Կրետները հին փայտը ծամելով զանգված են դարձնում և փռում բարակ թերթերով․ դա Ռեոմյուրին հուշեց փայտից թուղթ պատրաստելու միտքը։"],
      ru: ["Из чего осы делали бумагу для гнёзд?", ["Из зелёных листьев", "Из пережёванных кусочков старого дерева", "Из песка"], "Осы разжёвывают старое дерево в кашицу и размазывают тонкими листами — это подсказало Реомюру мысль делать бумагу из дерева."],
    }),
  ],
  "safe-workplace": [
    "diagram desk",
    closer(
      `**Scissors are very old.** The first scissors were made in ancient Egypt more than 3,000 years ago. They were a single strip of metal bent like the letter U, with a blade at each end: you squeezed the blades together, and the metal sprang them open again. Shepherds still cut sheep's wool with shears like that. About 2,000 years ago the Romans made scissors like ours: two blades joined by a small pin in the middle.

**Scissors for left-handers.** In ordinary scissors the top blade is on the right. When a left-handed person cuts with them, that blade hides the pencil line, and the natural squeeze of the left hand pushes the blades apart, so the paper gets chewed instead of cut. In left-handed scissors the blades are the other way round. About one person in ten is left-handed, so in a class of 30 there are usually two or three.`,
      `**Մկրատը շատ հին է։** Առաջին մկրատները պատրաստվել են Հին Եգիպտոսում՝ ավելի քան 3000 տարի առաջ։ Դրանք մետաղի մեկ շերտ էին՝ ծռված U տառի պես, ամեն ծայրին՝ մեկ սայր․ սեղմում էիր սայրերը, և մետաղն ինքն էր դրանք նորից բացում։ Հովիվները մինչև հիմա ոչխարի բուրդը խուզում են այդպիսի մկրատներով։ Մոտ 2000 տարի առաջ հռոմեացիները պատրաստեցին մերի նման մկրատներ՝ մեջտեղում փոքրիկ գամով միացված երկու սայրով։

**Մկրատ ձախլիկների համար։** Սովորական մկրատի վերին սայրն աջ կողմում է։ Երբ ձախլիկը կտրում է դրանով, այդ սայրը ծածկում է մատիտի գիծը, իսկ ձախ ձեռքի բնական սեղմումը սայրերը հեռացնում է իրարից, և թուղթը ոչ թե կտրվում է, այլ ճմռթվում։ Ձախլիկների մկրատի սայրերը հակառակ դասավորված են։ Մոտ տասը մարդուց մեկը ձախլիկ է, ուստի 30 աշակերտի դասարանում սովորաբար լինում է երկու-երեք ձախլիկ։`,
      `**Ножницы очень древние.** Первые ножницы сделали в Древнем Египте больше 3000 лет назад. Это была одна полоска металла, согнутая буквой U, с лезвием на каждом конце: сжимаешь лезвия, и металл сам их снова раскрывает. Пастухи до сих пор стригут овечью шерсть такими ножницами. Около 2000 лет назад римляне сделали ножницы, как у нас: два лезвия, соединённые маленьким винтиком посередине.

**Ножницы для левшей.** У обычных ножниц верхнее лезвие справа. Когда левша режет ими, это лезвие закрывает линию карандаша, а естественное сжатие левой руки раздвигает лезвия, и бумага не режется, а мнётся. У ножниц для левшей лезвия расположены наоборот. Примерно каждый десятый человек — левша, поэтому в классе из 30 учеников обычно двое-трое левшей.`,
    ),
    ask(3, {
      en: ["Why is it hard for a left-hander to cut with ordinary scissors?", ["The scissors are too heavy", "The paper is too thin", "The blade hides the line and the blades are pushed apart"], "In ordinary scissors the top blade is on the right, so for a left hand it hides the line and the squeeze opens the blades."],
      hy: ["Ինչո՞ւ է ձախլիկի համար դժվար կտրել սովորական մկրատով։", ["Մկրատը շատ ծանր է", "Թուղթը շատ բարակ է", "Սայրը ծածկում է գիծը, և սայրերը հեռանում են իրարից"], "Սովորական մկրատի վերին սայրն աջ կողմում է, ուստի ձախ ձեռքի դեպքում այն ծածկում է գիծը, իսկ սեղմումը բացում է սայրերը։"],
      ru: ["Почему левше трудно резать обычными ножницами?", ["Ножницы слишком тяжёлые", "Бумага слишком тонкая", "Лезвие закрывает линию, а лезвия раздвигаются"], "У обычных ножниц верхнее лезвие справа, поэтому для левой руки оно закрывает линию, а сжатие раздвигает лезвия."],
    }),
  ],
  "paper-folding": [
    "mechanism cup",
    closer(
      `**No more than seven times?** People used to say that no sheet of paper can be folded in half more than seven times. Each fold doubles the thickness: after seven folds there are already **128** layers, as thick as a notebook. In 2002 an American schoolgirl, **Britney Gallivan**, worked out how long the paper would have to be, took a roll of toilet paper about 1.2 kilometres long and folded it in half **12 times**.

**Origami in space.** The Japanese scientist **Koryo Miura** invented a clever fold: a whole sheet opens with one pull on its corners and closes again just as easily. In 1995 the solar panels of a Japanese satellite were folded like this so that they fitted inside the rocket, and they opened out in space. Some city maps are folded the same way, so that they never get muddled.`,
      `**Յոթ անգամից ավելի չի՞ ծալվում։** Ասում էին, որ ոչ մի թերթ հնարավոր չէ կիսով չափ ծալել յոթ անգամից ավելի։ Ամեն ծալքից հաստությունը կրկնապատկվում է․ յոթ ծալքից հետո արդեն **128** շերտ է՝ տետրի հաստությամբ։ 2002 թվականին ամերիկացի մի դպրոցականուհի՝ **Բրիթնի Գալիվանը**, հաշվեց, թե որքան երկար պետք է լինի թուղթը, վերցրեց մոտ 1,2 կիլոմետր երկարությամբ զուգարանի թղթի գլան և այն կիսով չափ ծալեց **12 անգամ**։

**Օրիգամի տիեզերքում։** Ճապոնացի գիտնական **Կորյո Միուրան** հնարել է մի խելացի ծալք․ ամբողջ թերթը բացվում է անկյուններից մեկ քաշելով և նույնքան հեշտ էլ փակվում։ 1995 թվականին ճապոնական արբանյակի արևային վահանակներն այդպես էին ծալված, որպեսզի տեղավորվեն հրթիռի մեջ, և դրանք բացվեցին տիեզերքում։ Քաղաքի որոշ քարտեզներ նույն կերպ են ծալվում, որպեսզի երբեք չխառնվեն։`,
      `**Не больше семи раз?** Говорили, что ни один лист бумаги нельзя сложить пополам больше семи раз. Каждый сгиб удваивает толщину: после семи сгибов уже **128** слоёв, толщиной с тетрадь. В 2002 году американская школьница **Бритни Галливан** рассчитала, какой длины должна быть бумага, взяла рулон туалетной бумаги длиной около 1,2 километра и сложила его пополам **12 раз**.

**Оригами в космосе.** Японский учёный **Корё Миура** придумал хитрый сгиб: весь лист раскрывается одним движением за уголки и так же легко складывается. В 1995 году солнечные панели японского спутника сложили так, чтобы они поместились в ракету, и они раскрылись в космосе. Некоторые карты городов складывают так же, чтобы они никогда не путались.`,
    ),
    ask(3, {
      en: ["How many layers are there after folding a sheet in half seven times?", ["14", "49", "128"], "Each fold doubles the layers: 2, 4, 8, 16, 32, 64, 128."],
      hy: ["Քանի՞ շերտ է ստացվում թերթը յոթ անգամ կիսով չափ ծալելուց հետո։", ["14", "49", "128"], "Ամեն ծալքից շերտերը կրկնապատկվում են՝ 2, 4, 8, 16, 32, 64, 128։"],
      ru: ["Сколько слоёв получится, если сложить лист пополам семь раз?", ["14", "49", "128"], "Каждый сгиб удваивает слои: 2, 4, 8, 16, 32, 64, 128."],
    }),
  ],
  "cutting-and-gluing": [
    "diagram collage",
    closer(
      `**The oldest glue.** Long before there were shops, people made glue from trees. About 200,000 years ago Neanderthals heated birch bark and got a black, sticky tar, which they used to fix stone points to wooden handles. **Ötzi**, a man who lived in the Alps about 5,300 years ago and was found frozen in the ice, carried arrows whose stone tips were fixed on with birch tar.

**A glue that did not stick properly.** In 1968 the scientist **Spencer Silver** tried to make a very strong glue and got a weak one: things stuck with it but peeled off easily. For years nobody knew what to do with it. Then his colleague **Art Fry**, who sang in a choir, got annoyed that his paper bookmarks kept falling out of his song book. He put the weak glue on them, and sticky notes were born.`,
      `**Ամենահին սոսինձը։** Խանութներից շատ առաջ մարդիկ սոսինձ էին պատրաստում ծառերից։ Մոտ 200 000 տարի առաջ նեանդերթալցիները տաքացնում էին կեչու կեղևը և ստանում սև, կպչուն խեժ, որով քարե ծայրերն ամրացնում էին փայտե բռնակներին։ **Էտցին**՝ մի մարդ, որ ապրել է Ալպերում մոտ 5300 տարի առաջ և գտնվել է սառույցի մեջ սառած, իր հետ նետեր ուներ, որոնց քարե ծայրերն ամրացված էին կեչու խեժով։

**Սոսինձ, որը լավ չէր կպչում։** 1968 թվականին գիտնական **Սփենսեր Սիլվերը** փորձում էր շատ ամուր սոսինձ ստանալ, բայց ստացավ թույլ սոսինձ․ իրերը կպչում էին, բայց հեշտությամբ պոկվում։ Տարիներ շարունակ ոչ ոք չգիտեր՝ ինչ անել դրա հետ։ Հետո նրա գործընկեր **Արթ Ֆրայը**, որ երգում էր երգչախմբում, նեղսրտեց, որ իր թղթե էջանիշներն անընդհատ ընկնում են երգարանից։ Նա դրանց վրա քսեց թույլ սոսինձը, և այդպես ծնվեցին կպչուն թղթիկները։`,
      `**Самый древний клей.** Задолго до магазинов люди делали клей из деревьев. Около 200 000 лет назад неандертальцы нагревали берёзовую кору и получали чёрный липкий дёготь, которым прикрепляли каменные наконечники к деревянным рукояткам. **Эци** — человек, который жил в Альпах около 5300 лет назад и был найден замёрзшим во льду, — нёс стрелы, каменные наконечники которых были закреплены берёзовым дёгтем.

**Клей, который плохо клеил.** В 1968 году учёный **Спенсер Сильвер** пытался сделать очень крепкий клей, а получил слабый: вещи приклеивались, но легко отклеивались. Много лет никто не знал, что с ним делать. Потом его коллега **Арт Фрай**, который пел в хоре, рассердился, что бумажные закладки всё время выпадают из его книги с песнями. Он намазал на них слабый клей — так родились бумажки-липучки для заметок.`,
    ),
    ask(1, {
      en: ["What were the stone tips of Ötzi's arrows fixed on with?", ["Birch tar", "Honey", "Wet clay"], "Ancient people heated birch bark to get a sticky black tar, the oldest glue we know."],
      hy: ["Ինչո՞վ էին ամրացված Էտցիի նետերի քարե ծայրերը։", ["Կեչու խեժով", "Մեղրով", "Թաց կավով"], "Հին մարդիկ տաքացնում էին կեչու կեղևը և ստանում կպչուն սև խեժ՝ մեզ հայտնի ամենահին սոսինձը։"],
      ru: ["Чем были закреплены каменные наконечники стрел Эци?", ["Берёзовым дёгтем", "Мёдом", "Мокрой глиной"], "Древние люди нагревали берёзовую кору и получали липкий чёрный дёготь — самый древний известный нам клей."],
    }),
  ],
  "plasticine-modelling": [
    "mechanism hedgehog",
    closer(
      `**An art teacher's invention.** In 1897 the English art teacher **William Harbutt** wanted a modelling material for his students that would not dry out and crack like clay. In his house in the town of Bath he mixed and tested until he made **plasticine**: soft, reusable and never dry. His children helped him make it, and in 1900 he opened a plasticine factory. Today many cartoons are made with plasticine figures that are moved a tiny bit for every picture.

**From wallpaper cleaner to toy.** In the 1950s an American company made a soft dough for wiping soot off wallpaper. When homes got cleaner heating, nobody needed it any more. A nursery teacher, **Kay Zufall**, saw children modelling with the dough and suggested selling it as a toy. The company took out the cleaning chemical, added colours, and children's modelling dough went on sale in 1956.`,
      `**Նկարչության ուսուցչի գյուտը։** 1897 թվականին անգլիացի նկարչության ուսուցիչ **Ուիլյամ Հարբաթը** իր աշակերտների համար ուզում էր ձևավորման մի նյութ, որը կավի պես չչորանա և չճաքի։ Բաթ քաղաքում գտնվող իր տանը նա խառնում ու փորձարկում էր, մինչև ստեղծեց **պլաստիլինը**՝ փափուկ, բազմակի օգտագործվող և երբեք չչորացող։ Նրան օգնում էին երեխաները, իսկ 1900 թվականին նա պլաստիլինի գործարան բացեց։ Այսօր շատ մուլտֆիլմեր նկարահանում են պլաստիլինե կերպարներով, որոնց ամեն կադրի համար մի փոքր տեղաշարժում են։

**Պաստառ մաքրողից՝ խաղալիք։** 1950-ական թվականներին ամերիկյան մի ընկերություն փափուկ խմոր էր արտադրում պաստառներից մուրը մաքրելու համար։ Երբ տներն ավելի մաքուր ջեռուցում ստացան, այն այլևս ոչ մեկին պետք չէր։ Մանկապարտեզի դաստիարակ **Քեյ Զուֆալը** տեսավ, որ երեխաներն այդ խմորից արձանիկներ են սարքում, և առաջարկեց այն վաճառել որպես խաղալիք։ Ընկերությունը հանեց մաքրող նյութը, ավելացրեց գույներ, և 1956 թվականին մանկական ձևավորման խմորը վաճառքի հանվեց։`,
      `**Изобретение учителя рисования.** В 1897 году английский учитель рисования **Уильям Харбатт** хотел найти для учеников материал для лепки, который не высыхает и не трескается, как глина. В своём доме в городе Бат он смешивал и пробовал, пока не создал **пластилин** — мягкий, многоразовый и никогда не высыхающий. Ему помогали его дети, а в 1900 году он открыл пластилиновую фабрику. Сегодня многие мультфильмы снимают с пластилиновыми фигурками, которые для каждого кадра чуть-чуть передвигают.

**Из чистящей пасты — в игрушку.** В 1950-х годах американская компания выпускала мягкую массу, чтобы счищать копоть с обоев. Когда в домах появилось более чистое отопление, она стала никому не нужна. Воспитательница детского сада **Кей Зуфалл** увидела, как дети лепят из этой массы, и предложила продавать её как игрушку. Компания убрала чистящее вещество, добавила цвета, и в 1956 году детская масса для лепки поступила в продажу.`,
    ),
    ask(2, {
      en: ["Why did William Harbutt invent plasticine?", ["To clean wallpaper", "So his students had a material that does not dry out", "To make sweets"], "Clay dries and cracks; Harbutt wanted something soft his art students could use again and again."],
      hy: ["Ինչո՞ւ Ուիլյամ Հարբաթը հնարեց պլաստիլինը։", ["Պաստառները մաքրելու համար", "Որպեսզի աշակերտներն ունենան չչորացող նյութ", "Քաղցրավենիք պատրաստելու համար"], "Կավը չորանում է և ճաքում, իսկ Հարբաթը ուզում էր փափուկ նյութ, որ աշակերտները կարողանան նորից ու նորից օգտագործել։"],
      ru: ["Зачем Уильям Харбатт изобрёл пластилин?", ["Чтобы чистить обои", "Чтобы у учеников был материал, который не высыхает", "Чтобы делать конфеты"], "Глина высыхает и трескается, а Харбатт хотел мягкий материал, которым ученики могли бы пользоваться снова и снова."],
    }),
  ],
  "natural-materials": [
    "diagram nature",
    closer(
      `**The burr that became a fastener.** In 1941 the Swiss engineer **George de Mestral** came home from a walk with his dog, and both of them were covered in prickly burdock burrs. He looked at a burr under a microscope and saw hundreds of tiny hooks that caught on the loops of fur and cloth. He copied the idea: one strip with tiny hooks, the other with tiny loops. That is how the hook-and-loop fastener on shoes and bags was invented.

**A library of dried plants.** The leaves you press in a book make a little **herbarium**. In the 1540s the Italian doctor **Luca Ghini** began pressing and drying plants on sheets of paper, so that his students could study them even in winter. Today the herbarium of Kew Gardens in London keeps about **7 million** dried plants, and scientists still learn from leaves picked hundreds of years ago.`,
      `**Կառչող փուշը, որ ամրակ դարձավ։** 1941 թվականին շվեյցարացի ինժեներ **Ժորժ դը Մեստրալը** շան հետ զբոսանքից վերադարձավ տուն, և երկուսն էլ ծածկված էին կռատուկի փշոտ գնդիկներով։ Նա մանրադիտակով նայեց մի գնդիկի և տեսավ հարյուրավոր մանր կեռիկներ, որոնք կառչում էին բրդի ու կտորի օղակներից։ Նա կրկնօրինակեց այդ միտքը․ մի շերտի վրա՝ մանր կեռիկներ, մյուսի վրա՝ մանր օղակներ։ Այդպես է հնարվել կոշիկների ու պայուսակների կպչուն ամրակը։

**Չորացրած բույսերի գրադարան։** Գրքում սեղմած տերևները փոքրիկ **հերբարիում** են կազմում։ 1540-ական թվականներին իտալացի բժիշկ **Լուկա Գինին** սկսեց բույսերը սեղմել և չորացնել թղթի թերթերի վրա, որպեսզի ուսանողները կարողանան դրանք ուսումնասիրել նույնիսկ ձմռանը։ Այսօր Լոնդոնի Քյու այգու հերբարիումում պահվում է մոտ **7 միլիոն** չորացրած բույս, և գիտնականները մինչև հիմա նոր բաներ են իմանում հարյուրավոր տարիներ առաջ քաղված տերևներից։`,
      `**Колючка, которая стала застёжкой.** В 1941 году швейцарский инженер **Жорж де Местраль** вернулся с прогулки с собакой, и оба были облеплены колючими шариками репейника. Он посмотрел на колючку под микроскопом и увидел сотни крошечных крючков, которые цеплялись за петельки шерсти и ткани. Он повторил эту идею: на одной ленте крошечные крючки, на другой — крошечные петельки. Так изобрели застёжку-липучку для обуви и сумок.

**Библиотека засушенных растений.** Листья, которые ты сушишь в книге, — это маленький **гербарий**. В 1540-х годах итальянский врач **Лука Гини** начал прессовать и сушить растения на листах бумаги, чтобы студенты могли изучать их даже зимой. Сегодня в гербарии лондонского сада Кью хранится около **7 миллионов** засушенных растений, и учёные до сих пор узнают новое из листьев, сорванных сотни лет назад.`,
    ),
    ask(3, {
      en: ["What gave George de Mestral the idea for the hook-and-loop fastener?", ["A spider's web", "A bird's nest", "Burrs stuck to his dog"], "Under a microscope the burrs had hundreds of tiny hooks that caught on loops of fur and cloth."],
      hy: ["Ի՞նչը Ժորժ դը Մեստրալին հուշեց կպչուն ամրակի միտքը։", ["Սարդոստայնը", "Թռչնի բույնը", "Շանը կպած փշոտ գնդիկները"], "Մանրադիտակի տակ գնդիկներն ունեին հարյուրավոր մանր կեռիկներ, որոնք կառչում էին բրդի ու կտորի օղակներից։"],
      ru: ["Что подсказало Жоржу де Местралю идею липучки?", ["Паутина", "Птичье гнездо", "Колючки, прилипшие к его собаке"], "Под микроскопом у колючек были сотни крошечных крючков, цеплявшихся за петельки шерсти и ткани."],
    }),
  ],
  "self-care-skills": [
    "mechanism tshirt",
    closer(
      `**The tip of the lace.** The little plastic tube on the end of a shoelace has a name: in English it is called an **aglet**. It stops the lace from fraying into loose threads and makes it easy to push through the holes. Hundreds of years ago, before buttons were common, clothes were tied with laces, and rich people had aglets made of silver and even gold.

**Laundry in space.** On the International Space Station there is no washing machine, because every drop of water is precious. Astronauts wear their clothes for much longer than on Earth, and old clothes are packed into a cargo ship that burns up when it falls back through the air. Keeping things tidy matters even more there: anything that is not packed in a bag or strapped down simply floats away.`,
      `**Կոշկաքուղի ծայրը։** Կոշկաքուղի ծայրի փոքրիկ պլաստմասե խողովակն անուն ունի․ անգլերեն այն կոչվում է **aglet**։ Այն թույլ չի տալիս, որ քուղը քանդվի առանձին թելերի, և հեշտացնում է այն անցքերով անցկացնելը։ Հարյուրավոր տարիներ առաջ, երբ կոճակներն այդքան տարածված չէին, հագուստը կապում էին քուղերով, իսկ հարուստ մարդկանց քուղերի ծայրերը պատրաստում էին արծաթից և նույնիսկ ոսկուց։

**Լվացք տիեզերքում։** Միջազգային տիեզերական կայանում լվացքի մեքենա չկա, որովհետև ջրի ամեն կաթիլը թանկ է։ Տիեզերագնացներն իրենց հագուստը կրում են շատ ավելի երկար, քան Երկրի վրա, իսկ հին հագուստը դնում են բեռնատար նավի մեջ, որն այրվում է օդի միջով ետ ընկնելիս։ Կարգուկանոնն այնտեղ ավելի կարևոր է․ այն ամենը, ինչ դրված չէ պայուսակի մեջ կամ ամրացված չէ, պարզապես լողում է օդում։`,
      `**Кончик шнурка.** У маленькой пластмассовой трубочки на конце шнурка есть название: по-английски она называется **aglet** (эглет). Она не даёт шнурку распуститься на отдельные нитки и помогает легко продевать его в дырочки. Сотни лет назад, когда пуговицы были ещё редкостью, одежду завязывали шнурками, а у богатых людей кончики шнурков делали из серебра и даже из золота.

**Стирка в космосе.** На Международной космической станции нет стиральной машины, потому что каждая капля воды на счету. Космонавты носят одежду гораздо дольше, чем на Земле, а старую одежду складывают в грузовой корабль, который сгорает, падая обратно сквозь воздух. Порядок там ещё важнее: всё, что не убрано в сумку и не пристёгнуто, просто улетает.`,
    ),
    ask(1, {
      en: ["What do astronauts on the space station do with old clothes?", ["Pack them into a cargo ship that burns up", "Wash them in a machine", "Send them home by post"], "There is no washing machine on the station, because water is too precious."],
      hy: ["Ի՞նչ են անում տիեզերական կայանի տիեզերագնացները հին հագուստի հետ։", ["Դնում են այրվող բեռնատար նավի մեջ", "Լվանում են մեքենայով", "Փոստով ուղարկում են տուն"], "Կայանում լվացքի մեքենա չկա, որովհետև ջուրը շատ թանկ է։"],
      ru: ["Что делают космонавты на станции со старой одеждой?", ["Складывают в грузовой корабль, который сгорает", "Стирают в машине", "Отправляют домой по почте"], "Стиральной машины на станции нет, потому что вода слишком драгоценна."],
    }),
  ],
  "greeting-card": [
    "mechanism card",
    closer(
      `**The first Christmas card.** In 1843 a busy Londoner, **Henry Cole**, had so many friends that he had no time to write each of them a letter. He asked his friend, the artist **John Callcott Horsley**, to draw a picture with a short greeting, and printed **1,000** cards. Soon everyone was sending cards for the holidays.

**Two shoeboxes of postcards.** In 1910 an eighteen-year-old, **Joyce Hall**, arrived in the American city of Kansas City with two shoeboxes full of picture postcards to sell. Business went well, and with his brothers he began to make cards of his own. Their small family firm became one of the biggest greeting-card makers in the world. Still, the cards people keep longest are the home-made ones.`,
      `**Առաջին տոնական բացիկը։** 1843 թվականին լոնդոնցի զբաղված մի մարդ՝ **Հենրի Քոուլը**, այնքան շատ ընկերներ ուներ, որ ժամանակ չուներ ամեն մեկին նամակ գրելու։ Նա խնդրեց իր ընկերոջը՝ նկարիչ **Ջոն Քոլքոթ Հորսլիին**, նկարել մի պատկեր կարճ շնորհավորանքով, և տպեց **1000** բացիկ։ Շուտով բոլորը տոներին բացիկներ էին ուղարկում։

**Երկու կոշիկի տուփ բացիկ։** 1910 թվականին տասնութամյա **Ջոյս Հոլը** ամերիկյան Կանզաս Սիթի քաղաք եկավ՝ վաճառելու համար երկու կոշիկի տուփով պատկերազարդ բացիկներ։ Գործը լավ ընթացավ, և եղբայրների հետ նա սկսեց իր սեփական բացիկները պատրաստել։ Նրանց փոքրիկ ընտանեկան ձեռնարկությունը դարձավ աշխարհում ամենամեծ բացիկ արտադրողներից մեկը։ Եվ այնուամենայնիվ մարդիկ ամենաերկարը պահում են ձեռքով պատրաստված բացիկները։`,
      `**Первая праздничная открытка.** В 1843 году у занятого лондонца **Генри Коула** было столько друзей, что ему не хватало времени написать каждому письмо. Он попросил своего друга, художника **Джона Колкотта Хорсли**, нарисовать картинку с коротким поздравлением и напечатал **1000** открыток. Вскоре все уже посылали открытки к праздникам.

**Две обувные коробки открыток.** В 1910 году восемнадцатилетний **Джойс Холл** приехал в американский город Канзас-Сити с двумя обувными коробками открыток, чтобы их продавать. Дело пошло хорошо, и вместе с братьями он начал делать собственные открытки. Их маленькая семейная фирма стала одним из крупнейших производителей открыток в мире. И всё же дольше всего люди хранят открытки, сделанные своими руками.`,
    ),
    ask(2, {
      en: ["Why did Henry Cole make the first Christmas card?", ["It was a school task", "He had no time to write a letter to every friend", "He wanted to sell paper"], "He had so many friends that he printed 1,000 cards with a picture and a short greeting instead."],
      hy: ["Ինչո՞ւ Հենրի Քոուլը պատրաստեց առաջին տոնական բացիկը։", ["Դա դպրոցական առաջադրանք էր", "Ժամանակ չուներ ամեն ընկերոջը նամակ գրելու", "Ուզում էր թուղթ վաճառել"], "Նա այնքան շատ ընկերներ ուներ, որ դրա փոխարեն տպեց 1000 բացիկ՝ նկարով և կարճ շնորհավորանքով։"],
      ru: ["Зачем Генри Коул сделал первую праздничную открытку?", ["Это было школьное задание", "Ему не хватало времени написать письмо каждому другу", "Он хотел продавать бумагу"], "У него было столько друзей, что вместо писем он напечатал 1000 открыток с картинкой и коротким поздравлением."],
    }),
  ],
};
