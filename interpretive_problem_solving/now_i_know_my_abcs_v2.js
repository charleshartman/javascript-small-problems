/* eslint-disable id-length */
/* now_i_know_my_abcs_v2.js

Now I Know My ABCs

A collection of spelling blocks has two letters per block, as shown in this
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do
not use both letters from any given block. You can also only use each block
once.

Write a function that takes a word string as an argument and returns true if the
word can be spelled using the set of blocks, false otherwise. You can consider
the letters to be case-insensitive when you apply the rules. */


/* PEDAC

Understand the Problem:
- input
  - string containing upper or lower case alphabetic chars
- output
  - BOOLEAN
- rules(explicit & implicit)
  - given a set of 'blocks', each of which contain two chars, determine if the
    given string can be expressed by using each block only once
  - given string may be lowercase, treat test as case-insensitive, iow, 'j' is
    the same as 'J' and using either uses the J:W block

- clarifying questions
  - do we need to handle empty string input or invalid type input?

Examples/test cases:
- happy path(generic)
  - ('charles') === false
  - ('PETE') === false
  - ('ABLE') === true
  -
- edge cases(bounds/emptiness)
  - ('') => true? see clarifying questions

Mental Model:
  - can the given string (word) be spelled using each block in our blockset
    only once?

Data structure:
  - store (blockSet) in an array of two char strings
  - store used blocks in a separate array (usedBlocks)

Algorithm:
  - declare (blockSet) and initialize to array of blocks represented by two char
    strings provided in rules
  - declare (letters) and innitialize to given string uppercased and split
  - iterate through (letters) with for loop
    - if blockset includes letter then remove it
    - else return false
  - if we get through the loop without returning false we can return true

Code.

*/

function isBlockWord(str) {
  let blockSet = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
    'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];
  let letters = str.toUpperCase().split('');

  for (let i = 0; i < letters.length; i++) {
    let result = blockSet.findIndex((block) => block.includes(letters[i]));
    if (result !== -1) {
      blockSet.splice(result, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// my tests
console.log(isBlockWord('charles'));    // false
console.log(isBlockWord('PETE'));       // false
console.log(isBlockWord('ABLE'));       // true
console.log(isBlockWord('BATS'));       // true
console.log(isBlockWord('BATTS'));      // false
console.log(isBlockWord('quiet'));      // true
console.log(isBlockWord('zoom'));       // false
console.log(isBlockWord('JAWS'));       // false

// more tests still
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
