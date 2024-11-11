// Coding Challenge
// 66/366
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// function findAverage(array) {
//   let result = 0;
//   for (i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   return result / array.length;
// }

const findAverage = (array) => (array.length !== 0 ? array.reduce((acc, curr) => acc + curr, 0) / array.length : 0);

console.log(findAverage([]));
console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([54, 53, 32, 57, 93, 57, 10, 67, 47, 94, 28, 38]));
