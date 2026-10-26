import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The chessboard, the pieces, the starting position and how each piece moves.",
    "Captures and exchanges, check and mate, castling, en passant, promotion, draws and writing down moves.",
  ],
  lessons: {
    chessboard: {
      objectives: ["Describe the chessboard", "Name a square by its letter and number", "Tell ranks, files and diagonals apart", "Place the board correctly between the players"],
      content: `## The board

Chess is played by two people on a square **board**. The board has **64 squares**: 8 rows of 8 squares. The squares alternate between light (white) and dark (black): 32 white and 32 black.

The board is placed so that each player has **a white square in the bottom right-hand corner**. Remember: "white on the right".

## Ranks and files

| Name | What it is | How it is labelled |
|---|---|---|
| Rank | A row from left to right | Numbers 1 to 8 |
| File | A row from bottom to top | Letters a to h |
| Diagonal | A slanting row of squares of one colour | By its end squares, for example a1–h8 |

From White's side the bottom rank is the first; from Black's side the bottom rank is the eighth.

## Naming a square

Every square has a name: **the file letter + the rank number**. For example, the square **e4** is where the e-file and the 4th rank meet.

- The square a1 is the bottom left-hand corner from White's side, and it is **black**.
- The square h1 is the bottom right-hand corner, and it is **white**.

## The centre

The four squares in the middle of the board, **d4, e4, d5, e5**, are called the **centre**. A piece in the centre controls more squares.

## Exercises

1. How many squares are there on a chessboard?
2. What colour should the square in a player's bottom right-hand corner be?
3. Name the four centre squares.
4. What is the letter and number of the square where the c-file and the 6th rank meet?
5. How many white squares are there on the board?

## Answers

1. 64.
2. White.
3. d4, e4, d5, e5.
4. c6.
5. 32.`,
      quiz: [
        ["How many squares are there on a chessboard?", ["64", "32", "48", "100"]],
        ["How are the files labelled?", ["With letters a to h", "With numbers 1 to 8", "With colours", "With the names of the pieces"]],
        ["Which square should be in a player's bottom right-hand corner?", ["A white one", "A black one", "A centre square", "Any square"]],
        ["Which squares make up the centre?", ["d4, e4, d5, e5", "a1, h1, a8, h8", "e1, e8, d1, d8", "c3, f3, c6, f6"]],
        ["What is a diagonal?", ["A slanting row of squares of one colour", "A row from left to right", "A row from bottom to top", "The edge of the board"]],
      ],
    },
    "pieces-and-setup": {
      objectives: ["Name all the chess pieces", "Give the number of each piece", "Set up the pieces in the starting position", "Know who moves first"],
      content: `## The pieces

Each player has **16 pieces**: one player has white, the other black.

| Piece | Number | International letter |
|---|---|---|
| King | 1 | K |
| Queen | 1 | Q |
| Rook | 2 | R |
| Bishop | 2 | B |
| Knight | 2 | N |
| Pawn | 8 | – |

The king is the most important piece: the aim of the game is to **checkmate** the opponent's king.

## The starting position

- The white pawns stand on the **2nd rank**, and the black pawns on the **7th**.
- On the **1st rank**, from left to right: rook, knight, bishop, queen, king, bishop, knight, rook (from a1 to h1).
- Black's pieces are set up the same way on the 8th rank, opposite White's.

## The queen goes on her own colour

The white queen goes on a **white** square (d1), and the black queen on a **black** square (d8). The kings stand on the e-file, on e1 and e8.

## Who starts

**White** always starts the game. Then the players take turns, one move each time.

## Exercises

1. How many pieces does each player have?
2. Which square does the white queen stand on at the start?
3. Which rank do the black pawns stand on?
4. Who makes the first move?
5. List the pieces on the 1st rank from a1 to h1.

## Answers

1. 16.
2. d1.
3. The 7th.
4. White.
5. Rook, knight, bishop, queen, king, bishop, knight, rook.`,
      quiz: [
        ["How many pawns does each player have?", ["8", "6", "10", "16"]],
        ["Which square does the white king stand on at the start?", ["e1", "d1", "e8", "a1"]],
        ["Who starts a game of chess?", ["White", "Black", "The younger player", "Whoever wins the toss"]],
        ["Which piece stands on a1?", ["A rook", "A knight", "A bishop", "The king"]],
        ["What is the aim of the game?", ["To checkmate the opponent's king", "To capture all the pawns", "To get the queen to the 8th rank", "To make 50 moves"]],
      ],
    },
    "rook-and-bishop": {
      objectives: ["Show how the rook moves", "Show how the bishop moves", "Explain why a bishop always stays on squares of its own colour", "Find the squares a piece controls"],
      content: `## The rook

The **rook** moves in a straight line, **along a rank or a file**, any number of squares, as long as the path is clear.

- On an empty board a rook always controls **14 squares**, wherever it stands.
- A rook cannot jump over other pieces.

## The bishop

The **bishop** moves **diagonally** any number of squares, as long as the path is clear.

- A bishop always stays on squares of its own colour: a light-squared bishop can never reach a dark square.
- Each player has one light-squared and one dark-squared bishop.
- In the centre (for example, on d4) a bishop controls 13 squares; in the corner (a1) only 7.

## Comparison

| | Rook | Bishop |
|---|---|---|
| Direction | Straight lines | Diagonals |
| Number of directions | 4 | 4 |
| Value | 5 | 3 |
| Can it jump? | No | No |

## Capturing

If an opponent's piece is in its path, a rook or a bishop can **capture** it by moving onto its square. You cannot capture your own pieces.

## Exercises

1. How does the rook move?
2. How many squares does a rook control on an empty board?
3. Can a bishop on c1 reach d3?
4. How many squares does a bishop in the corner a1 control on an empty board?
5. Can a rook jump over its own pawn?

## Answers

1. In a straight line, along a rank or a file.
2. 14.
3. No: c1 is a dark square and d3 is a light one.
4. 7.
5. No.`,
      quiz: [
        ["How does the bishop move?", ["Diagonally", "In a straight line", "In an L-shape", "Only one square"]],
        ["How many squares does a rook control on an empty board?", ["14", "8", "7", "27"]],
        ["Why can a light-squared bishop not reach a dark square?", ["A diagonal is always made of squares of one colour", "Dark squares are forbidden", "A bishop only moves forwards", "There is no such rule"]],
        ["What is the value of a rook?", ["5", "3", "9", "1"]],
        ["Can a bishop capture its own piece?", ["No, never", "Yes, always", "Only in the centre", "Only when in check"]],
      ],
    },
    "queen-and-king": {
      objectives: ["Show how the queen moves", "Show how the king moves", "Explain that the king cannot move onto an attacked square", "Judge the strength of the queen"],
      content: `## The queen

The **queen** is the strongest piece. She moves **like both a rook and a bishop**: along ranks, files and diagonals, any number of squares.

- The queen can move in **8 directions**.
- In the centre (d4) on an empty board the queen controls **27 squares**.
- The queen's value is **9**.

## The king

The **king** moves in any direction, but only **one square**.

- In the centre the king controls 8 squares; in the corner, 3.
- The king **cannot** move onto a square controlled by an opponent's piece.
- The two kings can never stand next to each other: there is always at least one square between them.
- The king cannot be captured: that is what check and mate are for.

## Why the king matters

The king is not the strongest piece, but it is the most valuable: if your king is checkmated, you lose the game. So the king must be kept somewhere safe, but in the endgame, when few pieces are left, the king becomes an active fighter.

## Exercises

1. The moves of which two pieces does the queen combine?
2. How many squares does the king control in the corner a1?
3. Can the two kings stand on e4 and e5 at the same time?
4. What is the value of the queen?
5. How many squares can the king move in one turn?

## Answers

1. The rook and the bishop.
2. 3 (a2, b1, b2).
3. No, the kings cannot stand next to each other.
4. 9.
5. One square (castling is the exception).`,
      quiz: [
        ["Which piece is the strongest?", ["The queen", "The king", "The rook", "The knight"]],
        ["How does the king move?", ["One square in any direction", "Only in straight lines", "Diagonally any number of squares", "In an L-shape"]],
        ["Can the king move onto a square attacked by the opponent?", ["No", "Yes", "Only when capturing", "Only at the start of the game"]],
        ["How many squares does a queen on d4 control on an empty board?", ["27", "14", "13", "8"]],
        ["What is the value of the queen?", ["9", "5", "3", "10"]],
      ],
    },
    "knight-and-pawn": {
      objectives: ["Show how the knight moves", "Explain that the knight can jump over pieces", "Show how the pawn moves and captures", "Know the pawn's first double move"],
      content: `## The knight

The **knight** moves in an **L-shape**: two squares in one direction and then one square at right angles.

- The knight is **the only piece that can jump** over other pieces.
- With every move the knight changes the colour of its square: from white it goes to black, and from black to white.
- In the centre a knight controls 8 squares; in the corner only 2. As the saying goes, "a knight on the rim is dim".
- The knight's value is **3**.

For example, a knight on g1 can go to f3, h3 or e2.

## The pawn

The **pawn** moves **only forwards**, one square.

- On its **first move** a pawn may go **two squares**.
- A pawn **captures diagonally**: one square forwards on a diagonal.
- If there is a piece in front of a pawn, it cannot move forwards.
- A pawn never moves backwards.
- A pawn's value is **1**, but on the last rank it can turn into a queen (more about this in later lessons).

| | Knight | Pawn |
|---|---|---|
| Move | L-shape | One square forwards (two at the start) |
| Captures | The same way it moves | Diagonally forwards |
| Jumps | Yes | No |
| Value | 3 | 1 |

## Exercises

1. Which squares can the knight on b1 go to in the starting position?
2. Which piece can jump over others?
3. How many squares can a pawn move on its first move?
4. On which squares can a white pawn on e4 capture an opponent's piece?
5. Can a pawn move backwards?

## Answers

1. a3 or c3 (its own pawn is on d2).
2. The knight.
3. One or two squares.
4. d5 and f5.
5. No.`,
      quiz: [
        ["How does the knight move?", ["In an L-shape", "Diagonally", "In a straight line", "One square in any direction"]],
        ["How does a pawn capture?", ["Diagonally forwards, one square", "Straight forwards", "Backwards", "On the square beside it"]],
        ["How many squares does a knight in the corner a1 control?", ["2", "8", "4", "3"]],
        ["Which piece can jump over other pieces?", ["The knight", "The bishop", "The queen", "The pawn"]],
        ["When can a pawn move two squares?", ["On its first move", "On any move", "When capturing", "Never"]],
      ],
    },
    "capture-and-value": {
      objectives: ["Capture correctly", "Know the value of the pieces", "Work out the result of an exchange", "Find an undefended piece"],
      content: `## How to capture

When capturing, a piece moves onto the square of the opponent's piece, and the captured piece is taken off the board. All pieces except the pawn capture the same way they move.

- You do not have to capture: it is the player's choice.
- The king cannot be captured.

## Value

| Piece | Value (in pawns) |
|---|---|
| Pawn | 1 |
| Knight | 3 |
| Bishop | 3 |
| Rook | 5 |
| Queen | 9 |
| King | Priceless |

These numbers help you decide whether an exchange is worth it.

## Exchanges

An **exchange** is when you capture an opponent's piece and they capture yours.

- Knight for bishop: 3 = 3, an equal exchange.
- Rook for knight: 5 for 3, you lose 2 points.
- Capturing a knight with a pawn: 3 for 1, you gain.

## Defended and undefended

A piece is **defended** if, when it is captured, one of your pieces can capture back. An **undefended** piece can be captured without loss. Before every move ask yourself: "Which of my pieces is undefended?"

## Exercises

1. How many points is a rook worth?
2. Is it worth giving up a queen for a rook?
3. What is an exchange?
4. How many points are two knights worth together?
5. Do you have to capture if you can?

## Answers

1. 5.
2. No: 9 for 5 is a loss of 4 points.
3. When the players take turns capturing each other's pieces.
4. 6.
5. No, it is the player's choice.`,
      quiz: [
        ["What is the value of a knight?", ["3", "5", "1", "9"]],
        ["Which exchange is equal?", ["Knight for bishop", "Rook for knight", "Queen for rook", "Knight for pawn"]],
        ["Which piece cannot be captured?", ["The king", "The queen", "A rook", "A pawn"]],
        ["What does \"defended piece\" mean?", ["If it is captured, you can capture back", "It can never be captured", "It stands in the centre", "It has not moved yet"]],
        ["How many points do you lose by giving up a rook for a bishop?", ["2", "3", "1", "0"]],
      ],
    },
    "check-and-mate": {
      objectives: ["Recognise check", "Know the three ways of getting out of check", "Tell check from mate", "Find a simple mate in one"],
      content: `## Check

**Check** is when the king is attacked by an opponent's piece. Check must be dealt with at once: you may not make another move that leaves your king in check.

## How to get out of check

| Way | What it means |
|---|---|
| Move | The king moves to a safe square |
| Capture | Capture the piece giving check |
| Block | Put a piece between the king and the checking piece |

You cannot block a check from a knight, because the knight jumps.

## Mate

**Mate** (checkmate) is when the king is in check and **there is no way** to get out of it. Mate ends the game: the player who gives mate wins.

## Mate in one: an example

A white rook moves to the 8th rank, and in front of the black king on g8 its own pawns stand on f7, g7 and h7. The king cannot move, and nothing can capture the rook or block the check. This is **mate**. It is called **"back-rank mate"**.

## Note

- Check is not yet defeat. Only mate ends the game.
- Not every check is useful: sometimes a check just drives the king to a better square.

## Exercises

1. What is check?
2. List the three ways of getting out of check.
3. Why can a check from a knight not be blocked?
4. How is check different from mate?
5. What is the mate called when the king is shut in by its own pawns and a rook gives check on the last rank?

## Answers

1. When the king is attacked by an opponent's piece.
2. Move, capture, block.
3. Because the knight jumps over pieces.
4. You can get out of check, but not out of mate.
5. Back-rank mate.`,
      quiz: [
        ["What is mate?", ["A check you cannot get out of", "Any check", "Capturing the queen", "A draw"]],
        ["Which way does not help against a check from a knight?", ["Blocking", "Moving the king", "Capturing the knight", "None of them helps"]],
        ["Can a player in check make another move that leaves the king in check?", ["No", "Yes", "Only with a pawn", "Only at the start of the game"]],
        ["How many ways are there of getting out of check?", ["3", "1", "2", "5"]],
        ["What happens after mate?", ["The game ends", "The game goes on", "The king is removed and the game goes on", "The players swap colours"]],
      ],
    },
    castling: {
      objectives: ["Castle kingside and queenside", "List the conditions for castling", "Write castling in notation", "Understand why castling is useful"],
      content: `## What is castling

**Castling** is a joint move of the king and a rook. It is the only move in which two pieces move at once and in which the king moves two squares.

## Two kinds

| Kind | King (White) | Rook (White) | Notation |
|---|---|---|---|
| Kingside (short) | e1 → g1 | h1 → f1 | O-O |
| Queenside (long) | e1 → c1 | a1 → d1 | O-O-O |

Black does the same on the 8th rank: e8 → g8 or e8 → c8.

The order: first the king moves two squares, then the rook moves next to it on the other side.

## When castling is not allowed

1. The king or that rook has already moved.
2. There is a piece between the king and the rook.
3. The king is in check.
4. The king would have to pass through a square attacked by the opponent.
5. The king would have to land on a square attacked by the opponent.

If the rook is under attack, castling is allowed.

## Why it is useful

After castling the king is tucked away behind its pawns, and the rook comes towards the centre and joins the game. It is a good habit to castle within the first 10 moves of the game.

## Exercises

1. Which square does the white king go to when castling kingside?
2. How is queenside castling written?
3. Can you castle if the king is in check?
4. Can you castle if the king has already moved and come back to e1?
5. Where does the black rook stand after queenside castling?

## Answers

1. g1.
2. O-O-O.
3. No.
4. No, the king has already moved.
5. On d8.`,
      quiz: [
        ["Where does the white rook stand after kingside castling?", ["f1", "g1", "d1", "e1"]],
        ["How is kingside castling written?", ["O-O", "O-O-O", "K-R", "0-1"]],
        ["Can you castle if the king has to pass through an attacked square?", ["No", "Yes", "Only when castling queenside", "Only for Black"]],
        ["How many squares does the king move when castling?", ["2", "1", "3", "4"]],
        ["What is the main benefit of castling?", ["The king is safe and the rook joins the game", "It captures an opponent's piece", "The queen gets stronger", "It ends the game"]],
      ],
    },
    "en-passant-and-promotion": {
      objectives: ["Recognise the conditions for en passant", "Capture en passant", "Promote a pawn", "Choose the right piece when promoting"],
      content: `## En passant

This is a special pawn capture. It happens when:

1. Your pawn is on the opponent's half of the board: on the **5th** rank for White, the **4th** for Black.
2. An opponent's pawn on a neighbouring file moves **two squares** on its first move and lands **next to** your pawn.
3. You can capture it **as if it had moved only one square**.

For example, a white pawn stands on e5. Black plays d7–d5. White captures e5×d6, and the black pawn on d5 is taken off the board.

**Important**: you can capture en passant **only straight away, on the very next move**. If you miss the moment, you cannot do it later.

## Promotion

When a pawn reaches the **last rank** (the 8th for White, the 1st for Black), it immediately turns into **any piece of its own colour**: a queen, a rook, a bishop or a knight.

- A pawn cannot become a king and cannot stay a pawn.
- You can have two or more queens.
- A **queen** is chosen almost every time, because it is the strongest.
- Sometimes a knight is better: for example, when the knight gives mate at once or wins a piece with check.

In notation promotion is written like this: **e8=Q**.

## Exercises

1. Which rank must a white pawn be on to capture en passant?
2. A white pawn is on f5, and Black plays g7–g5. Which square does the white pawn go to when capturing en passant?
3. Can you capture en passant two moves later?
4. Which pieces can a pawn turn into?
5. How is promotion to a queen on a8 written?

## Answers

1. The 5th.
2. g6.
3. No, only straight away, on the very next move.
4. A queen, a rook, a bishop or a knight.
5. a8=Q.`,
      quiz: [
        ["When can you capture en passant?", ["Only straight away, on the very next move", "At any time", "Only at the end of the game", "Only when in check"]],
        ["Which piece can a pawn not turn into?", ["A king", "A queen", "A knight", "A rook"]],
        ["On which rank does a black pawn promote?", ["The 1st", "The 8th", "The 4th", "The 5th"]],
        ["Which piece captures en passant?", ["Only a pawn", "Any piece", "Only a knight", "Only the king"]],
        ["How many queens can a player have?", ["More than one", "Only one", "No more than two", "None"]],
      ],
    },
    "draws-and-notation": {
      objectives: ["List the ways a game can be drawn", "Tell stalemate from mate", "Write moves in short notation", "Read the result of a game"],
      content: `## Three results of a game

| Notation | Meaning |
|---|---|
| 1-0 | White won |
| 0-1 | Black won |
| ½-½ | Draw |

## Ways to draw

1. **Stalemate**: it is a player's turn, their king is **not in check**, but they have no legal move.
2. **By agreement**: the players agree to a draw.
3. **Threefold repetition**: the same position occurs three times.
4. **Insufficient material to mate**: for example, king against king, king and bishop against king, king and knight against king.
5. **The 50-move rule**: 50 moves in a row without a single capture or pawn move.

**Stalemate is not mate.** In mate the king is in check; in stalemate it is not. The stronger side must be careful not to allow stalemate in a winning position.

## Writing down moves

In short notation you write **the letter of the piece and the square it moved to**.

| Sign | Meaning | Example |
|---|---|---|
| K Q R B N | King, queen, rook, bishop, knight | Nf3: a knight moved to f3 |
| No letter | A pawn move | e4: a pawn moved to e4 |
| x | Capture | Bxc6: a bishop captured on c6 |
| + | Check | Qh5+ |
| # | Mate | Qf7# |
| O-O, O-O-O | Castling | |

The start of a game is written like this: **1. e4 e5 2. Nf3 Nc6 3. Bc4**. The number is the move number: White's move is written first, then Black's.

## Exercises

1. What does 0-1 mean?
2. How is stalemate different from mate?
3. Why is "king and knight against king" a draw?
4. What does Nxe5 mean?
5. Write down: "The queen moved to h5 and gave check".

## Answers

1. Black won.
2. In mate the king is in check; in stalemate it is not, but there are no moves.
3. Because you cannot give mate with a king and a knight.
4. A knight captured a piece on e5.
5. Qh5+.`,
      quiz: [
        ["What is stalemate?", ["The king is not in check, but there are no moves", "The king is in check and there are no moves", "The queen is lost", "A position has occurred three times"]],
        ["Which sign means mate?", ["#", "+", "x", "="]],
        ["What does e4 mean?", ["A pawn moved to e4", "The king moved to e4", "A capture on e4", "Check from e4"]],
        ["Which position is a draw because of insufficient material to mate?", ["King and bishop against king", "King and queen against king", "King and rook against king", "King and two rooks against king"]],
        ["How is a draw written?", ["½-½", "1-0", "0-1", "0-0"]],
      ],
    },
  },
};
