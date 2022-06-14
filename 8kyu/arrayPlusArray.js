function arrayPlusArray(arr1, arr2) {
  arr1 = arr1.reduce((acc,c) => acc + c)
  arr2 = arr2.reduce((acc,c) => acc+ c)
  return arr1 + arr2;
}

//other solutions
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a+b,0)
}

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
