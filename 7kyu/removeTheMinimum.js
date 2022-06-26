function removeSmallest(numbers) {
  const result = numbers;
  const min = Math.min(...result);
  const index = result.indexOf(min)
  result.splice(index,1)
  return result

}
//SECOND TRYYYY
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min)
  return numbers.filter((e,i) => i !== index)
}

//other solutions
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
