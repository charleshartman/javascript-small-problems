/* exercise_9.js

Letter Counter Part 1

Write a function that takes a string consisting of one or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */

"use strict";

function wordSizes(str) {
  const counts = {};
  const words = str.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let wordSize = words[index].length;
    if (wordSize === 0) continue;

    if (counts[wordSize]) {
      counts[wordSize] += 1;
    } else {
      counts[wordSize] = 1;
    }
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

/* algorithm:
  - guard clause for empty string (!str)
  - declare variable (words) and assign to it the value of str.split(' ')
  - declare variable counts and assign to it an empty object literal {}
  - iterate through (words)
    - add the length of each word as a k-v pair
      - if key exists then value += 1
      - else new key-value to 1
  - return (counts)
*/
