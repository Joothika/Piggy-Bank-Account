import { useDispatch, useSelector } from "react-redux";
import { payLoan } from "./accountSlice";

const PayLoanBack = () => {
  const { loan, loanPurpose } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(payLoan());
  }
  return (
    <section className="w-12/12 my-6 rounded-xl p-8 shadow-md shadow-teal-500 xl:ml-6">
      <h1 className="mb-6 font-semibold uppercase">Pay Loan Amount</h1>
      {loan && loanPurpose && (
        <>
          <h3 className="my-4 text-lg">Loan Amount : {loan}</h3>
          <p className="my-4 text-lg">Loan Purpose : {loanPurpose}</p>
        </>
      )}
      {!loan && !loanPurpose && (
        <p className="my-4 text-lg">
          You can request loan. Since there is no loan you had..
        </p>
      )}
      <button
        className="mt-10 block w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:shadow-lg"
        onClick={() => handleClick()}
      >
        Pay Loan Back
      </button>
    </section>
  );
};

export default PayLoanBack;
