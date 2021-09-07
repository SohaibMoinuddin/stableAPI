import React from "react";
import data from "../helpers/data.json";
import Card from "./Card";
import "../style/MailCards.css";

function MailCards(props) {
  const cards = data.map((item) => {
    return <Card card={item} />;
  });

  return (
    <>
      <div className="mailCards">
        <div className="cards">{cards}</div>
      </div>
      <div className="cardNav">
        <div className="mailCount">{cards.length + " mail items"}</div>
        <div className="navButtons">
          <button className="previousButton">Previous</button>
          <button className="nextButton">Next</button>
        </div>
      </div>
    </>
  );
}

export default MailCards;
