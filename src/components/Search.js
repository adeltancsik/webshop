import React from 'react';
import {Link} from 'react-router-dom';
import {getProducts} from '../actions/productList';
import {connect} from 'react-redux';


let keyword = '';

class Search extends React.Component{
    
    
    handleChange = (event) => {
        console.log(event.target.value);
        keyword = event.target.value;
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log('keyword:',keyword);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' />
                <input type='submit' value='Search' />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
      products: state.productList
    };
  };
  
export default connect(mapStateToProps,{ getProducts })(Search);