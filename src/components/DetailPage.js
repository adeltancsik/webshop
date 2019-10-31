import React from "react";
import WishlistBtn from "./WishlistBtn";

export default class DetailPage extends React.Component {
  render() {
    return (
      <div>
        <h2>DetailPage</h2>
        <h4>{this.props.name}</h4>
        <img src={this.props.source} alt={"product"} />
        <WishlistBtn id={this.props.id} name={this.props.name} />
        <button
          onClick={() =>
            this.props.addToCart(
              this.props.id,
              this.props.name,
              this.props.price
            )
          }
        >
          Add to cart
        </button>
      </div>
    );
  }
}
