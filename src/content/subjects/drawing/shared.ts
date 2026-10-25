import { t } from "../../types";

export const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const g = (n: number) => ({
  title: t(`Drawing & Art · Grade ${n}`, `Կերպարվեստ · ${n}-րդ դասարան`, `Рисование и ИЗО · ${n} класс`),
});

