import React from "react";
import company from "../assets/company.svg";
import recipient from "../assets/recipient.svg";
import processing from "../assets/processing.svg";
import forward from "../assets/forward.svg";
import scan from "../assets/scan.svg";
import shred from "../assets/shred.svg";

function Card(props) {
  const properties = [];

  if (props.card.businessRecipient) {
    properties.push({
      image: company,
      text: props.card.businessRecipient,
    });
  }

  if (props.card.individualRecipient) {
    properties.push({
      image: recipient,
      text: props.card.individualRecipient,
    });
  }

  if (props.card.forward) {
    if (props.card.forward.status === "processing") {
      properties.push({
        image: processing,
        text: "Forward " + props.card.forward.status,
      });
    } else {
      properties.push({
        image: forward,
        text: "Forwarded",
      });
    }
  }

  if (props.card.scan) {
    if (props.card.scan.status === "processing") {
      properties.push({
        image: processing,
        text: "Scan " + props.card.scan.status,
      });
    } else {
      properties.push({
        image: scan,
        text: "Scanned",
      });
    }
  }

  if (props.card.shred) {
    if (props.card.shred.status === "processing") {
      properties.push({
        image: processing,
        text: "Shred " + props.card.shred.status,
      });
    } else {
      properties.push({
        image: shred,
        text: "Shredded",
      });
    }
  }

  return (
    <div className="cardItem">
      <div
        className="img"
        style={{ backgroundImage: `url(${props.card.imageUrl})` }}
      ></div>
      <div className="text">
        <p className="from">{props.card.from}</p>
        {properties.map((item) => {
          return (
            <div className="propertyRow">
              <img src={item.image}></img>
              <div className="propertyText">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
