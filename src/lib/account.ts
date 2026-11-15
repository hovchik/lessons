/**
 * Rules for what people type about themselves: names other people will see,
 * and new passwords. Pure, so the server and the tests share them.
 */

// Control characters, direction overrides and invisible spaces: a name made of
// them looks empty, or turns the text around it backwards in a teacher's table.
const HIDDEN = /[\u0000-\u001f\u007f-\u009f­؜᠎​‎‏‪-‮⁠-⁤⁦-⁯﻿￹-￻]/g;
const VISIBLE = /[\p{L}\p{N}\p{Extended_Pictographic}]/u;

/**
 * A name as others will see it: hidden characters taken out, spaces squeezed,
 * at most `max` characters. Empty when nothing readable is left.
 */
export function cleanText(raw: string, max: number): string {
  const text = [...raw.normalize("NFC").replace(HIDDEN, "").replace(/\s+/g, " ").trim()].slice(0, max).join("").trim();
  return VISIBLE.test(text) ? text : "";
}

/**
 * Passwords that are tried first by anyone guessing: the most used ones
 * worldwide, and the ones typed on Russian and Armenian keyboards.
 */
const COMMON = new Set([
  "123456", "1234567", "12345678", "123456789", "1234567890", "123123", "123321", "654321", "666666", "111111", "000000",
  "121212", "112233", "123qwe", "1q2w3e", "1q2w3e4r", "1qaz2wsx", "zaq12wsx", "qwerty", "qwerty1", "qwerty123", "qwertyuiop",
  "asdfgh", "asdfghjkl", "zxcvbn", "password", "password1", "passw0rd", "iloveyou", "abc123", "abcdef", "monkey",
  "dragon", "football", "princess", "sunshine", "letmein", "welcome", "admin", "admin123", "secret", "pokemon",
  "minecraft", "roblox", "fortnite", "school", "student", "parol", "parol123", "пароль", "йцукен", "йцукенг",
  "фывапр", "привет", "qwerty12", "գաղտնաբառ", "барев", "barev", "barev123", "hayastan", "armenia", "yerevan", "russia",
]);

/** True when every character is the same, or each one steps by one ("123456", "fedcba"). */
function trivial(p: string) {
  const cps = [...p].map((c) => c.codePointAt(0)!);
  if (cps.every((c) => c === cps[0])) return true;
  const step = cps[1] - cps[0];
  return Math.abs(step) === 1 && cps.every((c, i) => i === 0 || c - cps[i - 1] === step);
}

/**
 * Why a new password is too easy to guess, or null when it will do. Length is
 * checked separately (MIN_PASSWORD), so this only looks at what it says.
 */
export function weakPassword(password: string, username?: string): "password_common" | null {
  const p = password.normalize("NFKC").toLowerCase().trim();
  if (COMMON.has(p) || trivial(p)) return "password_common";
  // "anna2015" for the user "anna": the first thing a classmate would try.
  const u = username?.toLowerCase();
  if (u && u.length >= 3 && p.includes(u) && p.length - u.length <= 4) return "password_common";
  return null;
}
