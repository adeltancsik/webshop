import React from "react";

export default class ShoppingCart extends React.Component {
  // componentDidMount = () => {
  //   const getItems = () => {
  //     const itemId = this.props.cart.map(item => item.id);
  //     const fileteredArray = this.props.products.filter(product => {
  //       return itemId.includes(product.id);
  //     });
  //     return fileteredArray;
  //   };
  //   getItems();
  // };
  render() {
    return (
      <div>
        <h2>ShoppingCart</h2>
        <h3>Cart items: {this.props.cart.length} </h3>
        <h4>The cart contains:</h4>
        <ul>
          {this.props.cart.map(item => {
            console.log("the item id is:", item.id);
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
