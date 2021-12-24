/* eslint-disable id-length */
/* reverse_and_combine_words.js

Basics 06: Reversing and Combining Text

Your task is to Reverse and Combine Words. It's not too difficult, but there
are some things you have to consider...

So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third
   with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

*/

/* PEDAC

Understand the Problem:
- input
  - string of space separated 'words'
- output
  - a single string with no spaces
- rules
  - reverse every word and join every two successive words until just one
    long string is left
  - every two words are joined after reverse until only one string element
    remains in the array

- clarifying questions
  - empty or wrong type input

Examples/test cases:
- happy path
  - "Hey What do you think" =>
    - yeHtahW oduoykniht =>
      - 'WhatHeythinkdodo'
- edge cases(bounds/emptiness)
  - "tanspan" = napsnat

Data structure:
  - array to hold array of words
  - looping/iterator to handle the words whole (arr.length > 1)
  - return array[0]

Algorithm:
  - declare (subs) and initialize to given string split (' ')
  - while the length of the array is greater than 1
    - reverse all elements in the array
    - for loop to concat index and index + 1, iterate by 2

  return first(only) element in (subs)

Code.

*/

function reverseAndCombineText(str) {
  let subs = str.split(' ');
  while (subs.length > 1) {
    subs = subs.map((ele) => ele.split('').reverse().join(''));
    for (let i = 0; i < subs.length; i++) {
      if (subs[i + 1]) {
        subs[i] += subs[i + 1];
        subs.splice(i + 1, 1);
      }
    }
  }

  return subs[0];
}

console.log(reverseAndCombineText("abc def gh34 434ff 55_eri 123 343"));  // "43hgff434cbafed343ire_55321"
console.log(reverseAndCombineText("abc def ghi 123"));                    // "defabc123ghi"
console.log(reverseAndCombineText("abc def"));                            // "cbafed"