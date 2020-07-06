import React, { Component } from "react";
import PlayingCard from "./PlayingCard/PlayingCard.js";
import CardDeck from "./deck/cardDeck.js";

import "./App.css";

class App extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;
