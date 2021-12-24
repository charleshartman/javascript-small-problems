/* exercise_4.js

Capitalize Words

Write a function that takes a string as an argument and returns that string
with the first character of every word capitalized and all subsequent characters
in lowercase.

You may assume that a word is any sequence of non-whitespace characters. */

function wordCap(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

/* PEDAC
problem/rules:
  - return a string with the first letter of each word capitalized (if that
    letter is alphabetic)

input: string
output: string

clarifying questions:

examples/test cases:
'you can call me "jim"' -> 'You Can Call Me "jim"'

data structure: string, array

algorithm:
  - declare (result) and assign []
  - iterate through elements of given string (split on ' ')
    - if first index in element is [a-z]
      - then push element[0].toUpperCase + element.slice(1) into (result)
    - else push element into (result)
  - return result joined on ' '

*/