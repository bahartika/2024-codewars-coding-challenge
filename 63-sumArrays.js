// Coding Challenge
// 63/366
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// const sum = (numbers) => {
//   let num = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     num += numbers[i];
//   }
//   return num;
// };

const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum([6, 2, 1, 8, 10]));
