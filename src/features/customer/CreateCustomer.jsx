import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(createCustomer(name, id));
    navigate("/customer/account");
  }

  return (
    <section className="mx-auto my-36 w-5/6 rounded-lg bg-white p-10 sm:w-4/6 lg:w-4/12">
      <header className="mb-8">
        <h1 className="text-lg font-medium uppercase tracking-wider text-teal-500">
          create your account
        </h1>
      </header>
      <main>
        <label htmlFor="name" className="text-sm tracking-wide">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="mb-4 mt-4 block h-10 w-full rounded-md border border-green-500 indent-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="nationalId" className="mb-6 text-sm tracking-wide">
          Your National Id
        </label>
        <input
          type="text"
          id="nationalId"
          className="mb-4 mt-4 block h-10 w-full rounded-md border border-green-500 indent-2 outline-none"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {name && id && (
          <button
            className="text-smtext-stone-800 mt-2 rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-8 py-2 text-white hover:shadow-lg"
            onClick={() => handleClick()}
          >
            create
          </button>
        )}
      </main>
    </section>
  );
}

export default CreateCustomer;
