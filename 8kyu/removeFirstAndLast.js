function removeChar(str) {
  return str.slice(1, -1);
}

//first try:
function removeChar(str) {
  return str.slice(1, str.length - 1);
}
