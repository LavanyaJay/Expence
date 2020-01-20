import axios from "axios";

export const SET_CHARTDATA = "SET_CHARTDATA";

export function setChartData(chart) {
  return {
    type: SET_CHARTDATA,
    chart
  };
}

export function loadChartData() {
  return function(dispatch) {
    axios
      .get(`http://localhost:4000/accounts/pie`)
      .then(response => {
        console.log("in action: ", response.data);
        dispatch(setChartData(response.data.chart));
      })
      .catch(err => console.log(err));
  };
}
