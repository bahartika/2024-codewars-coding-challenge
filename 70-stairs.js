// Coding Challenge
// 70/366
// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

const drawStairs = (n) => {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    stairs += " ".repeat(i) + "I\n";
  }
  return stairs.trim();
};

// Contoh penggunaan
console.log(drawStairs(3));
console.log(drawStairs(7));
