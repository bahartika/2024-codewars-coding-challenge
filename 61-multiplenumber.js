// Coding Challenge
// 61/366
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// Find Multiple of number

function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

console.log(findMultiples(5, 25));
