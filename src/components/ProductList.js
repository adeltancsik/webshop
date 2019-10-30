import React from "react";
import { Link } from "react-router-dom";

export default class ProductList extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Our Webshop</h1>
          <Link to="/shopping-cart">
            <button>Cart</button>
          </Link>
        </header>
        <main>
          <h2>ProductList</h2>
          <div className="productlist">
            <ul></ul>
          </div>
        </main>
      </div>
    );
  }
}
