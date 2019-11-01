import React from 'react';
import {getProducts} from '../actions/productList';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CategoryPage extends React.Component{


    render(){
        
        const categoryProducts = this.props.products.filter((product)=>{
            return product.categoryId.toString() === this.props.match.params.id
        })

        return(
            <div>
                <h1>Products under Category {this.props.match.params.id}</h1>
                {categoryProducts.map((product)=>{
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
                      )
                })}
            
            </div>

        )
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
  )(CategoryPage);