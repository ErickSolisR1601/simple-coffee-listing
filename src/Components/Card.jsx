import React from "react";
import "../Styles/Card.css";
import Star_fill from "../Img/Star_fill.svg";
import Star from "../Img/Star.svg";

function Card({ name, image, price, rating, votes, available, popular }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      {popular && (
        <div className="popular-tag">
          <span>Popular</span>
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">{price}</span>
        </div>

        <div className="card-rating">
          <div className="rating-info">
            <img
              src={rating > 0 ? Star_fill : Star}
              alt={rating > 0 ? Star_fill : Star}
              className="star"
            />
            <span className="rating">{rating > 0 ? rating : "No ratings"}</span>
            <span className="votes">{votes > 0 ? `(${votes} votes)` : ""}</span>
          </div>
          {!available && <span className="availability">Sold out</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;
