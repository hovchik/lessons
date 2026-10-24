import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Hello, English!", "Բարև, անգլերեն", "Привет, английский!"),
  summary: t(
    "Greetings, names, «How are you?», the alphabet song, letters A–Z and their sounds.",
    "Ողջույններ, անուններ, «How are you?», այբուբենի երգը, A–Z տառերը և դրանց հնչյունները։",
    "Приветствия, имена, «How are you?», песенка-алфавит, буквы A–Z и их звуки.",
  ),
  lessons: [
    lesson(
      "hello-goodbye",
      ["Hello and goodbye", "Բարև և ցտեսություն", "Hello и goodbye"],
      {
        en: ["Say hello and goodbye in English", "Use «Good morning» and «Good night» at the right time", "Wave and answer when someone greets you"],
        hy: ["Անգլերեն ասել բարև և ցտեսություն", "Ճիշտ ժամին ասել «Good morning» և «Good night»", "Պատասխանել, երբ քեզ ողջունում են"],
        ru: ["Здороваться и прощаться по-английски", "Говорить «Good morning» и «Good night» в нужное время", "Отвечать на приветствие"],
      },
      {
        en: `## Hello!

| English | When |
|---|---|
| Hello! / Hi! | when we meet |
| Good morning! | in the morning |
| Good night! | before going to bed |
| Goodbye! / Bye! | when we leave |
| See you! | to a friend, when we leave |

## A little dialogue

> **Teacher:** Good morning, children!\\
> **Children:** Good morning, teacher!

> **Ani:** Bye, Tom!\\
> **Tom:** Bye, Ani! See you!

## Game: Hello circle

Stand in a circle. Wave to the child next to you and say «Hello, …!» with his or her name. That child answers «Hi!» and greets the next one.

### Exercises

1. What do you say when you meet a friend?
2. What do you say to your teacher in the morning?
3. What do you say to Mum before you go to sleep?
4. What do you say when you leave school?
5. Answer: «Good morning, children!»
6. Which is short for «Goodbye»?
7. Play the Hello circle with your family.

### Answers

1. Hello! or Hi! 2. Good morning! 3. Good night! 4. Goodbye! or Bye! 5. Good morning, teacher! 6. Bye! 7. Play the game.`,
        hy: `## Hello!

| Անգլերեն | Ինչպես ենք կարդում | Երբ |
|---|---|---|
| Hello! / Hi! | [հելոու] / [հայ] | հանդիպելիս |
| Good morning! | [գուդ մորնինգ] | առավոտյան |
| Good night! | [գուդ նայթ] | քնելուց առաջ |
| Goodbye! / Bye! | [գուդբայ] / [բայ] | հեռանալիս |
| See you! | [սի յու] | ընկերոջը, հեռանալիս |

Քառակուսի փակագծերում հայերեն տառերով գրված է մոտավոր արտասանությունը։

## Փոքրիկ երկխոսություն

> **Teacher:** Good morning, children! (*Բարի լույս, երեխաներ։*)\\
> **Children:** Good morning, teacher! (*Բարի լույս, ուսուցիչ։*)

> **Ani:** Bye, Tom!\\
> **Tom:** Bye, Ani! See you! (*Կհանդիպենք։*)

## Խաղ՝ Hello շրջան

Կանգնե՛ք շրջանով։ Ձեռքով արեք կողքի երեխային և ասեք «Hello, …!»՝ նրա անունով։ Նա պատասխանում է «Hi!» և ողջունում հաջորդին։

### Վարժություններ

1. Ի՞նչ ես ասում, երբ հանդիպում ես ընկերոջը։
2. Ի՞նչ ես ասում ուսուցչին առավոտյան։
3. Ի՞նչ ես ասում մայրիկին քնելուց առաջ։
4. Ի՞նչ ես ասում դպրոցից գնալիս։
5. Պատասխանի՛ր՝ «Good morning, children!»։
6. Ո՞րն է «Goodbye»-ի կարճ ձևը։
7. Խաղա՛ Hello շրջանը ընտանիքի հետ։

### Պատասխաններ

1. Hello! կամ Hi!։ 2. Good morning!։ 3. Good night!։ 4. Goodbye! կամ Bye!։ 5. Good morning, teacher!։ 6. Bye!։ 7. Խաղացե՛ք։`,
        ru: `## Hello!

| По-английски | Как читаем | Когда |
|---|---|---|
| Hello! / Hi! | [хэлоу] / [хай] | при встрече |
| Good morning! | [гуд монинг] | утром |
| Good night! | [гуд найт] | перед сном |
| Goodbye! / Bye! | [гудбай] / [бай] | при прощании |
| See you! | [си ю] | другу, при прощании |

В скобках русскими буквами записано примерное произношение.

## Маленький диалог

> **Teacher:** Good morning, children! (*Доброе утро, дети!*)\\
> **Children:** Good morning, teacher! (*Доброе утро, учитель!*)

> **Ani:** Bye, Tom!\\
> **Tom:** Bye, Ani! See you! (*Увидимся!*)

## Игра «Hello по кругу»

Встаньте в круг. Помаши соседу и скажи «Hello, …!» с его именем. Он отвечает «Hi!» и здоровается со следующим.

### Упражнения

1. Что ты скажешь, когда встретишь друга?
2. Что ты скажешь учителю утром?
3. Что ты скажешь маме перед сном?
4. Что ты скажешь, уходя из школы?
5. Ответь: «Good morning, children!»
6. Как коротко сказать «Goodbye»?
7. Поиграй в «Hello по кругу» с семьёй.

### Ответы

1. Hello! или Hi! 2. Good morning! 3. Good night! 4. Goodbye! или Bye! 5. Good morning, teacher! 6. Bye! 7. Поиграйте.`,
      },
      [
        q(t("You meet a friend. You say…", "Հանդիպում ես ընկերոջը։ Ասում ես…", "Ты встретил друга. Ты говоришь…"), [t("Good night!", "Good night!", "Good night!"), t("Hello!", "Hello!", "Hello!"), t("Bye!", "Bye!", "Bye!")], 1),
        q(t("Before bed you say…", "Քնելուց առաջ ասում ես…", "Перед сном говорят…"), [t("Good night!", "Good night!", "Good night!"), t("Good morning!", "Good morning!", "Good morning!"), t("Hi!", "Hi!", "Hi!")], 0),
        q(t("When you leave you say…", "Հեռանալիս ասում ես…", "Уходя, говорят…"), [t("Hello!", "Hello!", "Hello!"), t("Good morning!", "Good morning!", "Good morning!"), t("Goodbye!", "Goodbye!", "Goodbye!")], 2),
        q(t("In the morning the teacher says…", "Առավոտյան ուսուցիչն ասում է…", "Утром учитель говорит…"), [t("Good night, children!", "Good night, children!", "Good night, children!"), t("Good morning, children!", "Good morning, children!", "Good morning, children!"), t("Bye, children!", "Bye, children!", "Bye, children!")], 1),
        q(t("«Hi!» means the same as…", "«Hi!»-ն նույնն է, ինչ…", "«Hi!» значит то же, что…"), [t("Hello!", "Hello!", "Hello!"), t("Goodbye!", "Goodbye!", "Goodbye!"), t("Good night!", "Good night!", "Good night!")], 0),
        q(t("«See you!» is said…", "«See you!»-ն ասում ենք…", "«See you!» говорят…"), [t("when we meet", "հանդիպելիս", "при встрече"), t("in the morning", "առավոտյան", "утром"), t("when we leave", "հեռանալիս", "при прощании")], 2),
      ],
    ),
    lesson(
      "whats-your-name",
      ["What's your name?", "Ի՞նչ է քո անունը", "Как тебя зовут?"],
      {
        en: ["Ask «What's your name?»", "Answer «My name is…» and «I'm…»", "Say «Nice to meet you!»"],
        hy: ["Հարցնել «What's your name?»", "Պատասխանել «My name is…» և «I'm…»", "Ասել «Nice to meet you!»"],
        ru: ["Спрашивать «What's your name?»", "Отвечать «My name is…» и «I'm…»", "Говорить «Nice to meet you!»"],
      },
      {
        en: `## Meeting a new friend

> **Lily:** Hello! What's your name?\\
> **Aram:** My name is Aram. And you?\\
> **Lily:** I'm Lily. Nice to meet you!\\
> **Aram:** Nice to meet you too!

| Phrase | Meaning |
|---|---|
| What's your name? | asking someone's name |
| My name is Aram. | telling your name |
| I'm Lily. | a short way to tell your name |
| Nice to meet you! | said when you meet someone new |

## Who is it?

Point to a friend: «**His** name is Tom.» (a boy) «**Her** name is Ani.» (a girl)

## Game: Ball of names

Throw a soft ball. Whoever catches it says «My name is …!» and throws it on, asking «What's your name?».

### Exercises

1. How do you ask someone's name?
2. Answer: «What's your name?»
3. Finish: «I'm …»
4. What do you say to a new friend after you learn the name?
5. His or her: «___ name is Davit.»
6. His or her: «___ name is Mariam.»
7. Ask three people at home their names in English.

### Answers

1. What's your name? 2. My name is … 3. Your name. 4. Nice to meet you! 5. His. 6. Her. 7. Practise.`,
        hy: `## Նոր ընկեր

> **Lily:** Hello! What's your name? (*Բարև, ի՞նչ է քո անունը։*)\\
> **Aram:** My name is Aram. And you? (*Իմ անունը Արամ է։ Իսկ քո՞նը։*)\\
> **Lily:** I'm Lily. Nice to meet you! (*Ես Լիլին եմ։ Ուրախ եմ ծանոթանալու։*)\\
> **Aram:** Nice to meet you too! (*Ես էլ եմ ուրախ։*)

| Արտահայտություն | Արտասանություն | Իմաստ |
|---|---|---|
| What's your name? | [ուոթս յոր նեյմ] | Ի՞նչ է քո անունը |
| My name is Aram. | [մայ նեյմ իզ Արամ] | Իմ անունը Արամ է |
| I'm Lily. | [այմ Լիլի] | Ես Լիլին եմ |
| Nice to meet you! | [նայս թու միթ յու] | Ուրախ եմ ծանոթանալու |

## Ո՞վ է սա

Ցույց տուր ընկերոջդ՝ «**His** name is Tom.» (տղա), «**Her** name is Ani.» (աղջիկ)։ Հայերենում «նրա»-ն մեկն է, իսկ անգլերենում տղայի համար **his**, աղջկա համար՝ **her**։

## Խաղ՝ անունների գնդակ

Նետե՛ք փափուկ գնդակ։ Ով բռնում է, ասում է «My name is …!» և գնդակը նետում հաջորդին՝ հարցնելով «What's your name?»։

### Վարժություններ

1. Ինչպե՞ս հարցնել անունը։
2. Պատասխանի՛ր՝ «What's your name?»։
3. Ավարտի՛ր՝ «I'm …»։
4. Ի՞նչ ես ասում նոր ընկերոջը, երբ իմանում ես նրա անունը։
5. His, թե՞ her՝ «___ name is Davit.»։
6. His, թե՞ her՝ «___ name is Mariam.»։
7. Անգլերեն հարցրո՛ւ տանը երեք հոգու անունը։

### Պատասխաններ

1. What's your name?։ 2. My name is …։ 3. Քո անունը։ 4. Nice to meet you!։ 5. His։ 6. Her։ 7. Վարժվի՛ր։`,
        ru: `## Новый друг

> **Lily:** Hello! What's your name? (*Привет! Как тебя зовут?*)\\
> **Aram:** My name is Aram. And you? (*Меня зовут Арам. А тебя?*)\\
> **Lily:** I'm Lily. Nice to meet you! (*Я Лили. Приятно познакомиться!*)\\
> **Aram:** Nice to meet you too! (*Мне тоже!*)

| Фраза | Произношение | Значение |
|---|---|---|
| What's your name? | [уотс ё нэйм] | Как тебя зовут? |
| My name is Aram. | [май нэйм из Арам] | Меня зовут Арам. |
| I'm Lily. | [айм Лили] | Я Лили. |
| Nice to meet you! | [найс ту мит ю] | Приятно познакомиться! |

## Кто это?

Покажи на друга: «**His** name is Tom.» (мальчик), «**Her** name is Ani.» (девочка). По-английски «его» — **his**, «её» — **her**.

## Игра «Мяч с именами»

Бросайте мягкий мяч. Кто поймал, говорит «My name is …!» и бросает дальше со словами «What's your name?».

### Упражнения

1. Как спросить имя?
2. Ответь: «What's your name?»
3. Закончи: «I'm …»
4. Что ты скажешь новому другу, когда узнаешь его имя?
5. His или her: «___ name is Davit.»
6. His или her: «___ name is Mariam.»
7. Спроси по-английски имена трёх человек дома.

### Ответы

1. What's your name? 2. My name is … 3. Своё имя. 4. Nice to meet you! 5. His. 6. Her. 7. Потренируйся.`,
      },
      [
        q(t("How do you ask a name?", "Ինչպե՞ս հարցնել անունը։", "Как спросить имя?"), [t("How are you?", "How are you?", "How are you?"), t("What's your name?", "What's your name?", "What's your name?"), t("Goodbye!", "Goodbye!", "Goodbye!")], 1),
        q(t("Answer to «What's your name?»", "Պատասխան «What's your name?»-ին՝", "Ответ на «What's your name?»"), [t("My name is Ani.", "My name is Ani.", "My name is Ani."), t("I'm fine.", "I'm fine.", "I'm fine."), t("Good night.", "Good night.", "Good night.")], 0),
        q(t("«Nice to meet you!» is said…", "«Nice to meet you!»-ն ասում ենք…", "«Nice to meet you!» говорят…"), [t("before bed", "քնելուց առաջ", "перед сном"), t("when leaving", "հեռանալիս", "при прощании"), t("when meeting someone new", "նոր մարդու հետ ծանոթանալիս", "при знакомстве")], 2),
        q(t("About a girl: «___ name is Ani.»", "Աղջկա մասին՝ «___ name is Ani.»", "О девочке: «___ name is Ani.»"), [t("His", "His", "His"), t("Her", "Her", "Her"), t("My", "My", "My")], 1),
        q(t("About a boy: «___ name is Tom.»", "Տղայի մասին՝ «___ name is Tom.»", "О мальчике: «___ name is Tom.»"), [t("His", "His", "His"), t("Her", "Her", "Her"), t("Your", "Your", "Your")], 0),
        q(t("«I'm Lily» means…", "«I'm Lily» նշանակում է…", "«I'm Lily» значит…"), [t("I like Lily", "Ես սիրում եմ Լիլիին", "Мне нравится Лили"), t("Where is Lily?", "Որտե՞ղ է Լիլին", "Где Лили?"), t("I am Lily", "Ես Լիլին եմ", "Я Лили")], 2),
      ],
    ),
    lesson(
      "how-are-you",
      ["How are you?", "Ինչպե՞ս ես", "Как дела? How are you?"],
      {
        en: ["Ask «How are you?»", "Answer «I'm fine», «I'm happy», «I'm tired»", "Say «Thank you» and «And you?»"],
        hy: ["Հարցնել «How are you?»", "Պատասխանել «I'm fine», «I'm happy», «I'm tired»", "Ասել «Thank you» և «And you?»"],
        ru: ["Спрашивать «How are you?»", "Отвечать «I'm fine», «I'm happy», «I'm tired»", "Говорить «Thank you» и «And you?»"],
      },
      {
        en: `## How are you?

> **Tom:** Hi, Ani! How are you?\\
> **Ani:** I'm fine, thank you. And you?\\
> **Tom:** I'm OK, thanks!

## How do you feel?

| Answer | Face |
|---|---|
| I'm fine. | 🙂 |
| I'm happy. | 😀 |
| I'm sad. | 🙁 |
| I'm tired. | 😴 |
| I'm hungry. | 🍎 |

## Polite words

| Word | When |
|---|---|
| Thank you. / Thanks. | when someone is kind to you |
| Please. | when you ask for something |
| Sorry! | when you make a mistake |

## Game: Faces

The teacher shows a face. You say how you feel: «I'm happy!», «I'm sad!».

### Exercises

1. How do you ask a friend how he or she is?
2. Answer: «How are you?»
3. What do you say after «I'm fine»?
4. You did not sleep well. What do you say?
5. You want an apple. What do you say? «I'm …»
6. Which word do you say when someone gives you a present?
7. Ask three friends «How are you?» and listen to the answers.

### Answers

1. How are you? 2. I'm fine, thank you. 3. Thank you. And you? 4. I'm tired. 5. I'm hungry. 6. Thank you! 7. Practise.`,
        hy: `## How are you?

> **Tom:** Hi, Ani! How are you? (*Բարև, Անի։ Ինչպե՞ս ես։*)\\
> **Ani:** I'm fine, thank you. And you? (*Լավ եմ, շնորհակալություն։ Իսկ դու՞։*)\\
> **Tom:** I'm OK, thanks! (*Նորմալ եմ, շնորհակալ եմ։*)

## Ինչպե՞ս ես քեզ զգում

| Պատասխան | Արտասանություն | Իմաստ |
|---|---|---|
| I'm fine. | [այմ ֆայն] | Լավ եմ 🙂 |
| I'm happy. | [այմ հեփի] | Ուրախ եմ 😀 |
| I'm sad. | [այմ սեդ] | Տխուր եմ 🙁 |
| I'm tired. | [այմ թայըրդ] | Հոգնած եմ 😴 |
| I'm hungry. | [այմ հանգրի] | Սոված եմ 🍎 |

## Քաղաքավարի բառեր

| Բառ | Երբ |
|---|---|
| Thank you. / Thanks. | երբ քեզ համար լավ բան են անում (*շնորհակալություն*) |
| Please. | երբ ինչ-որ բան ես խնդրում (*խնդրում եմ*) |
| Sorry! | երբ սխալվում ես (*ներողություն*) |

## Խաղ՝ դեմքեր

Ուսուցիչը ցույց է տալիս դեմք։ Դու ասում ես, թե ինչպես ես քեզ զգում՝ «I'm happy!», «I'm sad!»։

### Վարժություններ

1. Ինչպե՞ս հարցնել ընկերոջը, թե ինչպես է։
2. Պատասխանի՛ր՝ «How are you?»։
3. Ի՞նչ ես ասում «I'm fine»-ից հետո։
4. Լավ չես քնել։ Ի՞նչ ես ասում։
5. Խնձոր ես ուզում։ Ի՞նչ ես ասում՝ «I'm …»։
6. Ո՞ր բառն ես ասում, երբ քեզ նվեր են տալիս։
7. Երեք ընկերոջ հարցրո՛ւ «How are you?» և լսի՛ր պատասխանները։

### Պատասխաններ

1. How are you?։ 2. I'm fine, thank you.։ 3. Thank you. And you?։ 4. I'm tired.։ 5. I'm hungry.։ 6. Thank you!։ 7. Վարժվի՛ր։`,
        ru: `## How are you?

> **Tom:** Hi, Ani! How are you? (*Привет, Ани! Как дела?*)\\
> **Ani:** I'm fine, thank you. And you? (*Хорошо, спасибо. А у тебя?*)\\
> **Tom:** I'm OK, thanks! (*Нормально, спасибо!*)

## Как ты себя чувствуешь?

| Ответ | Произношение | Значение |
|---|---|---|
| I'm fine. | [айм файн] | У меня всё хорошо 🙂 |
| I'm happy. | [айм хэпи] | Я рад 😀 |
| I'm sad. | [айм сэд] | Мне грустно 🙁 |
| I'm tired. | [айм тайэд] | Я устал 😴 |
| I'm hungry. | [айм хангри] | Я голоден 🍎 |

## Вежливые слова

| Слово | Когда |
|---|---|
| Thank you. / Thanks. | спасибо |
| Please. | пожалуйста (когда просишь) |
| Sorry! | извини |

## Игра «Лица»

Учитель показывает лицо. Ты говоришь, как себя чувствуешь: «I'm happy!», «I'm sad!».

### Упражнения

1. Как спросить друга, как у него дела?
2. Ответь: «How are you?»
3. Что сказать после «I'm fine»?
4. Ты плохо спал. Что ты скажешь?
5. Ты хочешь яблоко. Что скажешь? «I'm …»
6. Какое слово ты скажешь, когда тебе дарят подарок?
7. Спроси трёх друзей «How are you?» и послушай ответы.

### Ответы

1. How are you? 2. I'm fine, thank you. 3. Thank you. And you? 4. I'm tired. 5. I'm hungry. 6. Thank you! 7. Потренируйся.`,
      },
      [
        q(t("Answer to «How are you?»", "Պատասխան «How are you?»-ին՝", "Ответ на «How are you?»"), [t("I'm fine, thank you.", "I'm fine, thank you.", "I'm fine, thank you."), t("My name is Tom.", "My name is Tom.", "My name is Tom."), t("Goodbye.", "Goodbye.", "Goodbye.")], 0),
        q(t("«I'm happy» means you feel…", "«I'm happy» նշանակում է…", "«I'm happy» значит…"), [t("sad", "տխուր եմ", "мне грустно"), t("glad", "ուրախ եմ", "я рад"), t("hungry", "սոված եմ", "я голоден")], 1),
        q(t("You want to sleep. You say…", "Ուզում ես քնել։ Ասում ես…", "Ты хочешь спать. Ты говоришь…"), [t("I'm hungry.", "I'm hungry.", "I'm hungry."), t("I'm happy.", "I'm happy.", "I'm happy."), t("I'm tired.", "I'm tired.", "I'm tired.")], 2),
        q(t("When you ask for something, say…", "Ինչ-որ բան խնդրելիս ասա՛…", "Когда просишь, говори…"), [t("Please.", "Please.", "Please."), t("Sorry.", "Sorry.", "Sorry."), t("Bye.", "Bye.", "Bye.")], 0),
        q(t("«Sorry!» is said when…", "«Sorry!»-ն ասում ենք, երբ…", "«Sorry!» говорят, когда…"), [t("you meet someone", "հանդիպում ենք", "встречаются"), t("you make a mistake", "սխալվում ենք", "ошиблись"), t("you are hungry", "սոված ենք", "голодны")], 1),
        q(t("After «I'm fine, thank you» you can ask…", "«I'm fine, thank you»-ից հետո կարող ես հարցնել…", "После «I'm fine, thank you» можно спросить…"), [t("What's your name?", "What's your name?", "What's your name?"), t("Good night?", "Good night?", "Good night?"), t("And you?", "And you?", "And you?")], 2),
      ],
    ),
    lesson(
      "abc-song",
      ["The ABC song", "ABC երգը", "Песенка ABC"],
      {
        en: ["Sing the alphabet song", "Know that English has 26 letters", "Say the names of the letters in order"],
        hy: ["Երգել այբուբենի երգը", "Իմանալ, որ անգլերենն ունի 26 տառ", "Հերթականությամբ ասել տառերի անունները"],
        ru: ["Петь песенку-алфавит", "Знать, что в английском 26 букв", "Называть буквы по порядку"],
      },
      {
        en: `## 26 letters

> A B C D E F G\\
> H I J K L M N O P\\
> Q R S, T U V\\
> W X, Y and Z.\\
> Now I know my ABC,\\
> Next time won't you sing with me?

This is a very old traditional song. Children all over the world sing it.

## Big and small letters

| Big | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| **Small** | a | b | c | d | e | f | g |

Every letter has a big (capital) and a small form.

## Letters with tricky names

| Letter | Its name sounds like |
|---|---|
| E | «ee» |
| I | «eye» |
| G | «jee» |
| J | «jay» |
| R | «ar» |
| Y | «why» |

## Game: Stand up!

Each child gets a letter card. Sing the song slowly. Stand up when you hear your letter!

### Exercises

1. How many letters are in the English alphabet?
2. Which letter comes after C?
3. Which letter comes before Z?
4. Say the letters of your name.
5. Write the small letters: A, B, D.
6. Which letter's name sounds like «eye»?
7. Sing the ABC song to your family.

### Answers

1. 26. 2. D. 3. Y. 4. For example, A-N-I. 5. a, b, d. 6. I. 7. Sing!`,
        hy: `## 26 տառ

> A B C D E F G\\
> H I J K L M N O P\\
> Q R S, T U V\\
> W X, Y and Z.\\
> Now I know my ABC,\\
> Next time won't you sing with me?

(*Հիմա ես գիտեմ իմ այբուբենը, հաջորդ անգամ չե՞ս երգի ինձ հետ։*) Սա շատ հին ժողովրդական երգ է։ Այն երգում են երեխաները ամբողջ աշխարհում։

Հայերենի 39 տառի փոխարեն անգլերենն ունի **26** տառ։

## Մեծատառ և փոքրատառ

| Մեծատառ | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| **Փոքրատառ** | a | b | c | d | e | f | g |

## Խաբուսիկ անուններով տառեր

| Տառ | Անունը հնչում է |
|---|---|
| E | [ի] |
| I | [այ] |
| G | [ջի] |
| J | [ջեյ] |
| R | [ար] |
| Y | [ուայ] |

## Խաղ՝ վեր կաց

Ամեն երեխա ստանում է տառով քարտ։ Երգե՛ք դանդաղ։ Վեր կաց, երբ լսում ես քո տառը։

### Վարժություններ

1. Քանի՞ տառ կա անգլերեն այբուբենում։
2. Ո՞ր տառն է C-ից հետո։
3. Ո՞ր տառն է Z-ից առաջ։
4. Ասա՛ քո անվան տառերը անգլերեն։
5. Գրի՛ր փոքրատառերը՝ A, B, D։
6. Ո՞ր տառի անունն է հնչում [այ]։
7. Երգի՛ր ABC երգը ընտանիքիդ համար։

### Պատասխաններ

1. 26։ 2. D։ 3. Y։ 4. Օրինակ՝ A-N-I։ 5. a, b, d։ 6. I։ 7. Երգի՛ր։`,
        ru: `## 26 букв

> A B C D E F G\\
> H I J K L M N O P\\
> Q R S, T U V\\
> W X, Y and Z.\\
> Now I know my ABC,\\
> Next time won't you sing with me?

(*Теперь я знаю алфавит, в следующий раз споёшь со мной?*) Это очень старая народная песенка, её поют дети во всём мире.

В английском алфавите **26** букв (в русском — 33).

## Большие и маленькие буквы

| Большие | A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|---|
| **Маленькие** | a | b | c | d | e | f | g |

## Буквы с непривычными названиями

| Буква | Название звучит как |
|---|---|
| E | [и] |
| I | [ай] |
| G | [джи] |
| J | [джей] |
| R | [а] |
| Y | [уай] |

## Игра «Встань!»

Каждый получает карточку с буквой. Пойте медленно. Встань, когда услышишь свою букву!

### Упражнения

1. Сколько букв в английском алфавите?
2. Какая буква идёт после C?
3. Какая буква стоит перед Z?
4. Назови по-английски буквы своего имени.
5. Напиши маленькие буквы: A, B, D.
6. Название какой буквы звучит как [ай]?
7. Спой песенку ABC своей семье.

### Ответы

1. 26. 2. D. 3. Y. 4. Например, A-N-I. 5. a, b, d. 6. I. 7. Пой!`,
      },
      [
        q(t("How many letters are in the English alphabet?", "Քանի՞ տառ կա անգլերեն այբուբենում։", "Сколько букв в английском алфавите?"), [t("33", "33", "33"), t("26", "26", "26"), t("39", "39", "39")], 1),
        q(t("Which letter comes after A?", "Ո՞ր տառն է A-ից հետո։", "Какая буква после A?"), [t("B", "B", "B"), t("C", "C", "C"), t("Z", "Z", "Z")], 0),
        q(t("The last letter is…", "Վերջին տառը…", "Последняя буква —…"), [t("Y", "Y", "Y"), t("X", "X", "X"), t("Z", "Z", "Z")], 2),
        q(t("Small «D» is…", "Փոքրատառ «D»-ն…", "Маленькая «D» —…"), [t("b", "b", "b"), t("d", "d", "d"), t("p", "p", "p")], 1),
        q(t("Which letter's name sounds like «why»?", "Ո՞ր տառի անունն է հնչում [ուայ]։", "Название какой буквы звучит как [уай]?"), [t("Y", "Y", "Y"), t("W", "W", "W"), t("I", "I", "I")], 0),
        q(t("The ABC song is…", "ABC երգը…", "Песенка ABC —…"), [t("a new pop song", "նոր էստրադային երգ է", "новая эстрадная песня"), t("a lullaby", "օրորոցային է", "колыбельная"), t("a very old traditional song", "շատ հին ժողովրդական երգ է", "очень старая народная песенка")], 2),
      ],
    ),
    lesson(
      "letters-a-m",
      ["Letters A–M and their sounds", "A–M տառերը և հնչյունները", "Буквы A–M и их звуки"],
      {
        en: ["Know the letters A to M", "Say the sound each letter makes at the start of a word", "Name a word for each letter"],
        hy: ["Ճանաչել A-ից M տառերը", "Ասել, թե ինչ հնչյուն է տալիս ամեն տառը բառի սկզբում", "Ամեն տառի համար բառ անվանել"],
        ru: ["Знать буквы от A до M", "Называть звук, который даёт буква в начале слова", "Подбирать слово на каждую букву"],
      },
      {
        en: `## Letter, sound, word

A letter has a **name** (A is «ay») and a **sound** («a» as in *apple*). Children learn the sounds with picture words:

| Letter | Sound | Word |
|---|---|---|
| A a | /æ/ | apple 🍎 |
| B b | /b/ | ball ⚽ |
| C c | /k/ | cat 🐱 |
| D d | /d/ | dog 🐶 |
| E e | /e/ | egg 🥚 |
| F f | /f/ | fish 🐟 |
| G g | /g/ | goat 🐐 |
| H h | /h/ | hat 🎩 |
| I i | /ɪ/ | ink |
| J j | /dʒ/ | jam |
| K k | /k/ | kite 🪁 |
| L l | /l/ | lion 🦁 |
| M m | /m/ | monkey 🐒 |

**Look:** C and K make the same sound in *cat* and *kite*.

## Game: I spy

«I spy with my little eye something beginning with… /b/!» — «Ball!»

### Exercises

1. Which sound does B make?
2. Which letter does «dog» start with?
3. Name a word that starts with M.
4. Which two letters make the sound /k/ here?
5. Which letter does «egg» start with?
6. Match: fish, hat, lion — F, H, L.
7. Play I spy with letters A–M.

### Answers

1. /b/. 2. D. 3. For example, monkey. 4. C and K. 5. E. 6. fish — F, hat — H, lion — L. 7. Play!`,
        hy: `## Տառ, հնչյուն, բառ

Տառն ունի **անուն** (A-ն կոչվում է [էյ]) և **հնչյուն** ([է]-ին մոտ, ինչպես *apple* բառում)։ Հնչյունները սովորում ենք նկար-բառերով.

| Տառ | Հնչյուն | Բառ | Թարգմանություն |
|---|---|---|---|
| A a | [է] (բաց) | apple 🍎 | խնձոր |
| B b | [բ] | ball ⚽ | գնդակ |
| C c | [ք] | cat 🐱 | կատու |
| D d | [դ] | dog 🐶 | շուն |
| E e | [ե] | egg 🥚 | ձու |
| F f | [ֆ] | fish 🐟 | ձուկ |
| G g | [գ] | goat 🐐 | այծ |
| H h | [հ] | hat 🎩 | գլխարկ |
| I i | [ի] (կարճ) | ink | թանաք |
| J j | [ջ] | jam | մուրաբա |
| K k | [ք] | kite 🪁 | օդապարիկ |
| L l | [լ] | lion 🦁 | առյուծ |
| M m | [մ] | monkey 🐒 | կապիկ |

**Ուշադրություն.** C-ն և K-ն *cat* և *kite* բառերում տալիս են նույն հնչյունը։

## Խաղ՝ I spy

«I spy with my little eye something beginning with… [բ]!» (*Իմ փոքրիկ աչքով տեսնում եմ մի բան, որը սկսվում է… [բ]-ով։*) — «Ball!»

### Վարժություններ

1. Ի՞նչ հնչյուն է տալիս B-ն։
2. Ո՞ր տառով է սկսվում «dog»-ը։
3. Նշի՛ր M-ով սկսվող բառ։
4. Ո՞ր երկու տառերն են այստեղ տալիս [ք] հնչյունը։
5. Ո՞ր տառով է սկսվում «egg»-ը։
6. Համապատասխանեցրո՛ւ՝ fish, hat, lion — F, H, L։
7. Խաղա՛ I spy A–M տառերով։

### Պատասխաններ

1. [բ]։ 2. D։ 3. Օրինակ՝ monkey։ 4. C և K։ 5. E։ 6. fish — F, hat — H, lion — L։ 7. Խաղա՛։`,
        ru: `## Буква, звук, слово

У буквы есть **название** (A называется [эй]) и **звук** ([э], как в *apple*). Звуки учим по словам-картинкам:

| Буква | Звук | Слово | Перевод |
|---|---|---|---|
| A a | [э] (широкий) | apple 🍎 | яблоко |
| B b | [б] | ball ⚽ | мяч |
| C c | [к] | cat 🐱 | кошка |
| D d | [д] | dog 🐶 | собака |
| E e | [е] | egg 🥚 | яйцо |
| F f | [ф] | fish 🐟 | рыба |
| G g | [г] | goat 🐐 | коза |
| H h | [х] (лёгкий выдох) | hat 🎩 | шляпа |
| I i | [и] (краткий) | ink | чернила |
| J j | [дж] | jam | варенье |
| K k | [к] | kite 🪁 | воздушный змей |
| L l | [л] | lion 🦁 | лев |
| M m | [м] | monkey 🐒 | обезьяна |

**Внимание:** C и K в словах *cat* и *kite* дают одинаковый звук [к].

## Игра I spy

«I spy with my little eye something beginning with… [б]!» (*Я вижу своим глазком что-то на [б]!*) — «Ball!»

### Упражнения

1. Какой звук даёт B?
2. С какой буквы начинается «dog»?
3. Назови слово на M.
4. Какие две буквы здесь дают звук [к]?
5. С какой буквы начинается «egg»?
6. Соедини: fish, hat, lion — F, H, L.
7. Поиграй в I spy с буквами A–M.

### Ответы

1. [б]. 2. D. 3. Например, monkey. 4. C и K. 5. E. 6. fish — F, hat — H, lion — L. 7. Играй!`,
      },
      [
        q(t("«cat» starts with…", "«cat»-ը սկսվում է…", "«cat» начинается с…"), [t("K", "K", "K"), t("C", "C", "C"), t("S", "S", "S")], 1),
        q(t("Which word starts with B?", "Ո՞ր բառն է սկսվում B-ով։", "Какое слово начинается с B?"), [t("ball", "ball", "ball"), t("dog", "dog", "dog"), t("hat", "hat", "hat")], 0),
        q(t("«lion» starts with…", "«lion»-ը սկսվում է…", "«lion» начинается с…"), [t("I", "I", "I"), t("M", "M", "M"), t("L", "L", "L")], 2),
        q(t("A letter's name and sound are…", "Տառի անունը և հնչյունը…", "Название буквы и её звук…"), [t("always the same", "միշտ նույնն են", "всегда одинаковы"), t("often different", "հաճախ տարբեր են", "часто разные"), t("never used", "երբեք չեն գործածվում", "не используются")], 1),
        q(t("«egg» means…", "«egg» նշանակում է…", "«egg» значит…"), [t("fish", "ձուկ", "рыба"), t("goat", "այծ", "коза"), t("egg", "ձու", "яйцо")], 2),
        q(t("Which word starts with the same sound as «cat»?", "Ո՞ր բառն է սկսվում նույն հնչյունով, ինչ «cat»-ը։", "Какое слово начинается с того же звука, что «cat»?"), [t("kite", "kite", "kite"), t("goat", "goat", "goat"), t("hat", "hat", "hat")], 0),
      ],
    ),
    lesson(
      "letters-n-z",
      ["Letters N–Z and their sounds", "N–Z տառերը և հնչյունները", "Буквы N–Z и их звуки"],
      {
        en: ["Know the letters N to Z", "Say the sound each letter makes", "Hear the first sound of a word and find its letter"],
        hy: ["Ճանաչել N-ից Z տառերը", "Ասել, թե ինչ հնչյուն է տալիս ամեն տառը", "Լսել բառի առաջին հնչյունը և գտնել նրա տառը"],
        ru: ["Знать буквы от N до Z", "Называть звук каждой буквы", "Слышать первый звук слова и находить его букву"],
      },
      {
        en: `## N to Z

| Letter | Sound | Word |
|---|---|---|
| N n | /n/ | nest 🐦 |
| O o | /ɒ/ | octopus 🐙 |
| P p | /p/ | pen 🖊️ |
| Q q | /kw/ | queen 👑 |
| R r | /r/ | rabbit 🐇 |
| S s | /s/ | sun ☀️ |
| T t | /t/ | tiger 🐯 |
| U u | /ʌ/ | umbrella ☂️ |
| V v | /v/ | van 🚐 |
| W w | /w/ | window 🪟 |
| X x | /ks/ | box 📦 (at the end) |
| Y y | /j/ | yo-yo 🪀 |
| Z z | /z/ | zebra 🦓 |

**Look:** X is usually at the **end** of a short word: bo**x**, fo**x**, si**x**.

## Hard letters for Armenian and Russian speakers

| Letter | Tip |
|---|---|
| W | round your lips like for «u», then open them |
| R | do not roll it; the tongue does not touch the top |

### Exercises

1. Which sound does S make?
2. Which letter does «zebra» start with?
3. Name a word that starts with R.
4. Where is X in «fox»?
5. Which letter does «umbrella» start with?
6. Match: pen, tiger, van — P, T, V.
7. Say the whole alphabet from A to Z.

### Answers

1. /s/. 2. Z. 3. For example, rabbit. 4. At the end. 5. U. 6. pen — P, tiger — T, van — V. 7. A B C … X Y Z.`,
        hy: `## N-ից Z

| Տառ | Հնչյուն | Բառ | Թարգմանություն |
|---|---|---|---|
| N n | [ն] | nest 🐦 | բույն |
| O o | [օ] (կարճ) | octopus 🐙 | ութոտնուկ |
| P p | [փ] | pen 🖊️ | գրիչ |
| Q q | [քու] | queen 👑 | թագուհի |
| R r | [ռ]-ին մոտ, մեղմ | rabbit 🐇 | ճագար |
| S s | [ս] | sun ☀️ | արև |
| T t | [թ] | tiger 🐯 | վագր |
| U u | [ա] (կարճ) | umbrella ☂️ | անձրևանոց |
| V v | [վ] | van 🚐 | միկրոավտոբուս |
| W w | [ու] | window 🪟 | պատուհան |
| X x | [քս] | box 📦 (վերջում) | տուփ |
| Y y | [յ] | yo-yo 🪀 | յո-յո |
| Z z | [զ] | zebra 🦓 | զեբր |

**Ուշադրություն.** X-ը սովորաբար կարճ բառի **վերջում** է՝ bo**x**, fo**x** (աղվես), si**x** (վեց)։

## Դժվար տառեր

| Տառ | Խորհուրդ |
|---|---|
| W | շրթունքները կլորացրու, ինչպես [ու]-ի համար, հետո բացիր |
| R | մի՛ թրթռացրու, ինչպես հայերեն ռ-ն, լեզուն վերևին չի դիպչում |

### Վարժություններ

1. Ի՞նչ հնչյուն է տալիս S-ը։
2. Ո՞ր տառով է սկսվում «zebra»-ն։
3. Նշի՛ր R-ով սկսվող բառ։
4. Որտե՞ղ է X-ը «fox» բառում։
5. Ո՞ր տառով է սկսվում «umbrella»-ն։
6. Համապատասխանեցրո՛ւ՝ pen, tiger, van — P, T, V։
7. Ասա՛ ամբողջ այբուբենը A-ից Z։

### Պատասխաններ

1. [ս]։ 2. Z։ 3. Օրինակ՝ rabbit։ 4. Վերջում։ 5. U։ 6. pen — P, tiger — T, van — V։ 7. A B C … X Y Z։`,
        ru: `## От N до Z

| Буква | Звук | Слово | Перевод |
|---|---|---|---|
| N n | [н] | nest 🐦 | гнездо |
| O o | [о] (краткий) | octopus 🐙 | осьминог |
| P p | [п] | pen 🖊️ | ручка |
| Q q | [кв] | queen 👑 | королева |
| R r | [р] мягкий, без раската | rabbit 🐇 | кролик |
| S s | [с] | sun ☀️ | солнце |
| T t | [т] | tiger 🐯 | тигр |
| U u | [а] (краткий) | umbrella ☂️ | зонт |
| V v | [в] | van 🚐 | фургон |
| W w | [у] быстрый | window 🪟 | окно |
| X x | [кс] | box 📦 (на конце) | коробка |
| Y y | [й] | yo-yo 🪀 | йо-йо |
| Z z | [з] | zebra 🦓 | зебра |

**Внимание:** X обычно стоит **в конце** короткого слова: bo**x**, fo**x** (лиса), si**x** (шесть).

## Трудные буквы

| Буква | Совет |
|---|---|
| W | округли губы, как для [у], и сразу раскрой |
| R | не раскатывай, как русскую р: язык не касается нёба |

### Упражнения

1. Какой звук даёт S?
2. С какой буквы начинается «zebra»?
3. Назови слово на R.
4. Где стоит X в слове «fox»?
5. С какой буквы начинается «umbrella»?
6. Соедини: pen, tiger, van — P, T, V.
7. Назови весь алфавит от A до Z.

### Ответы

1. [с]. 2. Z. 3. Например, rabbit. 4. В конце. 5. U. 6. pen — P, tiger — T, van — V. 7. A B C … X Y Z.`,
      },
      [
        q(t("«sun» starts with…", "«sun»-ը սկսվում է…", "«sun» начинается с…"), [t("S", "S", "S"), t("Z", "Z", "Z"), t("C", "C", "C")], 0),
        q(t("Where is X in «box»?", "Որտե՞ղ է X-ը «box»-ում։", "Где X в слове «box»?"), [t("at the start", "սկզբում", "в начале"), t("in the middle", "մեջտեղում", "в середине"), t("at the end", "վերջում", "в конце")], 2),
        q(t("Which word starts with T?", "Ո՞ր բառն է սկսվում T-ով։", "Какое слово начинается с T?"), [t("zebra", "zebra", "zebra"), t("tiger", "tiger", "tiger"), t("pen", "pen", "pen")], 1),
        q(t("«queen» starts with…", "«queen»-ը սկսվում է…", "«queen» начинается с…"), [t("K", "K", "K"), t("W", "W", "W"), t("Q", "Q", "Q")], 2),
        q(t("«window» means…", "«window» նշանակում է…", "«window» значит…"), [t("window", "պատուհան", "окно"), t("wind", "քամի", "ветер"), t("door", "դուռ", "дверь")], 0),
        q(t("Which letter comes after Y?", "Ո՞ր տառն է Y-ից հետո։", "Какая буква после Y?"), [t("X", "X", "X"), t("Z", "Z", "Z"), t("W", "W", "W")], 1),
      ],
    ),
  ],
};
