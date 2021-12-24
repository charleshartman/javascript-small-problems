function twice(number) {
  const numberAsString = String(number);

  if (numberAsString.length % 2 === 0) {
    const halfLength = numberAsString.length / 2;
    const firstHalf = numberAsString.substring(0, halfLength);
    const secondHalf = numberAsString.substring(halfLength);

    if (firstHalf === secondHalf) {
      return number;
    }
  }

  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676