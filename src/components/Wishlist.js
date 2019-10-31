import React from 'react';
import {removeFromWishlist} from '../actions/wishlist';
import {addToCart} from '../actions/shoppingCart';
import {connect} from 'react-redux';

class Wishlist extends React.Component {
    
    handleRemove = (product) => () => {
         
        this.props.removeFromWishlist(product);
    }

    handleAddToCart = (product) => () => {
        this.props.addToCart(product.id, product.name, product.price)
        console.log('add to cart from wishlist')
    }
    
    render(){
        return (
            <div>
                <h1>Wish List</h1>

                <h3>You have {this.props.wishlist.length} item(s) on the wishlist</h3>

                {console.log('this.props',this.props.wishlist)}
                <ul> {this.props.wishlist.map((product)=>{
                    return <li key={product.id}>
                            {product.name}, price:{product.price} 
                            <button onClick={this.handleRemove(product)}>Remove from wishlist</button>
                            <button onClick={this.handleAddToCart(product)}>Add to shopping cart</button>
                           </li>
                })} </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      wishlist: state.wishlistReducer
    };
  };

export default connect(
    mapStateToProps,
    { removeFromWishlist, addToCart }
  )(Wishlist);
