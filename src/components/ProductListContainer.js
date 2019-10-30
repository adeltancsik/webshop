import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts } from "../actions/productList";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductListContainer);
