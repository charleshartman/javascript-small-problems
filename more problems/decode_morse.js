/* decode_morse.js

Oh no! You have stumbled upon a mysterious signal consisting of beeps of
various lengths, and it is of utmost importance that you find out the secret
message hidden in the beeps. There are long and short beeps, the longer ones
roughly three times as long as the shorter ones. Hmm... that sounds familiar.

That's right: your job is to implement a decoder for the Morse alphabet. Rather
than dealing with actual beeps, we will use a common string encoding of Morse.
A long beep is represened by a dash (-) and a short beep by a dot (.). A series
of long and short beeps make up a letter, and letters are separated by spaces
( ). Words are separated by double spaces.


Examples:
.... . .-.. .-.. ---  .-- --- .-. .-.. -..   → "hello world"
.---- ... -  .- -. -..  ..--- -. -..         → "1st and 2nd"
'.... . -.--   .--- ..- -.. .'

*/

/* PEDAC

Understand the Problem:
  input
  - a string, words separated by two spaces, letters by one space
  output
  - a string of alphanumeric chars with one white space between words

- rules & definitions:
  explicitly stated
  - two spaces between words
  - one space between letters
  - use MORSE_CODE dictionary

  implicitly identified
  - retain spaces between words


- clarifying questions & answers
  -

Examples/test cases:
  happy path(generic)
  - '-.-. .- -' === 'cat'
  - '----. .- .-' === '911'

  edge cases(boundaries/emptiness)
  - '' === ''
  - invalid morse returns '***' for that char?

Mental model:
  -

Data structure:
  - split string by double space, then split by single space in subs
    - so array of subarrays
  - get chars by iterating through each subarray, transposing each element
  - return new string (joined array)

Algorithm:
  - declare (words) and intialize to string split on (/\s{2}/g)
  - declare (letters) initialize on mapping (words (split) on ' '
  - declare (result) and map (letters) based on MORSE_CODE lookup
  - join subarrays ('')
  - join array (' ')
  - return (result)

Code.

*/

"use strict";

function decode(str) {
  const MORSE_CODE = {
    '.-': 'a', '....': 'h', '---': 'o', '..-': 'u', '.----': '1', '-....': '6',
    '-...': 'b', '..': 'i', '.--.': 'p', '...-': 'v', '..---': '2', '--...': '7',
    '-.-.': 'c', '.---': 'j', '--.-': 'q', '.--': 'w', '...--': '3', '---..': '8',
    '-..': 'd', '-.-': 'k', '.-.': 'r', '-..-': 'x', '....-': '4', '----.': '9',
    '.': 'e', '.-..': 'l', '...': 's', '-.--': 'y', '.....': '5', '-----': '0',
    '..-.': 'f', '--': 'm', '-': 't', '--..': 'z',
    '--.': 'g', '-.': 'n',
  };

  let words = str.split(/\s{2}/g);
  let letters = words.map((word) => word.split(' '));
  let result = letters.map((words) => {
    return words.map((char) => {
      return MORSE_CODE[char];
    }).join('');
  }).join(' ');

  return result;
}

console.log(decode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..') === "hello world");
console.log(decode('.---- ... -  .- -. -..  ..--- -. -..') === "1st and 2nd");
console.log(decode('.... . -.--   .--- ..- -.. .') === 'hey jude');
console.log(decode('-.-. .- -') === 'cat');
console.log(decode('----. .- .-') === '9aa');
console.log(decode('') === '');

