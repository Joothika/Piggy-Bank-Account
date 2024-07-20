const Card = ({ content, onClick }) => {
  return (
    <button
      className="flex w-64 cursor-pointer justify-center rounded-lg bg-gradient-to-tr from-green-400 to-teal-500 py-16 hover:translate-y-[-0.5rem]"
      onClick={onclick}
    >
      <h3 className="text-xl font-semibold uppercase tracking-wider text-stone-200">
        {content}
      </h3>
    </button>
  );
};

export default Card;
