function sevenAte9(str) {
  let arr = str.split("")
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "9" && arr[i-1] === "7" && arr[i+1] === "7") {
    arr.splice(i,1)
    }
  }
  
  return arr.join("")
}

//other solutions
const sevenAte9 = s => { while(s.includes('797')){s = s.replace('797', '77')} return s}
