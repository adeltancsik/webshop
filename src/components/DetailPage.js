import React from "react";
import WishlistBtn from "./WishlistBtn";

export default class DetailPage extends React.Component {
  render() {
    return (
      <div>
        DetailPage
        {this.props.name}
        <button>Add to cart</button>
        <WishlistBtn id={this.props.id} name={this.props.name}/>
      </div>
    );
  }
}
