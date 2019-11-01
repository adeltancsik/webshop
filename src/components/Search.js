import React from "react";
import { Redirect } from "react-router-dom";

export default class Search extends React.Component {
  state = {
    toSearchResult: false,
    keyword: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      keyword: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      toSearchResult: true
    });
  };

  render() {
    if (this.state.toSearchResult === true) {
      this.setState({ toSearchResult: false });
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.keyword}
            />
            {/* <input type='submit' value='Search' /> */}
            <input
              type="image"
              width={30}
              src="https://cdn4.iconfinder.com/data/icons/political-elections/50/29-512.png"
              alt="Submit Form"
            />
          </form>
          <Redirect to={`/keyword/${this.state.keyword}`} />
        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.keyword}
          />
          {/* <input type='submit' value='Search' /> */}
          <input
            type="image"
            width={30}
            src="https://cdn4.iconfinder.com/data/icons/political-elections/50/29-512.png"
            alt="Submit Form"
          />
        </form>
      );
    }
  }
}
