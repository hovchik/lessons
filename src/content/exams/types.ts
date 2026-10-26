import type { ExamKind, ExamQuestion, ExamScale, ExamSystem, I18nText } from "@/server/db/schema";
import { subjects } from "../subjects";
import { t } from "../types";

export type { ExamQuestion };

export type ExamSeed = {
  id: string;
  kind: ExamKind;
  system: ExamSystem;
  subject: string | null;
  grade: number;
  position?: number;
  title: I18nText;
  description: I18nText;
  /** Markdown per language: structure, duration, scoring, tips. */
  format: I18nText;
  questions: ExamQuestion[];
  durationMin: number;
  scale: ExamScale;
  passPercent: number;
};

type Tri = [en: string, hy: string, ru: string];

/**
 * Exam question shorthand. `answer` is the index of the correct option.
 * Prompts and options are plain text (no Markdown or LaTeX): use Unicode symbols such as ², √, ×, ÷, °.
 */
export const eq = (
  prompt: Tri,
  options: Tri[],
  answer: number,
  extra: { points?: number; why?: Tri; topic?: Tri } = {},
): ExamQuestion => ({
  prompt: t(...prompt),
  options: options.map((o) => t(...o)),
  answer,
  ...(extra.points && extra.points !== 1 ? { points: extra.points } : {}),
  ...(extra.why ? { explanation: t(...extra.why) } : {}),
  ...(extra.topic ? { topic: t(...extra.topic) } : {}),
});

const subjectName = (id: string): I18nText => {
  const s = subjects.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown subject ${id}`);
  return s.name;
};

const GRADE_WORD = {
  en: (g: number) => `Grade ${g}`,
  hy: (g: number) => `${g}-րդ դասարան`,
  ru: (g: number) => `${g} класс`,
};

/**
 * Year-end trial test for one course. Title, description and format text are generated,
 * so a trial file only lists the questions.
 */
export const trial = (
  subject: string,
  grade: number,
  questions: ExamQuestion[],
  opts: { durationMin?: number; focus?: Tri } = {},
): ExamSeed => {
  const name = subjectName(subject);
  const n = questions.length;
  const total = questions.reduce((a, qq) => a + (qq.points ?? 1), 0);
  const durationMin = opts.durationMin ?? (grade <= 4 ? 30 : grade <= 9 ? 40 : 45);
  const focus = opts.focus ? t(...opts.focus) : null;
  return {
    id: `trial-${subject}-${grade}`,
    kind: "trial",
    system: "both",
    subject,
    grade,
    title: t(
      `${name.en} · ${GRADE_WORD.en(grade)} · Year-end trial`,
      `${name.hy} · ${GRADE_WORD.hy(grade)} · Տարեվերջյան փորձնական թեստ`,
      `${name.ru} · ${GRADE_WORD.ru(grade)} · Итоговая пробная работа`,
    ),
    description: t(
      `A ${n}-question practice test covering the whole ${GRADE_WORD.en(grade).toLowerCase()} ${name.en.toLowerCase()} course${focus ? `: ${focus.en}` : ""}. Take it at the end of the school year to see what still needs work before moving up.`,
      `${n} առաջադրանքից բաղկացած փորձնական թեստ, որն ընդգրկում է ${GRADE_WORD.hy(grade)}ի «${name.hy}» ամբողջ դասընթացը${focus ? `․ ${focus.hy}` : ""}։ Կատարեք այն ուստարվա վերջում, որպեսզի տեսնեք, թե ինչ է մնում կրկնել։`,
      `Пробная работа из ${n} заданий по всему курсу «${name.ru}» за ${GRADE_WORD.ru(grade)}${focus ? `: ${focus.ru}` : ""}. Выполните её в конце учебного года, чтобы увидеть, что ещё нужно повторить.`,
    ),
    format: t(
      `## How the trial works\n\n- **${n} questions**, one correct answer each, **${total} points** in total.\n- Recommended time: **${durationMin} minutes**. The timer is a guide, not a hard stop.\n- Answer every question, then press **Finish** to see your score, the percent, and the equivalent mark on the Armenian 10-point and Russian 5-point scales.\n- Every question has an explanation. Read the ones you missed and return to the matching lesson.\n\n## Tips\n\n- Read each question twice before choosing.\n- If you are unsure, rule out the options that are clearly wrong first.\n- Work through the whole test without notes, as in a real end-of-year check.`,
      `## Ինչպես է անցնում փորձնական թեստը\n\n- **${n} առաջադրանք**, յուրաքանչյուրը մեկ ճիշտ պատասխանով, ընդամենը **${total} միավոր**։\n- Խորհուրդ տրվող ժամանակը՝ **${durationMin} րոպե**։ Ժամաչափը ուղեցույց է, ոչ թե խիստ սահման։\n- Պատասխանեք բոլոր հարցերին, ապա սեղմեք **Ավարտել**՝ տեսնելու միավորները, տոկոսը և համարժեք գնահատականը հայկական 10 և ռուսական 5 միավորանոց սանդղակներով։\n- Յուրաքանչյուր հարց ունի բացատրություն։ Կարդացեք սխալների բացատրությունները և վերադարձեք համապատասխան դասին։\n\n## Խորհուրդներ\n\n- Ընտրելուց առաջ հարցը կարդացեք երկու անգամ։\n- Եթե վստահ չեք, նախ բացառեք ակնհայտ սխալ տարբերակները։\n- Թեստը կատարեք առանց գրառումների, ինչպես իսկական տարեվերջյան ստուգման ժամանակ։`,
      `## Как устроена пробная работа\n\n- **${n} заданий**, в каждом один верный ответ, всего **${total} баллов**.\n- Рекомендуемое время: **${durationMin} минут**. Таймер подсказывает темп, но не останавливает работу.\n- Ответьте на все вопросы и нажмите **Завершить**, чтобы увидеть баллы, процент и отметку по армянской 10-балльной и российской 5-балльной шкалам.\n- У каждого задания есть пояснение. Прочитайте пояснения к ошибкам и вернитесь к нужному уроку.\n\n## Советы\n\n- Прочитайте вопрос дважды, прежде чем выбирать.\n- Если не уверены, сначала исключите явно неверные варианты.\n- Выполняйте работу без подсказок, как на настоящей итоговой проверке.`,
    ),
    questions,
    durationMin,
    scale: "mixed",
    passPercent: 40,
  };
};

/** State exam shorthand: fills in kind and keeps the file readable. */
export const stateExam = (seed: Omit<ExamSeed, "kind">): ExamSeed => ({ kind: "state", ...seed });
