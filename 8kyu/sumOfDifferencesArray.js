function sumOfDifferences(arr) {
  let descending = arr.sort((a, b) => b - a);
  let dif = [];
  let result = 0;
  for (let i = 0; i < descending.length - 1; i++) {
    dif.push(descending[i] - descending[i + 1]);
  }
  for (let j = 0; j < dif.length; j++) {
    result += dif[j];
  }
  return result;
}

function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  let b = 0;
  for (let a = arr.length - 1; a > 0; a--) {
    b += arr[a] - arr[a - 1];
  }
  return b;
}

const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
