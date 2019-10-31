import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../actions/productList";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  
  render() {
    return (
      <div>
        <Link to={`/admin`}>
          <button>Admin</button>
        </Link>

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
