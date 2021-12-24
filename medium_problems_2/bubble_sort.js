/* bubble_sort.js

Bubble Sort

'Bubble Sort' is one of the simplest sorting algorithms available. Although
it is not an efficient algorithm, it is an excellent exercise for student
developers. In this exercise, you will write a function that sorts an array
using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array.
On each pass, the two values of each pair of consecutive elements are compared.
If the first value is greater than the second, the two elements are swapped.
This process is repeated until a complete pass is made without performing any
swaps — at which point the array is completely sorted.

We can stop iterating the first time we make a pass through the array without
making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm,
as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

Write a function that takes an array as an argument and sorts that array using
the bubble sort algorithm described above. The sorting should be done "in-place"
— that is, the function should mutate the array. You may assume that the array
contains at least two elements. */

/* PEDAC

Understand the Problem:
- input
  - an array of elements, may be numbers or strings
- output
  - the same array, mutated and sorted and returned
- rules
  - mutate the given array
  - on each pass, starting at each index (except the last) we compare two
    elements at a time, if the first is greater than the second, then we swap
    values.
  - when we make a pass through the array without swapping anything, we are
    finished and may exit the loop and return the (sorted) array
  - the given array will contain at least two elements

- clarifying questions
  - do we need to handle anything other than strings and numbers?
  - do we need to handle empty input?
  - do we need to handle mixture on types in array?

Examples/test cases:
- happy path
  - [5, 4, 1] => [1, 4, 5]
  - ['c', 'a', 't'] => ['a', 'c', 't']
- edge cases(bounds/emptiness)
  - [] => []

Data structure:
  - boolean toggled when we pass through array without any swaps
  - use given array, mutating values to solve

Algorithm:
  - use do..while loop
    - declare (keepSorting) to false
      - do: use for loop checking each index of given array
        loop from 0 to arr.length - 2
        if value at arr index is greater than value at arr index + 1
          - swap the two values
          - set (keepSorting) to true
          while keepSorting = true
  - return (arr)


Code.

*/

"use strict";

function bubbleSort(arr) {
  let keepSorting;
  do {
    keepSorting = false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        keepSorting = true;
      }
    }
  } while (keepSorting);

  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// outside rules test case
const array4 = [];
bubbleSort(array4);
console.log(array4);    // []

const array5 = ['c', 'a', 't'];
bubbleSort(array5);
console.log(array5);    // ['a', 'c', 't']
