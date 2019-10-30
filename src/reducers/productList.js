// import { productList } from "../actions/productList";

export default (state = [], action = {}) => {
  switch (action.type) {
    // case ADD_ALBUM:
    //   return [...state, { ...action.payload }];
    case "SET_PRODUCTS":
      return [...action.payload.products];
    default:
      return state;
  }
};
