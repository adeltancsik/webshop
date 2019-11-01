import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h3>You have now in ProductList</h3>
          <div>
            <List>
              {this.props.products.map(product => {
                return (
                  <ListItem button className="productLine" key={product.id}>
                    <ListItemText>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        width="30px"
                      />
                    </ListItemText>

                    <ListItemText>{product.name}</ListItemText>
                    <ListItemText>{product.categoryId}</ListItemText>
                    <ListItemText>{product.imageUrl}</ListItemText>
                    <ListItemText>{product.false}</ListItemText>
                    <ListItemText>{product.price}</ListItemText>
                    <ListItemText>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => this.props.deleteProduct(product.id)}
                      >
                        <DeleteIcon />
                        Delete
                      </Button>
                    </ListItemText>

                    {/* <button
                      onClick={() => this.props.deleteProduct(product.id)}
                    >
                      Delete
                    </button> */}

                    <Link to={`/admin-edit/${product.id}`}>
                      <Button variant="contained" color="primary">
                        Edit
                      </Button>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </main>
      </div>
    );
  }
}
