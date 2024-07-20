import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "./accountSlice";

const Deposit = () => {
  const [depositAmt, setDepositAmt] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.account);
  function handleClick() {
    dispatch(deposit(depositAmt, currency));
    setDepositAmt("");
    setCurrency("USD");
  }
  return (
    <section className="w-12/12 my-6 rounded-xl p-8 shadow-md shadow-teal-500 xl:mr-6">
      <h1 className="mb-6 font-semibold uppercase">Deposit Amount</h1>
      <input
        type="number"
        className="h-10 w-64 rounded-md border border-green-500 indent-2 outline-none"
        value={depositAmt}
        onChange={(e) => setDepositAmt(+e.target.value)}
      />
      <select
        className="ml-2 h-10 w-20 border border-solid border-teal-500"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">Euro</option>
      </select>
      <button
        className="mt-5 block w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:shadow-lg"
        onClick={() => handleClick()}
        disabled={isLoading ? "Coverting..." : ""}
      >
        deposit
      </button>
    </section>
  );
};

export default Deposit;
