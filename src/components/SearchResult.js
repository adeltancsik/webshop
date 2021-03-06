import React from "react";
import { getProducts } from "../actions/productList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TopHeaderContainer from "./TopHeaderContainer";

class SearchResult extends React.Component {
  render() {
    const searchResults = this.props.products.filter(product => {
      return product.name.includes(this.props.match.params.keyword);
    });

    return (
      <div>
        <TopHeaderContainer />
        <h1>Your search results:</h1>

        {searchResults.map(product => {
          return (
            <li key={product.id}>
              <Link to={`/detail-page/${product.id}`}>
                <p>{product.name}</p>
                <img src={product.imageUrl} alt={product.name} width="60px" />
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productList
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(SearchResult);
