import React from "react";
import { getProducts, changeProduct } from "../actions/productList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EditContainer extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getProducts();
  }

  handleSubmit = event => {
    this.props.changeProduct(
      this.state.categoryId,
      this.state.name,
      this.state.imageUrl,
      this.state.inStock,
      this.state.price
    );
  };

  handleChange = event => {
    event.preventDefault();
    console.log("event.target.name test:", event.target.name);
    console.log("event.target.value test:", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const productId = this.props.products.length
      ? this.props.products.find(product => {
          return product.id.toString() === this.props.match.params.id;
        })
      : {};

    const show = { ...productId, ...this.state };

    console.log("productId test:", productId);

    return (
      <div>
        <h3>You can edit this product</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            categoryId:
            <input
              type="number"
              name="categoryId"
              value={show.categoryId}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            name:
            <input
              type="text"
              name="name"
              value={show.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            imageUrl:
            <input
              type="text"
              name="imageUrl"
              value={show.imageUrl}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            inStock:
            <input
              type="boolean"
              name="inStock"
              value={show.inStock}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            price:
            <input
              type="number"
              name="price"
              value={show.price}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Save changes</button>
        </form>
        <br />
        <Link to={`/admin`}>
          <button>Go back to Admin</button>
        </Link>
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
  { getProducts, changeProduct }
)(EditContainer);
