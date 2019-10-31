import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";

class ShoppingCartContainer extends React.Component {
  render() {
    console.log("this cart contains:", this.props.cart);
    return (
      <div>
        Hey?
        <ShoppingCart cart={this.props.cart} products={this.props.products} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.shoppingcart,
    products: state.productList
  };
};

export default connect(mapStateToProps)(ShoppingCartContainer);
