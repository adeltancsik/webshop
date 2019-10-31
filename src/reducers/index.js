// combine recucers here:
import { combineReducers } from "redux";
import shoppingcart from "./shoppingcart";
import productList from "./productList";
import wishlistReducer from './wishlistReducer';

export default combineReducers({
  shoppingcart,
  productList,
  wishlistReducer
});
