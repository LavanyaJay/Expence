import axios from "axios";
export const SET_ACCOUNT = "SET_ACCOUNT";
export const DEL_ACCOUNT = "DEL_ACCOUNT";
export const GET_ACCOUNT = "GET_ACCOUNT";

export function setAccount(account) {
  return {
    type: SET_ACCOUNT,
    account
  };
}

export function addAccount(category, remark, amount, date) {
  return function(dispatch) {
    const data = { ac_amount: amount, ac_date: date, ac_remark: remark };
    axios
      .post(`http://localhost:4000/cat/${category}/account`, data)
      .then(response => {
        response.data["category_id"] = response.data.category.id;

        dispatch(setAccount(response.data));
      })
      .catch(err => console.log(err));
  };
}

export function getAccount(account) {
  return {
    type: GET_ACCOUNT,
    account
  };
}

export function loadAccount(date) {
  return function(dispatch) {
    axios
      .get(`http://localhost:4000/date/${date}/accounts`)
      .then(response => {
        dispatch(getAccount(response.data.account));
      })
      .catch(err => console.log(err));
  };
}

export function removeAccount(id) {
  return {
    type: DEL_ACCOUNT,
    id
  };
}

export function delAccount(id) {
  return function(dispatch) {
    axios
      .delete(`http://localhost:4000/accounts/${id}`)
      .then(response => {
        dispatch(removeAccount(id));
      })
      .catch(err => console.log(err));
  };
}
