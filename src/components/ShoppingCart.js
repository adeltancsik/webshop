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
  state = {};

  quantify(item) {
    return this.state[item.name] || 1;
  }

  handleChange = item => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <h2>ShoppingCart</h2>
        <h4>
          {this.props.cart.length === 0 ? "Empty cart" : "The cart contains:"}
        </h4>
        <ul>
          {this.props.cart.map(item => {
            console.log("item test:", item);
            // console.log("the item id is:", item.id);
            const quantity = this.quantify(item);
            const total = item.price * quantity;

            return (
              <li className="productLine" key={item.id}>
                <p>{item.name}</p>
                <p> {item.price}</p>
                <input
                  type="number"
                  name={item.name}
                  value={quantity}
                  onChange={this.handleChange(item)}
                ></input>
                <p>Total amount: {total}</p>
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
                const eachPrice = item.price * this.quantify(item);
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
