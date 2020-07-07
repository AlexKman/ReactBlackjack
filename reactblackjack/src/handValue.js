import React from "react";

const HandValue = ({ lead, value }) => {
  if (typeof lead === undefined.toString()) {
    lead = "Value: ";
  }
  return <div className="hand-value">{value + lead}</div>;
};

export default HandValue;
