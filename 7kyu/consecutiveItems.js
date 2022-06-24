function consecutive(arr, a, b) {
 let aIndex = arr.indexOf(a)
 let bIndex = arr.indexOf(b)
 if(aIndex + 1 === bIndex || aIndex - 1 === bIndex){
   return true
 } else {
   return false
 }
}

//other solutions
function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}

function consecutive(arr, a, b) {
  const idxA = arr.indexOf(a);
  const idxB = arr.indexOf(b);
  
  return Math.abs(idxA - idxB) === 1;
}

function consecutive(arr, a, b) {
    for(var i=0; i<arr.length-1; i++){
      if(arr[i]==a)return arr[i+1]==b;
      if(arr[i]==b)return arr[i+1]==a;
  }
  return false;
}
