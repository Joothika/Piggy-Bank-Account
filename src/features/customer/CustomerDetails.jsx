import { useSelector } from "react-redux";

const CustomerDetails = () => {
  const { fullname } = useSelector((store) => store.customer);
  return (
    <>
      <aside className="hidden bg-gradient-to-b from-green-400 to-teal-500 lg:block lg:w-3/12">
        <h1 className="mx-6 my-4 text-2xl font-semibold tracking-wide text-stone-100">
          🏦 Piggy Bank
        </h1>
        <p className="text-sha my-6 px-10 text-2xl text-stone-100">
          Welcome {fullname} !!!
        </p>
      </aside>
    </>
  );
};

export default CustomerDetails;
