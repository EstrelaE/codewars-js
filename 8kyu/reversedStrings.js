//first try
function solution(str) {
  let reversedStr = str.split("");
  reversedStr = reversedStr.reverse();
  return reversedStr.join("");
}

//second try
function solution(str) {
  return str.split("").reverse().join("");
}
