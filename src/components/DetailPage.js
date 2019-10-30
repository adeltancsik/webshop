import React from "react";

export default class DetailPage extends React.Component {
  render() {
    return (
      <div>
        DetailPage
        {this.props.name}
        <button onClick={() => this.props.addToCart(this.props.id)}>
          Add to cart
        </button>
        <button>Add to wishlist</button>
      </div>
    );
  }
}
