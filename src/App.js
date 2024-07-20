import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "../public/index.css";
import store from "./features/store";
import HomePage from "./pages/HomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCustomer from "./features/customer/CreateCustomer";
import Account from "./features/account/Account";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer" element={<CreateCustomer />} />
            <Route path="/customer/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
