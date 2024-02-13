// Coding Challenge
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let result = 0;
  for (let i = 0; i < games.length; i++) {
    console.log(games[i][2]);
    if (games[i][0] > games[i][2]) {
      result += 3;
    } else if (games[i][0] < games[i][2]) {
      result += 0;
    } else result += 1;
  }
  return result;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
