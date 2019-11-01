// combine recucers here:
import { combineReducers } from "redux";
import shoppingcart from "./shoppingcart";
import productList from "./productList";
import wishlistReducer from "./wishlistReducer";
import popularity from "./popularity";

export default combineReducers({
  shoppingcart,
  productList,
  wishlistReducer,
  popularity
});
