import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Mate with two rooks, with the queen and with the rook, standard mates and opening principles.",
    "The double attack, the pin, the skewer, the discovered attack, removing the defender and finding tactics.",
  ],
  lessons: {
    "mate-with-two-rooks": {
      objectives: ["Give a \"ladder\" mate with two rooks", "Explain how the rooks take turns", "Avoid leaving a rook where the king can take it", "Give mate without help from your own king"],
      content: `## Why this is the easiest mate

Two rooks are so strong that they can give mate **without help from their own king**. This method is called the **"ladder"**.

## The ladder method

1. One rook **cuts off** a rank so that the king cannot cross it.
2. The other rook **gives check** on the next rank.
3. The king has to step back one row.
4. Now the first rook gives check and the second one cuts off.
5. In this way the rooks "climb the ladder" step by step until the king is on the edge of the board. There the last check becomes **mate**.

## Example

Black king on e5, white rooks on a4 and b1.

- 1. Rb5+ Ke6 (the rook on a4 cuts off the 4th rank)
- 2. Ra6+ Ke7
- 3. Rb7+ Ke8
- 4. Ra8#

## Danger

If the king comes up to a rook and attacks it, move the rook **far away, to the other edge of the board**. The rooks must stay far from the king, but on the same lines.

## Exercises

1. What is the method of mating with two rooks called?
2. Do you need help from your own king?
3. What should you do if the king attacks a rook?
4. Where is the last, mating check given?
5. What roles do the two rooks play on each move?

## Answers

1. The "ladder".
2. No.
3. Move the rook to the far edge of the board along the same line.
4. On the edge of the board: on the 1st or 8th rank or on the a- or h-file.
5. One cuts off and the other gives check, then they swap.`,
      quiz: [
        ["What is the method of mating with two rooks called?", ["The ladder", "The box", "The star", "The fortress"]],
        ["Where does the ladder end?", ["On the edge of the board", "In the centre", "On any square", "Next to your own king"]],
        ["What should you do if the king attacks a rook?", ["Move the rook far away along the same line", "Leave the rook where it is", "Give check with the other rook on a diagonal", "Offer a draw"]],
        ["Do you need the king's help to mate with two rooks?", ["No", "Yes, always", "Only in the corner", "Only when playing Black"]],
        ["What does one rook do while the other gives check?", ["Cuts off the king's line of retreat", "Stands next to the king", "Defends a pawn", "Nothing"]],
      ],
    },
    "mate-with-queen": {
      objectives: ["Drive the king to the edge with the queen", "Use the \"a knight's move away\" technique", "Bring up your own king", "Avoid stalemate"],
      content: `## The queen cannot mate alone

A queen and king always beat a lone king, but the queen **cannot give mate on her own**: she needs help from her own king.

## Step by step

1. **Drive the king to the edge.** The queen stands **a knight's move away** from the opponent's king. In this way the king's "cage" gets smaller with every move.
2. **Stop in time.** When the king is on the edge and has only two squares, the queen comes no closer.
3. **Bring up the king.** Your own king comes closer.
4. **Mate.** The queen gives mate on the edge, protected by her king.

## The danger of stalemate

If the queen comes too close and the king is **not in check but has no moves**, that is **stalemate**, which means a draw.

Example: black king on a8, white queen on b6, white king far away. Black to move. The king on a8 cannot go to a7, b7 or b8: the queen controls all those squares. There is no check. This is stalemate.

Before every move check: **"Does the opponent's king have a move?"**

## Standard mates

| Position | Mate |
|---|---|
| Black king e8, white king e6 | Qe7# or Qb8# (if the path is clear) |
| Black king h8, white king g6 | Qg7# or Qh7# |

## Exercises

1. Can the queen give mate on her own?
2. How far away does the queen stand when driving the king back?
3. What is stalemate?
4. Why bring up your own king?
5. What question must you ask yourself before every move?

## Answers

1. No, she needs help from her own king.
2. A knight's move away.
3. When the king is not in check but has no moves: it is a draw.
4. So that it protects the queen on the mating square.
5. "Does the opponent's king have a move?"`,
      quiz: [
        ["What does the queen need to give mate?", ["Help from her own king", "A second queen", "Only a rook", "Nothing"]],
        ["Which technique helps drive the king to the edge?", ["The queen stands a knight's move away", "The queen stands next to the king", "The queen gives check every move", "The queen stands in the corner"]],
        ["What is the biggest danger when mating with a queen?", ["Stalemate", "Always losing the queen", "Threefold repetition", "Putting your own king in check"]],
        ["Where is mate usually given?", ["On the edge of the board", "In the centre", "On d4", "Next to your own king in the centre"]],
        ["What does stalemate mean?", ["A draw", "A win", "A loss", "The game starts again"]],
      ],
    },
    "mate-with-rook": {
      objectives: ["Use the \"box\" method", "Put the kings opposite each other", "Make a waiting move with the rook", "Give mate on the edge"],
      content: `## Rook and king against king

The rook cannot give mate on its own either. Here your own king plays an even more important role than in the queen mate.

## The box method

1. The rook shuts the opponent's king in a **"box"** along a file and a rank.
2. Your own king comes up, **protecting the rook**.
3. Whenever it can, the rook **makes the box smaller**.
4. When the king is on the edge, the kings stand **opposite each other** (with one square between them), and the rook gives check along the edge. That is **mate**.

## The waiting move

Sometimes you need the opponent's king to step in front of yours by itself. Then the rook makes a **waiting move**: it stays on the same line and does not change the box.

## Mating positions

| Black king | White king | Rook | Result |
|---|---|---|---|
| e8 | e6 | a8 | Mate |
| h4 | f4 | h1 | Mate |
| a1 | c2 | a8 | Mate (the king on c2 covers b1 and b2) |

## Exercises

1. What is the method of mating with a rook called?
2. Can the rook give mate on its own?
3. How must the kings stand at the moment of mate?
4. What is a waiting move?
5. Black king on h8, white king on h6, rook on a1. Which move gives mate?

## Answers

1. The "box".
2. No.
3. Opposite each other, with one square between them.
4. A rook move that changes nothing, so that the opponent is forced to move.
5. Ra8#.`,
      quiz: [
        ["What is the method of mating with a rook called?", ["The box", "The ladder", "Stalemate", "The bridge"]],
        ["How do the kings stand at the moment of mate with a rook?", ["Opposite each other, with one square between them", "Side by side", "In different corners", "Far apart on one diagonal"]],
        ["What does your own king do in this mate?", ["Comes up and protects the rook", "Stands in the corner", "Hides behind the pawns", "Nothing"]],
        ["Why is a waiting move needed?", ["So that the opponent's king steps onto a bad square by itself", "So that the rook can take a pawn", "To get a stalemate", "To castle"]],
        ["Black king e8, white king e6, rook h1. Which move gives mate?", ["Rh8#", "Re1#", "Rh7#", "Rf1#"]],
      ],
    },
    "mating-patterns": {
      objectives: ["Recognise the back-rank mate", "Recognise Scholar's Mate and defend against it", "Recognise Fool's Mate", "Recognise the smothered mate"],
      content: `## Back-rank mate

After castling the king stands on g8 with pawns on f7, g7 and h7. If the opponent's rook or queen breaks into the 8th rank, the king has nowhere to run.

**Defence:** make an escape square with a pawn in time (for example, h7–h6), so that the king has a way out.

## Scholar's Mate

1. e4 e5 2. Bc4 Nc6 3. Qh5 Nf6?? 4. Qxf7#

The queen and bishop together attack the square **f7**, which at the start of the game is defended only by the king.

**Defence:** 3...g6 or 3...Qe7. If the queen has come out early, attack it with developing moves.

## Fool's Mate

1. f3 e5 2. g4 Qh4#

The fastest mate: in 2 moves. White weakened the diagonal e1–h4 leading to their king. The lesson: **at the start of the game, do not move the f- and g-pawns without a reason**.

## Smothered mate

The king is surrounded by **its own pieces**, and a knight gives check. Example: black king h8, rook g8, pawns g7, h7; a white knight arrives on f7, and it is mate.

| Mate | Who gives it | The king's weakness |
|---|---|---|
| Back-rank | Rook or queen | No way out because of the pawns |
| Scholar's | Queen + bishop | The square f7 |
| Fool's | Queen | The open diagonal e1–h4 |
| Smothered | Knight | Surrounded by its own pieces |

## Exercises

1. Which square does Scholar's Mate attack?
2. How many moves does Fool's Mate take?
3. How do you defend against back-rank mate?
4. Which piece gives smothered mate?
5. What mistake did White make in Fool's Mate?

## Answers

1. f7 (for White it is f2).
2. 2 moves.
3. Make a way out with a pawn, for example h6.
4. The knight.
5. They moved the f- and g-pawns and exposed their king.`,
      quiz: [
        ["Which square is weak in Scholar's Mate?", ["f7", "e5", "d7", "h7"]],
        ["Which piece gives smothered mate?", ["The knight", "The queen", "The bishop", "The rook"]],
        ["Which move ends Fool's Mate?", ["Qh4#", "Qxf7#", "Ra8#", "Nf7#"]],
        ["How do you defend against back-rank mate?", ["Make a way out for the king with a pawn", "Give up the queen", "Push all the pawns forwards", "Take the king to the centre early in the game"]],
        ["What does Fool's Mate teach?", ["Do not move the f- and g-pawns without a reason", "Always bring the queen out early", "Do not castle", "Keep the knights at home"]],
      ],
    },
    "opening-principles": {
      objectives: ["List the main opening principles", "Develop the pieces in the right order", "Explain why bringing the queen out early is dangerous", "Judge an opening move"],
      content: `## What is the opening

The **opening** is the start of the game, roughly the first 10–15 moves. The main thing here is to bring the pieces into play quickly and correctly.

## Five golden rules

1. **Take the centre** with pawns: e4, d4 (for Black e5, d5).
2. **Develop your pieces:** first the knights, then the bishops.
3. **Castle** early so that the king is safe.
4. **Do not bring the queen out too early:** the opponent will attack her while developing.
5. **Do not move the same piece twice** without a reason.

Also **connect the rooks**, that is, clear the first rank so that the rooks can see each other.

## Good and bad moves

| Move | Verdict | Why |
|---|---|---|
| 1. e4 | Good | Takes the centre, opens the way for the queen and bishop |
| 1. Nf3 | Good | Develops the knight and controls the centre |
| 1. h4 | Bad | Helps neither the centre nor development |
| 1. Na3 | Weak | A knight on the edge controls few squares |
| 2. Qh5 | Risky | The queen has come out early |

## Example: the Italian Game

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O

Both sides have taken the centre and developed a knight and a bishop, and White has already castled.

## Exercises

1. Which pieces are usually developed first?
2. Why is it dangerous to bring the queen out early?
3. Which pawn moves take the centre for White?
4. What does "connect the rooks" mean?
5. Judge the move 1. a4.

## Answers

1. The knights.
2. The opponent attacks her and develops at the same time.
3. e4 and d4.
4. Clear the first rank so that the rooks can see each other.
5. Weak, because it helps neither the centre nor development.`,
      quiz: [
        ["What is the first opening principle?", ["Take the centre", "Bring the queen out early", "Move the edge pawns", "Do not castle"]],
        ["Which pieces are usually developed before the bishops?", ["The knights", "The rooks", "The queen", "The king"]],
        ["Why castle early?", ["So that the king is safe", "So that the queen gets stronger", "So that a pawn promotes", "To get a stalemate"]],
        ["Which first move on this list is best?", ["1. e4", "1. h4", "1. a4", "1. Na3"]],
        ["What is the opening?", ["The start of the game", "The end of the game", "A mating position", "A draw offer"]],
      ],
    },
    "double-attack-and-fork": {
      objectives: ["Recognise a double attack", "Find a knight fork", "Use a pawn fork", "Defend against a double attack"],
      content: `## What is a double attack

A **double attack** (fork) is when one piece attacks **two or more** of the opponent's pieces at the same time. The opponent can save only one.

## The knight fork

The knight is the "master" of forks, because its attack is hard to spot.

Example: black king on e8, black rook on a8. A white knight lands on **c7**. That is check to the king and an attack on the rook. The king must move, and the knight takes the rook.

The strongest is the **royal fork**, when the knight gives check and attacks the queen at the same time.

## The pawn fork

A pawn stepping forwards can attack two pieces. Example: black knight on c6, black bishop on e6. A white pawn goes **d4–d5** and attacks both. The pawn is worth 1, and the pieces 3 each.

## Other double attacks

| Piece | How |
|---|---|
| Queen | Attacks two undefended pieces, or check + an attack |
| Bishop | Along a diagonal in two directions |
| Rook | Along a rank or a file |
| King | In the endgame attacks two pawns |

## How to defend

- Do not leave pieces **undefended**.
- Watch which squares a knight could use to attack your king and queen.

## Exercises

1. What is a double attack?
2. Why does the knight often make forks?
3. Black king on g8, black queen on c8. From which square can a white knight attack both?
4. Why is a pawn fork profitable?
5. How do you avoid a double attack?

## Answers

1. One piece attacking two or more pieces at the same time.
2. Its move is unusual, and the attack is hard to spot.
3. e7.
4. The pawn is cheap (1) but wins a more valuable piece.
5. Do not leave pieces undefended, and watch the dangerous squares.`,
      quiz: [
        ["What is a double attack?", ["One piece attacking two pieces", "Two pieces attacking one", "Two checks in a row", "Castling twice"]],
        ["Whose fork is hardest to spot?", ["The knight's", "The rook's", "The king's", "The queen's"]],
        ["Black king e8, black rook a8. From which square does a knight attack both?", ["c7", "d6", "b6", "f6"]],
        ["Why is a pawn fork profitable?", ["The pawn is cheap but wins a valuable piece", "The pawn is the strongest piece", "A pawn cannot be captured", "The pawn jumps"]],
        ["What is the best defence against a double attack?", ["Do not leave pieces undefended", "Always push pawns", "Do not develop the knights", "Bring the queen out early"]],
      ],
    },
    pin: {
      objectives: ["Recognise a pin", "Tell an absolute pin from a relative pin", "Use a pin to win a piece", "Break a pin"],
      content: `## What is a pin

A **pin** is when a piece cannot or should not move, because behind it stands a **more valuable** piece that would then be attacked.

Only line pieces can pin: **the bishop, the rook and the queen**.

## Absolute and relative pins

| Type | Behind it | Can the pinned piece move? |
|---|---|---|
| Absolute | The king | No, the rules forbid it |
| Relative | The queen, a rook or another valuable piece | It can, but it is usually harmful |

## Example

1. e4 e5 2. Nf3 d6 3. Bc4 Bg4

The black bishop on g4 has pinned the knight on f3: behind it, on d1, stands the white queen. If the knight moves, the bishop takes the queen. This is a relative pin.

An example of an absolute pin: white bishop on b5, black knight on c6, black king on e8, the square d7 empty. The knight cannot move, because it would expose the king.

## How to use a pin

- **Attack the pinned piece** with another piece, often a pawn. The pinned piece cannot run away.

## How to break a pin

- Put a piece between them.
- Move the valuable piece out from behind.
- Attack the pinning piece, for example with the pawn move h3 against the bishop on g4.

## Exercises

1. What is a pin?
2. Which pieces can pin?
3. How is an absolute pin different from a relative pin?
4. How can a pin be used to win a piece?
5. Name one way to break a pin.

## Answers

1. When a piece cannot move because a more valuable piece stands behind it.
2. The bishop, the rook, the queen.
3. In an absolute pin the king is behind, and moving is forbidden.
4. Attack the pinned piece with another piece.
5. For example, attack the pinning piece with a pawn.`,
      quiz: [
        ["Which piece cannot make a pin?", ["The knight", "The bishop", "The rook", "The queen"]],
        ["What stands behind the pinned piece in an absolute pin?", ["The king", "A pawn", "A knight", "An empty square"]],
        ["Can a piece in an absolute pin move?", ["No", "Yes", "Only to capture", "Only if it is a knight"]],
        ["How do you use a pin?", ["Attack the pinned piece with another piece", "Exchange queens at once", "Ignore it", "Offer a draw"]],
        ["Which move often breaks the pin of the knight on f3 by the bishop on g4?", ["h3", "a3", "e5", "Kf1"]],
      ],
    },
    skewer: {
      objectives: ["Recognise a skewer", "Tell a skewer from a pin", "Use a skewer with check to the king", "Find a skewer in the endgame"],
      content: `## What is a skewer

A **skewer** is when a line piece attacks a **valuable** piece and **behind it**, on the same line, stands another piece. The valuable piece moves away, and the piece behind is exposed.

## Pin and skewer

| | Pin | Skewer |
|---|---|---|
| In front | The cheaper piece | The valuable piece |
| Behind | The valuable piece | The cheaper piece |
| What is lost | The front piece cannot move | The back piece is taken |

## Example with a bishop

Black king on e6, black queen on g8, the squares d5 and f7 empty. The white bishop plays **Bc4+**. The king has to leave the diagonal, and the bishop takes the queen on g8.

## Example with a rook

Black king on e5, black queen on e1, the e-file clear. The white rook plays **Re8+**. The king leaves the e-file, and the rook takes the queen.

The main idea: **check the king, then take the piece standing behind it**.

## How to defend

- Do not put your king and queen **on the same line** if an opponent's line piece can get there.

## Exercises

1. What is a skewer?
2. Which piece stands in front in a skewer: the valuable one or the cheaper one?
3. What is the main difference between a skewer and a pin?
4. Black king on e6, queen on g8. Which bishop check wins the queen?
5. How do you avoid a skewer?

## Answers

1. An attack on a valuable piece with another piece standing behind it on the same line.
2. The valuable one.
3. In a pin the cheaper piece is in front; in a skewer the valuable one is.
4. Bc4+.
5. Do not put the king and queen on the same line.`,
      quiz: [
        ["Which piece stands in front in a skewer?", ["The valuable one", "The cheaper one", "Always a pawn", "Always a knight"]],
        ["Which piece cannot make a skewer?", ["The knight", "The bishop", "The rook", "The queen"]],
        ["What happens after a skewer?", ["The valuable piece moves away and the back piece is taken", "The front piece is taken at once", "It is stalemate", "Nothing happens"]],
        ["Which set-up is dangerous?", ["King and queen on the same line", "King behind its pawns", "A knight in the centre", "Connected rooks"]],
        ["Black king e6, black queen g8. Which move is a skewer?", ["Bc4+", "Bb5", "Bd3", "Bf1"]],
      ],
    },
    "discovered-attack": {
      objectives: ["Recognise a discovered attack", "Set up a discovered check", "Explain why a double check is so strong", "Spot the chance of a discovered attack"],
      content: `## The discovered attack

A **discovered attack** is when a piece **moves off** a line and **uncovers** an attack by the line piece behind it (a bishop, rook or queen).

Its strength is that **there are two attacks at once**: by the piece that moves and by the piece uncovered.

## Discovered check

If the uncovered attack is a check to the king, it is a **discovered check**. The opponent has to deal with the check, while the piece that moved can capture something.

Example: white rook on e1, white knight on e4, black king on e8, black queen on d6. The knight plays **Nxd6+**: the knight takes the queen, and the rook gives a discovered check.

## Double check

A **double check** is when **two pieces** give check to the king at the same time. Then:

- You cannot **capture** both at once.
- You cannot **block** two lines at once.
- The only defence is to **move the king**.

That is why a double check often ends in mate.

## How to find it

| Look at | Question |
|---|---|
| Your line pieces | What is standing in their way? |
| The opponent's king and queen | Are they on the line of your bishop, rook or queen? |
| The front piece | Can it move away with a threat? |

## Exercises

1. What is a discovered attack?
2. The attack of which pieces can be "uncovered"?
3. What is a discovered check?
4. Why can a double check only be met by moving the king?
5. What two attacks happen in a discovered attack?

## Answers

1. When a piece moves away and uncovers an attack by the line piece behind it.
2. The bishop, the rook and the queen.
3. A discovered attack that is a check to the king.
4. You cannot capture or block the checks of two pieces at once.
5. By the piece that moves and by the uncovered line piece.`,
      quiz: [
        ["What is a double check?", ["Check by two pieces at once", "Two checks in a row", "Check to two kings", "Checkmate"]],
        ["How can you defend against a double check?", ["Only by moving the king", "By capturing one piece", "By blocking one line", "You cannot: it is always mate"]],
        ["What is uncovered in a discovered attack?", ["A line piece's line of attack", "A new castling move", "A pawn promotion", "An en passant capture"]],
        ["Why is a discovered attack strong?", ["There are two attacks at once", "It is always mate", "It lets you make two moves", "The opponent misses a turn"]],
        ["The attack of which piece cannot be uncovered?", ["The knight", "The bishop", "The rook", "The queen"]],
      ],
    },
    "finding-tactics": {
      objectives: ["Count attackers and defenders", "Use removing the defender", "Use the \"checks, captures, threats\" rule", "Check a move before making it"],
      content: `## Attackers and defenders

Before capturing, **count**: how many of your pieces attack the square, and how many of the opponent's pieces defend it.

- If there are **more** attackers and the exchange is favourable, you can capture.
- Start capturing with the **cheapest** piece.

## Removing the defender

If an opponent's piece is defended by only **one** piece, you can:

1. **Capture the defender** (even at the cost of an exchange).
2. **Deflect the defender**, forcing it to move away (for example, with a check).

After that the undefended piece or the mating square is left open.

Example: a black knight on f6 defends h7 against mate. White takes the knight with the bishop, **Bxf6**, and then the queen mates on h7.

## "Checks, captures, threats"

Before every move, check your possible moves in this order:

| Step | Question |
|---|---|
| 1. Checks | Is there a check that wins something? |
| 2. Captures | Is there a favourable capture? |
| 3. Threats | Is there a move that threatens mate or winning a piece? |

Do the same check **for your opponent**: what are they threatening?

## The thinking habit

1. What does your opponent want with their last move?
2. Which pieces are undefended, yours and theirs?
3. Is there a tactic: a double attack, a pin, a skewer, a discovered attack?
4. Check your move: how will your opponent reply?

## Exercises

1. Why count attackers and defenders?
2. Which piece should you start capturing with?
3. What is removing the defender?
4. Name the three steps of the "checks, captures, threats" rule.
5. What question should you ask after every move your opponent makes?

## Answers

1. To know whether you can capture without loss.
2. The cheapest one.
3. Capturing or deflecting the defending piece so that the defended piece is left without defence.
4. Checks, captures, threats.
5. "What do they want with their last move?"`,
      quiz: [
        ["What is the first step of the \"checks, captures, threats\" rule?", ["Look for checks", "Look for captures", "Look for threats", "Castle"]],
        ["Which piece is it best to start an exchange with?", ["The cheapest one", "The most valuable one", "The king", "Always the queen"]],
        ["What is removing the defender?", ["Capturing or deflecting the defending piece", "Retreating your own defender", "Castling", "Offering a draw"]],
        ["What question should you ask after your opponent's move?", ["What do they want?", "How many minutes are left?", "Who will win?", "What colour is the square?"]],
        ["If two pieces attack a square and one defends it, and all are of equal value, what does capturing give you?", ["You win a piece", "You lose a piece", "Always a draw", "Stalemate"]],
      ],
    },
  },
};
