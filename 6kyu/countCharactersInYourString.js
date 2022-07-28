function count (string) {  
  const obj = {};
  let letters = string.split("");
  for(let i = 0; i < letters.length; i++){
    let letter = letters[i]
    if(obj[letter]){
      obj[letter] += 1
    } else {
      obj[letter] = 1  
    }
  }
  return obj
}

//other solutions
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

function count (string) {  
  return string.split("").reduce(function(obj, elem) {
    if (elem in obj)
      obj[elem]++;
    else
      obj[elem] = 1;
    return obj;
  }, {});
}
