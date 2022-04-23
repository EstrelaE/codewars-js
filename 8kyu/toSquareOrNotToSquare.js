function squareOrSquareRoot(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (Number.isInteger(Math.sqrt(num))) {
      newArray.push(Math.sqrt(num));
    } else {
      newArray.push(Math.pow(num, 2));
    }
  }
  return newArray;
}
