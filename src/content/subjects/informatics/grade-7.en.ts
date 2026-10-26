import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "print and input, variables, types, operations, conditions, loops.",
    "Boolean logic, computer networks, cybersecurity.",
  ],
  lessons: {
    "python-first-steps": {
      objectives: ["Explain what a programming language is", "Write a program with the print function", "Read data with the input function", "Use variables"],
      content: `## Python

**Python** is a programming language created by **Guido van Rossum** (1991). Its programs are easy to read; it is used for websites, in science and in artificial intelligence. You can work in **IDLE**, **Thonny** or online (for example, replit.com).

## print

The \`print\` function displays text or a number on the screen.

\`\`\`python
print("Hello, world")
print(2 + 3)
print("My age is", 12)
\`\`\`

Output:

\`\`\`
Hello, world
5
My age is 12
\`\`\`

Text (a string) is written in **quotation marks**. Without quotation marks Python tries to calculate it or look it up as a name.

## Variables

A **variable** is a name that stores a value. We set the value with the **=** sign (assignment).

\`\`\`python
name = "Ani"
age = 12
print(name, "-", age, "years old")
\`\`\`

Rules for variable names:

- it starts with a **letter** or \`_\`, not a digit,
- no spaces (\`my_age\`, not \`my age\`),
- capital and small letters are **different** (\`Age\` ≠ \`age\`).

## input

The \`input\` function reads what the user types on the keyboard.

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`

## Comments

Everything written after the \`#\` sign is a **comment**: Python does not run it.

\`\`\`python
# This program greets the user
print("Hello")
\`\`\`

## Exercises

1. Who created Python?
2. What does \`print(10 - 4)\` display?
3. What does \`print("10 - 4")\` display?
4. Which variable name is invalid: \`score\`, \`2nd\`, \`my_name\`?
5. Write a program that asks for the name of a city and displays "I live in ...".

## Answers

1. Guido van Rossum.
2. 6
3. 10 - 4
4. \`2nd\`, because it starts with a digit.
5. \`city = input("City: ")\` and \`print("I live in", city)\`.`,
      quiz: [
        ["What does the print function do?", ["Displays on the screen", "Reads from the keyboard", "Deletes a file", "Restarts the computer"]],
        ["Which sign starts a comment in Python?", ["#", "//", "--", "%"]],
        ["What does print(3 * 4) display?", ["12", "3 * 4", "34", "7"]],
        ["Which is a valid variable name?", ["total_sum", "total sum", "1total", "total-sum"]],
        ["What does the input function do?", ["Reads what the user typed", "Displays a number", "Calculates a sum", "Creates a file"]],
      ],
    },
    "data-types-and-arithmetic": {
      objectives: ["Distinguish the types int, float, str and bool", "Perform arithmetic operations", "Use the // and % operations", "Convert types with int() and str()"],
      content: `## Types

| Type | Meaning | Example |
|---|---|---|
| \`int\` | whole number | \`5\`, \`-12\`, \`0\` |
| \`float\` | decimal number | \`3.14\`, \`-0.5\` |
| \`str\` | string (text) | \`"Yerevan"\`, \`"123"\` |
| \`bool\` | logical | \`True\`, \`False\` |

The \`type()\` function shows the type: \`type(3.5)\` → \`float\`.

## Arithmetic operations

| Operation | Sign | Example | Result |
|---|---|---|---|
| addition | \`+\` | \`7 + 2\` | 9 |
| subtraction | \`-\` | \`7 - 2\` | 5 |
| multiplication | \`*\` | \`7 * 2\` | 14 |
| division | \`/\` | \`7 / 2\` | 3.5 |
| integer division | \`//\` | \`7 // 2\` | 3 |
| remainder | \`%\` | \`7 % 2\` | 1 |
| power | \`**\` | \`7 ** 2\` | 49 |

The **order** of operations is the same as in maths: first \`**\`, then \`*\`, \`/\`, \`//\`, \`%\`, then \`+\`, \`-\`. Brackets change the order.

## Type conversion

\`input()\` always returns a **string**. To work with a number, you have to convert it:

\`\`\`python
a = int(input("First number: "))
b = int(input("Second number: "))
print("Sum:", a + b)
\`\`\`

Without conversion \`"5" + "3"\` gives \`"53"\` (strings are **joined**), not 8.

## Example: minutes

\`\`\`python
minutes = 135
hours = minutes // 60
rest = minutes % 60
print(hours, "h", rest, "min")
\`\`\`

Output: \`2 h 15 min\`.

## Exercises

1. What type is \`"42"\`?
2. What is the result of \`17 // 5\`?
3. What is the result of \`17 % 5\`?
4. What does \`print("2" + "2")\` display?
5. Write a program that converts seconds (for example, 200) into minutes and seconds.

## Answers

1. \`str\`
2. 3
3. 2
4. 22
5. \`s = 200\`, \`print(s // 60, "min", s % 60, "s")\` → 3 min 20 s.`,
      quiz: [
        ["What is the result of 10 / 4 in Python?", ["2.5", "2", "2.0", "3"]],
        ["What is the result of 2 ** 3?", ["6", "8", "9", "5"]],
        ["What type is True?", ["bool", "int", "str", "float"]],
        ["What is 20 % 6?", ["2", "3", "3.33", "0"]],
        ["Why do we need int(input())?", ["input returns a string", "input returns a number", "int displays a number", "Without it the program will not start"]],
      ],
    },
    "conditions-python": {
      objectives: ["Write an if–else statement", "Use comparison operators in Python", "Use elif for several conditions", "Use indentation correctly"],
      content: `## if–else

\`\`\`python
age = int(input("Age: "))
if age >= 18:
    print("You are an adult")
else:
    print("You are not an adult yet")
\`\`\`

Important:

- after the condition comes **\`:\`** (a colon),
- commands that belong to the condition are written with an **indent** (4 spaces). Indentation in Python is **required**.

## Comparisons

| Python | Meaning |
|---|---|
| \`==\` | equal to |
| \`!=\` | not equal to |
| \`<\`, \`>\` | less than, greater than |
| \`<=\`, \`>=\` | less than or equal to, greater than or equal to |

Note: \`=\` is **assignment**, \`==\` is **comparison**.

## elif

For several conditions we use \`elif\` ("else if"):

\`\`\`python
t = int(input("Temperature: "))
if t < 0:
    print("Frost")
elif t < 15:
    print("Cool")
elif t < 25:
    print("Warm")
else:
    print("Hot")
\`\`\`

Python checks the conditions **from top to bottom** and runs the **first** true one.

## Example: even number

\`\`\`python
n = int(input("Number: "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
\`\`\`

## Example: the larger of two numbers

\`\`\`python
a = int(input())
b = int(input())
if a > b:
    print(a)
elif b > a:
    print(b)
else:
    print("Equal")
\`\`\`

## Exercises

1. Which sign comes after an if condition?
2. How is \`=\` different from \`==\`?
3. What does the temperature program display when t = 15?
4. Write a condition that checks whether a number is divisible by 3.
5. Write a program that displays "positive", "negative" or "zero" for a number.

## Answers

1. \`:\` (a colon).
2. \`=\` assigns a value, \`==\` compares.
3. "Warm".
4. \`if n % 3 == 0:\`
5. \`if n > 0: print("positive")\`, \`elif n < 0: print("negative")\`, \`else: print("zero")\`.`,
      quiz: [
        ["Which is the comparison sign in Python?", ["==", "=", ":=", "=>"]],
        ["What does != mean?", ["Not equal to", "Equal to", "Greater than", "Negation"]],
        ["How many spaces are usually in an indent?", ["4", "1", "2", "8"]],
        ["What does the temperature program display when t = -3?", ["Frost", "Cool", "Warm", "Hot"]],
        ["Which word means \"else if\"?", ["elif", "else", "if", "while"]],
      ],
    },
    "loops-python": {
      objectives: ["Write a for loop with range()", "Write a while loop with a condition", "Calculate a sum in a loop", "Avoid an infinite loop"],
      content: `## for and range

\`\`\`python
for i in range(5):
    print("Hello", i)
\`\`\`

Output: Hello 0, Hello 1, Hello 2, Hello 3, Hello 4.

| range | Values |
|---|---|
| \`range(5)\` | 0, 1, 2, 3, 4 |
| \`range(1, 6)\` | 1, 2, 3, 4, 5 |
| \`range(0, 10, 2)\` | 0, 2, 4, 6, 8 |
| \`range(10, 0, -1)\` | 10, 9, ..., 1 |

The last number is **not included**.

## A sum in a loop

\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i
print(total)
\`\`\`

Output: **5050** (the sum of the numbers from 1 to 100).

## while

\`while\` repeats **as long as** the condition is true.

\`\`\`python
n = 1
while n <= 1000:
    n = n * 2
print(n)
\`\`\`

Output: **1024** (the first power of two greater than 1,000).

## Infinite loop

If the condition is **always** true, the loop never ends:

\`\`\`python
x = 1
while x > 0:
    x = x + 1   # x is always positive
\`\`\`

To stop it, press **Ctrl + C**. Check that the variable inside the loop changes **towards** breaking the condition.

## Password check

\`\`\`python
password = ""
while password != "Ararat":
    password = input("Password: ")
print("Access granted")
\`\`\`

## Exercises

1. What values does \`range(2, 7)\` give?
2. How many times does the loop \`for i in range(10)\` run?
3. Write a loop that displays the 5 times table (from 5 × 1 to 5 × 10).
4. What is an infinite loop?
5. Write a while loop that counts how many times 100 must be divided by 2 (integer division) until it becomes 0.

## Answers

1. 2, 3, 4, 5, 6.
2. 10 times.
3. \`for i in range(1, 11): print(5, "x", i, "=", 5 * i)\`
4. A loop whose condition is always true, so it never ends.
5. \`n = 100\`, \`k = 0\`, \`while n > 0: n = n // 2; k = k + 1\`, \`print(k)\` → 7.`,
      quiz: [
        ["How many times is \"Hello\" displayed in the loop for i in range(3)?", ["2", "3", "4", "0"]],
        ["What is the last value in range(1, 6)?", ["5", "6", "1", "0"]],
        ["What is the sum of the numbers from 1 to 10?", ["45", "55", "100", "10"]],
        ["Which loop repeats as long as the condition is true?", ["while", "for", "if", "else"]],
        ["How do you stop an infinite loop?", ["Ctrl + C", "Ctrl + V", "Enter", "Tab"]],
      ],
    },
    "boolean-logic": {
      objectives: ["Explain the operations and, or, not", "Build truth tables", "Write compound conditions in Python", "Solve logic problems"],
      content: `## Logical expressions

A **statement** is a sentence that can be **true** (True, 1) or **false** (False, 0). The English mathematician **George Boole** (19th century) created an "algebra" of operations on statements, on which all computers are based.

## Operations

| Operation | Python | Meaning |
|---|---|---|
| **AND** (conjunction) | \`and\` | true if **both** are true |
| **OR** (disjunction) | \`or\` | true if **at least one** is true |
| **NOT** (negation) | \`not\` | changes the value to the opposite |

## Truth tables

| A | B | A and B | A or B |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

| A | not A |
|---|---|
| 0 | 1 |
| 1 | 0 |

## In Python

\`\`\`python
age = 14
height = 150
if age >= 12 and height >= 140:
    print("You can go on the ride")

day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("Day off")

raining = False
if not raining:
    print("Let's go for a walk")
\`\`\`

## Order

First \`not\`, then \`and\`, then \`or\`. If in doubt, use **brackets**.

**Example**: \`True or False and False\` = \`True or (False and False)\` = \`True or False\` = **True**.

## A range of numbers

"x is between 10 and 20": \`x >= 10 and x <= 20\`. In Python you can also write \`10 <= x <= 20\`.

## Exercises

1. When is \`A and B\` true?
2. When is \`A or B\` false?
3. Evaluate \`not (True and False)\`.
4. Write the condition: "the number is even and greater than 100".
5. Write the condition: "the year is a leap year" (divisible by 4 but not by 100, or divisible by 400).

## Answers

1. When both are true.
2. When both are false.
3. True
4. \`n % 2 == 0 and n > 100\`
5. \`(y % 4 == 0 and y % 100 != 0) or y % 400 == 0\``,
      quiz: [
        ["What is the result of True and False?", ["False", "True", "Error", "None"]],
        ["What is the result of False or True?", ["True", "False", "0", "None"]],
        ["What is the result of not False?", ["True", "False", "0", "Error"]],
        ["Who created the algebra of logic?", ["George Boole", "Alan Turing", "Charles Babbage", "Guido van Rossum"]],
        ["Which year is a leap year?", ["2000", "1900", "2100", "2023"]],
      ],
    },
    "computer-networks": {
      objectives: ["Distinguish local and wide area networks", "Explain IP addresses and DNS", "Describe how a website loads", "Name network devices"],
      content: `## Network

A **computer network** is a set of connected computers that exchange data.

| Kind | Size | Example |
|---|---|---|
| **LAN** (local) | one building or home | a school computer room, home Wi-Fi |
| **WAN** (wide) | cities, countries | the **internet** |

## Devices

| Device | Role |
|---|---|
| **router** | connects the home network to the internet, creates Wi-Fi |
| **switch** | connects computers in one local network |
| **cable**, **optical fibre** | carry the signal |
| **server** | a computer that stores websites and provides services |

## IP address

Every device on a network has an **IP address**, like a house address. For example, \`192.168.1.10\` (IPv4: four numbers 0–255). Because there are few IPv4 addresses (about 4.3 billion), **IPv6** is being introduced.

## DNS

People remember names (\`wikipedia.org\`), while computers remember numbers. **DNS** (the Domain Name System) is a "phone book" that turns a **name** into an **IP address**.

The Armenian domain is **.am** (there is also a domain in the Armenian alphabet).

## How a website loads

1. You type the address in the browser.
2. **DNS** finds the server's IP address.
3. The browser (the **client**) sends a **request** to the **server** (using the HTTP/HTTPS protocol).
4. The server replies with the page (HTML, images).
5. The browser displays the page.

Data travels in small **packets**, which can take different routes and are put back together at the end.

The letter **S** in **HTTPS** stands for "secure": the data is **encrypted**. The browser shows this with a padlock icon.

## Exercises

1. How is a LAN different from a WAN?
2. What is an IP address?
3. What is DNS for?
4. What does the letter "S" in HTTPS mean?
5. Describe the steps of loading a website.

## Answers

1. A LAN is in one building; a WAN covers cities and countries.
2. The numeric address of a device on a network.
3. To turn a domain name into an IP address.
4. Secure: the data is encrypted.
5. Address → DNS → request to the server → reply → display.`,
      quiz: [
        ["What is the internet?", ["A wide area network", "A local network", "A program", "A device"]],
        ["Which is an IPv4 address?", ["192.168.1.10", "www.am", "C:/Users", "ab:cd"]],
        ["Which device creates home Wi-Fi?", ["Router", "Monitor", "Printer", "Scanner"]],
        ["What is Armenia's domain?", [".am", ".ar", ".hy", ".ra"]],
        ["Why is HTTPS better than HTTP?", ["The data is encrypted", "It is more colourful", "It is shorter", "It does not need the internet"]],
      ],
    },
    "cybersecurity": {
      objectives: ["Recognise the signs of phishing", "List types of malware", "Use two-factor authentication", "Draw up personal safety rules"],
      content: `## Threats

| Threat | What it is |
|---|---|
| **phishing** | a fake email or website that "pretends" to be a bank, school or game and tricks you into giving your password |
| **virus** | a program that spreads through files and harms the computer |
| **worm** | spreads across the network on its own |
| **Trojan** | malware disguised as a "useful" program |
| **ransomware** | encrypts files and demands money |
| **spyware** | steals data |

## Signs of phishing

- It **rushes** you: "Your account will be blocked in 1 hour".
- It asks for your **password** or bank card details.
- The sender's address is **strange** (\`support@g00gle-security.xyz\`).
- It has **spelling** mistakes.
- The link leads to a **different** site from the one written.
- It promises a **gift** or a prize in a contest you never entered.

Real organisations **never** ask for your password by email.

## Protection

1. **Update** the operating system and programs.
2. Use **antivirus** software.
3. Download programs only from **official** stores.
4. Use **different** strong passwords and a **password manager**.
5. Turn on **two-factor authentication** (2FA).
6. Make **backups**.

## Two-factor authentication

Besides the password, a **second** confirmation is required, for example a **code from an SMS** or a code from an app on your phone. Even if an attacker learns the password, they cannot log in without the phone.

## Exercises

1. What is phishing?
2. List three signs of phishing.
3. How is a Trojan different from a worm?
4. How does two-factor authentication work?
5. What should you do if you get a suspicious email "from the bank"?

## Answers

1. A fake email or website that tries to steal data.
2. It rushes you, asks for a password, has a strange address.
3. A Trojan pretends to be a useful program; a worm spreads across the network on its own.
4. Besides the password, a second code is required (for example, from the phone).
5. Do not open the link, do not reply, call the bank on its official number, tell your parents.`,
      quiz: [
        ["Which is a sign of phishing?", ["It asks for a password by email", "It came from a friend about a lesson", "It has an official stamp", "It asks for nothing"]],
        ["What does ransomware do?", ["Encrypts files and demands money", "Speeds up the computer", "Cleans the disk", "Updates programs"]],
        ["What is 2FA?", ["Two-factor authentication", "Two files", "Two antivirus programs", "Two computers"]],
        ["Where is it safe to download programs from?", ["Official stores", "Unknown websites", "An email attachment", "Any link"]],
        ["Why are updates needed?", ["They close vulnerabilities", "They change the background", "They delete files", "They slow the computer down"]],
      ],
    },
  },
};
