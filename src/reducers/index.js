// combine recucers here:
import { combineReducers } from "redux";
import shoppingcart from "./shoppingcart";
import productList from "./productList";

export default combineReducers({
  shoppingcart,
  productList
});
