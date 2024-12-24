// Coding Challenge
// 71/366

// function elevator(left, right, call) {
//   if(Math.abs(left - call) > Math.abs(right - call)){
//     return "right"
//   } else if (Math.abs(right - call) > Math.abs(left - call)){
//     return "left"
//   } else {
//     return "right"
//   }
// }

const elevator = (left, right, call) => (Math.abs(left - call) > Math.abs(right - call) || Math.abs(left - call) == Math.abs(right - call) ? "right" : "left");

console.log(elevator(0, 1, 2));
console.log(elevator(2, 1, 0));
console.log(elevator(1, 0, 2));
console.log(elevator(2, 0, 2));
console.log(elevator(0, 0, 0));
console.log(elevator(1, 1, 2));
