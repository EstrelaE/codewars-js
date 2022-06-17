function printerError(s) {
  const colors = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
  const str = s.split("")
  let errors = 0;
  for(let i = 0; i < str.length; i++){
    if(!colors.includes(str[i])){
      errors++
    }
  }
  
  return `${errors}/${s.length}`
  }

//other solutions
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}
