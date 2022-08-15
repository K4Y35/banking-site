import React from "react";
import "./ArticleCard.css";

function ArticleCard(props) {
  return (
    <div className="card-wrapper">
     
        <img src={props.images} alt="cardIMG" />

      <div className="card-body">
        <h6>{props.author}</h6>

        <h3>{props.heading}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
