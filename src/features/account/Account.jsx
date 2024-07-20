import AccountDetails from "./AccountDetails";
import CustomerDetails from "../customer/CustomerDetails";

function Account() {
  return (
    <section className="flex">
      <CustomerDetails />
      <AccountDetails />
    </section>
  );
}

export default Account;
