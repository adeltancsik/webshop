export default (state = [false], action = {}) => {
  switch (action.type) {
    case "SORT_POPULAR":
      return [true];
    default:
      return state;
  }
};
