function accum(s) {
  let letters = s.toUpperCase().split("")

  for(let i = 0; i < letters.length; i++) {
    letters[i] += letters[i].repeat(i).toLowerCase()
  }
  
  return letters.join("-")
}

//other solutions
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
