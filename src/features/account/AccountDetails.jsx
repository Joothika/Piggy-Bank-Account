import AccountHeader from "./AccountHeader";
import AccountBody from "./AccountBody";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Loan from "./Loan";
import PayLoanBack from "./PayLoanBack";

const AccountDetails = () => {
  return (
    <main className="w-full bg-white lg:w-9/12 xl:h-[100vh]">
      <AccountHeader />
      <section className="mx-auto mt-20 grid w-9/12 xl:grid-cols-2">
        <Deposit />
        <Withdraw />
        <Loan />
        <PayLoanBack />
      </section>
    </main>
  );
};

export default AccountDetails;
