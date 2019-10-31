export function addToCart(id, name) {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: id,
      name: name
    }
  };
}
