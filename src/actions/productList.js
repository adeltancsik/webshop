export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: {
      products
    }
  };
}

export function getProducts() {
  return function(dispatch, getState) {
    // if (getState().products.length !== 0) return;
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        dispatch(setProducts(data));
      });
  };
}
