// Coding Challenge
// 74/366

// function findAverage(nums) {
//   let sum = 0;
//   for (i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum / nums.length;
// }

// const findAverage = (nums) => {
//   if (nums.length === 0) return 0;

//   let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//   return sum / nums.length;
// };

const findAverage = (nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue) / nums.length;

console.log(findAverage([1, 3, 5, 7]));
console.log(findAverage([2, 4, 6, 8, 10]));
