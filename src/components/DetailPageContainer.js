import React from "react";
import DetailPage from "./DetailPage";
import { connect } from "react-redux";
import { addToCart } from "../actions/shoppingCart";

class DetailPageContainer extends React.Component {
  render() {
    const productId = this.props.products.find(product => {
      return product.id.toString() === this.props.match.params.id;
    });

    if (productId){
      return (
        <div>
          <DetailPage name={productId.name} id={productId.id} addToCart={this.props.addToCart}/>
        </div>
      )
    }else{
      return <h1>Loading...</h1>
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
