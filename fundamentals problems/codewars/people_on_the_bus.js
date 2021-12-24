/* people_on_the_bus.js

Number of people in the bus

There is a bus moving in the city, and it takes and drop some people in each
bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each
integer array has two items which represent number of people get into bus (The
first item) and number of people get off the bus (The second item) in a bus
stop.

Your task is to return number of people who are still in the bus after the last
bus station (after the last array). Even though it is the last bus stop, the bus
is not empty and some people are still in the bus, and they are probably
sleeping there. */

var number = function(busStops) {
  let peopleOnBus = 0;
  busStops.forEach((stop) => {
    peopleOnBus += (stop[0] - stop[1]);
  });

  return peopleOnBus;
};

console.log(number([[10,0],[3,5],[5,8]]) === 5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) === 17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) === 21);

/* algorithm
  - declare (peopleOnBus) variable to 0
  - iterate through array
    - for each iteration
      - add the number of sub[0] to (peopleOnBus)
      - subtract the number of sub[1] from (peopleOnBus)
  - return (peopleOnBus)
*/