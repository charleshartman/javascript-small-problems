/* exercise_10.js
Inventory Item Availability

Building on the previous exercise, write a function that returns true or false
based on whether or not an inventory item is available. As before, the function
takes two arguments: an inventory item and a list of transactions. The function
should return true only if the sum of the quantity values of the item's
transactions is greater than zero. Notice that there is a movement property
in each transaction object. A movement value of 'out' will decrease the item's
quantity.

You may (and should) use the transactionsFor function from the previous
exercise. */

const transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(num, arr) {
  return arr.filter(trans => trans.id === num);
}

function isItemAvailable(inventoryItem, transactions) {
  let list = transactionsFor(inventoryItem, transactions);
  let inventory = 0;
  list.forEach(item => {
    if (item.movement === 'in') {
      inventory += item.quantity;
    } else {
      inventory -= item.quantity;
    }
  });

  return (inventory > 0);
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true