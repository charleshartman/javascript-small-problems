/* eslint-disable max-len */
// reverse_letters_leave_punc.js

// Given an array of strings in which each string may or may not contain
// punctuation, return a copy of the array in which the alphabetical characters
// are in reverse order, but the punctuation stays in the same place.

/* PEDAC

Understand the Problem:
- input
  - an array of strings, each of which may or may not contain punctuation
- output
  - a new array of strings, where the non-punc chars have been reversed, but
    the punctuation stays in the same place (iow the same index)
- rules
  - reverse the chars in each string in the given array while maintaining the
    position of the punctuation
  - punctuation includes [.?'!-]

- clarifying questions
  - clarify what is considered punctuation
  - clarify if -_ are possible and if they should be reversed

Examples/test cases:
- happy path
  - (["bill's", "TED!", "ring?", "wasn't", "Charles'", "meat"])
    // ["slli'b", "DET!", "gnir?", "tnsa'w", "selrahC'", "taem"]
- edge cases(bounds/emptiness)
  - ([]) // []
  - (["jim-beam"]) // ["mae-bmij"]

Data structure:
  - iterate over given array
  - new array to hold (result)
  - object (placePunctuation) to hold punc inventory for each string, keys will
    be index and values will be punc mark

Algorithm:
  - declare (result) to []
  - iterate over given array with forEach
    - declare (placePunc) to {}
    - split string('') to (chars)
    - iterate over split string (chars)
      - if char is punc
        - add punc as key and index as value to (placePunc)
    - use replace to remove all punc from (chars)
    - reverse (chars)
    - iterate over keys in (placePunc)
      splice back in each punc mark
    - join (chars)
    - push resultant string to (result)

  - return result

Code.

*/

"use strict";

function preservePunctuation(arr) {
  let result = [];
  arr.forEach((str) => {
    let placePunc = {};
    let chars = str.split('');
    chars.forEach((char, index) => {
      if (/[.?'!-]/.test(char)) {
        placePunc[index] = char;
      }
    });
    chars = chars.join('').replace(/[.?'!-]/g, '').split('').reverse();
    Object.keys(placePunc).forEach((key) => chars.splice(key, 0, placePunc[key]));
    result.push(chars.join(''));
  });

  return result;
}

console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'",
  "'eard", "why??", "peter", "rabbit"]));
// ["tnah's", "tno'w", "t'nrl'la'y", "nixif'", "'drae", "yhw??", "retep", "tibbar"]);
console.log(preservePunctuation([".?'"]));      // [ ".?'" ]
console.log(preservePunctuation(["bill's", "TED!", "ring?", "wasn't", "Charles'", "meat"]));
// ["slli'b", "DET!", "gnir?", "tnsa'w", "selrahC'", "taem"]
console.log(preservePunctuation([]));           // []
console.log(preservePunctuation(["jim-beam"])); // ["mae-bmij"]
