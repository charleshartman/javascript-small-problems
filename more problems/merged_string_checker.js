/* eslint-disable id-length */
/* merged_string_checker.js

At a job interview, you are challenged to write an algorithm to check if
a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in
the same order as in s.

The interviewer gives you the following example and tells you to figure
out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

*/


/* PEDAC

Understand the Problem:
    input
    - three strings, two sources and one target
    output
    - boolean

- rules & definitions:
    explicitly stated
    - we must form the target string using the characters from the two source
      strings IN ORDER
    - we can use characters from alternating strings, or successive chars from
      one string, but we must use characters in order

    implicitly identified
    -


- clarifying questions & answers
    - do we need to use all the chars in each source string? iow, can there be
      chars left over at the end of those strings?
    - what if one string is empty?
    - what if all strings are empty?

Examples/test cases:
    happy path(generic)
    - ('charles', 'car', 'hles') === true
    - ('charles', 'ar', 'hles') === false

    edge cases(boundaries/emptiness)
    - ('charles', '', 'charles') === true
    - ('charles', 'charles', '') === true
    - ('charles', 'carz', 'hles') === true, depending on clarification
    - ('', '', '') === true, depending on clarification

Mental model:
    - build a result string char by char based on the target string, if we find
      the char we need at current index in either string, move the index of
      that string forward and add the current char to the result
      - if at any time, the next char we need is not the current tracked index
        of either source string 1 or 2 then return false
    - if we complete iterating over our result and we have not returned false
      and our result === our target, then return true

Data structure:
    - index counters for each source string and target string
    - a result string to concat each successful char
    - a boolean return

Algorithm:
    - declare (result) to ''
    - declare (str1Index) to 0
    - declare (str2Index) to 0
    - iterate through target string with for loop
      - if target index value equals str1[str1Index]
        then add target char to result and increment str1Index + 1
      - else if target index value equals str2[str2Index]
        then add target char to result and increment str2Index + 1
      - else return false
    - return true
Code.

*/


function isMerge(target, str1, str2) {
  // if (!target || !str1 || !str2) return false;
  // let result = '';
  let str1Index = 0;
  let str2Index = 0;

  for (let i = 0; i < target.length; i++) {
    if (target[i] === str1[str1Index]) {
      // result += target[i];
      str1Index += 1;
    } else if (target[i] === str2[str2Index]) {
      // result += target[i];
      str2Index += 1;
    } else {
      return false;
    }
  }

  // return true;// (result === target);
  return target.length === str1.length + str2.length;
}

console.log(isMerge('codewars', 'code', 'wars') === true);
console.log(isMerge('codewars', 'cdw', 'oears') === true);
console.log(isMerge('codewars', 'cod', 'wars') === false);

// my tests

console.log(isMerge('charles', 'car', 'hles') === true);
console.log(isMerge('charles', 'ar', 'hles') === false);
console.log(isMerge('charles', '', 'charles') === true);
console.log(isMerge('charles', 'charles', '') === true);
console.log(isMerge('charles', 'carz', 'hles') === false);
console.log(isMerge('', '', '') === true);