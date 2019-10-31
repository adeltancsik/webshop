import React from "react";
import Admin from "./Admin";
import { getProducts, deleteProduct, addProduct } from "../actions/productList";
import { connect } from "react-redux";
import AdminAddForm from "./AdminAddForm";

class AdminContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h1>Admin page</h1>

        <AdminAddForm addProduct={this.props.addProduct} />
        <Admin
          products={this.props.products}
          deleteProduct={this.props.deleteProduct}
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
  { getProducts, deleteProduct, addProduct }
)(AdminContainer);
