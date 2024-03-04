// Coding Challenge
// 27/366
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

const feast = (beast, dish) => beast[0] === dish[0] && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1);

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
