// Coding Challenge
// 26/366
// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript

// function myFirstKata(a, b) {
//   if (typeof a == "number" && typeof b == "number") {
//     return (a % b) + (b % a);
//   }
//   return false;
// }

const myFirstKata = (a, b) => (typeof a == "number" && typeof b == "number" ? (a % b) + (b % a) : false);

console.log(myFirstKata("hello", 5));
console.log(myFirstKata(3, 5));
