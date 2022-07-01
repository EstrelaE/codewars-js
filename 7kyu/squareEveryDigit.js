function squareDigits(num){
   let result = String(num).split("")
   return Number(result.map(n => String(Math.pow(Number(n),2))).join(""))
}

//other solutions
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

function squareDigits(num){
  let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}
