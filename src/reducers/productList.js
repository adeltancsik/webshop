export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return [...action.payload.products];
    case "PRODUCT_DELETED_SUCCESS":
      return state.filter(product => product.id !== action.payload);
    case "PRODUCT_ADDED":
      console.log("{ ...action.payload }", { ...action.payload });
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
