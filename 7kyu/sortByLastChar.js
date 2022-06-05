function last(x) {
  //split string into array of words
  //get char at index length-1
  //sort array
  //return array of words alphabetically sorted by final char

  return x.split(" ").sort((a, b) => {
    if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
      return a;
    }
    return a.charAt(a.length - 1) > b.charAt(b.length - 1) ? 1 : -1;
  });
}

//Other solution
function last(x) {
  return x.split(" ").sort((a, b) =>a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)) ;

}

