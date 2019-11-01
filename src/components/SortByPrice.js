import React from 'react'

export default class SortByPrice extends React.Component{
    handleClick = () => {
        console.log(this.props.products);
        const fromCheap = this.props.products.sort(function (a, b) {
            return a.price - b.price;
          });
        console.log('from Cheap',fromCheap);
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>Sort by price</button>
        )
    }
}