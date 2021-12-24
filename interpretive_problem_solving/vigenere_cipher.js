/* eslint-disable id-length */
/* vigenere_cipher.js

Vigenere Cipher

The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword. Each
letter of the keyword is treated as a shift value. For instance, the letter 'B'
corresponds to a shift value of 1, and the letter 'd' corresponds to a shift
value of 3. In other words, the shift value used for a letter is equal to its
index value in the alphabet. This means that the letters 'a'-'z' are equivalent
to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character. To
make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't
in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts
alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword
doesn't matter—in other words, the resulting encryption won't change depending
on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

https://en.wikipedia.org/wiki/Tabula_recta

For a quick lookup of a ciphertext per character, you may consult this tabula
recta. Each row of the table corresponds to a Caesar Cipher encryption using the
columns' character letter as a shift value. */

/* PEDAC

Understand the Problem:
- input
  - string
- output
  - string with alphabetical chars 'encrypted', [^a-zA-Z] remain unchanged
- rules
  - supplied keyword provides (repeating) series of shift values
  - keyword case is not a factor, iow A-Z and a-z are both 0-25
  - an instance of using keyword for shift value is not used for whitespace
    other chars that are [^a-zA-Z]

- clarifying questions
  - do we need to handle empty or missing arguments?

Examples/test cases:
- happy path
  - 'Pineapples don't go on pizzas!', 'meat' => 'Bmnxmtpeqw dhz'x gh ar pbldal!'
  - 'a!b C.', 'cat' => 'c!b V.'
- edge cases(bounds/emptiness)
  -

Data structure:
  - use helper method and two constants to store caesar shift tables
  - generate array of 'keywords' that is equal to or greater than length of
    given string Math.ceil(str.length / keyword.length)
  - use LOWERS as lookup table for shift value

Algorithm:
  - declare (result) to ''
  - declare (message) to given string split on ''
  - declare (shiftTable) and assign return of keyword lowercased and repeated n
    times where n is the given string length divided by the keyword length and
    rounded up
  - use helper method to create UPPERS and LOWERS array of chars for the shift
  - declare (keyCounter) to 0
  - iterate through each char in message
    - if char is [a-zA-Z] then call caesar shift on that char WITH the index of
      keycounter, and shift the value of that char looked up in LOWERS
      - then concat the return value with (result) and
      - iterate keywordCounter by 1
    - else concat char with (result)

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

function caesarEncrypt(char, shiftNum) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return UPPERS[UPPERS.indexOf(char) + shiftNum];
  } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return LOWERS[LOWERS.indexOf(char) + shiftNum];
  } else {
    return char;
  }
}

function vigenereCipher(str, key) {
  let result = '';
  let shiftTable = key.toLowerCase().repeat(Math.ceil(str.length / key.length));
  let keyCounter = 0;

  str.split('').forEach(char => {
    if (/[a-zA-Z]/.test(char)) {
      result += caesarEncrypt(char, LOWERS.indexOf(shiftTable[keyCounter]));
      keyCounter += 1;
    } else {
      result += char;
    }
  });

  return result;
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat")
  === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher('a!b C.', 'cat') === 'c!b V.');
console.log(vigenereCipher('Dog', 'Rabbit') === 'Uoh');
console.log(vigenereCipher("Pineapples don't go on pizzas!", "cab")
  === "Riogaqrlfu dpp't hq oo riabat!");

console.log(vigenereCipher("okay, it is not a **hard** problem per se, and it didn't take me two hours, but still a good exercise and I find the cipher ones fun.", "raven"));

