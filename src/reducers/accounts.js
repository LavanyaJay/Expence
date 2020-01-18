const initialState = {
  accounts: [],
  totalInc: 0,
  totalExp: 0
};
export default (state = initialState, action) => {
  if (action.type === "SET_ACCOUNT") {
    console.log("inreducer", action.account.type);
    action.account.type === "inc"
      ? (state.totalInc = state.totalInc + parseFloat(action.account.amount))
      : (state.totalExp = state.totalExp + parseFloat(action.account.amount));
    console.log("inc", state.totalInc);
    console.log("exp", state.totalExp);
    return {
      ...state,
      accounts: [...state.accounts, action.account],

      totalInc: state.totalInc,
      totalExp: state.totalExp
    };
  } else {
    return state;
  }
};
