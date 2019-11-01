import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function FilteredByPopularity(props) {
  return (
    <div>
      <main>
        <h2>ProductList</h2>
        <div className="productlist">
          {props.products
            .sort((a, b) => {
              return b.like - a.like;
            })
            .map(product => {
              return (
                <div className="item" key={product.id}>
                  <Link to={`/detail-page/${product.id}`}>
                    <h3>{product.name}</h3>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width="35%"
                    />
                  </Link>
                  <p>{product.price} €</p>
                  <button onClick={() => props.incrementLike(product.id)}>
                    👍 {product.like}
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
