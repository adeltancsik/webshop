import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../actions/productList";
import { addLike, sortByPopularity } from "../actions/likedness";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  incrementLike = productId => {
    this.props.addLike(productId);
  };

  popular = () => {
    this.props.sortByPopularity();
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
          popular={this.popular}
          popularity={this.props.popularity}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productList,
    popularity: state.popularity
  };
};

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct, addLike, sortByPopularity }
)(ProductListContainer);
