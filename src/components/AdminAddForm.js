import React from "react";

export default class AdminAddForm extends React.Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      this.props.createAlbum(this.state.title);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
