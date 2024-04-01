// Coding Challenge
// 46/366
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
// Find numbers which are divisible by given number

const divisibleBy = (numbers, divisor) => numbers.filter((num) => num % divisor === 0);

// function divisibleBy(numbers, divisor) {
//   let result = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] % divisor === 0) result.push(numbers[i]);
//   }
//   return result;
// }

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([1, 3, 5], 2));
