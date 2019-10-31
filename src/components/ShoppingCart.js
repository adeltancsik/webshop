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
        <h4>
          {this.props.cart.length === 0 ? "Empty cart" : "The cart contains:"}
        </h4>
        <ul>
          {this.props.cart.map(item => {
            // console.log("the item id is:", item.id);
            return (
              <li key={item.id}>
                {item.name}{" "}
                <button
                  onClick={() =>
                    this.props.removeFromCart(item.id, item.name, item.price)
                  }
                >
                  Remove from cart
                </button>
              </li>
            );
          })}
        </ul>
        <div className="TotalPriceCalculator">
          <h4>
            Total price of the cart:
            {this.props.cart
              .map(item => {
                const eachPrice = item.price;
                return parseInt(eachPrice);
              })
              .reduce((a, b) => {
                return a + b;
              }, 0)}
          </h4>
        </div>
      </div>
    );
  }
}
