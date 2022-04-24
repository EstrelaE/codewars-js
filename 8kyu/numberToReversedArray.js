function digitize(n) {
  let numArray = n.toString().split("").map(Number).reverse();
  return numArray;
}
