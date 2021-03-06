import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductListContainer from "./components/ProductListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import WishlistContainer from "./components/WishlistContainer";
import AdminContainer from "./components/AdminContainer";
import EditContainer from "./components/EditContainer";
import DetailPageContainer from "./components/DetailPageContainer";
import { getProducts } from "./actions/productList";
import { connect } from "react-redux";
import CategoryPage from "./components/CategoryPage";
import SearchResult from "./components/SearchResult";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRoutes />
      </Provider>
    );
  }
}

class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ProductListContainer} />
        <Route path="/shopping-cart" component={ShoppingCartContainer} />
        <Route path="/wishlist" component={WishlistContainer} />
        <Route path="/admin" component={AdminContainer} />
        <Route path="/admin-edit/:id" component={EditContainer} />
        <Route path="/detail-page/:id" component={DetailPageContainer} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/keyword/:keyword" component={SearchResult} />
      </div>
    );
  }
}

const ConnectedRoutes = connect(
  () => ({}),
  { getProducts }
)(Routes);
