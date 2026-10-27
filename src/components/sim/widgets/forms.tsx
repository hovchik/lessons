"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { L, t } from "../labels";

/**
 * Tables of word forms with the endings in colour:
 *   forms lang=ru кот кота коту кота котом коте pl=коты,котов,котам,котов,котами,котах   cases
 *   forms mode=persons lang=hy գրում_եմ գրում_ես …                                         persons of a verb
 *   forms mode=verbs go:went:gone see:saw:seen                                               irregular verbs, hide a column to test yourself
 *   forms mode=compare cols=stages սիրեմ:կու_սիրեմ:կը_սիրեմ:սիրում_եմ                          the same word side by side (cols: COLS below)
 * lang= is the language of the words (ru: 6 cases, hy: 7 cases). Write stem|ending when the
 * stem changes (день|, дн|я), or put the changing part in [ ] anywhere ([չեմ]_գրում); otherwise
 * the ending is what follows the part all forms share. _ stands for a space, - for "no form".
 */
type Lang = "ru" | "hy" | "en";
const W = {
  cases: t("Look: the word changes by case", "Դիտիր․ բառը հոլովվում է", "Посмотри: слово изменяется по падежам"),
  casesHint: t("The stem stays, the ending changes. Ask the question and choose the form.", "Հիմքը մնում է, վերջավորությունը փոխվում է։ Տուր հարցը և ընտրիր ձևը։", "Основа остаётся, окончание меняется. Задай вопрос и выбери форму."),
  persons: t("Look: the verb changes by person", "Դիտիր․ բայը փոխվում է ըստ դեմքի", "Посмотри: глагол изменяется по лицам"),
  personsHint: t("Who does it? The ending (or the helping word) tells you.", "Ո՞վ է անում։ Դա ցույց է տալիս վերջավորությունը (կամ օժանդակ բայը)։", "Кто делает? Это подсказывает окончание (или вспомогательный глагол)."),
  verbs: t("Try it: irregular verbs", "Փորձիր․ անկանոն բայեր", "Попробуй: неправильные глаголы"),
  verbsHint: t("Hide a column, say the forms aloud, then tap a cell to check.", "Թաքցրու մի սյունակ, բարձրաձայն ասա ձևերը, հետո հպիր վանդակին՝ ստուգելու համար։", "Спрячь столбец, назови формы вслух, потом нажми на клетку, чтобы проверить."),
  compare: t("Try it: compare the forms", "Փորձիր․ համեմատիր ձևերը", "Попробуй: сравни формы"),
  sg: t("Singular", "Եզակի", "Единственное число"),
  pl: t("Plural", "Հոգնակի", "Множественное число"),
  caseH: t("Case", "Հոլով", "Падеж"),
  qH: t("Question", "Հարց", "Вопрос"),
  formH: t("Form", "Ձև", "Форма"),
  personH: t("Person", "Դեմք", "Лицо"),
  hide: t("Hide", "Թաքցնել", "Скрыть"),
  showAll: t("Show all", "Ցույց տալ բոլորը", "Показать всё"),
  persons6: [
    t("1st, singular", "1-ին դեմք, եզակի", "1-е л., ед. ч."), t("2nd, singular", "2-րդ դեմք, եզակի", "2-е л., ед. ч."), t("3rd, singular", "3-րդ դեմք, եզակի", "3-е л., ед. ч."),
    t("1st, plural", "1-ին դեմք, հոգնակի", "1-е л., мн. ч."), t("2nd, plural", "2-րդ դեմք, հոգնակի", "2-е л., мн. ч."), t("3rd, plural", "3-րդ դեմք, հոգնակի", "3-е л., мн. ч."),
  ],
};
/** Column sets for mode=compare. */
const COLS: Record<string, ReturnType<typeof t>[]> = {
  stages: [t("Grabar", "Գրաբար", "Грабар"), t("Middle", "Միջին", "Средний"), t("Western", "Արևմտյան", "Западный"), t("Eastern", "Արևելյան", "Восточный")],
  ew: [t("Eastern Armenian", "Արևելահայերեն", "Восточноармянский"), t("Western Armenian", "Արևմտահայերեն", "Западноармянский")],
  spelling: [t("Classical spelling", "Դասական ուղղագրություն", "Классическая орфография"), t("Reformed spelling", "Բարեփոխված ուղղագրություն", "Реформированная орфография")],
  ie: [t("Armenian", "Հայերեն", "Армянский"), t("Latin", "Լատիներեն", "Латынь"), t("Greek", "Հունարեն", "Греческий"), t("English", "Անգլերեն", "Английский")],
  root: [t("Stressed root", "Շեշտված արմատ", "Корень под ударением"), t("Unstressed root", "Անշեշտ արմատ", "Корень без ударения")],
  modern: [t("Grabar", "Գրաբար", "Грабар"), t("Modern Armenian", "Արդի հայերեն", "Современный армянский")],
  dialect: [t("Dialect", "Բարբառ", "Диалект"), t("Standard", "Գրական", "Литературный")],
  loan: [t("Loanword", "Փոխառություն", "Заимствование"), t("Armenian word", "Հայերեն բառ", "Армянское слово")],
  norm: [t("Avoid", "Խուսափիր", "Избегай"), t("Literary norm", "Գրական նորմ", "Литературная норма")],
  sound: [t("We write", "Գրում ենք", "Пишем"), t("We hear", "Լսում ենք", "Слышим")],
  hardsoft: [t("Hard", "Կարծր", "Твёрдый"), t("Soft", "Փափուկ", "Мягкий")],
  gender: [t("Masculine", "Արական", "Мужской"), t("Feminine", "Իգական", "Женский"), t("Neuter", "Չեզոք", "Средний")],
  number: [t("One", "Մեկ", "Один"), t("Many", "Շատ", "Много")],
  gender4: [t("Masculine", "Արական", "Мужской"), t("Feminine", "Իգական", "Женский"), t("Neuter", "Չեզոք", "Средний"), t("Plural", "Հոգնակի", "Мн. число")],
  check: [t("Word", "Բառ", "Слово"), t("Check word", "Ստուգիչ բառ", "Проверочное слово")],
  tenses: [t("Past", "Անցյալ", "Прошедшее"), t("Present", "Ներկա", "Настоящее"), t("Future", "Ապառնի", "Будущее")],
  aspect: [t("что делать? (process)", "что делать? (ընթացք)", "что делать? (процесс)"), t("что сделать? (result)", "что сделать? (արդյունք)", "что сделать? (результат)")],
  opposite: [t("Word", "Բառ", "Слово"), t("Opposite", "Հականիշ", "Антоним")],
  where: [t("где? (prepositional)", "где? (նախդրային)", "где? (предложный)"), t("куда? (accusative)", "куда? (հայցական)", "куда? (винительный)")],
  signs: [t("Dividing ъ", "Բաժանիչ ъ", "Разделительный ъ"), t("Dividing ь", "Բաժանիչ ь", "Разделительный ь")],
  animate: [t("Animate: кто?", "Շնչավոր՝ кто?", "Одушевлённые: кто?"), t("Inanimate: что?", "Անշունչ՝ что?", "Неодушевлённые: что?")],
  together: [t("Together", "Միասին", "Слитно"), t("Separately", "Առանձին", "Раздельно")],
  precise: [t("Plain", "Պարզ", "Просто"), t("Precise", "Ճշգրիտ", "Точно")],
  polite: [t("Friendly: ты", "Մտերմիկ՝ ты", "Дружески: ты"), t("Polite: Вы", "Քաղաքավարի՝ Вы", "Вежливо: Вы")],
  old: [t("Old word", "Հին բառ", "Старое слово"), t("Today", "Այսօր", "Сегодня")],
  decl3: [t("1st declension", "1-ին հոլովում", "1-е склонение"), t("2nd declension", "2-րդ հոլովում", "2-е склонение"), t("3rd declension", "3-րդ հոլովում", "3-е склонение")],
  iya: [t("Ordinary noun", "Սովորական գոյական", "Обычное слово"), t("Noun in -ия, -ий, -ие", "-ия, -ий, -ие գոյական", "Слово на -ия, -ий, -ие")],
  animacc: [t("Inanimate: like nominative", "Անշունչ՝ ուղղականի պես", "Неодуш.: как именительный"), t("Animate: like genitive", "Շնչավոր՝ սեռականի պես", "Одуш.: как родительный")],
  withprep: [t("No preposition", "Առանց նախդրի", "Без предлога"), t("With a preposition", "Նախդրով", "С предлогом")],
  conj: [t("I conjugation", "I խոնարհում", "I спряжение"), t("II conjugation", "II խոնարհում", "II спряжение")],
  tsya: [t("что делать? → -ться", "что делать? → -ться", "что делать? → -ться"), t("что делает? → -тся", "что делает? → -тся", "что делает? → -тся")],
  dash: [t("With a dash", "Գծիկով", "С тире"), t("No dash", "Առանց գծիկի", "Без тире")],
  reported: [t("Direct speech", "Ուղղակի խոսք", "Прямая речь"), t("Reported speech", "Անուղղակի խոսք", "Косвенная речь")],
  stress: [t("Say it like this", "Ասա այսպես", "Говори так"), t("Not like this", "Ոչ այսպես", "Не так")],
  figurative: [t("Direct meaning", "Ուղիղ իմաստ", "Прямое значение"), t("Figurative meaning", "Փոխաբերական իմաստ", "Переносное значение")],
  homonym: [t("Meaning 1", "Իմաստ 1", "Значение 1"), t("Meaning 2", "Իմաստ 2", "Значение 2")],
  ao: [t("Written with а", "Գրվում է а", "Пишется а"), t("Written with о", "Գրվում է о", "Пишется о")],
  zs: [t("з before a voiced sound", "з՝ ձայնեղից առաջ", "з перед звонким"), t("с before a voiceless sound", "с՝ խուլից առաջ", "с перед глухим")],
  oe: [t("Stressed: о", "Շեշտված՝ о", "Под ударением: о"), t("Unstressed: е", "Անշեշտ՝ е", "Без ударения: е")],
  iy: [t("и: root or -ция", "и՝ արմատ կամ -ция", "и: корень или -ция"), t("ы: ending or -ын", "ы՝ վերջավորություն կամ -ын", "ы: окончание или -ын")],
  short: [t("Full form", "Լրիվ ձև", "Полная форма"), t("Short form", "Կարճ ձև", "Краткая форма")],
  softsign: [t("With ь", "ь-ով", "С ь"), t("Without ь", "Առանց ь-ի", "Без ь")],
  prepri: [t("пре-", "пре-", "пре-"), t("при-", "при-", "при-")],
  nnn: [t("One н", "Մեկ н", "Одна н"), t("Two нн", "Երկու нн", "Две нн")],
  degrees: [t("Positive", "Դրական", "Положительная"), t("Comparative", "Համեմատական", "Сравнительная"), t("Superlative", "Գերադրական", "Превосходная")],
  moods: [t("Indicative", "Սահմանական", "Изъявительное"), t("Conditional", "Պայմանական", "Условное"), t("Imperative", "Հրամայական", "Повелительное")],
  transitive: [t("Transitive", "Անցողական", "Переходный"), t("Intransitive", "Անանցողական", "Непереходный")],
  chik: [t("-чик", "-чик", "-чик"), t("-щик", "-щик", "-щик")],
  neni: [t("не", "не", "не"), t("ни", "ни", "ни")],
  hyphen: [t("Together", "Միասին", "Слитно"), t("With a hyphen", "Գծիկով", "Через дефис")],
  native: [t("Native Russian", "Բնիկ ռուսերեն", "Исконное"), t("Borrowed", "Փոխառված", "Заимствованное")],
  idiom: [t("Phraseme", "Դարձվածք", "Фразеологизм"), t("Meaning", "Իմաստ", "Значение")],
  numkind: [t("Cardinal", "Քանակական", "Количественное"), t("Collective", "Հավաքական", "Собирательное"), t("Ordinal", "Դասական", "Порядковое")],
  adjclass: [t("Qualitative", "Որակական", "Качественное"), t("Relative", "Հարաբերական", "Относительное"), t("Possessive", "Ստացական", "Притяжательное")],
  itete: [t("Request: -ите", "Խնդրանք՝ -ите", "Просьба: -ите"), t("Future: -ете", "Ապառնի՝ -ете", "Будущее: -ете")],
  ova: [t("я -ую → -ова-, -ева-", "я -ую → -ова-, -ева-", "я -ую → -ова-, -ева-"), t("я -ываю → -ыва-, -ива-", "я -ываю → -ыва-, -ива-", "я -ываю → -ыва-, -ива-")],
  skaz: [t("Word in the tale", "Բառը պատմվածքում", "Слово из сказа"), t("Standard word", "Գրական բառ", "Обычное слово")],
  partadj: [t("Participle: an action", "Դերբայ՝ գործողություն", "Причастие: действие"), t("Adjective: a quality", "Ածական՝ հատկանիշ", "Прилагательное: признак")],
  voice: [t("Active: it acts", "Ներգործական՝ ինքն է գործում", "Действительное: действует само"), t("Passive: done to it", "Կրավորական՝ իր վրա են գործում", "Страдательное: действие над ним")],
  conjclass: [t("Coordinating", "Համադասական", "Сочинительный"), t("Subordinating", "Ստորադասական", "Подчинительный")],
  ruhyen: [t("Russian", "Ռուսերեն", "Русский"), t("Armenian", "Հայերեն", "Армянский"), t("English", "Անգլերեն", "Английский")],
  link3: [t("Agreement", "Համաձայնություն", "Согласование"), t("Government", "Խնդրառություն", "Управление"), t("Adjunction", "Առդրություն", "Примыкание")],
  pred3: [t("Simple verbal", "Պարզ բայական", "Простое глагольное"), t("Compound verbal", "Բաղադրյալ բայական", "Составное глагольное"), t("Compound nominal", "Բաղադրյալ անվանական", "Составное именное")],
  personal: [t("Personal", "Դիմավոր", "Личное"), t("Impersonal", "Անդեմ", "Безличное")],
  homattr: [t("Homogeneous: commas", "Համասեռ՝ ստորակետով", "Однородные: с запятой"), t("Not homogeneous: no commas", "Ոչ համասեռ՝ առանց ստորակետի", "Неоднородные: без запятой")],
  vvod: [t("Parenthetical: commas", "Միջանկյալ՝ ստորակետով", "Вводное: с запятыми"), t("Member of the sentence", "Նախադասության անդամ", "Член предложения")],
  coord3: [t("Copulative", "Միավորական", "Соединительные"), t("Adversative", "Հակադրական", "Противительные"), t("Disjunctive", "Տրոհական", "Разделительные")],
  comma: [t("Comma", "Ստորակետ", "Запятая"), t("No comma", "Առանց ստորակետի", "Без запятой")],
  conjword: [t("Conjunction", "Շաղկապ", "Союз"), t("Conjunctive word", "Շաղկապական բառ", "Союзное слово")],
  attrexpl: [t("Attributive: какой?", "Որոշիչ՝ какой?", "Определительное: какой?"), t("Explanatory: что?", "Բացատրական՝ что?", "Изъяснительное: что?")],
  advcl3: [t("Time", "Ժամանակ", "Времени"), t("Cause", "Պատճառ", "Причины"), t("Condition", "Պայման", "Условия")],
  asyn: [t("No conjunction", "Առանց շաղկապի", "Без союза"), t("With a conjunction", "Շաղկապով", "С союзом")],
  mark: [t("Two parts", "Երկու մաս", "Две части"), t("Mark", "Նշան", "Знак")],
  cohesion3: [t("First mention", "Առաջին հիշատակում", "Первое упоминание"), t("Pronoun", "Դերանուն", "Местоимение"), t("Synonym", "Հոմանիշ", "Синоним")],
  official: [t("Conversational", "Խոսակցական", "Разговорный"), t("Official", "Պաշտոնական", "Официально-деловой")],
  compress: [t("Full", "Ամբողջական", "Полностью"), t("Compressed", "Սեղմված", "Сжато")],
  paronym: [t("Paronym 1", "Պարոնիմ 1", "Пароним 1"), t("Paronym 2", "Պարոնիմ 2", "Пароним 2")],
  colour3: [t("Bookish", "Գրքային", "Книжное"), t("Neutral", "Չեզոք", "Нейтральное"), t("Colloquial", "Խոսակցական", "Разговорное")],
  tpp3: [t("Theme", "Թեմա", "Тема"), t("Problem", "Խնդիր", "Проблема"), t("Author's position", "Հեղինակի դիրքորոշում", "Позиция автора")],
  device: [t("Device", "Հնար", "Средство"), t("Example", "Օրինակ", "Пример")],
  sciart: [t("Scientific", "Գիտական", "Научный"), t("Artistic", "Գեղարվեստական", "Художественный")],
  move3: [t("Symbolism", "Սիմվոլիզմ", "Символизм"), t("Acmeism", "Ակմեիզմ", "Акмеизм"), t("Futurism", "Ֆուտուրիզմ", "Футуризм")],
  ruhy2: [t("Russian", "Ռուսական", "Русский"), t("Armenian", "Հայկական", "Армянский")],
  quote: [t("Quotation", "Մեջբերում", "Цитата"), t("Author", "Հեղինակ", "Автор")],
  sep3: [t("Together", "Միասին", "Слитно"), t("Hyphen", "Գծիկով", "Через дефис"), t("Separately", "Անջատ", "Раздельно")],
  origin: [t("Idiom", "Դարձվածք", "Фразеологизм"), t("Origin", "Ծագում", "Происхождение")],
  speech3: [t("Narration", "Պատմում", "Повествование"), t("Description", "Նկարագրություն", "Описание"), t("Reasoning", "Դատողություն", "Рассуждение")],
  acad: [t("Conversational", "Խոսակցական", "Разговорный"), t("Scientific", "Գիտական", "Научный")],
  false3: [t("Russian word", "Ռուսերեն բառ", "Русское слово"), t("Means", "Նշանակում է", "Значит"), t("Not", "Ոչ թե", "Не")],
  realia: [t("Realia", "Ռեալիա", "Реалия"), t("Explanation", "Բացատրություն", "Пояснение")],
  metre: [t("Metre", "Չափ", "Размер"), t("Example", "Օրինակ", "Пример")],
  enhyru: [t("English", "Անգլերեն", "Английский"), t("Armenian", "Հայերեն", "Армянский"), t("Russian", "Ռուսերեն", "Русский")],
  aan: [t("a: before a consonant sound", "a՝ բաղաձայն հնչյունից առաջ", "a — перед согласным звуком"), t("an: before a vowel sound", "an՝ ձայնավոր հնչյունից առաջ", "an — перед гласным звуком")],
  brame: [t("British", "Բրիտանական", "Британский"), t("American", "Ամերիկյան", "Американский")],
  countable: [t("Count it: add -s", "Հաշվվող՝ ավելացրու -s", "Исчисляемое: добавь -s"), t("Don't count it: no -s", "Չհաշվվող՝ առանց -s", "Неисчисляемое: без -s")],
  rhyme: [t("Word", "Բառ", "Слово"), t("Rhymes with", "Հանգավորվում է", "Рифмуется с")],
  plonly: [t("One thing: a …", "Մեկ իր՝ a …", "Один предмет: a …"), t("Always plural", "Միշտ հոգնակի", "Всегда во мн. числе")],
  magice: [t("Short: closed syllable", "Կարճ՝ փակ վանկ", "Краткий: закрытый слог"), t("Long: magic e", "Երկար՝ «կախարդական» e", "Долгий: «волшебная» e")],
  nearfar: [t("Near: here", "Մոտ՝ այստեղ", "Близко: здесь"), t("Far: there", "Հեռու՝ այնտեղ", "Далеко: там")],
  apos: [t("the … of …", "the … of …", "the … of …"), t("…'s", "…'s", "…'s")],
  its: [t("it's = it is", "it's = it is", "it's = it is"), t("its = of it", "its = նրա (իրի, կենդանու)", "its = его (о предмете, животном)")],
  nounadj: [t("Noun", "Գոյական", "Существительное"), t("Adjective: -y", "Ածական՝ -y", "Прилагательное: -y")],
  playgodo: [t("play + ball games, music", "play + գնդակով խաղեր, երաժշտություն", "play + игры с мячом, музыка"), t("go + -ing", "go + -ing", "go + -ing"), t("do + other sports", "do + այլ մարզաձևեր", "do + другие виды спорта")],
  named: [t("Word", "Բառ", "Слово"), t("Named after", "Անվանվել է", "Назван в честь")],
  isgot: [t("is … (height, age)", "is … (հասակ, տարիք)", "is … (рост, возраст)"), t("has got … (hair, eyes)", "has got … (մազեր, աչքեր)", "has got … (волосы, глаза)")],
  freq: [t("Word", "Բառ", "Слово"), t("How often", "Որքան հաճախ", "Как часто")],
  feel: [t("Feeling", "Զգացում", "Чувство"), t("Sentence", "Նախադասություն", "Предложение")],
  muchmany: [t("How many …? (you can count)", "How many …? (հաշվվող)", "How many …? (можно посчитать)"), t("How much …? (you can't count)", "How much …? (չհաշվվող)", "How much …? (нельзя посчитать)")],
  edsound: [t("-ed = [t]", "-ed = [t]", "-ed = [t]"), t("-ed = [d]", "-ed = [d]", "-ed = [d]"), t("-ed = [ɪd]", "-ed = [ɪd]", "-ed = [ɪd]")],
  article3: [t("a / an", "a / an", "a / an"), t("the", "the", "the"), t("no article", "առանց հոդի", "без артикля")],
  nation: [t("Country", "Երկիր", "Страна"), t("Nationality", "Ազգություն", "Национальность"), t("Language", "Լեզու", "Язык")],
  when: [t("When", "Երբ", "Когда"), t("What happened", "Ինչ եղավ", "Что произошло")],
  oblig3: [t("must: necessary", "must՝ անհրաժեշտ է", "must — необходимо"), t("mustn't: forbidden", "mustn't՝ արգելված է", "mustn't — запрещено"), t("don't have to: not necessary", "don't have to՝ պարտադիր չէ", "don't have to — не обязательно")],
  ask3: [t("Can I…? (friends)", "Can I…? (ընկերներին)", "Can I…? (друзьям)"), t("Could I…? (polite)", "Could I…? (քաղաքավարի)", "Could I…? (вежливо)"), t("May I…? (formal)", "May I…? (պաշտոնական)", "May I…? (официально)")],
  domake: [t("do + jobs and activities", "do + գործեր, զբաղմունքներ", "do + дела, занятия"), t("make + something new appears", "make + նոր բան է հայտնվում", "make + появляется что-то новое")],
  ordinal: [t("Number", "Թիվ", "Число"), t("Ordinal", "Դասական", "Порядковое"), t("Short form", "Կրճատ ձև", "Сокращение")],
  jay: [t("just: a moment ago", "just՝ հենց նոր", "just — только что"), t("already: sooner than expected", "already՝ արդեն", "already — уже"), t("yet: questions and negatives", "yet՝ հարց և ժխտում", "yet — вопросы и отрицания")],
  forsince: [t("for + how long", "for + որքան ժամանակ", "for + как долго"), t("since + starting point", "since + սկզբնակետ", "since + с какого момента")],
  perfpast: [t("Present perfect: time not said", "Present perfect՝ ժամանակը նշված չէ", "Present perfect: время не названо"), t("Past simple: finished time", "Past simple՝ ավարտված ժամանակ", "Past simple: законченное время")],
  fewlittle: [t("(a) few: you can count", "(a) few՝ հաշվվող", "(a) few — исчисляемые"), t("(a) little: you can't count", "(a) little՝ չհաշվվող", "(a) little — неисчисляемые")],
  container: [t("Container", "Տարա", "Упаковка"), t("What is in it", "Ինչ կա ներսում", "Что внутри")],
  capital: [t("City", "Քաղաք", "Город"), t("Country", "Երկիր", "Страна"), t("River", "Գետ", "Река")],
  towncountry: [t("In the city", "Քաղաքում", "В городе"), t("In the country", "Գյուղում", "За городом")],
  relwho: [t("who: people", "who՝ մարդիկ", "who — люди"), t("which: things", "which՝ իրեր", "which — вещи"), t("where: places", "where՝ վայրեր", "where — места")],
  dodont: [t("Do", "Արա", "Делай"), t("Don't", "Մի արա", "Не делай")],
  factop: [t("Fact: can be checked", "Փաստ՝ կարելի է ստուգել", "Факт: можно проверить"), t("Opinion: what someone thinks", "Կարծիք՝ ինչ է մտածում մեկը", "Мнение: что кто-то думает")],
  inged: [t("-ing: what causes it", "-ing՝ ինչն է պատճառը", "-ing — что вызывает"), t("-ed: how you feel", "-ed՝ ինչ ես զգում", "-ed — что ты чувствуешь")],
  phrasal: [t("Phrasal verb", "Դարձվածային բայ", "Фразовый глагол"), t("Meaning", "Իմաստ", "Значение")],
  heritage: [t("Monument", "Հուշարձան", "Памятник"), t("Where", "Որտեղ", "Где"), t("When built", "Երբ է կառուցվել", "Когда построен")],
  who3: [t("Name", "Անուն", "Имя"), t("Who", "Ով", "Кто"), t("Famous for", "Հայտնի է", "Знаменит")],
  deduce: [t("must: I'm sure it's true", "must՝ վստահ եմ, որ այո", "must — уверен, что да"), t("might / could: maybe", "might / could՝ գուցե", "might / could — возможно"), t("can't: I'm sure it's false", "can't՝ վստահ եմ, որ ոչ", "can't — уверен, что нет")],
  realunreal: [t("1st: real, possible", "1-ին՝ իրական, հնարավոր", "1-й: реально, возможно"), t("2nd: imagined, unlikely", "2-րդ՝ երևակայական, քիչ հավանական", "2-й: воображаемо, маловероятно")],
  gerinf: [t("verb + -ing", "բայ + -ing", "глагол + -ing"), t("verb + to …", "բայ + to …", "глагол + to …")],
  lakes: [t("Feature", "Հատկանիշ", "Признак"), t("Sevan", "Սևան", "Севан"), t("Baikal", "Բայկալ", "Байкал")],
  fest3: [t("Festival", "Տոն", "Праздник"), t("Where", "Որտեղ", "Где"), t("When", "Երբ", "Когда")],
  stative: [t("State: simple form", "Վիճակ՝ simple ձև", "Состояние: simple"), t("Action: continuous is fine", "Գործողություն՝ continuous-ը թույլատրելի է", "Действие: continuous возможен")],
  wordform: [t("Word", "Բառ", "Слово"), t("Noun", "Գոյական", "Существительное")],
  extreme: [t("very + ordinary adjective", "very + սովորական ածական", "very + обычное прилагательное"), t("absolutely + strong adjective", "absolutely + ուժեղ ածական", "absolutely + сильное прилагательное")],
  cond23: [t("2nd: imagined now", "2-րդ՝ երևակայական հիմա", "2-й: воображаемое сейчас"), t("3rd: imagined past", "3-րդ՝ երևակայական անցյալ", "3-й: воображаемое прошлое")],
  wishtime: [t("wish + past: about now", "wish + անցյալ՝ հիմայի մասին", "wish + прошедшее: о настоящем"), t("wish + past perfect: about the past", "wish + past perfect՝ անցյալի մասին", "wish + past perfect: о прошлом")],
  unless: [t("if … not", "if … not", "if … not"), t("unless", "unless", "unless")],
  condtypes: [t("Type", "Տեսակ", "Тип"), t("Example", "Օրինակ", "Пример")],
  eduexam: [t("Country", "Երկիր", "Страна"), t("Exam at 15–16", "Քննություն 15–16 տարեկանում", "Экзамен в 15–16 лет"), t("Final exam", "Ավարտական քննություն", "Выпускной экзамен")],
  quality: [t("Quality", "Հատկանիշ", "Качество"), t("Job", "Մասնագիտություն", "Профессия")],
  causeeffect: [t("Cause", "Պատճառ", "Причина"), t("Effect", "Հետևանք", "Следствие")],
  linkers: [t("Adding", "Ավելացում", "Добавление"), t("Contrast", "Հակադրություն", "Противопоставление"), t("Result", "Արդյունք", "Следствие")],
  usedwould: [t("used to: states and habits", "used to՝ վիճակներ և սովորություններ", "used to — состояния и привычки"), t("would: repeated actions only", "would՝ միայն կրկնվող գործողություններ", "would — только повторяющиеся действия")],
  verbpat: [t("Verb", "Բայ", "Глагол"), t("Pattern", "Կաղապար", "Схема")],
  plain: [t("Wordy", "Երկարաբան", "Многословно"), t("Plain", "Պարզ", "Просто")],
  foragainst: [t("For", "Կողմ", "За"), t("Against", "Դեմ", "Против")],
  prob3: [t("Certain", "Վստահ", "Наверняка"), t("Likely", "Հավանական", "Вероятно"), t("Unlikely", "Քիչ հավանական", "Маловероятно")],
  prefix: [t("Prefix", "Նախածանց", "Приставка"), t("Example", "Օրինակ", "Пример")],
  trip: [t("Word", "Բառ", "Слово"), t("When to use it", "Երբ գործածել", "Когда употреблять")],
  thegeo: [t("No article", "Առանց հոդի", "Без артикля"), t("the", "the", "the")],
  readskill: [t("Skimming", "Skimming՝ արագ դիտում", "Skimming — просмотр"), t("Scanning", "Scanning՝ որոնում", "Scanning — поиск")],
  proverb: [t("Proverb", "Առած", "Пословица"), t("Saying", "Ասացվածք", "Поговорка")],
};
const CASES: Record<"ru" | "hy", Array<[ReturnType<typeof t>, string]>> = {
  ru: [
    [t("Nominative", "Ուղղական", "Именительный"), "кто? что?"],
    [t("Genitive", "Սեռական", "Родительный"), "кого? чего?"],
    [t("Dative", "Տրական", "Дательный"), "кому? чему?"],
    [t("Accusative", "Հայցական", "Винительный"), "кого? что?"],
    [t("Instrumental", "Գործիական", "Творительный"), "кем? чем?"],
    [t("Prepositional", "Նախդրային", "Предложный"), "о ком? о чём?"],
  ],
  hy: [
    [t("Nominative", "Ուղղական", "Именительный"), "ո՞վ, ի՞նչ"],
    [t("Genitive", "Սեռական", "Родительный"), "ու՞մ, ինչի՞"],
    [t("Dative", "Տրական", "Дательный"), "ու՞մ, ինչի՞ն"],
    [t("Accusative", "Հայցական", "Винительный"), "ու՞մ, ի՞նչ"],
    [t("Ablative", "Բացառական", "Исходный"), "ումի՞ց, ինչի՞ց"],
    [t("Instrumental", "Գործիական", "Творительный"), "ումո՞վ, ինչո՞վ"],
    [t("Locative", "Ներգոյական", "Местный"), "ինչո՞ւմ"],
  ],
};
const PRONOUNS: Record<Lang, string[]> = {
  ru: ["я", "ты", "он, она", "мы", "вы", "они"],
  hy: ["ես", "դու", "նա", "մենք", "դուք", "նրանք"],
  en: ["I", "you", "he, she, it", "we", "you", "they"],
};

/** Splits forms into [stem, ending] pairs. */
function split(forms: string[]): Array<[string, string]> {
  if (forms.some((f) => f.includes("["))) return forms.map((f) => [f, ""]);
  if (forms.some((f) => f.includes("|"))) return forms.map((f) => { const [a, b = ""] = f.split("|"); return [a, b]; });
  const lo = forms.map((f) => f.toLocaleLowerCase());
  let n = 0;
  while (lo.every((f) => n < f.length && f[n] === lo[0][n])) n++;
  return forms.map((f) => [f.slice(0, n), f.slice(n)]);
}
const sp = (s: string) => s.replace(/_/g, " ");

function Form({ stem, end }: { stem: string; end: string }) {
  if (stem === "-" && !end) return <span className="lang-form">—</span>;
  /** [ ] marks the changing part anywhere in the form, e.g. [չեմ]_գրում. */
  if (stem.includes("[")) return <span className="lang-form">{stem.split(/[[\]]/).map((p, i) => (i % 2 ? <b key={i}>{sp(p)}</b> : sp(p)))}</span>;
  return <span className="lang-form">{sp(stem)}<b className={end ? undefined : "is-zero"}>{end ? sp(end) : "∅"}</b></span>;
}

function Cases({ lang, forms, pl, wl }: { lang: SimProps["lang"]; forms: string[]; pl: string[]; wl: "ru" | "hy" }) {
  const [plural, setPlural] = useState(false);
  const rows = CASES[wl];
  const cells = split([...forms, ...pl]);
  const shown = plural ? cells.slice(forms.length) : cells.slice(0, forms.length);
  return (
    <>
      {pl.length ? (
        <div className="art-chips">
          <button type="button" className={`art-chip ${plural ? "" : "is-active"}`} onClick={() => setPlural(false)}>{L(W.sg, lang)}</button>
          <button type="button" className={`art-chip ${plural ? "is-active" : ""}`} onClick={() => setPlural(true)}>{L(W.pl, lang)}</button>
        </div>
      ) : null}
      <table className="lang-table">
        <thead><tr><th>{L(W.caseH, lang)}</th><th>{L(W.qH, lang)}</th><th>{L(W.formH, lang)}</th></tr></thead>
        <tbody>
          {rows.map(([name, q], i) => (
            <tr key={i}><td>{L(name, lang)}</td><td className="is-q">{q}</td><td>{shown[i] ? <Form stem={shown[i][0]} end={shown[i][1]} /> : "—"}</td></tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Persons({ lang, forms, wl }: { lang: SimProps["lang"]; forms: string[]; wl: Lang }) {
  const cells = split(forms);
  return (
    <table className="lang-table is-persons">
      <thead><tr><th>{L(W.personH, lang)}</th><th /><th>{L(W.formH, lang)}</th></tr></thead>
      <tbody>
        {W.persons6.map((p, i) => (
          <tr key={i}><td>{L(p, lang)}</td><td className="is-q">{PRONOUNS[wl][i]}</td><td>{cells[i] ? <Form stem={cells[i][0]} end={cells[i][1]} /> : "—"}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

function Verbs({ lang, rows, cols }: { lang: SimProps["lang"]; rows: string[][]; cols?: string }) {
  const [hidden, setHidden] = useState<number | null>(null);
  const [open, setOpen] = useState<string[]>([]);
  const named = cols ? COLS[cols]?.map((h) => L(h, lang)) : undefined;
  const heads = named ?? ["V1", "V2 (past)", "V3 (participle)"];
  const short = named ?? ["V1", "V2", "V3"];
  return (
    <>
      <div className="art-chips">
        {heads.slice(named ? 0 : 1).map((_, k) => {
          const c = named ? k : k + 1;
          return (
            <button key={c} type="button" className={`art-chip ${hidden === c ? "is-active" : ""}`} onClick={() => { setHidden(c); setOpen([]); }}>
              {L(W.hide, lang)}: {short[c]}
            </button>
          );
        })}
        <button type="button" className={`art-chip ${hidden === null ? "is-active" : ""}`} onClick={() => setHidden(null)}>{L(W.showAll, lang)}</button>
      </div>
      <div className="lang-scroll">
      <table className={`lang-table is-verbs ${heads.length > 3 ? "is-wide" : named ? `is-compare${heads.length === 3 ? " is-three" : ""}` : ""}`}>
        <thead><tr>{heads.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((v, c) => {
                const id = `${i}:${c}`;
                const hide = c === hidden && !open.includes(id);
                return (
                  <td key={c}>
                    {hide ? <button type="button" className="lang-cover" onClick={() => setOpen([...open, id])}>?</button> : <span className={c || named ? "lang-form" : undefined}>{v === "-" ? "—" : sp(v)}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default function Forms({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "cases";
  const wl = (["ru", "hy", "en"].includes(spec.opts.lang ?? "") ? spec.opts.lang : "ru") as Lang;
  const [title, hint] = mode === "persons" ? [W.persons, W.personsHint] : mode === "verbs" ? [W.verbs, W.verbsHint] : mode === "compare" ? [W.compare, W.verbsHint] : [W.cases, W.casesHint];
  return (
    <ArtFrame kind={mode === "verbs" || mode === "compare" ? "check" : "look"} title={L(title, lang)} body={spec.body || L(hint, lang)}>
      {mode === "verbs" || mode === "compare" ? <Verbs lang={lang} rows={spec.args.map((a) => a.split(":"))} cols={mode === "compare" ? spec.opts.cols ?? "modern" : undefined} />
        : mode === "persons" ? <Persons lang={lang} forms={spec.args} wl={wl} />
        : <Cases lang={lang} forms={spec.args} pl={list(spec.opts.pl)} wl={wl === "hy" ? "hy" : "ru"} />}
    </ArtFrame>
  );
}
