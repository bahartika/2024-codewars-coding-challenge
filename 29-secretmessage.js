// Coding Challenge
// 29/366
// https://www.codewars.com/kata/55225023e1be1ec8bc000390

const greet = (name) => (name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`);

// function greet(name) {
//   if (name === "Johnny") {
//     return "Hello, my love!";
//   }
//   return `Hello, ${name}!`;
// }

console.log(greet("Jim"));
console.log(greet("Johnny"));
