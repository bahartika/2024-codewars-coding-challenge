// Coding Challenge
// 24/366
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

// var summation = function (num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }
//   return result.reduce((acc, num) => acc + num);
// };

const summation = (num) => [...Array(num).keys()].map((num) => num + 1).reduce((acc, num) => acc + num);

console.log(summation(8));
