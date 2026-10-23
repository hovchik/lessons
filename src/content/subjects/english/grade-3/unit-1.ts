import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Welcome back", "Բարի վերադարձ", "С возвращением"),
  summary: t(
    "Introducing yourself, spelling names, personal pronouns, the verb «to be», reading short and long vowels.",
    "Ներկայանալ, անունը տառ առ տառ ասել, անձնական դերանուններ, «to be» բայը, կարճ և երկար ձայնավորների ընթերցանություն։",
    "Представляемся, называем имя по буквам, личные местоимения, глагол «to be», чтение кратких и долгих гласных.",
  ),
  lessons: [
    lesson(
      "hello-my-name-is",
      ["Hello! My name is…", "Բարև, իմ անունը … է", "Привет! Меня зовут…"],
      {
        en: ["Greet a friend and say goodbye", "Introduce yourself with «My name is…» and «I am … years old»", "Ask «What's your name?», «How are you?» and «How old are you?»"],
        hy: ["Ողջունել ընկերոջը և հրաժեշտ տալ", "Ներկայանալ «My name is…» և «I am … years old» արտահայտություններով", "Հարցնել «What's your name?», «How are you?», «How old are you?»"],
        ru: ["Поздороваться с другом и попрощаться", "Представиться: «My name is…», «I am … years old»", "Спросить «What's your name?», «How are you?», «How old are you?»"],
      },
      {
        en: `## Let's say hello!

| English | When we say it |
|---|---|
| Hello! / Hi! | when we meet |
| Good morning! | before 12 o'clock |
| Good afternoon! | after 12 o'clock |
| Goodbye! / Bye! | when we leave |

## A dialogue

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too! How old are you?
> **Tom:** I'm nine. And you?
> **Anna:** I'm eight.

## Short forms

| Long | Short |
|---|---|
| What is | What's |
| I am | I'm |

We always write **I** with a capital letter.

### Exercises

1. What do you say in the morning when you meet your teacher?
2. Complete: *My ____ is Tom.*
3. Complete: *How ____ are you? — I'm nine.*
4. Answer: *How are you?*
5. Write the short form: *I am eight.*
6. Put the words in order: *name / your / What's / ?*
7. Write two sentences about yourself: your name and your age.

### Answers

1. Good morning! 2. name. 3. old. 4. I'm fine, thank you. 5. I'm eight. 6. What's your name? 7. Example: My name is Aram. I'm eight years old.`,
        hy: `## Ասենք բարև

| Անգլերեն | Երբ ենք ասում |
|---|---|
| Hello! / Hi! | հանդիպելիս |
| Good morning! | մինչև ժամը 12-ը |
| Good afternoon! | ժամը 12-ից հետո |
| Goodbye! / Bye! | հեռանալիս |

## Երկխոսություն

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too! How old are you?
> **Tom:** I'm nine. And you?
> **Anna:** I'm eight.

**My name is…**՝ իմ անունը … է։ **How are you?**՝ ինչպե՞ս ես։ **How old are you?**՝ քանի՞ տարեկան ես։

## Կարճ ձևեր

| Լրիվ | Կարճ |
|---|---|
| What is | What's |
| I am | I'm |

**I** (ես) դերանունը միշտ գրվում է մեծատառով։

### Վարժություններ

1. Ի՞նչ ես ասում առավոտյան ուսուցչիդ հանդիպելիս։
2. Լրացրո՛ւ. *My ____ is Tom.*
3. Լրացրո՛ւ. *How ____ are you? — I'm nine.*
4. Պատասխանի՛ր. *How are you?*
5. Գրի՛ր կարճ ձևով. *I am eight.*
6. Դասավորի՛ր բառերը. *name / your / What's / ?*
7. Գրի՛ր երկու նախադասություն քո մասին՝ անունդ և տարիքդ։

### Պատասխաններ

1. Good morning! 2. name։ 3. old։ 4. I'm fine, thank you. 5. I'm eight. 6. What's your name? 7. Օրինակ՝ My name is Aram. I'm eight years old.`,
        ru: `## Скажем «привет»!

| По-английски | Когда говорим |
|---|---|
| Hello! / Hi! | при встрече |
| Good morning! | до 12 часов |
| Good afternoon! | после 12 часов |
| Goodbye! / Bye! | при прощании |

## Диалог

> **Anna:** Hello! My name is Anna. What's your name?
> **Tom:** Hi, Anna! My name is Tom.
> **Anna:** How are you, Tom?
> **Tom:** I'm fine, thank you. And you?
> **Anna:** I'm fine too! How old are you?
> **Tom:** I'm nine. And you?
> **Anna:** I'm eight.

**My name is…** — меня зовут… **How are you?** — как дела? **How old are you?** — сколько тебе лет?

## Краткие формы

| Полная | Краткая |
|---|---|
| What is | What's |
| I am | I'm |

Слово **I** (я) всегда пишется с большой буквы.

### Упражнения

1. Что ты скажешь утром, когда встретишь учителя?
2. Дополни: *My ____ is Tom.*
3. Дополни: *How ____ are you? — I'm nine.*
4. Ответь: *How are you?*
5. Запиши кратко: *I am eight.*
6. Поставь слова по порядку: *name / your / What's / ?*
7. Напиши два предложения о себе: имя и возраст.

### Ответы

1. Good morning! 2. name. 3. old. 4. I'm fine, thank you. 5. I'm eight. 6. What's your name? 7. Например: My name is Aram. I'm eight years old.`,
      },
      [
        q(t("What do we say when we leave?", "Ի՞նչ ենք ասում հեռանալիս։", "Что мы говорим, когда уходим?"), [t("Hello!", "Hello!", "Hello!"), t("Goodbye!", "Goodbye!", "Goodbye!"), t("Thank you!", "Thank you!", "Thank you!")], 1),
        q(t("Which question asks for a name?", "Ո՞ր հարցն է անուն հարցնում։", "Какой вопрос спрашивает имя?"), [t("How are you?", "How are you?", "How are you?"), t("How old are you?", "How old are you?", "How old are you?"), t("What's your name?", "What's your name?", "What's your name?")], 2),
        q(t("«I'm nine» answers which question?", "«I'm nine»-ը ո՞ր հարցի պատասխանն է։", "«I'm nine» — ответ на какой вопрос?"), [t("How old are you?", "How old are you?", "How old are you?"), t("What's your name?", "What's your name?", "What's your name?"), t("How are you?", "How are you?", "How are you?")], 0),
        q(t("The short form of «I am» is…", "«I am»-ի կարճ ձևն է…", "Краткая форма «I am» —"), [t("Im", "Im", "Im"), t("I'm", "I'm", "I'm"), t("Iam", "Iam", "Iam")], 1),
        q(t("We say «Good afternoon» …", "«Good afternoon» ասում ենք…", "«Good afternoon» говорят…"), [t("after 12 o'clock", "ժամը 12-ից հետո", "после 12 часов"), t("before 12 o'clock", "մինչև ժամը 12-ը", "до 12 часов"), t("at night", "գիշերը", "ночью")], 0),
        q(t("A good answer to «How are you?» is…", "«How are you?» հարցի լավ պատասխանն է…", "Хороший ответ на «How are you?» —"), [t("I'm eight.", "I'm eight.", "I'm eight."), t("My name is Tom.", "My name is Tom.", "My name is Tom."), t("I'm fine, thank you.", "I'm fine, thank you.", "I'm fine, thank you.")], 2),
      ],
    ),
    lesson(
      "alphabet-spelling",
      ["The alphabet: How do you spell it?", "Այբուբենը․ How do you spell it?", "Алфавит: How do you spell it?"],
      {
        en: ["Say the 26 letters of the English alphabet in order", "Know the 5 vowel letters A, E, I, O, U", "Spell your name and ask «How do you spell it?»"],
        hy: ["Հերթականությամբ ասել անգլերեն այբուբենի 26 տառերը", "Իմանալ 5 ձայնավոր տառերը՝ A, E, I, O, U", "Տառ առ տառ ասել անունը և հարցնել «How do you spell it?»"],
        ru: ["Называть 26 букв английского алфавита по порядку", "Знать 5 гласных букв: A, E, I, O, U", "Называть имя по буквам и спрашивать «How do you spell it?»"],
      },
      {
        en: `## 26 letters

| Aa | Bb | Cc | Dd | Ee | Ff | Gg |
|---|---|---|---|---|---|---|
| **Hh** | **Ii** | **Jj** | **Kk** | **Ll** | **Mm** | **Nn** |
| **Oo** | **Pp** | **Qq** | **Rr** | **Ss** | **Tt** | **Uu** |
| **Vv** | **Ww** | **Xx** | **Yy** | **Zz** | | |

The **vowel letters** are **A, E, I, O, U**. The other 21 are consonant letters.

## Letter names that are easy to mix up

| Letter | Its name sounds like |
|---|---|
| A | "ay" (as in *day*) |
| E | "ee" (as in *see*) |
| I | "eye" |
| G | "jee" |
| J | "jay" |
| R | "ar" |
| Y | "why" |

## Spelling a name

> **Teacher:** What's your name?
> **Boy:** Davit.
> **Teacher:** How do you spell it?
> **Boy:** D – A – V – I – T.

### Exercises

1. How many letters are in the English alphabet?
2. Name the five vowel letters.
3. Which letter comes after **K**? Before **S**?
4. Spell these words aloud: *cat*, *book*, *red*.
5. Which word is spelled **P – E – N**?
6. Put in alphabetical order: *dog, apple, cat, bus*.
7. Spell your name and the name of a friend.

### Answers

1. 26. 2. A, E, I, O, U. 3. L; R. 4. C-A-T, B-O-O-K, R-E-D. 5. pen. 6. apple, bus, cat, dog. 7. Spell slowly, one letter at a time.`,
        hy: `## 26 տառ

| Aa | Bb | Cc | Dd | Ee | Ff | Gg |
|---|---|---|---|---|---|---|
| **Hh** | **Ii** | **Jj** | **Kk** | **Ll** | **Mm** | **Nn** |
| **Oo** | **Pp** | **Qq** | **Rr** | **Ss** | **Tt** | **Uu** |
| **Vv** | **Ww** | **Xx** | **Yy** | **Zz** | | |

**Ձայնավոր տառերն** են՝ **A, E, I, O, U**։ Մնացած 21-ը բաղաձայն տառեր են։

## Տառերի անուններ, որոնք հեշտ է շփոթել

| Տառ | Անունը հնչում է |
|---|---|
| A | «էյ» |
| E | «ի» |
| I | «այ» |
| G | «ջի» |
| J | «ջեյ» |
| R | «ա(ր)» |
| Y | «ուայ» |

## Անունը տառ առ տառ

> **Teacher:** What's your name?
> **Boy:** Davit.
> **Teacher:** How do you spell it?
> **Boy:** D – A – V – I – T.

**How do you spell it?**՝ ինչպե՞ս է գրվում (տառ առ տառ)։

### Վարժություններ

1. Քանի՞ տառ ունի անգլերեն այբուբենը։
2. Թվարկի՛ր հինգ ձայնավոր տառերը։
3. Ո՞ր տառն է գալիս **K**-ից հետո։ Իսկ **S**-ից առա՞ջ։
4. Տառ առ տառ ասա՛. *cat*, *book*, *red*։
5. Ո՞ր բառն է գրվում **P – E – N**։
6. Դասավորի՛ր այբբենական կարգով. *dog, apple, cat, bus*։
7. Տառ առ տառ ասա՛ քո և ընկերոջդ անունները։

### Պատասխաններ

1. 26։ 2. A, E, I, O, U։ 3. L, R։ 4. C-A-T, B-O-O-K, R-E-D։ 5. pen։ 6. apple, bus, cat, dog։ 7. Ասա՛ դանդաղ, տառ առ տառ։`,
        ru: `## 26 букв

| Aa | Bb | Cc | Dd | Ee | Ff | Gg |
|---|---|---|---|---|---|---|
| **Hh** | **Ii** | **Jj** | **Kk** | **Ll** | **Mm** | **Nn** |
| **Oo** | **Pp** | **Qq** | **Rr** | **Ss** | **Tt** | **Uu** |
| **Vv** | **Ww** | **Xx** | **Yy** | **Zz** | | |

**Гласные буквы**: **A, E, I, O, U**. Остальные 21 — согласные.

## Названия букв, которые легко перепутать

| Буква | Название звучит как |
|---|---|
| A | «эй» |
| E | «и» |
| I | «ай» |
| G | «джи» |
| J | «джей» |
| R | «а» |
| Y | «уай» |

## Называем имя по буквам

> **Teacher:** What's your name?
> **Boy:** Davit.
> **Teacher:** How do you spell it?
> **Boy:** D – A – V – I – T.

**How do you spell it?** — как это пишется (по буквам)?

### Упражнения

1. Сколько букв в английском алфавите?
2. Назови пять гласных букв.
3. Какая буква идёт после **K**? А перед **S**?
4. Назови по буквам: *cat*, *book*, *red*.
5. Какое слово пишется **P – E – N**?
6. Расставь по алфавиту: *dog, apple, cat, bus*.
7. Назови по буквам своё имя и имя друга.

### Ответы

1. 26. 2. A, E, I, O, U. 3. L; R. 4. C-A-T, B-O-O-K, R-E-D. 5. pen. 6. apple, bus, cat, dog. 7. Говори медленно, по одной букве.`,
      },
      [
        q(t("How many letters are in the English alphabet?", "Քանի՞ տառ ունի անգլերեն այբուբենը։", "Сколько букв в английском алфавите?"), [t("33", "33", "33"), t("26", "26", "26"), t("39", "39", "39")], 1),
        q(t("Which is a vowel letter?", "Ո՞րն է ձայնավոր տառ։", "Какая буква гласная?"), [t("O", "O", "O"), t("B", "B", "B"), t("T", "T", "T")], 0),
        q(t("Which letter comes after K?", "Ո՞ր տառն է գալիս K-ից հետո։", "Какая буква идёт после K?"), [t("J", "J", "J"), t("M", "M", "M"), t("L", "L", "L")], 2),
        q(t("How do you ask someone to spell a word?", "Ինչպե՞ս խնդրել, որ բառը տառ առ տառ ասեն։", "Как попросить назвать слово по буквам?"), [t("How do you spell it?", "How do you spell it?", "How do you spell it?"), t("How are you?", "How are you?", "How are you?"), t("How old are you?", "How old are you?", "How old are you?")], 0),
        q(t("Which word is spelled B – O – O – K?", "Ո՞ր բառն է գրվում B – O – O – K։", "Какое слово пишется B – O – O – K?"), [t("bag", "bag", "bag"), t("book", "book", "book"), t("box", "box", "box")], 1),
        q(t("Which word comes first in alphabetical order?", "Ո՞ր բառն է առաջինը այբբենական կարգով։", "Какое слово первое по алфавиту?"), [t("dog", "dog", "dog"), t("cat", "cat", "cat"), t("apple", "apple", "apple")], 2),
      ],
    ),
    lesson(
      "personal-pronouns",
      ["I, you, he, she, it, we, they", "I, you, he, she, it, we, they", "I, you, he, she, it, we, they"],
      {
        en: ["Know the seven personal pronouns", "Choose he, she or it for a person, animal or thing", "Replace names with pronouns in a sentence"],
        hy: ["Իմանալ յոթ անձնական դերանունները", "Ընտրել he, she կամ it՝ մարդու, կենդանու կամ առարկայի համար", "Նախադասության մեջ անունը փոխարինել դերանունով"],
        ru: ["Знать семь личных местоимений", "Выбирать he, she или it для человека, животного или предмета", "Заменять имена местоимениями в предложении"],
      },
      {
        en: `## Personal pronouns

| One | More than one |
|---|---|
| **I** — me | **we** — me and others |
| **you** — the person I talk to | **you** — the people I talk to |
| **he** — a boy or a man | **they** — people, animals or things |
| **she** — a girl or a woman | |
| **it** — a thing or an animal | |

## Examples

- **Tom** is my friend. → **He** is my friend.
- **Anna** is eight. → **She** is eight.
- **The book** is red. → **It** is red.
- **Tom and I** are friends. → **We** are friends.
- **The cats** are black. → **They** are black.

**Remember:** *you* is the same for one person and for many people.

### Exercises

Choose the pronoun.

1. *My mum* → ___
2. *My dad* → ___
3. *The ball* → ___
4. *Anna and Tom* → ___
5. *My sister and I* → ___
6. Rewrite with a pronoun: *The dog is big.*
7. Rewrite with a pronoun: *Mary and Kate are sisters.*

### Answers

1. she. 2. he. 3. it. 4. they. 5. we. 6. It is big. 7. They are sisters.`,
        hy: `## Անձնական դերանուններ

| Եզակի | Հոգնակի |
|---|---|
| **I**՝ ես | **we**՝ մենք |
| **you**՝ դու | **you**՝ դուք |
| **he**՝ նա (տղա, տղամարդ) | **they**՝ նրանք (մարդիկ, կենդանիներ, առարկաներ) |
| **she**՝ նա (աղջիկ, կին) | |
| **it**՝ այն (առարկա, կենդանի) | |

Հայերենում «նա»-ն մեկն է, իսկ անգլերենում երեքն են՝ **he**, **she**, **it**։

## Օրինակներ

- **Tom** is my friend. → **He** is my friend.
- **Anna** is eight. → **She** is eight.
- **The book** is red. → **It** is red.
- **Tom and I** are friends. → **We** are friends.
- **The cats** are black. → **They** are black.

**Հիշի՛ր.** *you*-ն նույնն է և՛ «դու», և՛ «դուք» իմաստով։

### Վարժություններ

Ընտրի՛ր դերանունը։

1. *My mum* → ___
2. *My dad* → ___
3. *The ball* → ___
4. *Anna and Tom* → ___
5. *My sister and I* → ___
6. Վերագրի՛ր դերանունով. *The dog is big.*
7. Վերագրի՛ր դերանունով. *Mary and Kate are sisters.*

### Պատասխաններ

1. she։ 2. he։ 3. it։ 4. they։ 5. we։ 6. It is big. 7. They are sisters.`,
        ru: `## Личные местоимения

| Один | Много |
|---|---|
| **I** — я | **we** — мы |
| **you** — ты | **you** — вы |
| **he** — он (мальчик, мужчина) | **they** — они (люди, животные, предметы) |
| **she** — она (девочка, женщина) | |
| **it** — он, она, оно (предмет, животное) | |

В английском предметы и животные обычно называют **it**, даже если по-русски это «он» или «она»: *the book* — **it**.

## Примеры

- **Tom** is my friend. → **He** is my friend.
- **Anna** is eight. → **She** is eight.
- **The book** is red. → **It** is red.
- **Tom and I** are friends. → **We** are friends.
- **The cats** are black. → **They** are black.

**Запомни:** *you* — это и «ты», и «вы».

### Упражнения

Выбери местоимение.

1. *My mum* → ___
2. *My dad* → ___
3. *The ball* → ___
4. *Anna and Tom* → ___
5. *My sister and I* → ___
6. Перепиши с местоимением: *The dog is big.*
7. Перепиши с местоимением: *Mary and Kate are sisters.*

### Ответы

1. she. 2. he. 3. it. 4. they. 5. we. 6. It is big. 7. They are sisters.`,
      },
      [
        q(t("«My brother» → ?", "«My brother» → ?", "«My brother» → ?"), [t("she", "she", "she"), t("he", "he", "he"), t("it", "it", "it")], 1),
        q(t("«The pencil» → ?", "«The pencil» → ?", "«The pencil» → ?"), [t("it", "it", "it"), t("he", "he", "he"), t("they", "they", "they")], 0),
        q(t("«Anna and Kate» → ?", "«Anna and Kate» → ?", "«Anna and Kate» → ?"), [t("she", "she", "she"), t("we", "we", "we"), t("they", "they", "they")], 2),
        q(t("«Tom and I» → ?", "«Tom and I» → ?", "«Tom and I» → ?"), [t("we", "we", "we"), t("they", "they", "they"), t("you", "you", "you")], 0),
        q(t("Which pronoun is for a girl?", "Ո՞ր դերանունն է աղջկա համար։", "Какое местоимение для девочки?"), [t("he", "he", "he"), t("she", "she", "she"), t("it", "it", "it")], 1),
        q(t("Which pronoun means both «you» (one) and «you» (many)?", "Ո՞ր դերանունն է նշանակում և՛ «դու», և՛ «դուք»։", "Какое местоимение значит и «ты», и «вы»?"), [t("they", "they", "they"), t("we", "we", "we"), t("you", "you", "you")], 2),
      ],
    ),
    lesson(
      "verb-to-be",
      ["The verb «to be»: am, is, are", "«to be» բայը․ am, is, are", "Глагол «to be»: am, is, are"],
      {
        en: ["Use am, is and are with the right pronoun", "Make negative sentences with not and short forms", "Ask and answer yes/no questions: Are you…? Yes, I am."],
        hy: ["Ճիշտ դերանվան հետ գործածել am, is, are", "Կազմել ժխտական նախադասություններ not-ով և կարճ ձևերով", "Տալ և պատասխանել Are you…? հարցերին"],
        ru: ["Употреблять am, is, are с нужным местоимением", "Строить отрицания с not и краткими формами", "Задавать вопросы Are you…? и отвечать Yes, I am."],
      },
      {
        en: `## am, is, are

| Pronoun | to be | Short form |
|---|---|---|
| I | **am** | I'm |
| he / she / it | **is** | he's, she's, it's |
| we / you / they | **are** | we're, you're, they're |

- I **am** a pupil.
- She **is** my sister. It **is** a cat.
- We **are** friends. They **are** in the park.

## Negative: add *not*

I **am not** (I'm not) sad. He **is not** (isn't) tall. They **are not** (aren't) at home.

## Questions: put the verb first

| Question | Yes | No |
|---|---|---|
| **Are** you nine? | Yes, I am. | No, I'm not. |
| **Is** he your brother? | Yes, he is. | No, he isn't. |
| **Is** it a dog? | Yes, it is. | No, it isn't. |
| **Are** they at school? | Yes, they are. | No, they aren't. |

### Exercises

1. I ___ eight.
2. My dad ___ a doctor.
3. We ___ in class 3.
4. Make negative: *It is a cat.*
5. Make a question: *You are happy.*
6. Answer: *Is your teacher a woman?* (yes)
7. Correct the mistake: *They is my friends.*

### Answers

1. am. 2. is. 3. are. 4. It isn't a cat. / It is not a cat. 5. Are you happy? 6. Yes, she is. 7. They are my friends.`,
        hy: `## am, is, are

**to be** բայը նշանակում է «լինել»։ Հայերենում ասում ենք «ես աշակերտ **եմ**», անգլերենում՝ «I **am** a pupil»։

| Դերանուն | to be | Կարճ ձև |
|---|---|---|
| I | **am** | I'm |
| he / she / it | **is** | he's, she's, it's |
| we / you / they | **are** | we're, you're, they're |

- I **am** a pupil.
- She **is** my sister. It **is** a cat.
- We **are** friends. They **are** in the park.

## Ժխտում՝ ավելացրո՛ւ *not*

I **am not** (I'm not) sad. He **is not** (isn't) tall. They **are not** (aren't) at home.

## Հարց՝ բայը դիր առաջ

| Հարց | Այո | Ոչ |
|---|---|---|
| **Are** you nine? | Yes, I am. | No, I'm not. |
| **Is** he your brother? | Yes, he is. | No, he isn't. |
| **Is** it a dog? | Yes, it is. | No, it isn't. |
| **Are** they at school? | Yes, they are. | No, they aren't. |

### Վարժություններ

1. I ___ eight.
2. My dad ___ a doctor.
3. We ___ in class 3.
4. Դարձրո՛ւ ժխտական. *It is a cat.*
5. Կազմի՛ր հարց. *You are happy.*
6. Պատասխանի՛ր. *Is your teacher a woman?* (այո)
7. Ուղղի՛ր սխալը. *They is my friends.*

### Պատասխաններ

1. am։ 2. is։ 3. are։ 4. It isn't a cat. 5. Are you happy? 6. Yes, she is. 7. They are my friends.`,
        ru: `## am, is, are

Глагол **to be** значит «быть, являться». По-русски мы говорим «я ученик», а по-английски обязательно нужен глагол: «I **am** a pupil».

| Местоимение | to be | Краткая форма |
|---|---|---|
| I | **am** | I'm |
| he / she / it | **is** | he's, she's, it's |
| we / you / they | **are** | we're, you're, they're |

- I **am** a pupil.
- She **is** my sister. It **is** a cat.
- We **are** friends. They **are** in the park.

## Отрицание: добавь *not*

I **am not** (I'm not) sad. He **is not** (isn't) tall. They **are not** (aren't) at home.

## Вопрос: глагол ставим вперёд

| Вопрос | Да | Нет |
|---|---|---|
| **Are** you nine? | Yes, I am. | No, I'm not. |
| **Is** he your brother? | Yes, he is. | No, he isn't. |
| **Is** it a dog? | Yes, it is. | No, it isn't. |
| **Are** they at school? | Yes, they are. | No, they aren't. |

### Упражнения

1. I ___ eight.
2. My dad ___ a doctor.
3. We ___ in class 3.
4. Сделай отрицание: *It is a cat.*
5. Задай вопрос: *You are happy.*
6. Ответь: *Is your teacher a woman?* (да)
7. Исправь ошибку: *They is my friends.*

### Ответы

1. am. 2. is. 3. are. 4. It isn't a cat. 5. Are you happy? 6. Yes, she is. 7. They are my friends.`,
      },
      [
        q(t("She ___ my friend.", "She ___ my friend.", "She ___ my friend."), [t("am", "am", "am"), t("are", "are", "are"), t("is", "is", "is")], 2),
        q(t("We ___ at school.", "We ___ at school.", "We ___ at school."), [t("are", "are", "are"), t("is", "is", "is"), t("am", "am", "am")], 0),
        q(t("The short form of «he is» is…", "«he is»-ի կարճ ձևն է…", "Краткая форма «he is» —"), [t("hes", "hes", "hes"), t("he's", "he's", "he's"), t("he'is", "he'is", "he'is")], 1),
        q(t("Which question is correct?", "Ո՞ր հարցն է ճիշտ։", "Какой вопрос правильный?"), [t("You are nine?", "You are nine?", "You are nine?"), t("Is you nine?", "Is you nine?", "Is you nine?"), t("Are you nine?", "Are you nine?", "Are you nine?")], 2),
        q(t("«Is it a dog?» — «No, …»", "«Is it a dog?» — «No, …»", "«Is it a dog?» — «No, …»"), [t("it isn't.", "it isn't.", "it isn't."), t("it aren't.", "it aren't.", "it aren't."), t("I'm not.", "I'm not.", "I'm not.")], 0),
        q(t("I ___ nine years old.", "I ___ nine years old.", "I ___ nine years old."), [t("is", "is", "is"), t("am", "am", "am"), t("are", "are", "are")], 1),
      ],
    ),
    lesson(
      "reading-short-vowels",
      ["Reading: short vowels in cat, pen, pig, dog, bus", "Ընթերցանություն․ կարճ ձայնավորներ cat, pen, pig, dog, bus", "Чтение: краткие гласные в cat, pen, pig, dog, bus"],
      {
        en: ["Read the short vowel sounds of A, E, I, O, U", "Read closed-syllable words: consonant + vowel + consonant", "Blend and spell short words"],
        hy: ["Կարդալ A, E, I, O, U տառերի կարճ հնչյունները", "Կարդալ փակ վանկով բառեր՝ բաղաձայն + ձայնավոր + բաղաձայն", "Հնչյուններից կազմել և գրել կարճ բառեր"],
        ru: ["Читать краткие звуки букв A, E, I, O, U", "Читать слова с закрытым слогом: согласная + гласная + согласная", "Сливать звуки и писать короткие слова"],
      },
      {
        en: `## The closed syllable

When a vowel letter is **closed** by a consonant at the end (c**a**t, p**e**n), it makes its **short** sound.

| Letter | Short sound | Words |
|---|---|---|
| a | [æ] | cat, bag, map, hat |
| e | [e] | pen, bed, red, ten |
| i | [ɪ] | pig, sit, big, six |
| o | [ɒ] | dog, box, hot, frog |
| u | [ʌ] | bus, sun, cup, run |

## Blending

Say each sound, then join them: **c – a – t → cat**, **s – u – n → sun**.

## Read the sentences

*A big red bus. A fat cat on a mat. Ten hens in a pen.*

### Exercises

1. Read: *hat, leg, pin, hot, cup*.
2. Which word has the short **i** sound: *bed, sit, sun*?
3. Change one letter to make a new word: *cat → c_t* (a bed for a baby).
4. Blend: *d – o – g*, *b – e – d*, *m – u – d*.
5. Find the odd one out by the vowel sound: *pig, six, ten, sit*.
6. Write three words that rhyme with **cat**.
7. Read and draw: *A big pig in a red box.*

### Answers

1. Read each word with the short sound. 2. sit. 3. cot. 4. dog, bed, mud. 5. ten (short e; the others have short i). 6. Example: hat, mat, bat. 7. Draw a big pig in a red box.`,
        hy: `## Փակ վանկ

Երբ ձայնավոր տառից հետո բառի վերջում բաղաձայն է (c**a**t, p**e**n), վանկը **փակ** է, և ձայնավորը կարդացվում է **կարճ**։

| Տառ | Կարճ հնչյուն | Մոտավորապես | Բառեր |
|---|---|---|---|
| a | [æ] | ա-ի և է-ի միջև | cat, bag, map, hat |
| e | [e] | է | pen, bed, red, ten |
| i | [ɪ] | կարճ ի | pig, sit, big, six |
| o | [ɒ] | կարճ օ | dog, box, hot, frog |
| u | [ʌ] | կարճ ա | bus, sun, cup, run |

## Միաձուլում

Ասա՛ ամեն հնչյունը, հետո միացրո՛ւ՝ **c – a – t → cat**, **s – u – n → sun**։

## Կարդա՛ նախադասությունները

*A big red bus. A fat cat on a mat. Ten hens in a pen.*

### Վարժություններ

1. Կարդա՛. *hat, leg, pin, hot, cup*։
2. Ո՞ր բառում է կարճ **i** հնչյունը. *bed, sit, sun*։
3. Մեկ տառ փոխի՛ր և նոր բառ ստացի՛ր. *cat → c_t* (երեխայի մահճակալ)։
4. Միաձուլի՛ր. *d – o – g*, *b – e – d*, *m – u – d*։
5. Գտի՛ր ավելորդը ըստ ձայնավորի. *pig, six, ten, sit*։
6. Գրի՛ր երեք բառ, որոնք հանգավորվում են **cat**-ի հետ։
7. Կարդա՛ և նկարի՛ր. *A big pig in a red box.*

### Պատասխաններ

1. Կարդա՛ կարճ հնչյունով։ 2. sit։ 3. cot։ 4. dog, bed, mud։ 5. ten (կարճ e, մյուսներում՝ կարճ i)։ 6. Օրինակ՝ hat, mat, bat։ 7. Նկարի՛ր մեծ խոզ կարմիր արկղում։`,
        ru: `## Закрытый слог

Когда после гласной буквы в конце слова стоит согласная (c**a**t, p**e**n), слог **закрытый**, и гласная читается **кратко**.

| Буква | Краткий звук | Примерно как | Слова |
|---|---|---|---|
| a | [æ] | между «а» и «э» | cat, bag, map, hat |
| e | [e] | «э» | pen, bed, red, ten |
| i | [ɪ] | краткое «и» | pig, sit, big, six |
| o | [ɒ] | краткое «о» | dog, box, hot, frog |
| u | [ʌ] | краткое «а» | bus, sun, cup, run |

## Слияние звуков

Скажи каждый звук и соедини: **c – a – t → cat**, **s – u – n → sun**.

## Прочитай предложения

*A big red bus. A fat cat on a mat. Ten hens in a pen.*

### Упражнения

1. Прочитай: *hat, leg, pin, hot, cup*.
2. В каком слове краткий звук **i**: *bed, sit, sun*?
3. Измени одну букву: *cat → c_t* (детская кроватка).
4. Слей звуки: *d – o – g*, *b – e – d*, *m – u – d*.
5. Найди лишнее по гласному звуку: *pig, six, ten, sit*.
6. Напиши три слова, которые рифмуются с **cat**.
7. Прочитай и нарисуй: *A big pig in a red box.*

### Ответы

1. Читай с кратким звуком. 2. sit. 3. cot. 4. dog, bed, mud. 5. ten (краткое e, в остальных — краткое i). 6. Например: hat, mat, bat. 7. Нарисуй большую свинку в красной коробке.`,
      },
      [
        q(t("Which word has a short «a»?", "Ո՞ր բառում է կարճ «a»-ն։", "В каком слове краткое «a»?"), [t("cat", "cat", "cat"), t("cake", "cake", "cake"), t("name", "name", "name")], 0),
        q(t("Blend: s – u – n", "Միաձուլի՛ր. s – u – n", "Слей звуки: s – u – n"), [t("sin", "sin", "sin"), t("son", "son", "son"), t("sun", "sun", "sun")], 2),
        q(t("Which word rhymes with «dog»?", "Ո՞ր բառն է հանգավորվում «dog»-ի հետ։", "Какое слово рифмуется с «dog»?"), [t("dig", "dig", "dig"), t("frog", "frog", "frog"), t("dot", "dot", "dot")], 1),
        q(t("In «bed» the letter e sounds…", "«bed» բառում e-ն կարդացվում է…", "В «bed» буква e читается…"), [t("short, like in «pen»", "կարճ, ինչպես «pen»-ում", "кратко, как в «pen»"), t("like its name «ee»", "իր անվան պես՝ «ի»", "как своё название «и»"), t("it is silent", "չի կարդացվում", "не читается")], 0),
        q(t("A syllable ending in a consonant is…", "Բաղաձայնով ավարտվող վանկը…", "Слог, оканчивающийся на согласную, —"), [t("open", "բաց է", "открытый"), t("closed", "փակ է", "закрытый"), t("long", "երկար է", "долгий")], 1),
        q(t("Which word has a different vowel sound: pig, six, ten?", "Ո՞ր բառի ձայնավորն է տարբեր. pig, six, ten", "У какого слова другой гласный: pig, six, ten?"), [t("pig", "pig", "pig"), t("six", "six", "six"), t("ten", "ten", "ten")], 2),
      ],
    ),
    lesson(
      "reading-long-vowels",
      ["Reading: magic «e» in name, Pete, kite, nose, cute", "Ընթերցանություն․ «կախարդական e»-ն name, kite, nose բառերում", "Чтение: «волшебное e» в name, kite, nose"],
      {
        en: ["Know that a silent final «e» makes the vowel say its name", "Read open-syllable words: name, Pete, kite, nose, cute", "Tell short from long vowels in pairs like cap – cape"],
        hy: ["Իմանալ, որ բառավերջի չկարդացվող «e»-ն ձայնավորին ստիպում է կարդալ իր անունով", "Կարդալ name, Pete, kite, nose, cute բառերը", "Տարբերել կարճ և երկար ձայնավորները՝ cap – cape"],
        ru: ["Знать, что немое «e» на конце заставляет гласную читаться как в алфавите", "Читать слова name, Pete, kite, nose, cute", "Различать краткие и долгие гласные в парах cap – cape"],
      },
      {
        en: `## The magic «e»

An **e** at the end of a word is **silent**, but it has magic: it makes the vowel before it say its **name** (as in the alphabet). The syllable is now **open**.

| Letter | Long sound (its name) | Words |
|---|---|---|
| a | [eɪ] | name, cake, plate, game |
| e | [iː] | Pete, these |
| i | [aɪ] | kite, five, bike, nine |
| o | [əʊ] | nose, home, rose, bone |
| u | [juː] | cute, tube, use |

## Short or long?

| Short (closed) | Long (magic e) |
|---|---|
| cap | cape |
| pin | pine |
| hop | hope |
| cub | cube |

Short open words like **he, she, we, me, go, no** also have a long vowel: the syllable ends with the vowel.

### Exercises

1. Read: *name, bike, home, cute, five*.
2. Add the magic e and read: *kit → ___*, *not → ___*, *tub → ___*.
3. Short or long? *bag, cake, nine, sit, rose*.
4. Which letter is silent in **kite**?
5. Read: *Mike has a white bike. Jane has a cake.*
6. Find the word with a long **o**: *dog, box, home*.
7. Write two long-vowel words for each letter: a, i, o.

### Answers

1. Read each vowel as its name. 2. kite, note, tube. 3. bag short, cake long, nine long, sit short, rose long. 4. The last e. 5. Read aloud. 6. home. 7. Example: name, game; bike, five; nose, home.`,
        hy: `## «Կախարդական e»

Բառի վերջում **e**-ն **չի կարդացվում**, բայց կախարդանք ունի. նրանից առաջ եկող ձայնավորը կարդացվում է իր **անունով** (ինչպես այբուբենում)։ Վանկն այժմ **բաց** է։

| Տառ | Երկար հնչյուն | Մոտավորապես | Բառեր |
|---|---|---|---|
| a | [eɪ] | էյ | name, cake, plate, game |
| e | [iː] | ի | Pete, these |
| i | [aɪ] | այ | kite, five, bike, nine |
| o | [əʊ] | օու | nose, home, rose, bone |
| u | [juː] | յու | cute, tube, use |

## Կարճ, թե՞ երկար

| Կարճ (փակ վանկ) | Երկար (կախարդական e) |
|---|---|
| cap | cape |
| pin | pine |
| hop | hope |
| cub | cube |

**he, she, we, me, go, no** կարճ բառերում նույնպես ձայնավորը երկար է, որովհետև վանկն ավարտվում է ձայնավորով։

### Վարժություններ

1. Կարդա՛. *name, bike, home, cute, five*։
2. Ավելացրո՛ւ կախարդական e և կարդա՛. *kit → ___*, *not → ___*, *tub → ___*։
3. Կա՞րճ, թե՞ երկար. *bag, cake, nine, sit, rose*։
4. Ո՞ր տառը չի կարդացվում **kite** բառում։
5. Կարդա՛. *Mike has a white bike. Jane has a cake.*
6. Գտի՛ր երկար **o**-ով բառը. *dog, box, home*։
7. Գրի՛ր երկար ձայնավորով երկուական բառ a, i, o տառերի համար։

### Պատասխաններ

1. Ձայնավորը կարդա՛ իր անունով։ 2. kite, note, tube։ 3. bag՝ կարճ, cake՝ երկար, nine՝ երկար, sit՝ կարճ, rose՝ երկար։ 4. Վերջին e-ն։ 5. Կարդա՛ բարձրաձայն։ 6. home։ 7. Օրինակ՝ name, game, bike, five, nose, home։`,
        ru: `## «Волшебное e»

Буква **e** на конце слова **не читается**, но у неё есть волшебство: гласная перед ней читается **как в алфавите**. Слог становится **открытым**.

| Буква | Долгий звук | Примерно | Слова |
|---|---|---|---|
| a | [eɪ] | эй | name, cake, plate, game |
| e | [iː] | и | Pete, these |
| i | [aɪ] | ай | kite, five, bike, nine |
| o | [əʊ] | оу | nose, home, rose, bone |
| u | [juː] | ю | cute, tube, use |

## Кратко или долго?

| Кратко (закрытый слог) | Долго (волшебное e) |
|---|---|
| cap | cape |
| pin | pine |
| hop | hope |
| cub | cube |

В коротких словах **he, she, we, me, go, no** гласная тоже долгая: слог кончается на гласную.

### Упражнения

1. Прочитай: *name, bike, home, cute, five*.
2. Добавь волшебное e и прочитай: *kit → ___*, *not → ___*, *tub → ___*.
3. Кратко или долго? *bag, cake, nine, sit, rose*.
4. Какая буква не читается в **kite**?
5. Прочитай: *Mike has a white bike. Jane has a cake.*
6. Найди слово с долгим **o**: *dog, box, home*.
7. Напиши по два слова с долгой гласной для a, i, o.

### Ответы

1. Читай гласную как в алфавите. 2. kite, note, tube. 3. bag — кратко, cake — долго, nine — долго, sit — кратко, rose — долго. 4. Последняя e. 5. Прочитай вслух. 6. home. 7. Например: name, game; bike, five; nose, home.`,
      },
      [
        q(t("In «kite», the final e is…", "«kite» բառում վերջին e-ն…", "В «kite» последняя e…"), [t("silent", "չի կարդացվում", "не читается"), t("read as «ee»", "կարդացվում է «ի»", "читается «и»"), t("read as «e»", "կարդացվում է «է»", "читается «э»")], 0),
        q(t("Add the magic e: «hop» → ?", "Ավելացրո՛ւ e. «hop» → ?", "Добавь e: «hop» → ?"), [t("hip", "hip", "hip"), t("hope", "hope", "hope"), t("hoop", "hoop", "hoop")], 1),
        q(t("Which word has a long «a»?", "Ո՞ր բառում է երկար «a»-ն։", "В каком слове долгое «a»?"), [t("bag", "bag", "bag"), t("hat", "hat", "hat"), t("cake", "cake", "cake")], 2),
        q(t("In «five» the letter i sounds like…", "«five» բառում i-ն կարդացվում է…", "В «five» буква i читается как…"), [t("[aɪ], like its name", "[aɪ]՝ իր անունով", "[aɪ], как в алфавите"), t("short [ɪ]", "կարճ [ɪ]", "краткое [ɪ]"), t("it is silent", "չի կարդացվում", "не читается")], 0),
        q(t("Which pair is short – long?", "Ո՞ր զույգն է կարճ – երկար։", "Какая пара «кратко – долго»?"), [t("cap – cat", "cap – cat", "cap – cat"), t("pin – pine", "pin – pine", "pin – pine"), t("nose – rose", "nose – rose", "nose – rose")], 1),
        q(t("Which word has a long «o»?", "Ո՞ր բառում է երկար «o»-ն։", "В каком слове долгое «o»?"), [t("dog", "dog", "dog"), t("box", "box", "box"), t("home", "home", "home")], 2),
      ],
    ),
  ],
};
