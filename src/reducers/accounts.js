export default (state = [], action) => {
  if (action.type === "SET_ACCOUNT") {
    return [...state, action.account];
  } else if (action.type === "GET_ACCOUNT") {
    return action.account;
  } else if (action.type === "DEL_ACCOUNT") {
    return state.filter(acc => acc.id !== action.id);
  } else {
    return state;
  }
};
