const grow = (x) => x.reduce((acc, curr) => acc * curr);

// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }

// function grow(x) {
//     let result = x[0];
//     for (let i = 1; i < x.length; i++) {
//       result *= x[i];
//     }
//     return result;
//   }

console.log(grow([2, 3, 4, 5]));
