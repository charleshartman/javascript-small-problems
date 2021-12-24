// scramblies.js

/* Complete the function scramble(str1, str2) that returns true if a portion of
str1 characters can be rearranged to match str2, otherwise returns false.

Notes: Only lower case letters will be used (a-z). No punctuation or digits
will be included.

Performance needs to be considered
Input strings s1 and s2 are null terminated. */

/* PEDAC
understand the Problem
input: STRING, only lowercase i.e. only [a-z], no punc, no numerics
output: BOOLEAN

rules:
  - return TRUE if we can construct string2 from letters present in string1
  - we may only use each char in string1 once
  - we do not need to use all the chars in string1

clarifying questions:
  - confirm that we may only use each char in string1 one time
  - null terminated?

Examples/test cases:
- generic cases/happy path :)
  - 'tethic', 'teeth' // => False
  - 'rentyidipsand', 'serendipity' // => False
  - 'olleh', 'hello' => True
- edge cases
  - 'hello', '' => false guard clause?
  - 'ask', 'cask' => false guard clause?
  - '', 'cat' => false

Data structure:
- What is the most efficient O(N) time that you can imagine?
  - O(C = N + M) where C is the total number of characters in both strings
  - O(N + M) where N is the length of the first string, M is the length of the
    second string
- str1: hash, key: char value: count of that character
- str2: array of character

Algorithm:
  - guard: (if str1 or str2 is empty) OR (if str1 < str2) => return false
  - iterate over str1 and create a hash as described above
  - create an array of characters from string 2
  - iterate over the array of characters str2
    - look up the current character in the str1 hash
    - if the value is 0 return false
    - otherwise decrement the value (letter count) by 1
  - finished iteration, return true

Code.
*/

"use strict";

function scramble(str1, str2) {
  if ((!str1 || !str2) || (str1.length < str2.length)) return false;

  let availableTiles = {};
  str1.split('').forEach((char) => {
    if (availableTiles[char]) {
      availableTiles[char] += 1;
    } else {
      availableTiles[char] = 1;
    }
  });

  let wordChoice = str2.split('');
  for (let idx = 0; idx < wordChoice.length; idx++) {
    if (availableTiles[wordChoice[idx]]) {
      availableTiles[wordChoice[idx]] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(scramble('tethic', 'teeth'));                   // false
console.log(scramble('rentyidipsand', 'serendipity'));      // false
console.log(scramble('olleh', 'hello'));                    // true
console.log(scramble('hello', ''));                         // false
console.log(scramble('ask', 'cask'));                       // false
console.log(scramble('', 'cat'));                           // false
console.log(scramble('rkqodlw', 'world'));                  // true
console.log(scramble('cedewaraaossoqqyt', 'codewars'));     // true
console.log(scramble('katas', 'steak'));                    // false
