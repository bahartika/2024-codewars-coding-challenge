// Coding Challenge
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = (x) => Math.floor(x.reduce((acc, curr) => acc + curr) / x.length);

// function getAverage(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result += x[i];
//   }
//   return Math.floor(result / x.length);
// }

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
