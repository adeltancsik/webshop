import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductListContainer from "./components/ProductListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import WishlistContainer from './components/WishlistContainer';
import AdminContainer from "./components/AdminContainer";
import DetailPageContainer from "./components/DetailPageContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={ProductListContainer} />
        <Route path="/shopping-cart" component={ShoppingCartContainer} />
        <Route path="/wishlist" component={WishlistContainer} />
        <Route path="/admin" component={AdminContainer} />
        <Route path="/detail-page/:id" component={DetailPageContainer} />
      </div>
    </Provider>
  );
}

export default App;
