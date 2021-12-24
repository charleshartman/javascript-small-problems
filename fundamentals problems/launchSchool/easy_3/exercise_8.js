/* exercise_8.js

Letter Swap

Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the string
will always contain at least one word. You may also assume that each string
contains nothing but words and spaces, and that there are no leading, trailing,
or repeated spaces. */

"use strict";

function swapper(str) {
  let chars = str.split('');
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
  return chars.join('');
}

function swap(str) {
  let result = [];
  let words = str.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    result.push(swapper(words[index]));
  }

  return result.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/* algorithm
  - main function
    - declare variable (result) and assign ''
    - declare variable (words) and assign value of given string split on ' '
    - iterate through (words) sending each to helper function (swapper)
      - push the return value of each (swapper) call to (result) array
    - return (result) joined with ' '
  - helper function (swapper)
    - declare variable (chars) and assign to given string split on ''
    - swap first and last chars of array using destructuring:
    - return chars (re)joined into str - .join('')
*/

/* Book Solution

function swap(words) {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

Discussion
The solution splits the string into words using a space () as a separator.
It then iterates through all of the words and produces an array of modified
words. It then applies Array.prototype.join to that array to produce the return
value.

The tricky part is the swapping of the first and last characters. During the
iteration, the swapFirstLastCharacters function handles this. The function takes
a word argument and returns the swapped word. The swap happens by building a
string composed of the last character (word[word.length - 1]), the middle
characters (word.slice(1, -1)), and the first character (word[0]). The function
also has a guard clause that checks if the word argument is only a single
character; if it is, it immediately returns that value since it does not need
to swap the letters.

The solution uses the String.prototype.slice method. If you haven't seen this
method before, you may refer to the MDN Documentation.

Further Exploration

How can you refactor this problem using the Array.prototype.map method instead?

*/
