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

export function productDeletedSuccess(id) {
  return {
    type: "PRODUCT_DELETED_SUCCESS",
    payload: id
  };
}

//
export function deleteProduct(id) {
  const result = prompt("are you sure?", "no");
  if (result === "yes") {
    return function(dispatch) {
      fetch(`http://localhost:4000/products/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => {
          dispatch(productDeletedSuccess(id));
        });
    };
  }
  return;
}

export function productAdded(id, categoryId, name, imageUrl, inStock, price) {
  return {
    type: "PRODUCT_ADDED",
    payload: id,
    categoryId,
    name,
    imageUrl,
    inStock,
    price
  };
}

export function addProduct(id, categoryId, name, imageUrl, inStock, price) {
  return function(dispatch) {
    fetch(`http://localhost:4000/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        categoryId: categoryId,
        name: name,
        imageUrl: imageUrl,
        inStock: inStock,
        price: price
      })
    })
      .then(res => res.json())
      .then(() => {
        dispatch(productAdded(id, categoryId, name, imageUrl, inStock, price));
      });
  };
}
