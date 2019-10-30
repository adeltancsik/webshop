import React from "react";
import {addToWishlist} from '../actions/wishlist';
import { connect } from 'react-redux';

class WishlistBtn extends React.Component {
    handleClick =(event) => {
        let selectedProduct = this.props.products.find((product)=>{
          return product.id.toString() === this.props.id.toString()
        })

        console.log('selectedProduct',selectedProduct);
        console.log('this.props.products',this.props.products);
        console.log('this.props',this.props);
        this.props.addToWishlist(selectedProduct);
    }
    
    render(){
        return <button onClick={this.handleClick}>
            Add to Wishlist
        </button>
    }
}

const mapStateToProps = state => {
    return {
      products: state.productList
    };
  };
  
  export default connect(
    mapStateToProps,
    { addToWishlist }
  )(WishlistBtn);