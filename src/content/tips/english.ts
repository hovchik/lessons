import { tip, type TipSeed } from "./types";

/** English as a foreign language, grades 2–12: memory hacks, pronunciation tricks and exam habits beyond the textbook. */
export const englishTips: TipSeed[] = [
  // ---------- Grade 2 ----------
  tip("english", 2, "label-your-room", "study", ["Stick English labels around your room", "Փակցրու անգլերեն պիտակներ սենյակում", "Расклей английские ярлычки по комнате"], {
    en: `Write **door, window, bed, table, chair, lamp** on sticky notes and put them on the real things. You will read each word twenty times a day without trying.

Change the notes every two weeks: kitchen words, then bathroom words, then clothes.`,
    hy: `Գրիր **door, window, bed, table, chair, lamp** կպչուն թղթիկների վրա և փակցրու իրական իրերին։ Ամեն բառն օրը քսան անգամ կկարդաս՝ առանց ջանքի։

Թղթիկները փոխիր երկու շաբաթը մեկ․ խոհանոցի բառեր, հետո լոգարանի, հետո հագուստի։`,
    ru: `Напиши **door, window, bed, table, chair, lamp** на стикерах и наклей на настоящие предметы. Ты будешь читать каждое слово двадцать раз в день без усилий.

Меняй стикеры каждые две недели: слова кухни, потом ванной, потом одежды.`,
  }),
  tip("english", 2, "colours-song", "memory", ["Sing the alphabet and the colours", "Երգիր այբուբենը և գույները", "Пой алфавит и цвета"], {
    en: `English letters have names that are not their sounds (*A* says "ay", but in *cat* it says "a"). Learn the **names** with the alphabet song and the **sounds** with words.

Colours, days and numbers also stick best as songs. Sing them in the car; nobody minds.`,
    hy: `Անգլերեն տառերն ունեն անուններ, որոնք նրանց հնչյունները չեն (*A*-ն ասում է «էյ», բայց *cat*-ում՝ «ա»)։ **Անունները** սովորիր այբուբենի երգով, **հնչյունները**՝ բառերով։

Գույները, օրերը և թվերը նույնպես երգով են լավագույնս մնում։ Երգիր մեքենայում, ոչ ոք դեմ չի լինի։`,
    ru: `У английских букв есть имена, которые не совпадают со звуками (*A* называется «эй», но в *cat* звучит как «э»). Учи **имена** с песенкой-алфавитом, а **звуки** на словах.

Цвета, дни недели и числа тоже лучше всего запоминаются песенками. Пой их в машине; никто не против.`,
  }),
  tip("english", 2, "th-tongue", "language", ["TH: put your tongue between your teeth", "TH․ լեզուն դիր ատամների արանքում", "TH: язык между зубами"], {
    en: `*This, that, three, thank you*: for the **th** sound, the tip of your tongue touches the edge of your top teeth and you blow. Look in a mirror: you should see the tongue.

Say *three* and *tree* one after the other and feel the difference. Ten times a day in front of the mirror, and in a week it is easy.`,
    hy: `*This, that, three, thank you*․ **th** հնչյունի համար լեզվի ծայրը դիպչում է վերին ատամների եզրին, և դու փչում ես։ Նայիր հայելու մեջ․ պետք է տեսնես լեզուն։

Ասա *three* և *tree* հաջորդաբար և զգա տարբերությունը։ Օրը տասը անգամ հայելու առաջ, և մեկ շաբաթում հեշտ է։`,
    ru: `*This, that, three, thank you*: для звука **th** кончик языка касается края верхних зубов, и ты выдыхаешь. Посмотри в зеркало: язык должен быть виден.

Скажи *three* и *tree* по очереди и почувствуй разницу. Десять раз в день перед зеркалом, и через неделю это легко.`,
  }),

  // ---------- Grade 3 ----------
  tip("english", 3, "magic-e", "memory", ["Magic E makes the vowel say its name", "Հրաշք E-ն ձայնավորին ստիպում է իր անունն ասել", "Волшебная E заставляет гласную назвать своё имя"], {
    en: `*Cat → cate? No: hat → hate, pin → pine, hop → hope, cub → cube.* A silent **e** at the end makes the vowel before it "say its name": a = ay, i = eye, o = oh, u = you.

When you meet a new short word ending in e, try the long vowel first. It works nine times out of ten.`,
    hy: `*Hat → hate, pin → pine, hop → hope, cub → cube*։ Վերջի անձայն **e**-ն ստիպում է նախորդ ձայնավորին «իր անունն ասել»․ a = էյ, i = այ, o = օու, u = յու։

Երբ հանդիպում ես e-ով վերջացող նոր կարճ բառի, սկզբում փորձիր երկար ձայնավորը։ Տասից ինն անգամ աշխատում է։`,
    ru: `*Hat → hate, pin → pine, hop → hope, cub → cube.* Немая **e** на конце заставляет предыдущую гласную «назвать своё имя»: a = эй, i = ай, o = оу, u = ю.

Встретив новое короткое слово на e, сначала попробуй долгую гласную. Работает в девяти случаях из десяти.`,
  }),
  tip("english", 3, "plural-s-sounds", "language", ["Plural S has three sounds", "Հոգնակի S-ն երեք հնչյուն ունի", "У S во множественном числе три звука"], {
    en: `*Cats* ends in /s/, *dogs* ends in /z/, *buses* ends in /ɪz/. Rule: after a quiet sound (t, k, p, f) say **s**; after a noisy one (g, d, b, vowels) say **z**; after s, sh, ch, x add a syllable **-iz**.

Put your hand on your throat: if it buzzes on the last letter of the word, the s buzzes too.`,
    hy: `*Cats*-ը վերջանում է /s/-ով, *dogs*-ը՝ /z/-ով, *buses*-ը՝ /ɪz/-ով։ Կանոն․ խուլ հնչյունից հետո (t, k, p, f) ասա **s**, ձայնեղից հետո (g, d, b, ձայնավորներ)՝ **z**, s, sh, ch, x-ից հետո ավելացրու **-iz** վանկը։

Ձեռքդ դիր կոկորդիդ․ եթե բառի վերջին տառի վրա դողում է, s-ն էլ դողում է։`,
    ru: `*Cats* заканчивается на /s/, *dogs* на /z/, *buses* на /ɪz/. Правило: после глухого звука (t, k, p, f) говори **s**; после звонкого (g, d, b, гласные) **z**; после s, sh, ch, x добавляй слог **-iz**.

Положи руку на горло: если на последней букве слова оно дрожит, s тоже дрожит.`,
  }),
  tip("english", 3, "picture-dictionary", "study", ["Draw your own picture dictionary", "Նկարիր քո սեփական նկարազարդ բառարանը", "Рисуй свой словарь в картинках"], {
    en: `For every new word, draw a tiny picture next to it instead of writing the translation. Your brain connects *apple* straight to the fruit, skipping Armenian or Russian in between.

Ugly drawings work just as well as pretty ones. Ten seconds per word.`,
    hy: `Ամեն նոր բառի կողքին փոքրիկ նկար նկարիր թարգմանություն գրելու փոխարեն։ Ուղեղդ *apple*-ը միանգամից կապում է մրգի հետ՝ շրջանցելով հայերենը կամ ռուսերենը։

Տգեղ նկարները նույնքան լավ են աշխատում, որքան գեղեցիկները։ Տասը վայրկյան ամեն բառի համար։`,
    ru: `К каждому новому слову рисуй крошечную картинку вместо перевода. Мозг связывает *apple* напрямую с фруктом, минуя армянский или русский.

Некрасивые рисунки работают так же хорошо, как красивые. Десять секунд на слово.`,
  }),

  // ---------- Grade 4 ----------
  tip("english", 4, "present-simple-s", "memory", ["He, she, it: the S must sit", "He, she, it․ S-ը պետք է նստի", "He, she, it: S должна сидеть"], {
    en: `In the present simple, **only he/she/it** takes -s: *I play, you play, she plays.* Say the rhyme: *he, she, it, the S must sit.*

Trap: with *does* or *doesn't* the s moves to the helper: *Does she play? She doesn't play.* Never two s's in one verb group.`,
    hy: `Present simple-ում **միայն he/she/it**-ն է -s ստանում․ *I play, you play, she plays*։ Ասա հանգը․ *he, she, it, the S must sit*։

Թակարդ․ *does* կամ *doesn't*-ի հետ s-ը տեղափոխվում է օժանդակ բայի վրա․ *Does she play? She doesn't play*։ Երբեք երկու s մեկ բայախմբում։`,
    ru: `В present simple **только he/she/it** получают -s: *I play, you play, she plays.* Повторяй рифму: *he, she, it, the S must sit.*

Ловушка: с *does* или *doesn't* s переходит к вспомогательному глаголу: *Does she play? She doesn't play.* Никогда две s в одной глагольной группе.`,
  }),
  tip("english", 4, "irregular-verbs-groups", "memory", ["Irregular verbs: learn them in sound families", "Անկանոն բայեր․ սովորիր հնչյունային ընտանիքներով", "Неправильные глаголы: учи семьями по звучанию"], {
    en: `Not alphabetically! Group by pattern:
- **i – a – u**: *sing sang sung, ring rang rung, drink drank drunk, begin began begun*
- **all the same**: *cut cut cut, put put put, let let let*
- **-ought**: *buy bought bought, think thought thought, bring brought brought*
- **ew – own**: *blow blew blown, grow grew grown, know knew known, throw threw thrown*

Five families cover forty verbs. Chant each family like a drum beat.`,
    hy: `Ոչ այբբենական կարգով։ Խմբավորիր օրինաչափությամբ․
- **i – a – u**․ *sing sang sung, ring rang rung, drink drank drunk, begin began begun*
- **բոլորը նույն**․ *cut cut cut, put put put, let let let*
- **-ought**․ *buy bought bought, think thought thought, bring brought brought*
- **ew – own**․ *blow blew blown, grow grew grown, know knew known, throw threw thrown*

Հինգ ընտանիք ծածկում է քառասուն բայ։ Ամեն ընտանիքը կրկնիր թմբուկի հարվածի պես։`,
    ru: `Не по алфавиту! Группируй по образцу:
- **i – a – u**: *sing sang sung, ring rang rung, drink drank drunk, begin began begun*
- **все одинаковые**: *cut cut cut, put put put, let let let*
- **-ought**: *buy bought bought, think thought thought, bring brought brought*
- **ew – own**: *blow blew blown, grow grew grown, know knew known, throw threw thrown*

Пять семей закрывают сорок глаголов. Проговаривай каждую семью как барабанный ритм.`,
  }),
  tip("english", 4, "cartoons-with-subtitles", "study", ["Watch cartoons in English with English subtitles", "Նայիր մուլտֆիլմներ անգլերեն՝ անգլերեն ենթագրերով", "Смотри мультфильмы на английском с английскими субтитрами"], {
    en: `Pick a cartoon you already know in your language and watch it in English with **English** subtitles (not Armenian or Russian ones). You know the story, so you can relax and let the words come.

Twenty minutes a day beats any vocabulary list. Repeat the same episode three times: the third time you will understand almost everything.`,
    hy: `Ընտրիր մուլտֆիլմ, որն արդեն գիտես քո լեզվով, և նայիր անգլերեն **անգլերեն** ենթագրերով (ոչ հայերեն կամ ռուսերեն)։ Պատմությունը գիտես, ուրեմն կարող ես հանգստանալ և թողնել, որ բառերը գան։

Օրը քսան րոպեն ցանկացած բառացանկից լավ է։ Նույն սերիան երեք անգամ կրկնիր․ երրորդ անգամ գրեթե ամեն ինչ կհասկանաս։`,
    ru: `Выбери мультфильм, который уже знаешь на своём языке, и смотри его на английском с **английскими** субтитрами (не армянскими и не русскими). Сюжет известен, значит можно расслабиться и дать словам прийти.

Двадцать минут в день лучше любого списка слов. Повторяй одну серию три раза: на третий раз поймёшь почти всё.`,
  }),

  // ---------- Grade 5 ----------
  tip("english", 5, "time-markers-tenses", "memory", ["Time words choose the tense for you", "Ժամանակի բառերն ընտրում են ժամանակաձևը քո փոխարեն", "Слова-маркеры выбирают время за тебя"], {
    en: `| marker | tense |
|---|---|
| always, usually, every day | present simple |
| now, at the moment, look! | present continuous |
| yesterday, ago, last week, in 2010 | past simple |
| just, already, yet, ever, never, since, for | present perfect |
| tomorrow, next week, I think | future (will) |

Underline the marker in every test sentence first. Half the tense questions are solved before you read the verb.`,
    hy: `| նշան | ժամանակաձև |
|---|---|
| always, usually, every day | present simple |
| now, at the moment, look! | present continuous |
| yesterday, ago, last week, in 2010 | past simple |
| just, already, yet, ever, never, since, for | present perfect |
| tomorrow, next week, I think | future (will) |

Թեստի ամեն նախադասությունում սկզբում ընդգծիր նշանը։ Ժամանակաձևի հարցերի կեսը լուծվում է բայը կարդալուց առաջ։`,
    ru: `| маркер | время |
|---|---|
| always, usually, every day | present simple |
| now, at the moment, look! | present continuous |
| yesterday, ago, last week, in 2010 | past simple |
| just, already, yet, ever, never, since, for | present perfect |
| tomorrow, next week, I think | future (will) |

Сначала подчёркивай маркер в каждом тестовом предложении. Половина вопросов на времена решается до того, как прочитан глагол.`,
  }),
  tip("english", 5, "some-any-rule", "memory", ["SOME in +, ANY in − and ?", "SOME՝ դրականում, ANY՝ բացասականում և հարցում", "SOME в утверждении, ANY в отрицании и вопросе"], {
    en: `*I have **some** money. I don't have **any** money. Do you have **any** money?* Exception: offers and requests use *some* even in questions: *Would you like some tea?*

Same pattern for *somebody/anybody, something/anything, somewhere/anywhere*. One rule, nine words.`,
    hy: `*I have **some** money. I don't have **any** money. Do you have **any** money?* Բացառություն․ առաջարկներում և խնդրանքներում հարցի մեջ էլ *some* է․ *Would you like some tea?*

Նույն օրինաչափությունը *somebody/anybody, something/anything, somewhere/anywhere*-ի համար։ Մեկ կանոն, ինը բառ։`,
    ru: `*I have **some** money. I don't have **any** money. Do you have **any** money?* Исключение: в предложениях и просьбах *some* даже в вопросе: *Would you like some tea?*

Та же схема для *somebody/anybody, something/anything, somewhere/anywhere*. Одно правило, девять слов.`,
  }),
  tip("english", 5, "spaced-repetition-cards", "study", ["Review words on days 1, 3, 7, 30", "Վերանայիր բառերը 1, 3, 7, 30 օրերին", "Повторяй слова на 1, 3, 7 и 30 день"], {
    en: `Write new words on cards (or in a free flashcard app). Review them **tomorrow, in three days, in a week, in a month**. Each review takes a minute and multiplies how long the word stays.

Words you got wrong go back to "tomorrow". Words you got right four times are done forever.`,
    hy: `Նոր բառերը գրիր քարտերի վրա (կամ անվճար ֆլեշքարտերի հավելվածում)։ Վերանայիր **վաղը, երեք օրից, մեկ շաբաթից, մեկ ամսից**։ Ամեն վերանայումը մեկ րոպե է և բազմապատկում է բառի մնալու ժամանակը։

Սխալ հիշած բառերը վերադառնում են «վաղը»։ Չորս անգամ ճիշտ հիշածները ընդմիշտ պատրաստ են։`,
    ru: `Пиши новые слова на карточки (или в бесплатное приложение для карточек). Повторяй **завтра, через три дня, через неделю, через месяц**. Каждое повторение занимает минуту и умножает время, на которое слово останется.

Слова, где ошибся, возвращаются на «завтра». Слова, угаданные четыре раза, выучены навсегда.`,
  }),

  // ---------- Grade 6 ----------
  tip("english", 6, "comparatives-syllables", "memory", ["Short words -er, long words more", "Կարճ բառեր՝ -er, երկար բառեր՝ more", "Короткие слова -er, длинные more"], {
    en: `One syllable: *tall → taller, tallest*. Three or more: *beautiful → more beautiful, the most beautiful*. Two syllables ending in -y: *happy → happier* (y → i).

Four irregulars to chant: *good better best, bad worse worst, far farther farthest, little less least.* Never say *more better*: it is either *more* or *-er*, not both.`,
    hy: `Մեկ վանկ․ *tall → taller, tallest*։ Երեք և ավելի․ *beautiful → more beautiful, the most beautiful*։ Երկու վանկ -y-ով․ *happy → happier* (y → i)։

Չորս անկանոն, որ պետք է կրկնել․ *good better best, bad worse worst, far farther farthest, little less least*։ Երբեք մի ասա *more better*․ կամ *more* է, կամ *-er*, ոչ երկուսը։`,
    ru: `Один слог: *tall → taller, tallest*. Три и больше: *beautiful → more beautiful, the most beautiful*. Два слога на -y: *happy → happier* (y → i).

Четыре неправильных для заучивания: *good better best, bad worse worst, far farther farthest, little less least.* Никогда не говори *more better*: либо *more*, либо *-er*, не оба.`,
  }),
  tip("english", 6, "articles-a-the", "language", ["A for the first time, THE for the second", "A՝ առաջին անգամ, THE՝ երկրորդ", "A в первый раз, THE во второй"], {
    en: `*I saw **a** dog. **The** dog was black.* Use **a/an** when the listener does not yet know which one; **the** when you both know. No article with plurals and uncountables in general statements: *Dogs are friendly. Water is wet.*

Shortcut: can you point at it and the listener knows which one? Then *the*.`,
    hy: `*I saw **a** dog. **The** dog was black.* Օգտագործիր **a/an**, երբ լսողը դեռ չգիտի, թե որը, **the**՝ երբ երկուսն էլ գիտեք։ Հոդ չկա հոգնակիի և անհաշվելիների հետ ընդհանուր հայտարարություններում․ *Dogs are friendly. Water is wet.*

Հնարք․ կարո՞ղ ես մատնացույց անել, և լսողը գիտի, թե որը։ Ուրեմն *the*։`,
    ru: `*I saw **a** dog. **The** dog was black.* Используй **a/an**, когда слушатель ещё не знает, о каком именно; **the**, когда вы оба знаете. Без артикля множественное число и неисчисляемые в общих утверждениях: *Dogs are friendly. Water is wet.*

Приём: можешь показать пальцем, и слушатель поймёт, какой именно? Тогда *the*.`,
  }),
  tip("english", 6, "shadowing", "study", ["Shadow a native speaker for two minutes", "Երկու րոպե «ստվերիր» բնիկ խոսողին", "Повторяй за носителем две минуты"], {
    en: `Play a short clip (a song chorus, a cartoon line) and **repeat it aloud at the same time**, copying the rhythm and melody, not just the words. This is called shadowing. Two minutes a day fixes pronunciation faster than any rule.

Record yourself once a month and compare. You will hear the progress.`,
    hy: `Միացրու կարճ հատված (երգի կրկներգ, մուլտֆիլմի տող) և **բարձրաձայն կրկնիր միաժամանակ**՝ պատճենելով ռիթմն ու մեղեդին, ոչ միայն բառերը։ Սա կոչվում է shadowing։ Օրը երկու րոպեն արտասանությունն ուղղում է ավելի արագ, քան ցանկացած կանոն։

Ամիսը մեկ ձայնագրիր քեզ և համեմատիր։ Առաջընթացը կլսես։`,
    ru: `Включи короткий фрагмент (припев песни, фразу из мультфильма) и **повторяй вслух одновременно**, копируя ритм и мелодию, а не только слова. Это называется shadowing. Две минуты в день исправляют произношение быстрее любого правила.

Записывай себя раз в месяц и сравнивай. Прогресс будет слышен.`,
  }),

  // ---------- Grade 7 ----------
  tip("english", 7, "present-perfect-vs-past", "memory", ["Finished time? Past simple. Open time? Present perfect", "Ավարտված ժամանա՞կ․ past simple։ Բա՞ց․ present perfect", "Время закрыто? Past simple. Открыто? Present perfect"], {
    en: `Ask: is the time period **over**? *Yesterday, in 2015, last month* are over → past simple: *I saw him yesterday.* *Today, this week, ever, in my life* are still open → present perfect: *I have seen him today.*

American films use past simple more loosely, but exams follow the British rule above.`,
    hy: `Հարցրու․ ժամանակահատվածն **ավարտվա՞ծ** է։ *Yesterday, in 2015, last month*-ն ավարտված են → past simple․ *I saw him yesterday*։ *Today, this week, ever, in my life*-ը դեռ բաց են → present perfect․ *I have seen him today*։

Ամերիկյան ֆիլմերը past simple-ն ավելի ազատ են օգտագործում, բայց քննությունները հետևում են վերևի բրիտանական կանոնին։`,
    ru: `Спроси: период времени **закончился**? *Yesterday, in 2015, last month* закончились → past simple: *I saw him yesterday.* *Today, this week, ever, in my life* ещё открыты → present perfect: *I have seen him today.*

Американские фильмы используют past simple свободнее, но экзамены следуют британскому правилу выше.`,
  }),
  tip("english", 7, "word-formation-suffixes", "language", ["Guess the part of speech from the ending", "Գուշակիր խոսքի մասը վերջավորությունից", "Угадывай часть речи по окончанию"], {
    en: `- **-tion, -ness, -ment, -ity** → noun (*information, kindness*)
- **-ful, -less, -ous, -ive, -al** → adjective (*careful, dangerous*)
- **-ly** → adverb (*quickly*), but *friendly, lovely* are adjectives
- **-ize, -ify, -en** → verb (*realize, widen*)

In word-formation tasks, first decide **what part of speech the gap needs** (what comes before and after), then pick the suffix. Meaning second, grammar first.`,
    hy: `- **-tion, -ness, -ment, -ity** → գոյական (*information, kindness*)
- **-ful, -less, -ous, -ive, -al** → ածական (*careful, dangerous*)
- **-ly** → մակբայ (*quickly*), բայց *friendly, lovely* ածական են
- **-ize, -ify, -en** → բայ (*realize, widen*)

Բառակազմության առաջադրանքներում սկզբում որոշիր, **խոսքի ո՞ր մասն է պետք բացին** (ինչ է առաջ և հետո), հետո ընտրիր վերջածանցը։ Իմաստը երկրորդ, քերականությունը առաջին։`,
    ru: `- **-tion, -ness, -ment, -ity** → существительное (*information, kindness*)
- **-ful, -less, -ous, -ive, -al** → прилагательное (*careful, dangerous*)
- **-ly** → наречие (*quickly*), но *friendly, lovely* прилагательные
- **-ize, -ify, -en** → глагол (*realize, widen*)

В заданиях на словообразование сначала решай, **какая часть речи нужна в пропуске** (что стоит до и после), потом выбирай суффикс. Смысл второй, грамматика первая.`,
  }),
  tip("english", 7, "read-graded-readers", "study", ["Read books where you know 95 % of the words", "Կարդա գրքեր, որտեղ բառերի 95 %-ը գիտես", "Читай книги, где знаешь 95 % слов"], {
    en: `A book is the right level if you meet about **one unknown word per page**. More than that and you are decoding, not reading. Graded readers (levels A2, B1) exist for exactly this.

Do not look up every word. Guess from context, and look up only words you meet three times. A book a month changes your English more than any grammar unit.`,
    hy: `Գիրքը ճիշտ մակարդակի է, եթե **մեկ էջում մոտ մեկ անծանոթ բառ** ես հանդիպում։ Ավելի շատ, և դու վերծանում ես, ոչ կարդում։ Հարմարեցված գրքերը (A2, B1 մակարդակներ) հենց սրա համար են։

Ամեն բառը մի փնտրիր։ Գուշակիր համատեքստից և փնտրիր միայն երեք անգամ հանդիպած բառերը։ Ամիսը մեկ գիրքն անգլերենդ փոխում է ավելի, քան ցանկացած քերականական բաժին։`,
    ru: `Книга подходит по уровню, если встречаешь примерно **одно незнакомое слово на страницу**. Больше, и ты расшифровываешь, а не читаешь. Адаптированные книги (уровни A2, B1) существуют именно для этого.

Не смотри каждое слово. Угадывай из контекста и ищи только слова, встреченные трижды. Книга в месяц меняет твой английский больше любого раздела грамматики.`,
  }),

  // ---------- Grade 8 ----------
  tip("english", 8, "conditionals-ladder", "memory", ["Conditionals: step one tense back for each type", "Պայմանականներ․ ամեն տեսակի համար մեկ ժամանակ ետ", "Условные: на каждый тип шаг назад по времени"], {
    en: `| type | if-clause | main clause | meaning |
|---|---|---|---|
| 0 | present | present | always true |
| 1 | present | will + verb | real future |
| 2 | past | would + verb | unreal now |
| 3 | past perfect | would have + V3 | unreal past |

Going down the table, the *if*-verb steps one tense **back** each time. Never put *will* inside the if-clause.`,
    hy: `| տեսակ | if-մաս | գլխավոր մաս | իմաստ |
|---|---|---|---|
| 0 | present | present | միշտ ճիշտ |
| 1 | present | will + բայ | իրական ապագա |
| 2 | past | would + բայ | անիրական հիմա |
| 3 | past perfect | would have + V3 | անիրական անցյալ |

Աղյուսակով ներքև գնալիս *if*-ի բայը ամեն անգամ մեկ ժամանակ **ետ** է գնում։ *Will*-ը երբեք մի դիր if-մասի մեջ։`,
    ru: `| тип | if-часть | главная часть | смысл |
|---|---|---|---|
| 0 | present | present | всегда верно |
| 1 | present | will + глагол | реальное будущее |
| 2 | past | would + глагол | нереальное сейчас |
| 3 | past perfect | would have + V3 | нереальное прошлое |

Двигаясь по таблице вниз, глагол после *if* каждый раз делает шаг **назад** во времени. Никогда не ставь *will* в if-часть.`,
  }),
  tip("english", 8, "phrasal-verbs-by-particle", "language", ["Phrasal verbs: learn the particle, not the verb", "Դարձվածային բայեր․ սովորիր մասնիկը, ոչ բայը", "Фразовые глаголы: учи частицу, а не глагол"], {
    en: `**Up** often means *completely* or *increase*: *eat up, use up, grow up, speed up, turn up*. **Out** often means *disappear / to the end*: *run out, die out, put out, find out*. **On** means *continue*: *go on, carry on, keep on*.

Learn the feeling of each particle and half of the new phrasal verbs become guessable.`,
    hy: `**Up**-ը հաճախ նշանակում է *ամբողջովին* կամ *աճ*․ *eat up, use up, grow up, speed up, turn up*։ **Out**-ը հաճախ՝ *անհետանալ / մինչև վերջ*․ *run out, die out, put out, find out*։ **On**-ը՝ *շարունակել*․ *go on, carry on, keep on*։

Սովորիր ամեն մասնիկի զգացողությունը, և նոր դարձվածային բայերի կեսը գուշակելի է դառնում։`,
    ru: `**Up** часто значит *полностью* или *рост*: *eat up, use up, grow up, speed up, turn up*. **Out** часто значит *исчезнуть / до конца*: *run out, die out, put out, find out*. **On** значит *продолжать*: *go on, carry on, keep on*.

Выучи ощущение каждой частицы, и половина новых фразовых глаголов станет угадываемой.`,
  }),
  tip("english", 8, "listening-predict", "exam", ["Listening: predict before the audio starts", "Լսողություն․ գուշակիր նախքան աուդիոն սկսվի", "Аудирование: предсказывай до начала записи"], {
    en: `In the pause before a listening task, read the questions and **guess** the type of answer: a number, a place, a day, a feeling. Write a tiny mark next to each. Then you listen *for* something instead of to everything.

Never leave a gap blank. A guess from your prediction is right surprisingly often.`,
    hy: `Լսողության առաջադրանքից առաջ դադարում կարդա հարցերը և **գուշակիր** պատասխանի տեսակը․ թիվ, վայր, օր, զգացմունք։ Ամեն մեկի կողքին փոքր նշան դիր։ Հետո դու լսում ես *ինչ-որ բանի համար*, ոչ թե ամեն ինչ։

Երբեք բաց մի թող։ Գուշակությունից եկած պատասխանը զարմանալի հաճախ ճիշտ է։`,
    ru: `В паузе перед аудированием прочитай вопросы и **предскажи** тип ответа: число, место, день, чувство. Поставь крошечную пометку рядом с каждым. Тогда ты слушаешь *ради* чего-то, а не всё подряд.

Никогда не оставляй пропуск пустым. Догадка из предсказания верна удивительно часто.`,
  }),

  // ---------- Grade 9 ----------
  tip("english", 9, "reported-speech-shift", "memory", ["Reported speech: one step back, pointers change", "Անուղղակի խոսք․ մեկ քայլ ետ, ցուցիչները փոխվում են", "Косвенная речь: шаг назад, указатели меняются"], {
    en: `*"I **am** tired **today**," she said → She said she **was** tired **that day**.* Tenses step back (am → was, will → would, did → had done) and pointers change: *now → then, here → there, this → that, tomorrow → the next day, ago → before*.

Make one cheat line: *am-was, will-would, can-could, did-had done, today-that day*. It covers 90 % of exam items.`,
    hy: `*"I **am** tired **today**," she said → She said she **was** tired **that day**.* Ժամանակաձևերը մեկ քայլ ետ են գնում (am → was, will → would, did → had done), ցուցիչները փոխվում են․ *now → then, here → there, this → that, tomorrow → the next day, ago → before*։

Կազմիր մեկ հուշատող․ *am-was, will-would, can-could, did-had done, today-that day*։ Քննական հարցերի 90 %-ը ծածկում է։`,
    ru: `*"I **am** tired **today**," she said → She said she **was** tired **that day**.* Времена сдвигаются назад (am → was, will → would, did → had done), а указатели меняются: *now → then, here → there, this → that, tomorrow → the next day, ago → before*.

Составь одну строку-шпаргалку: *am-was, will-would, can-could, did-had done, today-that day*. Она закрывает 90 % экзаменационных пунктов.`,
  }),
  tip("english", 9, "email-template", "exam", ["Informal email: the fixed frame", "Ոչ պաշտոնական նամակ․ կայուն շրջանակ", "Неформальное письмо: готовая рамка"], {
    en: `*Dear Tom,* → *Thanks for your email. It was great to hear from you.* → answer the three questions, one short paragraph each → *Sorry, I have to go now. Write back soon!* → *Best wishes, Ani.*

Learn this frame by heart. In the exam you only write the middle, which saves five minutes and guarantees the format points.`,
    hy: `*Dear Tom,* → *Thanks for your email. It was great to hear from you.* → պատասխանիր երեք հարցին, ամեն մեկը մեկ կարճ պարբերությամբ → *Sorry, I have to go now. Write back soon!* → *Best wishes, Ani.*

Այս շրջանակը անգիր սովորիր։ Քննությանը գրում ես միայն մեջտեղը, որը հինգ րոպե է խնայում և ձևաչափի բալերը երաշխավորում։`,
    ru: `*Dear Tom,* → *Thanks for your email. It was great to hear from you.* → ответь на три вопроса, по короткому абзацу на каждый → *Sorry, I have to go now. Write back soon!* → *Best wishes, Ani.*

Выучи эту рамку наизусть. На экзамене пишешь только середину, что экономит пять минут и гарантирует баллы за формат.`,
  }),
  tip("english", 9, "speak-to-yourself", "study", ["Narrate your day in English", "Պատմիր քո օրը անգլերեն", "Рассказывай свой день по-английски"], {
    en: `Walking to school, describe what you see in your head: *A woman is waiting for the bus. It is going to rain.* Cooking: *I am cutting the onions.* Nobody hears, nobody judges, and you practise tenses a hundred times a day.

When a word is missing, note it and look it up at home. Those are exactly the words you need.`,
    hy: `Դպրոց քայլելիս մտքում նկարագրիր, թե ինչ ես տեսնում․ *A woman is waiting for the bus. It is going to rain.* Ճաշ պատրաստելիս․ *I am cutting the onions.* Ոչ ոք չի լսում, ոչ ոք չի դատում, և դու ժամանակաձևերը օրը հարյուր անգամ ես վարժեցնում։

Երբ բառ է պակասում, նշիր և տանը նայիր։ Հենց դրանք են քեզ պետք բառերը։`,
    ru: `Идя в школу, описывай в голове то, что видишь: *A woman is waiting for the bus. It is going to rain.* Готовя: *I am cutting the onions.* Никто не слышит, никто не судит, а ты тренируешь времена сто раз в день.

Когда слова не хватает, отметь его и посмотри дома. Именно эти слова тебе и нужны.`,
  }),

  // ---------- Grade 10 ----------
  tip("english", 10, "collocations-not-words", "language", ["Learn collocations, not single words", "Սովորիր բառակապակցություններ, ոչ առանձին բառեր", "Учи сочетания, а не отдельные слова"], {
    en: `Native speakers *make* a decision, *take* a photo, *do* homework, *have* a shower, *heavy* rain, *strong* coffee. The words are easy; the **partners** are what exams test and what makes you sound natural.

Write every new noun with its verb: not *decision* but *make a decision*. Not *mistake* but *make a mistake*, never *do a mistake*.`,
    hy: `Բնիկ խոսողները *make* a decision, *take* a photo, *do* homework, *have* a shower, *heavy* rain, *strong* coffee։ Բառերը հեշտ են, **զուգընկերներն** են, որ քննությունները ստուգում են և որ քեզ բնական են հնչեցնում։

Ամեն նոր գոյականը գրիր իր բայի հետ․ ոչ *decision*, այլ *make a decision*։ Ոչ *mistake*, այլ *make a mistake*, երբեք *do a mistake*։`,
    ru: `Носители *make* a decision, *take* a photo, *do* homework, *have* a shower, *heavy* rain, *strong* coffee. Слова просты; **партнёры** это то, что проверяют экзамены и что делает речь естественной.

Записывай каждое новое существительное с его глаголом: не *decision*, а *make a decision*. Не *mistake*, а *make a mistake*, никогда *do a mistake*.`,
  }),
  tip("english", 10, "reading-skim-scan", "exam", ["Skim for the idea, scan for the detail", "Skim՝ գաղափարի համար, scan՝ մանրամասնի", "Skim ради идеи, scan ради детали"], {
    en: `Two different reading speeds for two question types. **Skim** (30 seconds, first lines of paragraphs) for "what is the text mainly about". **Scan** (eyes jump looking for a name, number or keyword) for detail questions.

Never read an exam text slowly from start to finish first; you will run out of time before the last text.`,
    hy: `Երկու տարբեր ընթերցման արագություն երկու տեսակի հարցի համար։ **Skim** (30 վայրկյան, պարբերությունների առաջին տողերը)՝ «ինչի մասին է տեքստը» հարցի համար։ **Scan** (աչքերը թռչում են անուն, թիվ կամ հիմնաբառ փնտրելով)՝ մանրամասն հարցերի համար։

Երբեք քննական տեքստը սկզբից վերջ դանդաղ մի կարդա սկզբում․ վերջին տեքստից առաջ ժամանակը կվերջանա։`,
    ru: `Две разные скорости чтения для двух типов вопросов. **Skim** (30 секунд, первые строки абзацев) для «о чём текст в целом». **Scan** (глаза прыгают в поисках имени, числа или ключевого слова) для вопросов на детали.

Никогда не читай экзаменационный текст медленно от начала до конца сначала; время закончится до последнего текста.`,
  }),
  tip("english", 10, "false-friends", "memory", ["False friends: words that lie", "Կեղծ ընկերներ․ բառեր, որ խաբում են", "Ложные друзья: слова, которые обманывают"], {
    en: `*Magazine* is a журнал, not a shop. *Accurate* means precise, not neat (аккуратный). *Actual* means real, not current (актуальный). *Sympathetic* means compassionate, not nice-looking (симпатичный). *Fabric* is cloth, not a factory.

Keep a page of these. Each one you know is a trap you will not fall into in a translation task.`,
    hy: `*Magazine*-ը ամսագիր է, ոչ խանութ։ *Accurate*-ը ճշգրիտ է, ոչ կոկիկ։ *Actual*-ը իրական է, ոչ արդիական։ *Sympathetic*-ը կարեկից է, ոչ համակրելի արտաքինով։ *Fabric*-ը գործվածք է, ոչ ֆաբրիկա։

Պահիր այսպիսի բառերի մեկ էջ։ Ամեն գիտածդ մեկ թակարդ է, որի մեջ թարգմանական առաջադրանքում չես ընկնի։`,
    ru: `*Magazine* это журнал, а не магазин. *Accurate* значит точный, а не аккуратный. *Actual* значит реальный, а не актуальный. *Sympathetic* значит сочувствующий, а не симпатичный. *Fabric* это ткань, а не фабрика.

Веди страницу таких слов. Каждое известное это ловушка, в которую ты не попадёшь при переводе.`,
  }),

  // ---------- Grade 11 ----------
  tip("english", 11, "essay-opinion-structure", "exam", ["Opinion essay: four paragraphs, fixed roles", "Կարծիքի էսսե․ չորս պարբերություն, կայուն դերեր", "Эссе-мнение: четыре абзаца с фиксированными ролями"], {
    en: `1. **Introduction**: restate the question in your words, state your opinion.
2. **Your side**: two reasons, each with an example.
3. **The other side**: one opposing argument, then why you still disagree.
4. **Conclusion**: opinion again, different words.

Linking words that graders look for: *Firstly, Moreover, However, On the other hand, In conclusion.* One per paragraph is enough.`,
    hy: `1. **Ներածություն**․ հարցը քո բառերով, քո կարծիքը։
2. **Քո կողմը**․ երկու պատճառ, ամեն մեկը օրինակով։
3. **Մյուս կողմը**․ մեկ հակառակ փաստարկ, հետո ինչու դու դեռ համաձայն չես։
4. **Եզրակացություն**․ կարծիքը նորից, այլ բառերով։

Կապող բառեր, որ գնահատողները փնտրում են․ *Firstly, Moreover, However, On the other hand, In conclusion*։ Մեկը ամեն պարբերությունում բավական է։`,
    ru: `1. **Введение**: переформулируй вопрос своими словами, вырази мнение.
2. **Твоя сторона**: две причины, каждая с примером.
3. **Другая сторона**: один контраргумент, потом почему ты всё же не согласен.
4. **Вывод**: мнение снова, другими словами.

Связки, которые ищут проверяющие: *Firstly, Moreover, However, On the other hand, In conclusion.* По одной на абзац достаточно.`,
  }),
  tip("english", 11, "inversion-and-emphasis", "language", ["Three advanced structures that impress graders", "Երեք բարդ կառուցվածք, որ տպավորում են գնահատողներին", "Три продвинутые конструкции, впечатляющие проверяющих"], {
    en: `- **Inversion**: *Not only did he win, but he also broke the record.* / *Rarely have I seen such courage.*
- **Cleft sentence**: *It was the teacher who helped me.* / *What matters is practice.*
- **Participle clause**: *Having finished the test, she left.*

Use **one** of each in an essay, no more. Three correct advanced structures lift a B1 text to B2 in the grader's eyes.`,
    hy: `- **Շրջուն դասավորություն**․ *Not only did he win, but he also broke the record.* / *Rarely have I seen such courage.*
- **Ընդգծող կառուցվածք**․ *It was the teacher who helped me.* / *What matters is practice.*
- **Դերբայական դարձված**․ *Having finished the test, she left.*

Օգտագործիր ամեն մեկից **մեկ** էսսեում, ոչ ավելի։ Երեք ճիշտ բարդ կառուցվածք B1 տեքստը գնահատողի աչքում B2 է դարձնում։`,
    ru: `- **Инверсия**: *Not only did he win, but he also broke the record.* / *Rarely have I seen such courage.*
- **Выделительная конструкция**: *It was the teacher who helped me.* / *What matters is practice.*
- **Причастный оборот**: *Having finished the test, she left.*

Используй по **одной** каждой в эссе, не больше. Три правильные продвинутые конструкции поднимают текст с B1 до B2 в глазах проверяющего.`,
  }),
  tip("english", 11, "podcasts-at-speed", "study", ["Listen to real podcasts at 0.8, then 1.0, then 1.2", "Լսիր իսկական փոդքասթներ 0,8, հետո 1,0, հետո 1,2 արագությամբ", "Слушай настоящие подкасты на 0,8, потом 1,0, потом 1,2"], {
    en: `Exam audio is slow and clear; real English is not. Take a podcast on a topic you like, listen at **0.8×** speed until comfortable, then 1.0×, then **1.2×**. After a month at 1.2×, exam recordings feel like slow motion.

Ten minutes a day while walking is enough. Do not stop to look up words; the goal is the ear, not the vocabulary.`,
    hy: `Քննական աուդիոն դանդաղ է և պարզ, իսկական անգլերենը՝ ոչ։ Վերցրու փոդքասթ քեզ հետաքրքրող թեմայով, լսիր **0,8×** արագությամբ, մինչև հարմարավետ դառնա, հետո 1,0×, հետո **1,2×**։ Մեկ ամիս 1,2×-ից հետո քննական ձայնագրությունները դանդաղեցված են թվում։

Օրը տասը րոպե քայլելիս բավական է։ Բառեր փնտրելու համար կանգ մի առ․ նպատակը լսողությունն է, ոչ բառապաշարը։`,
    ru: `Экзаменационные записи медленные и чёткие; настоящий английский нет. Возьми подкаст на интересную тему, слушай на **0,8×**, пока не станет комфортно, потом 1,0×, потом **1,2×**. После месяца на 1,2× экзаменационные записи кажутся замедленными.

Десяти минут в день на прогулке достаточно. Не останавливайся искать слова; цель это слух, а не словарь.`,
  }),

  // ---------- Grade 12 ----------
  tip("english", 12, "exam-word-count", "exam", ["Count words by lines, not one by one", "Հաշվիր բառերը տողերով, ոչ մեկ-մեկ", "Считай слова строками, а не по одному"], {
    en: `Count the words in your first three full lines, take the average (say 9), and from then on count **lines** only. A 250-word essay is about 28 of your lines. Mark that line in advance with a small tick.

Going 10 % over the limit costs nothing; going 20 % under loses points on every criterion. Aim slightly over.`,
    hy: `Հաշվիր բառերը առաջին երեք լրիվ տողերում, վերցրու միջինը (ասենք 9), և այդուհետ հաշվիր միայն **տողերը**։ 250 բառի էսսեն մոտ 28 քո տող է։ Այդ տողը նախապես նշիր փոքր նշանով։

Սահմանից 10 % ավել գնալը ոչինչ չի արժենում, 20 % պակասը բալ կորցնում է ամեն չափանիշով։ Նշանակետը մի փոքր ավելին է։`,
    ru: `Посчитай слова в первых трёх полных строках, возьми среднее (скажем 9), и дальше считай только **строки**. Эссе в 250 слов это примерно 28 твоих строк. Отметь эту строку заранее маленькой галочкой.

Превышение на 10 % ничего не стоит; недобор в 20 % теряет баллы по каждому критерию. Целься чуть выше нормы.`,
  }),
  tip("english", 12, "speaking-buy-time", "exam", ["Speaking: phrases that buy you three seconds", "Խոսք․ արտահայտություններ, որ երեք վայրկյան են շահում", "Говорение: фразы, которые дают три секунды"], {
    en: `When your mind goes blank, do not say *эээ*. Say: *That's an interesting question. Let me think… Well, I'd say that… To be honest, …* Each buys time and sounds fluent.

Practise five such fillers until they are automatic. Examiners score fluency, and silence is the only thing that truly hurts it.`,
    hy: `Երբ միտքդ դատարկվում է, մի ասա *էէէ*։ Ասա․ *That's an interesting question. Let me think… Well, I'd say that… To be honest, …* Ամեն մեկը ժամանակ է շահում և սահուն է հնչում։

Վարժեցրու հինգ այսպիսի արտահայտություն, մինչև ավտոմատ դառնան։ Քննողները սահունությունը գնահատում են, և լռությունն է միակ բանը, որ իսկապես վնասում է։`,
    ru: `Когда в голове пусто, не говори *эээ*. Говори: *That's an interesting question. Let me think… Well, I'd say that… To be honest, …* Каждая фраза даёт время и звучит бегло.

Отработай пять таких заполнителей до автоматизма. Экзаменаторы оценивают беглость, и только тишина по-настоящему ей вредит.`,
  }),
  tip("english", 12, "error-log-by-type", "study", ["Sort your mistakes into five boxes", "Սխալներդ դասավորիր հինգ արկղում", "Сортируй ошибки по пяти коробкам"], {
    en: `After every practice test, sort each error into: **articles**, **tenses**, **prepositions**, **word order**, **vocabulary**. After three tests one box will be fuller than the others. That box is where your next two weeks go.

Fixing your single biggest category usually gains more points than studying everything a little.`,
    hy: `Ամեն փորձնական թեստից հետո ամեն սխալը դասավորիր․ **հոդեր**, **ժամանակաձևեր**, **նախդիրներ**, **բառերի դասավորություն**, **բառապաշար**։ Երեք թեստից հետո մեկ արկղն ավելի լիքն է լինում։ Այդ արկղն է, որտեղ հաջորդ երկու շաբաթդ պետք է գնա։

Քո ամենամեծ կատեգորիան ուղղելը սովորաբար ավելի շատ բալ է բերում, քան ամեն ինչ քիչ-քիչ սովորելը։`,
    ru: `После каждого тренировочного теста рассортируй ошибки: **артикли**, **времена**, **предлоги**, **порядок слов**, **лексика**. После трёх тестов одна коробка окажется полнее других. Туда идут твои следующие две недели.

Исправление единственной самой большой категории обычно приносит больше баллов, чем изучение всего по чуть-чуть.`,
  }),
];
