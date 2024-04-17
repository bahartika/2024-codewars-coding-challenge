// Coding Challenge
// 48/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
// Do I Get A Bonus

const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

console.log(bonusTime(10000, true));
