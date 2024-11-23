// Coding Challenge
// 68/366
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => (d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a));

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
