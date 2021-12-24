/* eslint-disable max-len */
/* let_us_recycle.js

Let's Recycle!

You will be given a list of objects. Each object has type, material, and
possibly secondMaterial. The existing materials are: paper, glass, organic,
and plastic.

Your job is to sort these objects across the 4 recycling bins according to
their material (and secondMaterial if it's present), by listing the type's of
objects that should go into those bins.

Notes

- The bins should come in the same order as the materials listed above
- All bins should be listed in the output, even if some of them are empty
- If an object is made of two materials, its type should be listed in both of
  the respective bins
- The order of the type's in each bin should be the same as the order of their
  respective objects was in the input list

Example

input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]

*/

/* PEDAC

Understand the Problem:
- input
  - an array of objects, each containing 2-3 properties
- output
  - an array with 4 subarrays representing four types of materials for recycling
- rules
  - place each TYPE from our input array into one or two BINS depending on their material(s)
  - bins should have types placed in them in the order in which they are listed in the input array
  - all bins should be present in the output array, even if some are empty
  - output array BINS should be in this order: paper, glass, organic, plastic

- clarifying questions
  - can we expect clean input?
  - do we need to handle invalid type or empty input?

Examples/test cases:
- happy path
  - one provided, another added below
- edge cases(bounds/emptiness)
  - empty bins, iow input that doesn't have any items of one or more of the four materials

Data structure:
  - create object with four properties representing the four materials/bins, we can then return
    just the property values at the end of the function with Object.values(obj)
  - we can iterate through the input array looking for material and secondMaterial properties,
    then place those TYPES into the correct BINS in our (recyclingBins) result object

Algorithm:
  - declare (recyclingBins) object with four properties based on materials and assign each []
  - iterate through input array using forEach
    - push type into recyclingBins based on materials property name
    - if secondMaterial is present, push type into recyclingBins based on secondMaterial prop name
  - return Object.values for (recyclingBins)

Code.

*/

function recycle(arr) {
  let recyclingBins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  arr.forEach(element => {
    recyclingBins[element.material].push(element.type);
    if (element.secondMaterial) {
      recyclingBins[element.secondMaterial].push(element.type);
    }
  });

  return Object.values(recyclingBins);
}


let refuse1 = [
  {type: "rotten apples", material: "organic"},
  {type: "out of date yogurt", material: "organic", secondMaterial: "plastic"},
  {type: "wine bottle", material: "glass", secondMaterial: "paper"},
  {type: "amazon box", material: "paper"},
  {type: "beer bottle", material: "glass", secondMaterial: "paper"}
];

console.log(recycle(refuse1));

/*
[
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

let refuse2 = [
  {type: "old lettuce", material: "organic"},
  {type: "spoiled olives", material: "organic", secondMaterial: "plastic"},
  {type: "topo chico bottle", material: "glass"},
  {type: "wine bottle", material: "glass"}
];

console.log(recycle(refuse2));

/*
[
  [],
  ["topo chico bottle", "wine bottle"],
  ["old lettuce", "spoiled olives"],
  ["spoiled olives"]
]
*/
