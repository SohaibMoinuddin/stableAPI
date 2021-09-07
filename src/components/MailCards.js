import React from "react";
import data from "../helpers/data.json";
import Card from "./Card";
import "../style/MailCards.css";
import { Button, ButtonGroup } from "reactstrap";

function MailCards(props) {
  const cards = data.map((item) => {
    return <Card card={item} />;
  });

  return (
    <>
      <div className="mailCards">
        <div className="cards">{cards}</div>
      </div>
      <div>
        <div className="mailCount">{cards.length + " mail items"}</div>
        <div className="navButtons">
          <ButtonGroup>
            <Button>Previous</Button>
            <Button>Next</Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default MailCards;
