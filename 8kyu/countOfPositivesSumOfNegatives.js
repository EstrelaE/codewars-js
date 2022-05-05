function countPositivesSumNegatives(input) {
  let result = [];
  let countPositives;
  let sumNegatives;

  if (input === null || input.length === 0) {
    result = [];
  } else {
    countPositives = 0;
    sumNegatives = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++;
      } else if (input[i] < 0) {
        sumNegatives += input[i];
      }
    }
    result.push(countPositives, sumNegatives);
  }
  return result;
}
