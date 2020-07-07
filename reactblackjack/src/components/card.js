class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  toImageString() {
    console.log(`Suit: ${this.suit} Value: ${this.value}`);
    // 2 to 9
    if (this.value > 1 && this.value <= 10) {
      return `${this.value}${this.suit.charAt(0).toUpperCase()}.png`;
    }

    // Logic in case of Aces
    if (this.value === 1) {
      return `A${this.suit.charAt(0).toUpperCase()}.png`;
    }

    // All face cards (jacks, queens, kings)
    let face = "";
    if (this.value === 11) {
      face = "J";
    } else if (this.value === 12) {
      face = "Q";
    } else if (this.value === 13) {
      face = "K";
    }
    return `${face}${this.suit.charAt(0).toUpperCase()}.png`;
  }
}

Card.suits = {
  hearts: "hearts",
  clubs: "clubs",
  diamonds: "diamonds",
  spades: "spades"
};

export default Card;
