// coding challenge
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / fuelLeft <= mpg;
console.log(zeroFuel(50, 25, 2));
