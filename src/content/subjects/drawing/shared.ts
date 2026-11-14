import { t } from "../../types";
import { hyOrdinal } from "@/lib/utils";

export const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const g = (n: number) => ({
  title: t(`Drawing & Art · Grade ${n}`, `Կերպարվեստ · ${hyOrdinal(n)} դասարան`, `Рисование и ИЗО · ${n} класс`),
});

