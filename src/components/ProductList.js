import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList(props) {
  return (
    <div>
      <main>
        <h2>ProductList</h2>
        <div className="productlist">
          {props.products.map(product => {
            return (
              <div className="item" key={product.id}>
                <Link to={`/detail-page/${product.id}`}>
                  <h3>{product.name}</h3>
                  <img src={product.imageUrl} alt={product.name} width="35%" />
                </Link>
                <p>{product.price} €</p>
                <button onClick={() => props.incrementLike(product.id)}>
                  👍 {product.like}
                </button>
              </div>
            );
          })}
          {/* sorting: */}
          {/* {console.log(
            props.products
              .map(product => {
                return parseInt(product.price);
              })
              .sort((a, b) => {
                return a - b;
              })
          )} */}
          {/* {console.log(
            props.products
              .sort((a, b) => {
                return a.price - b.price;
              })
              .map // display products
          )} */}
        </div>
      </main>
    </div>
  );
}
