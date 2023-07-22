import React, { Component } from "react";

export class Cards extends Component {
  render() {
    const { img, title, description, price, off } = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img src={img} alt="img" />
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h1 className="card__price">{price}</h1>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__price-off">{off}</span>
        </div>
      </div>
    );
  }
}
