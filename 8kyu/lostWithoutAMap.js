function maps(x){
    let y = [...x]
   y.forEach((item, i) => { y[i] = item * 2 })
    return y
  }