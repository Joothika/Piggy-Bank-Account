const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload.loan,
        balance: state.balance + action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/convertCurrency":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertCurrency" });
    const fetchAPI = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await fetchAPI.json();
    console.log(data);
    const converted = data.rates?.USD;
    console.log(converted);

    dispatch({ type: "account/deposit", payload: converted });
  };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(loan, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: {
      loan,
      loanPurpose,
    },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

export default accountReducer;
export { deposit, withdraw, requestLoan, payLoan };
