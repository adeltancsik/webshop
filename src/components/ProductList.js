import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import SortByPrice from './SortByPrice';

export default class ProductList extends React.Component {
  state = {
    sorting: false
  }
  
  sorting = (newarray) => {
     this.props.product = newarray;
     this.setState({
       sorting: true
     })
  }

  render(){
  return (
    <div>
      <main>
        <h2>ProductList</h2>
        <SortByPrice products={this.props.products}/>

        <div className="productlist">
          {this.props.products.map(product => {
            return (
              <div className="item" key={product.id}>
                <Link to={`/detail-page/${product.id}`}>
                  <h3>{product.name}</h3>
                  <img src={product.imageUrl} alt={product.name} width="35%" />
                </Link>
                <p>{product.price} €</p>
                <button onClick={() => this.props.incrementLike(product.id)}>
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
}
