function smash (words) 
{ if (words.length !== 0 ) {
  let smashedArray = words.reduce ((a,b)=> `${a} ${b}`)
  
   return smashedArray ;}
 else {return ""}
};