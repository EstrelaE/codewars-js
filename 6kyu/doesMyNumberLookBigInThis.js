function narcissistic(value) {
  let raiseTo = String(value).length
  let result = String(value).split("")
  result = result.map(n => {
    return Math.pow(Number(n),raiseTo)
  })
  result = result.reduce((acc,a)=> acc+a)
  if(result === value) return true
  else return false 
}

//other solutions
function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;

  function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}
