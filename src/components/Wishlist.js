import React from 'react';

export default class Wishlist extends React.Component {
    render(){
        return (
            <div>
                <h1>Wish List</h1>
                {console.log('this.props',this.props.wishlist)}
                <ul> {this.props.wishlist.map((product)=>{
                    return <li key={product.id}>
                            {product.name} 
                            <button>Remove from wishlist</button>
                            <button>Add to shopping cart</button>
                           </li>
                })} </ul>
            </div>
        )
    }
}
