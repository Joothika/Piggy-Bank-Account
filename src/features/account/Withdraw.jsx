import { useState } from "react";
import { useDispatch } from "react-redux";
import { withdraw } from "./accountSlice";

const Withdraw = () => {
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(withdraw(withdrawAmt));
    setWithdrawAmt("");
  }
  return (
    <section className="w-12/12 my-6 rounded-xl p-8 shadow-md shadow-teal-500 xl:ml-6">
      <h1 className="mb-6 font-semibold uppercase">Withdraw Amount</h1>
      <input
        type="number"
        className="h-10 w-full rounded-md border border-green-500 indent-2 outline-none"
        value={withdrawAmt}
        onChange={(e) => setWithdrawAmt(+e.target.value)}
      />
      <button
        className="mt-5 block w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:shadow-lg"
        onClick={() => handleClick()}
      >
        withdraw
      </button>
    </section>
  );
};

export default Withdraw;
