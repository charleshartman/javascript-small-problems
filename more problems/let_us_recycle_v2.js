/* eslint-disable max-len */
/* eslint-disable quote-props */
/* let_us_recycle_v2.js

Task

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

*/


/* PEDAC

Understand the Problem:
  input
  - an array of objects, each representing an item with certain properties:
    type, material and possibly secondMaterial
  output
  - an array with four subarrays, each representing a 'bin', the four types are
    paper, glass, organic, and plastic.

- rules & definitions:
  explicitly stated
  - bins should appear in specific order in the result array: paper, glass,
    organic, and plastic
  - all bins should be present in the output, even if some are 'empty'
  - if an item has both a material and seconsMaterial it should appear in both
    respective bins
  - items should be added to bins in the same order the appear on the input list


  implicitly identified
  -


- clarifying questions & answers
  - do we need to deal with empty input obj? {} => [[], [], [], []]
  - do we need to deal with no argument passed or incorrect type arg? assume no
  - can we always expect the input object to be comprised of only strings and
    only the three key values listed in the problem description?

Examples/test cases:
  happy path(generic)
  - see below

  edge cases(boundaries/emptiness)
  - [] => [[], [], [], []]
  - empty result bins


Mental model:
  -

Data structure:
  - create new (bins) array with four subarrays
  - iterate over each item in given object, pushing type into appropriate bins
    in our (bins)

Algorithm:
  - declare (bins) to obj with four properties representing materials with
    empty arrays as values
  - iterate through each (item) in input array
    if object's material is x put in x bin
    if object has a secondMaterial, put it in x bin
  - return Object.values(bins)

Code.

*/

function recycle(items) {
  let bins = { paper: [], glass: [], organic: [], plastic: [] };

  items.forEach((obj) => {
    bins[obj.material].push(obj.type);
    if (obj.secondMaterial) {
      bins[obj.secondMaterial].push(obj.type);
    }
  });

  return Object.values(bins);
}

const input1 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];

console.log(recycle(input1));
// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

const input2 = [
  {"type": "tastebud pizza box", "material": "paper"},
  {"type": "topo chico bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "dish soap container", "material": "plastic" }
];

console.log(recycle(input2));
// output = [
//   ["tastebud pizza box", "topo chico bottle", "wine bottle", "amazon box", "beer bottle"],
//   ["topo chico bottle", "wine bottle", "beer bottle"],
//   [],
//   ["dish soap container"]
// ]

const input3 = [];

console.log(recycle(input3));
// output = [[], [], [], []]
