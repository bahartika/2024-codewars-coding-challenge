// Coding Challenge
// 43/366
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// Will There be enough space

// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on));

const enough = (cap, on, wait) => Math.max(wait + on - cap, 0);

console.log(enough(100, 60, 50));
