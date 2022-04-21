function capitalizeWord(word) {
  let wordArr = word.split("");
  wordArr[0] = word[0].toUpperCase();
  word = wordArr.join("");
  return word;
}
