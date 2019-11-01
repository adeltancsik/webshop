import React from "react";
import DetailPage from "./DetailPage";
import { connect } from "react-redux";
import { addToCart } from "../actions/shoppingCart";
import TopHeaderContainer from "./TopHeaderContainer";

class DetailPageContainer extends React.Component {
  render() {
    const productId = this.props.products.find(product => {
      return product.id.toString() === this.props.match.params.id;
    });

    if (productId) {
      return (
        <div>
          <TopHeaderContainer />
          <DetailPage
            name={productId.name}
            id={productId.id}
            price={productId.price}
            addToCart={this.props.addToCart}
            source={productId.imageUrl}
          />
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
const mapStateToProps = state => {
  return {
    products: state.productList
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(DetailPageContainer);
