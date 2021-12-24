// build_tower.js

"use strict";

function towerBuilder(nFloors) {
  const tower = [];
  let space = nFloors - 1;
  let stars = 1;
  for (let flr = 1; flr <= nFloors; flr += 1, stars += 2, space -= 1) {
    tower.push(' '.repeat(space) + '*'.repeat(stars) + ' '.repeat(space));
  }

  return tower;
}

console.log(towerBuilder(3));
console.log(towerBuilder(6));
console.log(towerBuilder(11));

/*
  - space = begins at nFloors - 1, decreases every iteration
  - stars = begins at 1, increases by 2 every iteration
  - floors = begins at 1, increases by 1 every iteration UNTIL === nFloors
*/
