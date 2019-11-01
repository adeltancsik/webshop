import React from "react";
import WishlistBtn from "./WishlistBtn";
import "./DetailPage.css";

export default class DetailPage extends React.Component {
  render() {
    return (
      <div className="detailPage">
        <h2>DetailPage</h2>
        <h4>{this.props.name}</h4>
        <h5>Price: {this.props.price}</h5>
        <img src={this.props.source} alt={"product"} />
        <WishlistBtn id={this.props.id} name={this.props.name} />
        <button
          onClick={event => {
            this.props.addToCart(
              this.props.id,
              this.props.name,
              this.props.price
            );
            event.target.disabled = true;
          }}
        >
          Add to cart
        </button>
      </div>
    );
  }
}
