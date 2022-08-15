import React from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
  return (
    <div className="mycard">
      <img className="card-image" src={props.image} alt="online" />

      <h4>{props.heading}</h4>
      <p>
        {props.details}
      </p>
    </div>
  );
}

export default FeatureCard;
