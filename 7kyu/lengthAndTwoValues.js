function alternate(n, firstValue, secondValue){
  const result = []
  if (n > 0){
    result.push(firstValue)
  }
  for (let i = 1; i < n ; i++ ) {
    if(result[result.length - 1] === firstValue) {
      result.push(secondValue)
    } else if (result[result.length - 1] === secondValue) {
      result.push(firstValue)
    }
  }
  return result
}

//other solutions
function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}

const alternate = (n, a, b) => n ? [a, ...alternate(n-1, b, a)] : [];

function alternate(n, firstValue, secondValue){
  let arr = []
  while(arr.length < n){
    arr.push(firstValue, secondValue)
  }
  if(arr.length > n){
  arr.pop()
  }
  return arr
}
