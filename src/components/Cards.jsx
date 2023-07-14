import React from "react";

export const Cards = ({ props }) => {
  return (
    <div className="cards">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.imgURL} alt={props.name} />
      </div>
      <div className="bottom">
        <p>{props.liked}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};
