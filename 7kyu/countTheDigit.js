//THE MOST DIFFICULT KATA TO READ AND UNDERSTAND, SO POORLY DESCRIBED. BUT I DID IT, CHECKING THE SOLUTIONS AND THEN TRYING IT MYSELF
function nbDig(n, d) {
  // k = square nums from 0 to n 
  // how many times d appears in the square nums of k
  let result = 0;
  for(let i = 0; i <= n; i++){
    const sq = (Math.pow(i,2)+"").split("")
    sq.forEach(n => n == d ? result++ : null)
  }
  return result
  
}

//other solutions
function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}

function nbDig(n, d) {
  var o = '';
    for(var i = 0; i <= n; i++){
      o += Math.pow(i, 2);
    }
  return o.split(d).length-1
}
