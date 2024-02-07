// coding challenge
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// const min = (list) => {
//   let value = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (value > list[i]) {
//       value = list[i];
//     }
//   }
//   return value;
// };

// const max = (list) => {
//   let value = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (value < list[i]) {
//       value = list[i];
//     }
//   }
//   return value;
// };

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
