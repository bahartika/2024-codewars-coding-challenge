// Coding Challenge
// 60/366
// https://www.codewars.com/kata/5899642f6e1b25935d000161
// Merge two sorted arrays into one

// const mergeArrays = (arr1, arr2) => Set(arr1.concat(arr2).sort((a, b) => a - b));

const mergeArrays = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
};

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
