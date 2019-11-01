import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default class AdminAddForm extends React.Component {
  state = {};

  handleSubmit = event => {
    console.log("this.state", this.state);

    this.props.addProduct(
      this.state.categoryId,
      this.state.name,
      this.state.imageUrl,
      this.state.inStock,
      this.state.price
    );
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const classes = makeStyles(theme => ({
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      }
    }));

    return (
      <div>
        <h3>You can add a new product</h3>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label="categoryId"
            type="number"
            name="categoryId"
            value={this.state.categoryId}
            onChange={this.handleChange}
          />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label="imageUrl"
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />

          <br />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label="inStock"
            type="boolean"
            name="inStock"
            value={this.state.inStock}
            onChange={this.handleChange}
          />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            label="price"
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />

          <br />
          <Button variant="contained" color="primary" type="submit">
            {" "}
            Add
          </Button>
        </form>
      </div>
    );
  }
}
