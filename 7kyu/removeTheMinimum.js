function removeSmallest(numbers) {
  const result = numbers;
  const min = Math.min(...result);
  const index = result.indexOf(min)
  result.splice(index,1)
  return result

}
