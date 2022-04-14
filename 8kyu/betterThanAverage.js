function betterThanAverage(classPoints, yourPoints) {
  console.log("hello");
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  console.log(sum);
  let average = sum + yourPoints / (classPoints.length + 1);
  console.log(average);
  if (yourPoints > average) {
    console.log("true");
  } else {
    console.log("false");
  }
}

betterThanAverage([2, 3], 5);
