const customerInitalState = {
  fullname: "",
  nationalId: "",
};

function customerReducer(state = customerInitalState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
      };
    default:
      return state;
  }
}

function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname,
      nationalId,
    },
  };
}

export { createCustomer };
export default customerReducer;
