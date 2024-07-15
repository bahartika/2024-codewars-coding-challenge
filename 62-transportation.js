// Coding Challenge
// 62/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// Transportation on vacation

// const rentalCarCost = (d) => (d >= 7 ? "$50" : d >= 3 ? "$40" : "$20");

const rentalCarCost = (d) => (d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40);

console.log(rentalCarCost(2));
