export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("the id of the item we just added to cart", action.payload);
      console.log("the price in the reducer is: ", action.payload.price);
      return [...state, { ...action.payload }];
    case "REMOVE_FROM_CART":
      console.log("this is the state when i want to remove a product: ", state);
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};
