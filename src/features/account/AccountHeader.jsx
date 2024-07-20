import { useSelector } from "react-redux";

const AccountHeader = () => {
  const { balance } = useSelector((store) => store.account);
  const { fullname } = useSelector((store) => store.customer);
  return (
    <>
      <h1 className="p-10 text-2xl font-semibold text-teal-500 lg:hidden">
        Welcome {fullname} 😃
      </h1>
      <h1 className="float-right mr-6 text-xl font-semibold lg:mt-6 lg:text-4xl">
        Balance : $ {balance}
      </h1>
    </>
  );
};

export default AccountHeader;
