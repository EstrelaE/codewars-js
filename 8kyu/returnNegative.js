function makeNegative(num) {
  return num > 0 ? -num : num;
}

//first try:
function makeNegative(num) {
  if (num > 0) {
    return num - num * 2;
  } else {
    return num;
  }
}
