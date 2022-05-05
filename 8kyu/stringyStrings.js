function stringy(size) {
  let string = "1";
  for (let i = 1; i < size; i++) {
    if (string.endsWith("1")) {
      string += 0;
    } else {
      string += 1;
    }
  }
  return string;
}
