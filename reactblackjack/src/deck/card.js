class Card {
  constructor(cardSuit, cardValue) {
    this.cardSuit = cardSuit;
    this.cardValue = cardValue;
  }

  toImageString() {
    // Logic for 1-10 face cards
    if (this.cardValue > 1 && this.cardValue <= 10) {
      return `${this.cardValue}${this.cardSuit.charAt(0).toUpperCase()}.png`;
    }

    // Logic in case of aces
    if (this.value === 1) {
      return `A${this.suit.charAt(0).toUpperCase()}.png`;
    }

    // Logic behind the face card for the honor cards (Jacks, Queens and Kings)
    let cardFace = "";
    if (this.cardValue === 11) {
      face = "J";
    } else if (this.cardValue === 12) {
      face = "Q";
    } else if (this.cardValue === 13) {
      face = "K";
    } else {
      console.log("default happened " + this.cardValue);
    }
    return `${cardFace}${this.cardSuit.charAt(0).toUpperCase()}.png`;
  }
}

Card.suits = {
  hearts: "hearts",
  clubs: "clubs",
  diamonds: "diamonds",
  spades: "spades"
};

export default Card;
