import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Link className="active" to="/">
          Homepage
        </Link>
        <Link to="/shopping-cart">Shoppingcart</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    );
  }
}
