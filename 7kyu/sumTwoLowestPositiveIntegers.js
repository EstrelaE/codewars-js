function sumTwoSmallestNumbers(numbers) {  
  let twoLowest = numbers.sort((a,b)=> a-b)
  twoLowest.splice(2,Number.MAX_VALUE)

  return twoLowest.reduce((acc,a) => acc + a, 0)
}

//other solutions
function sumTwoSmallestNumbers(numbers) {  
  let twoLowest = numbers.sort((a,b)=> a-b)
  return twoLowest[0] + twoLowest[1]
}

function sumTwoSmallestNumbers(numbers) {  
  const [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

function sumTwoSmallestNumbers(numbers) {  
return numbers.sort((a,b) => a -b).slice(0,2).reduce((acc,a) => acc + a)

}
