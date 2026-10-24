import { t, unit, type CourseSeed } from "../../types";
import { course } from "./shared";
import { englishGrade3 } from "./grade-3";
import { englishGrade2 } from "./grade-2";
import { englishGrade4 } from "./grade-4";
import { englishGrade5 } from "./grade-5";

export const english: CourseSeed[] = [
  englishGrade2,
  englishGrade3,
  englishGrade4,

  englishGrade5,

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
