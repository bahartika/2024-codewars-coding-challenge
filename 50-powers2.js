// Coding Challenge
// 50/366
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
// Powers of 2

const powersOfTwo = (n) =>
  Array(n + 1)
    .fill()
    .map((_, index) => 2 ** index);

// function powersOfTwo(n) {
//   let result = [];
//   for (i = 0; i < n + 1; i++) {
//     result.push(2 ** i);
//   }
//   return result;
// }

console.log(powersOfTwo(4));
