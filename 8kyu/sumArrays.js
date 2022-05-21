function sum(numbers) {
  let result = 0;
  if (numbers.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
  }
  return result;
}
