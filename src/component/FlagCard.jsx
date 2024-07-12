import React from "react";
import "./FlagCard.css";
const FlagCard = (flag, name, alth) => {
  return (
    <div className="countryCard1">
      <img src={flag.flag} alt={flag.name} />
      <h3>{flag.name}</h3>
    </div>
  );
};
export default FlagCard;
