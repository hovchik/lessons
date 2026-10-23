import { q, t, unit, type CourseSeed, type UnitSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

const course = (
  grade: number,
  description: [string, string, string],
  am: [string, string, string],
  ru: [string, string, string],
  hours: { armenia: number | null; russia: number | null },
  units: UnitSeed[],
): CourseSeed => ({
  subject: "english",
  grade,
  title: t(`English · Grade ${grade}`, `Անգլերեն · ${grade}-րդ դասարան`, `Английский язык · ${grade} класс`),
  description: t(...description),
  curriculumNotes: notes(am, ru),
  hoursPerWeek: hours,
  units,
});

export const english: CourseSeed[] = [
  course(
    2,
    ["First English: greetings, the alphabet, colours, numbers 1–10, family and toys, through songs, games and pictures.", "Առաջին անգլերեն՝ ողջույններ, այբուբեն, գույներ, 1–10 թվեր, ընտանիք և խաղալիքներ՝ երգերի, խաղերի և նկարների միջոցով։", "Первый английский: приветствия, алфавит, цвета, числа 1–10, семья и игрушки — через песни, игры и картинки."],
    ["Armenia: a foreign language officially starts in grade 3, but many schools offer an optional oral English club in grade 2. This course is purely oral and playful: no reading or writing is required.", "Հայաստան․ օտար լեզուն պաշտոնապես սկսվում է 3-րդ դասարանից, սակայն շատ դպրոցներ 2-րդում առաջարկում են բանավոր անգլերենի խմբակ։ Դասընթացը բանավոր է և խաղային՝ կարդալ-գրել չի պահանջվում։", "Армения: иностранный язык официально начинается с 3 класса, но многие школы предлагают во 2 классе устный кружок английского. Курс устный и игровой, чтение и письмо не требуются."],
    ["Russia grade 2 (ФГОС НОО, 2 h/week): first year of the foreign language — alphabet and sounds, greetings, name and age, family, colours, numbers 1–10, toys and pets, simple «I have / I like / It is» structures.", "Ռուսաստան, 2-րդ դասարան (ФГОС НОО, 2 ժ/շաբ.)՝ օտար լեզվի առաջին տարի․ այբուբեն և հնչյուններ, ողջույններ, անուն և տարիք, ընտանիք, գույներ, 1–10 թվեր, խաղալիքներ և կենդանիներ, «I have / I like / It is» կառույցներ։", "Россия, 2 класс (ФГОС НОО, 2 ч/нед.): первый год иностранного языка — алфавит и звуки, приветствия, имя и возраст, семья, цвета, числа 1–10, игрушки и питомцы, простые структуры «I have / I like / It is»."],
    { armenia: null, russia: 2 },
    [
      unit(t("Hello, English!", "Բարև, անգլերեն", "Привет, английский!"), t("Greetings, names, the alphabet song.", "Ողջույններ, անուններ, այբուբենի երգը։", "Приветствия, имена, песенка про алфавит."), [
        ["hello-goodbye", "Hello and goodbye", "Բարև և ցտեսություն", "Hello и goodbye"],
        ["whats-your-name", "What's your name?", "Ի՞նչ է քո անունը", "Как тебя зовут?"],
        ["abc-song", "The ABC song", "ABC երգը", "Песенка ABC"],
        ["letters-a-m", "Letters A–M and their sounds", "A–M տառերը և հնչյունները", "Буквы A–M и их звуки"],
        ["letters-n-z", "Letters N–Z and their sounds", "N–Z տառերը և հնչյունները", "Буквы N–Z и их звуки"],
      ]),
      unit(t("Colours and numbers", "Գույներ և թվեր", "Цвета и числа"), t("Ten colours, counting to ten, «How many?».", "Տասը գույն, հաշվել մինչև տասը, «How many?»։", "Десять цветов, счёт до десяти, «How many?»."), [
        ["colours", "Red, blue, yellow: colours", "Red, blue, yellow․ գույները", "Red, blue, yellow: цвета"],
        ["numbers-1-10", "Numbers 1–10", "1–10 թվերը", "Числа 1–10"],
        ["how-many", "How many? Counting things", "How many? Հաշվում ենք", "How many? Считаем предметы"],
        ["how-old-are-you", "How old are you?", "Քանի՞ տարեկան ես", "Сколько тебе лет?"],
      ]),
      unit(t("My family and my toys", "Իմ ընտանիքը և խաղալիքները", "Моя семья и мои игрушки"), t("Family words, «This is my…», «I have got…».", "Ընտանիքի անդամներ, «This is my…», «I have got…»։", "Слова о семье, «This is my…», «I have got…»."), [
        ["my-family", "This is my family", "Սա իմ ընտանիքն է", "Это моя семья"],
        ["i-have-got", "I have got a ball", "I have got a ball", "У меня есть мяч: I have got"],
        ["toys", "Toys: a doll, a car, a teddy bear", "Խաղալիքներ․ doll, car, teddy bear", "Игрушки: doll, car, teddy bear"],
        ["pets", "Pets: a cat, a dog, a fish", "Կենդանիներ․ cat, dog, fish", "Питомцы: cat, dog, fish"],
      ]),
      unit(t("I can and I like", "Կարողանում եմ, սիրում եմ", "Я умею и я люблю"), t("Verbs of action, «I can jump», food and «I like».", "Գործողության բայեր, «I can jump», սնունդ և «I like»։", "Глаголы действия, «I can jump», еда и «I like»."), [
        ["i-can", "I can run, I can jump", "I can run, I can jump", "I can run, I can jump"],
        ["food-i-like", "Food: I like apples", "Սնունդ․ I like apples", "Еда: I like apples"],
        ["body-parts", "Head, shoulders, knees and toes", "Head, shoulders, knees and toes", "Head, shoulders, knees and toes"],
        ["year-2-review", "Review: my English picture dictionary", "Ամփոփում․ իմ նկարազարդ բառարանը", "Повторение: мой словарь в картинках"],
      ]),
    ],
  ),

  course(
    3,
    ["Reading and writing begin: phonics, short words and sentences, «to be» and «have got», school, home, days and the time.", "Սկսվում են ընթերցանությունն ու գիրը․ հնչյունաբանություն, կարճ բառեր և նախադասություններ, «to be» և «have got», դպրոց, տուն, շաբաթվա օրեր և ժամ։", "Начинаются чтение и письмо: фонетика, короткие слова и предложения, «to be» и «have got», школа, дом, дни недели и время."],
    ["Armenia grade 3 (first official year of the foreign language, 2 h/week): the state standard expects pupils to greet, introduce themselves, name school objects, colours, numbers to 20, read and copy short words. Textbooks follow a phonics-first approach.", "Հայաստան, 3-րդ դասարան (օտար լեզվի առաջին պաշտոնական տարի, 2 ժ/շաբ.)՝ չափորոշիչը պահանջում է ողջունել, ներկայանալ, անվանել դպրոցական առարկաները, գույները, թվերը մինչև 20, կարդալ և արտագրել կարճ բառեր։", "Армения, 3 класс (первый официальный год иностранного языка, 2 ч/нед.): стандарт ожидает умения приветствовать, представляться, называть школьные предметы, цвета, числа до 20, читать и списывать короткие слова."],
    ["Russia grade 3 (2 h/week): second year — reading rules for vowels in open/closed syllables, present simple with «to be», «have got», «can», there is/there are, plural nouns, numbers to 100, school, food, free time, seasons.", "Ռուսաստան, 3-րդ դասարան (2 ժ/շաբ.)՝ երկրորդ տարի․ ձայնավորների ընթերցանության կանոններ բաց/փակ վանկում, present simple «to be»-ով, «have got», «can», there is/are, հոգնակի, թվեր մինչև 100, դպրոց, սնունդ, ազատ ժամանակ, եղանակներ։", "Россия, 3 класс (2 ч/нед.): второй год — правила чтения гласных в открытом/закрытом слоге, present simple с «to be», «have got», «can», there is/there are, множественное число, числа до 100, школа, еда, досуг, времена года."],
    { armenia: 2, russia: 2 },
    [
      {
        title: t("Welcome back", "Բարի վերադարձ", "С возвращением"),
        summary: t("Introducing yourself, the verb «to be», the alphabet in reading.", "Ներկայանալ, «to be» բայը, այբուբենը ընթերցանության մեջ։", "Представляемся, глагол «to be», алфавит в чтении."),
        lessons: [
          {
            slug: "hello-my-name-is",
            title: t("Hello! My name is…", "Բարև, իմ անունը … է", "Привет! Меня зовут…"),
            durationMin: 45,
            objectives: {
              en: ["Greet a friend and say goodbye", "Introduce yourself with «My name is…» and «I am … years old»", "Ask «What's your name?» and «How are you?»"],
              hy: ["Ողջունել ընկերը և հրաժեշտ տալ", "Ներկայանալ «My name is…» և «I am … years old» արտահայտություններով", "Հարցնել «What's your name?» և «How are you?»"],
              ru: ["Поздороваться с другом и попрощаться", "Представиться: «My name is…», «I am … years old»", "Спросить «What's your name?» и «How are you?»"],
            },
            content: t(
              `## Let's say hello!

In English we say **Hello!** or **Hi!** when we meet, and **Goodbye!** or **Bye!** when we leave.

| English | What it means |
|---|---|
| Hello! / Hi! | a greeting |
| Good morning! | before 12:00 |
| Good afternoon! | after 12:00 |
| Goodbye! / Bye! | when you leave |

## My name is…

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too!

**My name is Anna** = *I am Anna.* You can also say **I'm Anna.**

## How old are you?

> **Tom:** How old are you?
> **Anna:** I am eight. And you?
> **Tom:** I'm nine years old.

Numbers you need: **six, seven, eight, nine, ten.**

## Practice

1. Say hello to three classmates and ask their names.
2. Write: *My name is ____. I am ____ years old.*
3. Sing the song: *Hello, hello, what's your name? Hello, hello, my name is …*

### Remember
- **What's** = **What is**.
- **I'm** = **I am**.
- We always write **I** with a capital letter.`,
              `## Ասենք բարև

Անգլերենում հանդիպելիս ասում են **Hello!** կամ **Hi!**, իսկ հեռանալիս՝ **Goodbye!** կամ **Bye!**։

| Անգլերեն | Նշանակությունը |
|---|---|
| Hello! / Hi! | բարև |
| Good morning! | բարի լույս (մինչև 12:00) |
| Good afternoon! | բարի օր (12:00-ից հետո) |
| Goodbye! / Bye! | ցտեսություն |

## Իմ անունը … է

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too!

**My name is Anna** = *Իմ անունը Աննա է։* Կարելի է ասել նաև **I'm Anna** (Ես Աննան եմ)։

## Քանի՞ տարեկան ես

> **Tom:** How old are you?
> **Anna:** I am eight. And you?
> **Tom:** I'm nine years old.

Անհրաժեշտ թվեր՝ **six** (6), **seven** (7), **eight** (8), **nine** (9), **ten** (10)։

## Վարժություն

1. Բարևիր երեք դասընկերոջ և հարցրու նրանց անունները։
2. Գրիր՝ *My name is ____. I am ____ years old.*
3. Երգիր՝ *Hello, hello, what's your name? Hello, hello, my name is …*

### Հիշիր
- **What's** = **What is**։
- **I'm** = **I am**։
- **I** (ես) միշտ գրվում է մեծատառով։`,
              `## Скажем «привет»!

По-английски при встрече говорят **Hello!** или **Hi!**, а при прощании — **Goodbye!** или **Bye!**.

| English | Что это значит |
|---|---|
| Hello! / Hi! | привет |
| Good morning! | доброе утро (до 12:00) |
| Good afternoon! | добрый день (после 12:00) |
| Goodbye! / Bye! | до свидания |

## Меня зовут…

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too!

**My name is Anna** = *Меня зовут Анна.* Можно сказать и **I'm Anna** (Я Анна).

## Сколько тебе лет?

> **Tom:** How old are you?
> **Anna:** I am eight. And you?
> **Tom:** I'm nine years old.

Нужные числа: **six** (6), **seven** (7), **eight** (8), **nine** (9), **ten** (10).

## Практика

1. Поздоровайся с тремя одноклассниками и спроси их имена.
2. Напиши: *My name is ____. I am ____ years old.*
3. Спой песенку: *Hello, hello, what's your name? Hello, hello, my name is …*

### Запомни
- **What's** = **What is**.
- **I'm** = **I am**.
- Слово **I** (я) всегда пишется с большой буквы.`,
            ),
            quiz: [
              q(t("What do we say when we leave?", "Ի՞նչ ենք ասում հեռանալիս", "Что мы говорим, когда уходим?"), [t("Hello!", "Hello!", "Hello!"), t("Goodbye!", "Goodbye!", "Goodbye!"), t("Thank you!", "Thank you!", "Thank you!")], 1, t("«Goodbye» or «Bye» is for leaving.", "«Goodbye» կամ «Bye» ասում են հեռանալիս։", "«Goodbye» или «Bye» говорят при прощании.")),
              q(t("Which question asks for a name?", "Ո՞ր հարցն է անուն հարցնում", "Какой вопрос спрашивает имя?"), [t("How are you?", "How are you?", "How are you?"), t("How old are you?", "How old are you?", "How old are you?"), t("What's your name?", "What's your name?", "What's your name?")], 2),
              q(t("«I'm nine years old» answers which question?", "«I'm nine years old»-ը ո՞ր հարցի պատասխանն է", "«I'm nine years old» — ответ на какой вопрос?"), [t("How old are you?", "How old are you?", "How old are you?"), t("What's your name?", "What's your name?", "What's your name?"), t("How are you?", "How are you?", "How are you?")], 0),
              q(t("What is the short form of «I am»?", "Ո՞րն է «I am»-ի կարճ ձևը", "Какая краткая форма у «I am»?"), [t("Im", "Im", "Im"), t("I'm", "I'm", "I'm"), t("Iam", "Iam", "Iam")], 1, t("The apostrophe replaces the missing letter: I'm.", "Ապաթարցը փոխարինում է բաց թողնված տառին՝ I'm։", "Апостроф заменяет пропущенную букву: I'm.")),
            ],
          },
          { slug: "verb-to-be", title: t("The verb «to be»: am, is, are", "«to be» բայը․ am, is, are", "Глагол «to be»: am, is, are") },
          { slug: "reading-short-vowels", title: t("Reading: short vowels in cat, pen, pig, dog, bus", "Ընթերցանություն․ կարճ ձայնավորներ cat, pen, pig, dog, bus", "Чтение: краткие гласные в cat, pen, pig, dog, bus") },
          { slug: "reading-long-vowels", title: t("Reading: magic «e» in name, Pete, kite, nose, cute", "Ընթերցանություն․ «կախարդական e»-ն name, kite, nose բառերում", "Чтение: «волшебное e» в name, kite, nose") },
        ],
      },
      unit(t("My school", "Իմ դպրոցը", "Моя школа"), t("Classroom objects, plurals, «there is / there are», classroom commands.", "Դասարանի առարկաներ, հոգնակի, «there is / there are», հրահանգներ։", "Школьные предметы, множественное число, «there is / there are», команды в классе."), [
        ["classroom-objects", "In my schoolbag: a pen, a book, a ruler", "Իմ պայուսակում․ pen, book, ruler", "В моём портфеле: pen, book, ruler"],
        ["plural-s", "One book, two books: plurals", "One book, two books․ հոգնակի թիվ", "One book, two books: множественное число"],
        ["there-is-are", "There is / There are", "There is / There are", "There is / There are"],
        ["classroom-language", "Classroom language: open your books, listen, repeat", "Դասարանային խոսք․ open your books, listen, repeat", "Язык урока: open your books, listen, repeat"],
      ]),
      unit(t("My home", "Իմ տունը", "Мой дом"), t("Rooms and furniture, prepositions in/on/under, «Where is…?».", "Սենյակներ և կահույք, in/on/under, «Where is…?»։", "Комнаты и мебель, предлоги in/on/under, «Where is…?»."), [
        ["rooms", "Rooms in a house", "Տան սենյակները", "Комнаты в доме"],
        ["prepositions-place", "In, on, under: where is the cat?", "In, on, under․ որտե՞ղ է կատուն", "In, on, under: где кошка?"],
        ["have-got-has-got", "Have got / has got", "Have got / has got", "Have got / has got"],
        ["my-room-writing", "Writing: my room", "Գիր․ իմ սենյակը", "Письмо: моя комната"],
      ]),
      unit(t("Days, time and weather", "Օրեր, ժամ և եղանակ", "Дни, время и погода"), t("Days of the week, «What time is it?», seasons, «It's sunny».", "Շաբաթվա օրեր, «What time is it?», եղանակներ, «It's sunny»։", "Дни недели, «What time is it?», времена года, «It's sunny»."), [
        ["days-of-week", "Days of the week", "Շաբաթվա օրերը", "Дни недели"],
        ["what-time-is-it", "What time is it? It's three o'clock", "What time is it? It's three o'clock", "What time is it? It's three o'clock"],
        ["seasons-weather", "Seasons and weather", "Եղանակները և օդի եղանակը", "Времена года и погода"],
        ["numbers-11-20", "Numbers 11–20", "11–20 թվերը", "Числа 11–20"],
      ]),
      unit(t("I like, I can, I do", "Սիրում եմ, կարող եմ, անում եմ", "Я люблю, я умею, я делаю"), t("Present simple with I/you/we/they, likes and dislikes, abilities.", "Present simple I/you/we/they-ի հետ, հավանել-չհավանել, կարողություններ։", "Present simple с I/you/we/they, что нравится и не нравится, умения."), [
        ["present-simple-i-you", "I play, you play, we play", "I play, you play, we play", "I play, you play, we play"],
        ["dont-like", "I like / I don't like", "I like / I don't like", "I like / I don't like"],
        ["can-cant", "Can and can't", "Can և can't", "Can и can't"],
        ["year-3-review", "Review: all about me", "Ամփոփում․ ամեն ինչ իմ մասին", "Повторение: всё обо мне"],
      ]),
    ],
  ),

  course(
    4,
    ["Describing people and daily routines, present simple with he/she, present continuous, past simple of «to be», food, animals and places in town.", "Մարդկանց և ամենօրյա գործողությունների նկարագրություն, present simple he/she-ով, present continuous, «to be»-ի past simple, սնունդ, կենդանիներ, քաղաքի վայրեր։", "Описание людей и распорядка дня, present simple с he/she, present continuous, past simple глагола «to be», еда, животные, места в городе."],
    ["Armenia grade 4 (2 h/week): end of primary stage; standard expects A1-level listening/speaking on familiar topics, reading short texts, writing 4–5 sentences about oneself. Grade 4 has a knowledge check in the mother tongue and maths, not in English.", "Հայաստան, 4-րդ դասարան (2 ժ/շաբ.)՝ տարրական աստիճանի ավարտ․ պահանջվում է A1 մակարդակի լսել-խոսել ծանոթ թեմաներով, կարդալ կարճ տեքստեր, գրել 4–5 նախադասություն իր մասին։", "Армения, 4 класс (2 ч/нед.): завершение начальной ступени; стандарт ожидает A1 в аудировании и говорении на знакомые темы, чтение коротких текстов, письмо 4–5 предложений о себе."],
    ["Russia grade 4 (2 h/week): end of НОО — present simple all persons, present continuous, past simple (to be, regular verbs), future with «will» (intro), comparative adjectives, telling the time, daily routine, food, animals, holidays; ВПР-style tasks on listening, reading, writing.", "Ռուսաստան, 4-րդ դասարան (2 ժ/շաբ.)՝ НОО-ի ավարտ․ present simple բոլոր դեմքերով, present continuous, past simple (to be, կանոնավոր բայեր), «will» (ներածություն), համեմատական աստիճան, ժամ, օրակարգ, սնունդ, կենդանիներ, տոներ։", "Россия, 4 класс (2 ч/нед.): завершение НОО — present simple во всех лицах, present continuous, past simple (to be, правильные глаголы), будущее с «will» (введение), сравнительная степень, время, режим дня, еда, животные, праздники."],
    { armenia: 2, russia: 2 },
    [
      unit(t("People around me", "Իմ շրջապատի մարդիկ", "Люди вокруг меня"), t("Appearance, character, possessive adjectives and 's.", "Արտաքին, բնավորություն, ստացական ածականներ և 's։", "Внешность, характер, притяжательные прилагательные и 's."), [
        ["describing-people", "She has got long hair: describing people", "She has got long hair․ նկարագրում ենք մարդկանց", "She has got long hair: описываем людей"],
        ["possessives", "My, your, his, her and Tom's", "My, your, his, her և Tom's", "My, your, his, her и Tom's"],
        ["jobs", "Jobs: a doctor, a teacher, a driver", "Մասնագիտություններ․ doctor, teacher, driver", "Профессии: doctor, teacher, driver"],
        ["adjectives-opposites", "Big and small, old and new: opposites", "Big–small, old–new․ հականիշներ", "Big–small, old–new: антонимы"],
      ]),
      unit(t("My day", "Իմ օրը", "Мой день"), t("Daily routine, present simple with he/she (-s), adverbs of frequency.", "Օրակարգ, present simple he/she-ով (-s), հաճախականության մակբայներ։", "Распорядок дня, present simple с he/she (-s), наречия частотности."), [
        ["daily-routine", "I get up at seven: my daily routine", "I get up at seven․ իմ օրակարգը", "I get up at seven: мой режим дня"],
        ["he-she-s", "He plays, she reads: the -s ending", "He plays, she reads․ -s վերջավորությունը", "He plays, she reads: окончание -s"],
        ["does-he", "Does he…? Questions and negatives", "Does he…? Հարց և ժխտում", "Does he…? Вопросы и отрицания"],
        ["always-sometimes-never", "Always, usually, sometimes, never", "Always, usually, sometimes, never", "Always, usually, sometimes, never"],
      ]),
      unit(t("What are you doing?", "Ի՞նչ ես անում", "Что ты делаешь?"), t("Present continuous, clothes, hobbies.", "Present continuous, հագուստ, հոբբիներ։", "Present continuous, одежда, хобби."), [
        ["present-continuous", "I am reading now: present continuous", "I am reading now․ present continuous", "I am reading now: present continuous"],
        ["clothes", "Clothes: What are you wearing?", "Հագուստ․ What are you wearing?", "Одежда: What are you wearing?"],
        ["hobbies-free-time", "Hobbies and free time", "Հոբբիներ և ազատ ժամանակ", "Хобби и свободное время"],
        ["simple-vs-continuous", "Every day or now? Simple vs continuous", "Every day կամ now? Simple և continuous", "Every day или now? Simple и continuous"],
      ]),
      unit(t("Food and shopping", "Սնունդ և գնումներ", "Еда и покупки"), t("Countable and uncountable nouns, some/any, «How much is it?».", "Հաշվելի և անհաշվելի գոյականներ, some/any, «How much is it?»։", "Исчисляемые и неисчисляемые, some/any, «How much is it?»."), [
        ["food-vocabulary", "Breakfast, lunch and dinner", "Breakfast, lunch, dinner", "Breakfast, lunch, dinner"],
        ["some-any", "Some and any", "Some և any", "Some и any"],
        ["at-the-shop", "At the shop: Can I have…?", "Խանութում․ Can I have…?", "В магазине: Can I have…?"],
        ["numbers-to-100", "Numbers to 100 and prices", "Թվերը մինչև 100 և գները", "Числа до 100 и цены"],
      ]),
      unit(t("Yesterday and tomorrow", "Երեկ և վաղը", "Вчера и завтра"), t("Past simple of «to be» and regular verbs, «will» for the future.", "«to be»-ի և կանոնավոր բայերի past simple, «will» ապառնի։", "Past simple глагола «to be» и правильных глаголов, «will» для будущего."), [
        ["was-were", "Was and were", "Was և were", "Was и were"],
        ["past-simple-regular", "I played, I watched: regular past", "I played, I watched․ կանոնավոր անցյալ", "I played, I watched: правильные глаголы в прошедшем"],
        ["will-future", "Tomorrow I will…", "Tomorrow I will…", "Tomorrow I will…"],
        ["holidays-celebrations", "Holidays: birthday, New Year, Easter", "Տոներ․ birthday, New Year, Easter", "Праздники: birthday, New Year, Easter"],
        ["year-4-review", "Review: my year in English", "Ամփոփում․ իմ տարին անգլերենով", "Повторение: мой год на английском"],
      ]),
    ],
  ),

  course(
    5,
    ["Moving to secondary school: consolidating present and past tenses, irregular verbs, comparatives and superlatives, countries, travel and the English-speaking world.", "Անցում միջին դպրոց․ ներկա և անցյալ ժամանակների ամրապնդում, անկանոն բայեր, համեմատական և գերադրական աստիճան, երկրներ, ճանապարհորդություն, անգլախոս աշխարհ։", "Переход в основную школу: закрепление настоящих и прошедших времён, неправильные глаголы, степени сравнения, страны, путешествия, англоязычный мир."],
    ["Armenia grade 5 (3 h/week in middle school): start of the basic stage; 10-point marking begins. Standard aims towards A1+/A2 by grade 9: communicative topics (family, school, hobbies, Armenia and the UK), systematic grammar and a first project.", "Հայաստան, 5-րդ դասարան (3 ժ/շաբ. միջին դպրոցում)՝ հիմնական աստիճանի սկիզբ, սկսվում է 10 բալանոց գնահատումը։ Նպատակ՝ A1+/A2 մինչև 9-րդ դասարան․ հաղորդակցական թեմաներ (ընտանիք, դպրոց, հոբբի, Հայաստան և Մեծ Բրիտանիա), համակարգված քերականություն։", "Армения, 5 класс (3 ч/нед. в средней школе): начало основной ступени; вводится 10-балльная шкала. Цель — A1+/A2 к 9 классу: коммуникативные темы (семья, школа, хобби, Армения и Великобритания), систематическая грамматика, первый проект."],
    ["Russia grade 5 (3 h/week, ФГОС ООО): present simple/continuous, past simple with irregular verbs, future simple, degrees of comparison, modal verbs can/must/should, articles, countries and nationalities, English-speaking countries, school life, famous people.", "Ռուսաստան, 5-րդ դասարան (3 ժ/շաբ., ФГОС ООО)՝ present simple/continuous, past simple անկանոն բայերով, future simple, համեմատության աստիճաններ, can/must/should, հոդեր, երկրներ և ազգություններ, անգլախոս երկրներ, դպրոցական կյանք։", "Россия, 5 класс (3 ч/нед., ФГОС ООО): present simple/continuous, past simple с неправильными глаголами, future simple, степени сравнения, модальные can/must/should, артикли, страны и национальности, англоязычные страны, школьная жизнь."],
    { armenia: 3, russia: 3 },
    [
      unit(t("Welcome to secondary school", "Բարի գալուստ միջին դպրոց", "Добро пожаловать в среднюю школу"), t("School subjects and timetable, present simple review, question words.", "Առարկաներ և դասացուցակ, present simple-ի կրկնություն, հարցական բառեր։", "Школьные предметы и расписание, повторение present simple, вопросительные слова."), [
        ["school-subjects", "School subjects and timetable", "Դպրոցական առարկաներ և դասացուցակ", "Школьные предметы и расписание"],
        ["question-words", "Who, what, where, when, why, how", "Who, what, where, when, why, how", "Who, what, where, when, why, how"],
        ["present-simple-review", "Present simple: all forms", "Present simple․ բոլոր ձևերը", "Present simple: все формы"],
        ["articles-a-an-the", "Articles a, an, the", "a, an, the հոդերը", "Артикли a, an, the"],
      ]),
      unit(t("Countries and people", "Երկրներ և մարդիկ", "Страны и люди"), t("Countries, nationalities, languages; the UK and the USA; Armenia and Russia in English.", "Երկրներ, ազգություններ, լեզուներ, Մեծ Բրիտանիա և ԱՄՆ, Հայաստան և Ռուսաստան անգլերենով։", "Страны, национальности, языки; Великобритания и США; Армения и Россия по-английски."), [
        ["countries-nationalities", "Countries and nationalities", "Երկրներ և ազգություններ", "Страны и национальности"],
        ["english-speaking-world", "The English-speaking world", "Անգլախոս աշխարհը", "Англоязычный мир"],
        ["my-country", "Project: my country in English", "Նախագիծ․ իմ երկիրը անգլերենով", "Проект: моя страна по-английски"],
        ["comparatives", "Bigger, smaller, more beautiful: comparatives", "Bigger, smaller, more beautiful․ համեմատական", "Bigger, smaller, more beautiful: сравнительная степень"],
        ["superlatives", "The biggest in the world: superlatives", "The biggest in the world․ գերադրական", "The biggest in the world: превосходная степень"],
      ]),
      unit(t("Stories from the past", "Պատմություններ անցյալից", "Истории из прошлого"), t("Past simple with irregular verbs, time expressions, telling a story.", "Past simple անկանոն բայերով, ժամանակի արտահայտություններ, պատմություն պատմել։", "Past simple с неправильными глаголами, обстоятельства времени, рассказ."), [
        ["irregular-verbs-1", "Irregular verbs: go–went, see–saw, have–had", "Անկանոն բայեր․ go–went, see–saw, have–had", "Неправильные глаголы: go–went, see–saw, have–had"],
        ["past-questions", "Did you…? Past simple questions", "Did you…? Past simple հարցեր", "Did you…? Вопросы в past simple"],
        ["last-weekend", "Last weekend: telling what happened", "Անցյալ հանգստյան օրերը․ պատմում ենք", "В прошлые выходные: рассказываем"],
        ["famous-people", "Famous people of the past", "Անցյալի հայտնի մարդիկ", "Знаменитые люди прошлого"],
      ]),
      unit(t("Rules and plans", "Կանոններ և ծրագրեր", "Правила и планы"), t("Must/mustn't, should, future with «will» and «going to».", "Must/mustn't, should, ապառնի «will» և «going to»։", "Must/mustn't, should, будущее с «will» и «going to»."), [
        ["must-mustnt", "Must and mustn't: school rules", "Must և mustn't․ դպրոցի կանոնները", "Must и mustn't: школьные правила"],
        ["should", "Should for advice", "Should՝ խորհուրդ տալու համար", "Should для совета"],
        ["going-to", "I'm going to…: plans", "I'm going to…․ ծրագրեր", "I'm going to…: планы"],
        ["will-vs-going-to", "Will or going to?", "Will կամ going to?", "Will или going to?"],
      ]),
      unit(t("Travel and the world around us", "Ճանապարհորդություն և շրջակա աշխարհ", "Путешествия и мир вокруг"), t("Transport, directions, animals and nature, a holiday postcard.", "Տրանսպորտ, ուղղություններ, կենդանիներ և բնություն, բացիկ արձակուրդից։", "Транспорт, направления, животные и природа, открытка с отдыха."), [
        ["transport-travel", "Transport: by bus, by train, on foot", "Տրանսպորտ․ by bus, by train, on foot", "Транспорт: by bus, by train, on foot"],
        ["giving-directions", "Turn left, go straight: directions", "Turn left, go straight․ ուղղություններ", "Turn left, go straight: как пройти"],
        ["wild-animals", "Wild animals and where they live", "Վայրի կենդանիներ և նրանց բնակավայրերը", "Дикие животные и где они живут"],
        ["postcard-writing", "Writing a postcard", "Բացիկ գրել", "Пишем открытку"],
        ["year-5-review", "Review and project presentation", "Ամփոփում և նախագծի ներկայացում", "Повторение и презентация проекта"],
      ]),
    ],
  ),

  course(
    6,
    ["Present perfect, past continuous, quantifiers, the environment, health and food, famous cities, reading longer texts and writing emails.", "Present perfect, past continuous, քանակական բառեր, շրջակա միջավայր, առողջություն և սնունդ, հայտնի քաղաքներ, ավելի երկար տեքստերի ընթերցանություն, էլ. նամակ։", "Present perfect, past continuous, квантификаторы, окружающая среда, здоровье и еда, известные города, чтение длинных текстов и написание писем."],
    ["Armenia grade 6 (3 h/week): topics include Yerevan and London, Armenian traditions, healthy lifestyle, nature of Armenia; grammar: past continuous, present perfect (intro), quantifiers, modal verbs. Pupils write short letters and descriptions.", "Հայաստան, 6-րդ դասարան (3 ժ/շաբ.)՝ թեմաներ՝ Երևան և Լոնդոն, հայկական ավանդույթներ, առողջ ապրելակերպ, Հայաստանի բնություն․ քերականություն՝ past continuous, present perfect (ներածություն), քանակական բառեր, մոդալ բայեր։", "Армения, 6 класс (3 ч/нед.): темы — Ереван и Лондон, армянские традиции, здоровый образ жизни, природа Армении; грамматика — past continuous, present perfect (введение), квантификаторы, модальные глаголы."],
    ["Russia grade 6 (3 h/week): present perfect with ever/never/just/already/yet, past continuous, much/many/a lot of/few/little, have to, possessive pronouns, ordinal numbers and dates, Moscow and London, the environment, free time, celebrations.", "Ռուսաստան, 6-րդ դասարան (3 ժ/շաբ.)՝ present perfect ever/never/just/already/yet-ով, past continuous, much/many/a lot of/few/little, have to, ստացական դերանուններ, դասական թվականներ և ամսաթվեր, Մոսկվա և Լոնդոն, միջավայր։", "Россия, 6 класс (3 ч/нед.): present perfect с ever/never/just/already/yet, past continuous, much/many/a lot of/few/little, have to, притяжательные местоимения, порядковые числительные и даты, Москва и Лондон, экология, досуг."],
    { armenia: 3, russia: 3 },
    [
      unit(t("Home and family life", "Տուն և ընտանեկան կյանք", "Дом и семейная жизнь"), t("Housework, have to, possessive pronouns, ordinal numbers and dates.", "Տնային գործեր, have to, ստացական դերանուններ, դասական թվականներ և ամսաթվեր։", "Домашние дела, have to, притяжательные местоимения, порядковые числительные и даты."), [
        ["housework-have-to", "I have to tidy my room", "I have to tidy my room", "I have to tidy my room"],
        ["possessive-pronouns", "Mine, yours, his, hers: possessive pronouns", "Mine, yours, his, hers․ ստացական դերանուններ", "Mine, yours, his, hers: притяжательные местоимения"],
        ["ordinal-numbers-dates", "First, second, third: dates and birthdays", "First, second, third․ ամսաթվեր", "First, second, third: даты и дни рождения"],
        ["family-traditions", "Family traditions in Armenia, Russia and Britain", "Ընտանեկան ավանդույթներ Հայաստանում, Ռուսաստանում և Բրիտանիայում", "Семейные традиции в Армении, России и Британии"],
      ]),
      unit(t("What were you doing?", "Ի՞նչ էիր անում", "Что ты делал(а)?"), t("Past continuous, past simple vs continuous, «when» and «while».", "Past continuous, past simple vs continuous, «when» և «while»։", "Past continuous, past simple и continuous, «when» и «while»."), [
        ["past-continuous", "Past continuous: I was reading", "Past continuous․ I was reading", "Past continuous: I was reading"],
        ["when-while", "When and while", "When և while", "When и while"],
        ["story-writing", "Writing a story with a twist", "Պատմություն գրել անսպասելի ավարտով", "Пишем рассказ с неожиданной концовкой"],
      ]),
      unit(t("Have you ever…?", "Երբևէ…", "Ты когда-нибудь…?"), t("Present perfect, ever/never, just/already/yet, past participles.", "Present perfect, ever/never, just/already/yet, անցյալ դերբայներ։", "Present perfect, ever/never, just/already/yet, причастия прошедшего времени."), [
        ["present-perfect-intro", "Present perfect: I have seen", "Present perfect․ I have seen", "Present perfect: I have seen"],
        ["ever-never", "Have you ever…? Ever and never", "Have you ever…? Ever և never", "Have you ever…? Ever и never"],
        ["just-already-yet", "Just, already, yet", "Just, already, yet", "Just, already, yet"],
        ["perfect-vs-past", "Present perfect or past simple?", "Present perfect կամ past simple?", "Present perfect или past simple?"],
      ]),
      unit(t("Food, health and quantity", "Սնունդ, առողջություն և քանակ", "Еда, здоровье и количество"), t("Much/many/a lot of/few/little, healthy habits, at the doctor's.", "Much/many/a lot of/few/little, առողջ սովորություններ, բժշկի մոտ։", "Much/many/a lot of/few/little, здоровые привычки, у врача."), [
        ["much-many", "How much? How many?", "How much? How many?", "How much? How many?"],
        ["few-little", "A few, a little, a lot of", "A few, a little, a lot of", "A few, a little, a lot of"],
        ["healthy-lifestyle", "A healthy lifestyle", "Առողջ ապրելակերպ", "Здоровый образ жизни"],
        ["at-the-doctors", "At the doctor's: What's the matter?", "Բժշկի մոտ․ What's the matter?", "У врача: What's the matter?"],
      ]),
      unit(t("Cities and the environment", "Քաղաքներ և շրջակա միջավայր", "Города и окружающая среда"), t("Yerevan, Moscow, London; places in town; environmental problems; writing an email.", "Երևան, Մոսկվա, Լոնդոն, քաղաքի վայրեր, բնապահպանական խնդիրներ, էլ. նամակ։", "Ереван, Москва, Лондон; места в городе; экологические проблемы; электронное письмо."), [
        ["three-capitals", "Yerevan, Moscow and London", "Երևան, Մոսկվա և Լոնդոն", "Ереван, Москва и Лондон"],
        ["places-in-town", "Places in town and how to get there", "Քաղաքի վայրերը և ինչպես հասնել", "Места в городе и как до них добраться"],
        ["environment-problems", "Save the planet: environmental problems", "Save the planet․ բնապահպանական խնդիրներ", "Save the planet: экологические проблемы"],
        ["writing-email", "Writing an informal email", "Ոչ պաշտոնական էլ. նամակ գրել", "Пишем неформальное электронное письмо"],
        ["year-6-review", "Review and quiz show", "Ամփոփում և վիկտորինա", "Повторение и викторина"],
      ]),
    ],
  ),

  course(
    7,
    ["Conditionals (zero and first), relative clauses, passive voice (intro), reported requests, technology, media, sport and ambitions.", "Պայմանական նախադասություններ (0 և 1), հարաբերական նախադասություններ, կրավորական սեռ (ներածություն), տեխնոլոգիաներ, մեդիա, սպորտ, նպատակներ։", "Условные предложения (0 и 1 типа), относительные придаточные, пассивный залог (введение), технологии, медиа, спорт, цели."],
    ["Armenia grade 7 (3 h/week): A2 development; topics: technology and the internet, sports and the Olympic movement, Armenian culture and famous Armenians; grammar: first conditional, relative clauses, passive (present/past), used to.", "Հայաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ A2-ի զարգացում․ թեմաներ՝ տեխնոլոգիաներ և համացանց, սպորտ և օլիմպիական շարժում, հայ մշակույթ և հայտնի հայեր․ քերականություն՝ 1-ին պայմանական, հարաբերական նախադասություններ, կրավորական, used to։", "Армения, 7 класс (3 ч/нед.): развитие A2; темы — технологии и интернет, спорт и олимпийское движение, армянская культура и знаменитые армяне; грамматика — первый тип условных, относительные придаточные, пассив (present/past), used to."],
    ["Russia grade 7 (3 h/week): present perfect continuous (intro), conditionals 0/1, relative pronouns who/which/that, passive voice present/past, used to, -ing/-ed adjectives, phrasal verbs, mass media, sport, friendship, ecology.", "Ռուսաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ present perfect continuous (ներածություն), պայմանական 0/1, who/which/that, կրավորական present/past, used to, -ing/-ed ածականներ, դարձվածային բայեր, մեդիա, սպորտ, բարեկամություն, էկոլոգիա։", "Россия, 7 класс (3 ч/нед.): present perfect continuous (введение), условные 0/1, относительные местоимения who/which/that, пассив present/past, used to, прилагательные на -ing/-ed, фразовые глаголы, СМИ, спорт, дружба, экология."],
    { armenia: 3, russia: 3 },
    [
      unit(t("Lifestyles", "Ապրելակերպ", "Образ жизни"), t("City and country life, used to, relative clauses with who/which/where.", "Քաղաքային և գյուղական կյանք, used to, հարաբերական նախադասություններ who/which/where։", "Жизнь в городе и деревне, used to, относительные придаточные с who/which/where."), [
        ["city-vs-country", "City life or country life?", "Քաղաքա՞ն կամ գյուղ", "Жизнь в городе или в деревне?"],
        ["used-to", "I used to…: habits in the past", "I used to…․ անցյալի սովորություններ", "I used to…: привычки в прошлом"],
        ["relative-clauses", "A person who…, a place where…: relative clauses", "A person who…, a place where…", "A person who…, a place where…: относительные придаточные"],
        ["teen-life-around-world", "Teenage life around the world", "Պատանիների կյանքը աշխարհում", "Жизнь подростков в мире"],
      ]),
      unit(t("Technology and media", "Տեխնոլոգիաներ և մեդիա", "Технологии и медиа"), t("Gadgets, the internet, first conditional, present perfect continuous.", "Գաջեթներ, համացանց, առաջին պայմանական, present perfect continuous։", "Гаджеты, интернет, первый тип условных, present perfect continuous."), [
        ["gadgets-internet", "Gadgets and the internet", "Գաջեթներ և համացանց", "Гаджеты и интернет"],
        ["first-conditional", "If it rains, we will stay at home: first conditional", "If it rains, we will stay at home․ 1-ին պայմանական", "If it rains, we will stay at home: первый тип условных"],
        ["zero-conditional", "Zero conditional: facts and rules", "Զրոյական պայմանական․ փաստեր և կանոններ", "Нулевой тип условных: факты и правила"],
        ["present-perfect-continuous", "I have been waiting: present perfect continuous", "I have been waiting․ present perfect continuous", "I have been waiting: present perfect continuous"],
        ["online-safety", "Staying safe online", "Անվտանգ համացանց", "Безопасность в интернете"],
      ]),
      unit(t("Sport and health", "Սպորտ և առողջություն", "Спорт и здоровье"), t("Sports vocabulary, the Olympics, -ing/-ed adjectives, giving advice.", "Սպորտային բառապաշար, Օլիմպիական խաղեր, -ing/-ed ածականներ, խորհուրդ։", "Спортивная лексика, Олимпиада, прилагательные -ing/-ed, советы."), [
        ["sports-vocabulary", "Sports: play, do or go?", "Սպորտ․ play, do կամ go?", "Спорт: play, do или go?"],
        ["olympic-games", "The Olympic Games", "Օլիմպիական խաղերը", "Олимпийские игры"],
        ["ing-ed-adjectives", "Boring or bored? -ing and -ed adjectives", "Boring կամ bored? -ing և -ed ածականներ", "Boring или bored? Прилагательные -ing и -ed"],
        ["phrasal-verbs-1", "Phrasal verbs: give up, take up, work out", "Դարձվածային բայեր․ give up, take up, work out", "Фразовые глаголы: give up, take up, work out"],
      ]),
      unit(t("Culture and famous people", "Մշակույթ և հայտնի մարդիկ", "Культура и знаменитости"), t("Passive voice present and past, biographies, Armenian and Russian culture in English.", "Կրավորական սեռ ներկա և անցյալ, կենսագրություններ, հայ և ռուս մշակույթ անգլերենով։", "Пассивный залог в настоящем и прошедшем, биографии, армянская и русская культура по-английски."), [
        ["passive-present", "The book is written: present passive", "The book is written․ ներկա կրավորական", "The book is written: пассив в настоящем"],
        ["passive-past", "It was built in…: past passive", "It was built in…․ անցյալ կրավորական", "It was built in…: пассив в прошедшем"],
        ["biography-writing", "Writing a biography", "Կենսագրություն գրել", "Пишем биографию"],
        ["cultural-heritage", "Cultural heritage: Garni, the Kremlin, Stonehenge", "Մշակութային ժառանգություն․ Գառնի, Կրեմլ, Սթոունհենջ", "Культурное наследие: Гарни, Кремль, Стоунхендж"],
      ]),
      unit(t("Looking ahead", "Նայելով առաջ", "Взгляд в будущее"), t("Ambitions and future plans, future forms review, a formal letter.", "Նպատակներ և ապագայի ծրագրեր, ապառնի ձևերի կրկնություն, պաշտոնական նամակ։", "Цели и планы на будущее, повторение будущих форм, официальное письмо."), [
        ["ambitions", "My ambitions: I'd like to be…", "Իմ նպատակները․ I'd like to be…", "Мои цели: I'd like to be…"],
        ["future-forms-review", "Will, going to, present continuous for the future", "Will, going to, present continuous ապառնիի համար", "Will, going to, present continuous для будущего"],
        ["formal-letter", "Writing a formal letter", "Պաշտոնական նամակ գրել", "Пишем официальное письмо"],
        ["year-7-review", "Review and speaking exam practice", "Ամփոփում և բանավոր քննության պատրաստություն", "Повторение и подготовка к устному экзамену"],
      ]),
    ],
  ),

  course(
    8,
    ["Past perfect, second conditional, reported speech, modals of deduction, gerunds and infinitives; topics: communication, nature, science, jobs.", "Past perfect, երկրորդ պայմանական, անուղղակի խոսք, մոդալ բայեր ենթադրության համար, գերունդ և ինֆինիտիվ․ թեմաներ՝ հաղորդակցություն, բնություն, գիտություն, մասնագիտություններ։", "Past perfect, второй тип условных, косвенная речь, модальные глаголы предположения, герундий и инфинитив; темы: общение, природа, наука, профессии."],
    ["Armenia grade 8 (3 h/week): A2+; topics: communication and social media, Armenian nature and ecology, science and inventions, choosing a profession; grammar: past perfect, reported speech, second conditional, gerund/infinitive.", "Հայաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ A2+․ թեմաներ՝ հաղորդակցություն և սոցիալական մեդիա, Հայաստանի բնություն և էկոլոգիա, գիտություն և գյուտեր, մասնագիտության ընտրություն․ քերականություն՝ past perfect, անուղղակի խոսք, 2-րդ պայմանական, գերունդ/ինֆինիտիվ։", "Армения, 8 класс (3 ч/нед.): A2+; темы — общение и соцсети, природа и экология Армении, наука и изобретения, выбор профессии; грамматика — past perfect, косвенная речь, второй тип условных, герундий/инфинитив."],
    ["Russia grade 8 (3 h/week): past perfect, past perfect continuous (intro), second conditional, reported statements and questions, modals of deduction (must/may/can't), gerund vs infinitive, -ing forms after prepositions, question tags, socialising, food and shopping, great minds, nature.", "Ռուսաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ past perfect, past perfect continuous (ներածություն), 2-րդ պայմանական, անուղղակի խոսք, must/may/can't ենթադրություն, գերունդ vs ինֆինիտիվ, question tags, շփում, սնունդ և գնումներ, մեծ մտքեր, բնություն։", "Россия, 8 класс (3 ч/нед.): past perfect, past perfect continuous (введение), второй тип условных, косвенная речь (утверждения и вопросы), модальные предположения must/may/can't, герундий и инфинитив, разделительные вопросы, общение, еда и покупки, великие умы, природа."],
    { armenia: 3, russia: 3 },
    [
      unit(t("Socialising", "Շփում", "Общение"), t("Character and relationships, question tags, present tenses review, body language.", "Բնավորություն և հարաբերություններ, question tags, ներկա ժամանակների կրկնություն, մարմնի լեզու։", "Характер и отношения, разделительные вопросы, повторение настоящих времён, язык тела."), [
        ["character-relationships", "Character and relationships", "Բնավորություն և հարաբերություններ", "Характер и отношения"],
        ["question-tags", "It's cold, isn't it? Question tags", "It's cold, isn't it? Question tags", "It's cold, isn't it? Разделительные вопросы"],
        ["present-tenses-review", "Present simple, continuous, perfect: review", "Present simple, continuous, perfect․ կրկնություն", "Present simple, continuous, perfect: повторение"],
        ["social-media", "Social media: for and against", "Սոցիալական մեդիա․ կողմ և դեմ", "Соцсети: за и против"],
      ]),
      unit(t("Before that happened", "Մինչ այդ", "До того как это случилось"), t("Past perfect, narrative tenses, a story from history.", "Past perfect, պատմողական ժամանակներ, պատմություն պատմությունից։", "Past perfect, повествовательные времена, рассказ из истории."), [
        ["past-perfect", "Past perfect: she had already left", "Past perfect․ she had already left", "Past perfect: she had already left"],
        ["narrative-tenses", "Narrative tenses together", "Պատմողական ժամանակները միասին", "Повествовательные времена вместе"],
        ["history-story", "A moment in history", "Պահ պատմության մեջ", "Момент в истории"],
      ]),
      unit(t("Great minds", "Մեծ մտքեր", "Великие умы"), t("Science and inventions, reported speech, modals of deduction.", "Գիտություն և գյուտեր, անուղղակի խոսք, մոդալ բայեր ենթադրության համար։", "Наука и изобретения, косвенная речь, модальные глаголы предположения."), [
        ["inventions", "Inventions that changed the world", "Աշխարհը փոխած գյուտեր", "Изобретения, изменившие мир"],
        ["reported-statements", "He said that…: reported statements", "He said that…․ անուղղակի խոսք", "He said that…: косвенные утверждения"],
        ["reported-questions", "She asked if…: reported questions", "She asked if…․ անուղղակի հարցեր", "She asked if…: косвенные вопросы"],
        ["modals-deduction", "It must be… / It can't be…: deduction", "It must be… / It can't be…․ ենթադրություն", "It must be… / It can't be…: предположение"],
        ["armenian-russian-scientists", "Scientists of Armenia and Russia", "Հայաստանի և Ռուսաստանի գիտնականներ", "Учёные Армении и России"],
      ]),
      unit(t("If I were you", "Եթե ես քո տեղը լինեի", "Если бы я был на твоём месте"), t("Second conditional, wishes, gerund and infinitive, giving advice.", "Երկրորդ պայմանական, ցանկություններ, գերունդ և ինֆինիտիվ, խորհուրդ։", "Второй тип условных, желания, герундий и инфинитив, советы."), [
        ["second-conditional", "If I had a million…: second conditional", "If I had a million…․ 2-րդ պայմանական", "If I had a million…: второй тип условных"],
        ["i-wish", "I wish I could…", "I wish I could…", "I wish I could…"],
        ["gerund-infinitive", "Enjoy doing, want to do: gerund or infinitive", "Enjoy doing, want to do․ գերունդ կամ ինֆինիտիվ", "Enjoy doing, want to do: герундий или инфинитив"],
        ["problem-solving-dialogues", "Dialogues: problems and advice", "Երկխոսություններ․ խնդիրներ և խորհուրդ", "Диалоги: проблемы и советы"],
      ]),
      unit(t("Nature and the future of work", "Բնություն և աշխատանքի ապագա", "Природа и будущее работы"), t("Natural disasters, ecology of Armenia and Russia, jobs of the future, a CV.", "Բնական աղետներ, Հայաստանի և Ռուսաստանի էկոլոգիա, ապագայի մասնագիտություններ, CV։", "Природные катастрофы, экология Армении и России, профессии будущего, резюме."), [
        ["natural-disasters", "Natural disasters", "Բնական աղետներ", "Природные катастрофы"],
        ["lake-sevan-baikal", "Lake Sevan and Lake Baikal: protecting nature", "Սևանա լիճ և Բայկալ․ բնության պահպանություն", "Озеро Севан и Байкал: охрана природы"],
        ["jobs-of-future", "Jobs of the future", "Ապագայի մասնագիտություններ", "Профессии будущего"],
        ["writing-cv", "Writing a simple CV", "Պարզ CV գրել", "Пишем простое резюме"],
        ["year-8-review", "Review and reading exam practice", "Ամփոփում և ընթերցանության քննության պատրաստություն", "Повторение и подготовка к экзамену по чтению"],
      ]),
    ],
  ),

  course(
    9,
    ["Exam-level B1 preparation: all tenses, third conditional, mixed conditionals, passive in all tenses, reported speech review, essay writing; topics: celebrations, art, careers, global issues.", "B1 քննական պատրաստություն․ բոլոր ժամանակները, 3-րդ պայմանական, խառը պայմանականներ, կրավորական բոլոր ժամանակներում, անուղղակի խոսքի կրկնություն, էսսե․ թեմաներ՝ տոներ, արվեստ, կարիերա, գլոբալ խնդիրներ։", "Подготовка к уровню B1 и экзамену: все времена, третий тип условных, смешанные условные, пассив во всех временах, повторение косвенной речи, эссе; темы: праздники, искусство, карьера, глобальные проблемы."],
    ["Armenia grade 9 (3 h/week): end of basic school; the grade-9 state exam (20-point) can include a foreign language. Expected level A2+/B1: reading authentic texts, writing an essay/letter of 100–120 words, 2-minute monologue.", "Հայաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ հիմնական դպրոցի ավարտ․ 9-րդ դասարանի ավարտական քննությունը (20 բալ) կարող է ներառել օտար լեզու։ Սպասվող մակարդակ A2+/B1․ բնագիր տեքստեր, 100–120 բառանոց էսսե/նամակ, 2-րոպեանոց մենախոսություն։", "Армения, 9 класс (3 ч/нед.): завершение основной школы; выпускной экзамен 9 класса (20 баллов) может включать иностранный язык. Ожидаемый уровень A2+/B1: чтение аутентичных текстов, эссе/письмо 100–120 слов, монолог 2 минуты."],
    ["Russia grade 9 (3 h/week): ОГЭ по английскому (optional, A2+/B1) — listening, reading, grammar/vocabulary (word formation), personal letter 100–120 words, speaking (reading aloud, questions, monologue). Grammar: third conditional, passive all tenses, reported speech, causative (intro).", "Ռուսաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ ОГЭ անգլերեն (ընտրովի, A2+/B1)․ լսել, կարդալ, քերականություն/բառակազմություն, անձնական նամակ 100–120 բառ, բանավոր։ Քերականություն՝ 3-րդ պայմանական, կրավորական բոլոր ժամանակներում, անուղղակի խոսք։", "Россия, 9 класс (3 ч/нед.): ОГЭ по английскому (по выбору, A2+/B1) — аудирование, чтение, грамматика и лексика (словообразование), личное письмо 100–120 слов, говорение. Грамматика: третий тип условных, пассив во всех временах, косвенная речь, causative (введение)."],
    { armenia: 3, russia: 3 },
    [
      unit(t("Celebrations and culture", "Տոներ և մշակույթ", "Праздники и культура"), t("Festivals around the world, present tenses with stative verbs, word formation: nouns from verbs.", "Տոներ աշխարհում, ներկա ժամանակներ վիճակի բայերով, բառակազմություն՝ գոյական բայից։", "Праздники мира, настоящие времена с глаголами состояния, словообразование: существительные от глаголов."), [
        ["festivals-world", "Festivals around the world: Vardavar, Maslenitsa, Halloween", "Տոներ աշխարհում․ Վարդավառ, Մասլենիցա, Հելոուին", "Праздники мира: Вардавар, Масленица, Хеллоуин"],
        ["stative-verbs", "Stative verbs: I know, I believe", "Վիճակի բայեր․ I know, I believe", "Глаголы состояния: I know, I believe"],
        ["word-formation-nouns", "Word formation: -tion, -ment, -ness, -er", "Բառակազմություն․ -tion, -ment, -ness, -er", "Словообразование: -tion, -ment, -ness, -er"],
        ["describing-event", "Describing an event", "Իրադարձության նկարագրություն", "Описание события"],
      ]),
      unit(t("Art and literature", "Արվեստ և գրականություն", "Искусство и литература"), t("Books, films and music, passive in all tenses, Shakespeare, Pushkin and Tumanyan.", "Գրքեր, ֆիլմեր և երաժշտություն, կրավորական բոլոր ժամանակներում, Շեքսպիր, Պուշկին և Թումանյան։", "Книги, фильмы и музыка, пассив во всех временах, Шекспир, Пушкин и Туманян."), [
        ["books-films-music", "Books, films and music: reviews", "Գրքեր, ֆիլմեր, երաժշտություն․ գրախոսություն", "Книги, фильмы, музыка: рецензии"],
        ["passive-all-tenses", "Passive voice in all tenses", "Կրավորական սեռ բոլոր ժամանակներում", "Пассивный залог во всех временах"],
        ["great-writers", "Shakespeare, Pushkin, Tumanyan", "Շեքսպիր, Պուշկին, Թումանյան", "Шекспир, Пушкин, Туманян"],
        ["writing-review", "Writing a review", "Գրախոսություն գրել", "Пишем рецензию"],
      ]),
      unit(t("If only…", "Եթե միայն…", "Если бы только…"), t("Third conditional, mixed conditionals, wishes and regrets.", "Երրորդ պայմանական, խառը պայմանականներ, ցանկություններ և զղջում։", "Третий тип условных, смешанные условные, желания и сожаления."), [
        ["third-conditional", "If I had known…: third conditional", "If I had known…․ 3-րդ պայմանական", "If I had known…: третий тип условных"],
        ["mixed-conditionals", "Mixed conditionals", "Խառը պայմանականներ", "Смешанные условные"],
        ["wishes-regrets", "I wish I had…: regrets", "I wish I had…․ զղջում", "I wish I had…: сожаления"],
        ["conditionals-review", "All conditionals: review", "Բոլոր պայմանականները․ կրկնություն", "Все условные: повторение"],
      ]),
      unit(t("Careers and education", "Կարիերա և կրթություն", "Карьера и образование"), t("Education systems, reported speech review, causative «have something done», a letter of application.", "Կրթական համակարգեր, անուղղակի խոսքի կրկնություն, «have something done», դիմում-նամակ։", "Системы образования, повторение косвенной речи, «have something done», письмо-заявление."), [
        ["education-systems", "Schools in Armenia, Russia and the UK", "Դպրոցները Հայաստանում, Ռուսաստանում և Մեծ Բրիտանիայում", "Школы в Армении, России и Великобритании"],
        ["reported-speech-review", "Reported speech: full review", "Անուղղակի խոսք․ ամբողջական կրկնություն", "Косвенная речь: полное повторение"],
        ["causative", "Have something done", "Have something done", "Have something done"],
        ["letter-application", "Letter of application", "Դիմում-նամակ", "Письмо-заявление"],
      ]),
      unit(t("Global issues and exam skills", "Գլոբալ խնդիրներ և քննական հմտություններ", "Глобальные проблемы и экзаменационные навыки"), t("Environment and society, opinion essay, exam strategies for listening, reading and speaking.", "Միջավայր և հասարակություն, կարծիքի էսսե, քննական ռազմավարություններ։", "Экология и общество, эссе-мнение, стратегии экзамена: аудирование, чтение, говорение."), [
        ["global-issues", "Global issues: poverty, climate, migration", "Գլոբալ խնդիրներ․ աղքատություն, կլիմա, միգրացիա", "Глобальные проблемы: бедность, климат, миграция"],
        ["opinion-essay", "Writing an opinion essay", "Կարծիքի էսսե գրել", "Пишем эссе-мнение"],
        ["personal-letter-exam", "Exam personal letter (100–120 words)", "Քննական անձնական նամակ (100–120 բառ)", "Экзаменационное личное письмо (100–120 слов)"],
        ["speaking-monologue", "Speaking: 2-minute monologue", "Բանավոր․ 2-րոպեանոց մենախոսություն", "Говорение: монолог на 2 минуты"],
        ["grade-9-exam-review", "Grade 9 exam review", "9-րդ դասարանի քննության կրկնություն", "Повторение к экзамену 9 класса"],
      ]),
    ],
  ),

  course(
    10,
    ["Upper-secondary B1+: future perfect and continuous, inversion (intro), advanced passive and reporting, collocations and idioms; topics: identity, media literacy, science and technology, travel.", "Ավագ դպրոց B1+․ future perfect և continuous, շրջադասություն (ներածություն), բարդ կրավորական և անուղղակի խոսք, բառակապակցություններ և դարձվածքներ․ թեմաներ՝ ինքնություն, մեդիագրագիտություն, գիտություն և տեխնոլոգիաներ, ճանապարհորդություն։", "Старшая школа B1+: future perfect и continuous, инверсия (введение), сложный пассив и косвенная речь, коллокации и идиомы; темы: идентичность, медиаграмотность, наука и технологии, путешествия."],
    ["Armenia grade 10 (3–4 h/week; up to 6 in humanities streams): start of high school, target B1+→B2 by grade 12. Topics: identity and values, Armenian diaspora, media, science; essay types and formal register are introduced.", "Հայաստան, 10-րդ դասարան (3–4 ժ/շաբ., հումանիտար հոսքում մինչև 6)՝ ավագ դպրոցի սկիզբ, նպատակ B1+→B2 մինչև 12-րդ դասարան։ Թեմաներ՝ ինքնություն և արժեքներ, հայկական սփյուռք, մեդիա, գիտություն․ ներմուծվում են էսսեի տեսակները և պաշտոնական ոճը։", "Армения, 10 класс (3–4 ч/нед., до 6 в гуманитарном потоке): начало старшей школы, цель B1+→B2 к 12 классу. Темы — идентичность и ценности, армянская диаспора, медиа, наука; вводятся типы эссе и официальный регистр."],
    ["Russia grade 10 (3 h/week base, 5 h profile; ФГОС СОО): future forms incl. future perfect, perfect infinitives, advanced passive, inversion, linking devices, word formation, essay «for and against»; topics: relationships, lifestyle, schools and jobs, environment, holidays, technology.", "Ռուսաստան, 10-րդ դասարան (3 ժ/շաբ. բազային, 5 պրոֆիլ; ФГОС СОО)՝ ապառնի ձևեր ներառյալ future perfect, perfect ինֆինիտիվ, բարդ կրավորական, շրջադասություն, կապող բառեր, բառակազմություն, «կողմ և դեմ» էսսե․ թեմաներ՝ հարաբերություններ, ապրելակերպ, դպրոց և աշխատանք, միջավայր, տեխնոլոգիաներ։", "Россия, 10 класс (3 ч/нед. база, 5 ч профиль; ФГОС СОО): формы будущего, включая future perfect, перфектный инфинитив, сложный пассив, инверсия, средства связи, словообразование, эссе «за и против»; темы: отношения, образ жизни, школа и работа, экология, отпуск, технологии."],
    { armenia: 4, russia: 3 },
    [
      unit(t("Who am I?", "Ո՞վ եմ ես", "Кто я?"), t("Identity, values, personality idioms, present and past tenses in depth.", "Ինքնություն, արժեքներ, բնավորության դարձվածքներ, ներկա և անցյալ ժամանակները խորությամբ։", "Идентичность, ценности, идиомы о характере, настоящие и прошедшие времена углублённо."), [
        ["identity-values", "Identity and values", "Ինքնություն և արժեքներ", "Идентичность и ценности"],
        ["personality-idioms", "Personality idioms and collocations", "Բնավորության դարձվածքներ և բառակապակցություններ", "Идиомы и коллокации о характере"],
        ["tenses-in-depth", "Present and past tenses: fine distinctions", "Ներկա և անցյալ ժամանակներ․ նուրբ տարբերություններ", "Настоящие и прошедшие времена: тонкости"],
        ["diaspora-multicultural", "Diaspora and multicultural societies", "Սփյուռք և բազմամշակութային հասարակություններ", "Диаспора и многокультурные общества"],
      ]),
      unit(t("Media literacy", "Մեդիագրագիտություն", "Медиаграмотность"), t("News and fake news, reporting verbs, advanced reported speech, linking devices.", "Նորություններ և կեղծ լուրեր, հաղորդող բայեր, բարդ անուղղակի խոսք, կապող բառեր։", "Новости и фейки, глаголы сообщения, сложная косвенная речь, средства связи."), [
        ["news-fake-news", "News and fake news", "Նորություններ և կեղծ լուրեր", "Новости и фейки"],
        ["reporting-verbs", "Reporting verbs: suggest, deny, admit", "Հաղորդող բայեր․ suggest, deny, admit", "Глаголы сообщения: suggest, deny, admit"],
        ["linking-devices", "Linking devices: however, moreover, whereas", "Կապող բառեր․ however, moreover, whereas", "Средства связи: however, moreover, whereas"],
        ["for-against-essay", "Essay: for and against", "Էսսե․ կողմ և դեմ", "Эссе: за и против"],
      ]),
      unit(t("Science and the future", "Գիտություն և ապագա", "Наука и будущее"), t("Future perfect and future continuous, predictions, AI and ethics.", "Future perfect և future continuous, կանխատեսումներ, ԱԲ և էթիկա։", "Future perfect и future continuous, прогнозы, ИИ и этика."), [
        ["future-perfect-continuous", "By 2050 we will have…: future perfect and continuous", "By 2050 we will have…․ future perfect և continuous", "By 2050 we will have…: future perfect и continuous"],
        ["predictions-probability", "Predictions and probability", "Կանխատեսումներ և հավանականություն", "Прогнозы и вероятность"],
        ["ai-ethics", "Artificial intelligence: a debate", "Արհեստական բանականություն․ բանավեճ", "Искусственный интеллект: дебаты"],
        ["word-formation-advanced", "Word formation: prefixes un-, dis-, mis-, over-", "Բառակազմություն․ un-, dis-, mis-, over- նախածանցներ", "Словообразование: приставки un-, dis-, mis-, over-"],
      ]),
      unit(t("Travel and the world", "Ճանապարհորդություն և աշխարհ", "Путешествия и мир"), t("Tourism, inversion for emphasis, articles with geographical names, a travel blog.", "Տուրիզմ, շրջադասություն շեշտադրման համար, հոդեր աշխարհագրական անունների հետ, ուղեգրություն։", "Туризм, инверсия для эмфазы, артикли с географическими названиями, тревел-блог."), [
        ["tourism-pros-cons", "Tourism: benefits and problems", "Տուրիզմ․ օգուտներ և խնդիրներ", "Туризм: польза и проблемы"],
        ["inversion", "Never have I seen…: inversion", "Never have I seen…․ շրջադասություն", "Never have I seen…: инверсия"],
        ["articles-geography", "Articles with geographical names", "Հոդերը աշխարհագրական անունների հետ", "Артикли с географическими названиями"],
        ["travel-blog", "Writing a travel blog post", "Ուղեգրություն բլոգի համար", "Пишем пост в тревел-блог"],
        ["year-10-review", "Review and listening exam practice", "Ամփոփում և լսողական քննության պրակտիկա", "Повторение и практика аудирования"],
      ]),
    ],
  ),

  course(
    11,
    ["B2-level work: participle clauses, cleft sentences, subjunctive and modal perfects, academic vocabulary, exam formats (ЕГЭ, Armenian unified exam); topics: society, law, work, environment, arts.", "B2 մակարդակ․ դերբայական դարձվածներ, cleft նախադասություններ, ենթադրական եղանակ և modal perfect, ակադեմիական բառապաշար, քննական ձևաչափեր (ЕГЭ, միասնական քննություն)․ թեմաներ՝ հասարակություն, իրավունք, աշխատանք, միջավայր, արվեստ։", "Уровень B2: причастные обороты, расщеплённые предложения, сослагательное наклонение и modal perfect, академическая лексика, форматы экзаменов (ЕГЭ, армянский единый экзамен); темы: общество, право, работа, экология, искусство."],
    ["Armenia grade 11 (3–4 h/week): preparation for the unified entrance exam in English (grade 12). Reading comprehension, grammar transformation, vocabulary, and essay. Topics: human rights, work and money, environment, arts and leisure.", "Հայաստան, 11-րդ դասարան (3–4 ժ/շաբ.)՝ նախապատրաստություն անգլերենի միասնական քննությանը (12-րդ դասարան)․ ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, էսսե։ Թեմաներ՝ մարդու իրավունքներ, աշխատանք և փող, միջավայր, արվեստ և հանգիստ։", "Армения, 11 класс (3–4 ч/нед.): подготовка к единому экзамену по английскому (12 класс). Понимание текста, грамматические трансформации, лексика, эссе. Темы: права человека, работа и деньги, экология, искусство и досуг."],
    ["Russia grade 11 (3 h base / 5 h profile): final year; ЕГЭ по английскому — listening, reading, grammar and vocabulary, email (100–140 words), essay-project on a table/diagram (200–250 words), speaking (reading aloud, questions, interview, comparison of pictures). Grammar: all structures to B2.", "Ռուսաստան, 11-րդ դասարան (3 ժ բազային / 5 պրոֆիլ)՝ ավարտական տարի․ ЕГЭ անգլերեն՝ լսել, կարդալ, քերականություն և բառապաշար, էլ. նամակ (100–140 բառ), էսսե-նախագիծ աղյուսակի հիման վրա (200–250 բառ), բանավոր։ Քերականություն՝ բոլոր կառույցները մինչև B2։", "Россия, 11 класс (3 ч база / 5 ч профиль): выпускной год; ЕГЭ по английскому — аудирование, чтение, грамматика и лексика, электронное письмо (100–140 слов), эссе-проект по таблице/диаграмме (200–250 слов), говорение (чтение вслух, вопросы, интервью, сравнение картинок). Грамматика: все структуры до B2."],
    { armenia: 4, russia: 3 },
    [
      unit(t("Society and the law", "Հասարակություն և իրավունք", "Общество и право"), t("Rights and responsibilities, modal perfects, participle clauses, formal register.", "Իրավունքներ և պարտականություններ, modal perfect, դերբայական դարձվածներ, պաշտոնական ոճ։", "Права и обязанности, modal perfect, причастные обороты, официальный регистр."), [
        ["rights-responsibilities", "Rights and responsibilities", "Իրավունքներ և պարտականություններ", "Права и обязанности"],
        ["modal-perfects", "You should have told me: modal perfects", "You should have told me․ modal perfect", "You should have told me: modal perfect"],
        ["participle-clauses", "Having finished…: participle clauses", "Having finished…․ դերբայական դարձվածներ", "Having finished…: причастные обороты"],
        ["formal-register", "Formal and informal register", "Պաշտոնական և ոչ պաշտոնական ոճ", "Официальный и неофициальный регистр"],
      ]),
      unit(t("Work and money", "Աշխատանք և փող", "Работа и деньги"), t("Job interviews, cleft sentences, emphasis, business email.", "Հարցազրույց աշխատանքի, cleft նախադասություններ, շեշտադրում, գործարար նամակ։", "Собеседование, расщеплённые предложения, эмфаза, деловое письмо."), [
        ["job-interview", "The job interview", "Հարցազրույց աշխատանքի համար", "Собеседование"],
        ["cleft-sentences", "What I need is…: cleft sentences", "What I need is…․ cleft նախադասություններ", "What I need is…: расщеплённые предложения"],
        ["money-idioms", "Money idioms and collocations", "Փողի դարձվածքներ և բառակապակցություններ", "Идиомы и коллокации о деньгах"],
        ["business-email", "Writing a business email", "Գործարար էլ. նամակ", "Деловое электронное письмо"],
      ]),
      unit(t("Our planet", "Մեր մոլորակը", "Наша планета"), t("Climate change, the subjunctive, «It is essential that…», describing graphs and tables.", "Կլիմայի փոփոխություն, ենթադրական եղանակ, «It is essential that…», գրաֆիկների և աղյուսակների նկարագրություն։", "Изменение климата, сослагательное наклонение, «It is essential that…», описание графиков и таблиц."), [
        ["climate-change", "Climate change: causes and solutions", "Կլիմայի փոփոխություն․ պատճառներ և լուծումներ", "Изменение климата: причины и решения"],
        ["subjunctive", "It is essential that he be…: the subjunctive", "It is essential that he be…․ ենթադրական եղանակ", "It is essential that he be…: сослагательное наклонение"],
        ["describing-data", "Describing graphs, tables and trends", "Գրաֆիկներ, աղյուսակներ և միտումներ", "Описание графиков, таблиц и тенденций"],
        ["essay-project", "Essay-project on a table or diagram", "Էսսե-նախագիծ աղյուսակի հիման վրա", "Эссе-проект по таблице или диаграмме"],
      ]),
      unit(t("Arts and leisure", "Արվեստ և հանգիստ", "Искусство и досуг"), t("Cinema, theatre and music, comparison of pictures (speaking), academic vocabulary.", "Կինո, թատրոն, երաժշտություն, նկարների համեմատություն (բանավոր), ակադեմիական բառապաշար։", "Кино, театр и музыка, сравнение картинок (говорение), академическая лексика."), [
        ["cinema-theatre", "Cinema and theatre", "Կինո և թատրոն", "Кино и театр"],
        ["comparing-pictures", "Speaking: comparing two pictures", "Բանավոր․ երկու նկարի համեմատություն", "Говорение: сравнение двух картинок"],
        ["academic-vocabulary", "Academic word list in use", "Ակադեմիական բառապաշար գործնականում", "Академическая лексика в действии"],
        ["grammar-transformations", "Grammar transformations (exam format)", "Քերականական փոխակերպումներ (քննական ձևաչափ)", "Грамматические трансформации (экзаменационный формат)"],
        ["year-11-exam-review", "Full mock exam and review", "Ամբողջական փորձնական քննություն և ամփոփում", "Полный пробный экзамен и разбор"],
      ]),
    ],
  ),

  course(
    12,
    ["Final-year course for Armenia's grade 12: intensive preparation for the unified English exam and B2 certification; advanced grammar review, text analysis, essay mastery and speaking fluency.", "Ավարտական դասընթաց Հայաստանի 12-րդ դասարանի համար․ ինտենսիվ պատրաստություն անգլերենի միասնական քննությանը և B2 հավաստագրին․ բարդ քերականության կրկնություն, տեքստի վերլուծություն, էսսե, բանավոր սահունություն։", "Выпускной курс для 12 класса Армении: интенсивная подготовка к единому экзамену по английскому и сертификации B2; повторение сложной грамматики, анализ текста, мастерство эссе, беглость речи."],
    ["Armenia grade 12 (3–4 h/week): graduation and unified entrance exam (centralised test, 20-point scale) for university admission; many pupils also take IELTS/TOEFL. The exam covers reading, grammar transformation, vocabulary, writing.", "Հայաստան, 12-րդ դասարան (3–4 ժ/շաբ.)՝ ավարտական և միասնական ընդունելության քննություն (կենտրոնացված թեստ, 20 բալ) բուհ ընդունվելու համար․ շատերը հանձնում են նաև IELTS/TOEFL։ Քննությունը ներառում է ընթերցանություն, քերականական փոխակերպումներ, բառապաշար, գիր։", "Армения, 12 класс (3–4 ч/нед.): выпускной и единый вступительный экзамен (централизованный тест, 20 баллов) для поступления в вуз; многие сдают также IELTS/TOEFL. Экзамен включает чтение, грамматические трансформации, лексику, письмо."],
    ["Russia has no grade 12. This course corresponds to the second half of Russian grade 11 (ЕГЭ preparation) and to first-year university English; it can be used as an advanced revision module.", "Ռուսաստանում 12-րդ դասարան չկա։ Այս դասընթացը համապատասխանում է ռուսական 11-րդ դասարանի երկրորդ կեսին (ЕГЭ պատրաստություն) և բուհի առաջին կուրսի անգլերենին․ կարելի է օգտագործել որպես առաջադեմ կրկնության մոդուլ։", "В России нет 12 класса. Этот курс соответствует второй половине российского 11 класса (подготовка к ЕГЭ) и английскому первого курса вуза; его можно использовать как модуль углублённого повторения."],
    { armenia: 4, russia: null },
    [
      unit(t("Grammar mastery", "Քերականության տիրապետում", "Мастерство грамматики"), t("Systematic review of tenses, conditionals, passive, reported speech and modals with exam-style transformations.", "Ժամանակների, պայմանականների, կրավորականի, անուղղակի խոսքի և մոդալների համակարգված կրկնություն քննական փոխակերպումներով։", "Систематическое повторение времён, условных, пассива, косвенной речи и модальных глаголов с экзаменационными трансформациями."), [
        ["tense-system-review", "The English tense system: full map", "Անգլերենի ժամանակների համակարգը․ ամբողջական քարտեզ", "Система времён английского: полная карта"],
        ["conditionals-wishes-review", "Conditionals, wishes and inversion", "Պայմանականներ, ցանկություններ և շրջադասություն", "Условные, желания и инверсия"],
        ["passive-causative-review", "Passive and causative structures", "Կրավորական և causative կառույցներ", "Пассив и causative-конструкции"],
        ["modals-review", "Modals in past, present and future", "Մոդալ բայեր անցյալում, ներկայում, ապառնիում", "Модальные глаголы в прошлом, настоящем и будущем"],
        ["articles-prepositions-review", "Articles and prepositions: tricky cases", "Հոդեր և նախդիրներ․ բարդ դեպքեր", "Артикли и предлоги: сложные случаи"],
      ]),
      unit(t("Vocabulary and word formation", "Բառապաշար և բառակազմություն", "Лексика и словообразование"), t("Collocations, phrasal verbs, confusable words, prefixes and suffixes for exam gap-fills.", "Բառակապակցություններ, դարձվածային բայեր, շփոթվող բառեր, նախածանցներ և վերջածանցներ։", "Коллокации, фразовые глаголы, легко путаемые слова, приставки и суффиксы для заданий на пропуски."), [
        ["collocations-advanced", "Advanced collocations", "Բարդ բառակապակցություններ", "Сложные коллокации"],
        ["phrasal-verbs-advanced", "Phrasal verbs: systematic review", "Դարձվածային բայեր․ համակարգված կրկնություն", "Фразовые глаголы: систематическое повторение"],
        ["confusable-words", "Confusable words: affect/effect, rise/raise", "Շփոթվող բառեր․ affect/effect, rise/raise", "Легко путаемые слова: affect/effect, rise/raise"],
        ["word-formation-exam", "Word formation for exam gap-fills", "Բառակազմություն քննական առաջադրանքների համար", "Словообразование для заданий на пропуски"],
      ]),
      unit(t("Reading and text analysis", "Ընթերցանություն և տեքստի վերլուծություն", "Чтение и анализ текста"), t("Skimming, scanning, inference, matching headings, multiple choice; literary and journalistic texts.", "Արագ և ուղղորդված ընթերցանություն, ենթատեքստ, վերնագրերի համապատասխանեցում, բազմընտրանք․ գրական և լրագրային տեքստեր։", "Беглое и поисковое чтение, выводы, подбор заголовков, множественный выбор; литературные и публицистические тексты."), [
        ["reading-strategies", "Reading strategies: skimming and scanning", "Ընթերցանության ռազմավարություններ", "Стратегии чтения: беглое и поисковое"],
        ["inference-tone", "Inference, tone and the writer's purpose", "Ենթատեքստ, տոն և հեղինակի նպատակ", "Выводы, тон и цель автора"],
        ["literary-extracts", "Reading literary extracts", "Գրական հատվածների ընթերցանություն", "Чтение литературных отрывков"],
        ["journalistic-texts", "Reading the press", "Մամուլ կարդալ", "Читаем прессу"],
      ]),
      unit(t("Writing and speaking for the exam", "Գիր և բանավոր խոսք քննության համար", "Письмо и говорение для экзамена"), t("Essay types, formal letters, summaries; speaking fluency, debate and presentation.", "Էսսեի տեսակներ, պաշտոնական նամակներ, ամփոփագրեր․ բանավոր սահունություն, բանավեճ և ներկայացում։", "Типы эссе, официальные письма, краткое изложение; беглость речи, дебаты и презентация."), [
        ["essay-types", "Essay types: opinion, discursive, problem–solution", "Էսսեի տեսակներ․ կարծիք, քննարկում, խնդիր–լուծում", "Типы эссе: мнение, дискурсивное, проблема–решение"],
        ["summary-writing", "Writing a summary", "Ամփոփագիր գրել", "Пишем краткое изложение"],
        ["debate-skills", "Debate: arguing a position", "Բանավեճ․ դիրքորոշման պաշտպանություն", "Дебаты: отстаиваем позицию"],
        ["presentation-skills", "Giving a presentation in English", "Ներկայացում անգլերենով", "Презентация на английском"],
        ["final-mock-exam", "Final mock exam and feedback", "Վերջնական փորձնական քննություն և վերլուծություն", "Итоговый пробный экзамен и разбор"],
      ]),
    ],
  ),
];
