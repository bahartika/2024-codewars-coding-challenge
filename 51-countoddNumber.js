// Coding Challenge
// 51/366
// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
//  Count Odd Numbers below n

// const oddCount = (n) =>
//   Array(n)
//     .fill()
//     .filter((_, index) => index % 2 !== 0).length;

const oddCount = (n) => Math.floor(n / 2);

// function oddCount(n) {
//   let result = [];
//   for (i = 0; i < n; i++) {
//     if (i % 2 !== 0) result.push(i % 2);
//   }
//   return result.length;
// }

console.log(oddCount(15));
