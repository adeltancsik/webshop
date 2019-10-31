import React from "react";
import WishlistBtn from "./WishlistBtn";
import { Link } from 'react-router-dom';

export default class DetailPage extends React.Component {
  render() {
    return (
      <div>
        
        DetailPage
        {this.props.name}

        
        <WishlistBtn id={this.props.id} name={this.props.name}/>

        <button
          onClick={() => this.props.addToCart(this.props.id, this.props.name)}
        >
          Add to cart
        </button>
        

      </div>
    );
  }
}
