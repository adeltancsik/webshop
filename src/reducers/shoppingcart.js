export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload }];
    case "REMOVE_FROM_CART":
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};
