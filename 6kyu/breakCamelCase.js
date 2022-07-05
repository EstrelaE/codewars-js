function solution(string) {
 if(string !== string.toLowerCase){
   let arr = string.split("");
   let upperCase = []
   arr.forEach((letter,idx) => {
   if(letter === letter.toUpperCase()){
   upperCase.push(idx)
   }
   })
   let counter = 0
   for(let i = 0; i < upperCase.length; i++){
   	arr.splice((upperCase[i]) + counter, 0, " ")
    counter ++
   }  
   return arr.join("")
   } else {
      return string
    }
}

//other solutions
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
