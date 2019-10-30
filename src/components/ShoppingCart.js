import React from "react";

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h2>ShoppingCart</h2>
        <h3>Cart items: {this.props.cart.length} </h3>
      </div>
    );
  }
}
