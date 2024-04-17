// Coding Challenge
// 49/366
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
// Well of Ideas - Easy Version

function well(x) {
  let result = x.filter((x) => x === "good").length;

  if (result > 2) {
    return "I smell a series!";
  } else if (result === 1 || result === 2) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}

console.log(well(["bad", "bad", "bad", "bad"]));

// function well(x) {
//   let result = [];
//   for (i = 0; i <= x.length; i++) {
//     if (x[i] === "good") {
//       result.push(x[i]);
//     }
//   }
//   if (result.length === 1 || result.length === 2) {
//     return "Publish!";
//   } else if (result.length > 2) {
//     return "I smell a series!";
//   }
// //   return 'Fail!';
// }
