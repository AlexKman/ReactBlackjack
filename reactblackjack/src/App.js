import React, { Component } from "react";
import "./App.css";
import PlayingCard from "./PlayingCard/PlayingCard";
import Deck from "./deck/cardDeck";

class App extends Component {
  state = {
    playerHand: [],
    dealerHand: [],
    gameWon: false,
    gameOver: false
  };

  componentDidMount() {
    let playerHand = this.dealCards();
    let dealerHand = this.dealCards();
    dealerHand[0].shown = false;
    this.setState({ playerHand, dealerHand });
  }

  dealCards = () => {
    let deck = Deck.dealCards(2);

    return deck;
  };

  render() {
    let playerHand = this.state.playerHand.map((card, index) => (
      <PlayingCard card={card.card} displayFront={card.shown} />
    ));

    return (
      <div className="App">
        <div className="hand">{playerHand}</div>
        <button onClick={this.dealCards}>Deal Button</button>
      </div>
    );
  }
}

export default App;
