import { t } from "../labels";
import type { BarSet } from "./bars";

/* Chess data sets. */
export const CHESS_BARS: Record<string, BarSet> = {
  /* ---------------- grade 2 ---------------- */
  chessvalue: {
    title: t("How much the pieces are worth", "Որքան արժեն խաղաքարերը", "Сколько стоят фигуры"),
    unit: t("points", "միավոր", "очков"),
    source: t("The usual school values. The king has no value: if it is mated, the game is lost.", "Ընդունված դպրոցական արժեքներ։ Արքան արժեք չունի․ եթե նրան մատ են տալիս, պարտիան պարտված է։", "Принятые школьные оценки. У короля нет цены: если ему поставлен мат, партия проиграна."),
    colors: ["#e11d48", "#f59e0b", "#4f46e5", "#0ea5e9", "#10b981"],
    rows: [
      [t("Queen", "Թագուհի", "Ферзь"), 9, t("Moves like a rook and a bishop together, so it is worth about as much as both.", "Քայլում է և՛ նավակի, և՛ փղի պես, ուստի արժե մոտավորապես նրանց երկուսի չափ։", "Ходит и как ладья, и как слон, поэтому стоит почти как они вместе.")],
      [t("Rook", "Նավակ", "Ладья"), 5, t("Controls 14 squares from any square of an empty board.", "Դատարկ տախտակի ցանկացած դաշտից հսկում է 14 դաշտ։", "С любого поля пустой доски держит 14 полей.")],
      [t("Bishop", "Փիղ", "Слон"), 3, t("Stays on squares of one colour all game long.", "Ամբողջ պարտիայի ընթացքում մնում է մեկ գույնի դաշտերում։", "Всю партию остаётся на полях одного цвета.")],
      [t("Knight", "Ձի", "Конь"), 3, t("The only piece that can jump over others.", "Միակ խաղաքարն է, որը կարող է թռչել մյուսների վրայով։", "Единственная фигура, которая может перепрыгивать через другие.")],
      [t("Pawn", "Զինվոր", "Пешка"), 1, t("Small, but it can become a queen on the last rank.", "Փոքր է, բայց վերջին հորիզոնականում կարող է դառնալ թագուհի։", "Маленькая, но на последней горизонтали может стать ферзём.")],
    ],
  },
};
