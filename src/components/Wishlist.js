import React from 'react';

export default class Wishlist extends React.Component {
    handleRemove = (event) => {
        console.log('remove the item')
    }

    handleAddToCart = (event) => {
        console.log('add to cart from wishlist')
    }
    
    render(){
        return (
            <div>
                <h1>Wish List</h1>
                {console.log('this.props',this.props.wishlist)}
                <ul> {this.props.wishlist.map((product)=>{
                    return <li key={product.id}>
                            {product.name} 
                            <button onClick={this.handleRemove}>Remove from wishlist</button>
                            <button onClick={this.handleAddToCart}>Add to shopping cart</button>
                           </li>
                })} </ul>
            </div>
        )
    }
}
