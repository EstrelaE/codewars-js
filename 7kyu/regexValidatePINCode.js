function validatePIN (pin) {
 const arr = pin.split("");
 const isNaN = arr.find(e => !(parseInt(e) >= 0))
 if((pin.length === 4 || pin.length === 6) && !isNaN ){
   return true
 } else {
   return false
 }
}

//other solutions
function validatePIN (pin) {
  //return true or false
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}

function validatePIN (pin) {
    for (let i of pin) {
        if (!isFinite(parseInt(i))) return false;
    }
    return pin.length === 4 || pin.length === 6;
}

function validatePIN (pin) {
  return Array.from(pin).every(c => c >= '0' && c <= '9') && [4, 6].includes(pin.length);
}
