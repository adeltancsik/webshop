import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";

class TopHeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar cart={this.props.cart} wishlist={this.props.wishlist} />
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.shoppingcart,
    wishlist: state.wishlistReducer
  };
};

export default connect(mapStateToProps)(TopHeaderContainer);
