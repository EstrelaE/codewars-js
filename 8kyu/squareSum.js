function squareSum(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let squaredNum = Math.pow(numbers[i], 2);
    result.push(squaredNum);
  }
  return result.reduce((a, b) => a + b, 0);
}
