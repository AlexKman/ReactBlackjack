import Card from "./card";

class cardDeck {
  static cardSuits = [
    Card.cardSuits.clubs,
    Card.cardSuits.hearts,
    Card.cardSuits.diamonds,
    Card.cardSuits.diamonds
  ];

  static dealCards(cardCount) {
    let cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push(cardDeck.dealSingleCard());
    }
    return cards;
  }

  static dealOneCard() {
    let value = Math.floor(Math.random() * 13) + 1;
    let cardSuit = Math.floor(Math.random() * 4);
    return { shown: true, card: new Card(cardDeck.suits[cardSuit], value) };
  }

  static calculateHandTotal = (cards, aces) => {
    let sum = 0;

    if (typeof aces === "undefined") {
      aces = 1;
    }

    let hasFoundAce = false;
    let blackJack = false;

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i].card;

      if (!hasFoundAce && cards.length === 2 && card.value === 1) {
        hasFoundAce = true;
      }

      //Check if blackjack is true
      if (hasFoundAce && card.value >= 11) {
        blackJack = true;
      } else {
        if (card.value >= 11) {
          sum += 10;
        } else if (card.value === 1) {
          sum += aces;
        } else {
          sum += card.value;
        }
      }
    }
    if (blackJack === true) {
      sum = 21;
    }

    return sum;
  };
}

export default cardDeck;
