function getSum( a,b ){
  const arr = [a,b];
  arr.sort((a,b) => a - b)
  let result = 0
  if(a === b){
    return result = a
  } else {
  for(let i = arr[0]; i <= arr[1]; i++){
    result += i
  }
    return result
    
  }
}

//other solutions
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
