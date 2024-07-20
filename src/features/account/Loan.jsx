import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLoan } from "./accountSlice";

const Loan = () => {
  const [loanAmt, setLoanAmt] = useState("");
  const [loanstatment, setLoanStatement] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(requestLoan(loanAmt, loanstatment));
  }
  return (
    <section className="w-12/12 my-6 rounded-xl p-8 shadow-md shadow-teal-500 xl:mr-6">
      <h1 className="mb-6 font-semibold uppercase">Request Loan Amount</h1>
      <input
        type="number"
        className="mb-4 h-10 w-full rounded-md border border-green-500 indent-2 outline-none"
        value={loanAmt}
        onChange={(e) => setLoanAmt(+e.target.value)}
      />
      <textarea
        className="h-10 w-full rounded-md border border-green-500 indent-2 outline-none"
        value={loanstatment}
        onChange={(e) => setLoanStatement(e.target.value)}
      />
      <button
        className="mt-5 block w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:shadow-lg"
        onClick={() => handleClick()}
      >
        Request Loan
      </button>
    </section>
  );
};

export default Loan;
