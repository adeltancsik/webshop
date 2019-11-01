export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return [...action.payload.products];
    case "PRODUCT_DELETED_SUCCESS":
      return state.filter(product => product.id !== action.payload);
    case "PRODUCT_ADDED":
      return [...state, { ...action.payload }];
    case "ADD_LIKE":
      const newState = state.map(product => {
        if (action.payload.id === product.id) {
          product.like++;
        }
        return product;
      });
      state = newState;
      return [...newState];
    default:
      return state;
  }
};
