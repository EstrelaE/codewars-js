function descendingOrder(n){
  let nArr = n.toString()
  return Number(nArr.split("").sort((a,b) => b - a).join(""))
}

//other solutions
function descendingOrder(n){
return parseInt(String(n).split("").sort().reverse().join(""))
}

