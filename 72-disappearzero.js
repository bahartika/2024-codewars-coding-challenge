// Coding Challenge
// 72/366
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

console.log(noBoringZeros("2000"));
console.log(noBoringZeros("10500"));
