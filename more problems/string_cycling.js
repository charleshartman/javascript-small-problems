/* string_cycling.js

Given two strings, repeatedly cycle through all of the letters in the first
string until it is the same length as the second string.

/*

/* PEDAC

Understand the Problem:
  input
  - two strings
  output
  - a single new string

- rules & definitions:
  explicitly stated
  - repeat the chars in the first string when building a new string, until the
    first string is equal in length to the second string

  implicitly identified
  - white spaces should be included in the length of the second string
  - if either or both given strings are '' then return ''

- clarifying questions & answers
  - do not mutate arguments
  - if either or both given strings are '' then return ''

Examples/test cases:
  happy path(generic)
  - ("abc", "hello") => "abcab"
  - ("programming", "edabit") => "progra"
  edge cases(boundaries/emptiness)
  - ("cha ra", "wow thishgf") => ""cha racha ra"
  - ('', '') => ''
  - ('abc', '') => ''
  - ('', 'abc') => ''

Mental model:
  - find the length of the second string, create a set of chars from the first
    str to repeatedly push into a new string, then iterate through that set of
    characters, pushing one by one into our new string until the new string is
    the same length as the second given string
  - continually loop through the chars in the first str, addind them one by
    one to the result string until the result string is the same length as the
    second str

Data structure:
  - strings

Algorithm:
  - guard return '' if either given str is ''
  - declare (result) to ''
  - declare (goalLen) to second given string's length
  - declare (counter) to 0
  - loop while the length of the (result) is less than (goalLen)
     - add first string (counter) index value to (result)
     - increment (counter) by 1
     - if counter is >= first string's length
      - then counter = 0
  - return (result)
Code.

result = 'abcab'
goalLen = 5
counter = 2

*/

function stringCycling(str1, str2) {
  if (str1 === '' || str2 === '') return '';

  let result = '';
  let goalLen = str2.length;
  let counter = 0;

  while (result.length < goalLen) {
    result += str1[counter];
    counter += 1;
    if (counter >= str1.length) counter = 0;
  }

  return result;
}

console.log(stringCycling("abc", "hello"));
// "abcab"
console.log(stringCycling("programming", "edabit"));
// "progra"
console.log(stringCycling("the world in me evolves in hers", "i love Tesh, so much so"));
// "the world in me evolves"
console.log(stringCycling("a thing of beauty is a joy forever", "indulge me surely"));
// "a thing of beauty"
console.log(stringCycling("to", "hide"));
// "toto"
console.log(stringCycling("such a feeling coming over me", "top of the world"));
// "such a feeling c"

console.log(stringCycling("cha ra", "wow thishgf")); // => "cha racha r"
console.log(stringCycling('', '')); // => ''
console.log(stringCycling('abc', '')); // => ''
console.log(stringCycling('', 'abc')); // => ''