// Coding Challenge
// 22/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

const strCount = (str, letter) => [...str].filter((e) => e === letter).length;

console.log(strCount("hello", "l"));
