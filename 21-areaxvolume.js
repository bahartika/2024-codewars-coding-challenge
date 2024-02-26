// Coding Challenge
// 21/366
// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(width, height, depth) {
  let area = 2 * (width * height + width * depth + height * depth);
  let volume = width * height * depth;
  let result = [area, volume];
  return result;
}

console.log(getSize(2, 4, 6));
