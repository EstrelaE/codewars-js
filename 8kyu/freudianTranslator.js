function toFreud(string) {
  if (string === "") {
    return string;
  }
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = "sex";
  }
  words = words.join(" ");
  return words;
}

// ERROR
// Expected: '\'sex sex sex sex\'', instead got: '[Function: toFreud]'
