import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <Link className="active" to="/">
            Homepage
          </Link>
          <Link className="cart" to="/shopping-cart">
            <img
              alt={"cart"}
              width={30}
              src={"https://img.icons8.com/pastel-glyph/2x/shopping-cart.png"}
            />
          </Link>
          <h3>{this.props.cart.length} </h3>
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="heading">
          <h1>Our Webshop</h1>
        </div>
      </div>
    );
  }
}
