import React, { Component } from "react";
import "./App.css";
import PlayingCard from "./components/PlayingCard/PlayingCard.js";
import Deck from "./components/deck/Deck";
import HandValue from "./components/handValue/handValue";

class App extends Component {
  state = {
    playerHand: [],
    dealerHand: [],
    gameWon: false,
    gameOver: false,
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

  dealCardsButtonClick = () => {
    let playerHand = this.dealCards();
    let dealerHand = this.dealCards();
    dealerHand[0].shown = false;
    this.setState({ playerHand, dealerHand, gameOver: false, gameWon: false });
  };

  hitPlayer = () => {
    let card = Deck.dealSingleCard();
    let cards = [card, ...this.state.playerHand];
    this.setState({ playerHand: cards });
  };

  stayPlayer = () => {
    let dealerHand = [...this.state.dealerHand];
    let gameWon = false;
    let gameOver = true;
    dealerHand[0].shown = true;
    let dealerTotal = Deck.calculateHandTotal(dealerHand);
    let playerTotal = Deck.calculateHandTotal(this.state.playerHand);

    while (dealerTotal <= 16 && dealerTotal < playerTotal) {
      dealerHand.push(Deck.dealSingleCard());
      dealerTotal = Deck.calculateHandTotal(dealerHand);
    }

    dealerTotal = Deck.calculateHandTotal(dealerHand);
    if (dealerTotal > 21) {
      gameWon = true;
    } else if (dealerTotal > playerTotal) {
      gameWon = false;
    } else if (playerTotal <= 21 && playerTotal > dealerTotal) {
      gameWon = true;
    }

    this.setState({ dealerHand, gameWon, gameOver });
  };

  render() {
    let playerHand = this.state.playerHand.map((card, index) => (
      <PlayingCard card={card.card} displayFront={card.shown} />
    ));

    let dealerHand = this.state.dealerHand.map((card, index) => (
      <PlayingCard card={card.card} displayFront={card.shown} />
    ));

    let playerTotal = Deck.calculateHandTotal(this.state.playerHand);
    let dealerTotal = Deck.calculateHandTotal(this.state.dealerHand);

    return (
      <div className="App">
        <div className="hand">
          {playerHand}
          <HandValue leading="Your Hand: " value={playerTotal} />
        </div>

        {this.state.gameOver ? (
          this.state.gameWon ? (
            <h1 className="win-headers">
              You have won! You have {playerTotal}, the dealer has {dealerTotal}
              .
            </h1>
          ) : (
            <h1 className="win-headers">
              Sorry, you lost. Dealer has {dealerTotal}, you have {playerTotal}.{" "}
            </h1>
          )
        ) : (
          <></>
        )}

        {playerTotal >= 22 ? (
          <h1 className="win-headers">You are Bust!</h1>
        ) : (
          this.state.gameOver === false && (
            <div className="player-buttons">
              <button onClick={this.hitPlayer}>Hit Me!</button>
              <button onClick={this.stayPlayer}>Stay</button>
            </div>
          )
        )}
        <div className="hand">
          <h2>Dealer's Hand</h2>
          {dealerHand}
        </div>
        <button onClick={this.dealCardsButtonClick}>Deal</button>
      </div>
    );
  }
}

export default App;
