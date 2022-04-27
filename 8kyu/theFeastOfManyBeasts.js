function feast(beast, dish) {
  const beastArr = beast.split("");
  if (
    dish.startsWith(beastArr[0]) &&
    dish.endsWith(beastArr[beastArr.length - 1])
  ) {
    return true;
  } else {
    return false;
  }
}
