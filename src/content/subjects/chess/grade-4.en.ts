import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The rule of the square, the opposition, king and pawn against king, passed pawns and rook endgames.",
    "Combinations, middlegame plans, attacking the king, world champions and chess in Armenia.",
  ],
  lessons: {
    "square-rule": {
      objectives: ["Draw the square of a pawn", "Work out whether the king can catch a pawn", "Take the pawn's double move into account", "Apply the rule quickly, without counting moves"],
      content: `## The endgame

The **endgame** is the last stage of the game, when few pieces are left on the board. Here the king becomes an active piece, and the pawns try to promote.

## The rule of the square

When a lone pawn is racing to the last rank and the opponent's king is trying to catch it, you do not need to count every move. Draw a **square**:

1. One side of the square runs from the pawn to its promotion square.
2. Build the square on that side, towards the opponent's king.
3. If the king **can step into the square on its move**, it will catch the pawn. If not, the pawn will promote.

## Example

A white pawn on a5. The square: a5, a8, d8, d5.

- Black king on e6, **Black to move**: Kd6, and the king is in the square. The king catches the pawn.
- If it is **White to move**: a6, and the square shrinks to a6, a8, c8, c6. The king on e6 cannot get into it. The pawn promotes.

## The double move

If the pawn is still on its starting square (on the 2nd rank for White), build the square **from the 3rd rank**, because the pawn can move two squares at once.

## Note

The rule works when nothing blocks the king's path and there are no other pieces on the board.

## Exercises

1. Which squares form the square of a white pawn on a4?
2. What does "the king has entered the square" mean?
3. How do you build the square if the pawn is still on the 2nd rank?
4. Why does it matter whose move it is?
5. White pawn on h4, black king on d5, Black to move. Will the king catch the pawn?

## Answers

1. a4, a8, e8, e4.
2. The king is inside the square and will catch the pawn.
3. Start from the 3rd rank.
4. Because a pawn move shrinks the square by one square.
5. Yes: the square of the pawn on h4 is h4, h8, d8, d4, and d5 is already inside it.`,
      quiz: [
        ["When does the king catch the pawn by the rule of the square?", ["When it can step into the square on its move", "When it stands next to the pawn", "Always", "Never"]],
        ["From which rank is the square built if the white pawn is on the 2nd rank?", ["The 3rd", "The 1st", "The 2nd", "The 4th"]],
        ["What happens to the square after each pawn move?", ["It shrinks", "It grows", "It does not change", "It disappears"]],
        ["Which squares form the square of a pawn on a5?", ["a5, a8, d8, d5", "a5, a8, e8, e5", "a5, a8, c8, c5", "a1, a5, e5, e1"]],
        ["What is the endgame?", ["The last stage of the game", "The start of the game", "A mating position", "A draw offer"]],
      ],
    },
    opposition: {
      objectives: ["Explain what the opposition is", "Work out who has the opposition", "Take the opposition with the right move", "Use the opposition to block the king's path"],
      content: `## What is the opposition

The **opposition** is when the two kings stand on the same file or rank with **one square** between them.

Example: white king on e4, black king on e6.

## Who has the opposition

The side that **does not have to move** has the opposition. The opponent is forced to "give way": to step left, right or back.

| Position | Whose move | Who has the opposition |
|---|---|---|
| Ke4, Ke6 | Black's | White |
| Ke4, Ke6 | White's | Black |

## Why it matters

Kings cannot stand next to each other. So the king that has the opposition **does not let** the other king forward. In pawn endgames this often decides between a win and a draw.

## How to take it

If the kings are far apart, think: "After which move will the kings face each other with one square between them, with my opponent to move?"

Example: white king on e2, black king on e7, White to move. **Ke3!** Now there are three squares between the kings, and this is also the opposition: the "distant opposition". If Ke6, then Ke4, and White keeps the opposition.

## Exercises

1. What is the opposition?
2. Ke5 and Ke7, White to move. Who has the opposition?
3. Why does the king that has the opposition block the other king's path?
4. Can the opposition be on a rank?
5. What is the distant opposition?

## Answers

1. When the kings stand on the same line with one square between them.
2. Black.
3. Because kings cannot stand next to each other, so the other king has to give way.
4. Yes, for example Kc4 and Ke4.
5. When there are three (or five) squares between the kings.`,
      quiz: [
        ["When does the opposition arise?", ["The kings are on the same line with one square between them", "The kings stand side by side", "The kings are in different corners", "The kings are in check"]],
        ["Who has the opposition?", ["The side that does not have to move", "The side whose move it is", "Always White", "Whoever has more pawns"]],
        ["Ke4 and Ke6, Black to move. Who has the opposition?", ["White", "Black", "Nobody", "Both"]],
        ["Where is the opposition especially important?", ["In pawn endgames", "In the opening", "When castling", "In Scholar's Mate"]],
        ["How many squares are there between the kings in the distant opposition?", ["Three", "One", "Two", "Four"]],
      ],
    },
    "king-and-pawn": {
      objectives: ["Know that the king must go in front of the pawn", "Find the key squares", "Use the opposition when defending", "Recognise the draw with a rook's pawn"],
      content: `## The main idea

King and pawn against a lone king can win, but not always. The main rule for the stronger side: **the king must go in front of the pawn** and clear the way for it.

## Key squares

If the stronger side's king reaches the rank **two squares in front of** the pawn, on its file or a neighbouring one, it wins whoever is to move.

Example: a pawn on e4. The key squares are **d6, e6, f6**. If the white king stands on one of them, the pawn will promote.

## The defender

The weaker side's king must stand **in front of the pawn** and keep the **opposition**.

Example: White has Ke5 and a pawn on e4, Black has Ke7, White to move. If 1. Kd5 Kd7!, or 1. Kf5 Kf7!: Black always steps opposite.

## Whose move it is decides everything

Pawn on e7, white king on e6, black king on e8.

- **Black to move.** The white king covers d7 and f7, and the pawn covers d8 and f8. There is no check and no move, so it is **stalemate**: a draw.
- **White to move.** 1. Kf6 Kd7 2. Kf7, and the pawn promotes. White wins.

## The rook's pawn

If the pawn is on the **a**- or **h**-file and the weaker side's king has reached the promotion corner, it is a **draw**, even if the stronger side's king is close by. The king cannot be driven out of the corner, and in the end it is stalemate.

## Exercises

1. What is the main rule for the stronger side?
2. A pawn on d4. Which squares are the key squares?
3. Where must the defending king stand?
4. Why does an endgame with an h-pawn often end in a draw?
5. What helps the defending king hold the square in front of the pawn?

## Answers

1. The king must go in front of the pawn.
2. c6, d6, e6.
3. In front of the pawn.
4. The weaker side's king is in the corner and cannot be driven out.
5. The opposition.`,
      quiz: [
        ["Where should the stronger side's king be?", ["In front of the pawn", "Behind the pawn", "In the corner", "Anywhere"]],
        ["A pawn on e4. Which squares are the key squares?", ["d6, e6, f6", "d5, e5, f5", "d3, e3, f3", "e7, e8"]],
        ["With which pawn is it often a draw if the defender has reached the corner?", ["A rook's pawn (a or h)", "An e-pawn", "A d-pawn", "Any pawn"]],
        ["What should the defending king do?", ["Stand in front of the pawn and keep the opposition", "Always run to the corner", "Go behind the pawn", "Attack the opponent's king from the side"]],
        ["What does correct defence often end in?", ["Stalemate", "Mate", "Promotion to a queen", "Castling"]],
      ],
    },
    "passed-pawns": {
      objectives: ["Recognise a passed pawn", "Tell a protected passed pawn from an outside passed pawn", "Create a passed pawn", "Stop the opponent's passed pawn"],
      content: `## What is a passed pawn

A **passed** pawn is one with **no opposing pawns** in front of it or on the neighbouring files that could stop it. Its path to promotion is open.

The rule: **"passed pawns must be pushed"**.

## Types

| Type | What it is | Why it is strong |
|---|---|---|
| Protected | Defended by one of your pawns | It is hard to capture |
| Outside | Far from the other pawns, usually on the edge | It distracts the opponent's king |
| Connected | Two passed pawns side by side | They protect each other |

## How to create one

If you have **more** pawns than your opponent on one wing, your **majority** can create a passed pawn. For example, three pawns against two on the queenside.

## How to stop one

- The best defender is a piece on the square **in front of** the pawn, especially the king or a knight. This is called a **blockade**.
- A rook is strongest **behind the pawn**, whether it is your passed pawn or the opponent's.

## Exercises

1. What is a passed pawn?
2. What does the rule about passed pawns say?
3. Why is an outside passed pawn strong?
4. What is the best way to stop a passed pawn?
5. Where is it best to put a rook in relation to a passed pawn?

## Answers

1. A pawn with no opposing pawns in front of it or on the neighbouring files.
2. It must be pushed.
3. It draws the opponent's king away from the other wing.
4. Put a piece on the square in front of it (a blockade).
5. Behind the pawn.`,
      quiz: [
        ["Which pawn is called a passed pawn?", ["One whose path is not blocked by opposing pawns", "One that has already moved", "One that has captured a piece", "One that stands in the centre"]],
        ["Where is a rook best placed in relation to a passed pawn?", ["Behind the pawn", "In front of the pawn", "Next to the pawn", "In the corner"]],
        ["What is a blockade?", ["A piece on the square in front of the pawn", "Two connected rooks", "Mate in the corner", "An exchange of pawns"]],
        ["How can a passed pawn be created?", ["With a pawn majority on a wing", "Only by castling", "Only with a knight", "By giving up the queen"]],
        ["Why is an outside passed pawn useful?", ["It distracts the opponent's king", "It cannot be captured", "It always moves two squares", "It becomes a king"]],
      ],
    },
    "rook-endgames": {
      objectives: ["Keep the rook active", "Cut off the opponent's king along a file", "Put the rook behind a passed pawn", "Know the idea of the Philidor defence"],
      content: `## The most common endgame

Rook endgames are the most common endgames in real games. People say that "all rook endgames are drawn", but that is a joke: they need precise play.

## Three rules

1. **An active rook:** the rook should attack and give checks, not defend passively.
2. **The rook behind the passed pawn:** behind your own pawn the rook helps it forwards; behind the opponent's pawn it chases it.
3. **Cut off the king:** a rook on a file or rank stops the opponent's king from reaching the pawn.

## The Philidor defence

This is a well-known way of defending when one side has a rook and pawn and the other only a rook. It is named after the French chess player and musician **François-André Philidor** (18th century).

1. The defending king stands on the square **in front of** the pawn.
2. The defending rook stands on the **3rd rank** from its own side (the 6th for Black) and does not let the opponent's king forward.
3. When the pawn advances to that rank, the rook drops back and **gives checks from behind**. The king has nowhere left to hide.

## The Lucena position

For the stronger side there is the well-known **Lucena** position, which is won by "building a bridge": the rook shields its own king from checks. You will study it later.

## Exercises

1. What is the first rule of rook endgames?
2. Where is it best to put the rook in relation to your own passed pawn?
3. What does "cut off the king" mean?
4. On which rank does Black's rook stand in the Philidor defence?
5. What does the defending rook do when the pawn advances?

## Answers

1. The rook must be active.
2. Behind the pawn.
3. Block a line with the rook so that the king cannot cross it.
4. The 6th.
5. It drops back and gives checks from behind.`,
      quiz: [
        ["What should the rook be like in the endgame?", ["Active", "Passive", "Always in the corner", "Always in front of the pawn"]],
        ["Who is the well-known defence named after?", ["Philidor", "Lucena", "Petrosian", "Kasparov"]],
        ["On which rank does Black's rook stand in the Philidor defence?", ["The 6th", "The 8th", "The 1st", "The 4th"]],
        ["How is the Lucena position won?", ["By building a bridge", "By stalemate", "By taking the king to the corner", "By exchanging the pawn"]],
        ["What does \"cut off the king\" mean?", ["Block a line with the rook so that the king cannot cross", "Capture the king", "Give check with a knight", "Castle"]],
      ],
    },
    combinations: {
      objectives: ["Explain what a combination is", "Recognise a sacrifice", "Use decoying and deflection", "Analyse Légal's Mate"],
      content: `## What is a combination

A **combination** is a series of forcing moves, often **with a sacrifice**, that leads to mate or a material advantage.

A **sacrifice** is when a player deliberately gives up a piece to gain something bigger.

## Techniques

| Technique | Idea |
|---|---|
| Decoy | With a sacrifice we lure an opponent's piece (often the king) onto a bad square |
| Deflection | We force a defending piece to leave an important square |
| Line opening | With a sacrifice we open a file or a diagonal |
| Square clearance | Our piece moves away to make room for another |

## Légal's Mate

This combination is named after the French chess player **Légal** (18th century).

1. e4 e5 2. Nf3 d6 3. Bc4 Bg4 4. Nc3 g6? 5. Nxe5! Bxd1?? 6. Bxf7+ Ke7 7. Nd5#

White **sacrificed the queen**. Black took it, but three minor pieces mated the king. Black should have played 5...dxe5 and lost only a pawn.

## How to find a combination

1. Look at the **weak squares** around the opponent's king.
2. Check all **checks and captures**, even ones that seem "impossible".
3. Calculate to the end: what happens after the opponent's best reply?

## Exercises

1. What is a combination?
2. What is a sacrifice?
3. What is the idea of deflection?
4. Which piece does White sacrifice in Légal's Mate?
5. How should Black have answered 5. Nxe5?

## Answers

1. A series of forcing moves that leads to mate or an advantage.
2. Deliberately giving up a piece to gain something bigger.
3. To force a defending piece to leave an important square.
4. The queen.
5. 5...dxe5.`,
      quiz: [
        ["What is a sacrifice?", ["Deliberately giving up a piece for a bigger gain", "An accidental mistake", "Castling", "A draw offer"]],
        ["Which move ends Légal's Mate?", ["Nd5#", "Qxf7#", "Bxf7#", "Ra8#"]],
        ["Which technique lures the king onto a bad square?", ["Decoy", "Blockade", "Opposition", "Castling"]],
        ["What is deflection?", ["Drawing a defending piece away from an important square", "Hiding the king", "Promoting a pawn", "Bringing the queen out early"]],
        ["How is a combination different from ordinary moves?", ["It is forcing and calculated to the end", "It always starts with a pawn", "It is only allowed in the opening", "It always ends in a draw"]],
      ],
    },
    "middlegame-plans": {
      objectives: ["Evaluate a position", "Recognise weak pawns", "Put rooks on open files", "Find a good square for a knight"],
      content: `## The middlegame

The **middlegame** is the stage after the opening. Here you need a **plan**, not just moves.

## Evaluating the position

Before making a plan, compare:

| What | Question |
|---|---|
| Material | Who has more points? |
| King safety | Whose king is more exposed? |
| Piece activity | Whose pieces control more squares? |
| Pawn structure | Who has weak pawns? |

## Weak pawns

| Type | What it is |
|---|---|
| Doubled | Two pawns on the same file |
| Isolated | No friendly pawns on the neighbouring files |
| Backward | Left behind its neighbours and cannot advance safely |

Such pawns become **targets** for the opponent.

## Good squares for the pieces

- **Rooks:** an open file with no pawns on it. A rook on the 7th rank (the 2nd for Black) is very strong.
- **Knight:** an **outpost**, that is, a protected square on the opponent's side from which the opponent's pawns cannot drive the knight away.
- **Bishop:** a long open diagonal. Two bishops together are strong in an open position.

## How to make a plan

1. Find the weakest point in the position: yours and your opponent's.
2. Choose a target: a weak pawn, a weak square or the king.
3. Move your worst piece to a good square.

## Exercises

1. What is the middlegame?
2. Name four criteria for evaluating a position.
3. What is an isolated pawn?
4. Where should the rooks be put?
5. What is an outpost for a knight?

## Answers

1. The stage of the game after the opening.
2. Material, king safety, piece activity, pawn structure.
3. A pawn with no friendly pawns on the neighbouring files.
4. On open files.
5. A protected square on the opponent's side from which pawns cannot drive the knight away.`,
      quiz: [
        ["Which pawns are called doubled?", ["Two pawns on the same file", "Two pawns side by side", "Passed pawns", "Promoted pawns"]],
        ["Where are rooks stronger?", ["On open files", "In the corners behind pawns", "Always on their starting squares", "In front of the centre pawns"]],
        ["What is an outpost?", ["A protected square for a knight on the opponent's side", "A corner square", "The king's square", "A promotion square"]],
        ["Which of these criteria is used to evaluate a position?", ["King safety", "The colour of the pieces", "The size of the board", "The shape of the clock"]],
        ["Which piece should a plan improve first?", ["The one that stands worst", "The strongest one", "Always the king", "A random one"]],
      ],
    },
    "attacking-the-king": {
      objectives: ["List the conditions for an attack", "Bring pieces over to the kingside", "Open lines near the king", "Recognise the bishop sacrifice on h7"],
      content: `## When to attack?

An attack on the king succeeds when:

1. The opponent's king **has not castled** or its defence is **weakened**.
2. You have **more pieces** near the king than the opponent has for defence.
3. The centre is **closed or stable**, so the opponent cannot counter-attack there.

## Steps of the attack

| Step | What to do |
|---|---|
| 1. Gather forces | Bring the queen, knights and bishops to the kingside |
| 2. Open lines | Advance pawns or break the defence with a sacrifice |
| 3. Bring in the rooks | Bring the rooks to an open file or along the 3rd rank |
| 4. The decisive blow | A combination or mate |

## The bishop sacrifice on h7

This is a well-known technique. Black has castled kingside, the king is on g8, and the pawn on h7 is defended only by the king.

- The white bishop is on d3, a knight can go to g5, and the queen can come to h5.
- **Bxh7+!** Kxh7, then **Ng5+** and **Qh5**, and White threatens mate on h7.

Each time, check: can Black defend, for example with a knight on f6?

## The defender

- Do not weaken the pawns near your king without a reason.
- Exchange the attacking pieces.
- **Counter-attack in the centre**: this is the best answer to an attack.

## Exercises

1. Name three conditions for a successful attack.
2. What does "open lines" mean?
3. Which pawn is defended only by the king after kingside castling?
4. Which pieces take part in the classic sacrifice on h7?
5. What is the best answer to an attack?

## Answers

1. The king is poorly defended, you have more pieces near the king, the centre is stable.
2. Free the files and diagonals near the king with pawns or a sacrifice.
3. h7.
4. The bishop, the knight and the queen.
5. A counter-attack in the centre.`,
      quiz: [
        ["Which of these conditions is needed for a successful attack?", ["More of your pieces near the king", "Exchanging the queen", "Opening the centre in the opponent's favour", "Leaving your own king in the centre"]],
        ["Which sacrifice starts the classic attack on h7?", ["Bxh7+", "Qxh7", "Rxh7", "Nxh7"]],
        ["What is the best answer to an attack on the wing?", ["A counter-attack in the centre", "Pushing all your pawns", "Taking the king to the centre", "Doing nothing"]],
        ["What must be done before an attack?", ["Gather forces on the kingside", "Exchange all the pieces", "Offer a draw", "Leave the rooks in the corners"]],
        ["Why should you not move the pawns near your king without a reason?", ["It weakens the king's defence", "The rules forbid it", "It causes stalemate", "It always makes castling impossible"]],
      ],
    },
    "world-champions": {
      objectives: ["Talk about the origin of chess", "Name several world champions", "Know when the first world championship match took place", "Explain what FIDE is"],
      content: `## The origin of chess

The ancestor of chess, **chaturanga**, appeared in **India** about 1,500 years ago. From there the game reached **Persia** (shatranj), then the Arab world and Europe. The modern rules, with a powerful queen, took shape in Europe **at the end of the 15th century**.

## FIDE

**FIDE**, the International Chess Federation, was founded in **1924** in Paris. It organises the world championships and the Chess Olympiads. **20 July** is celebrated as International Chess Day.

## Some champions

| Champion | Country | Years |
|---|---|---|
| Wilhelm Steinitz (1st) | Austria, USA | 1886–1894 |
| José Raúl Capablanca | Cuba | 1921–1927 |
| Mikhail Botvinnik | USSR | 1948–1957, 1958–1960, 1961–1963 |
| **Tigran Petrosian** (9th) | USSR (Armenia) | 1963–1969 |
| Robert Fischer | USA | 1972–1975 |
| Garry Kasparov | USSR, Russia | 1985–2000 |
| Magnus Carlsen | Norway | 2013–2023 |
| Gukesh Dommaraju (18th) | India | since 2024 |

The first official world championship match took place in **1886**, when Steinitz beat Johannes Zukertort.

There is also a women's world championship. One of the strongest women players ever is **Judit Polgár** (Hungary): she played against men and was in the world's top ten.

## Exercises

1. In which country did the ancestor of chess appear?
2. What was the Indian ancestor of chess called?
3. When was FIDE founded?
4. Who was the first world champion?
5. Which number world champion was Tigran Petrosian?

## Answers

1. India.
2. Chaturanga.
3. In 1924.
4. Wilhelm Steinitz.
5. The 9th.`,
      quiz: [
        ["Who was the first world champion?", ["Wilhelm Steinitz", "Garry Kasparov", "Robert Fischer", "Magnus Carlsen"]],
        ["In which country did the ancestor of chess appear?", ["India", "Greece", "France", "China"]],
        ["What is FIDE?", ["The International Chess Federation", "A chess opening", "A chess clock", "A kind of mate"]],
        ["When is International Chess Day celebrated?", ["20 July", "1 January", "8 March", "31 December"]],
        ["Who was world champion in 1963–1969?", ["Tigran Petrosian", "Mikhail Botvinnik", "Robert Fischer", "José Raúl Capablanca"]],
      ],
    },
    "chess-in-armenia": {
      objectives: ["Talk about Tigran Petrosian", "List the Armenian team's Olympiad victories", "Explain why chess is a compulsory subject in Armenian schools", "Name present-day Armenian chess players"],
      content: `## Tigran Petrosian

**Tigran Petrosian** (1929–1984) was born in Tbilisi into an Armenian family. In **1963** he beat Mikhail Botvinnik and became the **9th world champion**. In 1966 he defended his title in a match against Boris Spassky and remained champion until **1969**.

Petrosian was called **"Iron Tigran"**: his defence was almost impossible to break through. He was known for **prophylactic** play, that is, stopping his opponent's plans in advance, and for exchange sacrifices (a rook for a minor piece).

The Tigran Petrosian Chess House works in Yerevan.

## Olympiad victories

The Armenian men's team has won the **Chess Olympiad** three times:

| Year | City |
|---|---|
| 2006 | Turin (Italy) |
| 2008 | Dresden (Germany) |
| 2012 | Istanbul (Turkey) |

In 2011 the team also won the **World Team Championship**. Among the team's leaders in those years were **Levon Aronian**, **Vladimir Akopian** and **Gabriel Sargissian**. Levon Aronian was among the world's strongest players for many years, and since 2021 he has played for the US federation.

## Chess at school

In **2011** Armenia became one of the first countries in the world to make chess a **compulsory school subject** in grades 2–4. The aim is to develop:

- logical thinking,
- attention and patience,
- the ability to make decisions and take responsibility for them,
- the habit of accepting defeat with dignity and learning from it.

## Exercises

1. When did Tigran Petrosian become world champion?
2. Why was Petrosian called "Iron Tigran"?
3. In which years did the Armenian team win the Chess Olympiad?
4. When did chess become a compulsory subject in Armenian schools?
5. What skills does chess develop?

## Answers

1. In 1963.
2. His defence was almost impossible to break through.
3. 2006, 2008, 2012.
4. In 2011.
5. Logic, attention, patience, decision-making.`,
      quiz: [
        ["Whom did Tigran Petrosian beat in 1963 to become world champion?", ["Mikhail Botvinnik", "Robert Fischer", "Garry Kasparov", "Magnus Carlsen"]],
        ["How many times has the Armenian team won the Chess Olympiad?", ["3", "1", "2", "5"]],
        ["In which city did Armenia win the 2012 Olympiad?", ["Istanbul", "Turin", "Dresden", "Moscow"]],
        ["In which grades is chess compulsory in Armenia?", ["2–4", "1–12", "5–9", "10–12"]],
        ["What was Tigran Petrosian called?", ["\"Iron Tigran\"", "\"The Magician from Riga\"", "\"The King of Chess\"", "\"Fast Tigran\""]],
      ],
    },
  },
};
