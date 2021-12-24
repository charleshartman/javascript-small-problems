/* eslint-disable max-lines-per-function */
// longest_alpha_substring.js

// Find the longest substring in alphabetical order, in the string.

/* PEDAC

Understand the Problem:
- input
  - one string, could have any characters
- output
  - one string, less than or equal to in length of the input string
- rules
  - explicit
    - longest substring
      - substring => letters must be contiguous
  - implicit
    - doesn't have to start with a
    - non-alphabetical characters "interrupt" the longest substring
      - Whenever we encounter a non alphabetical character, our "current"
        substring ends
    - duplicate characters, even though alphabetical do contribute to
      alphabetical order
      - aabc -> aabc is considered a valid substring
    - if two or more longest substrings are of equal length, pick the one that
      shows up first in the original string
      - e.g., abc def  // abc
    - Alphabetical order does not have to be continuous
      - aef -> This is in alphabetical order

- clarifying questions
  - Does the string only have alphabetical characters? --> no
  - Is this case insensitive? --> yes
  - What should be the minimum substring length? --> 1
  - do we need to handle non-string arguments or no arguments? --> no

Examples/test cases:
- happy path
  - Gilles => G(h)i(jk)lles => Gill
  - Only letters
  - Letters mixed with special characters/ other characters
  - Letters with other characters and mixed case
  - Duplicate consecutive letters in string
  - Several substrings in alphabetical order appear in the string with the
    same length

- edge cases(bounds/emptiness)
  - string with single char substrings ('b a d' => 'b')
  - empty string => ''
  - string with no [a-zA-Z] => ''

Data structure:
  - split string argument to ARRAY with regex, split [^a-zA-Z]
  - O(N) where N is the number of characters in the input string
  - reference object: array or hash ['a'..'z']
    - key: characters, value: index / relative position in the alphabet
    - or use char code


Algorithm:
  - Given a string
  - Split the string by any character except alphabetical ones
  - declare (finalLongest) to ''
  - Iterate through every string, and for every string
    - Create a variable that stores the alphabetical substring that we are
      currently building
      declare (loopLongest) to ''
    - Iterate through every character
      - if current char (lowercased) is greater than or equal to the last
        character in loopLongest (lowercase) then append the original character
        to loopLongest
        'abcdef'
        'abcabcde'
      - else
        - if loopLongest is longer than finalLongest then reassign finalLongest
          to loopLongest
        - reassign loopLongest to currentChar
    - after completing iteration of the current string
      - check if loopLongest > finalongest then reassign finalLongest
  - return finalLongest

  Code.

*/

function longestAlphaSubstring(str) {
  let splitSubstrings = str.split(/[^a-zA-Z]+/g);
  let finalLongest = '';

  splitSubstrings.forEach(currentSubstring => {
    let loopLongest = '';

    for (let index = 0; index < currentSubstring.length; index += 1) {
      let currentChar = currentSubstring[index];

      if (currentChar.toLowerCase() >= loopLongest.slice(-1).toLowerCase()) {
        loopLongest += currentChar;
      } else {
        if (loopLongest.length > finalLongest.length) {
          finalLongest = loopLongest;
        }

        loopLongest = currentChar;
      }
    }

    if (loopLongest.length > finalLongest.length) {
      finalLongest = loopLongest;
    }
  });

  return finalLongest;
}

console.log(longestAlphaSubstring('Gilles'));               // 'Gill'
console.log(longestAlphaSubstring('Gilleszyx'));            // 'Gill'
console.log(longestAlphaSubstring('Gil8les'));              // 'Gil'
console.log(longestAlphaSubstring('GI   LLES'));            // 'GI'
console.log(longestAlphaSubstring('GI   LLES abcd'));       // 'abcd'
console.log(longestAlphaSubstring('abc def GHI'));          // 'abc'
console.log(longestAlphaSubstring('abc_efG_Ijk'));          // 'abc'
console.log(longestAlphaSubstring('abbawhereabc_efG_Ijk')); // 'abb'
console.log(longestAlphaSubstring('b a d'));                // 'b'
console.log(longestAlphaSubstring(''));                     // ''
console.log(longestAlphaSubstring('9'));                    // ''
