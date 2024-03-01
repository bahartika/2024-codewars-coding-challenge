// Coding Challenge
// 25/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

// function sumMix(x) {
//   let result = 0;
//   for (let i = 0; i < x.length; i++) {
//     result += +x[i];
//   }
//   return result;
// }

console.log(sumMix([9, 3, "7", "3"]));
