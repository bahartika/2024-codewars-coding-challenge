// Coding Challenge
// 65/366
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

// function switchItUp(number) {
//   let letter;
//   switch (number) {
//     case 0:
//       letter = "Zero";
//       break;
//     case 1:
//       letter = "One";
//       break;
//     case 2:
//       letter = "Two";
//       break;
//     case 3:
//       letter = "Three";
//       break;
//     case 4:
//       letter = "Four";
//       break;
//     case 5:
//       letter = "Five";
//       break;
//     case 6:
//       letter = "Six";
//       break;
//     case 7:
//       letter = "Seven";
//       break;
//     case 8:
//       letter = "Eigth";
//       break;
//     case 9:
//       letter = "Nine";
//       break;
//   }
//   return letter;
// }

const switchItUp = (number) => {
  const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  return numbers[number];
};

console.log(switchItUp(5));
