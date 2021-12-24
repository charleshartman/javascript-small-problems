/* exercise_10.js

Reverse It Part 2

Write a function that takes a string argument containing one or more words
and returns a new string containing the words from the string argument. All
five-or-more letter words should have their letters in reverse order. The
string argument will consist of only letters and spaces. Words will be
separated by a single space. */

"use strict";

function reverseWords(str) {
  const resultArr = [];
  const givenWords = str.split(' ');

  givenWords.forEach((word) => {
    if (word.length >= 5) {
      resultArr.push(word.split('').reverse().join(''));
    } else {
      resultArr.push(word);
    }
  });

  return resultArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/* algorithm
  - declare (resultArr) and assign []
  - declare (givenWords) variable and assign it the given str split on (' ')
  - iterate through (givenWords)
    - if a word's length is 5 or greater
      - reverse the chars in the word by splitting it and reversing and joining
        then push that result into (resultArr)
    - else push word into result unaltered
  - return result joined (' ')
*/