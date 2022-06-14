function isVow(a) {
  const vowelCodes = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  return a.map(num => vowelCodes[num] ? vowelCodes[num] : num)
}

//other solutions
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}

const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
