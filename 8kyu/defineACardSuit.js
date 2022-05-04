function defineSuit(card) {
  let suit = "";
  if (card.endsWith("♣")) {
    suit = "clubs";
  } else if (card.endsWith("♦")) {
    suit = "diamonds";
  } else if (card.endsWith("♥")) {
    suit = "hearts";
  } else if (card.endsWith("♠")) {
    suit = "spades";
  }
  return suit;
}
