import React from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";

class TopHeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar cart={this.props.cart} />
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
