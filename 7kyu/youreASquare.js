const isSquare = n => Number.isInteger(Math.sqrt(n)) ? true : false;

//other solutions
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));
