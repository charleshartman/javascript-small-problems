/* exercise_2.js

Combining Arrays

Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays. */

"use strict";

function union(arr1, arr2) {
  const uniqueEls = [];
  const allEls = arr1.concat(arr2);

  for (let index = 0; index < allEls.length; index += 1) {
    if (uniqueEls.includes(allEls[index])) {
      continue;
    } else {
      uniqueEls.push(allEls[index]);
    }
  }

  return uniqueEls;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* algorithm
  - declare (uniqueEls) and assign [] to it
  - declare (allEls) and assign the concatenation of arr1 and arr2 to it
  - iterate through (allEls)
    - if element is present in (uniqueEls)
      - continue to next element
    - else
      - add element to (uniqueEls)
  - return (uniqueEls)
*/