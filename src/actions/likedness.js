export function addLike(id) {
  return {
    type: "ADD_LIKE",
    payload: {
      id: id
    }
  };
}
