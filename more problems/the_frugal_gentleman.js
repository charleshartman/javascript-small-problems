/* the_frugal_gentleman.js

https://edabit.com/challenge/ujzhzyvGoASKxSAib

Atticus has been invited to a dinner party, and he decides to purchase a bottle
of wine. However, he has little knowledge of how to choose a good bottle. Being
a very frugal gentleman (yet disliking looking like a cheapskate), he decides
to use a very simple rule. In any selection of two or more wines, he will
always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the
wine he will buy for the party. If given an empty array, return null. If given
an array of only one, Atticus will buy that wine. */

/* PEDAC

Understand the Problem:
  input
  - array of objects (wines)
  output
  - string

- rules & definitions:
  explicitly stated
  - if input array is empty return null
  - if input array only has one object, return the name of that one
  - otherwise always return the name of the wine (object) with the next to
    lowest price

  implicitly identified
  - name value will always be a string, price value will always be a number,
    but may be an integer or a float
  - all wines will have different prices and different names

- clarifying questions & answers
  -

Examples/test cases:
  happy path(generic)
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) // ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) // ➞ "Wine A"

chosenWine([]) // ➞ null

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  ] // "Wine A"

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine C", price: 10.99 },
  { name: "Wine B", price: 11.99 },
  { name: "Wine 32", price: 13.99 },
  ] // "Wine B"

  edge cases(boundaries/emptiness)
  -


Mental model:
  - unless empty or one element only, sort wine objects by the value of price
    in ascending order, and return the second wines name

Data structure:
  - work clone of input array
  - use sort to order by price
  - return string value (name) of second element in sorted array

Algorithm:
  - guard: if given arr length is 0 then return null
  - guard: if given arr.length is 1 then return name of 0 index object property
  - declare (wines) and initialize to clone of given arr slice(0)
  - sort (wines) by price
    - wines.sort((a, b) => a.price - b.price)
  - return name value of second object (element) in sorted array

Code.

*/

function chosenWine(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0].name;

  let wines = arr.slice(0);
  wines.sort((a, b) => a.price - b.price);

  return wines[1].name;
}

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
])); // ➞ "Wine 9"

console.log(chosenWine([{ name: "Wine A", price: 8.99 }])); // ➞ "Wine A"

console.log(chosenWine([])); // ➞ null

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
])); // "Wine 32"

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine C", price: 10.99 },
  { name: "Wine B", price: 12 },
  { name: "Wine 32", price: 13.99 },
])); // "Wine C"
