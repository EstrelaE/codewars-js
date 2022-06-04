function bingo(a) {
  let bingo = [2,7,9,14,15];
  if(bingo.every(e => a.includes(e))) {
   return "WIN"
  } else {
    return "LOSE"
  }
}
