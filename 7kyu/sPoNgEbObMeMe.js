function spongeMeme(sentence) {
  let str = sentence.split("")
  return str.map((e,i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join("")
}

//other solutions
function spongeMeme(sentence) {
return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
} 

function spongeMeme(sentence) {
  let s = sentence.split('');
  let arr = '';
  for(let i = 0; i < s.length; i++){
    if(i % 2 !== 0){ arr += s[i].toLowerCase();}
    else {arr += s[i].toUpperCase();}
  }
  return arr;
}
