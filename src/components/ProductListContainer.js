import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../actions/productList";
import { addLike } from "../actions/likedness";
import TopHeaderContainer from "./TopHeaderContainer";
import { Button } from "@material-ui/core";

import CategoryNavbar from './CategoryNavbar';


class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  incrementLike = productId => {
    this.props.addLike(productId);
  };

  render() {
    return (
      <div>
        <Link to={`/admin`}>
          <Button>Admin</Button>
        </Link>

        <TopHeaderContainer />


        
        <div>
          <CategoryNavbar />
        </div>

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
    products: state.productList
  };
};

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct, addLike }
)(ProductListContainer);
