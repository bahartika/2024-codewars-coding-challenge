const reversedSeq = (n) => [...Array(n)].map((num, i) => n - i);

// const reversedSeq = (n) => [...Array(n)].map((num, i) => i + 1).reverse();

// const reversedSeq = (n) => {
//   const result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//     console.log(i);
//   }

//   return result;
// };

console.log(reversedSeq(5));
