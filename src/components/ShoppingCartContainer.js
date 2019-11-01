import React from "react";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/shoppingCart";
import TopHeaderContainer from "./TopHeaderContainer";

class ShoppingCartContainer extends React.Component {
  render() {
    console.log("this cart contains:", this.props.cart);
    return (
      <div>
        <TopHeaderContainer />
        <ShoppingCart
          cart={this.props.cart}
          products={this.props.products}
          removeFromCart={this.props.removeFromCart}
        />
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

export default connect(
  mapStateToProps,
  { removeFromCart }
)(ShoppingCartContainer);
