// Coding Challenge
// 37/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
// Thinkful - Logic Drills: Traffic light

const updateLight = (current) => (current === "green" ? "yellow" : current === "yellow" ? "red" : "green");

console.log(updateLight("green"));
