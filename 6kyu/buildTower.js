function towerBuilder(nFloors) {
  let pyramid = [];
  for (let i = 0; i < nFloors; i++) {
    pyramid.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }

  return pyramid;
}
