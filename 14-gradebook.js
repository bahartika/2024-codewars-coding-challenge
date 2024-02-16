// Coding Challenge
// 13/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if (score <= 100 && score >= 90) {
    return "A";
  } else if (score < 90 && score >= 80) {
    return "B";
  } else if (score < 80 && score >= 70) {
    return "C";
  } else if (score < 70 && score >= 60) {
    return "D";
  } else return "F";
}

console.log(getGrade(95, 90, 93));
