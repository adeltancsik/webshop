import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class ShoppingCart extends React.Component {
  state = {};

  quantify(item) {
    return this.state[item.name] || 1;
  }

  handleChange = item => event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const classes = makeStyles(theme => ({
      root: {
        padding: theme.spacing(3, 2)
      }
    }));

    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          ShoppingCart
        </Typography>

        <Typography component="p">
          {this.props.cart.length === 0
            ? "Your cart is empty now"
            : "The cart contains:"}
        </Typography>
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
          <Typography component="p">
            Total price of the cart:
            {this.props.cart
              .map(item => {
                const eachPrice = item.price * this.quantify(item);
                return parseInt(eachPrice);
              })
              .reduce((a, b) => {
                return a + b;
              }, 0)}
          </Typography>
        </div>
      </Paper>
    );
  }
}
