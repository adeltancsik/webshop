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
                {/* <button onClick={() => props.incrementLike(product.id)}>
                  👍
                </button> */}
              </div>
            );
          })}
          {console.log(
            props.products
              .map(product => {
                return parseInt(product.price);
              })
              .sort((a, b) => {
                return a - b;
              })
          )}
        </div>
      </main>
    </div>
  );
}
