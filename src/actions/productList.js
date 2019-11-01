export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: {
      products
    }
  };
}

export function getProducts() {
  return function(dispatch) {
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
  return function(dispatch) {
    dispatch({
      type: "DEFAULT"
    });
  };
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

export function addProduct(categoryId, name, imageUrl, inStock, price, id) {
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
      .then(res => {
        console.log("res", res);
        return res.json();
      })
      .then(resJson => {
        console.log("resJson", resJson);
        dispatch(productAdded(id, categoryId, name, imageUrl, inStock, price));
      });
  };
}

export function productChanged(id, categoryId, name, imageUrl, inStock, price) {
  return {
    type: "PRODUCT_CHANGED",
    payload: id,
    categoryId,
    name,
    imageUrl,
    inStock,
    price
  };
}

export function changeProduct(categoryId, name, imageUrl, inStock, price, id) {
  return function(dispatch) {
    fetch(`http://localhost:4000/products`, {
      method: "PUT",
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
      .then(res => {
        console.log("res", res);
        return res.json();
      })
      .then(resJson => {
        console.log("resJson", resJson);
        dispatch(
          productChanged(id, categoryId, name, imageUrl, inStock, price)
        );
      });
  };
}
