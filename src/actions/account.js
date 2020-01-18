export const SET_ACCOUNT = "SET_ACCOUNT";

export function setAccount(account) {
  return {
    type: SET_ACCOUNT,
    account
  };
}

export function addAccount(type, desc, amount) {
  const accObj = { type: type, desc: desc, amount: amount };
  return function(dispatch) {
    dispatch(setAccount(accObj));
  };
}
