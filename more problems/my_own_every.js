// my_own_every.js

function myOwnEvery(array, func) {
  let result = true;

  array.forEach(element => {
    if (!func(element)) {
      result = false;
    }
  });

  return result;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

/* book (for loops better for early return, I had to declare a variable)

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

*/