import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade3: VisualMap[number] = {
  "mate-with-two-rooks": [
    "chess set=ladder",
    closer(
      `**The lawnmower.** In English this mate has a funny nickname: the **lawnmower**. The two rooks push the king rank by rank towards the edge, just as a lawnmower cuts a lawn strip by strip. Remember the rhythm: one rook guards a rank, the other gives check on the next one, and then they swap jobs.

**45 games without looking.** In 1947 in São Paulo the grandmaster **Miguel Najdorf** played **45 games at once blindfold**: he never saw any of the boards and kept all the positions in his head. The games lasted almost 24 hours. Najdorf won 39 of them, drew 4 and lost only 2.`,
      `**Խոտհնձիչը։** Անգլերենում այս մատն ունի զվարճալի մականուն՝ **խոտհնձիչ**։ Երկու նավակն արքային հորիզոնական առ հորիզոնական քշում են դեպի եզր, ինչպես խոտհնձիչն է մարգագետինը հնձում շերտ առ շերտ։ Հիշի՛ր ռիթմը․ մի նավակը պահում է հորիզոնականը, մյուսը շախ է տալիս հաջորդով, իսկ հետո նրանք փոխում են դերերը։

**45 պարտիա՝ առանց նայելու։** 1947 թվականին Սան Պաուլոյում գրոսմայստեր **Միգել Նայդորֆը** միաժամանակ խաղաց **45 պարտիա կույր**․ նա չէր տեսնում տախտակներից ոչ մեկը և բոլոր դիրքերը պահում էր մտքում։ Պարտիաները տևեցին գրեթե 24 ժամ։ Նայդորֆը հաղթեց 39-ում, 4-ը ավարտեց ոչ-ոքի և պարտվեց ընդամենը 2-ում։`,
      `**Газонокосилка.** По-английски у этого мата смешное прозвище — **газонокосилка**. Две ладьи теснят короля горизонталь за горизонталью к краю, как газонокосилка стрижёт лужайку полосу за полосой. Запомни ритм: одна ладья держит горизонталь, другая шахует по следующей, а потом они меняются ролями.

**45 партий не глядя.** В 1947 году в Сан-Паулу гроссмейстер **Мигель Найдорф** сыграл **45 партий одновременно вслепую**: он не видел ни одной доски и держал все позиции в голове. Партии длились почти сутки. Найдорф выиграл 39, сделал 4 ничьи и проиграл только 2.`,
    ),
    ask(3, {
      en: ["In the ladder mate, what does the second rook do while one rook gives check?", ["It attacks the king from the side", "It stays at home", "It guards the rank the king just left"], "One rook keeps the king from coming back, the other pushes it further."],
      hy: ["Սանդուղքի մատում ի՞նչ է անում երկրորդ նավակը, երբ մյուսը շախ է տալիս։", ["Կողքից հարձակվում է արքայի վրա", "Մնում է տեղում", "Պահում է այն հորիզոնականը, որից արքան նոր հեռացավ"], "Մի նավակը թույլ չի տալիս արքային հետ գալ, մյուսը քշում է նրան ավելի հեռու։"],
      ru: ["Что делает вторая ладья в мате «лесенкой», пока первая шахует?", ["Нападает на короля сбоку", "Стоит дома", "Держит горизонталь, с которой король только что ушёл"], "Одна ладья не пускает короля назад, другая гонит его дальше."],
    }),
  ],
  "mate-with-queen": [
    "chess set=queenmate",
    closer(
      `**The game of the century.** In 1956 in New York a 13-year-old boy, **Bobby Fischer**, played against the strong master Donald Byrne. On move 17 Fischer left **his queen** to be captured and instead attacked with his other pieces. Byrne took the queen, but Fischer's knights, bishops and rook chased the white king across the board and gave mate. People still call it "the game of the century".

**The first women's champion.** **Vera Menchik** learned chess in Moscow as a child and later lived in England. In 1927 she became the **first women's world champion** and kept the title until 1944. She also played in men's tournaments and beat many famous masters. They joked that any man who lost to her joined the "Menchik Club".`,
      `**Դարի պարտիան։** 1956 թվականին Նյու Յորքում 13-ամյա մի տղա՝ **Բոբի Ֆիշերը**, խաղաց ուժեղ վարպետ Դոնալդ Բիռնի դեմ։ 17-րդ քայլին Ֆիշերը **թագուհուն** թողեց հարվածի տակ և փոխարենը հարձակվեց մյուս խաղաքարերով։ Բիռնը վերցրեց թագուհուն, բայց Ֆիշերի ձիերը, փղերը և նավակը սպիտակ արքային հալածեցին ամբողջ տախտակով և մատ տվեցին։ Մինչ օրս այն անվանում են «դարի պարտիա»։

**Կանանց առաջին չեմպիոնը։** **Վերա Մենչիկը** շախմատ սովորեց մանուկ հասակում Մոսկվայում, իսկ հետո ապրեց Անգլիայում։ 1927 թվականին նա դարձավ **կանանց աշխարհի առաջին չեմպիոնը** և տիտղոսը պահեց մինչև 1944 թվականը։ Նա խաղում էր նաև տղամարդկանց մրցաշարերում և հաղթում էր շատ հայտնի վարպետների։ Կատակով ասում էին, որ նրան պարտված յուրաքանչյուր տղամարդ դառնում է «Մենչիկի ակումբի» անդամ։`,
      `**Партия века.** В 1956 году в Нью-Йорке 13-летний мальчик **Бобби Фишер** играл с сильным мастером Дональдом Бирном. На 17-м ходу Фишер оставил под боем **своего ферзя** и вместо этого атаковал другими фигурами. Бирн взял ферзя, но кони, слоны и ладья Фишера погнали белого короля через всю доску и поставили мат. Её до сих пор называют «партией века».

**Первая чемпионка.** **Вера Менчик** научилась шахматам в детстве в Москве, а потом жила в Англии. В 1927 году она стала **первой чемпионкой мира** среди женщин и сохраняла титул до 1944 года. Она играла и в мужских турнирах и побеждала многих знаменитых мастеров. Шутили, что каждый проигравший ей мужчина вступает в «клуб Менчик».`,
    ),
    ask(1, {
      en: ["The black king is in the corner and has no checks. Why must you be careful with the queen?", ["You might give stalemate, which is only a draw", "The queen could be lost to the king", "The queen may not stand next to a corner"], "Always leave the lonely king at least one free square until the mating move."],
      hy: ["Սև արքան անկյունում է, և նրան շախ չկա։ Ինչո՞ւ պետք է զգույշ լինել թագուհու հետ։", ["Կարող ես պատ տալ, որն ընդամենը ոչ-ոքի է", "Արքան կարող է վերցնել թագուհուն", "Թագուհին չի կարող կանգնել անկյան կողքին"], "Մինչև մատի քայլը միայնակ արքային միշտ թող առնվազն մեկ ազատ դաշտ։"],
      ru: ["Чёрный король в углу, шаха нет. Почему с ферзём нужно быть осторожным?", ["Можно поставить пат, а это лишь ничья", "Король может забрать ферзя", "Ферзь не может стоять рядом с углом"], "Пока не готов мат, всегда оставляй одинокому королю хотя бы одно свободное поле."],
    }),
  ],
  "mate-with-rook": [
    "chess set=rookmate",
    closer(
      `**Computers know every answer.** Scientists have made computers work out **every possible position** with up to seven pieces on the board. These huge tables, called **tablebases**, show the shortest way to win. With a king and a rook against a king, mate never needs more than **16 moves**. Some positions with seven pieces need more than 500 moves!

**Start with the end.** The great Cuban champion **José Raúl Capablanca** wrote in his book *Chess Fundamentals* (1921) that beginners should first learn **endgames** like this one. With only a few pieces it is easier to understand what each piece can do. Openings can wait.`,
      `**Համակարգիչները գիտեն բոլոր պատասխանները։** Գիտնականները համակարգիչներին ստիպել են հաշվարկել տախտակին մինչև յոթ խաղաքարով **բոլոր հնարավոր դիրքերը**։ Այդ հսկայական աղյուսակները կոչվում են **տեղեկատու բազաներ** և ցույց են տալիս հաղթանակի ամենակարճ ճանապարհը։ Արքայով և նավակով արքայի դեմ մատի համար երբեք **16 քայլից** ավելի պետք չէ։ Յոթ խաղաքարով որոշ դիրքերում պետք է ավելի քան 500 քայլ։

**Սկսի՛ր վերջից։** Կուբացի մեծ չեմպիոն **Խոսե Ռաուլ Կապաբլանկան** իր «Շախմատի հիմունքներ» (1921) գրքում գրել է, որ սկսնակները նախ պետք է սովորեն այսպիսի **վերջնախաղեր**։ Քիչ խաղաքարերով ավելի հեշտ է հասկանալ, թե ինչ կարող է անել յուրաքանչյուրը։ Բացվածքները կարող են սպասել։`,
      `**Компьютеры знают все ответы.** Учёные заставили компьютеры просчитать **все возможные позиции**, где на доске до семи фигур. Эти огромные таблицы называются **эндшпильными базами** и показывают кратчайший путь к победе. Королём и ладьёй против короля мат никогда не требует больше **16 ходов**. А в некоторых позициях с семью фигурами нужно больше 500 ходов!

**Начни с конца.** Великий кубинский чемпион **Хосе Рауль Капабланка** писал в книге «Основы шахматной игры» (1921), что начинающим нужно сначала изучать вот такие **эндшпили**. Когда фигур мало, легче понять, что умеет каждая. Дебюты подождут.`,
    ),
    ask(2, {
      en: ["In the mate with a rook, where must the white king stand at the moment of mate?", ["In a corner", "Opposite the black king, one square in between", "Next to the rook"], "The rook gives check along the edge, and the king opposite covers the escape squares."],
      hy: ["Նավակով մատի պահին որտե՞ղ պետք է կանգնած լինի սպիտակ արքան։", ["Անկյունում", "Սև արքայի դիմաց՝ մեկ դաշտ միջև", "Նավակի կողքին"], "Նավակը շախ է տալիս եզրով, իսկ դիմացի արքան փակում է փախուստի դաշտերը։"],
      ru: ["Где должен стоять белый король в момент мата ладьёй?", ["В углу", "Напротив чёрного короля через одно поле", "Рядом с ладьёй"], "Ладья шахует по краю, а король напротив закрывает поля отступления."],
    }),
  ],
  "mating-patterns": [
    "chess set=patterns",
    closer(
      `**An old trick with a new name.** The smothered mate is often called **"Philidor's legacy"**, after an 18th-century French player. But it is much older: it already appears in a book printed in Spain in 1497 by **Luis Ramírez de Lucena**, one of the first chess books ever printed. Good tricks never go out of date.

**A mate from a novel.** Many mating patterns carry names. One of them, **Anastasia's mate**, in which a knight and a rook trap the king on the edge of the board, comes from a German novel of 1803, *Anastasia and the Game of Chess*, where it was first shown. Learn the patterns, and you will spot them in your own games.`,
      `**Հին հնարք՝ նոր անունով։** «Խեղդված» մատը հաճախ կոչում են **«Ֆիլիդորի ժառանգություն»**՝ 18-րդ դարի ֆրանսիացի շախմատիստի անունով։ Բայց այն շատ ավելի հին է․ այն արդեն կա 1497 թվականին Իսպանիայում **Լուիս Ռամիրես դե Լուսենայի** տպագրած գրքում, որն առաջին տպագիր շախմատային գրքերից է։ Լավ հնարքներն երբեք չեն հնանում։

**Մատ՝ վեպից։** Շատ մատային պատկերներ անուններ ունեն։ Դրանցից մեկը՝ **Անաստասիայի մատը**, երբ ձին և նավակն արքային փակում են տախտակի եզրին, գալիս է 1803 թվականի գերմանական «Անաստասիան և շախմատային խաղը» վեպից, որտեղ այն առաջին անգամ ցույց է տրվել։ Սովորի՛ր պատկերները, և կնկատես դրանք քո պարտիաներում։`,
      `**Старый трюк с новым именем.** Спёртый мат часто называют **«наследством Филидора»**, по имени французского шахматиста XVIII века. Но он гораздо старше: он уже есть в книге, которую в 1497 году напечатал в Испании **Луис Рамирес де Лусена**, — одной из первых печатных шахматных книг. Хорошие приёмы не стареют.

**Мат из романа.** У многих матовых картин есть имена. Одна из них, **мат Анастасии**, когда конь и ладья зажимают короля на краю доски, пришла из немецкого романа 1803 года «Анастасия и шахматная игра», где её впервые показали. Выучи эти картины, и ты будешь замечать их в своих партиях.`,
    ),
    ask(2, {
      en: ["Which square is Black's weak spot in Scholar's mate?", ["e5", "f7", "d8"], "At the start f7 is protected only by the king, so the queen and bishop both aim at it."],
      hy: ["«Մանկական» մատում ո՞ր դաշտն է սևերի թույլ տեղը։", ["e5", "f7", "d8"], "Սկզբում f7-ը պաշտպանված է միայն արքայով, ուստի թագուհին և փիղն երկուսն էլ նշան են բռնում այն։"],
      ru: ["Какое поле — слабое место чёрных в детском мате?", ["e5", "f7", "d8"], "В начале партии f7 защищает только король, поэтому в него целятся и ферзь, и слон."],
    }),
  ],
  "opening-principles": [
    "chess set=italian",
    closer(
      `**The sun in your opponent's eyes.** In 1561 the Spanish priest **Ruy López** wrote one of the first great chess books. Besides good advice about the opening, he gave a cheeky tip: sit so that **the sun shines into your opponent's eyes**. One of the most popular openings, 1. e4 e5 2. Nf3 Nc6 3. Bb5, is still named after him.

**How an opening got its name.** Many openings are named after countries and cities. In 1834 the chess clubs of **London** and **Paris** played a match by post. Paris answered 1. e4 with the quiet move 1… e6 and won. Since then 1. e4 e6 has been called the **French Defence**.`,
      `**Արևը՝ մրցակցի աչքերին։** 1561 թվականին իսպանացի քահանա **Ռուի Լոպեսը** գրեց առաջին մեծ շախմատային գրքերից մեկը։ Բացվածքի մասին լավ խորհուրդներից բացի, նա տվեց նաև մի խորամանկ խորհուրդ․ նստի՛ր այնպես, որ **արևը փայլի մրցակցիդ աչքերին**։ Ամենատարածված բացվածքներից մեկը՝ 1. e4 e5 2. Nf3 Nc6 3. Bb5, մինչ օրս կրում է նրա անունը։

**Ինչպես բացվածքը ստացավ իր անունը։** Շատ բացվածքներ կոչվում են երկրների և քաղաքների անուններով։ 1834 թվականին **Լոնդոնի** և **Փարիզի** շախմատային ակումբները փոստով հանդիպում խաղացին։ Փարիզը 1. e4-ին պատասխանեց հանգիստ 1… e6 քայլով և հաղթեց։ Այդ ժամանակից ի վեր 1. e4 e6-ը կոչվում է **ֆրանսիական պաշտպանություն**։`,
      `**Солнце в глаза сопернику.** В 1561 году испанский священник **Руй Лопес** написал одну из первых больших шахматных книг. Кроме полезных советов о дебюте, он дал и хитрый: садись так, чтобы **солнце светило сопернику в глаза**. Один из самых популярных дебютов, 1. e4 e5 2. Nf3 Nc6 3. Bb5, до сих пор носит его имя.

**Как дебют получил имя.** Многие дебюты названы в честь стран и городов. В 1834 году шахматные клубы **Лондона** и **Парижа** сыграли матч по переписке. Париж ответил на 1. e4 спокойным ходом 1… e6 и победил. С тех пор 1. e4 e6 называют **французской защитой**.`,
    ),
    ask(3, {
      en: ["Which of these is a good opening rule?", ["Move the queen out first", "Move the same piece many times", "Bring out the knights and bishops, then castle"], "Control the centre, develop your minor pieces and get your king to safety."],
      hy: ["Սրանցից ո՞րն է բացվածքի լավ կանոն։", ["Առաջինը դուրս բեր թագուհուն", "Նույն խաղաքարով շատ անգամ քայլիր", "Դուրս բեր ձիերին և փղերին, հետո փոխատեղում արա"], "Հսկի՛ր կենտրոնը, դուրս բեր թեթև խաղաքարերը և ապահովի՛ր արքայիդ։"],
      ru: ["Какое из этих правил дебюта хорошее?", ["Первым выводи ферзя", "Много раз ходи одной фигурой", "Выведи коней и слонов, потом рокируйся"], "Борись за центр, развивай лёгкие фигуры и спрячь короля."],
    }),
  ],
  "double-attack-and-fork": [
    "chess set=fork",
    closer(
      `**A family fork.** When a knight attacks the king, the queen and a rook all at once, chess players call it a **family fork**, because it hits the whole royal family. The defender can save only one piece, and since the king must always be saved first, something big is lost.

**Why knights fork so well.** A knight attacks in a strange L shape, and no other piece moves like that. So when a knight attacks a queen or a rook, they **cannot attack it back**. A queen that is forked by a bishop could sometimes capture it along the same diagonal, but a queen forked by a knight can only run away.`,
      `**Ընտանեկան պատառաքաղ։** Երբ ձին միաժամանակ հարձակվում է արքայի, թագուհու և նավակի վրա, շախմատիստներն այն անվանում են **ընտանեկան երկակի հարված**, քանի որ այն խոցում է ամբողջ թագավորական ընտանիքը։ Պաշտպանվողը կարող է փրկել միայն մեկ խաղաքար, իսկ քանի որ առաջինը միշտ պետք է փրկել արքային, մի մեծ բան կորչում է։

**Ինչու են ձիերն այդքան լավ երկակի հարված հասցնում։** Ձին հարձակվում է տարօրինակ «Գ»-ի ձևով, և ոչ մի այլ խաղաքար այդպես չի քայլում։ Ուստի երբ ձին հարձակվում է թագուհու կամ նավակի վրա, նրանք **չեն կարող հակահարված տալ**։ Փղի երկակի հարվածի տակ ընկած թագուհին երբեմն կարող է նրան վերցնել նույն անկյունագծով, բայց ձիու հարվածի տակ թագուհին կարող է միայն փախչել։`,
      `**Семейная вилка.** Когда конь нападает сразу на короля, ферзя и ладью, шахматисты называют это **семейной вилкой**, потому что под удар попадает вся королевская семья. Защищающийся может спасти только одну фигуру, а поскольку короля нужно спасать в первую очередь, теряется что-то крупное.

**Почему конь так хорошо делает вилки.** Конь бьёт странной буквой «Г», и никакая другая фигура так не ходит. Поэтому, когда конь нападает на ферзя или ладью, они **не могут ударить его в ответ**. Ферзь под вилкой слона иногда может побить его по той же диагонали, а ферзю под вилкой коня остаётся только убегать.`,
    ),
    ask(1, {
      en: ["What is a fork?", ["One piece attacking two or more pieces at once", "Two pieces attacking one piece", "A piece that cannot move"], "A fork is a double attack by a single piece; the opponent can save only one target."],
      hy: ["Ի՞նչ է երկակի հարվածը։", ["Մեկ խաղաքարի հարձակումը միաժամանակ երկու կամ ավելի խաղաքարի վրա", "Երկու խաղաքարի հարձակումը մեկ խաղաքարի վրա", "Խաղաքար, որը չի կարող քայլել"], "Երկակի հարվածը մեկ խաղաքարի կրկնակի հարձակում է․ մրցակիցը կարող է փրկել միայն մեկ թիրախ։"],
      ru: ["Что такое вилка?", ["Нападение одной фигуры сразу на две или больше", "Нападение двух фигур на одну", "Фигура, которая не может ходить"], "Вилка — это двойной удар одной фигурой; сопернику удаётся спасти лишь одну цель."],
    }),
  ],
  pin: [
    "chess set=pin",
    closer(
      `**A whole defence built on a pin.** The Latvian-born master **Aron Nimzowitsch** loved pins. In his famous book *My System* (1925) he explained how to use them, and his opening, the **Nimzo-Indian Defence**, begins with a black bishop pinning a white knight against the king. Grandmasters still play it in world championship matches today.

**Alekhine's gun.** In 1930 in San Remo the world champion **Alexander Alekhine** played against Nimzowitsch himself. Alekhine lined up his two rooks and his queen one behind another on the c-file, like a big cannon. Nimzowitsch's pieces were pinned and could hardly move, and he had to resign. A rook-rook-queen line like this is still called **Alekhine's gun**.`,
      `**Կապի վրա կառուցված պաշտպանություն։** Լատվիայում ծնված վարպետ **Արոն Նիմցովիչը** սիրում էր կապերը։ Իր հայտնի «Իմ համակարգը» (1925) գրքում նա բացատրեց, թե ինչպես օգտագործել դրանք, իսկ նրա բացվածքը՝ **Նիմցովիչի պաշտպանությունը**, սկսվում է նրանով, որ սև փիղը կապում է սպիտակ ձին արքային։ Գրոսմայստերները մինչ օրս այն խաղում են աշխարհի առաջնության հանդիպումներում։

**Ալյոխինի թնդանոթը։** 1930 թվականին Սան Ռեմոյում աշխարհի չեմպիոն **Ալեքսանդր Ալյոխինը** խաղաց հենց Նիմցովիչի դեմ։ Ալյոխինը c ուղղաձիգով իրար հետևից շարեց իր երկու նավակը և թագուհուն՝ մեծ թնդանոթի պես։ Նիմցովիչի խաղաքարերը կապված էին և հազիվ էին շարժվում, և նա ստիպված հանձնվեց։ Նավակ-նավակ-թագուհի այսպիսի շարքը մինչ օրս կոչվում է **Ալյոխինի թնդանոթ**։`,
      `**Целая защита на связке.** Уроженец Латвии мастер **Арон Нимцович** обожал связки. В знаменитой книге «Моя система» (1925) он объяснил, как ими пользоваться, а его дебют, **защита Нимцовича**, начинается с того, что чёрный слон связывает белого коня с королём. Гроссмейстеры играют её до сих пор, даже в матчах за звание чемпиона мира.

**Пушка Алехина.** В 1930 году в Сан-Ремо чемпион мира **Александр Алехин** играл с самим Нимцовичем. Алехин выстроил на вертикали c две ладьи и ферзя друг за другом, как большую пушку. Фигуры Нимцовича оказались связаны и почти не могли ходить, и ему пришлось сдаться. Такой строй «ладья, ладья, ферзь» до сих пор называют **пушкой Алехина**.`,
    ),
    ask(2, {
      en: ["A knight is pinned to its king. What does that mean?", ["It may move, but the queen will be lost", "It may not move, because the king would be in check", "It can only move backwards"], "In a full pin the piece behind is the king, so moving the pinned piece is against the rules."],
      hy: ["Ձին կապված է իր արքային։ Ի՞նչ է դա նշանակում։", ["Այն կարող է քայլել, բայց թագուհին կկորչի", "Այն չի կարող քայլել, քանի որ արքան կհայտնվի շախի տակ", "Այն կարող է քայլել միայն հետ"], "Լրիվ կապի դեպքում հետևում արքան է, ուստի կապված խաղաքարով քայլելը կանոններով արգելված է։"],
      ru: ["Конь связан со своим королём. Что это значит?", ["Он может ходить, но пропадёт ферзь", "Он не может ходить, потому что король окажется под шахом", "Он может ходить только назад"], "При полной связке сзади стоит король, поэтому ходить связанной фигурой запрещено правилами."],
    }),
  ],
  skewer: [
    "chess set=skewer",
    closer(
      `**A skewer like a kebab.** In English this tactic is called a **skewer**, after the long metal stick that goes through pieces of meat for a kebab. The attacking piece goes "through" the line: first it hits the valuable piece in front, and when that piece moves away, it hits the one behind. It is like a pin turned the other way round: in a pin the more valuable piece is behind, in a skewer it is in front.

**X-ray vision.** A rook, a bishop or a queen sometimes works **through** another piece, as if it had X-ray eyes. For example, if two rooks stand one behind the other on an open file, the back rook also defends squares beyond the front rook. Players call this an **X-ray**. Looking along whole lines, not just at the nearest piece, helps you see skewers coming.`,
      `**Գծային հարված՝ խորովածի շամփուրի պես։** Անգլերենում այս հնարքը կոչվում է **skewer**՝ շամփուր, այն երկար մետաղե ձողի անունով, որի վրա շարում են մսի կտորները։ Հարձակվող խաղաքարը կարծես «ծակում» է գիծը․ նախ հարվածում է առջևի թանկ խաղաքարին, իսկ երբ այն հեռանում է, հարվածում է հետևի խաղաքարին։ Սա նման է հակառակ շրջված կապի․ կապի դեպքում ավելի թանկ խաղաքարը հետևում է, իսկ գծային հարվածի դեպքում՝ առջևում։

**Ռենտգենյան տեսողություն։** Նավակը, փիղը կամ թագուհին երբեմն գործում են մեկ այլ խաղաքարի **միջով**, կարծես ռենտգենյան աչքեր ունենան։ Օրինակ՝ եթե երկու նավակ կանգնած են իրար հետևից բաց ուղղաձիգում, հետևի նավակը պաշտպանում է նաև առջևի նավակից այն կողմ գտնվող դաշտերը։ Շախմատիստներն այն անվանում են **ռենտգեն**։ Եթե նայես ամբողջ գծերին, ոչ միայն մոտակա խաղաքարին, ավելի հեշտ կնկատես գծային հարվածները։`,
      `**Удар, как шампур.** По-английски этот приём называется **skewer** — «шампур», как длинная металлическая палочка, на которую нанизывают мясо для шашлыка. Атакующая фигура как бы пронзает линию: сначала бьёт ценную фигуру спереди, а когда та уходит, бьёт фигуру сзади. Это как связка наоборот: при связке более ценная фигура стоит сзади, а при линейном ударе — спереди.

**Рентгеновское зрение.** Ладья, слон или ферзь иногда действуют **сквозь** другую фигуру, словно у них рентгеновские глаза. Например, если две ладьи стоят друг за другом на открытой вертикали, задняя ладья защищает и поля за передней. Шахматисты называют это **рентгеном**. Если смотреть на линии целиком, а не только на ближайшую фигуру, линейные удары легче заметить.`,
    ),
    ask(3, {
      en: ["How is a skewer different from a pin?", ["A skewer is made only by a knight", "In a skewer both pieces are pawns", "In a skewer the more valuable piece is in front"], "The valuable piece in front must move away, and then the piece behind it is lost."],
      hy: ["Ինչո՞վ է գծային հարվածը տարբերվում կապից։", ["Գծային հարված տալիս է միայն ձին", "Գծային հարվածի դեպքում երկու խաղաքարն էլ զինվոր են", "Գծային հարվածի դեպքում ավելի թանկ խաղաքարն առջևում է"], "Առջևի թանկ խաղաքարը պետք է հեռանա, և հետո նրա հետևի խաղաքարը կորչում է։"],
      ru: ["Чем линейный удар отличается от связки?", ["Линейный удар наносит только конь", "При линейном ударе обе фигуры — пешки", "При линейном ударе более ценная фигура стоит спереди"], "Ценная фигура спереди должна уйти, и тогда пропадает фигура за ней."],
    }),
  ],
  "discovered-attack": [
    "chess set=discovered",
    closer(
      `**The windmill.** In Moscow in 1925 the young Mexican player **Carlos Torre** played against the former world champion **Emanuel Lasker**. Torre gave up his queen and then set up a **windmill**: his rook moved back and forth, giving check after check, while his bishop gave discovered check every second move. With each turn of the "windmill" the rook ate another black piece.

**Mate in a few moves.** In Vienna in 1910 **Richard Réti** suddenly offered his queen to **Savielly Tartakower**: queen to d8, check! The king had to take it, and then Réti's bishop moved with **double check**, from the bishop and the rook at the same time. The king had to run, and the same bishop gave mate on d8. A double check can never be blocked.`,
      `**Հողմաղացը։** 1925 թվականին Մոսկվայում մեքսիկացի երիտասարդ շախմատիստ **Կառլոս Տորրեն** խաղաց նախկին աշխարհի չեմպիոն **Էմանուել Լասկերի** դեմ։ Տորրեն զոհաբերեց թագուհուն, ապա կառուցեց **հողմաղաց**․ նրա նավակը քայլում էր հետ ու առաջ՝ շախ տալով իրար հետևից, իսկ փիղը յուրաքանչյուր երկրորդ քայլին բաց շախ էր տալիս։ «Հողմաղացի» ամեն պտույտի հետ նավակը վերցնում էր ևս մեկ սև խաղաքար։

**Մատ մի քանի քայլում։** 1910 թվականին Վիեննայում **Ռիխարդ Ռետին** հանկարծ թագուհին առաջարկեց **Սավելի Տարտակովերին**․ թագուհին d8, շախ։ Արքան ստիպված վերցրեց այն, իսկ հետո Ռետիի փիղը քայլեց **կրկնակի շախով**՝ միաժամանակ փղից և նավակից։ Արքան ստիպված փախավ, և նույն փիղը մատ տվեց d8-ում։ Կրկնակի շախից երբեք հնարավոր չէ փակվել։`,
      `**Мельница.** В Москве в 1925 году молодой мексиканский шахматист **Карлос Торре** играл с бывшим чемпионом мира **Эмануилом Ласкером**. Торре отдал ферзя, а потом устроил **мельницу**: его ладья ходила туда и обратно, давая шах за шахом, а слон каждым вторым ходом давал вскрытый шах. С каждым оборотом «мельницы» ладья съедала ещё одну чёрную фигуру.

**Мат за несколько ходов.** В Вене в 1910 году **Рихард Рети** вдруг отдал ферзя **Савелию Тартаковеру**: ферзь на d8, шах! Король был вынужден его взять, а затем слон Рети пошёл с **двойным шахом** — от слона и ладьи одновременно. Королю пришлось бежать, и тот же слон поставил мат на d8. От двойного шаха закрыться невозможно.`,
    ),
    ask(1, {
      en: ["How can a king get out of a double check?", ["Only by moving", "By blocking one of the checks", "By capturing one of the checking pieces"], "Blocking or capturing deals with only one check; only a king move escapes both."],
      hy: ["Ինչպե՞ս կարող է արքան պաշտպանվել կրկնակի շախից։", ["Միայն քայլելով", "Փակվելով շախերից մեկից", "Վերցնելով շախ տվող խաղաքարերից մեկին"], "Փակվելը կամ վերցնելը վերացնում է միայն մեկ շախը․ երկուսից էլ փրկում է միայն արքայի քայլը։"],
      ru: ["Как король может спастись от двойного шаха?", ["Только уйти", "Закрыться от одного из шахов", "Побить одну из шахующих фигур"], "Закрыться или побить можно лишь от одного шаха; спасает только ход королём."],
    }),
  ],
  "finding-tactics": [
    "chess set=tactics",
    closer(
      `**Look for a better move.** The German champion **Emanuel Lasker** held the world title for **27 years**, from 1894 to 1921, longer than anyone else. He was also a mathematician. His famous advice: **"When you see a good move, look for a better one."** Before you play, check once more whether there is a check, a capture or a threat that is even stronger.

**A tree of moves.** In 1971 the Soviet grandmaster **Alexander Kotov** wrote the book *Think Like a Grandmaster*. He taught players first to list all the **candidate moves**, the moves worth thinking about, and then to check each one like the branches of a tree, without jumping back and forth. Many strong players still think this way.`,
      `**Փնտրի՛ր ավելի լավ քայլ։** Գերմանացի չեմպիոն **Էմանուել Լասկերը** աշխարհի տիտղոսը պահեց **27 տարի**՝ 1894-ից 1921 թվականը, ավելի երկար, քան որևէ մեկը։ Նա նաև մաթեմատիկոս էր։ Նրա հայտնի խորհուրդն է․ **«Երբ լավ քայլ ես տեսնում, փնտրի՛ր ավելի լավը»**։ Քայլելուց առաջ մեկ անգամ էլ ստուգի՛ր, թե արդյոք կա ավելի ուժեղ շախ, վերցում կամ սպառնալիք։

**Քայլերի ծառ։** 1971 թվականին խորհրդային գրոսմայստեր **Ալեքսանդր Կոտովը** գրեց «Մտածի՛ր գրոսմայստերի պես» գիրքը։ Նա սովորեցնում էր նախ թվարկել բոլոր **թեկնածու քայլերը**, այսինքն՝ այն քայլերը, որոնց մասին արժե մտածել, իսկ հետո ստուգել յուրաքանչյուրը ծառի ճյուղերի պես՝ առանց մեկից մյուսին ցատկելու։ Շատ ուժեղ շախմատիստներ մինչ օրս այդպես են մտածում։`,
      `**Ищи ход получше.** Немецкий чемпион **Эмануил Ласкер** удерживал мировую корону **27 лет**, с 1894 по 1921 год, дольше всех. Он был ещё и математиком. Его знаменитый совет: **«Увидел хороший ход — поищи лучше»**. Прежде чем сходить, ещё раз проверь, нет ли шаха, взятия или угрозы посильнее.

**Дерево ходов.** В 1971 году советский гроссмейстер **Александр Котов** написал книгу «Думай как гроссмейстер». Он учил сначала перечислить все **ходы-кандидаты**, то есть ходы, о которых стоит подумать, а потом проверять каждый, как ветви дерева, не прыгая от одного к другому. Многие сильные шахматисты до сих пор думают именно так.`,
    ),
    ask(2, {
      en: ["Which moves should you check first when looking for tactics?", ["Quiet pawn moves", "Checks, captures and threats", "King moves only"], "Forcing moves leave the opponent the fewest answers, so tactics usually start with them."],
      hy: ["Տակտիկա փնտրելիս ո՞ր քայլերը պետք է նախ ստուգել։", ["Զինվորների հանգիստ քայլերը", "Շախերը, վերցումները և սպառնալիքները", "Միայն արքայի քայլերը"], "Ստիպողական քայլերը մրցակցին թողնում են ամենաքիչ պատասխանները, ուստի տակտիկան սովորաբար սկսվում է դրանցով։"],
      ru: ["Какие ходы нужно проверять первыми в поисках тактики?", ["Тихие ходы пешками", "Шахи, взятия и угрозы", "Только ходы королём"], "Форсированные ходы оставляют сопернику меньше всего ответов, поэтому тактика обычно начинается с них."],
    }),
  ],
};
