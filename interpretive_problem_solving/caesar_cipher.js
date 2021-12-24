/* eslint-disable id-length */
/* caesar_cipher.js

Caesar Cipher

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of
the earliest and simplest ways to encrypt plaintext so that a message can be
transmitted securely. It is a substitution cipher in which each letter in a
plaintext is substituted by the letter located a given number of positions away
in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'. This shift value is often referred
to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this
key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is. The substituted letters are in the same
letter case as the original letter. If the key value for shifting exceeds the
length of the alphabet, it wraps around from the beginning. */

/* PEDAC

Understand the Problem:
- input
  - string which may include any ascii chars
- output
  - string with [a-zA-Z] 'encrypted' by given number rotation
- rules
  - only encrypt [a-zA-Z], other chars remain the same
  - replace lowercase with lowercase, uppercase with uppercase
  - 'encrypt' means right shift each alpha char by the given 'key' value
  - if key value takes us past the end of the alphabet, start again from 'a'
  - given number may be greater than 26

- clarifying questions
  - do we need to deal with:
    - key arguments less than 1
    - empty input or non numeric input

Examples/test cases:
- happy path
  - 'My 8 dogs.', 3 -> 'Pb 8 grjv.'
- edge cases(bounds/emptiness)
  - key arguments larger than 26
  - shifting past length of alphabet

Data structure:
  - split string to array on '' for simplicity and list processing methods
  - create arrays of upper and lower chars for calculating replacements

Algorithm:
  - create to arrays (UPPER) and (LOWER) and assign to range of A..Z/a..z twice
  - declare (chars) and split given string on ''
  - declare (key) and assign to validated given key num, if > 26, num - 26,
    otherwise given num
  - return (chars) mapped to shifted chars where appropriate
    - if char code is within range of (UPPER)
      - then replace with index of that char in UPPER + key
    - if char code is within range of (LOWER)
      - then replace with index of that char in UPPER + key
    - else map existing char

  - subprocess (generateCipherTable)
    - create two arrays UPPER and LOWER that contain 2 runs of A..Z and a..z
      - use loop and ascii char code ranges to iterate through ranges and push
        each char into resultant array

Code.

*/

"use strict";

function generateCipherTable(start, end, num = 1) {
  let cipherTable = [];
  for (let i = 1; i <= num; i++) {
    for (let j = start; j <= end; j++) {
      cipherTable.push(String.fromCharCode(j));
    }
  }

  return cipherTable;
}

const LOWERS = generateCipherTable(97, 122, 2);
const UPPERS = generateCipherTable(65, 90, 2);

function caesarEncrypt(cipherText, shiftNum) {
  let chars = cipherText.split('');
  let key = shiftNum > 26 ? shiftNum - 26 : shiftNum;

  return chars.map((char) => {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return UPPERS[UPPERS.indexOf(char) + key];
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return LOWERS[LOWERS.indexOf(char) + key];
    } else {
      return char;
    }
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// other tests
console.log(caesarEncrypt('My 8 dogs.', 3));
// "Pb 8 grjv."