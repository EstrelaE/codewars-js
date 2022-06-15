const number=function(array){
  if(!array.length){
    return array
  } else {
  return array.map((e, index) => `${index+1}: ${e}`)
  }

}

//other solutions
const number = array => array.map((n, i) => `${i + 1}: ${n}`);
