export default (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return action.category;

    default:
      return state;
  }
};
