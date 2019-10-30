import React from "react";
import DetailPage from "./DetailPage";
import { connect } from "react-redux";

class DetailPageContainer extends React.Component {
  render() {
    const productId = this.props.products.find(product => {
      return product.id.toString() === this.props.match.params.id;
    });
    console.log(productId.name);
    return (
      <div>
        <DetailPage name={productId.name} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.productList
  };
};

export default connect(mapStateToProps)(DetailPageContainer);
