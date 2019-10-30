import React from "react";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  return (
    <div>
      <header>
        <h1>Our Webshop</h1>
        <Link to="/shopping-cart">
          <button>Cart</button>
        </Link>
      </header>
      <main>
        <h2>ProductList</h2>
        <div className="productlist">
          <ul>
            {props.products.map(product => {
              return (
                <li key={product.id}>
                  <Link to={`/detail-page/${product.id}`}>
                    <p>{product.name}</p>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width="60px"
                    />
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
