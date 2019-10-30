import React from "react";
import Admin from "./Admin";
import { getProducts, deleteProduct } from "../actions/productList";
import { connect } from "react-redux";
// import AdminAddForm from "./AdminAddForm";

class AdminContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
    // this.props.deleteProduct(1);
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {/* <AdminAddForm /> */}
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
  { getProducts, deleteProduct }
)(AdminContainer);
