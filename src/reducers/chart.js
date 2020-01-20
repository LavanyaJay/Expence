export default (state = [], action) => {
  switch (action.type) {
    case "SET_CHARTDATA":
      return action.chart;
    default:
      return state;
  }
};
