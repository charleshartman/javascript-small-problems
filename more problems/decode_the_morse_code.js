/* decode_the_morse_code.js

Part of Series 1/3
This kata is part of a series on the Morse code. After you solve this kata,
you may move to the next one.

In this kata you have to write a simple Morse code decoder. While the Morse
code is now mostly superseded by voice and digital data communication channels,
it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes".
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit
1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital
letters are used. When the message is written in Morse code, a single space is
used to separate the character codes and 3 spaces are used to separate words.
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be
ignored.

In addition to letters, digits and some punctuation, there are some special
service codes, the most notorious of those is the international distress signal
SOS (that was first issued by Titanic), that is coded as ···−−−···. These
special codes are treated as single special characters, and usually are
transmitted as separate words.

Your task is to implement a function that would take the morse code as input
and return a decoded human-readable string.

For example:
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode
characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

CoffeeS/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"

All the test strings would contain valid Morse code, so you may skip checking
for errors and exceptions. In C#, tests will fail if the solution code throws
an exception, please keep that in mind. This is mostly because otherwise the
engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code,
advanced. */

const MORSE_CODE = {
  '.-': 'A', '....': 'H', '---': 'O', '..-': 'U', '.----': '1', '-....': '6',
  '-...': 'B', '..': 'I', '.--.': 'P', '...-': 'V', '..---': '2', '--...': '7',
  '-.-.': 'C', '.---': 'J', '--.-': 'Q', '.--': 'W', '...--': '3', '---..': '8',
  '-..': 'D', '-.-': 'K', '.-.': 'R', '-..-': 'X', '....-': '4', '----.': '9',
  '.': 'E', '.-..': 'L', '...': 'S', '-.--': 'Y', '.....': '5', '-----': '0',
  '..-.': 'F', '--': 'M', '-': 'T', '--..': 'Z',
  '--.': 'G', '-.': 'N',
};

let decodeMorse = function(morseCode) {
  let words = morseCode.trim().split(/\s{2}/g);
  let letters = words.map((word) => word.split(' '));
  let result = letters.map((words) => {
    return words.map((char) => {
      return MORSE_CODE[char];
    }).join('');
  }).join(' ');

  return result;
};

console.log(decodeMorse('.... . .-.. .-.. ---  .-- --- .-. .-.. -..') === "HELLO WORLD");
console.log(decodeMorse('.---- ... -  .- -. -..  ..--- -. -..') === "1ST AND 2ND");
console.log(decodeMorse('.... . -.--   .--- ..- -.. .') === 'HEY JUDE');
console.log(decodeMorse('-.-. .- -') === 'CAT');
console.log(decodeMorse('----. .- .-') === '9AA');
console.log(decodeMorse('') === '');
