function past(h, m, s){
 return (h*3600000) + (m*60000) + (s * 1000)
}

//another solution using Date
function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}
