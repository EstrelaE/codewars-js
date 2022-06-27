function filter_list(l) {
  return l.filter(e => typeof e === "number")
}

//other solutions
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
