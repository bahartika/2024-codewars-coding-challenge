// Coding Challenge
// 73/366
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function remainder(n, m) {
  if (n === 0 || m === 0) {
    return NaN;
  }
  n = Math.abs(n);
  m = Math.abs(m);

  if (n > m) {
    return n % m;
  } else if (n < m) {
    return m % n;
  } else {
    return 0;
  }
}

console.log(remainder(-799, 648));
console.log(remainder(17, 5));
console.log(remainder(5, 17));
console.log(remainder(72, 13));
console.log(remainder(13, 72));
console.log(remainder(-13, -13));
console.log(remainder(1, 0));
console.log(remainder(0, 0));
