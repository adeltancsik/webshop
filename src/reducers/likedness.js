export default (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_LIKE":
      console.log("the item of this id has been liked", action.payload.id);
      return [...state, action.payload.id];
    default:
      return state;
  }
};
