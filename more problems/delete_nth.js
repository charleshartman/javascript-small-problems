// delete_nth.js

/*
Given a list lst and a number N, create a new list that contains each number of
lst at most N times without reordering.

For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
drop the next [1,2] since this would lead to 1 and 2 being in the result 3
times, and then take 3, which leads to [1,2,3,1,2,3].

*/

/* PEDAC

Understand the Problem:
- input
  - an array of numbers AND
  - an integer > 0
- output
  - a new array (do not mutate given array)
- rules
  - maintain the order of the orginal array, iow remove duplicates (occurences
    of elements) greater
    than N from the end of the given array
  - there can be equal or fewer occurences of an element than N, just not more

- clarifying questions
  - just numbers
  - do not reorder
  - array may be empty
  - argument N may be missing

Examples/test cases:
- happy path
  - positive number of elements and a > 0 N
    ([1,2,3,1,2,1,2,3], 2) => [1,2,3,1,2,3]
    ([4,4], 1) => [4]
    ([4,4,4,1], 2) => [4,4,1] {'4': 3, '1': 1}
    ([6,4,5,0,6,4,5,6], 4) => [6,4,5,0,6,4,5,6]
- edge cases(bounds/emptiness)
  - an empty array argument
    ([], 2) => []
  - missing N argument
    ([1,2,3]) => []

Data structure:
  - object to store count of each element and then modifying object to max value
    of N per property
  - given number of max occurrences
  - return a new array as per rules

Algorithm:
  - guard clause: if array is empty or N is undefined return []
  - declare (result) to []
  - declare (counter) to {}
  - iterate over given array
    if the element exists in counter and property value for that element
    is < num
      - increment by 1
    else if the element is not present add the element to (counter)
  - iterate over the given array again
    - if (counter) key's value for that number is greater than 0
      then push that element into (result) AND
      decrement the value in (counter) by 1
  - return result

Code.

*/

function deleteNth(arr, num) {
  if (arr.length === 0 || (!num)) return [];

  let result = [];
  let counter = {};

  arr.forEach((ele) => {
    if (counter[ele] && counter[ele] < num) {
      counter[ele] += 1;
    } else if (!counter[ele]) {
      counter[ele] = 1;
    }
  });

  arr.forEach((ele) => {
    if (counter[ele] > 0) {
      result.push(ele);
      counter[ele] -= 1;
    }
  });

  return result;
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2)); // => [1,2,3,1,2,3]
console.log(deleteNth([4,4], 1)); // => [4]
console.log(deleteNth([4,4,4,1], 2)); // => [4,4,1]
console.log(deleteNth([6,4,5,0,6,4,5,6], 4)); // => [6,4,5,0,6,4,5,6]
console.log(deleteNth([1,2,3])); // => []
console.log(deleteNth([], 2)); // => []


/*
ALGORITHM
  - Given an array and an integer (n)
  - Create a new empty array (finalArray)

  - Iterate through every element in the given array, and for every element
    - Get the number of times the element appears in the final array
    - If the number is <= n:
      - Push number into the final array

  - Return finalArray
*/

/*

function deleteNth(array, n) {
  let finalArray = []

  array.forEach(currentNumber => {
    let currentCount = finalArray.filter(num => num === currentNumber).length;

    if (currentCount < n) {
      finalArray.push(currentNumber);
    }
  })

  return finalArray;
}

function deleteNth(array, n) {
  let finalArray = [];
  let numberCount = {};

  array.forEach(number => {
    numberCount[number] = numberCount[number] ? numberCount[number] + 1 : 1;

    if (numberCount[number] <= n) {
      finalArray.push(number);
    }
  })

  return finalArray;
}

*/
