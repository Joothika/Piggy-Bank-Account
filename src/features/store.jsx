import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import customerReducer, { createCustomer } from "./customer/customerSlice";
import accountReducer, {
  deposit,
  payLoan,
  requestLoan,
} from "./account/accountSlice";

// const root = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(root);

const root = {
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
};

const store = configureStore(root);

console.log(store.getState());

export default store;
