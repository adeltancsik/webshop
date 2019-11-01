import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import FilteredByPopularity from "./FilteredByPopularity";

export default function ProductList(props) {
  if (props.popularity[0] === false) {
    return (
      <div>
        <main>
          <h2>ProductList</h2>
          <div>
            <button onClick={() => props.popular()}>
              Filter based on popularity
            </button>
          </div>
          <div className="productlist">
            {props.products.map(product => {
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
                    👍
                    {product.like}
                  </button>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <FilteredByPopularity
        products={props.products}
        incrementLike={props.incrementLike}
        popular={props.popular}
      />
    );
  }
}
