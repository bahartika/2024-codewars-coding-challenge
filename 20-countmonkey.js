// Coding Challenge
// 20/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(i + 1);
//   }
//   return result;
// }

const monkeyCount = (n) => [...Array(n).keys()].map((num) => num + 1);

console.log(monkeyCount(5));
