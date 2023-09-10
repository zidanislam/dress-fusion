import React from "react";

const FeaturedFilter = ({ setActiveCat, activeCat }) => {
  return (
    <div className="flex justify-center my-10">
      <button
        className={`border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg ${
          activeCat === "all"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("all")}
      >
        All
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg ${
          activeCat === "men"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("men")}
      >
        Men
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg ${
          activeCat === "female"
            ? "bg-black text-white border "
            : "bg-white text-black border"
        }`}
        onClick={() => setActiveCat("female")}
      >
        Women
      </button>
      <button
        className={`border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg ${
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
