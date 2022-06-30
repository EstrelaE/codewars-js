function order(words){
  const arr = words.split(" ");
  const sorted = [];
  for (let i = 0; i <= arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j].indexOf(i) >= 0){
        sorted[i-1]= arr[j]
      }
    }
  }
  return sorted.join(" ")
}

//other solutions
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
