import React from "react";
import { Link } from "react-router-dom";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h3>You have now in ProductList</h3>
          <div>
            <ul>
              {this.props.products.map(product => {
                return (
                  <li className="productLine" key={product.id}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width="30px"
                    />

                    <p>{product.name}</p>
                    <p>{product.categoryId}</p>
                    <p>{product.imageUrl}</p>
                    <p>{product.false}</p>
                    <p>{product.price}</p>
                    <button
                      onClick={() => this.props.deleteProduct(product.id)}
                    >
                      Delete
                    </button>

                    <Link to={`/admin-edit/${product.id}`}>
                      <button>Edit</button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}
