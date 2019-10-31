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

export function removeFromCart(id, name, price) {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: id,
      name: name,
      price: price
    }
  };
}
