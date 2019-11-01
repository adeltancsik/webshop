import React from 'react';
import {Link} from 'react-router-dom';
import {getProducts} from '../actions/productList';
import {connect} from 'react-redux';

class CategoryNavbar extends React.Component{
    render(){
        return(
        <div>
            <Link products={this.props.products} to={`/category/${1}`}>Category 1</Link>{' '}
            <Link to={`/category/${2}`}>Category 2</Link>{' '}
            <Link to={`/category/${3}`}>Category 3</Link>{' '}
            <Link to={`/category/${4}`}>Category 4</Link>
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
  )(CategoryNavbar);