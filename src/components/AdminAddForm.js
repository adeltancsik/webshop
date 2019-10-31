import React from "react";

export default class AdminAddForm extends React.Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    console.log("this.state", this.state);

    this.props.addProduct(
      this.state.categoryId,
      this.state.name,
      this.state.imageUrl,
      this.state.inStock,
      this.state.price
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>You can add a new product</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            categoryId:
            <input
              type="number"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            imageUrl:
            <input
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            inStock:
            <input
              type="boolean"
              name="inStock"
              value={this.state.inStock}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            price:
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
