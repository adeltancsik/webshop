import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../actions/productList";


class ProductListContainer extends React.Component {
 
  render() {
    return (
      <div>
        <button onClick={() => this.props.deleteProduct(1)}>DELETE</button>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productList
  };
};

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct }
)(ProductListContainer);
