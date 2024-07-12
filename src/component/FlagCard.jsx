import React from "react";
import "./FlagCard.css";
const FlagCard = ({ flag, name, alth }) => {
  return (
    <div className="countryCard">
      <img src={flag} alt={alth} />
      <h3>
        <span>{name}</span>
      </h3>
    </div>
  );
};
export default FlagCard;
