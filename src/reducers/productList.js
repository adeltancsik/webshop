// import { productList } from "../actions/productList";

export default (state = [], action = {}) => {
  switch (action.type) {
    // case ADD_ALBUM:
    //   return [...state, { ...action.payload }];
    case "SET_PRODUCTS":
      return [...action.payload.products];
    case "PRODUCT_DELETED_SUCCESS":
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};
