// Coding Challenge
// 69/366
// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

let gunners = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };

const cannonsReady = (gunners) => (Object.values(gunners).every((value) => value === "aye") ? "Fire!" : "Shiver me timbers!");
