// Coding Challenge
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// const sumArray = (array) =>
//   array
//     ? array
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, curr) => acc + curr)
//     : 0;

const sumArray = (array) =>
  array == null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, curr) => acc + curr);
// }

// function sumArray(array) {
//   if (array === null || array.length < 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 1; i < array.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

console.log(sumArray([6, 2, 1, 8, 10]));
