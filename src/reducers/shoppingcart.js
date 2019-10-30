export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("the id of the item we just added to cart", action.payload);
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};
