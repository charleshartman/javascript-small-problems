/* now_i_know_my_abcs.js

Now I Know My ABCs

A collection of spelling blocks has two letters per block, as shown in this
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do
not use both letters from any given block. You can also only use each block
once.

Write a function that takes a word string as an argument and returns true if
the word can be spelled using the set of blocks, false otherwise. You can
consider the letters to be case-insensitive when you apply the rules. */

function isBlockWord(word) {
  let blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
    'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];

  let chars = word.toUpperCase().split('');

  for (let idx = 0; idx < chars.length; idx += 1) {
    if (!blocks.some(el => el.includes(chars[idx]))) {
      return false;
    } else {
      blocks = blocks.filter(ele => !ele.includes(chars[idx]));
    }
  }

  return true;
}

// provided tests
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// my tests
console.log(isBlockWord('BATS'));    // true
console.log(isBlockWord('BATTS'));   // false
console.log(isBlockWord('quiet'));   // true
console.log(isBlockWord('zoom'));    // false
console.log(isBlockWord('JAWS'));    // false

// more tests still
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

/* PEDAC
understand the Problem
input: string that contains a word, may be upper or lower case or mixed case
output: BOOLEAN

explicit requirements:

rules:
  - given a set of 'blocks' which each contain two letters, we must be able to
    spell the given word with the blocks
    - we can use each block only one time
    - so we can use each letter only one time
  - character matches are case insensitive, blocks are uppercase

clarifying questions:
  - confirm that string will only contain [a-zA-Z]
  - confirm that string will not be empty

Examples/test cases:
'BATS'    // true
'BATTS'   // false
'quiet'   // true
'zoom'    // false
'JAWS'    // false

Data structure:
  - strings and arrays
    - store master blocks in array of subarrays
    - standardize input by uppercasing given string
    - iterate thtough string and test presence in blocks array

Algorithm:
  - declare (blocks) and assign to array of subarrays representing block values
    provided in rules
  - iterate through given string converted toUpperCase (for loop, early return)
    - iterate through blocks (for loop, early return)
      - if character is present in a subarray of blocks, reassign subarray
        values to 'used', 'used' (maybe use #fill here)
      - else return false
  - if we make it through all characters without returning false
  - then return true

Code!

*/