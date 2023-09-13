import React from "react";

const FeaturedFilter = ({ setActiveCat, activeCat }) => {
  return (
    <div className="flex justify-center md:my-10 my-7">
      <button
        className={`border-black hover:bg-black hover:text-white md:mx-3 mx-1 py-2.5 px-5 md:text-base text-sm md:rounded-lg rounded-md ${
          activeCat === "all"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("all")}
      >
        All
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white md:mx-3 mx-1 py-2.5 px-5 md:text-base text-sm md:rounded-lg rounded-md ${
          activeCat === "men"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("men")}
      >
        Men
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white md:mx-3 mx-1 py-2.5 px-5 md:text-base text-sm md:rounded-lg rounded-md ${
          activeCat === "female"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("female")}
      >
        Women
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white md:mx-3 mx-1 py-2.5 px-5 md:text-base text-sm md:rounded-lg rounded-md ${
          activeCat === "kids"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("kids")}
      >
        Kids
      </button>
    </div>
  );
};

export default FeaturedFilter;
