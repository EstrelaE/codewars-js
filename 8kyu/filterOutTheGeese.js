function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const newArr = birds.filter(e => !geese.includes(e) )
  return newArr
  // return an array containing all of the strings in the input array except those that match strings in geese
};

//other solutionss
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return gooseFilter.pop(geese);
  // return an array containing all of the strings in the input array except those that match strings in geese
};
