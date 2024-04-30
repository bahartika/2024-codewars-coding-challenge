// Coding Challenge
// 52/366
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
//  Flick Switch

const flickSwitch = (arr) => {
  let flick = true;
  return arr.map((word) => (word === "flick" ? (flick = !flick) : flick));
};

console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));

// function flickSwitch(arr) {
//   let result = [];
//   let isTrue = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "flick") {
//       isTrue = !isTrue;
//       result.push(isTrue);
//     } else {
//       result.push(isTrue);
//     }
//   }
//   return result;
// }
