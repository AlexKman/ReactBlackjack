import React from "react";
import "../handValue/handValue.css";

const HandValue = ({ leading, value }) => {
  if (typeof leading === "undefined") {
    leading = "Value: ";
  }
  return <div className="hand-value">{leading + value}</div>;
};

export default HandValue;
