import axios from "axios";

export const GET_CATEGORY = "GET_CATEGORY";

export function setCategory(category) {
  return {
    type: GET_CATEGORY,
    category
  };
}

export function loadCategory() {
  return function(dispatch) {
    axios
      .get(`http://localhost:4000/category`)
      .then(response => {
        dispatch(setCategory(response.data.category));
      })
      .catch(err => console.log(err));
  };
}
