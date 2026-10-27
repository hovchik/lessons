import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade2: VisualMap[number] = {
  chessboard: [
    "chess mode=squares",
    closer(
      `**A game between space and Earth.** In June 1970 two cosmonauts on the spaceship **Soyuz 9** played the first chess game in space, against a team on the ground. Nobody could see the other board, so every move was sent by radio as square names, like "e2–e4". The game ended in a draw.

**A board you can feel.** Blind and partially sighted players use a special board: the black squares are a little higher than the white ones, and every piece has a peg that fits into a hole in its square. The black pieces have a small point on top, so a player can tell them apart by touch. Blind players have their own Chess Olympiads.`,
      `**Պարտիա տիեզերքի և Երկրի միջև։** 1970 թվականի հունիսին **«Սոյուզ-9»** տիեզերանավի երկու տիեզերագնաց խաղացին տիեզերքում առաջին շախմատային պարտիան՝ Երկրում գտնվող թիմի դեմ։ Ոչ ոք չէր տեսնում մյուսի տախտակը, ուստի յուրաքանչյուր քայլ ռադիոյով փոխանցվում էր դաշտերի անուններով, օրինակ՝ «e2–e4»։ Պարտիան ավարտվեց ոչ-ոքի։

**Տախտակ, որը կարելի է շոշափել։** Կույր և թույլ տեսողությամբ շախմատիստները խաղում են հատուկ տախտակով․ սև դաշտերը սպիտակներից մի փոքր բարձր են, իսկ յուրաքանչյուր խաղաքար ունի ցցիկ, որը մտնում է իր դաշտի անցքի մեջ։ Սև խաղաքարերի գագաթին փոքրիկ սուր ելուստ կա, որպեսզի խաղացողը շոշափելով տարբերի դրանք։ Կույր շախմատիստներն ունեն իրենց Շախմատային օլիմպիադաները։`,
      `**Партия между космосом и Землёй.** В июне 1970 года два космонавта на корабле **«Союз-9»** сыграли первую шахматную партию в космосе против команды на Земле. Никто не видел доску соперника, поэтому каждый ход передавали по радио названиями полей, например «e2–e4». Партия закончилась вничью.

**Доска, которую можно потрогать.** Незрячие и слабовидящие шахматисты играют на особой доске: чёрные поля чуть выше белых, а у каждой фигуры есть штырёк, который вставляется в отверстие поля. У чёрных фигур сверху маленький шип, чтобы их можно было отличить на ощупь. У незрячих шахматистов есть свои шахматные олимпиады.`,
    ),
    ask(3, {
      en: ["Which square is in White's bottom right-hand corner?", ["a1", "h8", "h1"], "\"White on the right\": h1 is a white square."],
      hy: ["Ո՞ր դաշտն է սպիտակների աջ ներքևի անկյունում։", ["a1", "h8", "h1"], "«Սպիտակը՝ աջից»․ h1-ը սպիտակ դաշտ է։"],
      ru: ["Какое поле находится в правом нижнем углу у белых?", ["a1", "h8", "h1"], "«Белое справа»: h1 — белое поле."],
    }),
  ],
  "pieces-and-setup": [
    "chess set=setup",
    closer(
      `**Chessmen from the sand.** In 1831 a beach on the Scottish island of **Lewis** gave up a treasure: 78 chess pieces carved about 850 years ago from walrus ivory and whale teeth. The kings and queens look worried, and some of the rooks are warriors biting their shields in fury. The **Lewis chessmen** are now in museums in London and Edinburgh, and a copy of them appears in the first Harry Potter film.

**The pieces everybody uses.** In old times every country carved its own kind of pieces, and players often mixed them up. In 1849 a simple, sturdy design went on sale in London, named after the strong English player **Howard Staunton**. A knight is a horse's head, a bishop has a cut in its top, a king wears a cross. Staunton pieces are used in every big tournament today.`,
      `**Խաղաքարեր ավազից։** 1831 թվականին շոտլանդական **Լյուիս** կղզու լողափում գանձ գտան․ 78 շախմատային խաղաքար, որոնք մոտ 850 տարի առաջ փորագրվել էին ծովափղի ժանիքից և կետի ատամներից։ Արքաներն ու թագուհիները մտահոգ տեսք ունեն, իսկ որոշ նավակներ մարտիկներ են, որոնք կատաղությունից կծում են իրենց վահանները։ **Լյուիսյան խաղաքարերն** այժմ պահվում են Լոնդոնի և Էդինբուրգի թանգարաններում, իսկ դրանց պատճենն երևում է Հարի Փոթերի մասին առաջին ֆիլմում։

**Խաղաքարեր, որոնցով բոլորն են խաղում։** Հին ժամանակներում յուրաքանչյուր երկիր իր ձևի խաղաքարերն էր փորագրում, և խաղացողները հաճախ շփոթում էին դրանք։ 1849 թվականին Լոնդոնում վաճառքի հանվեց պարզ և ամուր ձևավորում, որը կոչվեց անգլիացի ուժեղ շախմատիստ **Հովարդ Սթաունթոնի** անունով։ Ձին ձիու գլուխ է, փիղը գագաթին կտրվածք ունի, արքան՝ խաչ։ Սթաունթոնի խաղաքարերն այսօր օգտագործվում են բոլոր խոշոր մրցաշարերում։`,
      `**Фигуры из песка.** В 1831 году на пляже шотландского острова **Льюис** нашли клад: 78 шахматных фигур, вырезанных около 850 лет назад из моржовой кости и зубов кита. Короли и королевы выглядят встревоженными, а некоторые ладьи — это воины, в ярости кусающие свои щиты. **Шахматы с острова Льюис** хранятся теперь в музеях Лондона и Эдинбурга, а их копия появляется в первом фильме о Гарри Поттере.

**Фигуры, которыми играют все.** В старину каждая страна вырезала фигуры по-своему, и игроки часто их путали. В 1849 году в Лондоне начали продавать простой и прочный комплект, названный в честь сильного английского шахматиста **Говарда Стаунтона**. Конь — это голова лошади, у слона прорезь сверху, у короля крест. Фигурами Стаунтона играют сегодня на всех крупных турнирах.`,
    ),
    ask(1, {
      en: ["On which square does the white queen start?", ["d1", "e1", "d8"], "The queen loves her own colour: the white queen stands on the white square d1."],
      hy: ["Ո՞ր դաշտում է սկզբում կանգնած սպիտակ թագուհին։", ["d1", "e1", "d8"], "Թագուհին սիրում է իր գույնը․ սպիտակ թագուհին կանգնում է d1 սպիտակ դաշտում։"],
      ru: ["На каком поле стоит в начале белый ферзь?", ["d1", "e1", "d8"], "Ферзь любит свой цвет: белый ферзь стоит на белом поле d1."],
    }),
  ],
  "rook-and-bishop": [
    {
      spec: "chess mode=moves fen=8/8/3P4/6p1/3R2n1/8/8/2B5 pick=d4",
      prompt: {
        en: "The rook on d4 is chosen: see how far it can go and why it stops at its own pawn on d6. Then tap the bishop on c1.",
        hy: "Ընտրված է d4-ի նավակը․ տե՛ս, թե որքան հեռու կարող է գնալ և ինչու է կանգնում d6-ի իր զինվորի մոտ։ Հետո հպի՛ր c1-ի փղին։",
        ru: "Выбрана ладья d4: посмотри, как далеко она ходит и почему останавливается перед своей пешкой d6. Потом нажми на слона c1.",
      },
    },
    closer(
      `**A rook that is a boat.** In the Indian game chaturanga this piece was a **war chariot**, called *rukh* in Persian, and the English word "rook" comes from it. Russian and Armenian players see something else: in Russian it is *ladya* and in Armenian *navak*, and both words mean **a boat**. Old Russian chess sets really had rooks shaped like little boats.

**A bishop that is an elephant.** In the old Persian and Arab game this piece was an **elephant**, *al-fil*, and it jumped exactly two squares along a diagonal. The name stayed in many languages: *slon* in Russian, *pigh* in Armenian and *alfil* in Spanish all mean elephant. In English the piece became a bishop, because the cut in its top reminded people of a bishop's tall hat.`,
      `**Նավակ, որը նավակ է։** Հնդկական չատուրանգա խաղում այս խաղաքարը **մարտակառք** էր, պարսկերեն՝ *ռուխ*, և անգլերեն «rook» բառը դրանից է առաջացել։ Հայ և ռուս շախմատիստներն այլ բան են տեսնում․ ռուսերեն այն *լադյա* է, հայերեն՝ *նավակ*, և երկու բառն էլ նշանակում են **նավակ**։ Հին ռուսական շախմատներում նավակներն իսկապես փոքրիկ նավակների ձև ունեին։

**Փիղ, որը փիղ է։** Հին պարսկական և արաբական խաղում այս խաղաքարը **փիղ** էր՝ *ալ-ֆիլ*, և թռչում էր ճիշտ երկու դաշտ անկյունագծով։ Անունը պահպանվել է շատ լեզուներում․ ռուսերեն *սլոն*, հայերեն *փիղ* և իսպաներեն *ալֆիլ* բառերը նշանակում են փիղ։ Անգլերենում խաղաքարը դարձավ «եպիսկոպոս», քանի որ նրա գագաթի կտրվածքը մարդկանց հիշեցնում էր եպիսկոպոսի բարձր գլխարկը։`,
      `**Ладья, которая лодка.** В индийской игре чатуранга эта фигура была **боевой колесницей**, по-персидски *рух*, и от этого слова происходит английское «rook». Русские и армянские шахматисты видят другое: по-русски это *ладья*, по-армянски *навак*, и оба слова означают **лодку**. В старинных русских шахматах ладьи и правда делали в виде маленьких лодочек.

**Слон, который слон.** В старой персидской и арабской игре эта фигура была **слоном**, *аль-филь*, и прыгала ровно на два поля по диагонали. Название сохранилось во многих языках: русское *слон*, армянское *пих* и испанское *альфиль* означают слона. По-английски фигура стала «епископом», потому что прорезь на её верхушке напоминала высокую шапку епископа.`,
    ),
    ask(2, {
      en: ["How many squares does a rook control on an empty board?", ["7", "14", "28"], "Seven along its rank and seven along its file, wherever it stands."],
      hy: ["Քանի՞ դաշտ է հսկում նավակը դատարկ տախտակին։", ["7", "14", "28"], "Յոթը՝ իր հորիզոնականով և յոթը՝ իր ուղղաձիգով, որտեղ էլ որ կանգնած լինի։"],
      ru: ["Сколько полей держит ладья на пустой доске?", ["7", "14", "28"], "Семь по горизонтали и семь по вертикали, где бы она ни стояла."],
    }),
  ],
  "queen-and-king": [
    {
      spec: "chess mode=moves fen=5r2/8/8/8/3Q4/8/6K1/8 pick=d4",
      prompt: {
        en: "Count the queen's moves from d4. Then tap the white king: why can it not step to f1, f2 or f3?",
        hy: "Հաշվի՛ր թագուհու քայլերը d4-ից։ Հետո հպի՛ր սպիտակ արքային․ ինչո՞ւ այն չի կարող գնալ f1, f2 կամ f3։",
        ru: "Посчитай ходы ферзя с d4. Потом нажми на белого короля: почему он не может пойти на f1, f2 или f3?",
      },
    },
    closer(
      `**The "mad" queen.** For hundreds of years the queen was one of the weakest pieces: in the Persian game she was the king's **adviser** and moved only one square diagonally. The Russian name *ferz* comes from that Persian word. About 550 years ago in Spain the queen suddenly got her modern powers. The game became so fast and fierce that the Italians called it "mad chess".

**The king goes for a walk.** In a famous game in 1991 the English grandmaster **Nigel Short** did something surprising: in the middle of the game, with many pieces still on the board, he marched his king from g1 all the way to **h6**. The king helped to trap the black king, and his opponent gave up. Usually the king hides, but in the endgame it becomes a strong fighter.`,
      `**«Խենթ» թագուհին։** Հարյուրավոր տարիներ թագուհին ամենաթույլ խաղաքարերից էր․ պարսկական խաղում նա արքայի **խորհրդականն** էր և քայլում էր ընդամենը մեկ դաշտ անկյունագծով։ Ռուսերեն *ֆերզ* անունը գալիս է հենց այդ պարսկերեն բառից։ Մոտ 550 տարի առաջ Իսպանիայում թագուհին հանկարծ ստացավ իր այսօրվա ուժը։ Խաղն այնքան արագ և կատաղի դարձավ, որ իտալացիներն այն անվանեցին «խենթ շախմատ»։

**Արքան զբոսնում է։** 1991 թվականի հայտնի պարտիայում անգլիացի գրոսմայստեր **Նայջել Շորթը** զարմանալի բան արեց․ պարտիայի կեսին, երբ տախտակին դեռ շատ խաղաքարեր կային, նա իր արքային g1-ից քայլեցրեց մինչև **h6**։ Արքան օգնեց թակարդը գցել սև արքային, և մրցակիցը հանձնվեց։ Սովորաբար արքան թաքնվում է, բայց վերջնախաղում դառնում է ուժեղ մարտիկ։`,
      `**«Бешеный» ферзь.** Сотни лет ферзь был одной из самых слабых фигур: в персидской игре это был **советник** короля, и ходил он лишь на одно поле по диагонали. Русское слово *ферзь* происходит от этого персидского слова. Около 550 лет назад в Испании ферзь вдруг получил нынешнюю силу. Игра стала такой быстрой и яростной, что итальянцы назвали её «бешеными шахматами».

**Король идёт гулять.** В знаменитой партии 1991 года английский гроссмейстер **Найджел Шорт** сделал неожиданное: в разгар игры, когда на доске было ещё много фигур, он провёл своего короля с g1 до самого **h6**. Король помог поймать чёрного короля, и соперник сдался. Обычно король прячется, но в эндшпиле он становится сильным бойцом.`,
    ),
    ask(1, {
      en: ["Which piece moves like a rook and a bishop together?", ["The queen", "The king", "The knight"], "The queen goes any number of squares along ranks, files and diagonals."],
      hy: ["Ո՞ր խաղաքարն է քայլում և՛ նավակի, և՛ փղի պես։", ["Թագուհին", "Արքան", "Ձին"], "Թագուհին գնում է ցանկացած թվով դաշտ հորիզոնականներով, ուղղաձիգներով և անկյունագծերով։"],
      ru: ["Какая фигура ходит и как ладья, и как слон?", ["Ферзь", "Король", "Конь"], "Ферзь ходит на любое число полей по горизонталям, вертикалям и диагоналям."],
    }),
  ],
  "knight-and-pawn": [
    {
      spec: "chess mode=moves fen=8/8/8/p2p4/P1P1N3/8/1P6/6N1 pick=e4",
      prompt: {
        en: "The knight on e4 jumps in an L shape. Then try the pawns: which one can capture, which can jump two squares, and which is stuck?",
        hy: "e4-ի ձին թռչում է «Գ» տառի ձևով։ Հետո փորձի՛ր զինվորները․ ո՞րը կարող է վերցնել, ո՞րը կարող է երկու դաշտ թռչել, և ո՞րն է խրված։",
        ru: "Конь e4 прыгает буквой «Г». Потом попробуй пешки: какая может бить, какая может шагнуть на два поля, а какая застряла?",
      },
    },
    closer(
      `**A knight that visits every square.** Can a knight jump around the whole board and land on each of the 64 squares exactly once? Yes! This puzzle is called the **knight's tour**, and people solved it more than a thousand years ago. In 1759 the great mathematician **Leonhard Euler** wrote a whole scientific paper about it. Try it on paper with numbers 1, 2, 3… in the squares.

**A pawn is a foot soldier.** The word "pawn" comes from an old word for a **foot soldier**, a soldier without a horse. The Russian *peshka* comes from *peshy*, "on foot", and the Armenian *zinvor* simply means **soldier**. Pawns are the smallest pieces, but there are eight of them, and each one dreams of reaching the last rank.`,
      `**Ձի, որն այցելում է բոլոր դաշտերը։** Կարո՞ղ է ձին թռչկոտել ամբողջ տախտակով և 64 դաշտերից յուրաքանչյուրում կանգնել ճիշտ մեկ անգամ։ Այո՛։ Այս խնդիրը կոչվում է **ձիու շրջագայություն**, և մարդիկ այն լուծել են ավելի քան հազար տարի առաջ։ 1759 թվականին մեծ մաթեմատիկոս **Լեոնարդ Էյլերը** դրա մասին մի ամբողջ գիտական աշխատություն գրեց։ Փորձի՛ր թղթի վրա՝ դաշտերում գրելով 1, 2, 3…։

**Զինվորը հետևակ է։** Անգլերեն «pawn» բառը գալիս է **հետևակ** զինվոր, այսինքն՝ առանց ձիու զինվոր նշանակող հին բառից։ Ռուսերեն *պեշկա* բառը գալիս է *պեշի*՝ «ոտքով» բառից, իսկ հայերեն *զինվոր* բառը պարզապես նշանակում է **զինվոր**։ Զինվորներն ամենափոքր խաղաքարերն են, բայց նրանք ութն են, և յուրաքանչյուրն երազում է հասնել վերջին հորիզոնական։`,
      `**Конь, который побывает на каждом поле.** Может ли конь обойти всю доску и побывать на каждом из 64 полей ровно один раз? Да! Эта задача называется **ход коня**, и люди решили её больше тысячи лет назад. В 1759 году великий математик **Леонард Эйлер** написал о ней целую научную работу. Попробуй на бумаге, ставя в клетки числа 1, 2, 3…

**Пешка — это пехотинец.** Английское «pawn» происходит от старого слова, означавшего **пешего воина**, солдата без коня. Русское *пешка* — от слова *пеший*, а армянское *зинвор* означает просто **солдат**. Пешки — самые маленькие фигуры, но их восемь, и каждая мечтает дойти до последней горизонтали.`,
    ),
    ask(2, {
      en: ["How does a pawn capture?", ["Straight forward", "One square diagonally forward", "Backwards"], "A pawn moves straight but captures one square diagonally forward."],
      hy: ["Ինչպե՞ս է զինվորը վերցնում։", ["Ուղիղ առաջ", "Մեկ դաշտ թեք առաջ", "Հետ"], "Զինվորը քայլում է ուղիղ, բայց վերցնում է մեկ դաշտ թեք առաջ։"],
      ru: ["Как бьёт пешка?", ["Прямо вперёд", "На одно поле по диагонали вперёд", "Назад"], "Пешка ходит прямо, а бьёт на одно поле наискосок вперёд."],
    }),
  ],
  "capture-and-value": [
    "bars set=chessvalue",
    "chess set=trade",
    closer(
      `**A computer checks the points.** Are a knight and a bishop really worth the same? In 2020 scientists, together with the former world champion **Vladimir Kramnik**, let the program **AlphaZero** play millions of games against itself and counted. It found a knight worth about 3, a bishop a little more, about 3⅓, a rook about 5½ and a queen about 9½ pawns. So the school values 3, 3, 5 and 9 are very close!

**The Immortal Game.** In London in 1851 **Adolf Anderssen** played a friendly game against **Lionel Kieseritzky**. Anderssen gave away a bishop, **both rooks** and then **his queen**, and still mated the black king with the three small pieces he had left. Points help you decide, but a mate is worth more than any number of points.`,
      `**Համակարգիչը ստուգում է միավորները։** Իսկապե՞ս ձին և փիղը նույնքան արժեն։ 2020 թվականին գիտնականները նախկին աշխարհի չեմպիոն **Վլադիմիր Կրամնիկի** հետ թույլ տվեցին **AlphaZero** ծրագրին միլիոնավոր պարտիաներ խաղալ ինքն իր դեմ և հաշվեցին։ Պարզվեց, որ ձին արժե մոտ 3, փիղը՝ մի փոքր ավելի, մոտ 3⅓, նավակը՝ մոտ 5½, իսկ թագուհին՝ մոտ 9½ զինվոր։ Ուրեմն դպրոցական 3, 3, 5 և 9 արժեքները շատ մոտ են։

**Անմահ պարտիան։** 1851 թվականին Լոնդոնում **Ադոլֆ Անդերսենը** ընկերական պարտիա խաղաց **Լիոնել Կիզերիցկու** դեմ։ Անդերսենը տվեց փիղը, **երկու նավակը**, հետո նաև **թագուհուն** և այնուամենայնիվ մատ տվեց սև արքային իր մնացած երեք փոքր խաղաքարերով։ Միավորներն օգնում են որոշում կայացնել, բայց մատն ավելի արժեքավոր է, քան ցանկացած քանակի միավոր։`,
      `**Компьютер проверяет очки.** Правда ли конь и слон стоят одинаково? В 2020 году учёные вместе с бывшим чемпионом мира **Владимиром Крамником** дали программе **AlphaZero** сыграть миллионы партий самой с собой и подсчитали. Оказалось, что конь стоит около 3 пешек, слон чуть больше, около 3⅓, ладья около 5½, а ферзь около 9½. Значит, школьные оценки 3, 3, 5 и 9 очень точны!

**Бессмертная партия.** В Лондоне в 1851 году **Адольф Андерсен** сыграл дружескую партию с **Лионелем Кизерицким**. Андерсен отдал слона, **обе ладьи**, а потом и **ферзя** и всё равно заматовал чёрного короля тремя оставшимися лёгкими фигурами. Очки помогают решать, но мат дороже любого количества очков.`,
    ),
    ask(3, {
      en: ["Your knight can take a pawn, but the pawn is protected. What do you lose?", ["Nothing", "One point", "Two points: you give 3 and get 1"], "Count before you capture: a knight (3) for a pawn (1) is a bad trade."],
      hy: ["Քո ձին կարող է վերցնել զինվոր, բայց զինվորը պաշտպանված է։ Ի՞նչ ես կորցնում։", ["Ոչինչ", "Մեկ միավոր", "Երկու միավոր․ տալիս ես 3, ստանում՝ 1"], "Հաշվի՛ր վերցնելուց առաջ․ ձին (3) զինվորի (1) դիմաց վատ փոխանակում է։"],
      ru: ["Твой конь может взять пешку, но она защищена. Сколько ты теряешь?", ["Ничего", "Одно очко", "Два очка: отдаёшь 3, получаешь 1"], "Считай до взятия: конь (3) за пешку (1) — плохой размен."],
    }),
  ],
  "check-and-mate": [
    "chess set=check",
    closer(
      `**Where the word comes from.** "Checkmate" comes from the Persian words **shāh māt**. *Shāh* means "king", and *māt* is usually translated as "the king is helpless" or "the king is beaten". The same words live on in many languages: Armenian and Russian say *shakh* and *mat*, and the whole game is called *shakhmat* or *shakhmaty*, "the king is helpless".

**"Guard your queen!"** Today you do not have to say "check" out loud; the rules do not require it. But two hundred years ago polite players even warned each other when the **queen** was attacked, by saying "gardez", which is French for "guard". The habit has died out. In tournaments today players stay silent, and you have to notice the check yourself.`,
      `**Որտեղից է բառը։** «Շախ-մատ» արտահայտությունը գալիս է պարսկերեն **շահ մաթ** բառերից։ *Շահ* նշանակում է «արքա», իսկ *մաթ*-ը սովորաբար թարգմանում են «արքան անօգնական է» կամ «արքան պարտված է»։ Այս բառերն ապրում են շատ լեզուներում․ հայերը և ռուսներն ասում են *շախ* և *մատ*, իսկ ամբողջ խաղը կոչվում է *շախմատ*՝ «արքան անօգնական է»։

**«Պաշտպանի՛ր թագուհուդ»։** Այսօր պարտադիր չէ բարձրաձայն «շախ» ասել․ կանոնները դա չեն պահանջում։ Բայց երկու հարյուր տարի առաջ քաղաքավարի խաղացողները միմյանց զգուշացնում էին նույնիսկ այն ժամանակ, երբ հարձակման տակ էր **թագուհին**՝ ասելով «գարդե», որը ֆրանսերեն նշանակում է «պաշտպանի՛ր»։ Այդ սովորությունը վերացել է։ Այսօր մրցաշարերում խաղացողները լուռ են, և շախը պետք է ինքդ նկատես։`,
      `**Откуда это слово.** «Шах и мат» происходит от персидских слов **шах мат**. *Шах* значит «король», а *мат* обычно переводят как «король беспомощен» или «король побеждён». Эти слова живут во многих языках: армяне и русские говорят *шах* и *мат*, а вся игра называется *шахматы*, то есть «король беспомощен».

**«Защищай ферзя!»** Сегодня не обязательно говорить «шах» вслух: правила этого не требуют. А двести лет назад вежливые игроки предупреждали друг друга, даже когда под ударом оказывался **ферзь**, говоря «гарде», по-французски «защищай». Эта привычка исчезла. Сегодня на турнирах игроки молчат, и шах нужно заметить самому.`,
    ),
    ask(2, {
      en: ["The king is in check and cannot escape, block or capture. What is it?", ["Stalemate", "Checkmate", "Castling"], "Check with no way out is checkmate, and the game is over."],
      hy: ["Արքան շախի տակ է և չի կարող փախչել, փակվել կամ վերցնել։ Ի՞նչ է սա։", ["Պատ", "Մատ", "Փոխատեղում"], "Շախը, որից ելք չկա, մատ է, և պարտիան ավարտված է։"],
      ru: ["Король под шахом и не может уйти, закрыться или побить. Что это?", ["Пат", "Мат", "Рокировка"], "Шах, от которого нет защиты, — это мат, и партия окончена."],
    }),
  ],
  castling: [
    "chess set=castling",
    closer(
      `**A move that took centuries.** In the Middle Ages there was no castling. Instead the king had a special **leap**: once in a game it could jump two squares. Castling in today's form appeared about 500 years ago, and for a long time each country had its own rules. In Italy players could put the king and the rook on almost any squares they liked until about 150 years ago.

**Castling up the board.** In 1972 the Dutch writer **Tim Krabbé** found a loophole in the rules. If a pawn became a rook on e8, the white king on e1 had not moved and the squares between were empty, then the rules seemed to allow castling **up the e-file**: king to e3, rook to e2! Soon after, the rules were changed: the rook must stand on the same rank as the king.`,
      `**Քայլ, որը դարեր տևեց։** Միջնադարում փոխատեղում չկար։ Փոխարենն արքան ուներ հատուկ **ոստյուն**․ պարտիայում մեկ անգամ այն կարող էր թռչել երկու դաշտ։ Այսօրվա ձևով փոխատեղումը հայտնվեց մոտ 500 տարի առաջ, և երկար ժամանակ յուրաքանչյուր երկիր ուներ իր կանոնները։ Իտալիայում մինչև մոտ 150 տարի առաջ խաղացողները կարող էին արքային և նավակին դնել գրեթե ցանկացած դաշտ։

**Փոխատեղում տախտակի երկայնքով։** 1972 թվականին հոլանդացի գրող **Տիմ Կրաբեն** կանոններում բաց տեղ գտավ։ Եթե զինվորը դառնար նավակ e8-ում, e1-ի արքան դեռ չէր քայլել, և միջև դաշտերը դատարկ էին, ապա կանոնները կարծես թույլ էին տալիս փոխատեղում անել **e ուղղաձիգով**՝ արքան e3, նավակը e2։ Շուտով կանոնները փոխվեցին․ նավակը պետք է կանգնած լինի արքայի հետ նույն հորիզոնականում։`,
      `**Ход, на который ушли века.** В Средние века рокировки не было. Вместо неё у короля был особый **прыжок**: один раз за партию он мог перепрыгнуть на два поля. Рокировка в нынешнем виде появилась около 500 лет назад, и долго в каждой стране были свои правила. В Италии ещё около 150 лет назад можно было ставить короля и ладью почти на любые поля.

**Рокировка вдоль доски.** В 1972 году нидерландский писатель **Тим Краббе** нашёл лазейку в правилах. Если пешка превратилась в ладью на e8, белый король на e1 ещё не ходил и поля между ними свободны, то правила как будто разрешали рокироваться **по вертикали e**: король на e3, ладья на e2! Вскоре правила изменили: ладья должна стоять на одной горизонтали с королём.`,
    ),
    ask(3, {
      en: ["When is castling NOT allowed?", ["When both pawns in front of the king have moved", "When it is Black's turn", "When the king is in check"], "You may not castle out of check, through an attacked square or into check."],
      hy: ["Ե՞րբ փոխատեղում ՉԻ կարելի անել։", ["Երբ արքայի առջևի երկու զինվորները քայլել են", "Երբ քայլը սևերինն է", "Երբ արքան շախի տակ է"], "Չի կարելի փոխատեղում անել շախից դուրս գալու համար, հարձակման տակ գտնվող դաշտով կամ շախի տակ մտնելով։"],
      ru: ["Когда рокировка НЕ разрешена?", ["Когда обе пешки перед королём уже ходили", "Когда ход чёрных", "Когда король под шахом"], "Нельзя рокироваться под шахом, через битое поле и под шах."],
    }),
  ],
  "en-passant-and-promotion": [
    "chess set=enpassant",
    closer(
      `**Why en passant exists.** Long ago a pawn could move only **one square** at a time. When players allowed it a double step on its first move, about 500 years ago, a pawn could suddenly sneak past an enemy pawn that was waiting for it. To keep things fair, the new rule **en passant**, French for "in passing", lets the waiting pawn capture it as if it had moved only one square.

**Alice becomes a queen.** In the book *Through the Looking-Glass* (1871) by **Lewis Carroll**, the whole adventure is a game of chess. Alice starts as a **white pawn** on the second square, and the land is divided into squares by little brooks. Every time she crosses one, she moves on. When she reaches the eighth square, a crown appears on her head: the pawn has become a **queen**.`,
      `**Ինչու գոյություն ունի անցողիկ վերցումը։** Վաղուց զինվորը կարող էր քայլել միայն **մեկ դաշտ**։ Երբ մոտ 500 տարի առաջ թույլ տվեցին առաջին քայլով երկու դաշտ անցնել, զինվորը հանկարծ կարող էր գաղտագողի անցնել իրեն սպասող թշնամու զինվորի կողքով։ Արդարության համար նոր կանոնը՝ **անցողիկ վերցումը**, թույլ է տալիս սպասող զինվորին վերցնել այն այնպես, կարծես այն միայն մեկ դաշտ էր անցել։

**Ալիսը դառնում է թագուհի։** **Լյուիս Քերոլի** «Ալիսը հայելու աշխարհում» (1871) գրքում ամբողջ արկածը շախմատային պարտիա է։ Ալիսը սկսում է որպես **սպիտակ զինվոր** երկրորդ դաշտում, իսկ երկիրը փոքրիկ առվակներով բաժանված է դաշտերի։ Ամեն անգամ, երբ նա անցնում է առվակը, առաջ է շարժվում։ Երբ նա հասնում է ութերորդ դաշտ, նրա գլխին թագ է հայտնվում․ զինվորը դարձել է **թագուհի**։`,
      `**Зачем нужно взятие на проходе.** Давным-давно пешка могла ходить только на **одно поле**. Когда около 500 лет назад ей разрешили первым ходом шагать на два поля, пешка вдруг смогла проскочить мимо поджидающей её вражеской пешки. Чтобы было честно, новое правило **взятия на проходе** позволяет поджидающей пешке побить её так, будто та сходила только на одно поле.

**Алиса становится королевой.** В книге **Льюиса Кэрролла** «Алиса в Зазеркалье» (1871) всё приключение — это шахматная партия. Алиса начинает **белой пешкой** на второй клетке, а страна разделена ручейками на клетки. Каждый раз, перепрыгнув ручеёк, она продвигается дальше. Когда она доходит до восьмой клетки, на её голове появляется корона: пешка стала **королевой**.`,
    ),
    ask(1, {
      en: ["Into which pieces can a pawn turn on the last rank?", ["A queen, rook, bishop or knight", "Only a queen", "A king"], "Any piece of its own colour except a king; usually players choose a queen."],
      hy: ["Ի՞նչ խաղաքարեր կարող է դառնալ զինվորը վերջին հորիզոնականում։", ["Թագուհի, նավակ, փիղ կամ ձի", "Միայն թագուհի", "Արքա"], "Իր գույնի ցանկացած խաղաքար, բացի արքայից․ սովորաբար ընտրում են թագուհի։"],
      ru: ["В какие фигуры может превратиться пешка на последней горизонтали?", ["В ферзя, ладью, слона или коня", "Только в ферзя", "В короля"], "В любую фигуру своего цвета, кроме короля; обычно выбирают ферзя."],
    }),
  ],
  "draws-and-notation": [
    "chess set=draws",
    closer(
      `**The longest game.** In Belgrade in 1989 the grandmasters **Ivan Nikolić** and **Goran Arsović** played a tournament game that lasted **269 moves** and more than 20 hours. In the end neither could win, and it was a draw. Thanks to the written moves we can replay the whole game today, move by move.

**A match with no winner.** In 1984 **Anatoly Karpov** and **Garry Kasparov** began a world championship match. The winner had to win six games, but the players kept making draws: 40 of the 48 games ended in a draw! After five months the match was stopped without a result, and a new one was played the next year. Kasparov won it and became world champion.`,
      `**Ամենաերկար պարտիան։** 1989 թվականին Բելգրադում գրոսմայստերներ **Իվան Նիկոլիչը** և **Գորան Արսովիչը** մրցաշարային պարտիա խաղացին, որը տևեց **269 քայլ** և ավելի քան 20 ժամ։ Վերջում ոչ մեկը չկարողացավ հաղթել, և պարտիան ավարտվեց ոչ-ոքի։ Գրառված քայլերի շնորհիվ այսօր կարող ենք ամբողջ պարտիան վերախաղարկել՝ քայլ առ քայլ։

**Հանդիպում առանց հաղթողի։** 1984 թվականին **Անատոլի Կարպովը** և **Գարի Կասպարովը** սկսեցին աշխարհի առաջնության հանդիպումը։ Հաղթողը պետք է շահեր վեց պարտիա, բայց խաղացողներն անընդհատ ոչ-ոքի էին խաղում․ 48 պարտիաներից 40-ն ավարտվեց ոչ-ոքի։ Հինգ ամիս անց հանդիպումը դադարեցվեց առանց արդյունքի, և հաջորդ տարի նոր հանդիպում անցկացվեց։ Կասպարովը հաղթեց և դարձավ աշխարհի չեմպիոն։`,
      `**Самая длинная партия.** В Белграде в 1989 году гроссмейстеры **Иван Николич** и **Горан Арсович** сыграли турнирную партию, которая длилась **269 ходов** и больше 20 часов. В конце концов никто не смог выиграть, и была зафиксирована ничья. Благодаря записи мы и сегодня можем переиграть всю партию ход за ходом.

**Матч без победителя.** В 1984 году **Анатолий Карпов** и **Гарри Каспаров** начали матч за звание чемпиона мира. Победителю нужно было выиграть шесть партий, но игроки раз за разом делали ничьи: 40 партий из 48 закончились вничью! Через пять месяцев матч остановили без результата, а на следующий год сыграли новый. Его выиграл Каспаров и стал чемпионом мира.`,
    ),
    ask(2, {
      en: ["What does \"Nf3\" mean?", ["A pawn goes to f3", "A knight goes to f3", "The queen takes on f3"], "N stands for knight; a pawn move has no letter."],
      hy: ["Ի՞նչ է նշանակում «Nf3»-ը։", ["Զինվորը գնում է f3", "Ձին գնում է f3", "Թագուհին վերցնում է f3-ում"], "N-ը ձին է․ զինվորի քայլը տառ չունի։"],
      ru: ["Что значит «Nf3»?", ["Пешка идёт на f3", "Конь идёт на f3", "Ферзь бьёт на f3"], "N — это конь; ход пешки записывают без буквы."],
    }),
  ],
};
