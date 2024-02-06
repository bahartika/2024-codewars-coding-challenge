// coding challenge
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

const countSheep = (num) => [...Array(num)].map((el, i) => `${i + 1} sheep...`).join("");

// const countSheep = (num) => {
//   result = "";
//   for (i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

console.log(countSheep(3));
