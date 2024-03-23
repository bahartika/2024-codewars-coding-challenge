// Coding Challenge
// 41/366
// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript
// Multiply the number

const multiply = (number) => number * 5 ** Math.abs(number).toString().length;

console.log(multiply(-2));
