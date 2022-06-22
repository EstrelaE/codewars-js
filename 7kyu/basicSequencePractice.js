function sumOfN(n) {
 let result = []
   for(let i = 0; i <= n; i++){
    let count = 0
    for (let j = 0; j <= i; j++) {
     count = count + j
    }
     
    result.push(count)
  }
  
 if(n < 0) {
    for(let i = 0; i >= n; i--){
    let count = 0
    for (let j = 0; j >= i; j--) {
     count = count + j
    }
     
    result.push(count)
  }
   
 }
return result
};

//othersolutions
function sumOfN(n) {
  var array = [];
  array[0] = 0;
  for (var i = 1; i < Math.abs(n)+1; i++) {
    if (n > 0) array[i] = array[i-1]+i;
    else array[i] = array[i-1]-i;
  }
  return array;
};
