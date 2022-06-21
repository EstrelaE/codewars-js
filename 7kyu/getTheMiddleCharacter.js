function getMiddle(s)
{
  let position = 0
 if(s.length % 2 === 0){
  position = s.length / 2
   return s.substring(position - 1 , position + 1)
 } else {
     position = s.length / 2
   return s.substring(position, position + 1)
 }
}

//other solutions
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
