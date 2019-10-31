import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";

class TopHeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar />
          <h1>Our Webshop</h1>
          <h3>Cart items: {this.props.cart.length} </h3>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.shoppingcart
  };
};

export default connect(mapStateToProps)(TopHeaderContainer);
