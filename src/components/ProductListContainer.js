import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../actions/productList";
import { addLike } from "../actions/likedness";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  incrementLike = productId => {
    console.log("this is the product id: ", productId);
    console.log("likedness is: ", this.props.likedness);
    this.props.addLike(productId);
    console.log("likedness length is: ", this.props.likedness.length + 1);
    this.setLike(productId);
  };
  setLike = productId => {
    if (this.props.likedness.includes(productId)) {
      console.log("includes this product id: ", productId);
    }
  };

  render() {
    return (
      <div>
        <Link to={`/admin`}>
          <button>Admin</button>
        </Link>

        <ProductList
          products={this.props.products}
          incrementLike={this.incrementLike}
          likedness={this.props.likedness}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productList,
    likedness: state.likedness
  };
};

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct, addLike }
)(ProductListContainer);
