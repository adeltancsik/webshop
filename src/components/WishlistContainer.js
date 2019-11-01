import React from "react";
import Wishlist from "./Wishlist";
import { connect } from "react-redux";
import TopHeaderContainer from "./TopHeaderContainer";

class WishlistContainer extends React.Component {
  render() {
    console.log(this.props.wishlist);
    return (
      <div>
        <TopHeaderContainer />
        <Wishlist wishlist={this.props.wishlist} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlistReducer
  };
};
export default connect(mapStateToProps)(WishlistContainer);
