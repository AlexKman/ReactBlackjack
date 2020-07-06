import React from "react";

const playingCard = ({ card, frontDisplay, clickCard }) => {
  console.log(card.toImageString());
  return (
    <section className="playing-card" onClick={clickCard}>
      {frontDisplay === true ? (
        <img
          src={require("../Components/PlayingCardImages/" +
            card.toImageString())}
        />
      ) : (
        <img src={require("../Components/PlayingCardImages/backCard.png")} />
      )}
    </section>
  );
};

export default playingCard;
