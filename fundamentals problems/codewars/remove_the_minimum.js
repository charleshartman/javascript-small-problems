/* remove_the_minimum.js

Given an array of integers, remove the smallest value. Do not mutate the
original array/list. If there are multiple elements with the same value, remove
the one with a lower index. If you get an empty array/list, return an empty
array/list.

Don't change the order of the elements that are left. */

"use strict";

function removeSmallest(arr) {
  const newArray = arr.slice();
  let smallestIndex = 0;
  let smallestValue = newArray[0];

  newArray.forEach((element, index) => {
    if (element < smallestValue) {
      smallestValue = element;
      smallestIndex = index;
    }
  });

  newArray.splice(smallestIndex, 1);
  return newArray;
}

console.log(removeSmallest([1,2,3,4,5])); // [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); // [2,2,2,1]

/* algorithm:
  - declare (smallestIndex) variable to 0
  - declare (smallestValue) to first element in given array
  - declare (newArr) to clone of given array
  - iterate through given array
    - if element is less than smallestValue
      - then make (smallestIndex) = given array's index location
  - remove (smallestIndex) from (newArr)
  - return (newArr)
*/
