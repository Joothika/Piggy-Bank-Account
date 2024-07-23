import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto my-36 grid w-10/12 place-items-center gap-y-10 rounded-lg bg-slate-100 py-10 shadow-lg sm:w-4/6 md:w-3/6 xl:w-2/6">
      <img
        src="https://www.pngall.com/wp-content/uploads/1/Bank-PNG-HD.png"
        className="h-32 w-32 lg:h-56 lg:w-56"
      />
      <button
        className="rounded-md bg-gradient-to-r from-green-400 to-teal-500 px-10 py-2 text-lg font-semibold text-stone-800"
        onClick={() => navigate("/customer")}
      >
        Create new account &rarr;
      </button>
    </section>
  );
}

export default HomePage;
