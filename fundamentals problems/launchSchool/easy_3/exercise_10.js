/* exercise_10.js

Letter Counter Part 2

Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.

*/

"use strict";

function wordSizes(str) {
  if (!str) return {};

  const counts = {};
  const words = str.split(' ');
  const regex = /[a-z]/gi;

  for (let index = 0; index < words.length; index += 1) {
    let wordSize = words[index].match(regex).length;

    if (counts[wordSize]) {
      counts[wordSize] += 1;
    } else {
      counts[wordSize] = 1;
    }
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
