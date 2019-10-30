import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductListContainer from "./components/ProductListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import AdminContainer from "./components/AdminContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={ProductListContainer} />
        <Route path="/shopping-cart" component={ShoppingCartContainer} />
        <Route path="/admin" component={AdminContainer} />
      </div>
    </Provider>
  );
}

export default App;
