function howMuchILoveYou(nbPetals) {
  let phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  let phrase = "";
  for (let i = 0; i < nbPetals; i++) {
    phrase = phrases[i % 6];
  }
  return phrase;
}
