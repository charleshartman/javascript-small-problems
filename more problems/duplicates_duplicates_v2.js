// You are given a table, in which every key is a stringified number, and each
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each
// character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically,
// and the larger key will keep that character. That's why in the example above the
// array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurence should be kept.

// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }


/* PEDAC

Understand the Problem:
  input
  - object with stringified numbers as KEYS, and an array of chars as values
  output
  - object with stringified numbers as KEYS, and an array of chars as value WITH NO DUPLICATES within the array, and no duplication of chars throughout the table

- rules & definitions:
  explicitly stated
  - greater numeric value keys take precedence
  - char can only appear in one object property value
  - there should be no duplication of chars within an individual property


  implicitly identified
  - resultant property values may be empty


- clarifying questions & answers
  - always a new object
  - input object may be empty
  - one or more input object property values may be an empty array
  - lowercase/uppercase alphabetical characters only with the array
  

Examples/test cases:
  happy path(generic)
  -

  edge cases(boundaries/emptiness)
  - {} => {}
  - input = {
   "1": [],
   "2": ["A"],
   "3": ["A"],
   }

   output = {
   "1": [],
   "2": [],
   "3": ["A"],
  }

// input = {
//   "1": ["C", "F", "f", "G"],
//   "2": ["A", "a", "B", "C"],
//   "3": ["a", "A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["a", "B", "D"],
// }

Mental model:
  - define a result object to {}
  - define a seen object to {}
  - iterate through object keys sorted by numeric value and starting with the highest number, within each iteration, iterate through the property value (array), if the element value is not present in (seen) either in its uppercase or lowercase version, add it to our result object property of the same key value and add it to (seen)
  - after all source and nested iterations we return our result
  
Data structure:
  - iterate through given object with Object.keys
  - build a (seen) object to track used characters
  - build a (result) object based on if we have used char yet (remember case)

Algorithm:
  - declare (result) to {}
  - declare (seen) to {}
  - declare sortedKeys and intialize to return of converting given Object.keys to           numbers, sorting desc, then converting back to strings
  - iterate through each object property in the order of sortedKeys
    - add that key with an empty array value to (result)
    - iterate through property value
    - if the element value is not present in (seen) either in its uppercase version
    - add it to our result object property of the same key value
    - and add it to (seen) as an uppercase char
  - return result object
  

Code.

*/

function reduceTable(obj) {
  let result = {};
  let seen = {};
  let sortedKeys = Object.keys(obj).map(Number).sort((a, b) => b - a).map(String);

  sortedKeys.forEach((key) => {
    result[key] = [];
    obj[key].forEach((ele) => {
      if (!seen[ele.toUpperCase()]) {
        result[key].push(ele);
        seen[ele.toUpperCase()] = true;
      }
    });
  });
  
  return result;
}

/* mia without edges
function reduceTable(obj) {
  let existingElements = {};
  let reducedTable = {};
  let sortedKeys = Object.keys(obj).sort((a, b) => Number(b) - Number(a));
  
  sortedKeys.forEach(key => {
    let uniqueValues = [...new Set(obj[key])];
    reducedTable[key] = [];
    uniqueValues.forEach(char => {
      if (!existingElements[char]) {
        reducedTable[key].push(char);
        existingElements[char] = true;
      }
    });
  });
  
  return reducedTable;
}

// me without edges
function removeDuplicateIds(table) {
  let usedChars = [];
  let result = {};
  let order = Object.keys(table).map(Number).sort((a, b) => b - a).map(String);

  order.forEach((key) => {
    result[key] = [];
    table[key].forEach((char) => {
      if (!usedChars.includes(char)) {
        result[key].push(char);
        usedChars.push(char);
      }
    });
  });

  return result;
}
*/

console.log(reduceTable({})); // => {}
console.log(reduceTable({
 "1": [],
 "2": ["A"],
 "3": ["A"],
 }));

// output = {
//  "1": [],
//  "2": [],
//  "3": ["A"],
// }

console.log(reduceTable({
  "1": ["C", "F", "f", "G"],
  "2": ["A", "a", "B", "C"],
  "3": ["a", "A", "B", "D"],
}));

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["a", "B", "D"],
// }

// Example 1
const input1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};
/*
output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}
*/
// Example 2
const input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};
/*
output = {
  "1": [],
  "2": [],
  "3": ["A"],
}
*/

// Example 3
const input3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};
/*
output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}
*/

console.log(reduceTable(input1));
console.log(reduceTable(input2));
console.log(reduceTable(input3));
