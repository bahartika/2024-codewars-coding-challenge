// Coding Challenge
// 35/366
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
// Drink About

const peopleWithAgeDrink = (old) => {
  if (old < 14) return "drink toddy";
  if (old < 18) return "drink coke";
  if (old < 21) return "drink beer";
  if (old >= 21) return "drink whisky";
};

//   13 --> "drink toddy"
//   17 --> "drink coke"
//   18 --> "drink beer"
//   20 --> "drink beer"
//   30 --> "drink whisky"

console.log(peopleWithAgeDrink(13));
