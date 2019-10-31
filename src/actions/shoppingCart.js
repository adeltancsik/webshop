export function addToCart(id, name, price) {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: id,
      name: name,
      price: price
    }
  };
}
