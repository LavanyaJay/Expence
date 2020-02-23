import axios from "axios";

export const SET_CHARTDATA = "SET_CHARTDATA";

export function setChartData(chart) {
  return {
    type: SET_CHARTDATA,
    chart
  };
}

export function loadChartData(monthId) {
  monthId = parseInt(monthId);
  return function(dispatch) {
    axios
      .get(`http://localhost:4000/accounts/pie/${monthId}`)
      .then(response => {
        dispatch(setChartData(response.data.chart));
      })
      .catch(err => console.log(err));
  };
}
