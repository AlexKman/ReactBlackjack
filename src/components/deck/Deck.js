import Card from "../card";

class Deck {
  static suits = [
    Card.suits.clubs,
    Card.suits.hearts,
    Card.suits.diamonds,
    Card.suits.spades,
  ];

  static dealCards(cardCount) {
    let cards = [];

    for (let i = 0; i < cardCount; i++) {
      cards.push(Deck.dealSingleCard());
    }

    return cards;
  }

  static dealSingleCard() {
    let val = Math.floor(Math.random() * 13) + 1;
    let suit = Math.floor(Math.random() * 4);
    return { shown: true, card: new Card(Deck.suits[suit], val) };
  }

  static calculateHandTotal = (cards, ace) => {
    let sum = 0;

    if (typeof ace === "undefined") {
      ace = 1;
    }

    let foundAce = false;
    let blackJack = false;

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i].card;

      if (!foundAce && cards.length === 2 && card.value === 1) {
        foundAce = true;
      }

      // Checks for blackjack scenario
      if (foundAce && card.value > 10) {
        blackJack = true;
      } else {
        if (card.value > 10) {
          sum += 10; // All face cards (jacks, queens, kings) have a value of 10
        } else if (card.value === 1) {
          sum += ace;
        } else {
          sum += card.value;
        }
      }
    }
    if (blackJack) {
      sum = 21;
    }

    return sum;
  };
}

export default Deck;
