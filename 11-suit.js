// coding challenge
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
  }
};

console.log(rps("rock", ""));
