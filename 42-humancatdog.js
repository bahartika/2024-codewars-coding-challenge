// Coding Challenge
// 42/366
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// Cat years, dog years

const humanYearsCatYearsDogYears = (humanYears) => {
  let age = [0, 0, 0];
  if (humanYears === 1) {
    age = [1, 15, 15];
  }
  if (humanYears === 2) {
    age = [2, 24, 24];
  }

  if (humanYears > 2) {
    age[1] += 4 * (humanYears - 2) + 24;
    age[2] += 5 * (humanYears - 2) + 24;
    age[0] += humanYears;
  }
  return age;
};

console.log(humanYearsCatYearsDogYears());
