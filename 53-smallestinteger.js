// Coding Challenge
// 53/366
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
//  Find the smallest integer in the array

const findSmallestInt = (arr) => arr.sort((a, b) => a - b)[0];

console.log(findSmallestInt([78, 56, 232, 12, 8]));
