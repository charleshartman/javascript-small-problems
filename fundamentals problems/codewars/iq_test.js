/* iq_test.js

Bob is preparing to pass IQ test. The most frequent task in this test is to
find out which one of the given numbers differs from the others. Bob observed
that one number usually differs from the others in evenness. Help Bob — to
check his answers, he needs a program that among the given numbers finds one
that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means
indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, rest of the numbers are odd

*/

"use strict";

function iqTest(str) {
  const nums = str.split(' ').map(Number);
  const even = [];
  const odd = [];

  nums.forEach(num => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });

  if (even.length > odd.length) {
    return nums.indexOf(odd[0]) + 1;
  } else {
    return nums.indexOf(even[0]) + 1;
  }
}

console.log(iqTest("2 4 7 8 10") === 3);
console.log(iqTest("1 2 2") === 1);
console.log(iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46") === 4);

/* algorithm:
  - declare (nums) and assign given str split on spaces and mapped to Numbers
  - declare (evens) to []
  - declare (odds) to []
  - iterate through (nums)
    - if num is even push to evens
    - else push to odds
  - if the length of evens is greater than odds
    then return indexOf the odd number in (nums) + 1
  - else do the same for even number
*/