// Coding Challenge
// 34/366
// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
// Are arrow functions odd?

const odds = (values) => values.filter((value) => value % 2);

// function odds(values) {
//   let result = [];
//   for (i = 0; i <= values.length; i++) {
//     if (values[i] % 2 == 1) {
//       result.push(values[i]);
//     }
//   }
//   return result;
// }
console.log(odds([2, 4, 6]));
console.log(odds([1, 3, 5]));
console.log(odds([1, 2, 3, 4, 5, 6]));
