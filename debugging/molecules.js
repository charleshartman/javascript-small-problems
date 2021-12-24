/* molecules.js

Molecules

We decided to dip our toes into computational chemistry. Our first task is to
write a function that computes the total number of valence electrons in a
molecule. Fortunately, this is relatively straightforward. For each element in
the molecule, we need to know two things:

The element's atomic number. We can get this from the periodic table and
decided to simply hard-code it in a valence function for now.

The number of atoms of that element in the molecule. We can read this directly
from the string representation of the molecule.

For example, Geosmin has the string representation C12H22O, so it has
12 C atoms, 22 H atoms, and 1 O atom, summing up to 12*4 + 22*1 + 1*6 = 76
valence electrons.

We decided to write our function valenceOfMolecule such that it expects string
representations of each element in the molecule as input, e.g.
valenceOfMolecule('C12', 'H22', 'O'). It then returns the total number of all
valence electrons in that molecule. Well, almost. Can you explain why it throws
an exception and how to fix it? */

"use strict";

// eslint-disable-next-line consistent-return
function valence(element) {
  switch (element) {
    case 'H': return 1;
    case 'C': return 4;
    case 'N': return 5;
    case 'O': return 6;
    // omitting the rest
  }
}

function valenceOfMolecule(...args) {
  let sum = 0;

  args.forEach(atom => {
    const match   = /([a-zA-Z]+)([0-9]*)/.exec(atom);
    const element = match[1];
    const number  = parseInt(match[2], 10) || 1;

    sum += number * valence(element);
  });

  return sum;
}

// Example

console.log('Number of valence electrons');
console.log('---------------------------');
console.log(`Water:     ${String(valenceOfMolecule('H2', 'O'))}`);
console.log(`Propane:   ${String(valenceOfMolecule('C3', 'H8'))}`);
console.log(`Vitamin C: ${String(valenceOfMolecule('C6', 'H8', 'O6'))}`);
console.log(`Caffeine:  ${String(valenceOfMolecule('C8', 'H10', 'N4', 'O2'))}`);

// Expected output:
// Number of valence electrons
// ---------------------------
// Water:     8
// Propane:   20
// Vitamin C: 68
// Caffeine:  74
