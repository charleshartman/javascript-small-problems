/* most_frequent_words_text.js

https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

Write a function that, given a string of text (possibly with punctuation and
line-breaks), returns an array of the top-3 most occurring words, in descending
order of the number of occurrences.

Assumptions:
- A word is a string of letters (A to Z) optionally containing one or more
  apostrophes (') in ASCII. (No need to handle fancy punctuation.)
- Matches should be case-insensitive, and the words in the result should be
  lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or
  top-1 words should be returned, or an empty array if a text contains no words.

*/

/* PEDAC
understand the Problem
input: String
output: Array containing 3 words, all in lowercase, descending order of the
number of occurences

explicit requirements:

rules:
  - A word should only contain letters and/or apostrophes.
    - You can have one or more apostrophes
  - array can be empty if the text has no words
  - array can contain only 2 or 1 words if the text has less than 3 unique words
  - Unique words are case insensitive
  - Ties may be broken arbitrarily


clarifying questions:
  - Anything else should not be considered?
  - How are ties broken? "hello hello hello hello World world shouldn't haven't
    haven't" => ['hello', "haven't", 'world'] OR ['hello', "haven't",
    "shouldn't"] OR ['hello', 'world', "shouldn't"]

Examples/test cases:
  - Base Case / Happy Path
    - Words that contain only letters and apostrophes and nothing else, all
      lowercase
      - input: "hello hello hello hello world world shouldn't haven't haven't
        haven't"
      - output: ['hello', "haven't", 'world']
    - Words that contain only letters and apostrophes and nothing else,
      lowercase or uppercase
      - input: "Hello hello hello hello World world shouldn't haven't haven't
        haven't"
      - output: ['hello', "haven't", 'world']
    - Words that contain special characters, numbers, other punctuation
      - input: "qwerty44qw safe4house Cy3later"
      - output: []
    - Fewer than 3 unique words
      - input: "test test"
      - output: [test]
      - input2: "test"
      - output2: [test]
    - three or more words with the same number of occurences all tied, nothing
      less or greater
      - input : "one two three"
      - output: [one, two, three]
    - simpler tie, one word 3 times 2 words 2 times 1 word 1 time
    - empty string returns empty array
      - input: ""
      - output: []
    "'Beauty and the Beasts' is a Disney movie."

Data structure:
  - string as the initial input, which will call a regex match method
  - object to trace the count of each word, key referring to the word itself,
    and value referring to the occurence
  - array to store the result which will be returned a the end of the method

Algorithm:
  - Identify the words within our string
  - Iterate through each word,
    - Create or add up a count of that word in an object
      - We have a key value pair, where the word is the key, and how many times
        that word appears is the value
  - Create an array of nested arrays, where the first element is the key and
    the second is the value
  - Sort these nested arrays based on the second element which is the count
    - Make sure we are sorting in descending order
  - Select only the first three elements of the sorted array
  - Map through all the nested arrays and transform each of them to only the
    word, or first element

Code!

*/

"use strict";

function topThreeWords(text) {
  let wordCount = {};
  let matches = text.toLowerCase().match(/\b[a-z]+'*[a-z]*\b/gi) || [];
  // alt: [a-z][a-z']*[a-z]*

  matches.forEach((word) => {
    wordCount[word] = (wordCount[word] ? wordCount[word] + 1 : 1);
  });

  let result = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
  result = result.slice(0, 3);
  return result.map((element) => element[0]);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));                      // ['e','d','a']
console.log(topThreeWords("a a c b b"));                                              // ['a','b','c']
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));  // ['e','ddd','aa']
console.log(topThreeWords("  //wont won't won't "));                                  // ["won't", "wont"]
console.log(topThreeWords("  , e   .. "));                                            // ["e"]
console.log(topThreeWords("  ...  "));                                                // []
console.log(topThreeWords("  '  "));                                                  // []

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`));                          // ['a','of','on']

