import type { Tr } from "@/lib/art/spec";
import { type Board, type Color, START, epAfter, inCheck, isMate, isStalemate, legalMoves, other, parseFen, parseMove, play } from "../chess-core";
import { t } from "../labels";

/**
 * Scripted chess lines for `chess set=<name>`, grades 2–4.
 * A step may reset the board with `fen` (piece placement only), then plays its moves `m`
 * ("e2e4 e7e5"; castling is the king's two-square move, promotion adds the piece: "e7e8n").
 * `arrows` ("d4e6 !c4f1") and `marks` ("e4 !e8 .d5 a5:d8") are drawn once the moves are played:
 * plain is green, ! is red, . is a blue dot and a:b fills a rectangle.
 * `end` claims check, mate or stalemate for the side to move; content:check plays every line
 * with the rules engine and verifies each move and each claim.
 */
export type ChessStep = { fen?: string; m?: string; arrows?: string; marks?: string; end?: "check" | "mate" | "stalemate"; turn?: Color; cap: Tr };
export type ChessSet = { title: Tr; hint?: Tr; fen: string; steps: ChessStep[] };
export type ChessFrame = Omit<ChessStep, "fen" | "m"> & { base: Board; moves: Array<{ from: number; to: number; after: Board }> };

const S = (cap: Tr, o: Omit<ChessStep, "cap"> = {}): ChessStep => ({ ...o, cap });
const EMPTY = "8/8/8/8/8/8/8/8";

/** Plays a set through; `errors` collects illegal moves and wrong claims. */
export function chessFrames(set: ChessSet, errors?: string[]): ChessFrame[] {
  let board = parseFen(set.fen) ?? parseFen(EMPTY)!;
  let ep = -1;
  let mover: Color | null = null;
  return set.steps.map((st, k) => {
    if (st.fen) {
      const b = parseFen(st.fen);
      if (!b) errors?.push(`step ${k + 1}: bad fen "${st.fen}"`);
      board = b ?? board;
      ep = -1;
      mover = null;
    }
    const base = board;
    const moves: ChessFrame["moves"] = [];
    for (const w of (st.m ?? "").split(/\s+/).filter(Boolean)) {
      const mv = parseMove(w);
      const p = mv && board[mv.from];
      if (!mv || !p || !legalMoves(board, mv.from, ep).includes(mv.to)) {
        errors?.push(`step ${k + 1}: illegal move ${w}`);
        continue;
      }
      const after = play(board, mv.from, mv.to, mv.promo);
      ep = epAfter(board, mv.from, mv.to);
      board = after;
      mover = p.c;
      moves.push({ from: mv.from, to: mv.to, after });
    }
    if (st.end && errors) {
      const side = st.turn ?? (mover ? other(mover) : null);
      const ok = side && (st.end === "check" ? inCheck(board, side) : st.end === "mate" ? isMate(board, side) : isStalemate(board, side));
      if (!ok) errors.push(`step ${k + 1}: not ${st.end}`);
    }
    return { base, moves, cap: st.cap, arrows: st.arrows, marks: st.marks, end: st.end, turn: st.turn };
  });
}

export const CHESS_SETS: Record<string, ChessSet> = {
  /* ---------------- grade 2 ---------------- */
  setup: {
    title: t("Setting up the pieces", "Խաղաքարերի դասավորումը", "Расстановка фигур"),
    fen: EMPTY,
    steps: [
      S(t("An empty board. Turn it so that each player has a white square in the bottom right-hand corner: h1 for White, a8 for Black.", "Դատարկ տախտակ։ Դրի՛ր այնպես, որ յուրաքանչյուր խաղացողի աջ ներքևի անկյունում սպիտակ դաշտ լինի՝ սպիտակների համար h1, սևերի համար a8։", "Пустая доска. Положи её так, чтобы у каждого игрока в правом нижнем углу было белое поле: h1 у белых, a8 у чёрных."), { marks: "h1 a8" }),
      S(t("The pawns fill the second rank (White) and the seventh rank (Black).", "Զինվորները զբաղեցնում են երկրորդ հորիզոնականը (սպիտակները) և յոթերորդ հորիզոնականը (սևերը)։", "Пешки занимают вторую горизонталь (белые) и седьмую (чёрные)."), { fen: "8/pppppppp/8/8/8/8/PPPPPPPP/8" }),
      S(t("The rooks stand in the corners.", "Նավակները կանգնում են անկյուններում։", "Ладьи встают в углы."), { fen: "r6r/pppppppp/8/8/8/8/PPPPPPPP/R6R", marks: "a1 h1 a8 h8" }),
      S(t("The knights stand next to the rooks.", "Ձիերը կանգնում են նավակների կողքին։", "Кони встают рядом с ладьями."), { fen: "rn4nr/pppppppp/8/8/8/8/PPPPPPPP/RN4NR", marks: "b1 g1 b8 g8" }),
      S(t("The bishops stand next to the knights.", "Փղերը կանգնում են ձիերի կողքին։", "Слоны встают рядом с конями."), { fen: "rnb2bnr/pppppppp/8/8/8/8/PPPPPPPP/RNB2BNR", marks: "c1 f1 c8 f8" }),
      S(t("The queen goes on a square of her own colour: the white queen on d1 (a white square), the black queen on d8 (a black square).", "Թագուհին կանգնում է իր գույնի դաշտում՝ սպիտակ թագուհին d1-ում (սպիտակ դաշտ), սև թագուհին՝ d8-ում (սև դաշտ)։", "Ферзь встаёт на поле своего цвета: белый ферзь на d1 (белое поле), чёрный — на d8 (чёрное поле)."), { fen: "rnbq1bnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1BNR", marks: "d1 d8" }),
      S(t("The kings take the last free squares, e1 and e8. Everything is ready: White always moves first.", "Արքաները զբաղեցնում են վերջին ազատ դաշտերը՝ e1 և e8։ Ամեն ինչ պատրաստ է․ առաջինը միշտ քայլում են սպիտակները։", "Короли занимают последние свободные поля, e1 и e8. Всё готово: первыми всегда ходят белые."), { fen: START, marks: "e1 e8" }),
    ],
  },
  trade: {
    title: t("Which capture is better?", "Ո՞ր վերցումն է ավելի լավ", "Какое взятие лучше?"),
    fen: "6k1/5p2/4p3/1r6/3N4/8/8/6K1",
    steps: [
      S(t("White's knight on d4 can capture the pawn on e6 or the rook on b5. Which capture is better?", "d4-ի սպիտակ ձին կարող է վերցնել e6-ի զինվորը կամ b5-ի նավակը։ Ո՞ր վերցումն է ավելի լավ։", "Белый конь d4 может взять пешку e6 или ладью b5. Какое взятие лучше?"), { arrows: "d4e6 d4b5" }),
      S(t("Knight takes e6, and the pawn takes back: White gave a knight (3 points) for a pawn (1 point). The pawn was protected!", "Ձին վերցնում է e6-ը, և զինվորը հետ է վերցնում․ սպիտակները տվեցին ձի (3 միավոր) զինվորի (1 միավոր) դիմաց։ Զինվորը պաշտպանված էր։", "Конь берёт e6, а пешка бьёт в ответ: белые отдали коня (3 очка) за пешку (1 очко). Пешка была защищена!"), { m: "d4e6 f7e6", marks: "!e6" }),
      S(t("Better: the knight takes the rook on b5. Nobody can take back, so White wins 5 points for free.", "Ավելի լավ է՝ ձին վերցնում է b5-ի նավակը։ Ոչ ոք չի կարող հետ վերցնել, ուստի սպիտակներն անվճար շահում են 5 միավոր։", "Лучше: конь берёт ладью b5. Взять в ответ некому, и белые бесплатно выигрывают 5 очков."), { fen: "6k1/5p2/4p3/1r6/3N4/8/8/6K1", m: "d4b5", marks: "b5" }),
    ],
  },
  check: {
    title: t("Three ways out of check, and a mate", "Շախից պաշտպանվելու երեք եղանակ և մատ", "Три способа защиты от шаха и мат"),
    fen: "4k3/8/8/8/8/8/8/4R1K1",
    steps: [
      S(t("The rook on e1 attacks the black king: this is check. Black must deal with it at once.", "e1-ի նավակը հարձակվում է սև արքայի վրա․ սա շախ է։ Սևերը պետք է անմիջապես պաշտպանվեն։", "Ладья e1 нападает на чёрного короля: это шах. Чёрные должны сразу от него защититься."), { arrows: "!e1e8", end: "check", turn: "b" }),
      S(t("Way 1: move the king to a safe square.", "Առաջին եղանակ՝ արքան տեղափոխել անվտանգ դաշտ։", "Способ 1: уйти королём на безопасное поле."), { m: "e8d7" }),
      S(t("Way 2: block the check. The bishop steps in between the rook and the king.", "Երկրորդ եղանակ՝ փակվել շախից։ Փիղը կանգնում է նավակի և արքայի միջև։", "Способ 2: закрыться. Слон встаёт между ладьёй и королём."), { fen: "4k3/3b4/8/8/8/8/8/4R1K1", m: "d7e6" }),
      S(t("Way 3: capture the piece that gives check. The black rook takes the rook on e1.", "Երրորդ եղանակ՝ վերցնել շախ տվող խաղաքարը։ Սև նավակը վերցնում է e1-ի նավակը։", "Способ 3: побить фигуру, которая даёт шах. Чёрная ладья берёт ладью e1."), { fen: "4k3/8/8/8/8/8/8/r3R1K1", m: "a1e1" }),
      S(t("Here the black king is shut in by its own pawns. What can the white rook do?", "Այստեղ սև արքան փակված է իր իսկ զինվորներով։ Ի՞նչ կարող է անել սպիտակ նավակը։", "Здесь чёрный король заперт собственными пешками. Что может сделать белая ладья?"), { fen: "6k1/5ppp/8/8/8/8/8/R5K1" }),
      S(t("Rook to a8: check, and none of the three ways works. The king cannot move, and nothing can block or capture. Checkmate!", "Նավակը a8․ շախ է, և երեք եղանակներից ոչ մեկը չի օգնում։ Արքան չի կարող քայլել, ոչինչ չի կարող փակել կամ վերցնել։ Մատ։", "Ладья на a8: шах, и ни один из трёх способов не помогает. Королю некуда идти, закрыться и побить нечем. Мат!"), { m: "a1a8", end: "mate" }),
    ],
  },
  castling: {
    title: t("Castling", "Փոխատեղում", "Рокировка"),
    fen: "r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R",
    steps: [
      S(t("The squares between the kings and the rooks are empty, and none of them has moved yet. Both sides may castle.", "Արքաների և նավակների միջև դաշտերը դատարկ են, և նրանցից ոչ մեկը դեռ չի քայլել։ Երկու կողմն էլ կարող են փոխատեղում անել։", "Поля между королями и ладьями свободны, и никто из них ещё не ходил. Обе стороны могут рокироваться."), { arrows: "e1g1 e1c1" }),
      S(t("Short castling: the king moves two squares towards the rook on h1, and the rook jumps over it to f1.", "Կարճ փոխատեղում․ արքան երկու դաշտ շարժվում է դեպի h1-ի նավակը, իսկ նավակը թռչում է նրա վրայով f1։", "Короткая рокировка: король идёт на два поля к ладье h1, а ладья перепрыгивает через него на f1."), { m: "e1g1" }),
      S(t("Long castling: the black king goes to c8, and the rook from a8 goes to d8.", "Երկար փոխատեղում․ սև արքան գնում է c8, իսկ a8-ի նավակը՝ d8։", "Длинная рокировка: чёрный король идёт на c8, а ладья с a8 — на d8."), { m: "e8c8" }),
      S(t("Now a black bishop attacks f1. The king may not pass over an attacked square, so short castling is forbidden.", "Այժմ սև փիղը հարձակվում է f1-ի վրա։ Արքան չի կարող անցնել հարձակման տակ գտնվող դաշտով, ուստի կարճ փոխատեղումն արգելված է։", "Теперь чёрный слон бьёт поле f1. Король не может проходить через битое поле, поэтому короткая рокировка запрещена."), { fen: "r3k2r/pppppppp/8/8/2b5/8/PPPP1PPP/R3K2R", arrows: "!c4f1", marks: "!f1" }),
      S(t("Long castling is still allowed: d1 and c1 are not attacked.", "Երկար փոխատեղումը դեռ թույլատրված է․ d1-ը և c1-ը հարձակման տակ չեն։", "Длинная рокировка по-прежнему возможна: поля d1 и c1 не битые."), { m: "e1c1" }),
    ],
  },
  enpassant: {
    title: t("En passant and promotion", "Անցողիկ վերցում և փոխակերպում", "Взятие на проходе и превращение"),
    fen: "4k3/3p4/8/4P3/8/8/8/4K3",
    steps: [
      S(t("The white pawn has reached e5. Watch the black pawn on d7.", "Սպիտակ զինվորը հասել է e5։ Հետևի՛ր d7-ի սև զինվորին։", "Белая пешка дошла до e5. Следи за чёрной пешкой d7.")),
      S(t("The black pawn jumps two squares, from d7 to d5, past the square d6 that the white pawn attacks.", "Սև զինվորն երկու դաշտ է անցնում՝ d7-ից d5, սպիտակ զինվորի հարվածի տակ գտնվող d6 դաշտի կողքով։", "Чёрная пешка прыгает на два поля, с d7 на d5, мимо поля d6, которое бьёт белая пешка."), { m: "d7d5", marks: ".d6" }),
      S(t("En passant: the white pawn takes it as if it had moved only one square. This is allowed only straight away, on the very next move.", "Անցողիկ վերցում․ սպիտակ զինվորը վերցնում է այն այնպես, կարծես այն միայն մեկ դաշտ էր անցել։ Դա թույլատրվում է միայն անմիջապես՝ հենց հաջորդ քայլով։", "Взятие на проходе: белая пешка бьёт её так, будто та сходила только на одно поле. Так можно сделать только сразу, следующим же ходом."), { m: "e5d6" }),
      S(t("A pawn on the seventh rank is one step from the end of the board.", "Յոթերորդ հորիզոնականի զինվորը մեկ քայլ է հեռու տախտակի ծայրից։", "Пешка на седьмой горизонтали в одном шаге от края доски."), { fen: "4k3/1P6/8/8/8/8/8/4K3", marks: ".b8" }),
      S(t("It reaches b8 and becomes a queen, which at once gives check.", "Այն հասնում է b8 և դառնում թագուհի, որն անմիջապես շախ է տալիս։", "Она доходит до b8 и превращается в ферзя, который сразу даёт шах."), { m: "b7b8q", end: "check" }),
      S(t("A pawn may also become a rook, a bishop or a knight. Here the black queen on c7 attacks the pawn. What should it become?", "Զինվորը կարող է դառնալ նաև նավակ, փիղ կամ ձի։ Այստեղ c7-ի սև թագուհին հարձակվում է զինվորի վրա։ Ի՞նչ պետք է այն դառնա։", "Пешка может превратиться и в ладью, слона или коня. Здесь чёрный ферзь c7 нападает на пешку. Во что её превратить?"), { fen: "8/2q1P1k1/8/8/8/8/8/K7", arrows: "!c7e7" }),
      S(t("A knight! It checks the king on g7 and attacks the queen on c7 at the same time.", "Ձի՛։ Այն շախ է տալիս g7-ի արքային և միաժամանակ հարձակվում է c7-ի թագուհու վրա։", "Конь! Он шахует короля g7 и одновременно нападает на ферзя c7."), { m: "e7e8n", end: "check", arrows: "e8g7 e8c7" }),
      S(t("The king has to step away, and the knight takes the queen.", "Արքան ստիպված հեռանում է, և ձին վերցնում է թագուհուն։", "Король вынужден отойти, и конь забирает ферзя."), { m: "g7f7 e8c7" }),
    ],
  },
  draws: {
    title: t("Draws and writing down moves", "Ոչ-ոքի և քայլերի գրառում", "Ничья и запись ходов"),
    fen: "k7/8/1Q6/8/8/8/8/7K",
    steps: [
      S(t("Black to move. The king is not in check, but every square around it is attacked, and Black has no other piece. This is stalemate: a draw.", "Քայլը սևերինն է։ Արքան շախի տակ չէ, բայց նրա շուրջ բոլոր դաշտերը հարձակման տակ են, և սևերն ուրիշ խաղաքար չունեն։ Սա պատ է՝ ոչ-ոքի։", "Ход чёрных. Король не под шахом, но все поля вокруг битые, а других фигур у чёрных нет. Это пат: ничья."), { marks: "!a7 !b7 !b8", end: "stalemate", turn: "b" }),
      S(t("A king and a bishop cannot mate a lone king. When there is too little material, the game is a draw.", "Արքան և փիղը չեն կարող մատ տալ միայնակ արքային։ Երբ նյութը քիչ է, խաղն ավարտվում է ոչ-ոքի։", "Король и слон не могут поставить мат одинокому королю. При недостатке материала партия заканчивается вничью."), { fen: "8/8/3k4/8/8/2KB4/8/8" }),
      S(t("Writing down moves: 1. e4 e5. For a pawn we write only the square it goes to.", "Քայլերի գրառում․ 1. e4 e5։ Զինվորի համար գրում ենք միայն այն դաշտը, ուր այն գնում է։", "Запись ходов: 1. e4 e5. Для пешки пишут только поле, куда она пошла."), { fen: START, m: "e2e4 e7e5" }),
      S(t("2. Nf3 Nc6. For the other pieces we add a capital letter: K king, Q queen, R rook, B bishop, N knight.", "2. Nf3 Nc6։ Մյուս խաղաքարերի համար ավելացնում ենք մեծատառ՝ K արքա, Q թագուհի, R նավակ, B փիղ, N ձի։", "2. Nf3 Nc6. Для остальных фигур добавляют заглавную букву: K король, Q ферзь, R ладья, B слон, N конь."), { m: "g1f3 b8c6" }),
      S(t("3. Bc4. A capture is written with x (Bxf7), check with + and mate with #.", "3. Bc4։ Վերցումը գրվում է x-ով (Bxf7), շախը՝ +, մատը՝ #։", "3. Bc4. Взятие обозначают знаком x (Bxf7), шах — знаком +, мат — знаком #."), { m: "f1c4", arrows: "c4f7" }),
    ],
  },

  /* ---------------- grade 3 ---------------- */
  ladder: {
    title: t("Mate with two rooks: the ladder", "Մատ երկու նավակով․ սանդուղք", "Мат двумя ладьями: лесенка"),
    fen: "8/8/8/4k3/R7/8/8/1R5K",
    steps: [
      S(t("The rook on a4 guards the 4th rank, so the king cannot go down.", "a4-ի նավակը պահում է 4-րդ հորիզոնականը, և արքան չի կարող իջնել։", "Ладья a4 держит 4-ю горизонталь, и король не может спуститься."), { marks: "!a4:h4" }),
      S(t("The other rook checks on the 5th rank. The king must climb to the 6th.", "Մյուս նավակը շախ է տալիս 5-րդ հորիզոնականով։ Արքան պետք է բարձրանա 6-րդ։", "Вторая ладья шахует по 5-й горизонтали. Король должен подняться на 6-ю."), { m: "b1b5 e5e6" }),
      S(t("The rooks take turns, like climbing a ladder: check on the 6th rank, and the king goes up again.", "Նավակները հերթով են քայլում, ինչպես սանդուղքով բարձրանալիս․ շախ 6-րդ հորիզոնականով, և արքան նորից բարձրանում է։", "Ладьи ходят по очереди, как по лесенке: шах по 6-й горизонтали, и король снова поднимается."), { m: "a4a6 e6e7" }),
      S(t("Check on the 7th rank. Only the last rank is left for the king.", "Շախ 7-րդ հորիզոնականով։ Արքային մնաց միայն վերջին հորիզոնականը։", "Шах по 7-й горизонтали. Королю осталась только последняя горизонталь."), { m: "b5b7 e7e8" }),
      S(t("Check on the 8th rank, while the other rook guards the 7th. Checkmate!", "Շախ 8-րդ հորիզոնականով, իսկ մյուս նավակը պահում է 7-րդը։ Մատ։", "Шах по 8-й горизонтали, а вторая ладья держит 7-ю. Мат!"), { m: "a6a8", end: "mate", marks: "!a7:h7" }),
    ],
  },
  queenmate: {
    title: t("Mate with a queen", "Մատ թագուհով", "Мат ферзём"),
    hint: t("The queen follows the king a knight's move away and pushes it into the corner.", "Թագուհին հետևում է արքային ձիու քայլի հեռավորությամբ և քշում նրան անկյուն։", "Ферзь идёт за королём на расстоянии хода конём и загоняет его в угол."),
    fen: "8/3k4/1Q6/8/4K3/8/8/8",
    steps: [
      S(t("Black to move. The queen will chase the king to the edge without giving check.", "Քայլը սևերինն է։ Թագուհին արքային կքշի դեպի եզր՝ առանց շախ տալու։", "Ход чёрных. Ферзь будет теснить короля к краю, не давая шахов.")),
      S(t("The king steps right; the queen stays a knight's move away from it.", "Արքան քայլում է աջ, թագուհին մնում է նրանից ձիու քայլի հեռավորության վրա։", "Король идёт вправо, ферзь остаётся от него на расстоянии хода конём."), { m: "d7e7 b6c6" }),
      S(t("Again: the king moves, the queen follows.", "Նորից՝ արքան քայլում է, թագուհին հետևում է։", "Снова: король ходит, ферзь идёт следом."), { m: "e7f8 c6d7" }),
      S(t("The king is pushed into the corner.", "Արքան քշված է անկյուն։", "Король загнан в угол."), { m: "f8g8 d7e7 g8h8" }),
      S(t("Careful! Queen to f7 now would be stalemate: the king would have no move and no check. Bring the white king closer instead.", "Զգո՛ւյշ։ Թագուհին f7 այժմ պատ կլիներ․ արքան քայլ չէր ունենա և շախի տակ չէր լինի։ Փոխարենը մոտեցրու սպիտակ արքան։", "Осторожно! Ферзь на f7 сейчас дал бы пат: у короля не было бы ходов и не было бы шаха. Вместо этого подведи белого короля."), { arrows: "!e7f7", marks: "!f7" }),
      S(t("The white king walks up to g6.", "Սպիտակ արքան մոտենում է g6։", "Белый король подходит на g6."), { m: "e4f5 h8g8 f5g6 g8h8" }),
      S(t("Queen to g7, protected by the king. Checkmate!", "Թագուհին g7՝ արքայի պաշտպանությամբ։ Մատ։", "Ферзь на g7 под защитой короля. Мат!"), { m: "e7g7", end: "mate" }),
    ],
  },
  rookmate: {
    title: t("Mate with a king and a rook", "Մատ արքայով և նավակով", "Мат королём и ладьёй"),
    fen: "4k3/7R/3K4/8/8/8/8/8",
    steps: [
      S(t("The rook keeps the black king on the last rank, and the white king stands in front of it.", "Նավակը սև արքային պահում է վերջին հորիզոնականում, իսկ սպիտակ արքան կանգնած է նրա դիմաց։", "Ладья держит чёрного короля на последней горизонтали, а белый король стоит напротив."), { marks: "!a7:h7" }),
      S(t("A waiting move: the rook moves far away along the 7th rank.", "Սպասողական քայլ․ նավակը հեռանում է 7-րդ հորիզոնականով։", "Выжидательный ход: ладья отходит вдоль 7-й горизонтали."), { m: "h7b7" }),
      S(t("Now the black king has to step in front of the white king.", "Այժմ սև արքան ստիպված կանգնում է սպիտակ արքայի դիմաց։", "Теперь чёрный король вынужден встать напротив белого короля."), { m: "e8d8" }),
      S(t("The rook checks along the 8th rank, and the white king covers the escape squares. Checkmate!", "Նավակը շախ է տալիս 8-րդ հորիզոնականով, իսկ սպիտակ արքան փակում է փախուստի դաշտերը։ Մատ։", "Ладья шахует по 8-й горизонтали, а белый король закрывает поля отступления. Мат!"), { m: "b7b8", end: "mate", marks: "!c7 !d7 !e7" }),
    ],
  },
  patterns: {
    title: t("Famous mates", "Հայտնի մատեր", "Известные маты"),
    fen: START,
    steps: [
      S(t("Scholar's mate. White brings out the bishop and the queen early, both aiming at f7.", "«Մանկական» մատ։ Սպիտակները շուտ են դուրս բերում փիղը և թագուհուն, երկուսն էլ նշան են բռնում f7-ը։", "Детский мат. Белые рано выводят слона и ферзя, оба целятся в f7."), { m: "e2e4 e7e5 f1c4 b8c6 d1h5 g8f6", arrows: "c4f7 h5f7", marks: "!f7" }),
      S(t("Black forgot about f7. Queen takes f7, protected by the bishop: checkmate!", "Սևերը մոռացան f7-ի մասին։ Թագուհին վերցնում է f7-ը փղի պաշտպանությամբ․ մատ։", "Чёрные забыли про f7. Ферзь бьёт f7 под защитой слона: мат!"), { m: "h5f7", end: "mate" }),
      S(t("Fool's mate, the quickest mate of all. White weakens the diagonal to its king…", "«Հիմարի» մատը՝ ամենաարագ մատը։ Սպիտակները թուլացնում են իրենց արքային տանող անկյունագիծը…", "Дурацкий мат, самый быстрый из всех. Белые ослабляют диагональ к своему королю…"), { fen: START, m: "f2f3 e7e5 g2g4" }),
      S(t("…and the black queen mates on h4 after just two moves.", "…և սև թագուհին մատ է տալիս h4-ում ընդամենը երկու քայլից հետո։", "…и чёрный ферзь ставит мат на h4 всего через два хода."), { m: "d8h4", end: "mate", arrows: "!h4e1" }),
      S(t("Smothered mate: the black king is hemmed in by its own pieces…", "«Խեղդված» մատ․ սև արքան շրջապատված է իր իսկ խաղաքարերով…", "Спёртый мат: чёрный король зажат собственными фигурами…"), { fen: "6rk/6pp/8/6N1/8/8/8/6K1" }),
      S(t("…so a single knight on f7 is enough. Checkmate!", "…ուստի բավական է մեկ ձի f7-ում։ Մատ։", "…и одного коня на f7 достаточно. Мат!"), { m: "g5f7", end: "mate" }),
      S(t("Back-rank mate: the pawns in front of the king have not moved, and it has no escape square.", "Մատ վերջին հորիզոնականում․ արքայի առջևի զինվորները չեն քայլել, և նա փախչելու դաշտ չունի։", "Мат по последней горизонтали: пешки перед королём не двигались, и бежать ему некуда."), { fen: "6k1/5ppp/8/8/8/8/5PPP/3R2K1", m: "d1d8", end: "mate" }),
    ],
  },
  italian: {
    title: t("A good opening: the Italian Game", "Լավ բացվածք․ իտալական պարտիա", "Хороший дебют: итальянская партия"),
    fen: START,
    steps: [
      S(t("1. e4 e5: both sides put a pawn in the centre.", "1. e4 e5․ երկու կողմն էլ զինվոր են դնում կենտրոնում։", "1. e4 e5: обе стороны ставят пешку в центр."), { m: "e2e4 e7e5", marks: "d4 e4 d5 e5" }),
      S(t("2. Nf3 Nc6: knights come out towards the centre, and the white knight attacks e5.", "2. Nf3 Nc6․ ձիերը դուրս են գալիս դեպի կենտրոն, և սպիտակ ձին հարձակվում է e5-ի վրա։", "2. Nf3 Nc6: кони выходят к центру, и белый конь нападает на e5."), { m: "g1f3 b8c6", arrows: "f3e5" }),
      S(t("3. Bc4 Bc5: the bishops come out and aim at the weak squares f7 and f2.", "3. Bc4 Bc5․ փղերը դուրս են գալիս և նշան են բռնում թույլ f7 և f2 դաշտերը։", "3. Bc4 Bc5: слоны выходят и целятся в слабые поля f7 и f2."), { m: "f1c4 f8c5", arrows: "c4f7 c5f2" }),
      S(t("4. O-O: White castles and hides the king. Centre, pieces out, king safe: all three rules in four moves.", "4. O-O․ սպիտակները փոխատեղում են անում և թաքցնում արքային։ Կենտրոն, դուրս բերված խաղաքարեր, ապահով արքա․ երեք կանոնները՝ չորս քայլում։", "4. O-O: белые рокируются и прячут короля. Центр, развитие, безопасность короля: все три правила за четыре хода."), { m: "e1g1" }),
    ],
  },
  fork: {
    title: t("The fork", "Երկակի հարված", "Вилка"),
    fen: "r3k3/8/8/1N6/8/8/8/4K3",
    steps: [
      S(t("The knight on b5 looks at c7, a square that attacks both the king and the rook.", "b5-ի ձին նայում է c7-ին, մի դաշտի, որտեղից հարձակվում է և՛ արքայի, և՛ նավակի վրա։", "Конь b5 смотрит на поле c7, откуда он нападает и на короля, и на ладью."), { marks: ".c7" }),
      S(t("Knight to c7: check and an attack on the rook at the same time. That is a fork.", "Ձին c7․ շախ և միաժամանակ հարձակում նավակի վրա։ Սա երկակի հարված է։", "Конь на c7: шах и одновременно нападение на ладью. Это вилка."), { m: "b5c7", end: "check", arrows: "c7e8 c7a8" }),
      S(t("The king must escape, and the knight takes the rook.", "Արքան պետք է փախչի, և ձին վերցնում է նավակը։", "Король должен уйти, и конь забирает ладью."), { m: "e8d7 c7a8" }),
      S(t("A pawn can fork too: d4–d5 attacks the knight and the bishop.", "Զինվորը նույնպես կարող է երկակի հարված հասցնել․ d4–d5-ը հարձակվում է ձիու և փղի վրա։", "Пешка тоже может сделать вилку: d4–d5 нападает на коня и слона."), { fen: "4k3/8/2n1b3/8/3P4/8/8/4K3", m: "d4d5", arrows: "d5c6 d5e6" }),
    ],
  },
  pin: {
    title: t("The pin", "Կապ", "Связка"),
    fen: START,
    steps: [
      S(t("After 1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 the bishop pins the knight on f3: if it moves, the queen on d1 is lost.", "1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 քայլերից հետո փիղը կապում է f3-ի ձին․ եթե այն քայլի, d1-ի թագուհին կկորչի։", "После 1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 слон связывает коня f3: если он уйдёт, пропадёт ферзь d1."), { m: "e2e4 e7e5 g1f3 d7d6 f1c4 c8g4", arrows: "!g4d1", marks: "!f3" }),
      S(t("A full pin: behind the knight on c6 stands the king, so the knight may not move at all.", "Լրիվ կապ․ c6-ի ձիու հետևում արքան է, ուստի ձին ընդհանրապես չի կարող քայլել։", "Полная связка: за конём c6 стоит король, поэтому конь вообще не может ходить."), { fen: "4k3/8/2n5/1B6/8/8/8/4K3", arrows: "!b5e8", marks: "!c6" }),
      S(t("Attack the pinned piece! The pawn goes to d5 and the knight cannot run away.", "Հարձակվի՛ր կապված խաղաքարի վրա։ Զինվորը գնում է d5, և ձին չի կարող փախչել։", "Нападай на связанную фигуру! Пешка идёт на d5, и коню некуда бежать."), { fen: "4k3/8/2n5/1B6/3P4/8/8/4K3", m: "d4d5", arrows: "d5c6" }),
    ],
  },
  skewer: {
    title: t("The skewer", "Գծային հարված", "Линейный удар"),
    fen: "6q1/8/4k3/8/8/8/8/4KB2",
    steps: [
      S(t("The king on e6 and the queen on g8 stand on one diagonal.", "e6-ի արքան և g8-ի թագուհին կանգնած են մեկ անկյունագծի վրա։", "Король e6 и ферзь g8 стоят на одной диагонали."), { marks: "!e6 !g8" }),
      S(t("Bishop to c4: check. The king has to leave the diagonal…", "Փիղը c4․ շախ։ Արքան ստիպված թողնում է անկյունագիծը…", "Слон на c4: шах. Королю приходится уйти с диагонали…"), { m: "f1c4", end: "check", arrows: "c4g8" }),
      S(t("…and the bishop takes the queen behind it.", "…և փիղը վերցնում է նրա հետևում կանգնած թագուհուն։", "…и слон забирает стоящего за ним ферзя."), { m: "e6f6 c4g8" }),
      S(t("The same with a rook: check on the e-file, the king steps aside, and the rook takes the queen on e1.", "Նույնը՝ նավակով․ շախ e ուղղաձիգով, արքան մի կողմ է քաշվում, և նավակը վերցնում է e1-ի թագուհուն։", "То же ладьёй: шах по вертикали e, король отходит, и ладья забирает ферзя e1."), { fen: "R7/8/8/4k3/8/7K/8/4q3", m: "a8e8 e5d4 e8e1" }),
    ],
  },
  discovered: {
    title: t("Discovered and double check", "Բաց և կրկնակի շախ", "Вскрытый и двойной шах"),
    fen: "4k3/8/3q4/8/4N3/8/8/4R1K1",
    steps: [
      S(t("The knight on e4 stands between the rook and the black king.", "e4-ի ձին կանգնած է նավակի և սև արքայի միջև։", "Конь e4 стоит между ладьёй и чёрным королём."), { arrows: "e4d6" }),
      S(t("The knight takes the queen and opens the e-file: discovered check! Black must save the king and loses the queen.", "Ձին վերցնում է թագուհուն և բացում e ուղղաձիգը․ բաց շախ։ Սևերը պետք է փրկեն արքային և կորցնում են թագուհուն։", "Конь берёт ферзя и открывает вертикаль e: вскрытый шах! Чёрные спасают короля и остаются без ферзя."), { m: "e4d6", end: "check", arrows: "!e1e8" }),
      S(t("Double check: the knight jumps to f6 and checks too, while the rook checks as well. Only a king move can help.", "Կրկնակի շախ․ ձին թռչում է f6 և ինքն էլ շախ է տալիս, նավակը նույնպես։ Կօգնի միայն արքայի քայլը։", "Двойной шах: конь прыгает на f6 и тоже шахует, а вместе с ним и ладья. Помочь может только ход королём."), { fen: "4k3/8/8/8/4N3/8/8/4R1K1", m: "e4f6", end: "check", arrows: "!e1e8 !f6e8" }),
      S(t("The king runs away to f8.", "Արքան փախչում է f8։", "Король убегает на f8."), { m: "e8f8" }),
    ],
  },
  tactics: {
    title: t("Removing the defender", "Պաշտպանի հեռացում", "Уничтожение защитника"),
    fen: "5rk1/5ppp/5n2/6BQ/8/3B4/8/6K1",
    steps: [
      S(t("White wants to play queen to h7, but the knight on f6 defends h7.", "Սպիտակներն ուզում են թագուհին տանել h7, բայց f6-ի ձին պաշտպանում է h7-ը։", "Белые хотят сыграть ферзём на h7, но конь f6 защищает h7."), { arrows: "h5h7 d3h7 !f6h7" }),
      S(t("Bishop takes the knight, and the pawn takes back. The defender is gone.", "Փիղը վերցնում է ձիուն, զինվորը հետ է վերցնում։ Պաշտպանը վերացավ։", "Слон берёт коня, пешка бьёт в ответ. Защитника больше нет."), { m: "g5f6 g7f6" }),
      S(t("Queen takes h7, protected by the bishop on d3. Checkmate!", "Թագուհին վերցնում է h7-ը d3-ի փղի պաշտպանությամբ։ Մատ։", "Ферзь бьёт h7 под защитой слона d3. Мат!"), { m: "h5h7", end: "mate" }),
    ],
  },

  /* ---------------- grade 4 ---------------- */
  square: {
    title: t("The rule of the square", "Քառակուսու կանոնը", "Правило квадрата"),
    fen: "8/8/4k3/P7/8/8/8/7K",
    steps: [
      S(t("Draw a square from the pawn to its promotion square: a5–d5–d8–a8. If the king can step into it, it catches the pawn.", "Զինվորից մինչև նրա փոխակերպման դաշտը քառակուսի գծի՛ր՝ a5–d5–d8–a8։ Եթե արքան կարող է մտնել նրա մեջ, կբռնի զինվորին։", "Построй квадрат от пешки до поля превращения: a5–d5–d8–a8. Если король может в него войти, он догонит пешку."), { marks: "a5:d8" }),
      S(t("Black to move: the king steps into the square…", "Քայլը սևերինն է․ արքան մտնում է քառակուսու մեջ…", "Ход чёрных: король входит в квадрат…"), { m: "e6d6", marks: "a5:d8" }),
      S(t("…and catches the pawn in time.", "…և ժամանակին բռնում է զինվորին։", "…и вовремя догоняет пешку."), { m: "a5a6 d6c7 a6a7 c7b7", arrows: "b7a7" }),
      S(t("White to move: the pawn steps forward and the square shrinks. The king is outside it.", "Քայլը սպիտակներինն է․ զինվորը քայլում է առաջ, և քառակուսին փոքրանում է։ Արքան դրսում է։", "Ход белых: пешка шагает вперёд, и квадрат уменьшается. Король снаружи."), { fen: "8/8/4k3/P7/8/8/8/7K", m: "a5a6", marks: "a6:c8" }),
      S(t("The king runs, but too late: the pawn becomes a queen.", "Արքան վազում է, բայց ուշ է․ զինվորը դառնում է թագուհի։", "Король бежит, но поздно: пешка становится ферзём."), { m: "e6d7 a6a7 d7c7 a7a8q" }),
    ],
  },
  opposition: {
    title: t("Opposition", "Ընդդիմություն", "Оппозиция"),
    fen: "8/4k3/8/8/8/8/4K3/8",
    steps: [
      S(t("Kings can never stand next to each other. Which king will give way?", "Արքաներն երբեք չեն կարող կանգնել իրար կողքի։ Ո՞ր արքան կզիջի։", "Короли никогда не могут стоять рядом. Какой король уступит?")),
      S(t("The white king steps up.", "Սպիտակ արքան առաջ է գալիս։", "Белый король идёт вперёд."), { m: "e2e3" }),
      S(t("The kings face each other with one square between them, and it is Black to move. White has the opposition.", "Արքաները կանգնած են դեմ առ դեմ՝ մեկ դաշտ միջև, և քայլը սևերինն է։ Ընդդիմությունը սպիտակներինն է։", "Короли стоят друг против друга через одно поле, и ход чёрных. Оппозиция у белых."), { m: "e7e6 e3e4", marks: "!e5" }),
      S(t("Black has to give way, and the white king walks forward past it.", "Սևերը ստիպված զիջում են, և սպիտակ արքան անցնում է առաջ։", "Чёрные вынуждены уступить, и белый король проходит вперёд."), { m: "e6d6 e4f5" }),
    ],
  },
  kpawn: {
    title: t("King and pawn against king", "Արքա և զինվոր արքայի դեմ", "Король и пешка против короля"),
    fen: "8/8/8/8/4P3/8/8/4K3",
    steps: [
      S(t("The key squares of a pawn on e4 are d6, e6 and f6. If the white king reaches one of them, the pawn will queen.", "e4-ի զինվորի հիմնական դաշտերն են d6, e6 և f6։ Եթե սպիտակ արքան հասնի դրանցից մեկին, զինվորը կդառնա թագուհի։", "Ключевые поля пешки e4: d6, e6 и f6. Если белый король дойдёт до одного из них, пешка станет ферзём."), { marks: "d6 e6 f6" }),
      S(t("Black to move. The black king has nowhere to go and is not in check: stalemate, a draw.", "Քայլը սևերինն է։ Սև արքան գնալու տեղ չունի և շախի տակ չէ․ պատ, ոչ-ոքի։", "Ход чёрных. Чёрному королю некуда идти, и он не под шахом: пат, ничья."), { fen: "4k3/4P3/4K3/8/8/8/8/8", end: "stalemate", turn: "b" }),
      S(t("The same position with White to move: the king steps aside and frees the e8 square for the pawn.", "Նույն դիրքը, բայց քայլը սպիտակներինն է․ արքան մի կողմ է քաշվում և ազատում e8 դաշտը զինվորի համար։", "Та же позиция, но ход белых: король отходит в сторону и освобождает поле e8 для пешки."), { fen: "4k3/4P3/4K3/8/8/8/8/8", m: "e6f6 e8d7 f6f7" }),
      S(t("Nothing can stop the pawn now. Who is to move decided everything!", "Այժմ ոչինչ չի կարող կանգնեցնել զինվորին։ Ամեն ինչ որոշեց հերթը։", "Теперь пешку не остановить. Всё решила очередь хода!"), { m: "d7d6 e7e8q" }),
    ],
  },
  passed: {
    title: t("Passed pawns", "Անցած զինվորներ", "Проходные пешки"),
    fen: "6k1/6p1/7p/2P5/P2P4/8/6K1/8",
    steps: [
      S(t("No black pawn stands in front of or beside the white pawns on a4, c5 and d4: they are passed pawns.", "a4, c5 և d4 սպիտակ զինվորների դիմաց և կողքի ուղղաձիգներում սև զինվորներ չկան․ դրանք անցած զինվորներ են։", "Перед белыми пешками a4, c5 и d4 и на соседних вертикалях нет чёрных пешек: это проходные."), { marks: "a4 c5 d4" }),
      S(t("The c-pawn runs forward. The black king hurries to stop it.", "c զինվորը վազում է առաջ։ Սև արքան շտապում է կանգնեցնել այն։", "Пешка c бежит вперёд. Чёрный король спешит её остановить."), { m: "c5c6 g8f8 c6c7 f8e7" }),
      S(t("Too late: the pawn becomes a queen. Passed pawns must be pushed!", "Ուշ է․ զինվորը դառնում է թագուհի։ Անցած զինվորներին պետք է առաջ տանել։", "Поздно: пешка становится ферзём. Проходные пешки надо двигать!"), { m: "c7c8q" }),
    ],
  },
  philidor: {
    title: t("Philidor's defence", "Ֆիլիդորի պաշտպանությունը", "Защита Филидора"),
    fen: "4k3/R7/1r6/3KP3/8/8/8/8",
    steps: [
      S(t("Black's rook on the 6th rank keeps the white king out.", "6-րդ հորիզոնականի սև նավակը թույլ չի տալիս սպիտակ արքային առաջ գալ։", "Чёрная ладья на 6-й горизонтали не пускает белого короля вперёд."), { marks: "!a6:h6" }),
      S(t("As soon as the pawn moves to e6, the king loses its shelter. The rook drops to the 1st rank.", "Հենց զինվորը գնում է e6, արքան կորցնում է իր թաքստոցը։ Նավակն իջնում է 1-ին հորիզոնական։", "Как только пешка идёт на e6, король лишается укрытия. Ладья уходит на 1-ю горизонталь."), { m: "e5e6 b6b1" }),
      S(t("Now the rook checks the king from behind…", "Այժմ նավակը շախ է տալիս արքային հետևից…", "Теперь ладья шахует короля сзади…"), { m: "d5d6 b1d1", end: "check" }),
      S(t("…again and again. The king cannot hide, and the game ends in a draw.", "…նորից ու նորից։ Արքան չի կարող թաքնվել, և խաղն ավարտվում է ոչ-ոքի։", "…снова и снова. Королю негде спрятаться, и партия заканчивается вничью."), { m: "d6e5 d1e1", end: "check" }),
    ],
  },
  legal: {
    title: t("Légal's mate", "Լեգալի մատը", "Мат Легаля"),
    fen: START,
    steps: [
      S(t("1. e4 e5 2. Nf3 d6 3. Bc4 Bg4: the black bishop pins the knight to the queen.", "1. e4 e5 2. Nf3 d6 3. Bc4 Bg4․ սև փիղը կապում է ձին թագուհուն։", "1. e4 e5 2. Nf3 d6 3. Bc4 Bg4: чёрный слон связывает коня с ферзём."), { m: "e2e4 e7e5 g1f3 d7d6 f1c4 c8g4", arrows: "!g4d1" }),
      S(t("4. Nc3 g6. Black does not see the danger.", "4. Nc3 g6։ Սևերը վտանգը չեն տեսնում։", "4. Nc3 g6. Чёрные не видят опасности."), { m: "b1c3 g7g6" }),
      S(t("5. Nxe5!! The knight leaves the pin and gives up the queen.", "5. Nxe5!! Ձին դուրս է գալիս կապից և զոհաբերում է թագուհուն։", "5. Nxe5!! Конь выходит из связки и отдаёт ферзя."), { m: "f3e5", arrows: "!g4d1" }),
      S(t("5… Bxd1. Black grabs the queen.", "5… Bxd1։ Սևերը վերցնում են թագուհուն։", "5… Bxd1. Чёрные забирают ферзя."), { m: "g4d1" }),
      S(t("6. Bxf7+ Ke7: check, and the king must go up.", "6. Bxf7+ Ke7․ շախ, և արքան ստիպված բարձրանում է։", "6. Bxf7+ Ke7: шах, и король вынужден подняться."), { m: "c4f7 e8e7" }),
      S(t("7. Nd5#. Three minor pieces give mate, while the white queen is lost. A combination!", "7. Nd5#։ Երեք թեթև խաղաքար մատ են տալիս, թեև սպիտակ թագուհին կորած է։ Կոմբինացիա։", "7. Nd5#. Три лёгкие фигуры ставят мат, хотя белый ферзь потерян. Комбинация!"), { m: "c3d5", end: "mate" }),
    ],
  },
  outpost: {
    title: t("A plan: an outpost and an open file", "Ծրագիր․ հենակետ և բաց ուղղաձիգ", "План: форпост и открытая линия"),
    fen: "5rk1/pp3ppp/3p4/8/4PN2/8/PP3PPP/2R3K1",
    steps: [
      S(t("No black pawn can ever attack d5. It is a perfect outpost for the white knight.", "Ոչ մի սև զինվոր երբեք չի կարող հարձակվել d5-ի վրա։ Դա սպիտակ ձիու համար կատարյալ հենակետ է։", "Ни одна чёрная пешка никогда не сможет напасть на d5. Это отличный форпост для белого коня."), { marks: "d5", arrows: "f4d5" }),
      S(t("The knight settles on d5, where it controls c7, e7, f6 and b6.", "Ձին տեղավորվում է d5-ում, որտեղից հսկում է c7, e7, f6 և b6 դաշտերը։", "Конь встаёт на d5 и контролирует поля c7, e7, f6 и b6."), { m: "f4d5", marks: ".c7 .e7 .f6 .b6" }),
      S(t("The rook uses the open c-file and breaks into the 7th rank.", "Նավակն օգտագործում է բաց c ուղղաձիգը և ներխուժում 7-րդ հորիզոնական։", "Ладья использует открытую вертикаль c и врывается на 7-ю горизонталь."), { m: "c1c7", arrows: "c7b7 c7f7" }),
    ],
  },
  greekgift: {
    title: t("The Greek gift", "«Հունական նվեր»", "«Греческий дар»"),
    hint: t("A classic attack on a castled king: bishop sacrifice on h7, knight to g5, queen to h5.", "Դասական հարձակում փոխատեղում արած արքայի վրա․ փղի զոհաբերում h7-ում, ձին g5, թագուհին h5։", "Классическая атака на рокированного короля: жертва слона на h7, конь на g5, ферзь на h5."),
    fen: "r2q1rk1/pb3ppp/4p3/3pP3/3P4/3B1N2/PPP2PPP/R1BQ1RK1",
    steps: [
      S(t("The black king has castled, and no knight defends h7.", "Սև արքան փոխատեղում է արել, և h7-ը ոչ մի ձի չի պաշտպանում։", "Чёрный король рокирован, и поле h7 не защищено конём."), { arrows: "d3h7", marks: "!h7" }),
      S(t("The bishop is sacrificed on h7 with check, and the king takes it.", "Փիղը զոհաբերվում է h7-ում շախով, և արքան վերցնում է այն։", "Слон жертвуется на h7 с шахом, и король его берёт."), { m: "d3h7 g8h7" }),
      S(t("The knight jumps to g5 with check, protected by the bishop on c1.", "Ձին շախով թռչում է g5՝ c1-ի փղի պաշտպանությամբ։", "Конь прыгает на g5 с шахом под защитой слона c1."), { m: "f3g5", end: "check", arrows: "c1g5" }),
      S(t("The king goes back, and the queen joins the attack on h5.", "Արքան հետ է գնում, և թագուհին միանում է հարձակմանը h5-ից։", "Король отступает, и ферзь подключается к атаке с h5."), { m: "h7g8 d1h5", arrows: "h5h7" }),
      S(t("If Black does nothing about it, queen to h7 is checkmate.", "Եթե սևերը ոչինչ չանեն, թագուհին h7 մատ է։", "Если чёрные ничего не предпримут, ферзь на h7 — мат."), { m: "a7a6 h5h7", end: "mate" }),
    ],
  },
};
