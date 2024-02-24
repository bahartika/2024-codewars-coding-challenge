// Coding Challenge
// 19/366
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// function maps(x) {
//   const result = [];
//   for (let i = 0; i < x.length; i++) {
//     result.push((x[i] *= 2));
//   }
//   return result;
// }

const maps = (x) => x.map((e) => e * 2);

console.log(maps([4, 1, 1, 1, 4]));
