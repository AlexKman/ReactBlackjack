import React, { Component } from "react";
import PlayingCard from "./PlayingCard/PlayingCard.js";
import CardDeck from "./deck/cardDeck.js";

import "./App.css";

class App extends React.Component {
  state = {
    playerHand: [],
    dealerHand: [],
    gameWon: false,
    gameOver: false
  };

  dealCards = () => {
    let cardDeck = cardDeck.dealCards(2);

    return cardDeck;
  };
  render() {
    return <h1>{this.cardDeck}</h1>;
  }
}

export default App;
