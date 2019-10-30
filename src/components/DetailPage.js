import React from "react";
import WishlistBtn from "./WishlistBtn";
import { Link } from 'react-router-dom';

export default class DetailPage extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Homepage</Link>
        DetailPage
        {this.props.name}
        <button>Add to cart</button>
        <WishlistBtn id={this.props.id} name={this.props.name}/>
      </div>
    );
  }
}
