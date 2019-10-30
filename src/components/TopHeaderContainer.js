import React from "react";
import { Link } from "react-router-dom";

export default class TopHeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Our Webshop</h1>
          <Link to="/shopping-cart">
            <button>Cart</button>
          </Link>
        </header>
      </div>
    );
  }
}
