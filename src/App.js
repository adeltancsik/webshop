import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductListContainer from "./components/ProductListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import AdminContainer from "./components/AdminContainer";
import DetailPageContainer from "./components/DetailPageContainer";
import TopHeaderContainer from "./components/TopHeaderContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopHeaderContainer />
        <Route exact path="/" component={ProductListContainer} />
        <Route path="/shopping-cart" component={ShoppingCartContainer} />
        <Route path="/admin" component={AdminContainer} />
        <Route path="/detail-page/:id" component={DetailPageContainer} />
      </div>
    </Provider>
  );
}

export default App;
