export function addLike(id) {
  return {
    type: "ADD_LIKE",
    payload: {
      id: id
    }
  };
}
export function sortByPopularity() {
  return {
    type: "SORT_POPULAR"
  };
}
