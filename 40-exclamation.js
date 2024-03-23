// Coding Challenge
// 40/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Remove the exclamation

const removeExclamationMarks = (s) => [...s].map((e) => e.replace("!", "")).join("");

console.log(removeExclamationMarks("hello world!"));
